'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, Clock, Shield, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

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
        <span className="text-xl font-medium">{title}</span>
        <ChevronDown
          className={cn('h-6 w-6 transition-transform', {
            '-rotate-180': isOpen,
          })}
        />
      </button>
      {isOpen && (
        <div className="pb-4 text-gray-300">
          {children}
        </div>
      )}
    </div>
  )
}

const marketStats = [
  {
    title: "Market Cap",
    value: "$1.2T+",
    description: "Total Bitcoin market capitalization"
  },
  {
    title: "24h Volume",
    value: "$25B+",
    description: "Daily trading volume"
  },
  {
    title: "Dominance",
    value: "50%+",
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
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="font-epilogue text-4xl font-bold tracking-tight sm:text-6xl">
            Bitcoin & MSTY
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
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
              className="rounded-2xl bg-gray-800/50 p-6 text-center"
            >
              <h3 className="text-lg font-medium text-gray-400">{stat.title}</h3>
              <p className="mt-2 text-3xl font-bold text-yellow-500">{stat.value}</p>
              <p className="mt-1 text-sm text-gray-400">{stat.description}</p>
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
            className="rounded-2xl bg-gray-800/50 p-8"
          >
            <h2 className="text-2xl font-bold">Bitcoin Fundamentals</h2>
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
          </motion.div>

          {/* Timeline and Events */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="rounded-2xl bg-gray-800/50 p-8"
          >
            <h2 className="text-2xl font-bold">Key Events & Timeline</h2>
            <div className="mt-8 space-y-8">
              {keyEvents.map((period) => (
                <div key={period.year} className="relative pl-8">
                  <div className="absolute left-0 top-0 h-full w-px bg-yellow-500/20" />
                  <div className="absolute left-[-4px] top-2 h-2 w-2 rounded-full bg-yellow-500" />
                  <h3 className="text-xl font-bold text-yellow-500">{period.year}</h3>
                  <ul className="mt-4 space-y-3">
                    {period.events.map((event, index) => (
                      <li key={index} className="text-gray-300">
                        {event}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Trading Implications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 rounded-2xl bg-gray-800/50 p-8"
        >
          <h2 className="text-2xl font-bold">Trading Implications</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <TrendingUp className="h-12 w-12 text-yellow-500" />
              <h3 className="mt-4 text-xl font-bold">Price Action</h3>
              <p className="mt-2 text-gray-300">
                Bitcoin price movements create opportunities in MSTY options trading through their impact on MSTR stock.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Clock className="h-12 w-12 text-yellow-500" />
              <h3 className="mt-4 text-xl font-bold">Timing</h3>
              <p className="mt-2 text-gray-300">
                Key Bitcoin events and market cycles can influence optimal entry and exit points for MSTY positions.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Shield className="h-12 w-12 text-yellow-500" />
              <h3 className="mt-4 text-xl font-bold">Risk Management</h3>
              <p className="mt-2 text-gray-300">
                Understanding Bitcoin volatility is crucial for managing risk in MSTY options strategies.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 