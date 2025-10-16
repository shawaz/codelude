"use client";

import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

export default function TestPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white pt-16">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Test Page</h1>
        
        <section className="flex justify-center">
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
          >
            <span>Test Button</span>
          </HoverBorderGradient>
        </section>
      </div>
    </div>
  );
}
