'use client';

import React, { useEffect, useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { searchAllContent } from '@/content';

export default function CommandPalette() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    const handleCustomToggle = () => setIsOpen((prev) => !prev);

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('toggle-command-palette', handleCustomToggle);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('toggle-command-palette', handleCustomToggle);
    };
  }, []);

  const staticActions = [
    { label: 'Operating Companies — Business Portfolio & Subsidiaries', href: '/companies', icon: 'domain', type: 'PAGE' },
    { label: 'Enterprise Solutions — Industry Transformation Blueprints', href: '/solutions', icon: 'grid_view', type: 'PAGE' },
    { label: 'Technology Architecture — Engineering & Cloud Infrastructure', href: '/technology', icon: 'hub', type: 'PAGE' },
    { label: 'Insights & Research — Systems Architecture & Engineering Papers', href: '/insights', icon: 'article', type: 'PAGE' },
    { label: 'NexAgent Ventures — Capital Allocation & Incubation Platform', href: '/ventures', icon: 'trending_up', type: 'PAGE' },
    { label: 'Partner Ecosystem — Certified Alliances & Developer SDKs', href: '/ecosystem', icon: 'extension', type: 'PAGE' },
    { label: 'Model-010 — Proprietary Autonomous Neural Engine', href: '/model-010', icon: 'neurology', type: 'PAGE' },
    { label: '3D Brand Engine Lab — Real-Time WebGL Monogram Visualizer', href: '/core', icon: 'view_in_ar', type: 'PAGE' },
    { label: 'Book Strategy Call — Architectural Diagnostic & Consultation', href: '/book-a-strategy-call', icon: 'event', type: 'PAGE' },
    { label: 'About NexAgent — Parent Company Governance & Global Presence', href: '/about', icon: 'corporate_fare', type: 'PAGE' },
    { label: 'Contact & Advisory — Reserve an Executive Briefing', href: '/contact', icon: 'calendar_month', type: 'PAGE' },
    { label: 'Home — Executive Overview & System Fabric', href: '/', icon: 'home', type: 'PAGE' },
  ];

  const contentResults = useMemo(() => {
    if (!query.trim()) return [];
    return searchAllContent(query);
  }, [query]);

  const filteredActions = useMemo(() => {
    if (!query.trim()) return staticActions;
    return staticActions.filter((a) => a.label.toLowerCase().includes(query.toLowerCase()));
  }, [query]);

  const handleSelect = (href: string) => {
    setIsOpen(false);
    setQuery('');
    router.push(href);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-black/40 backdrop-blur-sm">
      <div className="bg-[#F7F7F5] border border-[#17191A]/20 w-full max-w-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150 rounded-sm">
        <div className="flex items-center px-4 py-3 border-b border-[#17191A]/10 bg-white">
          <span className="material-symbols-outlined text-[#84888A] text-[20px] mr-2">search</span>
          <input
            autoFocus
            type="text"
            className="w-full bg-transparent font-mono text-xs text-[#17191A] focus:outline-none placeholder:text-[#84888A]"
            placeholder="Search technologies, solutions, products, insights..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <kbd className="px-2 py-0.5 bg-[#F7F7F5] border border-[#17191A]/15 text-[10px] font-mono text-[#57595B] rounded">
            ESC
          </kbd>
        </div>

        <div className="max-h-96 overflow-y-auto divide-y divide-[#17191A]/05 p-2">
          {/* Content Search Results */}
          {contentResults.length > 0 && (
            <div className="mb-2">
              <div className="px-3 py-1 font-mono text-[9px] uppercase tracking-widest text-[#9E7B78] font-bold">
                SYSTEM KNOWLEDGE &amp; ARCHITECTURE ({contentResults.length})
              </div>
              {contentResults.map((item) => (
                <button
                  key={`${item.type}-${item.id}`}
                  onClick={() => handleSelect(item.href)}
                  className="w-full text-left px-3 py-2.5 hover:bg-white flex items-center justify-between transition-colors group cursor-pointer rounded-xs"
                >
                  <div className="pr-3">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="font-mono text-[9px] uppercase tracking-wider px-1.5 py-0.2 rounded font-bold text-[#9E7B78] bg-[#9E7B78]/10">
                        {item.type}
                      </span>
                      <span className="font-display text-xs font-semibold text-[#17191A] group-hover:text-[#9E7B78] transition-colors">
                        {item.title}
                      </span>
                    </div>
                    <p className="font-sans text-[11px] text-[#57595B] line-clamp-1">
                      {item.description}
                    </p>
                  </div>
                  <span className="material-symbols-outlined text-[15px] text-[#84888A] opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                    arrow_forward
                  </span>
                </button>
              ))}
            </div>
          )}

          {/* Navigation Pages */}
          {filteredActions.length > 0 && (
            <div>
              {contentResults.length > 0 && (
                <div className="px-3 py-1 font-mono text-[9px] uppercase tracking-widest text-[#84888A] font-bold">
                  PRIMARY NAVIGATION
                </div>
              )}
              {filteredActions.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleSelect(item.href)}
                  className="w-full text-left px-3 py-2.5 hover:bg-white flex items-center justify-between text-[#17191A] transition-colors group cursor-pointer rounded-xs"
                >
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[16px] text-[#9E7B78] group-hover:scale-110 transition-transform">
                      {item.icon}
                    </span>
                    <span className="font-sans text-xs font-medium text-[#17191A]">{item.label}</span>
                  </div>
                  <span className="material-symbols-outlined text-[15px] text-[#84888A] opacity-0 group-hover:opacity-100 transition-opacity">
                    arrow_forward
                  </span>
                </button>
              ))}
            </div>
          )}

          {contentResults.length === 0 && filteredActions.length === 0 && (
            <div className="p-6 text-center text-xs text-[#57595B] font-mono">
              No matching architecture, solutions, or pages found for &quot;{query}&quot;
            </div>
          )}
        </div>

        <div className="px-4 py-2 bg-surface-container-low border-t border-outline-variant/30 flex items-center justify-between font-micro-annotation text-micro-annotation text-outline">
          <span>Navigate with arrows or click</span>
          <span>Quick Switcher (⌘K / Ctrl+K)</span>
        </div>
      </div>
    </div>
  );
}
