'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import {
  Stethoscope,
  Hotel,
  Zap,
  Clock,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Layers,
  ShieldCheck,
  Cpu,
} from 'lucide-react';
import Eyebrow from '@/components/ui/Eyebrow';
import {
  fadeUpVariants,
  staggerContainerVariants,
  viewportConfig,
  transitionPresets,
} from '@/lib/motion';

interface ProductSubModule {
  title: string;
  detail: string;
  governance: string;
}

interface ProductItem {
  id: string;
  category: string;
  name: string;
  status: 'AVAILABLE' | 'IN DEVELOPMENT' | 'ENTERPRISE READY' | 'FUTURE';
  statusColor: string;
  description: string;
  outcome: string;
  icon: React.ElementType;
  href: string;
  features: string[];
  subModules: ProductSubModule[];
}

const products: ProductItem[] = [
  {
    id: 'hms',
    category: 'HEALTHCARE INFRASTRUCTURE',
    name: 'NexAgent HMS (Hospital OS)',
    status: 'AVAILABLE',
    statusColor: 'text-zinc-900 bg-zinc-100 border-zinc-300',
    description:
      'Complete hospital operating system. Orchestrates outpatient intake queues, automated bed turnover, digital pharmacy, and TPA insurance claims with 100% physician-in-the-loop governance.',
    outcome: '35 min average bed turnaround & ABDM M1-M3 compliance',
    icon: Stethoscope,
    href: '/products/hms',
    features: [
      'Automated ESI triage queue balancing & zero-wait routing',
      'Instant housekeeping dispatch upon doctor discharge order',
      'Pre-compiled discharge summaries for 1-click MD sign-off',
    ],
    subModules: [
      {
        title: 'Emergency Severity Index (ESI) Triage Router',
        detail: 'Scores incoming patient vitals and automatically balances emergency care queues.',
        governance: 'Triage Nursing Officer validation on high-acuity assignments',
      },
      {
        title: 'Autonomous Bed Turnover & Environmental Dispatch',
        detail: 'Detects discharge orders and triggers immediate housekeeping with photo verification.',
        governance: 'Sanitation Supervisor inspection approval before bed release',
      },
    ],
  },
  {
    id: 'hospitality',
    category: 'HOSPITALITY MANAGEMENT',
    name: 'NexAgent Hospitality OS',
    status: 'AVAILABLE',
    statusColor: 'text-zinc-900 bg-zinc-100 border-zinc-300',
    description:
      'AI-powered cloud property management system. Features algorithmic dynamic room pricing, 24/7 guest concierge over WhatsApp and voice, mobile self check-in, and 2-way OTA sync.',
    outcome: '28% RevPAR increase & 0 min reception wait times',
    icon: Hotel,
    href: '/products/hospitality',
    features: [
      'Algorithmic dynamic rate optimization maximizing RevPAR',
      '24/7 autonomous guest concierge over WhatsApp & voice',
      'Instant 2-way OTA synchronization across Booking, Expedia & Airbnb',
    ],
    subModules: [
      {
        title: 'Algorithmic RevPAR Dynamic Rate Optimizer',
        detail: 'Calculates dynamic room tariffs by analyzing competitor ADR and booking velocity.',
        governance: 'Revenue Manager override authorization for special discount limits',
      },
      {
        title: '24/7 WhatsApp Guest Concierge & Digital Key',
        detail: 'Dispatches digital room keys and coordinates room service requests automatically.',
        governance: 'Duty Manager verification for complimentary upgrades',
      },
    ],
  },
  {
    id: 'operations-core',
    category: 'ENTERPRISE AUTOMATION',
    name: 'Enterprise Operations Core',
    status: 'AVAILABLE',
    statusColor: 'text-zinc-900 bg-zinc-100 border-zinc-300',
    description:
      'One unified platform customized directly to your organization’s operational workflows, synchronizing cross-department data with strict cryptographic approvals.',
    outcome: '82% reduction in cross-tool administrative handoff lag',
    icon: Zap,
    href: '/solutions/workflow-automation',
    features: [
      'Two-phase transactional sync for ERP, CRM & databases',
      'In-memory PII/PHI tokenization before reasoning occurs',
      'Deterministic WebAssembly policy rules preventing unauthorized execution',
    ],
    subModules: [
      {
        title: 'Two-Phase Commit Transactional Write Engine',
        detail: 'Synchronizes state writes across CRM, ERP, and SQL databases with atomic rollback support.',
        governance: 'Database Administrator approval on schema migration triggers',
      },
      {
        title: 'Deterministic WebAssembly Policy Gatekeeper',
        detail: 'Enforces hardcoded enterprise compliance and financial thresholds with zero hallucination bypass.',
        governance: 'Executive Supervisor digital signature required to release paused transactions',
      },
    ],
  },
  {
    id: 'predictive-flow',
    category: 'CAPACITY INTELLIGENCE',
    name: 'Predictive Capacity & Flow Network',
    status: 'ENTERPRISE READY',
    statusColor: 'text-white bg-zinc-900 border-zinc-900',
    description:
      'Forecasts hospital ward capacity bottlenecks, nurse-to-patient ratios, and hotel occupancy surges 24 to 48 hours in advance to optimize resource allocation.',
    outcome: 'Proactive capacity planning & shift balancing',
    icon: Clock,
    href: '/technology',
    features: [
      'Localized admission & occupancy surge forecasting',
      'Automated shift-swap and staffing recommendation engine',
      'Cross-facility resource ledger and real-time telemetry',
    ],
    subModules: [
      {
        title: 'Admission Surge & Occupancy Predictor',
        detail: 'Predicts high-occupancy surges 48 hours in advance using historical trends and localized models.',
        governance: 'Chief Medical Officer / General Manager surge protocol declaration',
      },
      {
        title: 'Automated Shift-Swap & Staff Balancer',
        detail: 'Recommends optimal nurse-to-patient and front-desk staffing allocations.',
        governance: 'Department Nursing Head approval on shift assignments',
      },
    ],
  },
];

interface HmsShowcaseProps {
  onOpenStrategyCall: () => void;
}

export default function HmsShowcase({ onOpenStrategyCall }: HmsShowcaseProps) {
  const [expandedProductId, setExpandedProductId] = useState<string | null>(null);

  const toggleProductExpand = (id: string) => {
    setExpandedProductId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="products" className="py-24 bg-white border-t border-zinc-200 relative overflow-hidden content-visibility-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="max-w-3xl mb-16 space-y-4"
        >
          <motion.div variants={fadeUpVariants}>
            <Eyebrow pulseColor="black">Product Portfolio</Eyebrow>
          </motion.div>
          <motion.h2
            variants={fadeUpVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 tracking-tight"
          >
            Software systems built for real operations.
          </motion.h2>
          <motion.p variants={fadeUpVariants} className="text-base text-zinc-600">
            Every NexAgent Infra product is engineered around one standard: measurable operational throughput with zero ungrounded actions. Clearly delineated by deployment readiness.
          </motion.p>
        </motion.div>

        {/* Responsive Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {products.map((prod, idx) => {
            const Icon = prod.icon;
            const isFeatured = idx === 0;
            const isExpanded = expandedProductId === prod.id;

            return (
              <motion.div
                key={prod.id}
                variants={fadeUpVariants}
                className={`rounded-3xl bg-zinc-50 border border-zinc-200 hover:border-black hover:shadow-xl hover:shadow-black/5 p-6 sm:p-8 lg:p-10 transition-all flex flex-col justify-between group ${
                  isFeatured ? 'lg:col-span-12 xl:col-span-7' : idx === 1 ? 'lg:col-span-12 xl:col-span-5' : 'lg:col-span-6'
                }`}
              >
                <div className="space-y-6">
                  {/* Category & Status */}
                  <div className="flex items-center justify-between gap-4 flex-wrap">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-500 font-semibold">
                      {prod.category}
                    </span>
                    <span
                      className={`text-[9px] font-mono px-2.5 py-0.5 rounded-full border uppercase tracking-wider font-bold ${prod.statusColor}`}
                    >
                      {prod.status}
                    </span>
                  </div>

                  {/* Title & Icon */}
                  <div className="flex items-start gap-4">
                    <div className="p-3.5 rounded-2xl bg-white border border-zinc-200 text-zinc-900 group-hover:bg-black group-hover:text-white transition-colors shrink-0 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
                        {prod.name}
                      </h3>
                      <p className="text-sm text-zinc-600 leading-relaxed mt-2">
                        {prod.description}
                      </p>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-2 pt-2">
                    {prod.features.map((feat, fIdx) => (
                      <div
                        key={fIdx}
                        className="flex items-center gap-2.5 text-xs text-zinc-700"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-zinc-900 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Collapsible Inner Modules Button */}
                  <div className="pt-2">
                    <button
                      onClick={() => toggleProductExpand(prod.id)}
                      className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-zinc-100 border border-zinc-200 text-xs font-semibold text-zinc-900 flex items-center justify-between transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
                    >
                      <span className="flex items-center gap-2">
                        <Layers className="w-3.5 h-3.5 text-zinc-900" />
                        <span>{isExpanded ? 'Hide Inner Architecture Modules' : 'Inspect Inner Architecture & Sub-Modules'}</span>
                      </span>
                      <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
                        <ChevronDown className="w-4 h-4 text-zinc-500" />
                      </motion.div>
                    </button>

                    {/* Downward Expandable Module Drawer */}
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          key="product-submodules"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="pt-3 space-y-2.5">
                            {prod.subModules.map((sub, sIdx) => (
                              <div
                                key={sIdx}
                                className="p-3.5 rounded-xl bg-white border border-zinc-200 space-y-1.5"
                              >
                                <div className="flex items-center justify-between">
                                  <h6 className="text-xs font-bold text-zinc-900 flex items-center gap-1.5">
                                    <Cpu className="w-3 h-3 text-zinc-900" />
                                    <span>{sub.title}</span>
                                  </h6>
                                </div>
                                <p className="text-[11px] text-zinc-600 leading-relaxed">
                                  {sub.detail}
                                </p>
                                <div className="text-[10px] font-mono text-zinc-500 flex items-center gap-1 pt-1 border-t border-zinc-100">
                                  <ShieldCheck className="w-3 h-3 text-zinc-900" />
                                  <span>Gate: {sub.governance}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Bottom Bar: Outcome & Link */}
                <div className="pt-6 mt-6 border-t border-zinc-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block">
                      Operational Outcome
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-zinc-900">
                      {prod.outcome}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={onOpenStrategyCall}
                      className="text-xs font-bold uppercase tracking-wider text-zinc-900 hover:text-zinc-500 transition-colors"
                    >
                      Request Sandbox
                    </button>
                    <span className="text-zinc-300">·</span>
                    <Link
                      href={prod.href}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-zinc-900 hover:text-zinc-600 transition-colors"
                    >
                      <span>Full Specs</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
