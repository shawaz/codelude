import { AnimatedTestimonials } from "./ui/animated-testimonials";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "I love this product! It has made my life so much easier.",
      name: "Sharfraz Sharif",
      designation: "Dextrip - Founder",
      src: "/reviews/sharfraz.png",
    },
    {
      quote: "Amazing service and support. Highly recommended!",
      name: "Jane Smith",
      designation: "CTO",
      src: "/reviews/rob.jpg",
    },
    {
      quote: "The best investment we've made for our business.",
      name: "Mike Johnson",
      designation: "Founder",
      src: "/reviews/ozil.jpg",
    },
  ];
  return (
    <section id="testimonials">
      <h2 className="text-4xl font-bold text-center uppercase my-12">Testimonials</h2>
      <AnimatedTestimonials testimonials={testimonials} />
    </section>
  );
}