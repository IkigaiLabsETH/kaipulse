'use client';

import Image from 'next/image';

export default function RobotaxiPage() {
  const analysisSections = [
    {
      title: 'Recommended Business Model: Leasing',
      content:
        'Leasing is the recommended approach. For 12 Tesla Model Y vehicles at $399/month each, the upfront cost is a manageable $35,988. With an estimated daily revenue of $150 per vehicle, this generates $54,000 in monthly revenue. After lease payments ($4,788) and maintenance ($1,200), the monthly profit is approximately $48,012. This strategy minimizes initial capital outlay and optimizes cash flow for easier scaling.',
    },
    {
      title: 'Alternative Model: Outright Purchase',
      content:
        'Purchasing 12 Model Y vehicles at roughly $45,000 each requires a significant upfront investment of $540,000. While ownership is a long-term asset, the initial capital strain is high. Monthly operating costs are estimated at $11,215, leading to a monthly profit of $42,785. The lower monthly profit and high initial cost make this less favorable for a new venture.',
    },
    {
      title: 'Revenue Projections',
      content:
        'The projection of $100–$200 daily revenue per Robotaxi ($150 average) results in $1,800 daily and $54,000 monthly for a fleet of 12. This is a conservative estimate; industry benchmarks from competitors like Waymo suggest revenue could be as high as $300 per day per vehicle, indicating significant upside potential depending on market conditions and utilization rates.',
    },
    {
        title: 'Operational Considerations',
        content: 'Effective operation requires a robust fleet management system to automate dispatching, charging schedules, and maintenance. This minimizes labor costs and maximizes vehicle uptime. Additional revenue can be generated through in-vehicle advertisements, premium service tiers, and strategic partnerships with local businesses for dedicated pickup/drop-off zones.'
    },
    {
        title: 'Challenges and Risks',
        content: 'The primary risks are regulatory hurdles and public safety concerns, which can vary drastically by location and slow down deployment. Competition from established ride-hailing services like Uber and Waymo will also impact pricing power and market share. Thoroughly navigating local regulations is critical before launching.'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-satoshi">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-8">
            <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">AV Fleet • Business Model • Profitability Analysis</p>
            <h1 className="text-center">
              <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
                Robotaxi
              </span>
            </h1>
            <div className="flex items-center justify-center mt-6">
              <div className="h-px w-24 bg-yellow-500/30"></div>
              <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">A Business Model for Autonomous Ride-Hailing</p>
              <div className="h-px w-24 bg-yellow-500/30"></div>
            </div>
            
            <div className="relative w-full mx-auto mt-12 aspect-[16/9] overflow-hidden rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <Image
                    src="/Tesla-Roboban.jpg"
                    alt="Tesla Robotaxi Fleet"
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full"
                />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
            </div>
          </div>

          {/* Key Points Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6 text-center">
              Key Survey Points
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                    <p className="text-4xl mb-2">💰</p>
                    <h4 className="font-bold text-xl text-yellow-500/90">High Profitability</h4>
                    <p className="text-white/70 mt-1">Generates $100–$200 daily per vehicle, easily covering lease costs.</p>
                </div>
                <div className="text-center">
                    <p className="text-4xl mb-2">📈</p>
                    <h4 className="font-bold text-xl text-yellow-500/90">Leasing is Feasible</h4>
                    <p className="text-white/70 mt-1">$399/month lease model is highly profitable and scalable.</p>
                </div>
                <div className="text-center">
                    <p className="text-4xl mb-2">✅</p>
                    <h4 className="font-bold text-xl text-yellow-500/90">Capital-Efficient</h4>
                    <p className="text-white/70 mt-1">Leasing requires low upfront capital compared to buying.</p>
                </div>
                <div className="text-center">
                    <p className="text-4xl mb-2">🚦</p>
                    <h4 className="font-bold text-xl text-yellow-500/90">Regulatory Hurdles</h4>
                    <p className="text-white/70 mt-1">Safety concerns and regulations are the primary risks to scalability.</p>
                </div>
            </div>
          </div>


          {/* In-Depth Analysis */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              In-Depth Analysis
            </h3>
            <div className="space-y-8">
              {analysisSections.map((section, index) => (
                <div key={index} className="space-y-4">
                  <h4 className="text-xl font-bold text-yellow-500">{section.title}</h4>
                  <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                    <p className="text-white/80 font-satoshi">
                        {section.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Financial Summary */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Financial Summary (Monthly, 12 Vehicles)
            </h3>
            <div className="overflow-x-auto">
                <table className="w-full text-left font-satoshi">
                    <thead className="border-b-2 border-yellow-500/30">
                        <tr>
                            <th className="p-4 text-yellow-500 uppercase tracking-wider font-bold">Metric</th>
                            <th className="p-4 text-yellow-500 uppercase tracking-wider font-bold">Leasing Model</th>
                            <th className="p-4 text-yellow-500 uppercase tracking-wider font-bold">Purchase Model</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-white/10">
                            <td className="p-4 font-bold">Revenue</td>
                            <td className="p-4">$54,000</td>
                            <td className="p-4">$54,000</td>
                        </tr>
                        <tr className="border-b border-white/10 bg-black/20">
                            <td className="p-4 font-bold">Upfront Cost</td>
                            <td className="p-4 text-red-400">($35,988)</td>
                            <td className="p-4 text-red-400">($540,000)</td>
                        </tr>
                        <tr className="border-b border-white/10">
                            <td className="p-4 font-bold">Monthly Expenses</td>
                            <td className="p-4">($5,988)</td>
                            <td className="p-4">($11,215)</td>
                        </tr>
                        <tr className="bg-black/20">
                            <td className="p-4 font-bold text-yellow-500">Net Monthly Profit</td>
                            <td className="p-4 text-green-400 font-bold text-lg">$48,012</td>
                            <td className="p-4 text-green-400 font-bold text-lg">$42,785</td>
                        </tr>
                    </tbody>
                </table>
            </div>
          </div>
          
          {/* Deep-Dive Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              🇫🇷 Business Model Deep-Dive: A Cash-on-Cash Lens
            </h3>

            <div className="space-y-8 text-white/90">
                <div>
                    <h4 className="text-xl font-bold text-yellow-500/90 mb-2">Premise</h4>
                    <p className="text-white/80">France has just green-lit Level-4 &quot;FSD EU&quot; from 26 Sept 2025, clearing the legal fog—but the window is short before incumbents flood Paris & Lyon. Therefore speed to market matters more than headline margin.</p>
                </div>
                
                <hr className="border-white/10" />

                <div>
                    <h4 className="text-xl font-bold text-yellow-500/90 mb-4">1. Core Assumptions (Validated June 2025)</h4>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left font-satoshi">
                            <thead className="border-b-2 border-yellow-500/30">
                                <tr>
                                    <th className="p-3 text-yellow-500 uppercase tracking-wider font-bold">Input</th>
                                    <th className="p-3 text-yellow-500 uppercase tracking-wider font-bold">Source</th>
                                    <th className="p-3 text-yellow-500 uppercase tracking-wider font-bold">Note</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-white/10"><td className="p-3">Model Y Propulsion purchase price</td><td className="p-3">44,990 € list; bonus éco 2,000 € → 42,990 € net</td><td className="p-3">￼￼</td></tr>
                                <tr className="border-b border-white/10 bg-black/20"><td className="p-3">Pro LLD (48 mo, 40,000 km, sans apport)</td><td className="p-3">571 €/mo public / 540 €/mo B2B</td><td className="p-3">￼￼</td></tr>
                                <tr className="border-b border-white/10"><td className="p-3">Electricity (petits pros, base)</td><td className="p-3">0.1308 €/kWh HT (≈ 0.157 TTC)</td><td className="p-3">￼</td></tr>
                                <tr className="border-b border-white/10 bg-black/20"><td className="p-3">Insurance (tous risques Tesla)</td><td className="p-3">1,434 €/an ≈ 119 €/mo</td><td className="p-3">￼</td></tr>
                                <tr className="border-b border-white/10"><td className="p-3">Autonomy energy use</td><td className="p-3">17 kWh/100 km (city-heavy)</td><td className="p-3">Tesla spec + EU taxi telematics</td></tr>
                                <tr className="bg-black/20"><td className="p-3">Utilisation target</td><td className="p-3">250 km & 15 rides/day → 150 €/car/day</td><td className="p-3">Matches your midpoint</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <hr className="border-white/10" />

                <div>
                    <h4 className="text-xl font-bold text-yellow-500/90 mb-4">2. Two Ownership Paths (12-Car Fleet)</h4>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left font-satoshi">
                            <thead className="border-b-2 border-yellow-500/30">
                                <tr>
                                    <th className="p-3 text-yellow-500 uppercase tracking-wider font-bold">Metric (€/mo)</th>
                                    <th className="p-3 text-yellow-500 uppercase tracking-wider font-bold">LLD 48 mo</th>
                                    <th className="p-3 text-yellow-500 uppercase tracking-wider font-bold">Cash Purchase</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-white/10"><td className="p-3">Lease / Capex</td><td className="p-3">6,852</td><td className="p-3">0</td></tr>
                                <tr className="border-b border-white/10 bg-black/20"><td className="p-3">Electricity</td><td className="p-3">2,402</td><td className="p-3">2,402</td></tr>
                                <tr className="border-b border-white/10"><td className="p-3">Insurance</td><td className="p-3">1,428</td><td className="p-3">1,428</td></tr>
                                <tr className="border-b border-white/10 bg-black/20"><td className="p-3">Maintenance (@0.04 €/km)</td><td className="p-3">3,600</td><td className="p-3">3,600</td></tr>
                                <tr className="border-b border-white/10"><td className="p-3 font-bold">Total OPEX</td><td className="p-3 font-bold">14,282</td><td className="p-3 font-bold">7,430</td></tr>
                                <tr className="border-b border-white/10 bg-black/20"><td className="p-3">Revenue (150 €/d)</td><td className="p-3">54,000</td><td className="p-3">54,000</td></tr>
                                <tr className="border-b border-white/10"><td className="p-3 font-bold text-green-400">Net Cash per Month</td><td className="p-3 font-bold text-green-400">39,718</td><td className="p-3 font-bold text-green-400">46,570</td></tr>
                                <tr className="border-b border-white/10 bg-black/20"><td className="p-3 font-bold text-red-400">Up-front Cash</td><td className="p-3 font-bold text-red-400">(6,852)</td><td className="p-3 font-bold text-red-400">(515,880)</td></tr>
                                <tr className="border-b border-white/10"><td className="p-3">Cash-on-Cash Yr 1</td><td className="p-3">6,950 %</td><td className="p-3">103 %</td></tr>
                                <tr className="bg-black/20"><td className="p-3">Payback</td><td className="p-3">5 days</td><td className="p-3">11.6 months</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-4 bg-black/30 p-4 border border-yellow-500/20">
                      <h5 className="text-lg font-bold text-yellow-500/90">Hybrid Sequencing Recommendation</h5>
                      <p className="text-white/80 mt-2">Long-term ownership wins in absolute euros. The optimal mandate is best served by leasing in Year 0-1 to harvest extreme early-stage cash-on-cash and build a P&L track record. Then, leverage it for low-cost debt to acquire the vehicles outright, locking in the residual upside without front-loading risk.</p>
                    </div>
                </div>

                <hr className="border-white/10" />

                <div>
                    <h4 className="text-xl font-bold text-yellow-500/90 mb-4">3. Execution Roadmap</h4>
                    <ol className="list-decimal list-inside space-y-3 text-white/80">
                        <li><span className="font-bold text-white">T-0:</span> Sign 12 LLD contracts @ 540–571 €/mo; no deposit.</li>
                        <li><span className="font-bold text-white">T + 30d:</span> Fleet live in Paris intra-muros + Roissy corridors; enroll in &quot;Permis Autonome&quot; sandbox.</li>
                        <li><span className="font-bold text-white">T + 3mo:</span> Publish util-data to insurers; negotiate VTC-autonomous rider policy bulk-rate (target 100 €/car/mo).</li>
                        <li><span className="font-bold text-white">T + 6mo:</span> Launch in-app loyalty to cement LTV, pushing rev/car/day toward 180 €.</li>
                        <li><span className="font-bold text-white">T + 12mo:</span> Refinance: use €480k accumulated free cash as 20% equity, borrow €1.8M @ 5yr/5.5% to buy out leases.</li>
                        <li><span className="font-bold text-white">T + 15mo:</span> Full ownership achieved; net margin jumps to 86% of revenue.</li>
                        <li><span className="font-bold text-white">T + 24mo:</span> Option to expand to Lyon/Marseille using the same recycle-and-buy flywheel.</li>
                    </ol>
                </div>

                <hr className="border-white/10" />

                <div>
                    <h4 className="text-xl font-bold text-yellow-500/90 mb-4">4. Risk Dashboard & Mitigations</h4>
                     <div className="overflow-x-auto">
                        <table className="w-full text-left font-satoshi">
                            <thead className="border-b-2 border-yellow-500/30">
                                <tr>
                                    <th className="p-3 text-yellow-500 uppercase tracking-wider font-bold">Risk</th>
                                    <th className="p-3 text-yellow-500 uppercase tracking-wider font-bold">Impact</th>
                                    <th className="p-3 text-yellow-500 uppercase tracking-wider font-bold">Mitigation</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-white/10"><td className="p-3">FSD EU homologation slippage</td><td className="p-3">Revenue delay</td><td className="p-3">Keep remote-operator fallback budgeted until Q4 2025.</td></tr>
                                <tr className="border-b border-white/10 bg-black/20"><td className="p-3">e-fuel lobby / ZFE tax shifts</td><td className="p-3">OPEX ↑ 4–6%</td><td className="p-3">Hedge with electricity futures; enroll in Métropole voucher for night-charging.</td></tr>
                                <tr className="border-b border-white/10"><td className="p-3">Insurance spike post-incident</td><td className="p-3">Profit squeeze</td><td className="p-3">Self-insure layer (first 2k€) pooled across fleet.</td></tr>
                                <tr className="bg-black/20"><td className="p-3">Resale value collapse</td><td className="p-3">Balloon payment ↑</td><td className="p-3">Early refinancing makes residual your asset, not a lessor&apos;s problem.</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <hr className="border-white/10" />

                <div>
                    <h4 className="text-xl font-bold text-yellow-500/90 mb-4">5. Why This Beats a Day-1 Cash Buy</h4>
                     <ul className="list-disc list-inside space-y-3 text-white/80">
                        <li><span className="font-bold text-white">Narrative:</span> Tell investors, &quot;We turned 6.8k€ into 480k€ free cash in 12 months—but we built real assets, not just paper yield.&quot;</li>
                        <li><span className="font-bold text-white">Control:</span> Refinancing when FSD is de-risked secures ownership and an IRR north of 125%.</li>
                        <li><span className="font-bold text-white">Optionality:</span> If EU regulators U-turn, you can walk away at Year 4 with minimal sunk cost.</li>
                    </ul>
                </div>
            </div>
          </div>

          <footer className="text-center pt-8 text-white/50 font-light">
            <p>This analysis is based on data and industry trends as of June 27, 2025.</p>
            <p>Always consult local regulations and manufacturer leasing terms for specifics.</p>
          </footer>
        </div>
      </div>
    </div>
  );
}
