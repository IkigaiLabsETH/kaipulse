'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Database, Coins, BarChart2, ChevronDown } from 'lucide-react'
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

const companyStats = [
  {
    title: "Bitcoin Holdings",
    value: "190,000+",
    description: "Total BTC owned"
  },
  {
    title: "Avg Purchase Price",
    value: "$30,000",
    description: "Per Bitcoin"
  },
  {
    title: "Market Cap",
    value: "$15B+",
    description: "Company valuation"
  },
  {
    title: "BTC % of Assets",
    value: "95%+",
    description: "Of total assets"
  }
]

const businessSegments = [
  {
    name: "Enterprise Analytics",
    description: "MicroStrategy's core business software and analytics platform",
    details: [
      "Business intelligence solutions",
      "Enterprise analytics platform",
      "Mobile analytics",
      "Cloud services"
    ]
  },
  {
    name: "Bitcoin Strategy",
    description: "Corporate Bitcoin acquisition and holding strategy",
    details: [
      "Bitcoin treasury reserve",
      "Regular BTC acquisitions",
      "Secured financing",
      "Long-term holding"
    ]
  }
]

export default function MSTRPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Navigation */}
        <div className="mb-8">
          <Link 
            href="/" 
            className="text-yellow-500 hover:text-yellow-400 transition-colors"
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
          <h1 className="font-epilogue text-4xl font-bold tracking-tight sm:text-6xl">
            MicroStrategy & MSTY
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Understanding MicroStrategy&apos;s business model and its impact on MSTY performance
          </p>
        </motion.div>

        {/* Company Stats */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {companyStats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <h3 className="text-lg font-medium text-white/80">{stat.title}</h3>
                <p className="mt-2 text-3xl font-bold text-yellow-500">{stat.value}</p>
                <p className="mt-1 text-sm text-white/70">{stat.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Main Content */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Business Overview */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-2xl bg-[#1c1f26] p-8 border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]"
          >
            <h2 className="text-2xl font-bold text-yellow-500">Business Overview</h2>
            <div className="mt-8 space-y-4">
              {businessSegments.map((segment) => (
                <AccordionItem key={segment.name} title={segment.name}>
                  <p className="mb-4 text-white/90">{segment.description}</p>
                  <ul className="list-disc pl-4 space-y-2 text-white/80">
                    {segment.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                </AccordionItem>
              ))}
            </div>
          </motion.div>

          {/* MSTY Connection */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="rounded-2xl bg-[#1c1f26] p-8 border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]"
          >
            <h2 className="text-2xl font-bold text-yellow-500">MSTY Connection</h2>
            <div className="mt-8 space-y-4">
              <AccordionItem title="Stock Price Drivers">
                Key factors affecting MSTR stock price:
                <ul className="mt-4 list-disc pl-4 space-y-2 text-white/90">
                  <li>Bitcoin price movements</li>
                  <li>Enterprise software revenue</li>
                  <li>Bitcoin acquisition strategy</li>
                  <li>Market sentiment</li>
                </ul>
              </AccordionItem>

              <AccordionItem title="Options Strategy">
                How MSTY generates income from MSTR options:
                <ul className="mt-4 list-disc pl-4 space-y-2 text-white/90">
                  <li>Covered call writing</li>
                  <li>Premium collection strategy</li>
                  <li>Strike price selection</li>
                  <li>Expiration management</li>
                </ul>
              </AccordionItem>

              <AccordionItem title="Risk Factors">
                Key risks to consider:
                <ul className="mt-4 list-disc pl-4 space-y-2 text-white/90">
                  <li>Bitcoin price volatility</li>
                  <li>Regulatory environment</li>
                  <li>Software business performance</li>
                  <li>Market conditions</li>
                </ul>
              </AccordionItem>
            </div>
          </motion.div>
        </div>

        {/* Investment Considerations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 rounded-2xl bg-[#1c1f26] p-8 border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]"
        >
          <h2 className="text-2xl font-bold text-yellow-500">Investment Considerations</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <Database className="h-12 w-12 text-yellow-500" />
              <h3 className="mt-4 text-xl font-bold text-white">Core Business</h3>
              <p className="mt-2 text-white/90">
                Enterprise analytics software provides stable revenue stream and operational foundation.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Coins className="h-12 w-12 text-yellow-500" />
              <h3 className="mt-4 text-xl font-bold text-white">Bitcoin Strategy</h3>
              <p className="mt-2 text-white/90">
                Significant Bitcoin holdings make MSTR a proxy for Bitcoin exposure with additional upside.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <BarChart2 className="h-12 w-12 text-yellow-500" />
              <h3 className="mt-4 text-xl font-bold text-white">MSTY Dynamics</h3>
              <p className="mt-2 text-white/90">
                Options strategy provides income potential while maintaining exposure to MSTR upside.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 