"use client"

// minimal footer
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export default function Footer() {
  return (
    <footer className="border-t border-border mt-20">
      <div className="max-w-7xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 items-center">
        <div className="text-sm text-center sm:text-left text-muted-foreground">
        <p>© {new Date().getFullYear()} Codelude Technologies Pvt. Ltd.</p>
        </div>

        <div className="justify-self-center text-sm text-muted-foreground flex items-center gap-2">
        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:underline">Instagram</a>
        <span>·</span>
        <a href="https://x.com" target="_blank" rel="noreferrer" className="hover:underline">X</a>
        <span>·</span>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a>
        </div>


        <div className="justify-self-center mb-16 sm:mb-0 sm:justify-self-end text-center sm:text-right text-sm text-muted-foreground">
          
          <div className="mt-2 flex gap-3 justify-center sm:justify-end">
            <a href="/terms" className="hover:underline">Terms</a>
            <span>·</span>
            <a href="/privacy" target="_blank" rel="noreferrer" className="hover:underline">Privacy</a>
            <span>·</span>
            <a href="/cookie" target="_blank" rel="noreferrer" className="hover:underline">Cookie</a>
          </div>
        </div>
      </div>

      {/* Mobile-only Request a Quote - Fixed footer bar */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 px-4 pb-[calc(1rem+env(safe-area-inset-bottom))] pt-3 bg-white/90 dark:bg-black/90 backdrop-blur border-t border-border">
        <Sheet>
          <SheetTrigger asChild>
            <Button className="w-full h-12">Request a Quote</Button>
          </SheetTrigger>
          <SheetContent side="bottom" className="h-[90vh] w-full p-4 overflow-y-auto">
            <SheetHeader>
              <SheetTitle className="text-xl font-bold text-center">Tell us about your project</SheetTitle>
            </SheetHeader>
            <form
              className="mt-6 grid grid-cols-1 gap-4"
              onSubmit={async (e) => {
                e.preventDefault();
                const form = e.currentTarget as HTMLFormElement;
                const formData = new FormData(form);
                const needs = formData.getAll("need") as string[];
                const res = await fetch("/api/quote", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    needs,
                    details: formData.get("details"),
                    budget: formData.get("budget"),
                    deadline: formData.get("deadline"),
                    name: formData.get("name"),
                    company: formData.get("company"),
                    email: formData.get("email"),
                    phone: formData.get("phone"),
                    source: formData.get("source"),
                  }),
                });
                alert(res.ok ? "Submitted!" : "Submission failed");
              }}
            >
              <div>
                <label className="block text-sm font-medium mb-2">What do you need? *</label>
                <div className="grid grid-cols-1 gap-3">
                  <label className="flex items-center gap-2 text-sm"><input name="need" value="Build an App" type="checkbox" className="size-4" />Build an App</label>
                  <label className="flex items-center gap-2 text-sm"><input name="need" value="Build a Website" type="checkbox" className="size-4" />Build a Website</label>
                  <label className="flex items-center gap-2 text-sm"><input name="need" value="Build Digital Content" type="checkbox" className="size-4" />Build Digital Content</label>
                  <label className="flex items-center gap-2 text-sm"><input name="need" value="Digital Marketing & Automation" type="checkbox" className="size-4" />Digital Marketing & Automation</label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">What are the objectives, requirements and functionalities of this product? *</label>
                <textarea name="details" className="w-full rounded-md border border-border bg-transparent p-3" rows={4} placeholder="You can list down everything in point form or just paragraphs. It's completely up to you." />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Do you have a budget? *</label>
                <input name="budget" className="w-full rounded-md border border-border bg-transparent p-3" placeholder="What's your estimated cost?" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Estimated launch date</label>
                <input name="deadline" className="w-full rounded-md border border-border bg-transparent p-3" placeholder="Deadline?" />
              </div>

              <div>
                <h3 className="text-lg font-semibold">How do we get in touch?</h3>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Your name *</label>
                <input name="name" className="w-full rounded-md border border-border bg-transparent p-3" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Company</label>
                <input name="company" className="w-full rounded-md border border-border bg-transparent p-3" placeholder="Company" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email *</label>
                <input name="email" type="email" className="w-full rounded-md border border-border bg-transparent p-3" placeholder="you@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone</label>
                <input name="phone" className="w-full rounded-md border border-border bg-transparent p-3" placeholder="+1 555 000 0000" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">How did you find us?</label>
                <select name="source" className="w-full rounded-md border border-border bg-transparent p-3">
                  <option className="bg-background">Google</option>
                  <option className="bg-background">LinkedIn</option>
                  <option className="bg-background">X/Twitter</option>
                  <option className="bg-background">Friend/Referral</option>
                  <option className="bg-background">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Captcha</label>
                <input className="w-full rounded-md border border-border bg-transparent p-3" placeholder="Type: I am human" />
              </div>
              <div className="flex flex-col gap-2">
                <SheetTrigger asChild>
                  <Button variant="ghost" className="w-full">Cancel</Button>
                </SheetTrigger>
                <Button type="submit" className="w-full">Submit</Button>
              </div>
            </form>
          </SheetContent>
        </Sheet>
      </div>
    </footer>
  );
}


