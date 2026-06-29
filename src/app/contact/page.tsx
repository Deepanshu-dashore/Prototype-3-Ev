"use client";

import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    product: "vir-nexus",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-primary">
      <Navbar />

      {/* Main Section */}
      <section className="relative py-24 lg:py-32 flex-1 flex items-center bg-background">
        
        <div className="max-w-[1440px] w-full mx-auto px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10">
          
          {/* Left Column: Info & The Product Contact Card */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div>
              <span className="font-sans text-xs font-bold text-accent-indigo tracking-widest uppercase block mb-3">
                Connect With Us
              </span>
              <h1 className="font-general-sans text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.01em] text-primary">
                Technical support & inquiries
              </h1>
              <p className="font-sans text-sm font-normal text-neutral-gray mt-4 leading-relaxed">
                Connect directly with our engineering or client relations teams. Whether scheduling a private test ride, discussing carbon technology specs, or requesting custom configurations, we are here to support.
              </p>
            </div>

            {/* The "Contact Card of Product UI" - styled like a premium bike spec card (No borders, rounded-3xl) */}
            <div className="w-full rounded-3xl bg-surface p-8 shadow-[0_8px_30px_rgba(15,23,42,0.03)]">
              <div className="flex justify-between items-center mb-6">
                <span className="px-2.5 py-1 rounded-[4px] font-sans text-[9px] font-bold uppercase tracking-wider bg-accent-indigo text-white">
                  SPEC SUPPORT
                </span>
                <span className="font-general-sans text-[10px] text-neutral-gray tracking-widest font-black">
                  REV. 2026
                </span>
              </div>

              <h3 className="font-general-sans text-lg font-bold tracking-tight text-primary uppercase mb-4">
                ZIKO EV DIRECT CARD
              </h3>

              <div className="flex flex-col gap-4 pt-2 font-sans">
                {/* Tech Hotlines */}
                <div className="flex justify-between items-center">
                  <span className="text-xs text-neutral-gray font-medium uppercase tracking-wider">Specifications Hotline</span>
                  <span className="font-general-sans text-xs text-primary font-semibold">+1 (800) ZIKO-EV</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-neutral-gray font-medium uppercase tracking-wider">Dealer Inquiries</span>
                  <span className="font-general-sans text-xs text-primary font-semibold">dealers@zikoev.com</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-neutral-gray font-medium uppercase tracking-wider">Direct Tech Email</span>
                  <span className="font-general-sans text-xs text-primary font-semibold">support@zikoev.com</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-neutral-gray font-medium uppercase tracking-wider">Engineering Center</span>
                  <span className="font-general-sans text-xs text-accent-indigo font-semibold">HQ - Munich, DE</span>
                </div>
              </div>

              <div className="mt-8 pt-6 flex justify-between items-center border-t border-borders/60">
                <div className="flex flex-col">
                  <span className="font-general-sans text-xs font-bold text-primary tracking-wide">24/7 SUPPORT</span>
                  <span className="font-sans text-[10px] text-neutral-gray uppercase tracking-wider mt-0.5">AVAILABILITY</span>
                </div>
                
                {/* Visual pulsing dot */}
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span className="font-sans text-[9px] text-neutral-gray tracking-wider uppercase font-semibold">ONLINE</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Premium Inquiry Form (No borders, rounded-3xl) */}
          <div className="lg:col-span-7 rounded-3xl bg-surface p-8 shadow-[0_8px_40px_rgba(15,23,42,0.03)]">
            
            {submitted ? (
              <div className="py-16 text-center animate-fadeIn font-sans">
                <div className="w-16 h-16 bg-success/10 border border-success rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-general-sans text-xl font-bold text-primary uppercase tracking-tight mb-2">
                  Inquiry Received
                </h3>
                <p className="text-sm text-neutral-gray max-w-sm mx-auto leading-relaxed">
                  Your specifications request has been logged. An engineering specialist will review and reach out within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 px-6 py-3 border border-borders bg-surface text-neutral-gray font-sans text-xs font-semibold tracking-wider uppercase rounded-md hover:text-primary hover:border-primary transition-all duration-300"
                >
                  SUBMIT ANOTHER
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <h2 className="font-general-sans text-lg font-bold tracking-wider text-primary uppercase mb-2">
                    Submit Tech Request
                  </h2>
                  <p className="font-sans text-xs text-neutral-gray">
                    Please populate all technical parameters to route your request efficiently.
                  </p>
                </div>

                {/* Name field */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="font-sans text-xs font-medium text-neutral-gray uppercase tracking-wider">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-background border border-borders rounded-md py-3 px-4 text-primary font-sans text-sm font-normal focus:outline-none focus:border-accent-indigo transition-colors duration-300 focus:ring-1 focus:ring-accent-indigo"
                    placeholder="E.g., Marcus Vance"
                  />
                </div>

                {/* Email field */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="font-sans text-xs font-medium text-neutral-gray uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-background border border-borders rounded-md py-3 px-4 text-primary font-sans text-sm font-normal focus:outline-none focus:border-accent-indigo transition-colors duration-300 focus:ring-1 focus:ring-accent-indigo"
                    placeholder="E.g., marcus@velocity.com"
                  />
                </div>

                {/* Product dropdown */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="product" className="font-sans text-xs font-medium text-neutral-gray uppercase tracking-wider">
                    Machine of Interest
                  </label>
                  <select
                    id="product"
                    value={formData.product}
                    onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                    className="w-full bg-background border border-borders rounded-md py-3 px-4 text-primary font-sans text-sm font-normal focus:outline-none focus:border-accent-indigo transition-colors duration-300 focus:ring-1 focus:ring-accent-indigo"
                  >
                    <option value="vir-nexus">VIR NEXUS (E-Bike)</option>
                    <option value="vir-atom">VIR ATOM (E-Bike)</option>
                    <option value="vir-pro">VIR PRO (E-Bike)</option>
                    <option value="vir-flux">VIR FLUX (Scooter)</option>
                    <option value="vir-glide">VIR GLIDE (Scooter)</option>
                    <option value="vir-apex">VIR APEX (Scooter)</option>
                    <option value="helmet">Carbon Aero Helmet</option>
                  </select>
                </div>

                {/* Message field */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="font-sans text-xs font-medium text-neutral-gray uppercase tracking-wider">
                    Technical Specifications Details
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-background border border-borders rounded-md py-3 px-4 text-primary font-sans text-sm font-normal focus:outline-none focus:border-accent-indigo transition-colors duration-300 focus:ring-1 focus:ring-accent-indigo"
                    placeholder="Enter query detailing request parameters (e.g. customized sizing, cell metrics, delivery lead times)..."
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full bg-primary text-white font-sans text-xs font-semibold py-4 uppercase tracking-wider rounded-md hover:bg-accent-indigo hover:shadow-[0_4px_15px_rgba(79,70,229,0.3)] transition-all duration-300 mt-2"
                >
                  Send Technical Inquiry
                </button>
              </form>
            )}

          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
