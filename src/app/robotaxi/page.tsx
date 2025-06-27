'use client';

import Image from 'next/image';

// --- Data Constants ---
// Moved outside the component to prevent re-declaration on each render.
const businessModelData = {
    title: "Business Model",
    coreAssumptions: [
      { input: "Model Y Propulsion Purchase Price", value: "€42,990 (after €2,000 eco-bonus)", source: "Tesla list price, French government incentive" },
      { input: "Pro LLD (48 mo, 40,000 km, no deposit)", value: "€540–571/mo", source: "Tesla B2B/public rates" },
      { input: "Electricity Cost", value: "€0.157/kWh (TTC)", source: "Petits pros base rate" },
      { input: "Insurance (Tesla tous risques)", value: "€1,434/yr (€119/mo)", source: "Tesla insurance quote" },
      { input: "Autonomy Energy Use", value: "17 kWh/100 km", source: "Tesla spec, EU taxi telematics" },
      { input: "Utilization Target", value: "250 km & 15 rides/day → €150/car/day", source: "Matches industry midpoint (e.g., Waymo)" },
      { input: "Maintenance", value: "€0.04/km", source: "Industry standard for EVs" },
    ],
    ownershipPaths: [
        { metric: "Lease/Capex", lld: "6,852", cash: "0" },
        { metric: "Electricity", lld: "2,402", cash: "2,402" },
        { metric: "Insurance", lld: "1,428", cash: "1,428" },
        { metric: "Maintenance", lld: "3,600", cash: "3,600" },
        { metric: "Total OPEX", lld: "14,282", cash: "7,430", isBold: true },
        { metric: "Revenue", lld: "54,000", cash: "54,000" },
        { metric: "Net Cash/Month", lld: "39,718", cash: "46,570", isBold: true, isGreen: true },
        { metric: "Upfront Cash", lld: "(6,852)", cash: "(515,880)", isRed: true },
        { metric: "Cash-on-Cash Yr 1", lld: "6,950%", cash: "103%" },
        { metric: "Payback Period", lld: "5 days", cash: "11.6 months" },
    ]
  };
  
  const riskDashboardData = [
    { risk: "FSD EU Homologation Slippage", impact: "Revenue delay", mitigation: "Budget remote-operator fallback (€0.25/km) until Q4 2025." },
    { risk: "E-Fuel Lobby/ZFE Tax Shifts", impact: "OPEX increase (4–6%)", mitigation: "Hedge with electricity futures; secure Métropole night-charging vouchers." },
    { risk: "Insurance Spike Post-Incident", impact: "Profit squeeze", mitigation: "Self-insure first €2k per claim, pooled across fleet." },
    { risk: "Resale Value Collapse", impact: "Higher balloon payment", mitigation: "Early refinancing captures residual value as an asset." },
    { risk: "Regulatory U-Turn", impact: "Market access restricted", mitigation: "LLD limits sunk costs; pivot to supervised FSD if needed." },
  ];

  const competitiveAdvantageData = [
      { title: "Speed to Market", description: "LLD enables Day-1 deployment, outpacing incumbents." },
      { title: "Cost Efficiency", description: "Tesla's camera-based FSD is far cheaper than competitor LiDAR stacks." },
      { title: "Scalability", description: "Tesla's global fleet and OTA updates enable rapid expansion." },
      { title: "Financial Flexibility", description: "Our hybrid LLD-to-own model balances risk and reward perfectly." },
  ]

  const marketingPlanData = [
    {
      phase: "Phase 1: Stealth-Mode Proof of Concept (Moons Over Paris)",
      goal: "Build mystique, get early adopter data, and spark word-of-mouth.",
      actions: [
        "Branding: Wrap all 12 vehicles in matte black with minimalist glyphs & QR. No name. Just: ⚡ MOONS.Paris",
        "UX Hook: Free rides for a tip of €1 or more via wallet connect, building a Web3-savvy rider base with no fiat tax complexity.",
        "Referral NFT: Riders mint a Founding Moonrider collectible for free weekly rides and friend-code rewards.",
        "Content: Ask permission to log scenic robotaxi moments for weekly Instagram/TikTok reels titled Dreams From a Tesla.",
        "Partners: Stealth launch in collaboration with exclusive venues like Hôtel Costes or Silencio.",
      ],
      kpi: "Grow from 15 to 22 rides/vehicle/day via invitation only scarcity."
    },
    {
      phase: "Phase 2: From 12 → 48 Vehicles: The RΞZ Network",
      goal: "Activate mass attention and begin to scale to B2B channels.",
      actions: [
        "Narrative Flip: Rebrand to RΞZ.network (Robotaxi Experience Zone), using Founding NFTs as lifetime access keys.",
        "Onboard Creators: Offer 20 local creators free rides for 6 months in exchange for POV content and testimonials.",
        "Midnight Loop: Pilot night-only ride circuits along the Seine and Montmartre to create FOMO for urban youth.",
        "Fashion Week Flash Fleet: Wrap cars in sponsor visuals (e.g., LVMH) for limited-time viral clips.",
        "Press Kit: Curated drop to publications like Les Inrocks to frame the narrative as a &quot;techno-chic ghost fleet&quot;.",
      ],
      kpi: "Lower CAC via a creator flywheel and crypto-native loyalty through the NFT rewards system."
    },
    {
      phase: "Phase 3: Export Narrative to Lyon, Marseille + Berlin",
      goal: "Use content virality to announce arrival before physical deployment and build community.",
      actions: [
        "Use geotagged content virality to announce arrival before any physical deployment.",
        "Allow riders to stake future city expansions by locking a RΞZ token for ride credits and event invites.",
        "Build an AI-native community on platforms like Warpcast/Paragraph, blending urban lore with mobility autonomy.",
      ],
      kpi: "Pre-launch user acquisition and community engagement in new markets."
    }
  ];

  const accountancyData = {
    coreStack: [
      { tool: "Indy (indy.fr)", purpose: "Automates TVA, cotisations, and URSSAF for SASU / auto-entrepreneur structures." },
      { tool: "Pennylane", purpose: "Full-stack French accounting SaaS that connects to Stripe, Tesla invoices, and bank feeds." },
      { tool: "Qonto", purpose: "Fintech bank with a real-time API, instant expense cards, and automated receipt scanning." },
      { tool: "Stripe Atlas + Revolut", purpose: "Optional stack for seamless Web3/US rails integration for NFT or crypto payments." },
    ],
    summaryFlow: [
        { layer: "GTM", strategy: "Scarcity, crypto-native referrals, and storytelling to drive virality over high CAC." },
        { layer: "Expansion", strategy: "Stealth Launch → Creator Flywheel → Geo-Memetic Expansion." },
        { layer: "Bookkeeping", strategy: "Pennylane + Qonto for 95% hands-off, URSSAF and TVA-ready accounting." },
        { layer: "Growth Finance", strategy: "LLD flip to a full purchase using fleet cash flow as loan collateral." },
    ]
  };

// --- Reusable SectionCard Component ---
const SectionCard = ({ title, children, titleClassName = 'text-2xl md:text-3xl' }: { title: string, children: React.ReactNode, titleClassName?: string }) => (
    <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
        <h3 className={`${titleClassName} font-bold text-yellow-500 mb-6`}>{title}</h3>
        {children}
    </div>
);

export default function RobotaxiPage() {
  return (
    <div className="min-h-screen bg-black text-white font-satoshi">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-8">
            <h1 className="text-center">
              <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
                Robotaxi Business Plan
              </span>
            </h1>
            <div className="flex items-center justify-center mt-6">
              <div className="h-px w-24 bg-yellow-500/30"></div>
              <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">Paris & Lyon Level-4 FSD EU Deployment</p>
              <div className="h-px w-24 bg-yellow-500/30"></div>
            </div>
          </div>
          
          <SectionCard title="Elevator Pitch">
            <p className="text-white/80 text-lg leading-relaxed">
              With France&apos;s recent approval of Level-4 FSD regulations, we&apos;re launching a 12-car Tesla robotaxi fleet in Paris to capture first-mover advantage. Our hybrid ownership model—leasing for Year 1, then refinancing to full ownership—delivers a staggering 6,950% cash-on-cash return in the first year, building a €480k reserve to secure €1.7M in net cash over four years. By leveraging Tesla&apos;s technology and a lean operational framework, we&apos;ll redefine urban mobility with unmatched speed, profitability, and scalability.
            </p>
          </SectionCard>

          <div className="relative w-full mx-auto aspect-[16/9] overflow-hidden rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <Image
                  src="/Tesla-Roboban.jpg"
                  alt="Tesla Robotaxi Fleet"
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full"
              />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
          </div>

          <SectionCard title="Executive Summary">
            <p className="text-white/80">
              France&apos;s green light for Level-4 FSD EU on September 26, 2025, opens a narrow but lucrative window to deploy autonomous robotaxis in Paris and Lyon before incumbents saturate the market. Our business plan outlines a 12-car Tesla Model Y fleet, initially leased (LLD) to minimize upfront capital, transitioning to full ownership via refinancing within 12 months. This hybrid model maximizes cash-on-cash returns (6,950% Year 1) while building a track record for low-cost debt. With daily revenue of €150 per car and a lean OPEX structure, we project €1.34M to €1.7M in net cash over four years.
            </p>
          </SectionCard>

          <SectionCard title="Market Opportunity">
            <p className="text-white/80 text-lg leading-relaxed">
              The global ride-hailing market is projected to grow to $480B by 2032, with autonomous vehicles poised to capture significant share. France&apos;s recent approval of Level-4 FSD technology opens a critical window of opportunity in prime urban hubs like Paris and Lyon, which collectively see over 15 million annual rides. Currently, major AV players like Waymo are U.S.-focused, creating a competitive vacuum in Europe, while local ride-hailing companies lack proprietary AV capabilities. This gives our Tesla FSD-powered fleet a crucial first-mover advantage to target urban professionals, tourists, and airport commuters in Paris, Lyon, and Marseille. Driven by high existing taxi costs and the expansion of ZFE low-emission zones, demand for affordable, reliable, and electric driverless transport is set to surge.
            </p>
          </SectionCard>

          <SectionCard title={businessModelData.title}>
            <div className="space-y-8">
              <div>
                <h4 className="text-xl font-bold text-yellow-500/90 mb-4">Core Assumptions</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-left font-satoshi">
                    <thead className="border-b-2 border-yellow-500/30"><tr className="text-yellow-500 uppercase tracking-wider font-bold"><th className="p-3">Input</th><th className="p-3">Value</th><th className="p-3">Source/Note</th></tr></thead>
                    <tbody>
                      {businessModelData.coreAssumptions.map((item, index) => (
                        <tr key={index} className={`border-b border-white/10 ${index % 2 !== 0 ? 'bg-black/20' : ''}`}>
                          <td className="p-3">{item.input}</td><td className="p-3">{item.value}</td><td className="p-3">{item.source}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-yellow-500/90 mb-4">Ownership Paths: LLD vs. Cash (12-Car Fleet)</h4>
                 <div className="overflow-x-auto">
                  <table className="w-full text-left font-satoshi">
                    <thead className="border-b-2 border-yellow-500/30"><tr className="text-yellow-500 uppercase tracking-wider font-bold"><th className="p-3">Metric (€/mo)</th><th className="p-3">LLD 48 mo</th><th className="p-3">Cash Purchase</th></tr></thead>
                    <tbody>
                      {businessModelData.ownershipPaths.map((item, index) => (
                        <tr key={index} className={`border-b border-white/10 ${index % 2 !== 0 ? 'bg-black/20' : ''}`}>
                          <td className={`p-3 ${item.isBold ? 'font-bold' : ''}`}>{item.metric}</td>
                          <td className={`p-3 ${item.isBold ? 'font-bold' : ''} ${item.isGreen ? 'text-green-400' : ''} ${item.isRed ? 'text-red-400' : ''}`}>{item.lld}</td>
                          <td className={`p-3 ${item.isBold ? 'font-bold' : ''} ${item.isGreen ? 'text-green-400' : ''} ${item.isRed ? 'text-red-400' : ''}`}>{item.cash}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 bg-black/30 p-4 border border-yellow-500/20">
                  <h5 className="text-lg font-bold text-yellow-500/90">Hybrid Strategy</h5>
                  <p className="text-white/80 mt-2">Lease in Year 1 to maximize early returns, then refinance to purchase in Year 2 to balance high returns with long-term asset ownership.</p>
                </div>
              </div>
            </div>
          </SectionCard>

          <SectionCard title="Execution Roadmap">
            <ol className="list-decimal list-inside space-y-3 text-white/80">
                <li><span className="font-bold text-white">T-0:</span> Sign 12 LLD contracts for Tesla Model Y fleet.</li>
                <li><span className="font-bold text-white">T + 30d:</span> Deploy in Paris and enroll in DGITM&apos;s &quot;Permis Autonome&quot; sandbox.</li>
                <li><span className="font-bold text-white">T + 3mo:</span> Negotiate bulk-rate VTC-autonomous insurance policy.</li>
                <li><span className="font-bold text-white">T + 6mo:</span> Launch in-app loyalty program to increase revenue to €180/car/day.</li>
                <li><span className="font-bold text-white">T + 12mo:</span> Refinance using €480k cash as equity; borrow €1.8M to buy out leases.</li>
                <li><span className="font-bold text-white">T + 15mo:</span> Achieve full ownership, boosting net margin to 86%.</li>
                <li><span className="font-bold text-white">T + 24mo:</span> Expand to Lyon/Marseille with the same lease-to-own model.</li>
            </ol>
          </SectionCard>

          <SectionCard title="Risk Dashboard & Mitigations">
             <div className="overflow-x-auto">
                <table className="w-full text-left font-satoshi">
                    <thead className="border-b-2 border-yellow-500/30"><tr className="text-yellow-500 uppercase tracking-wider font-bold"><th className="p-3">Risk</th><th className="p-3">Impact</th><th className="p-3">Mitigation</th></tr></thead>
                    <tbody>
                      {riskDashboardData.map((item, index) => (
                        <tr key={index} className={`border-b border-white/10 ${index % 2 !== 0 ? 'bg-black/20' : ''}`}>
                          <td className="p-3">{item.risk}</td><td className="p-3">{item.impact}</td><td className="p-3">{item.mitigation}</td>
                        </tr>
                      ))}
                    </tbody>
                </table>
            </div>
          </SectionCard>

           <SectionCard title="Competitive Advantage">
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-6 text-white/80">
                {competitiveAdvantageData.map((item, index) => (
                    <div key={index}>
                        <h4 className="font-bold text-yellow-500/90 text-lg">{item.title}</h4>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
          </SectionCard>
          
          <SectionCard title="A Note on Tesla's Endgame">
            <div className="space-y-6 text-white/80 text-lg leading-relaxed">
                <p className="text-2xl text-yellow-500/90 italic font-bold">
                  If you want to own a Tesla, you better hurry!
                </p>
                <p>
                    I predict that within the next ~5 years, Tesla will all but stop selling vehicles. Once Tesla Network scales and Tesla&apos;s cash flows can support it, Tesla would be foolish to sell those money making machines to customers.
                </p>
                <div>
                    <h4 className="text-lg font-bold text-yellow-500/90 mb-3">Some simple assumptions:</h4>
                    <ul className="list-disc list-inside space-y-2 pl-2">
                        <li>$0.20/mile profit</li>
                        <li>100k miles per year per robotaxi</li>
                        <li>$20k profit per robotaxi per year</li>
                        <li>10M robotaxis on Tesla Network</li>
                        <li>&lt;$40k ASP once Tesla ramps lower cost models such as Cybercab</li>
                    </ul>
                </div>
                <p>
                    This would be $200B in yearly profits, meaning Tesla will be able to buy 5M of its own vehicles each year to add to the Tesla Network.
                </p>
                <p>
                    Initially customers will still be able to buy Teslas and add them to the Tesla Network ala AirBnB, but as Tesla&apos;s cash flows increase, Tesla will sell less and less vehicles and simply own and operate its own fleet of robotaxis and transition into an AMaaS (Autonomous Mobility as a Service) company.
                </p>
            </div>
          </SectionCard>
          
          <SectionCard title="🧠 Marketing Plan">
            <div className="space-y-8">
              {marketingPlanData.map((phase, index) => (
                <div key={index} className="space-y-4 border-t border-yellow-500/10 pt-6 first:border-t-0 first:pt-0">
                  <h4 className="text-xl font-bold text-yellow-500">{phase.phase}</h4>
                  <p className="italic text-white/70">{phase.goal}</p>
                  <ul className="list-disc list-inside space-y-2 text-white/80 pl-2">
                    {phase.actions.map((action, actionIndex) => (
                      <li key={actionIndex}>{action}</li>
                    ))}
                  </ul>
                   <div className="bg-black/30 p-3 mt-4 border border-yellow-500/20">
                      <p className="font-bold text-yellow-500/90"><span className="font-bold">KPI:</span> {phase.kpi}</p>
                    </div>
                </div>
              ))}
            </div>
          </SectionCard>
          
          <SectionCard title="🧾 Automated Accountancy">
            <div className="space-y-8">
              <div>
                <h4 className="text-xl font-bold text-yellow-500/90 mb-4">Core Stack (France-native)</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-left font-satoshi">
                    <thead className="border-b-2 border-yellow-500/30"><tr className="text-yellow-500 uppercase tracking-wider font-bold"><th className="p-3">Tool</th><th className="p-3">Purpose</th></tr></thead>
                    <tbody>
                      {accountancyData.coreStack.map((item, index) => (
                        <tr key={index} className={`border-b border-white/10 ${index % 2 !== 0 ? 'bg-black/20' : ''}`}>
                          <td className="p-3 font-bold">{item.tool}</td><td className="p-3">{item.purpose}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
               <div>
                <h4 className="text-xl font-bold text-yellow-500/90 mb-4">Automation Workflow</h4>
                 <ol className="list-decimal list-inside space-y-3 text-white/80">
                    <li><span className="font-bold text-white">Fleet Ops API → Pennylane:</span> All Tesla payments, charging, insurance, and maintenance are auto-tagged.</li>
                    <li><span className="font-bold text-white">Stripe for Payments:</span> Connected directly to Pennylane/Indy, with sub-accounts per city for automated revenue aggregation.</li>
                    <li><span className="font-bold text-white">Payroll/VAT:</span> Use Pennylane to auto-report quarterly TVA and social charges under an agile SASU structure.</li>
                    <li><span className="font-bold text-white">KPI Dashboard:</span> A live Pennylane dashboard tracks Rev/vehicle, cost/km, and cash-on-cash, synced to an internal cockpit.</li>
                </ol>
              </div>
            </div>
          </SectionCard>

          <SectionCard title="✅ Strategic + Operational Flow">
             <div className="overflow-x-auto">
                <table className="w-full text-left font-satoshi">
                    <thead className="border-b-2 border-yellow-500/30"><tr className="text-yellow-500 uppercase tracking-wider font-bold"><th className="p-3">Layer</th><th className="p-3">Strategy</th></tr></thead>
                    <tbody>
                      {accountancyData.summaryFlow.map((item, index) => (
                        <tr key={index} className={`border-b border-white/10 ${index % 2 !== 0 ? 'bg-black/20' : ''}`}>
                          <td className="p-3 font-bold">{item.layer}</td><td className="p-3">{item.strategy}</td>
                        </tr>
                      ))}
                    </tbody>
                </table>
            </div>
          </SectionCard>

          <SectionCard title="🏁 Outro: The City Dreams in Code">
            <div className="max-w-3xl space-y-6 text-white/80 text-lg leading-relaxed">
                <p>
                Paris has always danced at the bleeding edge of culture—where fashion meets revolution, where boulevards are stages and every café is a thesis. So when the streets hum with silent electric motion and a matte-black Tesla whispers you home through midnight rain, you&apos;re not just taking a ride—you&apos;re entering the next myth cycle of mobility.
                </p>
                <p className="text-xl text-yellow-500/90 italic">This isn&apos;t about cars.</p>
                <p className="text-xl text-yellow-500/90 italic">It&apos;s about choreography. Code and rubber. Voltage and story.</p>
                <p>
                You&apos;ve built a fleet that isn&apos;t just autonomous—it&apos;s alive in the network. Each ride seeds a new legend. Each data point, a brushstroke on the city&apos;s real-time canvas. And behind it all: a business model that prints liquidity while whispering poetry to the streets.
                </p>
                <div className="py-4 space-y-2">
                    <p className="font-bold text-xl text-white">The numbers are ruthless.</p>
                    <p className="font-bold text-xl text-white">The strategy is surgical.</p>
                    <p className="font-bold text-xl text-white">But the experience?</p>
                    <p className="text-3xl font-bold text-yellow-500 [text-shadow:_0_1px_10px_rgba(234,179,8,0.3)]">It&apos;s unforgettable.</p>
                </div>
                <p>You are no longer launching a robotaxi fleet.</p>
                <p className="text-2xl font-bold text-white uppercase tracking-wider">You are launching a movement.</p>
                <hr className="border-yellow-500/20 w-1/4" />
                <p className="text-xl">The RΞZ isn&apos;t a company—it&apos;s a portal.</p>
                <p className="text-2xl font-bold text-yellow-500">Welcome to the new Parisian ritual: summoned by code, fueled by volts, remembered forever.</p>
                <p className="pt-6 text-xl font-bold">Are you ready to scale this from 12 cars to a legend?</p>
            </div>
          </SectionCard>

          <footer className="text-center pt-8 text-white/50 font-light">
            <p>This analysis is based on data and industry trends as of June 27, 2025.</p>
            <p>Always consult local regulations and manufacturer leasing terms for specifics.</p>
          </footer>
        </div>
      </div>
    </div>
  );
}
