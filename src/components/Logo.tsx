import React from "react";
import { logoImg } from "../data";

interface LogoProps {
  variant?: "horizontal" | "vertical";
  className?: string;
  theme?: "dark" | "light" | "rose";
}

export default function Logo({ variant = "horizontal", className = "", theme = "light" }: LogoProps) {
  // Define color palette based on strict luxury requirements
  // light: Obsidian black text, Ruby pink pink accent icon and subtitle
  // dark: Pristine white text, Rose/Ruby pink accents
  // rose: All pink monochrome luxury aesthetic
  const isDark = theme === "dark";
  const isRose = theme === "rose";

  const textColor = isDark ? "text-white" : isRose ? "text-luxury-ruby" : "text-luxury-dark";
  const accentColor = isRose ? "#FADADD" : "#E0115F"; // Ruby or Rose
  const subtitleColor = isDark ? "text-luxury-rose" : "text-luxury-ruby";
  const lineColor = isDark ? "bg-luxury-rose/40" : "bg-luxury-ruby/40";

  // Use imported brand logoImg with a stateful fallback to avoid broken browser boxes
  const [imgFailed, setImgFailed] = React.useState(false);

  const LeafIcon = () => {
    if (imgFailed) {
      return (
        <svg
          viewBox="0 0 100 100"
          className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 select-none animate-fade-in"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Elegantly styled organic leaf of V with gold-rose gradients */}
          <path
            d="M50 85C32 75 16 55 18 35C19 25 28 15 36 22C44 29 48 48 50 62C52 48 56 29 64 22C72 15 81 25 82 35C84 55 68 75 50 85Z"
            fill="url(#goldRoseGrad)"
            className="drop-shadow-sm"
          />
          {/* Overlapping inner soft petal detailing */}
          <path
            d="M50 85C42 70 34 50 38 38C40 32 46 28 49 35C52 42 53 52 50 65Z"
            fill="#FFFFFF"
            opacity="0.45"
          />
          <path
            d="M50 85C58 70 66 50 62 38C60 32 54 28 51 35C48 42 47 52 50 65Z"
            fill="#FFFFFF"
            opacity="0.3"
          />
          <defs>
            <linearGradient id="goldRoseGrad" x1="18" y1="22" x2="82" y2="85" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#fbcac9" />
              <stop offset="40%" stopColor="#eba397" />
              <stop offset="100%" stopColor="#8d2c20" />
            </linearGradient>
          </defs>
        </svg>
      );
    }

    return (
      <img
        src={logoImg}
        alt="Valz Cosmetics Logo"
        onError={() => setImgFailed(true)}
        className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 select-none object-cover rounded-full border border-luxury-rose/30 bg-neutral-900"
        referrerPolicy="no-referrer"
      />
    );
  };

  if (variant === "vertical") {
    return (
      <div className={`flex flex-col items-center text-center space-y-4 ${className}`}>
        {/* Large Styled Centerpiece Icon */}
        <div className="p-4 bg-white/5 rounded-full border border-luxury-rose/25 relative group hover:scale-105 transition-transform duration-500">
          <LeafIcon />
          <div className="absolute inset-0 rounded-full bg-luxury-ruby/10 filter blur-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
        </div>

        {/* Brand Core Text Layout */}
        <div className="space-y-1">
          <div className="flex flex-col items-center">
            <h1 className={`font-serif text-3xl md:text-4xl lg:text-5xl font-bold tracking-[0.2em] uppercase leading-none ${textColor}`}>
              VALZ
            </h1>
            <h2 className={`font-sans text-[11px] md:text-xs font-bold tracking-[0.5em] uppercase mt-2.5 ${subtitleColor}`}>
              COSMETICS
            </h2>
          </div>

          {/* Subtitle Rule Flank */}
          <div className="flex items-center justify-center space-x-4 pt-4 w-full max-w-xs md:max-w-sm mx-auto">
            <div className={`h-[1.5px] flex-1 ${lineColor}`} />
            <span className={`text-[9px] md:text-[10px] font-sans font-bold tracking-[0.25em] uppercase whitespace-nowrap ${textColor} opacity-85`}>
              YOUR SKIN'S BEST FRIEND
            </span>
            <div className={`h-[1.5px] flex-1 ${lineColor}`} />
          </div>
        </div>
      </div>
    );
  }

  // Compact horizontal style for sticky header
  return (
    <div className={`flex items-center space-x-3 select-none ${className}`}>
      {/* Icon serving as the "V" or decorative leading badge */}
      <div className="p-1 hover:rotate-6 transition-transform duration-500">
        <LeafIcon />
      </div>

      <div className="flex flex-col text-left">
        <h1 className={`font-serif text-xl md:text-2xl font-bold tracking-[0.16em] uppercase leading-none ${textColor}`}>
          VALZ
        </h1>
        <h2 className={`font-sans text-[9px] md:text-[10px] font-bold tracking-[0.4em] uppercase mt-1 ${subtitleColor}`}>
          COSMETICS
        </h2>
      </div>
    </div>
  );
}
