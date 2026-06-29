"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../shared/Logo";

// Mock Cart Item Type
interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

// Inner navbar content that uses search parameters
function NavbarContent() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<"bikes" | "scooters" | null>(null);
  
  // Interactive Cart state
  const [cartItems, setCartItems] = useState<CartItem[]>([
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
  ]);

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const catParam = searchParams ? searchParams.get("cat") : null;

  // Monitor window scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on page changes
  useEffect(() => {
    setIsOpen(false);
    setIsCartOpen(false);
    setActiveMegaMenu(null);
  }, [pathname, searchParams]);

  const navLinks = [
    { name: "E-Bikes", href: "/", mega: "bikes" as const },
    { name: "Scooters", href: "/scooter", mega: "scooters" as const },
    { name: "Batteries", href: "/accessories?cat=batteries" },
    { name: "Gear", href: "/accessories?cat=gear" },
    { name: "Support", href: "/contact" },
  ];

  const isActiveLink = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    if (href === "/scooter") {
      return pathname === "/scooter";
    }
    if (href === "/contact") {
      return pathname === "/contact";
    }
    if (href.startsWith("/accessories")) {
      const isAccessoriesPage = pathname === "/accessories";
      if (!isAccessoriesPage) return false;
      
      const targetCat = href.includes("cat=batteries") ? "batteries" : "gear";
      if (targetCat === "batteries") {
        return catParam === "batteries";
      } else {
        return catParam !== "batteries";
      }
    }
    return false;
  };

  // Cart operations
  const updateQuantity = (id: string, delta: number) => {
    setCartItems(prev =>
      prev
        .map(item => (item.id === id ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item))
        .filter(item => item.quantity > 0)
    );
  };

  const cartTotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const formattedPrice = (value: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <>
      <motion.nav 
        animate={{
          paddingTop: isScrolled ? "12px" : "20px",
          paddingBottom: isScrolled ? "12px" : "20px",
          backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.95)" : "rgba(255, 255, 255, 0.8)",
          borderColor: isScrolled ? "rgba(15, 23, 42, 0.08)" : "rgba(15, 23, 42, 0.04)",
          boxShadow: isScrolled ? "0 4px 20px rgba(15, 23, 42, 0.03)" : "0 0px 0px rgba(0,0,0,0)"
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="sticky top-0 z-50 w-full border-b backdrop-blur-md"
        onMouseLeave={() => setActiveMegaMenu(null)}
      >
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <Link href="/" className="flex items-center group mr-4">
              <Logo variant="full" />
            </Link>

            {/* Center Navigation Links - Slate 700 with high contrast hover */}
            <div className="hidden md:flex items-center justify-center flex-1 gap-8 lg:gap-10">
              {navLinks.map((link) => {
                const active = isActiveLink(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onMouseEnter={() => {
                      if (link.mega) {
                        setActiveMegaMenu(link.mega);
                      } else {
                        setActiveMegaMenu(null);
                      }
                    }}
                    className={`font-sans text-[15px] font-medium tracking-[0.003em] relative py-2 group transition-colors duration-300 ${
                      active
                        ? "text-indigo-600"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {link.name}
                    
                    {/* Underline slides smoothly between active tabs */}
                    {active && (
                      <motion.span
                        layoutId="activeUnderline"
                        className="absolute bottom-0 left-0 w-full h-[2px] bg-indigo-600 shadow-[0_0_8px_rgba(79,70,229,0.3)]"
                        transition={{ type: "spring", stiffness: 350, damping: 25 }}
                      />
                    )}
                    
                    {/* Hover line indicators */}
                    {!active && (
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-slate-200 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Right Side Utility Controls - Dark text, highly visible */}
            <div className="flex items-center gap-5">
              
              {/* Compare Page Link */}
              <Link href="/compare" className="text-slate-600 hover:text-slate-900 transition-colors p-1" title="Compare Models">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
                </svg>
              </Link>

              {/* Wishlist Link */}
              <Link href="/wishlist" className="text-slate-600 hover:text-slate-900 transition-colors p-1" title="Wishlist">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </Link>

              {/* Account Dashboard Link */}
              <Link href="/dashboard" className="text-slate-600 hover:text-slate-900 transition-colors p-1" title="My Account">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </Link>

              {/* Interactive Cart Button Trigger */}
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsCartOpen(true)}
                className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors group p-1 relative"
                aria-label="Shopping Cart"
              >
                <div className="relative">
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  {cartCount > 0 && (
                    <span className="absolute -top-1.5 -right-1.5 bg-indigo-600 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center border border-white shadow-sm">
                      {cartCount}
                    </span>
                  )}
                </div>
                <span className="font-sans text-xs font-medium tracking-[0.003em] text-slate-600 group-hover:text-slate-900 uppercase transition-colors duration-300 hidden sm:inline">
                  BAG
                </span>
              </motion.button>

              {/* Mobile menu button */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none md:hidden transition-colors"
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                <motion.svg 
                  animate={{ rotate: isOpen ? 90 : 0 }}
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </motion.svg>
              </motion.button>
            </div>

          </div>
        </div>

        {/* Mega Menu Dropdowns - Added absolute z-50 and bg-white to prevent content bleed-through */}
        <AnimatePresence>
          {activeMegaMenu && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="absolute top-full left-0 right-0 z-50 bg-white border-b border-slate-200 shadow-[0_20px_40px_rgba(15,23,42,0.06)] hidden md:block overflow-hidden"
              onMouseEnter={() => setActiveMegaMenu(activeMegaMenu)}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <div className="max-w-[1440px] mx-auto px-16 py-10 grid grid-cols-12 gap-8 bg-white">
                
                {/* Visual showcases */}
                {activeMegaMenu === "bikes" ? (
                  <>
                    <div className="col-span-3 flex flex-col justify-between border-r border-slate-200 pr-6">
                      <div>
                        <span className="text-[10px] font-bold text-indigo-600 tracking-widest uppercase block mb-1">E-Bike Collection</span>
                        <h4 className="font-general-sans text-xl font-bold uppercase tracking-tight text-slate-900">Carbon Core Machines</h4>
                        <p className="font-sans text-xs text-slate-500 mt-2 leading-relaxed">
                          Handcrafted structures designed in wind tunnels for terminal speeds.
                        </p>
                      </div>
                      <Link href="/" className="text-xs font-bold text-indigo-600 hover:text-slate-900 transition-colors flex items-center gap-1.5 mt-4">
                        All Specifications →
                      </Link>
                    </div>

                    <div className="col-span-3 text-center group cursor-pointer">
                      <div className="relative w-full h-[120px] bg-slate-50 rounded-lg flex items-center justify-center p-3 mb-2 transition-colors group-hover:bg-slate-100">
                        <Image src="/products/vir_nexus.png" alt="VIR Nexus" fill className="object-contain p-2" />
                      </div>
                      <span className="font-general-sans text-xs font-bold text-slate-900 block">VIR NEXUS</span>
                      <span className="font-sans text-[10px] text-slate-500">Aero Carbon / 70KM Range</span>
                    </div>

                    <div className="col-span-3 text-center group cursor-pointer">
                      <div className="relative w-full h-[120px] bg-slate-50 rounded-lg flex items-center justify-center p-3 mb-2 transition-colors group-hover:bg-slate-100">
                        <Image src="/products/vir_atom.png" alt="VIR Atom" fill className="object-contain p-2" />
                      </div>
                      <span className="font-general-sans text-xs font-bold text-slate-900 block">VIR ATOM</span>
                      <span className="font-sans text-[10px] text-slate-500">High Torque / 90KM Range</span>
                    </div>

                    <div className="col-span-3 text-center group cursor-pointer">
                      <div className="relative w-full h-[120px] bg-slate-50 rounded-lg flex items-center justify-center p-3 mb-2 transition-colors group-hover:bg-slate-100">
                        <Image src="/products/vir_pro.png" alt="VIR Pro" fill className="object-contain p-2" />
                      </div>
                      <span className="font-general-sans text-xs font-bold text-slate-900 block">VIR PRO</span>
                      <span className="font-sans text-[10px] text-slate-500">Telemetry Pro / 110KM Range</span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="col-span-3 flex flex-col justify-between border-r border-slate-200 pr-6">
                      <div>
                        <span className="text-[10px] font-bold text-indigo-600 tracking-widest uppercase block mb-1">Scooter Collection</span>
                        <h4 className="font-general-sans text-xl font-bold uppercase tracking-tight text-slate-900">Urban Velocity Flight</h4>
                        <p className="font-sans text-xs text-slate-500 mt-2 leading-relaxed">
                          Foldable structural profiles designed for daily high-torque commutes.
                        </p>
                      </div>
                      <Link href="/scooter" className="text-xs font-bold text-indigo-600 hover:text-slate-900 transition-colors flex items-center gap-1.5 mt-4">
                        All Specifications →
                      </Link>
                    </div>

                    <div className="col-span-3 text-center group cursor-pointer">
                      <div className="relative w-full h-[120px] bg-slate-50 rounded-lg flex items-center justify-center p-3 mb-2 transition-colors group-hover:bg-slate-100">
                        <Image src="/products/vir_flux.png" alt="VIR Flux" fill className="object-contain p-2" />
                      </div>
                      <span className="font-general-sans text-xs font-bold text-slate-900 block">VIR FLUX</span>
                      <span className="font-sans text-[10px] text-slate-500">Carbon Deck / 65KM Range</span>
                    </div>

                    <div className="col-span-3 text-center group cursor-pointer">
                      <div className="relative w-full h-[120px] bg-slate-50 rounded-lg flex items-center justify-center p-3 mb-2 transition-colors group-hover:bg-slate-100">
                        <Image src="/products/vir_glide.png" alt="VIR Glide" fill className="object-contain p-2" />
                      </div>
                      <span className="font-general-sans text-xs font-bold text-slate-900 block">VIR GLIDE</span>
                      <span className="font-sans text-[10px] text-slate-500">Aluminum Folder / 50KM Range</span>
                    </div>

                    <div className="col-span-3 text-center group cursor-pointer">
                      <div className="relative w-full h-[120px] bg-slate-50 rounded-lg flex items-center justify-center p-3 mb-2 transition-colors group-hover:bg-slate-100">
                        <Image src="/products/vir_apex.png" alt="VIR Apex" fill className="object-contain p-2" />
                      </div>
                      <span className="font-general-sans text-xs font-bold text-slate-900 block">VIR APEX</span>
                      <span className="font-sans text-[10px] text-slate-500">Titanium Race / 80KM Range</span>
                    </div>
                  </>
                )}

              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Menu with slide down transition */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="md:hidden bg-white border-b border-slate-200 overflow-hidden"
              id="mobile-menu"
            >
              <div className="px-4 pt-2 pb-6 space-y-2">
                {navLinks.map((link) => {
                  const active = isActiveLink(link.href);
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`block px-3 py-3 rounded-md font-sans text-sm font-semibold tracking-wider transition-colors ${
                        active
                          ? "bg-slate-50 text-indigo-600"
                          : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Cart Drawer Sliding Panel Overlay */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            {/* Dark blur backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 z-50 bg-slate-900/20 backdrop-blur-xs"
            />

            {/* Sliding Drawer Container */}
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.35, ease: "easeOut" }}
              className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-[420px] bg-white border-l border-slate-200 shadow-2xl flex flex-col justify-between"
            >
              {/* Header */}
              <div className="px-6 py-5 border-b border-slate-200 flex items-center justify-between">
                <div>
                  <h3 className="font-general-sans text-lg font-bold text-slate-900">Shopping Bag</h3>
                  <span className="font-sans text-xs text-slate-500 mt-0.5 block">{cartCount} items selected</span>
                </div>
                <button 
                  onClick={() => setIsCartOpen(false)} 
                  className="p-1 rounded-full text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                  aria-label="Close Cart"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Items List */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {cartItems.length > 0 ? (
                  cartItems.map((item) => (
                    <div key={item.id} className="flex gap-4 items-center pb-6 border-b border-slate-100 last:border-0 last:pb-0">
                      <div className="relative w-20 h-20 bg-slate-50 rounded-lg border border-slate-100 p-1 flex items-center justify-center shrink-0">
                        <Image src={item.image} alt={item.name} fill className="object-contain p-1" />
                      </div>
                      
                      <div className="flex-1">
                        <span className="font-general-sans text-xs font-bold text-slate-900 tracking-wide block uppercase">{item.name}</span>
                        <span className="font-sans text-xs font-semibold text-indigo-600 mt-0.5 block">{formattedPrice(item.price)}</span>
                        
                        {/* Quantity Counter */}
                        <div className="flex items-center gap-2 mt-3">
                          <button 
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-6 h-6 rounded-full border border-slate-200 text-slate-500 hover:text-slate-900 hover:border-slate-400 flex items-center justify-center text-xs font-bold transition-colors"
                          >
                            -
                          </button>
                          <span className="font-sans text-xs font-bold text-slate-900 w-6 text-center">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-6 h-6 rounded-full border border-slate-200 text-slate-500 hover:text-slate-900 hover:border-slate-400 flex items-center justify-center text-xs font-bold transition-colors"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-20 flex flex-col items-center justify-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 border border-slate-200">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                    </div>
                    <span className="font-sans text-xs font-bold text-slate-400 uppercase tracking-wider">Your bag is empty</span>
                  </div>
                )}
              </div>

              {/* Footer Checkout Block */}
              <div className="p-6 border-t border-slate-200 bg-slate-50/50">
                <div className="space-y-2 mb-6 text-sm font-sans">
                  <div className="flex justify-between text-slate-500">
                    <span>Subtotal</span>
                    <span className="font-semibold text-slate-900">{formattedPrice(cartTotal)}</span>
                  </div>
                  <div className="flex justify-between text-slate-500 text-xs">
                    <span>Shipping</span>
                    <span className="text-emerald-600 font-bold uppercase tracking-wider text-xs">FREE</span>
                  </div>
                  <div className="border-t border-slate-200 pt-3 flex justify-between font-general-sans text-base font-bold text-slate-900">
                    <span>Total Estimated</span>
                    <span>{formattedPrice(cartTotal)}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Link 
                    href="/checkout"
                    onClick={() => setIsCartOpen(false)}
                    className="block w-full py-4 bg-slate-900 text-white text-center font-sans text-xs font-semibold tracking-wider uppercase hover:bg-indigo-600 hover:shadow-[0_4px_15px_rgba(79,70,229,0.3)] transition-all duration-300 rounded-sm"
                  >
                    PROCEED TO CHECKOUT
                  </Link>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="block w-full py-3 bg-transparent border border-slate-200 text-slate-500 text-center font-sans text-[10px] font-bold tracking-widest uppercase hover:text-slate-900 hover:border-slate-900 transition-colors"
                  >
                    CONTINUE SHOPPING
                  </button>
                </div>
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

// Fallback skeleton header matching top spacing exactly
function NavbarFallback() {
  const navLinks = [
    { name: "E-Bikes", href: "/" },
    { name: "Scooters", href: "/scooter" },
    { name: "Batteries", href: "/accessories?cat=batteries" },
    { name: "Gear", href: "/accessories?cat=gear" },
    { name: "Support", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md py-5 border-slate-200/50">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center group mr-4">
            <Logo variant="full" />
          </Link>

          <div className="hidden md:flex items-center justify-center flex-1 gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-sans text-sm font-medium tracking-[0.003em] text-slate-600 py-1"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-5">
            <div className="text-slate-600 p-1">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div className="flex items-center gap-2 text-slate-600 p-1">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="font-sans text-xs font-medium tracking-[0.003em] text-slate-600 uppercase">
                BAG
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default function Navbar() {
  return (
    <Suspense fallback={<NavbarFallback />}>
      <NavbarContent />
    </Suspense>
  );
}
