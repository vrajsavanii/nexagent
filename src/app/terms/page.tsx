import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/content';

export const metadata: Metadata = {
  title: 'Terms of Use | NexAgent Technology Group',
  description: 'Terms of Use governing the access and usage of the NexAgent website and services.',
  alternates: {
    canonical: 'https://nexagent.group/terms',
  },
};

export default function TermsPage() {
  return (
    <div className="w-full min-h-screen bg-[#FBF5F3] text-[#2A2B2E] pt-28 pb-24">
      <div className="max-w-4xl mx-auto px-6 pt-10">
        <Breadcrumbs items={[{ label: 'Terms of Use' }]} className="mb-6" />

        <div className="bg-white rounded-3xl border border-[rgba(205,211,219,0.6)] p-8 sm:p-14 shadow-sm space-y-8">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-[#EB572C] font-bold block mb-2">
              LEGAL TERMS
            </span>
            <h1 className="font-sans text-3xl sm:text-4xl font-extrabold text-[#2A2B2E]">
              Terms of Use
            </h1>
            <p className="text-xs text-[#738290] mt-2">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </p>
          </div>

          <div className="prose prose-sm max-w-none text-[#5E6572] space-y-6 leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#2A2B2E]">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the NexAgent website and digital materials, you agree to comply with and be bound by these Terms of Use. If you do not agree with these terms, please do not use this website.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#2A2B2E]">2. Informational Purpose &amp; No Warranty</h2>
              <p>
                The materials and information on this website are provided for general informational purposes regarding NexAgent&rsquo;s capabilities, technology architectures, and product roadmap. While we strive for accuracy, content may describe future strategic directions or products under development. All materials are provided &ldquo;as is&rdquo; without warranties of any kind.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#2A2B2E]">3. Intellectual Property</h2>
              <p>
                All trademarks, logos, system diagrams, technical descriptions, software runtimes, and content presented on this website are the intellectual property of NexAgent or its licensors. Unauthorized copying, reverse engineering, or reproduction is strictly prohibited without prior written consent.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#2A2B2E]">4. Client Engagements</h2>
              <p>
                Any formal commercial engagement, development scope, technical SLA, or product license between NexAgent and an organization is governed exclusively by a separate, bilateral Master Services Agreement (MSA) or statement of work executed between the parties.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#2A2B2E]">5. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by applicable law, NexAgent and its founders shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use of or inability to use this website.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#2A2B2E]">6. Governing Law &amp; Contact</h2>
              <p>
                These terms are governed by standard commercial law principles. For inquiries regarding these terms, please contact us via our <Link href="/contact" className="text-[#EB572C] underline">Contact Page</Link>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
