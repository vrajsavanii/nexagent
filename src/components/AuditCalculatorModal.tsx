'use client';

import React, { useState } from 'react';

interface AuditResult {
  annualHoursSaved: number;
  annualCostSavings: number;
  productivityMultiplier: string;
  recommendedNodes: string[];
}

export default function AuditCalculatorModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [teamSize, setTeamSize] = useState(50);
  const [manualHoursPerWeek, setManualHoursPerWeek] = useState(12);
  const [avgHourlyCost, setAvgHourlyCost] = useState(65);
  const [result, setResult] = useState<AuditResult | null>(null);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleCalculate = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ teamSize, manualHoursPerWeek, avgHourlyCost }),
      });
      const data = await res.json();
      setResult(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-on-surface/50 backdrop-blur-sm">
      <div className="bg-surface-container-lowest border border-outline-variant/60 w-full max-w-2xl shadow-2xl p-6 lg:p-8 space-y-6">
        <div className="flex items-center justify-between pb-3 border-b border-outline-variant/30">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[22px]">calculate</span>
            <span className="font-headline-sm text-headline-sm uppercase font-semibold text-on-surface">
              ENTERPRISE AUTOMATION AUDIT
            </span>
          </div>
          <button onClick={onClose} className="text-on-surface-variant hover:text-on-surface">
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        <div className="space-y-4">
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Simulate operational friction reduction and projected cost recovery using NexAgent deterministic agentic
            architecture.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-1">
              <label className="font-micro-annotation text-micro-annotation uppercase text-on-surface-variant block">
                TEAM SIZE (EMPLOYEES)
              </label>
              <input
                type="number"
                min="1"
                max="50000"
                value={teamSize}
                onChange={(e) => setTeamSize(Number(e.target.value))}
                className="w-full px-3 py-2 bg-surface border border-outline-variant/40 font-label-code text-on-surface text-body-sm"
              />
            </div>

            <div className="space-y-1">
              <label className="font-micro-annotation text-micro-annotation uppercase text-on-surface-variant block">
                MANUAL HRS / WK PER PERSON
              </label>
              <input
                type="number"
                min="1"
                max="40"
                value={manualHoursPerWeek}
                onChange={(e) => setManualHoursPerWeek(Number(e.target.value))}
                className="w-full px-3 py-2 bg-surface border border-outline-variant/40 font-label-code text-on-surface text-body-sm"
              />
            </div>

            <div className="space-y-1">
              <label className="font-micro-annotation text-micro-annotation uppercase text-on-surface-variant block">
                AVG BLENDED HOURLY RATE ($)
              </label>
              <input
                type="number"
                min="15"
                max="500"
                value={avgHourlyCost}
                onChange={(e) => setAvgHourlyCost(Number(e.target.value))}
                className="w-full px-3 py-2 bg-surface border border-outline-variant/40 font-label-code text-on-surface text-body-sm"
              />
            </div>
          </div>

          <button
            onClick={handleCalculate}
            disabled={loading}
            className="w-full py-3 bg-on-surface text-inverse-on-surface font-label-code text-label-code uppercase tracking-wider hover:bg-primary transition-colors flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-[16px]">analytics</span>
            <span>{loading ? 'CALCULATING PROJECTIONS...' : 'CALCULATE PROJECTED ROI'}</span>
          </button>
        </div>

        {result && (
          <div className="p-5 bg-surface-container-low border border-primary/40 space-y-4 animate-in fade-in">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
              <div className="p-3 bg-surface-container-lowest border border-outline-variant/30">
                <span className="font-micro-annotation text-micro-annotation uppercase text-outline block">
                  ANNUAL HOURS RECOVERED
                </span>
                <span className="font-headline-md text-headline-md text-primary font-bold">
                  {result.annualHoursSaved.toLocaleString()} hrs
                </span>
              </div>

              <div className="p-3 bg-surface-container-lowest border border-outline-variant/30">
                <span className="font-micro-annotation text-micro-annotation uppercase text-outline block">
                  PROJECTED VALUE RECOVERED
                </span>
                <span className="font-headline-md text-headline-md text-on-surface font-bold">
                  ${result.annualCostSavings.toLocaleString()}
                </span>
              </div>

              <div className="p-3 bg-surface-container-lowest border border-outline-variant/30">
                <span className="font-micro-annotation text-micro-annotation uppercase text-outline block">
                  VELOCITY MULTIPLIER
                </span>
                <span className="font-headline-md text-headline-md text-primary font-bold">
                  {result.productivityMultiplier}
                </span>
              </div>
            </div>

            <div className="pt-2">
              <span className="font-micro-annotation text-micro-annotation uppercase text-outline block mb-2">
                RECOMMENDED ARCHITECTURE MODULES:
              </span>
              <div className="flex flex-wrap gap-2">
                {result.recommendedNodes.map((n, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 bg-surface-container-lowest border border-outline-variant/40 font-label-code text-micro-annotation text-on-surface"
                  >
                    + {n}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
