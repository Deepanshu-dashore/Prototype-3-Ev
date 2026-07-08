"use client";

import { useState } from "react";
import Image from "next/image";

export default function TestRideSection() {
  // Test Ride Form State
  const [testRideForm, setTestRideForm] = useState({
    scooter: "",
    name: "",
    mobile: "",
    city: ""
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Handle Form Submit
  const handleTestRideSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (testRideForm.scooter && testRideForm.name && testRideForm.mobile && testRideForm.city) {
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setTestRideForm({ scooter: "", name: "", mobile: "", city: "" });
      }, 5000);
    }
  };

  return (
    <section className="py-2 sm:py-4 w-full px-4 lg:px-6 bg-slate-50 text-white transition-colors duration-300">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Left Container: Why Choose Ziko EV? (3 cols) */}
        <div className="lg:col-span-3 bg-[#070b13] text-white rounded-[24px] border border-slate-900 p-6 lg:p-8 flex flex-col justify-between transition-colors duration-300">
          <div>
            <span className="font-sans text-[11px] font-extrabold text-[#BFFF07] tracking-widest uppercase block mb-6">
              WHY CHOOSE ZIKO EV?
            </span>
            
            <div className="space-y-6">
              {/* Feature 1 */}
              <div className="flex gap-4 items-start text-left">
                <div className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center text-white shrink-0 bg-slate-900/50">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-sans text-xs font-bold text-white uppercase tracking-wider">100% Made in India</h3>
                  <p className="font-sans text-[10px] text-slate-400 mt-1 leading-relaxed font-medium">Proudly designed & manufactured in India.</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-4 items-start text-left">
                <div className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center text-white shrink-0 bg-slate-900/50">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-sans text-xs font-bold text-white uppercase tracking-wider">Advanced Technology</h3>
                  <p className="font-sans text-[10px] text-slate-400 mt-1 leading-relaxed font-medium">Cutting-edge tech for superior performance.</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex gap-4 items-start text-left">
                <div className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center text-white shrink-0 bg-slate-900/50">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-sans text-xs font-bold text-white uppercase tracking-wider">Trusted by Thousands</h3>
                  <p className="font-sans text-[10px] text-slate-400 mt-1 leading-relaxed font-medium">10,000+ happy customers across India.</p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex gap-4 items-start text-left">
                <div className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center text-white shrink-0 bg-slate-900/50">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-sans text-xs font-bold text-white uppercase tracking-wider">Wide Service Network</h3>
                  <p className="font-sans text-[10px] text-slate-400 mt-1 leading-relaxed font-medium">500+ service centers & growing.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Container: Story + Stats + Book Test Ride (9 cols) */}
        <div className="lg:col-span-9 bg-[#070b13] text-white rounded-[24px] border border-slate-900 overflow-hidden grid grid-cols-1 md:grid-cols-12 transition-colors duration-300">
          
          {/* Sub-column 1: Story (4 cols) */}
          <div className="md:col-span-4 p-8 lg:p-10 flex flex-col justify-between bg-gradient-to-br from-blue-700 via-blue-800 to-blue-950 relative overflow-hidden">
            {/* Glow effect */}
            <div className="absolute -left-10 -top-10 w-44 h-44 bg-blue-500/30 rounded-full blur-3xl pointer-events-none" />
            
            <div>
              <div className="w-16 h-16 rounded-[16px] border border-white/10 bg-white/5 flex items-center justify-center mb-8 relative z-10">
                {/* Z Icon */}
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 stroke-[#BFFF07] stroke-[8] filter drop-shadow-[0_0_6px_#BFFF07]">
                  <path d="M15 15H85L35 60H85L70 85H15L45 40H15V15Z" />
                </svg>
              </div>
              <h3 className="font-sans text-2xl lg:text-3xl font-black uppercase tracking-tight leading-tight text-white mb-6 relative z-10">
                The Future <br /> is Electric. <br />
                <span className="text-[#BFFF07]">The Future is Ziko.</span>
              </h3>
            </div>

            <button className="group inline-flex items-center gap-3 mt-6 text-white hover:text-[#BFFF07] font-sans text-xs font-bold uppercase tracking-wider transition-all duration-300 self-start relative z-10">
              <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center transition-all duration-300 group-hover:bg-[#BFFF07] group-hover:scale-105 shadow-md">
                <span className="ml-0.5 text-xs">▶</span>
              </div>
              Watch Our Story
            </button>
          </div>

          {/* Sub-column 2: Stats (3 cols) */}
          <div className="md:col-span-3 p-6 lg:p-8 flex flex-col justify-center gap-6 border-y md:border-y-0 md:border-r border-slate-900 bg-[#070b13]">
            {/* Stat 1 */}
            <div className="flex items-center gap-3 text-left">
              <div className="w-9 h-9 rounded-full border border-[#BFFF07]/20 flex items-center justify-center text-[#BFFF07] shrink-0">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div>
                <span className="block font-sans text-sm font-black text-white leading-none">10,000+</span>
                <span className="block text-[8px] text-slate-400 font-bold uppercase tracking-wider mt-1">Happy Customers</span>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex items-center gap-3 text-left">
              <div className="w-9 h-9 rounded-full border border-[#BFFF07]/20 flex items-center justify-center text-[#BFFF07] shrink-0">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <span className="block font-sans text-sm font-black text-white leading-none">500+</span>
                <span className="block text-[8px] text-slate-400 font-bold uppercase tracking-wider mt-1">Service Centers</span>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex items-center gap-3 text-left">
              <div className="w-9 h-9 rounded-full border border-[#BFFF07]/20 flex items-center justify-center text-[#BFFF07] shrink-0">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <span className="block font-sans text-sm font-black text-white leading-none">15+</span>
                <span className="block text-[8px] text-slate-400 font-bold uppercase tracking-wider mt-1">States Covered</span>
              </div>
            </div>

            {/* Stat 4 */}
            <div className="flex items-center gap-3 text-left">
              <div className="w-9 h-9 rounded-full border border-[#BFFF07]/20 flex items-center justify-center text-[#BFFF07] shrink-0">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <span className="block font-sans text-sm font-black text-white leading-none">99%</span>
                <span className="block text-[8px] text-slate-400 font-bold uppercase tracking-wider mt-1">Qlt Products</span>
              </div>
            </div>
          </div>

          {/* Sub-column 3: Book Test Ride Form + Scooter Image (5 cols) */}
          <div className="md:col-span-5 p-6 lg:p-8 relative overflow-hidden bg-[#070b13] flex flex-col justify-center min-h-[380px] md:min-h-0">
            {/* Background Scooter Image (Full Column Background, positioned to show scooter on the right) */}
            <div className="absolute inset-0 z-0 pointer-events-none select-none hidden md:block">
              <Image 
                src="/products/Experience the future of mobility..png" 
                alt="Experience the future of mobility" 
                fill 
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover object-[82%_center]" 
              />
              {/* Dark overlay to ensure form readability on the left */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#070b13] via-[#070b13]/85 to-transparent" />
            </div>

            {/* Form Container (Left Aligned, Full Width on mobile) */}
            <div className="relative z-10 w-full md:w-[68%] lg:w-[62%] text-left">
              <span className="font-sans text-[11px] font-bold text-[#BFFF07] tracking-widest uppercase block mb-1">
                BOOK A TEST RIDE
              </span>
              <h3 className="font-sans text-[10px] text-slate-400 font-medium tracking-wide mb-5">
                Experience the future of mobility.
              </h3>
              
              {formSubmitted ? (
                <div className="my-4 text-center py-4 px-3 bg-[#BFFF07]/10 border border-[#BFFF07]/20 rounded-[8px] text-[#BFFF07] font-sans text-xs font-semibold">
                  ⚡ Test Ride Booked Successfully! <br /> Our representative will contact you.
                </div>
              ) : (
                <form onSubmit={handleTestRideSubmit} className="space-y-3">
                  {/* Select Scooter */}
                  <div className="relative">
                    <select 
                      required
                      value={testRideForm.scooter}
                      onChange={(e) => setTestRideForm(prev => ({...prev, scooter: e.target.value}))}
                      className="w-full bg-[#0d121f]/90 border border-slate-800 rounded-[8px] pl-4 pr-10 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#BFFF07] focus:ring-1 focus:ring-[#BFFF07]/20 transition-all duration-300 appearance-none cursor-pointer"
                    >
                      <option value="" disabled className="bg-slate-950">Select Scooter</option>
                      <option value="ziko-one" className="bg-slate-950">Ziko One (Flagship)</option>
                      <option value="ziko-lite" className="bg-slate-950">Ziko Lite (Standard)</option>
                      <option value="ziko-go" className="bg-slate-950">Ziko Go (Lightweight)</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#BFFF07]">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                  {/* Full Name */}
                  <div>
                    <input 
                      type="text" 
                      required
                      placeholder="Full Name"
                      value={testRideForm.name}
                      onChange={(e) => setTestRideForm(prev => ({...prev, name: e.target.value}))}
                      className="w-full bg-[#0d121f]/90 border border-slate-800 rounded-[8px] px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#BFFF07] focus:ring-1 focus:ring-[#BFFF07]/20 transition-all duration-300"
                    />
                  </div>

                  {/* Mobile Number */}
                  <div>
                    <input 
                      type="tel" 
                      required
                      placeholder="Mobile Number"
                      value={testRideForm.mobile}
                      onChange={(e) => setTestRideForm(prev => ({...prev, mobile: e.target.value}))}
                      className="w-full bg-[#0d121f]/90 border border-slate-800 rounded-[8px] px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#BFFF07] focus:ring-1 focus:ring-[#BFFF07]/20 transition-all duration-300"
                    />
                  </div>

                  {/* Select City */}
                  <div className="relative">
                    <select 
                      required
                      value={testRideForm.city}
                      onChange={(e) => setTestRideForm(prev => ({...prev, city: e.target.value}))}
                      className="w-full bg-[#0d121f]/90 border border-slate-800 rounded-[8px] pl-4 pr-10 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#BFFF07] focus:ring-1 focus:ring-[#BFFF07]/20 transition-all duration-300 appearance-none cursor-pointer"
                    >
                      <option value="" disabled className="bg-slate-950">Select City</option>
                      <option value="delhi" className="bg-slate-950">Delhi / NCR</option>
                      <option value="mumbai" className="bg-slate-950">Mumbai</option>
                      <option value="bangalore" className="bg-slate-950">Bangalore</option>
                      <option value="pune" className="bg-slate-950">Pune</option>
                      <option value="hyderabad" className="bg-slate-950">Hyderabad</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#BFFF07]">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-[#BFFF07] hover:bg-[#a6df05] text-black font-sans text-xs font-black uppercase py-3 rounded-[8px] tracking-wider transition-all duration-300 hover:shadow-[0_0_15px_rgba(191,255,7,0.3)] mt-3 flex items-center justify-center gap-1.5"
                  >
                    Book Test Ride ➔
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
