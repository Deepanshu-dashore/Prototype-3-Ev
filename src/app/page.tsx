"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import SpecsGrid from "@/components/home/SpecsGrid";
import ScooterShowcase from "@/components/home/ScooterShowcase";
import SparePartsGrid from "@/components/home/SparePartsGrid";
import TestRideSection from "@/components/home/TestRideSection";
import PartnersStrip from "@/components/home/PartnersStrip";
import BlogSection from "@/components/home/BlogSection";
import NewsletterSection from "@/components/home/NewsletterSection";
import FaqSection from "@/components/home/FaqSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-primary overflow-x-hidden selection:bg-[#BFFF07] selection:text-black transition-colors duration-300">
      <div className="bg-[#070707]">
        {/* Navbar adapts dynamically to active theme */}
        <Navbar theme="dark" />

        {/* Hero Section */}
        <HeroSection />
      </div>

      {/* Premium Scooters Catalog */}
      <ScooterShowcase />

      {/* Spare Parts Grid */}
      <SparePartsGrid />

      {/* Test Ride & Story Section */}
      <TestRideSection />

      {/* Trusted Partners Carousel */}
      <PartnersStrip />

      {/* Latest Blog & News */}
      <BlogSection />

      {/* Newsletter signup strip */}
      <NewsletterSection />

      {/* Frequently Asked Questions */}
      <FaqSection />

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
