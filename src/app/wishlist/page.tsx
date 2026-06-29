"use client";

import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ProductCard from "../components/shared/ProductCard";

export default function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: "vir-nexus",
      name: "VIR NEXUS",
      price: 39999,
      image: "/products/vir_nexus.png",
      description: "Aero carbon-weave frame with integrated down-tube battery cells.",
      badge: { text: "BEST SELLER", type: "best" as const },
      specs: [
        { label: "Range", value: "70KM" },
        { label: "Top Speed", value: "25KM/H" },
      ],
      category: "bike" as const,
    },
    {
      id: "carbon-helmet",
      name: "Carbon Aero Helmet",
      price: 9999,
      image: "/products/helmet.png",
      description: "Ultra-lightweight aerodynamic shell with LED safety beacon.",
      badge: { text: "GLOSS WEAVE", type: "spec" as const },
      specs: [
        { label: "Weight", value: "240G" },
        { label: "Safety", value: "LED Rear" },
      ],
      category: "accessory" as const,
    },
  ]);

  const handleRemove = (id: string) => {
    setWishlistItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-primary">
      <Navbar />

      {/* Hero Header */}
      <section className="relative py-24 sm:py-28 bg-surface">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16 text-center animate-fadeIn">
          <span className="font-sans text-xs font-bold text-accent-indigo tracking-widest uppercase block mb-3">
            Customer Shelf
          </span>
          <h1 className="font-general-sans text-3xl sm:text-4xl font-bold tracking-tight text-primary uppercase">
            My Wishlist
          </h1>
          <p className="font-sans text-sm text-neutral-gray max-w-xl mx-auto mt-3 leading-relaxed">
            Your curated index of high-velocity machines and carbon fiber upgrades. Items are saved and ready to add to your cockpit.
          </p>
        </div>
      </section>

      {/* Wishlist Grid */}
      <section className="py-24">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16 animate-fadeIn">
          {wishlistItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {wishlistItems.map((product) => (
                <div key={product.id} className="relative group">
                  
                  {/* Remove Button Overlay */}
                  <button
                    onClick={() => handleRemove(product.id)}
                    className="absolute top-4 right-4 z-20 bg-surface/80 hover:bg-red-500 hover:text-white text-neutral-gray p-2 rounded-full border border-borders hover:border-red-500 shadow-sm transition-all duration-300 active:scale-95"
                    title="Remove from Wishlist"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>

                  <ProductCard
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    image={product.image}
                    description={product.description}
                    badge={product.badge}
                    specs={product.specs}
                    category={product.category}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-24 bg-surface shadow-[0_8px_30px_rgba(15,23,42,0.02)] rounded-3xl flex flex-col items-center gap-4 max-w-lg mx-auto animate-fadeIn">
              <div className="w-12 h-12 rounded-full bg-background border border-borders text-neutral-gray flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-general-sans text-sm font-bold text-primary uppercase">Wishlist is Empty</h3>
                <p className="font-sans text-xs text-neutral-gray mt-1 leading-relaxed">
                  Browse E-Bikes and Scooters to save configurations to your portal.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
