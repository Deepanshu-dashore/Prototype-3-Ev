import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function SparePartsGrid() {
  const categories = [
    {
      title: "Battery & Chargers",
      products: "34 Products",
      image: "/products/bettery.png",
      link: "/accessories?cat=batteries"
    },
    {
      title: "Motor & Controller",
      products: "28 Products",
      image: "/products/moter.png",
      link: "/accessories?cat=spare-parts"
    },
    {
      title: "Brakes",
      products: "18 Products",
      image: "/products/breack.png",
      link: "/accessories?cat=spare-parts"
    },
    {
      title: "Tyres & Wheels",
      products: "22 Products",
      image: "/products/tier.png",
      link: "/accessories?cat=spare-parts"
    },
    {
      title: "Electrical Parts",
      products: "45 Products",
      image: "/products/electrical parts.png",
      link: "/accessories?cat=spare-parts"
    },
    {
      title: "Accessories",
      products: "53 Products",
      image: "/products/12.png",
      link: "/accessories?cat=gear"
    }
  ];

  return (
    <section className="py-2 sm:py-4 w-full px-4 lg:px-6 bg-[#070707] transition-colors duration-300">
      <div className="max-w-[1440px] mx-auto bg-slate-950 text-white rounded-[24px] border border-slate-900 p-8 lg:p-12">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-center">

          {/* Left Column: Heading & CTA */}
          <div className="xl:col-span-3 flex flex-col items-start text-left">
            <span className="font-sans text-[11px] font-extrabold text-[#BFFF07] tracking-widest uppercase block mb-3">
              SHOP
            </span>
            <h2 className="font-sans text-3xl lg:text-4xl font-black leading-none uppercase tracking-tight text-white mb-4">
              Premium EV <br />
              <span className="text-[#BFFF07]">Spare Parts</span>
            </h2>
            <p className="font-sans text-xs text-slate-400 leading-relaxed max-w-[240px] mb-8 font-medium">
              Genuine parts for maximum performance & safety.
            </p>
            <Link
              href="/accessories"
              className="inline-flex items-center gap-2 border border-slate-800 hover:border-white px-6 py-2.5 rounded-[8px] font-sans text-[11px] font-extrabold uppercase tracking-wider text-slate-300 hover:bg-slate-900 transition-all duration-300"
            >
              View All Parts
              <span className="text-xs">➔</span>
            </Link>
          </div>

          {/* Right Column: Grid of Category Cards */}
          <div className="xl:col-span-9">
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.map((cat, idx) => (
                <Link
                  key={idx}
                  href={cat.link}
                  className="bg-slate-900/40 hover:bg-[#0f172a] rounded-[20px] border border-slate-900 p-4 flex flex-col items-center justify-between transition-all duration-300 group hover:border-[#BFFF07]/20 hover:scale-[1.03] min-h-[220px]"
                >
                  {/* Category Image */}
                  <div className="relative w-full h-[120px] flex items-center justify-center overflow-visible">
                    <Image
                      src={cat.image}
                      alt={cat.title}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 200px"
                      className="object-contain transition-transform duration-500 scale-[1.3] group-hover:scale-[1.4]"
                    />
                  </div>

                  {/* Title & Product Count */}
                  <div className="text-center mt-3">
                    <h3 className="font-sans text-[11px] font-black uppercase tracking-wider text-slate-200 group-hover:text-[#BFFF07] transition-colors duration-300 leading-tight">
                      {cat.title}
                    </h3>
                    <p className="font-sans text-[9px] text-slate-400 font-bold uppercase tracking-widest mt-1">
                      ({cat.products})
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
