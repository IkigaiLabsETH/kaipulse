"use client";

export default function PoolPage() {
  return (
    <div className="min-h-screen bg-black text-white font-satoshi">
      {/* Premium header accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-8">
            <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">Luxury Pool • Premium Construction • Natural Stone</p>
            <h1 className="text-center">
              <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
                11x6m Pool
              </span>
            </h1>
            <div className="flex items-center justify-center mt-6">
              <div className="h-px w-24 bg-yellow-500/30"></div>
              <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">A Masterpiece of Aquatic Luxury</p>
              <div className="h-px w-24 bg-yellow-500/30"></div>
            </div>
          </div>

          {/* Overview Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Premium Pool Specifications
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                Experience the pinnacle of luxury with our 11x6 meter swimming pool, crafted using premium shotcrete construction and finished with exquisite natural stone tiles. This masterpiece combines durability with aesthetic excellence, creating an aquatic sanctuary that transforms your property into a haven of luxury.
              </p>
              <div className="mt-6">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Key Features:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>Premium shotcrete construction</li>
                  <li>Natural stone tile finish</li>
                  <li>66 square meters of swimming area</li>
                  <li>Custom design flexibility</li>
                  <li>Durable and long-lasting</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Cost Breakdown */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">🏗️</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Construction
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                €50,000 - €60,000
              </p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">✨</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Natural Stone
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                €25,000 - €30,000
              </p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">💰</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Total Cost
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                €100,000
              </p>
            </div>
          </div>

          {/* Detailed Specifications */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Construction Details
            </h3>
            <div className="space-y-8">
              {/* Construction Method */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Premium Construction Method</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    Our pool utilizes shotcrete construction, a premium technique that ensures superior durability and design flexibility. This method involves pneumatically applying concrete to create a strong, seamless structure that can accommodate any design vision while maintaining exceptional longevity.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Benefits:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside">
                        <li>Superior durability</li>
                        <li>Design flexibility</li>
                        <li>Seamless construction</li>
                        <li>Excellent waterproofing</li>
                        <li>Long-term value</li>
                        <li>Custom shapes possible</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Process:</h5>
                      <p className="text-white/80 font-satoshi">Shotcrete application with steel reinforcement and polyester finish for enhanced durability and waterproofing.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Natural Stone Finish */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Luxury Natural Stone Finish</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    The pool interior is finished with premium natural stone tiles, creating a luxurious and timeless aesthetic. This high-end finish not only enhances the visual appeal but also provides excellent durability and resistance to pool chemicals and UV exposure.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Features:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside">
                        <li>Premium natural stone</li>
                        <li>Chemical resistance</li>
                        <li>UV protection</li>
                        <li>Non-slip surface</li>
                        <li>Timeless aesthetics</li>
                        <li>Easy maintenance</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Coverage:</h5>
                      <p className="text-white/80 font-satoshi">Approximately 100 square meters of premium natural stone tiles for complete pool interior coverage.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Considerations */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Additional Considerations</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    The total cost estimate of €100,000 includes the base construction, natural stone finish, and essential equipment. Additional features such as heating systems, advanced filtration, decking, and landscaping would be quoted separately based on your specific requirements.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Optional Features:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside">
                        <li>Heating systems</li>
                        <li>Advanced filtration</li>
                        <li>Custom decking</li>
                        <li>Landscaping</li>
                        <li>Lighting systems</li>
                        <li>Automation</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Note:</h5>
                      <p className="text-white/80 font-satoshi">For a precise quote, we recommend consulting with local pool contractors to account for site-specific factors and additional features.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* New Section: Advanced Features */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Advanced Features & Systems
            </h3>
            <div className="space-y-8">
              {/* Water Treatment Systems */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Water Treatment Options</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-4">Saltwater System</h5>
                      <ul className="text-white/80 font-satoshi space-y-2">
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">✓</span>
                          <span>Softer water with reduced irritation</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">✓</span>
                          <span>Lower chlorine levels</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">✓</span>
                          <span>Automated chlorine generation</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">✓</span>
                          <span>Gentler on skin and eyes</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-4">UV Light Filtration</h5>
                      <ul className="text-white/80 font-satoshi space-y-2">
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">✓</span>
                          <span>Reduced chemical dependency</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">✓</span>
                          <span>Enhanced water clarity</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">✓</span>
                          <span>Environmentally friendly</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">✓</span>
                          <span>Improved water quality</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Heating Systems */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Premium Heating Solutions</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-4">Heat Pump Technology</h5>
                      <ul className="text-white/80 font-satoshi space-y-2">
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">✓</span>
                          <span>Energy-efficient operation</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">✓</span>
                          <span>Consistent temperature control</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">✓</span>
                          <span>Extended swimming season</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">✓</span>
                          <span>Low operating costs</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-4">Solar Heating</h5>
                      <ul className="text-white/80 font-satoshi space-y-2">
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">✓</span>
                          <span>Renewable energy source</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">✓</span>
                          <span>Zero operating costs</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">✓</span>
                          <span>Environmentally sustainable</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">✓</span>
                          <span>Perfect for French climate</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Premium Brands */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Recommended Equipment Brands</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-4">International Brands</h5>
                      <ul className="text-white/80 font-satoshi space-y-2">
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">•</span>
                          <span>Pentair - Premium filtration systems</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">•</span>
                          <span>Hayward - Advanced automation</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">•</span>
                          <span>Jandy - Luxury pool equipment</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-4">French Brands</h5>
                      <ul className="text-white/80 font-satoshi space-y-2">
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">•</span>
                          <span>Aqualux - Complete pool solutions</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">•</span>
                          <span>ACIS - Innovative filtration</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">•</span>
                          <span>Weltico - Premium lighting</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Safety Features */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Safety & Compliance</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    All pools in France must comply with the Raffarin Law, requiring approved safety devices. Our installations include:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-4">Safety Features</h5>
                      <ul className="text-white/80 font-satoshi space-y-2">
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">✓</span>
                          <span>Security barriers (NF P90-306)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">✓</span>
                          <span>Alarm systems (NF P90-307)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">✓</span>
                          <span>Safety covers (NF P90-308)</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-4">Compliance</h5>
                      <ul className="text-white/80 font-satoshi space-y-2">
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">✓</span>
                          <span>Building permit included</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">✓</span>
                          <span>Tax declaration handled</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">✓</span>
                          <span>Full documentation provided</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* New Section: Water Treatment Systems */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Water Treatment Systems
            </h3>
            <div className="space-y-8">
              {/* System Comparison */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Chlorine vs. Saltwater Systems</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-4">Chlorine System</h5>
                      <ul className="text-white/80 font-satoshi space-y-2">
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">✓</span>
                          <span>Lower initial cost (€1,000-€2,500)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">✓</span>
                          <span>Safer for travertine surfaces</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">✓</span>
                          <span>Standard equipment compatibility</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">✓</span>
                          <span>Familiar maintenance routine</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-4">Saltwater System</h5>
                      <ul className="text-white/80 font-satoshi space-y-2">
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">•</span>
                          <span>Higher initial cost (€2,500-€6,000)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">•</span>
                          <span>Potential travertine corrosion risk</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">•</span>
                          <span>Requires corrosion-resistant equipment</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">•</span>
                          <span>More complex maintenance</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Maintenance Requirements */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Maintenance & Costs</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-4">Chlorine System</h5>
                      <ul className="text-white/80 font-satoshi space-y-2">
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">•</span>
                          <span>Annual chemical cost: €300-€600</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">•</span>
                          <span>Weekly pH testing (7.2-7.6)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">•</span>
                          <span>Regular chlorine additions</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">•</span>
                          <span>Standard equipment maintenance</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-4">Saltwater System</h5>
                      <ul className="text-white/80 font-satoshi space-y-2">
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">•</span>
                          <span>Annual chemical cost: €200-€400</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">•</span>
                          <span>Cell replacement every 3-5 years</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">•</span>
                          <span>Salt level monitoring</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">•</span>
                          <span>Regular cell cleaning</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* UV Filtration */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">UV Light Filtration</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-4">Benefits</h5>
                      <ul className="text-white/80 font-satoshi space-y-2">
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">✓</span>
                          <span>Reduces chemical use by 50-80%</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">✓</span>
                          <span>Enhanced water clarity</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">✓</span>
                          <span>Minimizes skin/eye irritation</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">✓</span>
                          <span>Protects travertine surfaces</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-4">Specifications</h5>
                      <ul className="text-white/80 font-satoshi space-y-2">
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">•</span>
                          <span>Initial cost: €1,000-€2,500</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">•</span>
                          <span>Lamp replacement: €100-€300</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">•</span>
                          <span>Replacement every 1-2 years</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">•</span>
                          <span>Low energy consumption</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* French Regulations */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">French Regulations</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-4">Compliance Requirements</h5>
                      <ul className="text-white/80 font-satoshi space-y-2">
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">✓</span>
                          <span>Raffarin Law compliance</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">✓</span>
                          <span>Safety devices required</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">✓</span>
                          <span>Clear water standards</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">✓</span>
                          <span>Regular water testing</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-4">Maintenance Records</h5>
                      <ul className="text-white/80 font-satoshi space-y-2">
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">✓</span>
                          <span>Chemical balance logs</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">✓</span>
                          <span>Equipment maintenance</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">✓</span>
                          <span>Safety inspections</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">✓</span>
                          <span>Annual compliance check</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* New Section: Natural Stone Options */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Premium Natural Stone Finishes
            </h3>
            <div className="space-y-8">
              {/* Stone Options */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Recommended Natural Stones</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Travertine */}
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-4">Travertine</h5>
                      <div className="space-y-4">
                        <div>
                          <h6 className="text-white/90 font-medium mb-2">Why Choose Travertine:</h6>
                          <ul className="text-white/80 font-satoshi space-y-2">
                            <li className="flex items-start">
                              <span className="text-yellow-500 mr-2">✓</span>
                              <span>Seamless monochromatic look</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-yellow-500 mr-2">✓</span>
                              <span>Warm, natural tones</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-yellow-500 mr-2">✓</span>
                              <span>Cost-effective luxury</span>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h6 className="text-white/90 font-medium mb-2">Features:</h6>
                          <ul className="text-white/80 font-satoshi space-y-2">
                            <li className="flex items-start">
                              <span className="text-yellow-500 mr-2">•</span>
                              <span>Durable & slip-resistant</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-yellow-500 mr-2">•</span>
                              <span>Multiple finishes available</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-yellow-500 mr-2">•</span>
                              <span>€150-€250/m²</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Limestone */}
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-4">Limestone</h5>
                      <div className="space-y-4">
                        <div>
                          <h6 className="text-white/90 font-medium mb-2">Why Choose Limestone:</h6>
                          <ul className="text-white/80 font-satoshi space-y-2">
                            <li className="flex items-start">
                              <span className="text-yellow-500 mr-2">✓</span>
                              <span>Harmonious with travertine</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-yellow-500 mr-2">✓</span>
                              <span>Natural, earthy tones</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-yellow-500 mr-2">✓</span>
                              <span>Smooth texture</span>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h6 className="text-white/90 font-medium mb-2">Features:</h6>
                          <ul className="text-white/80 font-satoshi space-y-2">
                            <li className="flex items-start">
                              <span className="text-yellow-500 mr-2">•</span>
                              <span>Excellent for interiors</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-yellow-500 mr-2">•</span>
                              <span>Regular sealing needed</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-yellow-500 mr-2">•</span>
                              <span>€160-€280/m²</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Marble */}
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-4">Marble</h5>
                      <div className="space-y-4">
                        <div>
                          <h6 className="text-white/90 font-medium mb-2">Why Choose Marble:</h6>
                          <ul className="text-white/80 font-satoshi space-y-2">
                            <li className="flex items-start">
                              <span className="text-yellow-500 mr-2">✓</span>
                              <span>Luxurious polished finish</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-yellow-500 mr-2">✓</span>
                              <span>Elegant contrast</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-yellow-500 mr-2">✓</span>
                              <span>Premium durability</span>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h6 className="text-white/90 font-medium mb-2">Features:</h6>
                          <ul className="text-white/80 font-satoshi space-y-2">
                            <li className="flex items-start">
                              <span className="text-yellow-500 mr-2">•</span>
                              <span>Water-resistant when sealed</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-yellow-500 mr-2">•</span>
                              <span>Available in textures</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-yellow-500 mr-2">•</span>
                              <span>€200-€300/m²</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cost Breakdown */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Natural Stone Cost Breakdown</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-4">Coverage Details</h5>
                      <ul className="text-white/80 font-satoshi space-y-2">
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">•</span>
                          <span>Pool floor: 66m²</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">•</span>
                          <span>Total tiled area: ~100m²</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">•</span>
                          <span>Includes walls and floor</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-4">Investment Range</h5>
                      <ul className="text-white/80 font-satoshi space-y-2">
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">•</span>
                          <span>Travertine: €25,000-€30,000</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">•</span>
                          <span>Limestone: €26,000-€35,000</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">•</span>
                          <span>Marble: €30,000-€40,000</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Maintenance */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Stone Maintenance</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    All natural stone finishes require proper sealing and maintenance to ensure longevity and preserve their beauty. Our installation includes:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-4">Initial Treatment</h5>
                      <ul className="text-white/80 font-satoshi space-y-2">
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">✓</span>
                          <span>Professional sealing</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">✓</span>
                          <span>Chemical resistance treatment</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">✓</span>
                          <span>Slip resistance enhancement</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-4">Ongoing Care</h5>
                      <ul className="text-white/80 font-satoshi space-y-2">
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">✓</span>
                          <span>Regular resealing schedule</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">✓</span>
                          <span>pH-balanced cleaning</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">✓</span>
                          <span>Maintenance guide provided</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* New Section: Heating & Energy */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Heating & Energy Requirements
            </h3>
            <div className="space-y-8">
              {/* Pool Specifications */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Pool Heating Specifications</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-4">Pool Dimensions</h5>
                      <ul className="text-white/80 font-satoshi space-y-2">
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">•</span>
                          <span>Size: 11m x 6m</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">•</span>
                          <span>Surface area: 66m²</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">•</span>
                          <span>Volume: ~165m³</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-4">Temperature Settings</h5>
                      <ul className="text-white/80 font-satoshi space-y-2">
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">•</span>
                          <span>Target temperature: 28°C</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">•</span>
                          <span>Minimum temperature: 24°C</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">•</span>
                          <span>Season: Year-round</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Energy Requirements */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Energy Consumption</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-4">Monthly Energy Usage</h5>
                      <ul className="text-white/80 font-satoshi space-y-2">
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">•</span>
                          <span>Summer (Jun-Aug): 1,500-2,000 kWh</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">•</span>
                          <span>Spring/Autumn: 2,500-3,500 kWh</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">•</span>
                          <span>Winter (Dec-Feb): 4,000-5,000 kWh</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-4">Annual Energy Costs</h5>
                      <ul className="text-white/80 font-satoshi space-y-2">
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">•</span>
                          <span>Total annual usage: ~30,000 kWh</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">•</span>
                          <span>Estimated cost: €4,500-€6,000/year</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">•</span>
                          <span>COP: 4.5-5.0 (efficiency ratio)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Heat Pump Specifications */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Recommended Heat Pump</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-4">Technical Specifications</h5>
                      <ul className="text-white/80 font-satoshi space-y-2">
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">✓</span>
                          <span>Power: 16-20 kW</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">✓</span>
                          <span>Inverter technology</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">✓</span>
                          <span>Low noise operation</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-4">Energy Efficiency</h5>
                      <ul className="text-white/80 font-satoshi space-y-2">
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">✓</span>
                          <span>Energy class A+++</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">✓</span>
                          <span>Smart temperature control</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">✓</span>
                          <span>Weather compensation</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Energy Saving Tips */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Energy Optimization</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-4">Cost-Saving Measures</h5>
                      <ul className="text-white/80 font-satoshi space-y-2">
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">✓</span>
                          <span>Solar cover when not in use</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">✓</span>
                          <span>Night-time temperature reduction</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">✓</span>
                          <span>Smart scheduling system</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-4">Additional Features</h5>
                      <ul className="text-white/80 font-satoshi space-y-2">
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">✓</span>
                          <span>Wind protection system</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">✓</span>
                          <span>Automatic pool cover</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">✓</span>
                          <span>Remote control via app</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* New Section: Solar Energy System */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Solar Energy System
            </h3>
            <div className="space-y-8">
              {/* System Requirements */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Solar Panel Requirements</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-4">System Specifications</h5>
                      <ul className="text-white/80 font-satoshi space-y-2">
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">✓</span>
                          <span>Total capacity: 20-25 kW</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">✓</span>
                          <span>44-56 panels (450W each)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">✓</span>
                          <span>Area required: 70-112m²</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">✓</span>
                          <span>Annual production: 20,800-27,500 kWh</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-4">Energy Yield</h5>
                      <ul className="text-white/80 font-satoshi space-y-2">
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">•</span>
                          <span>Southern France: 1,500-1,600 kWh/kW/year</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">•</span>
                          <span>Central France: 1,200-1,300 kWh/kW/year</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">•</span>
                          <span>System efficiency: 80-85%</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">•</span>
                          <span>Heat pump COP: 4.5-5.0</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cost Breakdown */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Investment & Savings</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-4">System Costs</h5>
                      <ul className="text-white/80 font-satoshi space-y-2">
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">•</span>
                          <span>20 kW system: €20,000-€28,000</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">•</span>
                          <span>25 kW system: €25,000-€35,000</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">•</span>
                          <span>Installation included</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">•</span>
                          <span>Inverter & mounting hardware</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-4">Financial Benefits</h5>
                      <ul className="text-white/80 font-satoshi space-y-2">
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">✓</span>
                          <span>Annual savings: €4,500-€6,000</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">✓</span>
                          <span>Tax credits: 20-30% reduction</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">✓</span>
                          <span>Feed-in tariffs available</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">✓</span>
                          <span>Payback: 3-5 years</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Seasonal Performance */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Seasonal Performance</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-4">Summer Operation</h5>
                      <ul className="text-white/80 font-satoshi space-y-2">
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">✓</span>
                          <span>Production: 1,700-2,100 kWh/month</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">✓</span>
                          <span>Usage: 1,500-2,000 kWh/month</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">✓</span>
                          <span>Grid feed-in available</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">✓</span>
                          <span>Optimal efficiency</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-4">Winter Operation</h5>
                      <ul className="text-white/80 font-satoshi space-y-2">
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">•</span>
                          <span>Production: 1,200-1,500 kWh/month</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">•</span>
                          <span>Usage: 4,000-5,000 kWh/month</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">•</span>
                          <span>Grid supplementation needed</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">•</span>
                          <span>Reduced efficiency</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Installation Requirements */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Installation Requirements</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-4">Site Requirements</h5>
                      <ul className="text-white/80 font-satoshi space-y-2">
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">✓</span>
                          <span>South-facing orientation</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">✓</span>
                          <span>Minimal shading</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">✓</span>
                          <span>Roof or ground mounting</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">✓</span>
                          <span>Grid connection point</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-4">Next Steps</h5>
                      <ul className="text-white/80 font-satoshi space-y-2">
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">✓</span>
                          <span>Site assessment</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">✓</span>
                          <span>Incentive applications</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">✓</span>
                          <span>Grid connection approval</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">✓</span>
                          <span>Installation scheduling</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
