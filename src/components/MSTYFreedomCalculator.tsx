import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { motion } from 'framer-motion';
import { ArrowRight, Bitcoin, TrendingUp, Target } from 'lucide-react';
import { DEFAULT_VALUES, TIERS, INPUT_CONFIG } from '@/config/calculator';
import { calculateFreedomMetrics, formatCurrency, formatNumber } from '@/utils/calculator';

interface InputEvent extends React.ChangeEvent<HTMLInputElement> {
  target: HTMLInputElement & {
    value: string;
  };
}

export default function MSTYFreedomCalculator() {
  const [monthlyIncome, setMonthlyIncome] = useState<number>(DEFAULT_VALUES.MONTHLY_INCOME);
  const [mstPrice, setMstPrice] = useState<number>(DEFAULT_VALUES.MST_PRICE);
  const [monthlyDividend, setMonthlyDividend] = useState<number>(DEFAULT_VALUES.MONTHLY_DIVIDEND);
  const [btcPrice, setBtcPrice] = useState<number>(DEFAULT_VALUES.BTC_PRICE);
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
    progress
  } = calculateFreedomMetrics(monthlyIncome, mstPrice, monthlyDividend, btcPrice);

  const handleInputChange = (setter: React.Dispatch<React.SetStateAction<number>>) => 
    (e: InputEvent) => {
      const value = parseFloat(e.target.value);
      if (!isNaN(value)) {
        setter(value);
      }
    };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-6"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            MSTY Freedom Calculator
          </h1>
          <p className="text-xl text-gray-300">
            Live off your BTC stack without selling a single sat.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="space-y-6 p-6">
                <h2 className="text-2xl font-semibold mb-4">Your Freedom Parameters</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      {INPUT_CONFIG.MONTHLY_INCOME.label}
                    </label>
                    <Input
                      type="number"
                      value={monthlyIncome}
                      onChange={handleInputChange(setMonthlyIncome)}
                      className="bg-gray-700 border-gray-600 text-white"
                      min={INPUT_CONFIG.MONTHLY_INCOME.min}
                      step={INPUT_CONFIG.MONTHLY_INCOME.step}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      {INPUT_CONFIG.MST_PRICE.label}
                    </label>
                    <Input
                      type="number"
                      value={mstPrice}
                      onChange={handleInputChange(setMstPrice)}
                      className="bg-gray-700 border-gray-600 text-white"
                      min={INPUT_CONFIG.MST_PRICE.min}
                      step={INPUT_CONFIG.MST_PRICE.step}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      {INPUT_CONFIG.MONTHLY_DIVIDEND.label}
                    </label>
                    <Input
                      type="number"
                      value={monthlyDividend}
                      onChange={handleInputChange(setMonthlyDividend)}
                      className="bg-gray-700 border-gray-600 text-white"
                      min={INPUT_CONFIG.MONTHLY_DIVIDEND.min}
                      step={INPUT_CONFIG.MONTHLY_DIVIDEND.step}
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
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="space-y-6 p-6">
                <h2 className="text-2xl font-semibold mb-4">Your Freedom Metrics</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Target className="text-blue-400" />
                    <div>
                      <div className="text-sm text-gray-400">Shares Needed</div>
                      <div className="text-xl font-bold">{formatNumber(sharesNeeded)} shares</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="text-green-400" />
                    <div>
                      <div className="text-sm text-gray-400">Total Investment</div>
                      <div className="text-xl font-bold">{formatCurrency(totalInvestment)}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Bitcoin className="text-yellow-400" />
                    <div>
                      <div className="text-sm text-gray-400">BTC Required</div>
                      <div className="text-xl font-bold">{formatNumber(btcRequired, 2)} BTC</div>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-400">Current Tier: {currentTier.label}</span>
                    <span className="text-gray-400">Next Tier: {nextTier.label}</span>
                  </div>
                  <Progress value={progress} className="h-2" />
                  <p className="text-sm text-gray-400 mt-2">{currentTier.description}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-8 text-center"
        >
          <Button 
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            size="lg"
          >
            🚀 Become a Legend Candidate™
            <ArrowRight className="ml-2" />
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
} 