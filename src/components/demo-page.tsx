"use client";

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Carousel } from "@/components/ui/apple-cards-carousel";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a6.048 6.048 0 01-1.5 0m1.5-2.383a6.048 6.048 0 00-1.5 0m0 0V9.75m0 0a6.048 6.048 0 011.5 0"
        />
      </svg>
    ),
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
        />
      </svg>
    ),
  },
];

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    designation: "Author",
    src: "/testimonial1.jpg",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    designation: "Playwright",
    src: "/testimonial2.jpg",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    designation: "Poet",
    src: "/testimonial3.jpg",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    designation: "Novelist",
    src: "/testimonial4.jpg",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    designation: "Author",
    src: "/testimonial5.jpg",
  },
];

const carouselItems = [
  <div key={1} className="h-[400px] w-[350px] bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 text-white">
    <h3 className="text-2xl font-bold mb-4">Project 1</h3>
    <p className="text-lg opacity-90">A beautiful gradient card with amazing effects</p>
  </div>,
  <div key={2} className="h-[400px] w-[350px] bg-gradient-to-br from-green-500 to-blue-600 rounded-3xl p-8 text-white">
    <h3 className="text-2xl font-bold mb-4">Project 2</h3>
    <p className="text-lg opacity-90">Another stunning card with smooth animations</p>
  </div>,
  <div key={3} className="h-[400px] w-[350px] bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl p-8 text-white">
    <h3 className="text-2xl font-bold mb-4">Project 3</h3>
    <p className="text-lg opacity-90">Creative design with modern aesthetics</p>
  </div>,
];

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white pt-16">
      

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12 space-y-16">
        

        {/* Bento Grid */}
        <section>
          <h2 className="text-4xl font-bold text-center mb-12">Technologies</h2>
          <BentoGrid className="max-w-4xl mx-auto">
            {items.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={item.header}
                icon={item.icon}
                className={item.className}
              />
            ))}
          </BentoGrid>
        </section>

        {/* Projects Carousel */}
        <section>
          <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
          <Carousel items={carouselItems} />
        </section>

        {/* Testimonials */}
        <section>
          <h2 className="text-4xl font-bold text-center mb-12">Testimonials</h2>
          <AnimatedTestimonials testimonials={testimonials} />
        </section>
      </div>
    </div>
  );
}
