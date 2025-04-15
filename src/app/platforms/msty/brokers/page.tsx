'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Filter, MapPin } from 'lucide-react'
import Link from 'next/link'

interface Broker {
  name: string
  countries: string[]
  features: string[]
  ucitsAccess: boolean
  fees: {
    trading: string
    custody: string
    inactivity?: string
  }
  minDeposit: string
  rating: number
  website: string
  regulators: string[]
}

const brokers: Broker[] = [
  {
    name: "tastytrade",
    countries: ["France", "Germany", "UK", "Netherlands", "Spain", "Italy", "Other EU countries"],
    features: [
      "Low fees for US options",
      "Great educational content",
      "Wide range of available options",
      "Excellent platform for options trading"
    ],
    ucitsAccess: true,
    fees: {
      trading: "$5.0 per 10 contracts",
      custody: "Free",
      inactivity: "None"
    },
    minDeposit: "$0",
    rating: 4.8,
    website: "https://www.tastytrade.com",
    regulators: ["SEC", "FINRA"]
  },
  {
    name: "Interactive Brokers",
    countries: ["All EEA countries"],
    features: [
      "Low fees for US options",
      "Vast number of available options",
      "Great research tools",
      "Global market access"
    ],
    ucitsAccess: true,
    fees: {
      trading: "$6.5 per 10 contracts",
      custody: "Free",
      inactivity: "$0"
    },
    minDeposit: "$0",
    rating: 4.6,
    website: "https://www.interactivebrokers.com",
    regulators: ["SEC", "FCA", "CySEC"]
  },
  {
    name: "Saxo Bank",
    countries: ["All EEA countries"],
    features: [
      "Vast number of available options",
      "Exceptionally good trading platform",
      "Great research tools",
      "Premium service"
    ],
    ucitsAccess: true,
    fees: {
      trading: "$20.0 per 10 contracts",
      custody: "0.12% annually",
      inactivity: "None"
    },
    minDeposit: "$0",
    rating: 4.2,
    website: "https://www.home.saxo",
    regulators: ["Danish FSA", "FCA", "MAS"]
  },
  {
    name: "TradeZero",
    countries: ["Most EU countries"],
    features: [
      "Low fees for US options",
      "Seamless account opening",
      "Great customer service",
      "Direct market access"
    ],
    ucitsAccess: true,
    fees: {
      trading: "$5.9 per 10 contracts",
      custody: "Free",
      inactivity: "None"
    },
    minDeposit: "$250",
    rating: 4.2,
    website: "https://www.tradezero.co",
    regulators: ["SEC", "FINRA"]
  },
  {
    name: "MEXEM",
    countries: ["Most EU countries"],
    features: [
      "Wide range of available options",
      "Seamless account opening",
      "Great charting tools",
      "Competitive pricing"
    ],
    ucitsAccess: true,
    fees: {
      trading: "$20.0 per 10 contracts",
      custody: "Free",
      inactivity: "None"
    },
    minDeposit: "$0",
    rating: 3.7,
    website: "https://www.mexem.com",
    regulators: ["CySEC"]
  },
  {
    name: "Swissquote",
    countries: ["Switzerland", "All EU countries"],
    features: [
      "Great research tools",
      "No inactivity fee",
      "Rock-solid background",
      "Premium Swiss service"
    ],
    ucitsAccess: true,
    fees: {
      trading: "$15.0 per 10 contracts",
      custody: "0.025% quarterly",
      inactivity: "None"
    },
    minDeposit: "$0",
    rating: 3.6,
    website: "https://www.swissquote.com",
    regulators: ["FINMA", "MAS", "DFSA"]
  },
  {
    name: "TradeStation",
    countries: ["Selected EU countries"],
    features: [
      "Wide range of available options",
      "Great charting tools",
      "High quality educational content",
      "Professional platform"
    ],
    ucitsAccess: true,
    fees: {
      trading: "$11.0 per 10 contracts",
      custody: "Free",
      inactivity: "None"
    },
    minDeposit: "$0",
    rating: 3.6,
    website: "https://www.tradestation.com",
    regulators: ["SEC", "FINRA"]
  },
  {
    name: "LYNX",
    countries: ["Netherlands", "Belgium", "Germany", "France", "Other EU countries"],
    features: [
      "Wide range of markets and products",
      "Low stock and ETF trading fees",
      "Great research tools",
      "Interest on cash"
    ],
    ucitsAccess: true,
    fees: {
      trading: "$24.0 per 10 contracts",
      custody: "Free",
      inactivity: "None"
    },
    minDeposit: "$0",
    rating: 3.5,
    website: "https://www.lynx.com",
    regulators: ["AFM", "BaFin"]
  },
  {
    name: "Firstrade",
    countries: ["Most EU countries"],
    features: [
      "Free stock and options trading",
      "Solid research tools",
      "Quality educational tools",
      "Commission-free trading"
    ],
    ucitsAccess: true,
    fees: {
      trading: "$0.0 per 10 contracts",
      custody: "Free",
      inactivity: "None"
    },
    minDeposit: "$0",
    rating: 3.5,
    website: "https://www.firstrade.com",
    regulators: ["SEC", "FINRA"]
  }
]

const countryGroups = {
  "Western Europe": ["France", "Germany", "Netherlands", "Belgium", "Luxembourg"],
  "Northern Europe": ["Sweden", "Denmark", "Norway", "Finland"],
  "Southern Europe": ["Italy", "Spain", "Portugal", "Greece"],
  "Central Europe": ["Austria", "Switzerland", "Czech Republic", "Poland", "Hungary"],
  "British Isles": ["Ireland", "United Kingdom"]
}

export default function BrokersPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedRegion, setSelectedRegion] = useState<string>('All Regions')
  
  const filteredBrokers = brokers.filter(broker => {
    const matchesSearch = broker.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesRegion = selectedRegion === 'All Regions' || 
      broker.countries.some(country => 
        Object.entries(countryGroups).find(([region, countries]) => 
          region === selectedRegion && countries.includes(country)
        )
      )
    return matchesSearch && matchesRegion
  })

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Link href="/" className="text-yellow-400 font-bold text-lg mb-8 inline-block">&larr; Back to Home</Link>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="font-epilogue text-4xl font-bold tracking-tight sm:text-6xl">
            European MSTY Brokers
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Find regulated European brokers offering access to UCITS ETFs including MSTY
          </p>
        </motion.div>

        {/* Search and Filter */}
        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search brokers..."
              className="w-full rounded-lg bg-gray-800 py-2 pl-10 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-gray-400" />
            <select
              className="rounded-lg bg-gray-800 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
            >
              <option>All Regions</option>
              {Object.keys(countryGroups).map(region => (
                <option key={region}>{region}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Broker Cards */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredBrokers.map((broker, index) => (
            <motion.div
              key={broker.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl bg-gray-800/50 p-6 hover:bg-gray-800/70 transition-colors"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">{broker.name}</h3>
                <span className="rounded-full bg-yellow-500 px-3 py-1 text-sm font-semibold text-black">
                  {broker.rating.toFixed(1)}
                </span>
              </div>

              <div className="mt-4 flex items-start gap-2 text-sm text-gray-400">
                <MapPin className="h-4 w-4 shrink-0" />
                <span>{broker.countries.length > 3 
                  ? `Available in ${broker.countries.length} countries` 
                  : broker.countries.join(', ')}
                </span>
              </div>

              <ul className="mt-4 space-y-2">
                {broker.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-300">
                    <span className="mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-4 space-y-2 text-sm">
                <p><span className="text-gray-400">Trading Fees:</span> {broker.fees.trading}</p>
                <p><span className="text-gray-400">Custody Fees:</span> {broker.fees.custody}</p>
                <p><span className="text-gray-400">Min Deposit:</span> {broker.minDeposit}</p>
              </div>

              <div className="mt-4 text-xs text-gray-400">
                Regulated by: {broker.regulators.join(', ')}
              </div>

              <a
                href={broker.website}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block w-full rounded-lg bg-yellow-500 px-4 py-2 text-center text-sm font-semibold text-black hover:bg-yellow-400 transition-colors"
              >
                Visit Website
              </a>
            </motion.div>
          ))}
        </div>

        {/* Important Notice */}
        <div className="mt-16 rounded-2xl bg-gray-800/50 p-8">
          <h2 className="text-2xl font-bold">Important Information</h2>
          <div className="mt-4 space-y-4 text-gray-300">
            <p>
              The brokers listed above provide access to UCITS ETFs in Europe. While they may offer access to YieldMax UCITS ETFs, 
              availability of specific ETFs may vary by country and is subject to local regulations. Please:
            </p>
            <ul className="list-disc pl-4 space-y-2">
              <li>Contact the broker directly to confirm MSTY availability in your country</li>
              <li>Review all fees and account requirements before opening an account</li>
              <li>Ensure the broker is properly regulated in your jurisdiction</li>
              <li>Consider consulting with a financial advisor about suitability</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
} 