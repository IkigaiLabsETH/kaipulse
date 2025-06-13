import { Metadata } from 'next';
import PoolDetailsClient from './client';

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
  return <PoolDetailsClient />;
} 