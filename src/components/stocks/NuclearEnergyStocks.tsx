"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const nuclearStocks = [
  {
    name: "Cameco Corporation",
    ticker: "CCJ",
    description: "The world's largest publicly traded uranium company, involved in uranium mining, refining, and fuel services. Cameco serves nuclear power plants globally and owns a 50% stake in Westinghouse Electric Company.",
    applications: "Supplies uranium for nuclear power generation worldwide, supporting clean energy transition",
    recentDev: "Strong Q1 2025 financial performance with expected increase in Westinghouse's 2025 Adjusted EBITDA. Made a $10 million gift to University of Saskatchewan on May 27, 2025, and participated in the BofA Global Metals, Mining and Steel Conference 2025.",
    whyNow: "Nuclear resurgence driven by clean energy demands and data center power needs. Recent financial strength positions Cameco as a key beneficiary of global nuclear expansion.",
    marketCap: "~$30B+",
    keyRisk: "Uranium price volatility and regulatory changes in nuclear policy"
  },
  {
    name: "Constellation Energy Corporation", 
    ticker: "CEG",
    description: "The largest owner of non-rate-regulated nuclear plants in the United States, operating 21 nuclear reactors across multiple states. Constellation is a leading clean energy provider.",
    applications: "Powers millions of homes with carbon-free nuclear energy, increasingly important for data center power demands",
    recentDev: "Benefiting from U.S. policies supporting nuclear energy and growing demand from data centers requiring reliable, clean power. Recent reports highlight its strategic role in meeting AI infrastructure power needs.",
    whyNow: "Nuclear power is experiencing renewed interest as AI and data centers require massive amounts of reliable, clean electricity.",
    marketCap: "~$70B+", 
    keyRisk: "Regulatory changes and aging nuclear plant infrastructure"
  },
  {
    name: "Entergy Corporation",
    ticker: "ETR",
    description: "The largest owner of rate-regulated nuclear plants in the U.S., operating nuclear facilities across multiple states with a focus on reliable power generation and regulatory compliance.",
    applications: "Provides stable nuclear power generation with regulated utility model ensuring consistent returns",
    recentDev: "Maintains stable operations with focus on regulatory compliance and nuclear safety. Performance tied to U.S. nuclear power generation trends and utility regulations.",
    whyNow: "Offers stable exposure to nuclear energy through regulated utility model, providing dividend income and steady growth.",
    marketCap: "~$25B+",
    keyRisk: "Utility regulation changes and nuclear plant operational risks"
  },
  {
    name: "Uranium Energy Corp",
    ticker: "UEC", 
    description: "Focused on uranium exploration and production in the United States, positioned to benefit from domestic uranium supply needs and strategic uranium reserve programs.",
    applications: "Develops uranium resources to support nuclear fuel supply chain, critical for energy security",
    recentDev: "Recent market conditions favor uranium producers as nuclear power expands globally. Company positioned for growth as nuclear energy gains momentum.",
    whyNow: "Early-stage exposure to uranium supply growth, with potential for significant returns as nuclear power expands.",
    marketCap: "~$5B+",
    keyRisk: "Exploration risks and uranium market volatility"
  }
];

const nuclearMetrics = [
  { stock: "CCJ", company: "Cameco Corp", focus: "Uranium mining & fuel services", marketCap: "~$30B+", exposure: "Global uranium supply", growth: "High" },
  { stock: "CEG", company: "Constellation Energy", focus: "Nuclear power generation", marketCap: "~$70B+", exposure: "U.S. nuclear power", growth: "Moderate" },
  { stock: "ETR", company: "Entergy Corp", focus: "Regulated nuclear utilities", marketCap: "~$25B+", exposure: "U.S. nuclear utilities", growth: "Stable" },
  { stock: "UEC", company: "Uranium Energy Corp", focus: "Uranium exploration", marketCap: "~$5B+", exposure: "U.S. uranium supply", growth: "High" }
];

export default function NuclearEnergyStocks() {
  return (
    <div className="space-y-16">
      <div className="text-center space-y-8">
        <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">
          Clean Energy Resurgence
        </p>
        <h2 className="text-center">
          <span className="text-5xl md:text-7xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
            Nuclear Energy Sector
          </span>
        </h2>
        <div className="flex items-center justify-center mt-6">
          <div className="h-px w-24 bg-yellow-500/30"></div>
          <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">
            Nuclear Renaissance - Analysis for 2025
          </p>
          <div className="h-px w-24 bg-yellow-500/30"></div>
        </div>
      </div>

      <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
        <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">Key Points</h3>
        <ul className="space-y-4 text-gray-300 list-disc list-inside">
          <li>Research suggests nuclear energy stocks like Cameco and Constellation Energy are growing due to clean energy demand and data center power requirements.</li>
          <li>It seems likely that uranium companies will benefit from global nuclear reactor construction and strategic uranium reserve programs.</li>
          <li>The evidence leans toward nuclear power experiencing a renaissance as AI infrastructure requires massive amounts of reliable, clean electricity.</li>
          <li>Defense and space applications of nuclear technology provide additional growth drivers beyond civilian power generation.</li>
        </ul>
      </div>

      <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
        <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">Nuclear Energy Investment Thesis</h3>
        <div className="space-y-6 text-gray-300">
          <div>
            <h4 className="font-bold text-yellow-400 mb-2">The Nuclear Renaissance</h4>
            <p>Nuclear energy is experiencing a resurgence as governments and corporations seek carbon-free, reliable power sources. This trend is accelerated by:</p>
            <ul className="list-disc list-inside pl-4 mt-2 space-y-1">
              <li>Global net-zero commitments requiring clean baseload power</li>
              <li>AI and data center expansion demanding massive electricity consumption</li>
              <li>Energy security concerns driving domestic uranium production</li>
              <li>Advanced nuclear technologies improving safety and efficiency</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-yellow-400 mb-2">Market Drivers</h4>
            <p>Several factors are converging to create a favorable environment for nuclear energy investments:</p>
            <ul className="list-disc list-inside pl-4 mt-2 space-y-1">
              <li>Government support through legislation and funding programs</li>
              <li>Corporate partnerships between tech giants and nuclear operators</li>
              <li>Uranium supply constraints creating pricing power</li>
              <li>Next-generation reactor technologies gaining regulatory approval</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        {nuclearStocks.map((stock) => (
          <div key={stock.ticker} className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              {stock.name} ({stock.ticker})
            </h3>
            
            <div className="space-y-6 text-gray-300">
              <div>
                <h4 className="font-bold text-yellow-400 mb-2">Overview</h4>
                <p>{stock.description}</p>
              </div>
              
              <div>
                <h4 className="font-bold text-yellow-400 mb-2">Applications</h4>
                <p>{stock.applications}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-yellow-400 mb-2">Recent Developments</h4>
                  <p className="text-sm">{stock.recentDev}</p>
                </div>
                <div>
                  <h4 className="font-bold text-yellow-400 mb-2">Investment Metrics</h4>
                  <ul className="text-sm space-y-1">
                    <li><strong>Market Cap:</strong> {stock.marketCap}</li>
                    <li><strong>Key Risk:</strong> {stock.keyRisk}</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h4 className="font-bold text-yellow-400 mb-2">Why Now?</h4>
                <p>{stock.whyNow}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
        <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">Nuclear Energy Stocks Comparison</h3>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-yellow-500/30">
                <TableHead className="text-yellow-500 font-bold">Ticker</TableHead>
                <TableHead className="text-yellow-500 font-bold">Company</TableHead>
                <TableHead className="text-yellow-500 font-bold">Primary Focus</TableHead>
                <TableHead className="text-yellow-500 font-bold">Market Cap</TableHead>
                <TableHead className="text-yellow-500 font-bold">Nuclear Exposure</TableHead>
                <TableHead className="text-yellow-500 font-bold">Growth Profile</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {nuclearMetrics.map((row) => (
                <TableRow key={row.stock} className="border-yellow-500/10">
                  <TableCell className="font-medium">{row.stock}</TableCell>
                  <TableCell>{row.company}</TableCell>
                  <TableCell>{row.focus}</TableCell>
                  <TableCell>{row.marketCap}</TableCell>
                  <TableCell>{row.exposure}</TableCell>
                  <TableCell className={
                    row.growth === "High" ? "text-yellow-400 font-bold" :
                    row.growth === "Moderate" ? "text-green-400" :
                    "text-blue-400"
                  }>{row.growth}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
        <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">Investment Strategy</h3>
        <div className="space-y-4 text-gray-300">
          <div>
            <h4 className="font-bold text-yellow-400">Portfolio Approach</h4>
            <ul className="list-disc list-inside pl-4">
              <li><strong>Uranium Supply (CCJ, UEC):</strong> Direct exposure to uranium price appreciation and supply constraints</li>
              <li><strong>Power Generation (CEG, ETR):</strong> Stable cash flows from nuclear power plant operations</li>
              <li><strong>Risk Management:</strong> Diversify across the nuclear value chain to reduce single-point exposure</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-yellow-400">Catalysts to Watch</h4>
            <ul className="list-disc list-inside pl-4">
              <li>Government nuclear funding announcements and policy support</li>
              <li>Corporate nuclear partnerships with tech companies</li>
              <li>Uranium price movements and supply/demand dynamics</li>
              <li>Advanced reactor licensing approvals and deployments</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
        <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">Conclusion</h3>
        <div className="space-y-4 text-gray-300">
          <p>
            The nuclear energy sector represents a compelling investment opportunity at the intersection of clean energy transition, energy security, and technological innovation. Companies like Cameco and Constellation Energy are positioned to benefit from multiple tailwinds including government support, corporate partnerships, and growing electricity demand from AI infrastructure.
          </p>
          <p>
            The sector offers both growth potential through uranium supply constraints and stable returns through regulated utility operations. As nuclear power gains renewed acceptance as a critical component of the clean energy mix, these stocks provide exposure to a multi-decade investment theme.
          </p>
          <p>
            Recent developments, including strong Q1 2025 performance from key players like Cameco and growing corporate interest in nuclear power for data centers, validate the investment thesis for nuclear energy stocks in 2025 and beyond.
          </p>
        </div>
      </div>
    </div>
  );
} 