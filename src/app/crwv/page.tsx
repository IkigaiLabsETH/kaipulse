"use client";
import Image from "next/image";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function CrwvPage() {
  return (
    <div className="min-h-screen bg-black text-white font-satoshi">
      {/* Premium header accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-8">
            <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">AI Infrastructure • Crypto-Adjacent</p>
            <h1 className="text-center">
              <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
                CoreWeave (CRWV)
              </span>
            </h1>
            <div className="flex items-center justify-center mt-6">
              <div className="h-px w-24 bg-yellow-500/30"></div>
              <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">Pivoting from Crypto Mining to AI Hyperscaler</p>
              <div className="h-px w-24 bg-yellow-500/30"></div>
            </div>
            
            <div className="relative w-full mx-auto mt-12 aspect-[16/9] overflow-hidden rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <Image
                src="/coreweave.jpg"
                alt="AI and Cloud Infrastructure"
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
            </div>
          </div>

          {/* Introduction Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Detailed Analysis
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                A detailed analysis of CoreWeave, Inc. (CRWV) as a crypto-related stock, following the user&apos;s request to explore its initial public offering (IPO), business model, financial performance, and cryptocurrency exposure in 2025. This analysis builds on the user&apos;s prior interest in Circle (CRCL), Robinhood (HOOD), NVIDIA (NVDA), Block (XYZ), and Tesla (TSLA), and their focus on crypto-related investments, including Bitcoin and altcoins like Solana and Dogecoin. The data is current as of 1:15 AM CEST on Sunday, June 22, 2025, incorporating provided web results, X posts, and real-time financial data where applicable. The response is concise yet comprehensive, aligning with the format used for previous analyses, and addresses CoreWeave&apos;s unique position as a former crypto mining company pivoted to AI infrastructure with residual crypto relevance.
              </p>
            </div>
          </div>

          {/* Key Points Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Key Points
            </h3>
            <ul className="space-y-4 text-gray-300 list-disc list-inside">
                <li>CoreWeave, Inc. (CRWV) went public on March 28, 2025, at $40.00 per share, with the stock now at $173.53, reflecting a 334% increase.</li>
                <li>Its business model focuses on providing GPU-based cloud computing for AI workloads, with past crypto exposure as an Ethereum mining firm (2017–2022).</li>
                <li>Q1 2025 financials show $981.6 million in revenue (up 420% year-over-year) but a $314.6 million net loss, driven by high capital expenditures ($20–$23 billion planned for 2025).</li>
                <li>Crypto exposure is minimal today but stems from its Ethereum mining origins, infrastructure adaptable for crypto mining, and partnerships with crypto miners like Core Scientific.</li>
            </ul>
          </div>

          {/* IPO Overview Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              IPO Overview
            </h3>
            <div className="space-y-4 text-gray-300">
              <p>
                CoreWeave, Inc. went public on March 28, 2025, on the NASDAQ under the ticker CRWV, offering 37.5 million Class A shares at $40.00 each, raising $1.5 billion with a fully diluted valuation of $23 billion. The IPO was downsized from 49 million shares and a $47–$55 price range due to investor concerns over debt and customer concentration, with shares opening 3% below the offer price and closing flat. As of June 18, 2025, the stock price is $173.525, up 334% from the IPO, driven by AI infrastructure demand and a 7% NVIDIA stake disclosed May 16, 2025. The 52-week range is $38.00 to $180.00, with a market cap of ~$70 billion.
              </p>
            </div>
          </div>
          
          {/* Business Model Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Business Model Analysis
            </h3>
            <div className="space-y-6 text-gray-300 prose prose-invert max-w-none prose-p:text-gray-300 prose-headings:text-yellow-500">
                <p>CoreWeave operates as an AI hyperscaler, providing GPU-based cloud computing for machine learning, AI model training, and inference, competing with AWS, Azure, and Google Cloud. Founded in 2017 as Atlantic Crypto, it mined Ethereum and rented GPUs to crypto miners until Ethereum&apos;s 2022 proof-of-stake transition (&quot;The Merge&quot;), prompting a pivot to AI infrastructure. Its business model includes:</p>
                <div>
                    <h4>CoreWeave Cloud Platform</h4>
                    <p>Offers GPU compute (NVIDIA H100, Blackwell), CPU compute, storage, networking, and managed services (e.g., Kubernetes, observability). It leases 32 data centers across the U.S. and Europe, with 250,000+ GPUs and 1.3 gigawatts of contracted power.</p>
                </div>
                <div>
                    <h4>Services</h4>
                    <p>AI model training, inference, VFX/rendering, and dataset optimization via Weights & Biases (acquired 2025). The platform supports enterprises (e.g., Microsoft, OpenAI) and AI startups.</p>
                </div>
                <div>
                    <h4>Revenue Streams</h4>
                    <p>GPU rental fees, with contracts of 2–5 years (e.g., $11.9 billion OpenAI deal, $10 billion Microsoft deal). Also includes software subscriptions and managed services.</p>
                </div>
                <div>
                    <h4>Crypto Legacy</h4>
                    <p>CoreWeave&apos;s infrastructure, built for Ethereum mining, is optimized for high-performance computing (HPC), making it adaptable for crypto mining if demand resurges. Its partnership with Core Scientific maintains crypto-adjacent ties.</p>
                </div>
                <p>CoreWeave&apos;s pivot from crypto to AI aligns with your interest in AI tokens (e.g., TAO) and crypto infrastructure, positioning it to capitalize on the $3.22 trillion crypto market&apos;s computational needs while focusing on AI growth.</p>
            </div>
          </div>

          {/* Financials Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
                Recent Financial Performance (Q1 2025)
            </h3>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-yellow-500/30">
                    <TableHead className="text-yellow-500 font-bold">Metric</TableHead>
                    <TableHead className="text-yellow-500 font-bold">Value</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="border-yellow-500/10"><TableCell>Revenue</TableCell><TableCell>$981.6M (+420% YoY)</TableCell></TableRow>
                  <TableRow className="border-yellow-500/10"><TableCell>Net Loss</TableCell><TableCell>$314.6M</TableCell></TableRow>
                  <TableRow className="border-yellow-500/10"><TableCell>Adjusted EPS</TableCell><TableCell>-$0.60</TableCell></TableRow>
                  <TableRow className="border-yellow-500/10"><TableCell>Revenue Backlog</TableCell><TableCell>$25.9B</TableCell></TableRow>
                  <TableRow className="border-yellow-500/10"><TableCell>FY 2025 Guidance</TableCell><TableCell>$4.9B - $5.1B</TableCell></TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
          
          {/* Crypto Context Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Crypto Market Context
            </h3>
            <div className="space-y-6 text-gray-300 prose prose-invert max-w-none prose-p:text-gray-300 prose-headings:text-yellow-500">
                <p>CoreWeave&apos;s crypto exposure is now limited but rooted in its history:</p>
                <div>
                    <h4>Ethereum Mining Origins</h4>
                    <p>As Atlantic Crypto (2017–2019), CoreWeave mined Ethereum and rented GPUs to miners, building GPU-optimized infrastructure. It ceased mining in 2022 post-Merge.</p>
                </div>
                <div>
                    <h4>Crypto Infrastructure</h4>
                    <p>Its 250,000+ GPUs and HPC data centers could support crypto mining if proof-of-work coins (e.g., Bitcoin, Ravencoin) surge, aligning with your Bitcoin interest.</p>
                </div>
                <div>
                    <h4>Core Scientific Partnership</h4>
                    <p>Contracts for 500 MW of HPC capacity with Core Scientific, a Bitcoin miner, maintain crypto ties, generating $1.225 billion over 12 years.</p>
                </div>
                <p>The crypto market&apos;s $3.22 trillion cap and Bitcoin&apos;s 64.26% dominance indirectly benefit CoreWeave&apos;s infrastructure, though its primary growth driver is AI demand.</p>
            </div>
          </div>

          {/* Comparison Table Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
                Comparison to Peers
            </h3>
            <div className="overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow className="border-yellow-500/30">
                            <TableHead className="text-yellow-500 font-bold">Company</TableHead>
                            <TableHead className="text-yellow-500 font-bold">Key Focus</TableHead>
                            <TableHead className="text-yellow-500 font-bold">Market Cap</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow className="border-yellow-500/10"><TableCell>CRWV</TableCell><TableCell>AI Infrastructure</TableCell><TableCell>~$70B</TableCell></TableRow>
                        <TableRow className="border-yellow-500/10"><TableCell>CRCL</TableCell><TableCell>USDC Stablecoin</TableCell><TableCell>$18.4B</TableCell></TableRow>
                        <TableRow className="border-yellow-500/10"><TableCell>HOOD</TableCell><TableCell>Retail Crypto Trading</TableCell><TableCell>$69.3B</TableCell></TableRow>
                        <TableRow className="border-yellow-500/10"><TableCell>NVDA</TableCell><TableCell>GPU Manufacturing</TableCell><TableCell>$3.46T</TableCell></TableRow>
                        <TableRow className="border-yellow-500/10"><TableCell>XYZ (Block)</TableCell><TableCell>Bitcoin Trading/Services</TableCell><TableCell>$38.85B</TableCell></TableRow>
                        <TableRow className="border-yellow-500/10"><TableCell>TSLA</TableCell><TableCell>EVs / AI / Bitcoin Holdings</TableCell><TableCell>$983.5B</TableCell></TableRow>
                    </TableBody>
                </Table>
            </div>
            <p className="mt-4 text-sm text-gray-400">CRWV&apos;s Edge: Its 420% revenue growth and $25.9 billion backlog position it as a high-growth AI-crypto hybrid, offering targeted exposure.</p>
          </div>

          {/* Risks Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Risks
            </h3>
            <ul className="space-y-4 text-gray-300 list-disc list-inside">
                <li><strong>Customer Concentration:</strong> 77% of 2024 revenue from Microsoft (62%) and OpenAI (15%).</li>
                <li><strong>High Debt:</strong> $8.7 billion total debt and $500 million quarterly loan payments starting October 2025.</li>
                <li><strong>Financial Losses:</strong> $863 million net loss in 2024, with unremediated internal control weaknesses.</li>
                <li><strong>AI Market Volatility:</strong> Overcapacity risks if AI demand slows, with $20–$23 billion capex locking in high costs.</li>
                <li><strong>Crypto Relevance:</strong> Minimal current crypto exposure limits upside if Bitcoin/altcoins rally.</li>
            </ul>
          </div>
          
          {/* Why Explore Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Why Explore CRWV?
            </h3>
            <ul className="space-y-4 text-gray-300 list-disc list-inside">
                <li><strong>Crypto Legacy:</strong> Ethereum mining roots offer a bridge to crypto&apos;s computational needs.</li>
                <li><strong>AI Growth:</strong> 420% Q1 2025 revenue growth and $25.9 billion backlog capitalize on AI demand.</li>
                <li><strong>Market Momentum:</strong> 359% YTD gain outperforms peers, driven by NVIDIA&apos;s stake and OpenAI&apos;s deal.</li>
                <li><strong>Analyst Sentiment:</strong> &quot;Outperform&quot; ratings highlight it as an AI leader, despite debt concerns.</li>
            </ul>
          </div>
          
          {/* Conclusion Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Conclusion
            </h3>
            <div className="space-y-4 text-gray-300">
              <p>
                CoreWeave, Inc. (CRWV) is a compelling crypto-related stock due to its Ethereum mining origins and adaptable GPU infrastructure, now pivoted to AI cloud computing. Its March 2025 IPO at $40.00 has surged to $173.53, up 334%, with Q1 2025 revenue of $981.6 million (420% growth) but a $314.6 million loss. Compared to CRCL, HOOD, NVDA, XYZ, and TSLA, CoreWeave offers a high-growth AI-crypto hybrid, leveraging NVIDIA&apos;s GPUs and partnerships like Core Scientific. Risks include high debt, customer concentration, and limited current crypto exposure, but its $70 billion market cap and AI momentum align with your crypto and AI interests. Monitor Q2 2025 earnings (August 14, 2025) and Bitcoin&apos;s price for catalysts.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
