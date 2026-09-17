'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn } from './MotionWrapper';

export default function BeforeAfterAudit() {
  const [activeView, setActiveView] = useState<'TRANSFORMATION' | 'BEFORE' | 'AFTER'>('TRANSFORMATION');

  const beforeItems = [
    { label: 'Manual processes', desc: 'Relying on staff to remember handoffs & next steps', icon: 'pan_tool' },
    { label: 'Spreadsheets', desc: 'Siloed data exports, copy-paste errors & broken VLOOKUPs', icon: 'table_rows' },
    { label: 'Emails', desc: 'Critical communication trapped in unread, messy personal inboxes', icon: 'mail' },
    { label: 'Phone calls', desc: 'Missed inbound calls and repetitive manual phone tag', icon: 'call' },
    { label: 'Data entry', desc: 'Hundreds of hours wasted retyping customer & order data', icon: 'keyboard' },
    { label: 'Disconnected tools', desc: 'Dozens of point SaaS tools that cannot share live state', icon: 'link_off' },
    { label: 'Delayed responses', desc: 'Prospects wait 24-48 hours for inquiry responses and quotes', icon: 'schedule' },
    { label: 'Human bottlenecks', desc: 'Entire revenue cycles halted waiting for one person to approve', icon: 'hourglass_empty' },
  ];

  const afterItems = [
    { label: 'AI agents', desc: '24/7 autonomous workers reasoning, responding & triaging', icon: 'smart_toy' },
    { label: 'Automation', desc: 'Headless event bus executing multi-system business logic', icon: 'bolt' },
    { label: 'Unified systems', desc: 'Single living system of record synchronized across all tools', icon: 'hub' },
    { label: 'Real-time analytics', desc: 'Sub-second telemetry on revenue, margins & efficiency', icon: 'monitoring' },
    { label: 'Intelligent workflows', desc: 'Self-healing business rules adapting to exceptions instantly', icon: 'account_tree' },
    { label: 'Automated communication', desc: 'Instant multi-channel conversational voice, SMS & email', icon: 'forum' },
    { label: 'Connected infrastructure', desc: 'Sovereign cloud & edge fabric with enterprise compliance', icon: 'cloud_sync' },
    { label: 'Decision intelligence', desc: 'Predictive forecasting & automated executive steering', icon: 'psychology' },
  ];

  return (
    <section className="w-full py-24 bg-surface border-b border-outline-variant/30 relative" id="transformation">
      <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin space-y-12">
        {/* Section Header */}
        <FadeIn direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-outline-variant/30">
            <div>
              <span className="font-label-code text-label-code uppercase tracking-widest text-primary font-semibold">
                THE SYSTEMIC TRANSFORMATION
              </span>
              <h2 className="font-headline-lg text-headline-lg uppercase text-on-surface tracking-tight mt-2">
                LESS FRICTION. <span className="text-primary italic font-light">MORE INTELLIGENCE.</span>
              </h2>
            </div>
            <div className="font-mono text-xs text-on-surface-variant uppercase tracking-wider">
              FROM OPERATIONAL FRAGMENTATION TO INTEGRATED INTELLIGENCE
            </div>
          </div>
        </FadeIn>

        {/* View Toggle Tabs */}
        <div className="flex items-center justify-between border-b border-outline-variant/30 pb-4">
          <div className="flex items-center gap-2">
            {(['TRANSFORMATION', 'BEFORE', 'AFTER'] as const).map((view) => (
              <button
                key={view}
                onClick={() => setActiveView(view)}
                className={`px-4 py-2 font-label-code text-xs uppercase tracking-wider transition-all ${
                  activeView === view
                    ? 'bg-on-surface text-surface font-semibold shadow-sm'
                    : 'bg-surface-container-low text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
                }`}
              >
                {view}
              </button>
            ))}
          </div>

          <span className="font-mono text-xs text-outline hidden sm:inline-block">
            REORGANIZATION AUDIT // 8 VECTORS
          </span>
        </div>

        {/* Transformation Content Display */}
        {activeView === 'TRANSFORMATION' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Left: The Before Architecture */}
            <div className="p-8 bg-surface-container-low border border-outline-variant/40 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-outline-variant/30">
                  <span className="font-label-code text-label-code uppercase font-semibold text-outline">
                    BEFORE // LEGACY FRAGMENTATION
                  </span>
                  <span className="px-2 py-0.5 bg-outline/10 text-outline font-mono text-[10px] uppercase">
                    HIGH FRICTION
                  </span>
                </div>

                <div className="space-y-2.5">
                  {beforeItems.map((item) => (
                    <div
                      key={item.label}
                      className="p-3 bg-surface-container-lowest/80 border border-outline-variant/30 flex items-start gap-3"
                    >
                      <span className="material-symbols-outlined text-outline text-[18px] mt-0.5">
                        {item.icon}
                      </span>
                      <div>
                        <h4 className="font-label-code text-xs uppercase font-semibold text-on-surface">
                          {item.label}
                        </h4>
                        <p className="font-body-sm text-[12px] text-on-surface-variant leading-snug">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-surface-container-lowest border border-outline-variant/30 font-mono text-xs text-outline flex items-center justify-between">
                <span>BOTTLENECK DRAG: SEVERE</span>
                <span>DATA INTEGRITY: 42%</span>
              </div>
            </div>

            {/* Right: The After Architecture */}
            <div className="p-8 bg-surface-container-lowest border-2 border-primary/50 space-y-6 flex flex-col justify-between shadow-md">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-outline-variant/30">
                  <span className="font-label-code text-label-code uppercase font-bold text-primary flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                    AFTER // NEXAGENT INTELLIGENT SYSTEM
                  </span>
                  <span className="px-2 py-0.5 bg-primary/10 text-primary font-mono text-[10px] uppercase font-bold">
                    SYNCHRONIZED
                  </span>
                </div>

                <div className="space-y-2.5">
                  {afterItems.map((item) => (
                    <div
                      key={item.label}
                      className="p-3 bg-surface-container-low/60 border border-primary/20 hover:border-primary/50 transition-colors flex items-start gap-3"
                    >
                      <span className="material-symbols-outlined text-primary text-[18px] mt-0.5">
                        {item.icon}
                      </span>
                      <div>
                        <h4 className="font-label-code text-xs uppercase font-bold text-on-surface">
                          {item.label}
                        </h4>
                        <p className="font-body-sm text-[12px] text-on-surface-variant leading-snug">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-primary/10 border border-primary/30 font-mono text-xs text-primary font-semibold flex items-center justify-between">
                <span>OPERATIONAL LEVERAGE: 10X</span>
                <span>DATA INTEGRITY: 100%</span>
              </div>
            </div>
          </div>
        )}

        {/* Solo Views */}
        {activeView === 'BEFORE' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {beforeItems.map((item) => (
              <div key={item.label} className="p-6 bg-surface-container-low border border-outline-variant/40 space-y-3">
                <span className="material-symbols-outlined text-outline text-[24px]">{item.icon}</span>
                <h4 className="font-headline-sm text-headline-sm uppercase font-semibold text-on-surface">
                  {item.label}
                </h4>
                <p className="font-body-sm text-on-surface-variant">{item.desc}</p>
              </div>
            ))}
          </div>
        )}

        {activeView === 'AFTER' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {afterItems.map((item) => (
              <div key={item.label} className="p-6 bg-surface-container-lowest border-2 border-primary/40 space-y-3 shadow-sm">
                <span className="material-symbols-outlined text-primary text-[24px]">{item.icon}</span>
                <h4 className="font-headline-sm text-headline-sm uppercase font-bold text-on-surface">
                  {item.label}
                </h4>
                <p className="font-body-sm text-on-surface-variant">{item.desc}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
