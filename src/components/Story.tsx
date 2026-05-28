import React from "react";
import { motion } from "motion/react";
import { BRAND_STORY } from "../data";
import Cosmetic3D from "./Cosmetic3D";

export default function Story() {
  return (
    <section
      id="story"
      className="py-28 md:py-44 bg-white border-b border-luxury-rose/15 relative overflow-hidden"
    >
      {/* Structural alignment guides for a high-jewelry boutique feel */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-luxury-rose/25 to-transparent" />
      
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Prestigious Quote & Signature Block */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-12">
            <div className="space-y-8">
              <span className="text-[10px] uppercase tracking-[0.5em] font-sans font-bold text-luxury-rose block">
                THE FOUNDERS' STATEMENT
              </span>
              
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-luxury-dark font-normal leading-[1.2] tracking-tight">
                "True cosmetic beauty demands <br />
                <span className="italic font-light text-luxury-rose">absolute integrity</span>."
              </h2>
            </div>

            {/* 3D Rotating Elixir Model Container placed beautifully in the empty space */}
            <div className="py-6 flex justify-center items-center">
              <Cosmetic3D />
            </div>

            {/* Signature Block */}
            <div className="pt-8 border-t border-luxury-rose/20 flex items-center space-x-6">
              <div className="w-10 h-[1px] bg-luxury-rose/60"></div>
              <div>
                <p className="font-serif italic text-xl text-luxury-dark tracking-wide">Mr and Mrs Mawire</p>
                <p className="text-[9px] tracking-[0.25em] uppercase text-neutral-400 font-semibold mt-0.5">Founders, Valz Cosmetics</p>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Monograph Paragraphs & Immersive Ethos */}
          <div className="lg:col-span-7 space-y-12 lg:pl-6">
            
            <div className="space-y-4">
              <span className="text-[9px] uppercase tracking-[0.35em] font-sans font-bold text-luxury-ruby block pb-1">
                OUR SANCTUARY
              </span>
              <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl text-luxury-dark font-normal leading-tight">
                {BRAND_STORY.title}
              </h3>
            </div>

            {/* Generous editorial copy spacing */}
            <div className="space-y-8 text-neutral-600 font-sans text-sm sm:text-base leading-[1.8] tracking-wide font-light max-w-xl">
              {BRAND_STORY.paragraphs.map((p, index) => (
                <p key={index} className={index === 0 ? "text-neutral-800 text-base sm:text-lg font-normal leading-[1.8]" : ""}>
                  {p}
                </p>
              ))}
            </div>

            {/* Luxury Ethical Guarantees - Rendered purely as fine print, no icons or boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-10 border-t border-neutral-100">
              <div className="space-y-2 text-left">
                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-luxury-dark block">
                  I. Clinical Pedigree
                </span>
                <p className="text-xs text-neutral-500 leading-relaxed font-light">
                  Sourced exclusively through verified manufacturing channels directly from global, certified premium laboratories.
                </p>
              </div>

              <div className="space-y-2 text-left">
                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-luxury-dark block">
                  II. Absolute Integrity
                </span>
                <p className="text-xs text-neutral-500 leading-relaxed font-light">
                  A firm guarantee of 100% original, authenticated formulas tailored to thrive in Zimbabwean temperatures without degradation.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
