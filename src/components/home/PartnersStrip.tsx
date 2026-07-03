"use client";

import { useEffect, useRef } from "react";

export default function PartnersStrip() {
  const partners = [
    { name: "ATHER" },
    { name: "BOSCH" },
    { name: "TVS" },
    { name: "AMARON" },
    { name: "CEAT" },
    { name: "EXIDE" },
    { name: "UNO MINDA" }
  ];

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollTo = direction === "left" 
        ? scrollLeft - clientWidth / 2 
        : scrollLeft + clientWidth / 2;
      
      scrollContainerRef.current.scrollTo({
        left: scrollTo,
        behavior: "smooth"
      });
    }
  };

  // Auto-scroll loop
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollContainerRef.current.scrollTo({
            left: scrollLeft + clientWidth / 3,
            behavior: "smooth"
          });
        }
      }
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 border-y border-borders bg-surface w-full px-6 lg:px-12 relative overflow-hidden transition-all duration-300">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-4">
        <button 
          onClick={() => scroll("left")}
          className="text-neutral-gray hover:text-primary transition-all duration-300 text-lg p-2.5 rounded-full hover:bg-background border border-transparent hover:border-borders hover:scale-105 active:scale-95 shrink-0"
          aria-label="Scroll left"
        >
          ◀
        </button>
        
        <div 
          ref={scrollContainerRef}
          className="flex-1 overflow-x-auto [&::-webkit-scrollbar]:hidden flex items-center gap-12 sm:gap-16 py-2 scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {/* Duplicating the items twice for smooth scrolling loop */}
          {[...partners, ...partners, ...partners].map((partner, idx) => (
            <div 
              key={idx} 
              className="font-general-sans text-base sm:text-lg md:text-xl lg:text-2xl font-black tracking-widest italic text-neutral-gray/60 hover:text-[#BFFF07] transition-all duration-300 cursor-default select-none uppercase shrink-0 px-4"
            >
              {partner.name}
            </div>
          ))}
        </div>

        <button 
          onClick={() => scroll("right")}
          className="text-neutral-gray hover:text-primary transition-all duration-300 text-lg p-2.5 rounded-full hover:bg-background border border-transparent hover:border-borders hover:scale-105 active:scale-95 shrink-0"
          aria-label="Scroll right"
        >
          ▶
        </button>
      </div>
    </section>
  );
}
