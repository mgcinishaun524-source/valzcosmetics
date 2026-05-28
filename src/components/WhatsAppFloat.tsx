import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, Sparkles } from "lucide-react";
import { BOUTIQUE_CONTACT } from "../data";

export default function WhatsAppFloat() {
  const WHATSAPP_LINK = `https://api.whatsapp.com/send?phone=${BOUTIQUE_CONTACT.raw}&text=${encodeURIComponent(BOUTIQUE_CONTACT.defaultMessage)}`;

  // Show a greeting message bubble automatically after 4 seconds
  const [showGreeting, setShowGreeting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGreeting(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-2">
      <AnimatePresence>
        {showGreeting && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white border border-luxury-rose text-luxury-dark px-4 py-3 rounded-sm shadow-xl max-w-xs font-sans text-xs text-left relative"
          >
            {/* Close dot */}
            <button
              onClick={() => setShowGreeting(false)}
              className="absolute -top-1 -right-1 bg-luxury-ruby text-white text-[8px] rounded-full w-4 h-4 flex items-center justify-center font-bold focus:outline-none"
              aria-label="Dismiss"
            >
              ×
            </button>
            <div className="flex items-center space-x-1.5 font-bold text-luxury-ruby uppercase tracking-wider mb-1 text-[9px]">
              <Sparkles className="w-3 h-3 text-luxury-ruby" />
              <span>Valz Concierge</span>
            </div>
            <p className="text-neutral-600 font-light leading-snug">
              Greetings. Need help choosing a lipstick shade? Text Valerie.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main floating button */}
      <motion.a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        id="whatsapp-floating-trigger"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="relative group bg-luxury-dark hover:bg-luxury-ruby border border-luxury-rose text-luxury-rose hover:text-white p-4 rounded-full shadow-2xl flex items-center justify-center cursor-pointer transition-colors duration-300"
        aria-label="Contact on WhatsApp"
      >
        {/* Soft elegant pulsing ring behind the button */}
        <span className="absolute inset-0 rounded-full bg-luxury-rose/30 animate-ping duration-[2000ms] pointer-events-none" />

        <MessageCircle className="w-6 h-6 stroke-[1.5]" />

        {/* Text hover label */}
        <span className="absolute right-14 bg-luxury-dark text-white border border-luxury-rose border-r-0 text-[10px] uppercase font-bold tracking-[0.2em] px-4 py-2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap rounded-l-sm select-none">
          Bespoke Concierge
        </span>
      </motion.a>
    </div>
  );
}
