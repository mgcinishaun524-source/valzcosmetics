import React, { useState } from "react";
import { Mail, Phone, MapPin, Instagram, Facebook, Award } from "lucide-react";
import Logo from "./Logo";
import { BOUTIQUE_CONTACT } from "../data";

export default function Footer() {
  const [emailInput, setEmailInput] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setEmailInput("");
      }, 5000);
    }
  };

  return (
    <footer id="premium-footer" className="bg-white border-t border-luxury-rose/40 text-neutral-800">
      
      {/* Top Section: Newsletter block */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 border-b border-luxury-rose/30">
        
        <div className="lg:col-span-6 space-y-4">
          <h3 className="font-serif text-2xl md:text-3xl text-luxury-dark font-medium tracking-tight">
            Subscribe to the <span className="italic text-luxury-ruby">Valz Gazette</span>
          </h3>
          <p className="font-sans text-xs md:text-sm text-neutral-500 font-light leading-relaxed max-w-md">
            Receive exclusive updates on masterclass invitationals, private store bookings at Federal Centre, and botanical collection previews.
          </p>
        </div>

        <div className="lg:col-span-6 flex flex-col justify-center">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-lg">
            <div className="relative flex-1">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
              <input
                type="email"
                required
                placeholder="Enter your email address"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                className="w-full pl-11 pr-4 py-4 bg-neutral-50 border border-luxury-rose/50 rounded-sm text-xs font-sans placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-luxury-ruby focus:border-luxury-ruby"
              />
            </div>
            <button
              type="submit"
              className="px-8 py-4 bg-luxury-dark text-luxury-rose hover:bg-luxury-ruby hover:text-white text-xs uppercase font-sans tracking-[0.2em] font-bold transition-all duration-300 rounded-sm"
            >
              Subscribe
            </button>
          </form>
          {submitted && (
            <p className="text-[11px] text-luxury-ruby font-medium font-sans mt-3">
              ✓ Indulgence confirmed. Welcome to Valz Cosmetics.
            </p>
          )}
        </div>

      </div>

      {/* Middle Section: Footer Links */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-4 gap-12 text-left">
        
        {/* Brand identity column */}
        <div className="space-y-6">
          <a href="#" className="block transition-transform hover:scale-102 pb-2">
            <Logo variant="horizontal" theme="light" />
          </a>
          <p className="font-sans text-xs text-neutral-500 leading-relaxed font-light">
            Luxury dermal science fused with organic Bulawayo rose bio-actives. Serving conscious opulence to cosmetic connoisseurs of Zimbabwe.
          </p>
          <div className="flex space-x-3 text-neutral-600">
            <a 
              href="https://www.instagram.com/valzcosmetics25?igsh=ZTZ1ZHpoOWZvNHN6" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 border border-luxury-rose hover:border-luxury-ruby hover:text-luxury-ruby transition-colors duration-200 rounded-full"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a 
              href="https://www.facebook.com/marketplace/profile/100088390063592/?ref=permalink&tab=listings&mibextid=dXMIcH" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 border border-luxury-rose hover:border-luxury-ruby hover:text-luxury-ruby transition-colors duration-200 rounded-full"
            >
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Navigation column */}
        <div className="space-y-4">
          <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 font-bold font-sans">Corporate Navigation</p>
          <ul className="space-y-3 text-xs font-sans text-neutral-600 font-light">
            <li><a href="#story" className="hover:text-luxury-ruby transition-colors">Our Radiance Mission</a></li>
            <li><a href="#collection" className="hover:text-luxury-ruby transition-colors">Bespoke Catalog</a></li>
            <li><a href="#boutique" className="hover:text-luxury-ruby transition-colors">Flagship Boutique</a></li>
            <li><a href="#testimonials" className="hover:text-luxury-ruby transition-colors">patron Chronicles</a></li>
          </ul>
        </div>

        {/* Flagship details column */}
        <div className="space-y-4">
          <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 font-bold font-sans">Flagship Sanctuary</p>
          <ul className="space-y-3 text-xs font-sans text-neutral-600 font-light">
            <li className="flex items-start space-x-2">
              <MapPin className="w-4 h-4 text-luxury-ruby flex-shrink-0 mt-0.5" />
              <span>Shop 5, Federal Centre,<br />Bulawayo, Zimbabwe</span>
            </li>
            <li className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-luxury-ruby flex-shrink-0" />
              <a href={`tel:${BOUTIQUE_CONTACT.raw}`} className="hover:text-luxury-ruby transition-colors">{BOUTIQUE_CONTACT.formatted}</a>
            </li>
          </ul>
        </div>

        {/* Luxury statement badge column */}
        <div className="bg-neutral-50 p-6 border border-luxury-rose/40 rounded-sm space-y-4">
          <div className="flex items-center space-x-2 text-luxury-ruby">
            <Award className="w-5 h-5" />
            <p className="font-serif text-sm">Seal of Assurance</p>
          </div>
          <p className="font-sans text-[11px] text-neutral-500 leading-relaxed font-light">
            All Valz skin remedies undergo individual dermatologist batch verification to exceed high prestige benchmarks. Guaranteed non-comedogenic and organic.
          </p>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="bg-neutral-50 border-t border-luxury-rose/20 py-8 text-center text-[10px] uppercase tracking-widest text-neutral-400 font-sans font-medium">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Valz Cosmetics. All prestige rights reserved.</p>
          <div className="flex space-x-6 text-neutral-400">
            <a href="#" className="hover:text-luxury-ruby transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-luxury-ruby transition-colors">Delivery & Concierge</a>
          </div>
        </div>
      </div>

    </footer>
  );
}
