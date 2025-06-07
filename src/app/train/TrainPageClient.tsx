'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export function TrainPageClient() {
  const [open, setOpen] = useState<number | null>(null);
  const faqs = [
    {
      q: "What is the core philosophy of this training approach?",
      a: (
        <span>
          The approach emphasizes consistent daily movement and low-impact, high-resistance exercises. It focuses on integrating fitness into daily life through practical activities like walking, taking stairs, and outdoor exercises. The goal is to make fitness sustainable and enjoyable rather than a chore.
        </span>
      ),
    },
    {
      q: "What types of exercises are recommended?",
      a: (
        <span>
          The program includes:
          <br /><br />
          • Low-impact, high-resistance exercises (rowing, weight lifting)
          <br />
          • Bodyweight exercises (squats, planks, push-ups)
          <br />
          • Outdoor activities (hiking, kayaking, cycling)
          <br />
          • Daily movement integration (walking, stairs, active breaks)
        </span>
      ),
    },
    {
      q: "How should I structure my nutrition?",
      a: (
        <span>
          Focus on a balanced diet rich in:
          <br /><br />
          • High-quality proteins (lean meats, fish, eggs)
          <br />
          • Healthy fats (avocados, nuts, olive oil)
          <br />
          • Whole foods and minimal processed items
          <br />
          • Proper hydration throughout the day
        </span>
      ),
    },
    {
      q: "What's the importance of sleep in this program?",
      a: (
        <span>
          Sleep is crucial for:
          <br /><br />
          • Recovery and muscle repair
          <br />
          • Hormone regulation
          <br />
          • Cognitive function
          <br />
          • Overall performance
          <br /><br />
          Aim for 7-9 hours of quality sleep per night.
        </span>
      ),
    },
    {
      q: "How can I integrate this into a busy schedule?",
      a: (
        <span>
          The program is designed for busy lifestyles:
          <br /><br />
          • Start with 10-minute morning workouts
          <br />
          • Take active breaks during work
          <br />
          • Use weekends for longer activities
          <br />
          • Make movement part of daily routines
          <br />
          • Focus on consistency over intensity
        </span>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-satoshi">
      {/* Premium header accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-8">
            <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">Daily Movement • Sustainable Fitness • Holistic Health</p>
            <h1 className="text-center">
              <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
                Training
              </span>
            </h1>
            <div className="flex items-center justify-center mt-6">
              <div className="h-px w-24 bg-yellow-500/30"></div>
              <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">Building Strength Through Sustainable Movement</p>
              <div className="h-px w-24 bg-yellow-500/30"></div>
            </div>
            
            {/* Featured Visual */}
            <div className="relative w-full mx-auto mt-12 aspect-[16/9] overflow-hidden rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <Image
                src="/seadoo.jpg"
                alt="Sustainable Fitness Training"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#1c1f26] rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]"
              >
                <button
                  className="w-full px-8 py-6 text-left flex justify-between items-center"
                  onClick={() => setOpen(open === index ? null : index)}
                >
                  <span className="text-xl font-bold text-yellow-500">{faq.q}</span>
                  <ChevronDown
                    className={cn(
                      "h-6 w-6 text-yellow-500 transition-transform duration-200",
                      open === index ? "transform rotate-180" : ""
                    )}
                  />
                </button>
                {open === index && (
                  <div className="px-8 pb-6 text-gray-300">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 