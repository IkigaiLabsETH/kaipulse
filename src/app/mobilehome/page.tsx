'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export default function MobileHomePage() {
  const [open, setOpen] = useState<number | null>(null);
  const faqs = [
    {
      q: "What makes the Dethleffs Globebus Performance 4x4 unique?",
      a: (
        <span>
          The Globebus Performance 4x4 is Dethleffs&apos; first all-wheel-drive motorhome, built on a VW Crafter chassis. It features a 163 hp engine, 8-speed automatic transmission, differential lock, raised suspension, and a reinforced 2,100 kg front axle. The 18-inch off-road tires, LED light bar, and striking red Dethleffs accents give it a commanding presence.
        </span>
      ),
    },
    {
      q: "What are the key interior features?",
      a: (
        <span>
          Key interior features include:
          <br /><br />
          • Front half-dinette for comfortable dining
          <br />
          • Gourmet kitchen with 131-liter compressor refrigerator
          <br />
          • Swivel bathroom with Clesana C1 dry toilet
          <br />
          • Two single beds in the rear
          <br />
          • Camper Net G5 internet solution (up to 20 Gbps)
          <br />
          • 263 Ah battery system (AGM + lithium-ion)
        </span>
      ),
    },
    {
      q: "What is the price and availability?",
      a: (
        <span>
          The Globebus Performance 4x4 First Edition is priced at €119,999. It will be available starting summer 2025. The price is competitive for its class, offering a compelling blend of rugged capability and premium comfort.
        </span>
      ),
    },
    {
      q: "How does it compare to other off-road campers?",
      a: (
        <span>
          The Globebus Performance 4x4 stands out with:
          <br /><br />
          • First all-wheel-drive model from Dethleffs
          <br />
          • Advanced connectivity with Camper Net G5
          <br />
          • Premium interior finishes and materials
          <br />
          • Award-winning design (iF DESIGN AWARD 2025)
          <br />
          • Competitive pricing for its class
        </span>
      ),
    },
    {
      q: "What are the environmental features?",
      a: (
        <span>
          Environmental features include:
          <br /><br />
          • Clesana dry toilet system
          <br />
          • Minimal gas reliance
          <br />
          • Efficient diesel heater
          <br />
          • Grünbeck water filter system
          <br />
          • Extended off-grid capabilities
        </span>
      ),
    },
    {
      q: "What are the key differences between the Globebus and Marco Polo 2025?",
      a: (
        <span>
          Key differences include:
          <br /><br />
          • Size and layout (Globebus is larger, Marco Polo more compact)
          <br />
          • Price point (Marco Polo starts at €69,500)
          <br />
          • Target audience (Globebus for off-road, Marco Polo for urban adventures)
          <br />
          • Interior configuration options
          <br />
          • Technology package variations
        </span>
      ),
    },
    {
      q: "What are the rental business opportunities?",
      a: (
        <span>
          Rental business opportunities include:
          <br /><br />
          • Daily rates: Globebus €250-€400, Marco Polo €150-€250
          <br />
          • Weekly rates with discounts
          <br />
          • Seasonal pricing adjustments
          <br />
          • Additional services (delivery, equipment rental)
          <br />
          • Corporate packages for remote work
        </span>
      ),
    },
    {
      q: "How does the camper van rental model compare to Airbnb in Bordeaux?",
      a: (
        <span>
          The camper van model offers significant advantages:
          <br /><br />
          • Higher ROI: 32-65% vs. Airbnb&apos;s 7-10.4%
          <br />
          • Faster break-even: 1.5-3 years vs. 9-14 years
          <br />
          • Lower per-unit cost: €80,000-€120,000 vs. €367,500/apartment
          <br />
          • Higher daily rates: €150-€400 vs. €150-€300
          <br />
          • More flexibility in targeting diverse markets
          <br />
          • No regulatory caps on rental days
        </span>
      ),
    },
    {
      q: "What are the real estate prices in prime Bordeaux locations?",
      a: (
        <span>
          Current 2025 prices in prime locations:
          <br /><br />
          • Apartments: €4,523-€5,500/m²
          <br />
          • Houses: €5,166-€6,000/m²
          <br />
          • Example: 70m² apartment in Saint-Pierre: €350,000-€385,000
          <br />
          • Arcachon apartments: €6,855-€7,500/m²
          <br />
          • Market trend: 1.7% monthly increase
        </span>
      ),
    },
    {
      q: "What is the profitability comparison between camper vans and Airbnb?",
      a: (
        <span>
          Short-term (1-5 years):
          <br /><br />
          • Camper vans: €262,500-€528,750/year profit
          <br />
          • Airbnb: €56,800-€84,050/year profit
          <br /><br />
          Long-term (5+ years):
          <br /><br />
          • Camper vans: Depreciation to €500,000-€600,000
          <br />
          • Airbnb: Appreciation to €900,000-€1,000,000
          <br />
          • Potential for hybrid approach
        </span>
      ),
    },
    {
      q: "What are the operational considerations for each model?",
      a: (
        <span>
          Camper Van Model:
          <br /><br />
          • Higher maintenance costs
          <br />
          • Airport logistics
          <br />
          • Seasonal flexibility
          <br />
          • Market diversification
          <br /><br />
          Airbnb Model:
          <br /><br />
          • 120-day rental cap
          <br />
          • Permit requirements
          <br />
          • Guest management
          <br />
          • Higher regulatory risks
        </span>
      ),
    },
    {
      q: "What is the market demand in Southwest France?",
      a: (
        <span>
          Camper Van Market:
          <br /><br />
          • Growing #VanLife trend
          <br />
          • Diverse attractions
          <br />
          • International airport access
          <br />
          • Niche off-road opportunities
          <br /><br />
          Airbnb Market:
          <br /><br />
          • 3 million annual visitors
          <br />
          • 4,000+ existing listings
          <br />
          • High competition
          <br />
          • Regulatory constraints
        </span>
      ),
    },
    {
      q: "What is the recommended investment strategy?",
      a: (
        <span>
          Recommended approach:
          <br /><br />
          • Primary focus on camper vans for immediate returns
          <br />
          • Initial investment: €760,000 in fleet
          <br />
          • €50,000 for setup and operations
          <br />
          • Consider hybrid model with one property
          <br />
          • Reinvest profits in fleet expansion
          <br />
          • Plan for electric vehicle transition
        </span>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-satoshi">
      {/* Premium header accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        {/* Title Section */}
        <div className="text-center space-y-8 mb-16">
          <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">Adventure • Luxury • Innovation</p>
          <h1 className="text-center">
            <span className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
              Adventure Machine
            </span>
          </h1>
          <div className="flex items-center justify-center mt-6">
            <div className="h-px w-24 bg-yellow-500/30"></div>
            <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">HYMER Grand Canyon S</p>
            <div className="h-px w-24 bg-yellow-500/30"></div>
          </div>
        </div>

        {/* Featured Image Section */}
        <div className="relative w-full h-[60vh] min-h-[500px] mb-16 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] overflow-hidden">
          <Image
            src="/mobilehome.jpg"
            alt="HYMER Grand Canyon S showcasing its premium features and off-road capabilities"
            fill
            priority
            className="object-cover"
            sizes="100vw"
            quality={90}
          />
        </div>
        
        <div className="space-y-16">
          {/* Main Content Section */}
          <div className="bg-[#1c1f26] p-4 sm:p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-4">The Pinnacle of Adventure and Luxury</h3>
            <div className="space-y-6 text-gray-300">
              <p className="text-lg">
                The HYMER Grand Canyon S represents the pinnacle of adventure, luxury, and self-sufficiency in the world of van life. Built on the Mercedes-Benz Sprinter chassis, this premium Class B camper van combines rugged off-road performance with cutting-edge connectivity and home-like comfort, making it the ideal choice for exploring Southwest France&apos;s diverse landscapes.
              </p>
              <p className="text-lg">
                With its award-winning design, 10-day off-grid capability, and Mercedes-Benz engineering, the Grand Canyon S sets new standards in the camper van market. Whether navigating the Pyrenees&apos; rugged trails or cruising through Bordeaux&apos;s wine country, this vehicle delivers an unmatched combination of performance, comfort, and autonomy.
              </p>
            </div>
          </div>

          {/* Key Features Section */}
          <div className="bg-[#1c1f26] p-4 sm:p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-4">Unmatched Features and Capabilities</h3>
            <div className="space-y-6 text-gray-300">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-yellow-500/10 p-4 rounded-lg">
                  <h4 className="font-bold text-yellow-400 mb-2">Performance & Capability</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>190 hp 2.0L diesel engine</li>
                    <li>9G-Tronic automatic transmission</li>
                    <li>Optional 4x4 all-wheel drive</li>
                    <li>Raised suspension & off-road tires</li>
                    <li>Engine protection plate</li>
                  </ul>
                </div>
                <div className="bg-yellow-500/10 p-4 rounded-lg">
                  <h4 className="font-bold text-yellow-400 mb-2">Interior & Comfort</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Premium &quot;Ivy Green&quot; or &quot;Pearl Grey&quot; interiors</li>
                    <li>Convertible dinette & transverse bed</li>
                    <li>90-liter compressor refrigerator</li>
                    <li>Spacious shower & foldable washbasin</li>
                    <li>6 kW diesel heater with hot water</li>
                  </ul>
                </div>
                <div className="bg-yellow-500/10 p-4 rounded-lg">
                  <h4 className="font-bold text-yellow-400 mb-2">Self-Sufficiency</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>10-day off-grid capability</li>
                    <li>HYMER Smart Battery System</li>
                    <li>110-liter fresh water tank</li>
                    <li>5G WLAN router & roof antenna</li>
                    <li>HYMER Connect app control</li>
                  </ul>
                </div>
                <div className="bg-yellow-500/10 p-4 rounded-lg">
                  <h4 className="font-bold text-yellow-400 mb-2">Awards & Recognition</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>iF Design Award 2024</li>
                    <li>Golden Motorhome 2024</li>
                    <li>Camping Life Trophy 2022</li>
                    <li>Premium Mercedes engineering</li>
                    <li>Industry-leading innovation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Featured Image */}
          <div className="relative w-full h-[40vh] min-h-[400px] rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] overflow-hidden">
            <Image
              src="/globebus.jpg"
              alt="HYMER Grand Canyon S interior showcasing premium features and comfort"
              fill
              className="object-cover"
              sizes="100vw"
              quality={90}
            />
          </div>

          {/* Price Comparison Section */}
          <div className="bg-[#1c1f26] p-4 sm:p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-4">Premium Positioning</h3>
            <div className="space-y-6 text-gray-300">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-yellow-500/10 p-4 rounded-lg">
                  <h4 className="font-bold text-yellow-400 mb-2">HYMER Grand Canyon S</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Price: €128,705-€140,000</li>
                    <li>Premium 4x4 capability</li>
                    <li>10-day off-grid autonomy</li>
                    <li>Mercedes engineering</li>
                    <li>Rental: €300-€450/day</li>
                  </ul>
                </div>
                <div className="bg-yellow-500/10 p-4 rounded-lg">
                  <h4 className="font-bold text-yellow-400 mb-2">Dethleffs Globebus</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Price: €119,999-€123,000</li>
                    <li>Standard 4x4 system</li>
                    <li>163 hp engine</li>
                    <li>VW Crafter chassis</li>
                    <li>Rental: €250-€400/day</li>
                  </ul>
                </div>
                <div className="bg-yellow-500/10 p-4 rounded-lg">
                  <h4 className="font-bold text-yellow-400 mb-2">Marco Polo 2025</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Price: €69,500-€100,000</li>
                    <li>Urban-focused design</li>
                    <li>Family-friendly layout</li>
                    <li>Premium technology</li>
                    <li>Rental: €150-€250/day</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Business Model Section */}
          <div className="bg-[#1c1f26] p-4 sm:p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-4">Premium Rental Business Model</h3>
            <div className="space-y-6 text-gray-300">
              <p className="text-lg">
                The HYMER Grand Canyon S leads our premium rental fleet, offering unmatched returns and customer satisfaction. With its superior features and Mercedes-Benz engineering, it commands the highest rental rates while delivering exceptional value to adventure-seeking customers.
              </p>
              <div className="bg-yellow-500/10 p-4 rounded-lg">
                <h4 className="font-bold text-yellow-400 mb-2">Fleet Strategy:</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>3 HYMER Grand Canyon S 4x4 (€390,000)</li>
                  <li>3 Marco Polo (€240,000)</li>
                  <li>2 Dethleffs Globebus (€240,000)</li>
                  <li>Total Investment: €870,000</li>
                </ul>
              </div>
              <div className="bg-yellow-500/10 p-4 rounded-lg">
                <h4 className="font-bold text-yellow-400 mb-2">Revenue Potential:</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>HYMER: €229,500-€344,250/year</li>
                  <li>Dethleffs: €127,500-€204,000/year</li>
                  <li>Marco Polo: €114,750-€191,250/year</li>
                  <li>Total: €471,750-€739,500/year</li>
                </ul>
              </div>
            </div>
          </div>

          {/* HYMER Featured Visual */}
          <div className="relative w-full h-[40vh] min-h-[400px] mb-16 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] overflow-hidden">
            <Image
              src="/Hymer_.jpg"
              alt="HYMER Grand Canyon S showcasing its premium design and features"
              fill
              className="object-cover"
              sizes="100vw"
              quality={90}
            />
          </div>

          {/* HYMER Grand Canyon S Features Section */}
          <div className="bg-[#1c1f26] p-4 sm:p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-4">The HYMER Grand Canyon S: Redefining Self-Sufficiency</h3>
            <div className="space-y-6 text-gray-300">
              <p className="text-lg">
                The HYMER Grand Canyon S sets new standards in self-sufficiency and luxury, built on the powerful Mercedes-Benz Sprinter platform. With its award-winning design and innovative features, it offers unmatched freedom and comfort for the modern adventurer.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-yellow-500/10 p-4 rounded-lg">
                  <h4 className="font-bold text-yellow-400 mb-2">Dimensions & Specifications</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Length: 593 cm</li>
                    <li>Width: 206 cm</li>
                    <li>Height: 276 cm</li>
                    <li>Maximum laden mass: 3,500 kg</li>
                    <li>Berths: 2-4 people</li>
                  </ul>
                </div>
                <div className="bg-yellow-500/10 p-4 rounded-lg">
                  <h4 className="font-bold text-yellow-400 mb-2">Premium Interior Options</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Ivy Green design with bamboo accents</li>
                    <li>Pearl Grey design with premium finishes</li>
                    <li>Clad window frames</li>
                    <li>Non-woven fabric linings</li>
                    <li>Push-lock mechanisms with leather loops</li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-yellow-500/10 p-4 rounded-lg">
                  <h4 className="font-bold text-yellow-400 mb-2">Smart Living Features</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Extendable work surface</li>
                    <li>Innovative cooker/sink combination</li>
                    <li>90-litre compressor refrigerator</li>
                    <li>Spacious cabinets and drawers</li>
                    <li>Ambient lighting system</li>
                  </ul>
                </div>
                <div className="bg-yellow-500/10 p-4 rounded-lg">
                  <h4 className="font-bold text-yellow-400 mb-2">Bathroom & Sleeping</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Slate-look surface finish</li>
                    <li>Foldable washbasin</li>
                    <li>Spacious shower area</li>
                    <li>Disc-spring mattress system</li>
                    <li>Pull-out step for rear storage</li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-yellow-500/10 p-4 rounded-lg">
                  <h4 className="font-bold text-yellow-400 mb-2">HYMER Connect System</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Smart control of all living area features</li>
                    <li>Heating and hot water control</li>
                    <li>Lighting and temperature management</li>
                    <li>Real-time vehicle information</li>
                    <li>Customizable comfort scenarios</li>
                  </ul>
                </div>
                <div className="bg-yellow-500/10 p-4 rounded-lg">
                  <h4 className="font-bold text-yellow-400 mb-2">Awards & Recognition</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Golden Motorhome 2024</li>
                    <li>iF Design Award 2024</li>
                    <li>German Design Award 2024</li>
                    <li>Camping Life Trophy 2022</li>
                    <li>Industry-leading innovation</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-500/10 p-4 rounded-lg">
                <h4 className="font-bold text-yellow-400 mb-2">CrossOver Edition Features</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Raised suspension and four-wheel drive</li>
                  <li>Up to 10 days of self-sufficiency</li>
                  <li>16-inch off-road tires</li>
                  <li>190 hp engine</li>
                  <li>Enhanced traction and handling</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="bg-[#1c1f26] p-4 sm:p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-4">The Dethleffs Globebus Performance 4x4: A New Breed of Adventure</h3>
            <div className="space-y-6 text-gray-300">
              <p className="text-lg">
                The Globebus Performance 4x4 is Dethleffs&apos; bold entry into the all-wheel-drive motorhome segment, a first for the brand with nearly a century of RV-making expertise. Built on a VW Crafter chassis, this semi-integrated motorhome is engineered for those who crave adventure without sacrificing comfort.
              </p>
              <div className="bg-yellow-500/10 p-4 rounded-lg">
                <h4 className="font-bold text-yellow-400 mb-2">Key Specifications:</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>163 hp (120 kW) engine</li>
                  <li>8-speed automatic transmission</li>
                  <li>Differential lock</li>
                  <li>Raised suspension</li>
                  <li>Reinforced 2,100 kg front axle</li>
                  <li>18-inch off-road tires on matte black rims</li>
                  <li>LED light bar</li>
                  <li>Campovolo Grey exterior with red accents</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Marco Polo 2025 Section */}
          <div className="bg-[#1c1f26] p-4 sm:p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-4">The Mercedes-Benz Marco Polo 2025: Urban Adventure Redefined</h3>
            <div className="space-y-6 text-gray-300">
              <p className="text-lg">
                While the Globebus Performance 4x4 dominates the off-road segment, the Mercedes-Benz Marco Polo 2025 sets new standards for urban adventure and weekend getaways. This compact yet luxurious camper van combines Mercedes-Benz&apos;s engineering excellence with innovative space solutions.
              </p>
              <div className="bg-yellow-500/10 p-4 rounded-lg">
                <h4 className="font-bold text-yellow-400 mb-2">Marco Polo 2025 Highlights:</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>New MBUX infotainment system with augmented reality</li>
                  <li>Advanced driver assistance systems</li>
                  <li>Modular interior with multiple layout options</li>
                  <li>Integrated kitchen with induction cooking</li>
                  <li>Pop-up roof with panoramic windows</li>
                  <li>Ambient lighting system with 64 colors</li>
                  <li>Wireless charging and connectivity suite</li>
                  <li>Advanced climate control system</li>
                </ul>
              </div>
              <p className="text-lg">
                The Marco Polo 2025 introduces several innovations that make it perfect for urban dwellers seeking weekend adventures. Its compact size allows for easy city parking while offering all the comforts of home. The new modular interior system allows owners to transform the space from a comfortable lounge to a fully-equipped kitchen or bedroom in minutes.
              </p>
              <div className="bg-yellow-500/10 p-4 rounded-lg">
                <h4 className="font-bold text-yellow-400 mb-2">Technology Package:</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>MBUX Interior Assistant with gesture control</li>
                  <li>360-degree camera system</li>
                  <li>Active Distance Assist DISTRONIC</li>
                  <li>Active Steering Assist</li>
                  <li>Active Lane Change Assist</li>
                  <li>Pre-Safe Plus system</li>
                  <li>Remote parking via smartphone app</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Marketing Strategy Section */}
          <div className="bg-[#1c1f26] p-4 sm:p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-4">Marketing and Growth Strategy</h3>
            <div className="space-y-6 text-gray-300">
              <div className="bg-yellow-500/10 p-4 rounded-lg">
                <h4 className="font-bold text-yellow-400 mb-2">Digital Marketing:</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Annual budget: €20,000</li>
                  <li>SEO optimization</li>
                  <li>Social media campaigns</li>
                  <li>Influencer partnerships</li>
                  <li>Travel blogger collaborations</li>
                </ul>
              </div>
              <div className="bg-yellow-500/10 p-4 rounded-lg">
                <h4 className="font-bold text-yellow-400 mb-2">Partnerships:</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Tourism boards</li>
                  <li>National parks</li>
                  <li>Outdoor gear brands</li>
                  <li>Corporate retreat packages</li>
                  <li>Remote work programs</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Southwest France Business Model Section */}
          <div className="bg-[#1c1f26] p-4 sm:p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-4">Southwest France Business Model</h3>
            <div className="space-y-6 text-gray-300">
              <p className="text-lg">
                Southwest France, with Bordeaux-Mérignac Airport as a key entry point, offers an ideal location for a camper van rental business. The region&apos;s blend of wine country, coastal escapes, rugged mountains, and vibrant Basque traditions creates the perfect backdrop for the #VanLife experience.
              </p>
              <div className="bg-yellow-500/10 p-4 rounded-lg">
                <h4 className="font-bold text-yellow-400 mb-2">Location Advantages:</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Major international airport hub</li>
                  <li>Proximity to wine regions (Médoc, Saint-Émilion)</li>
                  <li>Access to coastal gems (Arcachon, Cap Ferret)</li>
                  <li>Cultural hotspots (Basque Country, Pyrenees)</li>
                  <li>Excellent transport connectivity</li>
                </ul>
              </div>
              <div className="bg-yellow-500/10 p-4 rounded-lg">
                <h4 className="font-bold text-yellow-400 mb-2">Operational Details:</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Complimentary airport pickup for 5+ day rentals</li>
                  <li>€50-€100 fee for shorter rentals</li>
                  <li>Dedicated parking near airport</li>
                  <li>Shuttle services for convenience</li>
                  <li>Partner campsite network</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Dream Destinations Section */}
          <div className="bg-[#1c1f26] p-4 sm:p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-4">Dream Destinations in Southwest France</h3>
            <div className="space-y-6 text-gray-300">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-yellow-500/10 p-4 rounded-lg">
                  <h4 className="font-bold text-yellow-400 mb-2">Bordeaux and Wine Country</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>UNESCO World Heritage city</li>
                    <li>Premier wine region</li>
                    <li>18th-century architecture</li>
                    <li>Vibrant markets</li>
                    <li>Grand cru wineries</li>
                  </ul>
                </div>
                <div className="bg-yellow-500/10 p-4 rounded-lg">
                  <h4 className="font-bold text-yellow-400 mb-2">Arcachon and Cap Ferret</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Europe&apos;s tallest sand dune</li>
                    <li>Oyster farms</li>
                    <li>Sandy beaches</li>
                    <li>Cycling trails</li>
                    <li>Boat tours to Bird Island</li>
                  </ul>
                </div>
                <div className="bg-yellow-500/10 p-4 rounded-lg">
                  <h4 className="font-bold text-yellow-400 mb-2">Basque Country</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Surfing paradise</li>
                    <li>Historic charm</li>
                    <li>Basque cuisine</li>
                    <li>Traditional villages</li>
                    <li>Cultural festivals</li>
                  </ul>
                </div>
                <div className="bg-yellow-500/10 p-4 rounded-lg">
                  <h4 className="font-bold text-yellow-400 mb-2">Pyrenees</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Dramatic landscapes</li>
                    <li>Hiking trails</li>
                    <li>Historic villages</li>
                    <li>Waterfalls</li>
                    <li>Off-road adventures</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* One-Week Itinerary Section */}
          <div className="bg-[#1c1f26] p-4 sm:p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-4">One-Week Dream Road Trip</h3>
            <div className="space-y-6 text-gray-300">
              <p className="text-lg">
                A perfect blend of wine, coast, and Basque culture for a compact yet immersive experience. ~600 km round trip from Bordeaux-Mérignac Airport.
              </p>
              <div className="bg-yellow-500/10 p-4 rounded-lg">
                <h4 className="font-bold text-yellow-400 mb-2">Day 1: Bordeaux</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Pick up at Bordeaux-Mérignac Airport</li>
                  <li>Explore UNESCO-listed center</li>
                  <li>Wine-tasting dinner in Chartrons</li>
                  <li>Stay: Camping Bordeaux Lac (€25-€35/night)</li>
                </ul>
              </div>
              <div className="bg-yellow-500/10 p-4 rounded-lg">
                <h4 className="font-bold text-yellow-400 mb-2">Day 2: Saint-Émilion</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>40 km drive to Saint-Émilion</li>
                  <li>Visit Château Canon la Gaffelière</li>
                  <li>Explore Monolithic Church</li>
                  <li>Cycle through vineyards</li>
                  <li>Stay: Camping de la Vallée (€20-€30/night)</li>
                </ul>
              </div>
              <div className="bg-yellow-500/10 p-4 rounded-lg">
                <h4 className="font-bold text-yellow-400 mb-2">Days 3-4: Arcachon</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>70 km drive to Arcachon</li>
                  <li>Climb Dune du Pilat</li>
                  <li>Oyster tastings in Cap Ferret</li>
                  <li>Boat tour to Bird Island</li>
                  <li>Stay: Camping Panorama du Pyla (€30-€45/night)</li>
                </ul>
              </div>
              <div className="bg-yellow-500/10 p-4 rounded-lg">
                <h4 className="font-bold text-yellow-400 mb-2">Days 5-6: Basque Country</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>190 km drive to Biarritz</li>
                  <li>Surf at Côte des Basques</li>
                  <li>Visit Basque Museum in Bayonne</li>
                  <li>Explore Saint-Jean-de-Luz</li>
                  <li>Stay: Camping Biarritz (€25-€40/night)</li>
                </ul>
              </div>
              <div className="bg-yellow-500/10 p-4 rounded-lg">
                <h4 className="font-bold text-yellow-400 mb-2">Day 7: Return to Bordeaux</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>190 km return drive</li>
                  <li>Stop at Château Margaux</li>
                  <li>Final wine tasting</li>
                  <li>Return to airport</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Two-Week Itinerary Section */}
          <div className="bg-[#1c1f26] p-4 sm:p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-4">Two-Week Ultimate Adventure</h3>
            <div className="space-y-6 text-gray-300">
              <p className="text-lg">
                A comprehensive journey through wine country, beaches, surf towns, and rugged mountains. ~1,200 km round trip from Bordeaux-Mérignac Airport.
              </p>
              <div className="bg-yellow-500/10 p-4 rounded-lg">
                <h4 className="font-bold text-yellow-400 mb-2">Days 1-2: Bordeaux and Médoc</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Explore historic center</li>
                  <li>Food tour at Marché des Capucins</li>
                  <li>Wine tastings in Médoc</li>
                  <li>Visit Château Latour</li>
                  <li>Stay: Camping Bordeaux Lac (€25-€35/night)</li>
                </ul>
              </div>
              <div className="bg-yellow-500/10 p-4 rounded-lg">
                <h4 className="font-bold text-yellow-400 mb-2">Days 3-4: Saint-Émilion and Dordogne</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Wine tastings in Saint-Émilion</li>
                  <li>Drive to Sarlat-la-Canéda</li>
                  <li>Visit Lascaux IV cave art</li>
                  <li>River cruise to Château de Beynac</li>
                  <li>Stay: Camping Le Moulin du Roch (€20-€35/night)</li>
                </ul>
              </div>
              <div className="bg-yellow-500/10 p-4 rounded-lg">
                <h4 className="font-bold text-yellow-400 mb-2">Days 5-6: Arcachon and Cap Ferret</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Climb Dune du Pilat</li>
                  <li>Oyster tasting in Cap Ferret</li>
                  <li>Cycle coastal trails</li>
                  <li>Visit Ville d&apos;Hiver</li>
                  <li>Stay: Camping Panorama du Pyla (€30-€45/night)</li>
                </ul>
              </div>
              <div className="bg-yellow-500/10 p-4 rounded-lg">
                <h4 className="font-bold text-yellow-400 mb-2">Days 7-8: Landes</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Surf lessons in Hossegor</li>
                  <li>Bike through Landes de Gascogne</li>
                  <li>Explore Capbreton port</li>
                  <li>Boat trip on Courant d&apos;Huchet</li>
                  <li>Stay: Camping La Pointe (€25-€40/night)</li>
                </ul>
              </div>
              <div className="bg-yellow-500/10 p-4 rounded-lg">
                <h4 className="font-bold text-yellow-400 mb-2">Days 9-11: Basque Country</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Surf at Grande Plage</li>
                  <li>Visit Bayonne cathedral</li>
                  <li>Explore Espelette</li>
                  <li>Discover Ainhoa village</li>
                  <li>Stay: Camping Biarritz (€25-€40/night)</li>
                </ul>
              </div>
              <div className="bg-yellow-500/10 p-4 rounded-lg">
                <h4 className="font-bold text-yellow-400 mb-2">Days 12-13: Pyrenees</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Hike to Cirque de Gavarnie</li>
                  <li>Explore Gorges de Kakuetta</li>
                  <li>Off-road adventures</li>
                  <li>Mountain photography</li>
                  <li>Stay: Camping du Lauzart (€20-€30/night)</li>
                </ul>
              </div>
              <div className="bg-yellow-500/10 p-4 rounded-lg">
                <h4 className="font-bold text-yellow-400 mb-2">Day 14: Return to Bordeaux</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>300 km return drive</li>
                  <li>Quick stop in Pau</li>
                  <li>Castle visit if time permits</li>
                  <li>Return to airport</li>
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-2">
              Frequently Asked Questions
            </h3>
            <p className="text-white/70 mb-4">Answers to common questions about the Globebus Performance 4x4 and modern camping.</p>
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
