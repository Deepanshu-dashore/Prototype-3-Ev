"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "../../context/ThemeContext";
import SpecsGrid from "./SpecsGrid";

export default function ScooterShowcase() {
  const { theme } = useTheme();
  const scrollRef = useRef<HTMLDivElement>(null);

  const [selectedColors, setSelectedColors] = useState({
    zikoOne: "dark",
    zikoLite: "blue",
    zikoGo: "blue",
    zikoMax: "blue"
  });

  const [wishlistState, setWishlistState] = useState({
    zikoOne: false,
    zikoLite: false,
    zikoGo: false,
    zikoMax: false
  });

  useEffect(() => {
    try {
      const stored = localStorage.getItem("ziko_wishlist");
      if (stored) {
        const items = JSON.parse(stored);
        setWishlistState({
          zikoOne: items.some((item: any) => item.id === "ziko-one"),
          zikoLite: items.some((item: any) => item.id === "ziko-lite"),
          zikoGo: items.some((item: any) => item.id === "ziko-go"),
          zikoMax: items.some((item: any) => item.id === "ziko-max")
        });
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  const getStateKey = (id: string) => {
    if (id === "ziko-one") return "zikoOne";
    if (id === "ziko-lite") return "zikoLite";
    if (id === "ziko-go") return "zikoGo";
    return "zikoMax";
  };

  const toggleWishlist = (id: string, name: string, price: number, image: string, badgeText: string, specs: any[]) => {
    if (localStorage.getItem("ziko_logged_in") !== "true") {
      alert("Please login to add to wishlist/favorites!");
      window.dispatchEvent(new Event("open-login-modal"));
      return;
    }
    try {
      const stored = localStorage.getItem("ziko_wishlist");
      let items = stored ? JSON.parse(stored) : [];
      const isCurrentlyWishlisted = wishlistState[getStateKey(id)];

      if (isCurrentlyWishlisted) {
        items = items.filter((item: any) => item.id !== id);
        setWishlistState(prev => ({
          ...prev,
          [getStateKey(id)]: false
        }));
      } else {
        const product = {
          id,
          name,
          price,
          image,
          description: id === "ziko-one" 
            ? "Flagship high-performance model with advanced cobalt speed regulators." 
            : id === "ziko-lite"
            ? "Standard lightweight alloy model with high-range cells."
            : id === "ziko-go"
            ? "Lite weight entry model with integrated bluetooth bus."
            : "Ultra premium model with dual motors, carbon-composite body, and dynamic active suspension.",
          badge: { text: badgeText, type: id === "ziko-one" ? "premium" as const : id === "ziko-lite" ? "new" as const : id === "ziko-go" ? "spec" as const : "premium" as const },
          specs,
          category: "scooter" as const
        };
        items.push(product);
        setWishlistState(prev => ({
          ...prev,
          [getStateKey(id)]: true
        }));
      }

      localStorage.setItem("ziko_wishlist", JSON.stringify(items));
      window.dispatchEvent(new Event("wishlist-update"));
    } catch (err) {
      console.error(err);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      const scrollAmount = 360; // Card width + gap
      const scrollTo = direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="pt-20 pb-4 sm:pt-24 sm:pb-6 lg:pt-28 lg:pb-8 w-full px-4 lg:px-6 bg-slate-50 transition-colors duration-300 relative z-10">
      {/* Specs Highlights Strip */}
      <SpecsGrid />

      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Heading, Subtitle, CTA */}
          <div className="lg:col-span-3 flex flex-col justify-start items-start text-left lg:pt-[56px]">
            <span className="font-sans text-[11px] font-extrabold text-[#4F46E5] tracking-widest uppercase block mb-3">
              OUR PREMIUM SCOOTERS
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl lg:text-[42px] font-black leading-[1.1] uppercase tracking-tight text-slate-900 mb-5">
              Ride the Future with <br />
              Ziko <span className="text-[#8ac400] font-black">EV</span>
            </h2>
            <p className="font-sans text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
              Engineered for performance. Built for comfort. Made for India.
            </p>
            
            <Link 
              href="/scooter" 
              className="inline-flex items-center gap-2 border border-slate-300 hover:border-slate-900 px-6 py-2.5 rounded-[8px] font-sans text-[11px] font-extrabold uppercase tracking-wider hover:bg-white text-slate-800 transition-all duration-300 mt-8"
            >
              View All Scooters
              <span className="text-xs">➔</span>
            </Link>
          </div>

          {/* Right Column: Carousel Container */}
          <div className="lg:col-span-9 relative flex flex-col">
            
            {/* Navigation Arrows Top Right */}
            <div className="flex justify-end gap-2 mb-6">
              <button 
                onClick={() => scroll("left")}
                className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center text-slate-700 hover:bg-slate-200 active:scale-95 transition-all"
                aria-label="Previous scooters"
              >
                <span className="text-sm font-bold">‹</span>
              </button>
              <button 
                onClick={() => scroll("right")}
                className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center text-slate-700 hover:bg-slate-200 active:scale-95 transition-all"
                aria-label="Next scooters"
              >
                <span className="text-sm font-bold">›</span>
              </button>
            </div>

            {/* Slider Row */}
            <div 
              ref={scrollRef}
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              className="flex overflow-x-auto gap-6 pt-4 pb-6 -mt-4 scroll-smooth snap-x snap-mandatory scrollbar-none"
            >
              
              {/* Card 1: ZIKO ONE */}
              <div className="min-w-[280px] sm:min-w-[310px] md:min-w-[320px] flex-1 bg-white rounded-[24px] border border-slate-200 p-6 flex flex-col justify-between group shadow-[0_8px_30px_rgba(0,0,0,0.02)] hover:border-[#4F46E5]/40 hover:shadow-[0_20px_40px_rgba(79,70,229,0.08)] hover:-translate-y-1.5 transition-all duration-300 relative snap-start">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <div className="bg-slate-100/90 rounded-[6px] px-3.5 py-1.5 font-sans text-[9px] font-black uppercase tracking-wider text-slate-800">
                      Ziko One
                    </div>
                    {/* Wishlist Heart Button */}
                    <button
                      onClick={() => toggleWishlist(
                        "ziko-one",
                        "Ziko One",
                        124999,
                        selectedColors.zikoOne === "blue" ? "/products/bike blue.webp" : selectedColors.zikoOne === "grey" ? "/products/bike gray.png" : selectedColors.zikoOne === "white" ? "/products/bike white.png" : "/products/bike dark.png",
                        "Flagship Model",
                        [
                          { label: "Range", value: "120 KM" },
                          { label: "Top Speed", value: "75 km/h" },
                          { label: "Charging", value: "3.5 Hrs" }
                        ]
                      )}
                      className="p-2 rounded-full bg-slate-50 text-slate-800 border border-slate-100 hover:scale-110 active:scale-95 shadow-sm transition-all duration-300"
                      aria-label={wishlistState.zikoOne ? "Remove from wishlist" : "Add to wishlist"}
                    >
                      <svg
                        className={`w-3.5 h-3.5 transition-all duration-300 ${wishlistState.zikoOne ? "fill-red-500 stroke-red-500" : "fill-none stroke-current"}`}
                        viewBox="0 0 24 24"
                        strokeWidth="2.5"
                      >
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                    </button>
                  </div>

                  {/* Scooter Product Image */}
                  <div className="relative w-full h-[155px] my-3 flex items-center justify-center transition-transform duration-500 scale-[1.1] group-hover:scale-[1.15]">
                    <Image 
                      src={selectedColors.zikoOne === "blue" ? "/products/bike blue.webp" : selectedColors.zikoOne === "grey" ? "/products/bike gray.png" : selectedColors.zikoOne === "white" ? "/products/bike white.png" : "/products/bike dark.png"} 
                      alt="Ziko One Electric Scooter" 
                      fill 
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 330px"
                      className="object-contain" 
                    />
                  </div>

                  {/* Color swatches */}
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <button 
                      onClick={() => setSelectedColors(prev => ({...prev, zikoOne: "blue"}))}
                      style={{ backgroundColor: "#0f1e36" }}
                      className={`w-2.5 h-2.5 rounded-full border border-slate-300/50 transition-all ${selectedColors.zikoOne === "blue" ? "ring-2 ring-offset-2 ring-slate-400" : ""}`}
                      aria-label="Navy Blue"
                    />
                    <button 
                      onClick={() => setSelectedColors(prev => ({...prev, zikoOne: "grey"}))}
                      style={{ backgroundColor: "#4b5563" }}
                      className={`w-2.5 h-2.5 rounded-full border border-slate-300/50 transition-all ${selectedColors.zikoOne === "grey" ? "ring-2 ring-offset-2 ring-slate-400" : ""}`}
                      aria-label="Slate Grey"
                    />
                    <button 
                      onClick={() => setSelectedColors(prev => ({...prev, zikoOne: "dark"}))}
                      style={{ backgroundColor: "#111827" }}
                      className={`w-2.5 h-2.5 rounded-full border border-slate-300/50 transition-all ${selectedColors.zikoOne === "dark" ? "ring-2 ring-offset-2 ring-slate-400" : ""}`}
                      aria-label="Dark Slate"
                    />
                  </div>

                  {/* Specs Row */}
                  <div className="grid grid-cols-3 py-3 text-center my-4 divide-x divide-slate-100">
                    <div className="px-1">
                      <span className="block font-sans text-xs sm:text-sm font-extrabold text-slate-900">120 KM</span>
                      <span className="block text-[8px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">Range</span>
                    </div>
                    <div className="px-1">
                      <span className="block font-sans text-xs sm:text-sm font-extrabold text-slate-900">75 km/h</span>
                      <span className="block text-[8px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">Top Speed</span>
                    </div>
                    <div className="px-1">
                      <span className="block font-sans text-xs sm:text-sm font-extrabold text-slate-900">3.5 Hrs</span>
                      <span className="block text-[8px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">Charging</span>
                    </div>
                  </div>
                </div>

                {/* Price & Action */}
                <div className="flex items-center justify-between pt-2">
                  <div>
                    <span className="block font-sans text-base sm:text-lg font-black text-slate-900">₹1,24,999</span>
                  </div>
                  <Link 
                    href="/rent/ziko-one" 
                    className="border border-slate-200 hover:border-[#4F46E5] hover:bg-[#4F46E5] hover:text-white text-slate-800 font-sans text-[10px] font-extrabold uppercase tracking-wider px-5 py-2.5 rounded-[8px] flex items-center gap-1.5 transition-all duration-300"
                  >
                    Explore Now
                    <span className="text-xs">➔</span>
                  </Link>
                </div>
              </div>

              {/* Card 2: ZIKO LITE */}
              <div className="min-w-[280px] sm:min-w-[310px] md:min-w-[320px] flex-1 bg-white rounded-[24px] border border-slate-200 p-6 flex flex-col justify-between group shadow-[0_8px_30px_rgba(0,0,0,0.02)] hover:border-[#4F46E5]/40 hover:shadow-[0_20px_40px_rgba(79,70,229,0.08)] hover:-translate-y-1.5 transition-all duration-300 relative snap-start">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <div className="bg-slate-100/90 rounded-[6px] px-3.5 py-1.5 font-sans text-[9px] font-black uppercase tracking-wider text-slate-800">
                      Ziko Lite
                    </div>
                    {/* Wishlist Heart Button */}
                    <button
                      onClick={() => toggleWishlist(
                        "ziko-lite",
                        "Ziko Lite",
                        99999,
                        selectedColors.zikoLite === "blue" ? "/products/bike blue.webp" : selectedColors.zikoLite === "grey" ? "/products/bike gray.png" : selectedColors.zikoLite === "yellow" ? "/products/bike yellow.png" : "/products/bike white.png",
                        "Standard Model",
                        [
                          { label: "Range", value: "95 KM" },
                          { label: "Top Speed", value: "65 km/h" },
                          { label: "Charging", value: "4 Hrs" }
                        ]
                      )}
                      className="p-2 rounded-full bg-slate-50 text-slate-800 border border-slate-100 hover:scale-110 active:scale-95 shadow-sm transition-all duration-300"
                      aria-label={wishlistState.zikoLite ? "Remove from wishlist" : "Add to wishlist"}
                    >
                      <svg
                        className={`w-3.5 h-3.5 transition-all duration-300 ${wishlistState.zikoLite ? "fill-red-500 stroke-red-500" : "fill-none stroke-current"}`}
                        viewBox="0 0 24 24"
                        strokeWidth="2.5"
                      >
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                    </button>
                  </div>

                  {/* Scooter Product Image */}
                  <div className="relative w-full h-[155px] my-3 flex items-center justify-center transition-transform duration-500 scale-[1.1] group-hover:scale-[1.15]">
                    <Image 
                      src={selectedColors.zikoLite === "blue" ? "/products/bike blue.webp" : selectedColors.zikoLite === "grey" ? "/products/bike gray.png" : selectedColors.zikoLite === "yellow" ? "/products/bike yellow.png" : "/products/bike white.png"} 
                      alt="Ziko Lite Electric Scooter" 
                      fill 
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 330px"
                      className="object-contain" 
                    />
                  </div>

                  {/* Color swatches */}
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <button 
                      onClick={() => setSelectedColors(prev => ({...prev, zikoLite: "blue"}))}
                      style={{ backgroundColor: "#0f1e36" }}
                      className={`w-2.5 h-2.5 rounded-full border border-slate-300/50 transition-all ${selectedColors.zikoLite === "blue" ? "ring-2 ring-offset-2 ring-slate-400" : ""}`}
                      aria-label="Navy Blue"
                    />
                    <button 
                      onClick={() => setSelectedColors(prev => ({...prev, zikoLite: "grey"}))}
                      style={{ backgroundColor: "#4b5563" }}
                      className={`w-2.5 h-2.5 rounded-full border border-slate-300/50 transition-all ${selectedColors.zikoLite === "grey" ? "ring-2 ring-offset-2 ring-slate-400" : ""}`}
                      aria-label="Slate Grey"
                    />
                    <button 
                      onClick={() => setSelectedColors(prev => ({...prev, zikoLite: "yellow"}))}
                      style={{ backgroundColor: "#5c4033" }}
                      className={`w-2.5 h-2.5 rounded-full border border-slate-300/50 transition-all ${selectedColors.zikoLite === "yellow" ? "ring-2 ring-offset-2 ring-slate-400" : ""}`}
                      aria-label="Brown/Bronze"
                    />
                  </div>

                  {/* Specs Row */}
                  <div className="grid grid-cols-3 py-3 text-center my-4 divide-x divide-slate-100">
                    <div className="px-1">
                      <span className="block font-sans text-xs sm:text-sm font-extrabold text-slate-900">95 KM</span>
                      <span className="block text-[8px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">Range</span>
                    </div>
                    <div className="px-1">
                      <span className="block font-sans text-xs sm:text-sm font-extrabold text-slate-900">65 km/h</span>
                      <span className="block text-[8px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">Top Speed</span>
                    </div>
                    <div className="px-1">
                      <span className="block font-sans text-xs sm:text-sm font-extrabold text-slate-900">4 Hrs</span>
                      <span className="block text-[8px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">Charging</span>
                    </div>
                  </div>
                </div>

                {/* Price & Action */}
                <div className="flex items-center justify-between pt-2">
                  <div>
                    <span className="block font-sans text-base sm:text-lg font-black text-slate-900">₹99,999</span>
                  </div>
                  <Link 
                    href="/rent/ziko-lite" 
                    className="border border-slate-200 hover:border-[#4F46E5] hover:bg-[#4F46E5] hover:text-white text-slate-800 font-sans text-[10px] font-extrabold uppercase tracking-wider px-5 py-2.5 rounded-[8px] flex items-center gap-1.5 transition-all duration-300"
                  >
                    Explore Now
                    <span className="text-xs">➔</span>
                  </Link>
                </div>
              </div>

              {/* Card 3: ZIKO GO */}
              <div className="min-w-[280px] sm:min-w-[310px] md:min-w-[320px] flex-1 bg-white rounded-[24px] border border-slate-200 p-6 flex flex-col justify-between group shadow-[0_8px_30px_rgba(0,0,0,0.02)] hover:border-[#4F46E5]/40 hover:shadow-[0_20px_40px_rgba(79,70,229,0.08)] hover:-translate-y-1.5 transition-all duration-300 relative snap-start">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <div className="bg-slate-100/90 rounded-[6px] px-3.5 py-1.5 font-sans text-[9px] font-black uppercase tracking-wider text-slate-800">
                      Ziko Go
                    </div>
                    {/* Wishlist Heart Button */}
                    <button
                      onClick={() => toggleWishlist(
                        "ziko-go",
                        "Ziko Go",
                        79999,
                        selectedColors.zikoGo === "blue" ? "/products/bike blue.webp" : selectedColors.zikoGo === "yellow" ? "/products/bike yellow.png" : selectedColors.zikoGo === "dark" ? "/products/bike dark.png" : "/products/bike gray.png",
                        "Lite Weight",
                        [
                          { label: "Range", value: "70 KM" },
                          { label: "Top Speed", value: "55 km/h" },
                          { label: "Charging", value: "4.5 Hrs" }
                        ]
                      )}
                      className="p-2 rounded-full bg-slate-50 text-slate-800 border border-slate-100 hover:scale-110 active:scale-95 shadow-sm transition-all duration-300"
                      aria-label={wishlistState.zikoGo ? "Remove from wishlist" : "Add to wishlist"}
                    >
                      <svg
                        className={`w-3.5 h-3.5 transition-all duration-300 ${wishlistState.zikoGo ? "fill-red-500 stroke-red-500" : "fill-none stroke-current"}`}
                        viewBox="0 0 24 24"
                        strokeWidth="2.5"
                      >
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                    </button>
                  </div>

                  {/* Scooter Product Image */}
                  <div className="relative w-full h-[155px] my-3 flex items-center justify-center transition-transform duration-500 scale-[1.1] group-hover:scale-[1.15]">
                    <Image 
                      src={selectedColors.zikoGo === "blue" ? "/products/bike blue.webp" : selectedColors.zikoGo === "yellow" ? "/products/bike yellow.png" : selectedColors.zikoGo === "dark" ? "/products/bike dark.png" : "/products/bike gray.png"} 
                      alt="Ziko Go Electric Scooter" 
                      fill 
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 330px"
                      className="object-contain" 
                    />
                  </div>

                  {/* Color swatches */}
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <button 
                      onClick={() => setSelectedColors(prev => ({...prev, zikoGo: "blue"}))}
                      style={{ backgroundColor: "#60a5fa" }}
                      className={`w-2.5 h-2.5 rounded-full border border-slate-300/50 transition-all ${selectedColors.zikoGo === "blue" ? "ring-2 ring-offset-2 ring-slate-400" : ""}`}
                      aria-label="Sky Blue"
                    />
                    <button 
                      onClick={() => setSelectedColors(prev => ({...prev, zikoGo: "yellow"}))}
                      style={{ backgroundColor: "#52634f" }}
                      className={`w-2.5 h-2.5 rounded-full border border-slate-300/50 transition-all ${selectedColors.zikoGo === "yellow" ? "ring-2 ring-offset-2 ring-slate-400" : ""}`}
                      aria-label="Olive Sage"
                    />
                    <button 
                      onClick={() => setSelectedColors(prev => ({...prev, zikoGo: "dark"}))}
                      style={{ backgroundColor: "#0f1e36" }}
                      className={`w-2.5 h-2.5 rounded-full border border-slate-300/50 transition-all ${selectedColors.zikoGo === "dark" ? "ring-2 ring-offset-2 ring-slate-400" : ""}`}
                      aria-label="Navy"
                    />
                  </div>

                  {/* Specs Row */}
                  <div className="grid grid-cols-3 py-3 text-center my-4 divide-x divide-slate-100">
                    <div className="px-1">
                      <span className="block font-sans text-xs sm:text-sm font-extrabold text-slate-900">70 KM</span>
                      <span className="block text-[8px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">Range</span>
                    </div>
                    <div className="px-1">
                      <span className="block font-sans text-xs sm:text-sm font-extrabold text-slate-900">55 km/h</span>
                      <span className="block text-[8px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">Top Speed</span>
                    </div>
                    <div className="px-1">
                      <span className="block font-sans text-xs sm:text-sm font-extrabold text-slate-900">4.5 Hrs</span>
                      <span className="block text-[8px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">Charging</span>
                    </div>
                  </div>
                </div>

                {/* Price & Action */}
                <div className="flex items-center justify-between pt-2">
                  <div>
                    <span className="block font-sans text-base sm:text-lg font-black text-slate-900">₹79,999</span>
                  </div>
                  <Link 
                    href="/rent/ziko-go" 
                    className="border border-slate-200 hover:border-[#4F46E5] hover:bg-[#4F46E5] hover:text-white text-slate-800 font-sans text-[10px] font-extrabold uppercase tracking-wider px-5 py-2.5 rounded-[8px] flex items-center gap-1.5 transition-all duration-300"
                  >
                    Explore Now
                    <span className="text-xs">➔</span>
                  </Link>
                </div>
              </div>

              {/* Card 4: ZIKO MAX */}
              <div className="min-w-[280px] sm:min-w-[310px] md:min-w-[320px] flex-1 bg-white rounded-[24px] border border-slate-200 p-6 flex flex-col justify-between group shadow-[0_8px_30px_rgba(0,0,0,0.02)] hover:border-[#4F46E5]/40 hover:shadow-[0_20px_40px_rgba(79,70,229,0.08)] hover:-translate-y-1.5 transition-all duration-300 relative snap-start">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <div className="bg-slate-100/90 rounded-[6px] px-3.5 py-1.5 font-sans text-[9px] font-black uppercase tracking-wider text-slate-800">
                      Ziko Max
                    </div>
                    {/* Wishlist Heart Button */}
                    <button
                      onClick={() => toggleWishlist(
                        "ziko-max",
                        "Ziko Max",
                        149999,
                        selectedColors.zikoMax === "blue" ? "/products/bike blue.webp" : selectedColors.zikoMax === "grey" ? "/products/bike gray.png" : selectedColors.zikoMax === "yellow" ? "/products/bike yellow.png" : "/products/bike white.png",
                        "Performance",
                        [
                          { label: "Range", value: "150 KM" },
                          { label: "Top Speed", value: "90 km/h" },
                          { label: "Charging", value: "3.0 Hrs" }
                        ]
                      )}
                      className="p-2 rounded-full bg-slate-50 text-slate-800 border border-slate-100 hover:scale-110 active:scale-95 shadow-sm transition-all duration-300"
                      aria-label={wishlistState.zikoMax ? "Remove from wishlist" : "Add to wishlist"}
                    >
                      <svg
                        className={`w-3.5 h-3.5 transition-all duration-300 ${wishlistState.zikoMax ? "fill-red-500 stroke-red-500" : "fill-none stroke-current"}`}
                        viewBox="0 0 24 24"
                        strokeWidth="2.5"
                      >
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                    </button>
                  </div>

                  {/* Scooter Product Image */}
                  <div className="relative w-full h-[155px] my-3 flex items-center justify-center transition-transform duration-500 scale-[1.1] group-hover:scale-[1.15]">
                    <Image 
                      src={selectedColors.zikoMax === "blue" ? "/products/bike blue.webp" : selectedColors.zikoMax === "grey" ? "/products/bike gray.png" : selectedColors.zikoMax === "yellow" ? "/products/bike yellow.png" : selectedColors.zikoMax === "white" ? "/products/bike white.png" : "/products/bike white.png"} 
                      alt="Ziko Max Electric Scooter" 
                      fill 
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 330px"
                      className="object-contain" 
                    />
                  </div>

                  {/* Color swatches */}
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <button 
                      onClick={() => setSelectedColors(prev => ({...prev, zikoMax: "blue"}))}
                      style={{ backgroundColor: "#0f1e36" }}
                      className={`w-2.5 h-2.5 rounded-full border border-slate-300/50 transition-all ${selectedColors.zikoMax === "blue" ? "ring-2 ring-offset-2 ring-slate-400" : ""}`}
                      aria-label="Navy Blue"
                    />
                    <button 
                      onClick={() => setSelectedColors(prev => ({...prev, zikoMax: "grey"}))}
                      style={{ backgroundColor: "#4b5563" }}
                      className={`w-2.5 h-2.5 rounded-full border border-slate-300/50 transition-all ${selectedColors.zikoMax === "grey" ? "ring-2 ring-offset-2 ring-slate-400" : ""}`}
                      aria-label="Slate Grey"
                    />
                    <button 
                      onClick={() => setSelectedColors(prev => ({...prev, zikoMax: "yellow"}))}
                      style={{ backgroundColor: "#facc15" }}
                      className={`w-2.5 h-2.5 rounded-full border border-slate-300/50 transition-all ${selectedColors.zikoMax === "yellow" ? "ring-2 ring-offset-2 ring-slate-400" : ""}`}
                      aria-label="Yellow"
                    />
                  </div>

                  {/* Specs Row */}
                  <div className="grid grid-cols-3 py-3 text-center my-4 divide-x divide-slate-100">
                    <div className="px-1">
                      <span className="block font-sans text-xs sm:text-sm font-extrabold text-slate-900">150 KM</span>
                      <span className="block text-[8px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">Range</span>
                    </div>
                    <div className="px-1">
                      <span className="block font-sans text-xs sm:text-sm font-extrabold text-slate-900">90 km/h</span>
                      <span className="block text-[8px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">Top Speed</span>
                    </div>
                    <div className="px-1">
                      <span className="block font-sans text-xs sm:text-sm font-extrabold text-slate-900">3.0 Hrs</span>
                      <span className="block text-[8px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">Charging</span>
                    </div>
                  </div>
                </div>

                {/* Price & Action */}
                <div className="flex items-center justify-between pt-2">
                  <div>
                    <span className="block font-sans text-base sm:text-lg font-black text-slate-900">₹1,49,999</span>
                  </div>
                  <Link 
                    href="/rent/ziko-one" 
                    className="border border-slate-200 hover:border-[#4F46E5] hover:bg-[#4F46E5] hover:text-white text-slate-800 font-sans text-[10px] font-extrabold uppercase tracking-wider px-5 py-2.5 rounded-[8px] flex items-center gap-1.5 transition-all duration-300"
                  >
                    Explore Now
                    <span className="text-xs">➔</span>
                  </Link>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
