'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import Eyebrow from '@/components/ui/Eyebrow';
import {
  fadeUpVariants,
  staggerContainerVariants,
  viewportConfig,
  transitionPresets,
} from '@/lib/motion';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    id: 'hallucination',
    question: 'How does NexAgent prevent AI hallucinations in healthcare and enterprise operations?',
    answer:
      'NexAgent utilizes a deterministic 7-layer architecture. Incoming requests are normalized into strict JSON schemas, and every proposed action must satisfy hardcoded WebAssembly policy rules and clinical boundaries before execution. High-stakes actions cannot execute without human cryptographic sign-off.',
  },
  {
    id: 'hms-difference',
    question: 'What is the difference between NexAgent HMS and legacy hospital management software?',
    answer:
      'Legacy HMS software acts as passive databases requiring hospital staff to manually type, update, and search for records. NexAgent HMS is active operational software: it orchestrates clinical triage queues, automatically dispatches housekeeping upon patient discharge, and prepares pre-compiled clinical discharge summaries for physician review.',
  },
  {
    id: 'hitl',
    question: 'How does the human-in-the-loop approval mechanism work?',
    answer:
      'Whenever an automated action exceeds a pre-configured risk threshold (e.g., patient discharge authorization, medication changes, or financial transactions over $5,000), execution is intercepted. The supervisor or physician receives a concise approval notification with all historical context and signs off with one click.',
  },
  {
    id: 'integrations',
    question: 'What technical integrations does NexAgent support out of the box?',
    answer:
      'NexAgent connects with HL7/FHIR healthcare standards, major EMR systems (Epic, Cerner), enterprise CRMs (Salesforce, HubSpot, Zoho), ERP systems (SAP, NetSuite), and modern communication protocols (Slack, WhatsApp Business, Webhooks, Kafka).',
  },
  {
    id: 'onboarding',
    question: 'How long does deployment and enterprise onboarding take?',
    answer:
      'A typical pilot integration takes between 2 to 4 weeks. We configure custom policy rules, map existing data fields, and run in shadow/simulation mode to verify accuracy before enabling active operational execution.',
  },
];

export default function FaqAccordion() {
  const [openId, setOpenId] = useState<string | null>(faqs[0].id);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 bg-white border-t border-black/[0.06] content-visibility-auto">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center max-w-2xl mx-auto mb-14 space-y-4"
        >
          <motion.div variants={fadeUpVariants} className="flex justify-center">
            <Eyebrow>Frequently Asked Questions</Eyebrow>
          </motion.div>
          <motion.h2
            variants={fadeUpVariants}
            className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight"
          >
            Clear answers for operational leaders.
          </motion.h2>
          <motion.p variants={fadeUpVariants} className="text-base text-zinc-600">
            Everything you need to know about our deterministic architecture, safety protocols, and deployment.
          </motion.p>
        </motion.div>

        {/* Accordion List */}
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="space-y-3"
        >
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <motion.div
                key={faq.id}
                variants={fadeUpVariants}
                className={`rounded-xl border overflow-hidden transition-all duration-200 ${
                  isOpen
                    ? 'bg-zinc-50 border-zinc-900 shadow-sm'
                    : 'bg-white border-zinc-200 hover:border-zinc-300'
                }`}
              >
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-black min-h-[60px]"
                >
                  <span className={`text-sm sm:text-base font-bold ${isOpen ? 'text-zinc-950' : 'text-zinc-700'}`}>
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-zinc-500 transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180 text-zinc-950' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={transitionPresets.fast}
                      className="px-6 pb-5 pt-1 text-sm text-zinc-600 leading-relaxed border-t border-zinc-200"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
