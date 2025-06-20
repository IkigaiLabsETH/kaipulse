'use client';

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
  DynamicHeatingEnergy,
} from '../components/dynamic-imports';

// Loading component for Suspense
const SectionLoading = ({ height = 'h-96' }: { height?: string }) => <LoadingState height={height} />;

// Error fallback component
const ErrorFallback = () => (
  <div className="p-6 rounded-lg bg-red-900/20 border border-red-500/50 text-red-200">
    <h3 className="text-lg font-semibold mb-2">Unable to load this section</h3>
    <p className="text-sm">Please try refreshing the page or contact support if the issue persists.</p>
  </div>
);

// Client-side wrapper for error boundary
const ClientErrorBoundary = ({ children }: { children: React.ReactNode }) => (
  <ErrorBoundary fallback={<ErrorFallback />}>{children}</ErrorBoundary>
);

export default function PoolDetailsClient() {
  return (
    <Suspense fallback={<PageLoading />}>
      <div className="min-h-screen bg-black text-white font-satoshi">
        {/* Premium header accent */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 space-y-16">
          <ClientErrorBoundary>
            <ConstructionDetails />
          </ClientErrorBoundary>

          <ClientErrorBoundary>
            <NaturalStoneOptions />
          </ClientErrorBoundary>

          <ClientErrorBoundary>
            <Suspense fallback={<SectionLoading height="h-[450px]" />}>
              <DynamicSolarEnergy />
            </Suspense>
          </ClientErrorBoundary>

          <ClientErrorBoundary>
            <Suspense fallback={<SectionLoading height="h-[500px]" />}>
              <DynamicWaterTreatment />
            </Suspense>
          </ClientErrorBoundary>

          <ClientErrorBoundary>
            <Suspense fallback={<SectionLoading height="h-[400px]" />}>
              <DynamicHeatingEnergy />
            </Suspense>
          </ClientErrorBoundary>

          <ClientErrorBoundary>
            <Suspense fallback={<SectionLoading height="h-[600px]" />}>
              <DynamicAdvancedFeatures />
            </Suspense>
          </ClientErrorBoundary>

          <ClientErrorBoundary>
            <BeatbotSection />
          </ClientErrorBoundary>
        </div>
      </div>
    </Suspense>
  );
} 