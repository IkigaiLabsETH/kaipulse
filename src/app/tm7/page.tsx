"use client";

import FavoriteDishes from "@/components/FavoriteDishes";

export default function TM7Page() {
  return (
    <div className="min-h-screen bg-black text-white font-satoshi">
      {/* Premium header accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-8">
            <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">Kitchen Revolution • Smart Cooking • Culinary Excellence</p>
            <h1 className="text-center">
              <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
                Thermomix TM7
              </span>
            </h1>
            <div className="flex items-center justify-center mt-6">
              <div className="h-px w-24 bg-yellow-500/30"></div>
              <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">Next-Generation Kitchen Assistant</p>
              <div className="h-px w-24 bg-yellow-500/30"></div>
            </div>
            
            {/* Featured Visual */}
            <div className="relative w-full mx-auto mt-12 aspect-[16/9] overflow-hidden rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <iframe
                src="https://www.youtube.com/embed/UL-sjI_z8Is"
                title="Thermomix TM7 Overview"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
            </div>
          </div>

          {/* Key Points Overview */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Key Points
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-yellow-500 text-xl">•</span>
                  <p className="text-gray-300">The Thermomix TM7 is a high-end kitchen appliance released in early 2025, with availability starting late 2025.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-500 text-xl">•</span>
                  <p className="text-gray-300">Features a larger 10-inch touchscreen, quieter operation, and new cooking modes like open cooking and sous-vide.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-yellow-500 text-xl">•</span>
                  <p className="text-gray-300">Priced at around €1,549 in Europe and $2,649 in Australia, with long waiting times due to high demand.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-500 text-xl">•</span>
                  <p className="text-gray-300">Ideal for versatile cooking with advanced temperature control and guided recipe integration.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">📱</span>
                <h3 className="text-xl md:text-2xl font-bold text-yellow-500 text-center">
                  Smart Display
                </h3>
              </div>
              <p className="text-center text-lg">
                10-inch Touchscreen Interface
              </p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">🔇</span>
                <h3 className="text-xl md:text-2xl font-bold text-yellow-500 text-center">
                  Quiet Operation
                </h3>
              </div>
              <p className="text-center text-lg">
                Nearly Silent at Low Speeds
              </p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">🌡️</span>
                <h3 className="text-xl md:text-2xl font-bold text-yellow-500 text-center">
                  Precision Control
                </h3>
              </div>
              <p className="text-center text-lg">
                ±1°C Temperature Accuracy
              </p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">📚</span>
                <h3 className="text-xl md:text-2xl font-bold text-yellow-500 text-center">
                  Recipe Library
                </h3>
              </div>
              <p className="text-center text-lg">
                100,000+ Guided Recipes
              </p>
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Technical Specifications
            </h3>
            <div className="space-y-6">
              <p className="text-lg text-gray-300">
                The Thermomix TM7 represents a significant advancement in kitchen technology, featuring enhanced capacity, improved performance, and smart cooking capabilities that set new standards for multifunctional cooking appliances.
              </p>
              
              <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Core Specifications:</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-yellow-400">Mixing Bowl Capacity:</span>
                      <span className="text-white">2.2 liters</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-yellow-400">Varoma Capacity:</span>
                      <span className="text-white">6.8 liters (45% larger)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-yellow-400">Speed Range:</span>
                      <span className="text-white">40 - 10,700 RPM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-yellow-400">Temperature Range:</span>
                      <span className="text-white">Up to 160°C</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-yellow-400">Scale Capacity:</span>
                      <span className="text-white">Up to 3000 grams</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-yellow-400">Display:</span>
                      <span className="text-white">10-inch touchscreen</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-yellow-400">Built-in Recipes:</span>
                      <span className="text-white">917 recipes</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-yellow-400">Cookidoo Access:</span>
                      <span className="text-white">100,000+ recipes</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Design & Performance Features:</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h5 className="text-yellow-400 font-epilogue mb-2">Design:</h5>
                    <ul className="text-white/80 font-satoshi list-disc list-inside space-y-1">
                      <li>Sleek matte black finish</li>
                      <li>Heat insulation for safety</li>
                      <li>No physical dial (fully touch)</li>
                      <li>Dishwasher-safe components</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-yellow-400 font-epilogue mb-2">Performance:</h5>
                    <ul className="text-white/80 font-satoshi list-disc list-inside space-y-1">
                      <li>Very powerful motor</li>
                      <li>Nearly silent at speed 2</li>
                      <li>±1°C temperature accuracy</li>
                      <li>Enhanced steaming capacity</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-yellow-400 font-epilogue mb-2">Accessories:</h5>
                    <ul className="text-white/80 font-satoshi list-disc list-inside space-y-1">
                      <li>Multi-function spatula</li>
                      <li>Steam basket hook</li>
                      <li>All dishwasher-safe parts</li>
                      <li>Enhanced Varoma steamer</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Advanced Cooking Modes */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Advanced Cooking Modes
            </h3>
            <div className="space-y-6">
              <p className="text-lg text-gray-300">
                The TM7 introduces revolutionary cooking modes that expand culinary possibilities beyond traditional multifunctional appliances, offering professional-grade techniques accessible to home cooks.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">New Cooking Techniques:</h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Open Cooking Mode:</h5>
                      <p className="text-white/80 font-satoshi text-sm mb-2">
                        Revolutionary pasta cooking without the lid, allowing for proper stirring and monitoring while maintaining precise temperature control.
                      </p>
                      <ul className="text-white/70 font-satoshi list-disc list-inside space-y-1 text-sm">
                        <li>Perfect pasta texture every time</li>
                        <li>Visual monitoring during cooking</li>
                        <li>Professional stirring techniques</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Sous-Vide Precision:</h5>
                      <p className="text-white/80 font-satoshi text-sm mb-2">
                        Professional sous-vide cooking with precise temperature control for restaurant-quality results at home.
                      </p>
                      <ul className="text-white/70 font-satoshi list-disc list-inside space-y-1 text-sm">
                        <li>Restaurant-quality meat textures</li>
                        <li>Nutrient preservation</li>
                        <li>Consistent results every time</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Comprehensive Programs:</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Basic Functions:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside space-y-1 text-sm">
                        <li>Steaming</li>
                        <li>Dough kneading</li>
                        <li>Rice cooking</li>
                        <li>Slow cooking</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Advanced Modes:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside space-y-1 text-sm">
                        <li>Fermenting</li>
                        <li>Egg cooking</li>
                        <li>Multi-level steaming</li>
                        <li>Precision heating</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Cookidoo® Integration:</h4>
                <div className="space-y-4">
                                     <p className="text-white/80 font-satoshi">
                     The TM7&apos;s integration with Cookidoo® transforms cooking from guesswork to guided precision, offering step-by-step instructions for over 100,000 recipes with automatic settings adjustment.
                   </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Recipe Access:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside space-y-1 text-sm">
                        <li>100,000+ guided recipes</li>
                        <li>917 built-in recipes</li>
                        <li>Weekly menu planning</li>
                        <li>Shopping list generation</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Smart Features:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside space-y-1 text-sm">
                        <li>Automatic setting adjustment</li>
                        <li>Step-by-step guidance</li>
                        <li>Timer coordination</li>
                        <li>Temperature monitoring</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Subscription:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside space-y-1 text-sm">
                        <li>€60/year subscription</li>
                        <li>Regular recipe updates</li>
                        <li>Seasonal collections</li>
                        <li>International cuisines</li>
                      </ul>
                    </div>
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
            <div className="space-y-6">
              <p className="text-lg text-gray-300">
                The Thermomix TM7 launched in early 2025 with premium positioning, reflecting its advanced technology and comprehensive feature set. High demand has created extended delivery times globally.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Regional Pricing:</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-yellow-400 font-epilogue">Europe:</span>
                      <span className="text-2xl font-bold text-white">€1,549</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-yellow-400 font-epilogue">Australia:</span>
                      <span className="text-2xl font-bold text-white">$2,649 AUD</span>
                    </div>
                    <div className="pt-4 border-t border-yellow-500/20">
                      <p className="text-white/80 font-satoshi text-sm">
                        Financing plans available through authorized consultants and direct orders from Vorwerk.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Availability Status:</h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Launch Timeline:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside space-y-1">
                        <li>Announced: February 14, 2025</li>
                        <li>Pre-orders: Currently open</li>
                        <li>Delivery: Late 2025 (Q4)</li>
                        <li>Waiting time: Up to 18 weeks</li>
                      </ul>
                    </div>
                    <div className="bg-yellow-500/10 p-3 rounded border border-yellow-500/20">
                      <p className="text-yellow-400 font-epilogue text-sm font-bold">High Demand Notice:</p>
                      <p className="text-white/80 font-satoshi text-sm">
                        Extended delivery times due to overwhelming global demand and limited initial production capacity.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Purchase Options:</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h5 className="text-yellow-400 font-epilogue mb-2">Direct Sales:</h5>
                    <ul className="text-white/80 font-satoshi list-disc list-inside space-y-1">
                      <li>Vorwerk official website</li>
                      <li>Factory-direct pricing</li>
                      <li>Official warranty coverage</li>
                      <li>Customer support included</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-yellow-400 font-epilogue mb-2">Authorized Consultants:</h5>
                    <ul className="text-white/80 font-satoshi list-disc list-inside space-y-1">
                      <li>Personal demonstrations</li>
                      <li>Customized training</li>
                      <li>Ongoing support</li>
                      <li>Payment plan options</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-yellow-400 font-epilogue mb-2">Financing:</h5>
                    <ul className="text-white/80 font-satoshi list-disc list-inside space-y-1">
                      <li>Monthly payment plans</li>
                      <li>Zero-interest options</li>
                      <li>Trade-in programs</li>
                      <li>Corporate leasing</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* User Experience */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              User Experience
            </h3>
            <div className="space-y-6">
              <p className="text-lg text-gray-300">
                The TM7 delivers exceptional versatility for various cooking tasks, though users should understand both its strengths and limitations for optimal kitchen integration.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Strengths & Excellence:</h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Exceptional Performance:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside space-y-1">
                        <li>Versatile cooking across all major techniques</li>
                        <li>Precise temperature control (±1°C accuracy)</li>
                        <li>Guided cooking for consistent results</li>
                        <li>Powerful motor for intensive tasks</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">User Interface:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside space-y-1">
                        <li>Large 10-inch touchscreen for easy reading</li>
                        <li>Intuitive step-by-step guidance</li>
                        <li>Visual recipe instructions</li>
                        <li>Automatic timer coordination</li>
                      </ul>
                    </div>

                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Convenience Features:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside space-y-1">
                        <li>Nearly silent operation at low speeds</li>
                        <li>Enhanced safety with heat insulation</li>
                        <li>Dishwasher-safe components</li>
                        <li>Compact all-in-one design</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Considerations & Limitations:</h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Performance Limitations:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside space-y-1">
                        <li>Poor roasting performance (potatoes, nuts, bacon)</li>
                        <li>Uneven results with manual browning mode</li>
                                                 <li>Cleaning challenges with &quot;Anbraten&quot; residue</li>
                        <li>Learning curve for optimal usage</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Interface Adjustments:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside space-y-1">
                        <li>No physical dial (fully touch-based)</li>
                        <li>Adjustment period for TM6 users</li>
                        <li>Dependency on screen for all controls</li>
                        <li>Different workflow from traditional cooking</li>
                      </ul>
                    </div>

                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Recipe System:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside space-y-1">
                        <li>Limited portion size variations in Cookidoo</li>
                        <li>Basic allergy/vegan filtering needs improvement</li>
                        <li>Subscription required for full recipe access</li>
                        <li>Internet dependency for guided cooking</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Upgrade Considerations:</h4>
                <div className="space-y-4">
                  <p className="text-white/80 font-satoshi">
                    User feedback shows mixed opinions on upgrading from the TM6, with the decision largely dependent on individual cooking needs and the value placed on new features.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Ideal for New Buyers:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside space-y-1">
                        <li>Comprehensive all-in-one solution</li>
                        <li>Latest technology and features</li>
                        <li>Long-term software support</li>
                        <li>Modern aesthetic and interface</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">TM6 Owner Considerations:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside space-y-1">
                        <li>Incremental rather than revolutionary upgrade</li>
                        <li>TM6 continues to receive 10-year support</li>
                        <li>Aesthetic and minor functional improvements</li>
                        <li>Cost-benefit analysis recommended</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Favorite Dishes */}
          <FavoriteDishes />

          {/* Future Development */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Future Development
            </h3>
            <div className="space-y-6">
              <p className="text-lg text-gray-300">
                Vorwerk has outlined ambitious plans for enhancing the TM7 through software updates and AI integration, positioning it as a long-term investment in kitchen technology.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Planned AI Features:</h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Voice Control Integration:</h5>
                      <p className="text-white/80 font-satoshi text-sm mb-2">
                        Future software updates will introduce hands-free operation through voice commands, allowing cooks to control the TM7 while handling other kitchen tasks.
                      </p>
                      <ul className="text-white/70 font-satoshi list-disc list-inside space-y-1 text-sm">
                        <li>Hands-free recipe navigation</li>
                        <li>Timer and temperature adjustments</li>
                        <li>Cooking mode selection</li>
                        <li>Emergency stop commands</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Smart Cooking AI:</h5>
                      <p className="text-white/80 font-satoshi text-sm mb-2">
                        Advanced AI functions will learn from user preferences and cooking patterns to suggest personalized recipes and optimal cooking parameters.
                      </p>
                      <ul className="text-white/70 font-satoshi list-disc list-inside space-y-1 text-sm">
                        <li>Personalized recipe recommendations</li>
                        <li>Adaptive cooking parameter optimization</li>
                        <li>Ingredient substitution suggestions</li>
                        <li>Cooking pattern analysis</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Long-term Support:</h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Software Updates:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside space-y-1">
                        <li>Regular feature enhancements</li>
                        <li>New cooking mode additions</li>
                        <li>Interface improvements</li>
                        <li>Performance optimizations</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Recipe Ecosystem:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside space-y-1">
                        <li>Continuous Cookidoo expansion</li>
                        <li>Seasonal recipe collections</li>
                        <li>Chef collaboration content</li>
                        <li>International cuisine additions</li>
                      </ul>
                    </div>

                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Technology Roadmap:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside space-y-1">
                        <li>IoT integration possibilities</li>
                        <li>Smart home ecosystem connectivity</li>
                        <li>Advanced sensor integration</li>
                        <li>Machine learning capabilities</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-500/10 p-6 rounded-none border border-yellow-500/20">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Investment Perspective:</h4>
                                 <p className="text-white/80 font-satoshi mb-4">
                   The TM7 represents a long-term investment in kitchen technology, with Vorwerk&apos;s commitment to ongoing development ensuring the appliance will continue to evolve and improve over its operational lifetime.
                 </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h5 className="text-yellow-400 font-epilogue mb-2">Current Value:</h5>
                    <ul className="text-white/80 font-satoshi list-disc list-inside space-y-1 text-sm">
                      <li>Cutting-edge technology</li>
                      <li>Comprehensive feature set</li>
                      <li>Premium build quality</li>
                      <li>Extensive recipe library</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-yellow-400 font-epilogue mb-2">Future Potential:</h5>
                    <ul className="text-white/80 font-satoshi list-disc list-inside space-y-1 text-sm">
                      <li>AI-enhanced capabilities</li>
                      <li>Voice control integration</li>
                      <li>Smart home connectivity</li>
                      <li>Continuous feature additions</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-yellow-400 font-epilogue mb-2">Support Commitment:</h5>
                    <ul className="text-white/80 font-satoshi list-disc list-inside space-y-1 text-sm">
                      <li>Long-term software support</li>
                      <li>Regular update schedule</li>
                      <li>Community-driven development</li>
                      <li>Professional service network</li>
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
