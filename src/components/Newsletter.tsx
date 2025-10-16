"use client";

import { useState } from "react";
import { Button } from "./ui/button";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus(null);
    const res = await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    setStatus(res.ok ? "Subscribed!" : "Failed. Try again.");
  }

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="max-w-xl mx-auto rounded-xl border p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-semibold mb-2 text-center">Subscribe to our newsletter</h3>
        <p className="text-sm text-muted-foreground mb-4 text-center">Get updates about launches, articles and case studies.</p>
        <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-2 items-stretch sm:items-center">
          <input
            type="email"
            required
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 rounded-md border border-border bg-transparent py-2 px-4 text-sm"
          />
          <Button  type="submit" className="w-full sm:w-auto">Subscribe</Button>
        </form>
        {status && <p className="mt-2 text-sm text-center">{status}</p>}
      </div>
    </section>
  );
}


