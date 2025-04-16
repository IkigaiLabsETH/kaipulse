'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { MSTYFreedomCalculator } from '@/components/MSTYFreedomCalculator';

export default function CalculatorPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Navigation */}
        <div className="mb-8">
          <Link 
            href="/" 
            className="text-yellow-500 hover:text-yellow-400 transition-colors font-bold text-lg"
          >
            ← Back to Home
          </Link>
        </div>

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
      </div>
    </div>
  )
} 