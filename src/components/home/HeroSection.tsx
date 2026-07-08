"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  const images = ["/products/hero.png", "/products/hero1.png"];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // cycle every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full min-h-[90vh] flex flex-col justify-center items-center pt-10 pb-16 lg:py-28 overflow-hidden bg-[#070707] text-white">
      
      {/* Panoramic Hero Background Images with Fade Transition */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        {images.map((src, index) => (
          <Image
            key={src}
            src={src}
            alt={`Ziko EV Hero Background ${index + 1}`}
            fill
            priority={index === 0}
            className={`object-cover object-center transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? "opacity-75 dark:opacity-65" : "opacity-0"
            }`}
          />
        ))}
        {/* Linear overlay from left to right to guarantee text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070707]/30 via-[#070707]/10 to-transparent" />
        {/* Extra bottom fade to blend with SpecsGrid */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#070707]/50 to-transparent" />
      </div>

      {/* Dynamic light glows */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-blue-900/20 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 -translate-y-1/2 -right-40 w-[600px] h-[600px] rounded-full bg-[#BFFF07]/10 blur-[150px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Hero Content Left */}
        <div className="lg:col-span-6 flex flex-col items-start text-left mt-2 lg:mt-0">
          {/* Small Brand Tagline */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-white font-sans text-[10px] font-semibold tracking-wider uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#BFFF07] animate-pulse" />
            INDIA'S HOMEGROWN EV BRAND ⚡
          </div>

          {/* Headline */}
          <h1 className="font-general-sans text-[36px] sm:text-[52px] lg:text-[68px] font-black leading-[1.05] tracking-tight uppercase text-white mb-6">
            DESIGNED FOR <br />
            <span className="text-[#BFFF07] drop-shadow-[0_0_12px_rgba(191,255,7,0.2)]">TODAY.</span> BRING ON <br />
            <span className="text-[#BFFF07] drop-shadow-[0_0_12px_rgba(191,255,7,0.2)]">TOMORROW. <span className="inline-block align-middle font-sans text-xl lg:text-3xl">⚡</span></span>
          </h1>

          {/* Subtitle */}
          <p className="font-sans text-[13px] sm:text-[15px] text-slate-300 max-w-md mb-8 leading-relaxed font-light">
            Premium Electric Scooters. High Performance. <br />
            Zero Emission. 100% Future Ready.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-12">
            <Link
              href="/scooter"
              className="group flex items-center justify-center gap-2 px-7 py-3 bg-[#BFFF07] text-black font-general-sans text-[11px] font-extrabold tracking-widest uppercase rounded-[4px] hover:bg-[#a6df05] hover:scale-[1.02] transition-all duration-300 shadow-[0_0_15px_rgba(191,255,7,0.25)]"
            >
              Explore Our Scooters
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>

            <Link
              href="/accessories?cat=spare-parts"
              className="group flex items-center justify-center gap-2 px-7 py-3 border border-white/20 bg-transparent text-white font-general-sans text-[11px] font-extrabold tracking-widest uppercase rounded-[4px] hover:bg-white/5 hover:border-white transition-all duration-300"
            >
              Shop Spare Parts
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>

          {/* Quick Specs Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 pt-6 border-t border-white/10 w-full max-w-lg">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 text-[#BFFF07]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <span className="block font-general-sans text-sm sm:text-base font-bold text-white leading-none">120+</span>
                <span className="block text-[8px] sm:text-[9px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">Km Range</span>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 text-[#BFFF07]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <span className="block font-general-sans text-sm sm:text-base font-bold text-white leading-none">75 km/h</span>
                <span className="block text-[8px] sm:text-[9px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">Top Speed</span>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 text-[#BFFF07]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <span className="block font-general-sans text-sm sm:text-base font-bold text-white leading-none">3.5 Hrs</span>
                <span className="block text-[8px] sm:text-[9px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">Fast Charge</span>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 text-[#BFFF07]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <span className="block font-general-sans text-sm sm:text-base font-bold text-white leading-none">3 Years</span>
                <span className="block text-[8px] sm:text-[9px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">Warranty</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right side is kept empty on desktop to display the background image's scooter product */}
        <div className="hidden lg:block lg:col-span-6 h-[300px] sm:h-[400px] lg:h-[550px] pointer-events-none" />
      </div>

    </section>
  );
}
