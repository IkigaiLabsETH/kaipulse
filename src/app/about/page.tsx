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
      <section className="w-full flex flex-col items-center pt-12 md:pt-16">
        <div className="w-full max-w-6xl mb-8">
          <motion.svg
            viewBox="0 0 800 600"
            width="100%"
            height="600"
            className="mx-auto select-none"
            {...floatAnim}
          >
            {/* Yellow glow effect */}
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="15" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {pyramidTiers.map((tier) => (
              <motion.g key={tier.key}>
                <motion.polygon
                  points={tier.points}
                  fill={activeTier === tier.key ? tier.fill : tier.fill + 'CC'}
                  stroke={activeTier === tier.key ? '#FFD600' : '#333'}
                  strokeWidth={activeTier === tier.key ? 8 : 3}
                  style={{ 
                    cursor: 'pointer', 
                    transition: 'all 0.2s',
                    filter: activeTier === tier.key ? 'url(#glow)' : 'none'
                  }}
                  onMouseEnter={() => setActiveTier(tier.key)}
                  onMouseLeave={() => setActiveTier(null)}
                  onClick={() => setActiveTier(tier.key)}
                  animate={activeTier === tier.key ? 
                    { scale: 1.02, filter: 'drop-shadow(0 0 40px #FFD600AA)' } : 
                    { scale: 1, filter: 'none' }
                  }
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                />
                <motion.text
                  x="400"
                  y={tier.labelY}
                  textAnchor="middle"
                  fontSize={tier.labelSize}
                  fontWeight="bold"
                  fill={activeTier === tier.key ? '#000' : '#222'}
                  style={{ pointerEvents: 'none', userSelect: 'none' }}
                  animate={activeTier === tier.key ? { scale: 1.12 } : { scale: 1 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  {tier.label}
                </motion.text>
              </motion.g>
            ))}
          </motion.svg>
        </div>
        {/* Animated Info Box for Active Tier */}
        <div className="w-full max-w-3xl min-h-[96px] flex items-center justify-center px-4 mb-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTierObj.key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.25 }}
              className="w-full bg-[#1c1f26] border-2 border-yellow-500 p-8 rounded-lg text-2xl font-semibold flex items-center"
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