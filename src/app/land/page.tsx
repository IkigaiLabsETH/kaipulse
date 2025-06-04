'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export default function LandPage() {
  const [open, setOpen] = useState<number | null>(null);
  const sections = [
    {
      title: "Executive Summary",
      content: (
        <span>
          Investing in forest land in Southwest France, particularly in the Pyrenees Mountains and the Mediterranean-influenced areas, offers a compelling opportunity for long-term value creation. This thesis outlines the rationale for acquiring forest land in this region, driven by a combination of economic, environmental, and strategic factors. The region&apos;s unique ecological diversity, stable regulatory environment, and growing demand for sustainable investments make it an attractive asset for investors seeking both financial returns and environmental impact. Key drivers include timber production, carbon credit markets, eco-tourism potential, and land value appreciation, with manageable risks tied to environmental and market uncertainties.
        </span>
      ),
    },
    {
      title: "Investment Rationale",
      content: (
        <span>
          <strong>Ecological and Economic Stability</strong>
          <br /><br />
          Southwest France, encompassing the Pyrenees Mountains and Mediterranean-influenced areas, is characterized by diverse ecosystems, including conifer and mixed forests, which are among the best-preserved in Western Europe. The Pyrenees Conifer and Mixed Forests ecoregion hosts over 3,500 plant species, including 200 endemic species, and supports a rich biodiversity of fauna, such as brown bears and Pyrenean chamois.
          <br /><br />
          <strong>Timber and Biomass Potential</strong>
          <br /><br />
          The Aquitaine massif, part of Southwest France, is home to the largest maritime pine (Pinus pinaster) monoculture forest in Europe, covering approximately 10,000 square kilometers. In 2015, the region produced 3.3 million cubic meters of timber for lumber and 2.3 million cubic meters for industrial purposes.
          <br /><br />
          <strong>Carbon Credit and Environmental Markets</strong>
          <br /><br />
          The global push for net-zero emissions has elevated the value of forest land as a carbon sink. Forests in Southwest France, particularly in the Pyrenees, can generate carbon credits through sequestration, offering a recurring revenue stream.
        </span>
      ),
    },
    {
      title: "Market Dynamics",
      content: (
        <span>
          <strong>Regional Context</strong>
          <br /><br />
          • Pyrenees Mountains: 430 kilometers from Atlantic to Mediterranean
          <br />
          • Mediterranean Area: High natural and agricultural value
          <br />
          • Southwest France (Aquitaine): Hub for industrial forestry
          <br /><br />
          <strong>Policy Support</strong>
          <br /><br />
          • Stable regulatory environment
          <br />
          • French Forest Code encourages long-term management
          <br />
          • EU&apos;s Common Agricultural Policy (CAP) support
          <br />
          • Regional incentives for ecosystem services
        </span>
      ),
    },
    {
      title: "Financial Considerations",
      content: (
        <span>
          <strong>Revenue Streams</strong>
          <br /><br />
          • Timber Sales: 5-7% returns on sustainably managed forests
          <br />
          • Carbon Credits: $10-50 per ton of CO2 sequestered
          <br />
          • Eco-Tourism: 3-5% annual returns
          <br />
          • Land Appreciation: 2-4% annual growth
          <br /><br />
          <strong>Cost Structure</strong>
          <br /><br />
          • Acquisition: €5,000-€15,000 per hectare
          <br />
          • Management: €200-€500 per hectare annually
          <br />
          • Available low-interest loans and EU subsidies
        </span>
      ),
    },
    {
      title: "Portugal Investment Opportunity",
      content: (
        <span>
          <strong>Coastal Forest Land Investment</strong>
          <br /><br />
          Portugal&apos;s coastal areas present a strategic opportunity for long-term value creation, blending financial returns with environmental and social benefits. The Silver Coast, Central Portugal, and Algarve regions offer unique advantages due to their rich forest ecosystems and proximity to urban markets.
          <br /><br />
          <strong>Key Investment Drivers</strong>
          <br /><br />
          • Forest Coverage: 35.4% of Portugal&apos;s territory (3.2 million hectares)
          <br />
          • Dominant Species: Eucalyptus (26.2%) and maritime pine
          <br />
          • Cork Production: Portugal supplies over 50% of world&apos;s cork
          <br />
          • Economic Impact: €1.3 billion annually, 100,000 jobs
          <br /><br />
          <strong>Regional Opportunities</strong>
          <br /><br />
          • Silver Coast: Industrial forestry and pulp production
          <br />
          • Algarve: Cork oak montado systems and eco-tourism
          <br />
          • Coastal Zones: Diverse landscapes with high tourism potential
          <br /><br />
          <strong>Financial Profile</strong>
          <br /><br />
          • Acquisition: €3,000-€10,000 per hectare
          <br />
          • Management: €200-€500 per hectare annually
          <br />
          • Expected Returns: 4-8% IRR over 10-20 years
          <br />
          • EU Support: CAP subsidies and Natura 2000 incentives
        </span>
      ),
    },
    {
      title: "European Price Comparison",
      content: (
        <span>
          <strong>Algarve: Highest Growth Potential</strong>
          <br /><br />
          The Algarve stands out as the region with the highest potential for price increases in forest land, particularly for non-constructable parcels. Current prices range from €3,000-€10,000 per hectare, with expected annual appreciation of 3-5% over 10-15 years.
          <br /><br />
          <strong>Key Growth Drivers</strong>
          <br /><br />
          • Tourism: Over 300 sunny days annually, millions of visitors
          <br />
          • Cork Production: 50% of world&apos;s cork supply
          <br />
          • Carbon Credits: Strong potential in EU markets
          <br />
          • Land Scarcity: Increasing urbanization pressure
          <br /><br />
          <strong>European Price Ranges (per hectare)</strong>
          <br /><br />
          Western Europe:
          <br />
          • Netherlands: €10,000-€20,000
          <br />
          • Luxembourg: €8,000-€15,000
          <br />
          • France: €5,000-€15,000
          <br />
          • Portugal: €3,000-€10,000
          <br /><br />
          Southern Europe:
          <br />
          • Spain: €3,000-€15,000
          <br />
          • Italy: €2,500-€7,000
          <br />
          • Greece: €3,000-€8,000
          <br /><br />
          Eastern Europe:
          <br />
          • Romania/Poland: €2,000-€5,000
          <br />
          • Bulgaria: €2,051-€3,000
          <br /><br />
          Northern Europe:
          <br />
          • Sweden: €1,882-€3,000
          <br />
          • Finland: €2,000-€4,000
          <br /><br />
          <strong>Market Insights</strong>
          <br /><br />
          • Western Europe: Higher prices due to land scarcity
          <br />
          • Eastern Europe: Lower entry points with higher growth potential
          <br />
          • Algarve: Competitive pricing with strong growth drivers
          <br />
          • Conservation Areas: Enhanced value through carbon credits
        </span>
      ),
    },
    {
      title: "Investment Strategy",
      content: (
        <span>
          <strong>Recommended Approach</strong>
          <br /><br />
          • Focus on Algarve&apos;s protected areas (Natura 2000 sites)
          <br />
          • Target parcels near tourist hubs for eco-tourism potential
          <br />
          • Prioritize cork oak forests for stable NTFP revenue
          <br />
          • Leverage EU subsidies and conservation incentives
          <br /><br />
          <strong>Risk Mitigation</strong>
          <br /><br />
          • Diversify across different forest types
          <br />
          • Implement sustainable management practices
          <br />
          • Monitor urbanization and policy changes
          <br />
          • Maintain long-term investment horizon (15-25 years)
        </span>
      ),
    },
    {
      title: "Finding Forest Land",
      content: (
        <span>
          <strong>Top Platforms for Finding Plots</strong>
          <br /><br />
          <strong>International Portals</strong>
          <br /><br />
          • <a href="https://www.green-acres.pt" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:text-yellow-400">Green-Acres</a> - Leading portal for rural properties
          <br />
          • <a href="https://www.meretdemeures.com" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:text-yellow-400">Mer et Demeures</a> - International properties
          <br />
          • <a href="https://www.idealista.pt" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:text-yellow-400">Idealista</a> - Large marketplace in Southern Europe
          <br /><br />
          <strong>Region-Specific Agencies</strong>
          <br /><br />
          • <a href="https://www.togofor-homes.com" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:text-yellow-400">Togofor-Homes</a> - Algarve specialist
          <br />
          • <a href="https://www.pyrenees-immobilier.com" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:text-yellow-400">Pyrénées Immobilier</a> - French Pyrenees expert
          <br />
          • <a href="https://www.suddefrance-immobilier.com" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:text-yellow-400">Sud de France Immobilier</a> - Mediterranean focus
          <br /><br />
          <strong>Conservation Networks</strong>
          <br /><br />
          • <a href="https://www.florestaaljezur.org" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:text-yellow-400">Rewilding Sudoeste</a> - Algarve rewilding initiative
          <br />
          • <a href="https://ec.europa.eu/environment/nature/natura2000" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:text-yellow-400">Natura 2000 Network</a> - EU protected areas
          <br />
          • <a href="https://www.wildeurope.org" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:text-yellow-400">Wild Europe</a> - Pan-European conservation
          <br /><br />
          <strong>Local Platforms</strong>
          <br /><br />
          • <a href="https://www.supercasa.pt" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:text-yellow-400">Supercasa</a> - Portugal-specific listings
          <br />
          • <a href="https://www.leboncoin.fr" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:text-yellow-400">Leboncoin</a> - French classifieds
          <br />
          • <a href="https://www.fnpc.pt" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:text-yellow-400">Forest Owners&apos; Associations</a> - Portugal
          <br />
          • <a href="https://www.foretpriveefrancaise.com" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:text-yellow-400">Forest Owners&apos; Associations</a> - France
          <br /><br />
          <strong>Auction Platforms</strong>
          <br /><br />
          • <a href="https://www.nimbusmaps.co.uk" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:text-yellow-400">Nimbus Maps</a> - Off-market sourcing
          <br />
          • <a href="https://www.portugal-leiloes.pt" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:text-yellow-400">Portugal Leilões</a> - Portuguese auctions
          <br />
          • <a href="https://www.france-encheres.fr" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:text-yellow-400">France Enchères</a> - French auctions
          <br /><br />
          <strong>Key Considerations</strong>
          <br /><br />
          • Verify non-constructable status with local authorities
          <br />
          • Check for protected area designations (Natura 2000, etc.)
          <br />
          • Research EU subsidies and conservation incentives
          <br />
          • Work with local experts familiar with rural land
          <br />
          • Conduct thorough due diligence on land titles
          <br />
          • Explore off-market opportunities through networks
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
            <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">Sustainable Investment • Ecological Value • Long-term Growth</p>
            <h1 className="text-center">
              <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
                Forest Land
              </span>
            </h1>
            <div className="flex items-center justify-center mt-6">
              <div className="h-px w-24 bg-yellow-500/30"></div>
              <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">Investment Thesis: Southwest France & Portugal</p>
              <div className="h-px w-24 bg-yellow-500/30"></div>
            </div>
            
            {/* Featured Visual */}
            <div className="relative w-full mx-auto mt-12 aspect-[16/9] overflow-hidden rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <Image
                src="/Globetrotter-Travel.jpg"
                alt="Pyrenees Forest Landscape"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
          </div>

          {/* Introduction Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              The Natural Investment Opportunity
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                Imagine owning a piece of Europe&apos;s untamed beauty—a verdant forest in Portugal&apos;s sun-drenched Algarve or the rugged, pristine Pyrenees of Southwest France, where rolling hills meet the Mediterranean&apos;s azure shores. These regions, rich in ecological diversity and steeped in cultural heritage, offer more than just land; they present a gateway to sustainable wealth and environmental stewardship.
              </p>
              <p className="text-lg">
                In Portugal&apos;s Algarve, cork oak forests and coastal pines promise robust returns through timber, non-timber products, and carbon credits, fueled by a booming tourism industry and global demand for eco-conscious investments. In Southwest France, the Pyrenees and Mediterranean foothills beckon with their vast maritime pine forests and eco-tourism potential, underpinned by stable EU policies and a growing appetite for conservation-driven assets.
              </p>
              <p className="text-lg">
                With non-constructable land prices in the Algarve (€3,000-€10,000 per hectare) and Southwest France (€5,000-€15,000 per hectare) offering competitive entry points compared to Europe&apos;s broader market, and with the Algarve poised for 3-5% annual price growth, now is the time to invest in these natural havens. This thesis unveils the strategic allure of forest land in these regions—a rare blend of financial promise, environmental impact, and timeless appeal—inviting you to secure a legacy in Europe&apos;s most promising landscapes.
              </p>
            </div>
          </div>

          {/* Investment Overview Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              The Forest Land Opportunity
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                Investing in forest land in Southwest France and Portugal presents a unique opportunity for sustainable wealth creation. The combination of timber production, carbon credits, eco-tourism, and land appreciation offers multiple revenue streams while contributing to environmental conservation.
              </p>
              <div className="mt-6">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Key Investment Advantages:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>Diverse revenue streams (timber, carbon credits, eco-tourism)</li>
                  <li>Stable regulatory environment</li>
                  <li>Strong market demand for sustainable assets</li>
                  <li>Attractive ROI potential (4-8% annually)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Detailed Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <div
                key={index}
                className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]"
              >
                <button
                  onClick={() => setOpen(open === index ? null : index)}
                  className="w-full flex items-center justify-between"
                >
                  <h3 className="text-2xl font-bold text-yellow-500">{section.title}</h3>
                  <ChevronDown
                    className={cn(
                      "h-6 w-6 text-yellow-500 transition-transform duration-200",
                      open === index ? "transform rotate-180" : ""
                    )}
                  />
                </button>
                {open === index && (
                  <div className="mt-6 text-gray-300 space-y-4">
                    {section.content}
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
