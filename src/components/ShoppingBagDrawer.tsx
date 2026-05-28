import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Product } from "../types";
import { X, Trash2, ShoppingBag, Plus, Minus, ArrowRight, Notebook, Truck } from "lucide-react";
import { BOUTIQUE_CONTACT } from "../data";

interface ShoppingBagItem {
  product: Product;
  selectedShade?: string;
  quantity: number;
}

interface ShoppingBagDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: ShoppingBagItem[];
  onRemove: (productId: string, selectedShade?: string) => void;
  onUpdateQuantity: (productId: string, delta: number, selectedShade?: string) => void;
}

export default function ShoppingBagDrawer({
  isOpen,
  onClose,
  items,
  onRemove,
  onUpdateQuantity
}: ShoppingBagDrawerProps) {
  const [giftNotes, setGiftNotes] = useState("");
  const [deliveryMethod, setDeliveryMethod] = useState("Boutique Collection (Bulawayo Shop 5)");

  const calculateTotal = () => {
    let sum = 0;
    items.forEach((item) => {
      const priceNum = parseInt(item.product.price.replace("$", ""), 10);
      sum += priceNum * item.quantity;
    });
    return sum;
  };

  const totalSum = calculateTotal();

  // Create a beautiful pre-composed WhatsApp message summarizing the order
  const handleProceedToCheckout = () => {
    let message = `Greetings Valz Cosmetics. I would like to place a luxury boutique order:\n\n`;

    items.forEach((item, idx) => {
      const shadeText = item.selectedShade ? ` (Shade: ${item.selectedShade})` : "";
      message += `${idx + 1}. ${item.product.name}${shadeText} x${item.quantity} - ${item.product.price} each\n`;
    });

    message += `\n*Total Order Sum:* $${totalSum}\n`;
    message += `*Preferred Dispatch Method:* ${deliveryMethod}\n`;

    if (giftNotes.trim()) {
      message += `*Bespoke Instructions:* ${giftNotes}\n`;
    }

    if (deliveryMethod.includes("Boutique")) {
      message += `\n_Please confirm availability for collection at Shop 5, Federal Centre, Bulawayo._`;
    } else {
      message += `\n_Please confirm shipping rates, delivery schedule, and billing for countrywide/global dispatch._`;
    }

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${BOUTIQUE_CONTACT.raw}&text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          
          {/* Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-neutral-900/50 backdrop-blur-xs transition-opacity"
          />

          {/* Slider Drawer Canvas */}
          <div className="absolute inset-y-0 right-0 max-w-full flex">
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="w-screen max-w-md bg-white border-l border-luxury-rose shadow-2xl flex flex-col justify-between"
            >
              
              {/* Header */}
              <div className="p-6 border-b border-luxury-rose/30 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <ShoppingBag className="w-5.5 h-5.5 text-luxury-ruby" />
                  <span className="font-serif text-xl text-luxury-dark font-medium">Your Sanctuary Bag</span>
                </div>
                <button
                  onClick={onClose}
                  className="p-1.5 hover:bg-neutral-100 rounded-full text-neutral-500 hover:text-luxury-ruby transition-colors duration-200 focus:outline-none"
                  aria-label="Close bag drawer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Items Area */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {items.length === 0 ? (
                  <div className="h-4/5 flex flex-col items-center justify-center text-center space-y-4">
                    <ShoppingBag className="w-12 h-12 text-luxury-rose stroke-[1]" />
                    <div>
                      <p className="font-serif text-lg text-luxury-dark">Our dispatch is vacant</p>
                      <p className="text-xs text-neutral-400 font-sans mt-1">Explore our curation to select rare beauty assets.</p>
                    </div>
                    <button
                      onClick={onClose}
                      className="mt-2 text-xs uppercase tracking-widest text-luxury-ruby hover:text-luxury-dark font-bold font-sans transition-colors duration-200"
                    >
                      Retrieve collections
                    </button>
                  </div>
                ) : (
                  <div className="divide-y divide-luxury-rose/20 space-y-6">
                    {items.map((item, index) => (
                      <div
                        key={`${item.product.id}-${item.selectedShade || "default"}`}
                        className={`pt-6 first:pt-0 flex space-x-4`}
                      >
                        {/* Tiny product avatar */}
                        <div className="w-20 h-20 bg-neutral-100 rounded-sm overflow-hidden border border-luxury-rose/30 flex-shrink-0">
                          <img
                            src={item.product.image}
                            alt={item.product.name}
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </div>

                        {/* Description metadata */}
                        <div className="flex-1 flex flex-col justify-between text-left">
                          <div>
                            <div className="flex justify-between items-start">
                              <h4 className="font-serif text-sm font-medium text-luxury-dark">
                                {item.product.name}
                              </h4>
                              <span className="text-xs font-sans font-semibold text-luxury-dark">
                                {item.product.price}
                              </span>
                            </div>
                            
                            {item.selectedShade && (
                              <p className="text-[10px] uppercase tracking-widest text-luxury-ruby font-medium mt-0.5">
                                Shade: {item.selectedShade}
                              </p>
                            )}

                            <p className="text-[10px] text-neutral-400 uppercase tracking-wider font-sans mt-0.5">
                              {item.product.category}
                            </p>
                          </div>

                          {/* Quantity & Delete Controllers */}
                          <div className="flex justify-between items-center pt-2">
                            <div className="flex items-center border border-luxury-rose/40 rounded-sm">
                              <button
                                onClick={() => onUpdateQuantity(item.product.id, -1, item.selectedShade)}
                                className="px-2 py-1 hover:bg-neutral-100 text-neutral-500 hover:text-luxury-ruby transition-colors"
                                aria-label="Decrease"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="px-3 text-xs font-sans font-bold text-luxury-dark">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => onUpdateQuantity(item.product.id, 1, item.selectedShade)}
                                className="px-2 py-1 hover:bg-neutral-100 text-neutral-500 hover:text-luxury-ruby transition-colors"
                                aria-label="Increase"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>

                            <button
                              onClick={() => onRemove(item.product.id, item.selectedShade)}
                              className="text-neutral-400 hover:text-luxury-ruby p-1 transition-colors duration-200"
                              title="Remove item"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>

                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Summary and WhatsApp checkout */}
              {items.length > 0 && (
                <div className="p-6 border-t border-luxury-rose/30 bg-neutral-50 space-y-4">
                  
                  {/* Shipping Preference Dropdown */}
                  <div className="space-y-1.5 text-left">
                    <label className="text-[9px] uppercase tracking-[0.2em] text-neutral-400 font-bold flex items-center space-x-1">
                      <Truck className="w-3.5 h-3.5 text-luxury-ruby" />
                      <span>Select Dispatch / Shipping Preference</span>
                    </label>
                    <select
                      value={deliveryMethod}
                      onChange={(e) => setDeliveryMethod(e.target.value)}
                      className="w-full bg-white border border-luxury-rose/50 rounded-sm text-[11px] font-sans p-2.5 focus:outline-none focus:ring-1 focus:ring-luxury-ruby focus:border-luxury-ruby cursor-pointer"
                    >
                      <option value="Boutique Collection (Bulawayo Shop 5)">Boutique Collection (Bulawayo Shop 5) - FREE</option>
                      <option value="Express Zimbabwe Shipping (Harare/Nationwide)">Express Zimbabwe Shipping (Nationwide) - $5</option>
                      <option value="Worldwide Courier Shipping (DHL / FedEx Express)">Worldwide Courier Shipping (Global Courier) - Calculated</option>
                    </select>
                  </div>

                  {/* Luxury Wrapping message fields */}
                  <div className="space-y-1.5 text-left">
                    <label className="text-[9px] uppercase tracking-[0.2em] text-neutral-400 font-bold flex items-center space-x-1">
                      <Notebook className="w-3 h-3" />
                      <span>Gift Wrapping & Concierge Requests</span>
                    </label>
                    <textarea
                      placeholder="E.g. Wrap with black obsidian ribbons and rose-water spray."
                      value={giftNotes}
                      onChange={(e) => setGiftNotes(e.target.value)}
                      className="w-full h-14 p-2.5 bg-white border border-luxury-rose/50 rounded-sm text-[10px] font-sans placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-luxury-ruby focus:border-luxury-ruby resize-none"
                    />
                  </div>

                  {/* Summary Totals */}
                  <div className="space-y-2 border-t border-neutral-200 pt-3">
                    <div className="flex justify-between text-xs text-neutral-500 uppercase tracking-widest">
                      <span>Subtotal</span>
                      <span>${totalSum}</span>
                    </div>
                    <div className="flex justify-between text-xs text-neutral-500 uppercase tracking-widest">
                      <span>Shipping Fee</span>
                      <span className="text-luxury-ruby font-bold">
                        {deliveryMethod.includes("Boutique") ? "FREE" : deliveryMethod.includes("Nationwide") ? "$5.00" : "Calculated At Checkout"}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm text-luxury-dark uppercase tracking-[0.1em] font-bold border-t border-neutral-200 pt-2">
                      <span>Calculated Sum</span>
                      <span>
                        ${totalSum + (deliveryMethod.includes("Nationwide") ? 5 : 0)}
                      </span>
                    </div>
                  </div>

                  {/* Checkout Button */}
                  <button
                    onClick={handleProceedToCheckout}
                    id="bag-checkout-trigger"
                    className="w-full py-4 bg-luxury-ruby text-white text-xs uppercase tracking-[0.25em] font-bold transition-all duration-300 hover:bg-luxury-dark transform hover:-translate-y-0.5 active:translate-y-0 text-center flex items-center justify-center space-x-2 shadow-lg cursor-pointer"
                  >
                    <span>Send Order To Boutique</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>

                  <p className="text-[9px] text-neutral-400 uppercase tracking-wider text-center">
                    Secure dispatch arranged within 24 hours of confirmation
                  </p>
                </div>
              )}

            </motion.div>
          </div>

        </div>
      )}
    </AnimatePresence>
  );
}
