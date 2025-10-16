import { cn } from "@/lib/utils";
import { Bus, Factory, Store, Building, Camera, Heart, Book, CreditCard } from "lucide-react";

export default function Industries() {
    return (
      <section id="industries" className="container mx-auto px-4 py-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-center uppercase mb-8 sm:mb-12">Industries</h1>
          <IndustryCard />
      </section>
    );
  } 

export function IndustryCard() {
  const features = [
    {
      title: "Healthcare",
      description:
        "We build healthcare applications for hospitals and clinics.",
      icon: <Heart />,
    },
    {
      title: "Education",
      description:
        "We build education applications for schools and universities.",
      icon: <Book />,
    },
    {
      title: "Finance",
      description:
        "We build finance applications for banks and financial institutions.",
      icon: <CreditCard />,
    },
    {
      title: "Retail",
      description: "We build retail applications for stores and malls.",
      icon: <Store />,
    },
    {
      title: "Manufacturing",
      description: "We build manufacturing applications for factories and warehouses.",
      icon: <Factory />,
    },
    {
      title: "Transportation",
      description:
        "We build transportation applications for buses and trains.",
      icon: <Bus />,
    },
    {
      title: "Entertainment",
      description:
        "We build entertainment applications for movies and TV shows.",
      icon: <Camera />,
    },
    {
      title: "Real Estate",
      description: "We build real estate applications for properties and buildings.",
      icon: <Building />,
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px relative z-10 py-6 sm:py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-orange-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
