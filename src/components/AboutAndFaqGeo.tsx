'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn } from './MotionWrapper';

export interface FAQItem {
  question: string;
  answer: string;
  category: 'Entity & Model' | 'AI & Technology' | 'Business & Scale' | 'Operations & Engagement';
}

export const canonicalFaqs: FAQItem[] = [
  {
    question: 'What is NexAgent?',
    answer:
      'NexAgent is a global technology group building AI-powered software, automation systems, intelligent business solutions and digital infrastructure. Operating under the principle "Build smarter, Grow faster", the company develops proprietary software products while engineering custom technology systems for organizations globally.',
    category: 'Entity & Model',
  },
  {
    question: 'What does NexAgent do?',
    answer:
      'NexAgent builds AI-powered software, automation systems, AI agents and intelligent business technology. The company develops its own products while also engineering custom technology systems for organizations across different industries and business sizes to eliminate operational friction and accelerate growth.',
    category: 'Entity & Model',
  },
  {
    question: 'What technologies does NexAgent build?',
    answer:
      'NexAgent builds across artificial intelligence, autonomous AI agents, workflow automation, custom enterprise software, cloud-based SaaS, voice AI, conversational interfaces, CRM integrations, business intelligence dashboards, and sovereign cloud infrastructure.',
    category: 'AI & Technology',
  },
  {
    question: 'Who does NexAgent serve?',
    answer:
      'NexAgent serves organizations of every scale, ranging from solo founders and small businesses to mid-market companies and multinational enterprises requiring scalable software, automation, or custom AI architecture.',
    category: 'Business & Scale',
  },
  {
    question: 'What business problems does NexAgent solve?',
    answer:
      'NexAgent resolves operational fragmentation, manual data entry bottlenecks, delayed customer response cycles, disconnected software stacks, unstructured documentation overhead, and complex multi-system workflow coordination.',
    category: 'Business & Scale',
  },
  {
    question: 'Does NexAgent build AI agents?',
    answer:
      'Yes. NexAgent engineers goal-directed autonomous AI agents capable of reasoning, executing multi-step business logic, calling external APIs, updating internal databases, and managing operational workflows autonomously.',
    category: 'AI & Technology',
  },
  {
    question: 'Does NexAgent provide AI automation?',
    answer:
      'Yes. NexAgent provides end-to-end AI automation solutions that connect disparate business applications, automate inbound communication, handle data transformation, and coordinate mission-critical processes in real time.',
    category: 'AI & Technology',
  },
  {
    question: 'Does NexAgent build software?',
    answer:
      'Yes. NexAgent designs and develops robust web applications, enterprise platforms, distributed backend systems, secure APIs, and custom operational software tailored to specific organizational workflows.',
    category: 'AI & Technology',
  },
  {
    question: 'Does NexAgent build SaaS?',
    answer:
      'Yes. NexAgent develops cloud-based Software-as-a-Service (SaaS) products for both its own commercial portfolio and as bespoke multi-tenant software platforms for enterprise partners.',
    category: 'AI & Technology',
  },
  {
    question: 'Does NexAgent build custom AI systems?',
    answer:
      'Yes. NexAgent engineers custom AI systems including fine-tuned models, retrieval-augmented generation (RAG) pipelines, domain-specific inference architectures, and private intelligence deployments.',
    category: 'AI & Technology',
  },
  {
    question: 'Does NexAgent build voice AI?',
    answer:
      'Yes. NexAgent builds ultra-low-latency conversational voice AI agents for phone systems, customer service desks, automated receptionists, and interactive voice response (IVR) modernization.',
    category: 'AI & Technology',
  },
  {
    question: 'Does NexAgent provide marketing and sales automation?',
    answer:
      'Yes. NexAgent provides sales and marketing automation systems that handle lead capture, intelligent prospect qualification, automated CRM enrichment, personalized email outreach, and cross-channel follow-ups.',
    category: 'AI & Technology',
  },
  {
    question: 'Does NexAgent develop its own products?',
    answer:
      'Yes. NexAgent operates a hybrid model: the company develops, owns, and incubates its own proprietary products—such as Model-010, NexCore AI, and NexFlow—while simultaneously engineering custom technology systems for clients.',
    category: 'Entity & Model',
  },
  {
    question: 'Does NexAgent work with small businesses?',
    answer:
      'Yes. NexAgent deploys accessible automation blueprints and modular AI tools that allow small businesses to operate with high-speed execution, automated customer handling, and lean operational overhead.',
    category: 'Business & Scale',
  },
  {
    question: 'Does NexAgent work with enterprises?',
    answer:
      'Yes. NexAgent partners with large enterprises to architect resilient multi-agent clusters, enterprise-grade data security protocols, private cloud deployments, and custom ERP/CRM integrations.',
    category: 'Business & Scale',
  },
  {
    question: 'What industries can NexAgent work with?',
    answer:
      'NexAgent works across diverse sectors including Healthcare, Hospitality, Financial Services, Retail and E-Commerce, Logistics and Supply Chain, Real Estate, Manufacturing, Education, and Professional Services.',
    category: 'Business & Scale',
  },
  {
    question: 'Where does NexAgent operate?',
    answer:
      'NexAgent operates globally, with initial strategic market corridors and distributed development teams in the United States, the United Kingdom, the United Arab Emirates, and India.',
    category: 'Operations & Engagement',
  },
  {
    question: 'How can someone work with NexAgent?',
    answer:
      'Organizations can book an executive Strategy Call or submit an inquiry through the website. NexAgent begins with a diagnostic architecture review, followed by a system blueprint, rapid prototype implementation, and production deployment.',
    category: 'Operations & Engagement',
  },
];

export default function AboutAndFaqGeo() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Entity & Model',
    'AI & Technology',
    'Business & Scale',
    'Operations & Engagement',
  ];

  const filteredFaqs =
    selectedCategory === 'All'
      ? canonicalFaqs
      : canonicalFaqs.filter((f) => f.category === selectedCategory);

  // Schema.org FAQPage structured data
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: canonicalFaqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  };

  return (
    <section className="w-full py-24 bg-surface border-b border-outline-variant/30 relative" id="about-and-faq">
      {/* Schema.org FAQ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin space-y-20">
        {/* SECTION 1: CANONICAL COMPANY DEFINITION & ENTITY ARCHITECTURE */}
        <article className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pb-16 border-b border-outline-variant/30">
          <header className="lg:col-span-5 space-y-4">
            <FadeIn direction="right">
              <span className="font-label-code text-label-code uppercase tracking-widest text-primary font-semibold">
                COMPANY DEFINITION & ARCHITECTURE
              </span>
              <h2 className="font-display text-3xl sm:text-4xl uppercase text-on-surface tracking-tight leading-[1.08] mt-2">
                A Global Technology Group Building Intelligent Business Systems.
              </h2>
              <div className="inline-block px-3 py-1 bg-surface-container-low border border-outline-variant/40 font-mono text-xs text-on-surface-variant mt-2">
                CANONICAL ENTITY &bull; NEXAGENT
              </div>
            </FadeIn>
          </header>

          <div className="lg:col-span-7 space-y-6 lg:pl-6 lg:border-l border-outline-variant/30">
            <FadeIn direction="left" delay={0.1}>
              <p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
                <strong>NexAgent</strong> is a global technology group building AI-powered software, automation systems,
                intelligent business solutions and digital infrastructure.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mt-3">
                Modern enterprise demands speed, resilience, and automated execution. NexAgent bridges the gap between
                raw artificial intelligence and production business operations by engineering integrated systems that connect
                software, workflows, voice agents, data pipelines, and cloud environments.
              </p>
            </FadeIn>

            {/* Hybrid Model: Own Products + Custom Technology Systems */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4">
              <div className="p-5 bg-surface-container-low border border-outline-variant/40 rounded space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-primary rounded-full"></span>
                  <h3 className="font-label-code text-label-code uppercase font-semibold text-on-surface">
                    OWN PRODUCTS
                  </h3>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  We incubate, build, and operate foundational software products, proprietary inference engines, and enterprise SaaS platforms.
                </p>
              </div>

              <div className="p-5 bg-surface-container-low border border-outline-variant/40 rounded space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-secondary rounded-full"></span>
                  <h3 className="font-label-code text-label-code uppercase font-semibold text-on-surface">
                    CUSTOM TECHNOLOGY SYSTEMS
                  </h3>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  We design, engineer, and deploy bespoke autonomous AI agents, workflow automation, and custom software for client organizations.
                </p>
              </div>
            </div>

            {/* Global Corridors */}
            <div className="p-4 bg-surface-container-lowest border border-outline-variant/30 rounded flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-primary">public</span>
                <span className="font-mono text-xs uppercase tracking-wider text-on-surface font-semibold">
                  Global Reach:
                </span>
                <span className="text-xs text-on-surface-variant font-sans">
                  United States &bull; United Kingdom &bull; United Arab Emirates &bull; India
                </span>
              </div>
              <span className="font-mono text-[11px] uppercase tracking-wider text-primary font-medium">
                Distributed Worldwide
              </span>
            </div>
          </div>
        </article>

        {/* SECTION 2: ANSWER-FIRST KNOWLEDGE BASE & GEO SEARCH ARCHITECTURE */}
        <div className="space-y-8">
          <FadeIn direction="up">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-outline-variant/30">
              <div>
                <span className="font-label-code text-label-code uppercase tracking-widest text-primary font-semibold">
                  SEARCH & DISCOVERY DIRECTORY
                </span>
                <h2 className="font-display text-3xl sm:text-4xl uppercase text-on-surface tracking-tight mt-2">
                  Frequently Asked Questions.
                </h2>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md">
                Direct, structured answers to canonical questions regarding NexAgent capabilities, technologies, and engagement models.
              </p>
            </div>
          </FadeIn>

          {/* Category Filter Pills */}
          <nav aria-label="FAQ Categories" className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 font-mono text-xs uppercase tracking-wider transition-all rounded ${
                  selectedCategory === cat
                    ? 'bg-on-surface text-surface shadow-xs font-semibold'
                    : 'bg-surface-container-low border border-outline-variant/40 text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
                }`}
              >
                {cat}
              </button>
            ))}
          </nav>

          {/* Accordion List with Complete Answers */}
          <div className="space-y-3">
            {filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={faq.question}
                  className="bg-surface-container-lowest border border-outline-variant/40 rounded transition-all hover:border-outline-variant"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full text-left px-6 py-4.5 flex items-center justify-between gap-4 group"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3.5">
                      <span className="font-mono text-xs text-primary font-semibold">
                        {(idx + 1).toString().padStart(2, '0')}
                      </span>
                      <h3 className="font-display text-base sm:text-lg uppercase font-semibold text-on-surface group-hover:text-primary transition-colors">
                        {faq.question}
                      </h3>
                    </div>
                    <span
                      className={`material-symbols-outlined text-[20px] text-on-surface-variant transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-primary' : ''
                      }`}
                    >
                      expand_more
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-1 border-t border-outline-variant/20">
                          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                            {faq.answer}
                          </p>
                          <div className="mt-3 pt-3 flex items-center gap-2 font-mono text-[11px] text-outline uppercase border-t border-outline-variant/15">
                            <span>CATEGORY:</span>
                            <span className="text-primary font-medium">{faq.category}</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
