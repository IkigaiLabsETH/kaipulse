'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, Clock, Shield, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { Card } from "@/components/ui/card"

const AccordionItem = ({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-yellow-500/20">
      <button
        className="flex w-full items-center justify-between py-4 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-xl font-medium text-white">{title}</span>
        <ChevronDown
          className={cn('h-6 w-6 transition-transform text-yellow-500', {
            '-rotate-180': isOpen,
          })}
        />
      </button>
      {isOpen && (
        <div className="pb-4 text-white/80">
          {children}
        </div>
      )}
    </div>
  )
}

const marketStats = [
  {
    title: "Market Cap",
    value: "$1.6T+",
    description: "Total Bitcoin market capitalization"
  },
  {
    title: "24h Volume",
    value: "$25B+",
    description: "Daily trading volume"
  },
  {
    title: "Dominance",
    value: "60%+",
    description: "Share of total crypto market cap"
  },
  {
    title: "Circulating Supply",
    value: "19.5M BTC",
    description: "Of 21M maximum supply"
  }
]

const keyEvents = [
  {
    year: "2024",
    events: [
      "Bitcoin ETF approval by SEC",
      "Fourth Bitcoin halving expected",
      "Institutional adoption acceleration"
    ]
  },
  {
    year: "2023",
    events: [
      "Bitcoin surpasses $40,000",
      "Major banks offer Bitcoin services",
      "Lightning Network growth"
    ]
  },
  {
    year: "2022",
    events: [
      "Market correction",
      "Mining difficulty adjustments",
      "Layer 2 scaling solutions"
    ]
  }
]

export default function BitcoinPage() {
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
          className="text-center"
        >
          <h1 className="font-epilogue text-4xl font-bold tracking-tight sm:text-6xl text-yellow-500">
            Bitcoin & MSTY
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/90">
            Understanding Bitcoin&apos;s impact on MSTY and MicroStrategy&apos;s Bitcoin strategy
          </p>
        </motion.div>

        {/* Market Stats */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {marketStats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-medium text-white/80">{stat.title}</h3>
                  <p className="mt-2 text-3xl font-bold text-yellow-500">{stat.value}</p>
                  <p className="mt-1 text-sm text-white/60">{stat.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Main Content */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Bitcoin Fundamentals */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <div className="p-8">
                <h2 className="text-2xl font-bold text-yellow-500">Bitcoin Fundamentals</h2>
                <div className="mt-8 space-y-4">
                  <AccordionItem title="What is Bitcoin?">
                    Bitcoin is a decentralized digital currency created in 2009. It operates on a peer-to-peer network 
                    without the need for intermediaries. Key features include:
                    <ul className="mt-4 list-disc pl-4 space-y-2">
                      <li>Limited supply of 21 million BTC</li>
                      <li>Transparent and immutable transaction ledger</li>
                      <li>Secured by proof-of-work consensus</li>
                      <li>Global, borderless transactions</li>
                    </ul>
                  </AccordionItem>
                  
                  <AccordionItem title="Bitcoin&apos;s Role in MSTY">
                    Bitcoin&apos;s price movements directly affect MSTY through MicroStrategy&apos;s significant Bitcoin holdings:
                    <ul className="mt-4 list-disc pl-4 space-y-2">
                      <li>MSTR stock price correlation with Bitcoin</li>
                      <li>Impact on MSTY options premiums</li>
                      <li>Influence on strategy performance</li>
                      <li>Volatility considerations</li>
                    </ul>
                  </AccordionItem>

                  <AccordionItem title="Market Dynamics">
                    Understanding Bitcoin market dynamics is crucial for MSTY traders:
                    <ul className="mt-4 list-disc pl-4 space-y-2">
                      <li>24/7 global trading</li>
                      <li>High volatility opportunities</li>
                      <li>Institutional vs retail flows</li>
                      <li>Regulatory impacts</li>
                    </ul>
                  </AccordionItem>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Timeline and Events */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card>
              <div className="p-8">
                <h2 className="text-2xl font-bold text-yellow-500">Key Events & Timeline</h2>
                <div className="mt-8 space-y-8">
                  {keyEvents.map((period) => (
                    <div key={period.year} className="relative pl-8">
                      <div className="absolute left-0 top-0 h-full w-px bg-yellow-500/20" />
                      <div className="absolute left-[-4px] top-2 h-2 w-2 rounded-full bg-yellow-500" />
                      <h3 className="text-xl font-bold text-yellow-500">{period.year}</h3>
                      <ul className="mt-4 space-y-3">
                        {period.events.map((event, index) => (
                          <li key={index} className="text-white/80">
                            {event}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Trading Implications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16"
        >
          <Card>
            <div className="p-8">
              <h2 className="text-2xl font-bold text-yellow-500">Trading Implications</h2>
              <div className="mt-8 grid gap-8 md:grid-cols-3">
                <div className="flex flex-col items-center text-center">
                  <TrendingUp className="h-12 w-12 text-yellow-500" />
                  <h3 className="mt-4 text-xl font-bold text-white">Price Action</h3>
                  <p className="mt-2 text-white/80">
                    Bitcoin price movements create opportunities in MSTY options trading through their impact on MSTR stock.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Clock className="h-12 w-12 text-yellow-500" />
                  <h3 className="mt-4 text-xl font-bold text-white">Timing</h3>
                  <p className="mt-2 text-white/80">
                    Key Bitcoin events and market cycles can influence optimal entry and exit points for MSTY positions.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Shield className="h-12 w-12 text-yellow-500" />
                  <h3 className="mt-4 text-xl font-bold text-white">Risk Management</h3>
                  <p className="mt-2 text-white/80">
                    Understanding Bitcoin volatility is crucial for managing risk in MSTY options strategies.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Deep Dive Analysis */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16"
        >
          <Card className="transform hover:scale-[1.01] transition-transform duration-200">
            <div className="p-8">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
                className="flex items-center justify-between mb-8"
              >
                <motion.h2 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="text-2xl font-bold text-yellow-500"
                >
                  Deep Dive Analysis
                </motion.h2>
                <div className="flex space-x-2">
                  <span className="px-3 py-1 text-sm bg-yellow-500/10 text-yellow-500 rounded-full">
                    Updated 2024
                  </span>
                </div>
              </motion.div>
              
              {/* Market Landscape */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="mt-8"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="h-8 w-1 bg-yellow-500 rounded-full" />
                  <h3 className="text-xl font-bold text-white">Market Landscape</h3>
                </div>
                <div className="grid gap-8 md:grid-cols-2">
                  <div className="space-y-6">
                    <motion.div 
                      className="flex items-start group"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="bg-yellow-500/10 p-3 rounded-lg group-hover:bg-yellow-500/20 transition-colors">
                        <TrendingUp className="h-6 w-6 text-yellow-500" />
                      </div>
                      <div className="ml-4">
                        <h4 className="font-medium text-white">Institutional Adoption</h4>
                        <p className="text-white/80 mt-2">
                          Major financial institutions and corporations now hold Bitcoin as a treasury reserve asset, with MicroStrategy leading the charge with over 150,000 BTC. By 2025, 83% of institutional investors plan to increase crypto allocations, signaling Bitcoin&apos;s growing acceptance as a strategic asset class. A Fidelity survey in 2023 found 58% of institutional investors owned digital assets, with Bitcoin being the top choice.
                        </p>
                      </div>
                    </motion.div>
                    <motion.div 
                      className="flex items-start group"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.9 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="bg-yellow-500/10 p-3 rounded-lg group-hover:bg-yellow-500/20 transition-colors">
                        <Shield className="h-6 w-6 text-yellow-500" />
                      </div>
                      <div className="ml-4">
                        <h4 className="font-medium text-white">Regulatory Evolution</h4>
                        <p className="text-white/80 mt-2">
                          Global regulators are moving from uncertainty to engagement, with frameworks like MiCA providing clear rules for crypto-assets. The EU&apos;s comprehensive crypto regulation sets a precedent for other regions, balancing innovation with consumer protection and market stability. By 2050, we expect clear and standardized regulations coordinated via international bodies like FATF and BIS.
                        </p>
                      </div>
                    </motion.div>
                  </div>
                  <div className="space-y-6">
                    <motion.div 
                      className="flex items-start group"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="bg-yellow-500/10 p-3 rounded-lg group-hover:bg-yellow-500/20 transition-colors">
                        <Clock className="h-6 w-6 text-yellow-500" />
                      </div>
                      <div className="ml-4">
                        <h4 className="font-medium text-white">Market Maturation</h4>
                        <p className="text-white/80 mt-2">
                          Bitcoin&apos;s market has grown to hundreds of billions in capitalization, with increasing liquidity and decreasing volatility. The Lightning Network now boasts over 15,000 public nodes and 54,000 channels, handling 6.6 million routed transactions monthly - a 1,212% increase from two years prior. By late 2023, roughly 70% of the total Bitcoin supply had not moved in over a year.
                        </p>
                      </div>
                    </motion.div>
                    <motion.div 
                      className="flex items-start group"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.9 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="bg-yellow-500/10 p-3 rounded-lg group-hover:bg-yellow-500/20 transition-colors">
                        <TrendingUp className="h-6 w-6 text-yellow-500" />
                      </div>
                      <div className="ml-4">
                        <h4 className="font-medium text-white">Macro Backdrop</h4>
                        <p className="text-white/80 mt-2">
                          In an environment of high global debt and inflationary pressures, Bitcoin&apos;s fixed supply and neutral monetary policy strengthen its &quot;digital gold&quot; narrative. The USD has lost ~85% of its purchasing power since the 1970s, highlighting Bitcoin&apos;s appeal as a hedge against fiat debasement. By 2050, over 98% of the 21 million BTC supply will have been mined.
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Valuation Models */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="mt-12"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="h-8 w-1 bg-yellow-500 rounded-full" />
                  <h3 className="text-xl font-bold text-white">Valuation Models</h3>
                </div>
                <div className="grid gap-6 md:grid-cols-3">
                  <motion.div 
                    className="bg-black/20 p-6 rounded-lg border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300 hover:transform hover:scale-105"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.1 }}
                  >
                    <h4 className="font-medium text-white mb-3">Network Effect</h4>
                    <p className="text-white/80">
                      Based on Metcalfe&apos;s Law, Bitcoin&apos;s value grows with its user base. Current estimates suggest over 100 million users globally, with adoption growing at ~137% annually - outpacing internet adoption rates in the 1990s. By 2030, projections suggest 4 billion users, potentially reaching mainstream adoption levels similar to the internet today.
                    </p>
                  </motion.div>
                  <motion.div 
                    className="bg-black/20 p-6 rounded-lg border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300 hover:transform hover:scale-105"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                  >
                    <h4 className="font-medium text-white mb-3">Scarcity Model</h4>
                    <p className="text-white/80">
                      Stock-to-Flow model suggests Bitcoin&apos;s diminishing issuance rate could drive prices to six-figures in current cycle. By 2050, over 98% of the 21 million BTC supply will be mined, with annual inflation approaching 0%, making it more scarce than gold. The block reward will fall to ~0.78 BTC by 2032 and ~0.05 BTC by 2048.
                    </p>
                  </motion.div>
                  <motion.div 
                    className="bg-black/20 p-6 rounded-lg border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300 hover:transform hover:scale-105"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.3 }}
                  >
                    <h4 className="font-medium text-white mb-3">Macro Asset Share</h4>
                    <p className="text-white/80">
                      If Bitcoin achieves gold parity in market cap, price could reach $500,000-$600,000 per BTC. VanEck&apos;s base case projects $2.9M per BTC by 2050, assuming Bitcoin handles 10% of international trade and 5% of domestic transactions. Bull case scenarios suggest potential valuations exceeding $50M per BTC.
                    </p>
                  </motion.div>
                </div>
              </motion.div>

              {/* Risk Considerations */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.4 }}
                className="mt-12"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="h-8 w-1 bg-yellow-500 rounded-full" />
                  <h3 className="text-xl font-bold text-white">Risk Considerations</h3>
                </div>
                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.5 }}
                    className="hover:transform hover:scale-[1.01] transition-transform duration-200"
                  >
                    <AccordionItem title="Price Volatility">
                      <p className="text-white/80">
                        Bitcoin remains volatile with periodic drawdowns of 50%+. However, volatility has decreased as the market matures, and no 4-year holding period has resulted in a loss historically. As market cap grows into the tens of trillions, volatility is expected to decrease further. By 2050, if Bitcoin reaches a market capitalization in the tens of trillions of dollars, it would likely exhibit much lower volatility, cementing its status as a store of value.
                      </p>
                    </AccordionItem>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.6 }}
                    className="hover:transform hover:scale-[1.01] transition-transform duration-200"
                  >
                    <AccordionItem title="Regulatory Environment">
                      <p className="text-white/80">
                        While regulatory clarity is improving, changes in policy could impact Bitcoin&apos;s trajectory. The trend is toward regulation rather than prohibition, with frameworks like MiCA providing guidance. By 2050, we expect clear and standardized regulations globally, coordinated via international bodies. The IMF, G20, and BIS are likely to establish international standards for digital currencies, similar to Basel Accords for banking.
                      </p>
                    </AccordionItem>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.7 }}
                    className="hover:transform hover:scale-[1.01] transition-transform duration-200"
                  >
                    <AccordionItem title="Security and Custody">
                      <p className="text-white/80">
                        The Bitcoin network itself is secure, but investors must carefully manage custody. Institutional-grade solutions and insurance products have emerged to address these concerns. By 2050, quantum computing may threaten Bitcoin&apos;s cryptography, but the community is likely to adopt quantum-resistant algorithms well before quantum computers become a practical threat.
                      </p>
                    </AccordionItem>
                  </motion.div>
                </div>
              </motion.div>

              {/* Long-Term Outlook */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.8 }}
                className="mt-12"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="h-8 w-1 bg-yellow-500 rounded-full" />
                  <h3 className="text-xl font-bold text-white">Long-Term Outlook</h3>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  <motion.div 
                    className="bg-black/20 p-6 rounded-lg border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300 hover:transform hover:scale-105"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.9 }}
                  >
                    <h4 className="font-medium text-white mb-3">Institutional Integration</h4>
                    <p className="text-white/80">
                      Major institutions are increasingly recognizing Bitcoin as a legitimate asset class, with growing adoption in corporate treasuries and investment portfolios. By 2050, Bitcoin could be a standard holding in institutional portfolios, similar to real estate, commodities, or equities. A Fidelity survey found 74% of institutions plan to invest in crypto, with Bitcoin being the preferred choice.
                    </p>
                  </motion.div>
                  <motion.div 
                    className="bg-black/20 p-6 rounded-lg border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300 hover:transform hover:scale-105"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 2 }}
                  >
                    <h4 className="font-medium text-white mb-3">Global Adoption</h4>
                    <p className="text-white/80">
                      Nation-states are beginning to engage with Bitcoin, from El Salvador&apos;s adoption as legal tender to central banks considering Bitcoin in reserves. By 2050, central banks may hold 2-5% of their reserves in Bitcoin, potentially reaching $0.5-0.75 trillion in total reserves. The Czech National Bank is already examining Bitcoin&apos;s potential inclusion in reserves as an additional asset class.
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  )
} 