'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export default function AirstreamPage() {
  const [open, setOpen] = useState<number | null>(null);
  const faqs = [
    {
      q: "What is the business concept?",
      a: (
        <span>
          Business Name: Bordeaux Luxury Estate & Airstream Retreat
          <br /><br />
          Concept: Rent out a debt-free 4-bedroom house (200 m²) on a 6,000 m² plot with a 12 x 6-meter pool, supplemented by a stationary Airstream Globetrotter® 30RB as a luxury pool house for up to 4 additional guests.
          <br /><br />
          Objective:
          <br />
          • Maximize rental income over 10 years
          <br />
          • €125,000 Airstream investment
          <br />
          • 20–30% annual ROI
          <br />
          • Break even within 2–3 years
          <br /><br />
          Location:
          <br />
          • Arcachon Basin area, between Bordeaux and Biarritz
          <br />
          • 45 minutes from Bordeaux city center
          <br />
          • 1 hour from Biarritz and Basque Country
          <br />
          • 1 hour from Pyrenees mountains
          <br />
          • 20 minutes from Atlantic coast beaches
          <br />
          • Proximity to Arcachon Bay and Dune du Pilat
        </span>
      ),
    },
    {
      q: "What makes the Pottery Barn Special Edition unique?",
      a: (
        <span>
          The Airstream Pottery Barn Special Edition represents a unique collaboration between two iconic brands, offering a 28-foot travel trailer that combines Airstream&apos;s legendary craftsmanship with Pottery Barn&apos;s timeless design aesthetic. Starting at $171,300, this model features:
          <br /><br />
          • Custom furniture based on best-selling Pottery Barn designs
          <br />
          • Exclusive Pottery Barn bedding and window coverings
          <br />
          • Solid oak wood table inspired by Pottery Barn&apos;s Benchwright Collection
          <br />
          • Deep stainless steel kitchen sink with black matte faucet
          <br />
          • Smart Control Technology for monitoring onboard features
          <br /><br />
          Portugal Winter Escape Plan:
          <br /><br />
          • 4-6 months per year in Portugal
          <br />
          • Escape winter in Southwest France
          <br />
          • Comfortable winter residence in Portugal&apos;s milder climate
          <br />
          • Maintain luxury lifestyle with Pottery Barn&apos;s premium amenities
          <br />
          • Explore Portugal&apos;s Algarve region during off-season
          <br />
          • Create additional rental opportunities in Portugal during peak season
          <br />
          • Maximize investment through year-round utilization
        </span>
      ),
    },
    {
      q: "What is the market analysis?",
      a: (
        <span>
          Arcachon Basin Tourism Market:
          <br /><br />
          • 2.5 million visitors annually to Arcachon Basin
          <br />
          • UNESCO-listed Dune du Pilat (Europe&apos;s tallest sand dune)
          <br />
          • World-famous oyster farming region
          <br />
          • High demand for luxury coastal properties
          <br />
          • Year-round tourism (beach, nature, gastronomy)
          <br /><br />
          Competition:
          <br /><br />
          • ~1,500 Airbnb listings in Arcachon Basin
          <br />
          • Few luxury properties with pool and unique accommodations
          <br />
          • Strategic location between Bordeaux and Biarritz
          <br />
          • Unique selling proposition with Airstream + Pottery Barn edition
          <br />
          • Premium positioning in high-end coastal market
        </span>
      ),
    },
    {
      q: "Who is the target audience?",
      a: (
        <span>
          Primary Audience:
          <br /><br />
          • Affluent Families/Groups (30–55)
          <br />
          • Couples with Children (35–50)
          <br />
          • Event Guests
          <br />
          • International Tourists
          <br /><br />
          Needs:
          <br /><br />
          • Spacious, upscale accommodations
          <br />
          • Proximity to Bordeaux&apos;s attractions
          <br />
          • Modern comforts
          <br />
          • Unique, Instagram-worthy experiences
        </span>
      ),
    },
    {
      q: "What are the Airstream specifications?",
      a: (
        <span>
          Construction and Design:
          <br /><br />
          • Dimensions: 30 ft 11 in long, 8 ft 5.5 in wide
          <br />
          • Gross Vehicle Weight Rating: 8,800 lbs
          <br />
          • Iconic aluminum shell with semi-monocoque design
          <br />
          • Corrosion-resistant for Bordeaux&apos;s humid climate
          <br /><br />
          Interior and Comfort:
          <br /><br />
          • Sleeping Capacity: Up to 4 (2 adults, 2 children)
          <br />
          • Rear queen bed (60&quot; x 75&quot;)
          <br />
          • Convertible dinette (42&quot; x 76&quot;)
          <br />
          • 22 windows/skylights
        </span>
      ),
    },
    {
      q: "What are the financial projections?",
      a: (
        <span>
          Initial Investment:
          <br /><br />
          • Airstream: €125,000
          <br />
          • Setup: €16,000
          <br />
          • Total: €141,000
          <br /><br />
          Annual Revenue:
          <br /><br />
          • Full Estate: €132,600–€153,000
          <br />
          • Airstream Only: €10,200–€12,750
          <br />
          • Total: €142,800–€173,400
          <br /><br />
          10-Year Projection:
          <br /><br />
          • Total Profit: €995,000–€1,301,000
          <br />
          • Airstream Contribution: €263,000–€474,250
          <br />
          • ROI: 18.6–33.6% annually
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
            <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">Luxury Travel • Smart Investment • Premium Experience</p>
            <h1 className="text-center">
              <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
                Airstream
              </span>
            </h1>
            <div className="flex items-center justify-center mt-6">
              <div className="h-px w-24 bg-yellow-500/30"></div>
              <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">Luxury Pool House & Winter Escape Solution</p>
              <div className="h-px w-24 bg-yellow-500/30"></div>
            </div>
            
            {/* Featured Visual */}
            <div className="relative w-full mx-auto mt-12 aspect-[16/9] overflow-hidden rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <Image
                src="/Airstream-X-Pottery-Barn.jpg"
                alt="Airstream Pottery Barn Special Edition"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
          </div>

          {/* Business Overview Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              The Luxury Airstream Opportunity
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                The Airstream Globetrotter® 30RB, combined with a prime Bordeaux location, presents a unique opportunity for luxury rental income. The Pottery Barn Special Edition adds significant value through premium design and features, while the dual-location strategy (Bordeaux/Portugal) maximizes year-round utilization.
              </p>
              <div className="mt-6">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Key Business Advantages:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>Premium positioning in luxury rental market</li>
                  <li>Dual-location strategy for year-round income</li>
                  <li>Unique selling proposition with Pottery Barn edition</li>
                  <li>Strong ROI potential (20-30% annually)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Market Analysis Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Market Analysis & Strategy
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                The Arcachon Basin area offers significant opportunities:
              </p>
              <div className="grid md:grid-cols-2 gap-8 mt-6">
                <div>
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Market Strengths</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>2.5 million annual visitors</li>
                    <li>UNESCO World Heritage status</li>
                    <li>World-famous oyster farming region</li>
                    <li>High demand for luxury coastal properties</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Competitive Advantages</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Unique Airstream pool house concept</li>
                    <li>Pottery Barn premium design</li>
                    <li>Prime Bordeaux location</li>
                    <li>Dual-location flexibility</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Portugal Strategy Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            {/* Featured Visual */}
            <div className="relative w-full mx-auto mb-8 aspect-[16/9] overflow-hidden">
              <Image
                src="/madeira_plot.jpg"
                alt="Oceanview plot in Madeira, Portugal"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Portugal Winter Escape Strategy
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                The Airstream Globetrotter® 30RB serves dual purposes: as a luxury pool house in Bordeaux and as a personal retreat in Portugal during winter months. This strategy maximizes the investment while providing an ideal winter escape solution.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mt-6">
                <div>
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Location Options</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Algarve: €100-€200/m² (Lagos, Albufeira)</li>
                    <li>Silver Coast: €50-€150/m² (Óbidos, Nazaré)</li>
                    <li>Alentejo: €50-€100/m² (Comporta, Milfontes)</li>
                    <li>Madeira: €80-€150/m² (Ponta do Sol)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Key Advantages</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>600-800 km from Bordeaux (7-9 hour drive)</li>
                    <li>2,800 hours of sunshine annually</li>
                    <li>No building permission required</li>
                    <li>Perfect for Airstream placement</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Investment Details</h4>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <p className="font-semibold mb-2">Plot Investment:</p>
                    <ul className="list-disc list-inside space-y-2">
                      <li>2,000 m² plot: €175,000</li>
                      <li>Land transfer tax (6.5%): €11,375</li>
                      <li>Fees: €1,500</li>
                      <li>Total: €187,875</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Annual Costs:</p>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Transport: €1,500-€2,000</li>
                      <li>Maintenance: €1,000-€2,000</li>
                      <li>Property taxes: €525-€700</li>
                      <li>Total: €2,500-€4,000</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Integration with Bordeaux Business</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>1-2 months personal use in Portugal (Nov-Dec)</li>
                  <li>Minimal impact on Bordeaux rentals (15 days downtime)</li>
                  <li>Revenue loss offset by full estate bookings</li>
                  <li>Maintains 70% occupancy rate in Bordeaux</li>
                </ul>
                <div className="mt-6 text-center">
                  <a 
                    href="https://www.airstream.com/travel-trailers/pottery-barn-special-edition/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 bg-yellow-500 text-black font-semibold hover:bg-yellow-400 transition-colors duration-200"
                  >
                    View Pottery Barn Special Edition Details
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Portugal Market Analysis */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            {/* Featured Visual */}
            <div className="relative w-full mx-auto mb-8 aspect-[16/9] overflow-hidden">
              <Image
                src="/algarve_.jpeg"
                alt="Oceanview plot in Algarve, Portugal"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Portugal Market Analysis
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                Portugal&apos;s 1,794 km Atlantic coastline offers diverse opportunities for Airstream placement, with each region providing unique advantages and price points.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mt-6">
                <div>
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Market Overview</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>17 million visitors in 2024</li>
                    <li>77,000 foreigners in Algarve</li>
                    <li>High demand for coastal properties</li>
                    <li>Growing expatriate community</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Regulatory Context</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>No building permission required</li>
                    <li>Temporary structure placement allowed</li>
                    <li>Agricultural zoning suitable</li>
                    <li>Protected coastal zones accessible</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Featured Listings</h4>
                <div className="space-y-6">
                  <div className="border border-yellow-500/30 p-4">
                    <h5 className="font-bold text-yellow-500">Algarve: Vale Judeu, Loulé</h5>
                    <ul className="list-disc list-inside space-y-1 mt-2">
                      <li>2,000 m² rustic plot with sea views</li>
                      <li>15 minutes from Vilamoura Marina</li>
                      <li>Price: €180,000 (€90/m²)</li>
                      <li>Total Cost: €193,250</li>
                    </ul>
                  </div>
                  <div className="border border-yellow-500/30 p-4">
                    <h5 className="font-bold text-yellow-500">Silver Coast: Salir do Porto</h5>
                    <ul className="list-disc list-inside space-y-1 mt-2">
                      <li>3,000 m² with 180° ocean views</li>
                      <li>10 minutes from beaches</li>
                      <li>Price: €150,000 (€50/m²)</li>
                      <li>Total Cost: €161,250</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <a 
                    href="https://www.meretdemeures.com/en/property/europe/seaside-plot+of+land-for+sale-portugal/?property_types=feet_in_water&property_types=sea_view&property_types=less_500&order_by=default_price"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 bg-yellow-500 text-black font-semibold hover:bg-yellow-400 transition-colors duration-200"
                  >
                    Search Available Plots
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Portugal Financial Impact */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Financial Impact & Projections
            </h3>
            <div className="space-y-4 text-gray-300">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">10-Year Projection</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Initial Investment: €187,875</li>
                    <li>10-Year Costs: €25,000-€40,000</li>
                    <li>Plot Value (Year 10): €192,500-€227,500</li>
                    <li>Net Value: €152,500-€202,500</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Bordeaux Integration</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Revenue Impact: €1,500-€3,000/year</li>
                    <li>Maintained Profit: €98,000-€127,100/year</li>
                    <li>10-Year Profit: €980,000-€1,271,000</li>
                    <li>Combined Asset Value: €1.2M-€1.5M</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Lifestyle Benefits</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>Private oceanview retreat 1-2 months/year</li>
                  <li>Ideal for family bonding and relaxation</li>
                  <li>Remote work capability with Airstream Wi-Fi</li>
                  <li>Flexibility to explore multiple coastal spots</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">🏠</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Luxury Design
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                Pottery Barn Special Edition
              </p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">🌍</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Dual Location
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                Bordeaux & Portugal
              </p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">💰</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Strong ROI
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                20-30% Annual Return
              </p>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-[#1c1f26] border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
                  onClick={() => setOpen(open === index ? null : index)}
                >
                  <span className="text-xl font-semibold text-yellow-500">{faq.q}</span>
                  <ChevronDown
                    className={cn(
                      "w-6 h-6 transition-transform text-yellow-500",
                      open === index ? "transform rotate-180" : ""
                    )}
                  />
                </button>
                {open === index && (
                  <div className="px-6 py-4 border-t border-yellow-500/30 text-gray-300">
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
