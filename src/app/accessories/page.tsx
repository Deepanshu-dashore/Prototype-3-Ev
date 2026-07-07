"use client";

import { Suspense, useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import ProductGrid from "../../components/shared/ProductGrid";

function AccessoriesContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const cat = searchParams ? searchParams.get("cat") : null;

  const allAccessories = [
    {
      id: "carbon-helmet",
      name: "Carbon Aero Helmet",
      price: 9999,
      image: "/products/helmet.png",
      description: "Ultra-lightweight aerodynamic shell with LED safety beacon.",
      badge: { text: "GLOSS WEAVE", type: "spec" as const },
      specs: [
        { label: "Weight", value: "240G" },
        { label: "Safety", value: "LED Rear" },
      ],
      category: "accessory" as const,
      type: "gear",
    },
    {
      id: "smart-gps",
      name: "Smart GPS Mount",
      price: 4499,
      image: "/products/gps.png",
      description: "GPS telemetry cockpit mount running Cobalt OS.",
      badge: { text: "CNC MACHINED", type: "spec" as const },
      specs: [
        { label: "Display", value: "Cobalt OS" },
        { label: "Battery", value: "12 HR" },
      ],
      category: "accessory" as const,
      type: "gear",
    },
    {
      id: "fast-charger",
      name: "Fast Charging Station",
      price: 14999,
      image: "/products/charge.png",
      description: "Rapid power bank delivering 80% capacity in 40 minutes.",
      badge: { text: "80% IN 40M", type: "spec" as const },
      specs: [
        { label: "Output", value: "4.5 Amps" },
        { label: "Standard", value: "Cobalt Safe" },
      ],
      category: "accessory" as const,
      type: "batteries",
    },
    {
      id: "lithium-charger",
      name: "Smart Lithium Charger",
      price: 6499,
      image: "/products/charge.png",
      description: "Smart charger with auto-cutoff and rapid flow rate for Cobalt batteries.",
      badge: { text: "POPULAR", type: "best" as const },
      specs: [
        { label: "Voltage", value: "48V" },
        { label: "Flow Rate", value: "3.0A" },
      ],
      category: "accessory" as const,
      type: "spare-parts",
    },
    {
      id: "hub-motor-controller",
      name: "High-Torque Motor Controller",
      price: 8999,
      image: "/products/moter.png",
      description: "Direct-drive brushless motor controller with active cooling fin structure.",
      badge: { text: "CNC FIN", type: "new" as const },
      specs: [
        { label: "Current", value: "25A" },
        { label: "Compatibility", value: "Cobalt" },
      ],
      category: "accessory" as const,
      type: "spare-parts",
    },
    {
      id: "apex-brakes",
      name: "Apex Hydraulic Brake Set",
      price: 3499,
      image: "/products/breack.png",
      description: "Mineral oil hydraulic brakes with dual piston calipers for responsive deceleration.",
      badge: { text: "LIMITED", type: "spec" as const },
      specs: [
        { label: "System", value: "Hydraulic" },
        { label: "Pistons", value: "Dual" },
      ],
      category: "accessory" as const,
      type: "spare-parts",
    },
  ];

  // Filter items based on active tab parameter
  const filteredAccessories = allAccessories.filter((item) => {
    if (!cat) return true;
    return item.type === cat;
  });

  // Dynamic titles based on tabs
  const getHeaderTitle = () => {
    if (cat === "batteries") return "Power & Batteries";
    if (cat === "gear") return "Performance Gear";
    if (cat === "spare-parts") return "Premium Spare Parts";
    return "Ride Accessories";
  };

  const getHeaderSubtitle = () => {
    if (cat === "batteries") return "Sleek energy storage and fast chargers designed for Cobalt architecture.";
    if (cat === "gear") return "High-performance carbon fiber equipment and intelligent cockpit telemetry mounts.";
    if (cat === "spare-parts") return "Engineered replacements and performance parts to maintain your Ziko cockpit.";
    return "Upgrade your riding interface with state-of-the-art telemetry mounts, carbon safety helmets, and chargers.";
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-primary relative overflow-hidden">
      {/* Dynamic CSS Grid & Glow Backgrounds */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(79,70,229,0.05),transparent_50%),radial-gradient(circle_at_70%_60%,rgba(0,184,255,0.04),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(226,232,240,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(226,232,240,0.04)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(31,41,55,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(31,41,55,0.15)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      
      {/* Optional Custom Background Image from public/products/accessories_bg.png */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-15 dark:opacity-5 pointer-events-none mix-blend-overlay"
        style={{ backgroundImage: "url('/products/accessories_bg.png')" }}
      />

      <div className="bg-[#070707]">
        <Navbar theme="dark" />

        {/* Hero Header */}
        <section className="relative w-full min-h-[60vh] flex flex-col justify-center items-center py-20 lg:py-28 overflow-hidden bg-[#070707] text-white">
        
        {/* Panoramic Background Image */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
          <Image
            src="/products/parts.png"
            alt="Ziko EV Accessories Catalog Background"
            fill
            priority
            className="object-cover object-center opacity-100"
          />
          {/* Black overlays to guarantee text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#070707]/50 via-[#070707]/30 to-[#070707]/90" />
        </div>

        <div className="max-w-[1440px] mx-auto px-8 lg:px-16 text-center relative z-10 animate-fadeIn">
          <span className="font-sans text-xs font-bold text-[#BFFF07] tracking-widest uppercase block mb-3">
            {cat ? `${cat} COLLECTION` : "Performance Additions"}
          </span>
          <h1 className="font-general-sans text-4xl sm:text-6xl font-black tracking-[-0.01em] text-white uppercase mb-6 drop-shadow-[0_0_12px_rgba(255,255,255,0.1)]">
            {getHeaderTitle()}
          </h1>
          <p className="font-sans text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed font-light">
            {getHeaderSubtitle()}
          </p>

          {/* Quick Filters */}
          <div className="flex justify-center gap-3 mt-10">
            <button
              onClick={() => router.push("/accessories")}
              className={`px-5 py-2.5 rounded-full font-sans text-xs font-semibold tracking-wide border transition-all ${
                !cat
                  ? "bg-primary text-white dark:text-black border-primary"
                  : "bg-background/20 backdrop-blur-md text-white/75 border-white/10 hover:text-white hover:border-white/30"
              }`}
            >
              All Items
            </button>
            <button
              onClick={() => router.push("/accessories?cat=batteries")}
              className={`px-5 py-2.5 rounded-full font-sans text-xs font-semibold tracking-wide border transition-all ${
                cat === "batteries"
                  ? "bg-primary text-white dark:text-black border-primary"
                  : "bg-background/20 backdrop-blur-md text-white/75 border-white/10 hover:text-white hover:border-white/30"
              }`}
            >
              Batteries & Chargers
            </button>
            <button
              onClick={() => router.push("/accessories?cat=gear")}
              className={`px-5 py-2.5 rounded-full font-sans text-xs font-semibold tracking-wide border transition-all ${
                cat === "gear"
                  ? "bg-primary text-white dark:text-black border-primary"
                  : "bg-background/20 backdrop-blur-md text-white/75 border-white/10 hover:text-white hover:border-white/30"
              }`}
            >
              Rider Gear
            </button>
            <button
              onClick={() => router.push("/accessories?cat=spare-parts")}
              className={`px-5 py-2.5 rounded-full font-sans text-xs font-semibold tracking-wide border transition-all ${
                cat === "spare-parts"
                  ? "bg-primary text-white dark:text-black border-primary"
                  : "bg-background/20 backdrop-blur-md text-white/75 border-white/10 hover:text-white hover:border-white/30"
              }`}
            >
              Spare Parts
            </button>
          </div>
        </div>
      </section>
      </div>

      {/* Accessories Listing */}
      <section className="py-24">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16 animate-fadeIn">
          {filteredAccessories.length > 0 ? (
            <ProductGrid products={filteredAccessories} />
          ) : (
            <div className="text-center py-20 bg-surface rounded-3xl shadow-[0_8px_30px_rgba(15,23,42,0.02)] animate-fadeIn">
              <span className="font-sans text-sm text-neutral-gray font-medium">No products found in this category.</span>
            </div>
          )}
        </div>
      </section>

      {/* Why Ziko Accessories Grid - Borderless card grids */}
      <section className="relative py-24 sm:py-32 bg-transparent">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16 animate-fadeIn">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-3xl bg-background/50 shadow-[0_4px_20px_rgba(15,23,42,0.01)] hover:shadow-[0_8px_30px_rgba(15,23,42,0.03)] transition-all duration-300">
              <span className="font-general-sans text-xs text-accent-indigo font-black tracking-wider block mb-3">01 / WIND TUNNEL TESTED</span>
              <h3 className="font-general-sans text-sm font-bold text-primary uppercase mb-2">Aerodynamic Integration</h3>
              <p className="font-sans text-xs text-neutral-gray leading-relaxed font-normal">
                Rider accessories are shaped to integrate flush with the handlebar geometry, preventing turbulence and minimizing aerodynamic coefficient.
              </p>
            </div>
            <div className="p-6 rounded-3xl bg-background/50 shadow-[0_4px_20px_rgba(15,23,42,0.01)] hover:shadow-[0_8px_30px_rgba(15,23,42,0.03)] transition-all duration-300">
              <span className="font-general-sans text-xs text-accent-indigo font-black tracking-wider block mb-3">02 / CNC MACHINED</span>
              <h3 className="font-general-sans text-sm font-bold text-primary uppercase mb-2">High-Grade Alloys</h3>
              <p className="font-sans text-xs text-neutral-gray leading-relaxed font-normal">
                Brackets and structural clamps are machined from solid blocks of 7075-T6 aircraft grade aluminum, providing maximum durability with minimum weight.
              </p>
            </div>
            <div className="p-6 rounded-3xl bg-background/50 shadow-[0_4px_20px_rgba(15,23,42,0.01)] hover:shadow-[0_8px_30px_rgba(15,23,42,0.03)] transition-all duration-300">
              <span className="font-general-sans text-xs text-accent-indigo font-black tracking-wider block mb-3">03 / ECOSYSTEM SYNC</span>
              <h3 className="font-general-sans text-sm font-bold text-primary uppercase mb-2">Cobalt Intelligence</h3>
              <p className="font-sans text-xs text-neutral-gray leading-relaxed font-normal">
                Electronic upgrades link directly into the scooter's internal bus via Bluetooth, outputting charging speeds, health data, and navigation prompts.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default function AccessoriesPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-background text-neutral-gray flex items-center justify-center font-sans">
        <div className="animate-pulse tracking-widest text-xs font-semibold">LOADING ZIKO CORE...</div>
      </div>
    }>
      <AccessoriesContent />
    </Suspense>
  );
}
