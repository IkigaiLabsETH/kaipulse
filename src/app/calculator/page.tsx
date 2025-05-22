'use client';

import { motion } from 'framer-motion';
import { MSTYFreedomCalculator } from '@/components/MSTYFreedomCalculator';
import { Target, Zap, Shield } from 'lucide-react';

export default function CalculatorPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="font-epilogue text-4xl font-bold tracking-tight sm:text-6xl text-yellow-500">
            MSTY Freedom Calculator
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/90 max-w-3xl mx-auto">
            Calculate your path to financial freedom with MSTY. Understand how many shares you need, 
            tax implications, and optimal portfolio allocation based on your income goals.
          </p>
        </motion.div>

        {/* Calculator Component */}
        <MSTYFreedomCalculator />

        {/* Freedom Narrative Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16"
        >
          {/* Why Financial Freedom Matters Card */}
          <motion.div 
            className="bg-gradient-to-br from-[#1c1f26] to-[#2a2d35] border-2 border-yellow-500/20 rounded-2xl p-8 mb-8 shadow-[0_0_30px_rgba(234,179,8,0.1)]"
            whileHover={{ scale: 1.02, boxShadow: '0 0 40px rgba(234,179,8,0.15)' }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-yellow-500/10 rounded-xl">
                <Zap className="w-6 h-6 text-yellow-500" />
              </div>
              <h2 className="text-3xl font-bold text-yellow-500">Why Financial Freedom Matters</h2>
            </div>
            <div className="space-y-4 pl-16">
              <p className="text-white/80 leading-relaxed text-lg">
                It&apos;s not about being glued to charts or stressed about price moves. It&apos;s about improving your family&apos;s quality of life and gaining complete control over your time.
              </p>
              <p className="text-white/80 leading-relaxed text-lg">
                This is a rare type of freedom that few people in history have enjoyed. But with the right strategy and mindset, it&apos;s within your reach.
              </p>
            </div>
          </motion.div>

          {/* Golden Rules Card */}
          <motion.div 
            className="bg-gradient-to-br from-[#1c1f26] to-[#2a2d35] border-2 border-yellow-500/20 rounded-2xl p-8 shadow-[0_0_30px_rgba(234,179,8,0.1)]"
            whileHover={{ scale: 1.02, boxShadow: '0 0 40px rgba(234,179,8,0.15)' }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-yellow-500/10 rounded-xl">
                <Shield className="w-6 h-6 text-yellow-500" />
              </div>
              <h2 className="text-3xl font-bold text-yellow-500">The Golden Rules of Freedom</h2>
            </div>
            <div className="space-y-8 pl-16">
              <motion.div 
                className="group"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-2 bg-yellow-500/10 rounded-lg group-hover:bg-yellow-500/20 transition-colors">
                    <Target className="w-5 h-5 text-yellow-400" />
                  </div>
                  <h3 className="text-2xl font-semibold text-yellow-400">1. Embrace Market Cycles</h3>
                </div>
                <p className="text-white/80 leading-relaxed text-lg ml-9">
                  Market cycles are inevitable. The key is to maintain peace of mind during volatility and make strategic decisions when others are panicking.
                </p>
              </motion.div>

              <motion.div 
                className="group"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-2 bg-yellow-500/10 rounded-lg group-hover:bg-yellow-500/20 transition-colors">
                    <Target className="w-5 h-5 text-yellow-400" />
                  </div>
                  <h3 className="text-2xl font-semibold text-yellow-400">2. Establish Crystal-Clear Goals</h3>
                </div>
                <p className="text-white/80 leading-relaxed text-lg ml-9">
                  Define exactly what financial freedom means to you. How much monthly income do you need? What lifestyle do you want to maintain?
                </p>
              </motion.div>

              <motion.div 
                className="group"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-2 bg-yellow-500/10 rounded-lg group-hover:bg-yellow-500/20 transition-colors">
                    <Target className="w-5 h-5 text-yellow-400" />
                  </div>
                  <h3 className="text-2xl font-semibold text-yellow-400">3. Build an All-Weather Plan</h3>
                </div>
                <p className="text-white/80 leading-relaxed text-lg ml-9">
                  Create a strategy that works in all market conditions. Focus on building sustainable income streams while maintaining long-term growth potential.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="max-w-3xl mx-auto">
            <p className="text-3xl text-white/80 mb-6">
              Remember, the goal isn&apos;t just to live well &quot;one day&quot; - it&apos;s to live well today while building for tomorrow.
            </p>
            <p className="text-lg text-yellow-500/80">
              Start your journey to financial freedom now.
            </p>
          </div>
        </motion.div>

        {/* Key Indicators to Watch Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="max-w-6xl mx-auto mt-24 mb-12"
        >
          <h2 className="text-3xl font-bold text-yellow-500 mb-8 text-center">Key Indicators to Watch</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Indicator Card Example */}
            {[
              {
                name: 'Cycle Index',
                value: 61,
                status: 'Early Bull',
                color: 'bg-yellow-500',
                bar: 'bg-yellow-500',
                percentile: '61st percentile',
                description: 'Where we are in the long-term market cycle.'
              },
              {
                name: 'MVRV Z-Score',
                value: '81st',
                status: 'Elevated',
                color: 'bg-orange-500',
                bar: 'bg-orange-500',
                percentile: '81st percentile',
                description: 'Market value vs. realized value.'
              },
              {
                name: 'Pi Cycle',
                value: '39th',
                status: 'Neutral',
                color: 'bg-cyan-400',
                bar: 'bg-cyan-400',
                percentile: '39th percentile',
                description: 'Long-term moving average cross.'
              },
              {
                name: 'Net Unrealized Profit/Loss',
                value: '78th',
                status: 'High',
                color: 'bg-yellow-300',
                bar: 'bg-yellow-300',
                percentile: '78th percentile',
                description: 'Investor sentiment and profit-taking.'
              },
              {
                name: '2-Year Moving Average',
                value: '56th',
                status: 'Mid',
                color: 'bg-cyan-400',
                bar: 'bg-cyan-400',
                percentile: '56th percentile',
                description: 'Long-term price trend.'
              },
              {
                name: 'Fear & Greed Trend',
                value: '46th',
                status: 'Neutral',
                color: 'bg-cyan-400',
                bar: 'bg-cyan-400',
                percentile: '46th percentile',
                description: 'Market sentiment.'
              }
            ].map((indicator) => (
              <div
                key={indicator.name}
                className="bg-[#181c23] rounded-2xl p-6 shadow-lg border border-[#232834] flex flex-col justify-between min-h-[180px]"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg font-semibold text-white/90">{indicator.name}</span>
                  <span className={`text-sm font-bold px-2 py-1 rounded ${indicator.color} text-black ml-2`}>{indicator.status}</span>
                </div>
                <div className="flex items-end gap-2 mb-4">
                  <span className="text-3xl font-bold text-white">{indicator.value}</span>
                  <span className="text-sm text-white/60">{indicator.percentile}</span>
                </div>
                <div className="w-full h-2 rounded-full bg-[#232834] mb-2">
                  <div className={`h-2 rounded-full ${indicator.bar}`} style={{ width: `${parseInt(String(indicator.value))}%` }} />
                </div>
                <div className="text-xs text-white/60 mt-2">{indicator.description}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* StackWisely Link Button */}
        <div className="flex justify-center mt-8">
          <a
            href="https://www.stackwisely.com/pricing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-500 hover:bg-yellow-400 text-black font-bold text-lg px-8 py-4 rounded-xl shadow-lg transition-all duration-200 border-2 border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
          >
            Explore More Indicators &amp; Wealth Tools
          </a>
        </div>
      </div>
    </div>
  )
} 