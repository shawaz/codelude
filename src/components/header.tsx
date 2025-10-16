"use client";
import Link from 'next/link'
import React, { useState } from 'react'
import { ThemeToggle } from './theme-toggle'
import Image from 'next/image'
import { Button } from './ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 w-full">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className='flex items-center gap-2 md:gap-4'>
              <Image src="/advfut.svg" alt="Logo" width={35} height={35} className="w-auto h-6" />
              <span className="text-black text-lg md:text-xl uppercase font-extrabold dark:text-white hover:text-orange-500 dark:hover:text-orange-500">ADVFUT</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center">
            <ul className="flex items-center space-x-6">
                <li className="text-black text-sm uppercase font-bold dark:text-white hover:text-orange-500 dark:hover:text-orange-500">
                    <Link href="#work">Projects</Link>
                </li>
                <li className="text-black text-sm uppercase font-bold dark:text-white hover:text-orange-500 dark:hover:text-orange-500">
                    <Link href="#services">Services</Link>
                </li>
                <li className="text-black text-sm uppercase font-bold dark:text-white hover:text-orange-500 dark:hover:text-orange-500">
                    <Link href="#technologies">Technologies</Link>
                </li>
                <li className="text-black text-sm uppercase font-bold dark:text-white hover:text-orange-500 dark:hover:text-orange-500">
                    <Link href="#industries">Industries</Link>
                </li>
            </ul>
          </nav>

          {/* Desktop Theme Toggle & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Sheet>
              <SheetTrigger asChild>
                <Button className="text-sm">Request a Quote</Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:max-w-3xl p-4 sm:p-6 overflow-y-auto max-h-screen">
                <SheetHeader>
                  <SheetTitle className="text-xl sm:text-2xl font-bold text-center">Tell us about your project</SheetTitle>
                </SheetHeader>
                <form
                  className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4"
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
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-2">What do you need? *</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <label className="flex items-center gap-2 text-sm"><input name="need" value="Build an App" type="checkbox" className="size-4" />Build an App</label>
                      <label className="flex items-center gap-2 text-sm"><input name="need" value="Build a Website" type="checkbox" className="size-4" />Build a Website</label>
                      <label className="flex items-center gap-2 text-sm"><input name="need" value="Build Digital Content" type="checkbox" className="size-4" />Build Digital Content</label>
                      <label className="flex items-center gap-2 text-sm"><input name="need" value="Digital Marketing & Automation" type="checkbox" className="size-4" />Digital Marketing & Automation</label>
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-2">What are the objectives, requirements and functionalities of this product? *</label>
                    <textarea name="details" className="w-full rounded-md border border-border bg-transparent p-3" rows={4} placeholder="You can list down everything in point form or just paragraphs. It's completely up to you." />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-2">Do you have a budget? *</label>
                    <input name="budget" className="w-full rounded-md border border-border bg-transparent p-3" placeholder="What's your estimated cost?" />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-2">Estimated launch date</label>
                    <input name="deadline" className="w-full rounded-md border border-border bg-transparent p-3" placeholder="Deadline?" />
                  </div>

                  <div className="md:col-span-2">
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
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-2">How did you find us?</label>
                    <select name="source" className="w-full rounded-md border border-border bg-transparent p-3">
                      <option className="bg-background">Google</option>
                      <option className="bg-background">LinkedIn</option>
                      <option className="bg-background">X/Twitter</option>
                      <option className="bg-background">Friend/Referral</option>
                      <option className="bg-background">Other</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-2">Captcha</label>
                    <input className="w-full rounded-md border border-border bg-transparent p-3" placeholder="Type: I am human" />
                  </div>
                  <div className="md:col-span-2 flex flex-col sm:flex-row justify-end gap-2">
                    <SheetTrigger asChild>
                      <Button variant="ghost" className="w-full sm:w-auto">Cancel</Button>
                    </SheetTrigger>
                    <Button type="submit" className="w-full sm:w-auto">Submit</Button>
                  </div>
                </form>
              </SheetContent>
            </Sheet>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-black dark:text-white"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-black">
            <nav className="px-4 py-4 space-y-4">
              <Link 
                href="#work" 
                className="block text-black text-sm uppercase font-bold dark:text-white hover:text-orange-500 dark:hover:text-orange-500 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Projects
              </Link>
              <Link 
                href="#services" 
                className="block text-black text-sm uppercase font-bold dark:text-white hover:text-orange-500 dark:hover:text-orange-500 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="#technologies" 
                className="block text-black text-sm uppercase font-bold dark:text-white hover:text-orange-500 dark:hover:text-orange-500 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Technologies
              </Link>
              <Link 
                href="#industries" 
                className="block text-black text-sm uppercase font-bold dark:text-white hover:text-orange-500 dark:hover:text-orange-500 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Industries
              </Link>
              <div className="pt-4">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button className="w-full">Request a Quote</Button>
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
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}