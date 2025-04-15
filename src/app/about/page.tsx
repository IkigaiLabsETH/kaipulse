'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bitcoin, TrendingUp, DollarSign, ChevronDown, Calculator } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

function AccordionItem({ title, children, defaultOpen = false }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-yellow-500/20 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-4 text-left"
      >
        <span className="text-xl font-semibold text-yellow-400">{title}</span>
        <ChevronDown
          className={cn(
            "w-5 h-5 text-yellow-400 transition-transform",
            isOpen && "transform rotate-180"
          )}
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="pb-4">{children}</div>
      </motion.div>
    </div>
  );
}

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
            {pyramidTiers.map((tier, idx) => (
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
    </div>
  );
} 