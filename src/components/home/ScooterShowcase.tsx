"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "../../context/ThemeContext";

export default function ScooterShowcase() {
  const { theme } = useTheme();

  const [selectedColors, setSelectedColors] = useState<Record<string, string>>({
    "ziko-one": "dark",
    "ziko-lite": "blue",
    "ziko-go": "blue",
    "ziko-max": "yellow"
  });

  const [wishlistState, setWishlistState] = useState({
    "ziko-one": false,
    "ziko-lite": false,
    "ziko-go": false,
    "ziko-max": false
  });

  useEffect(() => {
    try {
      const stored = localStorage.getItem("ziko_wishlist");
      if (stored) {
        const items = JSON.parse(stored);
        setWishlistState({
          "ziko-one": items.some((item: any) => item.id === "ziko-one"),
          "ziko-lite": items.some((item: any) => item.id === "ziko-lite"),
          "ziko-go": items.some((item: any) => item.id === "ziko-go"),
          "ziko-max": items.some((item: any) => item.id === "ziko-max")
        });
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  const toggleWishlist = (id: string, name: string, price: number, image: string, badgeText: string, specs: any[]) => {
    if (localStorage.getItem("ziko_logged_in") !== "true") {
      alert("Please login to add to wishlist/favorites!");
      window.dispatchEvent(new Event("open-login-modal"));
      return;
    }
    try {
      const stored = localStorage.getItem("ziko_wishlist");
      let items = stored ? JSON.parse(stored) : [];
      const isCurrentlyWishlisted = wishlistState[id as keyof typeof wishlistState];

      if (isCurrentlyWishlisted) {
        items = items.filter((item: any) => item.id !== id);
        setWishlistState(prev => ({
          ...prev,
          [id]: false
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
          [id]: true
        }));
      }

      localStorage.setItem("ziko_wishlist", JSON.stringify(items));
      window.dispatchEvent(new Event("wishlist-update"));
    } catch (err) {
      console.error(err);
    }
  };

  const products = [
    {
      id: "ziko-one",
      slug: "ziko-one",
      name: "Chalo 1000 V2",
      range: "120 km",
      speedType: "HIGH SPEED",
      topSpeed: "75 km/h",
      chargeTime: "3.5 Hrs",
      priceGraphene: "76,359",
      priceLithium: "88,664",
      priceBase: 124999,
      colors: [
        { name: "white", class: "bg-[#f3f4f6]", image: "/products/bike white.png" },
        { name: "yellow", class: "bg-[#facc15]", image: "/products/bike yellow.png" },
        { name: "blue", class: "bg-[#0f1e36]", image: "/products/bike blue.webp" },
        { name: "grey", class: "bg-[#4b5563]", image: "/products/bike gray.png" },
        { name: "dark", class: "bg-[#111827]", image: "/products/bike dark.png" }
      ],
      defaultColor: "dark",
      isEco: false
    },
    {
      id: "ziko-lite",
      slug: "ziko-lite",
      name: "Chalo Smart PRO",
      range: "80 km",
      speedType: "LOW SPEED",
      topSpeed: "65 km/h",
      chargeTime: "4 Hrs",
      priceGraphene: "60,834",
      priceLithium: "73,139",
      priceBase: 99999,
      colors: [
        { name: "dark", class: "bg-[#111827]", image: "/products/bike dark.png" },
        { name: "blue", class: "bg-[#0f1e36]", image: "/products/bike blue.webp" },
        { name: "white", class: "bg-[#f3f4f6]", image: "/products/bike white.png" },
        { name: "grey", class: "bg-[#4b5563]", image: "/products/bike gray.png" }
      ],
      defaultColor: "blue",
      isEco: false
    },
    {
      id: "ziko-go",
      slug: "ziko-go",
      name: "Chalo Smart ECO",
      range: "130 km",
      speedType: "LOW SPEED",
      topSpeed: "55 km/h",
      chargeTime: "4.5 Hrs",
      priceGraphene: "59,684",
      priceLithium: "71,989",
      priceBase: 79999,
      colors: [
        { name: "white", class: "bg-[#f3f4f6]", image: "/products/bike white.png" },
        { name: "yellow", class: "bg-[#facc15]", image: "/products/bike yellow.png" },
        { name: "grey", class: "bg-[#4b5563]", image: "/products/bike gray.png" },
        { name: "blue", class: "bg-[#0f1e36]", image: "/products/bike blue.webp" }
      ],
      defaultColor: "white",
      isEco: true
    },
    {
      id: "ziko-max",
      slug: "ziko-max",
      name: "Chalo Max ULTRA",
      range: "150 km",
      speedType: "HIGH SPEED",
      topSpeed: "90 km/h",
      chargeTime: "3.0 Hrs",
      priceGraphene: "96,359",
      priceLithium: "108,664",
      priceBase: 149999,
      colors: [
        { name: "white", class: "bg-[#f3f4f6]", image: "/products/bike white.png" },
        { name: "grey", class: "bg-[#4b5563]", image: "/products/bike gray.png" },
        { name: "yellow", class: "bg-[#facc15]", image: "/products/bike yellow.png" },
        { name: "blue", class: "bg-[#0f1e36]", image: "/products/bike blue.webp" }
      ],
      defaultColor: "yellow",
      isEco: false
    }
  ];

  return (
    <section className="pt-12 lg:pt-20 pb-16 w-full px-6 lg:px-12 bg-[#070707] transition-colors duration-300 relative z-10">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Top Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="flex flex-col items-start text-left">
            <span className="font-sans text-[11px] font-extrabold text-zinc-500 tracking-widest uppercase block mb-2">
              OUR PREMIUM SCOOTERS
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl lg:text-[42px] font-black leading-[1.1] uppercase tracking-tight text-white mb-4">
              Ride the Future with Ziko <span className="text-[#BFFF07] font-black">EV</span>
            </h2>
            <p className="font-sans text-xs sm:text-sm text-zinc-400 max-w-2xl leading-relaxed font-normal">
              Engineered for performance. Built for comfort. Made for India.
            </p>
          </div>
          
          <Link 
            href="/scooter" 
            className="inline-flex items-center gap-1.5 text-zinc-300 hover:text-[#BFFF07] hover:underline font-sans text-[11px] font-extrabold uppercase tracking-wider transition-all duration-300 shrink-0 mb-1"
          >
            View All Scooters
            <span className="text-xs">➔</span>
          </Link>
        </div>

        {/* 4 Cards Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {products.map((product) => {
            const activeColor = selectedColors[product.id] || product.defaultColor;
            const activeColorImage = product.colors.find(c => c.name === activeColor)?.image || product.colors[0].image;

            return (
              <div 
                key={product.id}
                className="w-full bg-[#121214] rounded-[24px] border border-zinc-800/80 p-5 flex flex-col justify-between group shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:border-zinc-700/80 hover:shadow-[0_15px_35px_rgba(0,0,0,0.4)] hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden"
              >
                <div>
                  {/* Scooter Product Image Container (Full bleed top, white background) */}
                  <div className="relative w-[calc(100%+40px)] h-[190px] mt-[-20px] mx-[-20px] bg-white rounded-t-[23px] rounded-b-none transition-transform duration-500 overflow-hidden flex items-center justify-center shadow-sm">
                    <Image 
                      src={activeColorImage} 
                      alt={`${product.name} Electric Scooter`} 
                      fill 
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 330px"
                      className="object-contain p-1.5 group-hover:scale-105 transition-transform duration-500" 
                    />

                    {/* Warranty Badge Overlay (Absolute top-left) */}
                    <div className="absolute top-3 left-3 bg-zinc-950/95 text-zinc-100 px-2 py-1 rounded-tl-[16px] rounded-br-[10px] flex items-center shadow-md select-none border border-zinc-800/50">
                      <span className="text-[8px] font-extrabold tracking-wider flex items-center gap-1">
                        4Y WARRANTY <span className="text-[9px]">🏅</span>
                      </span>
                    </div>

                    {/* Wishlist Button Overlay (Absolute top-right) */}
                    <div className="absolute top-3 right-3 flex items-center gap-2">
                      <button
                        onClick={() => toggleWishlist(
                          product.id,
                          product.name,
                          product.priceBase,
                          activeColorImage,
                          product.isEco ? "Eco Model" : "Premium Model",
                          [
                            { label: "Range", value: product.range },
                            { label: "Top Speed", value: product.topSpeed },
                            { label: "Charging", value: product.chargeTime }
                          ]
                        )}
                        className="p-1.5 rounded-full bg-zinc-950/90 text-zinc-400 hover:text-white border border-zinc-800 hover:bg-zinc-800 hover:scale-110 active:scale-95 shadow-md transition-all"
                        aria-label={wishlistState[product.id as keyof typeof wishlistState] ? "Remove from wishlist" : "Add to wishlist"}
                      >
                        <svg
                          className={`w-3 h-3 transition-colors ${wishlistState[product.id as keyof typeof wishlistState] ? "fill-[#BFFF07] stroke-[#BFFF07] text-[#BFFF07]" : "fill-none stroke-current"}`}
                          viewBox="0 0 24 24"
                          strokeWidth="2.5"
                        >
                          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                      </button>
                    </div>

                    {/* Rating Overlay (Absolute bottom-right) */}
                    <div className="absolute bottom-2 right-3 bg-zinc-950/80 backdrop-blur-sm px-2 py-0.5 rounded-md flex items-center gap-1 shadow-sm border border-zinc-800/30">
                      <span className="text-[7px] font-black text-zinc-400 uppercase tracking-widest">5.0</span>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-1.5 h-1.5 text-zinc-300 fill-zinc-200" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* Color swatches */}
                  <div className="flex items-center justify-center gap-1.5 bg-zinc-900/60 border border-zinc-800/80 px-3.5 py-1 rounded-full shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] max-w-fit mx-auto my-3 select-none">
                    <span className="text-[8.5px] font-extrabold text-zinc-500 uppercase tracking-wider mr-1">Colors</span>
                    <div className="flex gap-1.5">
                      {product.colors.map((c) => (
                        <button 
                          key={c.name}
                          onClick={() => setSelectedColors(prev => ({...prev, [product.id]: c.name}))}
                          style={{ backgroundColor: c.class.includes("bg-[") ? c.class.replace("bg-[", "").replace("]", "") : undefined }}
                          className={`w-3.5 h-3.5 rounded-full border border-zinc-700 transition-all ${activeColor === c.name ? "ring-2 ring-offset-1 ring-[#BFFF07]" : ""} ${c.class}`}
                          aria-label={c.name}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Product Name */}
                  <div className="flex items-center justify-center gap-2 my-3.5">
                    <h3 className="font-sans text-[17px] font-black text-white border-b-[2.5px] border-[#BFFF07]/80 pb-0.5 inline-block tracking-tight">
                      {product.name}
                    </h3>
                    {product.isEco && (
                      <span className="bg-zinc-800 text-zinc-200 text-[8px] font-black px-1.5 py-0.5 rounded-[4px] uppercase tracking-wider">
                        360°
                      </span>
                    )}
                  </div>

                  {/* Specs Row (Two Columns, matching image layout) */}
                  <div className="grid grid-cols-2 gap-3 my-3">
                    <div className="bg-zinc-900/40 border border-zinc-800/80 rounded-[14px] p-2.5 flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700/60 flex items-center justify-center shrink-0">
                        <svg className="w-4 h-4 text-zinc-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div className="text-left leading-tight">
                        <span className="block font-sans text-xs sm:text-[13px] font-black text-white">
                          {product.range}
                        </span>
                        <span className="block text-[7.5px] text-zinc-500 font-extrabold uppercase tracking-widest mt-0.5">
                          RANGE
                        </span>
                      </div>
                    </div>

                    <div className="bg-zinc-900/40 border border-zinc-800/80 rounded-[14px] p-2.5 flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700/60 flex items-center justify-center shrink-0">
                        <svg className="w-4 h-4 text-zinc-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V12m0 0l2 2m-2-2H8m4 8a8 8 0 110-16 8 8 0 010 16z" />
                        </svg>
                      </div>
                      <div className="text-left leading-tight">
                        <span className="block font-sans text-[11px] sm:text-[11.5px] font-black text-white truncate max-w-[70px]">
                          {product.speedType}
                        </span>
                        <span className="block text-[7.5px] text-zinc-500 font-extrabold uppercase tracking-widest mt-0.5">
                          SPEED
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Ex-Showroom Pricing Block (matching image layout) */}
                  <div className="border border-zinc-800/80 rounded-[16px] overflow-hidden my-3">
                    <div className="bg-zinc-900/80 text-zinc-300 py-1.5 px-3 text-center border-b border-zinc-800 select-none">
                      <span className="block text-[9.5px] font-black uppercase tracking-wider text-zinc-200">
                        Ex-Showroom Pricing
                      </span>
                      <span className="block text-[7.5px] font-extrabold text-zinc-500 uppercase tracking-widest mt-0.5">
                        Starts at Just
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 p-2 bg-zinc-900/20">
                      <div className="bg-zinc-900 border border-zinc-800/80 rounded-[8px] p-1.5 text-center shadow-[0_1px_3px_rgba(0,0,0,0.2)]">
                        <span className="block text-[7.5px] text-zinc-500 font-extrabold uppercase tracking-wider leading-none">
                          60V/32AH Graphene
                        </span>
                        <span className="block text-xs sm:text-[13px] font-black text-zinc-200 mt-1 leading-none">
                          ₹{product.priceGraphene}
                        </span>
                      </div>
                      <div className="bg-zinc-900 border border-zinc-800/80 rounded-[8px] p-1.5 text-center shadow-[0_1px_3px_rgba(0,0,0,0.2)]">
                        <span className="block text-[7.5px] text-zinc-500 font-extrabold uppercase tracking-wider leading-none">
                          60V/25AH LI-ION
                        </span>
                        <span className="block text-xs sm:text-[13px] font-black text-zinc-200 mt-1 leading-none">
                          ₹{product.priceLithium}
                        </span>
                      </div>
                    </div>
                    <div className="bg-zinc-900/20 py-1 border-t border-zinc-800/40 text-center select-none">
                      <span className="text-[7.5px] font-bold text-zinc-500 uppercase tracking-widest">
                        *Without GST
                      </span>
                    </div>
                  </div>
                </div>

                {/* Action buttons (Explore and Test Ride side by side) */}
                <div className="grid grid-cols-2 gap-2.5 pt-3 border-t border-zinc-800/80 mt-1">
                  <Link 
                    href={`/rent/${product.slug}`}
                    className="bg-[#BFFF07] text-black border border-[#BFFF07] hover:bg-[#a8df05] hover:border-[#a8df05] font-sans text-[10px] font-extrabold uppercase tracking-wider py-2.5 px-3 rounded-[12px] flex items-center justify-center gap-1 transition-all duration-300 shadow-sm hover:scale-[1.02]"
                  >
                    Explore ➔
                  </Link>

                  <Link 
                    href="#test-ride"
                    className="bg-zinc-900 text-zinc-200 border border-zinc-850 hover:border-zinc-700 hover:bg-zinc-800 hover:text-white font-sans text-[10px] font-extrabold uppercase tracking-wider py-2.5 px-3 rounded-[12px] flex items-center justify-center gap-1 transition-all duration-300 shadow-sm hover:scale-[1.02]"
                  >
                    Test Ride 🛵
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
