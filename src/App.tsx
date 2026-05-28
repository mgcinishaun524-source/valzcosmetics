import React, { useState, useEffect } from "react";
import { AnimatePresence } from "motion/react";
import CosmeticLoader from "./components/CosmeticLoader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Story from "./components/Story";
import Collection from "./components/Collection";
import Boutique from "./components/Boutique";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import QuickViewModal from "./components/QuickViewModal";
import ShoppingBagDrawer from "./components/ShoppingBagDrawer";

import { Product } from "./types";

interface BagItem {
  product: Product;
  selectedShade?: string;
  quantity: number;
}

export default function App() {
  // Application Dynamic States
  const [isLoading, setIsLoading] = useState(() => {
    try {
      return !sessionStorage.getItem("valz_loader_shown");
    } catch {
      return true;
    }
  });
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [isBagOpen, setIsBagOpen] = useState(false);
  
  // Local storage cache key for high-end offline persistent luxury
  const [bagItems, setBagItems] = useState<BagItem[]>(() => {
    try {
      const saved = localStorage.getItem("valz_luxury_bag");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Browser title setup
  useEffect(() => {
    document.title = "Valz Cosmetics | Luxury Dermal Science & Beauty";
  }, []);

  // Sync state to local storage to preserve chosen items
  useEffect(() => {
    localStorage.setItem("valz_luxury_bag", JSON.stringify(bagItems));
  }, [bagItems]);

  const handleLearnMore = () => {
    const storySection = document.getElementById("story");
    if (storySection) {
      storySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
    setIsQuickViewOpen(true);
  };

  const handleAddToBag = (product: Product, selectedShade?: string) => {
    setBagItems((prev) => {
      // Find matching item by ID and exact chosen shade
      const existingIdx = prev.findIndex(
        (item) => item.product.id === product.id && item.selectedShade === selectedShade
      );

      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx].quantity += 1;
        return updated;
      }

      return [...prev, { product, selectedShade, quantity: 1 }];
    });
    
    // Automatically open the side shopping bag drawer to verify
    setIsBagOpen(true);
  };

  const handleRemoveItem = (productId: string, selectedShade?: string) => {
    setBagItems((prev) =>
      prev.filter((item) => !(item.product.id === productId && item.selectedShade === selectedShade))
    );
  };

  const handleUpdateQuantity = (productId: string, delta: number, selectedShade?: string) => {
    setBagItems((prev) => {
      return prev
        .map((item) => {
          if (item.product.id === productId && item.selectedShade === selectedShade) {
            const nextQty = item.quantity + delta;
            return { ...item, quantity: nextQty };
          }
          return item;
        })
        .filter((item) => item.quantity > 0);
    });
  };

  // Compute total item count for the navbar badge indicator
  const cartCount = bagItems.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <CosmeticLoader onComplete={() => {
            try {
              sessionStorage.setItem("valz_loader_shown", "true");
            } catch {}
            setIsLoading(false);
          }} />
        )}
      </AnimatePresence>

      <div id="valz-brand-wrap" className="min-h-screen flex flex-col justify-between selection:bg-luxury-rose bg-white text-neutral-900 overflow-x-hidden antialiased">
      {/* Sticky High-End Ribbon */}
      <div className="bg-luxury-dark text-luxury-rose py-2.5 text-[9px] uppercase tracking-[0.25em] text-center font-bold relative z-60 border-b border-luxury-rose/25 px-4">
        Complimentary Luxury Petal Wrapping & Express Countrywide Shipping on Special Curated Combos
      </div>

      {/* Primary Luxe Navigation Menu */}
      <Navbar onOpenBag={() => setIsBagOpen(true)} cartCount={cartCount} />

      {/* Main Contents */}
      <main id="main-editorial">
        {/* 1. Cinematic Hero Header */}
        <Hero onLearnMore={handleLearnMore} />

        {/* 2. The 'Radiance' Story (Brand Mission) */}
        <Story />

        {/* 3. The 'Iconic Collection' (Interactive product shelves) */}
        <Collection onSelectProduct={handleSelectProduct} onAddToBag={handleAddToBag} />

        {/* 4. 'The Bulawayo Boutique' (Physical showcase Shop 5 Federal Centre) */}
        <Boutique />

        {/* 5. User Endorsements (Styled like luxury magazine features) */}
        <Testimonials />
      </main>

      {/* 6. Premium Footer & Gazettes subscription */}
      <Footer />

      {/* Fixed WhatsApp Shopping Concierge */}
      <WhatsAppFloat />

      {/* Quick View Ingredient Lightbox Modal */}
      <QuickViewModal
        product={selectedProduct}
        isOpen={isQuickViewOpen}
        onClose={() => setIsQuickViewOpen(false)}
        onAddToBag={handleAddToBag}
      />

      {/* Sliding Luxury Bag Cart Slider */}
      <ShoppingBagDrawer
        isOpen={isBagOpen}
        onClose={() => setIsBagOpen(false)}
        items={bagItems}
        onRemove={handleRemoveItem}
        onUpdateQuantity={handleUpdateQuantity}
      />
    </div>
  </>
);
}
