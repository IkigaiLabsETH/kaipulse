"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import StockMarket from "@/components/StockMarket";
import { stocks, comparisonData } from "@/data/stocks-data";

export default function StocksPage() {
  return (
    <div className="min-h-screen bg-black text-white font-satoshi">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="space-y-16">
          <div className="text-center space-y-8">
            <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">
              Crypto-Related Equities
            </p>
            <h1 className="text-center">
              <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
                Tickers to Explore
              </span>
            </h1>
            <div className="flex items-center justify-center mt-6">
              <div className="h-px w-24 bg-yellow-500/30"></div>
              <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">
                Analysis for 2025
              </p>
              <div className="h-px w-24 bg-yellow-500/30"></div>
            </div>
          </div>

          <div className="relative w-full mx-auto -mt-8">
            <StockMarket />
          </div>
        
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <p className="text-gray-300">
                Below is a focused analysis of crypto-related stock tickers worth exploring in 2025, based on their exposure to cryptocurrencies, blockchain technology, or related financial services. These selections are informed by recent market trends, regulatory developments, and the user&apos;s prior interest in Circle (CRCL) and Robinhood (HOOD), as well as their expressed preference for cryptocurrencies over stocks. The analysis is concise yet comprehensive, highlighting key reasons for exploration, financial metrics, and potential risks, while avoiding speculative or unverified claims.
            </p>
          </div>

          {stocks.map((stock) => (
            <div key={stock.ticker} className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              {stock.path ? (
                <Link href={stock.path}>
                  <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6 hover:underline">
                    {stock.name} ({stock.ticker})
                  </h3>
                </Link>
              ) : (
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
                  {stock.name} ({stock.ticker})
                </h3>
              )}
              
              <div className="space-y-6 text-gray-300 prose prose-invert max-w-none prose-p:text-gray-300 prose-headings:text-yellow-500">
                <div>
                  <h4>Overview</h4>
                  <p>{stock.description}</p>
                </div>
                <div>
                  <h4>Why Explore?</h4>
                  <ul className="list-disc list-inside">
                    {stock.whyExplore.map((point, index) => <li key={index}>{point}</li>)}
                  </ul>
                </div>
                <div>
                  <h4>Financial Metrics (as of June 2025)</h4>
                   <ul className="list-disc list-inside">
                        <li><strong>Stock Price:</strong> {stock.financials.price}</li>
                        <li><strong>Market Cap:</strong> {stock.financials.marketCap}</li>
                        <li><strong>YTD Return:</strong> {stock.financials.ytdReturn}</li>
                        <li><strong>P/E Ratio:</strong> {stock.financials.peRatio}</li>
                   </ul>
                </div>
                 <div>
                    <h4>Risks</h4>
                    <ul className="list-disc list-inside">
                        {stock.risks.map((risk, index) => <li key={index}>{risk}</li>)}
                    </ul>
                </div>
                <div>
                    <h4>Recent Developments</h4>
                    <p>{stock.recentDev}</p>
                </div>
                <div>
                    <h4>Why Now?</h4>
                    <p>{stock.whyNow}</p>
                </div>
              </div>
            </div>
          ))}

            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
                    Comparison Table of Crypto-Related Stocks
                </h3>
                <div className="overflow-x-auto">
                <Table>
                    <TableHeader>
                    <TableRow className="border-yellow-500/30">
                        <TableHead className="text-yellow-500 font-bold">Ticker</TableHead>
                        <TableHead className="text-yellow-500 font-bold">Company</TableHead>
                        <TableHead className="text-yellow-500 font-bold">Primary Crypto Exposure</TableHead>
                        <TableHead className="text-yellow-500 font-bold">Stock Price</TableHead>
                        <TableHead className="text-yellow-500 font-bold">Market Cap</TableHead>
                        <TableHead className="text-yellow-500 font-bold">YTD Return</TableHead>
                        <TableHead className="text-yellow-500 font-bold">Key Risk</TableHead>
                    </TableRow>
                    </TableHeader>
                    <TableBody>
                    {comparisonData.map((row) => (
                        <TableRow key={row.ticker} className="border-yellow-500/10">
                            <TableCell>{row.ticker}</TableCell>
                            <TableCell>{row.company}</TableCell>
                            <TableCell>{row.exposure}</TableCell>
                            <TableCell>{row.price}</TableCell>
                            <TableCell>{row.marketCap}</TableCell>
                            <TableCell>{row.ytdReturn}</TableCell>
                            <TableCell>{row.risk}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </div>
            </div>
            
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">Why These Stocks?</h3>
                <ul className="space-y-4 text-gray-300 list-disc list-inside">
                    <li>
                        <strong>Diverse Exposure:</strong> These stocks cover different facets of the crypto ecosystem—exchanges (<Link href="/coinbase" className="text-yellow-400 hover:underline">COIN</Link>), Bitcoin holdings (<Link href="/platforms/msty/mstr" className="text-yellow-400 hover:underline">MSTR</Link>), mining (<Link href="/mara" className="text-yellow-400 hover:underline">MARA</Link>), payments (<Link href="/block" className="text-yellow-400 hover:underline">XYZ</Link>), and infrastructure (<Link href="/nvda" className="text-yellow-400 hover:underline">NVDA</Link>)—reducing reliance on a single segment.
                    </li>
                    <li>
                        <strong>Regulatory Momentum:</strong> Recent developments, like the GENIUS Act and SEC dismissals, benefit <Link href="/coinbase" className="text-yellow-400 hover:underline">COIN</Link>, <Link href="/crcl" className="text-yellow-400 hover:underline">CRCL</Link>, and <Link href="/hood" className="text-yellow-400 hover:underline">HOOD</Link>, while <Link href="/platforms/msty/mstr" className="text-yellow-400 hover:underline">MSTR</Link> and <Link href="/mara" className="text-yellow-400 hover:underline">MARA</Link> ride Bitcoin&apos;s price surge.
                    </li>
                    <li>
                        <strong>Institutional Adoption:</strong> Growing institutional interest in crypto (e.g., BlackRock&apos;s Bitcoin ETF) supports these companies&apos; growth prospects.
                    </li>
                </ul>
            </div>
            
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">Additional Considerations</h3>
                <div className="space-y-4 text-gray-300">
                    <div>
                        <h4 className="font-bold text-yellow-400">Other Tickers to Monitor:</h4>
                        <ul className="list-disc list-inside pl-4">
                            <li><strong>Riot Platforms (RIOT):</strong> Another Bitcoin mining company, similar to MARA, with a focus on institutional-scale operations.</li>
                            <li><strong>PayPal Holdings (PYPL):</strong> Expanding crypto payment options, with over 300 million active accounts.</li>
                            <li><strong>Sol Strategies (HODL/STKE):</strong> A Solana-focused company seeking a Nasdaq listing, offering direct exposure to Solana&apos;s ecosystem, which aligns with your altcoin interest.</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-yellow-400">Risk Management:</h4>
                        <p>Given your interest in high-risk tokens (e.g., Pudgy Penguin, Dogwifhat), these stocks offer a more regulated alternative, but volatility remains. Start with small positions and monitor crypto market trends.</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-yellow-400">Market Context:</h4>
                        <p>The crypto market cap is $3.22 trillion, with Bitcoin&apos;s dominance at 64.26%. Stablecoins and altcoins are driving volume, benefiting <Link href="/crcl" className="text-yellow-400 hover:underline">CRCL</Link>, <Link href="/coinbase" className="text-yellow-400 hover:underline">COIN</Link>, and <Link href="/hood" className="text-yellow-400 hover:underline">HOOD</Link>.</p>
                    </div>
                </div>
            </div>

            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">Conclusion</h3>
                <div className="space-y-4 text-gray-300">
                  <p>
                    The companies analyzed—<Link href="/crcl" className="text-yellow-400 hover:underline">CRCL</Link>, <Link href="/hood" className="text-yellow-400 hover:underline">HOOD</Link>, <Link href="/nvda" className="text-yellow-400 hover:underline">NVDA</Link>, <Link href="/block" className="text-yellow-400 hover:underline">XYZ</Link>, and <Link href="/tesla" className="text-yellow-400 hover:underline">TSLA</Link>—represent a full spectrum of crypto-related investment opportunities. They span stablecoins (<Link href="/crcl" className="text-yellow-400 hover:underline">CRCL</Link>), trading platforms (<Link href="/hood" className="text-yellow-400 hover:underline">HOOD</Link>), essential infrastructure (<Link href="/nvda" className="text-yellow-400 hover:underline">NVDA</Link>), integrated payments and mining (<Link href="/block" className="text-yellow-400 hover:underline">XYZ</Link>), and corporate Bitcoin holdings coupled with high-profile advocacy (<Link href="/tesla" className="text-yellow-400 hover:underline">TSLA</Link>).
                  </p>
                  <p>
                    For investors seeking direct crypto exposure through traditional markets, <Link href="/crcl" className="text-yellow-400 hover:underline">CRCL</Link> and <Link href="/block" className="text-yellow-400 hover:underline">XYZ</Link> stand out. Their business models are deeply intertwined with the success of stablecoins and Bitcoin, respectively. Conversely, <Link href="/nvda" className="text-yellow-400 hover:underline">NVDA</Link> and <Link href="/tesla" className="text-yellow-400 hover:underline">TSLA</Link> offer a diversified approach, mitigating crypto&apos;s inherent volatility with leadership in the AI and EV sectors. This ability to leverage traditional markets while tapping into crypto trends validates the observation that significant capital remains just outside the native crypto ecosystem, seeking familiar, regulated entry points.
                  </p>
                  <p>
                    This selection aligns closely with a strategic interest in Bitcoin, altcoins like Solana, and the growing AI-blockchain nexus. The recent pro-crypto regulatory shifts, including the GENIUS Act and key SEC decisions, further bolster the investment thesis for these regulated entities. By monitoring crypto market dynamics, ongoing regulatory developments, and company-specific catalysts, investors can effectively navigate the risks and rewards within this compelling and rapidly evolving sector.
                  </p>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
}