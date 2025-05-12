'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Card } from "@/components/ui/card"
import Image from 'next/image'

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
    title: "Capital Raise",
    value: "$710M",
    description: "$ Raised (PIPE + Convertible Notes)"
  },
  {
    title: "PIPE Financing",
    value: "$510M",
    description: "Private placement in public equity"
  },
  {
    title: "Convertible Notes",
    value: "$200M",
    description: "Senior secured notes maturing 2028"
  },
  {
    title: "Share Price",
    value: "$1.12",
    description: "PIPE financing price per share"
  }
]

const businessSegments = [
  {
    name: "Bitcoin Treasury",
    description: "Corporate Bitcoin acquisition and holding strategy",
    details: [
      "Public market exposure to Bitcoin",
      "Compliant and transparent structure",
      "Bitcoin accumulation strategy",
      "Bitcoin Yield per share focus",
      "Strategic use of equity and debt",
      "Global capital markets integration"
    ]
  },
  {
    name: "Healthcare Services",
    description: "Patient-first healthcare and data analytics",
    details: [
      "Integrated healthcare services",
      "Opioid crisis combat initiatives",
      "Data-driven patient care",
      "Mental health integration",
      "Alternative medicine education",
      "Insurance and Medicare coverage"
    ]
  }
]

const leadershipTeam = [
  {
    name: "David Bailey",
    role: "Founder & CEO",
    description: "Visionary leader in the Bitcoin ecosystem. Founder of BTC Inc and UTXO Management. Leading advocate for hyperbitcoinization and Bitcoin treasury adoption.",
    keyPoints: [
      "Founder of BTC Inc",
      "General Partner at UTXO Management",
      "Bitcoin Conference organizer",
      "Bitcoin treasury strategy pioneer"
    ]
  },
  {
    name: "Tim Pickett",
    role: "Healthcare Operations CEO",
    description: "Manages KindlyMD's healthcare operations, focusing on innovative patient care and opioid crisis solutions.",
    keyPoints: [
      "Patient-first healthcare approach",
      "Data-driven care solutions",
      "Opioid reduction initiatives",
      "Healthcare innovation leader"
    ]
  }
]

const mergerTimeline = [
  {
    date: "May 2025",
    event: "Merger Announcement",
    details: "Nakamoto and KindlyMD announce definitive merger agreement"
  },
  {
    date: "May 2025",
    event: "Capital Raise",
    details: "$710M total ($510M PIPE + $200M Convertible Notes)"
  },
  {
    date: "May 2025",
    event: "Investor Participation",
    details: "200+ investors across six continents"
  },
  {
    date: "Future",
    event: "Bitcoin 2025 Conference",
    details: "Next major update planned"
  }
]

export default function NakamotoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      {/* Premium header accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 pt-24 pb-4 relative">
        <div className="mb-16 relative z-10 text-center">
          <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">Bitcoin Treasury • Healthcare • Global Capital Markets</p>
          <h1 className="text-center">
            <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
              NAKAMOTO INC.
            </span>
          </h1>
          <div className="flex items-center justify-center mt-6">
            <div className="h-px w-24 bg-yellow-500/30"></div>
            <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">Establishing a Bitcoin standard across global capital markets</p>
            <div className="h-px w-24 bg-yellow-500/30"></div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Featured Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative mb-16"
        >
          <div className="border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] bg-black/90 rounded-none">
            <div className="relative aspect-video w-full">
              <Image
                src="/nakamoto.jpg"
                alt="Nakamoto Bitcoin Treasury Strategy"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
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
              <Card className="border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] rounded-none">
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
            className="bg-[#1c1f26] p-8 border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] rounded-none"
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
            className="bg-[#1c1f26] p-8 border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] rounded-none"
          >
            <h2 className="text-2xl font-bold text-yellow-500">Leadership Team</h2>
            <div className="mt-8 space-y-4">
              {leadershipTeam.map((leader) => (
                <AccordionItem key={leader.name} title={leader.name}>
                  <p className="mb-4 text-white/90">{leader.description}</p>
                  <ul className="list-disc pl-4 space-y-2 text-white/80">
                    {leader.keyPoints.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </AccordionItem>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Merger Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 bg-[#1c1f26] p-8 border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] rounded-none"
        >
          <h2 className="text-2xl font-bold text-yellow-500">Merger Timeline</h2>
          <div className="mt-8 space-y-4">
            {mergerTimeline.map((event) => (
              <AccordionItem key={event.date} title={`${event.date} - ${event.event}`}>
                <p className="text-white/90">{event.details}</p>
              </AccordionItem>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
