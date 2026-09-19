import React from "react";
import { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Terms of Use | NexAgent",
  description: "Standard terms and conditions governing the use of NexAgent's website and software platforms."
};

export default function TermsPage() {
  return (
    <div className="w-full py-12 sm:py-20 bg-surface-ground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badgeText="LEGAL & TERMS"
          badgeVariant="slate"
          title="TERMS OF USE."
          subtitle="Terms governing the access to and use of NexAgent's digital properties, materials, and preliminary technical specifications."
        />

        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-premium space-y-8 font-sans text-sm text-slate-700 leading-relaxed">
          <section>
            <h2 className="font-display font-bold text-lg text-slate-900 mb-2">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using this website (nexagent.ai), you agree to comply with and be bound by these Terms of Use. If you do not agree, please discontinue using this website.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-lg text-slate-900 mb-2">
              2. Intellectual Property & Brand Rights
            </h2>
            <p>
              All software architectures, code demonstrations, diagrams, visual marks, brand assets (including the NexAgent monogram and logo), technical texts, and system simulators presented on this website are the proprietary property of NexAgent. Unauthorized scraping, duplication, or redistribution without prior written consent is strictly prohibited.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-lg text-slate-900 mb-2">
              3. Nature of Information & Forward-Looking Perspectives
            </h2>
            <p>
              The content provided on this website is for informational and exploratory purposes. References to technology under development or long-term technological vision represent engineering objectives rather than guaranteed commercial warranty. Actual client deliverables and system service level agreements (SLAs) are governed exclusively by executed Master Services Agreements (MSAs).
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-lg text-slate-900 mb-2">
              4. Disclaimer of Warranties
            </h2>
            <p>
              Website content is provided &ldquo;as is&rdquo; without warranties of any kind. NexAgent does not guarantee that website functions or interactive 3D elements will be uninterrupted or error-free on every legacy device.
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
