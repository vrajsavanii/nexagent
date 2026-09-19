import React from "react";
import { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Privacy Policy | NexAgent",
  description: "NexAgent's commercial privacy practices and data protection commitments."
};

export default function PrivacyPage() {
  return (
    <div className="w-full py-12 sm:py-20 bg-surface-ground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badgeText="LEGAL & PRIVACY"
          badgeVariant="slate"
          title="PRIVACY POLICY."
          subtitle="How NexAgent collects, protects, and handles commercial data across our website and client engagements."
        />

        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-premium space-y-8 font-sans text-sm text-slate-700 leading-relaxed">
          <section>
            <h2 className="font-display font-bold text-lg text-slate-900 mb-2">
              1. Commitment to Data Integrity
            </h2>
            <p>
              NexAgent respects the privacy of prospective clients, partners, and visitors. We do not sell, monetize, or broker corporate or personal data. Information provided through our strategy call intake, contact forms, or communication channels is utilized exclusively for evaluating and delivering technology engagements.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-lg text-slate-900 mb-2">
              2. Information Collected
            </h2>
            <p>
              We collect information that you voluntarily submit to us, including your name, corporate email address, organization name, website, operating region, and notes regarding business workflows and operational challenges. When browsing our website, standard non-identifying telemetry (such as browser type and device resolution) may be logged to ensure visual and 3D performance optimization.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-lg text-slate-900 mb-2">
              3. Client Workflow & System Confidentiality
            </h2>
            <p>
              During technical consultations and client solutions engineering, all proprietary business architecture, database schemas, and operational details shared with NexAgent are protected under strict commercial confidentiality obligations. We do not utilize client-specific proprietary data to train publicly accessible foundation models.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-lg text-slate-900 mb-2">
              4. Security Measures
            </h2>
            <p>
              We enforce modern transport encryption (TLS 1.3), rigorous access restrictions, and least-privilege administrative access across all digital environments utilized by our engineering team.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-lg text-slate-900 mb-2">
              5. Contact Regarding Privacy
            </h2>
            <p>
              For any inquiries regarding data protection practices or to request removal of submitted intake information, please contact our team at privacy@nexagent.ai.
            </p>
          </section>

          <div className="pt-6 border-t border-slate-100 font-mono text-xs text-slate-400">
            Last Updated: March 2026 • NexAgent Technology Governance
          </div>
        </div>
      </div>
    </div>
  );
}
