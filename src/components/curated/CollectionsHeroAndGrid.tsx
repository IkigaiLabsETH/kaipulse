'use client';

import { Web3ErrorBoundary } from '@/components/web3/Web3ErrorBoundary';
import { motion } from 'framer-motion';
import { CollectionsGridClient } from './CollectionsGridClient';

export function CollectionsHeroAndGrid() {
  return (
    <Web3ErrorBoundary>
      <div className="min-h-screen bg-black relative">
        {/* Ambient Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -inset-[10px] bg-[radial-gradient(circle_at_50%_120%,rgba(255,199,0,0.15),rgba(0,0,0,0))] opacity-30 backdrop-blur-[200px]" />
        </div>

        {/* Hero Section */}
        <div className="relative">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="max-w-[2000px] mx-auto px-6 pt-24 pb-20"
          >
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-24 h-24 bg-yellow-500 rounded-full mix-blend-overlay filter blur-xl opacity-20" />
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <h1 className="relative text-7xl sm:text-8xl md:text-9xl font-bold text-yellow-400 mb-8 tracking-tight font-epilogue">
                  Featured
                </h1>
                <p className="text-white/80 text-xl sm:text-2xl max-w-2xl font-satoshi pl-2">
                  The best deals on the floor from our handpicked NFT collections.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Collections Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="max-w-[2000px] mx-auto px-6 pb-32"
        >
          <CollectionsGridClient />
        </motion.div>
      </div>
    </Web3ErrorBoundary>
  );
} 