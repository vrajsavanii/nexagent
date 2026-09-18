'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/MotionWrapper';
import { Breadcrumbs } from '@/components/content';

export default function AboutPage() {
  const principles = [
    {
      num: '01',
      title: 'Precision Engineering Over Speculative Hype',
      desc: 'We do not build fragile prototypes or surface-level wrapper bots. Every automation, data pipeline, and software architecture we deploy is engineered for deterministic, reliable execution in live business environments.',
    },
    {
      num: '02',
      title: 'Systems Thinking & Compounding Leverage',
      desc: 'Fragmented tools create compounding friction. We view businesses as interconnected operating systems, transforming manual, repetitive handoffs into cohesive digital workflows that compound operational efficiency over time.',
    },
    {
      num: '03',
      title: 'Data Privacy & Strict Boundaries',
      desc: 'Enterprise technology must respect confidential boundaries. Client proprietary data, internal documents, and business processes are protected with strict security controls and never used to train public models without consent.',
    },
    {
      num: '04',
      title: 'Founder-Led Direct Engagement',
      desc: 'Zero agency bloat or multi-layered account management handoffs. Our two co-founders personally oversee technical architecture and client engagements with total technical conviction and transparent ownership.',
    },
  ];

  const processPhases = [
    { num: '01', name: 'Discover', desc: 'Understand the business, workflows, software ecosystem, and core operational constraints.' },
    { num: '02', name: 'Design', desc: 'Map optimal data flows, system architecture, security guardrails, and automation logic.' },
    { num: '03', name: 'Build', desc: 'Develop custom software, AI agents, automated pipelines, and bi-directional connectors.' },
    { num: '04', name: 'Integrate', desc: 'Connect the solution directly into your existing CRMs, ERPs, databases, and communication channels.' },
    { num: '05', name: 'Deploy', desc: 'Launch into live operation with comprehensive verification, edge-case testing, and zero workflow interruption.' },
    { num: '06', name: 'Optimize', desc: 'Continuously measure throughput, tune response accuracy, and scale system capacity as business demands expand.' },
  ];

  const founders = [
    {
      name: 'Vraj Savani',
      role: 'Co-Founder (Equal Ownership)',
      desc: 'Directs systems architecture, workflow orchestration, and technology strategy across NexAgent’s client engagements and internal product development.',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Manthan Kachhadiya',
      role: 'Co-Founder (Equal Ownership)',
      desc: 'Leads distributed backend engineering, cloud integration architectures, and deterministic data pipelines connecting client operations with modern AI capabilities.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#FBF5F3] text-[#2A2B2E] pt-28 pb-24">
      {/* ── Hero Section ─────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pt-10 pb-16 border-b border-[rgba(205,211,219,0.5)]">
        <Breadcrumbs items={[{ label: 'About' }]} className="mb-6" />

        <FadeIn>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[rgba(205,211,219,0.7)] shadow-2xs mb-6">
            <span className="w-2 h-2 rounded-full bg-[#3D9D99]" />
            <span className="font-mono text-xs uppercase tracking-wider text-[#2A2B2E] font-bold">
              FOUNDER-LED TECHNOLOGY COMPANY
            </span>
          </div>

          <h1 className="font-sans text-4xl sm:text-6xl uppercase font-black tracking-tight text-[#2A2B2E] max-w-4xl leading-[1.05]">
            AI-POWERED TECHNOLOGY FOR BUSINESSES THAT WANT TO{' '}
            <span className="font-light italic text-[#3D9D99]">OPERATE BETTER.</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-[#738290] max-w-3xl leading-relaxed font-normal">
            NexAgent builds intelligent software, automation, and digital systems that help businesses reduce manual work, connect fragmented workflows, and scale their operations. Founded and owned equally by two co-founders, we combine tailored client solutions with reusable internal technology.
          </p>
        </FadeIn>
      </section>

      {/* ── Who NexAgent Is & What We Build ───────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <FadeIn className="bg-white rounded-3xl border border-[rgba(205,211,219,0.5)] p-8 sm:p-12 shadow-[0_12px_32px_-4px_rgba(42,43,46,0.06)] grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-block px-3 py-1 rounded-full bg-[rgba(61,157,153,0.10)] text-[#3D9D99] text-xs uppercase tracking-wider font-bold">
              Company Definition &amp; Positioning
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl text-[#2A2B2E] font-extrabold leading-snug">
              Intelligent Technology. <br />
              <span className="italic font-normal text-[#3D9D99]">Real Business Systems. Automation That Works.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#738290] leading-relaxed">
              NexAgent is not merely an automation agency, a software shop, or an AI consultancy. We operate at the intersection of AI, software engineering, workflow automation, and digital infrastructure — applying technical capabilities directly to real-world business problems.
            </p>
            <p className="text-sm sm:text-base text-[#738290] leading-relaxed">
              We work with organizations of all sizes: from solo operators and small businesses to MSMEs, startups, B2B companies, and growing enterprises. We are intentionally industry-flexible, with experience spanning Healthcare, Hospitality, B2B Services, Retail, and Financial Technology.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-md rounded-2xl overflow-hidden border border-[rgba(205,211,219,0.5)] bg-[#2A2B2E] p-8 text-white space-y-4 shadow-md">
              <div className="flex items-center gap-2">
                <span className="text-2xl text-[#3D9D99] font-black">✦</span>
                <span className="font-sans font-black text-lg tracking-tight uppercase">
                  NEXAGENT
                </span>
              </div>
              <p className="text-xs text-[#BDC9C7] leading-relaxed font-mono">
                AI + Software + Automation + Digital Systems
              </p>
              <div className="pt-2 border-t border-white/10 space-y-2.5 text-xs text-[#CDD3DB]">
                <div className="flex items-center justify-between">
                  <span className="text-[#84888A]">Ownership:</span>
                  <span className="font-semibold text-white">Two Equal Co-Founders</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#84888A]">Operating Model:</span>
                  <span className="font-semibold text-[#3D9D99]">Hybrid (Client + Internal)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#84888A]">Orientation:</span>
                  <span className="font-semibold text-white">Global From Day One</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#84888A]">Commercial Focus:</span>
                  <span className="font-semibold text-white">US · UK · UAE · India</span>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ── The Hybrid Model ────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-[rgba(205,211,219,0.5)]">
        <FadeIn className="mb-10 max-w-3xl">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#3D9D99] block mb-2">
            OPERATING ARCHITECTURE
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-[#2A2B2E]">
            Building Our Own Technology. Building For Clients.
          </h2>
          <p className="text-sm sm:text-base text-[#738290] mt-3 leading-relaxed">
            NexAgent operates through a hybrid technology model that balances bespoke client work with the long-term engineering of reusable software platforms.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 bg-white rounded-3xl border border-[rgba(205,211,219,0.5)] shadow-xs space-y-3">
            <span className="font-mono text-xs font-bold text-[#3D9D99] uppercase">Category 01</span>
            <h3 className="font-sans text-xl font-bold text-[#2A2B2E]">Client Solutions</h3>
            <p className="text-xs sm:text-sm text-[#738290] leading-relaxed">
              Bespoke workflow automation, AI agents, voice systems, and custom software integrations built directly to customer operational requirements.
            </p>
            <span className="inline-block px-2.5 py-1 rounded-md bg-[#F4F5F7] text-[11px] font-mono text-[#5E6572] mt-2">
              Current Service
            </span>
          </div>

          <div className="p-8 bg-white rounded-3xl border border-[rgba(205,211,219,0.5)] shadow-xs space-y-3">
            <span className="font-mono text-xs font-bold text-[#3D9D99] uppercase">Category 02</span>
            <h3 className="font-sans text-xl font-bold text-[#2A2B2E]">Custom Technology</h3>
            <p className="text-xs sm:text-sm text-[#738290] leading-relaxed">
              Tailored business management systems, unified CRMs, intelligence dashboards, and API middleware designed around existing company infrastructure.
            </p>
            <span className="inline-block px-2.5 py-1 rounded-md bg-[#F4F5F7] text-[11px] font-mono text-[#5E6572] mt-2">
              Current Capability
            </span>
          </div>

          <div className="p-8 bg-white rounded-3xl border border-[rgba(205,211,219,0.5)] shadow-xs space-y-3">
            <span className="font-mono text-xs font-bold text-[#3D9D99] uppercase">Category 03</span>
            <h3 className="font-sans text-xl font-bold text-[#2A2B2E]">Internal Products</h3>
            <p className="text-xs sm:text-sm text-[#738290] leading-relaxed">
              Reusable automation frameworks, low-latency conversational voice engines, and intelligent document parsing platforms developed for long-term scale.
            </p>
            <span className="inline-block px-2.5 py-1 rounded-md bg-[rgba(61,157,153,0.10)] text-[11px] font-mono text-[#3D9D99] font-semibold mt-2">
              In Development &amp; Beta
            </span>
          </div>
        </div>
      </section>

      {/* ── How We Work: 6-Phase Execution ───────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-[rgba(205,211,219,0.5)]">
        <FadeIn className="mb-10 max-w-3xl">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#3D9D99] block mb-2">
            METHODOLOGY
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-[#2A2B2E]">
            From Idea to Deployed System
          </h2>
          <p className="text-sm sm:text-base text-[#738290] mt-3 leading-relaxed">
            Every project follows a structured six-stage lifecycle engineered to minimize operational disruption and ensure deterministic reliability.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processPhases.map((phase) => (
            <div
              key={phase.num}
              className="p-6 bg-white rounded-2xl border border-[rgba(205,211,219,0.5)] shadow-xs space-y-2"
            >
              <span className="font-mono text-xs font-bold text-[#3D9D99]">{phase.num}</span>
              <h3 className="font-sans text-lg font-bold text-[#2A2B2E]">{phase.name}</h3>
              <p className="text-xs text-[#5E6572] leading-relaxed">{phase.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Operating Principles ─────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-[rgba(205,211,219,0.5)]">
        <FadeIn className="mb-10 max-w-2xl">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#3D9D99] block mb-2">
            PHILOSOPHY
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-[#2A2B2E]">
            Our Engineering Philosophy
          </h2>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {principles.map((pr) => (
            <StaggerItem key={pr.num}>
              <div className="p-8 bg-white rounded-3xl border border-[rgba(205,211,219,0.5)] shadow-[0_10px_28px_-4px_rgba(42,43,46,0.05)] h-full flex flex-col justify-between space-y-4 hover:border-[#3D9D99]/40 transition-all">
                <span className="font-mono text-2xl font-black text-[#3D9D99]">{pr.num}</span>
                <div>
                  <h3 className="font-sans text-xl font-bold text-[#2A2B2E]">{pr.title}</h3>
                  <p className="text-xs sm:text-sm text-[#738290] mt-2 leading-relaxed">{pr.desc}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* ── Founders & Ownership ─────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-[rgba(205,211,219,0.5)]">
        <FadeIn className="mb-10 max-w-3xl">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#3D9D99] block mb-2">
            FOUNDERS &amp; OWNERSHIP
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-[#2A2B2E]">
            The People Building NexAgent
          </h2>
          <p className="text-sm sm:text-base text-[#738290] mt-3 leading-relaxed">
            Founded by two co-founders with equal ownership, NexAgent is being built around a simple principle: use technology to remove unnecessary complexity from the way businesses operate.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {founders.map((f, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-white border border-[rgba(205,211,219,0.5)] shadow-[0_10px_28px_-4px_rgba(42,43,46,0.05)] flex flex-col sm:flex-row items-center gap-6"
            >
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden bg-[#2A2B2E]/10 flex-shrink-0">
                <Image
                  src={f.image}
                  alt={f.name}
                  fill
                  className="object-cover grayscale contrast-125"
                />
              </div>
              <div className="space-y-1.5 text-center sm:text-left">
                <h3 className="font-sans font-extrabold text-xl text-[#2A2B2E]">{f.name}</h3>
                <p className="text-xs font-bold text-[#3D9D99]">{f.role}</p>
                <p className="text-xs text-[#738290] leading-relaxed pt-1">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Built For The Long Term ────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-[rgba(205,211,219,0.5)]">
        <FadeIn className="bg-white rounded-3xl border border-[rgba(205,211,219,0.5)] p-8 sm:p-12 shadow-xs space-y-6">
          <span className="font-mono text-xs uppercase tracking-wider text-[#3D9D99] font-bold">
            LONG-TERM DIRECTION &amp; AMBITION
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-[#2A2B2E]">
            Built For The Long Term
          </h2>
          <p className="text-sm sm:text-base text-[#738290] leading-relaxed">
            We are building NexAgent for the long term. We intend to develop NexAgent into a globally significant technology company, creating the foundation for products, platforms, and future technology businesses.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div className="p-6 rounded-2xl bg-[#F7F7F5] border border-[rgba(205,211,219,0.4)] space-y-2">
              <span className="font-mono text-xs font-bold text-[#2A2B2E] uppercase">Current Reality</span>
              <p className="text-xs sm:text-sm text-[#5E6572] leading-relaxed">
                A founder-led technology company owned equally by two co-founders, actively delivering AI-powered software, automation systems, and custom engineering for businesses across multiple industries.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#F7F7F5] border border-[rgba(205,211,219,0.4)] space-y-2">
              <span className="font-mono text-xs font-bold text-[#3D9D99] uppercase">Future Direction</span>
              <p className="text-xs sm:text-sm text-[#5E6572] leading-relaxed">
                Expanding our reusable software platforms, developing specialized operating platforms, and growing an international ecosystem of intelligent business technologies.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ── Global Ambition & Final CTA ──────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <FadeIn className="bg-[#2A2B2E] text-white rounded-3xl p-8 sm:p-14 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-3 max-w-xl text-center md:text-left">
            <span className="font-mono text-xs uppercase tracking-wider text-[#3D9D99] font-bold">
              GLOBAL AMBITION
            </span>
            <h2 className="font-sans text-2xl sm:text-4xl uppercase font-extrabold leading-tight">
              Ready To Build A Better System?
            </h2>
            <p className="text-xs sm:text-sm text-[#BDC9C7] leading-relaxed">
              Tell us where your business is losing time, dealing with unnecessary manual friction, or leaving technology underutilized. We’ll explore what can be automated, built, or connected.
            </p>
          </div>

          <Link
            href="/book-a-strategy-call"
            className="px-8 py-3.5 bg-[#3D9D99] hover:bg-[#2E827E] text-white rounded-full text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap shadow-md"
          >
            Book a Strategy Call
          </Link>
        </FadeIn>
      </section>
    </div>
  );
}
