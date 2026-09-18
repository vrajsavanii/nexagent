'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-[#FBF5F3] border-t border-[rgba(205,211,219,0.5)] pt-16 pb-12 text-[#2A2B2E]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[rgba(205,211,219,0.4)]">
          {/* Brand Left */}
          <div className="lg:col-span-2 space-y-4 max-w-sm">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#2A2B2E] flex items-center justify-center shadow-xs overflow-hidden">
                <img src="/images/logo.jpeg" alt="NexAgent Logo" className="w-full h-full object-cover" />
              </div>
              <span className="font-sans font-extrabold text-lg tracking-tight text-[#2A2B2E] uppercase">
                NexAgent
              </span>
            </Link>
            <p className="text-xs text-[#738290] leading-relaxed">
              Intelligent technology for businesses operating in a complex world. AI, software, automation, and digital infrastructure engineered for scalability.
            </p>
            <div className="pt-2">
              <Link
                href="/book-a-strategy-call"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-white bg-[#EB572C] hover:bg-[#D44820] transition-colors shadow-xs"
              >
                <span>Book a Strategy Call</span>
                <span className="text-[10px]">↗</span>
              </Link>
            </div>
          </div>

          {/* Column 1: Capabilities */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#2A2B2E]">Capabilities</h4>
            <ul className="space-y-2 text-xs font-medium text-[#5E6572]">
              <li><Link href="/technology" className="hover:text-[#2A2B2E] transition-colors">Technology</Link></li>
              <li><Link href="/solutions" className="hover:text-[#2A2B2E] transition-colors">Solutions</Link></li>
              <li><Link href="/products" className="hover:text-[#2A2B2E] transition-colors">Products</Link></li>
            </ul>
          </div>

          {/* Column 2: Sectors & Insights */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#2A2B2E]">Ecosystem</h4>
            <ul className="space-y-2 text-xs font-medium text-[#5E6572]">
              <li><Link href="/industries" className="hover:text-[#2A2B2E] transition-colors">Industries</Link></li>
              <li><Link href="/insights" className="hover:text-[#2A2B2E] transition-colors">Insights</Link></li>
              <li><Link href="/faq" className="hover:text-[#2A2B2E] transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Column 3: Company & Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#2A2B2E]">Company</h4>
            <ul className="space-y-2 text-xs font-medium text-[#5E6572]">
              <li><Link href="/about" className="hover:text-[#2A2B2E] transition-colors">About NexAgent</Link></li>
              <li><Link href="/contact" className="hover:text-[#2A2B2E] transition-colors">Contact</Link></li>
              <li><Link href="/privacy" className="hover:text-[#2A2B2E] transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-[#2A2B2E] transition-colors">Terms of Use</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#738290]">
          <p>© {new Date().getFullYear()} NexAgent. All rights reserved. Intelligent technology for businesses worldwide.</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#15803D] animate-pulse" />
            <span className="font-mono text-[11px] uppercase tracking-wider">All Systems Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
