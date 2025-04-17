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
        <div className="w-full max-w-7xl mb-4">
          <motion.svg
            viewBox="0 0 800 600"
            width="100%"
            height="580"
            className="mx-auto select-none"
            {...floatAnim}
          >
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* BTC - Base */}
            <g onClick={() => setActiveTier('btc')} className="cursor-pointer hover:opacity-90 transition-opacity">
              <polygon points="50,550 750,550 400,200" className="fill-yellow-600" filter="url(#glow)" />
              <text x="400" y="480" className="text-[72px] font-bold" textAnchor="middle" fill="white">BTC</text>
            </g>
            
            {/* MSTR - Second Level */}
            <g onClick={() => setActiveTier('mstr')} className="cursor-pointer hover:opacity-90 transition-opacity">
              <polygon points="150,425 650,425 400,150" className="fill-yellow-500" filter="url(#glow)" />
              <text x="400" y="360" className="text-[56px] font-bold" textAnchor="middle" fill="white">MSTR</text>
            </g>
            
            {/* IMST MSTY - Third Level */}
            <g onClick={() => setActiveTier('imst_msty')} className="cursor-pointer hover:opacity-90 transition-opacity">
              <polygon points="225,300 575,300 400,100" className="fill-yellow-400" filter="url(#glow)" />
              <text x="400" y="250" className="text-[42px] font-bold" textAnchor="middle" fill="white">IMST MSTY</text>
            </g>
            
            {/* STRK STRF - Top */}
            <g onClick={() => setActiveTier('strk_strf')} className="cursor-pointer hover:opacity-90 transition-opacity">
              <polygon points="300,200 500,200 400,50" className="fill-gray-300" filter="url(#glow)" />
              <text x="400" y="160" className="text-[32px] font-bold" textAnchor="middle" fill="white">STRK STRF</text>
            </g>
          </motion.svg>
        </div>
        {/* Animated Info Box for Active Tier */}
        <div className="w-full max-w-3xl min-h-[96px] flex items-center justify-center px-4 -mt-12">
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
      {/* The Genesis Block Story Section */}
      <section className="w-full flex flex-col items-center justify-center py-16 bg-black border-t border-yellow-500/20">
        <div className="max-w-4xl w-full px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-yellow-500 mb-4">The Genesis Block</h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
          </motion.div>

          <div className="space-y-12">
            {/* Genesis Block */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-yellow-500/30"></div>
              <div className="pl-8">
                <h3 className="text-2xl font-bold text-yellow-500 mb-4">The Birth of Bitcoin</h3>
                <p className="text-white/90 text-lg leading-relaxed">
                  Satoshi Nakamoto sat quietly at a modest desk, illuminated only by the glow of monitors. The date was January 3rd, 2009, a cold day that seemed fitting for the birth of a revolutionary idea. With a final keystroke, the Bitcoin blockchain sprang to life. Embedded forever in the very first block, the words &ldquo;The Times 03/Jan/2009 Chancellor on brink of second bailout for banks&rdquo; served as both a timestamp and a statement: Bitcoin was born as a direct response to financial instability and centralized trust.
                </p>
                <p className="text-white/90 text-lg leading-relaxed mt-4 italic">
                  &ldquo;Trust,&rdquo; Satoshi mused, &ldquo;is the central problem we&rsquo;re solving.&rdquo;
                </p>
              </div>
            </motion.div>

            {/* Security */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative"
            >
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-yellow-500/30"></div>
              <div className="pl-8">
                <h3 className="text-2xl font-bold text-yellow-500 mb-4">Security from First Principles</h3>
                <p className="text-white/90 text-lg leading-relaxed">
                  Across the ocean, Hal Finney&rsquo;s computer chimed—a new message arrived. It was from Satoshi: &ldquo;I&rsquo;ve created something called Bitcoin. It&rsquo;s a peer-to-peer electronic cash system. Interested in giving it a try?&rdquo;
                </p>
                <p className="text-white/90 text-lg leading-relaxed mt-4">
                  Hal, an experienced cryptographic engineer, immediately grasped Bitcoin&rsquo;s revolutionary core. He downloaded the software, received the first-ever Bitcoin transaction from Satoshi, and marveled at its elegant simplicity. &ldquo;This network&rsquo;s cryptographic security is remarkable,&rdquo; Hal observed, recognizing Bitcoin&rsquo;s use of elliptic curve cryptography to create secure, tamper-proof digital signatures.
                </p>
              </div>
            </motion.div>

            {/* Voice of Adoption */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="relative"
            >
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-yellow-500/30"></div>
              <div className="pl-8">
                <h3 className="text-2xl font-bold text-yellow-500 mb-4">The Voice of Adoption</h3>
                <p className="text-white/90 text-lg leading-relaxed">
                  Years passed, and Bitcoin began spreading quietly among technologists and libertarians. It wasn&rsquo;t until Andreas Antonopoulos took the stage in conference halls and classrooms worldwide that Bitcoin&rsquo;s message began to reach the masses. With passion, Andreas explained Bitcoin&rsquo;s practical impact:
                </p>
                <p className="text-white/90 text-lg leading-relaxed mt-4 italic">
                  &ldquo;Bitcoin isn&rsquo;t just digital money. It&rsquo;s freedom from financial censorship. It empowers anyone with an internet connection, regardless of nationality, gender, or economic status, to participate equally in the global economy.&rdquo;
                </p>
              </div>
            </motion.div>

            {/* Economic Prophet */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="relative"
            >
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-yellow-500/30"></div>
              <div className="pl-8">
                <h3 className="text-2xl font-bold text-yellow-500 mb-4">The Economic Prophet</h3>
                <p className="text-white/90 text-lg leading-relaxed">
                  Meanwhile, Michael Saylor watched from afar, initially skeptical but increasingly intrigued. As CEO of MicroStrategy, he saw the cracks forming in the global financial system: endless money printing, rising debts, negative real interest rates. His epiphany came in 2020, amid unprecedented stimulus measures by central banks.
                </p>
                <p className="text-white/90 text-lg leading-relaxed mt-4 italic">
                  &ldquo;Bitcoin isn&rsquo;t just a currency,&rdquo; Michael reflected, &ldquo;It&rsquo;s digital gold. An asset immune to inflation, confiscation, and political interference.&rdquo;
                </p>
              </div>
            </motion.div>

            {/* Epilogue */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="relative"
            >
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-yellow-500/30"></div>
              <div className="pl-8">
                <h3 className="text-2xl font-bold text-yellow-500 mb-4">Epilogue: A Digital Legacy</h3>
                <p className="text-white/90 text-lg leading-relaxed">
                  Satoshi Nakamoto&rsquo;s original vision, Hal Finney&rsquo;s cryptographic ingenuity, Andreas Antonopoulos&rsquo;s real-world advocacy, and Michael Saylor&rsquo;s economic insight have intertwined to forge a powerful investment narrative. Bitcoin stands as both a technological breakthrough and a profound financial innovation, uniquely suited for an age of uncertainty and digital transformation.
                </p>
                <p className="text-white/90 text-lg leading-relaxed mt-4">
                  As new investors step into this narrative, they carry forward a legacy begun by a handful of visionaries—a legacy defined by decentralization, resilience, and freedom from centralized trust. The next chapters, yet unwritten, promise to be just as revolutionary.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
} 