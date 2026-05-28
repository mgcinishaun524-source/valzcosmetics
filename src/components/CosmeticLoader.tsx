import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function CosmeticLoader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);

  const StatusTexts = [
    "Sourcing Raw Organics...",
    "Extracting Pure Marula Seed Essence...",
    "Authenticating Clinical Serums...",
    "Uncompromising Botanical Purity...",
    "Entering Valz Cosmetics Boutique..."
  ];

  // Increment percentage cleanly and elegantly to simulate premium asset loads
  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    const updateProgress = () => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onComplete();
          }, 600); // Slight delay for the fade-out sensation
          return 100;
        }
        
        // Non-linear realistic loading speeds
        const gain = Math.floor(Math.random() * 8) + 4;
        return Math.min(100, prev + gain);
      });
    };

    timer = setInterval(updateProgress, 140);
    return () => clearInterval(timer);
  }, [onComplete]);

  // Rotate through cosmetic status subtitles
  useEffect(() => {
    const statusInterval = setInterval(() => {
      setStatusIndex((prev) => (prev + 1) % StatusTexts.length);
    }, 1200);

    return () => clearInterval(statusInterval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-[#0d0a08] text-white select-none overflow-hidden"
    >
      {/* 1. Ambient Background Cosmetics Radiance Gradients */}
      <div className="absolute top-[30%] left-[25%] w-[250px] h-[250px] rounded-full bg-luxury-rose/8 filter blur-[100px] animate-pulse" style={{ animationDuration: "3s" }} />
      <div className="absolute bottom-[30%] right-[25%] w-[280px] h-[280px] rounded-full bg-amber-500/5 filter blur-[120px] animate-pulse" style={{ animationDuration: "5s" }} />

      {/* 2. Primary Animated Cosmetic Visual */}
      <div className="relative w-44 h-56 flex flex-col items-center justify-center">
        {/* Glowing circular orbital ring */}
        <svg className="absolute w-[180px] h-[180px] transform -rotate-90">
          <circle
            cx="90"
            cy="90"
            r="82"
            stroke="rgba(235, 178, 168, 0.08)"
            strokeWidth="1.5"
            fill="transparent"
          />
          <motion.circle
            cx="90"
            cy="90"
            r="82"
            stroke="#eba397"
            strokeWidth="2"
            fill="transparent"
            strokeDasharray={2 * Math.PI * 82}
            animate={{ strokeDashoffset: (2 * Math.PI * 82) * (1 - progress / 100) }}
            transition={{ duration: 0.1, ease: "easeOut" }}
          />
        </svg>

        {/* Dynamic Stylized Serum Dropper Bottle / Droplet */}
        <div className="relative flex flex-col items-center">
          {/* Bulb */}
          <motion.div 
            animate={{ scale: [0.96, 1.04, 0.96] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-5 h-7 bg-white rounded-t-full rounded-b-md shadow-lg"
          />
          
          {/* Golden Collar Cap */}
          <div className="w-8 h-4 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 border-t border-b border-white/20 shadow-md -mt-1 rounded-sm relative">
            <div className="absolute inset-y-0 left-2 w-[1px] bg-white/40" />
            <div className="absolute inset-y-0 right-2 w-[1px] bg-white/40" />
          </div>

          {/* Translucent Premium Glass Outer Cylinder Box */}
          <div className="w-14 h-24 bg-white/8 border border-white/15 backdrop-blur-sm -mt-0.5 rounded-b-xl relative flex items-center justify-center overflow-hidden shadow-2xl">
            {/* Liquid Fill Level linked to Progress */}
            <motion.div 
              style={{ height: `${Math.min(95, progress * 0.85)}%` }}
              className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-luxury-rose/35 to-amber-500/25 transition-all duration-300 ease-out"
            />

            {/* Micro logo stripe */}
            <div className="absolute top-4 w-6 h-[1.5px] bg-amber-200/50" />
            <div className="absolute top-6 w-9 h-[1px] bg-white/10" />

            {/* Shimmer Reflex Accent */}
            <div className="absolute inset-y-0 right-1 w-[1.5px] bg-white/15 rounded-full" />
            <div className="absolute inset-y-0 left-1 w-2 bg-white/4" />
          </div>

          {/* Falling micro elixir serum droplet emerging during high percentage load */}
          <AnimatePresence>
            {progress > 10 && progress < 98 && (
              <motion.div
                initial={{ y: -5, scale: 0.2, opacity: 0 }}
                animate={{ y: [0, 48], scale: [0.5, 1.1, 0.8], opacity: [0, 1, 1, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.4,
                  ease: [0.25, 1, 0.35, 1],
                }}
                className="absolute top-[125px] w-2.5 h-3.5 bg-luxury-rose rounded-b-full rounded-t-sm shadow-md"
              />
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* 3. Text & Brand Title Details */}
      <div className="mt-8 text-center space-y-4 max-w-[280px] relative z-10 px-4">
        <h1 className="text-[14px] uppercase tracking-[0.6em] font-sans font-bold text-luxury-rose">
          V A L Z
        </h1>
        <p className="text-[8px] tracking-[0.4em] uppercase font-sans text-neutral-400 font-semibold">
          Zimbabwe's Absolute Sanctuary of Pure Skin Health
        </p>

        {/* Dynamic Percentage Meter */}
        <div className="font-mono text-[24px] tracking-tight text-white font-extralight py-1">
          {progress}<span className="text-luxury-rose text-[12px] ml-0.5">%</span>
        </div>

        {/* Subtitle Status ticker */}
        <div className="h-6 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={statusIndex}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="text-[10px] tracking-[0.18em] lowercase italic text-amber-100/70 font-serif"
            >
              {StatusTexts[statusIndex]}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>

      {/* Subtle minimalist brand copyright footer sign within the load */}
      <div className="absolute bottom-6 font-mono text-[7px] text-neutral-600 tracking-[0.3em] uppercase">
        EST. BULAWAYO 2024
      </div>
    </motion.div>
  );
}
