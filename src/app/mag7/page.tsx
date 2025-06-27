"use client";

import Mag7 from "@/components/Mag7";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const historicalPerformanceData = [
  { name: 'Alphabet Inc. (GOOG)', sixMonths: '-15.15%', oneYear: '-9.78%', fiveYears: '123.38%' },
  { name: 'Amazon Inc. (AMZN)', sixMonths: '-8.24%', oneYear: '1.89%', fiveYears: '62.26%' },
  { name: 'Apple Inc. (AAPL)', sixMonths: '-12.67%', oneYear: '8.67%', fiveYears: '159.63%' },
  { name: 'Broadcom Inc. (AVGO)', sixMonths: '13.48%', oneYear: '57.58%', fiveYears: '662.91%' },
  { name: 'Meta Platforms Inc. (META)', sixMonths: '0.73%', oneYear: '26.77%', fiveYears: '180.74%' },
  { name: 'Microsoft Corp. (MSFT)', sixMonths: '2.57%', oneYear: '6.25%', fiveYears: '135.84%' },
  { name: 'NVIDIA Corp. (NVDA)', sixMonths: '-21.75%', oneYear: '28.59%', fiveYears: '1,410%' },
  { name: 'Tesla Inc. (TSLA)', sixMonths: '-0.49%', oneYear: '70.09%', fiveYears: '462.53%' },
];

export default function Mag7Page() {
  return (
    <div className="min-h-screen bg-black text-white font-satoshi">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="space-y-16">
          <div className="text-center space-y-8">
            <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">
              High-Performing Technology Companies
            </p>
            <h1 className="text-center">
              <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
                The Magnificent Seven
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
            <Mag7 />
          </div>
        
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] space-y-8 text-white/80">
            <h2 className="text-3xl font-bold text-yellow-500">The Magnificent 7 Stocks</h2>
            <p>The Magnificent Seven stocks are a group of the most influential companies in the U.S. stock market. This term has been popularized to describe a set of dominant companies, particularly in the tech sector.</p>
            <p>The group currently includes Alphabet, Amazon, Apple, Broadcom, Meta Platforms, Microsoft, and NVIDIA, and spans four sectors: technology services, electronic technology, retail trade, and consumer durables. They operate across these industries: internet software/services, telecommunications equipment, internet retail, packaged software, semiconductors, and motor vehicles.</p>
            <div className="bg-black/20 border border-yellow-500/20 p-4">
              <p><strong className="text-yellow-500">Note:</strong> The original Magnificent Seven included Tesla instead of Broadcom. Some analysts may still refer to the original group when discussing the Magnificent Seven.</p>
            </div>

            <h2 className="text-3xl font-bold text-yellow-500">Historical Performance of the Magnificent 7 Stocks</h2>
            <p>The table below displays the performance of the Magnificent Seven (plus Tesla) stocks over the last six months, one year, and five years.</p>
            <h3 className="text-2xl font-bold text-yellow-500/90">Magnificent Seven Stock Performance (6 months, 1 year, 5 years)</h3>
            <div className="overflow-x-auto">
              <Table className="mt-4">
                <TableHeader>
                  <TableRow className="border-yellow-500/20">
                    <TableHead className="text-white">Name</TableHead>
                    <TableHead className="text-white">6 Months (%)</TableHead>
                    <TableHead className="text-white">1 Year (%)</TableHead>
                    <TableHead className="text-white">5 Years (%)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {historicalPerformanceData.map((item) => (
                    <TableRow key={item.name} className="border-yellow-500/10">
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.sixMonths}</TableCell>
                      <TableCell>{item.oneYear}</TableCell>
                      <TableCell>{item.fiveYears}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <p className="text-xs text-white/50 italic">Data as of May 9, 2025 (source: TradingView)</p>
            <p className="italic text-center p-4 bg-black/10">A line graph showing comparative stock performances for Magnificent 7 companies from 2020 to 2024.</p>
            <p>The original Magnificent Seven includes META, GOOG, AMZN, AAPL, MSFT, NVDA, and TSLA. Over the past five years, NVIDIA has led the pack with an impressive return of approximately 1,400%. Tesla had the next-highest showing with a return exceeding 460%. Most others had five-year returns of more than 100%, save Amazon at approximately 62%.</p>

            <h2 className="text-3xl font-bold text-yellow-500">Factors Driving the Magnificent 7 Stocks</h2>
            <p>The group of stocks known as the Magnificent Seven is at the forefront of technological changes across the economy, and they consistently develop new products and services that drive consumer demand and business growth. Here are other traits common among the Magnificent Seven stocks:</p>
            <ul className="space-y-4">
                <li><strong className="text-white">Adaptability:</strong> Each has adapted to changing market conditions, including shifts in consumer behavior and technological advances, by continuing to invest in research and development.</li>
                <li><strong className="text-white">Financial health:</strong> All have had strong financial health, robust earnings, revenue growth, and healthy balance sheets, making them attractive to investors for their growth.</li>
                <li><strong className="text-white">Global reach:</strong> Their operations and influence span the globe, allowing them to tap into diverse markets and benefit from international growth.</li>
                <li><strong className="text-white">Strong market position:</strong> The Magnificent Seven have strong market positions in their sectors, often holding the dominant market share that gives them a competitive edge.</li>
                <li><strong className="text-white">Worldwide brand recognition:</strong> The Magnificent Seven companies have strong brand recognition and a loyal customer base, which should mean consistent revenue streams and the ability to introduce new products successfully.</li>
            </ul>
            <p>Because of their size and reach, these companies all face regulatory risks. Regulation changes, especially in data privacy, antitrust laws, and international trade, can significantly influence these companies. More broadly, widespread economic changes affect them because of their broad reach, including interest rates, inflation, economic growth, consumer confidence, and investor sentiment.</p>
            
            <h2 className="text-3xl font-bold text-yellow-500">The Magnificent 7 Stocks Compared to FAANG</h2>
            <p>In finance and investing, FAANG is an acronym for the shares of five major American tech giants: Meta Platforms (previously Facebook, hence the &quot;F&quot;), Amazon.com, Apple, Netflix (NFLX), and Alphabet (previously Google, hence the &quot;G&quot;). Jim Cramer, host of CNBC&apos;s &quot;Mad Money,&quot; and technical analyst Bob Lang coined the term in 2013, inserting an extra &quot;A&quot; for Apple in 2017.</p>
            <p>FAANG and the Magnificent Seven are both groups of dominant technology firms, yet they have notable differences. The Magnificent Seven group contains a wider array of technology and innovation-driven companies than the more narrowly focused FAANG.</p>
            <div className="bg-black/20 border border-yellow-500/20 p-4">
              <p><strong className="text-yellow-500">Note:</strong> Investing in an S&P 500 ETF will provide you exposure to all Magnificent Seven and FAANG stocks.</p>
            </div>
            <p>It includes behemoths like Microsoft and Tesla, extending its clout across diverse sectors such as software development, hardware, electric vehicles, and artificial intelligence. By contrast, FAANG stocks are predominant within internet services, e-commerce, and digital media.</p>
            <p>Characterized by their robust growth, market-leading roles, and influence across various technology domains, the Magnificent Seven capture a broader spectrum of the tech industry. Conversely, FAANG is renowned for its rapid expansion, particularly in the internet and digital media segments. It has been pivotal in driving the technology sector&apos;s rally in recent years.</p>
            <p>Thus, while both groups have overlapping members and are powerful forces in the tech world, the Magnificent Seven have more extensive representation across the tech sector.</p>

            <h2 className="text-3xl font-bold text-yellow-500">Risks and Challenges of the Magnificent 7 Stocks</h2>
            <p>Like any investment, putting your money into the Magnificent Seven stocks means taking on risks and challenges. Despite their strong market positions and record of driving technology forward, these companies face factors that could determine their performance. Here are some of them:</p>
            <ul className="space-y-4">
              <li><strong className="text-white">Currency fluctuations:</strong> As global entities, these companies face risks associated with currency exchange rate fluctuations, affecting their earnings and stock prices.</li>
              <li><strong className="text-white">Cybersecurity threats:</strong> As technology companies, the Magnificent Seven are prime targets for cyberattacks. A significant breach could lead to substantial financial losses and damage their reputations.</li>
              <li><strong className="text-white">Economic downturns:</strong> Global economic conditions, such as recessions or market downturns, can undermine consumer spending and business investment, transforming their revenues and growth prospects.</li>
              <li><strong className="text-white">Geopolitical tensions and trade policies:</strong> International operations expose these companies to geopolitical risks, including trade wars, tariffs, and changing international relations, which can affect their global supply chains and market access.</li>
              <li><strong className="text-white">Key person risk:</strong> Some of these companies are closely associated with their founders or executives, whose departure or loss could dampen investor sentiment and the company&apos;s direction.</li>
              <li><strong className="text-white">Market saturation and competition:</strong> As these companies continue to grow, they will face challenges in finding new markets and maintaining their growth rates. Increased competition from established players and emerging startups can also threaten their market share. In short, by leading their markets, they are also the targets for competitors looking to make a mark in their industries.</li>
              <li><strong className="text-white">Regulatory and legal risks:</strong> Tech giants have long been under scrutiny for antitrust concerns, data privacy, and tax practices. Changes in regulations or legal challenges can have significant financial and operational impacts. Many of them have been investigated for monopolistic practices, and if they are to increase their already dominant shares of their markets, they will face more scrutiny.</li>
              <li><strong className="text-white">Technological disruption:</strong> Rapid technological change means these companies must continuously innovate to stay ahead. Failure to adapt to new technologies or trends could lead to losing market relevance.</li>
            </ul>

            <h3 className="text-2xl font-bold text-yellow-500/90">What Is the Total Market Capitalization of the Magnificent 7 Stocks?</h3>
            <p>The total market capitalization of the Magnificent Seven stocks was almost $16 trillion as of May 9, 2025.</p>
            <ul className="list-disc list-inside">
              <li>AAPL: $2.962 trillion</li>
              <li>AMZN: $2.039 trillion</li>
              <li>AVGO: $974.9 billion</li>
              <li>GOOG: $1.864 trillion</li>
              <li>META: $1.496 trillion</li>
              <li>MSFT: $3.248 trillion</li>
              <li>NVDA: $2.844 trillion</li>
            </ul>

            <h3 className="text-2xl font-bold text-yellow-500/90">Are There Magnificent 7 ETFs?</h3>
            <p>Yes, there are Magnificent Seven ETFs. One such ETF is the MAGS Magnificent Seven ETF by Roundhill Investments. (Note that this ETF counts Tesla among its holdings, but not Broadcom.)</p>
            <p>You can also gain exposure to the magnificent stocks by investing in ETFs that hold them, such as any ETF that tracks the S&P 500.</p>

            <h3 className="text-2xl font-bold text-yellow-500/90">How Would the Magnificent 7 Be Influenced by Inflation?</h3>
            <p>The impact of inflation on the Magnificent Seven is complex. Some key ways that inflation would affect these companies include higher costs for materials, labor, and other operational expenses. Inflation can reduce consumers&apos; purchasing power, decreasing spending on nonessential goods and services.</p>
            <p>Also, central banks ordinarily respond to high inflation by raising benchmark interest rates. Higher interest rates increase borrowing costs for companies, harming their investment and expansion plans. Nonetheless, the effect of inflation can vary within the Magnificent Seven group and depends on the company&apos;s specific business model, cost structure, and market position.</p>

            <h2 className="text-3xl font-bold text-yellow-500">The Magnificent Seven vs. the S&P 500</h2>
            <p>The Magnificent Seven stocks (Alphabet, Amazon, Apple, Broadcom, Meta Platforms, Microsoft, NVIDIA) have significantly outperformed the S&P 500 over the past decade. Below is a detailed comparison based on available data as of June 22, 2025:</p>

            <h3 className="text-2xl font-bold text-yellow-500/90">Performance Comparison</h3>
            <h4 className="text-xl font-bold text-white mt-4">Magnificent Seven Returns (10-Year, 2015–2025):</h4>
            <ul className="list-disc list-inside space-y-1">
              <li>NVIDIA: 26,466%</li>
              <li>Microsoft: 1,018%</li>
              <li>Amazon: 850%</li>
              <li>Meta Platforms: 694%</li>
              <li>Apple: 578%</li>
              <li>Alphabet: 519%</li>
              <li>Broadcom: ~1,200% (estimated based on recent inclusion and semiconductor sector performance)</li>
              <li>Weighted average return (approximate, based on market cap): ~3,000–4,000% (heavily skewed by NVIDIA).</li>
            </ul>
            <h4 className="text-xl font-bold text-white mt-4">S&P 500 Return (10-Year, 2015–2025):</h4>
            <p>The S&P 500 has returned approximately 180–200% over the same period, including dividends, based on historical data and recent performance trends (annualized return of ~10–12%).</p>
            
            <h3 className="text-2xl font-bold text-yellow-500/90">Degree of Outperformance</h3>
            <ul className="list-disc list-inside space-y-2">
                <li><strong className="text-white">Absolute Outperformance:</strong> The Magnificent Seven&apos;s weighted average return (3,000–4,000%) is 15–20 times higher than the S&P 500&apos;s return (200%). Individual stocks like NVIDIA have outperformed the S&P 500 by over 130 times.</li>
                <li><strong className="text-white">Annualized Outperformance:</strong> The Magnificent Seven&apos;s annualized returns range from ~20% (Alphabet) to ~70% (NVIDIA), compared to the S&P 500&apos;s ~10–12%. This translates to an annualized outperformance of 10–58% per stock.</li>
                <li><strong className="text-white">Market Cap Contribution:</strong> The Magnificent Seven account for ~34% of the S&P 500&apos;s market value and have driven a significant portion of its gains. Without them, the S&P 500&apos;s return would be closer to 50–100% over 10 years, highlighting their outsized impact.</li>
            </ul>

            <h3 className="text-2xl font-bold text-yellow-500/90">Recent Context</h3>
            <p>In 2024–2025, the Magnificent Seven added ~$5 trillion in market value, nearly matching the S&P 500&apos;s total gain. However, a recent 20–22% drawdown (erasing $3.4 trillion) shows volatility, underperforming the S&P 500 during this correction phase.</p>
            <p>Despite short-term volatility, their long-term outperformance remains robust due to dominance in AI, cloud computing, and tech innovation.</p>

            <h3 className="text-2xl font-bold text-yellow-500/90">Conclusion</h3>
            <p>Over the past decade, the Magnificent Seven have outperformed the S&P 500 by a factor of 10–20x in total returns, with individual stocks like NVIDIA showing extreme outperformance. Their dominance underscores their role as market leaders, though recent volatility suggests diversification to manage risk.</p>

            <h2 className="text-3xl font-bold text-yellow-500">The Bottom Line</h2>
            <p>The Magnificent Seven stocks represent a cohort of high-performing companies that have garnered significant attention in the investment world for their market dominance, technological advances, and growth potential.</p>
            <p>However, investors need to know the risks and challenges associated with these stocks. The dynamic nature of the technology sector, regulatory scrutiny, market saturation, and global economic factors like inflation and geopolitical tensions can affect their performance. Additionally, high market valuations bring lofty expectations, and any failure to meet these can lead to significant stock price corrections.</p>
            <p>Thus, while the Magnificent Seven offer potential for substantial growth, they also require careful analysis and a balanced approach considering their strengths and the various external factors that could influence their future trajectory.</p>

            <h2 className="text-3xl font-bold text-yellow-500 mt-12 pt-8 border-t border-yellow-500/30">
              🧠 Cyber, Crypto & Compute: The Trifecta of Digital Power
            </h2>
            <p>
              The next decade belongs to firms that secure, accelerate, and own the future of data—across AI, digital finance, and global compute infrastructure. This is not a single sector play. It&apos;s a converging supercycle.
            </p>
            <p className="font-bold mt-4">Here&apos;s the curated basket:</p>
            
            <div className="space-y-8 mt-6">
              <div>
                <h3 className="text-2xl font-bold text-white">🛡️ 1. $CRWD – CrowdStrike</h3>
                <p className="italic text-yellow-500/90 mt-1">AI-native endpoint protection</p>
                <p className="mt-2">
                  Dominates the zero-trust endpoint war with Falcon. Every new device, every new attack—Falcon gets smarter. Their moat is compounding.
                </p>
                <p className="mt-2 p-3 bg-black/20 border-l-4 border-yellow-500/50">
                  <strong className="text-white/80">Think:</strong> Digital immune system for the enterprise.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white">🌐 2. $NET – Cloudflare</h3>
                <p className="italic text-yellow-500/90 mt-1">Programmable edge + Zero Trust infra</p>
                <p className="mt-2">
                  The internet&apos;s firewall. A real-time security and performance layer across 300+ cities. Now bundling compute, ZTNA, and Workers—Web3-friendly and AI-ready.
                </p>
                <p className="mt-2 p-3 bg-black/20 border-l-4 border-yellow-500/50">
                  <strong className="text-white/80">Think:</strong> Akamai + Okta + AWS-lite in one.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white">🔐 3. $ZS – Zscaler</h3>
                <p className="italic text-yellow-500/90 mt-1">Zero Trust Network Access (ZTNA)</p>
                <p className="mt-2">
                  Legacy VPNs are dying. Zscaler pioneered per-user/per-app security that scales with remote and hybrid work. Deep integration into Fed and Fortune 500.
                </p>
                <p className="mt-2 p-3 bg-black/20 border-l-4 border-yellow-500/50">
                  <strong className="text-white/80">Think:</strong> SaaS-native digital border control.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white">💾 4. $RBRK – Rubrik</h3>
                <p className="italic text-yellow-500/90 mt-1">Ransomware recovery + data vaulting</p>
                <p className="mt-2">
                  Your last line of defense. Rubrik ensures recoverability and compliance—backed by Microsoft and built for the AI/Big Data era.
                </p>
                <p className="mt-2 p-3 bg-black/20 border-l-4 border-yellow-500/50">
                  <strong className="text-white/80">Think:</strong> Fireproof backups + AI data observability.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white">🚀 5. $GLXY – Galaxy Digital</h3>
                <p className="italic text-yellow-500/90 mt-1">AI data centers + crypto-native banking</p>
                <p className="mt-2">
                  From BTC liquidity and ETF exposure to digital infrastructure and AI-powered compute investments, Galaxy is building the Goldman Sachs of the on-chain world.
                </p>
                <p className="mt-2 p-3 bg-black/20 border-l-4 border-yellow-500/50">
                  <strong className="text-white/80">Think:</strong> $NVDA meets $GS—with crypto upside.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-yellow-500/30">
              <h3 className="text-2xl font-bold text-yellow-500/90">Thesis in One Line</h3>
              <p className="text-lg italic mt-2">
                Security + Speed + Sovereignty. You want to own the companies that defend, accelerate, and monetize digital transformation across every layer of the stack.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
