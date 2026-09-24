export type ContactSubmission = {
  name: unknown;
  email: unknown;
  message: unknown;
  website?: unknown;
  startedAt?: unknown;
};

export type ContactValidationResult =
  | { ok: true; name: string; email: string; message: string }
  | { ok: false; code: 'honeypot' | 'too_fast' | 'invalid_email' | 'invalid_name' | 'low_quality' | 'spam'; reason: string };

const MIN_SUBMISSION_MS = 3_000;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
const URL_RE = /https?:\/\//gi;

function text(value: unknown): string {
  return typeof value === 'string' ? value.trim() : '';
}

function hasMeaningfulMessage(message: string): boolean {
  const letters = message.match(/[a-z]/gi)?.length ?? 0;
  const uniqueLetters = new Set(message.toLowerCase().match(/[a-z]/g) ?? []).size;
  return letters >= 8 && uniqueLetters >= 4;
}

export function validateContactSubmission(
  input: ContactSubmission,
  nowMs = Date.now(),
): ContactValidationResult {
  if (text(input.website)) {
    return { ok: false, code: 'honeypot', reason: 'Automated submission detected.' };
  }

  const startedAt = typeof input.startedAt === 'number' ? input.startedAt : Number(input.startedAt);
  if (!Number.isFinite(startedAt) || nowMs - startedAt < MIN_SUBMISSION_MS) {
    return { ok: false, code: 'too_fast', reason: 'Please take a moment to complete the form.' };
  }

  const name = text(input.name);
  const email = text(input.email).toLowerCase();
  const message = text(input.message);

  if (name.length < 2 || name.length > 120 || /[\u0000-\u001f\u007f]/.test(name)) {
    return { ok: false, code: 'invalid_name', reason: 'Please provide a valid name.' };
  }
  if (!EMAIL_RE.test(email) || email.length > 254) {
    return { ok: false, code: 'invalid_email', reason: 'Please provide a valid email address.' };
  }
  if (message.length < 20 || message.length > 5_000 || !hasMeaningfulMessage(message)) {
    return { ok: false, code: 'low_quality', reason: 'Please include a little more detail in your message.' };
  }
  if ((message.match(URL_RE) ?? []).length >= 3 || /(.)\1{7,}/.test(message)) {
    return { ok: false, code: 'spam', reason: 'This submission could not be accepted.' };
  }

  return { ok: true, name, email, message };
}
