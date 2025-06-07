import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Training Protocol',
  description: 'Comprehensive training and biohacking protocol for optimal performance',
};

export const runtime = 'edge';
export const dynamic = 'force-dynamic';
export const revalidate = 60;

export default function TrainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 