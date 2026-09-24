"use client";

import { useEffect, useState } from "react";

const interests = [
  "Investing in Codelude",
  "Partnering on Roborns",
  "Partnering on Franchiseen",
  "Partnering on HubCV",
  "Partnering on Cuestay",
  "Technical consultation",
  "Press / Media",
  "Something else",
];

type State = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [startedAt, setStartedAt] = useState<number>(0);
  const [state, setState] = useState<State>("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState(interests[0]);
  const [message, setMessage] = useState("");

  useEffect(() => setStartedAt(Date.now()), []);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, interest, message, website: "", startedAt }),
      });
      setState(response.ok ? "success" : "error");
    } catch {
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-6">
        <p className="font-semibold text-green-600 dark:text-green-400">Message received.</p>
        <p className="mt-2 text-sm text-muted-foreground">Thanks {name}. We&apos;ll be in touch soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {state === "error" && (
        <p role="alert" className="rounded-md border border-red-500/30 bg-red-500/5 p-3 text-sm text-red-600 dark:text-red-400">
          Something went wrong. Please try again or email hello@codelude.com directly.
        </p>
      )}
      <div className="absolute -left-[10000px] h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <label className="block text-sm font-medium" htmlFor="contact-name">Name
        <input id="contact-name" className="mt-2 w-full rounded-md border border-border bg-transparent p-3" value={name} onChange={(event) => setName(event.target.value)} required maxLength={120} />
      </label>
      <label className="block text-sm font-medium" htmlFor="contact-email">Email
        <input id="contact-email" type="email" className="mt-2 w-full rounded-md border border-border bg-transparent p-3" value={email} onChange={(event) => setEmail(event.target.value)} required maxLength={254} />
      </label>
      <label className="block text-sm font-medium" htmlFor="contact-interest">I&apos;m interested in
        <select id="contact-interest" className="mt-2 w-full rounded-md border border-border bg-background p-3" value={interest} onChange={(event) => setInterest(event.target.value)}>
          {interests.map((option) => <option key={option}>{option}</option>)}
        </select>
      </label>
      <label className="block text-sm font-medium" htmlFor="contact-message">Message
        <textarea id="contact-message" className="mt-2 w-full rounded-md border border-border bg-transparent p-3" rows={6} value={message} onChange={(event) => setMessage(event.target.value)} required minLength={20} maxLength={5000} />
      </label>
      <button className="rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground disabled:opacity-60" type="submit" disabled={state === "sending"}>
        {state === "sending" ? "Sending..." : "Send message →"}
      </button>
    </form>
  );
}
