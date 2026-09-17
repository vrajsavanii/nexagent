'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn } from './MotionWrapper';

type SystemState = 'DISCONNECTED' | 'CONNECTED' | 'INTELLIGENT' | 'AUTOMATED';

interface OSNode {
  id: string;
  name: string;
  category: 'Commercial' | 'Autonomous' | 'Operations' | 'Intelligence';
  icon: string;
  description: string;
  gridCol: number;
  gridRow: number;
  statusText: {
    DISCONNECTED: string;
    CONNECTED: string;
    INTELLIGENT: string;
    AUTOMATED: string;
  };
}

const osNodes: OSNode[] = [
  {
    id: 'lead',
    name: 'LEAD',
    category: 'Commercial',
    icon: 'person_search',
    description: 'Inbound acquisition channels, ads, forms, and outbound prospect signals.',
    gridCol: 1,
    gridRow: 1,
    statusText: {
      DISCONNECTED: 'Siloed in ad accounts & spreadsheets',
      CONNECTED: 'Inbound webhooks push into central queue',
      INTELLIGENT: 'AI scores & qualifies buying intent in real time',
      AUTOMATED: 'Instant autonomous triage, calendar booking & personalized routing',
    },
  },
  {
    id: 'customer',
    name: 'CUSTOMER',
    category: 'Commercial',
    icon: 'groups',
    description: 'Existing client accounts, subscription contracts, and engagement touchpoints.',
    gridCol: 2,
    gridRow: 1,
    statusText: {
      DISCONNECTED: 'Scattered across inboxes & support tools',
      CONNECTED: 'Unified account identifier synced',
      INTELLIGENT: 'Continuous churn risk & health prediction',
      AUTOMATED: 'Proactive retention triggers & automated lifecycle journeys',
    },
  },
  {
    id: 'ai-agent',
    name: 'AI AGENT',
    category: 'Autonomous',
    icon: 'smart_toy',
    description: 'Contextual digital workers executing negotiations, inquiries, and back-office tasks.',
    gridCol: 3,
    gridRow: 1,
    statusText: {
      DISCONNECTED: 'Unused or isolated prototype chatbot',
      CONNECTED: 'Connected to CRM & knowledge store',
      INTELLIGENT: 'Multi-turn reasoning & dynamic guardrails',
      AUTOMATED: '24/7 autonomous resolution across voice, chat & email',
    },
  },
  {
    id: 'crm',
    name: 'CRM',
    category: 'Commercial',
    icon: 'database',
    description: 'System of customer record, historical touchpoints, and deal stage tracking.',
    gridCol: 4,
    gridRow: 1,
    statusText: {
      DISCONNECTED: 'Manual human data entry with missing fields',
      CONNECTED: 'Bi-directional API sync with pipeline',
      INTELLIGENT: 'Automated field population from calls & emails',
      AUTOMATED: 'Self-updating living system of record with zero human data entry',
    },
  },
  {
    id: 'sales',
    name: 'SALES',
    category: 'Commercial',
    icon: 'trending_up',
    description: 'Deal execution, pricing negotiation, proposals, and pipeline acceleration.',
    gridCol: 1,
    gridRow: 2,
    statusText: {
      DISCONNECTED: 'Reps spend 65% of time on admin & follow-up',
      CONNECTED: 'Calendar & proposal generation linked',
      INTELLIGENT: 'Dynamic win-rate diagnostics & deal assistance',
      AUTOMATED: 'Autonomous contract dispatch, follow-ups & pipeline velocity',
    },
  },
  {
    id: 'marketing',
    name: 'MARKETING',
    category: 'Commercial',
    icon: 'campaign',
    description: 'Content generation, multi-channel distribution, and attribution analytics.',
    gridCol: 2,
    gridRow: 2,
    statusText: {
      DISCONNECTED: 'Disconnected campaigns without pipeline attribution',
      CONNECTED: 'Lead ingestion hooked to CRM',
      INTELLIGENT: 'Predictive audience segmentation & asset adaptation',
      AUTOMATED: 'Real-time campaign re-allocation based on revenue velocity',
    },
  },
  {
    id: 'communication',
    name: 'COMMUNICATION',
    category: 'Autonomous',
    icon: 'forum',
    description: 'Voice calls, SMS, WhatsApp, Slack, and email client threads.',
    gridCol: 3,
    gridRow: 2,
    statusText: {
      DISCONNECTED: 'Delayed responses, missed calls & forgotten follow-ups',
      CONNECTED: 'Central inbox aggregator',
      INTELLIGENT: 'Sentiment analysis & automatic transcript extraction',
      AUTOMATED: 'Sub-second omnichannel voice & chat response with full context',
    },
  },
  {
    id: 'documentation',
    name: 'DOCUMENTATION',
    category: 'Operations',
    icon: 'description',
    description: 'Contracts, NDAs, invoices, clinical charts, and operational procedures.',
    gridCol: 4,
    gridRow: 2,
    statusText: {
      DISCONNECTED: 'Piles of PDFs, paper scans & manual transcription',
      CONNECTED: 'Cloud document storage linked',
      INTELLIGENT: 'Neural OCR & structured entity extraction',
      AUTOMATED: 'Instant automated generation, signing, validation & ERP filing',
    },
  },
  {
    id: 'operations',
    name: 'OPERATIONS',
    category: 'Operations',
    icon: 'settings_applications',
    description: 'Fulfillment workflows, procurement, vendor handoffs, and resource scheduling.',
    gridCol: 1,
    gridRow: 3,
    statusText: {
      DISCONNECTED: 'Manual handoffs, email back-and-forth & bottlenecks',
      CONNECTED: 'Task management boards integrated',
      INTELLIGENT: 'Automated bottleneck detection & workload balancing',
      AUTOMATED: 'Headless orchestration across logistics, vendors & internal staff',
    },
  },
  {
    id: 'payments',
    name: 'PAYMENTS',
    category: 'Operations',
    icon: 'payments',
    description: 'Billing, invoicing, subscription renewals, and global multi-currency settlements.',
    gridCol: 2,
    gridRow: 3,
    statusText: {
      DISCONNECTED: 'Unreconciled invoices, late payment chasing & accounting lag',
      CONNECTED: 'Stripe / ERP gateway connected',
      INTELLIGENT: 'Smart dunning & predictive revenue recognition',
      AUTOMATED: 'Instant ledger reconciliation, automated invoice dispatch & collections',
    },
  },
  {
    id: 'analytics',
    name: 'ANALYTICS',
    category: 'Intelligence',
    icon: 'monitoring',
    description: 'Real-time revenue telemetry, unit economics, and operational efficiency metrics.',
    gridCol: 3,
    gridRow: 3,
    statusText: {
      DISCONNECTED: 'Outdated monthly spreadsheets delivered 2 weeks late',
      CONNECTED: 'Centralized database warehouse sync',
      INTELLIGENT: 'Anomaly alerts & predictive revenue forecasting',
      AUTOMATED: 'Continuous executive live telemetry & autonomous KPI optimization',
    },
  },
  {
    id: 'management',
    name: 'MANAGEMENT',
    category: 'Intelligence',
    icon: 'account_balance',
    description: 'Executive leadership governance, capital allocation, and strategic decision making.',
    gridCol: 4,
    gridRow: 3,
    statusText: {
      DISCONNECTED: 'Operating on partial, delayed, and conflicting reports',
      CONNECTED: 'Unified executive dashboard view',
      INTELLIGENT: 'Scenario modeling & automated variance alerts',
      AUTOMATED: 'Strategic decision cockpit with predictive steering and full company control',
    },
  },
];

// Semantic Active Data Conduits (Section 11 & 12)
const semanticConduits = [
  { from: 'lead', to: 'ai-agent', label: 'Inbound Intent Stream' },
  { from: 'ai-agent', to: 'crm', label: 'Enriched Contact Record' },
  { from: 'crm', to: 'sales', label: 'Qualified Pipeline Dispatch' },
  { from: 'customer', to: 'communication', label: 'Real-Time Touchpoint' },
  { from: 'communication', to: 'operations', label: 'Fulfillment Order' },
  { from: 'sales', to: 'payments', label: 'Settlement Trigger' },
  { from: 'payments', to: 'analytics', label: 'Unit Margin Telemetry' },
  { from: 'analytics', to: 'management', label: 'Executive Governance' },
];

export default function BusinessOSMatrix() {
  const [currentState, setCurrentState] = useState<SystemState>('CONNECTED');
  const [activeNode, setActiveNode] = useState<OSNode>(osNodes[2]); // AI AGENT default

  const states: SystemState[] = ['DISCONNECTED', 'CONNECTED', 'INTELLIGENT', 'AUTOMATED'];

  return (
    <section className="w-full py-24 bg-surface-container-low border-b border-outline-variant/30 relative overflow-hidden" id="business-os">
      {/* Fine technical background grid */}
      <div className="absolute inset-0 tech-grid opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin space-y-12 relative z-10">
        {/* Section Header */}
        <FadeIn direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-outline-variant/30">
            <div>
              <span className="font-label-code text-label-code uppercase tracking-widest text-primary font-semibold">
                BUSINESS OPERATING SYSTEM
              </span>
              <h2 className="font-headline-lg text-headline-lg uppercase text-on-surface tracking-tight mt-2">
                YOUR BUSINESS HAS HUNDREDS OF MOVING PARTS.
              </h2>
              <p className="font-headline-sm text-headline-sm uppercase text-primary font-light mt-1">
                WE CONNECT THEM.
              </p>
            </div>
            <div className="font-mono text-xs text-on-surface-variant max-w-md">
              Connected business systems including CRM, sales, marketing, communication, operations, payments, and analytics unified into an autonomous, self-steering enterprise platform.
            </div>
          </div>
        </FadeIn>

        {/* 4-Stage Architecture State Selector */}
        <div className="p-4 bg-surface-container-lowest border border-outline-variant/50 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] text-outline uppercase font-semibold">
              ARCHITECTURE TOPOLOGY STATE
            </span>
            <span className="font-mono text-xs text-primary font-bold">
              CURRENT PHASE: {currentState}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {states.map((s, idx) => {
              const isSelected = currentState === s;
              return (
                <button
                  key={s}
                  onClick={() => setCurrentState(s)}
                  className={`p-3 text-left border transition-all ${
                    isSelected
                      ? 'bg-on-surface text-surface border-on-surface shadow-sm'
                      : 'bg-surface-container-low border-outline-variant/40 text-on-surface hover:bg-surface-container hover:border-outline-variant'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] opacity-70">0{idx + 1}</span>
                    {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping"></span>}
                  </div>
                  <div className="font-label-code text-xs uppercase font-semibold mt-1">{s}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Semantic Conduits Active Indicator Bar */}
        {currentState !== 'DISCONNECTED' && (
          <div className="p-3 bg-surface-container-lowest border border-outline-variant/30 flex items-center justify-between overflow-x-auto gap-4 font-mono text-[11px] text-on-surface-variant">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="font-bold text-on-surface">ACTIVE CONDUITS:</span>
            </div>
            <div className="flex items-center gap-4 text-outline whitespace-nowrap">
              {semanticConduits.slice(0, 4).map((c) => (
                <span key={c.label} className="flex items-center gap-1.5">
                  <span className="text-primary font-semibold">{c.from.toUpperCase()}</span>
                  <span>→</span>
                  <span className="text-on-surface font-semibold">{c.to.toUpperCase()}</span>
                </span>
              ))}
            </div>
            <span className="text-primary font-bold hidden md:inline-block">DATA PACKETS: ACTIVE</span>
          </div>
        )}

        {/* Interactive Architecture Grid with all 12 Canonical Nodes */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: 12-Node System Matrix */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 relative">
            {osNodes.map((node) => {
              const isSelected = activeNode.id === node.id;
              return (
                <button
                  key={node.id}
                  onClick={() => setActiveNode(node)}
                  className={`p-4 text-left border transition-all flex flex-col justify-between h-32 group relative ${
                    isSelected
                      ? 'bg-surface-container-lowest border-primary shadow-md ring-1 ring-primary/40'
                      : 'bg-surface-container-lowest/80 border-outline-variant/40 hover:border-outline-variant hover:bg-surface-container-lowest'
                  }`}
                >
                  {/* Subtle topology state indicator corner badge */}
                  {currentState !== 'DISCONNECTED' && (
                    <div
                      className={`absolute top-0 right-0 w-2 h-2 ${
                        currentState === 'AUTOMATED'
                          ? 'bg-primary'
                          : currentState === 'INTELLIGENT'
                          ? 'bg-secondary'
                          : 'bg-outline-variant'
                      }`}
                    ></div>
                  )}

                  <div className="flex items-center justify-between">
                    <span className="material-symbols-outlined text-[22px] text-primary">
                      {node.icon}
                    </span>
                    <span className="font-mono text-[9px] text-outline uppercase">{node.category}</span>
                  </div>

                  <div>
                    <h4 className="font-label-code text-xs uppercase font-bold text-on-surface group-hover:text-primary transition-colors">
                      {node.name}
                    </h4>
                    <p className="font-mono text-[9px] text-on-surface-variant truncate mt-0.5">
                      {node.statusText[currentState]}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Active Node Architectural Inspector */}
          <div className="lg:col-span-4 sticky top-28">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeNode.id}-${currentState}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="bg-surface-container-lowest border border-outline-variant/60 p-6 space-y-6 shadow-sm"
              >
                <div className="flex items-center justify-between pb-3 border-b border-outline-variant/30">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[22px]">
                      {activeNode.icon}
                    </span>
                    <span className="font-headline-sm text-headline-sm uppercase font-bold text-on-surface">
                      {activeNode.name}
                    </span>
                  </div>
                  <span className="font-mono text-[10px] px-2 py-0.5 bg-primary/10 text-primary border border-primary/20">
                    {activeNode.category}
                  </span>
                </div>

                <div className="space-y-2">
                  <span className="font-mono text-[10px] text-outline uppercase font-semibold">
                    COMPONENT FUNCTION
                  </span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    {activeNode.description}
                  </p>
                </div>

                <div className="space-y-2 pt-3 border-t border-outline-variant/20">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] text-outline uppercase font-semibold">
                      BEHAVIOR AT [{currentState}]
                    </span>
                    <span
                      className={`w-2 h-2 rounded-full ${
                        currentState === 'DISCONNECTED'
                          ? 'bg-outline'
                          : currentState === 'CONNECTED'
                          ? 'bg-secondary'
                          : 'bg-primary animate-pulse'
                      }`}
                    ></span>
                  </div>
                  <div className="p-3 bg-surface-container-low border border-outline-variant/30 font-body-sm text-on-surface font-medium leading-snug">
                    {activeNode.statusText[currentState]}
                  </div>
                </div>

                <div className="pt-3 border-t border-outline-variant/20 font-mono text-[10px] text-outline flex items-center justify-between">
                  <span>DISPATCH LATENCY &lt; 10MS</span>
                  <span className="text-primary font-bold">STATE: STABILIZED</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
