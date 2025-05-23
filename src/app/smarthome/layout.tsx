import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LTL Smart Villa - Luxury Smart Home Solutions',
  description: 'Discover premium smart home brands and luxury suppliers for your dream villa. Curated selection of high-end technology, interior design, and architectural solutions.',
  openGraph: {
    title: 'LTL Smart Villa - Luxury Smart Home Solutions',
    description: 'Discover premium smart home brands and luxury suppliers for your dream villa. Curated selection of high-end technology, interior design, and architectural solutions.',
    images: [
      {
        url: '/LTLvilla.jpg',
        width: 1200,
        height: 630,
        alt: 'LTL Smart Villa - Luxury Smart Home',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LTL Smart Villa - Luxury Smart Home Solutions',
    description: 'Discover premium smart home brands and luxury suppliers for your dream villa. Curated selection of high-end technology, interior design, and architectural solutions.',
    images: ['/LTLvilla.jpg'],
  },
};

export default function SmartHomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 