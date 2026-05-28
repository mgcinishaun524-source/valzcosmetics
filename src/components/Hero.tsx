import React from "react";
import { motion } from "motion/react";
import { PRODUCTS, BOUTIQUE_INFO, heroImg } from "../data";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  onLearnMore: () => void;
}

export default function Hero({ onLearnMore }: HeroProps) {
  return (
    <section
      id="hero-section"
      className="relative min-h-[85vh] bg-[#0c0907] overflow-hidden flex items-center py-16 lg:py-24 border-b border-white/5"
    >
      {/* Soft, Warm Background Ambient Light */}
      <div className="absolute top-1/4 left-1/4 w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-luxury-rose/10 rounded-full filter blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[250px] md:w-[450px] h-[250px] md:h-[450px] bg-amber-500/5 rounded-full filter blur-[120px] pointer-events-none" />

      {/* Grid Alignment Guides (Very subtle architectural grid lines) */}
      <div className="absolute inset-0 z-0 grid grid-cols-12 pointer-events-none opacity-[0.02]">
        <div className="border-r border-white h-full col-span-3"></div>
        <div className="border-r border-white h-full col-span-3"></div>
        <div className="border-r border-white h-full col-span-3"></div>
        <div className="h-full col-span-3"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center relative z-10">
        
        {/* Left Editorial Text Column */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-8 order-2 lg:order-1 max-w-xl">
          
          {/* Subtle Elegance Label */}
          <div className="space-y-4">
            <span className="text-[10px] uppercase tracking-[0.5em] font-sans font-bold text-luxury-rose block">
              Welcome to Valz Boutique
            </span>
            
            {/* The Majestic Heading */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white font-normal leading-[1.12] tracking-tight">
              Your Sanctuary of <br />
              <span className="italic font-light text-luxury-rose">Pure Skin Health</span>
            </h1>
          </div>

          {/* Elevated copy that appeals to discerning luxury clients */}
          <p className="text-neutral-300/90 font-sans font-light text-sm sm:text-base leading-relaxed tracking-wide">
            Step into a warm space dedicated entirely to your skin's peace. Explore Bulawayo's finest hand-selected edit of certified, 100% genuine skincare formulas, sourced directly from pristine laboratories to honour your natural beauty.
          </p>

          {/* Elegant Minimal CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a
              href="#collection"
              id="hero-explore-cta"
              className="inline-flex items-center justify-center px-10 py-4 bg-luxury-ruby text-white text-[10px] uppercase font-sans tracking-[0.25em] font-bold transition-all duration-300 hover:bg-white hover:text-luxury-dark shadow-xl hover:shadow-white/5 cursor-pointer"
            >
              <span>Explore The Collection</span>
              <ArrowRight className="w-3 h-3 ml-2.5" />
            </a>

            <button
              id="hero-story-cta"
              onClick={onLearnMore}
              className="inline-flex items-center justify-center px-8 py-4 border border-white/10 text-white text-[10px] uppercase font-sans tracking-[0.25em] font-bold transition-all duration-300 hover:bg-white/5 hover:border-white/30 cursor-pointer"
            >
              Our Sourcing Story
            </button>
          </div>

        </div>

        {/* Right High-Fashion Feature Portrait Column */}
        <div className="lg:col-span-5 flex justify-center order-1 lg:order-2 relative w-full">
          <div className="relative w-full max-w-xs sm:max-w-sm">
            
            {/* Elegant outer layout frame representing absolute precision */}
            <div className="absolute -inset-4 border border-luxury-rose/15 pointer-events-none rounded-xs translate-x-3 translate-y-3 z-0" />
            
            {/* Monolithic Image Container */}
            <div className="relative overflow-hidden aspect-square sm:aspect-[4/5] rounded-xs shadow-[0_24px_60px_rgba(0,0,0,0.85)] bg-[#14100d] border border-white/10 z-10">
              <img
                src={heroImg}
                alt="Bespoke luxury welcoming spa and botanical display"
                className="w-full h-full object-cover scale-102 transition-transform duration-[6s] ease-out hover:scale-105"
                referrerPolicy="no-referrer"
              />
              {/* Subtle architectural studio warm-honey gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0907]/60 via-transparent to-transparent pointer-events-none" />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
