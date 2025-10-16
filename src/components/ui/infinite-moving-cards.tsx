"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [failedLogos, setFailedLogos] = useState<Record<string, boolean>>({});

  const toLogoSlug = (name: string): string => {
    // Normalize common names to expected filenames
    const base = name
      .toLowerCase()
      .replace(/\+/g, "plus")
      .replace(/&/g, "and")
      .replace(/\s+\/\s+/g, "-")
      .replace(/\s+\|\s+/g, "-")
      .replace(/\s*&\s*/g, "-")
      .replace(/\s+/g, "-")
      .replace(/[().]/g, "")
      .replace(/\//g, "-");

    // Specific adjustments
    if (base.startsWith("next")) return "nextjs";
    if (base.startsWith("node")) return "nodejs";
    if (base === "shadcn-ui" || base === "shadcn/ui" || base === "shadcn") return "shadcn";
    if (base === "tailwind-css") return "tailwindcss";
    if (base === "google-analytics" || base === "ga") return "google-analytics";
    if (base === "google-ads") return "google-ads";
    if (base === "twitter" || base === "x") return "twitter-x";
    return base;
  };

  const [start, setStart] = useState(false);
  
  useEffect(() => {
    const getDirection = () => {
      if (containerRef.current) {
        if (direction === "left") {
          containerRef.current.style.setProperty(
            "--animation-direction",
            "forwards",
          );
        } else {
          containerRef.current.style.setProperty(
            "--animation-direction",
            "reverse",
          );
        }
      }
    };

    const getSpeed = () => {
      if (containerRef.current) {
        if (speed === "fast") {
          containerRef.current.style.setProperty("--animation-duration", "60s");
        } else if (speed === "normal") {
          containerRef.current.style.setProperty("--animation-duration", "90s");
        } else {
          containerRef.current.style.setProperty("--animation-duration", "150s");
        }
      }
    };

    function addAnimation() {
      if (containerRef.current && scrollerRef.current) {
        const scrollerContent = Array.from(scrollerRef.current.children);

        // Duplicate items once to create a seamless loop of 200% width
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          if (scrollerRef.current) {
            scrollerRef.current.appendChild(duplicatedItem);
          }
        });

        getDirection();
        getSpeed();
        setStart(true);
      }
    }
    
    addAnimation();
  }, [direction, speed]);
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item) => (
          <li
            className="relative w-[200px] max-w-full shrink-0 rounded-xl border border-zinc-200 bg-[linear-gradient(180deg,#fafafa,#f5f5f5)] px-4 py-3 dark:border-zinc-700 dark:bg-[linear-gradient(180deg,#27272a,#18181b)]"
            key={item.name}
          >
            <div className="flex items-center gap-3">
              {/* Logo from /public/logos with graceful fallback */}
              {(() => {
                const slug = toLogoSlug(item.name);
                const src = `/logos/${slug}.svg`;
                if (!failedLogos[slug]) {
                  return (
                    <Image
                      src={src}
                      alt={`${item.name} logo`}
                      width={32}
                      height={32}
                      className="w-8 h-8 rounded-lg object-contain bg-transparent"
                      onError={() => setFailedLogos((s) => ({ ...s, [slug]: true }))}
                    />
                  );
                }
                return (
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                    {item.name.charAt(0)}
                  </div>
                );
              })()}
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-neutral-800 dark:text-gray-100">
                  {item.name}
                </span>
                <span className="text-xs text-neutral-500 dark:text-gray-400">
                  {item.title}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
