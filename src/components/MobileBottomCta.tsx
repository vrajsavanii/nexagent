'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { trackEvent } from '@/lib/analytics';

/**
 * MobileBottomCta
 * Restrained, elegant mobile sticky CTA bar adhering to Section 24.
 * Appears only on mobile devices after initial scroll, without dominating the viewport.
 */
export default function MobileBottomCta() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Don't show if already on booking or contact page
    if (pathname === '/book-a-strategy-call' || pathname === '/contact') {
      setVisible(false);
      return;
    }

    const handleScroll = () => {
      // Show after scrolling 280px down
      const shouldShow = window.scrollY > 280;
      setVisible(shouldShow);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  if (!visible) return null;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-3 bg-white/95 backdrop-blur-md border-t border-[#17191A]/10 shadow-[0_-4px_20px_rgba(0,0,0,0.06)]">
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div className="flex flex-col">
          <span className="font-display font-semibold text-xs text-[#17191A] leading-tight">
            Ready to build?
          </span>
          <span className="font-mono text-[10px] text-[#57595B]">
            Enterprise Systems
          </span>
        </div>

        <Link
          href="/book-a-strategy-call"
          onClick={() => trackEvent('cta_click', { ctaName: 'Book a Strategy Call', ctaLocation: 'mobile_sticky_bottom' })}
          className="px-4 py-2.5 bg-[#17191A] text-white font-mono text-xs uppercase tracking-wider font-semibold rounded shadow-sm flex items-center gap-1.5 focus-visible:outline-2 focus-visible:outline-[#9E7B78]"
        >
          <span>Book Strategy Call</span>
          <span className="text-xs">→</span>
        </Link>
      </div>
    </div>
  );
}
