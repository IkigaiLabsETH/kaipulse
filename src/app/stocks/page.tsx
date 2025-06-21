"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import StockMarket from "@/components/StockMarket";
import Link from "next/link";

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
      "Alignment with User Interest: Your interest in altcoins (e.g., Ethereum, Solana) aligns with Coinbase&apos;s broad crypto offerings.",
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
        "User Relevance: Your interest in AI-related tokens (e.g., TAO) suggests NVDA&apos;s AI-blockchain overlap is appealing.",
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
