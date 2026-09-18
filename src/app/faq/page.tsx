'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/MotionWrapper';
import { Breadcrumbs } from '@/components/content';

interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export default function FAQPage() {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const faqs: FAQItem[] = [
    {
      id: 'faq-1',
      category: 'Overview',
      question: 'What does NexAgent do?',
      answer:
        'NexAgent is an intelligent technology group focused on AI, software, automation, digital infrastructure, and business systems. We identify operational friction, architect technology systems, build custom software and AI agents, automate repetitive workflows, and build scalable reusable products.',
    },
    {
      id: 'faq-2',
      category: 'Scope & Scale',
      question: 'Does NexAgent work with small businesses?',
      answer:
        'Yes. NexAgent builds for organizations at every scale—from solo operations, startups, and MSMEs to mid-market scaleups. For smaller teams, we deploy high-impact focused automations (such as automated lead capture, CRM synchronization, and AI customer messaging) that generate immediate operational leverage without enterprise complexity.',
    },
    {
      id: 'faq-3',
      category: 'Scope & Scale',
      question: 'Does NexAgent work with enterprises?',
      answer:
        'Yes. For enterprises and institutions, NexAgent designs distributed, mission-critical systems. We build high-throughput integration meshes, private compute environments, custom internal tools, and multi-agent systems engineered to comply with strict security, confidentiality, and data governance standards.',
    },
    {
      id: 'faq-4',
      category: 'Capabilities',
      question: 'Does NexAgent build custom software?',
      answer:
        'Yes. Custom software engineering is a core capability. We develop full-stack web applications, business dashboards, internal operational tools, API microservices, database architectures, and custom workflows built exactly around the way your organization operates.',
    },
    {
      id: 'faq-5',
      category: 'Capabilities',
      question: 'Does NexAgent provide AI agents?',
      answer:
        'Yes. We engineer autonomous and semi-autonomous AI agents capable of planning, executing, and verifying multi-step business workflows. Our agents connect directly to your databases, CRMs, and communication tools to perform real tasks deterministically, complete with guardrails that prevent hallucinated actions.',
    },
    {
      id: 'faq-6',
      category: 'Capabilities',
      question: 'Does NexAgent build AI voice systems?',
      answer:
        'Yes. We build low-latency conversational AI voice systems for telephony and web applications. These voice agents can handle inbound customer support, qualification calls, reservation bookings, and appointment routing with natural conversational turn-taking and real-time backend updates.',
    },
    {
      id: 'faq-7',
      category: 'Integrations',
      question: 'Can NexAgent integrate with existing software?',
      answer:
        'Yes. You do not need to replace your existing tools. NexAgent builds technology that connects your current software stack—including Salesforce, HubSpot, SAP, Epic, PostgreSQL, Slack, Microsoft 365, Google Workspace, legacy databases, and custom REST/GraphQL APIs—ensuring information flows smoothly across fragmented tools.',
    },
    {
      id: 'faq-8',
      category: 'Products',
      question: 'Does NexAgent develop its own products?',
      answer:
        'Yes. NexAgent is building a diversified technology group. In addition to delivering client solutions, we develop our own proprietary technology runtimes, software platforms, and reusable products. We label all internal products transparently according to their lifecycle stage (Concept, In Development, Beta, or Available).',
    },
    {
      id: 'faq-9',
      category: 'Industries',
      question: 'What industries does NexAgent serve?',
      answer:
        'NexAgent is not restricted to any single industry. We have developed technical systems across Healthcare, Hospitality, B2B Enterprise Commerce, Retail, Professional Services, and Financial Technology. In each sector, we adapt the technical architecture to the specific compliance, workflow, and operational demands of the business.',
    },
    {
      id: 'faq-10',
      category: 'Geography',
      question: 'Where does NexAgent operate?',
      answer:
        'NexAgent has a global commercial orientation. We primarily work with clients and partners across the United States, United Kingdom, United Arab Emirates, and India. Engagements are conducted digitally with dedicated engineering pods capable of supporting distributed time zones.',
    },
    {
      id: 'faq-11',
      category: 'Engagements',
      question: 'How does a NexAgent engagement work?',
      answer:
        'Our process moves from complexity to clarity across six structured phases: 01 Discover (understand workflows and constraints), 02 Diagnose (identify bottlenecks and high-impact leverage points), 03 Architect (design the system technical blueprint), 04 Build (develop the software, models, and integrations), 05 Deploy (connect into your live environment), and 06 Optimize (measure, refine, and expand throughput).',
    },
    {
      id: 'faq-12',
      category: 'Contact',
      question: 'How can I contact NexAgent?',
      answer:
        'You can book an exploratory conversation directly through our Strategy Call booking page (/book-a-strategy-call) or send an inquiry via our contact page (/contact). Our technical team reviews each inquiry to understand whether there is an architectural fit for collaboration.',
    },
  ];

  const categories = ['All', 'Overview', 'Scope & Scale', 'Capabilities', 'Integrations', 'Products', 'Industries', 'Engagements', 'Contact'];

  const filteredFaqs =
    activeCategory === 'All'
      ? faqs
      : faqs.filter((item) => item.category === activeCategory);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="w-full min-h-screen bg-[#FBF5F3] text-[#2A2B2E] pt-28 pb-24">
      {/* Hero Header */}
      <section className="max-w-5xl mx-auto px-6 pt-10 pb-16 border-b border-[rgba(205,211,219,0.5)]">
        <Breadcrumbs items={[{ label: 'FAQ' }]} className="mb-6" />

        <FadeIn>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[rgba(205,211,219,0.7)] shadow-2xs mb-4">
            <span className="w-2 h-2 rounded-full bg-[#3D9D99]" />
            <span className="font-mono text-xs uppercase tracking-wider text-[#2A2B2E] font-bold">
              FREQUENTLY ASKED QUESTIONS
            </span>
          </div>

          <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#2A2B2E] leading-[1.08]">
            FREQUENT QUESTIONS. <br />
            <span className="font-light italic text-[#3D9D99]">DIRECT ANSWERS.</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-[#738290] max-w-2xl leading-relaxed">
            Everything you need to know about who NexAgent is, what we build, how our technical systems integrate with your operations, and how we work with organizations globally.
          </p>
        </FadeIn>
      </section>

      {/* Filter Tabs */}
      <section className="max-w-5xl mx-auto px-6 pt-8 pb-4">
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-[#2A2B2E] text-white shadow-xs'
                  : 'bg-white text-[#5E6572] hover:bg-[#F0EFEA] border border-[rgba(205,211,219,0.6)]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Accordion List */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <StaggerContainer className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <StaggerItem key={faq.id}>
                <div
                  className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden shadow-xs ${
                    isOpen
                      ? 'border-[#3D9D99]/40 shadow-sm'
                      : 'border-[rgba(205,211,219,0.6)] hover:border-[#2A2B2E]/30'
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full text-left px-6 sm:px-8 py-5 flex items-center justify-between gap-4 group cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-[#3D9D99] font-bold">
                        {faq.category}
                      </span>
                      <span className="font-sans text-base sm:text-lg font-bold text-[#2A2B2E] group-hover:text-[#3D9D99] transition-colors">
                        {faq.question}
                      </span>
                    </div>

                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center bg-[#FBF5F3] text-[#2A2B2E] transition-transform duration-300 flex-shrink-0 ${
                        isOpen ? 'rotate-45 bg-[rgba(61,157,153,0.10)] text-[#3D9D99]' : ''
                      }`}
                    >
                      <span className="text-sm font-bold">+</span>
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 sm:px-8 pb-6 pt-1 text-sm sm:text-base text-[#5E6572] leading-relaxed border-t border-[rgba(205,211,219,0.3)] mt-1">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* CTA Footer */}
        <FadeIn className="mt-16 text-center max-w-2xl mx-auto p-8 bg-white rounded-3xl border border-[rgba(205,211,219,0.5)] shadow-xs">
          <h3 className="font-sans text-xl font-bold text-[#2A2B2E] mb-2">
            Have a specific workflow or integration question?
          </h3>
          <p className="text-xs sm:text-sm text-[#738290] mb-6">
            We are happy to review your technical architecture and explore how intelligent systems can automate your operations.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/book-a-strategy-call"
              className="px-6 py-2.5 rounded-full text-xs font-bold text-white bg-[#3D9D99] hover:bg-[#2E827E] shadow-sm transition-all"
            >
              Book a Strategy Call
            </Link>
            <Link
              href="/contact"
              className="px-6 py-2.5 rounded-full text-xs font-semibold text-[#2A2B2E] bg-[#FBF5F3] hover:bg-[#F0EFEA] border border-[rgba(205,211,219,0.7)] transition-all"
            >
              Send an Inquiry
            </Link>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
