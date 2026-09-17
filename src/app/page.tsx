'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { trackEvent } from '@/lib/analytics';
import NexAgentCore3D from '@/components/NexAgentCore3D';
import TelemetryTicker from '@/components/TelemetryTicker';
import ExecutionVectorPipeline from '@/components/ExecutionVectorPipeline';
import BusinessOSMatrix from '@/components/BusinessOSMatrix';
import BeforeAfterAudit from '@/components/BeforeAfterAudit';
import CapabilityMatrix from '@/components/CapabilityMatrix';
import ProgressiveScaleSelector from '@/components/ProgressiveScaleSelector';
import IndustryDemonstrations from '@/components/IndustryDemonstrations';
import DualEngineModel from '@/components/DualEngineModel';
import HoldingEcosystem from '@/components/HoldingEcosystem';
import GlobalReach from '@/components/GlobalReach';
import VerifiableBenchmarks from '@/components/VerifiableBenchmarks';
import CaseVignettes from '@/components/CaseVignettes';
import FutureConvergence from '@/components/FutureConvergence';
import StrategyCallForm from '@/components/StrategyCallForm';
import AboutAndFaqGeo from '@/components/AboutAndFaqGeo';
import AuditCalculatorModal from '@/components/AuditCalculatorModal';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/MotionWrapper';

export default function HomePage() {
  const [auditOpen, setAuditOpen] = useState(false);

  return (
    <div className="flex flex-col w-full bg-surface text-on-surface relative">
      {/* Subtle Planetary Technical Grid Background */}
      <div className="fixed inset-0 tech-grid opacity-10 pointer-events-none z-0"></div>

      {/* SECTION 01: FLAGSHIP HERO SECTION */}
      <section className="relative w-full border-b border-outline-variant/30 overflow-hidden z-10" id="hero">
        {/* Architectural Crosshair Coordinates */}
        <div className="absolute top-4 left-4 font-mono text-[9px] text-outline opacity-40 pointer-events-none hidden md:block">
          + LAT: 37.7749° N // LON: 122.4194° W
        </div>
        <div className="absolute top-4 right-4 font-mono text-[9px] text-outline opacity-40 pointer-events-none hidden md:block">
          SYS // ACTIVE_PRODUCTION +
        </div>

        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin py-12 lg:py-20 relative">
          {/* Top Meta Status Bar */}
          <FadeIn direction="down" duration={0.6}>
            <TelemetryTicker onOpenAudit={() => setAuditOpen(true)} />
          </FadeIn>

          {/* Hero Main Split Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mt-6">
            {/* Left Editorial Content */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
              <FadeIn direction="up" delay={0.1}>
                {/* 3D Monogram (Without Orbit) / Group Identity Node */}
                <div className="flex items-center gap-4">
                  <div className="relative h-14 w-14 sm:h-16 sm:w-16 flex-shrink-0 flex items-center justify-center">
                    {/* Live 3D Logo (Static Monogram) on plain background */}
                    <NexAgentCore3D
                      frameless={true}
                      transparent={true}
                      showOrbit={false}
                      showHud={false}
                      isStatic={true}
                      systemState="INTELLIGENCE"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="h-7 w-[1px] bg-outline-variant/50"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3">
                    <span className="font-headline-sm text-headline-sm uppercase tracking-tight text-on-surface font-semibold">
                      NEXAGENT
                    </span>
                    <span className="inline-block px-2.5 py-0.5 bg-primary/10 border border-primary/20 font-mono text-[10px] uppercase tracking-wider text-primary font-semibold w-fit">
                      INTELLIGENT TECHNOLOGY GROUP
                    </span>
                  </div>
                </div>
              </FadeIn>

              {/* Massive Editorial Headline */}
              <FadeIn direction="up" delay={0.2}>
                <h1 className="font-display-hero text-display-hero uppercase tracking-tight text-on-surface leading-[0.95] max-w-2xl">
                  THE NEXT ERA OF BUSINESS IS{' '}
                  <span className="text-primary italic font-light">INTELLIGENT.</span>
                </h1>
              </FadeIn>

              {/* Exact Supporting Copy */}
              <FadeIn direction="up" delay={0.3}>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed">
                  “We build AI-powered software, automation systems and digital infrastructure that help businesses
                  operate smarter, scale faster and move beyond what’s possible today.”
                </p>
              </FadeIn>

              {/* CTAs */}
              <FadeIn direction="up" delay={0.4}>
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link
                    href="/book-a-strategy-call"
                    onClick={() => trackEvent('cta_click', { ctaName: 'Book a Strategy Call', ctaLocation: 'hero' })}
                    className="inline-flex items-center gap-3 bg-[#17191A] text-white font-label-code text-label-code uppercase tracking-widest px-8 py-4 hover:bg-[#3D9D99] transition-all shadow-md group"
                  >
                    <span>Book a Strategy Call</span>
                    <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </Link>

                  <Link
                    href="#capabilities"
                    onClick={() => trackEvent('cta_click', { ctaName: 'Explore NexAgent', ctaLocation: 'hero' })}
                    className="inline-flex items-center gap-2 bg-surface-container-lowest border border-outline-variant text-on-surface font-label-code text-label-code uppercase tracking-widest px-7 py-4 hover:bg-surface-container-low transition-colors shadow-sm"
                  >
                    <span className="material-symbols-outlined text-[18px] text-primary">explore</span>
                    <span>Explore NexAgent</span>
                  </Link>

                  <button
                    onClick={() => setAuditOpen(true)}
                    className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 text-primary font-label-code text-label-code uppercase tracking-widest px-5 py-4 hover:bg-primary/20 transition-colors cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[18px]">calculate</span>
                    <span>Calculate ROI</span>
                  </button>
                </div>
              </FadeIn>

              {/* Key Global Metrics Bar */}
              <FadeIn direction="up" delay={0.5}>
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-outline-variant/30">
                  <div>
                    <span className="font-mono text-[10px] uppercase text-outline">
                      GLOBAL REACH
                    </span>
                    <p className="font-headline-sm text-headline-sm font-semibold text-on-surface mt-0.5">
                      USA • UK • UAE • INDIA
                    </p>
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase text-outline">
                      SYSTEM INTEGRATION
                    </span>
                    <p className="font-headline-sm text-headline-sm font-semibold text-on-surface mt-0.5">
                      SEAMLESS API & CLOUD
                    </p>
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase text-outline">
                      CORPORATE MANDATE
                    </span>
                    <p className="font-headline-sm text-headline-sm font-semibold text-primary mt-0.5">
                      BUILD SMARTER, GROW FASTER
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right Visual Container with NexAgent Core & Technical Annotations */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <FadeIn direction="left" delay={0.25} duration={0.8} className="w-full">
                <div className="relative w-full h-[460px] lg:h-[520px] flex items-center justify-center">
                  {/* Subtle radial ambient lighting */}
                  <div className="absolute inset-0 bg-radial-gradient from-primary/10 via-transparent to-transparent pointer-events-none blur-3xl opacity-60"></div>

                  {/* 3D WebGL Monogram on Plain Background with Orbit & Layered Modules (Moving) */}
                  <NexAgentCore3D
                    frameless={true}
                    transparent={true}
                    showOrbit={true}
                    showHud={false}
                    isStatic={false}
                    autoRotateSpeed={0.65}
                    systemState="INTELLIGENCE"
                    expansionLevel={0}
                    className="w-full h-full"
                  />

                  {/* Engineering Annotations Around the Core */}
                  <div className="absolute top-2 left-2 font-mono text-[10px] text-outline uppercase tracking-wider bg-surface/80 px-2 py-1 border border-outline-variant/30 backdrop-blur-xs pointer-events-none">
                    AI // NEURAL ARCHITECTURE
                  </div>
                  <div className="absolute top-2 right-2 font-mono text-[10px] text-outline uppercase tracking-wider bg-surface/80 px-2 py-1 border border-outline-variant/30 backdrop-blur-xs pointer-events-none">
                    AGENTS // AUTONOMOUS WORKFLOW
                  </div>
                  <div className="absolute bottom-10 left-2 font-mono text-[10px] text-outline uppercase tracking-wider bg-surface/80 px-2 py-1 border border-outline-variant/30 backdrop-blur-xs pointer-events-none">
                    AUTOMATION // EVENT BUS
                  </div>
                  <div className="absolute bottom-10 right-2 font-mono text-[10px] text-outline uppercase tracking-wider bg-surface/80 px-2 py-1 border border-outline-variant/30 backdrop-blur-xs pointer-events-none">
                    SOFTWARE // ENTERPRISE APPS
                  </div>
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 font-mono text-[10px] text-primary uppercase tracking-wider bg-surface/80 px-2.5 py-1 border border-primary/30 backdrop-blur-xs pointer-events-none whitespace-nowrap">
                    INFRASTRUCTURE // CLOUD & EDGE
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 02: WE DON'T BUILD ONE THING (QUIET EDITORIAL) */}
      <section className="w-full py-24 lg:py-32 bg-surface-container-low border-b border-outline-variant/30 z-10" id="philosophy">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 space-y-4">
              <FadeIn direction="right">
                <span className="font-label-code text-label-code uppercase tracking-widest text-primary font-semibold">
                  PARENT GROUP MANDATE
                </span>
                <div className="space-y-1 mt-2">
                  <h2 className="font-headline-lg text-headline-lg uppercase font-bold text-on-surface leading-[1.05] tracking-tight">
                    WE DON'T BUILD ONE THING.
                  </h2>
                  <h3 className="font-headline-lg text-headline-lg uppercase font-bold text-primary leading-[1.05] tracking-tight">
                    WE BUILD WHAT COMES NEXT.
                  </h3>
                </div>
              </FadeIn>
            </div>

            <div className="lg:col-span-7 space-y-6 lg:pl-8 lg:border-l border-outline-variant/40">
              <FadeIn direction="left" delay={0.15}>
                <p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
                  “NexAgent develops intelligent technology across AI, automation, software, infrastructure and emerging
                  digital systems — building products of our own and solving complex problems for organizations around the world.”
                </p>
              </FadeIn>

              <StaggerContainer delay={0.25} stagger={0.15}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-outline-variant/30">
                  <StaggerItem>
                    <div className="space-y-2">
                      <span className="font-label-code text-label-code uppercase text-on-surface font-semibold flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-primary"></span>
                        UNIFIED SYSTEMS
                      </span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                        We harmonize reasoning models, headless event buses, and custom digital infrastructure into a
                        single coherent operating fabric.
                      </p>
                    </div>
                  </StaggerItem>
                  <StaggerItem>
                    <div className="space-y-2">
                      <span className="font-label-code text-label-code uppercase text-on-surface font-semibold flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-secondary"></span>
                        GLOBAL RESILIENCE
                      </span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                        Engineered to execute transactions reliably across jurisdictions, clouds, and time zones without
                        degradation in speed or precision.
                      </p>
                    </div>
                  </StaggerItem>
                </div>
              </StaggerContainer>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 03: INTELLIGENCE TO ACTION */}
      <ExecutionVectorPipeline />

      {/* SECTION 04: BUSINESS OPERATING SYSTEM */}
      <BusinessOSMatrix />

      {/* SECTION 05: BEFORE / AFTER TRANSFORMATION */}
      <BeforeAfterAudit />

      {/* SECTION 06: WHAT NEXAGENT BUILDS (13 HIERARCHICAL DISCIPLINES) */}
      <CapabilityMatrix />

      {/* SECTION 07: BUILT FOR EVERY SCALE (8 EXPANDING TIERS) */}
      <ProgressiveScaleSelector />

      {/* SECTION 08: INDUSTRY WORKFLOW DEMONSTRATIONS */}
      <IndustryDemonstrations />

      {/* SECTION 09: THE DUAL ENGINE MODEL (PRODUCTS + SYSTEMS) */}
      <DualEngineModel />

      {/* SECTION 10: PARENT HOLDING ECOSYSTEM */}
      <HoldingEcosystem />

      {/* SECTION 11: GLOBAL TECHNOLOGY NETWORK */}
      <GlobalReach />

      {/* SECTION 12: PROOF & MEASURABLE CHANGE */}
      <VerifiableBenchmarks />

      {/* SECTION 13: ENTERPRISE BLUEPRINTS CASE STUDIES */}
      <CaseVignettes />

      {/* SECTION 14: STRATEGIC DARK VAULT: THIS IS ONLY THE BEGINNING (CORE CONVERGENCE) */}
      <FutureConvergence />

      {/* SECTION 15: ABOUT NEXAGENT & ANSWER-FIRST FAQ (GEO ARCHITECTURE) */}
      <AboutAndFaqGeo />

      {/* SECTION 16: FINAL CTA & EXECUTIVE STRATEGY BRIEFING */}
      <StrategyCallForm />

      {/* Interactive ROI Audit Modal */}
      <AuditCalculatorModal isOpen={auditOpen} onClose={() => setAuditOpen(false)} />
    </div>
  );
}
