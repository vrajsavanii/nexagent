'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, MapPin, Mail, Github } from 'lucide-react';
import Button from '@/components/ui/Button';
import { fadeUpVariants, viewportConfig } from '@/lib/motion';

interface FooterProps {
  onOpenStrategyCall?: () => void;
}

export default function Footer({ onOpenStrategyCall }: FooterProps) {
  return (
    <footer className="w-full bg-[#09090b] text-[#71717a] border-t border-white/[0.08] pt-20 pb-10 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 1. Pre-Footer Action Banner */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="pb-16 border-b border-white/[0.08] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8"
        >
          <div className="max-w-2xl space-y-2">
            <div className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-bold">
              Ready for Operational Transformation?
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Eliminate operational drag with deterministic AI.
            </h3>
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
              Schedule an executive architecture session with founders Manthan Kachhadiya and Vraj Savani to inspect your manual bottlenecks.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full sm:w-auto">
            {onOpenStrategyCall && (
              <button
                onClick={onOpenStrategyCall}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-[#09090b] font-bold text-sm hover:bg-zinc-200 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                <span>Request Live Demo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
            <Link
              href="/setup"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/[0.06] text-white font-semibold text-sm border border-white/[0.12] hover:bg-white/[0.10] transition-all"
            >
              Solution Architect
            </Link>
          </div>
        </motion.div>

        {/* 2. Main Multi-Column Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 py-16 border-b border-white/[0.08]">
          {/* Brand Statement (Span 4) */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/assets/nexagent_logo.png"
                alt="NexAgent Infra Logo"
                width={32}
                height={32}
                className="object-contain"
              />
              <div className="flex items-baseline gap-1.5">
                <span className="font-sans font-bold text-xl text-white tracking-tight">
                  NexAgent
                </span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 font-semibold">
                  INFRA
                </span>
              </div>
            </div>
            <p className="text-sm text-[#71717a] leading-relaxed max-w-sm">
              Agentic cloud infrastructure and deterministic AI software for hospitals, hotels, and enterprise operations. Built to eliminate operational friction with one unified platform customized to your requirements.
            </p>
            <div className="text-xs font-mono text-[#71717a] space-y-1 pt-1">
              <div>✦ Founded 2026 · Operating globally from India</div>
              <div>✦ Cloud-native WebAssembly policy architecture</div>
            </div>
          </div>

          {/* Column 1: Products (Span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-semibold">
              Products
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products/hms" className="hover:text-white transition-colors">
                  NexAgent HMS
                </Link>
              </li>
              <li>
                <Link href="/products/hospitality" className="hover:text-white transition-colors">
                  Hospitality OS (Hotel)
                </Link>
              </li>
              <li>
                <Link href="/solutions/workflow-automation" className="hover:text-white transition-colors">
                  Enterprise Core
                </Link>
              </li>
              <li>
                <Link href="/technology" className="hover:text-white transition-colors">
                  Capacity Intelligence
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Solutions (Span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-semibold">
              Solutions
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/setup" className="text-white font-semibold flex items-center gap-1.5 hover:underline">
                  <span>Solution Architect</span>
                  <span className="text-[9px] font-mono px-1 py-0.2 rounded bg-white text-black font-bold">New</span>
                </Link>
              </li>
              <li>
                <Link href="/solutions/workflow-automation" className="hover:text-white transition-colors">
                  Workflow Engine
                </Link>
              </li>
              <li>
                <Link href="/industries/healthcare" className="hover:text-white transition-colors">
                  Healthcare Operations
                </Link>
              </li>
              <li>
                <Link href="/technology" className="hover:text-white transition-colors">
                  Core Architecture
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company (Span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-semibold">
              Company
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/about#founders" className="hover:text-white transition-colors">
                  Founders
                </Link>
              </li>
              <li>
                <Link href="/technology" className="hover:text-white transition-colors">
                  7-Layer Stack
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/manthankachhadiyaa/NA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1.5"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Operations & Contact (Span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-semibold">
              Operations
            </h4>
            <ul className="space-y-2 text-xs text-[#71717a]">
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                <span>Global Cloud-First</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 shrink-0" />
                <span>Operating Globally from India</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Mail className="w-3 h-3 text-white shrink-0" />
                <a href="mailto:founders@nexagent.ai" className="hover:text-white transition-colors truncate">
                  founders@nexagent.ai
                </a>
              </li>
              <li className="text-[11px] font-mono text-[#64748b] pt-1">
                ✦ 24/7 Cloud Availability
              </li>
            </ul>
          </div>
        </div>

        {/* 3. Bottom Legal Bar */}
        <div className="pt-8 pb-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748b]">
          <div suppressHydrationWarning>
            &copy; {new Date().getFullYear()} NexAgent Infra. Built by Founders Manthan Kachhadiya &amp; Vraj Savani. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-white transition-colors">
              Privacy &amp; HIPAA
            </Link>
            <Link href="/technology" className="hover:text-white transition-colors">
              Security
            </Link>
            <div className="flex items-center gap-1.5 text-zinc-400">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>100% Policy-Gated</span>
            </div>
          </div>
        </div>

        {/* 4. Large Closing Brand Mark — editorial serif shimmer */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 select-none pointer-events-none flex justify-center w-full overflow-hidden"
        >
          {/* Container tightly hugs NexAgent; w-[30%] child perfectly covers 'ent' */}
          <div className="relative inline-flex flex-col items-end">
            <span
              className="footer-brand-shimmer block leading-[0.85] pt-8 sm:pt-10
                text-[3.8rem] sm:text-[7.5rem] md:text-[10rem] lg:text-[13rem] xl:text-[15.5rem]
                font-serif tracking-tighter"
            >
              NexAgent
            </span>
            {/* INFRA — exactly spans the width of 'ent' with perfect sweet-spot spacing */}
            <div className="w-[30%] flex justify-between items-center mt-0.5 sm:mt-1 md:mt-1.5 lg:mt-2 pb-6">
              <span className="footer-brand-shimmer font-mono font-black text-[1.1rem] sm:text-[1.8rem] md:text-[2.5rem] lg:text-[3.2rem] xl:text-[3.8rem] leading-none">
                I
              </span>
              <span className="footer-brand-shimmer font-mono font-black text-[1.1rem] sm:text-[1.8rem] md:text-[2.5rem] lg:text-[3.2rem] xl:text-[3.8rem] leading-none">
                N
              </span>
              <span className="footer-brand-shimmer font-mono font-black text-[1.1rem] sm:text-[1.8rem] md:text-[2.5rem] lg:text-[3.2rem] xl:text-[3.8rem] leading-none">
                F
              </span>
              <span className="footer-brand-shimmer font-mono font-black text-[1.1rem] sm:text-[1.8rem] md:text-[2.5rem] lg:text-[3.2rem] xl:text-[3.8rem] leading-none">
                R
              </span>
              <span className="footer-brand-shimmer font-mono font-black text-[1.1rem] sm:text-[1.8rem] md:text-[2.5rem] lg:text-[3.2rem] xl:text-[3.8rem] leading-none">
                A
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
