'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function CatamaranPage() {
  const [open, setOpen] = useState<number | null>(null);
  const faqs = [
    {
      q: "What makes Wider Yachts unique in the market?",
      a: (
        <span>
          Wider Yachts stands out with its serial hybrid propulsion system, which uses electric motors directly connected to propellers, powered by generators and batteries. This allows for zero-emission modes and high efficiency. Models like the WiderCat 92 feature large solar arrays (170 m²) and advanced battery management systems, offering up to 27 nautical miles of silent cruising at 6 knots or 12 hours of battery autonomy at anchor.
        </span>
      ),
    },
    {
      q: "What are the key features of hybrid catamarans?",
      a: (
        <span>
          Key features include:
          <br /><br />
          • Solar panel integration for renewable energy
          <br />
          • Lithium-ion battery banks for energy storage
          <br />
          • Electric motors for silent cruising
          <br />
          • Diesel engines for extended range
          <br />
          • Advanced power management systems
        </span>
      ),
    },
    {
      q: "What are the main advantages of hybrid propulsion?",
      a: (
        <span>
          Hybrid propulsion systems offer several benefits:
          <br /><br />
          • Reduced emissions and environmental impact
          <br />
          • Silent cruising capabilities
          <br />
          • Enhanced fuel efficiency
          <br />
          • Extended range through multiple power sources
          <br />
          • Lower maintenance costs
        </span>
      ),
    },
    {
      q: "How do different competitors approach hybrid technology?",
      a: (
        <span>
          Each competitor has unique approaches:
          <br /><br />
          • Sunreef: Focus on solar integration and eco-friendly materials
          <br />
          • HH Catamarans: Performance-oriented parallel hybrid systems
          <br />
          • Antares: Long-range cruising with regenerative power
          <br />
          • Alva Yachts: Full-electric and solar hybrid solutions
          <br />
          • Fountaine Pajot: Balanced hybrid systems for charter market
        </span>
      ),
    },
    {
      q: "What should buyers consider when choosing a hybrid catamaran?",
      a: (
        <span>
          Key considerations include:
          <br /><br />
          • Intended use (charter, private, long-range)
          <br />
          • Power requirements and range needs
          <br />
          • Solar integration capabilities
          <br />
          • Battery capacity and charging options
          <br />
          • Maintenance and support availability
        </span>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-satoshi">
      {/* Premium header accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-8">
            <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">Hybrid Technology • Luxury Design • Sustainable Yachting</p>
            <h1 className="text-center">
              <span className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
                Catamarans
              </span>
            </h1>
            <div className="flex items-center justify-center mt-6">
              <div className="h-px w-24 bg-yellow-500/30"></div>
              <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">Innovating Luxury Yachting with Hybrid Technology</p>
              <div className="h-px w-24 bg-yellow-500/30"></div>
            </div>
            <a
              href="https://wider-yachts.com/widercat-92/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full sm:w-auto mt-8 px-8 py-4 bg-yellow-500 text-black font-bold rounded shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] hover:bg-yellow-400 transition-colors text-lg"
            >
              Explore WiderCat 92
            </a>
          </div>

          {/* YouTube Video Feature */}
          <div className="w-full mt-12 mb-16">
            <div className="relative aspect-[16/9] rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/2TnHwLvrD-4"
                title="Featured Catamaran Video"
                aria-label="Featured Catamaran Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>
            <p className="text-center text-yellow-500 mt-4 text-lg font-semibold">Featured Video: Catamaran Insights</p>
          </div>

          <div className="border-t border-yellow-500/20 my-8"></div>

          {/* Overview Section */}
          <div className="bg-[#1c1f26] p-4 sm:p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-2">Wider Yachts: Leading Innovation in Hybrid Catamarans</h3>
            <p className="text-white/70 mb-4">Wider Yachts is at the forefront of hybrid propulsion and luxury design, setting new standards for eco-friendly yachting.</p>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                Wider Yachts is recognized for its innovative approach to luxury yachts and catamarans, particularly with its focus on serial hybrid propulsion systems, which combine diesel and electric power for enhanced efficiency, reduced emissions, and silent cruising.
              </p>
            </div>
          </div>

          <div className="border-t border-yellow-500/20 my-8"></div>

          {/* Competitors Section */}
          <div className="bg-[#1c1f26] p-4 sm:p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-2">Main Competitors in the Hybrid Market</h3>
            <p className="text-white/70 mb-4">A look at the top brands competing in the hybrid and electric catamaran space, each with unique strengths and innovations.</p>
            <div className="space-y-8">
              {/* Sunreef */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Sunreef Yachts</h4>
                <p className="text-gray-300">
                  A Polish shipyard renowned for its luxury sailing and power catamarans, Sunreef has made significant strides in eco-friendly yachting with its Eco line, featuring solar-powered electric propulsion systems.
                </p>
                <div className="bg-yellow-500/10 p-4 rounded-lg">
                  <h5 className="font-bold text-yellow-400 mb-2">Key Features:</h5>
                  <ul className="list-disc list-inside space-y-1 text-gray-300">
                    <li>Hybrid and fully electric catamarans (Sunreef 80 Eco, 100 Eco)</li>
                    <li>Solar panels, lithium-ion battery banks, and electric motors</li>
                    <li>Models range from 13 to 65 meters</li>
                  </ul>
                </div>
              </div>

              {/* HH Catamarans */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">HH Catamarans</h4>
                <p className="text-gray-300">
                  A brand under the Hudson Yacht Group, HH Catamarans specializes in high-performance sailing catamarans with hybrid propulsion options.
                </p>
                <div className="bg-yellow-500/10 p-4 rounded-lg">
                  <h5 className="font-bold text-yellow-400 mb-2">Key Features:</h5>
                  <ul className="list-disc list-inside space-y-1 text-gray-300">
                    <li>EcoDrive parallel hybrid system</li>
                    <li>1.5–3 hours of silent electric propulsion</li>
                    <li>Lightweight carbon composite construction</li>
                  </ul>
                </div>
              </div>

              {/* Additional Competitors */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-yellow-500">Antares Catamarans</h4>
                  <p className="text-gray-300">
                    Focuses on liveaboard catamarans with parallel hybrid propulsion systems, emphasizing safety and comfort for long-range cruising.
                  </p>
                </div>
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-yellow-500">Max Cruise Marine</h4>
                  <p className="text-gray-300">
                    Offers affordable hybrid catamarans with lightweight composite hulls and solar integration, targeting long-distance cruisers.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-yellow-500/20 my-8"></div>

          {/* Market Trends Section */}
          <div className="bg-[#1c1f26] p-4 sm:p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-2">Market Trends & Future Outlook</h3>
            <p className="text-white/70 mb-4">The hybrid yacht and catamaran market is rapidly evolving, driven by sustainability, technology, and changing client expectations.</p>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                The hybrid yacht and catamaran market is growing due to increasing demand for sustainability, driven by environmental concerns and rising fuel costs. Competitors are capitalizing on this trend by integrating solar panels, lithium battery banks, and regenerative propulsion systems.
              </p>
              <div className="mt-6">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Key Market Drivers:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>Growing environmental awareness</li>
                  <li>Rising fuel costs</li>
                  <li>Demand for silent cruising</li>
                  <li>Advancements in battery technology</li>
                  <li>Increasing solar efficiency</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-yellow-500/20 my-8"></div>

          {/* Pricing Comparison Section */}
          <div className="bg-[#1c1f26] p-4 sm:p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-2">Pricing Comparison: Entry-Level Hybrid Catamarans</h3>
            <p className="text-white/70 mb-4">Compare the entry-level pricing, features, and value of leading hybrid catamaran brands for both new and used models.</p>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                Determining the most affordable catamaran among leading brands depends on size, model, propulsion system, customization, and whether the vessel is new or used. Below is a comparison of entry-level pricing for new and used models from each brand, focusing on their smallest or most budget-friendly options. All prices are approximate and subject to change.
              </p>
              <div className="overflow-x-auto">
                <table className="min-w-full text-left text-xs sm:text-sm border border-yellow-500 rounded-none mb-4">
                  <thead>
                    <tr className="bg-yellow-500/10 text-yellow-400">
                      <th className="px-4 py-2 font-bold">Brand</th>
                      <th className="px-4 py-2 font-bold">Entry Model</th>
                      <th className="px-4 py-2 font-bold">New Price (USD)</th>
                      <th className="px-4 py-2 font-bold">Used Price (USD)</th>
                      <th className="px-4 py-2 font-bold">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-2">Sunreef Yachts</td>
                      <td className="px-4 py-2">Sunreef 60 Eco</td>
                      <td className="px-4 py-2">$2.7M–$3.8M</td>
                      <td className="px-4 py-2">$650K–$8.3M</td>
                      <td className="px-4 py-2">Bespoke luxury, high customization</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">HH Catamarans</td>
                      <td className="px-4 py-2">HH44</td>
                      <td className="px-4 py-2">$1.2M–$1.5M</td>
                      <td className="px-4 py-2">Rare, $1.8M (HH55)</td>
                      <td className="px-4 py-2">Performance, carbon construction</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Antares Catamarans</td>
                      <td className="px-4 py-2">Antares 44 Hybrid</td>
                      <td className="px-4 py-2">$900K–$1.1M</td>
                      <td className="px-4 py-2">$600K–$800K</td>
                      <td className="px-4 py-2">Liveaboard, long-range focus</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Max Cruise Marine</td>
                      <td className="px-4 py-2">Max 44SC</td>
                      <td className="px-4 py-2">$700K–$900K</td>
                      <td className="px-4 py-2">Rare</td>
                      <td className="px-4 py-2">Affordable hybrid, new brand</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Sunpower Yachts International</td>
                      <td className="px-4 py-2">Sunpower 44</td>
                      <td className="px-4 py-2">$1.2M–$1.5M</td>
                      <td className="px-4 py-2">N/A</td>
                      <td className="px-4 py-2">Solar-electric focus; acquired Alva Yachts, now offers Alva models</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Fountaine Pajot</td>
                      <td className="px-4 py-2">Isla 40</td>
                      <td className="px-4 py-2">$500K–$650K</td>
                      <td className="px-4 py-2">$350K–$500K</td>
                      <td className="px-4 py-2">Balanced, popular, hybrid option</td>
                    </tr>
                    <tr className="bg-yellow-500/10">
                      <td className="px-4 py-2 font-bold text-yellow-400">Lagoon Catamarans</td>
                      <td className="px-4 py-2 font-bold text-yellow-400">Lagoon 40</td>
                      <td className="px-4 py-2 font-bold text-yellow-400">$450K–$600K</td>
                      <td className="px-4 py-2 font-bold text-yellow-400">$300K–$450K</td>
                      <td className="px-4 py-2 font-bold text-yellow-400">Most affordable, high availability</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Solarwave Yachts</td>
                      <td className="px-4 py-2">Solarwave 46</td>
                      <td className="px-4 py-2">$800K–$1M</td>
                      <td className="px-4 py-2">Rare</td>
                      <td className="px-4 py-2">Solar hybrid, niche production</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* Sunpower Acquisition Note */}
              <div className="bg-yellow-500/10 border-l-4 border-yellow-500 p-4 mb-4">
                <p className="text-yellow-500 font-bold">
                  <span className="font-bold">Update:</span> <span className="font-bold">Sunpower Yachts International</span> (Australia) has acquired <span className="font-bold">Alva Yachts</span> (Germany). Sunpower now leads the solar-electric catamaran market, offering both its own models and the former Alva lineup (such as the Ocean Eco 90 and 78) under the Sunpower brand. Their focus is on advanced battery technology, hydrodynamic hulls, and a range from mid-sized to ultra-luxurious solar-electric megayachts. Alva-branded models are now part of Sunpower&apos;s portfolio, and pricing is available for Sunpower models only.
                </p>
              </div>
              <p className="text-lg">
                <span className="font-bold text-yellow-400">Most Affordable:</span> Lagoon Catamarans offers the most affordable option, particularly with the Lagoon 40. New models start at ~$450,000–$600,000 USD (diesel) or ~$500,000–$680,000 USD (hybrid), and used 2018–2020 models can be found for $300,000–$450,000 USD, especially ex-charter boats.
              </p>
              <p className="text-lg">
                <span className="font-bold text-yellow-400">Why Affordable:</span> Lagoon&apos;s high production volume, established reputation, and wide availability on the used market (due to charter fleet turnover) drive down costs. The Lagoon 40 offers a balance of comfort, performance, and eco-friendliness at a lower price point than competitors.
              </p>
              <p className="text-lg">
                <span className="font-bold text-yellow-400">Conclusion:</span> For budget-conscious buyers, the Lagoon 40 is the best entry point into the hybrid catamaran market. For more details, visit Lagoon&apos;s official site or contact a broker for current listings. Always conduct a thorough survey for used models.
              </p>
            </div>
          </div>

          {/* Business Section: Running a Catamaran as a Charter Business */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] mt-8">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Running a Catamaran as a Business: Chartering for Break-Even
            </h3>
            <div className="space-y-6 text-gray-300">
              <p className="text-lg">
                Purchasing a $500,000 catamaran (like the Lagoon 40) and operating it as a charter business can be a break-even or profitable venture if managed strategically. Here&apos;s a concise analysis of costs, revenue, and a business plan outline for chartering in a high-demand location such as the Caribbean.
              </p>
              <div>
                <h4 className="text-xl font-bold text-yellow-500 mb-2">Annual Operating Costs</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Insurance: $7,500–$10,000</li>
                  <li>Mooring/Dockage: $5,000–$10,000</li>
                  <li>Maintenance: $5,000–$15,000</li>
                  <li>Fuel: $2,000–$5,000 (hybrid reduces fuel costs)</li>
                  <li>Crew/Skipper: $0–$7,000 (owner-operated saves more)</li>
                  <li>Safety/Regulatory: $1,000–$2,000/year (plus $2,000–$5,000 initial setup)</li>
                  <li>Miscellaneous (marketing, cleaning, consumables): $2,000–$5,000</li>
                </ul>
                <p className="mt-2"> <span className="font-bold text-yellow-400">Total Estimated Annual Costs:</span> $22,500–$52,000 (avg. ~$37,250)</p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-yellow-500 mb-2">Business Plan Outline</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li><span className="font-bold">Form an LLC:</span> Protect assets and qualify for tax advantages (e.g., Section 179 deduction).</li>
                  <li><span className="font-bold">Charter Management:</span> Partner with a reputable company (e.g., Dream Yacht Charter, The Moorings) or self-manage for higher margins.</li>
                  <li><span className="font-bold">Revenue Strategy:</span> Target 18–20 weeks of charters/year at $10,000/week (bareboat), yielding $180,000–$200,000 gross, ~$63,000–$70,000 net (35% net margin after fees/costs).</li>
                  <li><span className="font-bold">Break-Even Point:</span> ~6 weeks of charters at $10,000/week (net $3,500/week) covers operating costs. 10–12 weeks covers financing.</li>
                  <li><span className="font-bold">Financing:</span> 20% down ($100,000), finance $400,000 at 5–7% ($30,000–$36,000/year payments).</li>
                  <li><span className="font-bold">Tax Benefits:</span> Active management may qualify for Section 179, offsetting $15,000–$20,000/year.</li>
                  <li><span className="font-bold">Guaranteed Income Programs:</span> Some companies offer 9% of purchase price/year ($45,000), nearly covering operating costs.</li>
                  <li><span className="font-bold">Location:</span> Base in high-demand areas (e.g., BVI) for consistent bookings.</li>
                  <li><span className="font-bold">Marketing:</span> Use charter platforms, social media, and boat shows. Offer early booking discounts.</li>
                  <li><span className="font-bold">Risk Management:</span> Insure for $1M liability, comply with MARPOL/COLREGS, avoid hurricane season.</li>
                  <li><span className="font-bold">Exit Strategy:</span> Sell or trade-in after 5–7 years, or extend charter contract.</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold text-yellow-500 mb-2">Key Considerations</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Maximize bookings (18–20 weeks/year) to cover costs.</li>
                  <li>Owner-operated charters reduce crew costs.</li>
                  <li>Hybrid systems lower fuel expenses and appeal to eco-conscious clients.</li>
                  <li>Active management is required for full tax benefits.</li>
                  <li>Partner with reputable charter companies for reliable bookings and maintenance.</li>
                </ul>
              </div>
              <div className="bg-yellow-500/10 border-l-4 border-yellow-500 p-4">
                <p className="text-yellow-500 font-bold">
                  <span className="font-bold">Conclusion:</span> With a well-structured business plan, a $500,000 catamaran like the Lagoon 40 can break even with 6–12 weeks of charters per year, generating $63,000–$70,000 in net revenue (or $45,000 guaranteed) to cover $37,250 in operating costs and $30,000 in financing. Consult a tax attorney and reputable charter company for setup and ongoing management.
                </p>
              </div>
            </div>
          </div>

          {/* Sunreef 60 ECO Financial Plan Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] mt-8">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Financial Plan: Sunreef 60 ECO as a Charter Business
            </h3>
            <div className="space-y-6 text-gray-300">
              <p className="text-lg">
                The Sunreef 60 ECO is a $3,500,000 luxury catamaran with advanced solar and electric propulsion, ideal for eco-conscious charters in high-demand locations. Here&apos;s a concise breakdown of costs and a business plan to achieve break-even through chartering.
              </p>
              <div>
                <h4 className="text-xl font-bold text-yellow-500 mb-2">Annual Operating Costs</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Insurance: $52,500–$70,000</li>
                  <li>Mooring/Dockage: $15,000–$30,000</li>
                  <li>Maintenance: $50,000–$100,000 (advanced hybrid systems)</li>
                  <li>Fuel: $5,000–$10,000 (electric propulsion reduces diesel use)</li>
                  <li>Crew: $30,000–$60,000 (2–3 crew, 100–150 charter days)</li>
                  <li>Safety/Regulatory: $2,000–$3,000/year (plus $5,000 initial setup)</li>
                  <li>Marketing/Miscellaneous: $10,000–$20,000</li>
                </ul>
                <p className="mt-2"> <span className="font-bold text-yellow-400">Total Estimated Annual Costs:</span> $169,500–$293,000 (avg. ~$231,250)</p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-yellow-500 mb-2">Business Plan Outline</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li><span className="font-bold">Form an LLC:</span> Protect assets and qualify for Section 179 tax deduction (up to $1.16M in 2025).</li>
                  <li><span className="font-bold">Charter Management:</span> Partner with Sunreef Yachts Charter, Boatbookings, or The Moorings for marketing, bookings, and maintenance.</li>
                  <li><span className="font-bold">Revenue Strategy:</span> Target 15–20 weeks of crewed charters/year at $50,000/week, yielding $750,000–$1,000,000 gross, $262,500–$350,000 net (35% net margin).</li>
                  <li><span className="font-bold">Break-Even Point:</span> ~7–9 weeks of charters at $50,000/week (net $17,500/week) covers operating costs. 13–14 weeks covers financing.</li>
                  <li><span className="font-bold">Financing:</span> 20% down ($700,000), finance $2.8M at 5–7% ($210,000–$240,000/year payments).</li>
                  <li><span className="font-bold">Tax Benefits:</span> Active management may qualify for Section 179, offsetting $100,000–$140,000/year.</li>
                  <li><span className="font-bold">Guaranteed Income Programs:</span> Some companies offer ~9% of purchase price/year ($315,000), covering most costs.</li>
                  <li><span className="font-bold">Location:</span> Base in high-demand areas (BVI, Greece, Phuket) for consistent bookings.</li>
                  <li><span className="font-bold">Marketing:</span> Use charter platforms, social media, and boat shows. Highlight eco features (solar, silent cruising).</li>
                  <li><span className="font-bold">Risk Management:</span> Insure for $2–3M liability, comply with MARPOL/COLREGS, avoid hurricane season.</li>
                  <li><span className="font-bold">Exit Strategy:</span> Sell or trade-in after 5–7 years, or extend charter contract.</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold text-yellow-500 mb-2">Key Considerations</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Maximize bookings (15–20 weeks/year) to generate $262,500–$350,000 net revenue.</li>
                  <li>Use electric propulsion to reduce fuel costs and attract premium clients.</li>
                  <li>Negotiate maintenance contracts for cost efficiency.</li>
                  <li>Active management is required for full tax benefits.</li>
                  <li>Partner with reputable charter companies for reliable bookings and maintenance.</li>
                </ul>
              </div>
              <div className="bg-yellow-500/10 border-l-4 border-yellow-500 p-4">
                <p className="text-yellow-500 font-bold">
                  <span className="font-bold">Conclusion:</span> With a well-structured business plan, a $3,500,000 Sunreef 60 ECO can break even with 7–14 weeks of charters per year, generating $262,500–$350,000 in net revenue (or $315,000 guaranteed) to cover $231,250 in operating costs and $225,000 in financing. Consult a tax attorney and reputable charter company for setup and ongoing management. The ECO&apos;s eco-friendly features attract premium clients and enhance revenue potential.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-2">
              Frequently Asked Questions
            </h3>
            <p className="text-white/70 mb-4">Answers to common questions about hybrid catamarans, technology, and ownership.</p>
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#1c1f26] rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]"
              >
                <button
                  className="w-full px-4 sm:px-8 py-4 sm:py-6 text-left flex justify-between items-center"
                  onClick={() => setOpen(open === index ? null : index)}
                  aria-expanded={open === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="text-lg font-medium text-white">{faq.q}</span>
                  <ChevronDown
                    className={cn(
                      "h-6 w-6 text-yellow-500 transition-transform duration-200",
                      open === index ? "transform rotate-180" : ""
                    )}
                  />
                </button>
                {open === index && (
                  <div id={`faq-answer-${index}`} className="px-4 sm:px-8 pb-4 sm:pb-6 text-gray-300">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
