"use client";

import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ProductGrid from "../components/shared/ProductGrid";

export default function ScooterPage() {
  const [filterFrame, setFilterFrame] = useState<"all" | "carbon" | "aluminum" | "composite">("all");

  const scooters = [
    {
      id: "vir-flux",
      name: "VIR FLUX",
      price: 69999,
      image: "/products/vir_flux.png",
      description: "Carbon fiber deck plate running Cobalt-Lithium speed telemetry.",
      badge: { text: "CARBON DECK", type: "best" as const },
      specs: [
        { label: "Range", value: "65KM" },
        { label: "Top Speed", value: "45KM/H" },
      ],
      category: "scooter" as const,
      frame: "carbon",
    },
    {
      id: "vir-glide",
      name: "VIR GLIDE",
      price: 54999,
      image: "/products/vir_glide.png",
      description: "Foldable aluminum chassis with dual spring-rate suspension.",
      badge: { text: "ALUMINUM", type: "spec" as const },
      specs: [
        { label: "Range", value: "50KM" },
        { label: "Top Speed", value: "35KM/H" },
      ],
      category: "scooter" as const,
      frame: "aluminum",
    },
    {
      id: "vir-apex",
      name: "VIR APEX",
      price: 84999,
      image: "/products/vir_apex.png",
      description: "Titanium composite folder running top-tier 750W Peak hub drive.",
      badge: { text: "LIMITED RACE", type: "new" as const },
      specs: [
        { label: "Range", value: "80KM" },
        { label: "Top Speed", value: "55KM/H" },
      ],
      category: "scooter" as const,
      frame: "composite",
    },
  ];

  const filteredScooters = scooters.filter((s) => {
    if (filterFrame === "all") return true;
    return s.frame === filterFrame;
  });

  return (
    <div className="flex flex-col min-h-screen bg-background text-primary">
      <Navbar />

      {/* Hero Header */}
      <section className="relative py-24 sm:py-28 bg-surface">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16 text-center animate-fadeIn">
          <span className="font-sans text-xs font-bold text-accent-indigo tracking-widest uppercase block mb-3">
            Elite Velocity Series
          </span>
          <h1 className="font-general-sans text-3xl sm:text-5xl font-bold tracking-[-0.01em] text-primary uppercase mb-6">
            Electric Scooters
          </h1>
          <p className="font-sans text-sm sm:text-base text-neutral-gray max-w-xl mx-auto leading-relaxed">
            Engineered with high-tensile carbon frames and electronic speed regulators to deliver unprecedented torque in an ultra-lightweight form factor.
          </p>
        </div>
      </section>

      {/* Catalog Listing */}
      <section className="py-24">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Sidebar Filters - Borderless Card Layout */}
          <div className="lg:col-span-3">
            <div className="bg-surface rounded-3xl p-6 sticky top-28 shadow-[0_8px_30px_rgba(15,23,42,0.03)]">
              <span className="font-general-sans text-xs font-semibold text-primary tracking-wider uppercase block mb-5 pb-3 border-b border-borders/60">
                Filter by Alloy
              </span>
              
              <div className="flex flex-col gap-2 font-sans">
                <button
                  onClick={() => setFilterFrame("all")}
                  className={`w-full text-left px-4 py-2.5 rounded-md text-xs font-semibold tracking-wide transition-colors ${
                    filterFrame === "all"
                      ? "bg-primary text-white"
                      : "text-primary/75 hover:bg-background hover:text-primary"
                  }`}
                >
                  All Chassis
                </button>
                <button
                  onClick={() => setFilterFrame("carbon")}
                  className={`w-full text-left px-4 py-2.5 rounded-md text-xs font-semibold tracking-wide transition-colors ${
                    filterFrame === "carbon"
                      ? "bg-primary text-white"
                      : "text-primary/75 hover:bg-background hover:text-primary"
                  }`}
                >
                  Carbon Fiber
                </button>
                <button
                  onClick={() => setFilterFrame("aluminum")}
                  className={`w-full text-left px-4 py-2.5 rounded-md text-xs font-semibold tracking-wide transition-colors ${
                    filterFrame === "aluminum"
                      ? "bg-primary text-white"
                      : "text-primary/75 hover:bg-background hover:text-primary"
                  }`}
                >
                  Alloy Aluminum
                </button>
                <button
                  onClick={() => setFilterFrame("composite")}
                  className={`w-full text-left px-4 py-2.5 rounded-md text-xs font-semibold tracking-wide transition-colors ${
                    filterFrame === "composite"
                      ? "bg-primary text-white"
                      : "text-primary/75 hover:bg-background hover:text-primary"
                  }`}
                >
                  Carbon-Titanium
                </button>
              </div>
            </div>
          </div>

          {/* Product Grid Area */}
          <div className="lg:col-span-9">
            {filteredScooters.length > 0 ? (
              <ProductGrid products={filteredScooters} />
            ) : (
              <div className="text-center py-20 bg-surface rounded-3xl shadow-[0_8px_30px_rgba(15,23,42,0.02)]">
                <span className="font-sans text-xs text-neutral-gray font-semibold">No models match this composition profile.</span>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* Technical Comparison Specs - Borderless Layout */}
      <section className="py-24 bg-surface">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="text-center mb-12">
            <span className="font-sans text-xs font-bold text-accent-indigo tracking-widest uppercase block mb-2">
              Performance Specs
            </span>
            <h2 className="font-general-sans text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.01em] text-primary">
              Technical comparison
            </h2>
          </div>

          {/* Table View - Borderless with alternating backgrounds */}
          <div className="overflow-x-auto rounded-3xl bg-surface shadow-[0_8px_40px_rgba(15,23,42,0.03)] font-sans">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-background font-general-sans text-xs font-bold uppercase tracking-wider text-primary">
                <tr>
                  <th scope="col" className="px-6 py-4">Model</th>
                  <th scope="col" className="px-6 py-4">Frame Composition</th>
                  <th scope="col" className="px-6 py-4">Top Speed</th>
                  <th scope="col" className="px-6 py-4">Range Per Charge</th>
                  <th scope="col" className="px-6 py-4">Battery Capacity</th>
                  <th scope="col" className="px-6 py-4">Total Weight</th>
                </tr>
              </thead>
              <tbody className="font-general-sans text-xs text-neutral-gray font-medium">
                <tr className="hover:bg-background/40 transition-colors">
                  <td className="px-6 py-5 font-general-sans text-sm font-bold text-primary">VIR FLUX</td>
                  <td className="px-6 py-5 font-sans text-xs">Full Carbon Fiber Weave</td>
                  <td className="px-6 py-5">45 KM/H</td>
                  <td className="px-6 py-5">65 KM</td>
                  <td className="px-6 py-5">520 Wh (Lithium-Cobalt)</td>
                  <td className="px-6 py-5">11.8 KG</td>
                </tr>
                <tr className="hover:bg-background/40 transition-colors bg-background/25">
                  <td className="px-6 py-5 font-general-sans text-sm font-bold text-primary">VIR GLIDE</td>
                  <td className="px-6 py-5 font-sans text-xs">Brushed 6061 Aluminum</td>
                  <td className="px-6 py-5">35 KM/H</td>
                  <td className="px-6 py-5">50 KM</td>
                  <td className="px-6 py-5">420 Wh (Standard Cells)</td>
                  <td className="px-6 py-5">13.2 KG</td>
                </tr>
                <tr className="hover:bg-background/40 transition-colors">
                  <td className="px-6 py-5 font-general-sans text-sm font-bold text-primary">VIR APEX</td>
                  <td className="px-6 py-5 font-sans text-xs">Carbon-Titanium Composite</td>
                  <td className="px-6 py-5">55 KM/H</td>
                  <td className="px-6 py-5">80 KM</td>
                  <td className="px-6 py-5">720 Wh (Cobalt Cells)</td>
                  <td className="px-6 py-5">12.5 KG</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
