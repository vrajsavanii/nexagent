'use client';

import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/hero/HeroSection';
import WhatWeDo from '@/components/sections/WhatWeDo';
import HmsShowcase from '@/components/products/HmsShowcase';
import ConfiguratorTeaser from '@/components/interactive/ConfiguratorTeaser';
import BentoStats from '@/components/sections/BentoStats';
import FoundersSection from '@/components/sections/FoundersSection';
import FaqAccordion from '@/components/sections/FaqAccordion';
import StrategyCallModal from '@/components/modals/StrategyCallModal';

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#3f3f46] overflow-x-hidden" suppressHydrationWarning>
      {/* Top Standard Navigation */}
      <Navbar onOpenStrategyCall={() => setModalOpen(true)} activePath="/" />

      {/* Main Flow: Minimalist, High-Signal Unicorn Architecture */}
      <main className="flex-1 w-full">
        {/* 1. Hero Section with Monochrome Architecture Totem */}
        <HeroSection onOpenStrategyCall={() => setModalOpen(true)} />

        {/* 2. Architectural Thesis & 4 Pillars */}
        <WhatWeDo />

        {/* 3. Flagship Products: NexAgent HMS (Hospital OS) & Hospitality OS */}
        <HmsShowcase onOpenStrategyCall={() => setModalOpen(true)} />

        {/* 4. Dedicated Solution Architect Teaser (Links to /setup) */}
        <ConfiguratorTeaser onOpenStrategyCall={() => setModalOpen(true)} />

        {/* 5. Measurable Outcomes & Bento Stats */}
        <BentoStats />

        {/* 6. Founders Presentation: Manthan Kachhadiya & Vraj Savani */}
        <FoundersSection />

        {/* 7. Executive Operational FAQ */}
        <FaqAccordion />
      </main>

      {/* Footer */}
      <Footer onOpenStrategyCall={() => setModalOpen(true)} />

      {/* Strategy Call Booking Modal */}
      <StrategyCallModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
