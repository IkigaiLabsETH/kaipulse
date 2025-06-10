"use client";

export default function ArcPage() {
  return (
    <div className="min-h-screen bg-black text-white font-satoshi">
      {/* Premium header accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-8">
            <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">Electric Boating • Sustainable Luxury • Premium Performance</p>
            <h1 className="text-center">
              <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
                Arc Sport
              </span>
            </h1>
            <div className="flex items-center justify-center mt-6">
              <div className="h-px w-24 bg-yellow-500/30"></div>
              <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">The Future of Wake Boating</p>
              <div className="h-px w-24 bg-yellow-500/30"></div>
            </div>
            
            {/* Featured Video */}
            <div className="relative w-full mx-auto mt-12 aspect-[16/9] overflow-hidden rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <iframe
                src="https://www.youtube.com/embed/0UgSfMxoql8"
                title="Arc Sport - The Future of Wake Boating"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
            </div>
          </div>

          {/* Overview Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              The Best Wake Boat Just Got Better
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                Arc Boat Company is revolutionizing the marine industry with high-performance, all-electric watercraft. Our mission is to electrify the marine industry, starting with recreational boating and expanding into commercial applications. The Arc Sport combines aerospace engineering, electric vehicle technology, and advanced software to deliver superior performance, reduced maintenance, and lower operating costs compared to traditional boats.
              </p>
              <div className="mt-6">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Key Features:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>100% electric powertrain with zero emissions</li>
                  <li>Double the torque of premium gas-powered wakeboats</li>
                  <li>Software-controlled ballast systems</li>
                  <li>Bow and stern thrusters for easy docking</li>
                  <li>Auto-retract hardtop tower</li>
                  <li>Over-the-air software updates</li>
                  <li>Quiet operation for conversation at high speeds</li>
                  <li>Eliminated fuel odors</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">⚡</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Electric Power
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                Zero Emissions
              </p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">🌊</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Perfect Wave
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                Customizable Settings
              </p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">🎵</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Premium Sound
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                Immersive Audio
              </p>
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Technical Excellence
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Power & Performance</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <ul className="text-white/80 font-satoshi space-y-2">
                    <li>226 kWh battery pack</li>
                    <li>570-horsepower electric motor</li>
                    <li>Double the torque of premium gas boats</li>
                    <li>4-6 hours active use (towing)</li>
                    <li>24+ hours cruising speed (mid-20s mph)</li>
                    <li>Software-limited top speed: 40 mph</li>
                    <li>Level 1, 2, and DC fast charging support</li>
                    <li>Full charge overnight (Level 2)</li>
                    <li>80% charge in ~45 minutes (Level 3)</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Dimensions & Features</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <ul className="text-white/80 font-satoshi space-y-2">
                    <li>23-foot length</li>
                    <li>6,900 lbs (dry weight)</li>
                    <li>9,000 lbs (ballasted)</li>
                    <li>15-passenger capacity</li>
                    <li>Fiberglass hull construction</li>
                    <li>Auto-retract hardtop tower</li>
                    <li>Software-controlled ballast systems</li>
                    <li>Bow and stern thrusters</li>
                    <li>OTA software updates</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Company Story */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Our Story
            </h3>
            <div className="space-y-8">
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">The Vision</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    Founded in January 2021 in Los Angeles, Arc Boat Company is revolutionizing the marine industry with high-performance, all-electric watercraft. Our mission is to electrify the marine industry, starting with recreational boating and expanding into commercial applications.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">The Founders</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                    <h5 className="text-yellow-400 font-epilogue mb-2">Mitch Lee - CEO</h5>
                    <p className="text-white/80 font-satoshi">
                      A Northwestern University mechanical engineering graduate, Mitch brings entrepreneurial vision and passion for watersports. His experience at Boeing and software startups drives Arc&apos;s mission to create cleaner, more enjoyable boating experiences.
                    </p>
                  </div>
                  <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                    <h5 className="text-yellow-400 font-epilogue mb-2">Ryan Cook - CTO</h5>
                    <p className="text-white/80 font-satoshi">
                      Former SpaceX lead engineer, Ryan brings aerospace expertise to Arc. His &quot;first principles&quot; approach shapes our innovative designs, from custom battery packs to in-house software development.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing & Availability */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Pricing & Availability
            </h3>
            <div className="space-y-4">
              <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-bold text-yellow-500 mb-4">Starting at $258,000</h4>
                    <ul className="text-white/80 font-satoshi space-y-2">
                      <li>Founders&apos; Fleet: $322,000 (Sold Out)</li>
                      <li>Competitive with premium gas boats</li>
                      <li>Lower operating costs</li>
                      <li>Reduced maintenance</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-yellow-500 mb-4">Availability</h4>
                    <ul className="text-white/80 font-satoshi space-y-2">
                      <li>Preorders open with $500 deposit</li>
                      <li>Initial deliveries started late 2024</li>
                      <li>Hundreds of units planned for 2025</li>
                      <li>150,000 sq ft production facility</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recognition */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Recognition & Growth
            </h3>
            <div className="space-y-4">
              <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                <ul className="text-white/80 font-satoshi space-y-2">
                  <li>Named one of Fast Company&apos;s &quot;Next Big Things in Tech&quot; 2024</li>
                  <li>Over $110 million in funding raised</li>
                  <li>Backed by Andreessen Horowitz, Eclipse Ventures, and more</li>
                  <li>Growing team of 100+ employees</li>
                  <li>Expanding into commercial applications</li>
                  <li>New R&D facility at Port of Los Angeles</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Funding Details */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Investment Journey
            </h3>
            <div className="space-y-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Seed Round (2021)</h4>
                  <ul className="text-white/80 font-satoshi space-y-2">
                    <li>$4.25 million raised</li>
                    <li>Led by Andreessen Horowitz</li>
                    <li>Notable investors:
                      <ul className="ml-4 mt-2 space-y-1">
                        <li>Lowercarbon Capital</li>
                        <li>Dreamers VC</li>
                        <li>Thirty Five Ventures</li>
                        <li>Combs Enterprises</li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Series A (2021)</h4>
                  <ul className="text-white/80 font-satoshi space-y-2">
                    <li>$30 million raised</li>
                    <li>Led by Greg Reichow</li>
                    <li>Former Tesla VP of production</li>
                    <li>Joined Arc&apos;s board</li>
                    <li>Accelerated Arc One production</li>
                  </ul>
                </div>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Series B (2023)</h4>
                  <ul className="text-white/80 font-satoshi space-y-2">
                    <li>$70 million raised</li>
                    <li>Led by Eclipse Ventures</li>
                    <li>Funded Arc Sport development</li>
                    <li>Expanded to 150,000 sq ft facility</li>
                    <li>Team growth to 100+ employees</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Environmental Impact */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Environmental Impact
            </h3>
            <div className="space-y-4">
              <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-bold text-yellow-500 mb-4">Advantages</h4>
                    <ul className="text-white/80 font-satoshi space-y-2">
                      <li>Zero direct emissions</li>
                      <li>Eliminated fuel odors</li>
                      <li>Reduced maintenance needs</li>
                      <li>No winterization required</li>
                      <li>Fewer moving parts</li>
                      <li>Access to protected waters</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Market Position */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Market Position
            </h3>
            <div className="space-y-4">
              <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-bold text-yellow-500 mb-4">Competitive Landscape</h4>
                    <ul className="text-white/80 font-satoshi space-y-2">
                      <li>Arc Sport: $258,000 - $322,000</li>
                      <li>Mastercraft XStar S: $245,000</li>
                      <li>Nautique GS22E: $300,000</li>
                      <li>Axis A20: $70,000</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-yellow-500 mb-4">Market Strategy</h4>
                    <ul className="text-white/80 font-satoshi space-y-2">
                      <li>Premium positioning</li>
                      <li>Software-first approach</li>
                      <li>OTA updates capability</li>
                      <li>Intelligent ballast systems</li>
                      <li>Targeting $4B sports boat market</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Commercial Expansion */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Commercial Expansion
            </h3>
            <div className="space-y-4">
              <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-bold text-yellow-500 mb-4">Port of Los Angeles</h4>
                    <ul className="text-white/80 font-satoshi space-y-2">
                      <li>26-foot electric tugboat retrofit</li>
                      <li>600-horsepower dual-motor drivetrain</li>
                      <li>New R&D facility at AltaSea campus</li>
                      <li>Focus on workboats and charging infrastructure</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-yellow-500 mb-4">Future Development</h4>
                    <ul className="text-white/80 font-satoshi space-y-2">
                      <li>Expanding commercial applications</li>
                      <li>Charging infrastructure development</li>
                      <li>Team growth to 200 employees</li>
                      <li>Advanced propulsion systems</li>
                    </ul>
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
