"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../shared/Logo";
import { useTheme } from "../../context/ThemeContext";

// Mock Cart Item Type
interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface NavbarProps {
  theme?: "light" | "dark";
}

// Inner navbar content that uses search parameters
function NavbarContent({ theme: propTheme }: NavbarProps) {
  const { theme: contextTheme, toggleTheme } = useTheme();
  const theme = propTheme || contextTheme;
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<"bikes" | "scooters" | null>(null);

  // Authentication State
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLogin = () => {
      setIsLoggedIn(localStorage.getItem("ziko_logged_in") === "true");
    };
    const handleOpenLogin = () => {
      window.location.href = "/auth/login";
    };
    
    checkLogin();
    window.addEventListener("auth-update", checkLogin);
    window.addEventListener("open-login-modal", handleOpenLogin);
    
    return () => {
      window.removeEventListener("auth-update", checkLogin);
      window.removeEventListener("open-login-modal", handleOpenLogin);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("ziko_logged_in");
    window.dispatchEvent(new Event("auth-update"));
  };
  
  // Interactive Cart state
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "vir-nexus",
      name: "VIR NEXUS",
      price: 39999,
      image: "/products/bike dark.png",
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

  const navTextColor = theme === "dark" ? "text-slate-300 hover:text-white" : "text-slate-600 hover:text-slate-900";

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
    { name: "Home", href: "/" },
    { name: "Our Scooters", href: "/scooter" },
    { name: "Spare Parts", href: "/accessories?cat=spare-parts" },
    { name: "Accessories", href: "/accessories" },
    { name: "Dealers", href: "/contact?type=dealers" },
  ];

  const isActiveLink = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    const [linkPath, linkQuery] = href.split("?");

    if (pathname !== linkPath) {
      return false;
    }

    if (linkQuery) {
      const linkParams = new URLSearchParams(linkQuery);
      for (const [key, val] of Array.from(linkParams.entries())) {
        if (searchParams.get(key) !== val) {
          return false;
        }
      }
      return true;
    }

    if (linkPath === "/accessories" && searchParams.get("cat")) {
      return false;
    }
    if (linkPath === "/contact" && searchParams.get("type")) {
      return false;
    }

    return true;
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
          paddingTop: isScrolled ? "12px" : "18px",
          paddingBottom: isScrolled ? "12px" : "18px",
          backgroundColor: isScrolled 
            ? (theme === "dark" ? "rgba(10, 10, 10, 0.95)" : "rgba(255, 255, 255, 0.95)") 
            : (theme === "dark" ? "rgba(0, 0, 0, 0.4)" : "rgba(255, 255, 255, 0.8)"),
          borderColor: isScrolled 
            ? (theme === "dark" ? "rgba(255, 255, 255, 0.08)" : "rgba(15, 23, 42, 0.08)") 
            : "rgba(0,0,0,0)",
          boxShadow: isScrolled 
            ? (theme === "dark" ? "0 4px 20px rgba(0, 0, 0, 0.4)" : "0 4px 20px rgba(15, 23, 42, 0.03)") 
            : "0 0px 0px rgba(0,0,0,0)"
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={`sticky top-0 z-50 w-full backdrop-blur-md transition-colors duration-300 ${
          theme === "dark" ? "text-white" : "text-slate-900"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-8 lg:px-12">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <Link href="/" className="flex items-center group mr-4">
              <Logo variant="full" light={theme === "dark"} />
            </Link>

            {/* Center Navigation Links - Custom active underline state */}
            <div className="hidden md:flex items-center justify-center flex-1 gap-6 lg:gap-8">
              {navLinks.map((link) => {
                const active = isActiveLink(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`font-sans text-[13px] tracking-wide uppercase relative pb-1 px-1 transition-colors duration-200 ${
                      active
                        ? (theme === "dark" ? "text-white font-bold" : "text-slate-900 font-bold")
                        : `${theme === "dark" ? "text-slate-300 hover:text-white" : "text-slate-600 hover:text-slate-900"} font-medium`
                    }`}
                  >
                    <span>{link.name}</span>
                    {active && (
                      <motion.div
                        layoutId="activeNavUnderline"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#BFFF07]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Right Side Controls - Icons and Lime green Book Test Ride button */}
            <div className="flex items-center gap-6">

              {/* Shopping Cart Indicator */}
              <button 
                onClick={() => setIsCartOpen(true)}
                className={`${theme === "dark" ? "text-slate-300 hover:text-white" : "text-slate-600 hover:text-slate-900"} transition-colors p-1 relative flex items-center`}
                title="Cart"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="absolute -top-1.5 -right-1.5 bg-[#FF6B00] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-sm">
                  {cartCount}
                </span>
              </button>

              {/* Login/Logout Button */}
              {isLoggedIn ? (
                <button 
                  onClick={handleLogout}
                  className="hidden sm:inline-block bg-red-600 hover:bg-red-700 text-white font-sans text-xs font-semibold tracking-wide uppercase px-5 py-2.5 rounded-full transition-all duration-300 hover:scale-[1.02] shadow-[0_0_12px_rgba(220,38,38,0.25)]"
                >
                  Logout
                </button>
              ) : (
                <Link 
                  href="/auth/login"
                  className="hidden sm:inline-block bg-[#BFFF07] hover:bg-[#a6df05] text-black font-sans text-xs font-semibold tracking-wide uppercase px-5 py-2.5 rounded-full transition-all duration-300 hover:scale-[1.02] shadow-[0_0_12px_rgba(191,255,7,0.25)] text-center"
                >
                  Login
                </Link>
              )}

              {/* User Profile */}
              <Link href="/dashboard" className={`${theme === "dark" ? "text-slate-300 hover:text-white" : "text-slate-600 hover:text-slate-900"} transition-colors p-1`} title="My Account">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </Link>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className={`inline-flex items-center justify-center p-2 rounded-md ${theme === "dark" ? "text-white hover:bg-slate-900" : "text-slate-700 hover:bg-slate-100"} focus:outline-none md:hidden transition-colors`}
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                <svg 
                  className={`block h-6 w-6 transform transition-transform duration-200 ${isOpen ? "rotate-90" : ""}`}
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
                </svg>
              </button>
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
                        <span className="text-[10px] font-bold text-indigo-600 tracking-widest uppercase block mb-1">Flagship Scooters</span>
                        <h4 className="font-general-sans text-xl font-bold uppercase tracking-tight text-slate-900">Carbon Core Scooters</h4>
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
                        <Image src="/products/bike dark.png" alt="VIR Nexus" fill className="object-contain p-2" />
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
                        <Image src="/products/bike yellow.png" alt="VIR Pro" fill className="object-contain p-2" />
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
                        <Image src="/products/bike blue.webp" alt="VIR Flux" fill className="object-contain p-2" />
                      </div>
                      <span className="font-general-sans text-xs font-bold text-slate-900 block">VIR FLUX</span>
                      <span className="font-sans text-[10px] text-slate-500">Carbon Deck / 65KM Range</span>
                    </div>

                    <div className="col-span-3 text-center group cursor-pointer">
                      <div className="relative w-full h-[120px] bg-slate-50 rounded-lg flex items-center justify-center p-3 mb-2 transition-colors group-hover:bg-slate-100">
                        <Image src="/products/bike white.png" alt="VIR Glide" fill className="object-contain p-2" />
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
              className="md:hidden bg-surface border-b border-borders overflow-hidden transition-colors duration-300"
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
                          ? "bg-background text-indigo-600"
                          : "text-primary hover:bg-background"
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
              className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-md bg-surface shadow-2xl flex flex-col transition-colors duration-300"
            >
              {/* Header */}
              <div className="p-6 border-b border-borders flex items-center justify-between">
                <h3 className="font-general-sans text-base font-black uppercase text-primary tracking-wide">Shopping Bag</h3>
                <button 
                  onClick={() => setIsCartOpen(false)} 
                  className="p-1 rounded-full text-neutral-gray hover:text-primary hover:bg-background transition-colors"
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
                    <div key={item.id} className="flex gap-4 items-center pb-6 border-b border-borders last:border-0 last:pb-0">
                      <div className="relative w-20 h-20 bg-background rounded-lg border border-borders p-1 flex items-center justify-center shrink-0">
                        <Image src={item.image} alt={item.name} fill className="object-contain p-1" />
                      </div>
                      
                      <div className="flex-1">
                        <span className="font-general-sans text-xs font-bold text-primary tracking-wide block uppercase">{item.name}</span>
                        <span className="font-sans text-xs font-semibold text-indigo-600 mt-0.5 block">{formattedPrice(item.price)}</span>
                        
                        {/* Quantity Counter */}
                        <div className="flex items-center gap-2 mt-3">
                          <button 
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-6 h-6 rounded-full border border-borders text-neutral-gray hover:text-primary hover:border-neutral-gray flex items-center justify-center text-xs font-bold transition-colors"
                          >
                            -
                          </button>
                          <span className="font-sans text-xs font-bold text-primary w-6 text-center">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-6 h-6 rounded-full border border-borders text-neutral-gray hover:text-primary hover:border-neutral-gray flex items-center justify-center text-xs font-bold transition-colors"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-20 flex flex-col items-center justify-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center text-neutral-gray border border-borders">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                    </div>
                    <span className="font-sans text-xs font-bold text-neutral-gray uppercase tracking-wider">Your bag is empty</span>
                  </div>
                )}
              </div>

              {/* Footer Checkout Block */}
              <div className="p-6 border-t border-borders bg-background/50">
                <div className="space-y-2 mb-6 text-sm font-sans">
                  <div className="flex justify-between text-neutral-gray">
                    <span>Subtotal</span>
                    <span className="font-semibold text-primary">{formattedPrice(cartTotal)}</span>
                  </div>
                  <div className="flex justify-between text-neutral-gray text-xs">
                    <span>Shipping</span>
                    <span className="text-emerald-600 font-bold uppercase tracking-wider text-xs">FREE</span>
                  </div>
                  <div className="border-t border-borders pt-3 flex justify-between font-general-sans text-base font-bold text-primary">
                    <span>Total Estimated</span>
                    <span>{formattedPrice(cartTotal)}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <button 
                    onClick={() => {
                      if (localStorage.getItem("ziko_logged_in") !== "true") {
                        alert("Please login to proceed to checkout!");
                        setIsCartOpen(false);
                        window.location.href = "/auth/login";
                        return;
                      }
                      window.location.href = "/checkout";
                    }}
                    className="block w-full py-4 bg-slate-900 dark:bg-zinc-800 text-white text-center font-sans text-xs font-semibold tracking-wider uppercase hover:bg-indigo-600 hover:shadow-[0_4px_15px_rgba(79,70,229,0.3)] transition-all duration-300 rounded-sm"
                  >
                    PROCEED TO CHECKOUT
                  </button>
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
function NavbarFallback({ theme }: NavbarProps) {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Our Scooters", href: "/scooter" },
    { name: "Spare Parts", href: "/accessories?cat=spare-parts" },
    { name: "Accessories", href: "/accessories" },
    { name: "Dealers", href: "/contact?type=dealers" },
  ];

  const navTextColor = theme === "dark" ? "text-slate-300 hover:text-white" : "text-slate-600 hover:text-slate-900";

  return (
    <nav className={`sticky top-0 z-50 w-full backdrop-blur-md py-[18px] transition-colors duration-300 ${
      theme === "dark" 
        ? "bg-slate-950/80 text-white" 
        : "bg-white/80 text-slate-900"
    }`}>
      <div className="max-w-[1440px] mx-auto px-8 lg:px-12">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center group mr-4">
            <Logo variant="full" light={theme === "dark"} />
          </Link>

          <div className="hidden md:flex items-center justify-center flex-1 gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`font-sans text-[13px] font-medium tracking-wide uppercase px-2 py-1 ${navTextColor}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <div className={`p-1 ${navTextColor}`}>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div className={`flex items-center gap-2 p-1 ${navTextColor}`}>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default function Navbar({ theme }: NavbarProps) {
  return (
    <Suspense fallback={<NavbarFallback theme={theme} />}>
      <NavbarContent theme={theme} />
    </Suspense>
  );
}
