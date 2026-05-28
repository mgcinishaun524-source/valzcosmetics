import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PRODUCTS } from "../data";
import { Product } from "../types";
import { ChevronLeft, ChevronRight, Eye, Plus, Check, Sparkles, Filter, Globe, Truck } from "lucide-react";

interface CollectionProps {
  onSelectProduct: (product: Product) => void;
  onAddToBag: (product: Product, selectedShadeName?: string) => void;
}

const BRANDS = [
  "All Edit",
  "Garnier & Active",
  "Portia M Skin",
  "Oh So Heavenly",
  "Dermal Favorites",
  "Radiant Essentials",
  "Valz Exclusives"
];

export default function Collection({ onSelectProduct, onAddToBag }: CollectionProps) {
  const [activeBrand, setActiveBrand] = useState("All Edit");
  
  // Slider index for the filtered list in touch-friendly mode
  const [activeIdx, setActiveIdx] = useState(0);
  
  // Track recently added item IDs to show a checkmark feedback animation
  const [recentlyAdded, setRecentlyAdded] = useState<Record<string, boolean>>({});

  const filteredProducts = activeBrand === "All Edit"
    ? PRODUCTS
    : PRODUCTS.filter(p => p.brand === activeBrand);

  const handleBrandChange = (brand: string) => {
    setActiveBrand(brand);
    setActiveIdx(0);
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % filteredProducts.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + filteredProducts.length) % filteredProducts.length);
  };

  const handleAddWithFeedback = (product: Product) => {
    onAddToBag(product);
    setRecentlyAdded(prev => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setRecentlyAdded(prev => ({ ...prev, [product.id]: false }));
    }, 1500);
  };

  // Helper to determine luxurious tags based on brand/price
  const getProductTag = (product: Product) => {
    if (product.brand === "Valz Exclusives") return "Elite Formula";
    if (product.brand === "Garnier & Active") return "Dermal Active";
    if (product.brand === "Oh So Heavenly") return "Boutique Pamper";
    if (product.brand === "Portia M Skin") return "Melanin Therapy";
    if (product.brand === "Dermal Favorites") return "Clinical Choice";
    if (product.brand === "Radiant Essentials") return "Radiant Glow";
    return "Authentic Original";
  };

  return (
    <section
      id="collection"
      className="py-24 md:py-32 bg-neutral-50 border-b border-luxury-rose/25"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Editorial Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 space-y-6 md:space-y-0 text-left">
          <div className="space-y-3">
            <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] font-sans font-semibold text-luxury-ruby block">
              The Curated Edit
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-luxury-dark leading-none font-normal">
              Skincare & Beauty
            </h2>
          </div>
          <div className="max-w-md space-y-4">
            <p className="text-xs md:text-sm text-neutral-500 font-sans tracking-wide leading-relaxed font-light">
              We offer 100% original world-class skincare at true local Zimbabwean market rates. Explore our dermatologically tested ranges.
            </p>
            {/* Global delivery note */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 pt-1.5 text-[11px] font-sans text-neutral-600 font-medium">
              <span className="inline-flex items-center text-luxury-ruby">
                <Truck className="w-4 h-4 mr-1.5 flex-shrink-0" />
                Nationwide Zim Express
              </span>
              <span className="inline-flex items-center text-neutral-500">
                <Globe className="w-4 h-4 mr-1.5 flex-shrink-0" />
                Global Delivery (DHL / FedEx)
              </span>
            </div>
          </div>
        </div>

        {/* Brand Tabs bar - Horizontally scrollable on small viewports, elegant pills */}
        <div className="mb-12 border-b border-luxury-rose/15 pb-4">
          <div className="flex items-center space-x-2 pb-2 md:pb-0 overflow-x-auto no-scrollbar scroll-smooth">
            <Filter className="w-4 h-4 text-neutral-400 mr-2 flex-shrink-0 hidden md:block" />
            {BRANDS.map((brand) => {
              const isActive = activeBrand === brand;
              return (
                <button
                  key={brand}
                  onClick={() => handleBrandChange(brand)}
                  className={`px-4 py-2 text-xs uppercase tracking-widest font-sans font-semibold border rounded-full transition-all duration-300 flex-shrink-0 whitespace-nowrap ${
                    isActive
                      ? "bg-luxury-dark text-white border-luxury-dark shadow-sm"
                      : "bg-white text-neutral-500 border-neutral-200 hover:text-luxury-ruby hover:border-luxury-rose"
                  }`}
                >
                  {brand}
                </button>
              );
            })}
          </div>
        </div>

        {/* Desktop Showcase: Grid of Premium cards */}
        <div id="desktop-grid" className="hidden lg:grid grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => {
              const isAdded = recentlyAdded[product.id];
              const tag = getProductTag(product);

              return (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="group flex flex-col bg-white border border-luxury-rose/25 rounded-xs overflow-hidden hover:shadow-[0_20px_50px_rgba(224,17,95,0.08)] hover:border-luxury-ruby/30 transition-all duration-500 transform hover:-translate-y-1 relative"
                >
                  {/* Category Pill Tag */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs text-luxury-dark border border-luxury-rose/30 text-[8px] uppercase tracking-widest px-2.5 py-0.5 z-20 font-bold shadow-xs">
                    {product.category}
                  </div>

                  {/* Curated status badge (Top-Right) */}
                  <div className="absolute top-4 right-4 bg-luxury-ruby/90 backdrop-blur-xs text-white text-[8px] uppercase tracking-widest px-2 py-0.5 z-20 font-bold rounded-xs shadow-xs">
                    {tag}
                  </div>

                  {/* Interactive Visual Shell */}
                  <div className="relative aspect-[1/1] overflow-hidden bg-neutral-50 border-b border-luxury-rose/10">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.2s] ease-out"
                      referrerPolicy="no-referrer"
                    />
                    {/* Dark gradient gloss hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark/45 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    {/* Actions Bar overlays on image hover */}
                    <div className="absolute inset-0 flex items-center justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <button
                        onClick={() => onSelectProduct(product)}
                        className="p-3 bg-white hover:bg-luxury-dark text-luxury-dark hover:text-white rounded-full transition-colors duration-300 shadow-lg cursor-pointer"
                        title="Discover Formula & Ingredients"
                      >
                        <Eye className="w-5 h-5 stroke-[1.5]" />
                      </button>
                      <button
                        onClick={() => handleAddWithFeedback(product)}
                        className={`p-3 rounded-full transition-all duration-300 shadow-lg border cursor-pointer ${
                          isAdded
                            ? "bg-green-600 border-green-600 text-white"
                            : "bg-luxury-ruby hover:bg-white text-white hover:text-luxury-ruby border-luxury-ruby"
                        }`}
                        title="Add to Shopping Bag"
                      >
                        {isAdded ? <Check className="w-5 h-5 stroke-[2]" /> : <Plus className="w-5 h-5 stroke-[2]" />}
                      </button>
                    </div>
                  </div>

                  {/* Details Section */}
                  <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between items-start gap-2">
                        <h3 className="font-serif text-sm md:text-base text-luxury-dark group-hover:text-luxury-ruby transition-colors duration-300 font-medium leading-snug line-clamp-2">
                          {product.name}
                        </h3>
                        <span className="text-sm font-sans font-bold text-luxury-dark/90 flex-shrink-0 bg-neutral-100 px-2 py-0.5 rounded-sm">
                          {product.price}
                        </span>
                      </div>

                      <p className="text-[11px] text-neutral-500 leading-relaxed font-sans font-light line-clamp-2">
                        {product.description}
                      </p>
                    </div>

                    {/* Footer Details Trigger */}
                    <div className="pt-3 border-t border-luxury-rose/10 flex justify-between items-center">
                      <button
                        onClick={() => onSelectProduct(product)}
                        className="text-[9px] uppercase tracking-widest font-sans font-semibold text-neutral-400 hover:text-luxury-ruby transition-colors duration-300 inline-flex items-center cursor-pointer"
                      >
                        <span>View Formula</span>
                        <ChevronRight className="w-3 h-3 ml-0.5" />
                      </button>
                      <button
                        onClick={() => handleAddWithFeedback(product)}
                        className={`text-[9px] uppercase tracking-[0.15em] font-sans font-extrabold transition-colors duration-300 cursor-pointer ${
                          isAdded ? "text-green-600" : "text-luxury-ruby hover:text-luxury-dark"
                        }`}
                      >
                        {isAdded ? "ADDED ✔" : "ADD TO BAG +"}
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Mobile & Tablet Slider: Touch-Friendly Swiper or List */}
        <div id="mobile-carousel" className="lg:hidden relative">
          {filteredProducts.length > 0 ? (
            <div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeBrand}-${activeIdx}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white border border-luxury-rose/25 rounded-xs overflow-hidden shadow-sm flex flex-col md:flex-row relative"
                >
                  {/* Category Pill Tag */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs text-luxury-dark border border-luxury-rose/30 text-[8px] uppercase tracking-widest px-2.5 py-0.5 z-20 font-bold shadow-xs">
                    {filteredProducts[activeIdx].category}
                  </div>

                  {/* Curated status badge */}
                  <div className="absolute top-4 right-4 bg-luxury-ruby/90 backdrop-blur-xs text-white text-[8px] uppercase tracking-widest px-2 py-0.5 z-20 font-bold rounded-xs shadow-xs">
                    {getProductTag(filteredProducts[activeIdx])}
                  </div>

                  {/* Product Visual */}
                  <div className="relative aspect-[1/1] md:w-1/2 overflow-hidden bg-neutral-50">
                    <img
                      src={filteredProducts[activeIdx].image}
                      alt={filteredProducts[activeIdx].name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Details block */}
                  <div className="p-6 md:w-1/2 flex flex-col justify-between space-y-6">
                    <div className="space-y-3">
                      <div className="flex justify-between items-start gap-4">
                        <h3 className="font-serif text-lg text-luxury-dark font-medium leading-snug">
                          {filteredProducts[activeIdx].name}
                        </h3>
                        <span className="text-base font-sans font-bold text-luxury-dark bg-neutral-100 px-2.5 py-0.5 rounded-sm flex-shrink-0">
                          {filteredProducts[activeIdx].price}
                        </span>
                      </div>
                      <p className="text-xs text-neutral-500 leading-relaxed font-sans font-light">
                        {filteredProducts[activeIdx].description}
                      </p>
                    </div>

                    {/* CTA Buttons */}
                    <div className="pt-4 border-t border-luxury-rose/10 flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={() => onSelectProduct(filteredProducts[activeIdx])}
                        className="flex-1 py-3 text-center border border-luxury-dark text-luxury-dark hover:bg-luxury-dark hover:text-white transition-all duration-300 text-[10px] uppercase tracking-widest font-bold"
                      >
                        Bespoke Formula
                      </button>
                      <button
                        onClick={() => handleAddWithFeedback(filteredProducts[activeIdx])}
                        className={`flex-1 py-3 text-center text-[10px] uppercase tracking-widest font-bold transition-all duration-300 ${
                          recentlyAdded[filteredProducts[activeIdx].id]
                            ? "bg-green-600 text-white"
                            : "bg-luxury-ruby text-white hover:bg-luxury-dark"
                        }`}
                      >
                        {recentlyAdded[filteredProducts[activeIdx].id] ? "Added ✔" : "Add To Bag"}
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Slider Controls */}
              <div className="flex justify-between items-center mt-6">
                <div className="flex space-x-1.5 overflow-x-auto max-w-[60%] no-scrollbar py-2">
                  {filteredProducts.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveIdx(idx)}
                      className={`h-1.5 transition-all duration-300 rounded-full flex-shrink-0 ${
                        activeIdx === idx ? "w-6 bg-luxury-ruby" : "w-1.5 bg-neutral-300"
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <div className="flex space-x-2">
                  <button
                    onClick={handlePrev}
                    className="p-2.5 bg-white border border-neutral-200 rounded-full text-luxury-dark hover:border-luxury-ruby transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-2.5 bg-white border border-neutral-200 rounded-full text-luxury-dark hover:border-luxury-ruby transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white border border-luxury-rose/25 rounded-xs p-12 text-center">
              <p className="text-neutral-500 font-sans text-xs uppercase tracking-widest">No products found in this line.</p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
