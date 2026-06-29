"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function CheckoutPage() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  
  const [billingData, setBillingData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const cartItems = [
    {
      id: "vir-nexus",
      name: "VIR NEXUS",
      price: 39999,
      image: "/products/vir_nexus.png",
      quantity: 1,
    },
    {
      id: "smart-gps",
      name: "Smart GPS Mount",
      price: 4499,
      image: "/products/gps.png",
      quantity: 1,
    },
  ];

  const cartSubtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const taxRate = 0.12; // 12% GST/tax
  const taxTotal = Math.round(cartSubtotal * taxRate);
  const cartTotal = cartSubtotal + taxTotal;

  const formattedPrice = (value: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(value);
  };

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    if (billingData.name && billingData.email && billingData.address && billingData.cardNumber) {
      setIsProcessing(true);
      // Simulate Stripe processing delay
      setTimeout(() => {
        setIsProcessing(false);
        setIsCompleted(true);
      }, 2500);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-primary">
      <Navbar />

      <section className="py-24 relative flex-1 flex items-center bg-background">
        <div className="max-w-[1440px] w-full mx-auto px-8 lg:px-16 relative z-10">
          
          <AnimatePresence mode="wait">
            {!isCompleted ? (
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start animate-fadeIn"
              >
                {/* Left Column: Checkout Card Details (No borders, rounded-3xl) */}
                <div className="lg:col-span-7 bg-surface rounded-3xl p-8 shadow-[0_8px_40px_rgba(15,23,42,0.03)]">
                  <h2 className="font-general-sans text-xl font-bold uppercase tracking-tight text-primary mb-6">
                    Billing Details
                  </h2>

                  <form onSubmit={handlePay} className="flex flex-col gap-5">
                    {/* Full name */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="font-sans text-xs font-medium text-neutral-gray uppercase tracking-wider">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        id="name"
                        value={billingData.name}
                        onChange={(e) => setBillingData({ ...billingData, name: e.target.value })}
                        className="w-full bg-background border border-borders rounded-md py-3 px-4 text-primary font-sans text-sm font-normal focus:outline-none focus:border-accent-indigo transition-colors"
                        placeholder="Marcus Vance"
                      />
                    </div>

                    {/* Email address */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="font-sans text-xs font-medium text-neutral-gray uppercase tracking-wider">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        id="email"
                        value={billingData.email}
                        onChange={(e) => setBillingData({ ...billingData, email: e.target.value })}
                        className="w-full bg-background border border-borders rounded-md py-3 px-4 text-primary font-sans text-sm font-normal focus:outline-none focus:border-accent-indigo transition-colors"
                        placeholder="marcus@velocity.com"
                      />
                    </div>

                    {/* Shipping Address */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="address" className="font-sans text-xs font-medium text-neutral-gray uppercase tracking-wider">
                        Shipping Address
                      </label>
                      <input
                        type="text"
                        required
                        id="address"
                        value={billingData.address}
                        onChange={(e) => setBillingData({ ...billingData, address: e.target.value })}
                        className="w-full bg-background border border-borders rounded-md py-3 px-4 text-primary font-sans text-sm font-normal focus:outline-none focus:border-accent-indigo transition-colors"
                        placeholder="128 Aero Drive, Sector 5"
                      />
                    </div>

                    {/* City & Zip */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="city" className="font-sans text-xs font-medium text-neutral-gray uppercase tracking-wider">
                          City
                        </label>
                        <input
                          type="text"
                          required
                          id="city"
                          value={billingData.city}
                          onChange={(e) => setBillingData({ ...billingData, city: e.target.value })}
                          className="w-full bg-background border border-borders rounded-md py-3 px-4 text-primary font-sans text-sm font-normal focus:outline-none focus:border-accent-indigo transition-colors"
                          placeholder="Munich"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="zip" className="font-sans text-xs font-medium text-neutral-gray uppercase tracking-wider">
                          Postal Code
                        </label>
                        <input
                          type="text"
                          required
                          id="zip"
                          value={billingData.zip}
                          onChange={(e) => setBillingData({ ...billingData, zip: e.target.value })}
                          className="w-full bg-background border border-borders rounded-md py-3 px-4 text-primary font-sans text-sm font-normal focus:outline-none focus:border-accent-indigo transition-colors"
                          placeholder="80331"
                        />
                      </div>
                    </div>

                    {/* Payment info header */}
                    <h3 className="font-general-sans text-sm font-bold uppercase tracking-wider text-primary mt-6 pt-5 border-t border-borders/60">
                      Payment Verification
                    </h3>

                    {/* Credit Card Number */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="cardNumber" className="font-sans text-xs font-medium text-neutral-gray uppercase tracking-wider">
                        Card Number
                      </label>
                      <input
                        type="text"
                        required
                        id="cardNumber"
                        value={billingData.cardNumber}
                        onChange={(e) => setBillingData({ ...billingData, cardNumber: e.target.value })}
                        className="w-full bg-background border border-borders rounded-md py-3 px-4 text-primary font-sans text-sm font-normal focus:outline-none focus:border-accent-indigo transition-colors"
                        placeholder="•••• •••• •••• ••••"
                      />
                    </div>

                    {/* Card Expiry & CVV */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="expiry" className="font-sans text-xs font-medium text-neutral-gray uppercase tracking-wider">
                          Expiration
                        </label>
                        <input
                          type="text"
                          required
                          id="expiry"
                          value={billingData.expiry}
                          onChange={(e) => setBillingData({ ...billingData, expiry: e.target.value })}
                          className="w-full bg-background border border-borders rounded-md py-3 px-4 text-primary font-sans text-sm font-normal focus:outline-none focus:border-accent-indigo transition-colors"
                          placeholder="MM/YY"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="cvv" className="font-sans text-xs font-medium text-neutral-gray uppercase tracking-wider">
                          CVV
                        </label>
                        <input
                          type="text"
                          required
                          id="cvv"
                          value={billingData.cvv}
                          onChange={(e) => setBillingData({ ...billingData, cvv: e.target.value })}
                          className="w-full bg-background border border-borders rounded-md py-3 px-4 text-primary font-sans text-sm font-normal focus:outline-none focus:border-accent-indigo transition-colors"
                          placeholder="•••"
                        />
                      </div>
                    </div>

                    {/* Pay Button */}
                    <button
                      type="submit"
                      disabled={isProcessing}
                      className="w-full mt-4 py-4 bg-primary text-white font-sans text-xs font-semibold tracking-wider uppercase rounded-md hover:bg-accent-indigo transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      {isProcessing ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Processing Payment...
                        </>
                      ) : (
                        `Authorize Payment - ${formattedPrice(cartTotal)}`
                      )}
                    </button>

                  </form>
                </div>

                {/* Right Column: Order Ledger */}
                <div className="lg:col-span-5 flex flex-col gap-6">
                  
                  {/* Order Items list */}
                  <div className="bg-surface rounded-3xl p-6 shadow-[0_8px_30px_rgba(15,23,42,0.03)]">
                    <h3 className="font-general-sans text-sm font-bold uppercase tracking-wider text-primary mb-4 pb-3 border-b border-borders/60">
                      Order Summary
                    </h3>
                    
                    <div className="flex flex-col gap-4">
                      {cartItems.map((item) => (
                        <div key={item.id} className="flex gap-4 items-center">
                          <div className="relative w-16 h-16 bg-background rounded-lg border border-borders/50 flex items-center justify-center p-1">
                            <Image src={item.image} alt={item.name} fill className="object-contain p-1" />
                          </div>
                          <div className="flex-1">
                            <span className="block font-general-sans text-xs font-bold text-primary uppercase">{item.name}</span>
                            <span className="block font-sans text-xs text-neutral-gray mt-0.5 font-normal">Quantity: {item.quantity}</span>
                          </div>
                          <span className="font-sans text-xs font-semibold text-primary">{formattedPrice(item.price)}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Summary Block */}
                  <div className="bg-surface rounded-3xl p-6 shadow-[0_8px_30px_rgba(15,23,42,0.03)]">
                    <div className="flex flex-col gap-3 font-sans text-sm">
                      <div className="flex justify-between text-neutral-gray font-normal">
                        <span>Items Subtotal</span>
                        <span className="font-semibold text-primary">{formattedPrice(cartSubtotal)}</span>
                      </div>
                      <div className="flex justify-between text-neutral-gray font-normal">
                        <span>Estimated Shipping</span>
                        <span className="text-success font-bold uppercase tracking-wider text-xs">FREE</span>
                      </div>
                      <div className="flex justify-between text-neutral-gray font-normal">
                        <span>Estimated Taxes (12%)</span>
                        <span className="font-semibold text-primary">{formattedPrice(taxTotal)}</span>
                      </div>
                      
                      <div className="border-t border-borders/60 pt-4 flex justify-between font-general-sans text-base font-bold text-primary">
                        <span>Order Total</span>
                        <span className="text-accent-indigo font-extrabold">{formattedPrice(cartTotal)}</span>
                      </div>
                    </div>
                  </div>

                </div>

              </motion.div>
            ) : (
              // Order Success Page
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-md mx-auto text-center bg-surface rounded-3xl p-10 shadow-[0_15px_50px_rgba(15,23,42,0.04)] font-sans animate-fadeIn"
              >
                <div className="w-16 h-16 bg-success/15 rounded-full flex items-center justify-center mx-auto mb-6 text-success">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                
                <span className="text-[10px] font-bold text-success tracking-widest uppercase block mb-1">Authorization Success</span>
                <h2 className="font-general-sans text-2xl font-bold tracking-tight text-primary uppercase">
                  Order Confirmed
                </h2>
                
                <p className="text-sm text-neutral-gray mt-4 leading-relaxed font-normal">
                  Thank you for your order, <strong>{billingData.name}</strong>. Your transaction has been approved. A notification detailing dispatch logistics was forwarded to <strong>{billingData.email}</strong>.
                </p>

                <div className="border-y border-borders/60 my-6 py-4 text-left space-y-2 text-xs text-neutral-gray font-normal">
                  <div className="flex justify-between">
                    <span>Transaction ID</span>
                    <span className="font-semibold text-primary">TXN-9842790241-K</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipment Method</span>
                    <span className="font-semibold text-primary">Ziko Direct Courier</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Estimated Arrival</span>
                    <span className="font-semibold text-primary">July 12, 2026</span>
                  </div>
                </div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    href="/"
                    className="block w-full py-4 bg-primary text-white font-sans text-xs font-semibold tracking-wider uppercase rounded-md hover:bg-accent-indigo transition-colors"
                  >
                    RETURN TO SHOWROOM
                  </Link>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </section>

      <Footer />
    </div>
  );
}
