'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { initAttribution, trackEvent } from '@/lib/analytics';

/**
 * AttributionTracker
 * Headless client component listening to route changes to persist session attribution
 * and trigger privacy-safe page_view conversion events.
 */
export default function AttributionTracker() {
  const pathname = usePathname();

  useEffect(() => {
    initAttribution();
    trackEvent('page_view', { page: pathname });
  }, [pathname]);

  return null;
}
