"use client";

import React, { useState } from "react";
import { SectionHeader } from "../ui/SectionHeader";
import { FadeIn } from "../ui/FadeIn";
import {
  Play,
  RotateCcw,
  CheckCircle2,
  ArrowRight,
  Cpu,
  Workflow,
  Network,
  Check,
  Zap,
  Activity,
  FileText,
  Headphones,
  Users,
  Building2,
  Hotel
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SimulationFlow {
  id: string;
  name: string;
  category: string;
  icon: React.ElementType;
  steps: {
    phase: string;
    title: string;
    detail: string;
    telemetry: string;
    latency: string;
  }[];
}

const FLOWS: SimulationFlow[] = [
  {
    id: "lead-gen",
    name: "Lead Qualification & Routing",
    category: "Sales",
    icon: Users,
    steps: [
      { phase: "01 / INPUT", title: "Inbound Form Submission", detail: "Prospect submits scope, domain, and contact details via web form.", telemetry: 'payload: { domain: "acme.corp", size: "50-200" }', latency: "0ms" },
      { phase: "02 / AI", title: "Firmographic & Intent Scoring", detail: "AI model checks company profile, classifies buyer intent, and calculates ICP fit score (94/100).", telemetry: "intent: high_commercial_fit | score: 0.94", latency: "140ms" },
      { phase: "03 / AUTOMATION", title: "Orchestration & Branching", detail: "DAG workflow selects Tier-1 enterprise pipeline, assigns round-robin account executive.", telemetry: "route: enterprise_us_east | priority: 1", latency: "45ms" },
      { phase: "04 / INTEGRATION", title: "CRM & Calendar Sync", detail: "HubSpot contact & deal created; customized briefing note piped into Slack executive channel.", telemetry: "POST /crm/v3/objects/deals -> 201 Created", latency: "180ms" },
      { phase: "05 / ACTION", title: "Personalized Outreach Sent", detail: "Personalized briefing note and executive direct booking link dispatched via email.", telemetry: "mailer: dispatched -> smtp_code: 250", latency: "120ms" },
      { phase: "06 / RESULT", title: "Meeting Booked Without Friction", detail: "Prospect self-schedules meeting; AE briefed with full company dossier. Zero manual reentry.", telemetry: "cycle_time: 485ms | manual_touches: 0", latency: "Done" }
    ]
  },
  {
    id: "support",
    name: "Customer Support Resolution",
    category: "Support",
    icon: Headphones,
    steps: [
      { phase: "01 / INPUT", title: "Inbound Support Query", detail: "Customer queries billing status and API key rotation via chat widget.", telemetry: 'query: "Need to rotate production webhook secret"', latency: "0ms" },
      { phase: "02 / AI", title: "Semantic Intent & Auth Check", detail: "RAG agent retrieves developer documentation and verifies user team permissions.", telemetry: "matched_docs: [auth_v2.md, webhooks.md]", latency: "190ms" },
      { phase: "03 / AUTOMATION", title: "Security Validation Policy", detail: "Workflow checks 2FA status and scopes permissions before allowing token rotation.", telemetry: "policy_check: PASS | requires_human: false", latency: "30ms" },
      { phase: "04 / INTEGRATION", title: "Identity Provider Dispatch", detail: "API triggers secure token generation with 30-day graceful deprecation window.", telemetry: "POST /v1/tokens/rotate -> 200 OK", latency: "140ms" },
      { phase: "05 / ACTION", title: "Response & Audit Log Sealed", detail: "One-time secret provided directly in secure modal; action logged to compliance ledger.", telemetry: "audit_id: sec_8912_rot | status: sealed", latency: "80ms" },
      { phase: "06 / RESULT", title: "Instant Customer Resolution", detail: "Resolved in under 1 second without overloading tier-2 engineering support.", telemetry: "csat_predicted: 5/5 | latency_total: 440ms", latency: "Done" }
    ]
  },
  {
    id: "docs",
    name: "Documentation Automation",
    category: "Healthcare / Ops",
    icon: FileText,
    steps: [
      { phase: "01 / INPUT", title: "Raw Intake Document Upload", detail: "Staff uploads scanned multi-page administrative intake form or PDF.", telemetry: 'doc_type: "intake_form_scan.pdf" (3 pages)', latency: "0ms" },
      { phase: "02 / AI", title: "Multimodal Layout OCR", detail: "Vision model extracts key-value pairs, checkboxes, and handwriting fields.", telemetry: "extracted_fields: 42 | confidence_avg: 98.4%", latency: "420ms" },
      { phase: "03 / AUTOMATION", title: "Schema Normalization", detail: "Fields formatted into structured FHIR/JSON schema with missing data flags.", telemetry: "schema_check: valid | flagged_anomalies: 0", latency: "60ms" },
      { phase: "04 / INTEGRATION", title: "Human Review Confirmation", detail: "Clinician reviews side-by-side highlighted confidence view and clicks approve.", telemetry: "approved_by: staff_id_44 | timestamp: ISO8601", latency: "Staff" },
      { phase: "05 / ACTION", title: "EHR / ERP Database Commit", detail: "Record committed directly to destination system with full cryptographic checksum.", telemetry: "PUT /ehr/patients/records -> 200 OK", latency: "110ms" },
      { phase: "06 / RESULT", title: "90% Administrative Reduction", detail: "Intake completed with zero re-typing errors and full audit trail.", telemetry: "saved_minutes: 25 | error_rate: 0.00%", latency: "Done" }
    ]
  },
  {
    id: "hospitality",
    name: "Guest Concierge & Task Dispatch",
    category: "Hospitality",
    icon: Hotel,
    steps: [
      { phase: "01 / INPUT", title: "Guest Inquires via WhatsApp", detail: "Guest in Room 412 requests late checkout and fresh extra towels.", telemetry: 'msg: "Can we request late checkout at 1pm and towels?"', latency: "0ms" },
      { phase: "02 / AI", title: "Multi-Intent Decomposition", detail: "AI isolates two distinct intents: front-desk policy inquiry and housekeeping task.", telemetry: "intents: [checkout_extension, housekeeping_req]", latency: "160ms" },
      { phase: "03 / AUTOMATION", title: "Property Rule Evaluation", detail: "Checks PMS housekeeping schedule and occupancy rate for room 412.", telemetry: "occupancy_rate: 74% | late_checkout: APPROVED", latency: "80ms" },
      { phase: "04 / INTEGRATION", title: "PMS Dispatch & Staff Task", detail: "PMS updated with 1:00 PM departure; housekeeping task ticket queued to floor supervisor.", telemetry: "PMS_UPDATE: 200 | STAFF_TASK_ID: hk_412", latency: "150ms" },
      { phase: "05 / ACTION", title: "Guest WhatsApp Confirmation", detail: "Polite multilingual confirmation dispatched immediately to guest's WhatsApp thread.", telemetry: "whatsapp_api: sent -> status: delivered", latency: "95ms" },
      { phase: "06 / RESULT", title: "Seamless Guest Experience", detail: "Both requests resolved in 485ms without human front-desk phone congestion.", telemetry: "guest_wait_time: <1s | staff_notified: true", latency: "Done" }
    ]
  }
];

export function NexAgentSystemSimulator() {
  const [activeFlow, setActiveFlow] = useState<SimulationFlow>(FLOWS[0]);
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  const runSimulation = () => {
    setIsRunning(true);
    setActiveStepIndex(0);

    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      if (current < activeFlow.steps.length) {
        setActiveStepIndex(current);
      } else {
        clearInterval(interval);
        setIsRunning(false);
      }
    }, 900);
  };

  const handleFlowSelect = (flow: SimulationFlow) => {
    setActiveFlow(flow);
    setActiveStepIndex(0);
    setIsRunning(false);
  };

  return (
    <section className="relative w-full py-20 lg:py-32 bg-surface-ground border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader
            badgeText="SYSTEM SIMULATOR"
            badgeVariant="teal"
            title="THE NEXAGENT SYSTEM IN ACTION."
            subtitle="Explore how unstructured real-world business events transform through our multi-stage pipeline: Input → AI → Automation → Integration → Action → Result."
          />
        </FadeIn>

        {/* Workflow Domain Selector Tabs */}
        <FadeIn direction="up" delay={100}>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {FLOWS.map((flow) => {
              const Icon = flow.icon;
              const isSelected = activeFlow.id === flow.id;

              return (
                <button
                  key={flow.id}
                  type="button"
                  onClick={() => handleFlowSelect(flow)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2.5 rounded-xl font-display text-xs sm:text-sm font-semibold transition-all duration-200 border",
                    isSelected
                      ? "bg-brand-900 text-white border-brand-950 shadow-sm"
                      : "bg-white text-slate-700 border-slate-200/90 hover:bg-slate-50 hover:border-slate-300"
                  )}
                >
                  <Icon className={cn("w-4 h-4", isSelected ? "text-brand-300" : "text-slate-500")} />
                  <span>{flow.name}</span>
                  <span
                    className={cn(
                      "text-[10px] font-mono uppercase px-1.5 py-0.5 rounded-sm",
                      isSelected ? "bg-brand-800 text-brand-200" : "bg-slate-100 text-slate-500"
                    )}
                  >
                    {flow.category}
                  </span>
                </button>
              );
            })}
          </div>
        </FadeIn>

        {/* Interactive Pipeline Board */}
        <FadeIn direction="up" delay={200}>
          <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-10 shadow-premium">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-mono text-xs uppercase tracking-wider text-brand-700 font-bold">
                  SIMULATED PIPELINE: {activeFlow.name}
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse-subtle" />
              </div>
              <p className="font-sans text-xs sm:text-sm text-slate-500">
                Click any stage to inspect execution telemetry, or trigger a live run.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={runSimulation}
                disabled={isRunning}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-900 hover:bg-brand-800 text-white text-xs sm:text-sm font-display font-medium shadow-sm transition-all disabled:opacity-50"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                {isRunning ? "Executing Pipeline..." : "Run Live Simulation"}
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveStepIndex(0);
                  setIsRunning(false);
                }}
                aria-label="Reset simulation"
                className="p-2 rounded-lg border border-slate-200 text-slate-500 hover:text-slate-800 hover:bg-slate-50 transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 6-Phase Pipeline Visualization */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 mb-8">
            {activeFlow.steps.map((step, idx) => {
              const isActive = activeStepIndex === idx;
              const isPassed = activeStepIndex > idx;

              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveStepIndex(idx)}
                  className={cn(
                    "p-4 rounded-xl border text-left transition-all duration-300 relative flex flex-col justify-between min-h-[150px]",
                    isActive
                      ? "bg-brand-50/70 border-brand-500 ring-2 ring-brand-400/20 shadow-md scale-[1.02]"
                      : isPassed
                      ? "bg-white border-emerald-300 shadow-2xs hover:border-emerald-400"
                      : "bg-surface-ground border-slate-200/80 opacity-70 hover:opacity-100"
                  )}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-[10px] uppercase tracking-wider font-bold text-slate-500">
                        {step.phase}
                      </span>
                      {isPassed ? (
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                      ) : isActive ? (
                        <span className="w-2 h-2 rounded-full bg-brand-600 animate-pulse-subtle" />
                      ) : null}
                    </div>

                    <h4 className="font-display font-bold text-xs sm:text-sm text-slate-900 leading-snug mb-2">
                      {step.title}
                    </h4>
                  </div>

                  <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between text-[10px] font-mono text-slate-500">
                    <span>{step.latency}</span>
                    <span className={isActive ? "text-brand-700 font-bold" : ""}>
                      {isActive ? "ACTIVE" : isPassed ? "PASSED" : "WAITING"}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detailed Inspector for the Selected Phase */}
          <div className="p-6 rounded-xl bg-slate-900 text-white font-mono text-xs shadow-inner">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-brand-400" />
                <span className="text-slate-300 uppercase tracking-wider font-bold">
                  STAGE TELEMETRY // {activeFlow.steps[activeStepIndex].phase} — {activeFlow.steps[activeStepIndex].title}
                </span>
              </div>
              <span className="text-[11px] text-emerald-400 bg-emerald-950/60 border border-emerald-800 px-2 py-0.5 rounded-sm">
                LATENCY BUDGET: {activeFlow.steps[activeStepIndex].latency}
              </span>
            </div>

            <p className="font-sans text-sm text-slate-300 mb-3">
              {activeFlow.steps[activeStepIndex].detail}
            </p>

            <div className="p-3 rounded-lg bg-black/50 border border-slate-800 text-brand-300 text-[11px] overflow-x-auto">
              <code>{activeFlow.steps[activeStepIndex].telemetry}</code>
            </div>
          </div>
        </div>
        </FadeIn>
      </div>
    </section>
  );
}
