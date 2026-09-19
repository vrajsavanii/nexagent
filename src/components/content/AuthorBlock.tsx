import React from 'react';
import { AuthorItem } from '@/content/types';

export interface AuthorBlockProps {
  author: AuthorItem;
  className?: string;
}

export function AuthorBlock({ author, className = '' }: AuthorBlockProps) {
  return (
    <div className={`flex items-start gap-4 p-6 bg-white border border-[#17191A]/10 rounded-sm ${className}`}>
      <div className="w-12 h-12 rounded-full bg-[#17191A] text-white flex items-center justify-center font-display text-sm font-semibold shrink-0">
        NX
      </div>
      <div>
        <div className="flex items-center gap-2 mb-1">
          <h4 className="font-display text-sm font-semibold text-[#17191A]">
            {author.name}
          </h4>
          <span className="font-mono text-[10px] uppercase text-[#9E7B78] bg-[#9E7B78]/10 px-2 py-0.5 rounded font-semibold">
            Verified Group
          </span>
        </div>
        <p className="font-mono text-xs text-[#57595B] mb-2">
          {author.role} — {author.organization}
        </p>
        <p className="font-sans text-xs text-[#57595B] leading-relaxed">
          {author.bio}
        </p>
      </div>
    </div>
  );
}
