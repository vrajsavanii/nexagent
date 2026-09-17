import React from 'react';
import { CitationSource } from '@/content/types';

export interface SourceListProps {
  sources?: CitationSource[];
  className?: string;
}

export function SourceList({ sources, className = '' }: SourceListProps) {
  if (!sources || sources.length === 0) return null;

  return (
    <div className={`p-6 bg-[#F7F7F5] border border-[#17191A]/10 rounded-sm my-10 ${className}`}>
      <div className="font-mono text-[10px] uppercase font-bold tracking-widest text-[#57595B] mb-3">
        SOURCES &amp; REFERENCES
      </div>
      <ol className="space-y-2 text-xs font-sans list-decimal list-inside text-[#57595B]">
        {sources.map((src, idx) => (
          <li key={idx} className="leading-relaxed">
            <span className="font-medium text-[#17191A]">{src.title}</span>
            <span className="text-[#84888A]"> — {src.publisher}</span>
            {src.type && (
              <span className="ml-2 font-mono text-[9px] uppercase px-1.5 py-0.5 rounded bg-white border border-[#17191A]/10 text-[#57595B]">
                {src.type}
              </span>
            )}
            {src.url && (
              <a
                href={src.url}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 font-mono text-[10px] text-[#3D9D99] hover:underline"
              >
                [Link ↗]
              </a>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
