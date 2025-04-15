'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

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

const brokers = [
  {
    name: "YieldMax UCITS ETF",
    score: 4.8,
    pros: [
      "Official MSTY provider in Europe",
      "UCITS fund structure for EU investors",
      "Monthly income distributions",
      "Professional management"
    ],
    fees: "Management fee: 0.99%",
    minDeposit: "Check with your local broker",
    link: "https://www.yieldmaxetfs.com"
  },
  {
    name: "European Brokers",
    score: 4.5,
    pros: [
      "Access through local European brokers",
      "EU regulated trading environment",
      "Local customer support",
      "Familiar trading platforms"
    ],
    fees: "Varies by broker",
    minDeposit: "Varies by broker",
    link: "#broker-list"
  }
]

export default function MSTYPlatformsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="font-epilogue text-4xl font-bold tracking-tight sm:text-6xl">
            MSTY Trading in Europe
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Access the Yieldmax MSTR Option Income Strategy ETF (MSTY) through YieldMax&apos;s official European UCITS fund structure.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-1">
          {brokers.map((broker, index) => (
            <motion.div
              key={broker.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-2xl bg-gray-800/50 p-8 shadow-lg hover:bg-gray-800/70 transition-colors"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold">{broker.name}</h3>
                <span className="rounded-full bg-yellow-500 px-3 py-1 text-sm font-semibold text-black">
                  Score: {broker.score}
                </span>
              </div>
              <ul className="mt-6 space-y-2">
                {broker.pros.map((pro) => (
                  <li key={pro} className="flex items-center text-gray-300">
                    <span className="mr-2">•</span>
                    {pro}
                  </li>
                ))}
              </ul>
              <div className="mt-6 space-y-2 text-gray-300">
                <p>Fees: {broker.fees}</p>
                <p>Minimum Deposit: {broker.minDeposit}</p>
              </div>
              <a
                href={broker.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block rounded-lg bg-yellow-500 px-4 py-2 text-sm font-semibold text-black hover:bg-yellow-400 transition-colors"
              >
                Visit Official Site
              </a>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl bg-gray-800/50 p-8">
          <h2 className="text-2xl font-bold">How to Trade MSTY in Europe</h2>
          <div className="mt-8 space-y-4">
            <AccordionItem title="1. Understanding MSTY in Europe">
              MSTY is now available to European investors through YieldMax&apos;s UCITS fund structure. This provides EU investors with a regulated way to access MSTY&apos;s option income strategy while maintaining compliance with European regulations.
            </AccordionItem>
            <AccordionItem title="2. Finding a Local Broker">
              To trade MSTY in Europe, follow these steps:
              <ul className="list-disc pl-4 space-y-2 mt-4">
                <li>Contact your existing broker to check if they offer access to YieldMax UCITS ETFs</li>
                <li>Research local brokers in your country that offer US ETF trading through UCITS structures</li>
                <li>Compare trading fees, platform features, and customer support options</li>
                <li>Ensure the broker is properly regulated in your jurisdiction</li>
              </ul>
            </AccordionItem>
            <AccordionItem title="3. Important Considerations">
              <ul className="list-disc pl-4 space-y-2">
                <li>UCITS funds provide strong investor protections under EU regulations</li>
                <li>Monthly distributions may be available (subject to fund performance)</li>
                <li>Consider the management fee and any local broker fees</li>
                <li>Understand the risks associated with options-based strategies</li>
                <li>Check with multiple brokers as availability may vary by country</li>
              </ul>
            </AccordionItem>
          </div>
        </div>
      </div>
    </div>
  )
} 