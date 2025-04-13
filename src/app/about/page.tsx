'use client';

import { motion } from 'framer-motion';
import { Bitcoin, TrendingUp, DollarSign, PieChart, Target, ShieldCheck } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-6">
            Your Path to Financial Freedom
          </h1>
          <p className="text-xl text-yellow-100/80 max-w-3xl mx-auto">
            A sophisticated calculator for planning your journey to financial independence through a 
            Bitcoin-first strategy, complemented by strategic positions in MSTY and MSTR.
          </p>
        </div>

        {/* Core Strategy */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-yellow-400 mb-8">Core Strategy</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-zinc-900 p-6 rounded-lg border border-yellow-500/20">
              <Bitcoin className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Bitcoin Savings</h3>
              <p className="text-yellow-100/80">
                Your foundation - 80% allocation to cold storage Bitcoin for long-term wealth preservation 
                and sovereignty.
              </p>
            </div>
            <div className="bg-zinc-900 p-6 rounded-lg border border-yellow-500/20">
              <TrendingUp className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Strategic Growth</h3>
              <p className="text-yellow-100/80">
                Capture additional Bitcoin exposure through MSTR&apos;s corporate treasury strategy.
              </p>
            </div>
            <div className="bg-zinc-900 p-6 rounded-lg border border-yellow-500/20">
              <DollarSign className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Income Generation</h3>
              <p className="text-yellow-100/80">
                Generate monthly income through MSTY&apos;s option premium strategy without selling your core Bitcoin.
              </p>
            </div>
          </div>
        </div>

        {/* Status Levels */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-yellow-400 mb-8">Freedom Status Levels</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-zinc-900 rounded-lg border border-yellow-500/20">
              <thead>
                <tr className="border-b border-yellow-500/20">
                  <th className="p-4 text-left text-yellow-400">Status</th>
                  <th className="p-4 text-left text-yellow-400">Monthly Income</th>
                  <th className="p-4 text-left text-yellow-400">MSTY Shares</th>
                  <th className="p-4 text-left text-yellow-400">Capital @ $20/Share</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-yellow-500/10">
                  <td className="p-4">Beginner</td>
                  <td className="p-4">$20</td>
                  <td className="p-4">20 shares</td>
                  <td className="p-4">$400</td>
                </tr>
                <tr className="border-b border-yellow-500/10">
                  <td className="p-4">Intermediate</td>
                  <td className="p-4">$500</td>
                  <td className="p-4">500 shares</td>
                  <td className="p-4">$10,000</td>
                </tr>
                <tr className="border-b border-yellow-500/10">
                  <td className="p-4">Advanced</td>
                  <td className="p-4">$3,000</td>
                  <td className="p-4">3,000 shares</td>
                  <td className="p-4">$60,000</td>
                </tr>
                <tr className="border-b border-yellow-500/10">
                  <td className="p-4">Elite</td>
                  <td className="p-4">$6,000</td>
                  <td className="p-4">6,000 shares</td>
                  <td className="p-4">$120,000</td>
                </tr>
                <tr className="border-b border-yellow-500/10">
                  <td className="p-4">Supreme</td>
                  <td className="p-4">$10,000</td>
                  <td className="p-4">10,000 shares</td>
                  <td className="p-4">$200,000</td>
                </tr>
                <tr>
                  <td className="p-4">Legend</td>
                  <td className="p-4">$50,000+</td>
                  <td className="p-4">50,000+ shares</td>
                  <td className="p-4">$1,000,000+</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Strategy Details */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-yellow-400 mb-8">Strategy Details</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-zinc-900 p-6 rounded-lg border border-yellow-500/20">
              <PieChart className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Portfolio Allocation</h3>
              <ul className="list-disc list-inside space-y-2 text-yellow-100/80">
                <li>80% Bitcoin in cold storage</li>
                <li>10% MSTY for monthly income</li>
                <li>10% MSTR for additional growth</li>
              </ul>
            </div>
            <div className="bg-zinc-900 p-6 rounded-lg border border-yellow-500/20">
              <Target className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Key Benefits</h3>
              <ul className="list-disc list-inside space-y-2 text-yellow-100/80">
                <li>Monthly income through covered call premiums</li>
                <li>Exposure to MSTR&apos;s Bitcoin holdings</li>
                <li>Professional options management</li>
                <li>Liquidity without selling core Bitcoin</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tax Considerations */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-yellow-400 mb-8">International Tax Considerations</h2>
          <div className="bg-zinc-900 p-6 rounded-lg border border-yellow-500/20">
            <ShieldCheck className="w-12 h-12 text-yellow-400 mb-4" />
            <div className="space-y-4">
              <p className="text-yellow-100/80">
                For French residents, our calculator includes special features to help optimize your tax situation:
              </p>
              <ul className="list-disc list-inside space-y-2 text-yellow-100/80">
                <li>U.S. withholding tax calculations (15% for French residents)</li>
                <li>French tax credit calculations</li>
                <li>Currency conversion tools (USD to EUR)</li>
                <li>Tax form preparation guidance</li>
              </ul>
              <div className="mt-6 p-4 bg-yellow-400/10 rounded-lg">
                <h4 className="text-lg font-semibold text-yellow-400 mb-2">Tax Treatment Summary</h4>
                <ul className="space-y-2 text-yellow-100/80">
                  <li>• BTC/MSTR: Capital gains only when sold</li>
                  <li>• MSTY: Monthly distributions taxed as ordinary income</li>
                  <li>• French PFU: 30% flat tax (12.8% income tax + 17.2% social charges)</li>
                  <li>• U.S. tax credit: 15% withholding tax recoverable</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="text-center text-sm text-yellow-100/60">
          <p>
            This calculator is for educational purposes only. It is not financial advice. 
            Always do your own research and consult with qualified professionals before making investment decisions.
          </p>
        </div>
      </div>
    </div>
  );
} 