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
  defaultOpen = false
}: {
  title: string
  children: React.ReactNode
  defaultOpen?: boolean
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen)

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
          className="text-center space-y-8"
        >
          <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">Bitcoin Income • Options Strategy • Monthly Distributions</p>
          <h1 className="text-center">
            <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
              MSTY Trading
            </span>
          </h1>
          <div className="flex items-center justify-center mt-6">
            <div className="h-px w-24 bg-yellow-500/30"></div>
            <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">Yieldmax MSTR Option Income Strategy ETF</p>
            <div className="h-px w-24 bg-yellow-500/30"></div>
          </div>
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
                  src="/visuals/BTC_memes_and_dreams_15.jpeg" 
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
                src="https://www.youtube.com/embed/dIOKlayHA8k"
                title="MSTY Trading Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </motion.div>

        {/* Narrative Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12"
        >
          <div className="relative p-4 border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <div className="space-y-6 text-lg text-white/90">
              <p className="font-medium text-yellow-500">I&apos;ve got a question for you.</p>
              
              <p>Why would you leverage trade?</p>
              
              <p>Why would you risk your sanity over red candles and liquidation wicks?</p>
              
              <p>Why would you bet the house just to maybe catch a 20% pump—when one wrong move nukes your entire account?</p>
              
              <p className="text-yellow-500 font-medium">MSTY gets all the hate, but it pays you every single month. No stress. No price alerts. No 3AM panic sweats. Just dividends, dropping like clockwork.</p>
              
              <p>Gone are the days as a pump chaser, so are the days praying for &quot;God candles&quot; (we all know who that retard is). 😂</p>
              
              <p>In fact, all you need to do? Absolutely nothing.</p>
              
              <p>If this isn&apos;t the easiest way to balloon up your wealth, I don&apos;t know what is.</p>
              
              <p>And let&apos;s be honest—to those complaining about NAV erosion?</p>
              
              <p className="text-yellow-500 font-medium">You&apos;re weak.</p>
              
              <p>Think about it. With MSTY, you&apos;re trading countless emotional breakdowns, failed entries, and margin calls for a tiny NAV dip and a guaranteed payout.</p>
              
              <p>That&apos;s not erosion to me. That&apos;s evolution.</p>
              
              <p>MSTY isn&apos;t for the hype chasers. It&apos;s about being smarter—with your time, your capital, and your peace of mind.</p>
              
              <p>It sure doesn&apos;t promise the moon, but quietly pays for your life, all while your friends are still busy hoping for the next shitcoin moonshot, gambling on leverage, or HODLing Bitcoin forever as a paper millionaire with no exit plan.</p>
              
              <p className="text-yellow-500 font-medium">Quiet wealth wins.</p>
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

                {/* Enhanced FAQ Section */}
                <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#1c1f26] rounded-lg border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] p-8"
        >
          <div className="flex items-center gap-3 mb-8">
            <ChevronDown className="w-8 h-8 text-yellow-500" />
            <h2 className="text-3xl font-bold text-yellow-500">Frequently Asked Questions</h2>
          </div>
          <AccordionItem title="How does the strategy work?" defaultOpen>
            <p className="text-white/90">
              Our strategy combines Bitcoin self-custody (80%) with strategic positions in MSTY (10%) 
              for monthly income and MSTR (10%) for additional Bitcoin exposure. MSTY generates income through 
              an options-based strategy on MSTR stock, utilizing covered call writing and put option selling, 
              while also holding short-term U.S. Treasuries as collateral. This approach provides both wealth 
              preservation and regular income without compromising your core Bitcoin position.
            </p>
          </AccordionItem>
          <AccordionItem title="What are MSTY&apos;s dividend yields and sustainability?">
            <p className="text-white/90">
              MSTY currently offers a distribution rate of approximately 101.29% annually. However, these yields 
              can fluctuate based on several factors:
              <br/><br/>
              • MSTR&apos;s stock price volatility and Bitcoin&apos;s value movements<br/>
              • Market conditions and options market dynamics<br/>
              • Changes in implied volatility affecting option premiums<br/>
              <br/>
              While the yield is attractive, it&apos;s important to understand that distributions aren&apos;t guaranteed 
              and can vary monthly based on market conditions.
            </p>
          </AccordionItem>
          <AccordionItem title="What are the tax implications for MSTY distributions?">
            <p className="text-white/90">
              For French residents, MSTY distributions are subject to a 15% U.S. withholding tax. It&apos;s important 
              to understand that:
              <br/><br/>
              • The 15% tax is automatically withheld at source<br/>
              • You&apos;ll need to declare these distributions on your French tax return<br/>
              • The withheld tax can often be credited against your French tax liability<br/>
              <br/>
              We recommend consulting with a tax professional for personalized advice on your situation.
            </p>
          </AccordionItem>
          <AccordionItem title="What are the risks involved?">
            <p className="text-white/90">
              Key risks to consider include:
              <br/><br/>
              • Dividend Variability: Monthly income can fluctuate based on market conditions<br/>
              • Capital Risk: MSTR stock price and Bitcoin value declines can lead to losses<br/>
              • Market Liquidity: Performance is tied to MSTR and Bitcoin volatility<br/>
              • Tax Implications: Converting Bitcoin to MSTY may trigger taxable events<br/>
              <br/>
              It&apos;s recommended to consult with a financial advisor before making substantial investments.
            </p>
          </AccordionItem>
          <AccordionItem title="How do I get started?">
            <p className="text-white/90">
              Start by using our calculator to determine your target monthly income and required MSTY 
              shares. Follow these steps:
              <br/><br/>
              1. Determine your desired monthly income<br/>
              2. Calculate required shares (approximately $1 monthly distribution per share)<br/>
              3. Ensure you maintain 80% in Bitcoin cold storage<br/>
              4. Consider tax implications and documentation requirements<br/>
              5. Set up proper tracking for distributions and tax reporting<br/>
              <br/>
              Remember to maintain your Bitcoin-first approach while using MSTY for income generation.
            </p>
          </AccordionItem>
          <AccordionItem title="How do I track my investments and taxes?">
            <p className="text-white/90">
              We recommend maintaining detailed records:
              <br/><br/>
              • Number of MSTY shares and monthly distributions<br/>
              • U.S. withholding tax amounts (15%)<br/>
              • EUR/USD exchange rates for tax reporting<br/>
              • Form W-8BEN filing with your broker<br/>
              • Monthly income tracking for tax purposes<br/>
              <br/>
              Consider using a spreadsheet to track gross dividends, taxes withheld, and net income in both 
              USD and EUR.
            </p>
          </AccordionItem>
        </motion.div>
        
      </div>
    </div>
  )
} 