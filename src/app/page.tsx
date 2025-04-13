"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Bitcoin, TrendingUp, DollarSign, ChevronDown, Calculator } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

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

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with Parallax */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[60vh] flex items-center justify-center overflow-hidden"
      >
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-6">
            MSTR Option Income Strategy
          </h1>
          <p className="text-xl text-yellow-100/80 max-w-3xl mx-auto mb-8">
            Bitcoin-first strategy, complemented by strategic positions in MSTY and MSTR.
          </p>
          <Link
            href="/calculator"
            className="inline-flex items-center gap-2 bg-yellow-400 text-black px-6 py-3 rounded-lg hover:bg-yellow-500 transition-colors"
          >
            <Calculator className="w-5 h-5" />
            Try the Calculator
          </Link>
        </motion.div>
        {/* Abstract Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,199,0,0.15),rgba(0,0,0,0))]" />
      </motion.div>

      <div className="container mx-auto px-4 py-16 space-y-16">
        {/* Core Strategy with Hover Effects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-yellow-400 mb-8">Core Strategy</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Bitcoin,
                title: "Bitcoin Savings",
                description: "Your foundation - 80% allocation to cold storage Bitcoin for long-term wealth preservation."
              },
              {
                icon: TrendingUp,
                title: "Strategic Growth",
                description: "Capture additional Bitcoin exposure through MSTR corporate treasury strategy."
              },
              {
                icon: DollarSign,
                title: "Income Generation",
                description: "Generate monthly income through MSTY option premium strategy without selling your core Bitcoin."
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                className="bg-zinc-900 p-6 rounded-lg border border-yellow-500/20 hover:border-yellow-500/40 transition-all"
              >
                <item.icon className="w-12 h-12 text-yellow-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-yellow-100/80">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Interactive FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-zinc-900 rounded-lg border border-yellow-500/20 p-6"
        >
          <h2 className="text-3xl font-bold text-yellow-400 mb-8">Frequently Asked Questions</h2>
          <AccordionItem title="How does the strategy work?" defaultOpen>
            <p className="text-yellow-100/80">
              Our strategy combines Bitcoin self-custody (80%) with strategic positions in MSTY (10%) 
              for monthly income and MSTR (10%) for additional Bitcoin exposure. MSTY generates income through 
              an options-based strategy on MSTR stock, utilizing covered call writing and put option selling, 
              while also holding short-term U.S. Treasuries as collateral. This approach provides both wealth 
              preservation and regular income without compromising your core Bitcoin position.
            </p>
          </AccordionItem>
          <AccordionItem title="What are MSTY&apos;s dividend yields and sustainability?">
            <p className="text-yellow-100/80">
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
            <p className="text-yellow-100/80">
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
            <p className="text-yellow-100/80">
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
            <p className="text-yellow-100/80">
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
            <p className="text-yellow-100/80">
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

        {/* Interactive Status Levels Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-x-auto"
        >
          <h2 className="text-3xl font-bold text-yellow-400 mb-8">Freedom Status Levels</h2>
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
                  className="border-b border-yellow-500/10 hover:bg-yellow-400/5 transition-colors"
                >
                  <td className="p-4 font-medium">{level.status}</td>
                  <td className="p-4">{level.income}</td>
                  <td className="p-4">{level.shares}</td>
                  <td className="p-4">{level.capital}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center py-16"
        >
          <h2 className="text-3xl font-bold text-yellow-400 mb-6">Ready to Start?</h2>
          <p className="text-xl text-yellow-100/80 mb-8 max-w-2xl mx-auto space-y-2">
            <div className="flex items-center justify-center gap-3">
              <Bitcoin className="w-6 h-6 text-yellow-400" />
              <span>BTC = Saving</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <TrendingUp className="w-6 h-6 text-yellow-400" />
              <span>MSTR = Investment</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <DollarSign className="w-6 h-6 text-yellow-400" />
              <span>MSTY = Income</span>
            </div>
          </p>
          <Link
            href="/calculator"
            className="inline-flex items-center gap-2 bg-yellow-400 text-black px-8 py-4 rounded-lg hover:bg-yellow-500 transition-colors text-lg font-semibold"
          >
            <Calculator className="w-6 h-6" />
            Calculate Your Freedom
          </Link>
        </motion.div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-sm text-yellow-100/60 max-w-2xl mx-auto"
        >
          <p>
            This calculator is for educational purposes only. It is not financial advice. 
            Always do your own research and consult with qualified professionals before making investment decisions.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
