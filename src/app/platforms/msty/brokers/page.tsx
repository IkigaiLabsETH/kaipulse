'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Filter, MapPin } from 'lucide-react'
import { Card } from "@/components/ui/card"

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
    website: "https://open.tastytrade.com/signup?referralCode=EVDX34J82A",
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
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="font-epilogue text-4xl font-bold tracking-tight sm:text-6xl text-yellow-500">
            European MSTY Brokers
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/90">
            Find regulated European brokers offering access to UCITS ETFs including MSTY
          </p>
        </motion.div>

        {/* Search and Filter */}
        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-yellow-500" />
            <input
              type="text"
              placeholder="Search brokers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-[#1c1f26] border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-yellow-500" />
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="bg-[#1c1f26] border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] text-white py-2 px-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              <option value="All Regions">All Regions</option>
              {Object.keys(countryGroups).map(region => (
                <option key={region} value={region}>{region}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Broker Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredBrokers.map((broker) => (
            <motion.div
              key={broker.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card>
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white">{broker.name}</h3>
                      <div className="flex items-center mt-1">
                        <MapPin className="h-4 w-4 text-yellow-500 mr-1" />
                        <p className="text-white/80 text-sm">{broker.countries[0]}{broker.countries.length > 1 ? ` +${broker.countries.length - 1}` : ''}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-yellow-500 font-bold">{broker.rating}/5.0</div>
                      <div className="text-white/60 text-sm">Rating</div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="text-white/90 font-medium mb-2">Key Features:</div>
                    <ul className="text-white/80 text-sm space-y-1">
                      {broker.features.slice(0, 3).map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-white/80">Trading Fee:</span>
                      <span className="text-white font-medium">{broker.fees.trading}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/80">Min Deposit:</span>
                      <span className="text-white font-medium">{broker.minDeposit}</span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <a
                      href={broker.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center py-2 px-4 bg-[#1c1f26] border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] text-white hover:bg-yellow-500 hover:text-black transition-all duration-300"
                    >
                      Visit Website
                    </a>
                  </div>

                  <div className="mt-4 text-center">
                    <p className="text-white/60 text-sm">
                      Regulated by: {broker.regulators.join(', ')}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredBrokers.length === 0 && (
          <div className="text-center mt-12">
            <p className="text-white/90 text-lg">No brokers found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  )
} 