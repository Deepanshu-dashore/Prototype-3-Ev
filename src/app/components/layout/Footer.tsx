"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "../shared/Logo";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="w-full bg-slate-50/80 mt-auto">
      <div className="max-w-[1440px] mx-auto px-8 py-20 lg:px-16">
        
        {/* Footer Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          
          {/* Brand Info & Newsletter Capture */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <Logo variant="stacked" size={36} />
            <p className="font-sans text-sm font-normal text-slate-500 max-w-sm leading-relaxed">
              Precision-engineered electric mobility designed for peak aerodynamic efficiency and high-velocity performance. Crafted for those who value technical excellence.
            </p>

            {/* Newsletter Input Form */}
            <div className="max-w-sm mt-2">
              <span className="font-general-sans text-[10px] font-semibold text-slate-900 tracking-widest uppercase block mb-3">
                Join the Velocity Circle
              </span>
              {subscribed ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-[4px] p-3 text-emerald-600 font-sans text-xs font-semibold">
                  Thank you. You have been registered for updates.
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Enter email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-3 rounded-[4px] border border-slate-200 bg-white text-slate-900 placeholder-slate-400 font-sans text-xs font-normal focus:outline-none focus:border-indigo-600 transition-colors"
                  />
                  <button
                    type="submit"
                    className="px-5 py-3 bg-slate-900 text-white font-sans text-xs font-semibold tracking-wider uppercase hover:bg-indigo-600 transition-colors rounded-[4px]"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Site Links */}
          <div className="md:col-span-2 md:col-start-7 flex flex-col gap-4">
            <span className="font-general-sans text-xs font-semibold tracking-wider text-slate-900 uppercase">
              Products
            </span>
            <div className="flex flex-col gap-2.5">
              <Link href="/" className="font-sans text-sm text-slate-500 hover:text-slate-900 transition-colors duration-200">
                Electric Bikes
              </Link>
              <Link href="/scooter" className="font-sans text-sm text-slate-500 hover:text-slate-900 transition-colors duration-200">
                Electric Scooters
              </Link>
              <Link href="/accessories" className="font-sans text-sm text-slate-500 hover:text-slate-900 transition-colors duration-200">
                Ride Accessories
              </Link>
              <Link href="/compare" className="font-sans text-sm text-slate-500 hover:text-slate-900 transition-colors duration-200">
                Model Comparison
              </Link>
            </div>
          </div>

          {/* Engineering Links */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <span className="font-general-sans text-xs font-semibold tracking-wider text-slate-900 uppercase">
              Technology
            </span>
            <div className="flex flex-col gap-2.5">
              <span className="font-sans text-sm text-slate-500 cursor-default">Carbon Monocoque</span>
              <span className="font-sans text-sm text-slate-500 cursor-default">High Density Cells</span>
              <span className="font-sans text-sm text-slate-500 cursor-default">Regen Hub Motors</span>
              <span className="font-sans text-sm text-slate-500 cursor-default">Os Telemetry</span>
            </div>
          </div>

          {/* Support Links */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <span className="font-general-sans text-xs font-semibold tracking-wider text-slate-900 uppercase">
              Company
            </span>
            <div className="flex flex-col gap-2.5">
              <Link href="/contact" className="font-sans text-sm text-slate-500 hover:text-slate-900 transition-colors duration-200">
                Contact Support
              </Link>
              <Link href="/dashboard" className="font-sans text-sm text-slate-500 hover:text-slate-900 transition-colors duration-200">
                Account Portal
              </Link>
              <Link href="/wishlist" className="font-sans text-sm text-slate-500 hover:text-slate-900 transition-colors duration-200">
                My Wishlist
              </Link>
              <span className="font-sans text-sm text-slate-500 cursor-default">Dealer Locator</span>
            </div>
          </div>

        </div>

        {/* Footer Bottom Block */}
        <div className="mt-16 pt-8 border-t border-slate-200/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-slate-500 tracking-wider">
            © {new Date().getFullYear()} ZIKO EV. ALL RIGHTS RESERVED.
          </p>
          <p className="font-general-sans text-[10px] text-indigo-600 font-black tracking-widest uppercase">
            Designed for Elite Velocity
          </p>
        </div>
      </div>
    </footer>
  );
}
