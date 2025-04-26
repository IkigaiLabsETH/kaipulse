"use client";

import { motion } from 'framer-motion';
import { Bitcoin, Calculator } from 'lucide-react';
import Link from 'next/link';
import PriceTicker from '@/components/PriceTicker';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Enhanced Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative min-h-[80vh] flex flex-col items-center justify-center pt-24"
      >
        <div className="w-full max-w-4xl mx-auto px-4 pt-12 pb-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative z-10 flex flex-col items-center space-y-6 text-center"
          >
            <div className="inline-flex items-center justify-center px-4 py-1.5 mb-4 border border-yellow-500/30 rounded-full bg-yellow-500/10 backdrop-blur-sm">
              <span className="text-sm text-yellow-400 font-medium">Bitcoin-First Strategy</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-yellow-400 tracking-tight">
              Level Up Your Bitcoin
            </h1>
            
            <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Preserve your Bitcoin wealth while earning monthly income through the MSTR options strategy. Keep 80% in cold storage, let 20% work for you.
            </p>
          </motion.div>

          <div className="relative z-10 mt-12 hidden sm:block">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="bg-[#1c1f26] rounded-lg border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] overflow-hidden max-w-4xl mx-auto"
            >
              <PriceTicker />
            </motion.div>
          </div>

          {/* Enhanced divider */}
          <div className="relative mt-16">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-yellow-500/20"></div>
            </div>
            <div className="relative flex justify-center">
              <div className="bg-black px-4">
                <Bitcoin className="w-8 h-8 text-yellow-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced background pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,199,0,0.15),rgba(0,0,0,0))] backdrop-blur-[200px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/50 to-black pointer-events-none" />
      </motion.div>

      <div className="container mx-auto px-4 py-16 space-y-24">
        {/* Core Strategy section stays the same */}


        {/* Enhanced Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center py-24"
        >

          <Link
            href="/voice"
            className="group inline-flex items-center gap-3 rounded-lg bg-[#1c1f26] border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] px-8 py-4 text-xl font-semibold text-white hover:bg-yellow-500 hover:text-black transition-all duration-300"
          >
            <Calculator className="w-6 h-6 group-hover:scale-110 transition-transform" />
            Call Satoshi
          </Link>
        </motion.div>

        {/* Enhanced Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="bg-transparent p-4">
            <h3 className="text-yellow-400 font-semibold mb-2 text-base">Important Disclaimer</h3>
            <p className="text-white/70 leading-relaxed text-[10px]">
              This website and its tools are for educational purposes only. Not financial advice. 
              Always do your own research and consult with qualified professionals before making investment decisions. 
              Past performance is not indicative of future results. Investing involves risk of loss.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
