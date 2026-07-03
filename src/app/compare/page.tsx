"use client";

import { useState } from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import Image from "next/image";
import { motion } from "framer-motion";

interface SpecRow {
  label: string;
  key: "composition" | "speed" | "range" | "battery" | "motor" | "weight" | "chargeTime" | "brakes";
}

const modelDatabase = {
  "vir-nexus": {
    name: "VIR NEXUS",
    price: 39999,
    image: "/products/bike dark.png",
    category: "Electric Scooter",
    specs: {
      composition: "Full Carbon Fiber Weave",
      speed: "25 KM/H",
      range: "70 KM",
      battery: "480 Wh (Cobalt Cells)",
      motor: "250W Silent Hub Motor",
      weight: "14.2 KG",
      chargeTime: "3.5 Hours",
      brakes: "Hydraulic Disc Brakes",
    },
  },
  "vir-atom": {
    name: "VIR ATOM",
    price: 49999,
    image: "/products/vir_atom.png",
    category: "Electric Scooter",
    specs: {
      composition: "6061-T6 Aluminum Alloy",
      speed: "25 KM/H",
      range: "90 KM",
      battery: "620 Wh (Cobalt Cells)",
      motor: "250W High-Torque Hub",
      weight: "15.8 KG",
      chargeTime: "4.2 Hours",
      brakes: "Hydraulic Regenerative Disc",
    },
  },
  "vir-pro": {
    name: "VIR PRO",
    price: 59999,
    image: "/products/bike yellow.png",
    category: "Electric Scooter",
    specs: {
      composition: "Carbon-Titanium Composite",
      speed: "25 KM/H",
      range: "110 KM",
      battery: "780 Wh (Cobalt Cells)",
      motor: "350W Speed-Tuned Motor",
      weight: "14.9 KG",
      chargeTime: "4.8 Hours",
      brakes: "Pro Hydraulic ABS Brakes",
    },
  },
  "vir-flux": {
    name: "VIR FLUX",
    price: 69999,
    image: "/products/bike blue.webp",
    category: "Electric Scooter",
    specs: {
      composition: "Full Carbon Fiber Deck",
      speed: "45 KM/H",
      range: "65 KM",
      battery: "520 Wh (Lithium-Cobalt)",
      motor: "500W Brushless Direct-Hub",
      weight: "11.8 KG",
      chargeTime: "3.0 Hours",
      brakes: "Dual Electronic Regenerative",
    },
  },
  "vir-glide": {
    name: "VIR GLIDE",
    price: 54999,
    image: "/products/bike white.png",
    category: "Electric Scooter",
    specs: {
      composition: "Brushed 6061 Aluminum",
      speed: "35 KM/H",
      range: "50 KM",
      battery: "420 Wh (Standard Cells)",
      motor: "350W Front Hub Motor",
      weight: "13.2 KG",
      chargeTime: "3.5 Hours",
      brakes: "Drum Brakes + E-Recovery",
    },
  },
  "vir-apex": {
    name: "VIR APEX",
    price: 84999,
    image: "/products/vir_apex.png",
    category: "Electric Scooter",
    specs: {
      composition: "Carbon-Titanium Composite",
      speed: "55 KM/H",
      range: "80 KM",
      battery: "720 Wh (Cobalt Cells)",
      motor: "750W Peak Hub Drive",
      weight: "12.5 KG",
      chargeTime: "4.0 Hours",
      brakes: "Hydraulic Ventilated Disc",
    },
  },
};

type ModelKey = keyof typeof modelDatabase;

export default function ComparePage() {
  const [modelA, setModelA] = useState<ModelKey>("vir-nexus");
  const [modelB, setModelB] = useState<ModelKey>("vir-pro");

  const formattedPrice = (value: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(value);
  };

  const specRows: SpecRow[] = [
    { label: "Category", key: "composition" },
    { label: "Frame Composition", key: "composition" },
    { label: "Top Speed", key: "speed" },
    { label: "Range Per Charge", key: "range" },
    { label: "Battery Pack", key: "battery" },
    { label: "Motor Spec", key: "motor" },
    { label: "Total Weight", key: "weight" },
    { label: "Charge Speed", key: "chargeTime" },
    { label: "Braking System", key: "brakes" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-primary">
      <Navbar />

      {/* Hero Header - Generous vertical spacing, no bottom borders */}
      <section className="relative py-24 sm:py-28 bg-surface">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16 text-center animate-fadeIn">
          <span className="font-sans text-xs font-bold text-accent-indigo tracking-widest uppercase block mb-3">
            Ecosystem Comparison
          </span>
          <h1 className="font-general-sans text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.01em] text-primary uppercase">
            Model Specifications
          </h1>
          <p className="font-sans text-sm text-neutral-gray max-w-xl mx-auto mt-4 leading-relaxed">
            Select any two machines from our fleet to compare structural materials, motor speeds, telemetry cells, and pricing ranges side-by-side.
          </p>
        </div>
      </section>

      {/* Comparison Grid - Spaced out, borderless layout */}
      <section className="py-24 bg-background">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          
          {/* Models Selector Header Cards */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
            
            {/* Model A Selector Card */}
            <div className="md:col-span-5 bg-surface rounded-3xl p-8 shadow-[0_8px_30px_rgba(15,23,42,0.03)] text-center flex flex-col items-center justify-between min-h-[380px] hover:shadow-[0_16px_40px_rgba(15,23,42,0.06)] transition-shadow duration-300">
              <div className="w-full">
                <label className="block font-sans text-[10px] font-bold text-neutral-gray uppercase tracking-wider mb-2">Model A</label>
                <select
                  value={modelA}
                  onChange={(e) => setModelA(e.target.value as ModelKey)}
                  className="mx-auto block w-full max-w-[240px] bg-background border border-borders rounded-md py-2.5 px-3 text-primary font-sans text-xs font-semibold focus:outline-none focus:border-accent-indigo"
                >
                  {Object.keys(modelDatabase).map((key) => (
                    <option key={key} value={key}>
                      {modelDatabase[key as ModelKey].name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="relative w-full h-[180px] my-4 flex items-center justify-center">
                <Image
                  src={modelDatabase[modelA].image}
                  alt={modelDatabase[modelA].name}
                  fill
                  className="object-contain p-2"
                />
              </div>

              <div>
                <span className="block font-general-sans text-base font-bold text-primary tracking-wide">{modelDatabase[modelA].name}</span>
                <span className="block font-general-sans text-2xl font-extrabold text-accent-indigo mt-1.5">{formattedPrice(modelDatabase[modelA].price)}</span>
              </div>
            </div>

            {/* Split Vs Indicator */}
            <div className="md:col-span-2 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center font-general-sans text-xs font-bold text-neutral-gray shadow-sm">
                VS
              </div>
            </div>

            {/* Model B Selector Card */}
            <div className="md:col-span-5 bg-surface rounded-3xl p-8 shadow-[0_8px_30px_rgba(15,23,42,0.03)] text-center flex flex-col items-center justify-between min-h-[380px] hover:shadow-[0_16px_40px_rgba(15,23,42,0.06)] transition-shadow duration-300">
              <div className="w-full">
                <label className="block font-sans text-[10px] font-bold text-neutral-gray uppercase tracking-wider mb-2">Model B</label>
                <select
                  value={modelB}
                  onChange={(e) => setModelB(e.target.value as ModelKey)}
                  className="mx-auto block w-full max-w-[240px] bg-background border border-borders rounded-md py-2.5 px-3 text-primary font-sans text-xs font-semibold focus:outline-none focus:border-accent-indigo"
                >
                  {Object.keys(modelDatabase).map((key) => (
                    <option key={key} value={key}>
                      {modelDatabase[key as ModelKey].name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="relative w-full h-[180px] my-4 flex items-center justify-center">
                <Image
                  src={modelDatabase[modelB].image}
                  alt={modelDatabase[modelB].name}
                  fill
                  className="object-contain p-2"
                />
              </div>

              <div>
                <span className="block font-general-sans text-base font-bold text-primary tracking-wide">{modelDatabase[modelB].name}</span>
                <span className="block font-general-sans text-2xl font-extrabold text-accent-indigo mt-1.5">{formattedPrice(modelDatabase[modelB].price)}</span>
              </div>
            </div>

          </div>

          {/* Table Parameters Comparison (Borderless Grid Matrix) */}
          <div className="rounded-3xl bg-surface shadow-[0_8px_40px_rgba(15,23,42,0.03)] overflow-hidden font-sans">
            <div className="grid grid-cols-12 bg-background px-6 py-5 font-general-sans text-xs font-bold uppercase tracking-wider text-primary">
              <div className="col-span-4">Specification Parameter</div>
              <div className="col-span-4 text-center">{modelDatabase[modelA].name}</div>
              <div className="col-span-4 text-center">{modelDatabase[modelB].name}</div>
            </div>

            <div className="text-sm">
              
              {/* Category parameter row */}
              <div className="grid grid-cols-12 px-6 py-5 hover:bg-background/40 transition-colors">
                <div className="col-span-4 font-medium text-neutral-gray text-xs uppercase tracking-wider">Product Class</div>
                <div className="col-span-4 text-center text-primary font-semibold text-xs">{modelDatabase[modelA].category}</div>
                <div className="col-span-4 text-center text-primary font-semibold text-xs">{modelDatabase[modelB].category}</div>
              </div>

              {/* Loop specs using alternating rows (no border dividers) */}
              {specRows.slice(1).map((row) => (
                <div key={row.label} className="grid grid-cols-12 px-6 py-5 hover:bg-background/40 transition-colors even:bg-background/25">
                  {/* Label - Weight: Medium (500) */}
                  <div className="col-span-4 font-medium text-neutral-gray text-xs uppercase tracking-wider">{row.label}</div>
                  
                  {/* Value - Weight: SemiBold (600) */}
                  <div className="col-span-4 text-center text-primary font-semibold text-xs">{modelDatabase[modelA].specs[row.key]}</div>
                  <div className="col-span-4 text-center text-primary font-semibold text-xs">{modelDatabase[modelB].specs[row.key]}</div>
                </div>
              ))}

              {/* Price row */}
              <div className="grid grid-cols-12 px-6 py-5 bg-accent-indigo/5 font-general-sans text-sm font-bold">
                <div className="col-span-4 font-sans text-xs font-bold text-neutral-gray uppercase tracking-wider">Base Price</div>
                <div className="col-span-4 text-center text-accent-indigo font-extrabold text-base">{formattedPrice(modelDatabase[modelA].price)}</div>
                <div className="col-span-4 text-center text-accent-indigo font-extrabold text-base">{formattedPrice(modelDatabase[modelB].price)}</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
