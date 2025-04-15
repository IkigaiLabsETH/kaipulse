'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { motion } from 'framer-motion';
import { Settings, Target, PieChart, ArrowRight, DollarSign } from 'lucide-react';
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

  const handleInputChange = (setter: React.Dispatch<React.SetStateAction<number>>) => 
    (e: InputEvent) => {
      const value = parseFloat(e.target.value);
      if (!isNaN(value)) {
        setter(value);
      }
    };

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
    <div className="min-h-screen bg-black font-satoshi">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6"
        >
          <motion.div variants={cardVariants}>
            <Card className="bg-zinc-900/50 border-zinc-800 h-full">
              <CardContent className="p-4 sm:p-6">
                <motion.div variants={contentVariants} className="flex items-start gap-4 mb-6">
                  <Settings className="w-8 h-8 text-yellow-400 shrink-0" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-yellow-400 font-epilogue">Parameters</h2>
                </motion.div>
                <motion.div variants={contentVariants} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-yellow-100/60 mb-2 font-satoshi">
                      {INPUT_CONFIG.MONTHLY_INCOME.label}
                    </label>
                    <Input
                      type="number"
                      value={monthlyIncome}
                      onChange={handleInputChange(setMonthlyIncome)}
                      className="bg-zinc-800 border-yellow-500/20 text-white focus:border-yellow-400 focus:ring-yellow-400 font-satoshi"
                      min={INPUT_CONFIG.MONTHLY_INCOME.min}
                      step={INPUT_CONFIG.MONTHLY_INCOME.step}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-yellow-100/60 mb-2 font-satoshi">
                      {INPUT_CONFIG.MST_PRICE.label}
                    </label>
                    <Input
                      type="number"
                      value={mstPrice}
                      onChange={handleInputChange(setMstPrice)}
                      className="bg-zinc-800 border-yellow-500/20 text-white focus:border-yellow-400 focus:ring-yellow-400 font-satoshi"
                      min={INPUT_CONFIG.MST_PRICE.min}
                      step={INPUT_CONFIG.MST_PRICE.step}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-yellow-100/60 mb-2 font-satoshi">
                      {INPUT_CONFIG.MONTHLY_DIVIDEND.label}
                    </label>
                    <Input
                      type="number"
                      value={monthlyDividend}
                      onChange={handleInputChange(setMonthlyDividend)}
                      className="bg-zinc-800 border-yellow-500/20 text-white focus:border-yellow-400 focus:ring-yellow-400 font-satoshi"
                      min={INPUT_CONFIG.MONTHLY_DIVIDEND.min}
                      step={INPUT_CONFIG.MONTHLY_DIVIDEND.step}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-yellow-100/60 mb-2 font-satoshi">
                      {INPUT_CONFIG.USD_EUR_RATE.label}
                    </label>
                    <Input
                      type="number"
                      value={usdEurRate}
                      onChange={handleInputChange(setUsdEurRate)}
                      className="bg-zinc-800 border-yellow-500/20 text-white focus:border-yellow-400 focus:ring-yellow-400 font-satoshi"
                      min={INPUT_CONFIG.USD_EUR_RATE.min}
                      step={INPUT_CONFIG.USD_EUR_RATE.step}
                    />
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={cardVariants}>
            <Card className="bg-zinc-900/50 border-zinc-800 h-full">
              <CardContent className="p-4 sm:p-6">
                <motion.div variants={contentVariants} className="flex items-start gap-4 mb-6">
                  <Target className="w-8 h-8 text-yellow-400 shrink-0" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-yellow-400 font-epilogue">Metrics</h2>
                </motion.div>
                <motion.div variants={contentVariants} className="space-y-6">
                  <div className="flex-1">
                    <div className="text-base text-yellow-100/60 font-satoshi">Shares Needed</div>
                    <div className="text-2xl xl:text-3xl font-bold text-white font-satoshi">{formatNumber(sharesNeeded)} shares</div>
                  </div>
                  <div className="flex-1">
                    <div className="text-base text-yellow-100/60 font-satoshi">Total Investment</div>
                    <div className="text-2xl xl:text-3xl font-bold text-white font-satoshi">{formatCurrency(totalInvestment)}</div>
                  </div>
                  <div className="flex-1">
                    <div className="text-base text-yellow-100/60 font-satoshi">BTC Required</div>
                    <div className="text-2xl xl:text-3xl font-bold text-white font-satoshi">{formatNumber(btcRequired, 2)} BTC</div>
                  </div>

                  <div className="pt-2">
                    <div className="flex justify-between text-sm mb-2 font-satoshi">
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
                      className="text-sm text-yellow-100/60 mt-2 font-satoshi"
                    >
                      {currentTier.description}
                    </motion.p>
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={cardVariants}>
            <Card className="bg-zinc-900/50 border-zinc-800 h-full">
              <CardContent className="p-4 sm:p-6">
                <motion.div variants={contentVariants} className="flex items-start gap-4 mb-6">
                  <DollarSign className="w-8 h-8 text-yellow-400 shrink-0" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-yellow-400 font-epilogue">Tax</h2>
                </motion.div>
                <motion.div variants={contentVariants} className="space-y-6">
                  <div className="flex-1">
                    <div className="text-base text-yellow-100/60 font-satoshi">Gross Yearly Income</div>
                    <div className="text-2xl xl:text-3xl font-bold text-white font-satoshi">{formatCurrency(taxCalculations.grossYearlyIncome)}</div>
                  </div>
                  <div className="flex-1">
                    <div className="text-base text-yellow-100/60 font-satoshi">US Withholding Tax (15%)</div>
                    <div className="text-2xl xl:text-3xl font-bold text-white font-satoshi">{formatCurrency(taxCalculations.usWithholdingTax)}</div>
                  </div>
                  <div className="flex-1">
                    <div className="text-base text-yellow-100/60 font-satoshi">European Tax (15%)</div>
                    <div className="text-2xl xl:text-3xl font-bold text-white font-satoshi">{formatCurrency(taxCalculations.europeanTax)}</div>
                  </div>
                  <div className="flex-1">
                    <div className="text-base text-yellow-100/60 font-satoshi">Net Income in EUR</div>
                    <div className="text-2xl xl:text-3xl font-bold text-white font-satoshi">{formatCurrency(taxCalculations.netInEur, 'EUR')}</div>
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={cardVariants}>
            <Card className="bg-zinc-900/50 border-zinc-800 h-full">
              <CardContent className="p-4 sm:p-6">
                <motion.div variants={contentVariants} className="flex items-start gap-4 mb-6">
                  <PieChart className="w-8 h-8 text-yellow-400 shrink-0" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-yellow-400 font-epilogue">Allocation</h2>
                </motion.div>
                <motion.div variants={contentVariants} className="space-y-6">
                  <div className="flex-1">
                    <div className="text-base text-yellow-100/60 font-satoshi">Recommended Portfolio</div>
                    <div className="text-2xl xl:text-3xl font-bold text-white font-satoshi">{formatCurrency(portfolioAllocation.totalPortfolio)}</div>
                  </div>
                  <div className="space-y-6">
                    <div className="flex-1">
                      <div className="text-base text-yellow-100/60 font-satoshi">MSTY (Income)</div>
                      <div className="text-2xl xl:text-3xl font-bold text-white font-satoshi">{formatCurrency(portfolioAllocation.mstyInvestment)}</div>
                    </div>
                    <div className="flex-1">
                      <div className="text-base text-yellow-100/60 font-satoshi">BTC (Savings)</div>
                      <div className="text-2xl xl:text-3xl font-bold text-white font-satoshi">{formatCurrency(portfolioAllocation.btcInvestment)}</div>
                    </div>
                    <div className="flex-1">
                      <div className="text-base text-yellow-100/60 font-satoshi">MSTR (Growth)</div>
                      <div className="text-2xl xl:text-3xl font-bold text-white font-satoshi">{formatCurrency(portfolioAllocation.mstrInvestment)}</div>
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
          className="mt-12 mb-16 flex flex-col items-center gap-4"
        >
          <Button 
            className="bg-yellow-400 hover:bg-yellow-500 text-black text-xl font-bold py-6 px-12 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-400/20"
            size="lg"
            onClick={() => window.open('https://yieldmaxetfs.com/msty', '_blank')}
          >
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="text-2xl">🚀</span>
              <span>Become a Legend</span>
              <ArrowRight className="w-6 h-6" />
            </motion.div>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: 1.5,
            duration: 0.8,
            ease: "easeOut"
          }}
          className="text-center max-w-3xl mx-auto mb-12 px-4"
        >
          <div className="relative">
            <div className="absolute -left-4 -top-4 text-4xl text-yellow-400 opacity-50">&ldquo;</div>
            <div className="absolute -right-4 -bottom-4 text-4xl text-yellow-400 opacity-50">&rdquo;</div>
            <p className="text-xl md:text-2xl text-yellow-100/80 font-epilogue italic">
              Live Life off MSTY distributions and let MSTR &amp; BTC stack over time, tax-deferred (not in EUR). 
              You&apos;re cashflow-rich, compounding hard money, and never touching the principal.
            </p>
            <div className="mt-4 text-yellow-400/60 font-satoshi">
              — YieldMax™ MSTR Option Income Strategy ETF
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 