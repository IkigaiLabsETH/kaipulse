"use client";

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function CoinbasePage() {
  return (
    <div className="min-h-screen bg-black text-white font-satoshi">
      {/* Premium header accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-8">
            <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">Digital Currency • Crypto Exchange • Web3</p>
            <h1 className="text-center">
              <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
                Coinbase
              </span>
            </h1>
            <div className="flex items-center justify-center mt-6">
              <div className="h-px w-24 bg-yellow-500/30"></div>
              <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">Your Gateway to the Cryptoeconomy</p>
              <div className="h-px w-24 bg-yellow-500/30"></div>
            </div>
            
            {/* Featured Visual */}
            <div className="relative w-full mx-auto mt-12 aspect-[16/9] overflow-hidden rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <iframe
                src="https://www.youtube.com/embed/wN9w_4dO968"
                title="Coinbase: A Beginner's Guide"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
            </div>
          </div>

          {/* Platform Overview Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Company Overview
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                Coinbase Global, Inc., established in June 2012 by Brian Armstrong, a former Airbnb engineer, and Fred Ehrsam, a former Goldman Sachs trader, has grown into the largest U.S.-based cryptocurrency exchange. Initially funded through Y Combinator with a $150,000 infusion, the company launched bitcoin trading services in October 2012 and expanded with significant investments, including $5 million in Series A from Union Square Ventures in May 2013 and $25 million from Andreessen Horowitz in December 2013.
              </p>
              <p className="text-lg">
                As of 2024, Coinbase boasts over 100 million users and operates in more than 100 countries, holding over $400 billion in assets, including nearly 12% of all bitcoin and 11% of staked Ether. Its mission is to create an open financial system, enhancing economic freedom for over 1 billion people, and it operates as a remote-first company with no physical headquarters.
              </p>
               <p className="text-lg">
                Coinbase offers a suite of services, including buying, selling, transferring, and storing cryptocurrency, as well as staking, institutional custody, and developer tools. Its platform is designed for retail investors, institutional clients, businesses, and software developers, making it a comprehensive ecosystem within the crypto space.
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">📈</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Trade
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                Buy & Sell Digital Assets
              </p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">📚</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Learn
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                Earn Crypto While Learning
              </p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">💳</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Spend
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                Use Crypto with Coinbase Card
              </p>
            </div>
          </div>

          {/* In-Depth Analysis Section */}
          <div className="space-y-16">
            <div className="text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">In-Depth Analysis</h2>
                <div className="flex items-center justify-center mt-4">
                    <div className="h-px w-24 bg-yellow-500/30"></div>
                    <p className="mx-6 text-md text-white/70 font-light italic font-satoshi">Based on research as of June 13, 2025</p>
                    <div className="h-px w-24 bg-yellow-500/30"></div>
                </div>
            </div>

            {/* Financial Performance */}
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">Financial Performance</h3>
                <div className="space-y-4 text-gray-300 text-lg">
                    <p>
                        Coinbase, publicly traded under the ticker COIN on Nasdaq since its IPO in April 2021, shows robust financials. The current stock price is $239.07, with a market capitalization of $60.892 billion.
                    </p>
                    <h4 className="text-xl font-bold text-yellow-500 pt-4">Key Financial Metrics:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 list-none p-0">
                        <li><strong>Previous Close:</strong> $241.05</li>
                        <li><strong>PE Ratio (TTM):</strong> 44.85</li>
                        <li><strong>Day&apos;s Range:</strong> $236.80 - $241.20</li>
                        <li><strong>EPS (TTM):</strong> $5.33</li>
                        <li><strong>52-Week Range:</strong> $142.58 - $349.75</li>
                        <li><strong>Profit Margin:</strong> 22.03%</li>
                        <li><strong>Volume:</strong> 806,120 (Avg: 10,402,753)</li>
                        <li><strong>Revenue (TTM):</strong> $6.67 billion</li>
                        <li><strong>Total Cash (MRQ):</strong> $8.05 billion</li>
                        <li><strong>Net Income (TTM):</strong> $1.47 billion</li>
                        <li><strong>Total Debt/Equity (MRQ):</strong> 43.89%</li>
                    </ul>
                    <p className="pt-4">
                        These figures indicate strong revenue growth, with a 136% surge to $1.14 billion in 2020, though transaction fees (up to 4% for retail) are higher compared to competitors like Binance (0.1%). The company&apos;s financial strategy includes subscription and services revenue, such as custodial services, which grew 126% year-over-year in 2020, though it remains a smaller portion of total revenue.
                    </p>
                </div>
            </div>

            {/* Regulatory and Legal Environment */}
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">Regulatory & Legal Environment</h3>
                <div className="space-y-4 text-gray-300 text-lg">
                    <p>
                        The regulatory landscape for Coinbase has been contentious. In June 2023, the SEC charged Coinbase with operating as an unregistered national securities exchange. However, by February 27, 2025, the SEC announced the dismissal of its civil enforcement action against Coinbase, citing the formation of a Crypto Task Force to develop a clearer regulatory framework.
                    </p>
                    <p>
                        Globally, Coinbase operates in over 100 countries, prioritizing markets with clear regulatory frameworks. Its user agreement includes disclosures about virtual currency risks, reflecting its commitment to transparency. Recent cybersecurity incidents, such as a May 2025 breach, underscore ongoing security challenges.
                    </p>
                </div>
            </div>

            {/* Recent Developments */}
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">Recent Developments & Innovations</h3>
                <div className="space-y-4 text-gray-300 text-lg">
                    <p>
                        Coinbase continues to innovate. On June 12, 2025, it announced plans to launch CFTC-compliant perpetual futures trading in the U.S. Additionally, it partnered with American Express to launch a credit card offering 4% bitcoin cashback. A Coinbase analyst also raised concerns about systemic risks from Bitcoin treasuries by publicly traded companies.
                    </p>
                </div>
            </div>

            {/* User Experience and Sentiment */}
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">User Experience & Sentiment</h3>
                <div className="space-y-4 text-gray-300 text-lg">
                    <p>
                        User experiences with Coinbase are mixed. Some appreciate its reliability due to regulatory compliance. However, criticisms are prevalent, with users describing the trading platform as clunky and outdated, and customer service as slow. High fees are a common complaint.
                    </p>
                    <p>
                        Positive notes include efforts to improve Coinbase Wallet, with Jesse Pollak expressing excitement about fixing UX issues.
                    </p>
                </div>
            </div>

            {/* Competitive Landscape */}
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">Competitive Landscape</h3>
                <div className="space-y-4 text-gray-300 text-lg">
                    <p>
                        Coinbase faces stiff competition from exchanges like Binance (lower fees), Robinhood (zero-commission trading), and Kraken (better customer service). Its strengths include a wide range of supported cryptocurrencies (over 17,000) and institutional services, but it lags in fees and advanced trading features compared to Binance.
                    </p>
                    <div className="overflow-x-auto mt-6">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr>
                                    <th className="border-b-2 border-yellow-500 p-4 text-yellow-500 uppercase tracking-wider font-bold text-sm">Metric</th>
                                    <th className="border-b-2 border-yellow-500 p-4 text-yellow-500 uppercase tracking-wider font-bold text-sm">Coinbase</th>
                                    <th className="border-b-2 border-yellow-500 p-4 text-yellow-500 uppercase tracking-wider font-bold text-sm">Binance</th>
                                    <th className="border-b-2 border-yellow-500 p-4 text-yellow-500 uppercase tracking-wider font-bold text-sm">Robinhood</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-gray-700">
                                    <td className="p-4 font-bold">User Base</td>
                                    <td className="p-4">100M+ users</td>
                                    <td className="p-4">90M+ users</td>
                                    <td className="p-4">23M+ users</td>
                                </tr>
                                <tr className="border-b border-gray-700">
                                    <td className="p-4 font-bold">Trading Fees</td>
                                    <td className="p-4">Up to 4% (retail)</td>
                                    <td className="p-4">0.1%</td>
                                    <td className="p-4">0% (commission-free)</td>
                                </tr>
                                <tr className="border-b border-gray-700">
                                    <td className="p-4 font-bold">Cryptocurrencies Supported</td>
                                    <td className="p-4">17,000+</td>
                                    <td className="p-4">358</td>
                                    <td className="p-4">Limited (e.g., BTC, ETH)</td>
                                </tr>
                                <tr className="border-b border-gray-700">
                                    <td className="p-4 font-bold">Regulatory Compliance</td>
                                    <td className="p-4">High (U.S.-focused)</td>
                                    <td className="p-4">Lower (offshore)</td>
                                    <td className="p-4">High (U.S.-focused)</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-bold">Market Cap (2025)</td>
                                    <td className="p-4">$60.9B</td>
                                    <td className="p-4">Private (est. $78B value)</td>
                                    <td className="p-4">$18.6B</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            
            {/* Conclusion */}
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">Conclusion</h3>
                <div className="space-y-4 text-gray-300 text-lg">
                    <p>
                        Coinbase is a pivotal player in the cryptocurrency exchange market, with a strong U.S. presence, robust financials, and a commitment to regulatory compliance. However, it faces challenges in user experience, fees, and competition from global leaders like Binance. Recent innovations and the dismissal of the SEC case suggest a path toward growth, but ongoing cybersecurity and user satisfaction issues remain critical areas for improvement.
                    </p>
                </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Ready to Get Started?
            </h3>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Create an account today and join the future of finance. It&apos;s secure, easy to use, and trusted by millions of users worldwide.
            </p>
            <Button size="lg" className="bg-yellow-500 text-black hover:bg-yellow-400 rounded-none border-2 border-yellow-600 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] hover:shadow-none transition-all duration-200 ease-in-out transform hover:-translate-y-1">
                <Link href="https://www.coinbase.com/signup" target="_blank">
                    Sign Up Now
                </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
