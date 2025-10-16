import React from 'react'
import { WobbleCard } from './ui/wobble-card';
import { Laptop, Palette, Smartphone, Tv } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="container mx-auto p-4 py-16">
      <h1 className="text-3xl sm:text-4xl font-bold text-center uppercase mb-8 sm:mb-12">Services</h1>

        <ServiceCard />
    </section>
  );
}

export function ServiceCard() {
  return (
    <div id="services" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-7xl mx-auto w-full py-6">

      <WobbleCard containerClassName="col-span-1 sm:col-span-2 lg:col-span-3 h-full bg-orange-800 min-h-[200px] sm:min-h-[500px] lg:min-h-[300px]" className="">
        <Laptop className="w-8 h-8 sm:w-10 sm:h-10 text-white mb-4" />
      <h2 className="max-w-80 text-left text-balance text-lg sm:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Web Application
        </h2>
        <p className="mt-4 max-w-[26rem] text-left text-sm sm:text-base text-neutral-200">
          We build websites and web applications for businesses and organizations.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 sm:col-span-1 lg:col-span-2 min-h-[300px] sm:min-h-[400px]">
        <Smartphone className="w-8 h-8 sm:w-10 sm:h-10 text-white mb-4" />
        <h2 className="max-w-80 text-left text-balance text-lg sm:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Mobile Application
        </h2>
        <p className="mt-4 max-w-[26rem] text-left text-sm sm:text-base text-neutral-200">
          We build mobile applications for businesses and organizations.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 sm:col-span-1 lg:col-span-2 min-h-[300px] sm:min-h-[400px]">
        <Tv className="w-8 h-8 sm:w-10 sm:h-10 text-white mb-4" />
        <h2 className="max-w-80 text-left text-balance text-lg sm:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Digital Marketing
        </h2>
        <p className="mt-4 max-w-[26rem] text-left text-sm sm:text-base text-neutral-200">
          We help businesses and organizations grow their online presence through digital marketing.
        </p>
      </WobbleCard>
        <WobbleCard containerClassName="col-span-1 sm:col-span-2 lg:col-span-3 h-full bg-orange-800 min-h-[400px] sm:min-h-[500px] lg:min-h-[300px]" className="">
            <Palette className="w-8 h-8 sm:w-10 sm:h-10 text-white mb-4" />
      <h2 className="max-w-80 text-left text-balance text-lg sm:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Digital Content
        </h2>
        <p className="mt-4 max-w-[26rem] text-left text-sm sm:text-base text-neutral-200">
          We help businesses and organizations grow their online presence through digital marketing.
        </p>
      </WobbleCard>
      
     
    </div>
  );
}
