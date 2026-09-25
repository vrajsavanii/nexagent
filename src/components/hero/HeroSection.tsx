'use client';

import Link from 'next/link';
import { ArrowRight, ShieldCheck, Clock, Users } from 'lucide-react';
import { motion, type Variants } from 'motion/react';
import TotemAnimation from './TotemAnimation';
import Eyebrow from '@/components/ui/Eyebrow';
import TechnicalGrid from '@/components/ui/TechnicalGrid';

interface HeroSectionProps {
  onOpenStrategyCall: () => void;
}

// Spring easing as a typed BezierDefinition tuple
const SPRING: [number, number, number, number] = [0.16, 1, 0.3, 1];

// Staggered fade-up entry variants — Prompt Bible §3
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.10, delayChildren: 0.05 },
  },
};

const itemVariants: Variants = {
  hidden:   { opacity: 0, y: 18, filter: 'blur(4px)' },
  visible:  {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.55, ease: SPRING },
  },
};

const TRUST_SIGNALS = [
  { icon: ShieldCheck, label: 'ABDM & SOC-2 Ready' },
  { icon: Clock,       label: 'Human-in-the-Loop' },
  { icon: Users,       label: 'Deterministic Execution' },
];

export default function HeroSection({ onOpenStrategyCall }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="relative w-full pt-10 pb-16 md:pt-14 md:pb-24 overflow-hidden bg-white"
    >
      {/* Architectural background grid */}
      <TechnicalGrid withVignette withDots={false} dark={false} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-start">

          {/* ── Left: Copy & CTAs ─────────────────────────────── */}
          <motion.div
            className="lg:col-span-7 space-y-7 pt-0 lg:pt-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Eyebrow */}
            <motion.div variants={itemVariants}>
              <Eyebrow>
                Deterministic Cloud Infrastructure · Healthcare &amp; Enterprise
              </Eyebrow>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-[2.75rem] sm:text-5xl lg:text-6xl xl:text-[4.25rem] font-bold text-zinc-950 tracking-[-0.038em] leading-[1.06]"
            >
              Operations.{' '}
              <span className="text-zinc-400">Reinvented.</span>
            </motion.h1>

            {/* Value proposition */}
            <motion.p
              variants={itemVariants}
              className="text-[1.0625rem] text-zinc-500 max-w-[520px] leading-[1.7] font-normal"
            >
              NexAgent builds deterministic AI operating systems for hospitals and modern enterprises —
              orchestrating clinical queues, bed turnover, and core workflows with mandatory governance.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1"
            >
              <Link href="/setup" className="btn-architect">
                <span>Launch Solution Architect</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button onClick={onOpenStrategyCall} className="btn-demo-glow">
                <span>Request Live Demo</span>
              </button>
            </motion.div>

            {/* Trust signals strip */}
            <motion.div
              variants={itemVariants}
              className="pt-1 flex flex-wrap items-center gap-x-4 gap-y-2"
            >
              {TRUST_SIGNALS.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-1.5 text-xs text-zinc-400 font-mono tracking-wide">
                  <Icon className="w-3.5 h-3.5 text-zinc-700 shrink-0" />
                  <span>{label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: 3D Isometric Visual ────────────────────── */}
          <motion.div
            className="lg:col-span-5 flex items-center justify-center relative pt-2 lg:pt-0"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <TotemAnimation />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
