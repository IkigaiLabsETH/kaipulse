import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MSTY Trading - Bitcoin Income Strategy',
  description: 'HODLing solves the future — $MSTY solves today. It gives us time, freedom, and monthly income to live now, not just later. Allocate accordingly.',
  openGraph: {
    title: 'MSTY Trading - Bitcoin Income Strategy',
    description: 'HODLing solves the future — $MSTY solves today. It gives us time, freedom, and monthly income to live now, not just later. Allocate accordingly.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MSTY Trading - Bitcoin Income Strategy',
    description: 'HODLing solves the future — $MSTY solves today. It gives us time, freedom, and monthly income to live now, not just later. Allocate accordingly.',
  }
};

export default function MSTYLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 