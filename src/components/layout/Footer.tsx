"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "../shared/Logo";
import { useTheme } from "../../context/ThemeContext";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const { theme } = useTheme();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="w-full bg-background border-t border-borders mt-auto text-primary transition-all duration-300">
      <div className="max-w-[1440px] mx-auto px-8 py-20 lg:px-12">
        
        {/* Footer Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          
          {/* Brand Info & Newsletter Capture */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <Logo variant="stacked" size={36} light={theme === "dark"} />
            <p className="font-sans text-xs font-light text-neutral-gray max-w-sm leading-relaxed transition-colors duration-300">
              Precision-engineered electric mobility designed for peak aerodynamic efficiency and high-velocity performance. Crafted for those who value technical excellence.
            </p>

            {/* Newsletter Input Form */}
            <div className="max-w-sm mt-2">
              <span className="font-general-sans text-[9px] font-bold text-primary tracking-widest uppercase block mb-3 transition-colors duration-300">
                Join the Velocity Circle
              </span>
              {subscribed ? (
                <div className="bg-[#BFFF07]/10 border border-[#BFFF07]/20 rounded-[4px] p-3 text-[#BFFF07] font-sans text-xs font-semibold">
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
                    className="flex-1 px-4 py-3 rounded-[4px] border border-borders bg-surface text-primary placeholder-neutral-gray font-sans text-xs font-light focus:outline-none focus:border-[#BFFF07] transition-colors duration-300"
                  />
                  <button
                    type="submit"
                    className="px-5 py-3 bg-[#BFFF07] text-black font-general-sans text-[10px] font-black tracking-widest uppercase hover:bg-[#a6df05] transition-all rounded-[4px]"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Site Links */}
          <div className="md:col-span-2 md:col-start-7 flex flex-col gap-4">
            <span className="font-general-sans text-xs font-semibold tracking-wider text-primary uppercase transition-colors duration-300">
              Products
            </span>
            <div className="flex flex-col gap-2.5">
              <Link href="/scooter" className="font-sans text-xs text-neutral-gray hover:text-primary transition-colors duration-200 font-light">
                Electric Scooters
              </Link>
              <Link href="/accessories?cat=spare-parts" className="font-sans text-xs text-neutral-gray hover:text-primary transition-colors duration-200 font-light">
                Spare Parts
              </Link>
              <Link href="/accessories" className="font-sans text-xs text-neutral-gray hover:text-primary transition-colors duration-200 font-light">
                Ride Accessories
              </Link>
              <Link href="/compare" className="font-sans text-xs text-neutral-gray hover:text-primary transition-colors duration-200 font-light">
                Model Comparison
              </Link>
            </div>
          </div>

          {/* Engineering Links */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <span className="font-general-sans text-xs font-semibold tracking-wider text-primary uppercase transition-colors duration-300">
              Technology
            </span>
            <div className="flex flex-col gap-2.5">
              <span className="font-sans text-xs text-neutral-gray cursor-default font-light transition-colors duration-300">Carbon Monocoque</span>
              <span className="font-sans text-xs text-neutral-gray cursor-default font-light transition-colors duration-300">High Density Cells</span>
              <span className="font-sans text-xs text-neutral-gray cursor-default font-light transition-colors duration-300">Regen Hub Motors</span>
              <span className="font-sans text-xs text-neutral-gray cursor-default font-light transition-colors duration-300">Os Telemetry</span>
            </div>
          </div>

          {/* Support Links */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <span className="font-general-sans text-xs font-semibold tracking-wider text-primary uppercase transition-colors duration-300">
              Company
            </span>
            <div className="flex flex-col gap-2.5">
              <Link href="/contact" className="font-sans text-xs text-neutral-gray hover:text-primary transition-colors duration-200 font-light">
                Contact Support
              </Link>
              <Link href="/dashboard" className="font-sans text-xs text-neutral-gray hover:text-primary transition-colors duration-200 font-light">
                Account Portal
              </Link>
              <Link href="/wishlist" className="font-sans text-xs text-neutral-gray hover:text-primary transition-colors duration-200 font-light">
                My Wishlist
              </Link>
              <span className="font-sans text-xs text-neutral-gray cursor-default font-light transition-colors duration-300">Dealer Locator</span>
            </div>
          </div>

        </div>

        {/* Footer Bottom Block */}
        <div className="mt-16 pt-8 border-t border-borders flex flex-col sm:flex-row items-center justify-between gap-4 transition-colors duration-300">
          <p className="font-sans text-[10px] text-neutral-gray tracking-wider transition-colors duration-300">
            © {new Date().getFullYear()} ZIKO EV. ALL RIGHTS RESERVED.
          </p>
          <p className="font-general-sans text-[9px] text-[#BFFF07] font-black tracking-widest uppercase">
            Designed for Elite Velocity
          </p>
        </div>
      </div>
    </footer>
  );
}
