'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function PumpNotFunPage() {
  const [open, setOpen] = useState<number | null>(null);
  const faqs = [
    {
      q: "What happened to Pump.fun?",
      a: (
        <span>
          Pump.fun experienced a dramatic rise and fall in the crypto space. At its peak, it processed $700 million in fees as a popular token-launch platform, but later suffered a 90% nosedive in fees, leaving many investors with significant losses.
        </span>
      ),
    },
    {
      q: "What were the key statistics of the crash?",
      a: (
        <span>
          The crash had devastating effects:
          <br /><br />
          • 166,550 wallets lost less than $500
          <br />
          • 142,951 wallets were &quot;almost&quot; breakeven
          <br />
          • Only 5 wallets made $50K-$100K profits
          <br />
          • 2,642 wallets lost $1K-$10K
          <br />
          • One wallet lost over $1M
        </span>
      ),
    },
    {
      q: "What was the controversial $1B raise?",
      a: (
        <span>
          In June 2025, Pump.fun announced a $1 billion raise at a $4 billion valuation, with 25% available in a public sale. This came after a 90% fee dump, raising suspicions about exit liquidity and valuation concerns.
        </span>
      ),
    },
    {
      q: "What happened after the raise?",
      a: (
        <span>
          The situation deteriorated rapidly:
          <br /><br />
          • Fees remained depressed
          <br />
          • Promised features never materialized
          <br />
          • Team became unresponsive
          <br />
          • Valuation dropped to $2B
          <br />
          • Many investors lost significant value
        </span>
      ),
    },
    {
      q: "What lessons can be learned?",
      a: (
        <span>
          Key takeaways include:
          <br /><br />
          • Beware of unsustainable growth metrics
          <br />
          • Question valuations during market downturns
          <br />
          • Be skeptical of large raises after poor performance
          <br />
          • Watch for red flags in team communication
          <br />
          • Understand the risks of token launches
        </span>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-satoshi">
      {/* Premium header accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-8">
            <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">Crypto • DeFi • Token Launches</p>
            <h1 className="text-center">
              <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
                Pump.fun
              </span>
            </h1>
            <div className="flex items-center justify-center mt-6">
              <div className="h-px w-24 bg-yellow-500/30"></div>
              <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">The Rise and Fall of a DeFi Casino</p>
              <div className="h-px w-24 bg-yellow-500/30"></div>
            </div>
          </div>

          {/* Main Story Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              The DeFi Casino
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                In the grimy underbelly of the crypto Wild West, Pump.fun had once been the ultimate degen paradise—a lawless DeFi casino where moonboys and shitcoiners chased 100x pumps in a haze of adrenaline and greed. By early 2025, this degenerate dream factory had sucked in a mind-blowing $700 million in fees, its token-launch platform a pulsating hub of chaos where anons yeeted their ETH into meme coins with names like $DOGBUTT and $CUMROCKET.
              </p>
            </div>
          </div>

          {/* Crash Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              The Crash
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                The crash hit like a rugpull from hell—a 90% nosedive in fees that left Pump.fun a ghost town of rekt anons and shattered bags. The numbers were straight-up savage: 166,550 wallets—51% of the degens—were down bad, losing less than $500, basically pocket change they&apos;d already FOMO&apos;d away on Red Bull and ramen.
              </p>
              <div className="mt-6">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">The Numbers:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>166,550 wallets lost less than $500</li>
                  <li>142,951 wallets were &quot;almost&quot; breakeven</li>
                  <li>Only 5 chads made $50K-$100K profits</li>
                  <li>2,642 wallets lost $1K-$10K</li>
                  <li>One degen lost over $1M</li>
                </ul>
              </div>
            </div>
          </div>

          {/* The Raise Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              The $1B Raise
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                At 01:25 AM CEST on June 5, 2025, while degens were still rage-scrolling X, Pump.fun&apos;s founders dropped a nuke: a $1 billion raise at a $4 billion valuation, 25% up for grabs in a public sale. &quot;We&apos;re scaling, fam!&quot; they shilled, hyping new features, better liquidity, and a moonshot to &quot;dominate the meta.&quot;
              </p>
            </div>
          </div>

          {/* The Aftermath Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              The Aftermath
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                The vibes turned rancid fast. Weeks later, Pump.fun&apos;s fees were still deader than a rugged token&apos;s chart, the &quot;new features&quot; nowhere in sight. The team ghosted harder than a one-night stand, dropping a pathetic &quot;market conditions&quot; excuse while X sleuths doxxed their wallet movements—millions siphoned to cold storage.
              </p>
            </div>
          </div>

          {/* Financial Performance Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Financial Performance
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                Pump.fun&apos;s revenue model relies on transaction fees, with cumulative fees reaching over $700 million by June 2025. The platform&apos;s journey through the market cycles has been dramatic:
              </p>
              <div className="mt-6">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Key Milestones:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>September 2024: Cumulative revenue surpassed $100 million</li>
                  <li>November 2024: Monthly revenue peaked at $106 million</li>
                  <li>January 2, 2025: Daily revenue hit record $14 million</li>
                  <li>March 10, 2025: Daily revenue dropped to $100,000 (99.3% decline)</li>
                </ul>
              </div>
              <p className="text-lg mt-6">
                This dramatic decline coincided with broader market trends, with meme coin market capitalization falling from $137 billion in early December 2024 to $96 billion by month-end.
              </p>
            </div>
          </div>

          {/* User Impact Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              User Impact Analysis
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                A detailed analysis of user outcomes reveals the platform&apos;s extractive nature:
              </p>
              {/* PnL Bar Chart */}
              <div className="my-8">
                <Bar
                  data={{
                    labels: [
                      '50K - 100K',
                      '10K - 50K',
                      '1K - 10K',
                      '500 - 1K',
                      '<500 - 0',
                      'Loss <500',
                      'Loss 500 - 1K',
                      'Loss 1K - 10K',
                      'Loss 10K - 50K',
                      'Loss 100K - 200K',
                      'Loss >1M',
                    ],
                    datasets: [
                      {
                        label: 'No. of Wallets',
                        data: [5, 283, 5459, 4523, 142951, 166550, 3708, 2642, 47, 1, 1],
                        backgroundColor: [
                          '#F7B500', '#F7B500', '#F7B500', '#F7B500', '#F7B500',
                          '#F87171', '#F87171', '#F87171', '#F87171', '#F87171', '#F87171'
                        ],
                        borderColor: '#000',
                        borderWidth: 1,
                      },
                    ],
                  }}
                  options={{
                    responsive: true,
                    plugins: {
                      legend: { display: false },
                      title: {
                        display: true,
                        text: "Pump.fun Traders' PnL Distribution (No. of Wallets)",
                        color: '#F7B500',
                        font: { size: 18, weight: 'bold' },
                      },
                      tooltip: {
                        callbacks: {
                          label: function(context) {
                            return `Wallets: ${context.parsed.y.toLocaleString()}`;
                          },
                        },
                      },
                    },
                    scales: {
                      x: {
                        title: {
                          display: true,
                          text: 'Realized PnL',
                          color: '#F7B500',
                        },
                        ticks: { color: '#fff' },
                        grid: { color: '#333' },
                      },
                      y: {
                        title: {
                          display: true,
                          text: 'No. of Wallets',
                          color: '#F7B500',
                        },
                        ticks: {
                          color: '#fff',
                          callback: function(value) {
                            return value.toLocaleString();
                          },
                        },
                        grid: { color: '#333' },
                      },
                    },
                  }}
                />
              </div>
              <div className="mt-6">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Profit Distribution:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>51.06% (166,550 wallets) lost under $500</li>
                  <li>43.83% (142,951 wallets) broke even or lost slightly</li>
                  <li>1.67% (5,459 wallets) made $1K-$10K</li>
                  <li>0.09% (283 wallets) made $10K-$50K</li>
                  <li>0.0015% (5 wallets) made $50K-$100K</li>
                  <li>2 wallets experienced extreme losses ($100K-$1M+)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Legal Challenges Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Legal & Regulatory Challenges
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                Pump.fun faces significant legal scrutiny that complicates its fundraising narrative:
              </p>
              <div className="mt-6">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Key Issues:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>Content Moderation: Livestream feature criticized for harmful content</li>
                  <li>Securities Violations: Class-action lawsuit alleging unregistered securities</li>
                  <li>IP Infringement: Cease and desist orders from law firms</li>
                  <li>Regulatory Risks: No AML/KYC raising concerns about illegal activities</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Market Context Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Market Context & Competition
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                Pump.fun&apos;s trajectory mirrors the volatile meme coin market, facing increasing competition and market challenges:
              </p>
              <div className="mt-6">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Market Dynamics:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>Solana&apos;s dApp activity declined by over 50% in February 2025</li>
                  <li>Competition from Jupiter&apos;s Moonshot and BNB Chain</li>
                  <li>Launch of &quot;Pump Advanced&quot; and plans for platform token</li>
                  <li>Need to diversify beyond fee extraction model</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Conclusion Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Conclusion
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                Pump.fun&apos;s story represents a cautionary tale in the DeFi space—a platform that achieved rapid growth but faced significant challenges in sustainability, user protection, and regulatory compliance. The controversial $1 billion fundraising attempt, despite a 90%+ revenue drop, highlights the complex dynamics of the crypto market and the need for better user protection mechanisms.
              </p>
              <p className="text-lg mt-4">
                The platform&apos;s future success will depend on its ability to address legal issues, improve user outcomes, and adapt to an increasingly competitive and regulated market landscape.
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">📈</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Peak Metrics
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                $700M in Fees
              </p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">💡</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  The Raise
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                $1B at $4B Valuation
              </p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">🎯</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  The Fall
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                90% Fee Collapse
              </p>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#1c1f26] rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]"
              >
                <button
                  className="w-full px-8 py-6 text-left flex justify-between items-center"
                  onClick={() => setOpen(open === index ? null : index)}
                >
                  <span className="text-xl font-bold text-yellow-500">{faq.q}</span>
                  <ChevronDown
                    className={cn(
                      "h-6 w-6 text-yellow-500 transition-transform duration-200",
                      open === index ? "transform rotate-180" : ""
                    )}
                  />
                </button>
                {open === index && (
                  <div className="px-8 pb-6 text-gray-300">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
