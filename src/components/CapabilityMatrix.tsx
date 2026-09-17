'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn } from './MotionWrapper';

interface TechCategoryGroup {
  groupName: string;
  groupCode: string;
  disciplines: TechDiscipline[];
}

interface TechDiscipline {
  id: string;
  name: string;
  code: string;
  group: string;
  icon: string;
  summary: string;
  stack: string;
  relatedIds: string[];
}

const techTaxonomy: TechCategoryGroup[] = [
  {
    groupName: 'AI & REASONING',
    groupCode: 'DOM-01',
    disciplines: [
      {
        id: 'ai-systems',
        name: 'AI SYSTEMS',
        code: '01',
        group: 'AI & REASONING',
        icon: 'cognition',
        summary: 'Custom reasoning models, multi-agent frameworks, and domain-tuned generative architectures.',
        stack: 'Fine-Tuned LLMs • Private Embeddings • Neural RAG',
        relatedIds: ['ai-agents', 'voice-ai', 'conversational-ai', 'data'],
      },
      {
        id: 'ai-agents',
        name: 'AI AGENTS',
        code: '02',
        group: 'AI & REASONING',
        icon: 'smart_toy',
        summary: 'Goal-directed autonomous workers executing multi-tool workflows, exceptions, and live negotiations.',
        stack: 'Contextual Tool Execution • Self-Healing Loops • Consensus Validation',
        relatedIds: ['ai-systems', 'automation', 'voice-ai', 'conversational-ai'],
      },
      {
        id: 'voice-ai',
        name: 'VOICE AI',
        code: '03',
        group: 'AI & REASONING',
        icon: 'record_voice_over',
        summary: 'Ultra-low latency conversational voice agents handling phone calls with human nuance and instant CRM sync.',
        stack: '< 140ms Audio Roundtrip • Real-Time Voice Synthesis • Telephony Trunking',
        relatedIds: ['ai-agents', 'conversational-ai', 'sales-tech'],
      },
      {
        id: 'conversational-ai',
        name: 'CONVERSATIONAL AI',
        code: '04',
        group: 'AI & REASONING',
        icon: 'forum',
        summary: 'Omnichannel multi-turn chatbots with live sentiment detection and enterprise knowledge retrieval.',
        stack: 'WhatsApp • SMS • Web Chat • Slack • Microsoft Teams',
        relatedIds: ['voice-ai', 'ai-agents', 'marketing-tech', 'sales-tech'],
      },
    ],
  },
  {
    groupName: 'AUTOMATION & PIPELINES',
    groupCode: 'DOM-02',
    disciplines: [
      {
        id: 'automation',
        name: 'AUTOMATION',
        code: '05',
        group: 'AUTOMATION & PIPELINES',
        icon: 'account_tree',
        summary: 'High-throughput transactional event bus coordinating distributed APIs, webhooks, and core business logic.',
        stack: 'Event-Driven Bus • Idempotent Queues • Sub-10ms Triggers',
        relatedIds: ['ai-agents', 'sales-tech', 'marketing-tech', 'software'],
      },
      {
        id: 'sales-tech',
        name: 'SALES TECHNOLOGY',
        code: '06',
        group: 'AUTOMATION & PIPELINES',
        icon: 'trending_up',
        summary: 'Predictive buyer qualification, autonomous proposal generation, and real-time deal acceleration.',
        stack: 'Autonomous Outbound • Pipeline Velocity Diagnostics • CRM Automation',
        relatedIds: ['marketing-tech', 'automation', 'ai-agents', 'voice-ai'],
      },
      {
        id: 'marketing-tech',
        name: 'MARKETING TECHNOLOGY',
        code: '07',
        group: 'AUTOMATION & PIPELINES',
        icon: 'campaign',
        summary: 'Dynamic asset generation, multichannel automated distribution, and continuous pipeline attribution.',
        stack: 'Attribution Engines • Dynamic Personalization • Multi-Channel Hub',
        relatedIds: ['sales-tech', 'automation', 'data', 'saas'],
      },
    ],
  },
  {
    groupName: 'SOFTWARE & PLATFORMS',
    groupCode: 'DOM-03',
    disciplines: [
      {
        id: 'software',
        name: 'SOFTWARE',
        code: '08',
        group: 'SOFTWARE & PLATFORMS',
        icon: 'terminal',
        summary: 'High-clarity enterprise management cockpits, responsive applications, and distributed microservices.',
        stack: 'Next.js • Distributed Rust • React • High Availability',
        relatedIds: ['saas', 'cloud-infra', 'bi', 'fintech'],
      },
      {
        id: 'saas',
        name: 'SAAS',
        code: '09',
        group: 'SOFTWARE & PLATFORMS',
        icon: 'layers',
        summary: 'Multi-tenant cloud applications engineered with data isolation, tenant RBAC, and automated billing.',
        stack: 'Multi-Tenant Architecture • Global Edge • Single Sign-On',
        relatedIds: ['software', 'cloud-infra', 'sales-tech', 'marketing-tech'],
      },
      {
        id: 'bi',
        name: 'BUSINESS INTELLIGENCE',
        code: '10',
        group: 'SOFTWARE & PLATFORMS',
        icon: 'monitoring',
        summary: 'Executive decision cockpits, predictive anomaly alarms, and real-time operational KPI telemetry.',
        stack: 'Real-Time Telemetry • Predictive Variance Modeling • Board Cockpits',
        relatedIds: ['data', 'software', 'fintech', 'ai-systems'],
      },
    ],
  },
  {
    groupName: 'INFRASTRUCTURE & DATA',
    groupCode: 'DOM-04',
    disciplines: [
      {
        id: 'cloud-infra',
        name: 'CLOUD INFRASTRUCTURE',
        code: '11',
        group: 'INFRASTRUCTURE & DATA',
        icon: 'cloud_queue',
        summary: 'Dedicated private cloud clusters, air-gapped sovereign environments, and resilient edge topology.',
        stack: 'Bare-Metal Fabric • Low-Latency Edge • SOC-2 & ISO Compliant',
        relatedIds: ['ai-systems', 'software', 'data', 'fintech'],
      },
      {
        id: 'data',
        name: 'DATA',
        code: '12',
        group: 'INFRASTRUCTURE & DATA',
        icon: 'database',
        summary: 'Unified data ingestion fabric, real-time ETL pipelines, and neural vector databases for enterprise RAG.',
        stack: 'Snowflake • Vector Stores • Distributed Event Streaming • Zero-Loss Pipelines',
        relatedIds: ['ai-systems', 'bi', 'cloud-infra', 'fintech'],
      },
      {
        id: 'fintech',
        name: 'FINTECH',
        code: '13',
        group: 'INFRASTRUCTURE & DATA',
        icon: 'payments',
        summary: 'Multi-currency payment settlement pipelines, automated invoice reconciliation, and smart dunning.',
        stack: 'Global Payment Gateways • Automated Ledger Audit • Tax Engines',
        relatedIds: ['software', 'cloud-infra', 'data', 'bi'],
      },
    ],
  },
];

const allDisciplines = techTaxonomy.flatMap((g) => g.disciplines);

export default function CapabilityMatrix() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const activeDiscipline = allDisciplines.find((d) => d.id === hoveredId);
  const activeRelated = activeDiscipline ? activeDiscipline.relatedIds : [];

  return (
    <section className="w-full py-24 bg-surface-container-low border-b border-outline-variant/30 relative" id="capabilities">
      <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin space-y-12">
        {/* Section Header */}
        <FadeIn direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-outline-variant/30">
            <div>
              <span className="font-label-code text-label-code uppercase tracking-widest text-primary font-semibold">
                WHAT NEXAGENT BUILDS
              </span>
              <h2 className="font-headline-lg text-headline-lg uppercase text-on-surface tracking-tight mt-2">
                ONE TECHNOLOGY GROUP. <span className="text-primary italic font-light">LIMITLESS POSSIBILITIES.</span>
              </h2>
            </div>
            <p className="font-mono text-xs text-on-surface-variant max-w-sm">
              Hover or focus any discipline to trace its hierarchical synergies across the NexAgent technological constellation.
            </p>
          </div>
        </FadeIn>

        {/* Hierarchical Group Layout (4 Distinct Domains) */}
        <div className="space-y-8">
          {techTaxonomy.map((group) => (
            <div key={group.groupName} className="space-y-3">
              {/* Group Header Label */}
              <div className="flex items-center justify-between border-b border-outline-variant/30 pb-2">
                <span className="font-mono text-[10px] text-primary font-bold uppercase tracking-wider">
                  {group.groupCode} // {group.groupName}
                </span>
                <span className="font-mono text-[10px] text-outline">
                  {group.disciplines.length} DISCIPLINES
                </span>
              </div>

              {/* Disciplines Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {group.disciplines.map((item) => {
                  const isSelf = hoveredId === item.id;
                  const isRelated = activeRelated.includes(item.id);
                  const isSubdued = hoveredId && !isSelf && !isRelated;

                  return (
                    <div
                      key={item.id}
                      tabIndex={0}
                      onMouseEnter={() => setHoveredId(item.id)}
                      onMouseLeave={() => setHoveredId(null)}
                      onFocus={() => setHoveredId(item.id)}
                      onBlur={() => setHoveredId(null)}
                      className={`p-6 border transition-all duration-200 flex flex-col justify-between h-56 cursor-pointer relative focus:outline-none ${
                        isSelf
                          ? 'bg-surface-container-lowest border-primary shadow-lg scale-[1.02] z-10'
                          : isRelated
                          ? 'bg-surface-container-lowest border-primary/50 ring-1 ring-primary/20'
                          : isSubdued
                          ? 'bg-surface-container-lowest/40 border-outline-variant/30 opacity-60'
                          : 'bg-surface-container-lowest/80 border-outline-variant/40 hover:border-outline-variant hover:bg-surface-container-lowest'
                      }`}
                    >
                      {/* Active Indicator Badges */}
                      {isSelf && (
                        <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-primary"></div>
                      )}
                      {isRelated && (
                        <div className="absolute top-0 right-0 w-2 h-2 bg-secondary"></div>
                      )}

                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="material-symbols-outlined text-primary text-[22px]">
                            {item.icon}
                          </span>
                          <span className="font-mono text-[9px] text-outline font-semibold">
                            DISCIPLINE {item.code}
                          </span>
                        </div>

                        <h3 className="font-headline-sm text-headline-sm uppercase font-bold text-on-surface tracking-tight">
                          {item.name}
                        </h3>

                        <p className="font-body-sm text-[12px] text-on-surface-variant leading-snug line-clamp-3">
                          {item.summary}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-outline-variant/20 font-mono text-[10px] text-outline truncate">
                        {item.stack.replace(/&lt;/g, '<')}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Synergy Conduit Bar */}
        <div className="p-4 bg-surface-container-lowest border border-outline-variant/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-mono text-xs text-on-surface-variant shadow-xs">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse flex-shrink-0"></span>
            <span>
              {activeDiscipline
                ? `ACTIVE INSPECTION: ${activeDiscipline.name} (${activeDiscipline.group}) → SYNERGISTIC CONDUITS: ${activeRelated.length} AREAS`
                : 'HOVER OR FOCUS AN AREA TO TRACE SYSTEMIC INTERCONNECTIONS ACROSS 4 DOMAINS'}
            </span>
          </div>
          <span className="text-primary font-bold hidden sm:inline-block">13 CONNECTED DISCIPLINES</span>
        </div>
      </div>
    </section>
  );
}
