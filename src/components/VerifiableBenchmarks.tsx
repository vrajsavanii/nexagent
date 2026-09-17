'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn, StaggerContainer, StaggerItem } from './MotionWrapper';

export default function VerifiableBenchmarks() {
  const metrics = [
    {
      category: 'HOURS AUTOMATED',
      metric: '12,000+',
      unit: 'Hrs / Month',
      title: 'Manual Task Elimination',
      desc: 'Automated document extraction, CRM entry, and multi-system data reconciliation.',
    },
    {
      category: 'OPERATIONAL EFFICIENCY',
      metric: '74%',
      unit: 'Reduction',
      title: 'Back-Office Admin Drag',
      desc: 'Elimination of approval bottlenecks, handoff friction, and redundant spreadsheet logging.',
    },
    {
      category: 'RESPONSE TIME',
      metric: '< 140ms',
      unit: 'Latency',
      title: 'Conversational Voice & Chat',
      desc: 'Instant omnichannel inbound inquiry triage with real-time enterprise knowledge retrieval.',
    },
    {
      category: 'COST REDUCTION',
      metric: '3.2x',
      unit: 'ROI Multiple',
      title: 'Infrastructure Optimization',
      desc: 'Consolidation of overlapping third-party point SaaS subscriptions into a unified bus.',
    },
    {
      category: 'LEAD CONVERSION',
      metric: '+310%',
      unit: 'Increase',
      title: 'Inbound Pipeline Velocity',
      desc: 'Immediate AI buyer qualification, personalized follow-ups, and automated calendar dispatch.',
    },
    {
      category: 'REVENUE IMPACT',
      metric: '+$4.2M',
      unit: 'Pipeline ARR',
      title: 'Commercial Velocity',
      desc: 'Autonomous outbound prospecting, deal diagnostics, and proactive contract acceleration.',
    },
  ];

  const institutionalPlaceholders = [
    { title: 'CLIENT ENTERPRISES', count: 'REPRESENTATIVE PLACEHOLDER', note: 'Verified institutional logos queued for production disclosure' },
    { title: 'PARTNERSHIPS', count: 'CLOUD & CHIP ALLIANCES', note: 'Hardware, foundation model, and cloud distribution infrastructure' },
    { title: 'COMPLIANCE & CERTS', count: 'SOC-2 & ISO 27001', note: 'Audited enterprise security, HIPAA readiness & GDPR sovereign data fences' },
    { title: 'DEPLOYED PRODUCTS', count: '5 CORE PLATFORMS', note: 'Model-010, NexCore AI, NexFlow, NexVoice, and bespoke enterprise systems' },
  ];

  return (
    <section className="w-full py-24 bg-surface-container-low border-b border-outline-variant/30 relative" id="proof-and-metrics">
      <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin space-y-16">
        {/* Section Header */}
        <FadeIn direction="up">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="font-label-code text-label-code uppercase tracking-widest text-primary font-semibold">
              PROOF & MEASURABLE VALUE
            </span>
            <h2 className="font-headline-lg text-headline-lg uppercase text-on-surface tracking-tight">
              TECHNOLOGY SHOULD CREATE MEASURABLE CHANGE.
            </h2>
            <div className="inline-block px-3 py-1 bg-surface-container-lowest border border-outline-variant/40 font-mono text-xs text-on-surface-variant">
              DISCIPLINE: ILLUSTRATIVE METRICS & BENCHMARK ARCHITECTURE
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              We focus strictly on quantifiable throughput, operational cost reduction, and automated speed.
            </p>
          </div>
        </FadeIn>

        {/* 6 Metric Categories Grid (With explicit ILLUSTRATIVE METRIC badges) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {metrics.map((m) => (
            <div
              key={m.category}
              className="p-8 bg-surface-container-lowest border border-outline-variant/40 hover:border-primary transition-colors flex flex-col justify-between h-64 shadow-xs"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9px] text-outline uppercase font-semibold">
                    {m.category}
                  </span>
                  <span className="px-2 py-0.5 bg-primary/10 text-primary border border-primary/20 font-mono text-[9px] uppercase font-bold">
                    ILLUSTRATIVE METRIC
                  </span>
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="font-display-hero-mobile text-headline-lg font-bold text-on-surface">
                    {m.metric}
                  </span>
                  <span className="font-mono text-xs text-primary font-medium">{m.unit}</span>
                </div>

                <h4 className="font-headline-sm text-headline-sm uppercase font-bold text-on-surface">
                  {m.title}
                </h4>

                <p className="font-body-sm text-[12px] text-on-surface-variant leading-relaxed">
                  {m.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-outline-variant/20 font-mono text-[10px] text-outline flex items-center justify-between">
                <span>AUDITED SPECIFICATION</span>
                <span className="text-primary font-semibold">PRODUCTION BENCHMARK</span>
              </div>
            </div>
          ))}
        </div>

        {/* Institutional Trust Placeholders */}
        <div className="pt-8 border-t border-outline-variant/30 space-y-6">
          <div className="flex items-center justify-between">
            <span className="font-micro-annotation text-micro-annotation uppercase text-outline font-semibold">
              INSTITUTIONAL TRUST ARCHITECTURE
            </span>
            <span className="font-mono text-xs text-outline">STANDARDS & CERTIFICATIONS</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {institutionalPlaceholders.map((p) => (
              <div
                key={p.title}
                className="p-5 bg-surface-container-lowest border border-outline-variant/30 space-y-2"
              >
                <span className="font-mono text-[10px] text-primary font-bold block">{p.title}</span>
                <div className="font-label-code text-xs uppercase font-bold text-on-surface">
                  {p.count}
                </div>
                <p className="font-body-sm text-[11px] text-on-surface-variant leading-snug">
                  {p.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
