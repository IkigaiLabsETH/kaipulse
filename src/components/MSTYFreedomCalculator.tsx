'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { motion } from 'framer-motion';
import { ArrowRight, Bitcoin, TrendingUp, Target, DollarSign, Euro, Percent, PieChart } from 'lucide-react';
import { DEFAULT_VALUES, TIERS, INPUT_CONFIG } from '@/config/calculator';
import { calculateFreedomMetrics, formatCurrency, formatNumber, formatPercentage } from '@/utils/calculator';

interface InputEvent extends React.ChangeEvent<HTMLInputElement> {
  target: HTMLInputElement & {
    value: string;
  };
}

export function MSTYFreedomCalculator() {
  const [monthlyIncome, setMonthlyIncome] = useState<number>(DEFAULT_VALUES.MONTHLY_INCOME);
  const [mstPrice, setMstPrice] = useState<number>(DEFAULT_VALUES.MST_PRICE);
  const [monthlyDividend, setMonthlyDividend] = useState<number>(DEFAULT_VALUES.MONTHLY_DIVIDEND);
  const [btcPrice, setBtcPrice] = useState<number>(DEFAULT_VALUES.BTC_PRICE);
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
      <div className="flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-yellow-400"></div>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="bg-zinc-900 border-yellow-500/20">
            <CardContent className="space-y-6 p-6">
              <h2 className="text-2xl font-semibold mb-4 text-yellow-400">Your Freedom Parameters</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-yellow-100/80 mb-2">
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
                  <label className="block text-sm font-medium text-yellow-100/80 mb-2">
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
                  <label className="block text-sm font-medium text-yellow-100/80 mb-2">
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
                  <label className="block text-sm font-medium text-yellow-100/80 mb-2">
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
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card className="bg-zinc-900 border-yellow-500/20">
            <CardContent className="space-y-6 p-6">
              <h2 className="text-2xl font-semibold mb-4 text-yellow-400">Your Freedom Metrics</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Target className="text-yellow-400" />
                  <div>
                    <div className="text-sm text-yellow-100/60">Shares Needed</div>
                    <div className="text-xl font-bold text-white">{formatNumber(sharesNeeded)} shares</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="text-yellow-400" />
                  <div>
                    <div className="text-sm text-yellow-100/60">Total Investment</div>
                    <div className="text-xl font-bold text-white">{formatCurrency(totalInvestment)}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Bitcoin className="text-yellow-400" />
                  <div>
                    <div className="text-sm text-yellow-100/60">BTC Required</div>
                    <div className="text-xl font-bold text-white">{formatNumber(btcRequired, 2)} BTC</div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-yellow-100/60">Current Tier: {currentTier.label}</span>
                  <span className="text-yellow-100/60">Next Tier: {nextTier.label}</span>
                </div>
                <div className="relative w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                  <div 
                    className="absolute top-0 left-0 h-full bg-yellow-400 transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <p className="text-sm text-yellow-100/60 mt-2">{currentTier.description}</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <Card className="bg-zinc-900 border-yellow-500/20">
            <CardContent className="space-y-6 p-6">
              <h2 className="text-2xl font-semibold mb-4 text-yellow-400">Tax Calculations</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <DollarSign className="text-yellow-400" />
                  <div>
                    <div className="text-sm text-yellow-100/60">Gross Monthly Income</div>
                    <div className="text-xl font-bold text-white">{formatCurrency(taxCalculations.grossMonthlyIncome)}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Percent className="text-yellow-400" />
                  <div>
                    <div className="text-sm text-yellow-100/60">US Withholding Tax (15%)</div>
                    <div className="text-xl font-bold text-white">{formatCurrency(taxCalculations.usWithholdingTax)}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Euro className="text-yellow-400" />
                  <div>
                    <div className="text-sm text-yellow-100/60">Net Income in EUR</div>
                    <div className="text-xl font-bold text-white">{formatCurrency(taxCalculations.netInEur, 'EUR')}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <Card className="bg-zinc-900 border-yellow-500/20">
            <CardContent className="space-y-6 p-6">
              <h2 className="text-2xl font-semibold mb-4 text-yellow-400">Portfolio Allocation</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <PieChart className="text-yellow-400" />
                  <div>
                    <div className="text-sm text-yellow-100/60">Total Portfolio Value</div>
                    <div className="text-xl font-bold text-white">{formatCurrency(portfolioAllocation.totalPortfolio)}</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-yellow-100/60">MSTY (Income)</span>
                    <span className="text-white">{formatCurrency(portfolioAllocation.mstyInvestment)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-yellow-100/60">BTC (Savings)</span>
                    <span className="text-white">{formatCurrency(portfolioAllocation.btcInvestment)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-yellow-100/60">MSTR (Growth)</span>
                    <span className="text-white">{formatCurrency(portfolioAllocation.mstrInvestment)}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="mt-8 text-center"
      >
        <Button 
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
          size="lg"
          onClick={() => window.open('https://yieldmaxetfs.com/msty', '_blank')}
        >
          🚀 Become a Legend
          <ArrowRight className="ml-2" />
        </Button>
      </motion.div>
    </motion.div>
  );
} 