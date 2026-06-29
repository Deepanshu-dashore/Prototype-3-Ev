"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ProductGrid from "./components/shared/ProductGrid";
import { motion } from "framer-motion";

export default function Home() {
  const [selectedMode, setSelectedMode] = useState<"aero" | "performance" | "endurance">("aero");

  const featuredBikes = [
    {
      id: "vir-nexus",
      name: "VIR NEXUS",
      price: 39999,
      image: "/products/vir_nexus.png",
      description: "Aero carbon-weave frame with integrated down-tube battery cells.",
      badge: { text: "BEST SELLER", type: "best" as const },
      specs: [
        { label: "Range", value: "70KM" },
        { label: "Top Speed", value: "25KM/H" },
      ],
      category: "bike" as const,
    },
    {
      id: "vir-atom",
      name: "VIR ATOM",
      price: 49999,
      image: "/products/vir_atom.png",
      description: "Tough alloy frame with extended telemetry display cockpit.",
      badge: { text: "NEW RELEASE", type: "new" as const },
      specs: [
        { label: "Range", value: "90KM" },
        { label: "Top Speed", value: "25KM/H" },
      ],
      category: "bike" as const,
    },
    {
      id: "vir-pro",
      name: "VIR PRO",
      price: 59999,
      image: "/products/vir_pro.png",
      description: "Titanium composite chassis with auto-regenerative hub system.",
      badge: { text: "PREMIUM RIDE", type: "premium" as const },
      specs: [
        { label: "Range", value: "110KM" },
        { label: "Top Speed", value: "25KM/H" },
      ],
      category: "bike" as const,
    },
  ];

  const modeData = {
    aero: {
      title: "Aerodynamic Calibration",
      desc: "Minimizes drag coefficient using flush handlebar sweeps and reduced power outputs to sustain terminal velocity.",
      speed: "25 KM/H",
      range: "85 KM",
      torque: "45 Nm",
      efficiency: "96%",
    },
    performance: {
      title: "Velocity Acceleration",
      desc: "Delivers maximum discharge current to the direct-hub motor, maximizing instant starting torque curves.",
      speed: "25 KM/H",
      range: "60 KM",
      torque: "85 Nm",
      efficiency: "88%",
    },
    endurance: {
      title: "Distance Conservation",
      desc: "Optimizes power outputs dynamically based on rider cadence, preserving battery health for max range targets.",
      speed: "20 KM/H",
      range: "110 KM",
      torque: "35 Nm",
      efficiency: "98%",
    },
  };

  const technologies = [
    {
      title: "Carbon Weave Structure",
      description: "Unidirectional carbon weave layup optimized for torsional rigidity and minimal wind drag profiles.",
      icon: (
        <svg className="w-5 h-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
    {
      title: "Integrated Battery Down-Tube",
      description: "High-density energy storage cells engineered flush inside the structural frame alloy.",
      icon: (
        <svg className="w-5 h-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Direct Regenerative Hub",
      description: "Advanced algorithms harvesting braking energy to top off battery reserves on steep descents.",
      icon: (
        <svg className="w-5 h-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900">
      <Navbar />

      {/* Hero Section - Edge-to-edge layout, spacious padding, borderless */}
      <section className="relative w-full overflow-hidden py-24 sm:py-32 bg-slate-50">
        
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Hero Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-6 flex flex-col items-start text-left"
          >
            <span className="inline-flex items-center px-3 py-1 rounded-[4px] border border-indigo-600/25 text-indigo-600 font-sans text-xs font-bold tracking-widest uppercase mb-6 bg-white">
              Engineering Masterpiece
            </span>
            
            <h1 className="font-general-sans text-4xl sm:text-6xl lg:text-[76px] font-black leading-[0.98] tracking-[-0.03em] text-slate-900 mb-6">
              High-velocity <br className="hidden sm:inline" />
              <span className="text-indigo-600">carbon precision.</span>
            </h1>
            
            <p className="font-sans text-base sm:text-lg text-slate-500 max-w-lg mb-8 leading-relaxed">
              We engineer premium electric machines utilizing state-of-the-art carbon-weave geometry and integrated battery structures. Redefine your boundaries of speed, torque, and range.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/scooter"
                  className="block px-8 py-4 bg-slate-900 text-white font-sans text-xs font-semibold tracking-wider text-center uppercase rounded-md hover:bg-indigo-600 hover:shadow-[0_4px_15px_rgba(79,70,229,0.3)] transition-all duration-300"
                >
                  EXPLORE SCOOTERS
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/accessories"
                  className="block px-8 py-4 bg-white text-slate-900 border border-slate-200 font-sans text-xs font-semibold tracking-wider text-center uppercase rounded-md hover:border-slate-900 hover:bg-slate-50 transition-all duration-300"
                >
                  ACCESSORIES
                </Link>
              </motion.div>
            </div>

            {/* Quick Specs Row - No dividing border line */}
            <div className="grid grid-cols-3 gap-6 sm:gap-10 mt-12 pt-4 w-full font-sans">
              <div>
                <span className="block font-general-sans text-2xl font-extrabold text-slate-900 tracking-tight">110 KM</span>
                <span className="block text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-1">MAX RANGE</span>
              </div>
              <div>
                <span className="block font-general-sans text-2xl font-extrabold text-slate-900 tracking-tight">2.4 SEC</span>
                <span className="block text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-1">0-25 KM/H</span>
              </div>
              <div>
                <span className="block font-general-sans text-2xl font-extrabold text-slate-900 tracking-tight">14.2 KG</span>
                <span className="block text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-1">TOTAL WEIGHT</span>
              </div>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-6 flex items-center justify-center relative w-full h-[350px] sm:h-[450px] lg:h-[500px]"
          >
            {/* Ambient lighting circle */}
            <div className="absolute w-[80%] h-[80%] rounded-full bg-indigo-600/5 blur-[80px] pointer-events-none" />
            
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing"
            >
              <Image
                src="/products/vir_nexus.png"
                alt="VIR Nexus Flagship E-Bike"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Collection Section - Clean visual alignment without boxed folder panels */}
      <section className="py-24 sm:py-32 bg-slate-50">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 font-sans">
            <div>
              <span className="text-xs font-bold text-indigo-600 tracking-widest uppercase block mb-3">
                Our Top Picks
              </span>
              <h2 className="font-general-sans text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.01em] text-slate-900">
                Featured collection
              </h2>
            </div>
            <Link
              href="/scooter"
              className="group inline-flex items-center gap-2 text-xs font-bold text-indigo-600 tracking-widest uppercase hover:text-slate-900 transition-colors mt-4 md:mt-0"
            >
              VIEW ALL BIKES →
            </Link>
          </div>

          {/* Grid display */}
          <ProductGrid products={featuredBikes} />

        </div>
      </section>

      {/* Interactive Calibration Panel - Clean surface separation, borderless */}
      <section className="py-24 sm:py-32 bg-slate-50">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="text-center mb-16">
            <span className="font-sans text-xs font-bold text-indigo-600 tracking-widest uppercase block mb-3">
              Virtual Cockpit Calibration
            </span>
            <h2 className="font-general-sans text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.01em] text-slate-900">
              Performance calibration
            </h2>
            <p className="font-sans text-sm text-slate-500 max-w-xl mx-auto mt-4 leading-relaxed">
              Toggle the bike's internal control profile. Observe how high-density cells, motor torque curves, and aero geometry dynamically modify specifications.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white rounded-3xl p-8 lg:p-16 shadow-[0_8px_40px_rgba(15,23,42,0.03)]">
            
            {/* Mode Selectors */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <span className="font-sans text-[10px] text-slate-500 tracking-widest uppercase block font-bold mb-2">
                Select Power Profile
              </span>
              
              <button
                onClick={() => setSelectedMode("aero")}
                className={`w-full text-left p-5 rounded-2xl transition-all duration-300 flex items-center justify-between ${
                  selectedMode === "aero"
                    ? "bg-slate-50 text-slate-900 shadow-[0_4px_20px_rgba(79,70,229,0.06)]"
                    : "bg-white text-slate-500 hover:text-slate-900"
                }`}
              >
                <div>
                  <span className="font-general-sans text-sm font-bold uppercase tracking-wider block">Aero Mode</span>
                  <span className="font-sans text-xs text-slate-500 mt-1 block">Drag Minimization Tuning</span>
                </div>
                <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${selectedMode === "aero" ? "border-indigo-600" : "border-slate-200"}`}>
                  {selectedMode === "aero" && <div className="w-1.5 h-1.5 rounded-full bg-indigo-600" />}
                </div>
              </button>

              <button
                onClick={() => setSelectedMode("performance")}
                className={`w-full text-left p-5 rounded-2xl transition-all duration-300 flex items-center justify-between ${
                  selectedMode === "performance"
                    ? "bg-slate-50 text-slate-900 shadow-[0_4px_20px_rgba(79,70,229,0.06)]"
                    : "bg-white text-slate-500 hover:text-slate-900"
                }`}
              >
                <div>
                  <span className="font-general-sans text-sm font-bold uppercase tracking-wider block">Performance Mode</span>
                  <span className="font-sans text-xs text-slate-500 mt-1 block">Instant Current Discharge</span>
                </div>
                <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${selectedMode === "performance" ? "border-indigo-600" : "border-slate-200"}`}>
                  {selectedMode === "performance" && <div className="w-1.5 h-1.5 rounded-full bg-indigo-600" />}
                </div>
              </button>

              <button
                onClick={() => setSelectedMode("endurance")}
                className={`w-full text-left p-5 rounded-2xl transition-all duration-300 flex items-center justify-between ${
                  selectedMode === "endurance"
                    ? "bg-slate-50 text-slate-900 shadow-[0_4px_20px_rgba(79,70,229,0.06)]"
                    : "bg-white text-slate-500 hover:text-slate-900"
                }`}
              >
                <div>
                  <span className="font-general-sans text-sm font-bold uppercase tracking-wider block">Endurance Mode</span>
                  <span className="font-sans text-xs text-slate-500 mt-1 block">Distance Maximization Calibration</span>
                </div>
                <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${selectedMode === "endurance" ? "border-indigo-600" : "border-slate-200"}`}>
                  {selectedMode === "endurance" && <div className="w-1.5 h-1.5 rounded-full bg-indigo-600" />}
                </div>
              </button>
            </div>

            {/* Calibration Meters Display */}
            <div className="lg:col-span-7 flex flex-col justify-between pt-8 lg:pt-0 lg:pl-12 min-h-[300px]">
              <div>
                <span className="inline-block px-2.5 py-0.5 rounded-[4px] font-sans text-[9px] uppercase tracking-wider bg-indigo-50 text-indigo-600 font-bold mb-3">
                  PROFILE SPECS
                </span>
                <h3 className="font-general-sans text-2xl font-black text-slate-900 uppercase tracking-tight">
                  {modeData[selectedMode].title}
                </h3>
                <p className="font-sans text-sm text-slate-500 mt-2 leading-relaxed">
                  {modeData[selectedMode].desc}
                </p>
              </div>

              {/* Dynamic Meters - Borderless Cards */}
              <div className="grid grid-cols-2 gap-6 mt-8 font-sans">
                <div className="bg-slate-50 p-5 rounded-2xl">
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">Tuned Top Speed</span>
                  <motion.span 
                    key={selectedMode + "-speed"}
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="block font-general-sans text-2xl font-black text-slate-900 tracking-tight mt-1"
                  >
                    {modeData[selectedMode].speed}
                  </motion.span>
                </div>
                <div className="bg-slate-50 p-5 rounded-2xl">
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">Calibrated Range</span>
                  <motion.span 
                    key={selectedMode + "-range"}
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="block font-general-sans text-2xl font-black text-slate-900 tracking-tight mt-1"
                  >
                    {modeData[selectedMode].range}
                  </motion.span>
                </div>
                <div className="bg-slate-50 p-5 rounded-2xl">
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">Silent Torque</span>
                  <motion.span 
                    key={selectedMode + "-torque"}
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="block font-general-sans text-2xl font-black text-slate-900 tracking-tight mt-1"
                  >
                    {modeData[selectedMode].torque}
                  </motion.span>
                </div>
                <div className="bg-slate-50 p-5 rounded-2xl">
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">Cell Efficiency</span>
                  <motion.span 
                    key={selectedMode + "-eff"}
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="block font-general-sans text-2xl font-black text-indigo-600 tracking-tight mt-1"
                  >
                    {modeData[selectedMode].efficiency}
                  </motion.span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Technology Integration Section - Alternating background, borderless card */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Image display */}
            <div className="lg:col-span-5 order-2 lg:order-1 relative w-full h-[300px] sm:h-[400px] bg-slate-50/50 rounded-3xl overflow-hidden flex items-center justify-center p-8">
              <div className="absolute inset-0 bg-indigo-600/5 blur-3xl pointer-events-none" />
              <Image
                src="/products/vir_pro.png"
                alt="Ziko EV Engineering Design"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-contain scale-95 p-4"
              />
            </div>

            {/* Explanation grid */}
            <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col gap-8">
              <div>
                <span className="font-sans text-xs font-bold text-indigo-600 tracking-widest uppercase block mb-2">
                  Precision Materials
                </span>
                <h2 className="font-general-sans text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.01em] text-slate-900">
                  Industrial ingenuity
                </h2>
                <p className="font-sans text-sm sm:text-base text-slate-500 mt-4 leading-relaxed">
                  Every structural component undergoes strict mechanical optimization. We optimize carbon weave directions and tube thicknesses to deliver extreme stiffness-to-weight ratios.
                </p>
              </div>

              <div className="flex flex-col gap-6 mt-4 font-sans">
                {technologies.map((tech, idx) => (
                  <div 
                    key={idx}
                    className="flex gap-4 items-start p-5 rounded-2xl bg-white shadow-[0_4px_20px_rgba(15,23,42,0.01)] hover:shadow-[0_8px_30px_rgba(15,23,42,0.03)] transition-all duration-300 cursor-default"
                  >
                    <div className="p-3 rounded-lg bg-slate-50 flex items-center justify-center">
                      {tech.icon}
                    </div>
                    <div>
                      <h3 className="font-general-sans text-sm font-bold tracking-wider text-slate-900 uppercase">
                        {tech.title}
                      </h3>
                      <p className="font-sans text-xs text-slate-500 mt-1.5 leading-relaxed">
                        {tech.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Ride Section */}
      <section className="py-24 sm:py-28 relative overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(79,70,229,0.15),transparent_50%)] pointer-events-none" />
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16 flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
          <div>
            <h2 className="font-general-sans text-3xl font-black tracking-tight text-white uppercase">
              Redefine your daily commute
            </h2>
            <p className="font-sans text-sm text-slate-400 mt-2 max-w-xl leading-relaxed">
              Experience the unmatched acceleration and precision handling of our machines. Schedule a technical presentation or private test ride with an expert.
            </p>
          </div>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/contact"
              className="block px-8 py-4 bg-white text-slate-900 font-sans text-xs font-semibold tracking-wider uppercase rounded-md hover:bg-indigo-600 hover:text-white hover:shadow-[0_4px_15px_rgba(79,70,229,0.4)] transition-all duration-300 whitespace-nowrap"
            >
              REQUEST A CALL
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
