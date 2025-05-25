'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Bitcoin, DollarSign, TrendingUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function TwentyOnePage() {
  const [counters, setCounters] = useState({
    btc: 0,
    usd: 0,
    marketCap: 0
  });
  
  useEffect(() => {
    const targetValues = {
      btc: 42000,
      usd: 4200000000,
      marketCap: 420000000000
    };

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounters({
        btc: Math.floor(targetValues.btc * progress),
        usd: Math.floor(targetValues.usd * progress),
        marketCap: Math.floor(targetValues.marketCap * progress)
      });

      if (currentStep >= steps) {
        clearInterval(interval);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="min-h-screen bg-black text-white font-satoshi">
      {/* Premium header accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-8">
            <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">Bitcoin Treasury • Long-term Strategy • Bitcoin Adoption</p>
            <h1 className="text-center">
              <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
                Twenty One
              </span>
            </h1>
            <div className="flex items-center justify-center mt-6">
              <div className="h-px w-24 bg-yellow-500/30"></div>
              <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">A Bitcoin-native company with 42,000 BTC</p>
              <div className="h-px w-24 bg-yellow-500/30"></div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <Bitcoin className="w-6 h-6 text-yellow-500" />
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">Bitcoin Holdings</h3>
              </div>
              <p className="text-center text-3xl font-bold">{counters.btc.toLocaleString()} BTC</p>
            </div>

            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <DollarSign className="w-6 h-6 text-yellow-500" />
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">USD Value</h3>
              </div>
              <p className="text-center text-3xl font-bold">${counters.usd.toLocaleString()}</p>
            </div>

            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <TrendingUp className="w-6 h-6 text-yellow-500" />
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">Market Cap</h3>
              </div>
              <p className="text-center text-3xl font-bold">${counters.marketCap.toLocaleString()}</p>
            </div>
          </div>

          {/* About Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">About Twenty One</h3>
            <p className="text-white/90 text-lg mb-8">
              Twenty One is a Bitcoin-native company that holds 42,000 BTC, making it one of the largest corporate Bitcoin holders. Our mission is to promote Bitcoin adoption and build a more decentralized future.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-500 text-black px-8 py-3 rounded-none font-bold hover:bg-yellow-400 transition-colors duration-200 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-[2px] hover:-translate-y-[2px]"
            >
              <span className="flex items-center space-x-2">
                <span>Learn More</span>
                <ArrowRight className="w-5 h-5" />
              </span>
            </motion.button>
          </div>

          {/* Strategy Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">Our Strategy</h3>
            <p className="text-white/90 text-lg mb-6">
              We believe in Bitcoin&apos;s long-term value proposition and are committed to holding our Bitcoin treasury for the long term. Our strategy focuses on:
            </p>
            <ul className="space-y-4 text-lg">
              <li className="flex items-start gap-3">
                <span className="text-yellow-500">🔗</span>
                <span className="text-white/90">Long-term Bitcoin accumulation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-500">🔗</span>
                <span className="text-white/90">Secure custody solutions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-500">🔗</span>
                <span className="text-white/90">Bitcoin education and adoption</span>
              </li>
            </ul>
          </div>

          {/* CTA Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">Join the Bitcoin Revolution</h3>
            <p className="text-white/90 text-lg mb-8">
              Be part of the future of money. Learn more about Bitcoin and how Twenty One is shaping the future of finance.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-500 text-black px-8 py-3 rounded-none font-bold hover:bg-yellow-400 transition-colors duration-200 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-[2px] hover:-translate-y-[2px]"
            >
              <span className="flex items-center space-x-2">
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </span>
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
} 