import { Metadata } from 'next';
import ConstructionDetails from '../components/ConstructionDetails';
import NaturalStoneOptions from '../components/NaturalStoneOptions';
import BeatbotSection from '../components/BeatbotSection';
import {
  DynamicAdvancedFeatures,
  DynamicWaterTreatment,
  DynamicSolarEnergy,
  DynamicHeatingEnergy
} from '../components/dynamic-imports';

export const metadata: Metadata = {
  title: 'Pool Details | Advanced Features & Systems',
  description: 'Explore the advanced features, energy systems, and premium construction details of our luxury pool solutions.',
  openGraph: {
    title: 'Pool Details | Advanced Features & Systems',
    description: 'Explore the advanced features, energy systems, and premium construction details of our luxury pool solutions.',
    type: 'website',
  },
};

// Force dynamic rendering and ensure server-side rendering
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';
export const revalidate = 0;

// Ensure this page is always rendered on the server
export const preferredRegion = 'auto';

export default function PoolDetailsPage() {
  return (
    <div className="min-h-screen bg-black text-white font-satoshi">
      {/* Premium header accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 space-y-16">
        <ConstructionDetails />
        <NaturalStoneOptions />
        <DynamicSolarEnergy />
        <DynamicWaterTreatment />
        <DynamicHeatingEnergy />
        <DynamicAdvancedFeatures />
        <BeatbotSection />
      </div>
    </div>
  );
} 