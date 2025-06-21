"use client";

export default function BlockPage() {
  return (
    <div className="min-h-screen bg-black text-white font-satoshi">
      {/* Premium header accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-8">
            <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">FINTECH • CRYPTO • DECENTRALIZATION</p>
            <h1 className="text-center">
              <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
                Block, Inc. (XYZ)
              </span>
            </h1>
            <div className="flex items-center justify-center mt-6">
              <div className="h-px w-24 bg-yellow-500/30"></div>
              <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">Pioneering Financial Access for All</p>
              <div className="h-px w-24 bg-yellow-500/30"></div>
            </div>
            
            <div className="relative w-full mx-auto mt-12 aspect-[16/9] overflow-hidden rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <iframe
                src="https://www.youtube.com/embed/EYCHFnxi7os"
                title="Block, Inc. Featured Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
            </div>
          </div>

          {/* Introduction Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              A Detailed Analysis of Block, Inc. as a Crypto-Related Stock
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                This is a detailed analysis of Block, Inc. (XYZ, formerly SQ) as a crypto-related stock, following the user&apos;s request to explore its initial public offering (IPO), business model, and financial performance in the context of its cryptocurrency exposure. This analysis builds on the user&apos;s prior interest in Circle (CRCL), Robinhood (HOOD), and NVIDIA (NVDA), and their focus on crypto-related investments, including Bitcoin and altcoins like Solana and Dogecoin. The data is current as of 3:32 PM CEST on Saturday, June 21, 2025, incorporating recent financial information and web search results where relevant. The response is concise yet comprehensive, aligning with the format provided for CRCL, HOOD, and NVDA.
              </p>
            </div>
          </div>

          {/* Key Points Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Key Points
            </h3>
            <div className="space-y-4 text-gray-300 prose prose-invert max-w-none prose-p:text-gray-300 prose-ul:text-gray-300 prose-headings:text-yellow-500">
                <ul>
                    <li>Block, Inc. (XYZ, formerly SQ) went public on November 19, 2015, at $9.00 per share, with the stock now at $63.73, reflecting significant growth.</li>
                    <li>Its business model centers on two segments: Square, offering payment solutions for merchants, and Cash App, enabling peer-to-peer payments, Bitcoin trading, and financial services.</li>
                    <li>Recent financials show Q1 2025 revenue of $5.77 billion (below $6.21 billion expected) and EPS of $0.56 (missing $0.98 forecast), with Bitcoin-related revenue at $3.5 billion.</li>
                    <li>Crypto exposure is driven by Cash App&apos;s Bitcoin trading and Block&apos;s investments in Bitcoin mining (Proto) and self-custody wallets (Bitkey).</li>
                </ul>
            </div>
          </div>
          
          {/* Financial Metrics Table */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
                Financial Snapshot (Q1 2025 & Real-Time Data)
            </h3>
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead className="border-b border-yellow-500/30">
                        <tr>
                            <th className="p-4 text-yellow-500 font-bold">Metric</th>
                            <th className="p-4 text-yellow-500 font-bold">Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-yellow-500/10">
                            <td className="p-4">Stock Price (June 21, 2025)</td>
                            <td className="p-4">$63.73</td>
                        </tr>
                        <tr className="border-b border-yellow-500/10">
                            <td className="p-4">Market Cap</td>
                            <td className="p-4">$38.85 Billion</td>
                        </tr>
                        <tr className="border-b border-yellow-500/10">
                            <td className="p-4">Q1 2025 Revenue</td>
                            <td className="p-4">$5.77 Billion</td>
                        </tr>
                        <tr className="border-b border-yellow-500/10">
                            <td className="p-4">Q1 2025 Adjusted EPS</td>
                            <td className="p-4">$0.56</td>
                        </tr>
                         <tr className="border-b border-yellow-500/10">
                            <td className="p-4">Q1 Bitcoin Revenue</td>
                            <td className="p-4">$3.5 Billion</td>
                        </tr>
                        <tr className="border-b border-yellow-500/10">
                            <td className="p-4">IPO Price (Nov 2015)</td>
                            <td className="p-4">$9.00</td>
                        </tr>
                        <tr>
                            <td className="p-4">Analyst 12-Month Target</td>
                            <td className="p-4">$74.07 (17.4% Upside)</td>
                        </tr>
                    </tbody>
                </table>
            </div>
          </div>
          
          {/* Detailed Analysis Section */}
          <div className="space-y-12">
            {[
              { title: "IPO Overview", content: "Block, Inc., formerly Square, Inc., went public on November 19, 2015, on the New York Stock Exchange (NYSE) under the ticker SQ at $9.00 per share, raising approximately $243 million with a valuation of about $2.9 billion. The stock surged 45% on its debut, closing at $13.07. As of June 20, 2025, the stock price is $63.73 (previous close $63.09), reflecting a 608% increase from the IPO price. The ticker changed to XYZ on January 21, 2025, to align with the company&apos;s rebranding to Block in December 2021. The 52-week range is $60.08 to $100.22, with a peak of $281.81 on August 5, 2021, and a low of $8.37 on February 8, 2016. The market cap is approximately $38.85 billion as of June 2025." },
              { title: "Business Model Analysis", content: "Block, Inc. operates two primary segments—Square and Cash App—with additional ventures like TIDAL, TBD, Bitkey, and Proto, focusing on financial technology and cryptocurrency integration. Its business model emphasizes inclusive financial ecosystems for merchants and consumers, with significant crypto exposure. Revenue Streams: Transaction fees from Square&apos;s payment processing, Bitcoin trading fees via Cash App ($3.5 billion in Q1 2025), subscription and service fees, hardware sales, and lending interest." },
              { title: "Crypto Market Context", content: "Block&apos;s crypto exposure is significant. Cash App&apos;s Bitcoin trading generated $3.5 billion in Q1 2025 revenue. Proto&apos;s open mining system and chip manufacturing aim to democratize mining. TBD and Bitkey enhance Block&apos;s DeFi and custody offerings. The crypto market&apos;s $3.22 trillion cap and Bitcoin&apos;s 64.26% dominance drive Block&apos;s upside." },
              { title: "Comparison to CRCL, HOOD, and NVDA", content: "CRCL ($199.59) is focused on USDC stablecoin. HOOD ($78.50) is a broader trading platform. NVDA ($143.85) provides the hardware backbone for mining and AI. Block&apos;s Edge: Combines merchant payments (Square) with consumer crypto services (Cash App), offering diversified exposure. Its Bitcoin mining and DeFi initiatives provide deeper crypto integration." },
              { title: "Risks", content: "Earnings Misses: Q1 2025 missed revenue and EPS estimates. Crypto Volatility: Bitcoin-related revenue is tied to market fluctuations. Competition: Faces competition from Stripe, PayPal, and Coinbase. Macro Sensitivity: Small merchant base is vulnerable to economic downturns." },
              { title: "Why Explore XYZ?", content: "Crypto Exposure: Cash App&apos;s Bitcoin revenue and Proto&apos;s mining initiatives align with crypto interests. Fintech Growth: Square&apos;s profit growth and Afterpay integration tap into digital payment trends. Analyst Optimism: Strong 'Buy' ratings and a 12-month target of $74.07. Long-Term Potential: Forecasts predict significant upside by 2025 and 2030." },
            ].map((item, index) => (
              <div key={index} className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
                  {item.title}
                </h3>
                <div className="space-y-4 text-gray-300 prose prose-invert max-w-none prose-p:text-gray-300">
                  <p>{item.content}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Conclusion Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Conclusion
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                Block, Inc. (XYZ) is a compelling crypto-related stock due to its Cash App Bitcoin trading, Bitkey wallet, and Proto mining initiatives, complemented by Square&apos;s fintech ecosystem. Its 2015 IPO at $9.00 has grown to $63.73, with a 608% increase, though recent earnings misses highlight risks. Compared to CRCL, HOOD, and NVDA, Block offers a unique blend of direct crypto exposure and diversified fintech revenue, aligning with your interest in Bitcoin and altcoins. Monitor Bitcoin&apos;s price and Block&apos;s Q2 2025 earnings (July 31, 2025) for further catalysts.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
