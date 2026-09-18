'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function PricingTitanSection() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: 'Basic',
      description: 'Ideal for early-stage teams looking to automate high-friction operational workflows.',
      priceMonthly: '$800',
      priceYearly: '$300',
      period: 'per month',
      features: [
        'Up to 3 Autonomous Agent Runtimes',
        'Standard Event Mesh Integration',
        'Sub-200ms Inference Execution',
        'Email & Slack Support',
        'Weekly Performance Telemetry',
      ],
      isPopular: false,
      buttonText: 'Choose Basic',
      buttonVariant: 'secondary',
    },
    {
      name: 'Business',
      description: 'Engineered for scaling organizations that require multi-agent orchestration and deep CRM/ERP sync.',
      priceMonthly: '$1,700',
      priceYearly: '$1,350',
      period: 'per month',
      features: [
        'Up to 15 Autonomous Agent Runtimes',
        'Headless API & Database Connectors',
        'Sub-100ms Inference Execution',
        'Priority 24/7 Slack Channel',
        'Real-time Telemetry Dashboard',
        'Custom Vector Memory Embeddings',
      ],
      isPopular: true,
      buttonText: 'Choose Business',
      buttonVariant: 'primary',
    },
    {
      name: 'Enterprise',
      description: 'Sovereign private cloud infrastructure with dedicated clusters, strict SLAs, and bespoke models.',
      priceMonthly: 'Custom',
      priceYearly: 'Custom',
      period: 'tailored annual contract',
      features: [
        'Unlimited Autonomous Agent Runtimes',
        'Dedicated Private VPC & On-Premises',
        'Custom Fine-Tuned Neural Weights',
        'Dedicated Solutions Architect',
        '99.99% Availability SLA',
        'SOC2 & HIPAA Sovereign Compliance',
      ],
      isPopular: false,
      buttonText: 'Contact Founders',
      buttonVariant: 'secondary',
    },
  ];

  return (
    <section id="pricing" className="w-full py-24 bg-[#FBF5F3]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
        {/* Section Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[rgba(205,211,219,0.7)] shadow-2xs mb-4">
          <span className="text-xs">✨</span>
          <span className="text-[11px] font-bold tracking-wider uppercase text-[#2A2B2E]">
            PRICING
          </span>
        </div>

        {/* Section Heading */}
        <h2 className="font-sans font-extrabold text-3xl sm:text-5xl text-[#2A2B2E] tracking-tight text-center">
          Clear Plans. Real Value.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 text-sm sm:text-base text-[#738290] max-w-lg text-center font-normal">
          Flexible pricing that fits where you are today and scales as you grow.
        </p>

        {/* Billing Toggle */}
        <div className="mt-10 flex items-center gap-3 p-1.5 rounded-full bg-white border border-[rgba(205,211,219,0.6)] shadow-2xs">
          <button
            onClick={() => setIsYearly(false)}
            className={`px-5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
              !isYearly
                ? 'bg-[#2A2B2E] text-white shadow-xs'
                : 'text-[#738290] hover:text-[#2A2B2E]'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setIsYearly(true)}
            className={`px-5 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
              isYearly
                ? 'bg-[#2A2B2E] text-white shadow-xs'
                : 'text-[#738290] hover:text-[#2A2B2E]'
            }`}
          >
            <span>Yearly</span>
            <span className="px-1.5 py-0.5 rounded-full bg-[#EB572C] text-white text-[9px] font-extrabold">
              20% OFF
            </span>
          </button>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-14 w-full items-stretch">
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              whileHover={{ y: -4 }}
              className={`p-8 rounded-3xl bg-white flex flex-col justify-between relative transition-all ${
                plan.isPopular
                  ? 'border-2 border-[#EB572C] shadow-[0_16px_36px_-6px_rgba(235,87,44,0.18)]'
                  : 'border border-[rgba(205,211,219,0.6)] shadow-[0_10px_28px_-4px_rgba(42,43,46,0.05)]'
              }`}
            >
              {/* Most Popular Badge */}
              {plan.isPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3.5 py-0.5 rounded-full bg-[#EB572C] text-white text-[10px] font-extrabold uppercase tracking-wider shadow-sm">
                  Most Popular
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="font-sans font-extrabold text-xl text-[#2A2B2E]">
                    {plan.name}
                  </h3>
                  <p className="mt-2 text-xs text-[#738290] leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                {/* Price Display */}
                <div>
                  <span className="font-sans font-black text-4xl sm:text-5xl text-[#2A2B2E]">
                    {isYearly ? plan.priceYearly : plan.priceMonthly}
                  </span>
                  <span className="text-xs font-semibold text-[#738290] ml-2">
                    {plan.period}
                  </span>
                </div>

                {/* Features List */}
                <ul className="space-y-3 pt-4 border-t border-[rgba(205,211,219,0.4)]">
                  {plan.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-[#5E6572]">
                      <span className="text-[#EB572C] font-bold">✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="pt-8 mt-6 border-t border-[rgba(205,211,219,0.3)]">
                <Link
                  href="/book-a-strategy-call"
                  className={`w-full inline-flex items-center justify-center py-3.5 rounded-2xl text-xs font-bold transition-all ${
                    plan.buttonVariant === 'primary'
                      ? 'bg-[#EB572C] hover:bg-[#D63D10] text-white shadow-[0_8px_20px_-2px_rgba(235,87,44,0.4)]'
                      : 'bg-white hover:bg-[#FBF5F3] border border-[rgba(205,211,219,0.7)] text-[#2A2B2E]'
                  }`}
                >
                  {plan.buttonText}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
