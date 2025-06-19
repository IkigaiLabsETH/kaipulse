'use client';

import OutperformingAltcoins from '@/components/crypto/OutperformingAltcoins';
import { faqs } from './faq-data';
import { Accordion } from './components/Accordion';
import { HeroSection } from './components/HeroSection';
import { MarketSentiment } from './components/MarketSentiment';
import { VideoSection } from './components/VideoSection';
import { RotationPlaybook } from './components/RotationPlaybook';
import { KeyFeatures } from './components/KeyFeatures';
import { EthBtcAnalysis } from './components/EthBtcAnalysis';
import { EthOutperforms } from './components/EthOutperforms';
import { FeaturedVisual } from './components/FeaturedVisual';
import { Tldr } from './components/Tldr';

export default function AltcoinsPage() {
  return (
    <div className="min-h-screen bg-black text-white font-satoshi">
      {/* Premium header accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="space-y-16">
          <HeroSection />

          <OutperformingAltcoins />

          <MarketSentiment />

          <VideoSection />

          <RotationPlaybook />

          <KeyFeatures />

          <EthBtcAnalysis />

          <EthOutperforms />

          <FeaturedVisual />

          <Accordion items={faqs} />

          <Tldr />
        </div>
      </div>
    </div>
  );
}
