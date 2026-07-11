"use client";

import Link from "next/link";

export default function WhyChoose() {
  const features = [
    {
      title: "Smartphone Connectivity",
      description: "Stay connected on the go with real-time updates and smart navigation.",
      icon: (
        <svg className="w-8 h-8 stroke-white stroke-[1.5] fill-none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <rect x="6" y="2" width="12" height="20" rx="3" />
          <circle cx="12" cy="18" r="1" />
        </svg>
      )
    },
    {
      title: "Waterproof Protection",
      description: "Ride confidently in any weather with complete water resistance.",
      icon: (
        <svg className="w-8 h-8 stroke-white stroke-[1.5] fill-none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.5c-4.142 0-7.5-3.358-7.5-7.5C4.5 9 12 2.5 12 2.5S19.5 9 19.5 14c0 4.142-3.358 7.5-7.5 7.5z" />
        </svg>
      )
    },
    {
      title: "Durable Tyres",
      description: "Engineered for strength and grip, built to handle every terrain.",
      icon: (
        <svg className="w-8 h-8 stroke-white stroke-[1.5] fill-none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="5" />
        </svg>
      )
    },
    {
      title: "Enhanced Battery",
      description: "Long-lasting power with faster charging for extended rides.",
      icon: (
        <svg className="w-8 h-8 stroke-white stroke-[1.5] fill-none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="6" width="16" height="12" rx="2" />
          <path d="M19 10v4" strokeLinecap="round" />
        </svg>
      )
    }
  ];

  return (
    <div className="w-full flex flex-col transition-all duration-300">
      
      {/* Premium Dark Curved Banner Strip */}
      <div className="w-full relative bg-[#0c0c0e] text-white pt-16 pb-24 px-6 text-center overflow-hidden border-t border-zinc-900/60">
        {/* Subtle glow effect in background */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_20%,_#BFFF07_0%,_transparent_60%)] pointer-events-none" />
        
        <div className="max-w-[1440px] mx-auto relative z-10">
          <h2 className="font-general-sans text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight leading-[1.2] uppercase mb-4 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
            Ride Smarter with Ziko <span className="text-[#BFFF07]">EV</span> Electric Scooters
          </h2>
          <p className="font-sans text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto mb-8 leading-relaxed font-normal">
            Join India's electric mobility revolution with premium scooters designed for performance, savings, and sustainability.
          </p>
          <Link 
            href="#test-ride" 
            className="inline-flex items-center gap-2 bg-[#BFFF07] hover:bg-[#a6df05] text-black font-sans font-bold text-xs uppercase px-8 py-3.5 rounded-full hover:scale-[1.03] active:scale-95 transition-all shadow-[0_4px_20px_rgba(191,255,7,0.25)] tracking-wider"
          >
            Book Your Test Ride ➔
          </Link>
        </div>

        {/* Custom wave SVG divider at the bottom edge */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-[0] pointer-events-none select-none">
          <svg className="relative block w-full h-[40px] text-[#070707] fill-current" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0 C150,90 350,120 600,80 C850,40 1050,90 1200,0 L1200,120 L0,120 Z"></path>
          </svg>
        </div>
      </div>

      {/* Grid Features Content Section (Dark background matching ScooterShowcase) */}
      <div className="w-full py-20 px-6 bg-[#070707] relative text-center">
        <div className="max-w-[1440px] mx-auto">
          
          {/* Section title */}
          <div className="mb-12">
            <h2 className="font-general-sans text-3xl sm:text-4xl font-black text-white tracking-tight uppercase">
              Why Choose <span className="text-[#BFFF07]">Ziko EV?</span>
            </h2>
            <div className="w-16 h-1 bg-[#BFFF07]/80 mx-auto mt-4 rounded-full shadow-sm" />
          </div>

          {/* Cards Grid - 4 Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10 max-w-[1320px] mx-auto pt-6">
            {features.map((feature, idx) => (
              <div 
                key={idx}
                className="bg-[#121212] rounded-[24px] border border-zinc-800/10 p-8 flex flex-col items-center text-center shadow-[0_12px_30px_rgba(0,0,0,0.4)] hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)] transition-all duration-300 relative group min-h-[250px] justify-start"
              >
                {/* Outlined Icon directly on card background */}
                <div className="text-white w-10 h-10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>

                {/* Feature Title */}
                <h3 className="font-general-sans text-[16px] sm:text-[18px] font-bold text-white mb-3 uppercase tracking-wide">
                  {feature.title}
                </h3>

                {/* Feature Description */}
                <p className="font-sans text-xs sm:text-[13px] text-zinc-500 leading-relaxed font-normal max-w-[240px]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>

    </div>
  );
}
