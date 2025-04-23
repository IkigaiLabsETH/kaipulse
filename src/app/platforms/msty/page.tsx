'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';
import { Card } from "@/components/ui/card";

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
    link: "/platforms/msty/brokers"
  }
]

export default function MSTYPlatformsPage() {
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
            MSTY Trading in Europe
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/90">
            Access the Yieldmax MSTR Option Income Strategy ETF (MSTY) through YieldMax&apos;s official European UCITS fund structure.
          </p>
        </motion.div>

        {/* YouTube Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-12"
        >
          <div className="relative p-4 border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              {/* Custom Thumbnail */}
              <div className="absolute top-0 left-0 w-full h-full cursor-pointer group" onClick={(e) => {
                const iframe = e.currentTarget.nextElementSibling as HTMLIFrameElement;
                iframe.style.display = 'block';
                e.currentTarget.style.display = 'none';
              }}>
                <Image 
                  src="/magicformula.jpg" 
                  alt="MSTY Trading Video Thumbnail"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-all duration-300">
                  <div className="w-16 h-16 rounded-full bg-yellow-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-black" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              {/* YouTube iframe */}
              <iframe
                className="absolute top-0 left-0 w-full h-full hidden"
                src="https://www.youtube.com/embed/rOnlvaB8hIU"
                title="MSTY Trading Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-1">
          {brokers.map((broker, index) => (
            <motion.div
              key={broker.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <div className="p-8">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-white">{broker.name}</h3>
                    <span className="rounded-full bg-yellow-500 px-3 py-1 text-sm font-semibold text-black">
                      Score: {broker.score}
                    </span>
                  </div>
                  <ul className="mt-6 space-y-2">
                    {broker.pros.map((pro) => (
                      <li key={pro} className="flex items-center text-white/80">
                        <span className="mr-2 text-yellow-500">•</span>
                        {pro}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 space-y-2 text-white/80">
                    <p>Fees: {broker.fees}</p>
                    <p>Minimum Deposit: {broker.minDeposit}</p>
                  </div>
                  {broker.link.startsWith('/') ? (
                    <Link
                      href={broker.link}
                      className="mt-6 inline-block rounded-lg bg-[#1c1f26] border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] px-4 py-2 text-sm font-semibold text-white hover:bg-yellow-500 hover:text-black transition-all duration-300"
                    >
                      Overview All Brokers
                    </Link>
                  ) : (
                    <a
                      href={broker.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-block rounded-lg bg-[#1c1f26] border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] px-4 py-2 text-sm font-semibold text-white hover:bg-yellow-500 hover:text-black transition-all duration-300"
                    >
                      Visit Official Site
                    </a>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16"
        >
          <Card>
            <div className="p-8">
              <h2 className="text-2xl font-bold text-yellow-500">How to Trade MSTY in Europe</h2>
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
          </Card>
        </motion.div>
      </div>
    </div>
  )
} 