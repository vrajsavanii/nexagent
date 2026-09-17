'use client';

import React, { useEffect, useState } from 'react';
import { TocItem } from '@/content/types';

export interface TableOfContentsProps {
  items: TocItem[];
  className?: string;
}

export function TableOfContents({ items, className = '' }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id || '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-80px 0px -60% 0px' }
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  if (!items || items.length === 0) return null;

  return (
    <nav
      aria-label="Table of contents"
      className={`bg-white border border-[#17191A]/10 p-6 rounded-sm ${className}`}
    >
      <div className="font-mono text-[10px] uppercase font-bold tracking-widest text-[#3D9D99] mb-4">
        TABLE OF CONTENTS
      </div>
      <ul className="space-y-2.5 text-xs font-sans">
        {items.map((item) => {
          const isActive = activeId === item.id;
          return (
            <li
              key={item.id}
              className={item.level === 3 ? 'pl-3' : ''}
            >
              <a
                href={`#${item.id}`}
                className={`block transition-all leading-snug ${
                  isActive
                    ? 'text-[#3D9D99] font-medium translate-x-1'
                    : 'text-[#57595B] hover:text-[#17191A]'
                }`}
              >
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
