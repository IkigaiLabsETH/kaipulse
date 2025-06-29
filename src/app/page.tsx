import { Metadata } from 'next';
import HomePageClient from '@/components/home/HomePageClient';

export const metadata: Metadata = {
  title: 'Bitcoin-First Strategy & NFT Curation | LiveTheLifeTV',
  description: 'Tesla doesn\'t sell cars. They sell the future. Red Bull doesn\'t sell energy. They sell thrill. Bitcoin doesn\'t sell ₿ coin. It sells freedom. Your platform for Bitcoin-first investing, MSTY strategies, NFT curation, and bull market indicators.',
  keywords: [
    'Bitcoin strategy',
    'MSTY income strategy',
    'NFT curation',
    'Bull market indicator',
    'Fiat escape hatch',
    'Bitcoin-first investing',
    'Crypto lifestyle',
    'Financial freedom',
    'Creative expression',
    'Sell Bitcoin top',
  ],
};

export default function Home() {
  return <HomePageClient />;
}
