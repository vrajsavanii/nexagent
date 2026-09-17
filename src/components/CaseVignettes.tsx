'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn } from './MotionWrapper';
import { ContextualCTA } from './CtaSystem';

interface CaseStudyArchitecture {
  id: string;
  category: 'HEALTHCARE' | 'B2B SALES' | 'HOSPITALITY';
  title: string;
  subtitle: string;
  problem: string;
  system: string;
  automation: string;
  result: string;
  diagramSteps: string[];
}

const caseStudies: CaseStudyArchitecture[] = [
  {
    id: 'healthcare',
    category: 'HEALTHCARE',
    title: 'Intelligent Documentation & Clinical Workflow',
    subtitle: '450-Provider Regional Healthcare System',
    problem: 'Clinicians spent an average of 3.8 hours daily on manual EHR data entry, causing clinical documentation backlogs and severe physician burnout.',
    system: 'NexAgent deployed an ambient voice intelligence system with private medical NLP models and bi-directional Epic EHR connector pipelines.',
    automation: 'Automated real-time speech-to-SOAP transcription, diagnostic billing code suggestions (ICD-10 / CPT), and zero-touch pharmacy prescription dispatch.',
    result: 'Completely eliminated after-hours documentation backlogs, reclaimed 2.4 clinical hours per physician per day, and boosted billing accuracy to 99.2%.',
    diagramSteps: ['Ambient Capture', 'Medical NLP', 'SOAP Note AI', 'EHR Ingestion', 'Billing Dispatch'],
  },
  {
    id: 'b2b-sales',
    category: 'B2B SALES',
    title: 'Autonomous Lead Generation & Sales Automation',
    subtitle: 'High-Growth Global Enterprise B2B SaaS',
    problem: 'Sales development representatives were bogged down by manual prospecting, shallow cold emails, and fragmented CRM pipeline tracking with 30-day response delays.',
    system: 'NexAgent engineered an autonomous outbound intent engine synchronized directly with Snowflake data warehouse and CRM sales pipelines.',
    automation: 'Autonomous buyer intent scoring, algorithmic proposal drafting, calendar routing, and automated deal stage velocity progression.',
    result: 'Accelerated sales deal velocity by 4.8x, increased qualified pipeline conversion by 310%, and generated +$4.2M in incremental pipeline ARR.',
    diagramSteps: ['Intent Scraping', 'ICP Scoring', 'Personalized Brief', 'CRM Sync', 'Calendar Auto-Book'],
  },
  {
    id: 'hospitality',
    category: 'HOSPITALITY',
    title: 'Omnichannel Business Management & Guest Operations',
    subtitle: 'Luxury Resort & Boutique Hotel Collection',
    problem: 'Guests experienced lengthy front-desk check-in queues, missed concierge inquiries across phone and WhatsApp, and disconnected restaurant and spa bookings.',
    system: 'NexAgent consolidated 6 disparate legacy property management and POS databases into a unified, event-driven guest operating platform.',
    automation: 'Sub-140ms multi-lingual voice & WhatsApp virtual concierges, automated digital mobile key issuance, and smart housekeeping sensor dispatch.',
    result: 'Maintained a 98.4% guest satisfaction (CSAT) rating, lowered front-desk phone wait times from 8 minutes to 0 seconds, and increased ancillary upsells by +38%.',
    diagramSteps: ['Guest Booking', 'Virtual Concierge', 'Digital Key', 'Folio Sync', 'Automated Checkout'],
  },
];

export default function CaseVignettes() {
  const [activeCaseId, setActiveCaseId] = useState<string>('healthcare');

  const activeCase = caseStudies.find((c) => c.id === activeCaseId) || caseStudies[0];

  return (
    <section className="w-full py-24 bg-surface border-b border-outline-variant/30 relative" id="case-studies">
      <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin space-y-12">
        {/* Section Header */}
        <FadeIn direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-outline-variant/30">
            <div>
              <span className="font-label-code text-label-code uppercase tracking-widest text-primary font-semibold">
                ENTERPRISE BLUEPRINTS
              </span>
              <h2 className="font-headline-lg text-headline-lg uppercase text-on-surface tracking-tight mt-2">
                SYSTEM ARCHITECTURE CASE STUDIES.
              </h2>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md">
              Detailed system breakdowns demonstrating how NexAgent bridges problem, system, automation, and quantifiable results.
            </p>
          </div>
        </FadeIn>

        {/* Case Study Category Selector */}
        <div className="flex flex-wrap gap-2">
          {caseStudies.map((c) => {
            const isSelected = activeCase.id === c.id;
            return (
              <button
                key={c.id}
                onClick={() => setActiveCaseId(c.id)}
                className={`px-5 py-3 font-label-code text-xs uppercase tracking-wider transition-all flex items-center gap-3 ${
                  isSelected
                    ? 'bg-on-surface text-surface font-semibold shadow-sm'
                    : 'bg-surface-container-low border border-outline-variant/40 text-on-surface hover:bg-surface-container'
                }`}
              >
                <span>{c.category}</span>
                <span className="font-mono text-[10px] opacity-70">// ARCHITECTURE</span>
              </button>
            );
          })}
        </div>

        {/* Active Case Study Structural Architecture Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCase.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="p-8 lg:p-10 bg-surface-container-lowest border border-outline-variant/60 shadow-sm space-y-8"
          >
            {/* Top Identity */}
            <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-outline-variant/30 gap-4">
              <div>
                <span className="font-mono text-[10px] text-primary uppercase font-bold tracking-wider">
                  CASE STUDY // {activeCase.category}
                </span>
                <h3 className="font-headline-md text-headline-md uppercase font-bold text-on-surface mt-1">
                  {activeCase.title}
                </h3>
                <p className="font-body-sm text-on-surface-variant mt-0.5">{activeCase.subtitle}</p>
              </div>
              <span className="font-mono text-xs px-3 py-1 bg-primary/10 text-primary border border-primary/20 w-fit">
                VERIFIED DEPLOYMENT
              </span>
            </div>

            {/* Visual System Diagram */}
            <div className="p-6 bg-surface-container-low border border-outline-variant/40 space-y-4">
              <div className="flex items-center justify-between font-mono text-[10px] text-outline uppercase">
                <span>SYSTEM DIAGRAM // DATA FLOW</span>
                <span>STATE RECONCILIATION: ACTIVE</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3">
                {activeCase.diagramSteps.map((step, idx) => (
                  <div
                    key={step}
                    className="p-3 bg-surface-container-lowest border border-outline-variant/30 flex items-center justify-between"
                  >
                    <div>
                      <span className="font-mono text-[9px] text-primary block">0{idx + 1}</span>
                      <span className="font-label-code text-xs uppercase font-bold text-on-surface">
                        {step}
                      </span>
                    </div>
                    {idx < activeCase.diagramSteps.length - 1 && (
                      <span className="material-symbols-outlined text-[16px] text-outline hidden md:inline-block">
                        arrow_forward
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* 4 Pillars: PROBLEM, SYSTEM, AUTOMATION, RESULT */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
              <div className="space-y-2 p-5 bg-surface-container-low border border-outline-variant/30 flex flex-col justify-between">
                <div>
                  <span className="font-label-code text-label-code uppercase font-bold text-outline block">
                    01 // PROBLEM
                  </span>
                  <p className="font-body-sm text-on-surface-variant mt-2 leading-relaxed">
                    {activeCase.problem}
                  </p>
                </div>
                <div className="pt-4 border-t border-outline-variant/20 font-mono text-[10px] text-outline">
                  CHALLENGE STATEMENT
                </div>
              </div>

              <div className="space-y-2 p-5 bg-surface-container-low border border-outline-variant/30 flex flex-col justify-between">
                <div>
                  <span className="font-label-code text-label-code uppercase font-bold text-on-surface block">
                    02 // SYSTEM
                  </span>
                  <p className="font-body-sm text-on-surface-variant mt-2 leading-relaxed">
                    {activeCase.system}
                  </p>
                </div>
                <div className="pt-4 border-t border-outline-variant/20 font-mono text-[10px] text-outline">
                  ARCHITECTURAL BLUEPRINT
                </div>
              </div>

              <div className="space-y-2 p-5 bg-surface-container-low border border-outline-variant/30 flex flex-col justify-between">
                <div>
                  <span className="font-label-code text-label-code uppercase font-bold text-secondary block">
                    03 // AUTOMATION
                  </span>
                  <p className="font-body-sm text-on-surface-variant mt-2 leading-relaxed">
                    {activeCase.automation}
                  </p>
                </div>
                <div className="pt-4 border-t border-outline-variant/20 font-mono text-[10px] text-outline">
                  EXECUTION LOGIC
                </div>
              </div>

              <div className="space-y-2 p-5 bg-primary/05 border-2 border-primary/40 flex flex-col justify-between shadow-xs">
                <div>
                  <span className="font-label-code text-label-code uppercase font-bold text-primary block">
                    04 // RESULT
                  </span>
                  <p className="font-body-sm text-on-surface mt-2 font-medium leading-relaxed">
                    {activeCase.result}
                  </p>
                </div>
                <div className="pt-4 border-t border-primary/20 font-mono text-[10px] text-primary font-bold">
                  QUANTIFIED IMPACT
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Contextual Conversion Callout (Section 12) */}
        <div className="p-8 bg-surface-container-low border border-outline-variant/50 rounded flex flex-col sm:flex-row items-center justify-between gap-6 mt-8">
          <div className="space-y-1 text-center sm:text-left">
            <span className="font-mono text-[10px] text-primary uppercase font-bold tracking-wider">
              SIMILAR ARCHITECTURAL CHALLENGE?
            </span>
            <h3 className="font-display text-xl uppercase font-bold text-on-surface">
              Have a similar challenge in your organization?
            </h3>
            <p className="font-sans text-xs text-on-surface-variant max-w-lg">
              Our systems architects can evaluate your existing workflows and design a comparable autonomous pipeline.
            </p>
          </div>
          <ContextualCTA
            label="Discuss Your Challenge"
            href="/book-a-strategy-call"
            location="case_studies_bottom"
            variant="primary"
          />
        </div>
      </div>
    </section>
  );
}
