'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How does NexAgent integrate into our existing software and legacy stack?',
      a: 'NexAgent connects seamlessly via secure headless REST/GraphQL APIs, database event webhooks, and private VPC tunnels. Our autonomous agents operate non-invasively alongside your ERP, CRM, and internal databases with zero downtime.',
    },
    {
      q: 'Who actually builds and manages the architecture?',
      a: 'NexAgent was founded by 2 technical co-founders who directly oversee system design and engineering. You work directly with senior architects who engineer deterministic solutions with zero outsourced bloat.',
    },
    {
      q: 'How fast can our business launch its first automated pipeline?',
      a: 'Most enterprises go live with their first autonomous workflow in 48 to 72 hours. Our pre-engineered runtime modules allow rapid deployment and validation before scaling company-wide.',
    },
    {
      q: 'What makes NexAgent different from typical SaaS wrappers or generic chatbots?',
      a: 'We do not build superficial chat interfaces. We engineer sovereign neural execution fabrics with sub-100ms latency, persistent vector memories, multi-agent consensus validation, and private cloud isolation.',
    },
    {
      q: 'How is data privacy and security handled for enterprise workloads?',
      a: 'Your data never trains public foundation models. We offer dedicated tenant isolation, SOC2/HIPAA-compliant hosting, on-premises deployment options, and strict encryption at rest and in transit.',
    },
  ];

  return (
    <section id="faq" className="w-full py-24 bg-[#FBF5F3]">
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center">
        {/* Section Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[rgba(205,211,219,0.7)] shadow-2xs mb-4">
          <span className="text-xs">✨</span>
          <span className="text-[11px] font-bold tracking-wider uppercase text-[#2A2B2E]">
            FAQ
          </span>
        </div>

        {/* Section Heading */}
        <h2 className="font-sans font-extrabold text-3xl sm:text-5xl text-[#2A2B2E] tracking-tight text-center">
          Got Questions? We've Got Answers.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 text-sm sm:text-base text-[#738290] max-w-lg text-center font-normal">
          Everything you need to know about our technology, onboarding, and engagement model.
        </p>

        {/* Accordion List */}
        <div className="mt-14 w-full space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-3xl bg-white border border-[rgba(205,211,219,0.6)] shadow-xs overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-6 sm:p-7 flex items-center justify-between gap-4 text-left cursor-pointer"
                >
                  <span className="font-sans font-extrabold text-base sm:text-lg text-[#2A2B2E]">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform ${
                      isOpen ? 'bg-[#9E7B78] text-white rotate-45' : 'bg-[#FBF5F3] text-[#2A2B2E]'
                    }`}
                  >
                    <span className="text-lg font-bold leading-none">+</span>
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 sm:px-7 sm:pb-7 text-xs sm:text-sm text-[#738290] leading-relaxed border-t border-[rgba(205,211,219,0.3)] pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
