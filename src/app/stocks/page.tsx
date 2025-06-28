"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
// import StockMarket from "@/components/StockMarket";
import Link from "next/link";

// Force static generation for client component
export const dynamic = 'force-static';
export const dynamicParams = false;
export const revalidate = false;

const stocks = [
  {
    name: "Robinhood Markets, Inc.",
    ticker: "HOOD",
    path: "/hood",
    description: "Robinhood Markets, Inc. offers commission-free trading for stocks, ETFs, options, and cryptocurrencies, aiming to democratize finance for all.",
    whyExplore: [
      "Commission-free trading model attracts a large user base.",
      "Expansion in crypto with the Bitstamp acquisition and favorable regulatory developments.",
      "Diversified revenue from payment for order flow, net interest income, and premium subscriptions."
    ],
    financials: {
        price: "$78.50",
        marketCap: "$69.274 Billion",
        ytdReturn: "N/A",
        peRatio: "N/A"
    },
    risks: [
        "Controversy and regulatory risk surrounding payment for order flow (PFOF).",
        "Revenue is sensitive to market volatility and trading volumes."
    ],
    recentDev: "Completed a $200 million acquisition of Bitstamp to expand its global crypto footprint.",
    whyNow: "With its growing crypto business and strong user engagement, Robinhood is well-positioned to capitalize on the increasing retail interest in digital assets."
  },
  {
    name: "Circle Internet Financial",
    ticker: "CRCL",
    path: "/crcl",
    description: "Circle is the issuer of USDC, a major U.S. dollar-pegged stablecoin, and a key player in the digital finance ecosystem.",
    whyExplore: [
      "Strong market confidence demonstrated by an explosive IPO, with its stock price surging over 500%.",
      "Generates revenue from reserves backing USDC, capitalizing on rising interest rates.",
      "Benefiting from regulatory clarity with the passage of the U.S. Senate's stablecoin bill."
    ],
    financials: {
        price: "$199.59",
        marketCap: "$18.4 Billion",
        ytdReturn: "N/A",
        peRatio: "N/A"
    },
    risks: [
        "Competition from other stablecoin issuers like Tether.",
        "Business performance is linked to the stability and adoption of USDC."
    ],
    recentDev: "Successfully went public on June 5, 2025, with its market cap quickly exceeding $18 billion.",
    whyNow: "As a regulated and transparent stablecoin issuer, Circle is poised for significant growth as the digital currency market expands."
  },
  {
    name: "Coinbase Global, Inc.",
    ticker: "COIN",
    path: "/coinbase",
    description: "Coinbase is the largest cryptocurrency exchange in the U.S., offering trading for over 250 cryptocurrencies, including Bitcoin, Ethereum, and altcoins. It serves both retail and institutional investors, with a focus on regulatory compliance.",
    whyExplore: [
      "Market Leadership: Handles over $1.5 trillion in annual trading volume, with 130 million verified users across 100+ countries.",
      "Regulatory Tailwinds: Recent regulatory clarity, such as the dismissal of SEC investigations into crypto exchanges, supports growth.",
      "Diversification: Beyond trading, Coinbase offers a debit card, cloud platform for digital currency storage, and institutional custody services.",
      "Alignment with User Interest: Your interest in altcoins (e.g., Ethereum, Solana) aligns with Coinbase's broad crypto offerings.",
    ],
    financials: {
      price: "~$280",
      marketCap: "~$65 billion",
      ytdReturn: "+150%",
      peRatio: "~45",
    },
    risks: [
      "Regulatory uncertainty in the U.S. could impact profitability.",
      "Revenue is highly correlated with crypto market volatility.",
    ],
    recentDev: "New USDC deals and an EU license enhance global reach.",
    whyNow: "Coinbase benefits from the same stablecoin momentum as CRCL (e.g., GENIUS Act) and offers broader crypto exposure than HOOD's trading platform.",
  },
  {
    name: "MicroStrategy Incorporated",
    ticker: "MSTR",
    path: "/platforms/msty/mstr",
    description: "Rebranded as Strategy, MicroStrategy is a business intelligence firm that has pivoted to a Bitcoin-focused investment vehicle, holding significant BTC on its balance sheet.",
    whyExplore: [
        "Bitcoin Proxy: Holds 478,740 Bitcoins (valued at ~$46.6 billion in February 2025), making it a direct play on Bitcoin's price.",
        "Aggressive Strategy: Plans to raise $42 billion ($21 billion in loans, $21 billion in stock sales) to acquire more Bitcoin through 2027.",
        "User Alignment: Your preference for Bitcoin as a long-term asset aligns with MSTR's strategy.",
        "Analyst Sentiment: Strong Buy rating from 13 analysts (12 Buy, 1 Sell).",
    ],
    financials: {
        price: "~$420",
        marketCap: "~$45 billion",
        ytdReturn: "+35%",
        peRatio: "Not applicable",
    },
    risks: [
        "High risk if Bitcoin's price declines significantly.",
        "Leverage from loans increases financial vulnerability.",
    ],
    recentDev: "Continued Bitcoin acquisitions and corporate rebranding signal long-term commitment to crypto.",
    whyNow: "MSTR offers a stock-based alternative to direct Bitcoin investment, appealing if you're cautious about crypto wallets or on-chain risks.",
  },
  {
    name: "Marathon Digital Holdings, Inc.",
    ticker: "MARA",
    path: "/mara",
    description: "A leading Bitcoin mining company, Marathon focuses on high-efficiency mining operations, leveraging renewable energy.",
    whyExplore: [
        "Bitcoin Mining Exposure: Operates with a hashrate of 23 EH/s, among the industry's most efficient miners.",
        "Sustainability: ~60% of operations use renewable energy, appealing to ESG-focused investors.",
        "Market Correlation: Stock performance closely tracks Bitcoin's price, offering leveraged exposure.",
        "User Relevance: Your interest in Bitcoin's market trends makes MARA a compelling pick.",
    ],
    financials: {
        price: "~$19",
        marketCap: "~$5 billion",
        ytdReturn: "+200%",
        peRatio: "~30",
    },
    risks: [
        "High volatility tied to Bitcoin's price and mining difficulty.",
        "Energy costs and regulatory scrutiny of mining operations.",
    ],
    recentDev: "Expanded mining capacity and green energy initiatives strengthen its position.",
    whyNow: "MARA offers high-upside exposure to Bitcoin's growth, complementing CRCL's stablecoin focus and HOOD's trading platform.",
  },
    {
    name: "Block, Inc.",
    ticker: "XYZ",
    path: "/block",
    description: "Formerly Square, Block is a fintech company with a payment-processing ecosystem (Square) and Cash App, which supports Bitcoin trading and storage.",
    whyExplore: [
        "Bitcoin Integration: Cash App generated $3.5 billion in Bitcoin-related revenue in Q1 2025, with $75 million in gross profit.",
        "Blockchain Innovation: Led by Jack Dorsey, Block invests in blockchain for payments, lending, and tokenized assets.",
        "Diversified Revenue: Combines crypto with traditional fintech, reducing reliance on volatile markets.",
        "User Alignment: Your interest in crypto payments (e.g., Dogecoin on X) aligns with Block's Cash App focus.",
    ],
    financials: {
        price: "~$65",
        marketCap: "~$40 billion",
        ytdReturn: "+30%",
        peRatio: "~25",
    },
    risks: [
        "Competition in payment processing (e.g., PayPal, Stripe).",
        "Regulatory risks for crypto-related services.",
    ],
    recentDev: "Auto Invest feature for Bitcoin and stocks enhances user engagement.",
    whyNow: "Block bridges traditional finance and crypto, offering a balanced alternative to CRCL's stablecoin focus and HOOD's trading emphasis.",
    },
    {
    name: "NVIDIA Corporation",
    ticker: "NVDA",
    path: "/nvda",
    description: "NVIDIA is a leading manufacturer of graphics processing units (GPUs), critical for crypto mining, AI, and blockchain applications.",
    whyExplore: [
        "Crypto Mining Demand: GPUs power Bitcoin and altcoin mining, with renewed demand as crypto prices rise.",
        "Dual Market Leadership: Dominates AI and blockchain, diversifying revenue streams.",
        "Financial Strength: 45% year-over-year revenue growth, with a Strong Buy rating from 40 analysts.",
        "User Relevance: Your interest in AI-related tokens (e.g., TAO) suggests NVDA's AI-blockchain overlap is appealing.",
    ],
    financials: {
        price: "~$144.12",
        marketCap: "~$350 billion",
        ytdReturn: "+60%",
        peRatio: "~50",
    },
    risks: [
        "Crypto mining is a small portion of revenue, diluting direct exposure.",
        "High valuation increases downside risk in a market correction.",
    ],
    recentDev: "Continued GPU demand for AI and blockchain applications drives growth.",
    whyNow: "NVDA offers indirect crypto exposure with lower volatility than pure-play crypto stocks like COIN or MARA.",
    },
    {
      name: "Tesla, Inc.",
      ticker: "TSLA",
      path: "/tesla",
      description: "Tesla, Inc. is a crypto-related stock due to its $1.03 billion in Bitcoin holdings and CEO Elon Musk's influence, though its core business remains electric vehicles, energy, and AI.",
      whyExplore: [
        "Crypto Exposure: Holds $1.03 billion in Bitcoin and benefits from CEO Elon Musk's crypto advocacy, aligning with interests in Bitcoin and Dogecoin.",
        "EV & AI Leadership: Dominance in the EV market and ambitious projects like Full Self-Driving (FSD) and the Optimus robot offer diversification beyond crypto.",
        "Analyst Outlook: Despite a consensus 'Hold' rating, some analysts see significant upside driven by AI, with price targets as high as $500.",
        "Leadership Influence: Elon Musk's high-profile involvement in crypto and tech policy adds a unique, albeit volatile, dimension to the stock's narrative.",
      ],
      financials: {
          price: "$309.39",
          marketCap: "~$983.5 billion",
          ytdReturn: "N/A",
          peRatio: "N/A"
      },
      risks: [
          "Declining EV deliveries and price cuts are eroding profit margins.",
          "The value of its Bitcoin holdings introduces volatility to its balance sheet.",
          "CEO Elon Musk's various ventures (xAI, X) raise concerns about his focus on Tesla.",
          "Intensifying competition from legacy automakers and new EV startups."
      ],
      recentDev: "Reported challenging Q1 2025 financials with an 8% YoY revenue drop, though a new accounting rule allowed a $600M gain on Bitcoin holdings in Q4 2024.",
      whyNow: "Tesla offers a unique blend of crypto exposure and tech leadership. Watch for Q2 2025 delivery numbers and Bitcoin price movements as key catalysts."
    }
];

const comparisonData = [
    { ticker: "HOOD", company: "Robinhood Markets, Inc.", exposure: "Crypto Trading & Services", price: "$78.50", marketCap: "$69.274B", ytdReturn: "N/A", risk: "PFOF Regulation" },
    { ticker: "CRCL", company: "Circle Internet Financial", exposure: "USDC Stablecoin", price: "$199.59", marketCap: "$18.4B", ytdReturn: "N/A", risk: "Stablecoin Competition" },
    { ticker: "COIN", company: "Coinbase Global", exposure: "Crypto Exchange", price: "~$280", marketCap: "~$65B", ytdReturn: "+150%", risk: "Regulatory uncertainty" },
    { ticker: "MSTR", company: "MicroStrategy", exposure: "Bitcoin Holdings", price: "~$420", marketCap: "~$45B", ytdReturn: "+35%", risk: "Bitcoin price volatility" },
    { ticker: "MARA", company: "Marathon Digital", exposure: "Bitcoin Mining", price: "~$19", marketCap: "~$5B", ytdReturn: "+200%", risk: "Mining difficulty, energy costs" },
    { ticker: "XYZ", company: "Block, Inc.", exposure: "Bitcoin Payments", price: "~$65", marketCap: "~$40B", ytdReturn: "+30%", risk: "Fintech competition" },
    { ticker: "NVDA", company: "NVIDIA Corporation", exposure: "Crypto Mining GPUs", price: "~$144.12", marketCap: "~$350B", ytdReturn: "+60%", risk: "Limited direct crypto exposure" },
    { ticker: "TSLA", company: "Tesla, Inc.", exposure: "Bitcoin Holdings", price: "$309.39", marketCap: "~$983.5 billion", ytdReturn: "N/A", risk: "EV Market Competition" },
];


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
            {/* <StockMarket /> */}
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <p className="text-gray-300">Stock market chart component temporarily disabled for deployment.</p>
            </div>
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

            {/* New section for high-upside stocks */}
            <div className="text-center space-y-8 pt-16">
                <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">
                Innovating Equities
                </p>
                <h1 className="text-center">
                <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-boska">
                    Future-Forward Stocks
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

            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6 font-epilogue">Key Points</h3>
                <ul className="space-y-4 text-gray-300 list-disc list-inside">
                    <li>Research suggests quantum computing stocks like IonQ and IBM are innovating rapidly, potentially transforming industries like healthcare and finance.</li>
                    <li>It seems likely that AI leaders like Nvidia and Microsoft will continue to drive advancements in automation and data analysis, impacting wealth and defense.</li>
                    <li>The evidence leans toward biotechnology firms like Vertex and Moderna leading in gene editing and mRNA therapies, with significant health implications.</li>
                    <li>Defense tech stocks such as Lockheed Martin and Kratos are advancing with AI and autonomous systems, crucial for national security.</li>
                    <li>High-end tech stocks like Taiwan Semiconductor are vital for enabling these innovations, with broad impacts on health, wealth, and defense.</li>
                </ul>
            </div>

            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6 font-epilogue">Overview of Innovating Stocks</h3>
                <p className="text-gray-300 mb-6">
                    Below, I&apos;ll break down the key areas—quantum computing, AI, biogenetics, and defense tech—highlighting stocks that are at the forefront of innovation and their potential global impact.
                </p>
                <h4 className="text-xl md:text-2xl font-bold text-yellow-400 mb-4 font-epilogue">Survey Note: Deep Research on Innovating Stocks in Quantum Computing, AI, Biogenetics, and High-End Tech</h4>
                <p className="text-gray-300">
                    This survey note provides an in-depth analysis of stocks innovating in quantum computing, AI, biogenetics, and other high-end technologies, focusing on their potential to impact health, wealth, defense, and beyond. The analysis is based on recent data and trends as of June 28, 2025, ensuring relevance for investors and researchers interested in these transformative fields.
                </p>
            </div>

            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6 font-epilogue">Quantum Computing: Pioneering the Next Computational Frontier</h3>
                <div className="space-y-6 text-gray-300">
                    <p className="prose prose-invert max-w-none prose-p:text-gray-300">Quantum computing leverages quantum mechanics to perform calculations at unprecedented speeds, with applications in drug discovery, materials science, optimization, and cryptography. The following companies are leading innovators, each with unique technological approaches and market positions:</p>
                    <ul className="list-disc list-inside space-y-4">
                    <li><strong className="font-epilogue text-yellow-400">IonQ (IONQ):</strong> A pure-play quantum computing company specializing in trapped-ion technology, IonQ is notable for its partnerships with major cloud providers like Amazon Web Services (AWS) and Google Cloud. This approach allows for scalable quantum systems, with potential applications in healthcare for simulating molecular interactions and in finance for optimizing portfolios. Recent developments include progress in reducing error rates, positioning IonQ as a leader in the race for practical quantum computing.</li>
                    <li><strong className="font-epilogue text-yellow-400">Rigetti Computing (RGTI):</strong> Focused on superconducting qubit technology, Rigetti offers cloud-based access to its quantum systems and is advancing hybrid quantum-classical algorithms. Its innovations could accelerate AI training and complex simulations, impacting industries like logistics and energy. Rigetti has made strides in improving qubit coherence times, essential for practical applications.</li>
                    <li><strong className="font-epilogue text-yellow-400">D-Wave Quantum (QBTS):</strong> Specializing in quantum annealing, D-Wave is already delivering systems to enterprises and governments, with applications in optimization problems. Its technology is used in logistics, finance, and defense, with potential to expand into healthcare and energy optimization. Recent efforts focus on refining annealing technology for broader commercial use.</li>
                    <li><strong className="font-epilogue text-yellow-400">IBM (IBM):</strong> A pioneer in quantum computing, IBM leverages superconducting qubits and offers cloud-based quantum services through IBM Quantum. It achieved a milestone with its 127-qubit Eagle quantum computer, with applications in drug discovery and financial modeling. IBM is focusing on error mitigation and scaling, aiming for fault-tolerant quantum systems by the end of the decade.</li>
                    </ul>
                    <p className="prose prose-invert max-w-none prose-p:text-gray-300">These companies are poised to transform industries, with quantum computing potentially reducing drug development timelines and enhancing cybersecurity, impacting health and wealth significantly.</p>
                </div>
            </div>

            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6 font-epilogue">Artificial Intelligence: Driving Automation and Data Insights</h3>
                <div className="space-y-6 text-gray-300">
                    <p className="prose prose-invert max-w-none prose-p:text-gray-300">AI is already a transformative force, with applications in healthcare diagnostics, financial modeling, autonomous vehicles, and defense. The following stocks are leaders in AI innovation, each contributing to wealth creation and technological advancement:</p>
                    <ul className="list-disc list-inside space-y-4">
                    <li><strong className="font-epilogue text-yellow-400">Nvidia (NVDA):</strong> Dominating the AI hardware market with GPUs essential for training and running AI models, Nvidia also offers cloud-based AI services through DGX systems. Its technology powers self-driving cars, drug discovery, and data centers, with recent expansions into quantum computing through cloud services and partnerships. Nvidia&apos;s impact is broad, enhancing wealth through AI-driven industries and supporting defense through AI-enabled systems.</li>
                    <li><strong className="font-epilogue text-yellow-400">Microsoft (MSFT):</strong> Integrating AI across its ecosystem, including Azure cloud services and productivity tools like Office 365, Microsoft is also advancing quantum computing through Azure Quantum. Its AI tools are used in healthcare, finance, and cybersecurity, with recent developments including its own AI chips and quantum computing roadmap, impacting wealth and defense strategies.</li>
                    <li><strong className="font-epilogue text-yellow-400">Alphabet (GOOGL):</strong> A leader in AI research with projects like DeepMind and Gemini AI, Alphabet offers quantum computing services through Google Cloud. Its AI is used in search, advertising, healthcare (e.g., AlphaFold for protein folding), and autonomous vehicles, with recent breakthroughs in quantum error correction, enhancing health and wealth through technological innovation.</li>
                    <li><strong className="font-epilogue text-yellow-400">Amazon (AMZN):</strong> AWS provides AI tools and infrastructure for enterprises, with Amazon developing its own AI chips and partnerships with quantum computing companies like IonQ. Its AI is used in e-commerce, logistics, and healthcare, with potential to expand into quantum-accelerated applications, impacting wealth and health through scalable cloud solutions.</li>
                    <li><strong className="font-epilogue text-yellow-400">Palantir (PLTR):</strong> Specializing in AI-driven data analytics, Palantir&apos;s platforms are used in defense, healthcare, and finance for complex decision-making and predictive modeling. Its recent expansion of the AI Platform (AIP) to include generative AI capabilities enhances its impact on national security and supply chain optimization, contributing to wealth and defense.</li>
                    </ul>
                    <p className="prose prose-invert max-w-none prose-p:text-gray-300">AI&apos;s influence is growing, with potential to automate industries, improve healthcare diagnostics, and enhance defense capabilities, creating significant wealth and societal benefits.</p>
                </div>
            </div>

            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6 font-epilogue">Biogenetics: Revolutionizing Healthcare Through Gene Editing and Therapies</h3>
                <div className="space-y-6 text-gray-300">
                    <p className="prose prose-invert max-w-none prose-p:text-gray-300">Biogenetics, particularly in gene editing and mRNA therapeutics, is poised to address major health challenges, offering cures for genetic diseases and improving global health outcomes. The following companies are leaders in this space:</p>
                    <ul className="list-disc list-inside space-y-4">
                    <li><strong className="font-epilogue text-yellow-400">Vertex Pharmaceuticals (VRTX):</strong> A leader in cystic fibrosis treatments, Vertex is expanding into gene editing therapies for genetic diseases like sickle cell disease. Its work could lead to cures for previously untreatable conditions, with recent partnerships with CRISPR Therapeutics advancing its pipeline, impacting global health significantly.</li>
                    <li><strong className="font-epilogue text-yellow-400">Regeneron Pharmaceuticals (REGN):</strong> Developing treatments for cancer, eye diseases, and rare disorders, Regeneron has a strong pipeline of innovative therapies. Its drugs have transformed treatments for conditions like macular degeneration and cancer, with recent expansions in immuno-oncology and gene therapy research, enhancing health outcomes.</li>
                    <li><strong className="font-epilogue text-yellow-400">CRISPR Therapeutics (CRSP):</strong> Pioneering gene-editing technologies, CRISPR is developing therapies for sickle cell disease, beta-thalassemia, and cancer. Its technology could enable precise genetic modifications, offering cures for hereditary diseases, with significant progress in clinical trials and potential FDA approvals, revolutionizing healthcare.</li>
                    <li><strong className="font-epilogue text-yellow-400">Moderna (MRNA):</strong> Known for its mRNA vaccines during the COVID-19 pandemic, Moderna is expanding into cancer vaccines, rare diseases, and personalized medicine. Its mRNA platform could revolutionize vaccine development and therapeutics, with recent advancements in its pipeline for cancer and infectious disease vaccines, impacting global health.</li>
                    </ul>
                    <p className="prose prose-invert max-w-none prose-p:text-gray-300">These companies are at the forefront of medical innovation, with potential to cure genetic disorders, improve cancer treatments, and enhance vaccine development, significantly impacting health worldwide.</p>
                </div>
            </div>

            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6 font-epilogue">Defense Technology: Advancing National Security with High-End Tech</h3>
                <div className="space-y-6 text-gray-300">
                    <p className="prose prose-invert max-w-none prose-p:text-gray-300">Defense technology is evolving with AI, autonomous systems, and advanced materials, crucial for national security and space exploration. The following stocks are leaders in defense innovation:</p>
                    <ul className="list-disc list-inside space-y-4">
                    <li><strong className="font-epilogue text-yellow-400">Lockheed Martin (LMT):</strong> A global leader in aerospace and defense, Lockheed Martin focuses on advanced systems like the F-35 fighter jet and missile defense, investing in AI and autonomous systems. Its technologies are essential for national security, with recent integrations of AI into defense systems and expansions in space technology, impacting defense and space exploration.</li>
                    <li><strong className="font-epilogue text-yellow-400">Raytheon Technologies (RTX):</strong> A leader in missile systems, cybersecurity, and aerospace, Raytheon is involved in directed energy weapons and hypersonic technology. Its innovations are crucial for modern warfare, with recent advancements in AI-driven defense systems and global partnerships, enhancing national security.</li>
                    <li><strong className="font-epilogue text-yellow-400">Northrop Grumman (NOC):</strong> Specializing in advanced aircraft, space systems, and cyber technologies, Northrop is a key player in stealth aircraft and missile defense. Its technologies are vital for defense, with recent focus on autonomous systems and next-generation aircraft, impacting national security and space.</li>
                    <li><strong className="font-epilogue text-yellow-400">Kratos Defense & Security Solutions (KTOS):</strong> A small-cap company specializing in unmanned systems, satellite communications, and advanced defense technologies, Kratos is advancing in autonomous systems and cybersecurity. Its innovations are critical for modern defense strategies, with recent contracts for unmanned aerial systems and AI capabilities, enhancing defense capabilities.</li>
                    <li><strong className="font-epilogue text-yellow-400">Leonardo DRS (DRS):</strong> Providing advanced technologies for land, air, sea, space, and cyber defense, Leonardo DRS is a leader in electric power systems and thermal management. Its technologies are essential for next-generation defense systems, with recent expansions in autonomous systems and cyber defense, impacting national security.</li>
                    </ul>
                    <p className="prose prose-invert max-w-none prose-p:text-gray-300">These companies are driving innovation in defense, with applications in AI, autonomous systems, and space technology, crucial for national security and global stability.</p>
                </div>
            </div>

            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6 font-epilogue">Other High-End Tech: Enabling the Ecosystem</h3>
                <div className="space-y-6 text-gray-300">
                    <p className="prose prose-invert max-w-none prose-p:text-gray-300">Beyond the specific categories, certain companies are at the intersection of these technologies, enabling broad advancements. These include:</p>
                    <ul className="list-disc list-inside space-y-4">
                    <li><strong className="font-epilogue text-yellow-400">Taiwan Semiconductor Manufacturing Company (TSM):</strong> The world&apos;s largest semiconductor foundry, TSM produces chips for AI, quantum computing, and other high-tech applications. Its advanced manufacturing capabilities are essential for the tech ecosystem, with recent investments in next-generation chip technologies, impacting health, wealth, and defense through enabling technologies.</li>
                    <li><strong className="font-epilogue text-yellow-400">Broadcom (AVGO):</strong> Providing semiconductors and infrastructure software for AI, data centers, and networking, Broadcom is a key supplier for AI and quantum computing hardware. Its chips are critical for high-performance computing, with recent expansions in AI and quantum computing-related product lines, enhancing technological innovation.</li>
                    </ul>
                    <p className="prose prose-invert max-w-none prose-p:text-gray-300">These companies are vital for the infrastructure supporting quantum computing, AI, and biogenetics, with broad impacts on health, wealth, and defense.</p>
                </div>
            </div>

            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6 font-epilogue">Comparative Analysis: Impact on Health, Wealth, and Defense</h3>
                <p className="text-gray-300 mb-4">To summarize, the following table highlights the key stocks, their primary focus, and their potential impact areas:</p>
                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader>
                            <TableRow className="border-yellow-500/30">
                                <TableHead className="text-yellow-500 font-bold">Stock</TableHead>
                                <TableHead className="text-yellow-500 font-bold">Category</TableHead>
                                <TableHead className="text-yellow-500 font-bold">Primary Focus</TableHead>
                                <TableHead className="text-yellow-500 font-bold">Impact Areas</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow className="border-yellow-500/10"><TableCell>IonQ (IONQ)</TableCell><TableCell>Quantum Computing</TableCell><TableCell>Trapped-ion quantum systems</TableCell><TableCell>Health, Finance, Cybersecurity</TableCell>
                            </TableRow>
                            <TableRow className="border-yellow-500/10"><TableCell>IBM (IBM)</TableCell><TableCell>Quantum Computing</TableCell><TableCell>Superconducting qubits, cloud services</TableCell><TableCell>Health, Finance, Research</TableCell>
                            </TableRow>
                             <TableRow className="border-yellow-500/10">
                                <TableCell>Nvidia (NVDA)</TableCell><TableCell>AI</TableCell><TableCell>AI hardware (GPUs), cloud services</TableCell><TableCell>Wealth, Defense, Healthcare</TableCell>
                            </TableRow>
                             <TableRow className="border-yellow-500/10">
                                <TableCell>Microsoft (MSFT)</TableCell><TableCell>AI</TableCell><TableCell>Cloud AI, quantum computing</TableCell><TableCell>Wealth, Defense, Healthcare</TableCell>
                            </TableRow>
                             <TableRow className="border-yellow-500/10">
                                <TableCell>Vertex (VRTX)</TableCell><TableCell>Biogenetics</TableCell><TableCell>Gene editing, cystic fibrosis treatments</TableCell><TableCell>Health</TableCell>
                            </TableRow>
                             <TableRow className="border-yellow-500/10">
                                <TableCell>Moderna (MRNA)</TableCell><TableCell>Biogenetics</TableCell><TableCell>mRNA vaccines, cancer therapies</TableCell><TableCell>Health</TableCell>
                            </TableRow>
                             <TableRow className="border-yellow-500/10">
                                <TableCell>Lockheed Martin (LMT)</TableCell><TableCell>Defense Tech</TableCell><TableCell>Advanced aircraft, missile defense</TableCell><TableCell>Defense, Space</TableCell>
                            </TableRow>
                            <TableRow className="border-yellow-500/10">
                                <TableCell>Kratos (KTOS)</TableCell><TableCell>Defense Tech</TableCell><TableCell>Unmanned systems, cybersecurity</TableCell><TableCell>Defense, Cybersecurity</TableCell>
                            </TableRow>
                            <TableRow className="border-yellow-500/10">
                                <TableCell>TSM (TSM)</TableCell><TableCell>High-End Tech</TableCell><TableCell>Semiconductor manufacturing</TableCell><TableCell>Health, Wealth, Defense</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
                <p className="text-gray-300 mt-4">This table illustrates the diverse impacts of these stocks, with overlapping effects on health, wealth, and defense, driven by their innovative technologies.</p>
            </div>

            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6 font-epilogue">Conclusion</h3>
                <div className="space-y-4 text-gray-300">
                  <p>
                    The stocks listed above represent the cutting edge of innovation in quantum computing, AI, biogenetics, and defense technology, with significant potential to transform health, wealth, and defense. 
                  </p>
                </div>
            </div>

            {/* New section for high-upside stocks */}
            <div className="text-center space-y-8 pt-16">
                <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">
                High-Growth Watchlist
                </p>
                <h1 className="text-center">
                <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-boska">
                    Early-Stage Upside
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

            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6 font-epilogue">Key Points</h3>
                <ul className="space-y-4 text-gray-300 list-disc list-inside">
                    <li>Research suggests D-Wave Quantum (QBTS), CRISPR Therapeutics (CRSP), Rigetti Computing (RGTI), and Quantum Computing Inc. (QUBT) are early-stage stocks with significant upside potential in quantum computing and biogenetics.</li>
                    <li>It seems likely that Kratos Defense & Security Solutions (KTOS) and Leonardo DRS (DRS) also have growth potential in defense tech, though with more moderate upside.</li>
                    <li>The evidence leans toward QBTS and CRSP having the highest upside (up to 186% and 90%, respectively), based on analyst price targets, making them top watchlist candidates.</li>
                    <li>IonQ (IONQ) is more established with limited upside, while larger companies like Nvidia and Taiwan Semiconductor (TSM) are less &quot;early&quot; for huge growth.</li>
                </ul>
            </div>

            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6 font-epilogue">Stocks with Upside Potential</h3>
                <div className="space-y-8">
                    <div>
                        <h4 className="font-bold text-yellow-400 font-epilogue">Huge Upside Potential</h4>
                        <p className="text-gray-400 mb-3">These stocks are considered early due to smaller market caps and high growth potential, ideal for investors seeking significant returns:</p>
                        <ul className="list-disc list-inside text-gray-300 space-y-3">
                            <li><strong>D-Wave Quantum (QBTS):</strong> Current price ~$7, analyst targets $12-$20, potential upside <span className="text-green-400 font-bold">71%-186%</span>.</li>
                            <li><strong>CRISPR Therapeutics (CRSP):</strong> Current price ~$42, analyst targets $70-$80, potential upside <span className="text-green-400 font-bold">67%-90%</span>.</li>
                            <li><strong>Rigetti Computing (RGTI):</strong> Current price ~$11, analyst targets $14-$15, potential upside <span className="text-green-400 font-bold">27%-36%</span>.</li>
                            <li><strong>Quantum Computing Inc. (QUBT):</strong> Current price ~$17, analyst target $22, potential upside <span className="text-green-400 font-bold">~29%</span>.</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-yellow-400 font-epilogue">Moderate Upside Potential</h4>
                        <p className="text-gray-400 mb-3">These are also early stage but with less pronounced growth compared to the above:</p>
                        <ul className="list-disc list-inside text-gray-300 space-y-3">
                           <li><strong>Kratos Defense & Security Solutions (KTOS):</strong> Current price ~$33.83, analyst targets $30-$35, potential upside <span className="text-orange-400 font-bold">-11% to +3.5%</span>.</li>
                           <li><strong>Leonardo DRS (DRS):</strong> Current price ~$37, analyst targets $33-$48, potential upside <span className="text-orange-400 font-bold">-11% to +29.7%</span>.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6 font-epilogue">Watchlist Recommendations</h3>
                 <p className="text-gray-300 mb-4">Based on analyst &quot;Buy&quot; or &quot;Strong Buy&quot; ratings, add the following to your watchlist, prioritizing those with highest upside:</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li><strong>Top picks:</strong> QBTS, CRSP, RGTI, QUBT for their significant growth potential.</li>
                    <li><strong>Consider:</strong> KTOS, DRS, and IONQ for additional exposure, though with more limited upside.</li>
                </ul>
            </div>

             <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6 font-epilogue">Survey Note: Analysis of Early-Stage Stocks</h3>
                <p className="text-gray-300">
                   This survey note provides a comprehensive analysis of stocks innovating in quantum computing, AI, biogenetics, and defense technologies, focusing on those that are early stage with significant upside potential and suitable for a watchlist based on analyst recommendations. The analysis is based on current market data as of June 28, 2025, ensuring relevance for investors seeking high-growth opportunities in health, wealth, and defense sectors.
                </p>
            </div>

            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6 font-epilogue">Quantum Computing Stocks: Early-Stage Leaders with High Upside</h3>
                <div className="text-gray-300">
                    <p className="mb-6">Quantum computing is still in its nascent stages, with companies developing technologies that could revolutionize industries like healthcare, finance, and cybersecurity. The following stocks were identified as early stage with significant upside:</p>
                    <ul className="space-y-8">
                        <li>
                            <h4 className="font-epilogue font-bold text-yellow-400 text-lg">D-Wave Quantum Inc. (QBTS)</h4>
                            <div className="mt-2 pl-4 border-l-2 border-yellow-500/30">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
                                    <p><strong>Market Cap:</strong> ~$4.5B</p>
                                    <p><strong>Current Price:</strong> ~$7</p>
                                    <p><strong>Analyst Targets:</strong> $12-$20</p>
                                    <p><strong>Upside Potential:</strong> <span className="font-bold text-green-400">71% to 186%</span></p>
                                    <p className="sm:col-span-2"><strong>Analyst Consensus:</strong> Strong Buy (8 analysts)</p>
                                </div>
                                <p className="mt-3 text-gray-400 text-sm italic">
                                    D-Wave specializes in quantum annealing, serving 132 customers with systems like Advantage2. Its small market cap and high analyst targets indicate significant growth potential, though it reported Q1 2025 revenue of $15M with ongoing losses.
                                </p>
                            </div>
                        </li>
                        <li>
                            <h4 className="font-epilogue font-bold text-yellow-400 text-lg">Rigetti Computing Inc. (RGTI)</h4>
                            <div className="mt-2 pl-4 border-l-2 border-yellow-500/30">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
                                    <p><strong>Market Cap:</strong> ~$3.5B</p>
                                    <p><strong>Current Price:</strong> ~$11</p>
                                    <p><strong>Analyst Targets:</strong> $14-$15</p>
                                    <p><strong>Upside Potential:</strong> <span className="font-bold text-green-400">27% to 36%</span></p>
                                    <p className="sm:col-span-2"><strong>Analyst Consensus:</strong> Strong Buy (4 analysts)</p>
                                </div>
                                <p className="mt-3 text-gray-400 text-sm italic">
                                    Rigetti focuses on superconducting qubits, with an 84-qubit Ankaa-3 system and plans for 100+ qubits by year-end. Its Q4 2024 revenue was $2.27M, indicating early-stage development.
                                </p>
                            </div>
                        </li>
                        <li>
                            <h4 className="font-epilogue font-bold text-yellow-400 text-lg">Quantum Computing Inc. (QUBT)</h4>
                            <div className="mt-2 pl-4 border-l-2 border-yellow-500/30">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
                                    <p><strong>Market Cap:</strong> ~$2.5B</p>
                                    <p><strong>Current Price:</strong> ~$17</p>
                                    <p><strong>Analyst Target:</strong> $22</p>
                                    <p><strong>Upside Potential:</strong> <span className="font-bold text-green-400">~29%</span></p>
                                    <p className="sm:col-span-2"><strong>Analyst Consensus:</strong> Strong Buy (1 analyst)</p>
                                </div>
                                <p className="mt-3 text-gray-400 text-sm italic">
                                    QUBT develops photonic quantum computing, with Q4 2024 revenue of $101,000 and a net loss of $51.2M, indicating it is very early stage.
                                </p>
                            </div>
                        </li>
                        <li>
                            <h4 className="font-epilogue font-bold text-yellow-400 text-lg">IonQ Inc. (IONQ)</h4>
                            <div className="mt-2 pl-4 border-l-2 border-yellow-500/30">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
                                    <p><strong>Market Cap:</strong> ~$10.53B</p>
                                    <p><strong>Current Price:</strong> ~$41</p>
                                    <p><strong>Analyst Targets:</strong> $30-$50</p>
                                    <p><strong>Upside Potential:</strong> <span className="font-bold text-orange-400">-27% to +22%</span></p>
                                    <p className="sm:col-span-2"><strong>Analyst Consensus:</strong> Strong Buy (6 analysts)</p>
                                </div>
                                <p className="mt-3 text-gray-400 text-sm italic">
                                     IonQ uses trapped-ion technology, with Q4 2024 revenue of $11.7M and partnerships with major cloud providers. Its larger market cap suggests it is more established, with less upside compared to peers.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6 font-epilogue">Biogenetics Stocks: Early-Stage Innovators with High Impact</h3>
                <div className="text-gray-300">
                    <p className="mb-6">Biogenetics, particularly gene editing and mRNA therapies, offers significant health impacts. The following stock was identified as early stage with high upside:</p>
                    <ul className="space-y-8">
                        <li>
                            <h4 className="font-epilogue font-bold text-yellow-400 text-lg">CRISPR Therapeutics AG (CRSP)</h4>
                            <div className="mt-2 pl-4 border-l-2 border-yellow-500/30">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
                                    <p><strong>Market Cap:</strong> ~$4.10B</p>
                                    <p><strong>Current Price:</strong> ~$42</p>
                                    <p><strong>Analyst Targets:</strong> $70-$80</p>
                                    <p><strong>Upside Potential:</strong> <span className="font-bold text-green-400">67% to 90%</span></p>
                                    <p className="sm:col-span-2"><strong>Analyst Consensus:</strong> Moderate Buy (20 analysts)</p>
                                </div>
                                <p className="mt-3 text-gray-400 text-sm italic">
                                     CRISPR focuses on gene-editing therapies for sickle cell disease and cancer, with recent clinical trial progress. Its smaller market cap compared to Vertex ($115.69B) and Regeneron ($54.94B) indicates early-stage potential.
                                </p>
                            </div>
                        </li>
                    </ul>
                    <p className="mt-6">Other biogenetics stocks like Vertex, Regeneron, and Moderna have larger market caps, making them less &quot;early&quot; for huge upside.</p>
                </div>
            </div>

            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6 font-epilogue">Defense Technology Stocks: Smaller Players with Growth Potential</h3>
                <div className="text-gray-300">
                    <p className="mb-6">Defense tech stocks with smaller market caps were evaluated for early-stage potential:</p>
                     <ul className="space-y-8">
                        <li>
                            <h4 className="font-epilogue font-bold text-yellow-400 text-lg">Kratos Defense & Security Solutions Inc. (KTOS)</h4>
                            <div className="mt-2 pl-4 border-l-2 border-yellow-500/30">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
                                    <p><strong>Market Cap:</strong> ~$6.5B</p>
                                    <p><strong>Current Price:</strong> ~$33.83</p>
                                    <p><strong>Analyst Targets:</strong> $30-$35</p>
                                    <p><strong>Upside Potential:</strong> <span className="font-bold text-orange-400">-11% to +3.5%</span></p>
                                    <p className="sm:col-span-2"><strong>Analyst Consensus:</strong> Buy (13 analysts)</p>
                                </div>
                                <p className="mt-3 text-gray-400 text-sm italic">
                                    Kratos focuses on unmanned systems and cybersecurity, with a record opportunity pipeline of $12.6B, indicating growth potential.
                                </p>
                            </div>
                        </li>
                        <li>
                            <h4 className="font-epilogue font-bold text-yellow-400 text-lg">Leonardo DRS Inc. (DRS)</h4>
                            <div className="mt-2 pl-4 border-l-2 border-yellow-500/30">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
                                    <p><strong>Market Cap:</strong> ~$12B</p>
                                    <p><strong>Current Price:</strong> ~$37</p>
                                    <p><strong>Analyst Targets:</strong> $33-$48</p>
                                    <p><strong>Upside Potential:</strong> <span className="font-bold text-orange-400">-11% to +29.7%</span></p>
                                    <p className="sm:col-span-2"><strong>Analyst Consensus:</strong> Buy (4 analysts)</p>
                                </div>
                                <p className="mt-3 text-gray-400 text-sm italic">
                                    Leonardo DRS provides advanced defense technologies, including AI processors, with recent contracts enhancing growth prospects.
                                </p>
                            </div>
                        </li>
                    </ul>
                    <p className="mt-6">Larger defense stocks like Lockheed Martin ($110B), RTX ($195B), and Northrop Grumman ($70.25B) are established, with limited upside for early-stage growth.</p>
                </div>
            </div>

            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6 font-epilogue">AI and High-End Tech: Larger Players</h3>
                <p className="text-gray-300">AI stocks like Nvidia, Microsoft, Alphabet, Amazon, and Palantir have market caps in the hundreds of billions to trillions, making them less &quot;early&quot; for huge upside. High-end tech stocks like Taiwan Semiconductor (TSM, $1.14T) and Broadcom (AVGO, $1.27T) are also large, with growth more moderate compared to smaller peers.</p>
            </div>
            
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6 font-epilogue">Comparative Analysis: Upside Potential</h3>
                 <p className="text-gray-300 mb-4">The following table summarizes the stocks with early-stage potential and their upside based on analyst targets:</p>
                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader>
                            <TableRow className="border-yellow-500/30">
                                <TableHead className="text-yellow-500 font-bold">Stock</TableHead>
                                <TableHead className="text-yellow-500 font-bold">Category</TableHead>
                                <TableHead className="text-yellow-500 font-bold">Market Cap ($B)</TableHead>
                                <TableHead className="text-yellow-500 font-bold">Current Price</TableHead>
                                <TableHead className="text-yellow-500 font-bold">Avg. Price Target</TableHead>
                                <TableHead className="text-yellow-500 font-bold">Upside Potential</TableHead>
                                <TableHead className="text-yellow-500 font-bold">Analyst Consensus</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow className="border-yellow-500/10"><TableCell>QBTS</TableCell><TableCell>Quantum Computing</TableCell><TableCell>4.5</TableCell><TableCell>~$7</TableCell><TableCell>~$15</TableCell><TableCell>71%-186%</TableCell><TableCell>Strong Buy</TableCell></TableRow>
                            <TableRow className="border-yellow-500/10"><TableCell>CRSP</TableCell><TableCell>Biogenetics</TableCell><TableCell>4.10</TableCell><TableCell>~$42</TableCell><TableCell>~$75</TableCell><TableCell>67%-90%</TableCell><TableCell>Moderate Buy</TableCell></TableRow>
                            <TableRow className="border-yellow-500/10"><TableCell>RGTI</TableCell><TableCell>Quantum Computing</TableCell><TableCell>3.5</TableCell><TableCell>~$11</TableCell><TableCell>~$14.5</TableCell><TableCell>27%-36%</TableCell><TableCell>Strong Buy</TableCell></TableRow>
                            <TableRow className="border-yellow-500/10"><TableCell>QUBT</TableCell><TableCell>Quantum Computing</TableCell><TableCell>2.5</TableCell><TableCell>~$17</TableCell><TableCell>$22</TableCell><TableCell>~29%</TableCell><TableCell>Strong Buy</TableCell></TableRow>
                            <TableRow className="border-yellow-500/10"><TableCell>KTOS</TableCell><TableCell>Defense Tech</TableCell><TableCell>6.5</TableCell><TableCell>~$33.83</TableCell><TableCell>~$34.82</TableCell><TableCell>-11% to +3.5%</TableCell><TableCell>Buy</TableCell></TableRow>
                            <TableRow className="border-yellow-500/10"><TableCell>DRS</TableCell><TableCell>Defense Tech</TableCell><TableCell>12</TableCell><TableCell>~$37</TableCell><TableCell>~$40</TableCell><TableCell>-11% to +29.7%</TableCell><TableCell>Buy</TableCell></TableRow>
                            <TableRow className="border-yellow-500/10"><TableCell>IONQ</TableCell><TableCell>Quantum Computing</TableCell><TableCell>10.53</TableCell><TableCell>~$41</TableCell><TableCell>~$41</TableCell><TableCell>-27% to +22%</TableCell><TableCell>Strong Buy</TableCell></TableRow>
                        </TableBody>
                    </Table>
                </div>
                <p className="text-gray-300 mt-4">This table highlights QBTS and CRSP as having the highest upside potential, making them top candidates for the watchlist. RGTI and QUBT follow with significant upside, while KTOS, DRS, and IONQ have more limited growth potential due to their market positions.</p>
            </div>

            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6 font-epilogue">Conclusion</h3>
                <div className="space-y-4 text-gray-300">
                  <p>
                    Based on the analysis, the stocks early enough for huge upside potential are D-Wave Quantum (QBTS), CRISPR Therapeutics (CRSP), Rigetti Computing (RGTI), and Quantum Computing Inc. (QUBT), with QBTS and CRSP leading due to their high upside (up to 186% and 90%, respectively). Kratos Defense & Security Solutions (KTOS) and Leonardo DRS (DRS) also warrant consideration for moderate upside, while IonQ (IONQ) is more established with limited growth potential. For the watchlist, prioritize QBTS, CRSP, RGTI, and QUBT, as they align with analyst &quot;Buy&quot; or &quot;Strong Buy&quot; ratings and offer significant growth opportunities in their respective innovative sectors.
                  </p>
                </div>
            </div>

            {/* New section for Bitcoin Mining stocks */}
            <div className="text-center space-y-8 pt-16">
                <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">
                Bitcoin Mining Sector
                </p>
                <h1 className="text-center">
                <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-boska">
                    Mining Stock Analysis
                </span>
                </h1>
                <div className="flex items-center justify-center mt-6">
                <div className="h-px w-24 bg-yellow-500/30"></div>
                <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">
                    June 2025 Performance
                </p>
                <div className="h-px w-24 bg-yellow-500/30"></div>
                </div>
            </div>

            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6 font-epilogue">Key Points</h3>
                <ul className="space-y-4 text-gray-300 list-disc list-inside">
                    <li>Research suggests these stocks, primarily Bitcoin mining companies, had strong returns in June 2025, ranging from 2% to 63%, likely driven by sector trends and company-specific events.</li>
                    <li>It seems likely that factors like operational expansions, capital raises, and acquisition rumors influenced their performance, with varying impacts across stocks.</li>
                    <li>The evidence leans toward Bitcoin&apos;s price stability and positive crypto market sentiment contributing to overall gains, though individual stock performance varied.</li>
                </ul>
            </div>

            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6 font-epilogue">Stock Performance Overview</h3>
                <p className="text-gray-300 mb-6">
                    The stocks listed ($IREN, $CORZ, $CIFR, $RIOT, $CLSK, $WULF, $HUT, $MARA, $GLXY) are mainly involved in cryptocurrency mining, especially Bitcoin, with returns over the last month (May 28 to June 28, 2025) ranging from 2% to 63%. These returns reflect a robust period for the sector, likely influenced by Bitcoin&apos;s price stability around $107,000 and positive market sentiment.
                </p>
                
                <h4 className="text-xl md:text-2xl font-bold text-yellow-400 mb-4 font-epilogue">Top Performers and Key Drivers</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-3">
                    <li><strong>Iris Energy ($IREN, 63%):</strong> Likely boosted by a $550 million convertible notes offering closed on June 13, 2025, and its pivot to AI and data centers, signaling growth potential.</li>
                    <li><strong>Core Scientific ($CORZ, 56%):</strong> Surged due to acquisition talks with CoreWeave, reported on June 26, 2025, enhancing investor confidence.</li>
                    <li><strong>Cipher Mining ($CIFR, 31%):</strong> Benefited from starting Bitcoin mining at the Black Pearl site on June 23, 2025, and a raised price target, driving stock gains.</li>
                </ul>

                <h4 className="text-xl md:text-2xl font-bold text-yellow-400 mt-6 mb-4 font-epilogue">Other Stocks</h4>
                <p className="text-gray-300">
                    Stocks like $RIOT (29%), $CLSK (22%), $WULF (15%), $HUT (15%), $MARA (3%), and $GLXY (2%) also saw positive returns, likely due to sector-wide trends and operational updates, though with less pronounced catalysts compared to the top performers.
                </p>
            </div>

            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6 font-epilogue">Survey Note: Deep Research on Listed Stocks</h3>
                <p className="text-gray-300 mb-6">This survey note provides a comprehensive analysis of the stocks provided ($IREN, $CORZ, $CIFR, $RIOT, $CLSK, $WULF, $HUT, $MARA, $GLXY) with their respective returns over the last month (May 28 to June 28, 2025), as indicated by the percentages (63%, 56%, 31%, 29%, 22%, 15%, 15%, 3%, 2%). The research focuses on understanding the drivers behind their performance, company fundamentals, and broader market context, based on available data as of 03:25 PM CEST on Saturday, June 28, 2025.</p>
                
                <h4 className="text-xl md:text-2xl font-bold text-yellow-400 mt-6 mb-4 font-epilogue">Methodology and Context</h4>
                <p className="text-gray-300">The analysis began by identifying the stocks as primarily Bitcoin mining companies, with $GLXY (Galaxy Digital) being an exception as a crypto financial services firm. The percentages were confirmed via an X post from June 28, 2025, by @ericjackson, stating &quot;Returns in the last month:&quot; followed by the exact list, suggesting these are one-month returns. Given the current date, the period analyzed is from May 28 to June 28, 2025. The research leveraged news articles, company updates, and market trends to explain performance, focusing on operational, financial, and market-driven factors.</p>

                <h4 className="text-xl md:text-2xl font-bold text-yellow-400 mt-6 mb-4 font-epilogue">Market and Sector Overview</h4>
                <p className="text-gray-300">The cryptocurrency mining sector has shown resilience in June 2025, with Bitcoin&apos;s price stable around $107,000, as reported by <a href="https://www.coindesk.com/price/bitcoin" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:underline">CoinDesk</a> on June 27, 2025, with a slight monthly decrease of 1.74% noted in TradingView data. Despite this, the sector benefited from positive sentiment, driven by:</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mt-4">
                    <li>Regulatory developments, such as a Wyoming lawmaker urging Congress to pass crypto-friendly bills (GENIUS Act) on June 28, 2025, as per <a href="https://www.tradingview.com/news/coinpedia:d8b2c64ed094b:0-coinpedia-digest-this-week-s-crypto-news-highlights-28-june-2025/" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:underline">TradingView</a>.</li>
                    <li>Institutional interest, with Ric Edelman recommending 10%-40% portfolio allocation to crypto, including Bitcoin, on June 27, 2025, as per <a href="https://www.cnbc.com/2025/06/27/bitcoin-hodl-ric-edelman-wants-10percent-40percent-portfolio-crypto.html" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:underline">CNBC</a>.</li>
                    <li>Coinbase being the best-performing S&P 500 stock in June, signaling strong crypto market momentum, as reported on June 27, 2025, by <a href="https://www.cnbc.com/2025/06/27/coinbase-is-best-performing-stock-in-sp-500-in-june-and-may-move-higher.html" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:underline">CNBC</a>.</li>
                </ul>
                <p className="text-gray-300 mt-4">These factors likely created a favorable environment for mining stocks, though individual performance varied based on company-specific events.</p>

                <h4 className="text-xl md:text-2xl font-bold text-yellow-400 mt-6 mb-4 font-epilogue">Detailed Analysis by Stock</h4>
                <p className="text-gray-300 mb-4">Below is a detailed breakdown of each stock, including key developments and their likely impact on the reported returns. The table summarizes the top performers, with additional notes for others.</p>
                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader>
                            <TableRow className="border-yellow-500/30">
                                <TableHead className="text-yellow-500 font-bold">Ticker</TableHead>
                                <TableHead className="text-yellow-500 font-bold">Company</TableHead>
                                <TableHead className="text-yellow-500 font-bold">Return (%)</TableHead>
                                <TableHead className="text-yellow-500 font-bold">Key Developments in June 2025</TableHead>
                                <TableHead className="text-yellow-500 font-bold">Likely Impact</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow className="border-yellow-500/10"><TableCell>$IREN</TableCell><TableCell>Iris Energy</TableCell><TableCell>63</TableCell><TableCell>Closed $550M convertible notes offering on June 13; pivoting to AI and data centers.</TableCell><TableCell>Strong investor confidence in growth plans.</TableCell></TableRow>
                            <TableRow className="border-yellow-500/10"><TableCell>$CORZ</TableCell><TableCell>Core Scientific</TableCell><TableCell>56</TableCell><TableCell>Acquisition talks with CoreWeave reported on June 26, surged 33% that day.</TableCell><TableCell>Acquisition rumors drove significant gains.</TableCell></TableRow>
                            <TableRow className="border-yellow-500/10"><TableCell>$CIFR</TableCell><TableCell>Cipher Mining</TableCell><TableCell>31</TableCell><TableCell>Commenced Bitcoin mining at Black Pearl on June 23; Cantor Fitzgerald raised price target on June 5.</TableCell><TableCell>Operational milestone and analyst support.</TableCell></TableRow>
                        </TableBody>
                    </Table>
                </div>
                
                <div className="space-y-8 mt-8">
                    <div>
                        <h4 className="font-epilogue font-bold text-yellow-400 text-lg">1. Iris Energy ($IREN, 63%)</h4>
                        <div className="mt-2 pl-4 border-l-2 border-yellow-500/30 text-gray-300 space-y-2 text-sm">
                            <p><strong>Company Profile:</strong> Iris Energy, headquartered in Sydney, Australia, owns and operates Bitcoin mining data centers and provides HPC solutions, including AI cloud services. It rebranded to IREN Limited in November 2024.</p>
                            <p><strong>June 2025 Developments:</strong> On June 13, 2025, IREN closed an upsized $550 million convertible notes offering at 3.50%, initially planned for $450 million, with strong investor demand leading to an additional $50 million via a greenshoe option. Net proceeds were approximately $534.9 million, used for capped call transactions, a prepaid forward transaction, and general corporate purposes. The company also pivoted towards AI and data center ventures, as noted in a Perplexity article from May 15, 2025, with analysts maintaining a positive outlook despite some margin pressures.</p>
                            <p><strong>Impact:</strong> The capital raise and AI pivot likely boosted investor confidence, contributing to the 63% return. News headlines, such as &quot;Crypto Miner IREN Surges 102% as AI Pivot Delivers Profit Haul&quot; on June 9, 2025, from CNN Markets, suggest significant market enthusiasm.</p>
                            <p><strong>Citation:</strong> <a href="https://www.globenewswire.com/news-release/2025/06/13/3099290/0/en/IREN-closes-upsized-550-million-convertible-notes-offering.html" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:underline">IREN closes upsized $550 million convertible notes offering</a></p>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-epilogue font-bold text-yellow-400 text-lg">2. Core Scientific ($CORZ, 56%)</h4>
                        <div className="mt-2 pl-4 border-l-2 border-yellow-500/30 text-gray-300 space-y-2 text-sm">
                            <p><strong>Company Profile:</strong> Core Scientific is a leader in digital infrastructure for Bitcoin mining and HPC, operating one of North America&apos;s largest fleets. It returned to Nasdaq in January 2024 after reorganization.</p>
                            <p><strong>June 2025 Developments:</strong> On June 26, 2025, shares surged 33% following a report by <a href="https://www.cnbc.com/2025/06/26/core-scientific-shares-surge-on-report-of-buyout-talks-with-coreweave.html" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:underline">CNBC</a> that CoreWeave, an AI infrastructure firm, is in talks to acquire Core Scientific, potentially finalizing in weeks. This follows a long-standing partnership, including 12-year hosting contracts signed in June 2024, expected to generate billions in revenue. The stock&apos;s second-sharpest rally since its Nasdaq return underscores the impact.</p>
                            <p><strong>Impact:</strong> The acquisition rumor was a major catalyst, likely driving the 56% return, as it signals potential value creation and aligns with growing AI infrastructure demand.</p>
                            <p><strong>Citation:</strong> <a href="https://www.cnbc.com/2025/06/26/core-scientific-shares-surge-on-report-of-buyout-talks-with-coreweave.html" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:underline">Core Scientific shares surge on report of buyout talks with CoreWeave</a></p>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-epilogue font-bold text-yellow-400 text-lg">3. Cipher Mining ($CIFR, 31%)</h4>
                        <div className="mt-2 pl-4 border-l-2 border-yellow-500/30 text-gray-300 space-y-2 text-sm">
                            <p><strong>Company Profile:</strong> Cipher Mining operates industrial-scale Bitcoin mining data centers in the U.S., with a focus on expanding hash rate and HPC capabilities. It is listed on NASDAQ.</p>
                            <p><strong>June 2025 Developments:</strong> On June 23, 2025, Cipher commenced Bitcoin mining at its Black Pearl data center, expected to increase total hash rate to ~23.1 EH/s by Q3 2025, as per <a href="https://www.globenewswire.com/news-release/2025/06/23/3103825/0/en/Cipher-Mining-Commences-Bitcoin-Mining-at-Black-Pearl-Data-Center.html" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:underline">GlobeNewswire</a>. On June 5, 2025, Cantor Fitzgerald raised its price target to $6 from $4, maintaining a Buy rating, as reported by CNN Markets.</p>
                            <p><strong>Impact:</strong> The operational milestone and positive analyst coverage likely contributed to the 31% return, reflecting investor confidence in Cipher&apos;s growth trajectory.</p>
                            <p><strong>Citation:</strong> <a href="https://www.globenewswire.com/news-release/2025/06/23/3103825/0/en/Cipher-Mining-Commences-Bitcoin-Mining-at-Black-Pearl-Data-Center.html" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:underline">Cipher Mining Commences Bitcoin Mining at Black Pearl Data Center</a></p>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-epilogue font-bold text-yellow-400 text-lg">4. Riot Platforms ($RIOT, 29%)</h4>
                        <div className="mt-2 pl-4 border-l-2 border-yellow-500/30 text-gray-300 space-y-2 text-sm">
                            <p><strong>Company Profile:</strong> Riot Platforms is a major U.S. Bitcoin miner, focusing on operational efficiency and expansion. It has a significant mining fleet and is known for its energy-efficient operations.</p>
                            <p><strong>June 2025 Developments:</strong> No specific news was identified for June 2025, but its 29% return aligns with sector trends. Historical data from Investing.com articles suggest Riot&apos;s performance is tied to Bitcoin price stability and operational expansions, such as acquiring Block Mining in July 2024.</p>
                            <p><strong>Impact:</strong> Likely driven by general sector momentum and Bitcoin&apos;s stable price, with no major catalysts identified for the month.</p>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-epilogue font-bold text-yellow-400 text-lg">5. CleanSpark ($CLSK, 22%)</h4>
                        <div className="mt-2 pl-4 border-l-2 border-yellow-500/30 text-gray-300 space-y-2 text-sm">
                            <p><strong>Company Profile:</strong> CleanSpark focuses on sustainable Bitcoin mining, emphasizing low-cost energy and operational efficiency. It has been expanding its mining fleet and data centers.</p>
                            <p><strong>June 2025 Developments:</strong> No specific June 2025 news was found, but its 22% return suggests sector-wide benefits. Past reports, such as its acquisition of GRIID Infrastructure in June 2024, indicate a focus on growth, likely contributing to performance.</p>
                            <p><strong>Impact:</strong> General sector trends and operational efficiency likely drove the return, with no major company-specific events noted.</p>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-epilogue font-bold text-yellow-400 text-lg">6. TeraWulf ($WULF, 15%)</h4>
                        <div className="mt-2 pl-4 border-l-2 border-yellow-500/30 text-gray-300 space-y-2 text-sm">
                            <p><strong>Company Profile:</strong> TeraWulf operates Bitcoin mining data centers powered by nuclear and hydro energy, emphasizing sustainability. It is listed on NASDAQ.</p>
                            <p><strong>June 2025 Developments:</strong> No specific news for June 2025, but its 15% return aligns with sector performance. Past analyst ratings, such as Rosenblatt&apos;s Buy rating in May 2025, suggest positive sentiment, as per Investing.com articles.</p>
                            <p><strong>Impact:</strong> Likely driven by sector momentum and sustainable energy focus, with no major catalysts identified.</p>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-epilogue font-bold text-yellow-400 text-lg">7. Hut 8 Mining ($HUT, 15%)</h4>
                        <div className="mt-2 pl-4 border-l-2 border-yellow-500/30 text-gray-300 space-y-2 text-sm">
                            <p><strong>Company Profile:</strong> Hut 8 is a diversified Bitcoin miner with operations in mining, hosting, and HPC, operating across North America. It has a strong balance sheet and expansion plans.</p>
                            <p><strong>June 2025 Developments:</strong> No specific June 2025 news, but its 15% return reflects sector trends. Past updates, such as plans to upgrade ASIC mining fleet in Q1 2025, suggest growth focus, as per CoinCodex articles from February 2025.</p>
                            <p><strong>Impact:</strong> General sector performance and operational plans likely contributed, with no major events noted for the month.</p>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-epilogue font-bold text-yellow-400 text-lg">8. Marathon Digital ($MARA, 3%)</h4>
                        <div className="mt-2 pl-4 border-l-2 border-yellow-500/30 text-gray-300 space-y-2 text-sm">
                            <p><strong>Company Profile:</strong> Marathon Digital is one of the largest Bitcoin miners, with a significant hash rate and focus on scaling operations. It is listed on NASDAQ.</p>
                            <p><strong>June 2025 Developments:</strong> No specific news for June 2025, and its 3% return is the lowest, possibly indicating fewer positive catalysts. Past reports suggest challenges post-halving, but no recent negative news was identified.</p>
                            <p><strong>Impact:</strong> Likely impacted by sector trends, but with less pronounced gains, possibly due to lack of significant updates.</p>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-epilogue font-bold text-yellow-400 text-lg">9. Galaxy Digital ($GLXY, 2%)</h4>
                        <div className="mt-2 pl-4 border-l-2 border-yellow-500/30 text-gray-300 space-y-2 text-sm">
                            <p><strong>Company Profile:</strong> Galaxy Digital is a crypto financial services firm, involved in trading, asset management, and investment banking, listed on the Toronto Stock Exchange with OTC trading in the U.S.</p>
                            <p><strong>June 2025 Developments:</strong> No specific news for June 2025, and its 2% return reflects its different business model, less tied to mining operations. Its performance is more aligned with broader crypto market sentiment.</p>
                            <p><strong>Impact:</strong> Likely driven by general crypto market trends, with minimal mining-specific catalysts affecting performance.</p>
                        </div>
                    </div>
                </div>

                <h4 className="text-xl md:text-2xl font-bold text-yellow-400 mt-6 mb-4 font-epilogue">Comparative Analysis</h4>
                <p className="text-gray-300">The top performers ($IREN, $CORZ, $CIFR) had clear catalysts (capital raises, acquisitions, operational milestones), while others ($RIOT, $CLSK, $WULF, $HUT) benefited from sector momentum. $MARA and $GLXY had lower returns, possibly due to fewer company-specific drivers or their business models being less aligned with mining sector dynamics.</p>
            </div>

        </div>
      </div>
    </div>
  );
}