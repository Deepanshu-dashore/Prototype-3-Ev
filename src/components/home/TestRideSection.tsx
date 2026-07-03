"use client";

import { useState } from "react";

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
    <section className="pt-12 pb-24 sm:pt-16 sm:pb-32 w-full px-6 lg:px-12 bg-background text-primary transition-colors duration-300">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
        
        {/* Column Left: Why Choose Ziko EV? */}
        <div className="lg:col-span-4 flex flex-col justify-between">
          <div>
            <span className="font-general-sans text-[10px] font-bold text-[#95c503] tracking-widest uppercase block mb-3">WHY CHOOSE ZIKO EV?</span>
            <h2 className="font-general-sans text-3xl sm:text-4xl font-black uppercase tracking-tight text-primary leading-tight mb-8 transition-colors duration-300">
              Uncompromising <br className="hidden lg:block" /> Quality.
            </h2>
          </div>
          
          <div className="space-y-6">
            {/* Feature 1 */}
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-lg bg-surface border border-borders flex items-center justify-center text-[#95c503] shrink-0 transition-colors duration-300">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h2a2.5 2.5 0 002.5-2.5V10a2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-general-sans text-xs font-black uppercase text-primary tracking-wider transition-colors duration-300">100% Made in India</h3>
                <p className="font-sans text-[11px] text-neutral-gray mt-1 font-light transition-colors duration-300">Proudly designed & manufactured in India.</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-lg bg-surface border border-borders flex items-center justify-center text-[#95c503] shrink-0 transition-colors duration-300">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364.364l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <h3 className="font-general-sans text-xs font-black uppercase text-primary tracking-wider transition-colors duration-300">Advanced Technology</h3>
                <p className="font-sans text-[11px] text-neutral-gray mt-1 font-light transition-colors duration-300">Cutting edge tech for superior performance.</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-lg bg-surface border border-borders flex items-center justify-center text-[#95c503] shrink-0 transition-colors duration-300">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-general-sans text-xs font-black uppercase text-primary tracking-wider transition-colors duration-300">Trusted by Thousands</h3>
                <p className="font-sans text-[11px] text-neutral-gray mt-1 font-light transition-colors duration-300">10,000+ happy customers across India.</p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-lg bg-surface border border-borders flex items-center justify-center text-[#95c503] shrink-0 transition-colors duration-300">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="font-general-sans text-xs font-black uppercase text-primary tracking-wider transition-colors duration-300">Charging Network</h3>
                <p className="font-sans text-[11px] text-neutral-gray mt-1 font-light transition-colors duration-300">150+ fast charging stations and growing.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Column Center: Brand Story blue card & stats */}
        <div className="lg:col-span-4 flex flex-col gap-6 justify-between">
          {/* Top Blue Gradient Card */}
          <div className="flex-1 bg-gradient-to-br from-[#0F3661] to-[#0A2240] rounded-[16px] p-8 flex flex-col justify-between text-white relative overflow-hidden min-h-[220px]">
            {/* Soft logo in background */}
            <div className="absolute right-0 bottom-0 w-36 h-36 opacity-10 pointer-events-none translate-x-10 translate-y-10">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full stroke-white stroke-[2]">
                <path d="M15 15H85L35 60H85L70 85H15L45 40H15V15Z" />
              </svg>
            </div>

            <div className="w-12 h-12 rounded-[10px] border border-white/20 bg-white/5 flex items-center justify-center">
              {/* Z Icon */}
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 stroke-[#BFFF07] stroke-[6]">
                <path d="M15 15H85L35 60H85L70 85H15L45 40H15V15Z" />
              </svg>
            </div>

            <div className="mt-8">
              <h3 className="font-general-sans text-xl sm:text-2xl font-black uppercase tracking-tight leading-tight">
                The Future is Electric. <br />
                The Future is Ziko.
              </h3>
              <button className="group inline-flex items-center gap-2 mt-6 text-[#BFFF07] hover:text-white font-general-sans text-[10px] font-black uppercase tracking-widest transition-colors">
                <div className="w-6 h-6 rounded-full bg-[#BFFF07] group-hover:bg-white text-black flex items-center justify-center transition-colors">
                  <span className="ml-0.5 text-[8px]">▶</span>
                </div>
                Watch Our Story
              </button>
            </div>
          </div>

          {/* Bottom 2x2 Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-surface border border-borders rounded-[12px] p-4 text-center transition-colors duration-300">
              <span className="block font-general-sans text-xl font-black text-primary leading-none transition-colors duration-300">10,000+</span>
              <span className="block text-[8px] text-neutral-gray font-bold uppercase tracking-wider mt-1.5 transition-colors duration-300">Happy Customers</span>
            </div>
            <div className="bg-surface border border-borders rounded-[12px] p-4 text-center transition-colors duration-300">
              <span className="block font-general-sans text-xl font-black text-primary leading-none transition-colors duration-300">150+</span>
              <span className="block text-[8px] text-neutral-gray font-bold uppercase tracking-wider mt-1.5 transition-colors duration-300">Fast Chargers</span>
            </div>
            <div className="bg-surface border border-borders rounded-[12px] p-4 text-center transition-colors duration-300">
              <span className="block font-general-sans text-xl font-black text-primary leading-none transition-colors duration-300">15+</span>
              <span className="block text-[8px] text-neutral-gray font-bold uppercase tracking-wider mt-1.5 transition-colors duration-300">States Covered</span>
            </div>
            <div className="bg-surface border border-borders rounded-[12px] p-4 text-center transition-colors duration-300">
              <span className="block font-general-sans text-xl font-black text-primary leading-none transition-colors duration-300">99%</span>
              <span className="block text-[8px] text-neutral-gray font-bold uppercase tracking-wider mt-1.5 transition-colors duration-300">Cst Satisfaction</span>
            </div>
          </div>
        </div>

        {/* Column Right: Book a Test Ride form */}
        <div className="lg:col-span-4 bg-surface text-primary rounded-[16px] p-6 lg:p-8 flex flex-col justify-between border border-borders relative transition-colors duration-300">
          <div>
            <span className="font-general-sans text-[10px] font-bold text-[#BFFF07] tracking-widest uppercase block mb-2">BOOK A TEST RIDE</span>
            <h3 className="font-general-sans text-lg lg:text-xl font-black uppercase text-primary tracking-wide transition-colors duration-300">Experience the future of mobility.</h3>
            
            {formSubmitted ? (
              <div className="my-10 text-center py-6 px-4 bg-[#BFFF07]/10 border border-[#BFFF07]/20 rounded-[8px] text-[#BFFF07] font-sans text-xs font-semibold">
                ⚡ Test Ride Booked Successfully! <br /> Our representative will contact you in 24 hours.
              </div>
            ) : (
              <form onSubmit={handleTestRideSubmit} className="space-y-4 mt-6">
                {/* Select Scooter */}
                <div>
                  <select 
                    required
                    value={testRideForm.scooter}
                    onChange={(e) => setTestRideForm(prev => ({...prev, scooter: e.target.value}))}
                    className="w-full bg-background border border-borders rounded-[4px] px-3.5 py-2.5 text-xs text-primary placeholder-neutral-gray focus:outline-none focus:border-[#BFFF07] transition-colors duration-300"
                  >
                    <option value="" disabled className="bg-surface">Select Scooter</option>
                    <option value="ziko-one" className="bg-surface">Ziko One (Flagship)</option>
                    <option value="ziko-lite" className="bg-surface">Ziko Lite (Standard)</option>
                    <option value="ziko-go" className="bg-surface">Ziko Go (Lightweight)</option>
                  </select>
                </div>

                {/* Full Name */}
                <div>
                  <input 
                    type="text" 
                    required
                    placeholder="Full Name"
                    value={testRideForm.name}
                    onChange={(e) => setTestRideForm(prev => ({...prev, name: e.target.value}))}
                    className="w-full bg-background border border-borders rounded-[4px] px-3.5 py-2.5 text-xs text-primary placeholder-neutral-gray focus:outline-none focus:border-[#BFFF07] transition-colors duration-300"
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
                    className="w-full bg-background border border-borders rounded-[4px] px-3.5 py-2.5 text-xs text-primary placeholder-neutral-gray focus:outline-none focus:border-[#BFFF07] transition-colors duration-300"
                  />
                </div>

                {/* Select City */}
                <div>
                  <select 
                    required
                    value={testRideForm.city}
                    onChange={(e) => setTestRideForm(prev => ({...prev, city: e.target.value}))}
                    className="w-full bg-background border border-borders rounded-[4px] px-3.5 py-2.5 text-xs text-primary placeholder-neutral-gray focus:outline-none focus:border-[#BFFF07] transition-colors duration-300"
                  >
                    <option value="" disabled className="bg-surface">Select City</option>
                    <option value="delhi" className="bg-surface">Delhi / NCR</option>
                    <option value="mumbai" className="bg-surface">Mumbai</option>
                    <option value="bangalore" className="bg-surface">Bangalore</option>
                    <option value="pune" className="bg-surface">Pune</option>
                    <option value="hyderabad" className="bg-surface">Hyderabad</option>
                  </select>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-[#BFFF07] hover:bg-[#a6df05] text-black font-general-sans text-[11px] font-black uppercase py-3 rounded-[4px] tracking-widest transition-colors mt-2"
                >
                  Book Test Ride ➔
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
