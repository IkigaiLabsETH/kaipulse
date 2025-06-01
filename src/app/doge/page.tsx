'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export default function DogePage() {
  const [open, setOpen] = useState<number | null>(null);
  const faqs = [
    {
      q: "What is Doge cryptocurrency?",
      a: (
        <span>
          Doge is a decentralized cryptocurrency that gained significant attention due to its meme status and community-driven nature. It operates on its own blockchain and has become one of the most recognized cryptocurrencies in the market, known for its active community and viral social media presence.
        </span>
      ),
    },
    {
      q: "How has Elon Musk influenced Doge?",
      a: (
        <span>
          Elon Musk has had a significant impact on Doge through his tweets and public statements:
          <br /><br />
          • Called it &quot;the people&apos;s crypto&quot;
          <br />
          • Suggested it could be used for Mars economy
          <br />
          • Multiple tweets causing price movements
          <br />
          • Integration discussions with Twitter/X
          <br />
          • Support for its community-driven nature
        </span>
      ),
    },
    {
      q: "What makes Doge unique?",
      a: (
        <span>
          Doge stands out for several reasons:
          <br /><br />
          • Strong community focus
          <br />
          • Low transaction fees
          <br />
          • Fast transaction times
          <br />
          • Active development team
          <br />
          • Widespread merchant acceptance
        </span>
      ),
    },
    {
      q: "What is the future outlook for Doge?",
      a: (
        <span>
          The future of Doge looks promising with:
          <br /><br />
          • Growing merchant adoption
          <br />
          • Development of new use cases
          <br />
          • Strong community support
          <br />
          • Potential integration with major platforms
          <br />
          • Continued development of the ecosystem
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
            <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">Community Driven • Elon&apos;s Favorite • The People&apos;s Crypto</p>
            <h1 className="text-center">
              <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
                Doge
              </span>
            </h1>
            <div className="flex items-center justify-center mt-6">
              <div className="h-px w-24 bg-yellow-500/30"></div>
              <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">The Cryptocurrency That&apos;s Taking Over the World</p>
              <div className="h-px w-24 bg-yellow-500/30"></div>
            </div>

            {/* Performance Stats */}
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <h3 className="text-2xl font-bold text-yellow-500 mb-4">Outperforming Bitcoin Since Inception</h3>
              <div className="space-y-4 text-gray-300">
                <p className="text-lg">
                  According to Raoul Pal, CEO of Real Vision, Dogecoin has surged 550% more than Bitcoin since its launch in December 2013.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-[#2a2d35] p-4 rounded-lg">
                    <h4 className="font-bold text-yellow-500 mb-2">Historical Performance</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Started at 0.00000066 BTC</li>
                      <li>• Current: 0.00000437 BTC</li>
                      <li>• Total Gain: 562% vs BTC</li>
                    </ul>
                  </div>
                  <div className="bg-[#2a2d35] p-4 rounded-lg">
                    <h4 className="font-bold text-yellow-500 mb-2">Key Insights</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Referred to as &quot;harder money&quot;</li>
                      <li>• Growing adoption</li>
                      <li>• Strong resilience</li>
                    </ul>
                  </div>
                </div>
                <p className="text-sm text-gray-400 mt-4">
                  Note: While Dogecoin has shown significant gains, future performance remains subject to market dynamics.
                </p>
              </div>
            </div>
            
            {/* X Money Integration Section */}
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
                X Money Integration: The Next Catalyst
              </h3>
              <div className="space-y-6 text-gray-300">
                <p className="text-lg">
                  X Money, the platform&apos;s new payment service, is set to launch in 2025, potentially bringing significant opportunities for Dogecoin integration.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-bold text-yellow-500 mb-4">Recent Developments</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-yellow-500 mr-2">•</span>
                        <span>Beta testing commenced in May 2025</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-500 mr-2">•</span>
                        <span>Licenses secured in 39 US states</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-500 mr-2">•</span>
                        <span>Visa partnership for fiat payments</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-500 mr-2">•</span>
                        <span>Phased rollout strategy confirmed</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-yellow-500 mb-4">Dogecoin Integration Signals</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-yellow-500 mr-2">•</span>
                        <span>Elon Musk&apos;s continued support</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-500 mr-2">•</span>
                        <span>DOGE ticker used in official naming</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-500 mr-2">•</span>
                        <span>Strong community anticipation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-500 mr-2">•</span>
                        <span>Regulatory progress in key states</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-[#2a2d35] rounded-lg">
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Current Status & Timeline</h4>
                  <div className="space-y-4">
                    <p>
                      As of June 2025, X Money is in beta testing with an initial focus on fiat currencies. While Dogecoin integration hasn&apos;t been officially confirmed, the combination of Elon Musk&apos;s support and the platform&apos;s progress in securing necessary licenses creates a compelling case for future DOGE support.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4 mt-4">
                      <div className="bg-[#1c1f26] p-4 rounded-lg">
                        <h5 className="font-bold text-yellow-500 mb-2">Initial Launch</h5>
                        <p className="text-sm">Fiat currencies first, with Visa partnership</p>
                      </div>
                      <div className="bg-[#1c1f26] p-4 rounded-lg">
                        <h5 className="font-bold text-yellow-500 mb-2">Regulatory Progress</h5>
                        <p className="text-sm">39 states approved, expansion ongoing</p>
                      </div>
                      <div className="bg-[#1c1f26] p-4 rounded-lg">
                        <h5 className="font-bold text-yellow-500 mb-2">Future Potential</h5>
                        <p className="text-sm">Crypto integration likely in later phases</p>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-gray-400 mt-4">
                  Note: While the potential for Dogecoin integration is promising, users should wait for official announcements from X regarding cryptocurrency support.
                </p>
              </div>
            </div>
            
            {/* Grayscale Trust Section */}
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
                Grayscale Dogecoin Trust
              </h3>
              <div className="space-y-6 text-gray-300">
                <p className="text-lg">
                  Launched on January 31, 2025, the Grayscale Dogecoin Trust provides accredited investors with exposure to Dogecoin through a traditional security structure, simplifying crypto investment while maintaining regulatory compliance.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-bold text-yellow-500 mb-4">Key Features</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-yellow-500 mr-2">•</span>
                        <span>Expense Ratio: 2.50%</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-500 mr-2">•</span>
                        <span>Inception: January 30, 2025</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-500 mr-2">•</span>
                        <span>NAV per Share: $5.97 (May 30, 2025)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-500 mr-2">•</span>
                        <span>Dogecoin per Share: 29.75 DOGE</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-yellow-500 mb-4">Performance Metrics</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-yellow-500 mr-2">•</span>
                        <span>1 Month Return: +16.15%</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-500 mr-2">•</span>
                        <span>3 Month Return: -0.67%</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-500 mr-2">•</span>
                        <span>Cumulative Return: -40.24%</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-500 mr-2">•</span>
                        <span>AUM: $2.26M</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-[#2a2d35] rounded-lg">
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Recent Developments & Future Outlook</h4>
                  <div className="space-y-4">
                    <p>
                      Grayscale has filed to convert the trust into a spot ETF, potentially broadening access to retail investors. The initial launch boosted Dogecoin&apos;s price by 3%, demonstrating institutional interest in the asset.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4 mt-4">
                      <div className="bg-[#1c1f26] p-4 rounded-lg">
                        <h5 className="font-bold text-yellow-500 mb-2">Market Impact</h5>
                        <p className="text-sm">3% price increase on launch day</p>
                      </div>
                      <div className="bg-[#1c1f26] p-4 rounded-lg">
                        <h5 className="font-bold text-yellow-500 mb-2">ETF Conversion</h5>
                        <p className="text-sm">Filed for spot ETF conversion</p>
                      </div>
                      <div className="bg-[#1c1f26] p-4 rounded-lg">
                        <h5 className="font-bold text-yellow-500 mb-2">Accessibility</h5>
                        <p className="text-sm">Currently for accredited investors only</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-6 bg-[#2a2d35] rounded-lg">
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Investment Considerations</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-2">•</span>
                      <span>Shares are restricted for one year after purchase</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-2">•</span>
                      <span>Higher expense ratio compared to typical ETFs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-2">•</span>
                      <span>Performance tracks DOGE price minus fees</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-2">•</span>
                      <span>Potential for increased liquidity with ETF conversion</span>
                    </li>
                  </ul>
                </div>

                <p className="text-sm text-gray-400 mt-4">
                  Note: The trust&apos;s performance reflects market volatility and the impact of fees. Investors should consider their risk tolerance and investment objectives before participating.
                </p>
              </div>
            </div>

            {/* Meme Coin Comparison Section */}
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
                Meme Coin Market Comparison
              </h3>
              <div className="space-y-6 text-gray-300">
                <p className="text-lg">
                  As of June 1, 2025, Dogecoin maintains its position as the leading meme coin by market capitalization, while newer entrants like PEPE and FARTCOIN show varying levels of growth and market activity.
                </p>

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-[#2a2d35] p-6 rounded-lg">
                    <h4 className="text-xl font-bold text-yellow-500 mb-4">Market Cap</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-yellow-500 mr-2">•</span>
                        <span>DOGE: $29B</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-500 mr-2">•</span>
                        <span>PEPE: $4.7B-$5.4B</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-500 mr-2">•</span>
                        <span>FART: $1.11B</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-[#2a2d35] p-6 rounded-lg">
                    <h4 className="text-xl font-bold text-yellow-500 mb-4">Daily Volume</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-yellow-500 mr-2">•</span>
                        <span>DOGE: $1.7B-$2B</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-500 mr-2">•</span>
                        <span>PEPE: $1.5B-$2.4B</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-500 mr-2">•</span>
                        <span>FART: $195M</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-[#2a2d35] p-6 rounded-lg">
                    <h4 className="text-xl font-bold text-yellow-500 mb-4">Monthly Return</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-yellow-500 mr-2">•</span>
                        <span>DOGE: +9.69%</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-500 mr-2">•</span>
                        <span>PEPE: +30.72%</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-500 mr-2">•</span>
                        <span>FART: +433.33%</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-[#2a2d35] rounded-lg">
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Recent Performance Analysis</h4>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h5 className="font-bold text-yellow-500 mb-2">Short-Term Trends</h5>
                        <ul className="space-y-2">
                          <li>• 24h: DOGE -2%, PEPE -13%, FART +0.06%</li>
                          <li>• 7d: DOGE -16.11%, PEPE -15.76%, FART -24.60%</li>
                          <li>• All coins showing recent weakness</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-bold text-yellow-500 mb-2">Supply Context</h5>
                        <ul className="space-y-2">
                          <li>• DOGE: 149.5B circulating</li>
                          <li>• PEPE: 420.69T circulating</li>
                          <li>• FART: 1B circulating</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-6 bg-[#2a2d35] rounded-lg">
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Key Takeaways</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-2">•</span>
                      <span>Dogecoin maintains market leadership with highest liquidity</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-2">•</span>
                      <span>PEPE shows strong growth potential with high trading volume</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-2">•</span>
                      <span>FARTCOIN demonstrates highest volatility and growth</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-2">•</span>
                      <span>All meme coins currently experiencing short-term weakness</span>
                    </li>
                  </ul>
                </div>

                <p className="text-sm text-gray-400 mt-4">
                  Note: Market data as of June 1, 2025. Meme coins are highly volatile and speculative investments. Past performance does not guarantee future results.
                </p>
              </div>
            </div>
            
            {/* Featured Visual */}
            <div className="relative w-full mx-auto mt-12 aspect-[16/9] overflow-hidden rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <Image
                src="/doge.jpg"
                alt="Doge Cryptocurrency and Elon Musk"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
          </div>

          {/* Market Overview Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Dogecoin Network & Market Overview
            </h3>
            <div className="space-y-4 text-gray-300">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Market Metrics</h4>
                  <ul className="space-y-2">
                    <li>Price: ≈$0.188 USD</li>
                    <li>Market Cap: ~$28.11B</li>
                    <li>Circulating Supply: ~149.5B DOGE</li>
                    <li>24h Trading Volume: ~$1.07B</li>
                    <li>All-Time High: $0.74 (May 2021)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Network Stats</h4>
                  <ul className="space-y-2">
                    <li>Hashrate: ~2.41 PHash/s</li>
                    <li>Difficulty: ~35.36M</li>
                    <li>Block Time: 1 minute</li>
                    <li>Block Reward: 10,000 DOGE + fees</li>
                    <li>Active Addresses (24h): ~51,635</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Fluminer L2 Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Fluminer L2 Home ASIC Miner
            </h3>
            <div className="space-y-6 text-gray-300">
              <p className="text-lg">
                The Fluminer L2 is a revolutionary compact ASIC miner targeting Scrypt algorithms (Litecoin/Dogecoin/Bells). It delivers a stable 1 GH/s hash rate while consuming only 230 W of power, yielding an energy efficiency of about 0.23 J/MH (≈4.35 MH/W).
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Key Specifications</h4>
                  <ul className="space-y-2">
                    <li>Hashrate: 1 GH/s Scrypt</li>
                    <li>Power Consumption: 230W</li>
                    <li>Efficiency: 0.23 J/MH</li>
                    <li>Dimensions: 320×140×140mm</li>
                    <li>Weight: 8.2kg</li>
                    <li>Noise Level: &lt;50 dB</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Features</h4>
                  <ul className="space-y-2">
                    <li>High-fidelity speaker system</li>
                    <li>USB/Bluetooth audio</li>
                    <li>Wi-Fi connectivity</li>
                    <li>Mobile app monitoring</li>
                    <li>Ultra-quiet operation</li>
                    <li>Home-friendly design</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Profitability Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Mining Profitability
            </h3>
            <div className="space-y-6 text-gray-300">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Daily Metrics</h4>
                  <ul className="space-y-2">
                    <li>Revenue: ≈$1.06–$1.19 (≈5.7 DOGE)</li>
                    <li>Power Cost: ≈$0.55 (230W×24h @ $0.10/kWh)</li>
                    <li>Net Profit: ≈$0.50–0.64 per day</li>
                    <li>Annual Profit: ≈$185–$235</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">ROI Analysis</h4>
                  <ul className="space-y-2">
                    <li>Unit Price: $730–$800</li>
                    <li>Break-even: 3–4 years</li>
                    <li>Power Cost: $0.10/kWh</li>
                    <li>Mining Pool: Ethermine-LTC, Aikapool</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Mining Challenges Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Mining Profitability Analysis
            </h3>
            <div className="space-y-6 text-gray-300">
              <p className="text-lg">
                Mining profitability varies significantly based on hardware, electricity costs, and market conditions. Here&apos;s a comprehensive breakdown:
              </p>

              {/* Industrial Mining Options */}
              <div className="mt-8">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Industrial-Grade ASIC Miners</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-gray-300">
                    <thead>
                      <tr className="text-yellow-500">
                        <th className="p-4 text-left">Model</th>
                        <th className="p-4 text-left">Hashrate</th>
                        <th className="p-4 text-left">Power</th>
                        <th className="p-4 text-left">Efficiency</th>
                        <th className="p-4 text-left">Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-yellow-500/30">
                        <td className="p-4">Bitmain Antminer L9</td>
                        <td className="p-4">17 GH/s</td>
                        <td className="p-4">3,450W</td>
                        <td className="p-4">203 W/GH</td>
                        <td className="p-4">$14,399</td>
                      </tr>
                      <tr className="border-t border-yellow-500/30">
                        <td className="p-4">VolcMiner D1</td>
                        <td className="p-4">17 GH/s</td>
                        <td className="p-4">3,900W</td>
                        <td className="p-4">229 W/GH</td>
                        <td className="p-4">$12,599</td>
                      </tr>
                      <tr className="border-t border-yellow-500/30">
                        <td className="p-4">Elphapex DG Hydro 1</td>
                        <td className="p-4">20 GH/s</td>
                        <td className="p-4">6,200W</td>
                        <td className="p-4">310 W/GH</td>
                        <td className="p-4">TBD</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Home Mining Options */}
              <div className="mt-8">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Home and Small-Scale Miners</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-gray-300">
                    <thead>
                      <tr className="text-yellow-500">
                        <th className="p-4 text-left">Model</th>
                        <th className="p-4 text-left">Hashrate</th>
                        <th className="p-4 text-left">Power</th>
                        <th className="p-4 text-left">Efficiency</th>
                        <th className="p-4 text-left">Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-yellow-500/30">
                        <td className="p-4">Fluminer L1</td>
                        <td className="p-4">5.3 GH/s</td>
                        <td className="p-4">1,200W</td>
                        <td className="p-4">226 W/GH</td>
                        <td className="p-4">TBD</td>
                      </tr>
                      <tr className="border-t border-yellow-500/30">
                        <td className="p-4">VolcMiner D1 Mini Pre</td>
                        <td className="p-4">2.2 GH/s</td>
                        <td className="p-4">500W</td>
                        <td className="p-4">227 W/GH</td>
                        <td className="p-4">TBD</td>
                      </tr>
                      <tr className="border-t border-yellow-500/30">
                        <td className="p-4">Elphapex DG Home 1</td>
                        <td className="p-4">2.1 GH/s</td>
                        <td className="p-4">620W</td>
                        <td className="p-4">295 W/GH</td>
                        <td className="p-4">TBD</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Profitability Example */}
              <div className="mt-8">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Profitability Example: Antminer L9</h4>
                <div className="bg-[#2a2d35] p-6 rounded-lg">
                  <ul className="space-y-2">
                    <li>• Hashrate: 17,000 MH/s</li>
                    <li>• Power Consumption: 3,450W</li>
                    <li>• Electricity Cost: $0.10/kWh</li>
                    <li>• Daily Electricity Cost: $8.28</li>
                    <li>• Estimated Daily DOGE: ~88.23</li>
                    <li>• DOGE Price: $0.1882</li>
                    <li>• Daily Revenue: $16.61</li>
                    <li>• Daily Profit: $8.33</li>
                  </ul>
                </div>
              </div>

              {/* Cloud Mining Alternatives */}
              <div className="mt-8">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Cloud Mining with Miningcoop</h4>
                <div className="bg-[#2a2d35] p-6 rounded-lg">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h5 className="font-bold text-yellow-500 mb-4">Platform Overview</h5>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">•</span>
                          <span>Trustpilot Rating: 4.4/5 (Excellent)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">•</span>
                          <span>Daily Earnings: Up to $6,800 (BTC plans)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">•</span>
                          <span>Sign-up Bonus: $100 for new users</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">•</span>
                          <span>Contract Terms: 1-7 days flexibility</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-bold text-yellow-500 mb-4">Key Features</h5>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">•</span>
                          <span>Green Energy Operations (Wind & Solar)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">•</span>
                          <span>Cold Wallet Protection & 2FA Security</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">•</span>
                          <span>AI-Powered Mining Algorithms</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">•</span>
                          <span>No Hidden Fees or Withdrawal Charges</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-[#1c1f26] rounded-lg">
                    <h5 className="font-bold text-yellow-500 mb-2">Getting Started</h5>
                    <p className="text-sm text-gray-300">
                      Miningcoop offers instant activation with daily earnings, supporting both Bitcoin and Dogecoin mining. The platform is fully mobile-friendly with no app installation required, making it accessible for beginners and experienced miners alike.
                    </p>
                  </div>
                  <p className="mt-4 text-sm text-gray-400">
                    Note: While Miningcoop has established credibility with positive user reviews, always research and consider your risk tolerance before investing in cloud mining.
                  </p>
                </div>
              </div>

              {/* Key Considerations */}
              <div className="mt-8">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Key Considerations</h4>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h5 className="font-bold text-yellow-500 mb-2">Factors Affecting Profitability</h5>
                    <ul className="space-y-2">
                      <li>• Electricity costs and availability</li>
                      <li>• Initial hardware investment</li>
                      <li>• Network difficulty changes</li>
                      <li>• Market price volatility</li>
                      <li>• Maintenance and cooling costs</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-yellow-500 mb-2">Optimization Strategies</h5>
                    <ul className="space-y-2">
                      <li>• Use renewable energy sources</li>
                      <li>• Join mining pools</li>
                      <li>• Monitor market conditions</li>
                      <li>• Regular maintenance</li>
                      <li>• Consider cloud mining alternatives</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Comparison Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Comparison with Other Dogecoin ASICs
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-gray-300">
                <thead>
                  <tr className="text-yellow-500">
                    <th className="p-4 text-left">Model</th>
                    <th className="p-4 text-left">Hashrate</th>
                    <th className="p-4 text-left">Power</th>
                    <th className="p-4 text-left">Efficiency</th>
                    <th className="p-4 text-left">Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-yellow-500/30">
                    <td className="p-4">Fluminer L2</td>
                    <td className="p-4">1.0 GH/s</td>
                    <td className="p-4">230W</td>
                    <td className="p-4">0.23 J/MH</td>
                    <td className="p-4">$730-800</td>
                  </tr>
                  <tr className="border-t border-yellow-500/30">
                    <td className="p-4">Goldshell Mini-DOGE III+</td>
                    <td className="p-4">0.81 GH/s</td>
                    <td className="p-4">500W</td>
                    <td className="p-4">0.62 J/MH</td>
                    <td className="p-4">$730</td>
                  </tr>
                  <tr className="border-t border-yellow-500/30">
                    <td className="p-4">Antminer L9</td>
                    <td className="p-4">16 GH/s</td>
                    <td className="p-4">3,360W</td>
                    <td className="p-4">0.21 J/MH</td>
                    <td className="p-4">$4,000+</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Elon&apos;s Impact Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Elon Musk&apos;s Influence on Doge
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                Elon Musk&apos;s relationship with Doge has been transformative for the cryptocurrency:
              </p>
              <div className="grid md:grid-cols-2 gap-8 mt-6">
                <div>
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Key Endorsements</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>&quot;The people&apos;s crypto&quot; tweet</li>
                    <li>SpaceX and Tesla integration discussions</li>
                    <li>Twitter/X payment integration</li>
                    <li>Mars economy potential</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Market Impact</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Significant price movements</li>
                    <li>Increased mainstream attention</li>
                    <li>Growing institutional interest</li>
                    <li>Enhanced credibility</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">🚀</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Community
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                Strong Global Support
              </p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">💎</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Technology
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                Fast & Efficient
              </p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">🎯</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Future
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                Growing Adoption
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
                      "w-6 h-6 text-yellow-500 transition-transform",
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
