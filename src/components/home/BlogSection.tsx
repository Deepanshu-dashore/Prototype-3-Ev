import Link from "next/link";
import Image from "next/image";

export default function BlogSection() {
  return (
    <section className="py-24 sm:py-32 w-full px-6 lg:px-12 bg-background transition-colors duration-300">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between mb-16">
          <div>
            <span className="font-general-sans text-[10px] font-bold text-[#BFFF07] tracking-widest uppercase block mb-3 font-semibold">BLOG & NEWS</span>
            <h2 className="font-general-sans text-3xl sm:text-4xl lg:text-[45px] font-black uppercase tracking-tight text-primary leading-none transition-colors duration-300">
              Latest from Ziko EV
            </h2>
          </div>
          <Link 
            href="/dashboard" 
            className="text-[#BFFF07] hover:text-primary font-general-sans text-[10px] font-black uppercase tracking-wider transition-colors flex items-center gap-1.5"
          >
            View All Articles
            <span>➔</span>
          </Link>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="group bg-surface rounded-[12px] border border-borders overflow-hidden flex flex-col justify-between hover:border-[#BFFF07]/20 transition-all duration-300">
            <div>
              <div className="relative w-full h-[220px] bg-slate-900 overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=600" 
                  alt="Ziko EV expansion" 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-105" 
                />
                <div className="absolute top-4 left-4 bg-[#BFFF07] text-black font-general-sans text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-[2px]">
                  News
                </div>
              </div>
              <div className="p-6">
                <span className="text-[10px] text-neutral-gray font-bold uppercase tracking-wider">May 23, 2026 • 3 min read</span>
                <h3 className="font-general-sans text-base lg:text-lg font-black uppercase text-primary tracking-wide mt-3 group-hover:text-[#BFFF07] transition-colors leading-tight">
                  Ziko EV Expands to 15 New Cities in 2026
                </h3>
              </div>
            </div>
            <div className="px-6 pb-6 pt-2">
              <Link href="/dashboard" className="text-primary hover:text-[#BFFF07] font-general-sans text-[10px] font-black uppercase tracking-wider flex items-center gap-1">
                Read More ➔
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group bg-surface rounded-[12px] border border-borders overflow-hidden flex flex-col justify-between hover:border-[#BFFF07]/20 transition-all duration-300">
            <div>
              <div className="relative w-full h-[220px] bg-slate-900 overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&w=600" 
                  alt="Increase Range guide" 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-105" 
                />
                <div className="absolute top-4 left-4 bg-[#BFFF07] text-black font-general-sans text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-[2px]">
                  Guide
                </div>
              </div>
              <div className="p-6">
                <span className="text-[10px] text-neutral-gray font-bold uppercase tracking-wider">May 18, 2026 • 4 min read</span>
                <h3 className="font-general-sans text-base lg:text-lg font-black uppercase text-primary tracking-wide mt-3 group-hover:text-[#BFFF07] transition-colors leading-tight">
                  How to Increase the Range of Your Electric Scooter
                </h3>
              </div>
            </div>
            <div className="px-6 pb-6 pt-2">
              <Link href="/dashboard" className="text-primary hover:text-[#BFFF07] font-general-sans text-[10px] font-black uppercase tracking-wider flex items-center gap-1">
                Read More ➔
              </Link>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group bg-surface rounded-[12px] border border-borders overflow-hidden flex flex-col justify-between hover:border-[#BFFF07]/20 transition-all duration-300">
            <div>
              <div className="relative w-full h-[220px] bg-slate-900 overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600" 
                  alt="Future EV technology" 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-105" 
                />
                <div className="absolute top-4 left-4 bg-[#BFFF07] text-[#070707] font-general-sans text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-[2px]">
                  Technology
                </div>
              </div>
              <div className="p-6">
                <span className="text-[10px] text-neutral-gray font-bold uppercase tracking-wider">May 10, 2026 • 4 min read</span>
                <h3 className="font-general-sans text-base lg:text-lg font-black uppercase text-primary tracking-wide mt-3 group-hover:text-[#BFFF07] transition-colors leading-tight">
                  The Future of EV Technology in India
                </h3>
              </div>
            </div>
            <div className="px-6 pb-6 pt-2">
              <Link href="/dashboard" className="text-primary hover:text-[#BFFF07] font-general-sans text-[10px] font-black uppercase tracking-wider flex items-center gap-1">
                Read More ➔
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
