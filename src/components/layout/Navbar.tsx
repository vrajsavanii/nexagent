'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import {
  Menu,
  X,
  ChevronDown,
  Activity,
  Zap,
  Clock,
  Layers,
  ShieldCheck,
  Stethoscope,
  Hotel,
  Network,
  ArrowRight,
} from 'lucide-react';
import Button from '@/components/ui/Button';
import { transitionPresets } from '@/lib/motion';

interface NavbarProps {
  onOpenStrategyCall: () => void;
  activePath?: string;
}

interface NavItemWithSubmenu {
  label: string;
  items: {
    title: string;
    description: string;
    href: string;
    icon: React.ElementType;
    badge?: string;
  }[];
}

const productMenu: NavItemWithSubmenu = {
  label: 'Products',
  items: [
    {
      title: 'NexAgent HMS (Hospital OS)',
      description: 'Full-spectrum hospital OS: OPD, IPD, bed turnover, ABDM & NABH digital compliance.',
      href: '/products/hms',
      icon: Stethoscope,
      badge: 'Available',
    },
    {
      title: 'NexAgent Hospitality OS',
      description: 'AI-powered cloud PMS: dynamic revenue engine, 24/7 guest concierge & smart housekeeping.',
      href: '/products/hospitality',
      icon: Hotel,
      badge: 'Available',
    },
    {
      title: 'Enterprise Core Platform',
      description: 'One unified solution customized to your exact high-stakes operational requirements.',
      href: '/solutions/workflow-automation',
      icon: Zap,
      badge: 'Available',
    },
    {
      title: 'Capacity Intelligence Network',
      description: 'Predictive surge forecasting and dynamic real-time resource allocation.',
      href: '/technology#architecture',
      icon: Network,
      badge: 'Enterprise',
    },
  ],
};

const solutionsMenu: NavItemWithSubmenu = {
  label: 'Solutions',
  items: [
    {
      title: 'Workflow Automation Engine',
      description: 'Eliminates cross-tool copy-paste friction and manual handoff delays.',
      href: '/solutions/workflow-automation',
      icon: Layers,
    },
    {
      title: 'Healthcare Operations',
      description: 'Reduces wait times by 42% and bed turnaround to 35 minutes.',
      href: '/industries/healthcare',
      icon: Activity,
    },
    {
      title: 'Operating Pipeline',
      description: '6-stage intelligent pipeline turning business input into executed action.',
      href: '/#solutions',
      icon: ShieldCheck,
    },
    {
      title: 'Core Architecture',
      description: 'Explore the 7-layer deterministic operational stack and security infrastructure.',
      href: '/technology',
      icon: Network,
    },
  ],
};

export default function Navbar({ onOpenStrategyCall, activePath = '/' }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpandedGroup, setMobileExpandedGroup] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  // Scroll state detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click or Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveDropdown(null);
        setMobileMenuOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header
      ref={navRef}
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-black/[0.08] py-3.5 shadow-sm'
          : 'bg-white/80 backdrop-blur-sm border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Brand Identity */}
        <Link
          href="/"
          onClick={() => setActiveDropdown(null)}
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20 rounded-lg select-none"
        >
          <div className="relative w-8 h-8 flex items-center justify-center">
            <Image
              src="/assets/nexagent_logo.png"
              alt="NexAgent Infra Logo"
              width={32}
              height={32}
              className="object-contain transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="font-sans font-bold text-xl tracking-tight text-[#0f1117]">
              NexAgent
            </span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 font-semibold">
              INFRA
            </span>
          </div>
        </Link>

        {/* Center: Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {/* Products Mega-Menu Trigger */}
          <div className="relative">
            <button
              onClick={() =>
                setActiveDropdown(activeDropdown === 'products' ? null : 'products')
              }
              onMouseEnter={() => setActiveDropdown('products')}
              className={`px-3.5 py-2 text-xs font-semibold uppercase tracking-wider transition-colors rounded-full flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20 ${
                activeDropdown === 'products'
                  ? 'text-zinc-950 bg-black/[0.06]'
                  : 'text-zinc-600 hover:text-zinc-950 hover:bg-black/[0.04]'
              }`}
            >
              <span>Products</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  activeDropdown === 'products' ? 'rotate-180 text-zinc-950' : ''
                }`}
              />
            </button>

            {/* Products Mega-Menu Dropdown */}
            <AnimatePresence>
              {activeDropdown === 'products' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={transitionPresets.fast}
                  onMouseLeave={() => setActiveDropdown(null)}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[540px] bg-white border border-black/[0.08] rounded-2xl p-4 shadow-[0_8px_30px_rgba(0,0,0,0.12)] backdrop-blur-xl z-50"
                >
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#94a3b8] px-3 pb-2 border-b border-black/[0.06] mb-2">
                    Core Product Portfolio
                  </div>
                    <div className="grid grid-cols-2 gap-2">
                    {productMenu.items.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.title}
                          href={item.href}
                          onClick={() => setActiveDropdown(null)}
                          className="p-3 rounded-xl hover:bg-black/[0.04] transition-colors group block border border-transparent hover:border-black/[0.08]"
                        >
                          <div className="flex items-center justify-between mb-1.5">
                            <div className="flex items-center gap-2">
                              <Icon className="w-4 h-4 text-[#09090b] group-hover:scale-110 transition-transform" />
                              <span className="text-xs font-bold text-[#09090b] transition-colors">
                                {item.title}
                              </span>
                            </div>
                            {item.badge && (
                              <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-black/[0.05] text-[#71717a] uppercase font-semibold">
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] text-[#71717a] line-clamp-2 leading-relaxed">
                            {item.description}
                          </p>
                        </Link>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Solutions Mega-Menu Trigger */}
          <div className="relative">
            <button
              onClick={() =>
                setActiveDropdown(activeDropdown === 'solutions' ? null : 'solutions')
              }
              onMouseEnter={() => setActiveDropdown('solutions')}
              className={`px-3.5 py-2 text-xs font-semibold uppercase tracking-wider transition-colors rounded-full flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20 ${
                activeDropdown === 'solutions'
                  ? 'text-[#09090b] bg-black/[0.06]'
                  : 'text-[#52525b] hover:text-[#09090b] hover:bg-black/[0.04]'
              }`}
            >
              <span>Solutions</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  activeDropdown === 'solutions' ? 'rotate-180 text-[#09090b]' : ''
                }`}
              />
            </button>

            {/* Solutions Mega-Menu Dropdown */}
            <AnimatePresence>
              {activeDropdown === 'solutions' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={transitionPresets.fast}
                  onMouseLeave={() => setActiveDropdown(null)}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[540px] bg-white border border-black/[0.08] rounded-2xl p-4 shadow-[0_8px_30px_rgba(0,0,0,0.12)] backdrop-blur-xl z-50"
                >
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#71717a] px-3 pb-2 border-b border-black/[0.06] mb-2">
                    Industry &amp; Enterprise Solutions
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {solutionsMenu.items.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.title}
                          href={item.href}
                          onClick={() => setActiveDropdown(null)}
                          className="p-3 rounded-xl hover:bg-black/[0.04] transition-colors group block border border-transparent hover:border-black/[0.08]"
                        >
                          <div className="flex items-center gap-2 mb-1.5">
                            <Icon className="w-4 h-4 text-[#09090b] group-hover:scale-110 transition-transform" />
                            <span className="text-xs font-bold text-[#09090b] transition-colors">
                              {item.title}
                            </span>
                          </div>
                          <p className="text-[11px] text-[#71717a] line-clamp-2 leading-relaxed">
                            {item.description}
                          </p>
                        </Link>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Dedicated Solution Architect Link */}
          <Link
            href="/setup"
            onClick={() => setActiveDropdown(null)}
            className={`px-3.5 py-2 text-xs font-semibold uppercase tracking-wider transition-colors rounded-full flex items-center gap-1.5 ${
              activePath === '/setup'
                ? 'text-[#09090b] font-bold bg-black/[0.06]'
                : 'text-[#52525b] hover:text-[#09090b] hover:bg-black/[0.04]'
            }`}
          >
            <span>Architect</span>
            <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-black text-white uppercase font-bold">
              New
            </span>
          </Link>

          {/* Direct Links */}
          <Link
            href="/technology"
            onClick={() => setActiveDropdown(null)}
            className={`px-3.5 py-2 text-xs font-semibold uppercase tracking-wider transition-colors rounded-full ${
              activePath === '/technology'
                ? 'text-[#09090b] font-bold bg-black/[0.06]'
                : 'text-[#52525b] hover:text-[#09090b] hover:bg-black/[0.04]'
            }`}
          >
            Technology
          </Link>

          <Link
            href="/about"
            onClick={() => setActiveDropdown(null)}
            className={`px-3.5 py-2 text-xs font-semibold uppercase tracking-wider transition-colors rounded-full ${
              activePath === '/about'
                ? 'text-[#09090b] font-bold bg-black/[0.06]'
                : 'text-[#52525b] hover:text-[#09090b] hover:bg-black/[0.04]'
            }`}
          >
            Company
          </Link>
        </nav>

        {/* Right: Primary Call to Action */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenStrategyCall}
            className="btn hidden md:inline-flex"
            aria-label="Request Live Demo"
          >
            <span className="relative z-10">Request Live Demo</span>
            <span className="animation">
              <ArrowRight className="w-3.5 h-3.5 text-white relative z-10" />
            </span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2.5 md:hidden text-[#0f1117] hover:bg-black/[0.06] rounded-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20 min-h-[44px] min-w-[44px] flex items-center justify-center"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={transitionPresets.fast}
            className="md:hidden border-t border-black/[0.08] bg-white px-4 pt-3 pb-8 space-y-3 overflow-hidden shadow-lg"
          >
            {/* Expandable Products Group */}
            <div className="border-b border-black/[0.06] pb-2">
              <button
                onClick={() =>
                  setMobileExpandedGroup(
                    mobileExpandedGroup === 'products' ? null : 'products'
                  )
                }
                className="w-full flex items-center justify-between py-3 text-sm font-bold text-[#09090b] min-h-[44px]"
              >
                <span>Products</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    mobileExpandedGroup === 'products' ? 'rotate-180 text-[#09090b]' : 'text-[#71717a]'
                  }`}
                />
              </button>
              {mobileExpandedGroup === 'products' && (
                <div className="pl-3 py-2 space-y-2 border-l-2 border-black/20">
                  {productMenu.items.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 text-sm text-[#52525b] hover:text-[#09090b] min-h-[40px] flex items-center font-medium"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Expandable Solutions Group */}
            <div className="border-b border-black/[0.06] pb-2">
              <button
                onClick={() =>
                  setMobileExpandedGroup(
                    mobileExpandedGroup === 'solutions' ? null : 'solutions'
                  )
                }
                className="w-full flex items-center justify-between py-3 text-sm font-bold text-[#09090b] min-h-[44px]"
              >
                <span>Solutions</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    mobileExpandedGroup === 'solutions' ? 'rotate-180 text-[#09090b]' : 'text-[#71717a]'
                  }`}
                />
              </button>
              {mobileExpandedGroup === 'solutions' && (
                <div className="pl-3 py-2 space-y-2 border-l-2 border-black/20">
                  {solutionsMenu.items.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 text-sm text-[#52525b] hover:text-[#09090b] min-h-[40px] flex items-center font-medium"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Dedicated Solution Architect Link in Mobile */}
            <Link
              href="/setup"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-3 text-sm font-bold text-[#09090b] border-b border-black/[0.06] min-h-[44px]"
            >
              <span>Solution Architect</span>
              <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-black text-white uppercase font-bold">
                Interactive
              </span>
            </Link>

            {/* Direct Mobile Links */}
            <Link
              href="/technology"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-3 text-sm font-bold text-[#09090b] border-b border-black/[0.06] min-h-[44px] flex items-center"
            >
              Technology
            </Link>

            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-3 text-sm font-bold text-[#09090b] border-b border-black/[0.06] min-h-[44px] flex items-center"
            >
              Company
            </Link>

            {/* Mobile CTA */}
            <div className="pt-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenStrategyCall();
                }}
                className="btn w-full"
                aria-label="Request Live Demo"
              >
                <span className="relative z-10">Request Live Demo</span>
                <span className="animation">
                  <ArrowRight className="w-3.5 h-3.5 text-white relative z-10" />
                </span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
