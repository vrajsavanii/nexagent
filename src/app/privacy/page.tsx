import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/content';

export const metadata: Metadata = {
  title: 'Privacy Policy | NexAgent Technology Group',
  description: 'Privacy Policy and data governance practices of NexAgent.',
  alternates: {
    canonical: 'https://nexagent.group/privacy',
  },
};

export default function PrivacyPage() {
  return (
    <div className="w-full min-h-screen bg-[#FBF5F3] text-[#2A2B2E] pt-28 pb-24">
      <div className="max-w-4xl mx-auto px-6 pt-10">
        <Breadcrumbs items={[{ label: 'Privacy Policy' }]} className="mb-6" />

        <div className="bg-white rounded-3xl border border-[rgba(205,211,219,0.6)] p-8 sm:p-14 shadow-sm space-y-8">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-[#3D9D99] font-bold block mb-2">
              LEGAL &amp; DATA GOVERNANCE
            </span>
            <h1 className="font-sans text-3xl sm:text-4xl font-extrabold text-[#2A2B2E]">
              Privacy Policy
            </h1>
            <p className="text-xs text-[#738290] mt-2">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </p>
          </div>

          <div className="prose prose-sm max-w-none text-[#5E6572] space-y-6 leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#2A2B2E]">1. Overview &amp; Scope</h2>
              <p>
                NexAgent (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is a technology group committed to protecting personal data and corporate confidentiality. This Privacy Policy outlines how we collect, process, and safeguard information gathered through our website, communications, and client engagements.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#2A2B2E]">2. Information We Collect</h2>
              <p>
                We collect information you directly provide when inquiring about our systems, requesting an architectural strategy call, or communicating with our team. This may include:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Contact details (name, business email address, phone number).</li>
                <li>Professional details (company name, role, website, company size, industry).</li>
                <li>Technical project parameters (current software tools, operational friction points, automation goals).</li>
                <li>Standard website usage telemetry (anonymized IP addresses, browser types, and page interaction metrics).</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#2A2B2E]">3. Client Data &amp; AI Privacy Principle</h2>
              <p>
                Our architectural principle regarding artificial intelligence is unequivocal:
              </p>
              <div className="p-4 bg-[#FBF5F3] border-l-4 border-[#3D9D99] rounded-r-xl">
                <p className="font-semibold text-[#2A2B2E]">
                  Client proprietary business data, operational records, and intellectual property are never ingested into public foundational training sets without explicit written authorization.
                </p>
              </div>
              <p>
                When building custom AI systems or automation pipelines, customer data is processed solely within designated enterprise compute boundaries, sovereign cloud clusters, or on-premise infrastructure as agreed in client contracts.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#2A2B2E]">4. How We Use Information</h2>
              <p>We use collected information strictly to:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Review and respond to strategy inquiries and technical requests.</li>
                <li>Deliver, maintain, and support contracted technology systems and products.</li>
                <li>Comply with legitimate legal and regulatory disclosure obligations.</li>
                <li>Enhance website performance, security, and user experience.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#2A2B2E]">5. Data Security</h2>
              <p>
                We employ industry-standard technical and organizational security controls, including TLS/HTTPS encryption in transit, strict access control, and least-privilege administrative protocols to protect your information against unauthorized access, loss, or disclosure.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#2A2B2E]">6. Contact &amp; Inquiries</h2>
              <p>
                For questions regarding this policy or to request access, correction, or deletion of your contact data, please contact our team via our <Link href="/contact" className="text-[#3D9D99] underline">Contact Page</Link>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
