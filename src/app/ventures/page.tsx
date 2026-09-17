'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/MotionWrapper';
import { PrimaryCTA, ContextualCTA } from '@/components/CtaSystem';
import { trackEvent } from '@/lib/analytics';

export default function VenturesPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    founderName: '',
    email: '',
    sector: 'ai-agents',
    stage: 'seed',
    arr: '$500k - $2M',
    deckUrl: '',
    notes: '',
  });

  const investmentThesis = [
    {
      num: '01',
      title: 'Permanent Capital, Zero Exit Pressure',
      desc: 'Unlike traditional 10-year venture funds, NexAgent operates as an enduring corporate group. We acquire controlling or strategic stakes and hold category-defining businesses indefinitely, prioritizing compounding cash flow and sustainable growth over forced secondary exits.',
    },
    {
      num: '02',
      title: 'The Shared Advantage Flywheel',
      desc: 'Portfolio companies receive instant access to Tier-IV sovereign GPU clusters, proprietary Model-010 inference runtimes, enterprise legal/compliance templates, and cross-portfolio distribution corridors spanning North America, Europe, the Middle East, and Asia.',
    },
    {
      num: '03',
      title: 'Decentralized Autonomy',
      desc: 'We back exceptional founders and preserve their executive velocity. You maintain technical roadmap sovereignty and operational culture while NexAgent provides the institutional balance sheet, enterprise procurement access, and multi-region infrastructure.',
    },
  ];

  const focusAreas = [
    {
      id: 'ai-agents',
      title: 'Autonomous Agentic Systems',
      description: 'Multi-agent frameworks, cognitive workflow orchestration, and domain-specific decision engines operating in high-stakes environments.',
      criteria: ['Demonstrated enterprise POCs', 'Deterministic accuracy guardrails', 'Strong Moat in proprietary data or workflows'],
      ticket: '$1.5M - $12M Investment / Strategic Majority',
    },
    {
      id: 'cloud',
      title: 'Sovereign Compute & Cloud',
      description: 'Bare-metal GPU orchestration, localized edge inference, and zero-trust private cloud enclaves meeting national data residency mandates.',
      criteria: ['Proprietary scheduling algorithms', 'Hardware co-design partnerships', 'Sub-millisecond interconnect architectures'],
      ticket: '$3M - $25M Growth Capital / M&A',
    },
    {
      id: 'saas',
      title: 'Vertical Enterprise SaaS',
      description: 'Mission-critical operating software for unbundled, complex industries including healthcare, supply chain, financial settlement, and legal.',
      criteria: ['Net Revenue Retention > 115%', 'High switching costs', 'Embedded automation opportunities'],
      ticket: '$2M - $18M Acquisition & Scaling',
    },
    {
      id: 'fintech',
      title: 'Autonomous FinTech & Ledger Rails',
      description: 'Algorithmic reconciliation, real-time cross-border settlement, automated underwriting, and cryptographically verified transaction meshes.',
      criteria: ['Direct regulatory authorization or tier-1 bank sponsor', 'Proven transaction throughput', 'Institutional grade compliance'],
      ticket: '$2M - $15M Strategic Capital',
    },
  ];

  const explorationDirections = [
    {
      name: 'Autonomous Agentic Systems',
      sector: 'ai-agents',
      type: 'Incubation Track',
      metrics: 'Domain-Specific Execution',
      summary: 'Cognitive multi-agent architectures automating complex reasoning and high-volume enterprise operations.',
    },
    {
      name: 'Sovereign Cloud & Edge Compute',
      sector: 'cloud',
      type: 'Infrastructure Track',
      metrics: 'Data Residency Compliant',
      summary: 'High-density private GPU clusters and localized inferencing pipelines meeting global regulatory standards.',
    },
    {
      name: 'Vertical Enterprise SaaS',
      sector: 'saas',
      type: 'Strategic Direction',
      metrics: 'Mission-Critical Workflows',
      summary: 'Modern software layers modernizing legacy healthcare, supply chain, and back-office institutions.',
    },
    {
      name: 'Financial Ledger & Clearing Rails',
      sector: 'fintech',
      type: 'Alliance Direction',
      metrics: 'Sub-Second Verification',
      summary: 'Algorithmic cross-border ledger reconciliation and automated treasury settlement infrastructure.',
    },
  ];

  const engagementPathways = [
    {
      id: 'build',
      title: 'Build With NexAgent',
      description: 'Co-develop native agent workflows and applications directly on top of Model-010 inference runtimes with dedicated GPU compute subsidies.',
      idealFor: 'Early-stage AI engineering teams & infrastructure founders.',
      actionLabel: 'Explore Tech Stack',
      actionHref: '/technology',
    },
    {
      id: 'technology',
      title: 'Technology Partnership',
      description: 'Deep architectural interoperability, API integration, and certified vendor validation across the NexAgent Enterprise Operating System.',
      idealFor: 'Enterprise software vendors, cloud platforms, and systems integrators.',
      actionLabel: 'Request Partnership',
      actionHref: '/book-a-strategy-call?interest=partnership',
    },
    {
      id: 'strategic',
      title: 'Strategic Partnership',
      description: 'Industry-scale joint ventures, sovereign cloud deployments, and consortium IP co-development in highly regulated sectors.',
      idealFor: 'Global corporations, government entities, and financial institutions.',
      actionLabel: 'Discuss Strategic Alliance',
      actionHref: '/book-a-strategy-call?interest=enterprise',
    },
    {
      id: 'venture',
      title: 'Venture Discussion',
      description: 'Enduring institutional balance-sheet capital, minority or majority acquisition, and global distribution acceleration.',
      idealFor: 'Founders ($500K - $10M ARR) and high-growth engineering teams.',
      actionLabel: 'Submit For Review',
      actionHref: '#pitch-form',
    },
  ];

  const filteredPortfolio =
    activeFilter === 'all'
      ? explorationDirections
      : explorationDirections.filter((item) => item.sector === activeFilter);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      trackEvent('ventures_pitch_submit', {
        sector: formData.sector,
        stage: formData.stage,
      });

      await fetch('/api/strategy-call', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.founderName,
          email: formData.email,
          company: formData.companyName,
          category: 'VENTURE',
          solution: formData.sector,
          scale: formData.stage,
          context: `[PITCH SUBMISSION] ARR: ${formData.arr} | Deck: ${formData.deckUrl} | Notes: ${formData.notes}`,
          preferredStep: 'VENTURE_REVIEW',
        }),
      });
    } catch {
      // Graceful fallback
    } finally {
      setSubmitting(false);
      setFormSubmitted(true);
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#F7F7F5] text-[#17191A] pt-28 pb-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pt-12 pb-16 border-b border-[#17191A]/10">
        <FadeIn direction="up">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#3D9D99] animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#3D9D99] font-semibold">
              NexAgent Capital & Incubation
            </span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-[#17191A] font-medium leading-[1.05] max-w-4xl">
            BUILDING & ACQUIRING THE NEXT GENERATION OF{' '}
            <span className="italic font-light text-[#3D9D99]">TECHNOLOGY LEADERS.</span>
          </h1>
          <p className="font-sans text-lg sm:text-xl text-[#57595B] max-w-3xl mt-6 leading-relaxed">
            We provide enduring balance-sheet capital, sovereign cloud infrastructure, and global enterprise distribution to founders building category-defining software and AI platforms.
          </p>

          {/* Qualitative Institutional Posture Banner */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 pt-8 border-t border-[#17191A]/10">
            <div>
              <div className="font-display text-2xl sm:text-3xl font-semibold text-[#17191A]">Long-Term</div>
              <div className="font-mono text-xs uppercase text-[#57595B] mt-1">Holding Horizon</div>
            </div>
            <div>
              <div className="font-display text-2xl sm:text-3xl font-semibold text-[#17191A]">Sovereign</div>
              <div className="font-mono text-xs uppercase text-[#57595B] mt-1">Cloud Infrastructure</div>
            </div>
            <div>
              <div className="font-display text-2xl sm:text-3xl font-semibold text-[#17191A]">4 Hubs</div>
              <div className="font-mono text-xs uppercase text-[#57595B] mt-1">USA • UK • UAE • India</div>
            </div>
            <div>
              <div className="font-display text-2xl sm:text-3xl font-semibold text-[#17191A]">Direct</div>
              <div className="font-mono text-xs uppercase text-[#57595B] mt-1">Architect Access</div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Section 01: The Investment Thesis */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 border-b border-[#17191A]/10">
        <FadeIn direction="up">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#3D9D99] font-semibold">
              CAPITAL PHILOSOPHY
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-[#17191A] font-medium">
            How We Partner With Founders
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {investmentThesis.map((item, idx) => (
            <FadeIn key={item.num} direction="up" delay={idx * 0.15}>
              <div className="h-full p-8 bg-white border border-[#17191A]/10 rounded-sm shadow-sm flex flex-col justify-between hover:border-[#3D9D99]/50 transition-all">
                <div>
                  <div className="font-mono text-xs text-[#3D9D99] font-bold mb-4">
                    THESIS // {item.num}
                  </div>
                  <h3 className="font-display text-xl font-medium text-[#17191A] mb-3">
                    {item.title}
                  </h3>
                  <p className="font-sans text-sm text-[#57595B] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Section 02: Core Focus Sectors */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 border-b border-[#17191A]/10">
        <FadeIn direction="up">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#3D9D99] font-semibold">
              MANDATES & DOMAINS
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-[#17191A] font-medium mb-10">
            Active Investment & Acquisition Tracks
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {focusAreas.map((area, idx) => (
            <FadeIn key={area.id} direction="up" delay={idx * 0.1}>
              <div className="p-8 bg-white border border-[#17191A]/10 rounded-sm hover:border-[#3D9D99] transition-all h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-display text-xl font-semibold text-[#17191A]">
                      {area.title}
                    </h3>
                    <span className="px-2.5 py-1 bg-[#3D9D99]/10 text-[#3D9D99] font-mono text-[10px] uppercase font-bold tracking-wider rounded">
                      Active Mandate
                    </span>
                  </div>
                  <p className="font-sans text-sm text-[#57595B] mb-6 leading-relaxed">
                    {area.description}
                  </p>
                  <div className="space-y-2 mb-6">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[#17191A] font-semibold block">
                      Core Evaluation Criteria:
                    </span>
                    {area.criteria.map((c, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#57595B]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#3D9D99]" />
                        <span>{c}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pt-4 border-t border-[#17191A]/10 flex items-center justify-between font-mono text-xs text-[#17191A]">
                  <span className="text-[#57595B]">Target Size:</span>
                  <span className="font-semibold text-[#3D9D99]">{area.ticket}</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Section 03: Areas We Are Exploring (Section 14) */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 border-b border-[#17191A]/10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#3D9D99] font-semibold block mb-2">
              AREAS WE ARE EXPLORING
            </span>
            <h2 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-[#17191A] font-medium">
              Potential Technology Directions & Incubation Tracks
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Businesses' },
              { id: 'ai-agents', label: 'AI Agents' },
              { id: 'cloud', label: 'Cloud' },
              { id: 'saas', label: 'SaaS' },
              { id: 'fintech', label: 'FinTech' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3 py-1 text-xs font-mono uppercase tracking-wider rounded-full transition-all cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-[#17191A] text-white font-medium'
                    : 'bg-white border border-[#17191A]/15 text-[#57595B] hover:text-[#17191A]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredPortfolio.map((item, idx) => (
            <FadeIn key={item.name} direction="up" delay={idx * 0.1}>
              <div className="p-6 bg-white border border-[#17191A]/10 rounded-sm hover:border-[#3D9D99] transition-all">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-display text-lg font-semibold text-[#17191A]">
                    {item.name}
                  </h4>
                  <span className="font-mono text-[10px] uppercase text-[#3D9D99] bg-[#3D9D99]/10 px-2 py-0.5 rounded font-semibold">
                    {item.type}
                  </span>
                </div>
                <p className="font-sans text-xs text-[#57595B] mb-4">
                  {item.summary}
                </p>
                <div className="pt-3 border-t border-[#17191A]/10 font-mono text-[11px] text-[#17191A] font-medium">
                  {item.metrics}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Section 03.5: Strategic Engagement Pathways (Section 14) */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 border-b border-[#17191A]/10">
        <FadeIn direction="up">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#3D9D99] font-semibold">
              PARTNERSHIP ARCHITECTURE
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-[#17191A] font-medium mb-3">
            Four Strategic Engagement Pathways
          </h2>
          <p className="font-sans text-sm text-[#57595B] max-w-2xl mb-12 leading-relaxed">
            Whether you are building next-generation agent infrastructure, scaling vertical SaaS, or exploring an institutional capital alliance, we provide clear pathways for collaboration.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {engagementPathways.map((pathway, idx) => (
            <FadeIn key={pathway.id} direction="up" delay={idx * 0.1}>
              <div className="p-6 bg-white border border-[#17191A]/10 rounded-sm hover:border-[#3D9D99] transition-all flex flex-col justify-between h-full shadow-sm">
                <div>
                  <div className="font-mono text-[10px] uppercase text-[#3D9D99] font-bold tracking-wider mb-2">
                    PATHWAY // 0{idx + 1}
                  </div>
                  <h3 className="font-display text-lg font-semibold text-[#17191A] mb-2">
                    {pathway.title}
                  </h3>
                  <p className="font-sans text-xs text-[#57595B] leading-relaxed mb-4">
                    {pathway.description}
                  </p>
                  <div className="space-y-1 mb-6 text-[11px] font-mono">
                    <div className="text-[#57595B] uppercase text-[10px] tracking-wider">Target Profile:</div>
                    <div className="font-medium text-[#17191A]">{pathway.idealFor}</div>
                  </div>
                </div>
                <div className="pt-4 border-t border-[#17191A]/10">
                  <ContextualCTA
                    href={pathway.actionHref}
                    label={pathway.actionLabel}
                    context={`ventures_pathway_${pathway.id}`}
                    className="w-full text-center block text-xs"
                  />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Section 04: Confidential Pitch Submission Form */}
      <section id="pitch-form" className="max-w-4xl mx-auto px-6 lg:px-10 py-20">
        <FadeIn direction="up">
          <div className="p-8 sm:p-12 bg-white border border-[#17191A]/15 rounded shadow-sm">
            <div className="max-w-xl mx-auto text-center mb-8">
              <span className="font-mono text-xs uppercase tracking-widest text-[#3D9D99] font-semibold block mb-2">
                FOUNDER SUBMISSIONS
              </span>
              <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-[#17191A] font-medium">
                Submit Your Company For Review
              </h3>
              <p className="font-sans text-sm text-[#57595B] mt-2">
                All submissions are held under strict mutual non-disclosure. Our investment committee reviews applications weekly.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-8 text-center bg-[#F0EFEA] border border-[#3D9D99]/30 rounded">
                <div className="w-10 h-10 rounded-full bg-[#3D9D99]/20 text-[#3D9D99] flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                  ✓
                </div>
                <h4 className="font-display text-lg uppercase font-semibold text-[#17191A]">
                  Submission Received
                </h4>
                <p className="font-sans text-xs text-[#57595B] mt-2 max-w-md mx-auto">
                  Thank you for submitting {formData.companyName || 'your company'}. A member of the NexAgent Ventures team will review your deck and respond within 3 business days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider text-[#17191A] font-medium mb-1">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder="e.g. Apex Cognitive Systems"
                      className="w-full px-3.5 py-2.5 bg-[#F7F7F5] border border-[#17191A]/15 rounded text-xs font-sans text-[#17191A] focus:outline-none focus:border-[#3D9D99]"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider text-[#17191A] font-medium mb-1">
                      Founder / CEO Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.founderName}
                      onChange={(e) => setFormData({ ...formData, founderName: e.target.value })}
                      placeholder="e.g. Sarah Lin"
                      className="w-full px-3.5 py-2.5 bg-[#F7F7F5] border border-[#17191A]/15 rounded text-xs font-sans text-[#17191A] focus:outline-none focus:border-[#3D9D99]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider text-[#17191A] font-medium mb-1">
                      Executive Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="founder@company.com"
                      className="w-full px-3.5 py-2.5 bg-[#F7F7F5] border border-[#17191A]/15 rounded text-xs font-sans text-[#17191A] focus:outline-none focus:border-[#3D9D99]"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider text-[#17191A] font-medium mb-1">
                      Sector *
                    </label>
                    <select
                      value={formData.sector}
                      onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#F7F7F5] border border-[#17191A]/15 rounded text-xs font-sans text-[#17191A] focus:outline-none focus:border-[#3D9D99]"
                    >
                      <option value="ai-agents">Autonomous AI & Agents</option>
                      <option value="cloud">Cloud Infrastructure & Compute</option>
                      <option value="saas">Vertical Enterprise SaaS</option>
                      <option value="fintech">FinTech & Ledger Clearing</option>
                      <option value="voice">Conversational & Voice AI</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider text-[#17191A] font-medium mb-1">
                      Current Stage
                    </label>
                    <select
                      value={formData.stage}
                      onChange={(e) => setFormData({ ...formData, stage: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#F7F7F5] border border-[#17191A]/15 rounded text-xs font-sans text-[#17191A] focus:outline-none focus:border-[#3D9D99]"
                    >
                      <option value="preseed">Pre-Seed / Prototype</option>
                      <option value="seed">Seed (First Institutional Round)</option>
                      <option value="seriesA">Series A ($1M - $5M ARR)</option>
                      <option value="profitable">Bootstrapped / Profitable (M&A)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider text-[#17191A] font-medium mb-1">
                      Current ARR or Run-Rate
                    </label>
                    <input
                      type="text"
                      value={formData.arr}
                      onChange={(e) => setFormData({ ...formData, arr: e.target.value })}
                      placeholder="e.g. $1.2M ARR"
                      className="w-full px-3.5 py-2.5 bg-[#F7F7F5] border border-[#17191A]/15 rounded text-xs font-sans text-[#17191A] focus:outline-none focus:border-[#3D9D99]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-[#17191A] font-medium mb-1">
                    Confidential Pitch Deck or Data Room Link
                  </label>
                  <input
                    type="url"
                    value={formData.deckUrl}
                    onChange={(e) => setFormData({ ...formData, deckUrl: e.target.value })}
                    placeholder="https://docsend.com/... or Google Drive Link"
                    className="w-full px-3.5 py-2.5 bg-[#F7F7F5] border border-[#17191A]/15 rounded text-xs font-sans text-[#17191A] focus:outline-none focus:border-[#3D9D99]"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-[#17191A] font-medium mb-1">
                    Executive Summary / Traction Notes
                  </label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Briefly describe what your system solves, your technical moat, and current customer traction."
                    className="w-full px-3.5 py-2.5 bg-[#F7F7F5] border border-[#17191A]/15 rounded text-xs font-sans text-[#17191A] focus:outline-none focus:border-[#3D9D99]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3 bg-[#17191A] hover:bg-[#3D9D99] text-white font-mono text-xs uppercase tracking-wider font-semibold rounded transition-all cursor-pointer shadow disabled:opacity-50"
                >
                  {submitting ? 'Submitting For Review...' : 'Submit For Executive Committee Review →'}
                </button>
              </form>
            )}
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
