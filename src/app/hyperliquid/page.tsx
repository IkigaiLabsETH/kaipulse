"use client";

import ThesisSection from '@/components/hyperliquid/ThesisSection';
import OverviewSection from '@/components/hyperliquid/OverviewSection';
import KeyFeatures from '@/components/hyperliquid/KeyFeatures';
import StrengthsSection from '@/components/hyperliquid/StrengthsSection';
import PlatformComparison from '@/components/hyperliquid/PlatformComparison';
import EcosystemSection from '@/components/hyperliquid/EcosystemSection';
import FarmingSection from '@/components/hyperliquid/FarmingSection';
import CautionaryTale from '@/components/hyperliquid/CautionaryTale';
import ValuationSection from '@/components/hyperliquid/ValuationSection';
import CTASection from '@/components/hyperliquid/CTASection';

export default function HyperliquidPage() {
  return (
    <div className="min-h-screen bg-black text-white font-satoshi">
      {/* Premium header accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="space-y-16">
          {/* Core Investment Thesis */}
          <ThesisSection />

          {/* Overview Section */}
          <OverviewSection />

          {/* Key Features */}
          <KeyFeatures />

          {/* Strengths Section */}
          <StrengthsSection />

          {/* Platform Comparison */}
          <PlatformComparison />

          {/* Ecosystem Section */}
          <EcosystemSection />

          {/* Cautionary Tale */}
          <CautionaryTale />

          {/* Farming Section */}
          <FarmingSection />

          {/* Valuation Section */}
          <ValuationSection />

          {/* CTA Section */}
          <CTASection />
        </div>
      </div>
    </div>
  );
}
