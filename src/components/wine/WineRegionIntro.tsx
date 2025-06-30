"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import EmbeddedVideo from './EmbeddedVideo';

interface WineRegionIntroButton {
  label: string;
  href: string;
}

interface WineRegionIntroProps {
  title: string;
  description: string;
  buttons?: WineRegionIntroButton[];
  videoUrl?: string;
  videoTitle?: string;
  className?: string;
}

export default function WineRegionIntro({ 
  title, 
  description, 
  buttons = [], 
  videoUrl, 
  videoTitle,
  className = ""
}: WineRegionIntroProps) {
  return (
    <section className={`py-16 md:py-20 px-4 ${className}`}>
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="heading-lg text-yellow-400 font-boska mb-4 font-bold tracking-tight uppercase">
          {title}
        </h2>
        <p className="text-lg md:text-xl text-white/80 font-satoshi mb-4">
          {description}
        </p>
        
        {buttons.length > 0 && (
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {buttons.map((button, index) => (
              <Link key={index} href={button.href} target="_blank">
                <Button className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 transition-all duration-300">
                  {button.label}
                </Button>
              </Link>
            ))}
          </div>
        )}

        {videoUrl && (
          <div className="mt-6 w-full max-w-[500px] mx-auto">
            <EmbeddedVideo videoUrl={videoUrl} title={videoTitle || title} />
          </div>
        )}
      </div>
    </section>
  );
} 