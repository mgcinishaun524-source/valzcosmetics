import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ShoppingBag, Globe } from "lucide-react";
import Logo from "./Logo";

interface NavbarProps {
  onOpenBag: () => void;
  cartCount: number;
}

export default function Navbar({ onOpenBag, cartCount }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "The Radiance Story", href: "#story" },
    { name: "Iconic Collection", href: "#collection" },
    { name: "The Boutique", href: "#boutique" },
    { name: "Testimonials", href: "#testimonials" }
  ];

  return (
    <>
      <header
        id="navbar-header"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-luxury-rose/30 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo & Brand Name */}
          <a
            href="#"
            id="brand-logo"
            className="transition-transform duration-300 hover:scale-105"
          >
            <Logo variant="horizontal" theme={scrolled ? "light" : "dark"} />
          </a>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden lg:flex items-center space-x-10">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-xs uppercase font-sans tracking-widest text-luxury-dark/80 hover:text-luxury-ruby transition-colors duration-300 relative group py-1"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-luxury-ruby transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Accessories (Shopping Bag, Language Indicator, Hamburger) */}
          <div id="nav-accessories" className="flex items-center space-x-4 md:space-x-6">
            <div className="hidden sm:flex items-center space-x-1 text-[10px] tracking-widest uppercase text-luxury-dark/60 font-medium">
              <Globe className="w-3.5 h-3.5" />
              <span>BYO</span>
            </div>

            {/* Cart Trigger */}
            <button
              id="cart-trigger-btn"
              onClick={onOpenBag}
              className="relative p-2 text-luxury-dark hover:text-luxury-ruby transition-colors duration-300 group focus:outline-none"
              aria-label="Open Shopping Bag"
            >
              <ShoppingBag className="w-5.5 h-5.5 stroke-[1.5] transition-transform duration-300 group-hover:scale-110" />
              <AnimatePresence>
                {cartCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute -top-0.5 -right-0.5 w-4.5 h-4.5 bg-luxury-ruby text-white text-[9px] font-sans font-bold rounded-full flex items-center justify-center border border-white"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-luxury-dark hover:text-luxury-ruby transition-colors duration-300 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 stroke-[1.5]" />
              ) : (
                <Menu className="w-6 h-6 stroke-[1.5]" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-0 w-full bg-white z-40 border-b border-luxury-rose/50 shadow-lg lg:hidden"
          >
            <div className="px-6 py-8 flex flex-col space-y-6">
              {menuItems.map((item, idx) => (
                <motion.a
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xs uppercase tracking-widest text-luxury-dark/90 hover:text-luxury-ruby font-medium py-2 border-b border-luxury-rose/20"
                >
                  {item.name}
                </motion.a>
              ))}
              <div className="flex justify-between items-center pt-4 text-xs tracking-widest uppercase text-luxury-dark/50">
                <span>Shop 5, Federal Centre</span>
                <span>Bulawayo</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
