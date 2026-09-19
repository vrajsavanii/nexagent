import React from "react";
import { HeroSection } from "@/components/hero/HeroSection";
import { BusinessComplexitySection } from "@/components/home/BusinessComplexitySection";
import { WhatWeBuildSection } from "@/components/home/WhatWeBuildSection";
import { TechStackArchitecture } from "@/components/home/TechStackArchitecture";
import { NexAgentSystemSimulator } from "@/components/home/NexAgentSystemSimulator";
import { SolutionsPreviewSection } from "@/components/home/SolutionsPreviewSection";
import { IndustriesPreviewSection } from "@/components/home/IndustriesPreviewSection";
import { ScaleProgressionSection } from "@/components/home/ScaleProgressionSection";
import { HowWeWorkSection } from "@/components/home/HowWeWorkSection";
import { HybridModelSection } from "@/components/home/HybridModelSection";
import { ProductsSection } from "@/components/home/ProductsSection";
import { FoundersSection } from "@/components/home/FoundersSection";
import { LongTermVisionSection } from "@/components/home/LongTermVisionSection";
import { FinalCtaSection } from "@/components/home/FinalCtaSection";

export default function HomePage() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* 01 Hero Experience with 3D Intelligence Network */}
      <HeroSection />

      {/* 02 Business Complexity: Disconnected vs Connected Systems */}
      <BusinessComplexitySection />

      {/* 03 What NexAgent Builds */}
      <WhatWeBuildSection />

      {/* 04 Capability Architecture: The 5-Layer Stack */}
      <TechStackArchitecture />

      {/* 05 Signature Experience: NexAgent System Simulator */}
      <NexAgentSystemSimulator />

      {/* 06 Solutions Preview */}
      <SolutionsPreviewSection />

      {/* 07 Industries Preview & Workflows */}
      <IndustriesPreviewSection />

      {/* 08 Business Scale Progression */}
      <ScaleProgressionSection />

      {/* 09 How We Work: 7-Phase Methodology */}
      <HowWeWorkSection />

      {/* 10 Hybrid Operating Model */}
      <HybridModelSection />

      {/* 11 Products & Platforms Evolution */}
      <ProductsSection />

      {/* 12 Founders & Ownership Integrity */}
      <FoundersSection />

      {/* 13 Long-Term Vision & Global Focus */}
      <LongTermVisionSection />

      {/* 14 High-Conversion Closing CTA */}
      <FinalCtaSection />
    </div>
  );
}
