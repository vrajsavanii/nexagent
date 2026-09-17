'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn } from './MotionWrapper';

interface WorkflowStep {
  step: string;
  name: string;
  desc: string;
}

interface IndustryWorkflow {
  id: string;
  label: string;
  category: string;
  headline: string;
  problem: string;
  solution: string;
  metric: string;
  metricSub: string;
  workflow: WorkflowStep[];
}

const industryWorkflows: IndustryWorkflow[] = [
  {
    id: 'healthcare',
    label: 'Healthcare',
    category: 'CLINICAL & LIFE SCIENCES',
    headline: 'Autonomous Clinical Documentation & Patient Coordination',
    problem: 'Physicians spend up to 4 hours daily entering EHR records, leading to burnout and delayed patient care.',
    solution: 'Ambient voice capture, structured clinical transcription, automated billing codes, and EHR synchronization.',
    metric: '2.4 HRS / DAY',
    metricSub: 'Saved Per Practicing Clinician',
    workflow: [
      { step: '01', name: 'Patient', desc: 'Digital intake & insurance verification' },
      { step: '02', name: 'Intake', desc: 'Symptom triage & medical history ingestion' },
      { step: '03', name: 'AI Processing', desc: 'Ambient consultation voice reasoning' },
      { step: '04', name: 'Documentation', desc: 'Automated SOAP notes & diagnostic codes' },
      { step: '05', name: 'Workflow', desc: 'Pharmacy script & lab order dispatch' },
      { step: '06', name: 'Records', desc: 'Bi-directional EHR sync (Epic / Cerner)' },
      { step: '07', name: 'Analytics', desc: 'Clinical throughput & patient outcome tracking' },
    ],
  },
  {
    id: 'hospitality',
    label: 'Hospitality',
    category: 'HOTELS, RESORTS & LUXURY',
    headline: 'Unified Guest Experience & Property Operations',
    problem: 'Siloed property management systems cause slow check-ins, missed guest requests, and lost ancillary revenue.',
    solution: 'Omnichannel virtual concierges, automated digital room key dispatch, and predictive facility maintenance.',
    metric: '+38% UPSELL',
    metricSub: 'Automated Ancillary Guest Spend',
    workflow: [
      { step: '01', name: 'Guest', desc: 'Direct booking or OTA reservation ingestion' },
      { step: '02', name: 'Booking', desc: 'Automated room assignment & preference capture' },
      { step: '03', name: 'Communication', desc: 'Multi-lingual WhatsApp/SMS virtual concierge' },
      { step: '04', name: 'Operations', desc: 'Smart sensor dispatch for housekeeping & dining' },
      { step: '05', name: 'Payment', desc: 'Contactless folio settlement & digital billing' },
      { step: '06', name: 'Analytics', desc: 'Guest satisfaction scoring & RevPAR telemetry' },
    ],
  },
  {
    id: 'b2b-sales',
    label: 'B2B Sales',
    category: 'ENTERPRISE PIPELINE & REV-OPS',
    headline: 'Autonomous Outbound & Account Intelligence',
    problem: 'Sales teams lose 65% of productive time researching accounts, typing notes, and manual outreach.',
    solution: 'Continuous buyer intent tracking, automated hyper-personalized research briefs, and CRM deal acceleration.',
    metric: '4.8X VELOCITY',
    metricSub: 'Pipeline Conversion Acceleration',
    workflow: [
      { step: '01', name: 'Lead', desc: 'First-party visitor intent & outbound trigger' },
      { step: '02', name: 'AI Qualification', desc: 'Real-time ICP scoring & financial enrichment' },
      { step: '03', name: 'Outreach', desc: 'Personalized multi-channel sequence dispatch' },
      { step: '04', name: 'CRM', desc: 'Zero-touch contact record creation & note sync' },
      { step: '05', name: 'Sales', desc: 'Automated executive calendar scheduling' },
      { step: '06', name: 'Follow-up', desc: 'Autonomous post-call synthesis & proposal drafting' },
      { step: '07', name: 'Analytics', desc: 'Pipeline velocity, win-rate diagnostics & ARR forecast' },
    ],
  },
  {
    id: 'fintech',
    label: 'Financial Services',
    category: 'BANKING, ASSET MGMT & FINTECH',
    headline: 'High-Throughput Settlement & Regulatory Verification',
    problem: 'Manual compliance reviews and disparate legacy banking ledgers stall transaction clearing.',
    solution: 'Automated KYC/AML verification, instant reconciliation event bus, and institutional reporting.',
    metric: '< 140MS',
    metricSub: 'Transaction Clearing Latency',
    workflow: [
      { step: '01', name: 'Applicant', desc: 'Institutional onboarding document ingestion' },
      { step: '02', name: 'KYC/AML', desc: 'Automated sanction check & identity validation' },
      { step: '03', name: 'Risk Scoring', desc: 'Real-time fraud detection & credit modeling' },
      { step: '04', name: 'Execution', desc: 'Multi-currency ledger transfer & settlement' },
      { step: '05', name: 'Audit', desc: 'Immutable regulatory reporting & record filing' },
      { step: '06', name: 'Analytics', desc: 'Portfolio exposure & liquidity telemetry' },
    ],
  },
  {
    id: 'retail',
    label: 'Retail & E-Commerce',
    category: 'OMNICHANNEL COMMERCE',
    headline: 'Predictive Inventory & Contextual Customer Support',
    problem: 'Stockouts, high customer return rates, and disconnected order fulfillment channels.',
    solution: 'Autonomous stock re-ordering, conversational return handling, and dynamic promotions.',
    metric: '-44% RETURNS',
    metricSub: 'Through Predictive Sizing AI',
    workflow: [
      { step: '01', name: 'Shopper', desc: 'Omnichannel cart interaction & behavioral tracking' },
      { step: '02', name: 'Recommendation', desc: 'Real-time catalog personalization' },
      { step: '03', name: 'Checkout', desc: 'One-click automated fraud-free payment' },
      { step: '04', name: 'Fulfillment', desc: 'Automated warehouse routing & carrier selection' },
      { step: '05', name: 'Support', desc: 'Conversational return and order exchange AI' },
      { step: '06', name: 'Analytics', desc: 'LTV, repeat purchase & inventory turnover' },
    ],
  },
  {
    id: 'logistics',
    label: 'Logistics & Supply Chain',
    category: 'FREIGHT & GLOBAL FLEETS',
    headline: 'Autonomous Route Optimization & Freight Dispatch',
    problem: 'Port delays, uncoordinated carriers, and manual bill-of-lading processing waste fuel and hours.',
    solution: 'Dynamic rerouting algorithms, automated customs document extraction, and carrier messaging.',
    metric: '-22% FUEL COST',
    metricSub: 'Dynamic Route Optimization',
    workflow: [
      { step: '01', name: 'Cargo', desc: 'Bill of lading ingestion & customs pre-clearance' },
      { step: '02', name: 'Telematics', desc: 'Live GPS & weather disruption monitoring' },
      { step: '03', name: 'Route AI', desc: 'Autonomous re-routing around traffic & chokepoints' },
      { step: '04', name: 'Carrier Dispatch', desc: 'Instant automated driver assignment' },
      { step: '05', name: 'Delivery Sync', desc: 'Real-time proof of delivery & ERP billing' },
      { step: '06', name: 'Analytics', desc: 'On-time delivery rate & fleet fuel efficiency' },
    ],
  },
  {
    id: 'manufacturing',
    label: 'Manufacturing',
    category: 'INDUSTRIAL AUTOMATION',
    headline: 'Predictive Maintenance & Shop-Floor Telemetry',
    problem: 'Unplanned machine downtime stops assembly lines and costs tens of thousands of dollars per hour.',
    solution: 'IoT sensor vibration analysis, automated maintenance scheduling, and parts reordering.',
    metric: '99.4% UPTIME',
    metricSub: 'Industrial Line Availability',
    workflow: [
      { step: '01', name: 'Machine', desc: 'High-frequency IoT vibration and thermal sensor stream' },
      { step: '02', name: 'Anomaly AI', desc: 'Predictive failure pattern recognition' },
      { step: '03', name: 'Work Order', desc: 'Automated technician dispatch & safety checklist' },
      { step: '04', name: 'Parts', desc: 'Automated spare part procurement via ERP' },
      { step: '05', name: 'Verification', desc: 'Post-repair calibration & performance audit' },
      { step: '06', name: 'Analytics', desc: 'Overall equipment effectiveness (OEE)' },
    ],
  },
];

export default function IndustryDemonstrations() {
  const [activeIndustry, setActiveIndustry] = useState<IndustryWorkflow>(industryWorkflows[0]);
  const [hoveredStepIndex, setHoveredStepIndex] = useState<number | null>(null);

  return (
    <section className="w-full py-24 bg-surface-container-low border-b border-outline-variant/30 relative" id="industries">
      <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin space-y-12">
        {/* Section Header */}
        <FadeIn direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-outline-variant/30">
            <div>
              <span className="font-label-code text-label-code uppercase tracking-widest text-primary font-semibold">
                SECTOR ADAPTATION
              </span>
              <h2 className="font-headline-lg text-headline-lg uppercase text-on-surface tracking-tight mt-2">
                EVERY INDUSTRY HAS A DIFFERENT PROBLEM.
              </h2>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md">
              Technology should adapt to the business — not the other way around. Select an industry to observe its
              continuous autonomous pipeline morph in real time.
            </p>
          </div>
        </FadeIn>

        {/* Industry Selector Tabs */}
        <div className="flex flex-wrap gap-2">
          {industryWorkflows.map((ind) => {
            const isSelected = activeIndustry.id === ind.id;
            return (
              <button
                key={ind.id}
                onClick={() => setActiveIndustry(ind)}
                className={`px-4 py-2 font-label-code text-xs uppercase tracking-wider transition-all relative ${
                  isSelected
                    ? 'bg-on-surface text-surface font-semibold shadow-sm'
                    : 'bg-surface-container-lowest border border-outline-variant/40 text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
                }`}
              >
                {ind.label}
                {isSelected && (
                  <motion.div
                    layoutId="activeIndustryUnderline"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Morphing Workflow Visualization Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndustry.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22 }}
            className="p-8 bg-surface-container-lowest border border-outline-variant/60 shadow-sm space-y-8"
          >
            {/* Top Details & Verified Metric */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 border-b border-outline-variant/30 gap-6">
              <div className="space-y-1">
                <span className="font-mono text-[10px] text-primary uppercase font-bold tracking-wider">
                  {activeIndustry.category}
                </span>
                <h3 className="font-headline-md text-headline-md uppercase font-bold text-on-surface">
                  {activeIndustry.headline}
                </h3>
                <p className="font-body-sm text-on-surface-variant max-w-2xl mt-1">
                  <strong>Challenge:</strong> {activeIndustry.problem}
                </p>
                <p className="font-body-sm text-on-surface max-w-2xl mt-1">
                  <strong>NexAgent System:</strong> {activeIndustry.solution}
                </p>
              </div>

              <div className="p-4 bg-surface-container-low border border-outline-variant/40 text-right min-w-[200px]">
                <span className="font-mono text-[10px] text-outline uppercase block">MEASURABLE IMPACT</span>
                <span className="font-display-hero-mobile text-headline-sm font-bold text-primary block mt-0.5">
                  {activeIndustry.metric}
                </span>
                <span className="font-body-sm text-[11px] text-on-surface-variant block mt-0.5">
                  {activeIndustry.metricSub}
                </span>
              </div>
            </div>

            {/* Workflow Step Progression Visualization */}
            <div className="space-y-4">
              <div className="flex items-center justify-between font-mono text-[11px] text-outline uppercase">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                  AUTONOMOUS DATA FLOW PIPELINE
                </span>
                <span>{activeIndustry.workflow.length} CONNECTED STAGES</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-3">
                {activeIndustry.workflow.map((item, idx) => {
                  const isHovered = hoveredStepIndex === idx;
                  return (
                    <div
                      key={item.name}
                      onMouseEnter={() => setHoveredStepIndex(idx)}
                      onMouseLeave={() => setHoveredStepIndex(null)}
                      className={`p-4 border transition-all flex flex-col justify-between h-36 relative ${
                        isHovered
                          ? 'bg-surface-container-low border-primary shadow-sm scale-[1.02]'
                          : 'bg-surface-container-low/70 border-outline-variant/30 hover:border-outline-variant'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-[10px] text-primary font-bold">{item.step}</span>
                          {idx < activeIndustry.workflow.length - 1 && (
                            <span className="material-symbols-outlined text-[14px] text-outline hidden lg:inline-block">
                              arrow_forward
                            </span>
                          )}
                        </div>
                        <h4 className="font-label-code text-xs uppercase font-bold text-on-surface mt-2">
                          {item.name}
                        </h4>
                      </div>

                      <p className="font-body-sm text-[11px] text-on-surface-variant leading-snug">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="pt-4 border-t border-outline-variant/20 font-mono text-xs text-on-surface-variant flex items-center justify-between">
              <span>ACTIVE ADAPTIVE SPECIFICATION</span>
              <span className="text-primary font-semibold">ZERO RELOAD INTERPOLATION</span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
