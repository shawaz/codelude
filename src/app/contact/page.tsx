import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 pb-20 pt-32 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <section>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">Get in touch</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Be part of what&apos;s next.</h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Whether you&apos;re an investor, strategic partner, or looking for technical help, tell us what you want to discuss.
          </p>
          <div className="mt-10 max-w-xl rounded-xl border p-6 sm:p-8">
            <ContactForm />
          </div>
        </section>
        <aside className="space-y-6 lg:pt-16">
          <div className="rounded-xl border p-6">
            <h2 className="text-lg font-semibold">Direct channels</h2>
            <dl className="mt-5 space-y-4 text-sm">
              <div className="flex justify-between gap-4 border-b border-border pb-3"><dt className="text-muted-foreground">Email</dt><dd>hello@codelude.com</dd></div>
              <div className="flex justify-between gap-4 border-b border-border pb-3"><dt className="text-muted-foreground">HQ timezone</dt><dd>IST (UTC+5:30)</dd></div>
              <div className="flex justify-between gap-4"><dt className="text-muted-foreground">Engineering</dt><dd>Mangaluru, India</dd></div>
            </dl>
          </div>
          <div className="rounded-xl border p-6">
            <h2 className="text-lg font-semibold">Investment and partnerships</h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Qualified investors and technical partners can use the form to request a conversation. Please include enough context for us to route your enquiry correctly.
            </p>
          </div>
        </aside>
      </div>
    </main>
  );
}
