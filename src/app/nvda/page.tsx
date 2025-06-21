"use client";

export default function NvdaPage() {
  return (
    <div className="min-h-screen bg-black text-white font-satoshi">
      {/* Premium header accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-8">
            <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">GPU • AI • CRYPTO INFRASTRUCTURE</p>
            <h1 className="text-center">
              <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
                NVIDIA (NVDA)
              </span>
            </h1>
            <div className="flex items-center justify-center mt-6">
              <div className="h-px w-24 bg-yellow-500/30"></div>
              <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">The Engine of the AI and Crypto Revolutions</p>
              <div className="h-px w-24 bg-yellow-500/30"></div>
            </div>
            
            <div className="relative w-full mx-auto mt-12 aspect-[16/9] overflow-hidden rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <iframe
                src="https://www.youtube.com/embed/X9cHONwKkn4"
                title="NVIDIA Featured Video"
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
              Focused Analysis of NVIDIA as a Crypto-Related Stock
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                Below is a focused analysis of NVIDIA Corporation (NVDA) as a crypto-related stock, building on its inclusion in the previous response as a key ticker to explore due to its role in supplying graphics processing units (GPUs) critical for cryptocurrency mining, blockchain applications, and AI. This analysis provides a detailed examination of NVIDIA&apos;s initial public offering (IPO), business model, recent financial performance, and market position, particularly in the context of its crypto exposure. The data is based on the most recent information available as of 3:30 PM CEST on Saturday, June 21, 2025, including real-time financial data provided, which takes precedence over other sources for stock price and metrics. The response is concise yet comprehensive, addressing the user&apos;s interest in crypto-related stocks and their prior exploration of Circle (CRCL) and Robinhood (HOOD).
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
                    <li>NVIDIA (NVDA) went public in January 1999 at a split-adjusted $0.0438 per share, with the stock now at $143.85, reflecting extraordinary growth.</li>
                    <li>Its business model centers on designing GPUs and accelerated computing platforms, with significant crypto exposure through mining and blockchain applications.</li>
                    <li>Recent financials show 69% revenue growth to $44.1 billion in Q1 FY2026, driven by AI and data center demand, which overlaps with crypto mining needs.</li>
                    <li>Crypto mining is a smaller but notable revenue driver, with GPUs like the GeForce RTX series used for Bitcoin and altcoin mining.</li>
                </ul>
            </div>
          </div>
          
          {/* Financial Metrics Table */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
                Financial Snapshot (Q1 FY2026 & Real-Time Data)
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
                            <td className="p-4">$143.85</td>
                        </tr>
                        <tr className="border-b border-yellow-500/10">
                            <td className="p-4">Market Cap</td>
                            <td className="p-4">$3.46 Trillion</td>
                        </tr>
                        <tr className="border-b border-yellow-500/10">
                            <td className="p-4">Q1 FY2026 Revenue</td>
                            <td className="p-4">$44.1 Billion (+69% YoY)</td>
                        </tr>
                        <tr className="border-b border-yellow-500/10">
                            <td className="p-4">Q1 FY2026 Adjusted EPS</td>
                            <td className="p-4">$0.96</td>
                        </tr>
                         <tr className="border-b border-yellow-500/10">
                            <td className="p-4">Data Center Revenue (Q1)</td>
                            <td className="p-4">$35.4 Billion (+73% YoY)</td>
                        </tr>
                        <tr className="border-b border-yellow-500/10">
                            <td className="p-4">Split-Adjusted IPO Price (1999)</td>
                            <td className="p-4">$0.0438</td>
                        </tr>
                        <tr>
                            <td className="p-4">Analyst 12-Month Target</td>
                            <td className="p-4">$174.22 (21% Upside)</td>
                        </tr>
                    </tbody>
                </table>
            </div>
          </div>
          
          {/* Detailed Analysis Section */}
          <div className="space-y-12">
            {[
              { title: "IPO Overview", content: "NVIDIA Corporation went public on January 22, 1999, at a split-adjusted price of $0.0438 per share on the NASDAQ under the ticker NVDA. The IPO raised approximately $42 million, valuing the company at around $600 million. As of June 21, 2025, the stock price is $143.85 (per real-time data), representing a staggering increase of over 328,000% from the IPO price, adjusted for splits, including a ten-for-one split in June 2024. The stock’s all-time high was $153.13 on January 7, 2025, and its 52-week range is $86.62 to $153.13." },
              { title: "Business Model Analysis", content: "NVIDIA’s business model focuses on designing and manufacturing GPUs, accelerated computing platforms, and related software, serving markets like gaming, AI, data centers, automotive, and blockchain. Its crypto exposure stems from GPUs used in cryptocurrency mining... Key components include: Compute & Networking Segment (~80% of revenue), Graphics Segment. Revenue Streams: Hardware Sales, Software & Services (CUDA), Licensing. Crypto Relevance: During the 2021 crypto boom, NVIDIA’s GPUs were in high demand for Ethereum mining... NVIDIA’s leadership in accelerated computing, driven by CEO Jensen Huang, positions it as a critical infrastructure provider for both AI and crypto." },
              { title: "Crypto Market Context", content: "NVIDIA’s crypto exposure is indirect but significant: Mining Demand (GeForce RTX 3090/4090 for Bitcoin, Ravencoin), Blockchain Applications (DGX systems for DeFi/NFTs), and AI-Crypto Overlap (Blackwell chips for tokenized asset platforms). Posts on X note NVIDIA’s CUDA software as a competitive edge for mining and AI." },
              { title: "Comparison to CRCL and HOOD", content: "CRCL (Circle) focuses on stablecoins ($199.59 price, interest-based revenue). HOOD (Robinhood) offers crypto trading ($78.50 price, transaction-based revenue). NVDA’s Edge: Unlike CRCL’s niche or HOOD’s trading focus, NVIDIA powers the computational backbone of crypto mining and blockchain, offering diversified exposure across AI, gaming, and automotive. Its $3.46 trillion market cap dwarfs CRCL ($18.4 billion) and HOOD ($69.3 billion)." },
              { title: "Risks", content: "Crypto Volatility: Mining demand fluctuates with crypto prices. Export Restrictions: $8 billion in lost China revenue (H20 chips) could pressure margins. Competition: AMD and Intel challenge NVIDIA’s GPU dominance. Valuation: High market cap and premium valuation increase downside risk." },
              { title: "Why Explore NVDA?", content: "Crypto Infrastructure: GPUs are essential for mining and blockchain. AI Synergy: NVIDIA’s AI leadership complements crypto’s computational needs, reducing reliance on volatile mining demand. Financial Strength: 69% revenue growth and $44.1 billion in Q1 FY2026 showcase resilience. User Relevance: Your interest in AI tokens and crypto payments makes NVDA’s AI-blockchain overlap compelling." },
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
                NVIDIA (NVDA) is a premier crypto-related stock due to its GPUs&apos; critical role in mining and blockchain, complemented by its dominance in AI and data centers. Its IPO in 1999 marked the start of a remarkable growth trajectory, with the stock now at $143.85, up over 328,000% split-adjusted. The business model, driven by hardware sales and software like CUDA, supports crypto and AI applications, with Q1 FY2026 revenue of $44.1 billion underscoring its strength. Compared to CRCL and HOOD, NVDA offers broader exposure and stability, though crypto volatility and competition pose risks. Monitor Bitcoin&apos;s price and regulatory developments for cues on NVDA&apos;s crypto-driven performance.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}