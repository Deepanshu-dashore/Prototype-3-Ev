"use client";

import { use, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Lightbulb, 
  ArrowLeftRight, 
  Shield, 
  BatteryCharging, 
  Droplets, 
  Check, 
  Star, 
  Truck, 
  Lock, 
  RefreshCw, 
  Heart, 
  ShoppingCart,
  ChevronLeft,
  ChevronRight,
  ShieldAlert,
  Info,
  ArrowRight
} from "lucide-react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

interface ColorItem {
  name: string;
  hex: string;
}

interface FeatureItem {
  icon: React.ReactNode;
  label: string;
  desc: string;
}

interface SpecItem {
  label: string;
  value: string;
}

interface CompatibilityItem {
  name: string;
  id: string;
  image: string;
}

interface AccessoryData {
  name: string;
  category: string;
  price: number;
  rating: number;
  reviewCount: number;
  description: string;
  image: string;
  thumbnails: string[];
  colors: ColorItem[];
  sizes: string[];
  features: FeatureItem[];
  story: {
    title: string;
    subtitle: string;
    desc: string;
    image: string;
    bullets: string[];
  };
  specs: SpecItem[];
  compatibility: CompatibilityItem[];
}

export default function AccessoryDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);

  // Complete mock dataset for accessories
  const accessoriesData: Record<string, AccessoryData> = {
    "smart-helmet-pro": {
      name: "Smart Helmet Pro",
      category: "Rider Gear",
      price: 4999,
      rating: 4.8,
      reviewCount: 236,
      description: "Advanced safety helmet with built-in LED lighting, turn signals and impact protection.",
      image: "/products/helmet.png",
      thumbnails: [
        "/products/helmet.png",
        "/products/helmet.png", 
        "/products/helmet.png",
        "/products/helmet.png",
      ],
      colors: [
        { name: "Matte Black", hex: "#0f172a" },
        { name: "Studio White", hex: "#f8fafc" },
      ],
      sizes: ["M (55-58cm)", "L (59-61cm)", "XL (61-64cm)"],
      features: [
        { icon: <Lightbulb className="w-5 h-5" />, label: "LED Lights", desc: "Front & Rear" },
        { icon: <ArrowLeftRight className="w-5 h-5" />, label: "Smart Signals", desc: "Turn Indicators" },
        { icon: <Shield className="w-5 h-5" />, label: "Impact Protection", desc: "High Density EPS" },
        { icon: <Droplets className="w-5 h-5" />, label: "Lightweight", desc: "450 ± 50g" },
      ],
      story: {
        title: "Enhanced Safety Smarter Rides",
        subtitle: "Ride safe. Ride smart.",
        desc: "Smart Helmet Pro combines cutting-edge technology with superior protection. Built-in LED lights and turn signals improve your visibility and keep you safe on every ride.",
        image: "/products/helmet.png",
        bullets: [
          "Automatic brake light",
          "Left & right turn indicators",
          "High-impact ABS shell",
          "Comfortable inner padding",
          "Magnetic buckle for secure fit",
        ],
      },
      specs: [
        { label: "Shell Material", value: "ABS + High Density EPS" },
        { label: "Weight", value: "450 ± 50g" },
        { label: "Ventilation", value: "12 Air Vents" },
        { label: "Lighting", value: "Front LED, Rear LED, Turn Signals" },
        { label: "Battery", value: "500mAh Rechargeable" },
        { label: "Charging Port", value: "USB Type-C" },
        { label: "Charging Time", value: "2 - 2.5 Hours" },
        { label: "Usage Time", value: "Up to 36 Hours (Lights On)" },
        { label: "Water Resistance", value: "IPX5" },
        { label: "Certification", value: "CE, EN1078 Certified" },
      ],
      compatibility: [
        { name: "VIR Flux", id: "vir-flux", image: "/products/vir_flux.png" },
        { name: "VIR Glide", id: "vir-glide", image: "/products/vir_glide.png" },
        { name: "VIR Apex", id: "vir-apex", image: "/products/vir_apex.png" },
      ],
    },
    "carbon-helmet": {
      name: "Carbon Aero Helmet",
      category: "Rider Gear",
      price: 9999,
      rating: 4.9,
      reviewCount: 142,
      description: "Ultra-lightweight aerodynamic carbon shell with integrated safety beacon.",
      image: "/products/helmet.png",
      thumbnails: [
        "/products/helmet.png",
        "/products/helmet.png",
      ],
      colors: [
        { name: "Carbon Weave", hex: "#1e293b" },
      ],
      sizes: ["M (55-58cm)", "L (59-61cm)"],
      features: [
        { icon: <Shield className="w-5 h-5" />, label: "Carbon Shell", desc: "100% Unidirectional Weave" },
        { icon: <Shield className="w-5 h-5" />, label: "Ultra-Light", desc: "Only 240g Weight" },
        { icon: <Lightbulb className="w-5 h-5" />, label: "Safety Beacon", desc: "Integrated Rear LED" },
      ],
      story: {
        title: "Wind Tunnel Masterpiece",
        subtitle: "Unmatched performance structural gear.",
        desc: "Engineered specifically to slash drag profiles at speed. Constructed from raw unidirectional carbon fiber sheets with custom multi-density foam inserts.",
        image: "/products/helmet.png",
        bullets: [
          "Premium unidirectional carbon layup structure.",
          "Wind-tunnel optimized channel venting layouts.",
          "Secure micro-retention adjusters.",
        ],
      },
      specs: [
        { label: "Shell Material", value: "Unidirectional Carbon Fiber" },
        { label: "Weight", value: "240g ± 15g" },
        { label: "Ventilation", value: "16 Aerodynamic Vents" },
        { label: "Lighting Mode", value: "Rear safety pulse beacon" },
        { label: "Battery Unit", value: "240mAh Rechargeable" },
        { label: "Certification", value: "CE, CPSC Safety Certified" },
      ],
      compatibility: [
        { name: "VIR Nexus", id: "vir-nexus", image: "/products/vir_nexus.png" },
        { name: "VIR Pro", id: "vir-pro", image: "/products/vir_pro.png" },
      ],
    },
    "smart-gps": {
      name: "Smart GPS Mount",
      category: "Performance Gear",
      price: 4499,
      rating: 4.6,
      reviewCount: 98,
      description: "GPS telemetry cockpit mount running Cobalt OS with anti-shock clamps.",
      image: "/products/gps.png",
      thumbnails: [
        "/products/gps.png",
        "/products/gps.png",
      ],
      colors: [
        { name: "Anodized Black", hex: "#020617" },
        { name: "Silver Alloy", hex: "#cbd5e1" },
      ],
      sizes: ["Universal Fit"],
      features: [
        { icon: <ArrowLeftRight className="w-5 h-5" />, label: "Cobalt OS Link", desc: "Direct Bluetooth Telemetry" },
        { icon: <Shield className="w-5 h-5" />, label: "CNC Machined", desc: "7075-T6 Alloy Build" },
        { icon: <BatteryCharging className="w-5 h-5" />, label: "Long Life", desc: "12 HR Rechargeable Cells" },
      ],
      story: {
        title: "Navigation Reimagined",
        subtitle: "Smart HUD telemetry system.",
        desc: "Machined precisely from lightweight structural metal blocks. Displays real-time speed, battery heat metrics, turn navigation grids, and incoming call alerts.",
        image: "/products/gps.png",
        bullets: [
          "Vibration dampening elastomer suspension rings.",
          "Anti-glare high resolution HUD panel.",
          "Quick-release magnetic coupling locks.",
        ],
      },
      specs: [
        { label: "Clamping Body", value: "CNC Machined 7075-T6 Alloy" },
        { label: "OS Integration", value: "Cobalt HUD Sync (v2.1)" },
        { label: "Display panel", value: "2.1 inch Transflective LCD" },
        { label: "Battery Life", value: "Up to 12 Hours active screen time" },
        { label: "Interface", value: "Bluetooth 5.0 Low Energy" },
        { label: "Clamping Diameter", value: "Fits 22.2mm - 31.8mm handlebars" },
      ],
      compatibility: [
        { name: "VIR Nexus", id: "vir-nexus", image: "/products/vir_nexus.png" },
        { name: "VIR Atom", id: "vir-atom", image: "/products/vir_atom.png" },
        { name: "VIR Flux", id: "vir-flux", image: "/products/vir_flux.png" },
      ],
    },
    "fast-charger": {
      name: "Fast Charging Station",
      category: "Power & Batteries",
      price: 14999,
      rating: 4.7,
      reviewCount: 74,
      description: "Rapid power brick delivering 80% capacity in 40 minutes with heat regulators.",
      image: "/products/charger.png",
      thumbnails: [
        "/products/charger.png",
        "/products/charger.png",
      ],
      colors: [
        { name: "Slate Grey", hex: "#334155" },
      ],
      sizes: ["Standard Plug"],
      features: [
        { icon: <BatteryCharging className="w-5 h-5" />, label: "4.5A Rapid Flow", desc: "Fills Energy Cells Fast" },
        { icon: <ShieldAlert className="w-5 h-5" />, label: "Thermal Safeguard", desc: "Auto Cooling Sensors" },
        { icon: <PlugIcon className="w-5 h-5" />, label: "Smart Off", desc: "Overcharge Protection" },
      ],
      story: {
        title: "Power Up Instantly",
        subtitle: "80% charge in 40 minutes.",
        desc: "Delivers maximum steady output with advanced cooling modules. Built-in microprocessors detect cell heat levels and modulate charging rates dynamically to preserve lithium battery lifespan.",
        image: "/products/charger.png",
        bullets: [
          "Integrated dual-fan active exhaust cooling.",
          "Tough structural rubber armor bumpers.",
          "Gold-plated connectivity pin contacts.",
        ],
      },
      specs: [
        { label: "Power Output", value: "4.5 Amps Peak Current" },
        { label: "Input Range", value: "100V - 240V AC Auto-Switching" },
        { label: "Charging Speed", value: "80% charge in 40 mins (500Wh pack)" },
        { label: "Cooling Fan", value: "Dynamic Magnetic Levitation Exhaust" },
        { label: "Cable Length", value: "3.2 Meters heavy duty wire" },
        { label: "Chassis", value: "Flame retardant Polycarbonate" },
      ],
      compatibility: [
        { name: "VIR Nexus", id: "vir-nexus", image: "/products/vir_nexus.png" },
        { name: "VIR Atom", id: "vir-atom", image: "/products/vir_atom.png" },
        { name: "VIR Flux", id: "vir-flux", image: "/products/vir_flux.png" },
        { name: "VIR Pro", id: "vir-pro", image: "/products/vir_pro.png" },
      ],
    }
  };

  // Helper custom plug icon for list
  function PlugIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
      <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    );
  }

  // Retrieve matching item or fallback to smart-helmet-pro
  const accessoryId = accessoriesData[id] ? id : "smart-helmet-pro";
  const item = accessoriesData[accessoryId];

  // Active selections
  const [selectedImage, setSelectedImage] = useState(item.thumbnails[0]);
  const [selectedColor, setSelectedColor] = useState(item.colors[0]);
  const [selectedSize, setSelectedSize] = useState(item.sizes[0]);
  
  // Interactive UI states
  const [showStickyBar, setShowStickyBar] = useState(false);
  const [cartState, setCartState] = useState<"idle" | "adding" | "added">("idle");
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Scroll handler for sticky purchase bar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 450) {
        setShowStickyBar(true);
      } else {
        setShowStickyBar(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Format currency
  const formatPrice = (val: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(val);
  };

  // Add to cart simulation
  const handleAddToCart = () => {
    setCartState("adding");
    setTimeout(() => {
      setCartState("added");
      window.dispatchEvent(new Event("cart-updated"));
      setTimeout(() => {
        setCartState("idle");
      }, 2000);
    }, 800);
  };

  // Related items list to match mockup exactly
  const relatedItems = [
    { id: "phone-mount", name: "Handlebar Phone Mount", price: 799, image: "/products/gps.png" },
    { id: "tail-light", name: "Rechargeable Tail Light", price: 1299, image: "/products/charger.png" },
    { id: "bike-lock-pro", name: "Bicycle Lock Pro", price: 899, image: "/products/charger.png" },
    { id: "riding-gloves", name: "Riding Gloves", price: 649, image: "/products/helmet.png" }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900 selection:bg-indigo-500 selection:text-white font-sans">
      {/* Light theme Navbar */}
      <Navbar theme="light" />

      {/* Hero Section - Light Studio Theme matching mockup */}
      <section className="relative w-full bg-slate-50 text-slate-900 overflow-hidden py-16 sm:py-24 border-b border-slate-100">
        {/* Curved lighting shadows */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(79,70,229,0.05),transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-8 lg:px-16 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Side Content */}
            <div className="lg:col-span-5 flex flex-col items-start justify-center">
              {/* Category Tag */}
              <span className="font-sans text-[10px] font-bold text-indigo-600 tracking-widest uppercase block mb-3">
                SMART. SAFE. STYLISH.
              </span>

              <h1 className="font-general-sans text-4xl sm:text-5xl lg:text-[54px] font-black leading-[0.95] tracking-[-0.03em] uppercase mb-4 text-slate-950">
                {item.name}
              </h1>

              <p className="font-sans text-xs text-slate-500 leading-relaxed max-w-[420px] mb-8 font-medium">
                Engineered for modern riders. Advanced protection, smart lighting and all-day comfort in one intelligent helmet.
              </p>

              {/* 4 Specifications Cards Row - matching mockup */}
              <div className="flex gap-8 mb-10 font-sans">
                {item.features.slice(0, 4).map((feat, i) => (
                  <div key={i} className="flex flex-col items-center gap-1.5 text-center min-w-[70px]">
                    <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-indigo-600 border border-slate-200 shadow-xs">
                      {feat.icon}
                    </div>
                    <span className="font-general-sans text-sm font-black text-slate-900">{feat.label}</span>
                    <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">{feat.desc}</span>
                  </div>
                ))}
              </div>

              {/* Action buttons side-by-side */}
              <div className="flex gap-4 w-full max-w-[420px]">
                <button
                  onClick={handleAddToCart}
                  disabled={cartState === "adding"}
                  className={`flex-1 py-4 text-center text-xs font-bold tracking-wider uppercase rounded-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                    cartState === "added"
                      ? "bg-emerald-600 text-white"
                      : "bg-slate-950 text-white hover:bg-indigo-600 hover:shadow-[0_4px_15px_rgba(79,70,229,0.3)] shadow-sm"
                  }`}
                >
                  <ShoppingCart className="w-4 h-4" />
                  {cartState === "adding" ? "Adding..." : cartState === "added" ? "Added" : "Add to Cart"}
                </button>
                <a
                  href="#details-anchor"
                  className="px-8 py-4 bg-white border border-slate-200 text-slate-900 font-sans text-xs font-semibold tracking-wider text-center uppercase rounded-lg hover:border-slate-400 hover:bg-slate-50 transition-colors flex items-center justify-center gap-2"
                >
                  View Details <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Side render */}
            <div className="lg:col-span-7 relative w-full h-[320px] sm:h-[450px] lg:h-[540px] flex items-center justify-center">
              {/* Pedestal shadow / layout shadow */}
              <div className="absolute bottom-[8%] w-[60%] h-[12%] rounded-full bg-slate-900/5 blur-[35px] pointer-events-none" />
              <div className="absolute bottom-[10%] w-[50%] h-[4%] rounded-full bg-slate-200/60 blur-xs pointer-events-none" />

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative w-full h-full flex items-center justify-center pointer-events-none"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-contain scale-95"
                  priority
                />
              </motion.div>
            </div>
          </div>

          {/* Floating horizontal banner at the bottom of the hero */}
          <div className="mt-16 bg-white rounded-2xl p-6 border border-slate-100 shadow-[0_8px_30px_rgba(15,23,42,0.03)] grid grid-cols-2 md:grid-cols-4 gap-6 font-sans">
            <div className="flex gap-3.5 items-center">
              <Shield className="w-5 h-5 text-indigo-600 shrink-0" />
              <div>
                <h4 className="text-[10px] font-bold text-slate-900 uppercase tracking-wider">1 Year Warranty</h4>
                <p className="text-[9px] text-slate-400 mt-0.5 leading-tight">Complete peace of mind</p>
              </div>
            </div>
            <div className="flex gap-3.5 items-center">
              <RefreshCw className="w-5 h-5 text-indigo-600 shrink-0" />
              <div>
                <h4 className="text-[10px] font-bold text-slate-900 uppercase tracking-wider">Easy Returns</h4>
                <p className="text-[9px] text-slate-400 mt-0.5 leading-tight">7-day return policy</p>
              </div>
            </div>
            <div className="flex gap-3.5 items-center">
              <Lock className="w-5 h-5 text-indigo-600 shrink-0" />
              <div>
                <h4 className="text-[10px] font-bold text-slate-900 uppercase tracking-wider">Secure Payments</h4>
                <p className="text-[9px] text-slate-400 mt-0.5 leading-tight">100% protected checkout</p>
              </div>
            </div>
            <div className="flex gap-3.5 items-center">
              <Truck className="w-5 h-5 text-indigo-600 shrink-0" />
              <div>
                <h4 className="text-[10px] font-bold text-slate-900 uppercase tracking-wider">Free Delivery</h4>
                <p className="text-[9px] text-slate-400 mt-0.5 leading-tight">On all orders above ₹999</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Main product purchase parameters and specifications */}
      <div id="details-anchor" className="max-w-[1440px] mx-auto px-8 lg:px-16 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Gallery display */}
          <div className="lg:col-span-7 grid grid-cols-12 gap-6 items-start">
            {/* Thumbnails Sidebar */}
            <div className="col-span-2 flex flex-col gap-3">
              {item.thumbnails.map((thumb, idx) => {
                const isSelected = selectedImage === thumb;
                return (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(thumb)}
                    className={`relative w-full aspect-square rounded-xl bg-slate-50 border p-1 transition-all overflow-hidden flex items-center justify-center ${
                      isSelected ? "border-slate-900 ring-1 ring-slate-900 shadow-sm" : "border-slate-100 hover:border-slate-300"
                    }`}
                  >
                    <Image
                      src={thumb}
                      alt={`${item.name} angle ${idx + 1}`}
                      fill
                      className="object-contain p-1"
                    />
                  </button>
                );
              })}
            </div>

            {/* Main Interactive Zoom Display */}
            <div className="col-span-10 relative aspect-[4/3] rounded-3xl bg-slate-50 border border-slate-100 flex items-center justify-center p-8 overflow-hidden group">
              <div className="absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.01)_1.5px,transparent_1.5px)] [background-size:24px_24px] pointer-events-none" />
              <div className="absolute w-[60%] h-[60%] bg-indigo-500/5 rounded-full blur-[60px] pointer-events-none" />

              <motion.div 
                key={selectedImage}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative w-full h-full cursor-zoom-in overflow-hidden"
              >
                <Image
                  src={selectedImage}
                  alt={item.name}
                  fill
                  className="object-contain group-hover:scale-125 transition-transform duration-500 ease-out"
                  priority
                />
              </motion.div>

              {/* 360 viewer badge */}
              <div className="absolute bottom-6 right-6 flex items-center gap-2">
                <button className="px-3.5 py-1.5 rounded-full bg-white text-slate-900 shadow-md border border-slate-100 text-[10px] font-bold tracking-widest uppercase hover:bg-slate-50 hover:shadow-lg transition-all">
                  🔄 360° View
                </button>
              </div>
            </div>
          </div>

          {/* Details Options panel */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div>
              <span className="text-[10px] font-bold text-indigo-600 tracking-widest uppercase block mb-2">
                {item.category}
              </span>
              <h1 className="font-general-sans text-4xl lg:text-[44px] font-black uppercase tracking-tight text-slate-900 leading-none">
                {item.name}
              </h1>

              {/* Review Stars & Rating */}
              <div className="flex items-center gap-2 mt-4 font-sans text-xs">
                <div className="flex text-amber-500 gap-0.5">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                </div>
                <span className="font-semibold text-slate-900">{item.rating}</span>
                <span className="text-slate-400">({item.reviewCount} reviews)</span>
              </div>

              {/* Pricing section */}
              <div className="mt-6 flex items-baseline gap-2">
                <span className="font-general-sans text-3xl font-black text-slate-900">
                  {formatPrice(item.price)}
                </span>
                <span className="font-sans text-[10px] text-slate-400 font-bold uppercase tracking-wider pl-1">
                  (inclusive of all taxes)
                </span>
              </div>

              <p className="font-sans text-xs text-slate-500 mt-4 leading-relaxed font-medium">
                {item.description}
              </p>
            </div>

            {/* COLOR SELECTION */}
            <div>
              <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold block mb-3">
                Color
              </span>
              <div className="flex gap-3">
                {item.colors.map((color) => {
                  const active = selectedColor.name === color.name;
                  return (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color)}
                      className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all hover:scale-105 ${
                        active ? "border-slate-950 ring-2 ring-slate-950/20" : "border-slate-200"
                      }`}
                      style={{ backgroundColor: color.hex === "#f8fafc" ? "#ffffff" : color.hex }}
                      title={color.name}
                    >
                      {active && (
                        <span className={`w-2 h-2 rounded-full ${
                          color.hex === "#f8fafc" ? "bg-slate-950" : "bg-white"
                        }`} />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* SIZE SELECTION */}
            <div>
              <div className="flex justify-between items-baseline mb-3">
                <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold block">
                  Size
                </span>
                <button className="text-[10px] text-indigo-600 font-bold uppercase hover:underline">Size Guide</button>
              </div>
              
              <div className="grid grid-cols-3 gap-3 font-sans text-xs font-semibold">
                {item.sizes.map((size) => {
                  const active = selectedSize === size;
                  return (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-3 px-4 rounded-xl border text-center transition-all duration-200 ${
                        active
                          ? "bg-white border-indigo-600 text-slate-900 shadow-sm ring-1 ring-indigo-600"
                          : "bg-white border-slate-200 hover:bg-slate-50 hover:border-slate-400 text-slate-700"
                      }`}
                    >
                      {size}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* PURCHASE ACTIONS */}
            <div className="space-y-3 font-sans mt-4">
              <button
                onClick={handleAddToCart}
                disabled={cartState === "adding"}
                className={`w-full py-4 text-center text-xs font-bold tracking-wider uppercase rounded-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                  cartState === "added"
                    ? "bg-emerald-600 text-white"
                    : "bg-slate-900 text-white hover:bg-indigo-600 hover:shadow-[0_4px_15px_rgba(79,70,229,0.3)] shadow-sm"
                }`}
              >
                <ShoppingCart className="w-4 h-4" />
                {cartState === "adding" ? "Adding..." : cartState === "added" ? "Added To Cart" : "Add to Cart"}
              </button>

              <button
                onClick={() => alert("Simulation Redirecting to checkout...")}
                className="w-full py-4 bg-white border border-slate-200 text-slate-950 text-center text-xs font-bold tracking-wider uppercase rounded-lg hover:bg-slate-50 hover:border-slate-900 transition-colors"
              >
                Buy Now
              </button>

              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className="w-full py-3 bg-transparent text-slate-500 text-center text-[10px] font-bold tracking-widest uppercase hover:text-slate-900 transition-colors flex items-center justify-center gap-1.5"
              >
                <Heart className={`w-3.5 h-3.5 ${isWishlisted ? "fill-red-500 text-red-500" : ""}`} />
                {isWishlisted ? "Add to Wishlist" : "Add to Wishlist"}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* SECTION 4 — PRODUCT STORYTELLING */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 relative h-[380px] sm:h-[450px] bg-white rounded-3xl overflow-hidden flex items-center justify-center p-8 border border-slate-100 shadow-xs">
            <Image
              src={item.story.image}
              alt={item.story.title}
              fill
              className="object-contain scale-95 p-6"
            />
          </div>

          <div className="lg:col-span-7 flex flex-col gap-6">
            <h2 className="font-general-sans text-3xl lg:text-4xl font-black uppercase tracking-tight text-slate-950 leading-tight">
              {item.story.title}
            </h2>
            <p className="font-sans text-xs text-slate-500 leading-relaxed font-normal">
              {item.story.desc}
            </p>

            <div className="mt-4 border-t border-slate-200 pt-6">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-sans text-xs text-slate-700">
                {item.story.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex gap-2 items-start">
                    <Check className="text-indigo-600 w-4 h-4 shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex gap-3 items-center bg-white p-4 rounded-xl border border-slate-100 max-w-[200px] mt-2 shadow-xs">
              <Shield className="w-5 h-5 text-indigo-600" />
              <span className="text-[10px] font-bold text-slate-900 uppercase tracking-wider">1 Year Warranty</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — TECHNICAL SPECIFICATIONS */}
      <section className="py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <h2 className="font-general-sans text-xl font-bold uppercase tracking-tight text-slate-950 mb-10">
            Technical Specifications
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4 font-sans text-xs border-t border-slate-100 pt-6">
            {item.specs.map((spec, idx) => (
              <div key={idx} className="flex justify-between py-3 border-b border-slate-200/50">
                <span className="text-slate-500 font-medium">{spec.label}</span>
                <span className="font-bold text-slate-900">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 — COMPATIBILITY */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16 text-center">
          <span className="font-sans text-[10px] font-bold text-indigo-600 tracking-widest uppercase block mb-2">WORKS WITH</span>
          <h2 className="font-general-sans text-xl font-bold uppercase tracking-tight text-slate-950 mb-10">
            Compatible Bikes
          </h2>

          <div className="flex flex-wrap justify-center gap-8 font-sans">
            {item.compatibility.map((bike, idx) => (
              <Link
                key={idx}
                href={`/rent/${bike.id}`}
                className="group bg-white p-5 rounded-2xl border border-slate-100 hover:border-slate-300 shadow-xs hover:shadow-md transition-all flex items-center gap-4 text-left max-w-[240px] w-full"
              >
                <div className="relative w-14 h-14 bg-slate-50 rounded-lg p-1 border border-slate-100 flex items-center justify-center shrink-0">
                  <Image src={bike.image} alt={bike.name} fill className="object-contain p-1" />
                </div>
                <div>
                  <h4 className="font-general-sans text-xs font-black text-slate-900 uppercase group-hover:text-indigo-600 transition-colors">
                    {bike.name}
                  </h4>
                  <span className="text-[9px] text-slate-400 block font-bold uppercase mt-0.5">Explore model →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — RELATED ACCESSORIES */}
      <section className="py-20 bg-white border-t border-slate-100">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 font-sans">
            {relatedItems.map((rel) => (
              <div key={rel.id} className="group relative bg-white p-6 rounded-2xl border border-slate-100 flex flex-col justify-between hover:shadow-md transition-all duration-300">
                <div className="relative w-full h-40 flex items-center justify-center mb-4 bg-slate-50 rounded-xl overflow-hidden">
                  <Image src={rel.image} alt={rel.name} fill className="object-contain p-4 group-hover:scale-105 transition-transform" />
                </div>
                <div>
                  <h4 className="font-general-sans text-[11px] font-bold uppercase text-slate-900 leading-tight min-h-[32px]">{rel.name}</h4>
                  <span className="font-general-sans text-sm font-extrabold text-slate-950 block mt-1">{formatPrice(rel.price)}</span>
                </div>
                
                <button 
                  onClick={() => alert("Simulation adding to bag...")}
                  className="mt-4 w-full py-2.5 bg-slate-900 text-white text-center text-[9px] font-bold tracking-widest uppercase hover:bg-indigo-600 transition-colors rounded-lg"
                >
                  Quick Add
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9 — DELIVERY & WARRANTY (Black benefits bar) */}
      <section className="py-8 bg-slate-950 text-slate-400 border-t border-slate-900 text-xs font-sans">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16 flex flex-col md:flex-row justify-between gap-6 items-center">
          <div className="flex items-center gap-3">
            <Truck className="w-4 h-4 text-indigo-500" />
            <span>Free Delivery on orders above ₹999</span>
          </div>
          <div className="flex items-center gap-3">
            <RefreshCw className="w-4 h-4 text-indigo-500" />
            <span>Easy Returns 7 days return policy</span>
          </div>
          <div className="flex items-center gap-3">
            <Lock className="w-4 h-4 text-indigo-500" />
            <span>Secure Payments 100% protected</span>
          </div>
          <div className="flex items-center gap-3">
            <Shield className="w-4 h-4 text-indigo-500" />
            <span>1 Year Warranty on all accessories</span>
          </div>
        </div>
      </section>

      {/* STICKY PURCHASE BAR */}
      <AnimatePresence>
        {showStickyBar && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-200/80 shadow-[0_-8px_30px_rgba(15,23,42,0.06)] py-4 backdrop-blur-md"
          >
            <div className="max-w-[1440px] mx-auto px-8 lg:px-16 flex items-center justify-between gap-4 font-sans text-xs">
              <div className="flex items-center gap-4">
                <div className="relative w-10 h-10 bg-slate-50 border border-slate-100 rounded-lg p-0.5 flex items-center justify-center shrink-0">
                  <Image src={selectedImage} alt={item.name} fill className="object-contain p-0.5" />
                </div>
                <div>
                  <h4 className="font-general-sans text-xs font-bold text-slate-900 uppercase leading-tight">{item.name}</h4>
                  <p className="text-[9px] text-slate-400 mt-0.5 font-bold uppercase">{selectedColor.name} • {selectedSize}</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <span className="font-general-sans text-lg font-black text-slate-900">
                  {formatPrice(item.price)}
                </span>
                
                <button
                  onClick={handleAddToCart}
                  disabled={cartState === "adding"}
                  className={`px-8 py-3 rounded-lg text-[10px] font-bold tracking-widest uppercase transition-all flex items-center gap-1.5 ${
                    cartState === "added"
                      ? "bg-emerald-600 text-white"
                      : "bg-slate-900 text-white hover:bg-indigo-600 shadow-sm"
                  }`}
                >
                  <ShoppingCart className="w-3.5 h-3.5" />
                  {cartState === "adding" ? "Adding..." : cartState === "added" ? "Added" : "Add to Cart"}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
