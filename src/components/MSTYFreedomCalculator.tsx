'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { motion } from 'framer-motion';
import { ArrowRight, DollarSign, Target, PieChart, TrendingUp, Bitcoin } from 'lucide-react';
import { DEFAULT_VALUES, INPUT_CONFIG } from '@/config/calculator';
import { calculateFreedomMetrics, formatCurrency, formatNumber } from '@/utils/calculator';

interface InputEvent extends React.ChangeEvent<HTMLInputElement> {
  target: HTMLInputElement & {
    value: string;
  };
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0,
    y: 20,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      mass: 1
    }
  }
};

const contentVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      mass: 0.5
    }
  }
};

const progressVariants = {
  hidden: { width: 0 },
  visible: (progress: number) => ({
    width: `${progress}%`,
    transition: {
      duration: 1,
      ease: "easeOut",
      delay: 0.5
    }
  })
};

export function MSTYFreedomCalculator() {
  const [monthlyIncome, setMonthlyIncome] = useState<number>(DEFAULT_VALUES.MONTHLY_INCOME);
  const [mstPrice, setMstPrice] = useState<number>(DEFAULT_VALUES.MST_PRICE);
  const [monthlyDividend, setMonthlyDividend] = useState<number>(DEFAULT_VALUES.MONTHLY_DIVIDEND);
  const [btcPrice] = useState<number>(DEFAULT_VALUES.BTC_PRICE);
  const [usdEurRate, setUsdEurRate] = useState<number>(DEFAULT_VALUES.USD_EUR_RATE);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const {
    sharesNeeded,
    totalInvestment,
    btcRequired,
    currentTier,
    nextTier,
    progress,
    taxCalculations,
    portfolioAllocation
  } = calculateFreedomMetrics(monthlyIncome, mstPrice, monthlyDividend, btcPrice, usdEurRate);

  const handleInputChange = (setter: React.Dispatch<React.SetStateAction<number>>) => 
    (e: InputEvent) => {
      const value = parseFloat(e.target.value);
      if (!isNaN(value)) {
        setter(value);
      }
    };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="rounded-full h-32 w-32 border-t-2 border-b-2 border-yellow-400"
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <div className="w-full px-4 md:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 xl:gap-8"
        >
          <motion.div variants={cardVariants} className="w-full">
            <Card className="bg-zinc-900/50 border-zinc-800">
              <CardContent className="p-6 xl:p-8">
                <motion.div variants={contentVariants} className="flex items-start gap-4 mb-8">
                  <DollarSign className="w-8 h-8 text-yellow-400 shrink-0" />
                  <h2 className="text-2xl xl:text-3xl font-bold text-yellow-400">Your Freedom Parameters</h2>
                </motion.div>
                <motion.div variants={contentVariants} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-yellow-100/60 mb-2">
                      {INPUT_CONFIG.MONTHLY_INCOME.label}
                    </label>
                    <Input
                      type="number"
                      value={monthlyIncome}
                      onChange={handleInputChange(setMonthlyIncome)}
                      className="bg-zinc-800 border-yellow-500/20 text-white focus:border-yellow-400 focus:ring-yellow-400"
                      min={INPUT_CONFIG.MONTHLY_INCOME.min}
                      step={INPUT_CONFIG.MONTHLY_INCOME.step}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-yellow-100/60 mb-2">
                      {INPUT_CONFIG.MST_PRICE.label}
                    </label>
                    <Input
                      type="number"
                      value={mstPrice}
                      onChange={handleInputChange(setMstPrice)}
                      className="bg-zinc-800 border-yellow-500/20 text-white focus:border-yellow-400 focus:ring-yellow-400"
                      min={INPUT_CONFIG.MST_PRICE.min}
                      step={INPUT_CONFIG.MST_PRICE.step}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-yellow-100/60 mb-2">
                      {INPUT_CONFIG.MONTHLY_DIVIDEND.label}
                    </label>
                    <Input
                      type="number"
                      value={monthlyDividend}
                      onChange={handleInputChange(setMonthlyDividend)}
                      className="bg-zinc-800 border-yellow-500/20 text-white focus:border-yellow-400 focus:ring-yellow-400"
                      min={INPUT_CONFIG.MONTHLY_DIVIDEND.min}
                      step={INPUT_CONFIG.MONTHLY_DIVIDEND.step}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-yellow-100/60 mb-2">
                      {INPUT_CONFIG.USD_EUR_RATE.label}
                    </label>
                    <Input
                      type="number"
                      value={usdEurRate}
                      onChange={handleInputChange(setUsdEurRate)}
                      className="bg-zinc-800 border-yellow-500/20 text-white focus:border-yellow-400 focus:ring-yellow-400"
                      min={INPUT_CONFIG.USD_EUR_RATE.min}
                      step={INPUT_CONFIG.USD_EUR_RATE.step}
                    />
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={cardVariants} className="w-full">
            <Card className="bg-zinc-900/50 border-zinc-800">
              <CardContent className="p-6 xl:p-8">
                <motion.div variants={contentVariants} className="flex items-start gap-4 mb-8">
                  <Target className="w-8 h-8 text-yellow-400 shrink-0" />
                  <h2 className="text-2xl xl:text-3xl font-bold text-yellow-400">Your Freedom Metrics</h2>
                </motion.div>
                <motion.div variants={contentVariants} className="space-y-8">
                  <div className="flex items-start gap-4">
                    <Target className="w-8 h-8 text-yellow-400 shrink-0" />
                    <div className="flex-1">
                      <div className="text-base text-yellow-100/60">Shares Needed</div>
                      <div className="text-2xl xl:text-3xl font-bold text-white">{formatNumber(sharesNeeded)} shares</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <TrendingUp className="w-8 h-8 text-yellow-400 shrink-0" />
                    <div className="flex-1">
                      <div className="text-base text-yellow-100/60">Total Investment</div>
                      <div className="text-2xl xl:text-3xl font-bold text-white">{formatCurrency(totalInvestment)}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Bitcoin className="w-8 h-8 text-yellow-400 shrink-0" />
                    <div className="flex-1">
                      <div className="text-base text-yellow-100/60">BTC Required</div>
                      <div className="text-2xl xl:text-3xl font-bold text-white">{formatNumber(btcRequired, 2)} BTC</div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-yellow-100/60">Current Tier: {currentTier.label}</span>
                      <span className="text-yellow-100/60">Next Tier: {nextTier.label}</span>
                    </div>
                    <div className="relative w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                      <motion.div 
                        variants={progressVariants}
                        custom={progress}
                        className="absolute top-0 left-0 h-full bg-yellow-400"
                      />
                    </div>
                    <motion.p 
                      variants={contentVariants}
                      className="text-sm text-yellow-100/60 mt-2"
                    >
                      {currentTier.description}
                    </motion.p>
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 xl:gap-8 mt-6 xl:mt-8"
        >
          <motion.div variants={cardVariants} className="w-full">
            <Card className="bg-zinc-900/50 border-zinc-800">
              <CardContent className="p-6 xl:p-8">
                <motion.div variants={contentVariants} className="flex items-start gap-4 mb-8">
                  <DollarSign className="w-8 h-8 text-yellow-400 shrink-0" />
                  <h2 className="text-2xl xl:text-3xl font-bold text-yellow-400">Tax Calculations</h2>
                </motion.div>
                <motion.div variants={contentVariants} className="space-y-8">
                  <div className="flex-1 min-w-0">
                    <div className="text-base text-yellow-100/60">Gross Monthly Income</div>
                    <div className="text-2xl md:text-3xl font-bold text-white truncate">{formatCurrency(taxCalculations.grossMonthlyIncome)}</div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-base text-yellow-100/60">US Withholding Tax (15%)</div>
                    <div className="text-2xl md:text-3xl font-bold text-white truncate">{formatCurrency(taxCalculations.usWithholdingTax)}</div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-base text-yellow-100/60">Net Income in EUR</div>
                    <div className="text-2xl md:text-3xl font-bold text-white truncate">{formatCurrency(taxCalculations.netInEur, 'EUR')}</div>
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={cardVariants} className="w-full">
            <Card className="bg-zinc-900/50 border-zinc-800">
              <CardContent className="p-6 xl:p-8">
                <motion.div variants={contentVariants} className="flex items-start gap-4 mb-8">
                  <PieChart className="w-8 h-8 text-yellow-400 shrink-0" />
                  <h2 className="text-2xl xl:text-3xl font-bold text-yellow-400">Portfolio Allocation</h2>
                </motion.div>
                <motion.div variants={contentVariants} className="space-y-8">
                  <div className="flex-1 min-w-0">
                    <div className="text-base text-yellow-100/60">Total Portfolio Value</div>
                    <div className="text-2xl md:text-3xl font-bold text-white truncate">{formatCurrency(portfolioAllocation.totalPortfolio)}</div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex-1 min-w-0">
                      <div className="text-base text-yellow-100/60">MSTY (Income)</div>
                      <div className="text-xl md:text-2xl font-semibold text-white truncate">{formatCurrency(portfolioAllocation.mstyInvestment)}</div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-base text-yellow-100/60">BTC (Savings)</div>
                      <div className="text-xl md:text-2xl font-semibold text-white truncate">{formatCurrency(portfolioAllocation.btcInvestment)}</div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-base text-yellow-100/60">MSTR (Growth)</div>
                      <div className="text-xl md:text-2xl font-semibold text-white truncate">{formatCurrency(portfolioAllocation.mstrInvestment)}</div>
                    </div>
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: 1.2,
            type: "spring",
            stiffness: 100,
            damping: 15
          }}
          className="mt-4 lg:mt-8 text-center"
        >
          <Button 
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            size="lg"
            onClick={() => window.open('https://yieldmaxetfs.com/msty', '_blank')}
          >
            <motion.div
              className="flex items-center"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              🚀 Become a Legend
              <ArrowRight className="ml-2" />
            </motion.div>
          </Button>
        </motion.div>
      </div>
    </div>
  );
} 