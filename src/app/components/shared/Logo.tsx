"use client";

import Image from "next/image";

interface LogoProps {
  variant?: "full" | "compact" | "stacked";
  className?: string;
  size?: number;
}

export default function Logo({ variant = "full", className = "", size }: LogoProps) {
  // ── Compact (Favicon / Icon mark) ──
  if (variant === "compact") {
    const compactSize = size ?? 36;
    return (
      <div className={`relative flex items-center justify-center shrink-0 ${className}`} style={{ width: compactSize, height: compactSize }}>
        <Image
          src="/smallLogo.png"
          alt="Ziko EV Icon"
          width={compactSize}
          height={compactSize}
          className="object-contain rounded-xl"
          priority
        />
      </div>
    );
  }

  // ── Stacked (Footer branding) ──
  if (variant === "stacked") {
    const iconSize = size ?? 44;
    return (
      <div className={`flex flex-col items-start gap-3 shrink-0 ${className}`}>
        <Image
          src="/smallLogo.png"
          alt="Ziko EV Icon"
          width={iconSize}
          height={iconSize}
          className="object-contain rounded-xl"
          priority
        />
        <div className="flex flex-col leading-none mt-1">
          <span className="font-general-sans text-[15px] font-black tracking-[0.08em] text-slate-900 uppercase">
            Ziko
          </span>
          <span className="font-general-sans text-[15px] font-black tracking-[0.08em] text-indigo-600 uppercase">
            EV
          </span>
        </div>
      </div>
    );
  }

  // ── Full (Navbar branding - Default) ──
  const fullWidth = size ? (size * 4.5) : 180;
  const fullHeight = size ? (size * 1.0) : 40;
  return (
    <div className={`relative flex items-center justify-start shrink-0 ${className}`} style={{ width: fullWidth, height: fullHeight }}>
      <Image
        src="/horizontalLogo.png"
        alt="Ziko EV Logo"
        width={fullWidth}
        height={fullHeight}
        className="object-contain object-left"
        priority
      />
    </div>
  );
}
