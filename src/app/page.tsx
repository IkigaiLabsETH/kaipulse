"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Bitcoin, TrendingUp, DollarSign, ChevronDown, Calculator } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import PriceTicker from '@/components/PriceTicker';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

function AccordionItem({ title, children, defaultOpen = false }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-yellow-500/20 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-4 text-left"
      >
        <span className="text-xl font-semibold text-yellow-400">{title}</span>
        <ChevronDown
          className={cn(
            "w-5 h-5 text-yellow-400 transition-transform",
            isOpen && "transform rotate-180"
          )}
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="pb-4">{children}</div>
      </motion.div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Enhanced Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative min-h-[80vh] flex flex-col items-center justify-center"
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
              Generate Bitcoin Income
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="relative z-10 mt-12 w-full flex justify-center"
          >
            <Link
              href="/calculator"
              className="group w-full max-w-md inline-flex items-center justify-center gap-3 rounded-lg bg-[#1c1f26] border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] px-8 py-4 text-xl font-semibold text-white hover:bg-yellow-500 hover:text-black transition-all duration-300"
            >
              <Calculator className="w-6 h-6 group-hover:scale-110 transition-transform" />
              Calculate Your Strategy
            </Link>
          </motion.div>

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

        {/* Enhanced FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#1c1f26] rounded-lg border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] p-8"
        >
          <div className="flex items-center gap-3 mb-8">
            <ChevronDown className="w-8 h-8 text-yellow-500" />
            <h2 className="text-3xl font-bold text-yellow-500">Frequently Asked Questions</h2>
          </div>
          <AccordionItem title="How does the strategy work?" defaultOpen>
            <p className="text-white/90">
              Our strategy combines Bitcoin self-custody (80%) with strategic positions in MSTY (10%) 
              for monthly income and MSTR (10%) for additional Bitcoin exposure. MSTY generates income through 
              an options-based strategy on MSTR stock, utilizing covered call writing and put option selling, 
              while also holding short-term U.S. Treasuries as collateral. This approach provides both wealth 
              preservation and regular income without compromising your core Bitcoin position.
            </p>
          </AccordionItem>
          <AccordionItem title="What are MSTY&apos;s dividend yields and sustainability?">
            <p className="text-white/90">
              MSTY currently offers a distribution rate of approximately 101.29% annually. However, these yields 
              can fluctuate based on several factors:
              <br/><br/>
              • MSTR&apos;s stock price volatility and Bitcoin&apos;s value movements<br/>
              • Market conditions and options market dynamics<br/>
              • Changes in implied volatility affecting option premiums<br/>
              <br/>
              While the yield is attractive, it&apos;s important to understand that distributions aren&apos;t guaranteed 
              and can vary monthly based on market conditions.
            </p>
          </AccordionItem>
          <AccordionItem title="What are the tax implications for MSTY distributions?">
            <p className="text-white/90">
              For French residents, MSTY distributions are subject to a 15% U.S. withholding tax. It&apos;s important 
              to understand that:
              <br/><br/>
              • The 15% tax is automatically withheld at source<br/>
              • You&apos;ll need to declare these distributions on your French tax return<br/>
              • The withheld tax can often be credited against your French tax liability<br/>
              <br/>
              We recommend consulting with a tax professional for personalized advice on your situation.
            </p>
          </AccordionItem>
          <AccordionItem title="What are the risks involved?">
            <p className="text-white/90">
              Key risks to consider include:
              <br/><br/>
              • Dividend Variability: Monthly income can fluctuate based on market conditions<br/>
              • Capital Risk: MSTR stock price and Bitcoin value declines can lead to losses<br/>
              • Market Liquidity: Performance is tied to MSTR and Bitcoin volatility<br/>
              • Tax Implications: Converting Bitcoin to MSTY may trigger taxable events<br/>
              <br/>
              It&apos;s recommended to consult with a financial advisor before making substantial investments.
            </p>
          </AccordionItem>
          <AccordionItem title="How do I get started?">
            <p className="text-white/90">
              Start by using our calculator to determine your target monthly income and required MSTY 
              shares. Follow these steps:
              <br/><br/>
              1. Determine your desired monthly income<br/>
              2. Calculate required shares (approximately $1 monthly distribution per share)<br/>
              3. Ensure you maintain 80% in Bitcoin cold storage<br/>
              4. Consider tax implications and documentation requirements<br/>
              5. Set up proper tracking for distributions and tax reporting<br/>
              <br/>
              Remember to maintain your Bitcoin-first approach while using MSTY for income generation.
            </p>
          </AccordionItem>
          <AccordionItem title="How do I track my investments and taxes?">
            <p className="text-white/90">
              We recommend maintaining detailed records:
              <br/><br/>
              • Number of MSTY shares and monthly distributions<br/>
              • U.S. withholding tax amounts (15%)<br/>
              • EUR/USD exchange rates for tax reporting<br/>
              • Form W-8BEN filing with your broker<br/>
              • Monthly income tracking for tax purposes<br/>
              <br/>
              Consider using a spreadsheet to track gross dividends, taxes withheld, and net income in both 
              USD and EUR.
            </p>
          </AccordionItem>
        </motion.div>

        {/* Enhanced Status Levels Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#1c1f26] rounded-lg border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] p-8"
        >
          <div className="flex items-center gap-3 mb-8">
            <TrendingUp className="w-8 h-8 text-yellow-500" />
            <h2 className="text-3xl font-bold text-yellow-500">Freedom Status Levels</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-yellow-500/20">
                  <th className="p-4 text-left text-yellow-500 font-bold">Status</th>
                  <th className="p-4 text-left text-yellow-500 font-bold">Monthly Income</th>
                  <th className="p-4 text-left text-yellow-500 font-bold">MSTY Shares</th>
                  <th className="p-4 text-left text-yellow-500 font-bold">Capital @ $20/Share</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { status: "Beginner", income: "$20", shares: "20", capital: "$400" },
                  { status: "Intermediate", income: "$500", shares: "500", capital: "$10,000" },
                  { status: "Advanced", income: "$3,000", shares: "3,000", capital: "$60,000" },
                  { status: "Elite", income: "$6,000", shares: "6,000", capital: "$120,000" },
                  { status: "Supreme", income: "$10,000", shares: "10,000", capital: "$200,000" },
                  { status: "Legend", income: "$50,000+", shares: "50,000+", capital: "$1,000,000+" }
                ].map((level, index) => (
                  <motion.tr
                    key={level.status}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    className="border-b border-yellow-500/10 hover:bg-yellow-500/5 transition-colors"
                  >
                    <td className="p-4 font-medium text-white">{level.status}</td>
                    <td className="p-4 text-white/90">{level.income}</td>
                    <td className="p-4 text-white/90">{level.shares}</td>
                    <td className="p-4 text-white/90">{level.capital}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Enhanced Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center py-24"
        >
          <h2 className="text-4xl font-bold text-yellow-400 mb-8">Bitcoin-First Strategy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto mb-12">
            <div className="flex flex-col items-center gap-3 p-6 rounded-lg bg-[#1c1f26]/50 border border-yellow-500/30">
              <Bitcoin className="w-8 h-8 text-yellow-400" />
              <span className="text-lg">BTC = Saving</span>
            </div>
            <div className="flex flex-col items-center gap-3 p-6 rounded-lg bg-[#1c1f26]/50 border border-yellow-500/30">
              <TrendingUp className="w-8 h-8 text-yellow-400" />
              <span className="text-lg">MSTR = Investment</span>
            </div>
            <div className="flex flex-col items-center gap-3 p-6 rounded-lg bg-[#1c1f26]/50 border border-yellow-500/30">
              <DollarSign className="w-8 h-8 text-yellow-400" />
              <span className="text-lg">MSTY = Income</span>
            </div>
          </div>
          <Link
            href="/calculator"
            className="group inline-flex items-center gap-3 rounded-lg bg-[#1c1f26] border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] px-8 py-4 text-xl font-semibold text-white hover:bg-yellow-500 hover:text-black transition-all duration-300"
          >
            <Calculator className="w-6 h-6 group-hover:scale-110 transition-transform" />
            Calculate Your Freedom
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
          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-6">
            <h3 className="text-yellow-400 font-semibold mb-3">Important Disclaimer</h3>
            <p className="text-white/70 leading-relaxed">
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
