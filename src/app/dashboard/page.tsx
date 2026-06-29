"use client";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Image from "next/image";
import { motion } from "framer-motion";

export default function DashboardPage() {
  const profile = {
    name: "Marcus Vance",
    email: "marcus@velocity.com",
    phone: "+49 (89) 555-0812",
    address: "128 Aero Drive, Sector 5, Munich, DE",
    joined: "March 2026",
  };

  const telemetry = {
    distance: "1,284 KM",
    carbonSaved: "342 KG",
    batteryHealth: "98%",
    chargesCount: "42 cycles",
  };

  const orders = [
    {
      id: "ORD-9842790241-K",
      date: "June 29, 2026",
      status: "Processing Payment",
      statusCode: 1, // 1: order placed, 2: packaging, 3: shipped, 4: delivered
      items: [
        { name: "VIR NEXUS", price: 39999, image: "/products/vir_nexus.png" },
        { name: "Smart GPS Mount", price: 4499, image: "/products/gps.png" },
      ],
      total: 44498,
    },
    {
      id: "ORD-0842918412-M",
      date: "May 12, 2026",
      status: "Delivered",
      statusCode: 4,
      items: [
        { name: "Carbon Aero Helmet", price: 9999, image: "/products/helmet.png" },
      ],
      total: 9999,
    },
  ];

  const formattedPrice = (value: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-primary">
      <Navbar />

      {/* Hero Header */}
      <section className="relative py-12 bg-surface">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <span className="font-sans text-xs font-bold text-accent-indigo tracking-widest uppercase block mb-2">
              User Portal
            </span>
            <h1 className="font-general-sans text-2xl sm:text-3xl font-bold tracking-tight text-primary uppercase">
              Control Cockpit
            </h1>
          </div>
          <div className="flex items-center gap-4 bg-background border border-borders rounded-xl px-4 py-2 text-xs font-sans">
            <span className="text-neutral-gray font-medium">System Status:</span>
            <span className="flex items-center gap-1.5 font-bold text-success">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
              </span>
              Connected
            </span>
          </div>
        </div>
      </section>

      {/* Main Dashboard Layout */}
      <section className="py-24">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Profile Specifications (No borders, rounded-3xl) */}
          <div className="lg:col-span-4 bg-surface rounded-3xl p-8 shadow-[0_8px_30px_rgba(15,23,42,0.03)]">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-accent-indigo text-white font-general-sans text-lg font-bold flex items-center justify-center">
                MV
              </div>
              <div>
                <h3 className="font-general-sans text-base font-bold text-primary">{profile.name}</h3>
                <span className="font-sans text-[10px] text-neutral-gray block">Joined {profile.joined}</span>
              </div>
            </div>

            <div className="flex flex-col gap-4 border-t border-borders/60 pt-5 font-sans text-xs">
              <div className="flex flex-col gap-1">
                <span className="font-medium text-neutral-gray uppercase tracking-wider text-[9px]">Email Address</span>
                <span className="font-semibold text-primary">{profile.email}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-medium text-neutral-gray uppercase tracking-wider text-[9px]">Phone Contact</span>
                <span className="font-semibold text-primary">{profile.phone}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-medium text-neutral-gray uppercase tracking-wider text-[9px]">Delivery Address</span>
                <span className="font-semibold text-primary">{profile.address}</span>
              </div>
            </div>
          </div>

          {/* Right Column: IoT Telemetry & Orders */}
          <div className="lg:col-span-8 flex flex-col gap-10">
            
            {/* IoT Dials Stats */}
            <div>
              <span className="font-sans text-[10px] text-neutral-gray tracking-widest uppercase block font-bold mb-4">
                Telemetry Analytics
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                
                {/* Distance stat */}
                <div className="bg-surface rounded-3xl p-6 shadow-[0_8px_30px_rgba(15,23,42,0.02)] text-center">
                  <span className="font-sans text-[9px] font-medium text-neutral-gray uppercase tracking-wider">Distance Ridden</span>
                  <span className="block font-general-sans text-2xl font-extrabold text-primary mt-2">{telemetry.distance}</span>
                </div>

                {/* Carbon saved */}
                <div className="bg-surface rounded-3xl p-6 shadow-[0_8px_30px_rgba(15,23,42,0.02)] text-center">
                  <span className="font-sans text-[9px] font-medium text-neutral-gray uppercase tracking-wider">Carbon Offset</span>
                  <span className="block font-general-sans text-2xl font-extrabold text-success mt-2">{telemetry.carbonSaved}</span>
                </div>

                {/* Battery Health */}
                <div className="bg-surface rounded-3xl p-6 shadow-[0_8px_30px_rgba(15,23,42,0.02)] text-center">
                  <span className="font-sans text-[9px] font-medium text-neutral-gray uppercase tracking-wider">Battery Health</span>
                  <span className="block font-general-sans text-2xl font-extrabold text-primary mt-2">{telemetry.batteryHealth}</span>
                </div>

                {/* Charges Count */}
                <div className="bg-surface rounded-3xl p-6 shadow-[0_8px_30px_rgba(15,23,42,0.02)] text-center">
                  <span className="font-sans text-[9px] font-medium text-neutral-gray uppercase tracking-wider">Cycle Loads</span>
                  <span className="block font-general-sans text-2xl font-extrabold text-primary mt-2">{telemetry.chargesCount}</span>
                </div>

              </div>
            </div>

            {/* Orders Ledger & Timeline Trackers */}
            <div>
              <span className="font-sans text-[10px] text-neutral-gray tracking-widest uppercase block font-bold mb-4">
                Order History & Logistics
              </span>

              <div className="flex flex-col gap-6">
                {orders.map((order) => (
                  <div key={order.id} className="bg-surface rounded-3xl p-6 shadow-[0_8px_30px_rgba(15,23,42,0.03)]">
                    
                    {/* Order header row */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-borders/60 text-xs font-sans">
                      <div>
                        <span className="font-bold text-primary">{order.id}</span>
                        <span className="text-neutral-gray ml-2 font-normal">Placed: {order.date}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-neutral-gray font-normal">Total Subtotal:</span>
                        <span className="font-general-sans font-bold text-accent-indigo text-sm">{formattedPrice(order.total)}</span>
                      </div>
                    </div>

                    {/* Order Items */}
                    <div className="py-5 flex flex-col gap-4">
                      {order.items.map((item, idx) => (
                        <div key={idx} className="flex gap-4 items-center">
                          <div className="relative w-12 h-12 bg-background rounded-xl flex items-center justify-center p-1">
                            <Image src={item.image} alt={item.name} fill className="object-contain p-1" />
                          </div>
                          <div>
                            <span className="block font-general-sans text-xs font-bold text-primary uppercase">{item.name}</span>
                            <span className="block font-sans text-[10px] text-neutral-gray mt-0.5 font-normal">{formattedPrice(item.price)}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Timeline Node Progress */}
                    <div className="border-t border-borders/60 pt-5">
                      <span className="font-sans text-[9px] font-bold text-neutral-gray uppercase tracking-widest block mb-4">Logistics Timeline</span>
                      
                      <div className="grid grid-cols-4 gap-2 text-center text-[10px] font-sans relative">
                        {/* Underlay bar */}
                        <div className="absolute top-1.5 left-[12%] right-[12%] h-[2px] bg-background z-0" />
                        
                        {/* Filled bar progress */}
                        <div 
                          className="absolute top-1.5 left-[12%] h-[2px] bg-accent-indigo z-0 transition-all duration-500" 
                          style={{ width: `${order.statusCode === 1 ? '0%' : order.statusCode === 4 ? '76%' : '38%'}` }}
                        />

                        {/* Node 1: Ordered */}
                        <div className="z-10 flex flex-col items-center gap-1.5">
                          <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${order.statusCode >= 1 ? "bg-accent-indigo border-accent-indigo text-white" : "bg-surface border-borders"}`}>
                            <span className="w-1.5 h-1.5 rounded-full bg-current" />
                          </div>
                          <span className={`font-semibold ${order.statusCode >= 1 ? "text-primary" : "text-neutral-gray"}`}>Ordered</span>
                        </div>

                        {/* Node 2: Packaged */}
                        <div className="z-10 flex flex-col items-center gap-1.5">
                          <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${order.statusCode >= 2 ? "bg-accent-indigo border-accent-indigo text-white" : "bg-surface border-borders"}`}>
                            <span className="w-1.5 h-1.5 rounded-full bg-current" />
                          </div>
                          <span className={`font-semibold ${order.statusCode >= 2 ? "text-primary" : "text-neutral-gray"}`}>Packed</span>
                        </div>

                        {/* Node 3: Dispatched */}
                        <div className="z-10 flex flex-col items-center gap-1.5">
                          <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${order.statusCode >= 3 ? "bg-accent-indigo border-accent-indigo text-white" : "bg-surface border-borders"}`}>
                            <span className="w-1.5 h-1.5 rounded-full bg-current" />
                          </div>
                          <span className={`font-semibold ${order.statusCode >= 3 ? "text-primary" : "text-neutral-gray"}`}>Dispatched</span>
                        </div>

                        {/* Node 4: Delivered */}
                        <div className="z-10 flex flex-col items-center gap-1.5">
                          <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${order.statusCode === 4 ? "bg-accent-indigo border-accent-indigo text-white" : "bg-surface border-borders"}`}>
                            <span className="w-1.5 h-1.5 rounded-full bg-current" />
                          </div>
                          <span className={`font-semibold ${order.statusCode === 4 ? "text-primary" : "text-neutral-gray"}`}>Delivered</span>
                        </div>

                      </div>
                    </div>

                  </div>
                ))}
              </div>

            </div>

          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
