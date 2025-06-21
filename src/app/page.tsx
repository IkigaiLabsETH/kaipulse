import { Metadata } from 'next';
import HomePageClient from '@/components/home/HomePageClient';

export const metadata: Metadata = {
  title: 'Bitcoin-First Strategy & Tools | LiveTheLifeTV',
  description: 'Master a Bitcoin-first investment strategy with our advanced tools. Track bull market peak indicators, get live price data, and learn to sell at the top. For educational purposes only.',
  keywords: [
    'Bitcoin strategy',
    'Bitcoin tools',
    'Bull market indicator',
    'Bitcoin price ticker',
    'Crypto investment strategy',
    'Sell Bitcoin top',
    'Financial education',
  ],
};

export default function Home() {
  return <HomePageClient />;
}
