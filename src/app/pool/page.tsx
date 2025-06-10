"use client";

import HeroSection from "./components/HeroSection";
import OverviewSection from "./components/OverviewSection";
import CostBreakdown from "./components/CostBreakdown";
import ConstructionDetails from "./components/ConstructionDetails";
import AdvancedFeatures from "./components/AdvancedFeatures";
import WaterTreatmentSystems from "./components/WaterTreatmentSystems";
import NaturalStoneOptions from "./components/NaturalStoneOptions";
import HeatingEnergy from "./components/HeatingEnergy";
import SolarEnergySystem from "./components/SolarEnergySystem";
import BeatbotSection from "./components/BeatbotSection";

export default function PoolPage() {
  return (
    <div className="min-h-screen bg-black text-white font-satoshi">
      {/* Premium header accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="space-y-16">
          {/* Hero Section */}
          <HeroSection />

          {/* Overview Section */}
          <OverviewSection />

          {/* Cost Breakdown */}
          <CostBreakdown />

          {/* Detailed Specifications */}
          <ConstructionDetails />

          {/* New Section: Advanced Features */}
          <AdvancedFeatures />

          {/* New Section: Water Treatment Systems */}
          <WaterTreatmentSystems />

          {/* New Section: Beatbot Smart Cleaning */}
          <BeatbotSection />

          {/* New Section: Natural Stone Options */}
          <NaturalStoneOptions />

          {/* New Section: Heating & Energy */}
          <HeatingEnergy />

          {/* New Section: Solar Energy System */}
          <SolarEnergySystem />
        </div>
      </div>
    </div>
  );
}
