'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Bitcoin, ChevronRight, DollarSign, TrendingUp } from 'lucide-react'
import { Card } from "@/components/ui/card"
import { useEffect, useState } from 'react'

// Animated Bitcoin component
const AnimatedBitcoin = () => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-center"
    >
      <Bitcoin className="w-12 h-12 text-yellow-500" />
    </motion.div>
  );
};

// Shimmer effect component
const shimmer = `relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent`;

export default function TwentyOneClient() {
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
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent z-10" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        
        <div className="relative z-20 text-center px-4">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <AnimatedBitcoin />
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-yellow-300">
              Twenty One
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
              A Bitcoin-native company with 42,000 BTC
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-900 rounded-lg p-6"
            >
              <div className="flex items-center space-x-2 mb-4">
                <Bitcoin className="w-6 h-6 text-yellow-500" />
                <h3 className="text-xl font-semibold">Bitcoin Holdings</h3>
              </div>
              <p className="text-3xl font-bold">{counters.btc.toLocaleString()} BTC</p>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-900 rounded-lg p-6"
            >
              <div className="flex items-center space-x-2 mb-4">
                <DollarSign className="w-6 h-6 text-green-500" />
                <h3 className="text-xl font-semibold">USD Value</h3>
              </div>
              <p className="text-3xl font-bold">${counters.usd.toLocaleString()}</p>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gray-900 rounded-lg p-6"
            >
              <div className="flex items-center space-x-2 mb-4">
                <TrendingUp className="w-6 h-6 text-blue-500" />
                <h3 className="text-xl font-semibold">Market Cap</h3>
              </div>
              <p className="text-3xl font-bold">${counters.marketCap.toLocaleString()}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Twenty One</h2>
            <p className="text-gray-300 text-lg mb-8">
              Twenty One is a Bitcoin-native company that holds 42,000 BTC, making it one of the largest corporate Bitcoin holders. Our mission is to promote Bitcoin adoption and build a more decentralized future.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-500 text-black px-8 py-3 rounded-full font-semibold flex items-center space-x-2 mx-auto"
            >
              <span>Learn More</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold">Our Strategy</h2>
              <p className="text-gray-300 text-lg">
                We believe in Bitcoin's long-term value proposition and are committed to holding our Bitcoin treasury for the long term. Our strategy focuses on:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <ChevronRight className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">Long-term Bitcoin accumulation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <ChevronRight className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">Secure custody solutions</span>
                </li>
                <li className="flex items-start space-x-3">
                  <ChevronRight className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">Bitcoin education and adoption</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className={`aspect-video rounded-lg ${shimmer}`}>
                <div className="absolute inset-0 bg-gray-800 rounded-lg" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the Bitcoin Revolution</h2>
            <p className="text-gray-300 text-lg mb-8">
              Be part of the future of money. Learn more about Bitcoin and how Twenty One is shaping the future of finance.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-500 text-black px-8 py-3 rounded-full font-semibold flex items-center space-x-2 mx-auto"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 