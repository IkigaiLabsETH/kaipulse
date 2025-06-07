'use client';

import Image from 'next/image';
import HeroSection from "./sections/HeroSection";
import IntroductionSection from "./sections/IntroductionSection";
import CorePrinciplesSection from "./sections/CorePrinciplesSection";
import ExerciseSection from "./sections/ExerciseSection";
import NutritionSection from "./sections/NutritionSection";
import MindsetSection from "./sections/MindsetSection";
import SleepSection from "./sections/SleepSection";
import MeditationSection from "./sections/MeditationSection";
import RecoverySection from "./sections/RecoverySection";
import BiohackingSection from "./sections/BiohackingSection";
import TrackingSection from "./sections/TrackingSection";
import NicotineCaffeineSection from './sections/NicotineCaffeineSection';
import KeyFeaturesSection from './sections/KeyFeaturesSection';
import GettingStartedSection from './sections/GettingStartedSection';
import WeeklyScheduleSection from './sections/WeeklyScheduleSection';
import OutroSection from './sections/OutroSection';
import FeaturedVideoSection from './sections/FeaturedVideoSection';

export const dynamic = "force-dynamic";

// Client component
export default function TrainPage() {
  return (
    <div className="min-h-screen bg-black text-white font-satoshi">
      {/* Premium header accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="space-y-16">
          {/* Hero Section */}
          <HeroSection />

          {/* Introduction Section */}
          <IntroductionSection />

          {/* Core Principles Section */}
          <CorePrinciplesSection />

          {/* Featured Visual */}
          <div className="relative w-full mx-auto mt-12 aspect-[16/9] overflow-hidden rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <Image
              src="/seadoo.jpg"
              alt="Sustainable Fitness Training"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>

          {/* Exercise Section */}
          <ExerciseSection />

          {/* Nutrition Section */}
          <NutritionSection />

          {/* Mindset Section */}
          <MindsetSection />

          {/* Sleep Section */}
          <SleepSection />

          {/* Meditation Section */}
          <MeditationSection />

          {/* Recovery Section */}
          <RecoverySection />

          {/* Biohacking Section */}
          <BiohackingSection />

          {/* Tracking Section */}
          <TrackingSection />

          {/* Nicotine & Caffeine Section */}
          <NicotineCaffeineSection />

          {/* Key Features */}
          <KeyFeaturesSection />

          {/* Getting Started Guide */}
          <GettingStartedSection />

          {/* Weekly Schedule Link */}
          <WeeklyScheduleSection />

          {/* Featured Video Section */}
          <FeaturedVideoSection />

          {/* Outro Section */}
          <OutroSection />
        </div>
      </div>
    </div>
  );
}
