"use client";

interface LogoProps {
  variant?: "full" | "compact" | "stacked";
  className?: string;
  size?: number;
  light?: boolean; // Prop to force white text for ZIKO on dark backgrounds
}

export default function Logo({ variant = "full", className = "", size, light = true }: LogoProps) {
  const iconSize = size ?? 32;
  const wordMarkSize = size ? `${size * 0.6}px` : "text-xl";

  const zikoTextColor = light ? "text-white" : "text-slate-900";

  // Stylized Green Z Logo Mark SVG
  const LogoIcon = () => (
    <svg 
      width={iconSize} 
      height={iconSize} 
      viewBox="0 0 32 32" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      {/* Custom styled electric 'Z' mark */}
      <path 
        d="M6 6H26L14 18H26L21 26H6L14 14H6V6Z" 
        fill="#BFFF07" 
        className="drop-shadow-[0_0_8px_rgba(191,255,7,0.3)]"
      />
    </svg>
  );

  // ── Compact (Favicon / Icon mark) ──
  if (variant === "compact") {
    return (
      <div className={`flex items-center justify-center shrink-0 ${className}`}>
        <LogoIcon />
      </div>
    );
  }

  // ── Stacked (Footer branding) ──
  if (variant === "stacked") {
    return (
      <div className={`flex flex-col items-start gap-1 shrink-0 ${className}`}>
        <LogoIcon />
        <div className="flex items-center leading-none mt-1 font-general-sans font-black tracking-wider italic text-sm">
          <span className={zikoTextColor}>ZIKO</span>
          <span className="text-[#BFFF07] ml-1">EV</span>
        </div>
      </div>
    );
  }

  // ── Full (Navbar branding - Default) ──
  return (
    <div className={`flex items-center gap-2 shrink-0 ${className}`}>
      <LogoIcon />
      <span className={`font-general-sans ${wordMarkSize} font-black tracking-wider italic select-none`}>
        <span className={zikoTextColor}>ZIKO</span>
        <span className="text-[#BFFF07] ml-1">EV</span>
      </span>
    </div>
  );
}
