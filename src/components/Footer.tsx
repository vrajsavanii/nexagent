'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { PrimaryCTA } from './CtaSystem';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const navLinksCol1 = [
    { name: 'Technology Stack', href: '/technology' },
    { name: 'AI Agents', href: '/technology/ai-agents' },
    { name: 'Sovereign Cloud', href: '/technology/cloud-infrastructure' },
    { name: 'Voice AI Runtimes', href: '/technology/voice-ai' },
    { name: 'Workflow Automation', href: '/technology/automation' },
  ];

  const navLinksCol2 = [
    { name: 'Enterprise Solutions', href: '/solutions' },
    { name: 'Business Automation', href: '/solutions/business-automation' },
    { name: 'Sales Intelligence', href: '/solutions/sales-automation' },
    { name: 'Ambient Documentation', href: '/solutions/documentation-automation' },
    { name: 'Autonomous CRM', href: '/solutions/crm-systems' },
  ];

  const navLinksCol3 = [
    { name: 'Insights & Research', href: '/insights' },
    { name: 'Model-010 Runtime', href: '/products/model-010' },
    { name: 'NexEvent Fabric', href: '/products/event-mesh-runtime' },
    { name: 'Capital & Ventures', href: '/ventures' },
    { name: 'Book Strategy Call', href: '/book-a-strategy-call' },
  ];

  return (
    <footer className="w-full bg-[#F0EFEA] border-t border-[#17191A]/10 pt-16 pb-12 text-[#17191A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Top Split Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-[#17191A]/10">
          {/* Brand & Slogan Column */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="relative w-8 h-8 rounded-full overflow-hidden border border-[#17191A]/15 shadow-sm">
                  <Image
                    src="/images/logo.jpeg"
                    alt="NexAgent - Intelligent Technology Group"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <span className="font-display font-semibold text-base uppercase tracking-tight text-[#17191A] block leading-none">
                    NexAgent
                  </span>
                  <span className="font-mono text-[10px] uppercase text-[#57595B] tracking-wider">
                    Global Technology Group
                  </span>
                </div>
              </div>

              <p className="font-display text-2xl lg:text-3xl text-[#17191A] font-light leading-tight tracking-tight pt-2">
                Build smarter,
                <br />
                <span className="italic font-normal text-[#3D9D99]">Grow faster.</span>
              </p>

              <p className="text-sm text-[#57595B] max-w-md leading-relaxed font-sans">
                NexAgent is a global technology parent company engineering and scaling intelligent software,
                autonomous agentic systems, and digital infrastructure for modern enterprises.
              </p>
            </div>

            {/* Slogan Banner */}
            <div className="relative w-full max-w-sm h-20 rounded-xl overflow-hidden border border-[#17191A]/12 shadow-sm bg-[#17191A]">
              <Image
                src="/images/slogan-logo.jpeg"
                alt="NexAgent - Build Smarter, Grow Faster"
                fill
                className="object-cover opacity-95 hover:opacity-100 transition-opacity"
              />
            </div>

            {/* Global Presence Hubs */}
            <div className="pt-2">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#57595B] block mb-2">
                Global Footprint
              </span>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-[#17191A]">
                <span className="px-2 py-1 bg-white/70 rounded border border-[#17191A]/08">San Francisco</span>
                <span className="px-2 py-1 bg-white/70 rounded border border-[#17191A]/08">London</span>
                <span className="px-2 py-1 bg-white/70 rounded border border-[#17191A]/08">Dubai</span>
                <span className="px-2 py-1 bg-white/70 rounded border border-[#17191A]/08">Bengaluru</span>
              </div>
            </div>
          </div>

          {/* Links Directory matching Section 34 */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="flex flex-col space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#17191A] font-semibold">
                Architecture
              </span>
              <ul className="space-y-2.5 text-xs text-[#57595B]">
                {navLinksCol1.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="hover:text-[#3D9D99] transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#17191A] font-semibold">
                Platform
              </span>
              <ul className="space-y-2.5 text-xs text-[#57595B]">
                {navLinksCol2.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="hover:text-[#3D9D99] transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#17191A] font-semibold">
                Intelligence
              </span>
              <ul className="space-y-2.5 text-xs text-[#57595B]">
                {navLinksCol3.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="hover:text-[#3D9D99] transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Dedicated Final Conversion Block (Section 34) */}
        <div className="py-12 border-b border-[#17191A]/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1 max-w-xl">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#3D9D99] font-bold">
              CONVERSION // EXECUTIVE ENGAGEMENT
            </span>
            <h3 className="font-display text-2xl sm:text-3xl uppercase font-bold text-[#17191A] tracking-tight">
              What should we build next?
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#57595B]">
              Tell us what you're trying to change, automate, build or scale. Our senior systems architects review every enterprise brief.
            </p>
          </div>
          <div>
            <PrimaryCTA
              label="Book a Strategy Call"
              href="/book-a-strategy-call"
              location="footer_final_conversion"
            />
          </div>
        </div>

        {/* Newsletter & Bottom Legal Bar */}
        <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Executive Newsletter */}
          <div className="w-full md:w-auto">
            <span className="text-xs font-medium text-[#17191A] block mb-2">
              Subscribe to Executive Insights
            </span>
            <form onSubmit={handleSubscribe} className="flex items-center gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter corporate email"
                className="px-3.5 py-1.5 text-xs bg-white border border-[#17191A]/15 rounded-lg focus:outline-none focus:border-[#3D9D99] w-64 text-[#17191A]"
              />
              <button
                type="submit"
                className="px-3.5 py-1.5 text-xs font-medium bg-[#17191A] text-white rounded-lg hover:bg-black/90 transition-colors"
              >
                {subscribed ? 'Subscribed' : 'Join'}
              </button>
            </form>
          </div>

          {/* Copyright & Disclaimers */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-xs font-mono text-[#57595B]">
            <span>© {new Date().getFullYear()} NexAgent Group. All rights reserved.</span>
            <div className="flex items-center gap-4">
              <span className="hover:text-[#17191A] cursor-pointer">Privacy Notice</span>
              <span>·</span>
              <span className="hover:text-[#17191A] cursor-pointer">Terms of Service</span>
              <span>·</span>
              <span className="hover:text-[#17191A] cursor-pointer">Security Baseline</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
