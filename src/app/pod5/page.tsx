"use client";

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Pod5Page() {
  return (
    <div className="min-h-screen bg-black text-white font-satoshi">
      {/* Premium header accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-8">
            <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">Smart Sleep Technology • AI-Powered Health Monitoring • Temperature Control</p>
            <h1 className="text-center">
              <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
                Eight Sleep Pod 5
              </span>
            </h1>
            <div className="flex items-center justify-center mt-6">
              <div className="h-px w-24 bg-yellow-500/30"></div>
              <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">The Future of Sleep Technology</p>
              <div className="h-px w-24 bg-yellow-500/30"></div>
            </div>
            
            {/* Featured Visual */}
            <div className="relative w-full mx-auto mt-12 aspect-[16/9] overflow-hidden rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <iframe
                src="https://www.youtube.com/embed/kqGpjTdbrBo"
                title="Eight Sleep Pod 5 - Smart Sleep Technology"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
            </div>

            {/* Call to Action */}
            <div className="mt-8">
              <Link href="https://www.eightsleep.com/pod-5" target="_blank" rel="noopener noreferrer">
                <Button className="bg-yellow-500 text-black font-bold px-8 py-4 rounded-none hover:bg-yellow-400 transition-all duration-300 text-lg">
                  Explore Pod 5 Technology
                </Button>
              </Link>
            </div>
          </div>

          {/* Overview Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Revolutionary Sleep Technology
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                Launched in May 2025, the Eight Sleep Pod 5 represents the cutting edge of smart sleep technology. This intelligent mattress cover integrates with existing mattresses to provide advanced features like dual-zone temperature control, AI-powered health monitoring, and dynamic sleep optimization. Starting at $5,849, it offers a more accessible entry into luxury sleep technology compared to traditional high-end beds.
              </p>
              <div className="mt-6">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Key Innovations:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>AI-powered Health Check with 99% precision</li>
                  <li>Dual-zone temperature control (55°F to 110°F)</li>
                  <li>Adjustable elevation for snoring reduction</li>
                  <li>Integrated surround sound for relaxation</li>
                  <li>Dynamic adjustments based on sleep stages</li>
                  <li>30-day return policy with full refund</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">🌡️</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Temperature Control
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                Dual-Zone Active Cooling
              </p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">🤖</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  AI Health Monitoring
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                99% Clinical Precision
              </p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">💰</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Accessible Luxury
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                Starting at $5,849
              </p>
            </div>
          </div>

          {/* Pod 5 vs Hästens Comparison Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Pod 5 vs Hästens: Modern Technology vs Traditional Luxury
            </h3>
            <p className="text-lg text-white/80 font-satoshi mb-8">
              A comprehensive comparison between cutting-edge smart sleep technology and traditional luxury craftsmanship - discover which approach aligns with your sleep preferences and lifestyle.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Pod 5 Model */}
              <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Eight Sleep Pod 5 - Smart Sleep Technology</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white/80 font-satoshi">Starting Price:</span>
                    <span className="text-yellow-400 font-bold">$5,849</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80 font-satoshi">Subscription:</span>
                    <span className="text-yellow-400 font-bold">$199+/year</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80 font-satoshi">Temperature Range:</span>
                    <span className="text-yellow-400 font-bold">55°F - 110°F</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80 font-satoshi">Warranty:</span>
                    <span className="text-yellow-400 font-bold">2 years (extendable)</span>
                  </div>
                </div>
                <p className="text-white/80 font-satoshi mt-4">
                  Revolutionary smart mattress cover that transforms any mattress into an intelligent sleep system. Features AI-powered health monitoring, active temperature control, and dynamic sleep optimization.
                </p>
              </div>

              {/* Hästens Model */}
              <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Hästens Beds - Traditional Luxury Craftsmanship</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white/80 font-satoshi">Starting Price:</span>
                    <span className="text-yellow-400 font-bold">$20,000+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80 font-satoshi">Subscription:</span>
                    <span className="text-yellow-400 font-bold">None</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80 font-satoshi">Temperature Control:</span>
                    <span className="text-yellow-400 font-bold">Passive (natural)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80 font-satoshi">Warranty:</span>
                    <span className="text-yellow-400 font-bold">25 years</span>
                  </div>
                </div>
                <p className="text-white/80 font-satoshi mt-4">
                  Handcrafted luxury beds made from natural materials like horsehair, wool, and cotton. Focuses on traditional comfort and support with exceptional craftsmanship and longevity.
                </p>
              </div>
            </div>

            {/* Detailed Comparison Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-yellow-500/30">
                    <th className="text-yellow-500 font-bold p-4">Feature</th>
                    <th className="text-yellow-500 font-bold p-4">Pod 5</th>
                    <th className="text-yellow-500 font-bold p-4">Hästens</th>
                  </tr>
                </thead>
                <tbody className="text-white/80">
                  <tr className="border-b border-yellow-500/10">
                    <td className="p-4 font-bold text-yellow-400">Price Range</td>
                    <td className="p-4">$5,849 + $199+/year subscription</td>
                    <td className="p-4">$20,000+ to $500,000+ (one-time)</td>
                  </tr>
                  <tr className="border-b border-yellow-500/10">
                    <td className="p-4 font-bold text-yellow-400">Temperature Control</td>
                    <td className="p-4">Active, dual-zone, 55°F to 110°F, AI-adjusted</td>
                    <td className="p-4">Passive, via natural materials, no active control</td>
                  </tr>
                  <tr className="border-b border-yellow-500/10">
                    <td className="p-4 font-bold text-yellow-400">Health Monitoring</td>
                    <td className="p-4">AI-powered, tracks heart rate, respiratory rate, etc.</td>
                    <td className="p-4">None, focuses on comfort and support</td>
                  </tr>
                  <tr className="border-b border-yellow-500/10">
                    <td className="p-4 font-bold text-yellow-400">Adjustability</td>
                    <td className="p-4">Adjustable base for elevation, snoring reduction</td>
                    <td className="p-4">Customizable firmness, no dynamic adjustments</td>
                  </tr>
                  <tr className="border-b border-yellow-500/10">
                    <td className="p-4 font-bold text-yellow-400">Warranty</td>
                    <td className="p-4">2 years (extendable to 5 years with membership)</td>
                    <td className="p-4">25 years</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-yellow-400">Return Policy</td>
                    <td className="p-4">30-day full refund</td>
                    <td className="p-4">More restrictive, often requires use period</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Key Differences Summary */}
            <div className="mt-8 grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Why Choose Pod 5?</h4>
                <ul className="text-white/80 font-satoshi space-y-2">
                  <li>• More affordable entry into luxury sleep technology</li>
                  <li>• AI-powered health monitoring and insights</li>
                  <li>• Active temperature control for personalized comfort</li>
                  <li>• Dynamic adjustments based on sleep patterns</li>
                  <li>• 30-day return policy for risk-free trial</li>
                  <li>• Modern, tech-driven sleep solution</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Why Choose Hästens?</h4>
                <ul className="text-white/80 font-satoshi space-y-2">
                  <li>• Traditional luxury craftsmanship</li>
                  <li>• Natural materials and sustainable construction</li>
                  <li>• 25-year warranty and 100+ year lifespan</li>
                  <li>• One-time investment, no ongoing fees</li>
                  <li>• Proven comfort and support technology</li>
                  <li>• Timeless design and heritage</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Pod 5 Features Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Pod 5 Advanced Features
            </h3>
            <p className="text-lg text-white/80 font-satoshi mb-8">
              Discover the cutting-edge technology that makes the Pod 5 a revolutionary sleep solution, combining comfort with intelligent health monitoring.
            </p>

            {/* Hero Stats */}
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <div className="text-center p-4 bg-black/30 rounded-none border border-yellow-500/20">
                <div className="text-3xl font-bold text-yellow-500">99%</div>
                <div className="text-white/80 font-satoshi text-sm">Health Monitoring Precision</div>
              </div>
              <div className="text-center p-4 bg-black/30 rounded-none border border-yellow-500/20">
                <div className="text-3xl font-bold text-yellow-500">55°F</div>
                <div className="text-white/80 font-satoshi text-sm">Lowest Temperature</div>
              </div>
              <div className="text-center p-4 bg-black/30 rounded-none border border-yellow-500/20">
                <div className="text-3xl font-bold text-yellow-500">27%</div>
                <div className="text-white/80 font-satoshi text-sm">Deep Sleep Increase</div>
              </div>
              <div className="text-center p-4 bg-black/30 rounded-none border border-yellow-500/20">
                <div className="text-3xl font-bold text-yellow-500">30</div>
                <div className="text-white/80 font-satoshi text-sm">Day Return Policy</div>
              </div>
            </div>

            {/* Key Features Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Temperature Control</h4>
                  <ul className="text-white/80 font-satoshi space-y-2">
                    <li>• Dual-zone temperature control (55°F to 110°F)</li>
                    <li>• AI-adjusted based on sleep stages and biometrics</li>
                    <li>• Individual temperature settings for each side</li>
                    <li>• Dynamic cooling and heating throughout the night</li>
                    <li>• Clinically proven to boost deep sleep by up to 27%</li>
                  </ul>
                </div>

                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Health Monitoring</h4>
                  <ul className="text-white/80 font-satoshi space-y-2">
                    <li>• AI-powered Health Check with 99% precision</li>
                    <li>• Tracks heart rate, respiratory rate, and HRV</li>
                    <li>• Non-wearable technology for continuous monitoring</li>
                    <li>• Early warning system for health trends</li>
                    <li>• Cardiovascular and respiratory health insights</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Smart Adjustments</h4>
                  <ul className="text-white/80 font-satoshi space-y-2">
                    <li>• Adjustable bed base for snoring reduction</li>
                    <li>• Dynamic elevation based on sleep patterns</li>
                    <li>• Integrated surround sound for relaxation</li>
                    <li>• Automatic adjustments based on biometrics</li>
                    <li>• Personalized sleep optimization algorithms</li>
                  </ul>
                </div>

                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Subscription Benefits</h4>
                  <ul className="text-white/80 font-satoshi space-y-2">
                    <li>• Autopilot Standard: $199/year</li>
                    <li>• Enhanced features and AI capabilities</li>
                    <li>• Extended warranty options (up to 5 years)</li>
                    <li>• Advanced sleep analytics and insights</li>
                    <li>• Continuous software updates and improvements</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Specifications Table */}
            <div className="bg-black/30 p-6 rounded-none border border-yellow-500/20 mb-8">
              <h4 className="text-xl font-bold text-yellow-500 mb-4">Technical Specifications</h4>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h5 className="text-yellow-400 font-epilogue mb-3">Core Features</h5>
                  <div className="space-y-2 text-white/80 font-satoshi">
                    <div className="flex justify-between">
                      <span>Temperature Range:</span>
                      <span>55°F - 110°F</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Health Monitoring:</span>
                      <span>99% clinical precision</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Adjustable Base:</span>
                      <span>Yes (snoring reduction)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Surround Sound:</span>
                      <span>Integrated</span>
                    </div>
                    <div className="flex justify-between">
                      <span>AI Capabilities:</span>
                      <span>Dynamic optimization</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h5 className="text-yellow-400 font-epilogue mb-3">Pricing & Policies</h5>
                  <div className="space-y-2 text-white/80 font-satoshi">
                    <div className="flex justify-between">
                      <span>Starting Price:</span>
                      <span>$5,849</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Subscription:</span>
                      <span>$199+/year</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Warranty:</span>
                      <span>2 years (extendable)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Return Policy:</span>
                      <span>30-day full refund</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Price and Warranty */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Investment & Value</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white/80 font-satoshi">Initial Investment:</span>
                    <span className="text-yellow-400 font-bold text-xl">$5,849</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80 font-satoshi">Annual Subscription:</span>
                    <span className="text-yellow-400 font-bold">$199+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80 font-satoshi">Warranty:</span>
                    <span className="text-yellow-400 font-bold">2-5 years</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80 font-satoshi">Return Policy:</span>
                    <span className="text-yellow-400 font-bold">30-day full refund</span>
                  </div>
                </div>
              </div>

              <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Health Benefits</h4>
                <ul className="text-white/80 font-satoshi space-y-2">
                  <li>• 27% increase in deep sleep</li>
                  <li>• Cardiovascular health monitoring</li>
                  <li>• Respiratory pattern analysis</li>
                  <li>• Early health trend detection</li>
                  <li>• Personalized sleep optimization</li>
                </ul>
              </div>
            </div>

            {/* Why Choose Pod 5 */}
            <div className="bg-black/30 p-6 rounded-none border border-yellow-500/20">
              <h4 className="text-xl font-bold text-yellow-500 mb-4">Why Choose the Pod 5?</h4>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h5 className="text-yellow-400 font-epilogue mb-2">Modern Technology</h5>
                  <p className="text-white/80 font-satoshi text-sm">
                    Cutting-edge AI and biometric technology provide insights and optimizations that traditional beds cannot offer.
                  </p>
                </div>
                <div>
                  <h5 className="text-yellow-400 font-epilogue mb-2">Accessible Luxury</h5>
                  <p className="text-white/80 font-satoshi text-sm">
                    Significantly more affordable than traditional luxury beds while offering advanced features and health monitoring.
                  </p>
                </div>
                <div>
                  <h5 className="text-yellow-400 font-epilogue mb-2">Flexible Investment</h5>
                  <p className="text-white/80 font-satoshi text-sm">
                    Lower initial cost with subscription model allows for easier entry into luxury sleep technology with ongoing support.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* User Considerations Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              User Considerations
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Ideal for Pod 5</h4>
                <ul className="text-white/80 font-satoshi space-y-2">
                  <li>• Tech-savvy individuals seeking innovation</li>
                  <li>• Users focused on health monitoring and wellness</li>
                  <li>• Those who prefer lower initial investment</li>
                  <li>• People wanting flexible return policies</li>
                  <li>• Users who value dynamic temperature control</li>
                  <li>• Those seeking AI-powered sleep optimization</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Considerations</h4>
                <ul className="text-white/80 font-satoshi space-y-2">
                  <li>• Ongoing subscription costs</li>
                  <li>• Shorter warranty compared to traditional beds</li>
                  <li>• Dependency on technology and software</li>
                  <li>• Requires existing mattress compatibility</li>
                  <li>• May need regular software updates</li>
                  <li>• Less emphasis on traditional craftsmanship</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Conclusion Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Conclusion: Modern Innovation vs Traditional Luxury
            </h3>
            <div className="space-y-6 text-gray-300">
              <p className="text-lg">
                The Eight Sleep Pod 5 offers a modern, tech-driven alternative to traditional luxury beds like Hästens. For users who value innovation, health insights, and accessibility, the Pod 5 provides an attractive option at a significantly lower price point.
              </p>
              <p className="text-lg">
                While Hästens beds excel in traditional craftsmanship, natural materials, and long-term durability, the Pod 5 focuses on cutting-edge technology, health monitoring, and dynamic sleep optimization. The choice ultimately depends on whether you prioritize timeless luxury and longevity or modern innovation and health insights.
              </p>
              <div className="mt-8 p-6 bg-black/30 rounded-none border border-yellow-500/20">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Key Takeaway</h4>
                <p className="text-white/80 font-satoshi">
                  The Pod 5 represents the future of sleep technology, offering AI-powered health monitoring and dynamic temperature control at a fraction of the cost of traditional luxury beds. For users seeking innovation alongside luxury, it provides an accessible entry point into advanced sleep technology.
                </p>
              </div>
            </div>
          </div>

          {/* Featured Technology Cards */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Pod 5 Technology Highlights
            </h3>
            <p className="text-base md:text-lg text-white/80 font-satoshi mb-8 text-center leading-relaxed">
              Discover the revolutionary features that make the Pod 5 a game-changer in sleep technology and health monitoring.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-black p-6 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <CardHeader>
                  <CardTitle className="font-epilogue text-xl text-yellow-400">Temperature Control</CardTitle>
                  <p className="text-white/60 font-satoshi text-sm">Dual-Zone Active</p>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 font-satoshi mb-4">AI-adjusted temperature control from 55°F to 110°F for personalized comfort and optimal sleep conditions.</p>
                  <div className="text-yellow-500 font-bold text-lg">55°F - 110°F</div>
                </CardContent>
              </Card>

              <Card className="bg-black p-6 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <CardHeader>
                  <CardTitle className="font-epilogue text-xl text-yellow-400">Health Monitoring</CardTitle>
                  <p className="text-white/60 font-satoshi text-sm">AI-Powered</p>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 font-satoshi mb-4">99% precision health monitoring including heart rate, respiratory rate, and cardiovascular insights.</p>
                  <div className="text-yellow-500 font-bold text-lg">99% Precision</div>
                </CardContent>
              </Card>

              <Card className="bg-black p-6 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <CardHeader>
                  <CardTitle className="font-epilogue text-xl text-yellow-400">Smart Adjustments</CardTitle>
                  <p className="text-white/60 font-satoshi text-sm">Dynamic Optimization</p>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 font-satoshi mb-4">Adjustable base for snoring reduction and dynamic elevation based on sleep patterns and biometrics.</p>
                  <div className="text-yellow-500 font-bold text-lg">AI-Driven</div>
                </CardContent>
              </Card>

              <Card className="bg-black p-6 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <CardHeader>
                  <CardTitle className="font-epilogue text-xl text-yellow-400">Accessible Luxury</CardTitle>
                  <p className="text-white/60 font-satoshi text-sm">Modern Investment</p>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 font-satoshi mb-4">Starting at $5,849 with subscription model, making luxury sleep technology accessible to more users.</p>
                  <div className="text-yellow-500 font-bold text-lg">$5,849+</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
