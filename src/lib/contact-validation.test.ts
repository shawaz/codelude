import { describe, expect, it } from 'vitest';
import { validateContactSubmission } from './contact-validation';

const valid = {
  name: 'Ada Lovelace',
  email: 'ada@example.com',
  message: 'I would like to discuss a technical partnership for our infrastructure team.',
  website: '',
  startedAt: 1_000,
};

describe('validateContactSubmission', () => {
  it('accepts a legitimate enquiry', () => {
    expect(validateContactSubmission(valid, 6_000)).toMatchObject({ ok: true });
  });

  it('rejects the honeypot', () => {
    expect(validateContactSubmission({ ...valid, website: 'https://spam.example' }, 6_000)).toMatchObject({
      ok: false,
      code: 'honeypot',
    });
  });

  it('rejects submissions completed too quickly', () => {
    expect(validateContactSubmission(valid, 2_000)).toMatchObject({
      ok: false,
      code: 'too_fast',
    });
  });

  it('rejects malformed email addresses', () => {
    expect(validateContactSubmission({ ...valid, email: 'not-an-email' }, 6_000)).toMatchObject({
      ok: false,
      code: 'invalid_email',
    });
  });

  it('rejects meaningless short messages', () => {
    expect(validateContactSubmission({ ...valid, message: 'asdf' }, 6_000)).toMatchObject({
      ok: false,
      code: 'low_quality',
    });
  });

  it('flags obvious automated link spam', () => {
    expect(validateContactSubmission({
      ...valid,
      message: 'buy now https://a.example https://b.example https://c.example https://d.example',
    }, 6_000)).toMatchObject({
      ok: false,
      code: 'spam',
    });
  });
});
