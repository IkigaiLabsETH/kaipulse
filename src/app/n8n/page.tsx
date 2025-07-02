"use client";

import { Button } from '@/components/ui/button';

export default function N8nPage() {
  return (
    <div className="min-h-screen bg-black text-white font-satoshi">
      {/* Premium header accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-8">
            <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">Workflow Automation • AI Integration • Research Automation</p>
            <h1 className="text-center">
              <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
                n8n
              </span>
            </h1>
            <div className="flex items-center justify-center mt-6">
              <div className="h-px w-24 bg-yellow-500/30"></div>
              <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">Bitcoin-First Workflow Automation</p>
              <div className="h-px w-24 bg-yellow-500/30"></div>
            </div>
            
            {/* Featured Visual */}
            <div className="relative w-full mx-auto mt-12 aspect-[16/9] overflow-hidden rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="w-full h-full bg-gradient-to-br from-yellow-500/20 to-black flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="text-8xl">🔗</div>
                  <h3 className="text-2xl font-bold text-yellow-500">Automated Bitcoin Research</h3>
                  <p className="text-white/70">AI-Powered Workflows for Crypto, Travel & Real Estate</p>
                </div>
              </div>
            </div>
          </div>

          {/* Workflow Overview Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Revolutionary Workflow Automation
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                Transform your research and content production with powerful n8n workflows that leverage AI for Bitcoin-centric analysis, altcoin research, luxury travel planning, and real estate intelligence. These automated systems connect Slack, Airtable, and AI services to create a seamless research and content generation pipeline.
              </p>
              <div className="mt-6">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Core Capabilities:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>Real-time Bitcoin & altcoin market analysis with AI insights</li>
                  <li>Automated content generation for crypto research reports</li>
                  <li>Luxury travel planning with real-time pricing and availability</li>
                  <li>Real estate market intelligence and investment analysis</li>
                  <li>Slack-Airtable integration for seamless data flow</li>
                  <li>AI-powered content creation and publishing workflows</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Key Workflow Categories */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">₿</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Crypto Research
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                Bitcoin-First Analysis
              </p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">✈️</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Travel Intel
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                Luxury Travel Automation
              </p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">🏠</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Real Estate
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                Property Intelligence
              </p>
            </div>
          </div>

          {/* Bitcoin & Crypto Workflows */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Bitcoin-Centric Research Workflows
            </h3>
            <div className="space-y-8">
              
              {/* Bitcoin Market Analysis */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">1. Real-Time Bitcoin Market Intelligence</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    Automated workflow that monitors Bitcoin price movements, on-chain metrics, and market sentiment. Uses AI to analyze data from multiple sources and generates actionable insights posted directly to Slack with detailed analysis stored in Airtable.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Data Sources:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside">
                        <li>CoinGecko API for price data</li>
                        <li>Glassnode for on-chain metrics</li>
                        <li>Twitter sentiment analysis</li>
                        <li>News aggregation feeds</li>
                        <li>Fear & Greed Index</li>
                        <li>Lightning Network stats</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">AI Processing:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside">
                        <li>GPT-4 market analysis</li>
                        <li>Trend pattern recognition</li>
                        <li>Risk assessment scoring</li>
                        <li>Investment recommendations</li>
                        <li>Report generation</li>
                        <li>Slack alert prioritization</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Altcoin Research */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">2. Altcoin Research & Analysis Engine</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    Comprehensive altcoin research workflow that tracks emerging projects, analyzes fundamentals, monitors social sentiment, and generates detailed research reports. Perfect for identifying early opportunities and market trends.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Research Areas:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside">
                        <li>DeFi protocol analysis</li>
                        <li>Layer 1/Layer 2 evaluation</li>
                        <li>NFT marketplace trends</li>
                        <li>Gaming token research</li>
                        <li>Infrastructure projects</li>
                        <li>Memecoin momentum tracking</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Automation Features:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside">
                        <li>GitHub activity monitoring</li>
                        <li>Developer sentiment analysis</li>
                        <li>Tokenomics evaluation</li>
                        <li>Community growth tracking</li>
                        <li>Partnership announcements</li>
                        <li>Regulatory impact assessment</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Generation */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">3. Automated Crypto Content Production</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    AI-powered content creation workflow that transforms raw market data and research into polished articles, social media posts, and research reports. Maintains consistent voice while adapting content for different platforms and audiences.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Content Types:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside">
                        <li>Daily market summaries</li>
                        <li>Deep-dive research reports</li>
                        <li>Twitter thread generation</li>
                        <li>Newsletter content</li>
                        <li>Blog post creation</li>
                        <li>Video script writing</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Publishing Pipeline:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside">
                        <li>Ghost CMS integration</li>
                        <li>Twitter API posting</li>
                        <li>LinkedIn publishing</li>
                        <li>Email campaign triggers</li>
                        <li>SEO optimization</li>
                        <li>Analytics tracking</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Travel Research Workflows */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Luxury Travel Intelligence Workflows
            </h3>
            <div className="space-y-8">
              
              {/* Travel Planning */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">4. AI-Powered Travel Planning & Research</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    Comprehensive travel research workflow that monitors luxury accommodations, flight prices, restaurant availability, and cultural events. Creates detailed itineraries with real-time pricing and availability updates.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Research Sources:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside">
                        <li>Hotel booking APIs</li>
                        <li>Flight price monitoring</li>
                        <li>Michelin restaurant data</li>
                        <li>Cultural event calendars</li>
                        <li>Weather pattern analysis</li>
                        <li>Bitcoin-accepting venues</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">AI Capabilities:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside">
                        <li>Personalized recommendations</li>
                        <li>Optimal timing analysis</li>
                        <li>Budget optimization</li>
                        <li>Risk assessment</li>
                        <li>Itinerary generation</li>
                        <li>Local insights compilation</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Travel Content */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">5. Travel Content & Experience Documentation</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    Automated workflow for documenting travel experiences, generating content, and sharing insights. Transforms travel data into engaging stories while building a comprehensive database of luxury travel intelligence.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Documentation:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside">
                        <li>Photo organization & tagging</li>
                        <li>Experience logging</li>
                        <li>Cost tracking</li>
                        <li>Rating & review compilation</li>
                        <li>Contact database building</li>
                        <li>Memory preservation</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Content Creation:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside">
                        <li>Travel blog posts</li>
                        <li>Social media content</li>
                        <li>Recommendation lists</li>
                        <li>Video script generation</li>
                        <li>Newsletter features</li>
                        <li>Guide publications</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Real Estate Workflows */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Real Estate Intelligence Workflows
            </h3>
            <div className="space-y-8">
              
              {/* Market Analysis */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">6. Automated Real Estate Market Analysis</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    Comprehensive real estate intelligence workflow that monitors market trends, property valuations, investment opportunities, and regulatory changes. Focuses on luxury markets and Bitcoin-friendly jurisdictions.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Data Sources:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside">
                        <li>Property listing APIs</li>
                        <li>Market trend databases</li>
                        <li>Government regulatory feeds</li>
                        <li>Bitcoin adoption tracking</li>
                        <li>Economic indicators</li>
                        <li>Demographics analysis</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">AI Analysis:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside">
                        <li>Investment opportunity scoring</li>
                        <li>Risk assessment modeling</li>
                        <li>Price prediction algorithms</li>
                        <li>Market timing analysis</li>
                        <li>Portfolio optimization</li>
                        <li>Tax implication analysis</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Property Research */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">7. Property Research & Due Diligence</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    Automated due diligence workflow that researches specific properties, analyzes neighborhood trends, evaluates investment potential, and compiles comprehensive reports for decision-making.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Research Areas:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside">
                        <li>Property history analysis</li>
                        <li>Neighborhood development</li>
                        <li>School district ratings</li>
                        <li>Crime statistics</li>
                        <li>Infrastructure projects</li>
                        <li>Zoning regulations</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Output Generation:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside">
                        <li>Investment analysis reports</li>
                        <li>Risk assessment summaries</li>
                        <li>Comparable sales analysis</li>
                        <li>ROI projections</li>
                        <li>Legal compliance checks</li>
                        <li>Strategic recommendations</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Implementation Guide */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Implementation & Setup Guide
            </h3>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Quick Start</h4>
                  <ol className="list-decimal list-inside space-y-2 text-white/80">
                    <li>Install n8n (self-hosted or cloud)</li>
                    <li>Configure Slack & Airtable credentials</li>
                    <li>Set up OpenAI API integration</li>
                    <li>Import workflow JSON templates</li>
                    <li>Customize triggers and parameters</li>
                    <li>Test workflows in development</li>
                    <li>Deploy to production environment</li>
                  </ol>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Key Integrations</h4>
                  <ul className="list-disc list-inside space-y-2 text-white/80">
                    <li><strong>Slack:</strong> Real-time notifications & commands</li>
                    <li><strong>Airtable:</strong> Data storage & organization</li>
                    <li><strong>OpenAI:</strong> AI analysis & content generation</li>
                    <li><strong>CoinGecko:</strong> Crypto market data</li>
                    <li><strong>Ghost CMS:</strong> Content publishing</li>
                    <li><strong>Twitter API:</strong> Social media automation</li>
                    <li><strong>Booking APIs:</strong> Travel data</li>
                    <li><strong>Real Estate APIs:</strong> Property intelligence</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-black/50 rounded-none border border-yellow-500/20">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Advanced Features</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h5 className="text-yellow-400 mb-2">AI Enhancement</h5>
                    <ul className="text-white/80 text-sm list-disc list-inside">
                      <li>Custom GPT prompts</li>
                      <li>Model selection optimization</li>
                      <li>Token usage tracking</li>
                      <li>Response quality scoring</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-yellow-400 mb-2">Data Management</h5>
                    <ul className="text-white/80 text-sm list-disc list-inside">
                      <li>Automated data cleaning</li>
                      <li>Duplicate detection</li>
                      <li>Historical trend analysis</li>
                      <li>Predictive modeling</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-yellow-400 mb-2">Monitoring</h5>
                    <ul className="text-white/80 text-sm list-disc list-inside">
                      <li>Workflow health checks</li>
                      <li>Error alerting</li>
                      <li>Performance optimization</li>
                      <li>Usage analytics</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits & ROI */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Return on Investment
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-500">80%</div>
                <div className="text-white/80">Time Savings</div>
                <div className="text-sm text-white/60">on research tasks</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-500">24/7</div>
                <div className="text-white/80">Monitoring</div>
                <div className="text-sm text-white/60">automated alerts</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-500">95%</div>
                <div className="text-white/80">Accuracy</div>
                <div className="text-sm text-white/60">data processing</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-500">5x</div>
                <div className="text-white/80">Content Output</div>
                <div className="text-sm text-white/60">production speed</div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
              Ready to Automate Your Research?
            </h3>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Transform your Bitcoin research, travel planning, and real estate intelligence with powerful n8n workflows. Start building your automated research empire today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-yellow-500 text-black font-bold px-8 py-4 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] hover:shadow-[3px_3px_0px_0px_rgba(234,179,8,1)] transition-all"
              >
                Get Workflow Templates
              </Button>
              <Button 
                variant="outline" 
                className="text-yellow-500 border-yellow-500 px-8 py-4 rounded-none border-2 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] hover:shadow-[3px_3px_0px_0px_rgba(234,179,8,1)] transition-all"
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
