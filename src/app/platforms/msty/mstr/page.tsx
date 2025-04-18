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
    value: "499,226",
    description: "Total BTC owned (as of March 2025)"
  },
  {
    title: "Avg Purchase Price",
    value: "$66,360",
    description: "Per Bitcoin (as of March 2025)"
  },
  {
    title: "Total Investment",
    value: "$33.1B",
    description: "Total cost basis in Bitcoin"
  },
  {
    title: "BTC % of Assets",
    value: "90%+",
    description: "Of total assets"
  }
]

const businessSegments = [
  {
    name: "Enterprise Analytics",
    description: "MicroStrategy's core business intelligence and analytics platform",
    details: [
      "Business intelligence solutions for Fortune 500 companies",
      "Enterprise analytics platform with AI integration",
      "Mobile analytics and cloud services",
      "HyperIntelligence contextual insights",
      "MicroStrategy ONE consolidated platform",
      "Natural language querying with OpenAI integration"
    ]
  },
  {
    name: "Bitcoin Strategy",
    description: "Corporate Bitcoin acquisition and holding strategy",
    details: [
      "World's largest corporate Bitcoin holder",
      "Primary treasury reserve asset since 2020",
      "Long-term holding strategy with no plans to sell",
      "Strategic use of debt and equity financing",
      "Bitcoin Lightning Network R&D",
      "Corporate Bitcoin advocacy and education"
    ]
  }
]

const leadershipTeam = [
  {
    name: "Michael J. Saylor",
    role: "Executive Chairman & Co-Founder",
    description: "Visionary leader and Bitcoin evangelist. Founded MicroStrategy in 1989 and led the company's Bitcoin strategy since 2020. Author of 'The Mobile Wave' and holder of multiple patents.",
    keyPoints: [
      "Personal holder of ~17,000 BTC",
      "Leading corporate Bitcoin adoption advocate",
      "Hosts 'Bitcoin for Corporations' events",
      "Focuses on long-term Bitcoin strategy"
    ]
  },
  {
    name: "Phong Le",
    role: "Chief Executive Officer & President",
    description: "Manages day-to-day operations and software business. Previously served as CFO and President. Focuses on growing the core BI business while supporting Bitcoin strategy.",
    keyPoints: [
      "Drives cloud business growth",
      "Maintains operational discipline",
      "Oversees product innovation",
      "Balances dual business objectives"
    ]
  },
  {
    name: "Andrew Kang",
    role: "Chief Financial Officer",
    description: "Manages treasury operations and capital structure. Oversees Bitcoin acquisitions and financing strategies.",
    keyPoints: [
      "Handles Bitcoin custody and security",
      "Manages capital market transactions",
      "Optimizes debt and equity financing",
      "Ensures regulatory compliance"
    ]
  }
]

const bitcoinTimeline = [
  {
    date: "August 2020",
    event: "Initial Bitcoin Purchase",
    details: "21,454 BTC for $250M (avg $11,650/BTC)"
  },
  {
    date: "December 2020",
    event: "First Convertible Note",
    details: "$650M at 0.75% coupon, used to buy 29,646 BTC"
  },
  {
    date: "February 2021",
    event: "Zero-Coupon Convertible",
    details: "$1.05B convertible note, added 19,452 BTC"
  },
  {
    date: "August 2022",
    event: "Leadership Transition",
    details: "Saylor becomes Executive Chairman, Le becomes CEO"
  },
  {
    date: "August 2024",
    event: "Stock Split & 21/21 Plan",
    details: "10-for-1 split and $42B capital plan announced"
  },
  {
    date: "March 2025",
    event: "Current Holdings",
    details: "499,226 BTC at $33.1B total cost"
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

          {/* Leadership Team */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="rounded-2xl bg-[#1c1f26] p-8 border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]"
          >
            <h2 className="text-2xl font-bold text-yellow-500">Leadership Team</h2>
            <div className="mt-8 space-y-4">
              {leadershipTeam.map((leader) => (
                <AccordionItem key={leader.name} title={leader.name}>
                  <p className="text-lg font-medium text-yellow-500">{leader.role}</p>
                  <p className="mt-2 text-white/90">{leader.description}</p>
                  <ul className="mt-4 list-disc pl-4 space-y-2 text-white/80">
                    {leader.keyPoints.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </AccordionItem>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bitcoin Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 rounded-2xl bg-[#1c1f26] p-8 border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]"
        >
          <h2 className="text-2xl font-bold text-yellow-500">Bitcoin Acquisition Timeline</h2>
          <div className="mt-8 space-y-4">
            {bitcoinTimeline.map((event, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-32 flex-shrink-0">
                  <p className="text-yellow-500 font-medium">{event.date}</p>
                </div>
                <div>
                  <p className="text-white font-medium">{event.event}</p>
                  <p className="text-white/80">{event.details}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* MSTY Connection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 rounded-2xl bg-[#1c1f26] p-8 border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]"
        >
          <h2 className="text-2xl font-bold text-yellow-500">MSTY Connection</h2>
          <div className="mt-8 space-y-4">
            <AccordionItem title="Stock Price Drivers">
              <p className="mb-4 text-white/90">Key factors affecting MSTR stock price:</p>
              <ul className="list-disc pl-4 space-y-2 text-white/90">
                <li>Bitcoin price movements and market sentiment</li>
                <li>Enterprise software revenue and growth</li>
                <li>Bitcoin acquisition strategy and execution</li>
                <li>Capital structure and financing decisions</li>
                <li>Regulatory environment and institutional adoption</li>
                <li>Macroeconomic conditions and inflation</li>
              </ul>
            </AccordionItem>

            <AccordionItem title="Options Strategy">
              <p className="mb-4 text-white/90">How MSTY generates income from MSTR options:</p>
              <ul className="list-disc pl-4 space-y-2 text-white/90">
                <li>Covered call writing on MSTR shares</li>
                <li>Strategic premium collection based on volatility</li>
                <li>Careful strike price selection for optimal returns</li>
                <li>Active expiration management and roll strategies</li>
                <li>Risk management through position sizing</li>
                <li>Capital efficiency through leverage</li>
              </ul>
            </AccordionItem>

            <AccordionItem title="Risk Factors">
              <p className="mb-4 text-white/90">Key risks to consider:</p>
              <ul className="list-disc pl-4 space-y-2 text-white/90">
                <li>Bitcoin price volatility and market cycles</li>
                <li>Regulatory environment and compliance</li>
                <li>Software business performance and competition</li>
                <li>Capital structure and debt obligations</li>
                <li>Share dilution from equity issuance</li>
                <li>Macroeconomic conditions and interest rates</li>
                <li>Technological risks and security concerns</li>
                <li>Management succession and key person risk</li>
              </ul>
            </AccordionItem>
          </div>
        </motion.div>

        {/* Investment Considerations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 rounded-2xl bg-[#1c1f26] p-8 border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]"
        >
          <h2 className="text-2xl font-bold text-yellow-500">Investment Considerations</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <Database className="h-12 w-12 text-yellow-500" />
              <h3 className="mt-4 text-xl font-bold text-white">Core Business</h3>
              <p className="mt-2 text-white/90">
                Enterprise analytics software provides stable revenue stream and operational foundation. Growing subscription revenue and AI integration offer additional upside.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Coins className="h-12 w-12 text-yellow-500" />
              <h3 className="mt-4 text-xl font-bold text-white">Bitcoin Strategy</h3>
              <p className="mt-2 text-white/90">
                Significant Bitcoin holdings make MSTR a leveraged proxy for Bitcoin exposure. The company's aggressive accumulation strategy and long-term holding approach provide unique value.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <BarChart2 className="h-12 w-12 text-yellow-500" />
              <h3 className="mt-4 text-xl font-bold text-white">MSTY Dynamics</h3>
              <p className="mt-2 text-white/90">
                Options strategy provides income potential while maintaining exposure to MSTR upside. Careful risk management and strategic positioning enhance returns.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Additional Insights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-16 rounded-2xl bg-[#1c1f26] p-8 border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]"
        >
          <h2 className="text-2xl font-bold text-yellow-500">Additional Insights</h2>
          <div className="mt-8 space-y-4">
            <AccordionItem title="Corporate Bitcoin Adoption">
              <p className="mb-4 text-white/90">MicroStrategy's impact on corporate Bitcoin adoption:</p>
              <ul className="list-disc pl-4 space-y-2 text-white/90">
                <li>Pioneered corporate Bitcoin treasury strategy in 2020</li>
                <li>Inspired other public companies to follow suit</li>
                <li>Developed comprehensive Bitcoin adoption framework</li>
                <li>Hosts educational events for corporate adoption</li>
                <li>Provides technical guidance on custody and security</li>
                <li>Advocates for Bitcoin-friendly regulatory environment</li>
              </ul>
            </AccordionItem>

            <AccordionItem title="Technical Infrastructure">
              <p className="mb-4 text-white/90">Key technical aspects of MicroStrategy's Bitcoin operations:</p>
              <ul className="list-disc pl-4 space-y-2 text-white/90">
                <li>Multi-signature cold storage security</li>
                <li>Distributed custody across multiple providers</li>
                <li>Regular security audits and compliance checks</li>
                <li>Advanced monitoring and reporting systems</li>
                <li>Integration with enterprise security protocols</li>
                <li>Research into Lightning Network applications</li>
              </ul>
            </AccordionItem>

            <AccordionItem title="Market Impact">
              <p className="mb-4 text-white/90">MicroStrategy's influence on Bitcoin markets:</p>
              <ul className="list-disc pl-4 space-y-2 text-white/90">
                <li>Significant buyer in institutional markets</li>
                <li>Regular purchases provide consistent demand</li>
                <li>Transparent reporting sets market standards</li>
                <li>Influences corporate Bitcoin adoption trends</li>
                <li>Contributes to Bitcoin's institutional narrative</li>
                <li>Sets benchmarks for corporate Bitcoin strategies</li>
              </ul>
            </AccordionItem>

            <AccordionItem title="Future Developments">
              <p className="mb-4 text-white/90">Upcoming initiatives and potential developments:</p>
              <ul className="list-disc pl-4 space-y-2 text-white/90">
                <li>Continued Bitcoin accumulation strategy</li>
                <li>Expansion of Lightning Network research</li>
                <li>Enhanced Bitcoin corporate education programs</li>
                <li>Integration of Bitcoin into enterprise products</li>
                <li>Development of Bitcoin analytics tools</li>
                <li>Potential Bitcoin-related product offerings</li>
              </ul>
            </AccordionItem>

            <AccordionItem title="Comparative Analysis">
              <p className="mb-4 text-white/90">How MicroStrategy compares to other Bitcoin companies:</p>
              <ul className="list-disc pl-4 space-y-2 text-white/90">
                <li>Largest corporate Bitcoin holder globally</li>
                <li>Most aggressive accumulation strategy</li>
                <li>Strongest balance sheet among Bitcoin companies</li>
                <li>Most transparent reporting and disclosures</li>
                <li>Most influential in corporate adoption</li>
                <li>Most comprehensive Bitcoin strategy</li>
              </ul>
            </AccordionItem>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 