'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function AboutPage() {
  // Interactive pyramid state
  const [activeTier, setActiveTier] = useState<string | null>(null);

  // Pyramid tier data
  const pyramidTiers = [
    {
      key: 'btc',
      label: 'BTC',
      points: '40,560 760,560 400,260',
      fill: '#FFA726',
      border: '#FFA726',
      labelY: 525,
      labelSize: 64,
      description: 'Long-term savings / generational asset / foundation of wealth',
    },
    {
      key: 'mstr',
      label: 'MSTR',
      points: '160,420 640,420 400,180',
      fill: '#FFB74D',
      border: '#FFB74D',
      labelY: 385,
      labelSize: 48,
      description: 'Investment / modern-day Berkshire / BTC Alpha',
    },
    {
      key: 'imst_msty',
      label: 'IMST   MSTY',
      points: '240,300 560,300 400,120',
      fill: '#FFE082',
      border: '#FFE082',
      labelY: 265,
      labelSize: 36,
      description: 'Monthly income / pays bills / funds lifestyle',
    },
    {
      key: 'strk_strf',
      label: 'STRK  STRF',
      points: '320,200 480,200 400,80',
      fill: '#FFF8E1',
      border: '#FFF8E1',
      labelY: 165,
      labelSize: 28,
      description: 'Cash alternative',
    },
  ];

  const activeTierObj = pyramidTiers.find(t => t.key === activeTier) || pyramidTiers[0];

  // Floating animation for the whole pyramid
  const floatAnim = {
    animate: {
      y: [0, -20, 0, 20, 0],
    },
    transition: {
      duration: 10,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  };

  return (
    <div className="min-h-screen bg-black text-white font-satoshi flex flex-col items-center">
      <section className="w-full flex flex-col items-center pt-4 md:pt-8">
        <div className="w-full max-w-6xl mb-8">
          <motion.svg
            viewBox="0 0 800 800"
            width="100%"
            height="600"
            className="mx-auto select-none"
            {...floatAnim}
          >
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* BTC - Base */}
            <g onClick={() => setActiveTier('btc')} className="cursor-pointer hover:opacity-90 transition-opacity">
              <polygon points="200,600 600,600 500,500 300,500" className="fill-yellow-600" filter="url(#glow)" />
              <text x="400" y="560" className="text-[64px] font-bold" textAnchor="middle" fill="white">BTC</text>
            </g>
            
            {/* MSTR - Second Level */}
            <g onClick={() => setActiveTier('mstr')} className="cursor-pointer hover:opacity-90 transition-opacity">
              <polygon points="300,500 500,500 450,400 350,400" className="fill-yellow-500" filter="url(#glow)" />
              <text x="400" y="460" className="text-[48px] font-bold" textAnchor="middle" fill="white">MSTR</text>
            </g>
            
            {/* IMST MSTY - Third Level */}
            <g onClick={() => setActiveTier('imst_msty')} className="cursor-pointer hover:opacity-90 transition-opacity">
              <polygon points="350,400 450,400 425,300 375,300" className="fill-yellow-400" filter="url(#glow)" />
              <text x="400" y="360" className="text-[36px] font-bold" textAnchor="middle" fill="white">IMST MSTY</text>
            </g>
            
            {/* STRK STRF - Top */}
            <g onClick={() => setActiveTier('strk_strf')} className="cursor-pointer hover:opacity-90 transition-opacity">
              <polygon points="375,300 425,300 412,200 388,200" className="fill-gray-300" filter="url(#glow)" />
              <text x="400" y="260" className="text-[20px] font-bold" textAnchor="middle" fill="white">STRK STRF</text>
            </g>
          </motion.svg>
        </div>
        {/* Animated Info Box for Active Tier */}
        <div className="w-full max-w-3xl min-h-[96px] flex items-center justify-center px-4 -mt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTierObj.key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.25 }}
              className="w-full bg-[#1c1f26] border-2 border-yellow-500 p-6 rounded-lg text-xl font-semibold flex items-center"
            >
              <span className="font-bold mr-4 text-yellow-500">{activeTierObj.label}:</span> 
              <span className="text-white/90">{activeTierObj.description}</span>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
      {/* STRF and STRK Explanation Section */}
      <section className="w-full flex flex-col items-center justify-center py-12 bg-[#1c1f26] border-t border-yellow-500/20">
        <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          {/* STRF Card */}
          <Card>
            <div className="flex flex-col h-full">
              <h3 className="text-3xl font-bold text-yellow-500 mb-4">STRF</h3>
              <p className="text-white/90 mb-6 text-lg">
                STRF is a cash alternative product designed for capital preservation and liquidity, offering a stable yield with minimal risk. It is ideal for parking funds you may need in the short term, while still earning a return.
              </p>
              <div className="mt-auto">
                <Button
                  href="https://www.strategy.com/strf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn more about STRF
                </Button>
              </div>
            </div>
          </Card>
          {/* STRK Card */}
          <Card>
            <div className="flex flex-col h-full">
              <h3 className="text-3xl font-bold text-yellow-500 mb-4">STRK</h3>
              <p className="text-white/90 mb-6 text-lg">
                STRK is a cash alternative strategy focused on maximizing yield while maintaining high liquidity and safety. It is suitable for those seeking a flexible, low-risk place to hold cash with the potential for enhanced returns.
              </p>
              <div className="mt-auto">
                <Button
                  href="https://www.strategy.com/strk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn more about STRK
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
} 