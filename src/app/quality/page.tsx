'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export default function QualityPage() {
  const [open, setOpen] = useState<number | null>(null);
  const faqs = [
    {
      q: "How does quality over quantity apply to investments?",
      a: (
        <span>
          Quality investments focus on high-conviction positions rather than spreading thin across many assets. This approach leads to better performance, clearer decision-making, and reduced stress. The key is thorough research and strong conviction in your choices.
        </span>
      ),
    },
    {
      q: "What makes a quality art collection?",
      a: (
        <span>
          A quality art collection isn&apos;t about quantity but about:
          <br /><br />
          • Meaningful connection to each piece
          <br />
          • Understanding the artist&apos;s vision
          <br />
          • Supporting emerging talent
          <br />
          • Creating a cohesive narrative
          <br />
          • Long-term appreciation potential
        </span>
      ),
    },
    {
      q: "How does this principle apply to cars?",
      a: (
        <span>
          Quality cars represent:
          <br /><br />
          • Engineering excellence
          <br />
          • Timeless design
          <br />
          • Long-term reliability
          <br />
          • Heritage and craftsmanship
          <br />
          • Investment potential
        </span>
      ),
    },
    {
      q: "What defines quality in wine?",
      a: (
        <span>
          Quality wine is characterized by:
          <br /><br />
          • Terroir expression
          <br />
          • Winemaking craftsmanship
          <br />
          • Aging potential
          <br />
          • Balance and complexity
          <br />
          • Story and tradition
        </span>
      ),
    },
    {
      q: "What makes a quality sound system?",
      a: (
        <span>
          A quality sound system focuses on:
          <br /><br />
          • Accurate sound reproduction
          <br />
          • Build quality and durability
          <br />
          • Component synergy
          <br />
          • Room integration
          <br />
          • Long-term enjoyment
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
            <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">Life Philosophy • Investment Strategy • Personal Growth</p>
            <h1 className="text-center">
              <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
                Quality Over Quantity
              </span>
            </h1>
            <div className="flex items-center justify-center mt-6">
              <div className="h-px w-24 bg-yellow-500/30"></div>
              <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">A Life-Changing Mantra</p>
              <div className="h-px w-24 bg-yellow-500/30"></div>
            </div>
            
            {/* Featured Visual */}
            <div className="relative w-full mx-auto mt-12 aspect-[16/9] overflow-hidden rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <Image
                src="/model_s_tesla.jpeg"
                alt="Quality Over Quantity Philosophy"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
          </div>

          {/* Main Content Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              The Power of Quality
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                In a world obsessed with more—more coins, more connections, more content—it&apos;s easy to lose sight of what truly matters. Lately, I&apos;ve been reflecting on the power of prioritizing quality over quantity, and I&apos;m convinced it&apos;s a principle that can transform nearly every aspect of life.
              </p>
              <p className="text-lg">
                Take my crypto portfolio, for example. Over the past couple of years, I&apos;ve shared my journey of trimming down my holdings, focusing only on my highest-conviction positions. The result? A streamlined portfolio that&apos;s performed better than ever. By cutting the noise and doubling down on what I believe in, I&apos;ve found clarity and confidence.
              </p>
            </div>
          </div>

          {/* Art Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Art: The Beauty of Curated Collections
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                In art, quality manifests through meaningful curation rather than accumulation. A single piece that speaks to your soul is worth more than a gallery of forgettable works. The best collections tell stories, create emotional connections, and stand the test of time.
              </p>
            </div>
          </div>

          {/* Cars Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Cars: Engineering Excellence
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                The automotive world perfectly illustrates the quality-over-quantity principle. A well-maintained classic or a thoughtfully engineered modern vehicle offers more value than a fleet of mediocre cars. It&apos;s about the driving experience, craftsmanship, and the stories these machines tell.
              </p>
            </div>
          </div>

          {/* Wine Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Wine: The Art of Appreciation
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                Wine collecting isn&apos;t about having the most bottles—it&apos;s about understanding terroir, appreciating craftsmanship, and building a cellar that tells a story. One exceptional bottle shared with friends creates more lasting memories than a dozen mediocre wines.
              </p>
            </div>
          </div>

          {/* Sound Systems Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Sound Systems: The Pursuit of Perfect Sound
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                In audio, quality means everything. A well-designed sound system isn&apos;t about having the most speakers or the highest wattage—it&apos;s about achieving perfect harmony between components, room acoustics, and musical enjoyment. The right system can transform your listening experience.
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">🎯</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Focus
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                Quality Over Quantity
              </p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">💎</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Value
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                Long-term Investment
              </p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">🌟</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Excellence
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                Craftsmanship Matters
              </p>
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
