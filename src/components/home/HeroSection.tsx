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

  const renderElectricText = (text: string, baseDelay: number = 0) => {
    return text.split("").map((char, index) => {
      if (char === " ") {
        return <span key={index} className="w-[0.22em] inline-block">&nbsp;</span>;
      }
      return (
        <span
          key={index}
          className="animate-electric-current"
          style={{
            animationDelay: `${baseDelay + index * 0.06}s`,
          }}
        >
          {char}
        </span>
      );
    });
  };

  return (
    <section className="relative w-full min-h-[60vh] flex flex-col justify-between overflow-hidden bg-[#070707] text-white pt-20 lg:pt-24">
      
      {/* Background Image Carousel with Fade Transition */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        {images.map((src, index) => (
          <Image
            key={src}
            src={src}
            alt={`Ziko EV Hero Background ${index + 1}`}
            fill
            priority={index === 0}
            className={`object-cover object-center transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? "opacity-95" : "opacity-0"
            }`}
          />
        ))}
        {/* Gradient overlays to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent z-0" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#070707] via-black/30 to-transparent z-0" />
      </div>

      {/* Electric Plasma/Lightning Current Layers */}
      <div className="absolute inset-0 z-[1] opacity-20 pointer-events-none overflow-hidden">
        <svg className="w-full h-full min-w-[1000px] opacity-75" viewBox="0 0 1440 600" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          {/* Layer 1 - Neon Green Current Wave */}
          <path 
            d="M-100 150 C 300 50, 500 400, 900 200 C 1200 50, 1300 350, 1600 250" 
            stroke="#BFFF07" 
            strokeWidth="2.5" 
            strokeLinecap="round"
            className="animate-plasma-line-1 filter blur-[1px]"
          />
          {/* Layer 2 - Cyan Current Wave */}
          <path 
            d="M-50 350 C 250 250, 600 50, 1000 300 C 1300 150, 1400 400, 1700 200" 
            stroke="#00f2fe" 
            strokeWidth="2" 
            strokeLinecap="round"
            className="animate-plasma-line-2 filter blur-[1px]"
          />
          {/* Layer 3 - Subtle fast-moving pulse line */}
          <path 
            d="M-80 250 C 400 450, 800 150, 1100 350 C 1300 250, 1500 100, 1650 300" 
            stroke="#BFFF07" 
            strokeWidth="1.5" 
            strokeLinecap="round"
            className="animate-plasma-line-3 filter blur-[0.5px]"
          />
        </svg>
      </div>
 
      {/* Main Grid Content */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10 my-auto py-6 lg:py-10">
        
        {/* Left Content */}
        <div className="lg:col-span-8 flex flex-col items-start text-left max-w-2xl lg:-translate-y-2">
          {/* Headline */}
          <h1 className="font-general-sans text-[38px] sm:text-[54px] lg:text-[72px] font-semibold leading-[1.05] tracking-tight mb-5 select-none">
            <span className="inline-block text-white">{renderElectricText("Book Your New", 0)}</span> <br />
            <span className="inline-block text-[#BFFF07]">{renderElectricText("Eco-Friendly", 0.68)}</span> <br />
            <span className="inline-block text-white">{renderElectricText("Ride.", 1.34)}</span>
          </h1>

          {/* Subtitle */}
          <p className="font-sans text-[15px] sm:text-[18px] text-zinc-300 max-w-lg leading-relaxed font-normal">
            Join the green revolution with premium electric scooters. Zero emissions, maximum freedom.
          </p>
        </div>

        {/* Right Content - Highlights Capsule */}
        <div className="lg:col-span-4 flex justify-center lg:justify-end w-full lg:-translate-y-8">
          <div className="flex flex-row lg:flex-col items-center justify-around lg:justify-center gap-4 lg:gap-6 bg-black/60 backdrop-blur-xl border border-zinc-800 rounded-[24px] lg:rounded-[36px] p-4 lg:p-6 w-full lg:w-36 shadow-[0_8px_32px_rgba(0,0,0,0.6)] animate-border-lightning">
            
            {/* 100% Electric */}
            <div className="flex flex-col items-center text-center gap-1.5 group cursor-pointer">
              <div 
                className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-zinc-950/80 border border-zinc-700/60 flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.05)] group-hover:border-zinc-400 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300 animate-border-lightning"
                style={{ animationDelay: "0s" }}
              >
                <svg className="w-5 h-5 lg:w-6 lg:h-6 text-zinc-300 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span 
                className="text-[9px] lg:text-[10px] font-bold tracking-wider text-zinc-400 group-hover:text-zinc-200 uppercase leading-tight transition-colors animate-electric-current"
                style={{ animationDelay: "0s" }}
              >
                100% <br /> Electric
              </span>
            </div>

            {/* Long Range */}
            <div className="flex flex-col items-center text-center gap-1.5 group cursor-pointer">
              <div 
                className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-zinc-950/80 border border-zinc-700/60 flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.05)] group-hover:border-zinc-400 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300 animate-border-lightning"
                style={{ animationDelay: "0.5s" }}
              >
                <svg className="w-5 h-5 lg:w-6 lg:h-6 text-zinc-300 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.75V11.25a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 11.25v1.5A2.25 2.25 0 005.25 15h13.5A2.25 2.25 0 0021 12.75z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 10.5v3m3-3v3m3-3v3" />
                </svg>
              </div>
              <span 
                className="text-[9px] lg:text-[10px] font-bold tracking-wider text-zinc-400 group-hover:text-zinc-200 uppercase leading-tight transition-colors animate-electric-current"
                style={{ animationDelay: "0.5s" }}
              >
                Long <br /> Range
              </span>
            </div>

            {/* Eco Neutral */}
            <div className="flex flex-col items-center text-center gap-1.5 group cursor-pointer">
              <div 
                className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-zinc-950/80 border border-zinc-700/60 flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.05)] group-hover:border-zinc-400 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300 animate-border-lightning"
                style={{ animationDelay: "1.0s" }}
              >
                <svg className="w-5 h-5 lg:w-6 lg:h-6 text-zinc-300 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 19c-4.97 0-9-4.03-9-9 0-2.12.74-4.07 1.97-5.61L12 12l7.03-7.61C20.26 5.93 21 7.88 21 10c0 4.97-4.03 9-9 9z" />
                </svg>
              </div>
              <span 
                className="text-[9px] lg:text-[10px] font-bold tracking-wider text-zinc-400 group-hover:text-zinc-200 uppercase leading-tight transition-colors animate-electric-current"
                style={{ animationDelay: "1.0s" }}
              >
                Eco <br /> Neutral
              </span>
            </div>

            {/* Optimal Speed */}
            <div className="flex flex-col items-center text-center gap-1.5 group cursor-pointer">
              <div 
                className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-zinc-950/80 border border-zinc-700/60 flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.05)] group-hover:border-zinc-400 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300 animate-border-lightning"
                style={{ animationDelay: "1.5s" }}
              >
                <svg className="w-5 h-5 lg:w-6 lg:h-6 text-zinc-300 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.364 19.364A9 9 0 0012 3a9 9 0 00-7.364 16.364" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 12l3-3" />
                  <circle cx="12" cy="12" r="1" />
                </svg>
              </div>
              <span 
                className="text-[9px] lg:text-[10px] font-bold tracking-wider text-zinc-400 group-hover:text-zinc-200 uppercase leading-tight transition-colors animate-electric-current"
                style={{ animationDelay: "1.5s" }}
              >
                Optimal <br /> Speed
              </span>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Bar with 3 dark/gray pill buttons */}
      <div className="w-full bg-black/85 backdrop-blur-md py-5 border-t border-zinc-800 z-20 relative mt-auto animate-border-lightning" style={{ animationDelay: "2.0s" }}>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 grid grid-cols-1 sm:grid-cols-3 gap-4 items-center justify-between">
          
          {/* Call Button */}
          <Link
            href="tel:+919876543210"
            className="group flex items-center justify-center gap-2 py-3 px-8 bg-zinc-900 text-zinc-100 font-sans font-bold text-sm sm:text-base rounded-full border-2 border-zinc-700 hover:bg-white hover:text-black hover:border-white hover:scale-[1.02] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
          >
            <svg className="w-5 h-5 text-zinc-300 group-hover:text-black transition-colors group-hover:animate-ring" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>Call</span>
          </Link>

          {/* Book Now Button */}
          <Link
            href="/rent"
            className="group flex items-center justify-center py-3 px-8 bg-zinc-900 text-zinc-100 font-sans font-bold text-sm sm:text-base rounded-full border-2 border-zinc-700 hover:bg-[#BFFF07] hover:text-black hover:border-[#BFFF07] hover:scale-[1.02] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_0_25px_rgba(191,255,7,0.45)] text-center"
          >
            <span>Book Now</span>
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5 ml-1.5 text-[#BFFF07] group-hover:text-black font-mono">➔</span>
          </Link>

          {/* Test Ride Button */}
          <Link
            href="#test-ride"
            className="group flex items-center justify-center py-3 px-8 bg-zinc-900 text-zinc-100 font-sans font-bold text-sm sm:text-base rounded-full border-2 border-zinc-700 hover:bg-[#00f2fe] hover:text-black hover:border-[#00f2fe] hover:scale-[1.02] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_0_25px_rgba(0,242,254,0.45)] text-center"
          >
            <span>Test Ride</span>
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5 ml-1.5 text-[#00f2fe] group-hover:text-black font-mono">➔</span>
          </Link>
        </div>

        {/* Floating WhatsApp Button (styled premium gray) */}
        <Link
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-24 right-6 sm:right-12 z-30 w-12 h-12 bg-zinc-900 border border-zinc-700 text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300"
        >
          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 001.33 4.982L2 22l5.164-1.354a9.938 9.938 0 004.846 1.254h.004c5.507 0 9.991-4.479 9.992-9.985a9.963 9.963 0 00-2.927-7.06A9.907 9.907 0 0012.012 2zm5.794 14.072c-.318.892-1.854 1.647-2.548 1.748-.693.101-1.385.195-4.442-1.018-2.613-1.037-4.256-3.69-4.386-3.862-.131-.172-1.062-1.411-1.062-2.695 0-1.284.664-1.916.924-2.176.26-.26.578-.325.77-.325.193 0 .386.002.553.01.173.007.404-.065.632.484.233.562.795 1.942.863 2.081.069.139.115.301.023.484-.092.184-.139.3-.277.46-.139.162-.292.36-.417.484-.139.139-.283.29-.122.565.162.277.718 1.182 1.54 1.912.822.73 1.517.955 1.748 1.07.23.115.364.098.502-.058.139-.156.594-.69.754-.925.16-.235.321-.197.539-.117.218.081 1.383.652 1.621.77.237.118.396.176.454.276.059.1.059.578-.26.974z" />
          </svg>
        </Link>
      </div>

    </section>
  );
}
