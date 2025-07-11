"use client";

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function OnchainPage() {
  return (
    <div className="min-h-screen bg-black text-white font-satoshi">
      {/* Premium header accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-8">
            <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">Tokenized Assets • Digital Securities • DeFi Innovation</p>
            <h1 className="text-center">
              <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
                Onchain Stocks
              </span>
            </h1>
            <div className="flex items-center justify-center mt-6">
              <div className="h-px w-24 bg-yellow-500/30"></div>
              <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">The Future of Traditional Finance</p>
              <div className="h-px w-24 bg-yellow-500/30"></div>
            </div>
            
            {/* Key Points */}
            <div className="relative w-full mx-auto mt-12 bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">Key Points</h3>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="space-y-3">
                  <h4 className="text-lg font-bold text-yellow-400">Research Insights</h4>
                  <p className="text-white/80 font-satoshi">Tokenized stocks and private equity, like xStocks on Solana, are gaining traction as new alternative investments with enhanced accessibility.</p>
                </div>
                <div className="space-y-3">
                  <h4 className="text-lg font-bold text-yellow-400">Platform Adoption</h4>
                  <p className="text-white/80 font-satoshi">Major platforms like Robinhood, Kraken, and Gemini are driving this trend, offering 24/7 trading and global access to traditional assets.</p>
                </div>
                <div className="space-y-3">
                  <h4 className="text-lg font-bold text-yellow-400">Market Evolution</h4>
                  <p className="text-white/80 font-satoshi">Following ICOs, DeFi, NFTs, and memecoins, onchain stocks represent the next cycle in blockchain-based financial innovation.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Overview Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Tokenized Assets Revolution
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                Tokenized stocks and private equity represent a fundamental shift in how traditional assets are accessed, traded, and owned. By converting conventional securities into digital tokens on blockchains, this innovation enables fractional ownership, 24/7 trading capabilities, and unprecedented global accessibility.
              </p>
              <p className="text-lg">
                This transformation follows the natural evolution of blockchain adoption cycles - from ICOs to DeFi, NFTs to memecoins, and now to onchain stocks as the next major alternative investment category.
              </p>
              <div className="mt-6">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Core Benefits:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>Fractional ownership of high-value assets</li>
                  <li>24/7 trading outside traditional market hours</li>
                  <li>Global accessibility without geographical barriers</li>
                  <li>Enhanced liquidity through blockchain infrastructure</li>
                  <li>Lower barriers to entry for retail investors</li>
                  <li>Integration with DeFi protocols and yield strategies</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">⛓️</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Blockchain Native
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                Built on Solana & Arbitrum
              </p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">🏦</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Real Assets
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                1:1 Backed by Actual Shares
              </p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">🌍</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Global Access
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                24/7 Worldwide Trading
              </p>
            </div>
          </div>

          {/* Platform Analysis */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Major Platform Initiatives
            </h3>
            <div className="space-y-8">
              {/* Robinhood */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Robinhood - Leading the Private Equity Revolution</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    Launched on June 30, 2025, Robinhood&apos;s tokenized stocks initiative in the EU represents the most comprehensive offering to date. Beyond traditional stocks, they&apos;ve pioneered access to private equity giants like OpenAI and SpaceX, previously reserved for institutional investors and accredited individuals.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Key Features:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside">
                        <li>200+ US stocks and ETFs</li>
                        <li>Private equity access (OpenAI, SpaceX)</li>
                        <li>Custom Arbitrum-based blockchain</li>
                        <li>24/7 trading capabilities</li>
                        <li>EU market focus</li>
                        <li>Institutional-grade infrastructure</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Innovation:</h5>
                      <p className="text-white/80 font-satoshi">First major platform to tokenize private equity, breaking down traditional barriers to high-value alternative investments.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Kraken */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Kraken - Solana-Powered xStocks Ecosystem</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    Partnering with Backed Finance, Kraken launched xStocks on May 22, 2025, leveraging Solana&apos;s high-performance blockchain and the advanced token2022 program. This implementation offers seamless DeFi integration from day one, positioning tokenized stocks within the broader Solana ecosystem.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Technical Stack:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside">
                        <li>Solana blockchain infrastructure</li>
                        <li>Token2022 program features</li>
                        <li>50+ tokenized stocks and ETFs</li>
                        <li>1:1 backing by real shares</li>
                        <li>Non-US market availability</li>
                        <li>Native DeFi integration</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Partnership:</h5>
                      <p className="text-white/80 font-satoshi">Backed Finance collaboration ensures regulatory compliance and asset backing, creating trust in the tokenization process.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Gemini */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Gemini - Arbitrum-Based Strategic Expansion</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    Starting with MicroStrategy (MSTR) on June 27, 2025, Gemini&apos;s measured approach focuses on quality over quantity. Using the Arbitrum network and partnering with Dinari, they&apos;re building a foundation for broader tokenized equity offerings in the European market.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Launch Strategy:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside">
                        <li>Initial focus on MSTR tokens</li>
                        <li>Arbitrum network integration</li>
                        <li>EU regulatory compliance</li>
                        <li>Fractional ownership enabled</li>
                        <li>Planned expansion roadmap</li>
                        <li>Dinari partnership</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Vision:</h5>
                      <p className="text-white/80 font-satoshi">Methodical expansion focusing on regulatory clarity and user experience, setting standards for tokenized equity trading.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Market Analysis */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Market Potential & Future Outlook
            </h3>
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-yellow-400 mb-4">Market Size Projections</h4>
                  <p className="text-white/80 font-satoshi mb-4">
                    According to McKinsey research, tokenized assets could reach $24 trillion by 2027, representing 10% of global GDP. This massive market opportunity is driven by increased accessibility, enhanced liquidity, and the natural evolution of financial infrastructure toward blockchain-based solutions.
                  </p>
                  <ul className="text-white/80 font-satoshi list-disc list-inside space-y-1">
                    <li>$24T projected market size by 2027</li>
                    <li>10% of global GDP representation</li>
                    <li>Growing institutional adoption</li>
                    <li>Regulatory framework development</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-yellow-400 mb-4">Innovation Cycles</h4>
                  <p className="text-white/80 font-satoshi mb-4">
                    The progression from ICOs to DeFi, NFTs to memecoins, and now to tokenized stocks represents the natural maturation of blockchain technology. Each cycle has brought increasing sophistication and real-world utility, with onchain stocks potentially offering the most practical application to date.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-yellow-500">→</span>
                      <span className="text-white/80 font-satoshi">ICOs (2017-2018)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-yellow-500">→</span>
                      <span className="text-white/80 font-satoshi">DeFi Summer (2020)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-yellow-500">→</span>
                      <span className="text-white/80 font-satoshi">NFT Boom (2021-2022)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-yellow-500">→</span>
                      <span className="text-white/80 font-satoshi">Memecoin Era (2023-2024)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-yellow-500">→</span>
                      <span className="text-white/80 font-satoshi font-bold">Tokenized Stocks (2025+)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Platform Comparison */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Platform Comparison
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-yellow-500/30">
                    <th className="pb-4 text-yellow-400 font-epilogue">Platform</th>
                    <th className="pb-4 text-yellow-400 font-epilogue">Launch Date</th>
                    <th className="pb-4 text-yellow-400 font-epilogue">Region</th>
                    <th className="pb-4 text-yellow-400 font-epilogue">Blockchain</th>
                    <th className="pb-4 text-yellow-400 font-epilogue">Key Offerings</th>
                    <th className="pb-4 text-yellow-400 font-epilogue">Private Equity</th>
                  </tr>
                </thead>
                <tbody className="text-white/80 font-satoshi">
                  <tr className="border-b border-yellow-500/10">
                    <td className="py-4 font-bold">Robinhood</td>
                    <td className="py-4">June 30, 2025</td>
                    <td className="py-4">EU</td>
                    <td className="py-4">Arbitrum</td>
                    <td className="py-4">200+ US stocks, ETFs, OpenAI, SpaceX</td>
                    <td className="py-4 text-green-400">Yes</td>
                  </tr>
                  <tr className="border-b border-yellow-500/10">
                    <td className="py-4 font-bold">Kraken</td>
                    <td className="py-4">May 22, 2025</td>
                    <td className="py-4">Non-US</td>
                    <td className="py-4">Solana</td>
                    <td className="py-4">50+ stocks, ETFs (xStocks)</td>
                    <td className="py-4 text-red-400">No</td>
                  </tr>
                  <tr>
                    <td className="py-4 font-bold">Gemini</td>
                    <td className="py-4">June 27, 2025</td>
                    <td className="py-4">EU</td>
                    <td className="py-4">Arbitrum</td>
                    <td className="py-4">MicroStrategy (MSTR), expanding</td>
                    <td className="py-4 text-red-400">No</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Featured Projects Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Leading Tokenization Projects
            </h3>
            <p className="text-base md:text-lg text-white/80 font-satoshi mb-8 text-center leading-relaxed">
              Explore the pioneering projects driving the tokenized assets revolution across different blockchain ecosystems.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-black p-6 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <CardHeader>
                  <CardTitle className="font-epilogue text-xl text-yellow-400">xStocks</CardTitle>
                  <p className="text-white/60 font-satoshi text-sm">Solana Ecosystem</p>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 font-satoshi mb-4">Built on Solana using token2022, offering 60+ tokenized stocks and ETFs with native DeFi integration and 1:1 backing by real shares.</p>
                  <div className="flex flex-col gap-2">
                    <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-none hover:bg-yellow-400 transition-all duration-300 w-full">
                      Explore xStocks
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black p-6 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <CardHeader>
                  <CardTitle className="font-epilogue text-xl text-yellow-400">Backed Finance</CardTitle>
                  <p className="text-white/60 font-satoshi text-sm">Infrastructure Provider</p>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 font-satoshi mb-4">Leading infrastructure provider enabling tokenized equity solutions with regulatory compliance and institutional-grade security standards.</p>
                  <div className="flex flex-col gap-2">
                    <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-none hover:bg-yellow-400 transition-all duration-300 w-full">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black p-6 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <CardHeader>
                  <CardTitle className="font-epilogue text-xl text-yellow-400">Dinari</CardTitle>
                  <p className="text-white/60 font-satoshi text-sm">Arbitrum Partnership</p>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 font-satoshi mb-4">Partnering with Gemini to bring tokenized equities to Arbitrum, focusing on regulatory compliance and user experience in the EU market.</p>
                  <div className="flex flex-col gap-2">
                    <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-none hover:bg-yellow-400 transition-all duration-300 w-full">
                      Discover Dinari
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Complete Asset Directory */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Complete Tokenized Asset Directory
            </h3>
            <p className="text-base md:text-lg text-white/80 font-satoshi mb-8 text-center leading-relaxed">
              Comprehensive list of all available tokenized stocks and ETFs from Backed Finance, offering 1:1 backing by real assets and 24/7 trading capabilities.
            </p>
            
            {/* Asset Categories */}
            <div className="space-y-8">
              {/* xStocks Section */}
              <div>
                <h4 className="text-xl font-bold text-yellow-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">⚡</span>
                  xStocks (Solana-Based)
                </h4>
                <p className="text-white/70 font-satoshi mb-6">Next-generation tokenized stocks on Solana with DeFi integration</p>
                
                {/* Tech Giants */}
                <div className="mb-6">
                  <h5 className="text-lg font-bold text-yellow-300 mb-3">Technology Giants</h5>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {[
                      { name: "Apple", symbol: "AAPLx" },
                      { name: "Microsoft", symbol: "MSFTx" },
                      { name: "NVIDIA", symbol: "NVDAx" },
                      { name: "Alphabet", symbol: "GOOGLx" },
                      { name: "Amazon", symbol: "AMZNx" },
                      { name: "Meta", symbol: "METAx" },
                      { name: "Tesla", symbol: "TSLAx" },
                      { name: "Netflix", symbol: "NFLXx" },
                      { name: "Oracle", symbol: "ORCLx" },
                      { name: "Cisco", symbol: "CSCOx" },
                      { name: "Intel", symbol: "INTCx" },
                      { name: "Broadcom", symbol: "AVGOx" },
                      { name: "Salesforce", symbol: "CRMx" },
                      { name: "Palantir", symbol: "PLTRx" },
                      { name: "CrowdStrike", symbol: "CRWDx" },
                      { name: "Marvell", symbol: "MRVLx" },
                      { name: "AppLovin", symbol: "APPx" },
                      { name: "IBM", symbol: "IBMx" }
                    ].map((stock) => (
                      <div key={stock.symbol} className="bg-black/50 p-3 rounded-none border border-yellow-500/20 hover:border-yellow-500/40 transition-all">
                        <p className="text-white font-satoshi text-sm font-bold">{stock.name}</p>
                        <p className="text-yellow-400 font-satoshi text-xs">{stock.symbol}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Financial Services */}
                <div className="mb-6">
                  <h5 className="text-lg font-bold text-yellow-300 mb-3">Financial Services</h5>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {[
                      { name: "JPMorgan Chase", symbol: "JPMx" },
                      { name: "Bank of America", symbol: "BACx" },
                      { name: "Berkshire Hathaway", symbol: "BRK.Bx" },
                      { name: "Goldman Sachs", symbol: "GSx" },
                      { name: "Visa", symbol: "Vx" },
                      { name: "Mastercard", symbol: "MAx" },
                      { name: "Coinbase", symbol: "COINx" },
                      { name: "MicroStrategy", symbol: "MSTRx" },
                      { name: "Robinhood", symbol: "HOODx" },
                      { name: "Circle", symbol: "CRCLx" }
                    ].map((stock) => (
                      <div key={stock.symbol} className="bg-black/50 p-3 rounded-none border border-yellow-500/20 hover:border-yellow-500/40 transition-all">
                        <p className="text-white font-satoshi text-sm font-bold">{stock.name}</p>
                        <p className="text-yellow-400 font-satoshi text-xs">{stock.symbol}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Healthcare & Pharma */}
                <div className="mb-6">
                  <h5 className="text-lg font-bold text-yellow-300 mb-3">Healthcare & Pharmaceuticals</h5>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {[
                      { name: "Johnson & Johnson", symbol: "JNJx" },
                      { name: "UnitedHealth", symbol: "UNHx" },
                      { name: "Pfizer", symbol: "PFEx" },
                      { name: "AbbVie", symbol: "ABBVx" },
                      { name: "Eli Lilly", symbol: "LLYx" },
                      { name: "Merck", symbol: "MRKx" },
                      { name: "Abbott", symbol: "ABTx" },
                      { name: "Thermo Fisher", symbol: "TMOx" },
                      { name: "Danaher", symbol: "DHRx" },
                      { name: "Medtronic", symbol: "MDTx" },
                      { name: "AstraZeneca", symbol: "AZNx" },
                      { name: "Novo Nordisk", symbol: "NVOx" }
                    ].map((stock) => (
                      <div key={stock.symbol} className="bg-black/50 p-3 rounded-none border border-yellow-500/20 hover:border-yellow-500/40 transition-all">
                        <p className="text-white font-satoshi text-sm font-bold">{stock.name}</p>
                        <p className="text-yellow-400 font-satoshi text-xs">{stock.symbol}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Consumer & Industrial */}
                <div className="mb-6">
                  <h5 className="text-lg font-bold text-yellow-300 mb-3">Consumer & Industrial</h5>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {[
                      { name: "Walmart", symbol: "WMTx" },
                      { name: "Coca-Cola", symbol: "KOx" },
                      { name: "PepsiCo", symbol: "PEPx" },
                      { name: "Procter & Gamble", symbol: "PGx" },
                      { name: "McDonald's", symbol: "MCDx" },
                      { name: "Home Depot", symbol: "HDx" },
                      { name: "Chevron", symbol: "CVXx" },
                      { name: "Exxon Mobil", symbol: "XOMx" },
                      { name: "Honeywell", symbol: "HONx" },
                      { name: "Linde", symbol: "LINx" },
                      { name: "Philip Morris", symbol: "PMx" },
                      { name: "Comcast", symbol: "CMCSAx" },
                      { name: "Accenture", symbol: "ACNx" },
                      { name: "Gamestop", symbol: "GMEx" },
                      { name: "Amber", symbol: "AMBRx" }
                    ].map((stock) => (
                      <div key={stock.symbol} className="bg-black/50 p-3 rounded-none border border-yellow-500/20 hover:border-yellow-500/40 transition-all">
                        <p className="text-white font-satoshi text-sm font-bold">{stock.name}</p>
                        <p className="text-yellow-400 font-satoshi text-xs">{stock.symbol}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ETFs & Indexes */}
                <div className="mb-6">
                  <h5 className="text-lg font-bold text-yellow-300 mb-3">ETFs & Market Indexes</h5>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {[
                      { name: "S&P 500", symbol: "SPYx" },
                      { name: "Nasdaq", symbol: "QQQx" },
                      { name: "TQQQ", symbol: "TQQQx" },
                      { name: "Vanguard Total", symbol: "VTIx" },
                      { name: "Gold ETF", symbol: "GLDx" },
                      { name: "DFDV", symbol: "DFDVx" }
                    ].map((stock) => (
                      <div key={stock.symbol} className="bg-black/50 p-3 rounded-none border border-yellow-500/20 hover:border-yellow-500/40 transition-all">
                        <p className="text-white font-satoshi text-sm font-bold">{stock.name}</p>
                        <p className="text-yellow-400 font-satoshi text-xs">{stock.symbol}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* bTokens Section */}
              <div>
                <h4 className="text-xl font-bold text-yellow-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">🔗</span>
                  bTokens (Multi-Chain Assets)
                </h4>
                <p className="text-white/70 font-satoshi mb-6">Original tokenized assets across multiple blockchains including Ethereum, Polygon, and more</p>
                
                {/* Equity bTokens */}
                <div className="mb-6">
                  <h5 className="text-lg font-bold text-yellow-300 mb-3">Equity bTokens</h5>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {[
                      { name: "Alphabet", symbol: "bGOOGL" },
                      { name: "Microsoft", symbol: "bMSFT" },
                      { name: "NVIDIA", symbol: "bNVDA" },
                      { name: "Tesla", symbol: "bTSLA" },
                      { name: "Coinbase", symbol: "bCOIN" },
                      { name: "MicroStrategy", symbol: "bMSTR" },
                      { name: "GameStop", symbol: "bGME" },
                      { name: "Niu Technologies", symbol: "bNIU" }
                    ].map((stock) => (
                      <div key={stock.symbol} className="bg-black/50 p-3 rounded-none border border-yellow-500/20 hover:border-yellow-500/40 transition-all">
                        <p className="text-white font-satoshi text-sm font-bold">{stock.name}</p>
                        <p className="text-yellow-400 font-satoshi text-xs">{stock.symbol}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Fixed Income bTokens */}
                <div className="mb-6">
                  <h5 className="text-lg font-bold text-yellow-300 mb-3">Fixed Income & Bonds</h5>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {[
                      { name: "S&P 500 ETF", symbol: "bCSPX" },
                      { name: "1-Month T-Bill", symbol: "bZPR1" },
                      { name: "0-1yr Treasury", symbol: "bIB01" },
                      { name: "1-3yr Treasury", symbol: "bIBTA" },
                      { name: "USD Ultrashort", symbol: "bERNA" },
                      { name: "EUR Ultrashort", symbol: "bERNX" },
                      { name: "EUR Investment Grade", symbol: "bC3M" },
                      { name: "EUR High Yield", symbol: "bHIGH" },
                      { name: "Swiss Gov Bond", symbol: "bCSBGC3" }
                    ].map((stock) => (
                      <div key={stock.symbol} className="bg-black/50 p-3 rounded-none border border-yellow-500/20 hover:border-yellow-500/40 transition-all">
                        <p className="text-white font-satoshi text-sm font-bold">{stock.name}</p>
                        <p className="text-yellow-400 font-satoshi text-xs">{stock.symbol}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Key Features */}
              <div className="bg-black/30 p-6 rounded-none border border-yellow-500/30">
                <h4 className="text-lg font-bold text-yellow-400 mb-4">Asset Features & Benefits</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="text-yellow-300 font-bold mb-2">xStocks Advantages:</h5>
                    <ul className="text-white/80 font-satoshi space-y-1 text-sm">
                      <li>• Built on Solana for high-speed, low-cost transactions</li>
                      <li>• Native DeFi integration and composability</li>
                      <li>• 24/7 trading with instant settlement</li>
                      <li>• Use as collateral in lending protocols</li>
                      <li>• Available on Kraken and Bybit exchanges</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-yellow-300 font-bold mb-2">bTokens Advantages:</h5>
                    <ul className="text-white/80 font-satoshi space-y-1 text-sm">
                      <li>• Multi-chain availability (Ethereum, Polygon, Base)</li>
                      <li>• Established track record and regulatory compliance</li>
                      <li>• Includes fixed income and bond products</li>
                      <li>• Institutional-grade custody and backing</li>
                      <li>• Chainlink Proof of Reserve integration</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-4">
                Join the Tokenized Assets Revolution
              </h3>
              <p className="text-lg text-white/80 font-satoshi mb-6">
                As tradfi meets blockchain, tokenized stocks represent the next evolution in asset accessibility and global market participation.
              </p>
              <div className="bg-black/30 p-4 rounded-none border border-yellow-500/30 mb-6">
                <p className="text-yellow-400 font-satoshi text-sm mb-2">🎁 Special Offer</p>
                <p className="text-white/80 font-satoshi text-sm">
                  Get €20 in crypto when you sign up for Robinhood with our link and deposit €20 to start trading by 5 July.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://join.robinhood.com/eu_crypto/yvesv-2a991583/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button className="bg-yellow-500 text-black font-bold px-8 py-3 rounded-none hover:bg-yellow-400 transition-all duration-300 w-full">
                    Get €20 Free on Robinhood
                  </Button>
                </a>
                <a 
                  href="https://join.robinhood.com/eu_crypto/yvesv-2a991583/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button variant="outline" className="border-yellow-500 text-yellow-500 font-bold px-8 py-3 rounded-none hover:bg-yellow-500 hover:text-black transition-all duration-300 w-full">
                    Start Trading Now
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
