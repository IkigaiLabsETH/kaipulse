import { Metadata } from 'next';
import { Suspense } from 'react';
import ConstructionDetails from '../components/ConstructionDetails';
import NaturalStoneOptions from '../components/NaturalStoneOptions';
import BeatbotSection from '../components/BeatbotSection';
import { ErrorBoundary } from '../components/ErrorBoundary';
import LoadingState from '../components/LoadingState';
import PageLoading from '../components/PageLoading';
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

// Loading component for Suspense
const SectionLoading = ({ height = "h-96" }: { height?: string }) => (
  <LoadingState height={height} />
);

// Error fallback component
const ErrorFallback = () => (
  <div className="p-6 rounded-lg bg-red-900/20 border border-red-500/50 text-red-200">
    <h3 className="text-lg font-semibold mb-2">Unable to load this section</h3>
    <p className="text-sm">Please try refreshing the page or contact support if the issue persists.</p>
  </div>
);

export default function PoolDetailsPage() {
  return (
    <Suspense fallback={<PageLoading />}>
      <div className="min-h-screen bg-black text-white font-satoshi">
        {/* Premium header accent */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 space-y-16">
          <ErrorBoundary fallback={<ErrorFallback />}>
            <ConstructionDetails />
          </ErrorBoundary>

          <ErrorBoundary fallback={<ErrorFallback />}>
            <NaturalStoneOptions />
          </ErrorBoundary>

          <ErrorBoundary fallback={<ErrorFallback />}>
            <Suspense fallback={<SectionLoading height="h-[450px]" />}>
              <DynamicSolarEnergy />
            </Suspense>
          </ErrorBoundary>

          <ErrorBoundary fallback={<ErrorFallback />}>
            <Suspense fallback={<SectionLoading height="h-[500px]" />}>
              <DynamicWaterTreatment />
            </Suspense>
          </ErrorBoundary>

          <ErrorBoundary fallback={<ErrorFallback />}>
            <Suspense fallback={<SectionLoading height="h-[400px]" />}>
              <DynamicHeatingEnergy />
            </Suspense>
          </ErrorBoundary>

          <ErrorBoundary fallback={<ErrorFallback />}>
            <Suspense fallback={<SectionLoading height="h-[600px]" />}>
              <DynamicAdvancedFeatures />
            </Suspense>
          </ErrorBoundary>

          <ErrorBoundary fallback={<ErrorFallback />}>
            <BeatbotSection />
          </ErrorBoundary>
        </div>
      </div>
    </Suspense>
  );
} 