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
    year: "2026",
    events: [
      "Fifth Bitcoin halving preparation",
      "Global regulatory frameworks mature",
      "Quantum-resistant signature implementation",
      "Nation-state adoption expands",
      "DeFi-Bitcoin integration acceleration"
    ]
  },
  {
    year: "2025",
    events: [
      "Expected central bank digital currency launches",
      "Layer 2 daily transactions surpass 1M",
      "Major sovereign wealth fund adoption",
      "Enhanced privacy features deployment",
      "Cross-chain interoperability expansion"
    ]
  },
  {
    year: "2024",
    events: [
      "Spot Bitcoin ETF approval by SEC (January)",
      "Fourth Bitcoin halving (April) - Block reward reduces to 3.125 BTC",
      "Major banks launch Bitcoin custody services",
      "Lightning Network capacity exceeds 10,000 BTC",
      "Global institutional inflows reach new highs"
    ]
  },
  {
    year: "2023",
    events: [
      "Bitcoin surpasses $44,000 (December)",
      "BlackRock files for spot Bitcoin ETF",
      "Lightning Network reaches 5,000+ BTC capacity",
      "MicroStrategy holdings exceed 150,000 BTC",
      "El Salvador Bitcoin bonds development"
    ]
  },
  {
    year: "2022",
    events: [
      "Market correction to $15,700 (November)",
      "Mining hash rate hits 300 EH/s",
      "Taproot adoption reaches 50%",
      "Lightning Network growth +400%",
      "FTX collapse impacts market"
    ]
  },
  {
    year: "2021",
    events: [
      "Bitcoin reaches ATH of $69,000 (November)",
      "El Salvador adopts Bitcoin as legal tender",
      "China bans Bitcoin mining",
      "Taproot upgrade activation",
      "Tesla adds Bitcoin to balance sheet"
    ]
  },
  {
    year: "2020",
    events: [
      "Third Bitcoin halving - Block reward to 6.25 BTC",
      "MicroStrategy adopts Bitcoin standard",
      "PayPal enables Bitcoin trading",
      "Bitcoin surpasses $20,000 previous ATH",
      "Institutional adoption begins"
    ]
  },
  {
    year: "2017",
    events: [
      "Bitcoin reaches $20,000 first time",
      "SegWit activation",
      "Bitcoin Cash hard fork",
      "Lightning Network whitepaper",
      "Crypto market cap exceeds $100B"
    ]
  },
  {
    year: "2016",
    events: [
      "Second Bitcoin halving - Block reward to 12.5 BTC",
      "Ethereum DAO hack impacts crypto markets",
      "Bitfinex hack of 120,000 BTC",
      "Lightning Network development begins",
      "Bitcoin scaling debate intensifies"
    ]
  },
  {
    year: "2013",
    events: [
      "Bitcoin surpasses $1,000 first time",
      "First Bitcoin ATM installed in Vancouver",
      "Mt. Gox handles 70% of all Bitcoin trades",
      "China&apos;s first crypto ban",
      "US Senate holds first Bitcoin hearing"
    ]
  },
  {
    year: "2012",
    events: [
      "First Bitcoin halving - Block reward to 25 BTC",
      "Coinbase founded",
      "Bitcoin Foundation established",
      "Payment processor BitPay exceeds 1,000 merchants",
      "Bitcoin Magazine launches"
    ]
  },
  {
    year: "2011",
    events: [
      "Bitcoin reaches price parity with USD",
      "WikiLeaks begins accepting Bitcoin",
      "Mt. Gox becomes dominant exchange",
      "First major security breach (Mt. Gox)",
      "Silk Road marketplace launches"
    ]
  },
  {
    year: "2010",
    events: [
      "First Bitcoin transaction (10,000 BTC for pizza)",
      "Bitcoin Market established",
      "Mt. Gox cryptocurrency exchange founded",
      "Bitcoin reaches $0.10",
      "Mining pool launched"
    ]
  },
  {
    year: "2009",
    events: [
      "Genesis block mined by Satoshi Nakamoto (January 3)",
      "First Bitcoin transaction to Hal Finney",
      "Bitcoin software v0.1 released",
      "First Bitcoin exchange rate established",
      "New Liberty Standard sets BTC at $0.00076"
    ]
  }
]

export default function BitcoinPage() {
  const [isTimelineExpanded, setIsTimelineExpanded] = useState(false);
  
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

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-12"
        >
          <div className="relative p-4 border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <video 
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay 
                loop 
                controls
                playsInline
                onError={(e) => {
                  const target = e.target as HTMLVideoElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML += `
                      <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black/90">
                        <div class="text-center p-8">
                          <p class="text-yellow-500 text-xl mb-4">Video Loading...</p>
                          <p class="text-white/60">Please ensure aha_moment_bitcoin.mp4 is in the public/visuals directory</p>
                        </div>
                      </div>
                    `;
                  }
                }}
              >
                <source src="/visuals/aha_moment_bitcoin.mp4" type="video/mp4" />
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black/90">
                  <div className="text-center p-8">
                    <p className="text-yellow-500 text-xl mb-4">Video Not Available</p>
                    <p className="text-white/60">Please ensure video file is in the public/visuals directory</p>
                  </div>
                </div>
              </video>
            </div>
          </div>
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
                    Bitcoin is a decentralized digital currency created in 2009 by the pseudonymous Satoshi Nakamoto. It operates on a peer-to-peer network without the need for intermediaries, revolutionizing the concept of money. Key features include:
                    <ul className="mt-4 list-disc pl-4 space-y-2">
                      <li>Supply of 21 million BTC - mathematically enforced scarcity</li>
                      <li>Transparent transaction ledger secured by 400K+ nodes</li>
                      <li>Secured by proof-of-work consensus with 400+ EH/s hash rate</li>
                      <li>Global, borderless transactions processed 24/7/365</li>
                      <li>Self-custodial ownership with cryptographic security</li>
                      <li>10-minute block time with 7 transactions per second</li>
                      <li>Layer 2 scaling solutions enabling millions of transactions</li>
                    </ul>
                  </AccordionItem>
                  
                  <AccordionItem title="Bitcoin&apos;s Role in MSTY">
                    Bitcoin&apos;s price movements directly affect MSTY through MicroStrategy&apos;s significant Bitcoin holdings:
                    <ul className="mt-4 list-disc pl-4 space-y-2">
                      <li>MSTR stock price correlation with Bitcoin exceeds 0.9 correlation coefficient</li>
                      <li>Impact on MSTY options premiums through volatility dynamics</li>
                      <li>Strategic influence on delta-neutral trading opportunities</li>
                      <li>Volatility skew considerations in options pricing</li>
                      <li>Institutional holding patterns affect liquidity profiles</li>
                      <li>Arbitrage opportunities between MSTR and BTC markets</li>
                      <li>Leverage and margin considerations for position sizing</li>
                    </ul>
                  </AccordionItem>

                  <AccordionItem title="Market Dynamics">
                    Understanding Bitcoin market dynamics is crucial for MSTY traders:
                    <ul className="mt-4 list-disc pl-4 space-y-2">
                      <li>24/7 global trading across all major exchanges</li>
                      <li>Average daily volume exceeding $25 billion</li>
                      <li>Institutional vs retail flow analysis</li>
                      <li>On-chain metrics for market intelligence</li>
                      <li>Derivatives market impact on spot prices</li>
                      <li>Regulatory developments across jurisdictions</li>
                      <li>Macro correlation patterns with traditional markets</li>
                    </ul>
                  </AccordionItem>

                  <AccordionItem title="Technical Architecture">
                    Bitcoin&apos;s technical foundation ensures security and reliability:
                    <ul className="mt-4 list-disc pl-4 space-y-2">
                      <li>SHA-256 cryptographic security backbone</li>
                      <li>Decentralized network of 15,000+ listening nodes</li>
                      <li>Multi-signature and time-lock capabilities</li>
                      <li>Lightning Network for instant payments</li>
                      <li>Taproot upgrade for enhanced privacy</li>
                      <li>SegWit adoption exceeding 80% of transactions</li>
                      <li>Regular protocol improvements via soft forks</li>
                    </ul>
                  </AccordionItem>

                  <AccordionItem title="Investment Thesis">
                    The case for Bitcoin as a strategic asset:
                    <ul className="mt-4 list-disc pl-4 space-y-2">
                      <li>Digital gold narrative with fixed supply economics</li>
                      <li>Network effect driving exponential adoption</li>
                      <li>Institutional acceptance as treasury reserve asset</li>
                      <li>Portfolio diversification benefits</li>
                      <li>Asymmetric return potential</li>
                      <li>Sovereign wealth fund allocation potential</li>
                      <li>Central bank digital currency hedge</li>
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
                  {(isTimelineExpanded ? keyEvents : keyEvents.slice(0, 3)).map((period) => (
                    <motion.div
                      key={period.year}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="relative pl-8"
                    >
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
                    </motion.div>
                  ))}
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="flex justify-center mt-6"
                  >
                    <button
                      onClick={() => setIsTimelineExpanded(!isTimelineExpanded)}
                      className="group px-4 py-2 text-sm font-semibold text-yellow-500 border border-yellow-500/20 rounded-lg hover:bg-yellow-500/10 transition-colors flex items-center space-x-2"
                    >
                      <span>{isTimelineExpanded ? 'Show Less' : 'Show Full Timeline'}</span>
                      <ChevronDown
                        className={cn('h-4 w-4 transition-transform', {
                          '-rotate-180': isTimelineExpanded,
                        })}
                      />
                    </button>
                  </motion.div>
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
                    Updated April 16, 2025
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
                          Major financial institutions and corporations now hold Bitcoin as a treasury reserve asset, with MicroStrategy leading the charge with over 531,644 BTC. By 2025, 83% of institutional investors plan to increase crypto allocations, signaling Bitcoin&apos;s growing acceptance as a strategic asset class. A Fidelity survey in 2023 found 58% of institutional investors owned digital assets, with Bitcoin being the top choice.
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