"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const hugeUpsideStocks = [
  {
    name: "D-Wave Quantum",
    ticker: "QBTS",
    currentPrice: "~$7",
    analystTargets: "$12-$20",
    upside: "71%-186%",
    marketCap: "~$4.5B",
    consensus: "Strong Buy (8 analysts)",
    description: "D-Wave specializes in quantum annealing, serving 132 customers with systems like Advantage2. Its small market cap and high analyst targets indicate significant growth potential, though it reported Q1 2025 revenue of $15M with ongoing losses."
  },
  {
    name: "CRISPR Therapeutics",
    ticker: "CRSP", 
    currentPrice: "~$42",
    analystTargets: "$70-$80",
    upside: "67%-90%",
    marketCap: "~$4.10B",
    consensus: "Moderate Buy (20 analysts)",
    description: "CRISPR focuses on gene-editing therapies for sickle cell disease and cancer, with recent clinical trial progress. Its smaller market cap compared to Vertex ($115.69B) and Regeneron ($54.94B) indicates early-stage potential."
  },
  {
    name: "Rigetti Computing",
    ticker: "RGTI",
    currentPrice: "~$11", 
    analystTargets: "$14-$15",
    upside: "27%-36%",
    marketCap: "~$3.5B",
    consensus: "Strong Buy (4 analysts)",
    description: "Rigetti focuses on superconducting qubits, with an 84-qubit Ankaa-3 system and plans for 100+ qubits by year-end. Its Q4 2024 revenue was $2.27M, indicating early-stage development."
  },
  {
    name: "Quantum Computing Inc.",
    ticker: "QUBT",
    currentPrice: "~$17",
    analystTargets: "$22", 
    upside: "~29%",
    marketCap: "~$2.5B",
    consensus: "Strong Buy (1 analyst)",
    description: "QUBT develops photonic quantum computing, with Q4 2024 revenue of $101,000 and a net loss of $51.2M, indicating it is very early stage."
  }
];

const moderateUpsideStocks = [
  {
    name: "Kratos Defense & Security Solutions",
    ticker: "KTOS",
    currentPrice: "~$33.83",
    analystTargets: "$30-$35",
    upside: "-11% to +3.5%",
    marketCap: "~$6.5B", 
    consensus: "Buy (13 analysts)",
    description: "Kratos focuses on unmanned systems and cybersecurity, with a record opportunity pipeline of $12.6B, indicating growth potential."
  },
  {
    name: "Leonardo DRS",
    ticker: "DRS",
    currentPrice: "~$37",
    analystTargets: "$33-$48",
    upside: "-11% to +29.7%",
    marketCap: "~$12B",
    consensus: "Buy (4 analysts)", 
    description: "Leonardo DRS provides advanced defense technologies, including AI processors, with recent contracts enhancing growth prospects."
  }
];

const watchlistTable = [
  { stock: "QBTS", category: "Quantum Computing", marketCap: "4.5", currentPrice: "~$7", avgTarget: "~$15", upside: "71%-186%", consensus: "Strong Buy" },
  { stock: "CRSP", category: "Biogenetics", marketCap: "4.10", currentPrice: "~$42", avgTarget: "~$75", upside: "67%-90%", consensus: "Moderate Buy" },
  { stock: "RGTI", category: "Quantum Computing", marketCap: "3.5", currentPrice: "~$11", avgTarget: "~$14.5", upside: "27%-36%", consensus: "Strong Buy" },
  { stock: "QUBT", category: "Quantum Computing", marketCap: "2.5", currentPrice: "~$17", avgTarget: "$22", upside: "~29%", consensus: "Strong Buy" },
  { stock: "KTOS", category: "Defense Tech", marketCap: "6.5", currentPrice: "~$33.83", avgTarget: "~$34.82", upside: "-11% to +3.5%", consensus: "Buy" },
  { stock: "DRS", category: "Defense Tech", marketCap: "12", currentPrice: "~$37", avgTarget: "~$40", upside: "-11% to +29.7%", consensus: "Buy" },
  { stock: "IONQ", category: "Quantum Computing", marketCap: "10.53", currentPrice: "~$41", avgTarget: "~$41", upside: "-27% to +22%", consensus: "Strong Buy" }
];

export default function HighGrowthWatchlist() {
  return (
    <div className="space-y-16">
      <div className="text-center space-y-8">
        <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">
          Early-Stage Opportunities
        </p>
        <h2 className="text-center">
          <span className="text-5xl md:text-7xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
            High-Growth Watchlist
          </span>
        </h2>
        <div className="flex items-center justify-center mt-6">
          <div className="h-px w-24 bg-yellow-500/30"></div>
          <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">
            Early-Stage Upside - Analysis for 2025
          </p>
          <div className="h-px w-24 bg-yellow-500/30"></div>
        </div>
      </div>

      <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
        <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">Key Points</h3>
        <ul className="space-y-4 text-gray-300 list-disc list-inside">
          <li>Research suggests D-Wave Quantum (QBTS), CRISPR Therapeutics (CRSP), Rigetti Computing (RGTI), and Quantum Computing Inc. (QUBT) are early-stage stocks with significant upside potential in quantum computing and biogenetics.</li>
          <li>It seems likely that Kratos Defense & Security Solutions (KTOS) and Leonardo DRS (DRS) also have growth potential in defense tech, though with more moderate upside.</li>
          <li>The evidence leans toward QBTS and CRSP having the highest upside (up to 186% and 90%, respectively), based on analyst price targets, making them top watchlist candidates.</li>
          <li>IonQ (IONQ) is more established with limited upside, while larger companies like Nvidia and Taiwan Semiconductor (TSM) are less &quot;early&quot; for huge growth.</li>
        </ul>
      </div>

      <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
        <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">Stocks with Upside Potential</h3>
        
        <div className="mb-8">
          <h4 className="text-xl font-bold text-yellow-400 mb-4">Huge Upside Potential</h4>
          <p className="text-gray-300 mb-6">
            These stocks are considered early due to smaller market caps and high growth potential, ideal for investors seeking significant returns:
          </p>
          
          <div className="space-y-6">
            {hugeUpsideStocks.map((stock) => (
              <div key={stock.ticker} className="border-l-4 border-yellow-500 pl-6">
                <div className="flex flex-wrap items-center gap-4 mb-3">
                  <h5 className="text-lg font-bold text-yellow-400">{stock.name} ({stock.ticker})</h5>
                  <span className="text-sm bg-yellow-500 text-black px-2 py-1 rounded font-semibold">
                    {stock.upside} upside
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3 text-sm">
                  <div><strong className="text-yellow-400">Current Price:</strong> {stock.currentPrice}</div>
                  <div><strong className="text-yellow-400">Analyst Targets:</strong> {stock.analystTargets}</div>
                  <div><strong className="text-yellow-400">Market Cap:</strong> {stock.marketCap}</div>
                </div>
                <div className="mb-3">
                  <strong className="text-yellow-400">Analyst Consensus:</strong> {stock.consensus}
                </div>
                <p className="text-gray-300 text-sm">{stock.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xl font-bold text-yellow-400 mb-4">Moderate Upside Potential</h4>
          <p className="text-gray-300 mb-6">
            These are also early stage but with less pronounced growth compared to the above:
          </p>
          
          <div className="space-y-6">
            {moderateUpsideStocks.map((stock) => (
              <div key={stock.ticker} className="border-l-4 border-yellow-500 pl-6">
                <div className="flex flex-wrap items-center gap-4 mb-3">
                  <h5 className="text-lg font-bold text-yellow-400">{stock.name} ({stock.ticker})</h5>
                  <span className="text-sm bg-gray-600 text-white px-2 py-1 rounded">
                    {stock.upside} upside
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3 text-sm">
                  <div><strong className="text-yellow-400">Current Price:</strong> {stock.currentPrice}</div>
                  <div><strong className="text-yellow-400">Analyst Targets:</strong> {stock.analystTargets}</div>
                  <div><strong className="text-yellow-400">Market Cap:</strong> {stock.marketCap}</div>
                </div>
                <div className="mb-3">
                  <strong className="text-yellow-400">Analyst Consensus:</strong> {stock.consensus}
                </div>
                <p className="text-gray-300 text-sm">{stock.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
        <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">Watchlist Recommendations</h3>
        <p className="text-gray-300 mb-6">
          Based on analyst &quot;Buy&quot; or &quot;Strong Buy&quot; ratings, add the following to your watchlist, prioritizing those with highest upside:
        </p>
        
        <div className="mb-6">
          <p className="text-yellow-400 font-semibold mb-2">Top picks:</p>
          <p className="text-gray-300 mb-4">QBTS, CRSP, RGTI, QUBT for their significant growth potential.</p>
          
          <p className="text-yellow-400 font-semibold mb-2">Consider:</p>
          <p className="text-gray-300">KTOS, DRS, and IONQ for additional exposure, though with more limited upside.</p>
        </div>

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
              {watchlistTable.map((row) => (
                <TableRow key={row.stock} className="border-yellow-500/10">
                  <TableCell className="font-medium">{row.stock}</TableCell>
                  <TableCell>{row.category}</TableCell>
                  <TableCell>{row.marketCap}</TableCell>
                  <TableCell>{row.currentPrice}</TableCell>
                  <TableCell>{row.avgTarget}</TableCell>
                  <TableCell className={row.upside.includes("186%") || row.upside.includes("90%") ? "text-yellow-400 font-semibold" : ""}>{row.upside}</TableCell>
                  <TableCell>{row.consensus}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        
        <p className="text-gray-300 mt-6 text-sm">
          This table highlights QBTS and CRSP as having the highest upside potential, making them top candidates for the watchlist. RGTI and QUBT follow with significant upside, while KTOS, DRS, and IONQ have more limited growth potential due to their market positions.
        </p>
      </div>

      <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
        <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">Survey Note: Analysis of Early-Stage Stocks</h3>
        <p className="text-gray-300 mb-4">
          This survey note provides a comprehensive analysis of stocks innovating in quantum computing, AI, biogenetics, and defense technologies, focusing on those that are early stage with significant upside potential and suitable for a watchlist based on analyst recommendations. The analysis is based on current market data as of June 28, 2025, ensuring relevance for investors seeking high-growth opportunities in health, wealth, and defense sectors.
        </p>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-bold text-yellow-400 mb-2">Quantum Computing Stocks: Early-Stage Leaders with High Upside</h4>
            <p className="text-gray-300 text-sm">
              Quantum computing is still in its nascent stages, with companies developing technologies that could revolutionize industries like healthcare, finance, and cybersecurity.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-yellow-400 mb-2">Biogenetics Stocks: Early-Stage Innovators with High Impact</h4>
            <p className="text-gray-300 text-sm">
              Biogenetics, particularly gene editing and mRNA therapies, offers significant health impacts with early-stage companies showing high upside potential.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-yellow-400 mb-2">Defense Technology Stocks: Smaller Players with Growth Potential</h4>
            <p className="text-gray-300 text-sm">
              Defense tech stocks with smaller market caps offer growth potential, though with more moderate upside compared to quantum computing and biogenetics.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
        <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">Conclusion</h3>
        <p className="text-gray-300">
          Based on the analysis, the stocks early enough for huge upside potential are D-Wave Quantum (QBTS), CRISPR Therapeutics (CRSP), Rigetti Computing (RGTI), and Quantum Computing Inc. (QUBT), with QBTS and CRSP leading due to their high upside (up to 186% and 90%, respectively). Kratos Defense &amp; Security Solutions (KTOS) and Leonardo DRS (DRS) also warrant consideration for moderate upside, while IonQ (IONQ) is more established with limited growth potential. For the watchlist, prioritize QBTS, CRSP, RGTI, and QUBT, as they align with analyst &quot;Buy&quot; or &quot;Strong Buy&quot; ratings and offer significant growth opportunities in their respective innovative sectors.
        </p>
      </div>
    </div>
  );
} 