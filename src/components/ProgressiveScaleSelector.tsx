'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn } from './MotionWrapper';

interface ScaleTier {
  id: string;
  stage: string;
  name: string;
  subtitle: string;
  metric: string;
  agentCapacity: string;
  throughput: string;
  architecture: {
    recommendedNodes: string;
    deploymentTopology: string;
    governance: string;
  };
}

const scaleTiers: ScaleTier[] = [
  {
    id: '1-person',
    stage: 'SCALE 01',
    name: '1 PERSON',
    subtitle: 'Solo Founder & Creator',
    metric: '10x Solopreneur Leverage',
    agentCapacity: '3 Autonomous Agents',
    throughput: 'Continuous 24/7 Operations',
    architecture: {
      recommendedNodes: 'Dedicated Cloud Instance + Automated Voice & CRM Agent',
      deploymentTopology: 'Serverless Edge Node',
      governance: 'Zero Maintenance, Self-Updating',
    },
  },
  {
    id: 'small-business',
    stage: 'SCALE 02',
    name: 'SMALL BUSINESS',
    subtitle: 'Local & Digital SMBs',
    metric: 'Zero Admin Drag',
    agentCapacity: '10 Autonomous Agents',
    throughput: 'Multi-Channel Inbound Handling',
    architecture: {
      recommendedNodes: 'Unified Booking Hub + Automated Invoicing & Customer Messaging',
      deploymentTopology: 'Dedicated Managed Tenant',
      governance: 'Automated Audit Trail & Bookkeeping',
    },
  },
  {
    id: 'msme',
    stage: 'SCALE 03',
    name: 'MSME',
    subtitle: 'Micro, Small & Medium Enterprises',
    metric: 'Streamlined Back-Office',
    agentCapacity: '25 Autonomous Agents',
    throughput: 'High-Volume Order & Task Routing',
    architecture: {
      recommendedNodes: 'Multi-Department Workflow Bus + ERP & Logistics Connectors',
      deploymentTopology: 'Multi-Zone Cloud Cluster',
      governance: 'Role-Based Access Control (RBAC)',
    },
  },
  {
    id: 'startup',
    stage: 'SCALE 04',
    name: 'STARTUP',
    subtitle: 'Early-Stage Venture Backed',
    metric: 'Lean Capital Efficiency',
    agentCapacity: '50 Autonomous Agents',
    throughput: 'Rapid Feature Iteration & Inbound Triage',
    architecture: {
      recommendedNodes: 'Custom API Mesh + Neural RAG Engine + Product Telemetry',
      deploymentTopology: 'Kubernetes Microservices Mesh',
      governance: 'SOC-2 Type I Baseline Readiness',
    },
  },
  {
    id: 'scaleup',
    stage: 'SCALE 05',
    name: 'SCALEUP',
    subtitle: 'Series A/B Growth Engines',
    metric: '4.8x Pipeline Velocity',
    agentCapacity: '150 Autonomous Agents',
    throughput: 'Cross-Border Sales & Support Sync',
    architecture: {
      recommendedNodes: 'Distributed Agent Orchestrator + Real-Time Deal Intelligence',
      deploymentTopology: 'Multi-Region Distributed Fabric',
      governance: 'SOC-2 Type II & GDPR Enforced',
    },
  },
  {
    id: 'unicorn',
    stage: 'SCALE 06',
    name: 'UNICORN',
    subtitle: 'Pre-IPO & Category Leaders',
    metric: 'Autonomous Business Units',
    agentCapacity: '500+ Autonomous Agents',
    throughput: 'Millions of Daily API Events',
    architecture: {
      recommendedNodes: 'Fine-Tuned Proprietary Weights + Zero-Loss Financial Bus',
      deploymentTopology: 'Hybrid Multi-Cloud Edge Fabric',
      governance: 'ISO 27001 & Dedicated Data Vaults',
    },
  },
  {
    id: 'enterprise',
    stage: 'SCALE 07',
    name: 'ENTERPRISE',
    subtitle: 'Global Corporations',
    metric: '74% Manual Work Reduction',
    agentCapacity: '1,500+ Autonomous Agents',
    throughput: 'Mission-Critical Core Workflows',
    architecture: {
      recommendedNodes: 'Air-Gapped Sovereign Infrastructure + Legacy ERP Bridges',
      deploymentTopology: 'Dedicated Private Bare-Metal Clusters',
      governance: 'HIPAA, FedRAMP & Sovereign Data Fences',
    },
  },
  {
    id: 'global-org',
    stage: 'SCALE 08',
    name: 'GLOBAL ORGANIZATION',
    subtitle: 'Multinational Institutions',
    metric: 'Sovereign Digital Resilience',
    agentCapacity: '5,000+ Autonomous Agents',
    throughput: 'Continuous Follow-the-Sun Operations',
    architecture: {
      recommendedNodes: 'Planetary Multi-Zone Mesh + Redundant AI Consensus Networks',
      deploymentTopology: 'Global Sovereign Points of Presence (PoPs)',
      governance: 'Multi-Jurisdiction Sovereign Governance',
    },
  },
];

export default function ProgressiveScaleSelector() {
  const [activeTier, setActiveTier] = useState<ScaleTier>(scaleTiers[3]); // default to STARTUP

  return (
    <section className="w-full py-24 bg-surface border-b border-outline-variant/30 relative" id="scale">
      <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin space-y-12">
        {/* Section Header */}
        <FadeIn direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-outline-variant/30">
            <div>
              <span className="font-label-code text-label-code uppercase tracking-widest text-primary font-semibold">
                BUILT FOR EVERY SCALE
              </span>
              <h2 className="font-headline-lg text-headline-lg uppercase text-on-surface tracking-tight mt-2">
                THERE IS NO “TOO SMALL.” <span className="text-primary italic font-light">THERE IS NO “TOO COMPLEX.”</span>
              </h2>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md">
              From individual founders and small businesses to global enterprises, NexAgent engineers technology around
              the problem — not the size of the organization.
            </p>
          </div>
        </FadeIn>

        {/* 8-Tier Progressive Scale Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
          {scaleTiers.map((tier) => {
            const isSelected = activeTier.id === tier.id;
            return (
              <button
                key={tier.id}
                onClick={() => setActiveTier(tier)}
                className={`p-3 text-left border transition-all flex flex-col justify-between h-24 ${
                  isSelected
                    ? 'bg-on-surface text-surface border-on-surface shadow-sm'
                    : 'bg-surface-container-low border-outline-variant/40 text-on-surface hover:bg-surface-container hover:border-outline-variant'
                }`}
              >
                <div className="font-mono text-[9px] opacity-70">{tier.stage}</div>
                <div>
                  <div className="font-label-code text-[11px] uppercase font-bold leading-tight">
                    {tier.name}
                  </div>
                  <div className="font-mono text-[9px] opacity-80 mt-0.5 truncate">{tier.subtitle}</div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Scale Architectural Blueprint Expansion */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTier.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="p-8 bg-surface-container-lowest border border-outline-variant/60 shadow-sm space-y-6"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-outline-variant/30 gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-primary font-bold">{activeTier.stage}</span>
                  <span className="font-micro-annotation text-outline uppercase font-semibold">
                    • ARCHITECTURAL EXPANSION
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md uppercase font-bold text-on-surface">
                  {activeTier.name} — {activeTier.subtitle}
                </h3>
              </div>
              <div className="p-3 bg-primary/10 border border-primary/20 text-right">
                <span className="font-mono text-[10px] text-outline uppercase block">LEVERAGE BENCHMARK</span>
                <span className="font-label-code text-sm font-bold text-primary">{activeTier.metric}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2 p-4 bg-surface-container-low border border-outline-variant/30">
                <span className="font-mono text-[10px] text-outline uppercase block">AGENTIC CAPACITY</span>
                <div className="font-headline-sm text-headline-sm uppercase font-bold text-on-surface">
                  {activeTier.agentCapacity}
                </div>
                <p className="font-body-sm text-[12px] text-on-surface-variant mt-1">
                  Synchronized autonomous agents executing concurrent operations.
                </p>
              </div>

              <div className="space-y-2 p-4 bg-surface-container-low border border-outline-variant/30">
                <span className="font-mono text-[10px] text-outline uppercase block">DEPLOYMENT TOPOLOGY</span>
                <div className="font-label-code text-xs uppercase font-bold text-on-surface">
                  {activeTier.architecture.deploymentTopology}
                </div>
                <p className="font-body-sm text-[12px] text-on-surface-variant mt-1">
                  {activeTier.throughput}
                </p>
              </div>

              <div className="space-y-2 p-4 bg-surface-container-low border border-outline-variant/30">
                <span className="font-mono text-[10px] text-outline uppercase block">GOVERNANCE & AUDIT</span>
                <div className="font-label-code text-xs uppercase font-bold text-primary">
                  {activeTier.architecture.governance}
                </div>
                <p className="font-body-sm text-[12px] text-on-surface-variant mt-1">
                  Built to satisfy regulatory, compliance, and data-isolation standards.
                </p>
              </div>
            </div>

            <div className="p-4 bg-surface-container-low border border-outline-variant/30 flex items-center justify-between font-mono text-xs text-on-surface-variant">
              <span>RECOMMENDED ARCHITECTURE: {activeTier.architecture.recommendedNodes}</span>
              <span className="text-primary font-bold">STATUS: CONFIGURABLE</span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
