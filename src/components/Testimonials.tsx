import React from "react";
import { motion } from "motion/react";
import { TESTIMONIALS } from "../data";
import { Quote, Sparkle } from "lucide-react";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 md:py-32 bg-neutral-900 text-white relative overflow-hidden"
    >
      {/* Background visual graphics */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-luxury-rose/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full text-center space-y-20">
        
        {/* Editorial Heading */}
        <div className="space-y-4 max-w-2xl mx-auto">
          <div className="flex justify-center items-center space-x-2 text-luxury-rose">
            <Sparkle className="w-4 h-4 text-luxury-rose fill-luxury-rose/30" />
            <span className="text-[10px] md:text-sm uppercase tracking-[0.4em] font-sans font-semibold">
              Endorsements
            </span>
            <Sparkle className="w-4 h-4 text-luxury-rose fill-luxury-rose/30" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight">
            The Radiance Chronicles
          </h2>
          <p className="text-neutral-500 font-sans text-xs md:text-sm tracking-widest uppercase">
            As told by global tastemakers and loyal patrons
          </p>
        </div>

        {/* Testimonials Masonry/Grid (Styled like luxury editorial magazine cuttings) */}
        <div id="testimonials-grid" className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-left">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="bg-neutral-950 border border-neutral-800 p-8 md:p-10 rounded-sm hover:border-luxury-rose/40 transition-all duration-500 flex flex-col justify-between space-y-8 group relative"
            >
              {/* Luxury gold bracket border */}
              <div className="absolute top-0 left-0 w-6 h-[1.5px] bg-luxury-rose transition-all duration-300 group-hover:w-16" />
              <div className="absolute top-0 left-0 w-[1.5px] h-6 bg-luxury-rose transition-all duration-300 group-hover:h-16" />

              <div className="space-y-6">
                <Quote className="w-8 h-8 text-luxury-rose/40 transform -scale-x-100" />
                <p className="font-serif text-lg md:text-xl text-neutral-200 leading-relaxed font-light italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-neutral-800">
                <p className="font-sans font-bold text-sm text-white tracking-wide">
                  {t.author}
                </p>
                <div className="flex justify-between items-center text-[10px] uppercase tracking-widest text-neutral-500 pt-1">
                  <span>{t.role}</span>
                  <span className="text-luxury-rose font-medium text-right">{t.source}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global beauty awards ribbon footer */}
        <div className="pt-16 border-t border-neutral-800 max-w-4xl mx-auto flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-45 grayscale contrast-[200%] hover:opacity-80 transition-opacity duration-500">
          <p className="font-serif text-sm italic py-1 border-x border-neutral-700 px-6">L’Officiel Beauty Winner 2026</p>
          <p className="font-serif text-sm italic py-1 border-x border-neutral-700 px-6">Cosmo Radiance Choice</p>
          <p className="font-serif text-sm italic py-1 border-x border-neutral-700 px-6">Sublime Eco-Luxury Standard</p>
        </div>

      </div>
    </section>
  );
}
