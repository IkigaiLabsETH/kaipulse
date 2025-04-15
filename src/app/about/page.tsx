'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AboutPage() {
  // Interactive pyramid state
  const [activeTier, setActiveTier] = useState<string | null>(null);

  // Pyramid tier data
  const pyramidTiers = [
    {
      key: 'btc',
      label: 'BTC',
      points: '40,560 560,560 300,360',
      fill: '#FFA726',
      border: '#FFA726',
      labelY: 535,
      labelSize: 48,
      description: 'Long-term savings / generational asset / foundation of wealth',
    },
    {
      key: 'mstr',
      label: 'MSTR',
      points: '120,460 480,460 300,280',
      fill: '#FFB74D',
      border: '#FFB74D',
      labelY: 425,
      labelSize: 36,
      description: 'Investment / modern-day Berkshire / BTC Alpha',
    },
    {
      key: 'imst_msty',
      label: 'IMST   MSTY',
      points: '180,370 420,370 300,220',
      fill: '#FFE082',
      border: '#FFE082',
      labelY: 325,
      labelSize: 28,
      description: 'Monthly income / pays bills / funds lifestyle',
    },
    {
      key: 'strk_strf',
      label: 'STRK  STRF',
      points: '240,290 360,290 300,180',
      fill: '#FFF8E1',
      border: '#FFF8E1',
      labelY: 235,
      labelSize: 22,
      description: 'Cash alternative',
    },
  ];

  const activeTierObj = pyramidTiers.find(t => t.key === activeTier) || pyramidTiers[0];

  // Floating animation for the whole pyramid
  const floatAnim = {
    animate: {
      y: [0, -16, 0, 16, 0],
    },
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  };

  return (
    <div className="min-h-screen bg-black text-white font-satoshi flex flex-col items-center justify-center">
      <section className="w-full flex flex-col items-center justify-center min-h-screen">
        <div className="w-full max-w-4xl mb-12">
          <motion.svg
            viewBox="0 0 600 600"
            width="100%"
            height="600"
            className="mx-auto select-none"
            {...floatAnim}
          >
            {pyramidTiers.map((tier) => (
              <motion.g key={tier.key}>
                <motion.polygon
                  points={tier.points}
                  fill={activeTier === tier.key ? tier.fill : tier.fill + 'CC'}
                  stroke={activeTier === tier.key ? '#FFD600' : '#333'}
                  strokeWidth={activeTier === tier.key ? 8 : 3}
                  style={{ cursor: 'pointer', transition: 'all 0.2s' }}
                  onMouseEnter={() => setActiveTier(tier.key)}
                  onMouseLeave={() => setActiveTier(null)}
                  onClick={() => setActiveTier(tier.key)}
                  animate={activeTier === tier.key ? { scale: 1.08, filter: 'drop-shadow(0 0 32px #FFD600AA)' } : { scale: 1, filter: 'none' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                />
                <motion.text
                  x="300"
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
        <div className="w-full max-w-2xl min-h-[96px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTierObj.key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.25 }}
              className="w-full bg-zinc-900/90 border-l-8 p-8 rounded-xl shadow-2xl text-2xl font-semibold flex items-center"
              style={{ borderColor: activeTierObj.border }}
            >
              <span className="font-bold mr-4" style={{ color: activeTierObj.border }}>{activeTierObj.label}:</span> {activeTierObj.description}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
      {/* STRF and STRK Explanation Section */}
      <section className="w-full flex flex-col items-center justify-center py-12 bg-zinc-900 border-t border-yellow-500/20">
        <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          {/* STRF Card */}
          <div className="bg-zinc-800 rounded-xl p-8 shadow-lg border-l-4 border-[#FFD600] flex flex-col">
            <h3 className="text-3xl font-bold text-yellow-300 mb-4">STRF</h3>
            <p className="text-yellow-100/90 mb-4 text-lg">
              STRF is a cash alternative product designed for capital preservation and liquidity, offering a stable yield with minimal risk. It is ideal for parking funds you may need in the short term, while still earning a return.
            </p>
            <a
              href="https://www.strategy.com/strf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-auto text-yellow-400 hover:text-yellow-200 font-semibold underline"
            >
              Learn more about STRF
            </a>
          </div>
          {/* STRK Card */}
          <div className="bg-zinc-800 rounded-xl p-8 shadow-lg border-l-4 border-[#FFA726] flex flex-col">
            <h3 className="text-3xl font-bold text-yellow-400 mb-4">STRK</h3>
            <p className="text-yellow-100/90 mb-4 text-lg">
              STRK is a cash alternative strategy focused on maximizing yield while maintaining high liquidity and safety. It is suitable for those seeking a flexible, low-risk place to hold cash with the potential for enhanced returns.
            </p>
            <a
              href="https://www.strategy.com/strk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-auto text-yellow-400 hover:text-yellow-200 font-semibold underline"
            >
              Learn more about STRK
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 