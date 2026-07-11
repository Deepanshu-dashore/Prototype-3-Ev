import Link from "next/link";
import Image from "next/image";

export default function BlogSection() {
  const articles = [
    {
      tag: "News",
      tagColor: "bg-green-800/80 text-white border border-green-700/30",
      title: "Ziko EV Expands to 15 New Cities in 2025",
      date: "May 20, 2025 • 3 min read",
      image: "/products/card 1.png",
      link: "/dashboard"
    },
    {
      tag: "Guide",
      tagColor: "bg-lime-800/80 text-white border border-lime-700/30",
      title: "How to Increase the Range of Your Electric Scooter",
      date: "May 18, 2025 • 4 min read",
      image: "/products/card 2.png",
      link: "/dashboard"
    },
    {
      tag: "Technology",
      tagColor: "bg-slate-700/80 text-white border border-slate-600/30",
      title: "The Future of EV Technology in India",
      date: "May 10, 2025 • 4 min read",
      image: "/products/card 3.png",
      link: "/dashboard"
    }
  ];

  return (
    <section className="pt-10 pb-8 sm:pt-14 sm:pb-12 w-full px-4 lg:px-6 bg-[#070707] transition-colors duration-300">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 px-2">
          <div>
            <h2 className="font-sans text-3xl sm:text-4xl lg:text-[42px] font-black uppercase tracking-tight text-white leading-none">
              Latest from <span className="text-[#BFFF07]">Ziko EV</span>
            </h2>
          </div>
          <Link 
            href="/dashboard" 
            className="text-[#BFFF07] hover:text-white font-sans text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5"
          >
            View All Articles
            <span className="text-xs">➔</span>
          </Link>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article, idx) => (
            <Link
              key={idx}
              href={article.link}
              className="group relative w-full h-[260px] rounded-[24px] overflow-hidden flex flex-col justify-between p-8 transition-all duration-300 border border-slate-200/10 hover:scale-[1.02] shadow-sm"
            >
              {/* Card Image Background */}
              <div className="absolute inset-0 z-0 bg-slate-950">
                <Image 
                  src={article.image} 
                  alt={article.title} 
                  fill 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 480px"
                  className="object-cover object-right opacity-100 transition-transform duration-500 group-hover:scale-105" 
                />
                {/* Horizontal Dark Gradient Overlay for Left Side Text Legibility */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent z-10 w-full" />
              </div>

              {/* Text content aligned left, taking 65% width, centered vertically */}
              <div className="relative z-20 flex flex-col justify-center h-full max-w-[65%] text-left gap-4">
                {/* Tag Badge */}
                <div>
                  <span className={`font-sans text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-[6px] ${article.tagColor}`}>
                    {article.tag}
                  </span>
                </div>

                {/* Title & Info */}
                <div>
                  <h3 className="font-sans text-[17px] font-black uppercase text-white tracking-wide leading-snug group-hover:text-[#BFFF07] transition-colors duration-300 mb-2">
                    {article.title}
                  </h3>
                  <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider mb-4 block">
                    {article.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-white font-sans text-[10px] font-black uppercase tracking-wider group-hover:text-[#BFFF07] transition-colors duration-200">
                    Read More ➔
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
