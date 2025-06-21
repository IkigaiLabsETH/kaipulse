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
                Research suggests Robinhood (HOOD) went public in July 2021 at
                $38 per share, now at $78.50, showing steady growth.
              </li>
              <li>
                It seems likely that Robinhood&apos;s business model focuses on
                commission-free trading, earning from order flow and interest.
              </li>
              <li>
                The evidence leans toward Robinhood expanding in crypto, with
                the Bitstamp acquisition and regulatory wins boosting its
                position.
              </li>
              <li>
                There&apos;s some controversy around payment for order flow, but
                it&apos;s a key revenue source.
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
              Conclusion
            </h3>
            <div className="space-y-4 text-gray-300">
              <p>
                Robinhood (HOOD) has established itself as a leader in
                commission-free trading, with a robust business model. Its
                recent financial performance, acquisition of Bitstamp, and the
                dismissal of the SEC&apos;s crypto investigation further enhance its
                position in the crypto space. While Circle (CRCL) benefits from
                the stablecoin boom, Robinhood&apos;s diversified model and
                expanding crypto offerings position it well for long-term
                growth in a rapidly evolving landscape.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
