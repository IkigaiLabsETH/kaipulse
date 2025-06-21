"use client";

export default function CrclPage() {
  return (
    <div className="min-h-screen bg-black text-white font-satoshi">
      {/* Premium header accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-8">
            <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">Stablecoin Issuer • Financial Technology</p>
            <h1 className="text-center">
              <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
                Circle (CRCL)
              </span>
            </h1>
            <div className="flex items-center justify-center mt-6">
              <div className="h-px w-24 bg-yellow-500/30"></div>
              <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">The Future of Digital Currency</p>
              <div className="h-px w-24 bg-yellow-500/30"></div>
            </div>
            
            {/* Featured Visual */}
            <div className="relative w-full mx-auto mt-12 aspect-[16/9] overflow-hidden rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <iframe
                src="https://www.youtube.com/embed/ZGd_mPiTMgQ"
                title="Circle CEO Jeremy Allaire on the Future of Digital Currency"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
            </div>
          </div>

          {/* Introduction Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Bridging Traditional Finance and Digital Currency
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                Circle Internet Financial (CRCL), the issuer of the USDC stablecoin, is rapidly emerging as a pivotal player in the digital finance landscape. Following a highly successful IPO, the company is capitalizing on growing regulatory clarity and the increasing adoption of stablecoins for payments, trading, and B2B transactions. Circle&apos;s performance underscores the market&apos;s confidence in a regulated, transparent approach to digital currency, positioning it as a key competitor to Tether and a cornerstone of the evolving financial ecosystem.
              </p>
            </div>
          </div>

          {/* Key Developments Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Key Developments
            </h3>
            <div className="space-y-8 text-gray-300 prose prose-invert max-w-none prose-p:text-gray-300 prose-headings:text-yellow-500">
              <div>
                <h4>Explosive IPO and Market Performance</h4>
                <p>Circle&apos;s public debut on June 5, 2025, was met with remarkable investor enthusiasm. Priced at $31 per share, the stock opened at $69 and surged to nearly $200 by mid-June, reflecting a staggering 543% increase from its IPO price. This performance highlights strong confidence in Circle&apos;s vision and the broader stablecoin market, pushing its market capitalization to over $18 billion.</p>
              </div>
              <div>
                <h4>The USDC Business Model: Stability and Revenue</h4>
                <p>Circle&apos;s core business revolves around its U.S. dollar-pegged stablecoin, USDC. The company generates revenue by investing the reserves backing USDC in secure, interest-bearing assets like U.S. Treasuries. This model has proven highly effective, particularly as interest rates rise. With a commitment to transparency and regulatory compliance, including being the first recipient of a New York BitLicense, Circle is building trust and driving the adoption of USDC in remittances, e-commerce, and B2B payments.</p>
              </div>
              <div>
                <h4>Regulatory Tailwinds and Future Outlook</h4>
                <p>The passage of the U.S. Senate&apos;s stablecoin bill in June 2025 has provided a significant boost to Circle&apos;s growth prospects. This landmark legislation offers a clear framework for stablecoin issuance, positioning regulated players like Circle for mainstream adoption. With analysts forecasting a $3 trillion stablecoin market by 2030, Circle is well-equipped to preserve the U.S. dollar&apos;s dominance in the age of digital finance.</p>
              </div>
            </div>
          </div>

          {/* Financial Metrics Table */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
                Financial Snapshot
            </h3>
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead className="border-b border-yellow-500/30">
                        <tr>
                            <th className="p-4 text-yellow-500 font-bold">Metric</th>
                            <th className="p-4 text-yellow-500 font-bold">Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-yellow-500/10">
                            <td className="p-4">IPO Price</td>
                            <td className="p-4">$31 per share</td>
                        </tr>
                        <tr className="border-b border-yellow-500/10">
                            <td className="p-4">Opening Price (June 5, 2025)</td>
                            <td className="p-4">$69 per share</td>
                        </tr>
                        <tr className="border-b border-yellow-500/10">
                            <td className="p-4">Current Price (June 19, 2025)</td>
                            <td className="p-4">$199.59 per share</td>
                        </tr>
                        <tr className="border-b border-yellow-500/10">
                            <td className="p-4">Market Cap (Post-IPO High)</td>
                            <td className="p-4">Approximately $18.4 billion</td>
                        </tr>
                        <tr className="border-b border-yellow-500/10">
                            <td className="p-4">Main Competitor</td>
                            <td className="p-4">Tether (Market Cap ~$95 billion)</td>
                        </tr>
                        <tr>
                            <td className="p-4">USDC Market Cap</td>
                            <td className="p-4">Approximately $100 billion</td>
                        </tr>
                    </tbody>
                </table>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}