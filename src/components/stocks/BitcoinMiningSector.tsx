"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const miningStocks = [
  {
    ticker: "$IREN",
    company: "Iris Energy",
    return: "63%",
    keyDevelopments: "Closed $550 million convertible notes offering on June 13, 2025; pivoting to AI and data centers.",
    impact: "Strong investor confidence in growth plans.",
    details: "On June 13, 2025, IREN closed an upsized $550 million convertible notes offering at 3.50%, initially planned for $450 million, with strong investor demand leading to an additional $50 million via a greenshoe option. Net proceeds were approximately $534.9 million, used for capped call transactions, a prepaid forward transaction, and general corporate purposes. The company also pivoted towards AI and data center ventures, as noted in a Perplexity article from May 15, 2025, with analysts maintaining a positive outlook despite some margin pressures."
  },
  {
    ticker: "$CORZ",
    company: "Core Scientific",
    return: "56%",
    keyDevelopments: "Acquisition talks with CoreWeave reported on June 26, surged 33% that day.",
    impact: "Acquisition rumors drove significant gains.",
    details: "On June 26, 2025, shares surged 33% following a report by CNBC that CoreWeave, an AI infrastructure firm, is in talks to acquire Core Scientific, potentially finalizing in weeks. This follows a long-standing partnership, including 12-year hosting contracts signed in June 2024, expected to generate billions in revenue. The stock's second-sharpest rally since its Nasdaq return underscores the impact."
  },
  {
    ticker: "$CIFR",
    company: "Cipher Mining",
    return: "31%",
    keyDevelopments: "Commenced Bitcoin mining at Black Pearl on June 23; Cantor Fitzgerald raised price target on June 5.",
    impact: "Operational milestone and analyst support.",
    details: "On June 23, 2025, Cipher commenced Bitcoin mining at its Black Pearl data center, expected to increase total hash rate to ~23.1 EH/s by Q3 2025, as per GlobeNewswire. On June 5, 2025, Cantor Fitzgerald raised its price target to $6 from $4, maintaining a Buy rating, as reported by CNN Markets."
  },
  {
    ticker: "$RIOT",
    company: "Riot Platforms",
    return: "29%",
    keyDevelopments: "No specific news identified for June 2025.",
    impact: "Likely driven by general sector momentum and Bitcoin's stable price.",
    details: "No specific news was identified for June 2025, but its 29% return aligns with sector trends. Historical data from Investing.com articles suggest Riot's performance is tied to Bitcoin price stability and operational expansions, such as acquiring Block Mining in July 2024."
  },
  {
    ticker: "$CLSK",
    company: "CleanSpark",
    return: "22%",
    keyDevelopments: "No specific June 2025 news found.",
    impact: "General sector trends and operational efficiency likely drove the return.",
    details: "No specific June 2025 news was found, but its 22% return suggests sector-wide benefits. Past reports, such as its acquisition of GRIID Infrastructure in June 2024, indicate a focus on growth, likely contributing to performance."
  },
  {
    ticker: "$WULF",
    company: "TeraWulf",
    return: "15%",
    keyDevelopments: "No specific news for June 2025.",
    impact: "Likely driven by sector momentum and sustainable energy focus.",
    details: "No specific news for June 2025, but its 15% return aligns with sector performance. Past analyst ratings, such as Rosenblatt's Buy rating in May 2025, suggest positive sentiment, as per Investing.com articles."
  },
  {
    ticker: "$HUT",
    company: "Hut 8 Mining",
    return: "15%",
    keyDevelopments: "No specific June 2025 news.",
    impact: "General sector performance and operational plans likely contributed.",
    details: "No specific June 2025 news, but its 15% return reflects sector trends. Past updates, such as plans to upgrade ASIC mining fleet in Q1 2025, suggest growth focus, as per CoinCodex articles from February 2025."
  },
  {
    ticker: "$MARA",
    company: "Marathon Digital",
    return: "3%",
    keyDevelopments: "No specific news for June 2025.",
    impact: "Likely impacted by sector trends, but with less pronounced gains.",
    details: "No specific news for June 2025, and its 3% return is the lowest, possibly indicating fewer positive catalysts. Past reports suggest challenges post-halving, but no recent negative news was identified."
  },
  {
    ticker: "$GLXY",
    company: "Galaxy Digital",
    return: "2%",
    keyDevelopments: "No specific news for June 2025.",
    impact: "Likely driven by general crypto market trends.",
    details: "No specific news for June 2025, and its 2% return reflects its different business model, less tied to mining operations. Its performance is more aligned with broader crypto market sentiment."
  }
];

export default function BitcoinMiningSector() {
  return (
    <div className="space-y-16">
      <div className="text-center space-y-8">
        <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">
          Mining Performance Analysis
        </p>
        <h2 className="text-center">
          <span className="text-5xl md:text-7xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
            Bitcoin Mining Sector
          </span>
        </h2>
        <div className="flex items-center justify-center mt-6">
          <div className="h-px w-24 bg-yellow-500/30"></div>
          <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">
            Mining Stock Analysis - June 2025 Performance
          </p>
          <div className="h-px w-24 bg-yellow-500/30"></div>
        </div>
      </div>

      <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
        <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">Key Points</h3>
        <ul className="space-y-4 text-gray-300 list-disc list-inside">
          <li>Research suggests these stocks, primarily Bitcoin mining companies, had strong returns in June 2025, ranging from 2% to 63%, likely driven by sector trends and company-specific events.</li>
          <li>It seems likely that factors like operational expansions, capital raises, and acquisition rumors influenced their performance, with varying impacts across stocks.</li>
          <li>The evidence leans toward Bitcoin&apos;s price stability and positive crypto market sentiment contributing to overall gains, though individual stock performance varied.</li>
        </ul>
      </div>

      <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
        <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">Stock Performance Overview</h3>
        <p className="text-gray-300 mb-6">
          The stocks listed ($IREN, $CORZ, $CIFR, $RIOT, $CLSK, $WULF, $HUT, $MARA, $GLXY) are mainly involved in cryptocurrency mining, especially Bitcoin, with returns over the last month (May 28 to June 28, 2025) ranging from 2% to 63%. These returns reflect a robust period for the sector, likely influenced by Bitcoin&apos;s price stability around $107,000 and positive market sentiment.
        </p>
        
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-yellow-500/30">
                <TableHead className="text-yellow-500 font-bold">Ticker</TableHead>
                <TableHead className="text-yellow-500 font-bold">Company</TableHead>
                <TableHead className="text-yellow-500 font-bold">Return (%)</TableHead>
                <TableHead className="text-yellow-500 font-bold">Key Developments</TableHead>
                <TableHead className="text-yellow-500 font-bold">Impact</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {miningStocks.map((stock) => (
                <TableRow key={stock.ticker} className="border-yellow-500/10">
                  <TableCell className="font-medium">{stock.ticker}</TableCell>
                  <TableCell>{stock.company}</TableCell>
                  <TableCell className={
                    parseInt(stock.return) >= 50 ? "text-yellow-400 font-bold" :
                    parseInt(stock.return) >= 25 ? "text-yellow-400" :
                    parseInt(stock.return) >= 15 ? "text-green-400" :
                    "text-gray-300"
                  }>{stock.return}</TableCell>
                  <TableCell className="text-sm">{stock.keyDevelopments}</TableCell>
                  <TableCell className="text-sm">{stock.impact}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
        <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">Top Performers and Key Drivers</h3>
        
        <div className="space-y-8">
          {miningStocks.slice(0, 3).map((stock) => (
            <div key={stock.ticker} className="border-l-4 border-yellow-500 pl-6">
              <div className="flex items-center gap-4 mb-3">
                <h4 className="text-xl font-bold text-yellow-400">{stock.company} ({stock.ticker}, {stock.return})</h4>
                <span className="text-sm bg-yellow-500 text-black px-2 py-1 rounded font-semibold">
                  Top Performer
                </span>
              </div>
              <p className="text-gray-300 mb-3"><strong className="text-yellow-400">Key Development:</strong> {stock.keyDevelopments}</p>
              <p className="text-gray-300 mb-3"><strong className="text-yellow-400">Impact:</strong> {stock.impact}</p>
              <p className="text-gray-300 text-sm">{stock.details}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
        <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">Other Stocks</h3>
        <p className="text-gray-300 mb-6">
          Stocks like $RIOT (29%), $CLSK (22%), $WULF (15%), $HUT (15%), $MARA (3%), and $GLXY (2%) also saw positive returns, likely due to sector-wide trends and operational updates, though with less pronounced catalysts compared to the top performers.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {miningStocks.slice(3).map((stock) => (
            <div key={stock.ticker} className="bg-black/30 p-4 rounded border border-yellow-500/20">
              <h5 className="text-lg font-bold text-yellow-400 mb-2">{stock.company} ({stock.ticker})</h5>
              <div className="text-2xl font-bold text-yellow-500 mb-2">{stock.return}</div>
              <p className="text-gray-300 text-sm mb-2">{stock.keyDevelopments}</p>
              <p className="text-gray-300 text-xs">{stock.impact}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
        <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">Market and Sector Overview</h3>
        <p className="text-gray-300 mb-6">
          The cryptocurrency mining sector has shown resilience in June 2025, with Bitcoin&apos;s price stable around $107,000, as reported by CoinDesk on June 27, 2025, with a slight monthly decrease of 1.74% noted in TradingView data. Despite this, the sector benefited from positive sentiment, driven by:
        </p>
        
        <ul className="space-y-4 text-gray-300 list-disc list-inside mb-6">
          <li>Regulatory developments, such as a Wyoming lawmaker urging Congress to pass crypto-friendly bills (GENIUS Act) on June 28, 2025, as per TradingView.</li>
          <li>Institutional interest, with Ric Edelman recommending 10%-40% portfolio allocation to crypto, including Bitcoin, on June 27, 2025, as per CNBC.</li>
          <li>Coinbase being the best-performing S&P 500 stock in June, signaling strong crypto market momentum, as reported on June 27, 2025, by CNBC.</li>
        </ul>
        
        <p className="text-gray-300">
          These factors likely created a favorable environment for mining stocks, though individual performance varied based on company-specific events.
        </p>
      </div>

      <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
        <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">Comparative Analysis</h3>
        <p className="text-gray-300 mb-6">
          The top performers ($IREN, $CORZ, $CIFR) had clear catalysts (capital raises, acquisitions, operational milestones), while others ($RIOT, $CLSK, $WULF, $HUT) benefited from sector momentum. $MARA and $GLXY had lower returns, possibly due to fewer company-specific drivers or their business models being less aligned with mining sector dynamics.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-black/30 p-6 rounded border border-yellow-500/20">
            <h4 className="text-lg font-bold text-yellow-400 mb-3">Clear Catalysts</h4>
            <p className="text-gray-300 text-sm mb-2">$IREN, $CORZ, $CIFR</p>
            <p className="text-gray-300 text-xs">Capital raises, acquisition rumors, operational milestones</p>
          </div>
          
          <div className="bg-black/30 p-6 rounded border border-yellow-500/20">
            <h4 className="text-lg font-bold text-yellow-400 mb-3">Sector Momentum</h4>
            <p className="text-gray-300 text-sm mb-2">$RIOT, $CLSK, $WULF, $HUT</p>
            <p className="text-gray-300 text-xs">Benefited from general Bitcoin mining sector trends</p>
          </div>
          
          <div className="bg-black/30 p-6 rounded border border-yellow-500/20">
            <h4 className="text-lg font-bold text-yellow-400 mb-3">Limited Catalysts</h4>
            <p className="text-gray-300 text-sm mb-2">$MARA, $GLXY</p>
            <p className="text-gray-300 text-xs">Lower returns due to fewer company-specific drivers</p>
          </div>
        </div>
      </div>

      <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
        <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">Survey Note: Deep Research on Listed Stocks</h3>
        <p className="text-gray-300 mb-4">
          This survey note provides a comprehensive analysis of the stocks provided ($IREN, $CORZ, $CIFR, $RIOT, $CLSK, $WULF, $HUT, $MARA, $GLXY) with their respective returns over the last month (May 28 to June 28, 2025), as indicated by the percentages (63%, 56%, 31%, 29%, 22%, 15%, 15%, 3%, 2%). The research focuses on understanding the drivers behind their performance, company fundamentals, and broader market context, based on available data as of 03:25 PM CEST on Saturday, June 28, 2025.
        </p>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-bold text-yellow-400 mb-2">Methodology and Context</h4>
            <p className="text-gray-300 text-sm">
              The analysis began by identifying the stocks as primarily Bitcoin mining companies, with $GLXY (Galaxy Digital) being an exception as a crypto financial services firm. The percentages were confirmed via an X post from June 28, 2025, by @ericjackson, stating &quot;Returns in the last month:&quot; followed by the exact list, suggesting these are one-month returns.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 