'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { trackEvent } from '@/lib/analytics';

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Close mobile menu on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) setMobileMenuOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Technology', href: '/technology' },
    { name: 'Solutions',  href: '/solutions'  },
    { name: 'Industries', href: '/industries' },   // ← Phase 7C: updated from /solutions#industries
    { name: 'Products',   href: '/model-010'  },
    { name: 'Insights',   href: '/insights'   },
    { name: 'Ventures',   href: '/ventures'   },
    { name: 'About',      href: '/about'      },
  ];

  // Active match: exact OR prefix match for sub-routes
  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(href + '/');
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-none"
      role="banner"
    >
      <div className={`w-full transition-all duration-300 ${scrolled ? 'pt-3 px-4 sm:px-6' : 'pt-0 px-0'}`}>
        <motion.div
          layout
          transition={{ type: 'spring', stiffness: 350, damping: 30 }}
          className={`pointer-events-auto transition-all duration-300 mx-auto ${
            scrolled
              ? 'max-w-6xl bg-white/88 backdrop-blur-xl border border-[rgba(23,25,26,0.12)] shadow-[0_8px_30px_rgba(0,0,0,0.06)] rounded-full px-5 py-2.5'
              : 'w-full max-w-[1280px] px-5 sm:px-6 lg:px-10 py-5 bg-[#F7F7F5]/80 backdrop-blur-md border-b border-[rgba(23,25,26,0.08)]'
          }`}
        >
          <div className="flex items-center justify-between">

            {/* Brand Logo */}
            <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
              <div className="relative w-8 h-8 rounded-full overflow-hidden border border-[rgba(23,25,26,0.15)] shadow-sm group-hover:border-[#3D9D99] transition-colors duration-150">
                <Image
                  src="/images/logo.jpeg"
                  alt="NexAgent — Intelligent Technology Group"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-semibold text-sm uppercase tracking-tight text-[#17191A] leading-none">
                  NexAgent
                </span>
                <span className="font-mono text-[9px] uppercase tracking-wider text-[#57595B] mt-0.5">
                  Technology Group
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-0.5 lg:gap-1" aria-label="Primary navigation">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={[
                      'relative px-3 py-1.5 rounded-full',
                      'text-xs font-medium tracking-wide',
                      'transition-colors duration-150',
                      active
                        ? 'text-[#17191A] font-semibold bg-[rgba(23,25,26,0.05)]'
                        : 'text-[#57595B] hover:text-[#17191A] hover:bg-[rgba(23,25,26,0.03)]',
                    ].join(' ')}
                    aria-current={active ? 'page' : undefined}
                  >
                    {link.name}
                    {active && (
                      <motion.span
                        layoutId="activePill"
                        className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#3D9D99] rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              {/* Search / Command Palette */}
              <button
                type="button"
                onClick={() => window.dispatchEvent(new CustomEvent('toggle-command-palette'))}
                className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[rgba(23,25,26,0.04)] hover:bg-[rgba(23,25,26,0.08)] border border-[rgba(23,25,26,0.06)] text-[11px] font-mono text-[#57595B] transition-colors duration-150"
                aria-label="Open search (Cmd+K)"
                title="Search — ⌘K"
              >
                <span>Search</span>
                <span className="text-[9px] px-1 bg-white rounded border border-[rgba(23,25,26,0.10)]" aria-hidden="true">⌘K</span>
              </button>

              {/* Primary CTA — consistent radius with rounded-sm system */}
              <Link
                href="/book-a-strategy-call"
                onClick={() =>
                  trackEvent('cta_click', { ctaName: 'Book a Strategy Call', ctaLocation: 'header' })
                }
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#17191A] hover:bg-[#2A2E32] text-white text-[11px] font-mono font-semibold uppercase tracking-wider shadow-sm hover:shadow transition-all duration-150"
              >
                <span className="hidden sm:inline">Book a Strategy Call</span>
                <span className="sm:hidden">Contact</span>
                <span aria-hidden="true">→</span>
              </Link>

              {/* Mobile Toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-[5px] rounded-full hover:bg-[rgba(23,25,26,0.05)] transition-colors p-1"
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-nav"
              >
                <motion.span
                  animate={mobileMenuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                  className="w-4 h-[1.5px] bg-[#17191A] block origin-center"
                />
                <motion.span
                  animate={mobileMenuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                  className="w-4 h-[1.5px] bg-[#17191A] block"
                />
                <motion.span
                  animate={mobileMenuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                  className="w-4 h-[1.5px] bg-[#17191A] block origin-center"
                />
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-auto md:hidden mx-4 mt-2 p-4 bg-white/95 backdrop-blur-2xl rounded-lg border border-[rgba(23,25,26,0.10)] shadow-lg"
          >
            <div className="flex flex-col gap-0.5">
              {navLinks.map((link, idx) => {
                const active = isActive(link.href);
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04 + 0.05, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      href={link.href}
                      className={[
                        'flex items-center justify-between px-3 py-2.5 rounded-sm transition-colors duration-150',
                        active
                          ? 'bg-[rgba(61,157,153,0.08)] text-[#3D9D99]'
                          : 'text-[#17191A] hover:bg-[rgba(23,25,26,0.04)]',
                      ].join(' ')}
                      aria-current={active ? 'page' : undefined}
                    >
                      <span className="text-sm font-medium">{link.name}</span>
                      <span className="text-xs text-[#57595B]" aria-hidden="true">→</span>
                    </Link>
                  </motion.div>
                );
              })}

              <div className="pt-3 mt-1.5 border-t border-[rgba(23,25,26,0.08)]">
                <Link
                  href="/book-a-strategy-call"
                  onClick={() =>
                    trackEvent('cta_click', {
                      ctaName: 'Book a Strategy Call',
                      ctaLocation: 'header_mobile',
                    })
                  }
                  className="flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-[#17191A] text-white rounded-sm text-[11px] font-mono uppercase font-semibold tracking-wider hover:bg-[#2A2E32] transition-colors duration-150"
                >
                  Book a Strategy Call
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
