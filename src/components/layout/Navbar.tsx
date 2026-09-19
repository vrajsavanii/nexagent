"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { Button } from "../ui/Button";
import { MagneticButton } from "../ui/MagneticButton";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Cpu,
  Workflow,
  Sparkles,
  Layers,
  Database,
  PhoneCall,
  Bot,
  Building2,
  Stethoscope,
  Hotel,
  Briefcase
} from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileOpen(false);
    setSolutionsOpen(false);
    setIndustriesOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Technology", href: "/technology" },
    {
      name: "Solutions",
      href: "/solutions",
      hasDropdown: true,
      isOpen: solutionsOpen,
      setIsOpen: setSolutionsOpen,
      dropdownType: "solutions"
    },
    {
      name: "Industries",
      href: "/industries",
      hasDropdown: true,
      isOpen: industriesOpen,
      setIsOpen: setIndustriesOpen,
      dropdownType: "industries"
    },
    { name: "Products", href: "/products" },
    { name: "Insights", href: "/insights" },
    { name: "About", href: "/about" },
    { name: "FAQ", href: "/faq" }
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-2xs py-3"
          : "bg-transparent py-4 sm:py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Logo size="md" />

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));

            if (link.hasDropdown) {
              return (
                <div
                  key={link.name}
                  className="relative group"
                  onMouseEnter={() => link.setIsOpen?.(true)}
                  onMouseLeave={() => link.setIsOpen?.(false)}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "px-3.5 py-2 rounded-lg font-display text-sm font-medium transition-colors flex items-center gap-1.5",
                      isActive
                        ? "text-brand-800 bg-brand-50/70"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/60"
                    )}
                  >
                    {link.name}
                    <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180 opacity-60" />
                  </Link>

                  {/* Mega Menu Dropdown */}
                  {link.dropdownType === "solutions" && (
                    <div className="absolute top-full left-0 w-[540px] p-5 bg-white/95 backdrop-blur-xl rounded-2xl border border-slate-200/90 shadow-elevated opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                        <span className="font-mono text-xs uppercase tracking-wider text-slate-400 font-medium">
                          Core Solutions & Capabilities
                        </span>
                        <Link
                          href="/solutions"
                          className="font-display text-xs font-semibold text-brand-700 hover:text-brand-900 flex items-center gap-1"
                        >
                          View All 12 Solutions <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <Link
                          href="/solutions#business-automation"
                          className="p-3 rounded-xl hover:bg-slate-50 transition-colors group/item"
                        >
                          <div className="flex items-center gap-2.5 mb-1">
                            <div className="p-1.5 rounded-lg bg-brand-50 text-brand-700">
                              <Workflow className="w-4 h-4" />
                            </div>
                            <span className="font-display font-semibold text-sm text-slate-900 group-hover/item:text-brand-800">
                              Business Automation
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 line-clamp-2 pl-9">
                            End-to-end event-driven workflow automation and cross-tool orchestration.
                          </p>
                        </Link>

                        <Link
                          href="/solutions#ai-agents"
                          className="p-3 rounded-xl hover:bg-slate-50 transition-colors group/item"
                        >
                          <div className="flex items-center gap-2.5 mb-1">
                            <div className="p-1.5 rounded-lg bg-brand-50 text-brand-700">
                              <Cpu className="w-4 h-4" />
                            </div>
                            <span className="font-display font-semibold text-sm text-slate-900 group-hover/item:text-brand-800">
                              Autonomous AI Agents
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 line-clamp-2 pl-9">
                            Goal-directed software agents that reason, call APIs, and execute tasks.
                          </p>
                        </Link>

                        <Link
                          href="/solutions#voice-ai"
                          className="p-3 rounded-xl hover:bg-slate-50 transition-colors group/item"
                        >
                          <div className="flex items-center gap-2.5 mb-1">
                            <div className="p-1.5 rounded-lg bg-titanium-50 text-titanium-700">
                              <PhoneCall className="w-4 h-4" />
                            </div>
                            <span className="font-display font-semibold text-sm text-slate-900 group-hover/item:text-titanium-800">
                              Voice AI Systems
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 line-clamp-2 pl-9">
                            Sub-500ms conversational telephony for customer inquiries and booking.
                          </p>
                        </Link>

                        <Link
                          href="/solutions#business-systems"
                          className="p-3 rounded-xl hover:bg-slate-50 transition-colors group/item"
                        >
                          <div className="flex items-center gap-2.5 mb-1">
                            <div className="p-1.5 rounded-lg bg-slate-100 text-slate-700">
                              <Layers className="w-4 h-4" />
                            </div>
                            <span className="font-display font-semibold text-sm text-slate-900 group-hover/item:text-slate-900">
                              CRM & Custom Software
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 line-clamp-2 pl-9">
                            Bespoke operating portals designed for your exact organizational hierarchy.
                          </p>
                        </Link>
                      </div>
                    </div>
                  )}

                  {link.dropdownType === "industries" && (
                    <div className="absolute top-full left-0 w-[480px] p-5 bg-white/95 backdrop-blur-xl rounded-2xl border border-slate-200/90 shadow-elevated opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                        <span className="font-mono text-xs uppercase tracking-wider text-slate-400 font-medium">
                          Industry Workflow Implementations
                        </span>
                        <Link
                          href="/industries"
                          className="font-display text-xs font-semibold text-brand-700 hover:text-brand-900 flex items-center gap-1"
                        >
                          Explore All <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <Link
                          href="/industries#healthcare"
                          className="p-3 rounded-xl hover:bg-slate-50 transition-colors group/item"
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <Stethoscope className="w-4 h-4 text-brand-600" />
                            <span className="font-display font-semibold text-sm text-slate-900 group-hover/item:text-brand-800">
                              Healthcare
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 pl-6">
                            Clinical paperwork & administrative record extraction.
                          </p>
                        </Link>

                        <Link
                          href="/industries#hospitality"
                          className="p-3 rounded-xl hover:bg-slate-50 transition-colors group/item"
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <Hotel className="w-4 h-4 text-titanium-600" />
                            <span className="font-display font-semibold text-sm text-slate-900 group-hover/item:text-titanium-800">
                              Hospitality
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 pl-6">
                            Guest request orchestration & PMS staff task dispatch.
                          </p>
                        </Link>

                        <Link
                          href="/industries#b2b"
                          className="p-3 rounded-xl hover:bg-slate-50 transition-colors group/item"
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <Briefcase className="w-4 h-4 text-slate-700" />
                            <span className="font-display font-semibold text-sm text-slate-900 group-hover/item:text-slate-900">
                              B2B & Enterprise
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 pl-6">
                            Inbound lead qualification, enrichment & CRM routing.
                          </p>
                        </Link>

                        <Link
                          href="/industries#financial-technology"
                          className="p-3 rounded-xl hover:bg-slate-50 transition-colors group/item"
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <Building2 className="w-4 h-4 text-brand-700" />
                            <span className="font-display font-semibold text-sm text-slate-900 group-hover/item:text-brand-800">
                              FinTech & Ops
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 pl-6">
                            Back-office ledger reconciliation & audit pipelines.
                          </p>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "px-3.5 py-2 rounded-lg font-display text-sm font-medium transition-colors",
                  isActive
                    ? "text-brand-800 bg-brand-50/70"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/60"
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <MagneticButton strength={4} className="hidden sm:inline-block">
            <Button
              href="/strategy-call"
              variant="primary"
              size="sm"
              icon={<ArrowRight className="w-3.5 h-3.5" />}
            >
              Book a Strategy Call
            </Button>
          </MagneticButton>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-brand-500"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-white border-b border-slate-200 shadow-xl max-h-[calc(100vh-65px)] overflow-y-auto animate-fade-in p-6">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "p-3 rounded-lg font-display text-base font-medium flex items-center justify-between",
                  pathname === link.href
                    ? "text-brand-900 bg-brand-50 font-semibold"
                    : "text-slate-700 hover:bg-slate-50"
                )}
              >
                <span>{link.name}</span>
                <ArrowRight className="w-4 h-4 opacity-40" />
              </Link>
            ))}

            <div className="pt-4 mt-2 border-t border-slate-100 flex flex-col gap-2.5">
              <Button
                href="/strategy-call"
                variant="primary"
                size="md"
                className="w-full justify-center"
              >
                Book a Strategy Call
              </Button>
              <Button
                href="/contact"
                variant="outline"
                size="md"
                className="w-full justify-center"
              >
                Contact NexAgent
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
