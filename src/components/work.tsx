"use client";

import { Carousel } from "@/components/ui/apple-cards-carousel";


const carouselItems = [
  <div key={1} className="h-[420px] sm:h-[520px] w-[300px] sm:w-[380px] md:h-[580px] md:w-[420px] bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-6 sm:p-8 text-white">
    <h3 className="text-2xl font-bold mb-4">Hubcv</h3>
    <p className="text-lg opacity-90">Skill based networking and career development platform.</p>
  </div>,
  <div key={2} className="h-[420px] sm:h-[520px] w-[300px] sm:w-[380px] md:h-[580px] md:w-[420px] bg-gradient-to-br from-green-500 to-blue-600 rounded-3xl p-6 sm:p-8 text-white">
    <h3 className="text-2xl font-bold mb-4">Franchiseen</h3>
    <p className="text-lg opacity-90">Small business investment made easy with blockchain technology.</p>
  </div>,
  <div key={3} className="h-[420px] sm:h-[520px] w-[300px] sm:w-[380px] md:h-[580px] md:w-[420px] bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl p-6 sm:p-8 text-white">
    <h3 className="text-2xl font-bold mb-4">Dextrip</h3>
    <p className="text-lg opacity-90">Automize yout crypto trade with indicators and bots.</p>
  </div>,
  <div key={4} className="h-[420px] sm:h-[520px] w-[300px] sm:w-[380px] md:h-[580px] md:w-[420px] bg-gradient-to-br from-yellow-500 to-orange-600 rounded-3xl p-6 sm:p-8 text-white">
    <h3 className="text-2xl font-bold mb-4">SXE</h3>
    <p className="text-lg opacity-90">Personal Development and financial tracker with crypto integration.</p>
  </div>,
  <div key={5} className="h-[420px] sm:h-[520px] w-[300px] sm:w-[380px] md:h-[580px] md:w-[420px] bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl p-6 sm:p-8 text-white">
    <h3 className="text-2xl font-bold mb-4">Yestate</h3>
    <p className="text-lg opacity-90">Real estate purchase and sale made easy with crypto.</p>
  </div>,
  <div key={6} className="h-[420px] sm:h-[520px] w-[300px] sm:w-[380px] md:h-[580px] md:w-[420px] bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl p-6 sm:p-8 text-white">
  <h3 className="text-2xl font-bold mb-4">Cuestay</h3>
  <p className="text-lg opacity-90">Continue staying with daily property rental and best in class hospitality.</p>
</div>,

];

export default function WorkSection() {
  return (
    <section id="work" className="container mx-auto px-4 py-16">
      <h1 className="text-3xl sm:text-4xl font-bold text-center uppercase mb-8 sm:mb-12">Projects</h1>
      <div className="max-w-7xl mx-auto">
        <Carousel items={carouselItems} />
      </div>
    </section>
  );
}
