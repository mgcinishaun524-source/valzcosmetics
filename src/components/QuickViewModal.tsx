import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Product } from "../types";
import { X, Sparkles, Check, Heart, ShieldCheck } from "lucide-react";

interface QuickViewModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToBag: (product: Product, selectedShadeName?: string) => void;
}

export default function QuickViewModal({
  product,
  isOpen,
  onClose,
  onAddToBag
}: QuickViewModalProps) {
  const [selectedShadeIdx, setSelectedShadeIdx] = useState(0);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    // Reset shade when product changes
    setSelectedShadeIdx(0);
    setAdded(false);
  }, [product]);

  if (!product) return null;

  const hasShades = product.shades && product.shades.length > 0;
  const currentShade = hasShades ? product.shades![selectedShadeIdx] : null;

  const handleAdd = () => {
    onAddToBag(product, currentShade ? currentShade.name : undefined);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
    }, 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          
          {/* Backdrop Blur overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-neutral-900/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.4 }}
            className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto border border-luxury-rose shadow-2xl rounded-sm z-10 grid grid-cols-1 md:grid-cols-12"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 bg-neutral-100 hover:bg-luxury-ruby hover:text-white transition-colors duration-200 rounded-full z-20 focus:outline-none"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Left Column: Premium image */}
            <div className="md:col-span-5 bg-neutral-50 relative aspect-[4/5] md:aspect-auto flex items-center justify-center border-b md:border-b-0 md:border-r border-luxury-rose/25">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-luxury-dark text-white text-[9px] font-sans font-bold uppercase tracking-[0.2em] px-3.5 py-1">
                {product.category}
              </div>
            </div>

            {/* Right Column: High-End Specifications */}
            <div className="md:col-span-7 p-6 md:p-10 flex flex-col justify-between space-y-6">
              
              <div className="space-y-4">
                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-semibold text-luxury-ruby tracking-[0.3em] font-sans">
                    Prestige Edition
                  </span>
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-serif text-3xl text-luxury-dark font-medium leading-tight">
                      {product.name}
                    </h3>
                    <span className="text-xl font-serif font-semibold text-luxury-dark pl-2">
                      {product.price}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-neutral-600 leading-relaxed font-sans font-light">
                  {product.description}
                </p>

                {/* Ingredients tag wrap */}
                <div className="space-y-2">
                  <p className="text-[10px] uppercase font-bold text-neutral-400 tracking-widest">Active Ingredients</p>
                  <div className="flex flex-wrap gap-1.5">
                    {product.ingredients.map((ing, k) => (
                      <span
                        key={k}
                        className="text-[10px] bg-neutral-50 border border-neutral-200 text-neutral-600 px-2.5 py-1 rounded-sm font-sans"
                      >
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Specific skin advantages lists */}
                <div className="space-y-2">
                  <p className="text-[10px] uppercase font-bold text-neutral-400 tracking-widest">Clinical Advantages</p>
                  <ul className="space-y-2">
                    {product.benefits.map((benefit, bIdx) => (
                      <li key={bIdx} className="flex items-start space-x-2 text-xs font-sans text-neutral-600 font-light">
                        <Check className="w-4 h-4 text-luxury-ruby flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Adjustable shade choice for cosmetics */}
                {hasShades && (
                  <div className="space-y-3 pt-2">
                    <div className="flex justify-between items-center text-[10px] uppercase tracking-widest text-neutral-400">
                      <span>Select Luxury Shade:</span>
                      <span className="font-bold text-luxury-dark uppercase">{currentShade?.name}</span>
                    </div>
                    <div className="flex space-x-2.5">
                      {product.shades!.map((shade, idx) => (
                        <button
                          key={shade.name}
                          onClick={() => setSelectedShadeIdx(idx)}
                          style={{ backgroundColor: shade.hex }}
                          className={`w-7 h-7 rounded-full border transition-all duration-300 relative ${
                            selectedShadeIdx === idx
                              ? "border-luxury-dark scale-120 ring-2 ring-luxury-rose"
                              : "border-neutral-300 hover:scale-110"
                          }`}
                        >
                          {selectedShadeIdx === idx && (
                            <span className="absolute inset-0 flex items-center justify-center text-white text-[10px] mix-blend-difference font-bold">
                              ✓
                            </span>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Engagement trigger section */}
              <div className="pt-6 border-t border-luxury-rose/25 space-y-4">
                <div className="flex gap-4">
                  <button
                    onClick={handleAdd}
                    id={`modal-add-tobag-${product.id}`}
                    className="flex-1 py-4 bg-luxury-dark hover:bg-luxury-ruby text-white text-xs uppercase tracking-[0.25em] font-bold transition-all duration-300 rounded-sm text-center shadow-md active:scale-98"
                  >
                    {added ? "✓ ADDED TO YOUR DESPATCH" : "ADD TO LUXURY BAG"}
                  </button>
                  
                  <button
                    className="px-4 border border-luxury-rose hover:border-luxury-ruby text-neutral-400 hover:text-luxury-ruby transition-all duration-300 rounded-sm flex items-center justify-center"
                    aria-label="Add to Wishlist"
                  >
                    <Heart className="w-4.5 h-4.5" />
                  </button>
                </div>

                <div className="flex items-center space-x-2 text-[10px] uppercase text-neutral-400 font-sans tracking-widest justify-center">
                  <ShieldCheck className="w-4 h-4 text-luxury-ruby" />
                  <span>Available for nationwide Zimbabwean express & worldwide delivery</span>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
