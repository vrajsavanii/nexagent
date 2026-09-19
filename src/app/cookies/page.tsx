import React from "react";
import { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Cookie Policy | NexAgent",
  description: "NexAgent's minimal cookie policy and technical session preferences."
};

export default function CookiesPage() {
  return (
    <div className="w-full py-12 sm:py-20 bg-surface-ground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badgeText="LEGAL & COOKIES"
          badgeVariant="slate"
          title="COOKIE POLICY."
          subtitle="How NexAgent uses essential session storage and local preferences."
        />

        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-premium space-y-6 font-sans text-sm text-slate-700 leading-relaxed">
          <section>
            <h2 className="font-display font-bold text-lg text-slate-900 mb-2">
              1. Essential Technical Storage
            </h2>
            <p>
              NexAgent prioritizes lightweight, privacy-preserving web engineering. We do not deploy invasive third-party ad tracking networks or cross-site tracking cookies.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-lg text-slate-900 mb-2">
              2. Functional Preferences
            </h2>
            <p>
              We may utilize local browser storage to remember interactive UI states, such as your selected simulator workflow tab or reduced-motion display preferences across visits.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-lg text-slate-900 mb-2">
              3. Managing Preferences
            </h2>
            <p>
              You can configure your browser at any time to refuse cookies or clear local storage. The core information and articles on our website will remain fully accessible.
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
