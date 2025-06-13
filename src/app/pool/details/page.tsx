import { Metadata } from 'next';
import ConstructionDetails from '../components/ConstructionDetails';
import NaturalStoneOptions from '../components/NaturalStoneOptions';
import SolarEnergySystem from '../components/SolarEnergySystem';
import WaterTreatmentSystems from '../components/WaterTreatmentSystems';
import HeatingEnergy from '../components/HeatingEnergy';
import AdvancedFeatures from '../components/AdvancedFeatures';
import BeatbotSection from '../components/BeatbotSection';

export const metadata: Metadata = {
  title: 'Pool Details | Advanced Features & Systems',
  description: 'Explore the advanced features, energy systems, and premium construction details of our luxury pool solutions.',
  openGraph: {
    title: 'Pool Details | Advanced Features & Systems',
    description: 'Explore the advanced features, energy systems, and premium construction details of our luxury pool solutions.',
    type: 'website',
  },
};

export const revalidate = 3600; // ISR: Regenerate every hour

export default function PoolDetailsPage() {
  return (
    <div className="min-h-screen bg-black text-white font-satoshi">
      {/* Premium header accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 space-y-16">
        <ConstructionDetails />
        <NaturalStoneOptions />
        <SolarEnergySystem />
        <WaterTreatmentSystems />
        <HeatingEnergy />
        <AdvancedFeatures />
        <BeatbotSection />
      </div>
    </div>
  );
} 