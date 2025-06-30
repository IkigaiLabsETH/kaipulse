"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function HoodPage() {
  return (
    <div className="min-h-screen bg-black text-white font-satoshi">
      {/* Premium header accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-8">
            <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">
              Commission-free Trading • Fintech
            </p>
            <h1 className="text-center">
              <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
                Robinhood (HOOD)
              </span>
            </h1>
            <div className="flex items-center justify-center mt-6">
              <div className="h-px w-24 bg-yellow-500/30"></div>
              <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">
                Democratizing Finance for All
              </p>
              <div className="h-px w-24 bg-yellow-500/30"></div>
            </div>

            {/* Featured Visual */}
            <div className="relative w-full mx-auto mt-12 aspect-[16/9] overflow-hidden rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <iframe
                src="https://www.youtube.com/embed/ivvw5uBvTh4"
                title="Robinhood Featured Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
            </div>
          </div>

          {/* Key Points Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Key Points
            </h3>
            <ul className="space-y-4 text-gray-300 list-disc list-inside">
              <li>
                Research suggests blockchain can improve access to private securities like SpaceX and OpenAI, offering 24/7 trading and global reach.
              </li>
              <li>
                It seems likely that tokenization enhances liquidity and price discovery for private assets, though regulatory challenges remain.
              </li>
              <li>
                The evidence leans toward blockchain reducing costs and settlement times, but adoption is still evolving, especially for private companies.
              </li>
              <li>
                Controversy exists around regulation, with some seeing it as a barrier and others as necessary for investor protection.
              </li>
              <li>
                <strong>BREAKING:</strong> Robinhood has launched tokenized shares of OpenAI and SpaceX in Europe, marking a revolutionary step in private equity accessibility.
              </li>
            </ul>
          </div>

          {/* Introduction Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              IPO Overview & Comprehensive Analysis
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                Robinhood Markets, Inc. (HOOD) went public on July 29, 2021,
                with an IPO price of $38 per share, listing on the Nasdaq
                exchange under the ticker symbol &quot;HOOD.&quot; As of June
                21, 2025, the stock price is $78.50, reflecting a significant
                increase and strong market interest, with a market cap of about
                $69.274 billion. This detailed report provides an in-depth
                examination of Robinhood Markets, Inc. (HOOD), focusing on its
                initial public offering (IPO), business model, recent financial
                performance, and market developments, particularly in the
                context of the crypto and financial markets.
              </p>
            </div>
          </div>

          {/* Business Model Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Business Model
            </h3>
            <div className="space-y-6 text-gray-300 prose prose-invert max-w-none prose-p:text-gray-300 prose-headings:text-yellow-500">
              <div>
                <h4>Commission-Free Trading</h4>
                <p>
                  Robinhood offers zero-commission trades for stocks, ETFs,
                  options, and cryptocurrencies, which has been a major driver
                  of its popularity. This is made possible through alternative
                  revenue streams, aligning with its mission to
                  &quot;democratize finance for all.&quot;
                </p>
              </div>
              <div>
                <h4>Payment for Order Flow (PFOF)</h4>
                <p>
                  A significant portion of Robinhood&apos;s revenue comes from
                  PFOF, where market makers pay Robinhood for routing customer
                  orders to them. This practice has been controversial but
                  remains a key revenue source.
                </p>
              </div>
              <div>
                <h4>Net Interest Income</h4>
                <p>
                  Robinhood earns interest on uninvested cash balances, margin
                  lending, and credit card interest. This has become a growing
                  revenue source, accounting for 31% of Q1 2025 revenues.
                </p>
              </div>
              <div>
                <h4>Subscription Fees (Robinhood Gold)</h4>
                <p>
                  Robinhood Gold, a premium service, offers features like margin
                  trading and larger instant deposits. It generates recurring
                  revenue, with 3.2 million subscribers as of Q1 2025.
                </p>
              </div>
            </div>
          </div>

          {/* BREAKING: Tokenized Securities Launch */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <div className="flex items-center mb-6">
              <span className="bg-red-600 text-white px-3 py-1 text-sm font-bold rounded-none mr-4">BREAKING</span>
              <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                Blockchain Revolution: Tokenized Securities Launch
              </h3>
            </div>
            <div className="space-y-6 text-gray-300 prose prose-invert max-w-none prose-p:text-gray-300 prose-headings:text-yellow-500">
              <div>
                <h4>Tokenized SpaceX & OpenAI Shares in Europe</h4>
                <p>
                  <strong>Today marks a historic moment:</strong> Robinhood has officially rolled out tokenized shares of OpenAI and SpaceX to users in Europe, making private equity accessible through blockchain technology. This groundbreaking initiative gives eligible users 5 euros worth of OpenAI and SpaceX tokens as part of the launch, democratizing access to pre-IPO investments that were previously exclusive to accredited investors.
                </p>
              </div>
              <div>
                <h4>Blockchain Benefits for Private Securities</h4>
                <p>
                  This launch addresses critical limitations in traditional private equity markets:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                  <li><strong>Instant Settlement:</strong> Real-time transactions vs. traditional 2-3 day settlements</li>
                  <li><strong>24/7 Trading:</strong> Around-the-clock accessibility for global investors</li>
                  <li><strong>Fractional Ownership:</strong> Enables smaller investors to participate in high-value investments</li>
                  <li><strong>Enhanced Liquidity:</strong> Secondary market trading for traditionally illiquid private assets</li>
                  <li><strong>Lower Costs:</strong> Reduced intermediary fees through blockchain automation</li>
                  <li><strong>Full Transparency:</strong> Immutable ledger providing complete transaction history</li>
                </ul>
              </div>
              <div>
                <h4>Market Impact & Stock Performance</h4>
                <p>
                                     The announcement has sent Robinhood&apos;s stock to record highs, with the market recognizing the revolutionary potential of tokenized private equity. The total value of tokenized equities has grown from $4.8 million to $350 million in just one year, with projections suggesting the tokenization market could reach over $10 trillion.
                </p>
              </div>
            </div>
          </div>

          {/* Detailed Blockchain Analysis */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Blockchain&apos;s Impact on Securities Trading
            </h3>
            <div className="space-y-6 text-gray-300 prose prose-invert max-w-none prose-p:text-gray-300 prose-headings:text-yellow-500">
              <p>
                Blockchain technology is transforming how securities, especially private assets like SpaceX and OpenAI, are traded, offering benefits like instant settlement and global accessibility. For EU investors, while trading US stocks through brokers like IBKR or Schwab is already straightforward for mid to large-cap stocks, private assets present unique opportunities and challenges. Tokenization allows fractional ownership, potentially increasing liquidity and price discovery, but regulatory frameworks are still developing, creating uncertainty.
              </p>
              
              <div>
                <h4>Revolutionary Benefits for Private Securities</h4>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-yellow-500/5 p-4 rounded border border-yellow-500/20">
                    <h5 className="text-yellow-400 font-semibold mb-2">Technical Advantages</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Instant settlement vs. 2-3 day traditional cycles</li>
                      <li>• Smart contract automation</li>
                      <li>• Immutable transaction records</li>
                      <li>• Reduced counterparty risk</li>
                    </ul>
                  </div>
                  <div className="bg-yellow-500/5 p-4 rounded border border-yellow-500/20">
                    <h5 className="text-yellow-400 font-semibold mb-2">Market Access</h5>
                    <ul className="text-sm space-y-1">
                      <li>• 24/7 global trading availability</li>
                      <li>• Fractional ownership capabilities</li>
                      <li>• Reduced minimum investment thresholds</li>
                      <li>• Enhanced secondary market liquidity</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h4>Real-World Applications & Market Growth</h4>
                <p>
                  The market for tokenized assets is experiencing explosive growth, with institutional interest surging. An EY survey indicated that 57% of institutional investors are interested in investing in tokenized assets, driven by access to new asset types, increased liquidity, and enhanced transparency. Platforms like Republic have also announced plans to offer tokenized representations of SpaceX shares, with intentions to expand to other private companies like Anthropic, Stripe, X, Waymo, and Epic Games.
                </p>
              </div>

              <div>
                <h4>Regulatory Landscape & Challenges</h4>
                <p>
                  While regulatory uncertainty remains a barrier, recent developments show promise. FINRA has identified that some crypto assets may be considered securities under federal laws, and the SEC&apos;s Crypto Task Force provides clarity on federal securities law applications. The Trump administration&apos;s endorsement of stablecoin legislation and the repeal of SAB 121 have supported digital securities growth by enabling institutions to provide custody solutions without undue financial risk.
                </p>
              </div>
            </div>
          </div>

          {/* Recent Developments Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Recent Developments & Crypto Focus
            </h3>
            <div className="space-y-6 text-gray-300 prose prose-invert max-w-none prose-p:text-gray-300 prose-headings:text-yellow-500">
              <div>
                <h4>Acquisition of Bitstamp</h4>
                <p>
                  In June 2025, Robinhood completed its $200 million all-cash
                  acquisition of Bitstamp, a leading cryptocurrency exchange.
                  This acquisition expands Robinhood&apos;s footprint in Europe,
                  the UK, and Asia, positioning it as a global crypto
                  powerhouse.
                </p>
              </div>
              <div>
                <h4>SEC Investigation Dismissed</h4>
                <p>
                  The U.S. Securities and Exchange Commission (SEC) dismissed
                  its investigation into Robinhood&apos;s crypto unit on February
                  24, 2025, signaling a positive regulatory outlook and
                  reflecting a potential shift toward more favorable crypto
                  regulations.
                </p>
              </div>
              <div>
                <h4>Crypto Trading Growth</h4>
                <p>
                  Robinhood has seen significant growth in its crypto trading
                  business, with increased revenues and user engagement. The
                  company offers trading for Bitcoin, Ethereum, Dogecoin, and
                  other cryptocurrencies 24/7.
                </p>
              </div>
            </div>
          </div>

          {/* Financial Metrics Table */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Financial Snapshot (as of Q1 2025)
            </h3>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-yellow-500/30">
                    <TableHead className="text-yellow-500 font-bold">
                      Metric
                    </TableHead>
                    <TableHead className="text-yellow-500 font-bold">
                      Value
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="border-yellow-500/10">
                    <TableCell>IPO Price (July 2021)</TableCell>
                    <TableCell>$38.00</TableCell>
                  </TableRow>
                  <TableRow className="border-yellow-500/10">
                    <TableCell>Current Price (June 2025)</TableCell>
                    <TableCell>$78.50</TableCell>
                  </TableRow>
                  <TableRow className="border-yellow-500/10">
                    <TableCell>Market Cap</TableCell>
                    <TableCell>$69.274 Billion</TableCell>
                  </TableRow>
                  <TableRow className="border-yellow-500/10">
                    <TableCell>Revenue (Q1 &apos;25 YoY Growth)</TableCell>
                    <TableCell>+50% to $927 million</TableCell>
                  </TableRow>
                  <TableRow className="border-yellow-500/10">
                    <TableCell>Net Income (Q1 &apos;25 YoY Growth)</TableCell>
                    <TableCell>+114% to $336 million</TableCell>
                  </TableRow>
                  <TableRow className="border-yellow-500/10">
                    <TableCell>Robinhood Gold Subscribers</TableCell>
                    <TableCell>3.2 million (record)</TableCell>
                  </TableRow>
                  <TableRow className="border-yellow-500/10">
                    <TableCell>Net Deposits (Q1 &apos;25)</TableCell>
                    <TableCell>$18.0 billion (record)</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>

          {/* Comparison Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Comparison to Circle (CRCL)
            </h3>
            <div className="space-y-4 text-gray-300">
              <p>
                While both Robinhood and Circle operate in the fintech and
                crypto spaces, their business models differ. Robinhood is a
                broad retail brokerage, while Circle focuses on the USDC
                stablecoin. Robinhood&apos;s stock shows steady growth (+106%
                since IPO), whereas Circle has seen explosive post-IPO
                performance (+543.84%). Both benefit from regulatory clarity, but
                Robinhood&apos;s diversified model may offer more stability compared
                to Circle&apos;s specialization in the volatile crypto ecosystem.
              </p>
            </div>
          </div>

          {/* Conclusion Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Conclusion: A New Era for Private Equity
            </h3>
            <div className="space-y-4 text-gray-300">
              <p>
                <strong>Today marks a watershed moment in financial history.</strong> Robinhood&apos;s launch of tokenized shares for SpaceX and OpenAI in Europe represents the first major step toward democratizing private equity through blockchain technology. This breakthrough addresses fundamental limitations in traditional private asset markets—from liquidity constraints to accessibility barriers—that have excluded retail investors for decades.
              </p>
              <p>
                The implications extend far beyond individual investments. By enabling 24/7 trading, fractional ownership, and instant settlement for private securities, Robinhood is pioneering a new paradigm that could transform how all securities are traded. With the tokenized equity market projected to reach over $10 trillion and 57% of institutional investors expressing interest, we&apos;re witnessing the early stages of a financial revolution.
              </p>
              <p>
                While regulatory challenges remain, Robinhood&apos;s strategic positioning through the Bitstamp acquisition, favorable regulatory developments, and now this tokenization breakthrough establish it as the clear leader in next-generation financial services. For EU investors and global markets alike, this represents unprecedented access to premium private assets that were previously the exclusive domain of accredited investors.
              </p>
              <p className="text-yellow-400 font-semibold">
                The future of finance is being written today, and Robinhood is holding the pen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
