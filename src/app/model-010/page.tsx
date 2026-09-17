'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/MotionWrapper';
import { ContextualCTA } from '@/components/CtaSystem';

export default function Model010Page() {
  const [taskVolume, setTaskVolume] = useState(2500000); // 2.5M tasks default
  const [selectedDomain, setSelectedDomain] = useState('financial');

  const domainConfigs: Record<string, { label: string; genericCost: number; m010Cost: number; latency: number; accuracy: number }> = {
    financial: {
      label: 'Financial Ledger & AML Audit',
      genericCost: 3.85,
      m010Cost: 0.82,
      latency: 88,
      accuracy: 99.8,
    },
    healthcare: {
      label: 'Clinical SOAP & EHR Dispatch',
      genericCost: 4.20,
      m010Cost: 0.94,
      latency: 110,
      accuracy: 99.6,
    },
    supplychain: {
      label: 'ERP & Autonomous Procurement',
      genericCost: 3.40,
      m010Cost: 0.76,
      latency: 74,
      accuracy: 99.9,
    },
    voice: {
      label: 'Sub-400ms Voice Agent Cadence',
      genericCost: 5.10,
      m010Cost: 1.15,
      latency: 62,
      accuracy: 99.4,
    },
  };

  const currentCfg = domainConfigs[selectedDomain];
  const genericTotalCost = ((taskVolume / 1000000) * currentCfg.genericCost * 12).toFixed(0);
  const m010TotalCost = ((taskVolume / 1000000) * currentCfg.m010Cost * 12).toFixed(0);
  const annualSavings = (Number(genericTotalCost) - Number(m010TotalCost)).toLocaleString();

  const architectureSpecs = [
    {
      code: 'SPEC 01',
      title: '16-Head Sparse MoE Routing',
      desc: 'Dynamic neural routing that assigns cognitive tasks only to specialized parameter enclaves, reducing compute overhead by 68% while elevating domain precision.',
    },
    {
      code: 'SPEC 02',
      title: 'Deterministic Action Guardrails',
      desc: 'Pre-flight mathematical verification sandbox. Autonomous actions, API writes, and ledger commits are verified against deterministic schemas before execution.',
    },
    {
      code: 'SPEC 03',
      title: '1M-Token Hybrid Memory Graph',
      desc: 'Seamless dual-tier memory combining high-speed sliding attention with persistent enterprise knowledge graphs for zero loss of multi-month context.',
    },
    {
      code: 'SPEC 04',
      title: 'Sovereign Enclave Execution',
      desc: 'Weights and activations execute inside dedicated, air-gapped hardware enclaves. Client data is never cached, logged, or utilized for foundation retraining.',
    },
  ];

  const benchmarks = [
    { metric: 'Deterministic Tool Execution Accuracy', m010: '99.7%', genericA: '89.2%', genericB: '86.4%' },
    { metric: 'Complex Multi-Step Workflow Recovery', m010: '98.4%', genericA: '76.1%', genericB: '72.8%' },
    { metric: 'Strict JSON & Schema Adherence', m010: '99.98%', genericA: '94.5%', genericB: '93.1%' },
    { metric: 'Time-to-First-Token (P99 Latency)', m010: '88ms', genericA: '320ms', genericB: '380ms' },
    { metric: 'Effective Cost per 1M Operations', m010: '$0.85', genericA: '$3.00', genericB: '$3.75' },
  ];

  return (
    <div className="w-full min-h-screen bg-[#F7F7F5] text-[#17191A] pt-28 pb-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pt-12 pb-16 border-b border-[#17191A]/10">
        <FadeIn direction="up">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#3D9D99] animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#3D9D99] font-semibold">
              NexAgent Proprietary AI Engine
            </span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-[#17191A] font-medium leading-[1.05] max-w-4xl">
            MODEL-010 // THE AUTONOMOUS{' '}
            <span className="italic font-light text-[#3D9D99]">NEURAL RUNTIME.</span>
          </h1>
          <p className="font-sans text-lg sm:text-xl text-[#57595B] max-w-3xl mt-6 leading-relaxed">
            Engineered exclusively for high-stakes enterprise workflows. Model-010 replaces speculative probabilistic guessing with deterministic execution, sub-100ms inference, and mathematical safety guardrails.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-8">
            <ContextualCTA
              label="Request Product Discussion"
              href="/book-a-strategy-call"
              location="model010_hero"
              variant="primary"
            />
            <ContextualCTA
              label="Explore Product Stack"
              href="/technology"
              location="model010_hero"
              variant="secondary"
            />
          </div>
        </FadeIn>
      </section>

      {/* Section 01: Core Architecture Pillars */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 border-b border-[#17191A]/10">
        <FadeIn direction="up">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#3D9D99] font-semibold">
              SYSTEM ARCHITECTURE
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-[#17191A] font-medium mb-10">
            Engineered for Zero Enterprise Failure
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {architectureSpecs.map((spec, idx) => (
            <FadeIn key={spec.code} direction="up" delay={idx * 0.1}>
              <div className="p-6 bg-white border border-[#17191A]/10 rounded-sm hover:border-[#3D9D99] transition-all h-full flex flex-col justify-between">
                <div>
                  <span className="font-mono text-[10px] uppercase text-[#3D9D99] font-bold block mb-3">
                    {spec.code}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-[#17191A] mb-2">
                    {spec.title}
                  </h3>
                  <p className="font-sans text-xs text-[#57595B] leading-relaxed">
                    {spec.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Section 02: Benchmark Comparative Matrix */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 border-b border-[#17191A]/10">
        <FadeIn direction="up">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#3D9D99] font-semibold">
              RIGOROUS AUDIT
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-[#17191A] font-medium mb-10">
            Model-010 vs Commercial Foundation Models
          </h2>
        </FadeIn>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse bg-white border border-[#17191A]/15 rounded">
            <thead>
              <tr className="bg-[#17191A] text-white font-mono text-xs uppercase tracking-wider">
                <th className="p-4 sm:p-5 font-semibold">Evaluation Dimension</th>
                <th className="p-4 sm:p-5 font-semibold text-[#3D9D99] bg-[#1E2326]">
                  Model-010 (NexAgent)
                </th>
                <th className="p-4 sm:p-5 font-semibold text-white/70">Standard LLM A</th>
                <th className="p-4 sm:p-5 font-semibold text-white/70">Standard LLM B</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#17191A]/10 font-sans text-xs text-[#17191A]">
              {benchmarks.map((b, i) => (
                <tr key={i} className="hover:bg-[#F7F7F5] transition-colors">
                  <td className="p-4 sm:p-5 font-medium">{b.metric}</td>
                  <td className="p-4 sm:p-5 font-mono font-bold text-[#3D9D99] bg-[#3D9D99]/05">
                    {b.m010}
                  </td>
                  <td className="p-4 sm:p-5 font-mono text-[#57595B]">{b.genericA}</td>
                  <td className="p-4 sm:p-5 font-mono text-[#57595B]">{b.genericB}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 03: Interactive Cost & Latency Simulator */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <FadeIn direction="up">
          <div className="p-8 sm:p-12 bg-white border border-[#17191A]/15 rounded shadow-sm">
            <div className="max-w-2xl mb-8">
              <span className="font-mono text-xs uppercase tracking-widest text-[#3D9D99] font-semibold block mb-2">
                SIMULATE ROI & RUNTIME
              </span>
              <h2 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-[#17191A] font-medium">
                Enterprise Volume Simulator
              </h2>
              <p className="font-sans text-xs text-[#57595B] mt-2">
                Model-010’s sparse routing and hardware-co-designed kernels drastically slash inference costs while boosting deterministic accuracy.
              </p>
            </div>

            {/* Controls */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 pb-8 border-b border-[#17191A]/10">
              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-[#17191A] font-medium mb-2">
                  Select Workload Domain:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {Object.keys(domainConfigs).map((k) => (
                    <button
                      key={k}
                      type="button"
                      onClick={() => setSelectedDomain(k)}
                      className={`p-3 text-left rounded text-xs font-sans transition-all cursor-pointer ${
                        selectedDomain === k
                          ? 'bg-[#17191A] text-white font-medium'
                          : 'bg-[#F7F7F5] border border-[#17191A]/15 text-[#57595B] hover:text-[#17191A]'
                      }`}
                    >
                      {domainConfigs[k].label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="font-mono text-xs uppercase tracking-wider text-[#17191A] font-medium">
                    Monthly Operational Task Volume:
                  </label>
                  <span className="font-mono text-xs text-[#3D9D99] font-bold">
                    {(taskVolume / 1000000).toFixed(1)} Million Tasks / Month
                  </span>
                </div>
                <input
                  type="range"
                  min={500000}
                  max={20000000}
                  step={500000}
                  value={taskVolume}
                  onChange={(e) => setTaskVolume(Number(e.target.value))}
                  className="w-full accent-[#3D9D99] cursor-pointer"
                />
                <div className="flex justify-between font-mono text-[10px] text-[#57595B] mt-1">
                  <span>500K</span>
                  <span>10M</span>
                  <span>20M Tasks/mo</span>
                </div>
              </div>
            </div>

            {/* Calculated Output Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 text-center">
              <div className="p-5 bg-[#F7F7F5] rounded border border-[#17191A]/10">
                <div className="font-mono text-[10px] uppercase text-[#57595B] mb-1">
                  Inference Latency (P95)
                </div>
                <div className="font-display text-3xl font-bold text-[#17191A]">
                  {currentCfg.latency} ms
                </div>
                <div className="font-sans text-[11px] text-[#3D9D99] mt-1 font-medium">
                  Sub-second response
                </div>
              </div>

              <div className="p-5 bg-[#F7F7F5] rounded border border-[#17191A]/10">
                <div className="font-mono text-[10px] uppercase text-[#57595B] mb-1">
                  Commit Accuracy
                </div>
                <div className="font-display text-3xl font-bold text-[#17191A]">
                  {currentCfg.accuracy}%
                </div>
                <div className="font-sans text-[11px] text-[#3D9D99] mt-1 font-medium">
                  Verified Guardrails
                </div>
              </div>

              <div className="p-5 bg-[#F7F7F5] rounded border border-[#17191A]/10">
                <div className="font-mono text-[10px] uppercase text-[#57595B] mb-1">
                  Annual Model-010 Run Cost
                </div>
                <div className="font-display text-3xl font-bold text-[#17191A]">
                  ${Number(m010TotalCost).toLocaleString()}
                </div>
                <div className="font-sans text-[11px] text-[#57595B] mt-1">
                  vs ${(Number(genericTotalCost)).toLocaleString()} on generic LLM
                </div>
              </div>

              <div className="p-5 bg-[#3D9D99]/10 rounded border border-[#3D9D99]/30">
                <div className="font-mono text-[10px] uppercase text-[#3D9D99] font-bold mb-1">
                  Net Annual Savings
                </div>
                <div className="font-display text-3xl font-bold text-[#3D9D99]">
                  ${annualSavings}
                </div>
                <div className="font-sans text-[11px] text-[#3D9D99] mt-1 font-semibold">
                  ~78% Infrastructure Savings
                </div>
              </div>
            </div>

            <div className="mt-8 text-center flex flex-wrap items-center justify-center gap-4">
              <ContextualCTA
                label="Request Product Discussion"
                href="/book-a-strategy-call"
                location="model010_bottom"
                variant="primary"
              />
              <ContextualCTA
                label="Talk to NexAgent"
                href="/contact"
                location="model010_bottom"
                variant="secondary"
              />
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
