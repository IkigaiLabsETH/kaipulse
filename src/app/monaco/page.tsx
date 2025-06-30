"use client";

import MonacoVideoSection from "@/components/monaco/MonacoVideoSection";
import WhyMonacoSection from "@/components/monaco/WhyMonacoSection";
import KeyFeaturesSection from "@/components/monaco/KeyFeaturesSection";
import InvestmentStrategySection from "@/components/monaco/InvestmentStrategySection";
import FinancialOutlookSection from "@/components/monaco/FinancialOutlookSection";
import ImplementationRoadmapSection from "@/components/monaco/ImplementationRoadmapSection";
import BitcoinStandardPlaybookSection from "@/components/monaco/BitcoinStandardPlaybookSection";
import FrenchRentalStrategy from "@/components/monaco/FrenchRentalStrategy";
import MonacoFAQSection from "@/components/monaco/MonacoFAQSection";
import CulturalFitSection from "@/components/monaco/CulturalFitSection";

const MonacoPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Video Section */}
      <MonacoVideoSection />

      {/* Why Monaco Section */}
      <WhyMonacoSection />

      {/* Key Features */}
      <KeyFeaturesSection />

      {/* Investment Strategy */}
      <InvestmentStrategySection />

      {/* Financial Outlook */}
      <FinancialOutlookSection />

      {/* Implementation Roadmap */}
      <ImplementationRoadmapSection />

      {/* Bitcoin Standard Playbook */}
      <BitcoinStandardPlaybookSection />

      {/* French Rental Strategy Section */}
      <FrenchRentalStrategy />

      {/* FAQ Section */}
      <MonacoFAQSection />

      {/* Cultural Fit Outro */}
      <CulturalFitSection />
    </div>
  );
};

export default MonacoPage; 