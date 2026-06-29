"use client";

import { use, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MapPin, 
  Gauge, 
  Weight, 
  Layers, 
  ShieldCheck, 
  Calendar, 
  Smile, 
  PhoneCall, 
  Percent, 
  Lock, 
  Plug, 
  Wrench, 
  AlertTriangle,
  ChevronLeft,
  ChevronRight,
  Info,
  Shield,
  Truck,
  PlayCircle
} from "lucide-react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import ProductCard from "../../components/shared/ProductCard";

interface SpecItem {
  label: string;
  value: string;
}

interface VehicleData {
  name: string;
  subtitle: string;
  description: string;
  pricePerDay: number;
  image: string;
  specs: SpecItem[];
  about: string;
  category: "bike" | "scooter";
}

// Complete mock dataset for bikes and scooters
const vehicles: Record<string, VehicleData> = {
  "vir-flux": {
    name: "VIR FLUX",
    subtitle: "Foldable. Powerful. Built for the city and beyond.",
    description: "A lightweight urban e-scooter with carbon fiber frame, 65KM range and smooth city performance.",
    pricePerDay: 499,
    image: "/products/vir_flux.png",
    specs: [
      { label: "Range", value: "45 KM" },
      { label: "Top Speed", value: "25 KM/H" },
      { label: "Lightweight", value: "14 KG" },
      { label: "Foldable", value: "3-Step" },
    ],
    about: "The VIR Flux is designed for urban freedom. Its foldable structure makes it easy to carry, store and travel with. Perfect for daily commutes and weekend escapes.",
    category: "scooter",
  },
  "vir-glide": {
    name: "VIR GLIDE",
    subtitle: "Foldable aluminum chassis with dual suspension.",
    description: "An aluminum chassis electric scooter with dual spring-rate suspension and comfortable ride profiles.",
    pricePerDay: 399,
    image: "/products/vir_glide.png",
    specs: [
      { label: "Range", value: "50 KM" },
      { label: "Top Speed", value: "35 KM/H" },
      { label: "Lightweight", value: "13.2 KG" },
      { label: "Foldable", value: "2-Step" },
    ],
    about: "Engineered with brushed 6061 aluminum frame and high-impact front & rear shock absorption. The VIR Glide offers the smoothest cruising experience in its class.",
    category: "scooter",
  },
  "vir-apex": {
    name: "VIR APEX",
    subtitle: "Titanium composite limited race folder.",
    description: "A high-performance titanium-carbon composite scooter running a top-tier 750W Peak hub drive.",
    pricePerDay: 599,
    image: "/products/vir_apex.png",
    specs: [
      { label: "Range", value: "80 KM" },
      { label: "Top Speed", value: "55 KM/H" },
      { label: "Lightweight", value: "12.5 KG" },
      { label: "Foldable", value: "3-Step" },
    ],
    about: "For riders seeking absolute power. The VIR Apex features a racing titanium frame, advanced power delivery algorithms, and regenerator braking capabilities.",
    category: "scooter",
  },
  "vir-nexus": {
    name: "VIR NEXUS",
    subtitle: "Aero carbon-weave frame flagship e-bike.",
    description: "An elite carbon-fiber electric bike featuring integrated down-tube battery cells and drag-minimized geometry.",
    pricePerDay: 599,
    image: "/products/vir_nexus.png",
    specs: [
      { label: "Range", value: "70 KM" },
      { label: "Top Speed", value: "25 KM/H" },
      { label: "Lightweight", value: "14.2 KG" },
      { label: "Foldable", value: "Fixed Frame" },
    ],
    about: "Designed in high-velocity wind tunnels. The VIR Nexus blends structural carbon fiber weave with a fully integrated energy pack to achieve absolute efficiency.",
    category: "bike",
  },
  "vir-atom": {
    name: "VIR ATOM",
    subtitle: "Tough alloy frame with telemetry cockpit.",
    description: "A rugged aluminum alloy utility e-bike with extended telemetry dashboard and cargo options.",
    pricePerDay: 499,
    image: "/products/vir_atom.png",
    specs: [
      { label: "Range", value: "90 KM" },
      { label: "Top Speed", value: "25 KM/H" },
      { label: "Lightweight", value: "15.8 KG" },
      { label: "Foldable", value: "Fixed Frame" },
    ],
    about: "Built for tough terrains and heavy utility. The VIR Atom is equipped with reinforced alloy tubing, off-road tire profiles, and custom navigation panels.",
    category: "bike",
  },
  "vir-pro": {
    name: "VIR PRO",
    subtitle: "Titanium composite chassis with auto-regeneration.",
    description: "A premium titanium e-bike with an auto-regenerative hub system and elite component loadout.",
    pricePerDay: 699,
    image: "/products/vir_pro.png",
    specs: [
      { label: "Range", value: "110 KM" },
      { label: "Top Speed", value: "25 KM/H" },
      { label: "Lightweight", value: "13.8 KG" },
      { label: "Foldable", value: "Fixed Frame" },
    ],
    about: "The ultimate expression of premium electric mobility. The VIR Pro utilizes titanium-grade structural composition and full regenerative hub brakes.",
    category: "bike",
  }
};

const rentalPlans = [
  { id: "1d", label: "1 Day", days: 1, discount: 0, badge: "" },
  { id: "3d", label: "3 Days", days: 3, discount: 0.10, badge: "Save 10%" },
  { id: "7d", label: "7 Days", days: 7, discount: 0.20, badge: "Most Popular" },
  { id: "30d", label: "30 Days", days: 30, discount: 0.30, badge: "Save 30%" },
];

export default function RentDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);

  // Retrieve current product or default to vir-flux
  const vehicleId = vehicles[id] ? id : "vir-flux";
  const vehicle = vehicles[vehicleId];

  // Rental states
  const [selectedPlan, setSelectedPlan] = useState(rentalPlans[2]); // Default: 7 Days
  const [pickupLocation, setPickupLocation] = useState("Bangalore, Karnataka");
  const [pickupDate, setPickupDate] = useState("2026-07-10");
  const [pickupTime, setPickupTime] = useState("10:00");
  const [returnDate, setReturnDate] = useState("2026-07-17");
  const [returnTime, setReturnTime] = useState("10:00");
  
  // Modal states for simulation
  const [isBooked, setIsBooked] = useState(false);

  // Dynamic calculations
  const basePrice = vehicle.pricePerDay;
  const planRate = Math.round(basePrice * (1 - selectedPlan.discount));
  const subtotal = planRate * selectedPlan.days;
  const tax = Math.round(subtotal * 0.18); // 18% Tax
  const securityDeposit = 5000;
  const totalAmount = subtotal + tax;

  // Auto update return date based on selected plan days
  useEffect(() => {
    if (pickupDate) {
      const date = new Date(pickupDate);
      date.setDate(date.getDate() + selectedPlan.days);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      setReturnDate(`${year}-${month}-${day}`);
    }
  }, [pickupDate, selectedPlan]);

  // Format currency
  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(val);
  };

  // Get recommended vehicles
  const recommendations = Object.entries(vehicles)
    .filter(([key]) => key !== vehicleId)
    .slice(0, 3)
    .map(([key, val]) => ({
      id: key,
      ...val,
      price: val.pricePerDay * 7, // Show 7 Days price in cards
      badge: { text: "RENTAL", type: "spec" as const },
    }));

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden selection:bg-indigo-500 selection:text-white">
      {/* Dark theme Navbar for dark hero section */}
      <Navbar theme="dark" />

      {/* SECTION 2 — HERO LAYOUT (Dark Studio Theme) */}
      <section className="relative w-full bg-slate-950 text-white overflow-hidden py-16 sm:py-24 border-b border-slate-900">
        {/* Styled Cityscape light overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_45%,rgba(79,70,229,0.14),transparent_70%)] pointer-events-none" />
        
        {/* Subtle grid patterns */}
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]" />

        <div className="max-w-[1440px] mx-auto px-8 lg:px-16 relative z-10">
          
          {/* Main Hero grid split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Side */}
            <div className="lg:col-span-5 flex flex-col items-start justify-center">
              {/* Category Tag */}
              <span className="font-sans text-[10px] font-bold text-indigo-400 tracking-widest uppercase block mb-3">
                PREMIUM RENTAL
              </span>

              <h1 className="font-general-sans text-4xl sm:text-5xl lg:text-[54px] font-black leading-[0.95] tracking-[-0.03em] uppercase mb-4 text-white">
                Rent The <br />
                <span className="text-indigo-500">{vehicle.name}</span>
              </h1>

              <p className="font-sans text-xs text-slate-400 leading-relaxed max-w-[420px] mb-8 font-medium">
                Foldable. Powerful. Built for the city and beyond. Rent by the day, week or month — and ride your way.
              </p>

              {/* 4 Specifications Cards Row - matching mockup */}
              <div className="flex gap-8 mb-10 font-sans">
                <div className="flex flex-col items-center gap-1.5 text-center min-w-[70px]">
                  <div className="w-9 h-9 rounded-full bg-slate-900 flex items-center justify-center text-indigo-400 border border-slate-800">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="font-general-sans text-sm font-black text-white">{vehicle.specs[0]?.value}</span>
                  <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">{vehicle.specs[0]?.label}</span>
                </div>
                <div className="flex flex-col items-center gap-1.5 text-center min-w-[70px]">
                  <div className="w-9 h-9 rounded-full bg-slate-900 flex items-center justify-center text-indigo-400 border border-slate-800">
                    <Gauge className="w-4 h-4" />
                  </div>
                  <span className="font-general-sans text-sm font-black text-white">{vehicle.specs[1]?.value}</span>
                  <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">{vehicle.specs[1]?.label}</span>
                </div>
                <div className="flex flex-col items-center gap-1.5 text-center min-w-[70px]">
                  <div className="w-9 h-9 rounded-full bg-slate-900 flex items-center justify-center text-indigo-400 border border-slate-800">
                    <Weight className="w-4 h-4" />
                  </div>
                  <span className="font-general-sans text-sm font-black text-white">{vehicle.specs[2]?.value}</span>
                  <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">{vehicle.specs[2]?.label}</span>
                </div>
                <div className="flex flex-col items-center gap-1.5 text-center min-w-[70px]">
                  <div className="w-9 h-9 rounded-full bg-slate-900 flex items-center justify-center text-indigo-400 border border-slate-800">
                    <Layers className="w-4 h-4" />
                  </div>
                  <span className="font-general-sans text-sm font-black text-white">{vehicle.specs[3]?.value}</span>
                  <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">{vehicle.specs[3]?.label}</span>
                </div>
              </div>

              {/* Action buttons side-by-side */}
              <div className="flex gap-4 w-full max-w-[420px]">
                <a
                  href="#booking-anchor"
                  className="flex-1 px-6 py-4 bg-white text-slate-950 font-sans text-xs font-bold tracking-wider text-center uppercase rounded-lg hover:bg-indigo-600 hover:text-white transition-all duration-300 shadow-[0_4px_20px_rgba(255,255,255,0.05)] hover:shadow-[0_4px_20px_rgba(79,70,229,0.3)] flex items-center justify-center gap-2"
                >
                  Choose Your Plan <span>→</span>
                </a>
                <a
                  href="#about-section"
                  className="px-6 py-4 bg-slate-900/60 border border-slate-800 text-white font-sans text-xs font-semibold tracking-wider text-center uppercase rounded-lg hover:border-slate-400 hover:bg-slate-900 transition-colors flex items-center justify-center gap-2"
                >
                  View Details <PlayCircle className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Side render */}
            <div className="lg:col-span-7 relative w-full h-[320px] sm:h-[450px] lg:h-[540px] flex items-center justify-center">
              {/* Spot shadow */}
              <div className="absolute bottom-[8%] w-[80%] h-[12%] rounded-full bg-indigo-600/10 blur-[50px] pointer-events-none" />
              <div className="absolute bottom-[10%] w-[60%] h-[3%] rounded-full bg-slate-950/80 blur-xs pointer-events-none" />

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="relative w-full h-full flex items-center justify-center pointer-events-none"
              >
                <Image
                  src={vehicle.image}
                  alt={vehicle.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-contain scale-105"
                  priority
                />
              </motion.div>
            </div>
          </div>

          {/* Floating horizontal banner at the bottom of the hero */}
          <div className="mt-16 bg-slate-900/60 backdrop-blur-md rounded-2xl p-6 border border-slate-800/40 grid grid-cols-2 md:grid-cols-4 gap-6 font-sans">
            <div className="flex gap-3.5 items-center">
              <Calendar className="w-5 h-5 text-indigo-400 shrink-0" />
              <div>
                <h4 className="text-[10px] font-bold text-white uppercase tracking-wider">Flexible Plans</h4>
                <p className="text-[9px] text-slate-400 mt-0.5 leading-tight">Hourly, Daily, Weekly & Monthly</p>
              </div>
            </div>
            <div className="flex gap-3.5 items-center">
              <ShieldCheck className="w-5 h-5 text-indigo-400 shrink-0" />
              <div>
                <h4 className="text-[10px] font-bold text-white uppercase tracking-wider">Verified Vehicles</h4>
                <p className="text-[9px] text-slate-400 mt-0.5 leading-tight">Well-maintained & quality checked</p>
              </div>
            </div>
            <div className="flex gap-3.5 items-center">
              <PhoneCall className="w-5 h-5 text-indigo-400 shrink-0" />
              <div>
                <h4 className="text-[10px] font-bold text-white uppercase tracking-wider">24/7 Support</h4>
                <p className="text-[9px] text-slate-400 mt-0.5 leading-tight">We're here anytime, anywhere</p>
              </div>
            </div>
            <div className="flex gap-3.5 items-center">
              <Percent className="w-5 h-5 text-indigo-400 shrink-0" />
              <div>
                <h4 className="text-[10px] font-bold text-white uppercase tracking-wider">No Hidden Charges</h4>
                <p className="text-[9px] text-slate-400 mt-0.5 leading-tight">Transparent pricing you can trust</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* main grid section with sticky sidebar */}
      <div id="booking-anchor" className="max-w-[1440px] mx-auto px-8 lg:px-16 py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 relative items-start">
        {/* Left/Middle Content (Columns 1-8) */}
        <div className="lg:col-span-8 space-y-16">
          
          {/* SECTION 3 — RENTAL DURATION */}
          <section className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgba(15,23,42,0.02)]">
            <h2 className="font-general-sans text-xl font-bold uppercase tracking-tight text-slate-900 mb-2">
              Choose Your Rental Plan
            </h2>
            <p className="font-sans text-xs text-slate-400 mb-6">
              Select longer terms to lock in lower daily rates and earn greater efficiency bonuses.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 font-sans pt-3">
              {rentalPlans.map((plan) => {
                const active = selectedPlan.id === plan.id;
                const dailyPrice = Math.round(basePrice * (1 - plan.discount));
                return (
                  <button
                    key={plan.id}
                    onClick={() => setSelectedPlan(plan)}
                    className={`relative p-5 rounded-2xl text-left transition-all duration-300 border flex flex-col justify-between ${
                      active
                        ? "bg-white border-indigo-600 text-slate-900 shadow-[0_8px_24px_rgba(79,70,229,0.08)] scale-[1.03] ring-1 ring-indigo-600"
                        : "bg-white border-slate-100 hover:border-slate-300 hover:bg-slate-50/60"
                    }`}
                  >
                    {/* Badge */}
                    {plan.badge && (
                      <span className={`absolute -top-3 left-1/2 -translate-x-1/2 text-[8px] font-extrabold uppercase px-2.5 py-1 rounded-full shadow-sm tracking-wider ${
                        active ? "bg-indigo-600 text-white" : "bg-indigo-50 text-indigo-600 border border-indigo-200/50"
                      }`}>
                        {plan.badge}
                      </span>
                    )}

                    <div className="mt-2 text-center w-full">
                      <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                        {plan.label}
                      </span>
                      <span className="block font-general-sans text-2xl font-black tracking-tight mt-2 text-slate-900">
                        {formatCurrency(dailyPrice)}
                        <span className="text-[10px] font-medium text-slate-400 tracking-normal">/day</span>
                      </span>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 w-full text-center">
                      <span className={`text-[10px] font-semibold tracking-wide block ${active ? "text-indigo-600" : "text-slate-400"}`}>
                        {plan.discount > 0 ? `Save ${plan.discount * 100}%` : "Base Rate"}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </section>

          {/* SECTION 4 — PICKUP & RETURN */}
          <section className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgba(15,23,42,0.02)]">
            <h2 className="font-general-sans text-xl font-bold uppercase tracking-tight text-slate-900 mb-6">
              Pickup & Return Settings
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Form Input fields */}
              <div className="space-y-6 font-sans">
                {/* Location */}
                <div>
                  <label className="block text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-2">Pickup Location</label>
                  <div className="relative">
                    <input
                      type="text"
                      value={pickupLocation}
                      onChange={(e) => setPickupLocation(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-100 rounded-lg px-4 py-3 text-xs font-semibold focus:outline-none focus:border-indigo-600 transition-colors"
                    />
                    <button className="absolute right-3 top-3.5 text-[9px] font-bold text-indigo-600 hover:text-slate-900 uppercase">Change</button>
                  </div>
                </div>

                {/* Dates & Times */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-2">Pick-up Date</label>
                    <input
                      type="date"
                      value={pickupDate}
                      onChange={(e) => setPickupDate(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-100 rounded-lg px-4 py-3 text-xs font-semibold focus:outline-none focus:border-indigo-600"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-2">Pick-up Time</label>
                    <input
                      type="time"
                      value={pickupTime}
                      onChange={(e) => setPickupTime(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-100 rounded-lg px-4 py-3 text-xs font-semibold focus:outline-none focus:border-indigo-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-2">Return Date</label>
                    <input
                      type="date"
                      value={returnDate}
                      readOnly
                      className="w-full bg-slate-50/50 border border-slate-100/50 rounded-lg px-4 py-3 text-xs font-semibold text-slate-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-2">Return Time</label>
                    <input
                      type="time"
                      value={returnTime}
                      onChange={(e) => setReturnTime(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-100 rounded-lg px-4 py-3 text-xs font-semibold focus:outline-none focus:border-indigo-600"
                    />
                  </div>
                </div>

                {/* Refundable security deposit alert */}
                <div className="p-4 rounded-xl bg-indigo-50/30 border border-indigo-100/30 flex gap-3.5 items-start mt-2">
                  <Info className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-[10px] font-bold text-slate-900 uppercase tracking-wide">Security Deposit Details</h4>
                    <p className="text-[10px] text-slate-500 leading-relaxed mt-1">
                      A refundable security deposit of {formatCurrency(securityDeposit)} is collected upon vehicle release. Funds are credited back within 7 working days post return verification.
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/40 h-[300px] flex flex-col justify-between p-6">
                {/* Mock Map graphics */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />
                
                {/* Center marker */}
                <div className="absolute top-[45%] left-[45%] flex flex-col items-center gap-1 z-10">
                  <div className="w-4 h-4 rounded-full bg-indigo-600 animate-ping absolute" />
                  <div className="w-4 h-4 rounded-full bg-indigo-600 border-2 border-white relative z-10 shadow-md" />
                </div>

                <span className="relative z-10 inline-block px-3 py-1 rounded-[4px] bg-slate-900 text-white font-sans text-[8px] font-bold tracking-widest uppercase self-start shadow-sm">
                  COBALT GARAGE
                </span>

                <div className="relative z-10 bg-white p-4 rounded-xl shadow-lg border border-slate-100/50 max-w-[220px]">
                  <h4 className="font-general-sans text-xs font-black text-slate-900 uppercase">Hub Bengaluru</h4>
                  <p className="font-sans text-[9px] text-slate-500 mt-1 leading-normal">
                    No. 42, 80 Feet Road, Koramangala 4th Block, Bengaluru, KA.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 6 — WHAT'S INCLUDED */}
          <section className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgba(15,23,42,0.02)]">
            <h2 className="font-general-sans text-xl font-bold uppercase tracking-tight text-slate-900 mb-8">
              What's Included in Your Rental
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-8 font-sans">
              <div className="flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-indigo-600">
                  <Shield className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold text-slate-950 uppercase tracking-wide">Helmet</span>
              </div>
              <div className="flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-indigo-600">
                  <Plug className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold text-slate-950 uppercase tracking-wide">Charger</span>
              </div>
              <div className="flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-indigo-600">
                  <Lock className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold text-slate-950 uppercase tracking-wide">Bike Lock</span>
              </div>
              <div className="flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-indigo-600">
                  <Wrench className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold text-slate-950 uppercase tracking-wide">Basic Service</span>
              </div>
              <div className="flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-indigo-600">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold text-slate-950 uppercase tracking-wide">Roadside Assistance</span>
              </div>
            </div>
          </section>

          {/* SECTION 8 — ABOUT THIS BIKE */}
          <section id="about-section" className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgba(15,23,42,0.02)]">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7 flex flex-col gap-4">
                <span className="font-sans text-[10px] font-bold text-indigo-600 tracking-widest uppercase">
                  Engineering Insights
                </span>
                <h3 className="font-general-sans text-xl font-bold uppercase tracking-tight text-slate-900">
                  About {vehicle.name}
                </h3>
                <p className="font-sans text-xs text-slate-500 leading-relaxed">
                  {vehicle.about}
                </p>
                <Link
                  href="/scooter"
                  className="font-sans text-[10px] font-bold text-indigo-600 tracking-wider uppercase hover:text-slate-900 transition-colors mt-2"
                >
                  VIEW FULL SPECIFICATIONS →
                </Link>
              </div>

              <div className="md:col-span-5 bg-slate-50 rounded-2xl h-[180px] relative overflow-hidden flex items-center justify-center p-4">
                <Image
                  src={vehicle.image}
                  alt={vehicle.name}
                  fill
                  className="object-contain scale-90 p-4"
                />
              </div>
            </div>
          </section>

        </div>

        {/* SECTION 5 — RENTAL SUMMARY (Sticky Card - Columns 9-12) */}
        <div className="lg:col-span-4 sticky top-28 font-sans">
          <div className="bg-white rounded-3xl p-6 shadow-[0_12px_40px_rgba(15,23,42,0.03)] border border-slate-100/50 flex flex-col gap-6">
            <div>
              <span className="text-[9px] font-bold text-indigo-600 tracking-widest uppercase block mb-1">
                SUMMARY
              </span>
              <h3 className="font-general-sans text-lg font-black text-slate-900 uppercase">
                Rental Summary
              </h3>
            </div>

            <div className="space-y-3.5 text-xs">
              <div className="flex justify-between pb-3.5 border-b border-slate-100">
                <span className="text-slate-500">Selected Unit</span>
                <span className="font-bold text-slate-900 uppercase">{vehicle.name}</span>
              </div>
              <div className="flex justify-between pb-3.5 border-b border-slate-100">
                <span className="text-slate-500">Rental Plan</span>
                <span className="font-semibold text-slate-900">{selectedPlan.label} ({selectedPlan.days} days)</span>
              </div>
              <div className="flex justify-between pb-3.5 border-b border-slate-100">
                <span className="text-slate-500">Security Deposit</span>
                <span className="font-medium text-slate-900">{formatCurrency(securityDeposit)} <span className="text-[9px] text-slate-400">(Refundable)</span></span>
              </div>
              <div className="flex justify-between pb-3.5 border-b border-slate-100">
                <span className="text-slate-500">Daily Rate</span>
                <span className="font-medium text-slate-900">{formatCurrency(planRate)}/day</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Subtotal</span>
                <span className="font-semibold text-slate-900">{formatCurrency(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">GST / Tax (18%)</span>
                <span className="font-semibold text-slate-900">{formatCurrency(tax)}</span>
              </div>
              
              <div className="border-t border-slate-100 pt-4 mt-2 flex justify-between items-baseline">
                <span className="font-general-sans text-sm font-black text-slate-900 uppercase">Estimated Total</span>
                <span className="font-general-sans text-2xl font-black text-slate-900 tracking-tight">
                  {formatCurrency(totalAmount)}
                </span>
              </div>
            </div>

            {/* Booking Actions */}
            <div className="space-y-3.5">
              <button
                onClick={() => setIsBooked(true)}
                className="w-full py-4 bg-slate-900 text-white font-sans text-xs font-bold tracking-wider uppercase rounded-lg hover:bg-indigo-600 hover:shadow-[0_4px_15px_rgba(79,70,229,0.3)] transition-all duration-300 shadow-sm"
              >
                Book Rental Now
              </button>
              <Link
                href="/contact"
                className="block w-full py-3.5 bg-transparent border border-slate-200 text-slate-500 text-center font-sans text-[10px] font-bold tracking-widest uppercase hover:text-slate-900 hover:border-slate-950 transition-colors rounded-lg"
              >
                Enquire Now
              </Link>
            </div>

            <div className="text-[9px] text-slate-400 text-center leading-relaxed">
              By continuing, you agree to our Terms of Rental Service and calibration compliance conditions.
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 9 — RECOMMENDED RENTALS */}
      <section className="py-24 bg-slate-50 border-t border-slate-200/40">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="flex justify-between items-center mb-10">
            <h2 className="font-general-sans text-xl sm:text-2xl font-bold uppercase tracking-tight text-slate-900">
              You May Also Like
            </h2>
            <div className="flex gap-2">
              <button className="w-8 h-8 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:border-slate-400 hover:text-slate-950 transition-colors shadow-xs">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button className="w-8 h-8 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:border-slate-400 hover:text-slate-950 transition-colors shadow-xs">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recommendations.map((rec) => (
              <ProductCard
                key={rec.id}
                id={rec.id}
                name={rec.name}
                price={rec.price}
                image={rec.image}
                description={rec.description}
                badge={rec.badge}
                specs={rec.specs}
                category={rec.category as any}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER CTA BAR - Bottom-most black bar */}
      <section className="py-8 bg-slate-950 text-slate-400 border-t border-slate-900 text-xs font-sans">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16 flex flex-col md:flex-row justify-between gap-6 items-center">
          <div className="flex items-center gap-3">
            <Truck className="w-4 h-4 text-indigo-500" />
            <span>Free Delivery on all rentals</span>
          </div>
          <div className="flex items-center gap-3">
            <Calendar className="w-4 h-4 text-indigo-500" />
            <span>Flexible Plans Daily to monthly</span>
          </div>
          <div className="flex items-center gap-3">
            <Shield className="w-4 h-4 text-indigo-500" />
            <span>Trusted by 10K+ Riders</span>
          </div>
          <div className="flex items-center gap-3">
            <Lock className="w-4 h-4 text-indigo-500" />
            <span>Secure Payments 100% protected</span>
          </div>
        </div>
      </section>

      {/* Booking Simulation Dialog */}
      <AnimatePresence>
        {isBooked && (
          <>
            {/* Blur Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsBooked(false)}
              className="fixed inset-0 z-50 bg-slate-950/40 backdrop-blur-xs flex items-center justify-center p-4"
            >
              {/* Modal Container */}
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-3xl p-8 max-w-[460px] w-full shadow-2xl text-center border border-slate-100 flex flex-col items-center gap-6"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 text-3xl flex items-center justify-center">
                  ✓
                </div>
                
                <div>
                  <h3 className="font-general-sans text-xl font-bold uppercase tracking-tight text-slate-900">
                    Rental Reservation Initialized
                  </h3>
                  <p className="font-sans text-xs text-slate-500 mt-2 leading-relaxed">
                    We have successfully reserved the <span className="font-semibold text-slate-900">{vehicle.name}</span> for {selectedPlan.days} days, starting {pickupDate} at {pickupTime}.
                  </p>
                </div>

                <div className="w-full bg-slate-50 rounded-2xl p-4 text-left font-sans text-xs space-y-2">
                  <div className="flex justify-between text-slate-500">
                    <span>Selected Plan</span>
                    <span className="font-semibold text-slate-900">{selectedPlan.label}</span>
                  </div>
                  <div className="flex justify-between text-slate-500">
                    <span>Est. Rental Charge</span>
                    <span className="font-semibold text-slate-950">{formatCurrency(totalAmount)}</span>
                  </div>
                  <div className="flex justify-between text-slate-500">
                    <span>Refundable Deposit</span>
                    <span className="font-semibold text-slate-950">{formatCurrency(securityDeposit)}</span>
                  </div>
                </div>

                <div className="text-[10px] text-slate-400 leading-normal">
                  Our system is processing your booking request. An email configuration has been sent to confirm the release schedules.
                </div>

                <button
                  onClick={() => setIsBooked(false)}
                  className="w-full py-4 bg-slate-900 text-white font-sans text-xs font-bold tracking-wider uppercase rounded-lg hover:bg-indigo-600 hover:shadow-[0_4px_15px_rgba(79,70,229,0.3)] transition-all duration-300 shadow-sm"
                >
                  Return to Details
                </button>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
