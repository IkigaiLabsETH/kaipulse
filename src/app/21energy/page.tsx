"use client";

import Image from "next/image";

export default function TwentyOneEnergyPage() {
  return (
    <div className="min-h-screen bg-black text-white font-satoshi">
      {/* Premium header accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-8">
            <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">Bitcoin Mining • Space Heating • Energy Efficiency</p>
            <h1 className="text-center">
              <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
                21energy
              </span>
            </h1>
            <div className="flex items-center justify-center mt-6">
              <div className="h-px w-24 bg-yellow-500/30"></div>
              <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">Revolutionizing Space Heating with Bitcoin Mining</p>
              <div className="h-px w-24 bg-yellow-500/30"></div>
            </div>
            
            {/* Featured Image */}
            <div className="relative w-full mx-auto mt-12 aspect-[16/9] overflow-hidden rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <Image
                src="/21energy.jpeg"
                alt="21energy Bitcoin Heater"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
            </div>

            {/* Call to Action */}
            <div className="mt-8">
              <a 
                href="https://21energy.com/products/ofen" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-black bg-yellow-500 hover:bg-yellow-400 transition-colors duration-200 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] hover:shadow-[3px_3px_0px_0px_rgba(234,179,8,1)] transform hover:-translate-y-0.5"
              >
                View Ofen Bitcoin Heater
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Overview Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Austrian Innovation in Bitcoin Heating
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                21energy is an Austrian startup pioneering Bitcoin heating technology – devices that mine Bitcoin while providing efficient space heating. All products are handcrafted in Austria, combining cutting-edge mining hardware with innovative heating solutions for both residential and industrial applications.
              </p>
              <div className="mt-6">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Key Features:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>100% heat conversion efficiency</li>
                  <li>Built-in ASIC mining hardware</li>
                  <li>WiFi/LAN connectivity</li>
                  <li>Braiins OS+ optimization</li>
                  <li>Eco-friendly heating solution</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Product Categories */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">🏠</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Residential
                </h3>
              </div>
              <div className="space-y-4">
                <div className="bg-black/50 p-4 rounded-none border border-yellow-500/20">
                  <h4 className="text-xl font-bold text-yellow-400 mb-2">Ofen</h4>
                  <ul className="text-white/80 space-y-1">
                    <li>800W heat output</li>
                    <li>32m² coverage</li>
                    <li>35dB noise level</li>
                    <li>10 TH/s hashrate</li>
                    <li>Antminer S9 (refurbished)</li>
                    <li>~75 J/TH efficiency</li>
                    <li>52×35 cm, 22 kg</li>
                    <li>€990</li>
                  </ul>
                </div>
                <div className="bg-black/50 p-4 rounded-none border border-yellow-500/20">
                  <h4 className="text-xl font-bold text-yellow-400 mb-2">Ofen Pro</h4>
                  <ul className="text-white/80 space-y-1">
                    <li>1,100W heat output</li>
                    <li>44m² coverage</li>
                    <li>35dB noise level</li>
                    <li>40 TH/s hashrate</li>
                    <li>Antminer S19</li>
                    <li>~20 J/TH efficiency</li>
                    <li>58×38 cm, 35 kg</li>
                    <li>€3,470</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">🏭</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Industrial
                </h3>
              </div>
              <div className="space-y-4">
                <div className="bg-black/50 p-4 rounded-none border border-yellow-500/20">
                  <h4 className="text-xl font-bold text-yellow-400 mb-2">Shield</h4>
                  <ul className="text-white/80 space-y-1">
                    <li>1.1-2.0kW heat output</li>
                    <li>80m² coverage</li>
                    <li>50-70dB noise level</li>
                    <li>24 TH/s hashrate</li>
                    <li>Antminer S9 boards</li>
                    <li>~75 J/TH efficiency</li>
                    <li>Wall/floor mounting</li>
                    <li>€1,497 (sale €748.50)</li>
                  </ul>
                </div>
                <div className="bg-black/50 p-4 rounded-none border border-yellow-500/20">
                  <h4 className="text-xl font-bold text-yellow-400 mb-2">Edge</h4>
                  <ul className="text-white/80 space-y-1">
                    <li>1.5-8.28kW heat output</li>
                    <li>360m² coverage</li>
                    <li>50-70dB noise level</li>
                    <li>360 TH/s hashrate</li>
                    <li>2× Antminer S19k Pro</li>
                    <li>~18 J/TH efficiency</li>
                    <li>Ceiling mount options</li>
                    <li>€11,700</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Mining Hardware Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Mining Hardware & Equipment
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-400 mb-4">Bitcoin Miners</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <ul className="space-y-4">
                    <li>
                      <span className="font-bold text-yellow-400">Antminer S9</span>
                      <ul className="ml-4 mt-2 space-y-1">
                        <li>~14 TH/s hashrate</li>
                        <li>7nm chips</li>
                        <li>€99</li>
                      </ul>
                    </li>
                    <li>
                      <span className="font-bold text-yellow-400">Antminer S19k Pro</span>
                      <ul className="ml-4 mt-2 space-y-1">
                        <li>110-120 TH/s hashrate</li>
                        <li>2.53-2.76 kW power</li>
                        <li>~18 J/TH efficiency</li>
                        <li>€1,290</li>
                      </ul>
                    </li>
                    <li>
                      <span className="font-bold text-yellow-400">Antminer S21 Pro</span>
                      <ul className="ml-4 mt-2 space-y-1">
                        <li>234 TH/s hashrate</li>
                        <li>3.51 kW power</li>
                        <li>~15 J/TH efficiency</li>
                        <li>€5,790</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-400 mb-4">Mining Accessories</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <ul className="space-y-4">
                    <li>
                      <span className="font-bold text-yellow-400">Silent Kits</span>
                      <ul className="ml-4 mt-2 space-y-1">
                        <li>Silent Kit S19/S21: €249</li>
                        <li>Noise reduction adapters</li>
                      </ul>
                    </li>
                    <li>
                      <span className="font-bold text-yellow-400">Cooling Solutions</span>
                      <ul className="ml-4 mt-2 space-y-1">
                        <li>120mm fans: €14</li>
                        <li>60mm fans: €5</li>
                        <li>Ventilator grilles</li>
                      </ul>
                    </li>
                    <li>
                      <span className="font-bold text-yellow-400">Power Supplies</span>
                      <ul className="ml-4 mt-2 space-y-1">
                        <li>APW3++ PSU: €39</li>
                        <li>Power cords: €29-49</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Software & Integration Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Software Integration & Compatibility
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-400 mb-4">Mining Software</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <ul className="space-y-4">
                    <li>
                      <span className="font-bold text-yellow-400">Braiins OS+</span>
                      <ul className="ml-4 mt-2 space-y-1">
                        <li>Auto-optimization for +30% efficiency</li>
                        <li>Pre-installed on all heaters</li>
                        <li>Compatible with S9/S19/S19k/S21</li>
                      </ul>
                    </li>
                    <li>
                      <span className="font-bold text-yellow-400">Mining Pool Support</span>
                      <ul className="ml-4 mt-2 space-y-1">
                        <li>Any Bitcoin mining pool</li>
                        <li>Solo mining capability</li>
                        <li>Easy pool configuration</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-400 mb-4">Smart Integration</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <ul className="space-y-4">
                    <li>
                      <span className="font-bold text-yellow-400">Mobile/Web App</span>
                      <ul className="ml-4 mt-2 space-y-1">
                        <li>Remote monitoring</li>
                        <li>Temperature control</li>
                        <li>Mining statistics</li>
                      </ul>
                    </li>
                    <li>
                      <span className="font-bold text-yellow-400">Smart Home Integration</span>
                      <ul className="ml-4 mt-2 space-y-1">
                        <li>External thermostat support</li>
                        <li>Timer functionality</li>
                        <li>Automated cycling</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Sustainability Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Environmental Impact
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                21energy&apos;s Bitcoin heaters represent a revolutionary approach to sustainable heating. By combining space heating with Bitcoin mining, these devices create a dual-purpose solution that maximizes energy efficiency while contributing to the Bitcoin network.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <h4 className="text-xl font-bold text-yellow-400 mb-4">Carbon Reduction</h4>
                  <ul className="space-y-2">
                    <li>Ofen: Up to 3 tons CO₂/year savings</li>
                    <li>Edge: Up to 30 tons CO₂/year savings</li>
                    <li>100% heat conversion efficiency</li>
                    <li>Local manufacturing in Austria</li>
                  </ul>
                </div>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <h4 className="text-xl font-bold text-yellow-400 mb-4">Economic Benefits</h4>
                  <ul className="space-y-2">
                    <li>Mining rewards offset heating costs</li>
                    <li>€3,000-4,000/year savings vs. conventional heating</li>
                    <li>Plug-and-play installation</li>
                    <li>Smart home integration</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Target Markets */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Ideal Applications
            </h3>

            {/* Featured Image */}
            <div className="relative w-full h-[800px] mb-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] overflow-hidden">
              <Image
                src="/ecopool.png"
                alt="21energy Bitcoin Heater Applications"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                <h4 className="text-xl font-bold text-yellow-400 mb-4">Residential</h4>
                <ul className="space-y-2">
                  <li>Homes & apartments</li>
                  <li>Home offices</li>
                  <li>Garages & workshops</li>
                  <li>Small businesses</li>
                </ul>
              </div>
              <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                <h4 className="text-xl font-bold text-yellow-400 mb-4">Commercial</h4>
                <ul className="space-y-2">
                  <li>Warehouses</li>
                  <li>Server rooms</li>
                  <li>Factories</li>
                  <li>Agricultural buildings</li>
                </ul>
              </div>
              <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                <h4 className="text-xl font-bold text-yellow-400 mb-4">Specialized</h4>
                <ul className="space-y-2">
                  <li>Data centers</li>
                  <li>Breweries</li>
                  <li>District heating</li>
                  <li>Construction sites</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Braiins OS+ Integration Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Braiins OS+ Integration
            </h3>
            
            {/* Overview */}
            <div className="space-y-6">
              <p className="text-lg text-gray-300">
                All 21energy Bitcoin heaters come pre-installed with Braiins OS+ firmware, delivering superior mining performance and efficiency. This advanced firmware replaces stock configurations, enabling true plug-and-play operation with enhanced capabilities.
              </p>

              {/* Hardware Integration */}
              <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                <h4 className="text-xl font-bold text-yellow-400 mb-4">Hardware Integration</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-bold text-yellow-300 mb-2">Residential Models</h5>
                    <ul className="space-y-2">
                      <li>
                        <span className="font-bold">Ofen:</span>
                        <ul className="ml-4 mt-1 space-y-1">
                          <li>Antminer S9 (new)</li>
                          <li>~10 TH/s at ~75 J/TH</li>
                          <li>+30% hashrate with OS+</li>
                        </ul>
                      </li>
                      <li>
                        <span className="font-bold">Ofen Pro:</span>
                        <ul className="ml-4 mt-1 space-y-1">
                          <li>Antminer S19 (throttled)</li>
                          <li>~40 TH/s at ~20 J/TH</li>
                          <li>+30% efficiency with OS+</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-yellow-300 mb-2">Industrial Models</h5>
                    <ul className="space-y-2">
                      <li>
                        <span className="font-bold">Shield:</span>
                        <ul className="ml-4 mt-1 space-y-1">
                          <li>Antminer S9 cluster</li>
                          <li>~24 TH/s at ~75 J/TH</li>
                          <li>+30% performance with OS+</li>
                        </ul>
                      </li>
                      <li>
                        <span className="font-bold">Edge:</span>
                        <ul className="ml-4 mt-1 space-y-1">
                          <li>Multiple S19k Pro units</li>
                          <li>Up to 360 TH/s total</li>
                          <li>~18 J/TH with OS+ (vs 23 J/TH stock)</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Performance Features */}
              <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                <h4 className="text-xl font-bold text-yellow-400 mb-4">Performance Features</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h5 className="font-bold text-yellow-300 mb-2">Autotuning</h5>
                    <ul className="space-y-1">
                      <li>30-minute initial optimization</li>
                      <li>Per-chip voltage/frequency tuning</li>
                      <li>20-30% higher hashrate</li>
                      <li>Maximum efficiency at any power level</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-yellow-300 mb-2">Power Control</h5>
                    <ul className="space-y-1">
                      <li>Strict power/hashrate targets</li>
                      <li>Dynamic power scaling (DPS)</li>
                      <li>Temperature-based throttling</li>
                      <li>900W-2,760W per unit range</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-yellow-300 mb-2">Thermal Management</h5>
                    <ul className="space-y-1">
                      <li>100% fan speed during tuning</li>
                      <li>Automatic temperature protection</li>
                      <li>Optimal ASIC temperature maintenance</li>
                      <li>Prevents efficiency degradation</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Setup & Control */}
              <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                <h4 className="text-xl font-bold text-yellow-400 mb-4">Setup & Control</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-bold text-yellow-300 mb-2">Installation</h5>
                    <ul className="space-y-1">
                      <li>Pre-installed on all units</li>
                      <li>Plug-and-play operation</li>
                      <li>Minutes to configure</li>
                      <li>Automatic updates via 21energy</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-yellow-300 mb-2">Control Interface</h5>
                    <ul className="space-y-1">
                      <li>21energy mobile/web app</li>
                      <li>Time-of-use optimization</li>
                      <li>Up to 50% cost reduction</li>
                      <li>Home automation integration</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Efficiency Benefits */}
              <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                <h4 className="text-xl font-bold text-yellow-400 mb-4">Efficiency Benefits</h4>
                <div className="space-y-4">
                  <p className="text-gray-300">
                    Braiins OS+ ensures optimal mining performance while maintaining 100% heat conversion efficiency. The firmware&apos;s advanced features enable:
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2">•</span>
                      <span>20-30% higher hashrate at same power consumption</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2">•</span>
                      <span>Lower J/TH ratio (e.g., 18 J/TH vs 23 J/TH on S19k Pro)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2">•</span>
                      <span>Optimal thermal management for consistent performance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2">•</span>
                      <span>Automatic power scaling based on heating needs</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
