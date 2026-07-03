import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function SparePartsGrid() {
  const categories = [
    {
      title: "Battery & Chargers",
      products: "34 Products",
      description: "High-density packs, smart chargers & regulators.",
      image: "/products/Battery & Chargers.png",
      link: "/accessories?cat=batteries"
    },
    {
      title: "Motor & Controller",
      products: "28 Products",
      description: "CNC fin controllers & brushless motors.",
      image: "/products/moterColotroller.png",
      link: "/accessories?cat=spare-parts"
    },
    {
      title: "Brakes",
      products: "18 Products",
      description: "Hydraulic levers, calipers & high-friction pads.",
      image: "/products/brakes.png",
      link: "/accessories?cat=spare-parts"
    },
    {
      title: "Tyres & Wheels",
      products: "22 Products",
      description: "Anti-slip tubeless tyres & CNC alloy rims.",
      image: "/products/teirs.png",
      link: "/accessories?cat=spare-parts"
    },
    {
      title: "Electrical Parts",
      products: "45 Products",
      description: "Digital clusters, projector headlights & horns.",
      image: "/products/Electrical Part.png",
      link: "/accessories?cat=spare-parts"
    },
    {
      title: "Accessories",
      products: "53 Products",
      description: "Anti-theft locks, phone mounts & mudguards.",
      image: "/products/Accessories.png",
      link: "/accessories?cat=gear"
    }
  ];

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Update button visibility based on scroll position
  const updateScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 5);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
    }
  };

  const getScrollAmount = () => {
    if (scrollContainerRef.current) {
      const { clientWidth } = scrollContainerRef.current;
      let cardWidth = clientWidth; // Mobile default
      
      if (window.innerWidth >= 1024) {
        cardWidth = (clientWidth - 72) / 4; // 4 cards on desktop (3 gaps of 24px)
      } else if (window.innerWidth >= 768) {
        cardWidth = (clientWidth - 48) / 3; // 3 cards on tablet (2 gaps of 24px)
      } else if (window.innerWidth >= 640) {
        cardWidth = (clientWidth - 24) / 2; // 2 cards on small screens (1 gap of 24px)
      }
      
      return cardWidth + 24; // Card width + 24px gap
    }
    return 300;
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = getScrollAmount();
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", updateScrollButtons);
      updateScrollButtons();
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", updateScrollButtons);
      }
    };
  }, []);

  // Automatic scrolling
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        // If we reached the end, wrap back to start, otherwise scroll right by exactly one card width + gap
        if (scrollLeft + clientWidth >= scrollWidth - 15) {
          scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          const scrollAmount = getScrollAmount();
          scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
      }
    }, 4500); // Scroll every 4.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-12 pb-24 sm:pt-16 sm:pb-32 w-full px-6 lg:px-12 bg-background border-t border-borders transition-colors duration-300">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end mb-16">
          <div className="md:col-span-8">
            <span className="font-general-sans text-[10px] font-bold text-[#BFFF07] tracking-widest uppercase block mb-3">SHOP</span>
            <h2 className="font-general-sans text-3xl sm:text-4xl lg:text-[45px] font-black leading-tight uppercase tracking-tight text-primary transition-colors duration-300">
              Premium EV <span className="text-[#BFFF07]">Spare Parts</span>
            </h2>
            <p className="font-sans text-xs sm:text-sm text-neutral-gray mt-4 leading-relaxed font-light transition-colors duration-300">
              Explore parts for maximum performance & safety.
            </p>
          </div>
          <div className="md:col-span-4 flex md:justify-end">
            <Link 
              href="/accessories" 
              className="inline-flex items-center gap-2 border border-borders hover:border-primary px-6 py-2.5 rounded-full font-general-sans text-[10px] font-extrabold uppercase tracking-wider hover:bg-surface text-primary transition-all duration-300"
            >
              View All Parts
              <span>➔</span>
            </Link>
          </div>
        </div>

        {/* Scrollable Row */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory scroll-smooth pb-6"
        >
          {categories.map((cat, idx) => (
            <Link
              key={idx}
              href={cat.link}
              className="w-full sm:w-[calc((100%-1.5rem)/2)] md:w-[calc((100%-3rem)/3)] lg:w-[calc((100%-4.5rem)/4)] flex-shrink-0 bg-surface rounded-2xl border border-borders overflow-hidden flex flex-col justify-between group hover:border-[#BFFF07]/20 hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)] dark:hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all duration-300 min-h-[280px] snap-start"
            >
              {/* Compact Image Container */}
              <div className="relative w-full h-[140px] overflow-hidden bg-background/50 flex items-center justify-center">
                <Image 
                  src={cat.image} 
                  alt={cat.title} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-105" 
                />
              </div>
              
              {/* Compact Details & Button Container */}
              <div className="p-4 flex-1 flex flex-col justify-between bg-surface text-center">
                <div>
                  <h3 className="font-general-sans text-xs sm:text-sm font-black uppercase text-primary group-hover:text-[#BFFF07] transition-colors duration-300">
                    {cat.title}
                  </h3>
                  <p className="font-sans text-[10px] text-neutral-gray leading-relaxed font-light mt-0.5 line-clamp-1">
                    {cat.description}
                  </p>
                </div>
                
                <div className="flex items-center justify-between mt-2 pt-2 border-t border-borders/60 w-full text-[9px] font-bold uppercase tracking-wider">
                  <span className="text-[#BFFF07] bg-[#BFFF07]/10 dark:bg-[#BFFF07]/5 px-2 py-0.5 rounded-sm">
                    {cat.products}
                  </span>
                  <span className="inline-flex items-center gap-1 text-primary group-hover:text-[#BFFF07] transition-colors duration-300">
                    EXPLORE ➔
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Carousel Buttons at Bottom Center */}
        <div className="flex justify-center items-center gap-4 mt-10">
          <button 
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className="w-11 h-11 rounded-full border border-borders bg-surface flex items-center justify-center text-primary disabled:opacity-40 hover:border-primary disabled:hover:border-borders transition-colors shadow-xs"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className="w-11 h-11 rounded-full border border-borders bg-surface flex items-center justify-center text-primary disabled:opacity-40 hover:border-primary disabled:hover:border-borders transition-colors shadow-xs"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
