"use client";

import Image from "next/image";

export default function NewsletterSection() {
  return (
    <section className="py-2 sm:py-4 w-full px-4 lg:px-6 bg-slate-50 transition-all duration-300">
      <div className="max-w-[1440px] mx-auto bg-slate-950 text-white rounded-[24px] border border-slate-900 p-8 md:p-10 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Title, Subtitle & Form */}
        <div className="relative z-10 text-left flex flex-col xl:flex-row items-stretch xl:items-center gap-6 w-full xl:w-auto">
          <div>
            <h2 className="font-sans text-xl sm:text-2xl font-black uppercase tracking-wide text-white transition-colors duration-300">
              Stay Ahead. Stay Electric.
            </h2>
            <p className="font-sans text-xs text-slate-400 mt-1.5 font-medium max-w-sm transition-colors duration-300">
              Subscribe to get the latest updates, offers & product launches.
            </p>
          </div>
          
          <div className="flex items-center gap-2 w-full md:w-auto max-w-md shrink-0">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="w-full md:w-56 bg-slate-900 border border-slate-800 rounded-[8px] px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#BFFF07] transition-all duration-300"
            />
            <button className="bg-[#BFFF07] hover:bg-[#a6df05] text-black font-sans text-[10px] font-black uppercase px-6 py-3.5 rounded-[8px] tracking-widest transition-colors shrink-0 shadow-[0_0_15px_rgba(191,255,7,0.25)]">
              Subscribe
            </button>
          </div>
        </div>

        {/* Center: The Graphic Image (Takes up center-right area, hidden on mobile/tablet to avoid congestion) */}
        <div className="relative w-[450px] h-[110px] shrink-0 hidden lg:block z-10">
          <Image 
            src="/Stay Ahead. Stay Electric..png" 
            alt="Stay Ahead. Stay Electric" 
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Right Side: ZIKO EV Brand Logo */}
        <div className="relative z-10 flex items-center gap-3 shrink-0 select-none md:self-center">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9 stroke-[#BFFF07] stroke-[8] filter drop-shadow-[0_0_4px_rgba(191,255,7,0.5)]">
            <path d="M15 15H85L35 60H85L70 85H15L45 40H15V15Z" />
          </svg>
          <span className="font-sans text-2xl font-black uppercase tracking-widest text-white">
            ZIKO <span className="text-[#BFFF07]">EV</span>
          </span>
        </div>

      </div>
    </section>
  );
}
