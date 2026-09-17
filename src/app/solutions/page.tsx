'use client';

import React, { useState } from 'react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/MotionWrapper';
import { ContextualCTA } from '@/components/CtaSystem';
import { PageContainer, SectionContainer, SectionHeader } from '@/components/ui';

export default function SolutionsPage() {
  const [activeTab, setActiveTab] = useState('healthcare');

  const industries = [
    {
      id: 'healthcare',
      label: 'Healthcare & Life Sciences',
      headline: 'Ambient Clinical Documentation & Physician Workflow Automation',
      description:
        'Eliminating administrative friction and clinician burnout through HIPAA-compliant ambient AI scribing, automated SOAP note generation, and seamless bidirectional EHR synchronization.',
      benefit: '2.4 Hours / Day',
      benefitLabel: 'Recovered per Physician',
      steps: [
        { num: '01', title: 'Digital Patient Intake', desc: 'Secure mobile pre-registration and insurance verification' },
        { num: '02', title: 'Ambient Audio Stream', desc: 'Real-time room audio processed with medical-domain models' },
        { num: '03', title: 'Clinical SOAP Structuring', desc: 'Subjective, objective, assessment, and plan generated instantly' },
        { num: '04', title: 'Orders & Prescriptions', desc: 'Automated diagnostic lab orders and e-prescribe dispatch' },
        { num: '05', title: 'EHR Synchronization', desc: 'Sub-second direct integration into Epic, Cerner, or Athena' },
        { num: '06', title: 'Claims & Coding Verification', desc: 'ICD-10 / CPT code cross-check with zero billing denials' },
      ],
      caseStudy: {
        client: 'Regional Hospital Network (12 Facilities)',
        result: 'Saved 48,000+ administrative physician hours annually and accelerated outpatient patient throughput by 28%.',
      },
    },
    {
      id: 'finance',
      label: 'Financial Services & Fintech',
      headline: 'Deterministic Risk Underwriting & Algorithmic Ledger Clearing',
      description:
        'Continuous AML screening, real-time transaction reconciliation, and automated credit assessment across cross-border banking corridors with cryptographic auditability.',
      benefit: '< 140ms',
      benefitLabel: 'Clearing & Risk Decision Latency',
      steps: [
        { num: '01', title: 'Transaction Ingestion', desc: 'High-throughput ISO-20022 payment payload parsing' },
        { num: '02', title: 'Global Sanctions Audit', desc: 'Instant real-time checks across OFAC and EU lists' },
        { num: '03', title: 'Behavioral Fraud Model', desc: 'Neural pattern scoring with sub-15ms inference' },
        { num: '04', title: 'Liquidity Optimization', desc: 'Dynamic routing across multi-institution banking rails' },
        { num: '05', title: 'Settlement Dispatch', desc: 'Instant domestic and international rail settlement' },
        { num: '06', title: 'Immutable Ledger Audit', desc: 'Cryptographically sealed audit trail for regulators' },
      ],
      caseStudy: {
        client: 'Cross-Border Payments Institution',
        result: 'Processed $4.2B in volume with a 99.98% clean settlement rate and reduced manual compliance reviews by 82%.',
      },
    },
    {
      id: 'b2b',
      label: 'B2B Enterprise & Commerce',
      headline: 'Autonomous Revenue Operations & Pipeline Intelligence',
      description:
        'Turning buyer intent signals into qualified executive meetings with zero manual data entry. Automated account enrichment, objection handling, and real-time deal brief synthesis.',
      benefit: '4.8x',
      benefitLabel: 'Lead-to-Meeting Acceleration',
      steps: [
        { num: '01', title: 'Intent Signal Detection', desc: 'First-party visitor telemetry and firmographic intent capture' },
        { num: '02', title: 'Deep Tech Stack Enrichment', desc: 'Automated executive mapping and organizational context' },
        { num: '03', title: 'Personalized Conversation', desc: 'Adaptive multi-channel outreach tailored to pain points' },
        { num: '04', title: 'Objection Navigation', desc: 'Context-aware responses referencing case studies and ROI' },
        { num: '05', title: 'Account Executive Booking', desc: 'Direct calendar scheduling with zero human friction' },
        { num: '06', title: 'Executive Brief Synthesis', desc: 'Comprehensive pre-call dossier generated in CRM' },
      ],
      caseStudy: {
        client: 'Enterprise SaaS Unicorn ($120M ARR)',
        result: 'Decreased inbound response time from 4 hours to 45 seconds, resulting in a 42% lift in qualified sales pipeline.',
      },
    },
    {
      id: 'logistics',
      label: 'Supply Chain & Logistics',
      headline: 'Predictive Freight Routing & Automated Bill-of-Lading Ingestion',
      description:
        'Multimodal optical document parsing, live telematics tracking, and proactive port congestion avoidance for international shipping and freight logistics operators.',
      benefit: '-31%',
      benefitLabel: 'Detention & Demurrage Penalties',
      steps: [
        { num: '01', title: 'Document Optical Extraction', desc: 'Instant multimodal parsing of manifests and bills of lading' },
        { num: '02', title: 'Carrier Capacity Matching', desc: 'Algorithmic spot and contract rate assignment' },
        { num: '03', title: 'Dynamic Weather & Port Reroute', desc: 'Proactive avoidance of choke points and strikes' },
        { num: '04', title: 'Cold-Chain IoT Telemetry', desc: 'Continuous temperature and vibration sensor tracking' },
        { num: '05', title: 'Customs Clearance Automation', desc: 'Automated electronic document filing with authorities' },
        { num: '06', title: 'Proof of Delivery Signoff', desc: 'Digital custody verification and automatic invoicing' },
      ],
      caseStudy: {
        client: 'Intermodal Freight Forwarder',
        result: 'Automated 120,000 documents per quarter and reduced demurrage penalty expenses by $2.8M.',
      },
    },
    {
      id: 'hospitality',
      label: 'Hospitality & Luxury Retail',
      headline: 'Connected Guest Operations & Predictive Service Orchestration',
      description:
        'Unified guest profiles, contactless mobile room key issuance, predictive room servicing, and automated ancillary revenue optimization.',
      benefit: '+38%',
      benefitLabel: 'Ancillary Revenue per Guest',
      steps: [
        { num: '01', title: 'Pre-Arrival Guest Profiling', desc: 'Personalized itinerary and room upgrade recommendations' },
        { num: '02', title: 'Mobile Cloud Check-in', desc: 'Digital keycard dispatched to Apple Wallet / Google Wallet' },
        { num: '03', title: 'Multilingual AI Concierge', desc: 'Sub-second response to room service and local bookings' },
        { num: '04', title: 'Presence-Based Housekeeping', desc: 'IoT door sensors routing teams to unoccupied rooms' },
        { num: '05', title: 'Unified Folio Balancing', desc: 'Automated real-time expense reconciliation across outlets' },
        { num: '06', title: 'Express Departure & Review AI', desc: 'Instant check-out with automated sentiment follow-up' },
      ],
      caseStudy: {
        client: 'Luxury Boutique Resort Collection',
        result: 'Elevated guest satisfaction scores to 98% while reducing front desk queue times to zero during peak arrival windows.',
      },
    },
  ];

  const current = industries.find((i) => i.id === activeTab) || industries[0];

  return (
    <div className="w-full min-h-screen bg-[#F7F7F5] text-[#17191A] pt-28 pb-20">

      {/* ── Hero Section ────────────────────────────────────────────────────── */}
      <SectionContainer border="bottom" size="sm">
        <PageContainer>
          <FadeIn>
            <SectionHeader
              eyebrow="NEXAGENT / ENTERPRISE SYSTEMS"
              heading="Solutions Engineered For Complex Operational Ecosystems."
              accentWord="Complex Operational Ecosystems."
              headingAs="h1"
              headingSize="xl"
              description="Every industry operates under distinct regulatory mandates, technical legacy systems, and commercial tempos. NexAgent engineers tailored, turnkey operating architectures designed for immediate enterprise impact."
            />
          </FadeIn>
        </PageContainer>
      </SectionContainer>

      {/* ── Interactive Industry Switcher ─────────────────────────────────── */}
      <SectionContainer border="bottom" size="md">
        <PageContainer>
          {/* Industry Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none border-b border-[rgba(23,25,26,0.10)] mb-10">
            {industries.map((ind) => (
              <button
                key={ind.id}
                type="button"
                onClick={() => setActiveTab(ind.id)}
                className={[
                  'px-4 py-2 rounded-full text-xs font-medium tracking-wide whitespace-nowrap transition-all duration-150',
                  activeTab === ind.id
                    ? 'bg-[#17191A] text-white shadow-sm'
                    : 'bg-white hover:bg-[rgba(23,25,26,0.05)] text-[#57595B] border border-[rgba(23,25,26,0.10)]',
                ].join(' ')}
                aria-pressed={activeTab === ind.id}
              >
                {ind.label}
              </button>
            ))}
          </div>

          {/* Active Industry Showcase */}
          <FadeIn key={current.id} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Overview & Metric */}
            <div className="lg:col-span-5 space-y-5">
              <div className="p-6 bg-white rounded border border-[rgba(23,25,26,0.10)] shadow-sm space-y-4">
                <span className="font-mono text-[11px] text-[#3D9D99] uppercase tracking-wider font-semibold block">
                  {current.label} Architecture
                </span>
                <h2 className="text-xl font-semibold text-[#17191A] leading-snug tracking-tight">
                  {current.headline}
                </h2>
                <p className="text-sm text-[#57595B] leading-relaxed">
                  {current.description}
                </p>
                <div className="pt-4 border-t border-[rgba(23,25,26,0.08)]">
                  <span className="text-4xl font-bold text-[#3D9D99] block leading-none">
                    {current.benefit}
                  </span>
                  <span className="font-mono text-xs text-[#57595B] mt-1 block">
                    {current.benefitLabel}
                  </span>
                </div>
              </div>

              {/* Case Study */}
              <div className="p-6 bg-[#17191A] text-white rounded shadow-md space-y-3">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#3D9D99] block">
                  Enterprise Deployment Result
                </span>
                <h3 className="text-sm font-semibold">{current.caseStudy.client}</h3>
                <p className="text-xs text-[#B9BCBA] leading-relaxed">
                  {current.caseStudy.result}
                </p>
              </div>
            </div>

            {/* Right: 6-Step Workflow */}
            <div className="lg:col-span-7">
              <h3 className="font-mono text-[11px] uppercase tracking-wider text-[#57595B] mb-4">
                End-to-End System Workflow
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {current.steps.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-5 bg-white rounded border border-[rgba(23,25,26,0.10)] shadow-sm hover:border-[rgba(61,157,153,0.4)] transition-all duration-150 flex flex-col justify-between space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-[#3D9D99]">{step.num}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3D9D99]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-[#17191A]">{step.title}</h4>
                      <p className="text-xs text-[#57595B] mt-1 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </PageContainer>
      </SectionContainer>

      {/* ── Deployment Engagement Model ──────────────────────────────────── */}
      <SectionContainer size="md">
        <PageContainer>
          <FadeIn className="text-center max-w-3xl mx-auto">
            <SectionHeader
              eyebrow="NEXAGENT / ENGINEERING METHODOLOGY"
              heading="How We Deploy Custom Systems."
              accentWord="Custom Systems."
              description="We partner directly with executive stakeholders and internal engineering teams through a rigorous four-phase deployment model engineered to deploy production systems within accelerated operational timelines."
              align="center"
            />
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-10">
            {[
              { phase: 'Phase 01', title: 'Architecture Audit',    desc: 'Deep mapping of legacy software, API surfaces, manual operational bottlenecks, and security boundaries.',                              duration: '2 Weeks' },
              { phase: 'Phase 02', title: 'Sandbox Prototyping',   desc: 'Building isolated, production-spec prototypes running fine-tuned models on private data partitions.',                              duration: '3 Weeks' },
              { phase: 'Phase 03', title: 'Phased Integration',    desc: 'Gradual canary deployment with real-time audit tracing, zero downtime, and automated rollback guardrails.',                       duration: '4 Weeks' },
              { phase: 'Phase 04', title: 'Autonomous Scaling',    desc: 'Handover to internal teams with continuous model fine-tuning, latency optimization, and 24/7 SLA support.',                      duration: 'Continuous' },
            ].map(({ phase, title, desc, duration }) => (
              <StaggerItem key={phase}>
                <div className="p-6 bg-white rounded border border-[rgba(23,25,26,0.10)] h-full flex flex-col justify-between space-y-4">
                  <span className="font-mono text-sm font-bold text-[#3D9D99]">{phase}</span>
                  <div>
                    <h3 className="text-sm font-semibold text-[#17191A]">{title}</h3>
                    <p className="text-xs text-[#57595B] mt-2 leading-relaxed">{desc}</p>
                  </div>
                  <span className="text-[11px] font-mono text-[#57595B]">Duration: {duration}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <div className="text-center pt-10 flex flex-wrap items-center justify-center gap-3">
            <ContextualCTA
              label="Discuss Your Business Challenge"
              href="/book-a-strategy-call"
              location="solutions_bottom"
              variant="primary"
            />
            <ContextualCTA
              label="Talk to NexAgent"
              href="/contact"
              location="solutions_bottom"
              variant="secondary"
            />
          </div>
        </PageContainer>
      </SectionContainer>
    </div>
  );
}
