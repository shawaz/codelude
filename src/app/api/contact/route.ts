import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { validateContactSubmission } from '@/lib/contact-validation';

const WINDOW_MS = 10 * 60 * 1_000;
const MAX_REQUESTS_PER_IP = 5;
const MAX_BODY_BYTES = 20_000;
const requests = new Map<string, number[]>();

const INTERESTS = new Set([
  'Investing in Codelude',
  'Partnering on Roborns',
  'Partnering on Franchiseen',
  'Partnering on HubCV',
  'Partnering on Cuestay',
  'Technical consultation',
  'Press / Media',
  'Something else',
]);

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  })[character] ?? character);
}

function clientIp(request: NextRequest): string {
  const runtimeIp = (request as NextRequest & { ip?: string }).ip;
  return runtimeIp
    || request.headers.get('x-vercel-forwarded-for')?.split(',')[0]?.trim()
    || 'unknown';
}

function rateLimited(ip: string): boolean {
  const now = Date.now();
  if (requests.size > 10_000) {
    for (const [key, timestamps] of requests) {
      if (!timestamps.some((time) => now - time < WINDOW_MS)) requests.delete(key);
    }
  }
  const recent = (requests.get(ip) ?? []).filter((time) => now - time < WINDOW_MS);
  if (recent.length >= MAX_REQUESTS_PER_IP) {
    requests.set(ip, recent);
    return true;
  }
  recent.push(now);
  requests.set(ip, recent);
  return false;
}

async function saveToHq(data: { name: string; email: string; interest: string; message: string }) {
  const url = process.env.HQ_LEADS_URL;
  const allowedHost = process.env.HQ_LEADS_HOST;
  if (!url || !allowedHost) return false;
  const destination = new URL(url);
  if (destination.protocol !== 'https:' || destination.hostname !== allowedHost) {
    throw new Error('HQ lead intake destination is not allowlisted');
  }

  const response = await fetch(destination, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      venture: process.env.HQ_LEAD_VENTURE,
      segment: process.env.HQ_LEAD_SEGMENT,
      name: data.name,
      email: data.email,
      interest: data.interest,
      message: data.message,
      source: 'codelude.com/contact',
      submissionId: crypto.randomUUID(),
    }),
    signal: AbortSignal.timeout(8_000),
    redirect: 'error',
  });

  if (!response.ok) throw new Error(`HQ lead intake returned ${response.status}`);
  return true;
}

async function notifyByEmail(data: { name: string; email: string; interest: string; message: string }) {
  if (!process.env.RESEND_API_KEY) return false;
  const resend = new Resend(process.env.RESEND_API_KEY);
  const name = escapeHtml(data.name);
  const email = escapeHtml(data.email);
  const interest = escapeHtml(data.interest);
  const message = escapeHtml(data.message).replace(/\n/g, '<br/>');
  const subject = `New contact: ${data.name} — ${data.interest}`
    .replace(/[\r\n\u0000-\u001f\u007f]/g, ' ')
    .slice(0, 200);

  const result = await resend.emails.send({
    from: 'Codelude <noreply@codelude.com>',
    to: [process.env.NOTIFY_EMAIL || 'codelude@gmail.com'],
    replyTo: data.email,
    subject,
    html: `<div style="font-family:monospace;background:#0a0a08;color:#f5f3ee;padding:32px;max-width:600px">
      <div style="font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#c8f53a;margin-bottom:24px">New contact from codelude.com</div>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <p><strong>Interest:</strong> ${interest}</p>
      <p><strong>Message:</strong><br/>${message}</p>
    </div>`,
  });

  if (result.error) throw new Error(result.error.message);
  return true;
}

class BodyTooLargeError extends Error {}

async function readJsonBody(request: NextRequest): Promise<Record<string, unknown>> {
  const declaredLength = request.headers.get('content-length');
  if (declaredLength && (!/^\d+$/.test(declaredLength) || Number(declaredLength) > MAX_BODY_BYTES)) {
    throw new BodyTooLargeError();
  }

  const reader = request.body?.getReader();
  if (!reader) throw new Error('Missing request body');
  const chunks: Uint8Array[] = [];
  let total = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    total += value.byteLength;
    if (total > MAX_BODY_BYTES) {
      await reader.cancel();
      throw new BodyTooLargeError();
    }
    chunks.push(value);
  }
  const bytes = new Uint8Array(total);
  let offset = 0;
  for (const chunk of chunks) {
    bytes.set(chunk, offset);
    offset += chunk.byteLength;
  }
  const parsed: unknown = JSON.parse(new TextDecoder().decode(bytes));
  if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) throw new Error('Invalid request body');
  return parsed as Record<string, unknown>;
}

export async function POST(request: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await readJsonBody(request);
  } catch (error) {
    if (error instanceof BodyTooLargeError) {
      return NextResponse.json({ error: 'Request is too large.' }, { status: 413 });
    }
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  if (typeof body.interest !== 'string' || !INTERESTS.has(body.interest)) {
    return NextResponse.json({ error: 'Invalid interest.' }, { status: 400 });
  }
  const interest = body.interest;
  const validation = validateContactSubmission({
    name: body.name,
    email: body.email,
    message: body.message,
    website: body.website,
    startedAt: body.startedAt,
  });
  if (!validation.ok) {
    // Do not reveal which anti-spam rule matched to automated submitters.
    return NextResponse.json({ error: 'We could not accept this submission.' }, { status: 400 });
  }

  if (rateLimited(clientIp(request))) {
    return NextResponse.json({ error: 'Too many submissions. Please try again later.' }, { status: 429 });
  }

  const data = { ...validation, interest };
  let hqSaved = false;
  let emailSent = false;
  try {
    hqSaved = await saveToHq(data);
  } catch (error) {
    console.error('[contact] HQ intake failed', error);
  }
  if (!hqSaved) {
    return NextResponse.json({ error: 'Contact service is not configured.' }, { status: 503 });
  }

  try {
    emailSent = await notifyByEmail(data);
  } catch (error) {
    console.error('[contact] notification failed', error);
  }

  return NextResponse.json({ ok: true, notificationSent: emailSent }, { status: 201 });
}
