"use client";

import { Badge } from '@/components/ui/badge';
import { EmbeddedVideo } from './index';

interface WineRegionHeroProps {
  badge: string;
  title: string;
  description: string;
  videoUrl?: string;
  videoTitle?: string;
}

export default function WineRegionHero({ 
  badge, 
  title, 
  description, 
  videoUrl, 
  videoTitle 
}: WineRegionHeroProps) {
  return (
    <section className="flex flex-col items-center justify-center min-h-[70vh] pt-24 pb-8 px-4">
      <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto w-full">
        <div className="flex-1 flex flex-col items-start gap-6">
          <Badge className="bg-yellow-500 text-black text-sm mb-2 font-satoshi tracking-wide">
            {badge}
          </Badge>
          <h1 className="font-epilogue text-5xl md:text-6xl font-bold text-yellow-400 mb-2 tracking-tight">
            {title}
          </h1>
          <p className="text-lg md:text-2xl text-white/90 font-satoshi max-w-xl leading-snug">
            {description}
          </p>
        </div>
        {videoUrl && (
          <div className="flex-1 flex justify-center items-center">
            <EmbeddedVideo 
              videoUrl={videoUrl} 
              title={videoTitle || title}
            />
          </div>
        )}
      </div>
    </section>
  );
} 