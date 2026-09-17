'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn, StaggerContainer, StaggerItem } from './MotionWrapper';

export interface EcosystemNode {
  id: string;
  name: string;
  code: string;
  category: 'FOUNDATION' | 'VERTICAL' | 'HORIZON';
  description: string;
  status: 'ESTABLISHED' | 'ACTIVE_INCUBATION' | 'FUTURE_EXPANSION';
  connectedTo: string[];
}

export interface EcosystemConnection {
  from: string;
  to: string;
  type: 'DATA_FLOW' | 'INFERENCE' | 'GOVERNANCE';
}

const ecosystemNodes: EcosystemNode[] = [
  {
    id: 'ai',
    name: 'AI',
    code: 'SYS-01',
    category: 'FOUNDATION',
    description: 'Proprietary reasoning engines, foundation model fine-tuning, and neural weights.',
    status: 'ESTABLISHED',
    connectedTo: ['software', 'automation', 'data', 'emerging-tech'],
  },
  {
    id: 'software',
    name: 'SOFTWARE',
    code: 'SYS-02',
    category: 'FOUNDATION',
    description: 'Mission-critical enterprise software, reactive web apps, and management cockpits.',
    status: 'ESTABLISHED',
    connectedTo: ['saas', 'cloud', 'fintech', 'ai'],
  },
  {
    id: 'automation',
    name: 'AUTOMATION',
    code: 'SYS-03',
    category: 'FOUNDATION',
    description: 'High-throughput transactional event bus and autonomous workflow execution fabric.',
    status: 'ESTABLISHED',
    connectedTo: ['ai', 'marketing', 'fintech', 'infrastructure'],
  },
  {
    id: 'saas',
    name: 'SAAS',
    code: 'SYS-04',
    category: 'VERTICAL',
    description: 'Multi-tenant cloud applications engineered with tenant isolation and rapid onboarding.',
    status: 'ESTABLISHED',
    connectedTo: ['software', 'cloud', 'marketing'],
  },
  {
    id: 'cloud',
    name: 'CLOUD',
    code: 'SYS-05',
    category: 'FOUNDATION',
    description: 'Dedicated private compute clusters, air-gapped VPCs, and distributed global edge nodes.',
    status: 'ESTABLISHED',
    connectedTo: ['infrastructure', 'software', 'data'],
  },
  {
    id: 'fintech',
    name: 'FINTECH',
    code: 'SYS-06',
    category: 'VERTICAL',
    description: 'Multi-currency clearing pipelines, autonomous invoicing, and reconciliation ledger.',
    status: 'ACTIVE_INCUBATION',
    connectedTo: ['automation', 'software', 'data'],
  },
  {
    id: 'marketing',
    name: 'MARKETING',
    code: 'SYS-07',
    category: 'VERTICAL',
    description: 'Autonomous multi-channel distribution, audience intelligence, and attribution engines.',
    status: 'ACTIVE_INCUBATION',
    connectedTo: ['automation', 'saas', 'data'],
  },
  {
    id: 'data',
    name: 'DATA',
    code: 'SYS-08',
    category: 'FOUNDATION',
    description: 'Unified enterprise ingestion fabric, vector indexing, and zero-loss streaming.',
    status: 'ESTABLISHED',
    connectedTo: ['ai', 'cloud', 'infrastructure', 'fintech'],
  },
  {
    id: 'infrastructure',
    name: 'INFRASTRUCTURE',
    code: 'SYS-09',
    category: 'FOUNDATION',
    description: 'Sovereign data fencing, zero-trust network boundaries, and bare-metal compute racks.',
    status: 'ESTABLISHED',
    connectedTo: ['cloud', 'data', 'emerging-tech'],
  },
  {
    id: 'emerging-tech',
    name: 'EMERGING TECHNOLOGY',
    code: 'SYS-10',
    category: 'HORIZON',
    description: 'Quantum-resistant encryption, decentralized identity verification, and ambient computing.',
    status: 'FUTURE_EXPANSION',
    connectedTo: ['ai', 'infrastructure'],
  },
];

export default function HoldingEcosystem() {
  const [activeNodeId, setActiveNodeId] = useState<string>('ai');

  const selectedNode = ecosystemNodes.find((n) => n.id === activeNodeId) || ecosystemNodes[0];

  return (
    <section className="w-full py-24 bg-surface-container-low border-b border-outline-variant/30 relative" id="ecosystem">
      <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin space-y-12">
        {/* Section Header */}
        <FadeIn direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-outline-variant/30">
            <div>
              <span className="font-label-code text-label-code uppercase tracking-widest text-primary font-semibold">
                PARENT COMPANY ECOSYSTEM
              </span>
              <h2 className="font-headline-lg text-headline-lg uppercase text-on-surface tracking-tight mt-2">
                ONE GROUP. MANY COMPANIES. <span className="text-primary italic font-light">ONE VISION.</span>
              </h2>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md">
              An evolving technological constellation of sovereign platforms, infrastructure, and operating companies
              orchestrated by NexAgent.
            </p>
          </div>
        </FadeIn>

        {/* Central Constellation Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Central Sovereign Node (NexAgent Parent) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-8 bg-on-surface text-surface shadow-md space-y-6 flex flex-col justify-between h-full">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
                  <span className="font-mono text-xs uppercase tracking-wider text-surface/70">
                    CENTRAL HOLDING HUB
                  </span>
                </div>

                <h3 className="font-headline-md text-headline-md uppercase font-bold text-surface">
                  NEXAGENT
                </h3>

                <p className="font-body-sm text-surface/80 leading-relaxed">
                  The sovereign parent holding group orchestrating core IP development, cross-entity governance, capital
                  allocation, and continuous technology incubation.
                </p>
              </div>

              <div className="pt-6 border-t border-surface/20 space-y-3 font-mono text-xs text-surface/70">
                <div className="flex justify-between">
                  <span>CONSTELLATION NODES:</span>
                  <span className="text-primary-fixed-dim font-bold">10 DOMAINS</span>
                </div>
                <div className="flex justify-between">
                  <span>GOVERNANCE:</span>
                  <span className="text-surface font-semibold">SOVEREIGN HOLDING</span>
                </div>
                <div className="pt-2">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 text-primary-fixed-dim hover:text-white transition-colors uppercase font-label-code"
                  >
                    <span>Read Parent Charter</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Evolving Constellation Grid (10 Data-Driven Nodes) */}
          <div className="lg:col-span-8 space-y-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {ecosystemNodes.map((node) => {
                const isSelected = activeNodeId === node.id;
                return (
                  <button
                    key={node.id}
                    onClick={() => setActiveNodeId(node.id)}
                    className={`p-4 text-left border transition-all flex flex-col justify-between h-28 ${
                      isSelected
                        ? 'bg-surface-container-lowest border-primary shadow-md ring-1 ring-primary/40'
                        : 'bg-surface-container-lowest/70 border-outline-variant/40 hover:border-outline-variant hover:bg-surface-container-lowest'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[9px] text-primary font-semibold">{node.code}</span>
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          node.status === 'ESTABLISHED'
                            ? 'bg-primary'
                            : node.status === 'ACTIVE_INCUBATION'
                            ? 'bg-secondary'
                            : 'bg-outline'
                        }`}
                      ></span>
                    </div>

                    <div>
                      <h4 className="font-label-code text-xs uppercase font-bold text-on-surface">
                        {node.name}
                      </h4>
                      <span className="font-mono text-[8px] text-outline uppercase block mt-0.5">
                        {node.status.replace('_', ' ')}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Node Detail Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedNode.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="p-6 bg-surface-container-lowest border border-outline-variant/60 shadow-sm space-y-4"
              >
                <div className="flex items-center justify-between pb-3 border-b border-outline-variant/30">
                  <div className="flex items-center gap-3">
                    <span className="font-headline-sm text-headline-sm uppercase font-bold text-on-surface">
                      {selectedNode.name}
                    </span>
                    <span className="px-2 py-0.5 bg-primary/10 text-primary border border-primary/20 font-mono text-[10px] uppercase">
                      {selectedNode.category}
                    </span>
                  </div>
                  <span className="font-mono text-xs text-outline">STATUS: {selectedNode.status}</span>
                </div>

                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {selectedNode.description}
                </p>

                <div className="pt-3 border-t border-outline-variant/20 flex flex-wrap items-center gap-2 font-mono text-xs text-on-surface-variant">
                  <span className="text-outline uppercase">INTERCONNECTED TO:</span>
                  {selectedNode.connectedTo.map((c) => (
                    <span
                      key={c}
                      className="px-2 py-0.5 bg-surface-container-low border border-outline-variant/40 uppercase font-semibold text-on-surface"
                    >
                      {c.replace('-', ' ')}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
