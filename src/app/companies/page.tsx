'use client';

import React from 'react';
import Link from 'next/link';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/MotionWrapper';

export default function CompaniesPage() {
  const companies = [
    {
      id: 'nexcore',
      name: 'NexCore AI',
      category: 'Autonomous Agent Orchestration',
      status: 'Growth Stage',
      headline: 'Autonomous decision systems engineered for complex enterprise operations.',
      description:
        'NexCore builds production-grade agent frameworks that coordinate multi-step cognitive workflows, handle unstructured document extraction, and interface with enterprise software without human bottlenecks.',
      metrics: [
        { label: 'Tasks Executed', val: '18M+' },
        { label: 'Decision Latency', val: '< 180ms' },
        { label: 'Accuracy Benchmark', val: '99.4%' },
      ],
      tags: ['Autonomous Agents', 'RAG Knowledge Graphs', 'Deterministic Guardrails'],
    },
    {
      id: 'nexcloud',
      name: 'NexCloud Infrastructure',
      category: 'Sovereign Cloud & Compute',
      status: 'Enterprise Scale',
      headline: 'Private bare-metal GPU clusters and sovereign edge distribution.',
      description:
        'NexCloud provides dedicated high-performance compute clusters meeting stringent data residency mandates in North America, Europe, the Middle East, and Asia.',
      metrics: [
        { label: 'Global Regions', val: '4 Corridors' },
        { label: 'SLA Availability', val: '99.99%' },
        { label: 'Compliance', val: 'SOC2 / ISO-27001' },
      ],
      tags: ['Sovereign Compute', 'GPU Clustering', 'Zero-Trust Network'],
    },
    {
      id: 'nexflow',
      name: 'NexFlow Automation',
      category: 'Event-Driven Workflow Gateway',
      status: 'Scale-Up',
      headline: 'The connective nervous system linking legacy software to modern AI.',
      description:
        'NexFlow reconciles fragmented business applications, synchronizing ledgers, CRMs, ERPs, and customer channels into deterministic, self-healing event pipelines.',
      metrics: [
        { label: 'Event Throughput', val: '2.5B / mo' },
        { label: 'Mean Event Latency', val: '12ms' },
        { label: 'Manual Ops Reduced', val: '74%' },
      ],
      tags: ['Event Bus', 'State Reconciliation', 'Integration Mesh'],
    },
    {
      id: 'nexvoice',
      name: 'NexVoice Intelligence',
      category: 'Conversational Voice AI',
      status: 'Accelerating',
      headline: 'Sub-400ms conversational voice agents with human-level cadence.',
      description:
        'NexVoice powers patient clinical triage, hospitality reservation desks, and enterprise customer service with multi-lingual, empathetic speech synthesis.',
      metrics: [
        { label: 'Speech Latency', val: '380ms' },
        { label: 'Intent Resolution', val: '96.2%' },
        { label: 'Languages Supported', val: '32' },
      ],
      tags: ['Real-Time Audio', 'Telephony SIP', 'Clinical Speech'],
    },
    {
      id: 'nexdata',
      name: 'NexData Labs',
      category: 'Business Intelligence & Data Mesh',
      status: 'Foundational',
      headline: 'Transforming enterprise data lakes into real-time decision intelligence.',
      description:
        'NexData provides semantic caching, automated anomaly detection, and predictive executive dashboards designed for leadership teams.',
      metrics: [
        { label: 'Data Processed', val: '40TB / day' },
        { label: 'Query Acceleration', val: '8.4x' },
        { label: 'Active Connectors', val: '120+' },
      ],
      tags: ['Data Mesh', 'Semantic Cache', 'Executive Dashboards'],
    },
    {
      id: 'nexventures',
      name: 'NexVentures & Incubator',
      category: 'Strategic Innovation & Capital',
      status: 'Active Syndicate',
      headline: 'Empowering early-stage founders building the future of applied AI.',
      description:
        'We incubate, finance, and provide foundational engineering backing to exceptional engineering founders across fintech, healthcare AI, and intelligent infrastructure.',
      metrics: [
        { label: 'Portfolio Companies', val: '14' },
        { label: 'Engineering Pool', val: '$25M' },
        { label: 'Syndicate Partners', val: 'Global' },
      ],
      tags: ['Incubation', 'Growth Equity', 'Engineering Grants'],
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#F7F7F5] text-[#17191A] pt-28 pb-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pt-12 pb-16 border-b border-[#17191A]/10">
        <FadeIn>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#3D9D99]" />
            <span className="font-mono text-xs uppercase tracking-wider text-[#57595B]">
              NexAgent Portfolio Directory
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase font-light tracking-tight text-[#17191A] max-w-4xl leading-[1.08]">
            One Parent Group.
            <br />
            <span className="font-normal italic text-[#3D9D99]">Multiple Category Leaders.</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-[#57595B] max-w-2xl leading-relaxed font-sans">
            NexAgent builds, operates, and scales high-conviction technology businesses across artificial
            intelligence, sovereign cloud infrastructure, enterprise SaaS, and conversational voice.
          </p>
        </FadeIn>
      </section>

      {/* Companies Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {companies.map((co) => (
            <StaggerItem key={co.id}>
              <div
                id={co.id}
                className="h-full bg-white rounded-2xl border border-[#17191A]/10 p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group hover:border-[#3D9D99]/40"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-[#17191A]/08">
                    <div>
                      <h2 className="font-display font-semibold text-xl text-[#17191A] tracking-tight">
                        {co.name}
                      </h2>
                      <span className="text-xs font-mono text-[#57595B]">{co.category}</span>
                    </div>
                    <span className="px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider bg-[#F0EFEA] text-[#17191A] rounded-full border border-[#17191A]/10">
                      {co.status}
                    </span>
                  </div>

                  <p className="font-display text-lg text-[#17191A] font-medium leading-snug mt-6">
                    {co.headline}
                  </p>

                  <p className="text-sm text-[#57595B] mt-3 leading-relaxed">
                    {co.description}
                  </p>
                </div>

                <div className="pt-8">
                  {/* Metrics Bar */}
                  <div className="grid grid-cols-3 gap-3 p-3.5 bg-[#F7F7F5] rounded-xl border border-[#17191A]/06 mb-4">
                    {co.metrics.map((m, i) => (
                      <div key={i}>
                        <span className="font-mono text-xs font-semibold text-[#17191A] block">
                          {m.val}
                        </span>
                        <span className="text-[10px] text-[#57595B] font-sans block truncate">
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {co.tags.map((t, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/04 text-[#17191A]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* The Holding Model Philosophy */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 border-t border-[#17191A]/10">
        <FadeIn className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="font-mono text-xs uppercase tracking-wider text-[#3D9D99] font-medium">
              The Federated Model
            </span>
            <h2 className="font-display text-3xl sm:text-4xl uppercase font-light text-[#17191A] leading-tight">
              Why A Technology Parent Company{' '}
              <span className="font-normal italic text-[#3D9D99]">Compounds Value.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#57595B] leading-relaxed">
              Unlike single-product startups that face structural market boundaries, NexAgent operates as an
              interlocking ecosystem. Breakthroughs in our foundational AI models directly accelerate our workflow
              gateways, sovereign cloud infrastructure, and voice intelligence applications.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#17191A] hover:bg-black text-white rounded-full text-xs font-semibold uppercase tracking-wider transition-all"
              >
                <span>Partner with our Group</span>
                <span>→</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 bg-white p-8 rounded-2xl border border-[#17191A]/10 shadow-sm space-y-6">
            <div className="flex items-start gap-4">
              <span className="w-7 h-7 rounded-full bg-[#3D9D99]/15 text-[#3D9D99] flex items-center justify-center font-mono text-xs font-bold shrink-0">
                01
              </span>
              <div>
                <h3 className="font-display text-base font-semibold text-[#17191A]">Shared Engineering Stack</h3>
                <p className="text-xs text-[#57595B] mt-1 leading-relaxed">
                  Every portfolio company builds atop a unified security, authentication, and high-performance compute foundation.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="w-7 h-7 rounded-full bg-[#3D9D99]/15 text-[#3D9D99] flex items-center justify-center font-mono text-xs font-bold shrink-0">
                02
              </span>
              <div>
                <h3 className="font-display text-base font-semibold text-[#17191A]">Long-Term Capital Stewardship</h3>
                <p className="text-xs text-[#57595B] mt-1 leading-relaxed">
                  We are not constrained by quarterly venture fund lifecycles. We build durable operating businesses designed to lead decades.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="w-7 h-7 rounded-full bg-[#3D9D99]/15 text-[#3D9D99] flex items-center justify-center font-mono text-xs font-bold shrink-0">
                03
              </span>
              <div>
                <h3 className="font-display text-base font-semibold text-[#17191A]">Global Cross-Corridor Deployment</h3>
                <p className="text-xs text-[#57595B] mt-1 leading-relaxed">
                  Our operating presence across North America, Europe, the Middle East, and Asia allows products to scale internationally on day one.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
