"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "../../context/ThemeContext";

export default function ScooterShowcase() {
  const { theme } = useTheme();
  const [selectedColors, setSelectedColors] = useState({
    zikoOne: "darkgrey",
    zikoLite: "white",
    zikoGo: "blue",
    zikoMax: "yellow"
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

  return (
    <section className="py-24 sm:py-32 w-full px-6 lg:px-12 bg-background transition-colors duration-300">
      <div className="max-w-[1440px] mx-auto">
        {/* Header layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end mb-16">
          <div className="md:col-span-8">
            <span className="font-general-sans text-[10px] font-bold text-[#BFFF07] tracking-widest uppercase block mb-3">OUR PREMIUM SCOOTERS</span>
            <h2 className="font-general-sans text-3xl sm:text-4xl lg:text-[45px] font-black leading-tight uppercase tracking-tight text-primary transition-colors duration-300">
              Ride the Future with <span className="text-[#BFFF07]">Ziko EV</span>
            </h2>
            <p className="font-sans text-xs sm:text-sm text-neutral-gray mt-4 leading-relaxed font-light transition-colors duration-300">
              Engineered for performance. Built for comfort. Made for India.
            </p>
          </div>
          <div className="md:col-span-4 flex md:justify-end">
            <Link 
              href="/scooter" 
              className="inline-flex items-center gap-2 border border-borders hover:border-primary px-6 py-2.5 rounded-full font-general-sans text-[10px] font-extrabold uppercase tracking-wider hover:bg-surface text-primary transition-all duration-300"
            >
              View All Scooters
              <span>➔</span>
            </Link>
          </div>
        </div>

        {/* Scooters Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Scooter 1: ZIKO ONE */}
          <div className="bg-surface rounded-[16px] border border-borders p-5 flex flex-col justify-between group hover:border-[#BFFF07]/40 hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)] dark:hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all duration-300 relative">
            <div>
              {/* Wishlist Heart Button */}
              <button
                onClick={() => toggleWishlist(
                  "ziko-one",
                  "Ziko One",
                  124999,
                  selectedColors.zikoOne === "blue" ? "/products/bike blue.webp" : selectedColors.zikoOne === "lightgrey" ? "/products/bike gray.png" : "/products/bike dark.png",
                  "Flagship Model",
                  [
                    { label: "Range", value: "120 KM" },
                    { label: "Top Speed", value: "75 km/h" },
                    { label: "Charging", value: "3.5 Hrs" }
                  ]
                )}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/90 dark:bg-zinc-900/90 text-slate-800 dark:text-slate-200 border border-borders hover:scale-110 active:scale-95 shadow-sm transition-all duration-300"
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

              <span className="font-general-sans text-[10px] font-bold text-neutral-gray uppercase tracking-widest block mb-1">Flagship Model</span>
              <h3 className="font-general-sans text-xl font-black uppercase text-primary tracking-wide">Ziko One</h3>
              
              {/* Scooter Product Image */}
              <div className="relative w-full h-[200px] my-4 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                <Image 
                  src={selectedColors.zikoOne === "blue" ? "/products/bike blue.webp" : selectedColors.zikoOne === "lightgrey" ? "/products/bike gray.png" : "/products/bike dark.png"} 
                  alt="Ziko One Electric Scooter" 
                  fill 
                  className="object-contain" 
                />
              </div>

              {/* Color swatches */}
              <div className="flex items-center justify-center gap-2 mb-4">
                <button 
                  onClick={() => setSelectedColors(prev => ({...prev, zikoOne: "blue"}))}
                  className={`w-3.5 h-3.5 rounded-full bg-blue-600 border ${selectedColors.zikoOne === "blue" ? "border-[#BFFF07] ring-1 ring-[#BFFF07]" : "border-transparent"}`} 
                />
                <button 
                  onClick={() => setSelectedColors(prev => ({...prev, zikoOne: "darkgrey"}))}
                  className={`w-3.5 h-3.5 rounded-full bg-slate-800 border ${selectedColors.zikoOne === "darkgrey" ? "border-[#BFFF07] ring-1 ring-[#BFFF07]" : "border-transparent"}`} 
                />
                <button 
                  onClick={() => setSelectedColors(prev => ({...prev, zikoOne: "lightgrey"}))}
                  className={`w-3.5 h-3.5 rounded-full bg-slate-300 border ${selectedColors.zikoOne === "lightgrey" ? "border-[#BFFF07] ring-1 ring-[#BFFF07]" : "border-transparent"}`} 
                />
              </div>

              {/* Specs Row */}
              <div className="grid grid-cols-3 gap-2 border-y border-borders py-2.5 text-center mb-4">
                <div>
                  <span className="block font-general-sans text-xs font-extrabold text-primary">120 KM</span>
                  <span className="block text-[8px] text-neutral-gray font-bold uppercase tracking-wider mt-0.5">Range</span>
                </div>
                <div>
                  <span className="block font-general-sans text-xs font-extrabold text-primary">75 km/h</span>
                  <span className="block text-[8px] text-neutral-gray font-bold uppercase tracking-wider mt-0.5">Top Speed</span>
                </div>
                <div>
                  <span className="block font-general-sans text-xs font-extrabold text-primary">3.5 Hrs</span>
                  <span className="block text-[8px] text-neutral-gray font-bold uppercase tracking-wider mt-0.5">Charging</span>
                </div>
              </div>
            </div>

            {/* Price & Action */}
            <div className="flex items-center justify-between pt-2">
              <div>
                <span className="block text-[9px] text-neutral-gray font-bold uppercase tracking-wider">Starting Price</span>
                <span className="block font-general-sans text-[18px] font-black text-primary">₹1,24,999</span>
              </div>
              <Link 
                href="/rent/ziko-one" 
                className={`${
                  theme === "dark" ? "bg-white text-black" : "bg-primary text-white"
                } hover:bg-[#BFFF07] hover:text-black font-general-sans text-[9px] font-black uppercase tracking-widest px-4 py-2.5 rounded-[4px] flex items-center gap-1.5 transition-all duration-300`}
              >
                Explore Now
                <span>➔</span>
              </Link>
            </div>
          </div>

          {/* Scooter 2: ZIKO LITE */}
          <div className="bg-surface rounded-[16px] border border-borders p-5 flex flex-col justify-between group hover:border-[#BFFF07]/40 hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)] dark:hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all duration-300 relative">
            <div>
              {/* Wishlist Heart Button */}
              <button
                onClick={() => toggleWishlist(
                  "ziko-lite",
                  "Ziko Lite",
                  99999,
                  selectedColors.zikoLite === "blue" ? "/products/bike blue.webp" : selectedColors.zikoLite === "yellow" ? "/products/bike yellow.png" : "/products/bike white.png",
                  "Standard Model",
                  [
                    { label: "Range", value: "95 KM" },
                    { label: "Top Speed", value: "65 km/h" },
                    { label: "Charging", value: "4 Hrs" }
                  ]
                )}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/90 dark:bg-zinc-900/90 text-slate-800 dark:text-slate-200 border border-borders hover:scale-110 active:scale-95 shadow-sm transition-all duration-300"
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

              <span className="font-general-sans text-[10px] font-bold text-neutral-gray uppercase tracking-widest block mb-1">Standard Model</span>
              <h3 className="font-general-sans text-xl font-black uppercase text-primary tracking-wide">Ziko Lite</h3>
              
              {/* Scooter Product Image */}
              <div className="relative w-full h-[200px] my-4 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                <Image 
                  src={selectedColors.zikoLite === "blue" ? "/products/bike blue.webp" : selectedColors.zikoLite === "yellow" ? "/products/bike yellow.png" : "/products/bike white.png"} 
                  alt="Ziko Lite Electric Scooter" 
                  fill 
                  className="object-contain" 
                />
              </div>

              {/* Color swatches */}
              <div className="flex items-center justify-center gap-2 mb-4">
                <button 
                  onClick={() => setSelectedColors(prev => ({...prev, zikoLite: "blue"}))}
                  className={`w-3.5 h-3.5 rounded-full bg-indigo-800 border ${selectedColors.zikoLite === "blue" ? "border-[#BFFF07] ring-1 ring-[#BFFF07]" : "border-transparent"}`} 
                />
                <button 
                  onClick={() => setSelectedColors(prev => ({...prev, zikoLite: "yellow"}))}
                  className={`w-3.5 h-3.5 rounded-full bg-yellow-400 border ${selectedColors.zikoLite === "yellow" ? "border-[#BFFF07] ring-1 ring-[#BFFF07]" : "border-transparent"}`} 
                />
                <button 
                  onClick={() => setSelectedColors(prev => ({...prev, zikoLite: "white"}))}
                  className={`w-3.5 h-3.5 rounded-full bg-white border ${selectedColors.zikoLite === "white" ? "border-[#BFFF07] ring-1 ring-[#BFFF07]" : "border-transparent"}`} 
                />
              </div>

              {/* Specs Row */}
              <div className="grid grid-cols-3 gap-2 border-y border-borders py-2.5 text-center mb-4">
                <div>
                  <span className="block font-general-sans text-xs font-extrabold text-primary">95 KM</span>
                  <span className="block text-[8px] text-neutral-gray font-bold uppercase tracking-wider mt-0.5">Range</span>
                </div>
                <div>
                  <span className="block font-general-sans text-xs font-extrabold text-primary">65 km/h</span>
                  <span className="block text-[8px] text-neutral-gray font-bold uppercase tracking-wider mt-0.5">Top Speed</span>
                </div>
                <div>
                  <span className="block font-general-sans text-xs font-extrabold text-primary">4 Hrs</span>
                  <span className="block text-[8px] text-neutral-gray font-bold uppercase tracking-wider mt-0.5">Charging</span>
                </div>
              </div>
            </div>

            {/* Price & Action */}
            <div className="flex items-center justify-between pt-2">
              <div>
                <span className="block text-[9px] text-neutral-gray font-bold uppercase tracking-wider">Starting Price</span>
                <span className="block font-general-sans text-[18px] font-black text-primary">₹99,999</span>
              </div>
              <Link 
                href="/rent/ziko-lite" 
                className={`${
                  theme === "dark" ? "bg-white text-black" : "bg-primary text-white"
                } hover:bg-[#BFFF07] hover:text-black font-general-sans text-[9px] font-black uppercase tracking-widest px-4 py-2.5 rounded-[4px] flex items-center gap-1.5 transition-all duration-300`}
              >
                Explore Now
                <span>➔</span>
              </Link>
            </div>
          </div>

          {/* Scooter 3: ZIKO GO */}
          <div className="bg-surface rounded-[16px] border border-borders p-5 flex flex-col justify-between group hover:border-[#BFFF07]/40 hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)] dark:hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all duration-300 relative">
            <div>
              {/* Wishlist Heart Button */}
              <button
                onClick={() => toggleWishlist(
                  "ziko-go",
                  "Ziko Go",
                  79999,
                  selectedColors.zikoGo === "grey" ? "/products/bike gray.png" : "/products/bike blue.webp",
                  "Lite Weight",
                  [
                    { label: "Range", value: "70 KM" },
                    { label: "Top Speed", value: "55 km/h" },
                    { label: "Charging", value: "4.5 Hrs" }
                  ]
                )}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/90 dark:bg-zinc-900/90 text-slate-800 dark:text-slate-200 border border-borders hover:scale-110 active:scale-95 shadow-sm transition-all duration-300"
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

              <span className="font-general-sans text-[10px] font-bold text-neutral-gray uppercase tracking-widest block mb-1">Lite Weight</span>
              <h3 className="font-general-sans text-xl font-black uppercase text-primary tracking-wide">Ziko Go</h3>
              
              {/* Scooter Product Image */}
              <div className="relative w-full h-[200px] my-4 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                <Image 
                  src={selectedColors.zikoGo === "grey" ? "/products/bike gray.png" : "/products/bike blue.webp"} 
                  alt="Ziko Go Electric Scooter" 
                  fill 
                  className="object-contain" 
                />
              </div>

              {/* Color swatches */}
              <div className="flex items-center justify-center gap-2 mb-4">
                <button 
                  onClick={() => setSelectedColors(prev => ({...prev, zikoGo: "lightblue"}))}
                  className={`w-3.5 h-3.5 rounded-full bg-sky-500 border ${selectedColors.zikoGo === "lightblue" ? "border-[#BFFF07] ring-1 ring-[#BFFF07]" : "border-transparent"}`} 
                />
                <button 
                  onClick={() => setSelectedColors(prev => ({...prev, zikoGo: "blue"}))}
                  className={`w-3.5 h-3.5 rounded-full bg-blue-800 border ${selectedColors.zikoGo === "blue" ? "border-[#BFFF07] ring-1 ring-[#BFFF07]" : "border-transparent"}`} 
                />
                <button 
                  onClick={() => setSelectedColors(prev => ({...prev, zikoGo: "grey"}))}
                  className={`w-3.5 h-3.5 rounded-full bg-zinc-600 border ${selectedColors.zikoGo === "grey" ? "border-[#BFFF07] ring-1 ring-[#BFFF07]" : "border-transparent"}`} 
                />
              </div>

              {/* Specs Row */}
              <div className="grid grid-cols-3 gap-2 border-y border-borders py-2.5 text-center mb-4">
                <div>
                  <span className="block font-general-sans text-xs font-extrabold text-primary">70 KM</span>
                  <span className="block text-[8px] text-neutral-gray font-bold uppercase tracking-wider mt-0.5">Range</span>
                </div>
                <div>
                  <span className="block font-general-sans text-xs font-extrabold text-primary">55 km/h</span>
                  <span className="block text-[8px] text-neutral-gray font-bold uppercase tracking-wider mt-0.5">Top Speed</span>
                </div>
                <div>
                  <span className="block font-general-sans text-xs font-extrabold text-primary">4.5 Hrs</span>
                  <span className="block text-[8px] text-neutral-gray font-bold uppercase tracking-wider mt-0.5">Charging</span>
                </div>
              </div>
            </div>

            {/* Price & Action */}
            <div className="flex items-center justify-between pt-2">
              <div>
                <span className="block text-[9px] text-neutral-gray font-bold uppercase tracking-wider">Starting Price</span>
                <span className="block font-general-sans text-[18px] font-black text-primary">₹79,999</span>
              </div>
              <Link 
                href="/rent/ziko-go" 
                className={`${
                  theme === "dark" ? "bg-white text-black" : "bg-primary text-white"
                } hover:bg-[#BFFF07] hover:text-black font-general-sans text-[9px] font-black uppercase tracking-widest px-4 py-2.5 rounded-[4px] flex items-center gap-1.5 transition-all duration-300`}
              >
                Explore Now
                <span>➔</span>
              </Link>
            </div>
          </div>

          {/* Scooter 4: ZIKO MAX */}
          <div className="bg-surface rounded-[16px] border border-borders p-5 flex flex-col justify-between group hover:border-[#BFFF07]/40 hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)] dark:hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all duration-300 relative">
            <div>
              {/* Wishlist Heart Button */}
              <button
                onClick={() => toggleWishlist(
                  "ziko-max",
                  "Ziko Max",
                  149999,
                  selectedColors.zikoMax === "white" ? "/products/bike white.png" : selectedColors.zikoMax === "yellow" ? "/products/bike yellow.png" : "/products/bike gray.png",
                  "Performance",
                  [
                    { label: "Range", value: "150 KM" },
                    { label: "Top Speed", value: "90 km/h" },
                    { label: "Charging", value: "3 Hrs" }
                  ]
                )}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/90 dark:bg-zinc-900/90 text-slate-800 dark:text-slate-200 border border-borders hover:scale-110 active:scale-95 shadow-sm transition-all duration-300"
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

              <span className="font-general-sans text-[10px] font-bold text-neutral-gray uppercase tracking-widest block mb-1">Performance Model</span>
              <h3 className="font-general-sans text-xl font-black uppercase text-primary tracking-wide">Ziko Max</h3>
              
              {/* Scooter Product Image */}
              <div className="relative w-full h-[200px] my-4 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                <Image 
                  src={selectedColors.zikoMax === "white" ? "/products/bike white.png" : selectedColors.zikoMax === "yellow" ? "/products/bike yellow.png" : "/products/bike gray.png"} 
                  alt="Ziko Max Electric Scooter" 
                  fill 
                  className="object-contain" 
                />
              </div>

              {/* Color swatches */}
              <div className="flex items-center justify-center gap-2 mb-4">
                <button 
                  onClick={() => setSelectedColors(prev => ({...prev, zikoMax: "white"}))}
                  className={`w-3.5 h-3.5 rounded-full bg-white border ${selectedColors.zikoMax === "white" ? "border-[#BFFF07] ring-1 ring-[#BFFF07]" : "border-transparent"}`} 
                />
                <button 
                  onClick={() => setSelectedColors(prev => ({...prev, zikoMax: "yellow"}))}
                  className={`w-3.5 h-3.5 rounded-full bg-yellow-400 border ${selectedColors.zikoMax === "yellow" ? "border-[#BFFF07] ring-1 ring-[#BFFF07]" : "border-transparent"}`} 
                />
                <button 
                  onClick={() => setSelectedColors(prev => ({...prev, zikoMax: "grey"}))}
                  className={`w-3.5 h-3.5 rounded-full bg-zinc-600 border ${selectedColors.zikoMax === "grey" ? "border-[#BFFF07] ring-1 ring-[#BFFF07]" : "border-transparent"}`} 
                />
              </div>

              {/* Specs Row */}
              <div className="grid grid-cols-3 gap-2 border-y border-borders py-2.5 text-center mb-4">
                <div>
                  <span className="block font-general-sans text-xs font-extrabold text-primary">150 KM</span>
                  <span className="block text-[8px] text-neutral-gray font-bold uppercase tracking-wider mt-0.5">Range</span>
                </div>
                <div>
                  <span className="block font-general-sans text-xs font-extrabold text-primary">90 km/h</span>
                  <span className="block text-[8px] text-neutral-gray font-bold uppercase tracking-wider mt-0.5">Top Speed</span>
                </div>
                <div>
                  <span className="block font-general-sans text-xs font-extrabold text-primary">3.0 Hrs</span>
                  <span className="block text-[8px] text-neutral-gray font-bold uppercase tracking-wider mt-0.5">Charging</span>
                </div>
              </div>
            </div>

            {/* Price & Action */}
            <div className="flex items-center justify-between pt-2">
              <div>
                <span className="block text-[9px] text-neutral-gray font-bold uppercase tracking-wider">Starting Price</span>
                <span className="block font-general-sans text-[18px] font-black text-primary">₹1,49,999</span>
              </div>
              <Link 
                href="/rent/ziko-one" 
                className={`${
                  theme === "dark" ? "bg-white text-black" : "bg-primary text-white"
                } hover:bg-[#BFFF07] hover:text-black font-general-sans text-[9px] font-black uppercase tracking-widest px-4 py-2.5 rounded-[4px] flex items-center gap-1.5 transition-all duration-300`}
              >
                Explore Now
                <span>➔</span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
