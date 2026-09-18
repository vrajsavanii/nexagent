'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/MotionWrapper';
import { Breadcrumbs } from '@/components/content';

interface SolutionCategory {
  id: string;
  number: string;
  problem: string;
  title: string;
  summary: string;
  capabilities: string[];
  deliverables: string[];
  slug: string;
}

export default function SolutionsPage() {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const solutionList: SolutionCategory[] = [
    {
      id: 'automate-operations',
      number: '01',
      problem: 'Fragmented internal processes & manual bottlenecks',
      title: 'Automate Internal Operations',
      summary:
        'Connect disparate business software, eliminate repetitive human data re-entry, and orchestrate automated multi-step operations across departments.',
      capabilities: [
        'Multi-system workflow orchestration and task routing',
        'Automated approval workflows and notification escalation',
        'Inventory, order, and dispatch synchronization',
        'Exception handling and audit trail preservation',
      ],
      deliverables: ['Custom automation pipelines', 'Webhook integrations', 'Operations control plane'],
      slug: 'business-automation',
    },
    {
      id: 'automate-sales',
      number: '02',
      problem: 'Slow lead response times & scattered deal context',
      title: 'Automate Sales & Lead Generation',
      summary:
        'Engage, qualify, and route prospects the second they express interest. Automate CRM data entry, meeting preparation, and multi-channel outreach.',
      capabilities: [
        'Instant inbound lead enrichment and scoring',
        'Autonomous calendar scheduling and meeting coordination',
        'CRM record updates and deal stage synchronization',
        'Pre-call executive research briefs and dossier compilation',
      ],
      deliverables: ['Lead qualification engine', 'CRM sync connectors', 'Meeting assistant'],
      slug: 'sales-automation',
    },
    {
      id: 'automate-marketing',
      number: '03',
      problem: 'Manual campaign execution & disconnected attribution',
      title: 'Automate Marketing Workflows',
      summary:
        'Streamline content distribution, customer lifecycle segmentation, and cross-channel campaign orchestration without manual friction.',
      capabilities: [
        'Behavioral segmentation and personalized messaging triggers',
        'Automated multi-channel campaign publishing',
        'Lead source attribution and conversion tracking',
        'A/B test coordination and performance alerts',
      ],
      deliverables: ['Campaign automation pipelines', 'Attribution dashboards', 'Audience segment sync'],
      slug: 'marketing-automation',
    },
    {
      id: 'customer-communication',
      number: '04',
      problem: 'Slow customer response times & overwhelmed support staff',
      title: 'Automate Customer Communication',
      summary:
        'Provide instant, accurate, 24/7 assistance across web, email, WhatsApp, and messaging platforms that solves customer requests directly.',
      capabilities: [
        'Omnichannel customer support integration',
        'Direct order tracking, booking adjustments, and refund handling',
        'Multilingual inquiry classification and sentiment routing',
        'Automated ticket creation and escalation to human staff',
      ],
      deliverables: ['Conversational AI assistants', 'Zendesk / Freshdesk integrations', 'Knowledge base sync'],
      slug: 'ai-assistants',
    },
    {
      id: 'voice-agents',
      number: '05',
      problem: 'High telephone wait times & abandoned phone calls',
      title: 'Deploy AI Voice Agents',
      summary:
        'Ultra-low latency conversational voice agents that answer telephone calls, answer questions, take reservations, and route urgent matters.',
      capabilities: [
        'Sub-200ms conversational turn-taking with natural interruption',
        'Direct telephony PBX / SIP trunking and Twilio integration',
        'Real-time reservation, appointment, and CRM booking',
        'Audio transcription and call summary generation',
      ],
      deliverables: ['Custom voice runtime', 'Telephony gateway', 'PMS / CRM booking connectors'],
      slug: 'voice-ai',
    },
    {
      id: 'ai-assistants',
      number: '06',
      problem: 'Employees losing hours searching for information',
      title: 'Build Internal AI Assistants',
      summary:
        'Equip your team with specialized AI assistants connected to your internal documents, SOPs, codebases, and databases.',
      capabilities: [
        'Secure semantic retrieval across company knowledge bases',
        'Strict document citation and source verification',
        'Role-based access control ensuring confidential data remains isolated',
        'Slack and Microsoft Teams native integration',
      ],
      deliverables: ['Internal enterprise assistant', 'Document indexing pipeline', 'Team permission matrix'],
      slug: 'ai-agents',
    },
    {
      id: 'modernize-software',
      number: '07',
      problem: 'Outdated legacy software slowing down business agility',
      title: 'Modernize Business Software',
      summary:
        'Re-engineer outdated legacy portals and spreadsheets into high-velocity, modern web applications built for reliability and scale.',
      capabilities: [
        'Modern full-stack web applications (Next.js, Node, Go, Python)',
        'Database migration and schema optimization',
        'Responsive, accessible, and intuitive UI/UX design',
        'Enterprise security and least-privilege role management',
      ],
      deliverables: ['Custom business software', 'Production deployment', 'API documentation'],
      slug: 'modernize-software',
    },
    {
      id: 'connect-systems',
      number: '08',
      problem: 'Siloed applications unable to communicate with each other',
      title: 'Connect Business Systems (Integration)',
      summary:
        'Build custom integration bridges between your ERP, CRM, accounting tools, e-commerce platforms, and legacy databases.',
      capabilities: [
        'Bi-directional REST and GraphQL API middleware',
        'Idempotent webhook brokers with retry queues',
        'ERP synchronization (Salesforce, SAP, NetSuite, Epic)',
        'Zero-loss two-phase commit transaction coordination',
      ],
      deliverables: ['Integration middleware', 'Webhook broker', 'Monitoring alerts'],
      slug: 'crm-and-business-systems',
    },
    {
      id: 'business-intelligence',
      number: '09',
      problem: 'Lack of real-time visibility into key business metrics',
      title: 'Build Business Intelligence & Dashboards',
      summary:
        'Transform scattered database records into real-time executive dashboards, automated anomaly detection, and scheduled operational reports.',
      capabilities: [
        'Real-time KPI visualization and metric trackers',
        'Automated anomaly detection and deviation alerts',
        'Scheduled executive summary reports delivered via email/Slack',
        'Custom SQL query engines and reporting exports',
      ],
      deliverables: ['Executive analytics dashboard', 'Alerting webhooks', 'Automated report engine'],
      slug: 'business-intelligence',
    },
    {
      id: 'automate-documentation',
      number: '10',
      problem: 'Manual document processing, data extraction, and paperwork',
      title: 'Automate Documentation Workflows',
      summary:
        'Extract, parse, validate, and file complex documents—such as contracts, medical notes, invoices, and compliance forms—into structured data.',
      capabilities: [
        'Scanned PDF and image OCR with entity extraction',
        'Cross-field mathematical and schema invariant validation',
        'Automated dossier compilation and report drafting',
        'Confidence-scored human review workflows',
      ],
      deliverables: ['Document processing engine', 'Validation schema', 'Review interface'],
      slug: 'documentation-automation',
    },
    {
      id: 'custom-ai-systems',
      number: '11',
      problem: 'Unique operational workflows that off-the-shelf software cannot solve',
      title: 'Build Custom AI Systems',
      summary:
        'Architect and deploy specialized end-to-end artificial intelligence systems engineered around your exact proprietary workflow and constraints.',
      capabilities: [
        'Custom model fine-tuning and specialized weights',
        'Dedicated sovereign compute enclave hosting',
        'Full intellectual property ownership and custom integration',
        'Ongoing performance monitoring and algorithmic improvements',
      ],
      deliverables: ['Proprietary AI system', 'Architecture blueprint', 'Maintenance SLA'],
      slug: 'custom-ai-systems',
    },
  ];

  const filterOptions = ['All', 'Operations', 'Sales & Marketing', 'AI & Voice', 'Software & Data'];

  const filteredSolutions =
    activeFilter === 'All'
      ? solutionList
      : solutionList.filter((s) => {
          if (activeFilter === 'Operations') return s.id.includes('operation') || s.id.includes('connect');
          if (activeFilter === 'Sales & Marketing') return s.id.includes('sales') || s.id.includes('marketing');
          if (activeFilter === 'AI & Voice') return s.id.includes('voice') || s.id.includes('assistant') || s.id.includes('custom-ai');
          if (activeFilter === 'Software & Data') return s.id.includes('software') || s.id.includes('intelligence') || s.id.includes('doc');
          return true;
        });

  return (
    <div className="w-full min-h-screen bg-[#FBF5F3] text-[#2A2B2E] pt-28 pb-24">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pt-10 pb-16 border-b border-[rgba(205,211,219,0.5)]">
        <Breadcrumbs items={[{ label: 'Solutions' }]} className="mb-6" />

        <FadeIn>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[rgba(205,211,219,0.7)] shadow-2xs mb-4">
            <span className="w-2 h-2 rounded-full bg-[#3D9D99]" />
            <span className="font-mono text-xs uppercase tracking-wider text-[#2A2B2E] font-bold">
              PROBLEM-FIRST TECHNOLOGY
            </span>
          </div>

          <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#2A2B2E] max-w-4xl leading-[1.08]">
            TECHNOLOGY THAT SOLVES <br />
            <span className="font-light italic text-[#3D9D99]">REAL BUSINESS WORK.</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-[#738290] max-w-3xl leading-relaxed">
            Organizations operate across fragmented software, repetitive manual processes, disconnected data, and escalating customer demands. NexAgent engineers practical systems that connect those workflows, automate manual overhead, and help teams scale with clarity.
          </p>
        </FadeIn>
      </section>

      {/* Filter Tabs */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pt-8 pb-4">
        <div className="flex flex-wrap items-center gap-2">
          {filterOptions.map((opt) => (
            <button
              key={opt}
              onClick={() => setActiveFilter(opt)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeFilter === opt
                  ? 'bg-[#2A2B2E] text-white shadow-xs'
                  : 'bg-white text-[#5E6572] hover:bg-[#F0EFEA] border border-[rgba(205,211,219,0.6)]'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-10">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSolutions.map((sol) => (
            <StaggerItem key={sol.id}>
              <div className="bg-white rounded-3xl border border-[rgba(205,211,219,0.5)] p-8 shadow-[0_10px_28px_-4px_rgba(42,43,46,0.05)] hover:border-[#3D9D99]/40 transition-all flex flex-col justify-between h-full space-y-6">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <span className="font-mono text-xs font-bold text-[#3D9D99] bg-[rgba(61,157,153,0.10)] px-3 py-1 rounded-full">
                      SOLUTION {sol.number}
                    </span>
                    <span className="text-[11px] font-mono text-[#738290] uppercase">
                      Problem Solved
                    </span>
                  </div>

                  <div className="mb-4">
                    <span className="text-xs font-mono text-[#738290] block mb-1">
                      Friction: {sol.problem}
                    </span>
                    <h2 className="font-sans text-xl sm:text-2xl font-bold text-[#2A2B2E]">
                      {sol.title}
                    </h2>
                  </div>

                  <p className="text-xs sm:text-sm text-[#5E6572] leading-relaxed mb-6">
                    {sol.summary}
                  </p>

                  <div className="space-y-3 mb-6">
                    <h4 className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#2A2B2E]">
                      System Capabilities:
                    </h4>
                    <ul className="space-y-1.5 text-xs text-[#5E6572]">
                      {sol.capabilities.slice(0, 3).map((cap, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-[#3D9D99] font-bold mt-0.5">✦</span>
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-[rgba(205,211,219,0.3)] flex items-center justify-between">
                  <Link
                    href={`/solutions/${sol.slug}`}
                    className="text-xs font-bold text-[#3D9D99] hover:text-[#2E827E] uppercase tracking-wider transition-colors"
                  >
                    View Details →
                  </Link>
                  <Link
                    href={`/book-a-strategy-call?solution=${sol.id}`}
                    className="text-xs font-semibold text-[#738290] hover:text-[#2A2B2E] transition-colors"
                  >
                    Discuss System ↗
                  </Link>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Tailored Integration Callout */}
        <FadeIn className="mt-16 bg-white rounded-3xl border border-[rgba(205,211,219,0.5)] p-8 sm:p-12 shadow-sm text-center max-w-4xl mx-auto">
          <span className="inline-block px-3 py-1 rounded-full bg-[rgba(61,157,153,0.10)] text-[#3D9D99] font-mono text-xs font-bold uppercase tracking-wider mb-4">
            Custom Architecture
          </span>
          <h3 className="font-sans text-2xl sm:text-3xl font-extrabold text-[#2A2B2E] mb-3">
            Systems Built Around The Way You Actually Work.
          </h3>
          <p className="text-sm text-[#738290] max-w-2xl mx-auto leading-relaxed mb-6">
            We don&apos;t force your team onto rigid third-party software. NexAgent builds tailored technology systems around your existing software, your existing workflows, your existing teams, and your existing data.
          </p>
          <Link
            href="/book-a-strategy-call"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full text-xs font-bold text-white bg-[#3D9D99] hover:bg-[#2E827E] shadow-sm transition-all"
          >
            Discuss Your System
          </Link>
        </FadeIn>
      </section>
    </div>
  );
}
