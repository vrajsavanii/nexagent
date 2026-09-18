'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

// Real SVG icons for the integration nodes
const IntegrationIcons = {
  notion: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z"/>
    </svg>
  ),
  sheets: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M11.318 12.545H7.91v-1.909h3.41v1.91zm2.909-1.909h-1.5v1.91h1.5v-1.91zm.818 4.91H7.91v-1.955h7.136v1.954zm3.273-10.637V21a.91.91 0 01-.91.91H3.273a.91.91 0 01-.909-.91V3.91a.91.91 0 01.91-.91h10.636l4.408 2.909zm-4.09-.545V4.636l2.272 1.728h-2.272z" fill="#0F9D58"/>
    </svg>
  ),
  slack: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M5.042 15.165a2.528 2.528 0 01-2.52 2.523A2.528 2.528 0 010 15.165a2.527 2.527 0 012.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 012.521-2.52 2.527 2.527 0 012.521 2.52v6.313A2.528 2.528 0 018.834 24a2.528 2.528 0 01-2.521-2.522v-6.313zm2.521-10.123a2.528 2.528 0 01-2.521-2.52A2.528 2.528 0 018.834 0a2.528 2.528 0 012.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 012.521 2.521 2.528 2.528 0 01-2.521 2.521H2.522A2.528 2.528 0 010 8.834a2.528 2.528 0 012.522-2.521h6.312zm10.122 2.521a2.528 2.528 0 012.522-2.521A2.528 2.528 0 0124 8.834a2.528 2.528 0 01-2.522 2.521h-2.521V8.834zm-1.271 0a2.528 2.528 0 01-2.522 2.521 2.527 2.527 0 01-2.521-2.521V2.522A2.527 2.527 0 0115.165 0a2.528 2.528 0 012.522 2.522v6.312zm-2.522 10.122a2.528 2.528 0 012.522 2.522A2.528 2.528 0 0115.165 24a2.527 2.527 0 01-2.521-2.522v-2.521h2.521zm0-1.271a2.527 2.527 0 01-2.521-2.522 2.526 2.526 0 012.521-2.52h6.313A2.527 2.527 0 0124 15.165a2.528 2.528 0 01-2.522 2.522h-6.313z" fill="#E01E5A"/>
    </svg>
  ),
  outlook: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M24 7.387v13.276a1.084 1.084 0 01-1.085 1.084H9.294a1.084 1.084 0 01-1.085-1.084V18.66l9.758-3.26v-4.786L24 7.387zm-7.206 9.22l-6.485 2.166V20.38h13.406V9.104l-6.921 7.503zM7.106.253l9.688 2.09v19.314L7.106 23.747V.253zM3.76 15.904c-1.24 0-2.25-1.564-2.25-3.492 0-1.927 1.01-3.49 2.25-3.49 1.241 0 2.251 1.563 2.251 3.49 0 1.928-1.01 3.492-2.25 3.492zm3.346-9.39H0v11.972h7.106V6.514z" fill="#0078D4"/>
    </svg>
  ),
  salesforce: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M9.998 0C7.7 0 5.7 1.12 4.46 2.85A5.514 5.514 0 002.51 2.5C1.12 2.5 0 3.62 0 5.01c0 .64.24 1.22.63 1.66A4.24 4.24 0 00.5 8.25a4.25 4.25 0 003.5 4.19v.06c0 2.07 1.67 3.75 3.75 3.75.38 0 .75-.06 1.1-.16A3.73 3.73 0 0012.5 18c1.38 0 2.59-.75 3.25-1.87.24.04.49.07.75.07A3.75 3.75 0 0020.25 12c0-.36-.05-.71-.14-1.04A4 4 0 0023.5 7.5a4 4 0 00-3.56-3.97A4.5 4.5 0 0015.5 1 4.48 4.48 0 0012 2.5 4.4 4.4 0 009.998 0z" fill="#00A1E0"/>
    </svg>
  ),
  gmail: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.907 1.528-1.148C21.69 2.28 24 3.434 24 5.457z" fill="#EA4335"/>
    </svg>
  ),
};

export default function HeroTitanSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse tilt tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothMouseY, [-300, 300], [10, -10]);
  const rotateY = useTransform(smoothMouseX, [-300, 300], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Integration tools around the core
  const tools = [
    {
      id: 'notion',
      name: 'Linear / Notion',
      icon: IntegrationIcons.notion,
      bg: 'bg-white',
      pos: 'left-4 sm:left-12 lg:left-20 top-6 sm:top-8',
      floatOffset: [0, -6, 0],
      delay: 0,
    },
    {
      id: 'sheets',
      name: 'Google Sheets',
      icon: IntegrationIcons.sheets,
      bg: 'bg-white',
      pos: 'left-2 sm:left-8 lg:left-16 top-36 sm:top-40',
      floatOffset: [0, 6, 0],
      delay: 0.2,
    },
    {
      id: 'slack',
      name: 'Slack / Event Mesh',
      icon: IntegrationIcons.slack,
      bg: 'bg-white',
      pos: 'left-4 sm:left-12 lg:left-20 bottom-6 sm:bottom-8',
      floatOffset: [0, -5, 0],
      delay: 0.4,
    },
    {
      id: 'outlook',
      name: 'Outlook / 365',
      icon: IntegrationIcons.outlook,
      bg: 'bg-white',
      pos: 'right-4 sm:right-12 lg:right-20 top-6 sm:top-8',
      floatOffset: [0, 6, 0],
      delay: 0.1,
    },
    {
      id: 'salesforce',
      name: 'Salesforce CRM',
      icon: IntegrationIcons.salesforce,
      bg: 'bg-white',
      pos: 'right-2 sm:right-8 lg:right-16 top-36 sm:top-40',
      floatOffset: [0, -6, 0],
      delay: 0.3,
    },
    {
      id: 'gmail',
      name: 'Google Workspace',
      icon: IntegrationIcons.gmail,
      bg: 'bg-white',
      pos: 'right-4 sm:right-12 lg:right-20 bottom-6 sm:bottom-8',
      floatOffset: [0, 5, 0],
      delay: 0.5,
    },
  ];

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full pt-32 pb-20 sm:pt-36 sm:pb-28 overflow-hidden bg-[#FBF5F3] flex flex-col items-center justify-center text-center px-4"
    >
      {/* Background Soft Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-[#3D9D99]/8 via-[#3D9D99]/4 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Top Announcement Badge */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2A2B2E] text-white text-xs font-semibold shadow-sm mb-8"
      >
        <span className="px-2 py-0.5 rounded-full bg-[#3D9D99] text-[10px] font-bold tracking-wide uppercase">
          New
        </span>
        <span className="text-[#FBF5F3]">Claude Automations is now live! 🚀</span>
      </motion.div>

      {/* Hero Interactive Node Diagram Container */}
      <div className="relative w-full max-w-4xl py-6 flex flex-col items-center justify-center">
        {/* SVG Curved Bezier Connecting Wires */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-0 hidden sm:block"
          viewBox="0 0 800 360"
          fill="none"
          preserveAspectRatio="none"
        >
          {/* Left Top wire */}
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            d="M145 68 C 260 68, 310 168, 400 168"
            stroke="rgba(205, 211, 219, 0.85)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          {/* Left Mid wire */}
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            d="M128 180 C 230 180, 300 180, 400 180"
            stroke="rgba(205, 211, 219, 0.85)"
            strokeWidth="1.5"
          />
          {/* Left Bottom wire */}
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, delay: 0.7 }}
            d="M145 292 C 260 292, 310 192, 400 192"
            stroke="rgba(205, 211, 219, 0.85)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          {/* Right Top wire */}
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            d="M655 68 C 540 68, 490 168, 400 168"
            stroke="rgba(205, 211, 219, 0.85)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          {/* Right Mid wire */}
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            d="M672 180 C 570 180, 500 180, 400 180"
            stroke="rgba(205, 211, 219, 0.85)"
            strokeWidth="1.5"
          />
          {/* Right Bottom wire */}
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, delay: 0.8 }}
            d="M655 292 C 540 292, 490 192, 400 192"
            stroke="rgba(205, 211, 219, 0.85)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
        </svg>

        {/* Floating Tools (Integration Badges) */}
        {tools.map((tool) => (
          <motion.div
            key={tool.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: tool.floatOffset,
            }}
            transition={{
              opacity: { duration: 0.4, delay: tool.delay + 0.5 },
              scale: { duration: 0.4, delay: tool.delay + 0.5 },
              y: {
                duration: 3,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
                delay: tool.delay,
              },
            }}
            className={`absolute ${tool.pos} z-10 hidden sm:flex items-center justify-center p-3 rounded-2xl ${tool.bg} border border-[rgba(205,211,219,0.6)] shadow-[0_8px_24px_-4px_rgba(42,43,46,0.1)] cursor-pointer hover:scale-110 transition-transform hover:shadow-[0_12px_32px_-4px_rgba(42,43,46,0.15)]`}
            title={tool.name}
          >
            {tool.icon}
          </motion.div>
        ))}

        {/* Headline Line 1 */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-sans font-extrabold text-4xl sm:text-6xl lg:text-7xl text-[#2A2B2E] tracking-tight leading-none z-10"
        >
          AI Solution
        </motion.h1>

        {/* Center Floating 3D White Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{ rotateX, rotateY }}
          className="my-3 sm:my-5 relative z-20"
        >
          <div className="relative px-7 py-3 sm:px-9 sm:py-4 rounded-2xl bg-white border border-[rgba(205,211,219,0.5)] shadow-[0_16px_36px_-6px_rgba(42,43,46,0.14),0_4px_12px_rgba(0,0,0,0.04)] flex items-center gap-3 transform -rotate-2 hover:rotate-0 transition-transform duration-300">
            {/* Animated dot indicator */}
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-[#3D9D99] animate-pulse" />
            </div>
            {/* Geometric Brand Icon */}
            <div className="w-7 h-7 rounded-md bg-[#2A2B2E] flex items-center justify-center shadow-xs">
              <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#3D9D99]" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
            </div>
            <span className="font-sans font-black text-2xl sm:text-3xl text-[#2A2B2E] tracking-tighter uppercase">
              NEXAGENT
            </span>
          </div>
        </motion.div>

        {/* Headline Line 2 */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-sans font-extrabold text-4xl sm:text-6xl lg:text-7xl text-[#2A2B2E] tracking-tight leading-none z-10"
        >
          For Modern Business
        </motion.h2>
      </div>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-5 text-base sm:text-lg text-[#738290] max-w-xl font-normal leading-relaxed"
      >
        Intelligent AI systems, engineered for the enterprises of the future.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.65 }}
        className="mt-8 flex flex-wrap items-center justify-center gap-4 z-10"
      >
        <Link
          href="/book-a-strategy-call"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-[#3D9D99] hover:bg-[#2E827E] text-white text-sm font-bold shadow-[0_10px_25px_-4px_rgba(61,157,153,0.45)] hover:shadow-[0_14px_32px_-4px_rgba(61,157,153,0.55)] transition-all transform hover:-translate-y-0.5"
        >
          <span>Book A Demo</span>
          <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-xs">
            ↗
          </span>
        </Link>

        <Link
          href="#features"
          className="inline-flex items-center justify-center px-8 py-3.5 rounded-2xl bg-white hover:bg-[#FBF5F3] border border-[rgba(205,211,219,0.7)] text-[#2A2B2E] text-sm font-bold shadow-xs hover:shadow-sm transition-all transform hover:-translate-y-0.5"
        >
          Start for free
        </Link>
      </motion.div>

      {/* Stats Row */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-10"
      >
        {[
          { value: '10x', label: 'Faster Execution' },
          { value: '99.9%', label: 'Uptime SLA' },
          { value: '< 48h', label: 'Deployment' },
        ].map((stat) => (
          <div key={stat.value} className="flex flex-col items-center gap-1">
            <span className="font-sans font-black text-2xl sm:text-3xl text-[#2A2B2E]">{stat.value}</span>
            <span className="text-xs text-[#738290] font-semibold tracking-wide">{stat.label}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
