import React from 'react';

export interface TechnicalCalloutProps {
  type?: 'spec' | 'architecture' | 'framework' | 'note';
  title: string;
  text: string;
  className?: string;
}

export function TechnicalCallout({
  type = 'spec',
  title,
  text,
  className = '',
}: TechnicalCalloutProps) {
  const getBadge = () => {
    switch (type) {
      case 'spec':
        return { label: 'TECHNICAL SPECIFICATION', color: 'text-[#9E7B78] bg-[#9E7B78]/10 border-[#9E7B78]/30' };
      case 'architecture':
        return { label: 'SYSTEM ARCHITECTURE', color: 'text-indigo-600 bg-indigo-50 border-indigo-200' };
      case 'framework':
        return { label: 'OPERATIONAL FRAMEWORK', color: 'text-amber-700 bg-amber-50 border-amber-200' };
      default:
        return { label: 'TECHNICAL NOTE', color: 'text-[#57595B] bg-[#17191A]/05 border-[#17191A]/10' };
    }
  };

  const badge = getBadge();

  return (
    <div
      className={`p-6 sm:p-7 bg-[#F7F7F5] border-l-4 border-l-[#9E7B78] border border-[#17191A]/10 rounded-sm my-8 shadow-xs ${className}`}
    >
      <div className="flex items-center gap-2 mb-2">
        <span className={`font-mono text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded border ${badge.color}`}>
          {badge.label}
        </span>
      </div>
      <h4 className="font-display text-base sm:text-lg font-semibold text-[#17191A] mb-2">
        {title}
      </h4>
      <p className="font-sans text-xs sm:text-sm text-[#57595B] leading-relaxed">
        {text}
      </p>
    </div>
  );
}
