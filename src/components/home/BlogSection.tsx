import Link from "next/link";
import Image from "next/image";

export default function BlogSection() {
  const articles = [
    {
      tag: "News",
      tagColor: "bg-[#BFFF07] text-black",
      title: "Ziko EV Expands to 15 New Cities in 2026",
      date: "May 23, 2026 • 3 min read",
      image: "/products/card 1.png",
      link: "/dashboard"
    },
    {
      tag: "Guide",
      tagColor: "bg-[#BFFF07] text-black",
      title: "How to Increase the Range of Your Electric Scooter",
      date: "May 18, 2026 • 4 min read",
      image: "/products/card 2.png",
      link: "/dashboard"
    },
    {
      tag: "Technology",
      tagColor: "bg-blue-500 text-white",
      title: "The Future of EV Technology in India",
      date: "May 10, 2026 • 4 min read",
      image: "/products/card 3.png",
      link: "/dashboard"
    }
  ];

  return (
    <section className="pt-16 pb-2 sm:pt-24 sm:pb-4 w-full px-4 lg:px-6 bg-slate-50 transition-colors duration-300">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between mb-12 px-2">
          <div>
            <h2 className="font-sans text-3xl sm:text-4xl lg:text-[42px] font-black uppercase tracking-tight text-slate-900 leading-none">
              Latest from <span className="text-[#95c503]">Ziko EV</span>
            </h2>
          </div>
          <Link 
            href="/dashboard" 
            className="text-blue-600 hover:text-slate-900 font-sans text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5"
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
              className="group relative w-full h-[320px] rounded-[24px] overflow-hidden flex flex-col justify-between p-6 transition-all duration-300 border border-slate-200/10 hover:scale-[1.02] shadow-sm"
            >
              {/* Card Image Background */}
              <div className="absolute inset-0 z-0 bg-slate-950">
                <Image 
                  src={article.image} 
                  alt={article.title} 
                  fill 
                  className="object-cover opacity-100 transition-transform duration-500 group-hover:scale-105" 
                />
                {/* Subtle Dark Vignette Overlay for Text Legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10" />
              </div>

              {/* Top: Tag Badge */}
              <div className="relative z-20 self-start">
                <span className={`font-sans text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-[4px] ${article.tagColor}`}>
                  {article.tag}
                </span>
              </div>

              {/* Bottom: Info Overlay */}
              <div className="relative z-20 text-left w-full">
                <h3 className="font-sans text-base lg:text-lg font-black uppercase text-white tracking-wide leading-snug group-hover:text-[#BFFF07] transition-colors duration-300 mb-2">
                  {article.title}
                </h3>
                <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider mb-4 block">
                  {article.date}
                </span>
                <span className="inline-flex items-center gap-1 text-white font-sans text-[10px] font-black uppercase tracking-wider group-hover:text-[#BFFF07] transition-colors duration-200">
                  Read More ➔
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
