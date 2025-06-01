'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export default function S9ProPage() {
  const [open, setOpen] = useState<number | null>(null);
  const faqs = [
    {
      q: "What makes immersion cooling superior to air cooling?",
      a: (
        <span>
          Immersion cooling offers several key advantages:
          <br /><br />
          • 5% energy savings from eliminating fans
          <br />
          • Near-silent operation
          <br />
          • Better thermal stability
          <br />
          • Safer overclocking potential
          <br />
          • Direct heat capture for reuse
        </span>
      ),
    },
    {
      q: "How does immersion cooling work?",
      a: (
        <span>
          The process involves:
          <br /><br />
          • Submerging ASICs in dielectric fluid
          <br />
          • Direct heat transfer to liquid
          <br />
          • Heat exchanger integration
          <br />
          • Temperature control system
          <br />
          • Smart monitoring and automation
        </span>
      ),
    },
    {
      q: "What are the energy savings?",
      a: (
        <span>
          The S9 Pro can provide significant energy savings:
          <br /><br />
          • Space heating: €9.3/day in winter
          <br />
          • Pool heating: €9.3/day in cold months
          <br />
          • Year-round mining revenue
          <br />
          • Reduced HVAC costs
          <br />
          • Lower carbon footprint
        </span>
      ),
    },
    {
      q: "What are the setup requirements?",
      a: (
        <span>
          Key requirements include:
          <br /><br />
          • Dedicated 240V circuit
          <br />
          • Immersion tank & coolant
          <br />
          • Heat recovery system
          <br />
          • Temperature monitoring
          <br />
          • Safety controls
        </span>
      ),
    },
    {
      q: "How long is the ROI timeline?",
      a: (
        <span>
          Typical ROI timeline:
          <br /><br />
          • Initial investment: €7-9k
          <br />
          • Daily mining returns: €0.7-0.9
          <br />
          • Heat value: €9.3/day
          <br />
          • Total ROI: 14-20 months
          <br />
          • Long-term value: 3-5 years
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
            <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">Immersion Cooling • Heat Recovery • Smart Integration</p>
            <h1 className="text-center">
              <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
                S9 Pro
              </span>
            </h1>
            <div className="flex items-center justify-center mt-6">
              <div className="h-px w-24 bg-yellow-500/30"></div>
              <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">Immersion Is the New Fire: Heating Smart Homes with Liquid-Cooled Bitcoin Miners</p>
              <div className="h-px w-24 bg-yellow-500/30"></div>
            </div>
            
            {/* Featured Visual */}
            <div className="relative w-full mx-auto mt-12 aspect-[16/9] overflow-hidden rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <Image
                src="/PRO9.jpg"
                alt="S9 Pro Immersion Cooling System"
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
              The Future of Mining is Liquid
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                Air is for amateurs. In the high-efficiency future of Bitcoin mining, liquid is law. Across Europe and beyond, both industrial and at-home miners are ditching fans in favor of silent, thermal, elegant immersion cooling — not for clout, but because it&apos;s now the most effective way to secure the network and heat your space in one integrated system.
              </p>
              <p className="text-lg">
                As mining rewards trend downward and difficulty pushes ever upward, squeezing ROI from each joule of energy has become survival. And immersion? It turns each watt into a triple win: Bitcoin yield, thermal utility, and hardware longevity.
              </p>
            </div>
          </div>

          {/* Immersion Basics Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              What Exactly Is Immersion-Cooled Mining?
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                Immersion mining involves submerging Bitcoin ASICs in non-conductive fluids — think mineral oil or specialized engineered coolants — instead of air-cooling them with loud, power-hungry fans. The liquid absorbs heat directly from the hashboards, keeping chips cooler, quieter, and more stable.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mt-6">
                <div>
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Key Benefits</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>No fans = less noise and dust</li>
                    <li>5% energy savings instantly</li>
                    <li>Safer overclocking potential</li>
                    <li>Direct heat capture</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Applications</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Home radiator integration</li>
                    <li>Underfloor heating loops</li>
                    <li>Pool water systems</li>
                    <li>Smart home automation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Institutional Adoption Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              From Whinstone to Your Home
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                Big players were first to see the opportunity. Riot&apos;s massive gigawatt campus in Navarro County, Texas dedicates entire buildings to immersion cooling. CleanSpark runs a 20 MW immersion setup in Georgia. Argo Blockchain plans 200 MW of liquid-cooled mining in the coming cycle.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mt-6">
                <div>
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Industrial Benefits</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Maximized uptime</li>
                    <li>Thermal stability</li>
                    <li>Energy reuse</li>
                    <li>Margin optimization</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Home Applications</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Garage setups</li>
                    <li>Garden shed systems</li>
                    <li>Smart home integration</li>
                    <li>Community projects</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* DIY Implementation Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              DIY Immersion: Home Miners Are Going Liquid
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                From fish tanks to full immersion tubs, home miners are hacking together brilliant heat-reuse systems. S9s submerged in 6.5 gallons of mineral oil now hum quietly in garages and garden sheds across Europe.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mt-6">
                <div>
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">System Components</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Immersion tank & coolant</li>
                    <li>Heat exchanger system</li>
                    <li>Circulation pumps</li>
                    <li>Temperature controls</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Performance</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>1.4 kW thermal output</li>
                    <li>Near-silent operation</li>
                    <li>Minimal maintenance</li>
                    <li>Smart integration</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Smart Home Integration Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Immersion and the Smart Sovereign Home
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                Imagine your smart home, powered by EcoFlow Δelta Pros and fed by rooftop solar, detecting that your pool temperature has dropped below 25°C. Your S9 Pro, idling quietly in a sealed oil tank, ramps up — not just to mine Bitcoin, but to heat the pool, all while tracking performance in the EcoFlow app.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mt-6">
                <div>
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Smart Features</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Temperature monitoring</li>
                    <li>Automated heat routing</li>
                    <li>Performance tracking</li>
                    <li>Energy optimization</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Integration</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>EcoFlow app control</li>
                    <li>Smart valve regulation</li>
                    <li>Node dashboard logging</li>
                    <li>System automation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Getting Started Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Ready to Try It?
            </h3>
            <div className="space-y-4 text-gray-300">
              <div className="grid md:grid-cols-2 gap-8 mt-6">
                <div>
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Basic Setup</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Get a used S9 Pro</li>
                    <li>Submerge in mineral oil</li>
                    <li>Route heat to water tank</li>
                    <li>Power via EcoFlow</li>
                    <li>Flash Braiins OS+</li>
                    <li>Monitor and optimize</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Advanced Setup</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Multi-miner immersion rack</li>
                    <li>15,000L pool integration</li>
                    <li>Smart home automation</li>
                    <li>Off-grid optimization</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Conclusion Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Conclusion: Immersion Is the Flame That Can&apos;t Be Censored
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                Air is obsolete. Liquid is inevitable. And in a world where control over energy and computation is increasingly centralized, immersion cooling offers something deeper: freedom.
              </p>
              <p className="text-lg">
                You&apos;re not just mining Bitcoin — you&apos;re reclaiming thermal sovereignty, aligning with renewable independence, and hacking the grid for joy, warmth, and autonomy.
              </p>
            </div>
          </div>

          {/* Hardware & Investment Guide Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Hardware & Investment Guide
            </h3>
            <div className="space-y-8 text-gray-300">
              {/* DCX Bitpod 2 Section */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">🧊 DCX Bitpod 2 – Home Immersion Mining System</h4>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Price: $1,975</li>
                      <li>Capacity: Up to 3 MicroBT M56/66 Whatsminers or 2 Bitmain S21XP IMM Antminers</li>
                      <li>Heat Transfer: Up to 20 kW</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-yellow-500/90 mb-2">Key Features:</h5>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Built-in pool heat exchanger</li>
                      <li>Industrial-grade pump and hydraulics</li>
                      <li>Monitoring sensors with high-resolution LCD</li>
                      <li>Remote temperature and status control</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Upgrade Packs Section */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">🔹 Upgrade Packs</h4>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h5 className="font-bold text-yellow-500/90 mb-2">Home Heating Pack ($383)</h5>
                    <p>Connects directly to boiler or floor heating system for steady hot water delivery.</p>
                  </div>
                  <div>
                    <h5 className="font-bold text-yellow-500/90 mb-2">Pool Heating Pack ($370)</h5>
                    <p>Direct connection to swimming pool or hot tub water system.</p>
                  </div>
                </div>
              </div>

              {/* Dielectric Fluids Section */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">💧 ThermaSafe R™ – Dielectric Fluid</h4>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Price: $263 (22L container)</li>
                      <li>Fully synthetic and biodegradable</li>
                      <li>High dielectric strength ({'>'}60 kV)</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-yellow-500/90 mb-2">Technical Specs:</h5>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Low viscosity (5 cSt)</li>
                      <li>High flash point (160°C)</li>
                      <li>Non-toxic and odorless</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Cooling System Section */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">🌬️ ICP15 Adaptive Cooling System</h4>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Price: $1,773</li>
                      <li>15.87 kW at 35°C ambient</li>
                      <li>21 kW at 25°C ambient</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-yellow-500/90 mb-2">Features:</h5>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Integrated pump and adaptive fan control</li>
                      <li>Energy-efficient operation</li>
                      <li>Compact design for home use</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Investment Summary */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">📊 Total Investment Breakdown</h4>
                <div className="bg-black/30 p-6 rounded-lg">
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>DCX Bitpod 2</span>
                      <span>$1,975</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Home Heating Upgrade Pack</span>
                      <span>$383</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Pool Heating Upgrade Pack</span>
                      <span>$370</span>
                    </li>
                    <li className="flex justify-between">
                      <span>ThermaSafe R™ (22L)</span>
                      <span>$263</span>
                    </li>
                    <li className="flex justify-between">
                      <span>ICP15 Cooling System</span>
                      <span>$1,773</span>
                    </li>
                    <li className="flex justify-between border-t border-yellow-500/30 pt-2 mt-2">
                      <span className="font-bold">Total Estimated Cost</span>
                      <span className="font-bold">$4,764</span>
                    </li>
                  </ul>
                  <p className="text-sm text-gray-400 mt-4">*Excludes mining hardware and installation costs</p>
                </div>
              </div>

              {/* Smart Home Integration */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">🏡 Smart Home Integration</h4>
                <p className="text-lg">
                  The DCX Bitpod 2 system features comprehensive smart home integration capabilities, allowing for remote monitoring and control. Connect to your home automation platform to optimize heating schedules, monitor energy consumption, and integrate with renewable energy sources like solar panels.
                </p>
              </div>

              {/* Installation & Maintenance */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">🔧 Installation & Maintenance</h4>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h5 className="font-bold text-yellow-500/90 mb-2">Installation</h5>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Straightforward assembly process</li>
                      <li>Professional installation recommended</li>
                      <li>Easy integration with existing systems</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-yellow-500/90 mb-2">Maintenance</h5>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Regular fluid level checks</li>
                      <li>System integrity monitoring</li>
                      <li>Minimal maintenance with ThermaSafe R™</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Climate Suitability */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">🌞 Southern European Climate Suitability</h4>
                <p className="text-lg">
                  Perfectly suited for southern France and Portugal, these systems excel in moderate to warm climates. Their efficient heat transfer capabilities and solar compatibility make them ideal for sun-rich regions, maximizing both mining efficiency and thermal utility.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#1c1f26] rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]"
              >
                <button
                  className="w-full px-8 py-6 text-left flex justify-between items-center"
                  onClick={() => setOpen(open === index ? null : index)}
                >
                  <span className="text-xl font-bold text-yellow-500">{faq.q}</span>
                  <ChevronDown
                    className={cn(
                      "h-6 w-6 text-yellow-500 transition-transform duration-200",
                      open === index ? "transform rotate-180" : ""
                    )}
                  />
                </button>
                {open === index && (
                  <div className="px-8 pb-6 text-gray-300">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Call to Action Section */}
          <div className="bg-[#1c1f26] p-12 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] mt-16">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-yellow-500 tracking-tight">
                Mine. Heat. Profit. Repeat.
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8 text-left">
                <div className="space-y-4">
                  <div className="text-3xl">🔥</div>
                  <h3 className="text-xl font-bold text-yellow-500">Mine to Heat Your Home</h3>
                  <p className="text-gray-300">
                    Host up to 3 M56/66 Whatsminers or 2 S21XP IMM Antminers while pumping out 20 kW of heat - enough to warm your house or even your pool.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="text-3xl">💸</div>
                  <h3 className="text-xl font-bold text-yellow-500">Earn Cash, Ditch the Bill</h3>
                  <p className="text-gray-300">
                    Turn your heating system into an income stream. Say goodbye to sky-high heating bills and hello to passive income.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="text-3xl">🎨</div>
                  <h3 className="text-xl font-bold text-yellow-500">Stylish as Hell</h3>
                  <p className="text-gray-300">
                    Available in 7 unique styles, Bitpod 2 isn&apos;t just a mining system - it&apos;s a statement piece. Who says tech can&apos;t look good?
                  </p>
                </div>
              </div>

              <div className="pt-8">
                <a 
                  href="http://cryptocooling.eu/#ordernow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-4 bg-yellow-500 text-black font-bold text-xl rounded-none hover:bg-yellow-400 transition-colors duration-200 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px]"
                >
                  Order Your Bitpod 2 Today
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
