import React from "react";
import { motion } from "motion/react";
import { BOUTIQUE_INFO, BOUTIQUE_CONTACT } from "../data";
import { MapPin, Clock, Star, Landmark } from "lucide-react";

export default function Boutique() {
  const WHATSAPP_LINK = `https://api.whatsapp.com/send?phone=${BOUTIQUE_CONTACT.raw}&text=${encodeURIComponent(BOUTIQUE_CONTACT.defaultMessage)}`;

  return (
    <section
      id="boutique"
      className="py-24 md:py-32 bg-white border-b border-luxury-rose/25 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Architectural Storefront Visual */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="absolute -inset-4 border border-luxury-ruby/20 rounded-sm translate-x-3 translate-y-3 z-0"></div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative overflow-hidden aspect-[4/3] rounded-sm shadow-xl bg-neutral-100 border border-luxury-rose/30 z-10 group"
            >
              <img
                src={BOUTIQUE_INFO.image}
                alt={BOUTIQUE_INFO.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-neutral-900/15" />
            </motion.div>

            {/* Float Badge */}
            <div className="absolute -bottom-4 -right-4 bg-luxury-dark text-white p-6 rounded-sm shadow-xl z-20 border border-luxury-rose/30 hidden sm:block">
              <div className="flex items-center space-x-2">
                <Landmark className="w-5 h-5 text-luxury-rose animate-bounce" />
                <div>
                  <p className="font-serif text-sm">Shop 5</p>
                  <p className="text-[10px] tracking-widest uppercase text-luxury-rose/85">Federal Centre</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Physical Details & Flagship Customizations */}
          <div className="lg:col-span-6 space-y-8 order-1 lg:order-2 text-left">
            <div className="space-y-3">
              <div className="flex items-center space-x-1.5 text-luxury-ruby">
                <MapPin className="w-4 h-4" />
                <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] font-sans font-semibold">
                  {BOUTIQUE_INFO.concept}
                </span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-luxury-dark leading-tight font-normal">
                {BOUTIQUE_INFO.title}
              </h2>
            </div>

            <p className="text-neutral-600 font-sans text-sm md:text-base leading-relaxed tracking-wide font-light">
              Visit our flagship sanctuary situated at the heart of Bulawayo's prestige shopping arcade at the <span className="font-semibold text-luxury-dark">Federal Centre</span>. Step into an immersive rose-pink cocoon of quiet luxury and receive tailored aesthetic rituals.
            </p>

            {/* Schedule Table */}
            <div className="border border-luxury-rose/40 rounded-sm overflow-hidden bg-neutral-50/50">
              <div className="p-4 bg-luxury-rose/20 border-b border-luxury-rose/40 flex items-center space-x-2 text-luxury-dark">
                <Clock className="w-4 h-4 text-luxury-ruby" />
                <span className="text-[10px] uppercase tracking-widest font-sans font-bold">Atelier Ritual Hours</span>
              </div>
              <div className="divide-y divide-luxury-rose/20 font-sans text-xs">
                {BOUTIQUE_INFO.hours.map((item, idx) => (
                  <div key={idx} className="p-4 flex justify-between items-center bg-white/40">
                    <span className="font-medium text-neutral-500 uppercase tracking-wider">{item.days}</span>
                    <span className="font-semibold text-luxury-dark">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlights bullet grid */}
            <div className="space-y-3 pt-2">
              <p className="text-[11px] uppercase tracking-widest text-neutral-400 font-semibold">In-Store Exclusives:</p>
              <ul className="space-y-2.5">
                {BOUTIQUE_INFO.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-2 text-xs text-neutral-700 font-sans font-light">
                    <Star className="w-3.5 h-3.5 text-luxury-ruby fill-luxury-ruby/10 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Consult Action */}
            <div className="pt-4">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                id="boutique-whatsapp-cta"
                className="inline-flex items-center justify-center px-8 py-4 bg-luxury-dark text-luxury-rose text-xs uppercase font-sans tracking-[0.25em] font-bold border border-luxury-dark hover:bg-white hover:text-luxury-dark transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>{BOUTIQUE_INFO.cta}</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
