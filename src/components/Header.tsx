'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Technology', href: '/technology' },
    { name: 'Solutions',  href: '/solutions' },
    { name: 'Industries', href: '/industries' },
    { name: 'Products',   href: '/products' },
    { name: 'Insights',   href: '/insights' },
    { name: 'About',      href: '/about' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-none">
      <div className={`w-full transition-all duration-300 ${scrolled ? 'pt-3 px-4 sm:px-6' : 'pt-2 px-4 sm:px-8'}`}>
        <div
          className={`pointer-events-auto transition-all duration-300 mx-auto max-w-7xl flex items-center justify-between ${
            scrolled
              ? 'bg-white/95 backdrop-blur-xl border border-[rgba(205,211,219,0.5)] shadow-[0_12px_32px_-6px_rgba(42,43,46,0.08)] rounded-full px-6 py-3'
              : 'bg-transparent py-4'
          }`}
        >
          {/* Brand Logo & Name */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-[#2A2B2E] flex items-center justify-center text-white font-bold text-sm shadow-xs group-hover:scale-105 transition-transform">
              <span className="text-[#EB572C]">✦</span>
            </div>
            <span className="font-sans font-extrabold text-base tracking-tight text-[#2A2B2E] uppercase">
              NexAgent
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/70 backdrop-blur-md px-4 py-1.5 rounded-full border border-[rgba(205,211,219,0.4)] shadow-2xs">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-3.5 py-1 text-xs font-semibold text-[#5E6572] hover:text-[#2A2B2E] hover:bg-[#FBF5F3] rounded-full transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Header Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/book-a-strategy-call"
              className="inline-flex items-center justify-center px-5 py-2 rounded-full text-xs font-bold text-white bg-[#EB572C] hover:bg-[#D44820] shadow-xs hover:shadow-sm transition-all"
            >
              Book a Strategy Call
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-full bg-white border border-[rgba(205,211,219,0.6)] text-[#2A2B2E]"
            aria-label="Toggle Navigation"
          >
            <span className="material-symbols-outlined text-[20px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="pointer-events-auto md:hidden mt-2 max-w-6xl mx-auto bg-white border border-[rgba(205,211,219,0.6)] rounded-2xl p-5 shadow-lg space-y-3"
            >
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-2 text-sm font-semibold text-[#2A2B2E] hover:bg-[#FBF5F3] rounded-lg"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
              <div className="pt-3 border-t border-[rgba(205,211,219,0.3)]">
                <Link
                  href="/book-a-strategy-call"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center py-2.5 rounded-full text-xs font-bold text-white bg-[#EB572C] hover:bg-[#D44820] shadow-sm transition-colors"
                >
                  Book a Strategy Call
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
