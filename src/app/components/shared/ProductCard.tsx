import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  description?: string;
  badge?: {
    text: string;
    type: "best" | "new" | "premium" | "spec";
  };
  specs?: {
    label: string;
    value: string;
  }[];
  category: "bike" | "scooter" | "accessory";
}

export default function ProductCard({
  id,
  name,
  price,
  image,
  description,
  badge,
  specs = [],
  category,
}: ProductCardProps) {
  // Format price to Indian Rupees style (e.g. 39,999)
  const formattedPrice = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);

  // Badge styling mapper using the new design system palette (no borders)
  const getBadgeStyles = (type: string) => {
    switch (type) {
      case "best":
        return "bg-indigo-50 text-indigo-600 font-bold";
      case "new":
        return "bg-indigo-600 text-white font-bold";
      case "premium":
        return "bg-slate-900 text-white font-bold";
      case "spec":
      default:
        return "text-slate-500 bg-slate-50";
    }
  };

  return (
    <div className="group relative flex flex-col justify-between w-full rounded-2xl bg-white p-0 overflow-hidden shadow-[0_8px_30px_rgba(15,23,42,0.03)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(15,23,42,0.08)]">
      
      {/* Top Section: Badge & Image */}
      <div className="relative w-full">
        {badge && (
          <div className="absolute top-4 left-4 z-10">
            <span className={`inline-block px-2.5 py-1 rounded-[4px] font-sans text-[9px] font-bold uppercase tracking-[0.02em] ${getBadgeStyles(badge.type)}`}>
              {badge.text}
            </span>
          </div>
        )}

        {/* Product Image Container */}
        <div className="relative w-full h-[280px] flex items-center justify-center overflow-hidden bg-slate-50/50">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            priority={id === "vir-nexus"}
          />
        </div>
      </div>

      {/* Info Section */}
      <div className="flex p-6 pt-3 flex-col flex-1 justify-between mt-2 font-sans">
        <div>
          {/* Title - Bold (700) */}
          <h3 className="font-general-sans text-xl font-bold tracking-tight text-slate-900 uppercase group-hover:text-indigo-600 transition-colors duration-300">
            {name}
          </h3>

          {/* Description line below title - Regular (400) */}
          {description && (
            <p className="font-sans text-xs font-normal text-slate-500 mt-1 leading-relaxed line-clamp-2">
              {description}
            </p>
          )}

          {/* Price - ExtraBold (800) */}
          <div className="font-general-sans text-2xl font-extrabold text-slate-900 mt-2.5 tracking-tight">
            {formattedPrice}
          </div>
        </div>

        {/* Bottom Section: Specifications & Detail Button (No divider borders) */}
        <div className="flex items-center justify-between mt-5 pt-1">
          {/* Specifications row (inline-style matching image reference) */}
          {specs.length > 0 ? (
            <div className="flex flex-row items-center gap-x-4 gap-y-2 flex-wrap">
              {specs.map((spec, i) => (
                <div key={i} className="flex flex-row items-baseline gap-1 font-sans text-xs">
                  {/* Spec Value - SemiBold (600) */}
                  <span className="font-general-sans text-xs font-semibold text-slate-900 tracking-wide">
                    {spec.value}
                  </span>
                  {/* Spec Label - Medium (500) */}
                  <span className="font-sans text-[10px] font-medium text-slate-500">
                    {spec.label}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <span className="font-sans text-xs font-medium text-slate-500 tracking-wide">
              High-performance gear
            </span>
          )}

          {/* Action Arrow Button */}
          <Link
            href={category === "bike" ? "/" : `/${category}`}
            className="flex items-center justify-center w-9 h-9 rounded-full bg-slate-900 text-white hover:bg-indigo-600 transition-all duration-300 shadow-sm hover:shadow-[0_4px_12px_rgba(79,70,229,0.3)] transform group-hover:translate-x-1 shrink-0"
            aria-label={`View details for ${name}`}
          >
            <svg
              className="w-4 h-4 fill-none stroke-current stroke-2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
        </div>
      </div>
      
    </div>
  );
}
