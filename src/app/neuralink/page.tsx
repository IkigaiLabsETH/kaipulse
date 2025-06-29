"use client";

export default function NeuralinkPage() {
  return (
    <div className="min-h-screen bg-black text-white font-satoshi">
      {/* Premium header accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-8">
            <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">Brain-Machine Interface • Medical Revolution • Future of Humanity</p>
            <h1 className="text-center">
              <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
                Neuralink
              </span>
            </h1>
            <div className="flex items-center justify-center mt-6">
              <div className="h-px w-24 bg-yellow-500/30"></div>
              <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">Connecting Minds to Machines</p>
              <div className="h-px w-24 bg-yellow-500/30"></div>
            </div>
            
            {/* Featured Visual */}
            <div className="relative w-full mx-auto mt-12 aspect-[16/9] overflow-hidden rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <iframe
                src="https://www.youtube.com/embed/FASMejN_5gs"
                title="Neuralink Brain-Machine Interface"
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
                  <p className="text-gray-300">Research suggests Neuralink could revolutionize medical treatments for paralysis and blindness.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-500 text-xl">•</span>
                  <p className="text-gray-300">It seems likely that Neuralink may enhance human cognition and AI integration in the long term.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-yellow-500 text-xl">•</span>
                  <p className="text-gray-300">The evidence leans toward significant ethical and privacy concerns with brain implants.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-500 text-xl">•</span>
                  <p className="text-gray-300">There is controversy around animal testing and regulatory scrutiny affecting public trust.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">🏥</span>
                <h3 className="text-xl md:text-2xl font-bold text-yellow-500 text-center">
                  Medical Impact
                </h3>
              </div>
              <p className="text-center text-lg">
                Paralysis & Blindness Treatment
              </p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">🤖</span>
                <h3 className="text-xl md:text-2xl font-bold text-yellow-500 text-center">
                  AI Integration
                </h3>
              </div>
              <p className="text-center text-lg">
                Human-AI Symbiosis
              </p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">⚖️</span>
                <h3 className="text-xl md:text-2xl font-bold text-yellow-500 text-center">
                  Ethical Questions
                </h3>
              </div>
              <p className="text-center text-lg">
                Privacy & Social Impact
              </p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">💰</span>
                <h3 className="text-xl md:text-2xl font-bold text-yellow-500 text-center">
                  Economic Impact
                </h3>
              </div>
              <p className="text-center text-lg">
                $9.05B Valuation
              </p>
            </div>
          </div>

                    {/* Medical Impact Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Medical Impact
            </h3>
            <div className="space-y-6">
              <p className="text-lg text-gray-300">
                Neuralink&apos;s N1 implant, featuring 1,024 ultra-thin electrode threads, has achieved remarkable success in restoring motor function for paralyzed individuals. The first patient, 29-year-old Noland Arbaugh, paralyzed below the shoulders, has regained digital autonomy through thought-controlled interfaces, even playing Civilization VI for hours - an activity he had &quot;basically given up&quot; after his accident.
              </p>
              
              <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Breakthrough Patient Achievements:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="text-yellow-400 font-epilogue mb-2">Noland Arbaugh (First Patient):</h5>
                    <ul className="text-white/80 font-satoshi list-disc list-inside space-y-1">
                      <li>Chess gameplay via thought control</li>
                      <li>Hours of Civilization VI gaming</li>
                      <li>Social media posting with mind</li>
                      <li>Computer cursor precision control</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-yellow-400 font-epilogue mb-2">Second Patient Progress:</h5>
                    <ul className="text-white/80 font-satoshi list-disc list-inside space-y-1">
                      <li>Video game control mastery</li>
                      <li>Computer-aided design (CAD) software</li>
                      <li>3D object creation via thought</li>
                      <li>Advanced digital manipulation</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Vision Restoration - Blindsight Project:</h4>
                <div className="space-y-4">
                  <p className="text-white/80 font-satoshi">
                    Blindsight received FDA &quot;Breakthrough Device&quot; designation in September 2024, designed to bypass damaged optic nerves and stimulate the visual cortex directly. Musk claims it &quot;will enable even those who have lost both eyes and their optic nerve to see&quot; and could potentially allow people blind from birth to gain visual perception.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Capabilities:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside space-y-1">
                        <li>Direct visual cortex stimulation</li>
                        <li>Bypasses damaged optic pathways</li>
                        <li>Potential for congenital blindness treatment</li>
                        <li>Basic sight restoration goals</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Status:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside space-y-1">
                        <li>FDA Breakthrough Device status</li>
                        <li>Accelerated development pathway</li>
                        <li>Human trials pending approval</li>
                        <li>Revolutionary potential for blindness</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Expanding Medical Applications:</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h5 className="text-yellow-400 font-epilogue mb-2">Current Targets:</h5>
                    <ul className="text-white/80 font-satoshi list-disc list-inside space-y-1">
                      <li>Spinal cord injuries</li>
                      <li>ALS patients</li>
                      <li>Severe paralysis cases</li>
                      <li>Speech impairment restoration</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-yellow-400 font-epilogue mb-2">Future Conditions:</h5>
                    <ul className="text-white/80 font-satoshi list-disc list-inside space-y-1">
                      <li>Depression treatment</li>
                      <li>Schizophrenia management</li>
                      <li>Autism spectrum support</li>
                      <li>Obesity intervention</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-yellow-400 font-epilogue mb-2">Active Studies:</h5>
                    <ul className="text-white/80 font-satoshi list-disc list-inside space-y-1">
                      <li>PRIME Study (motor function)</li>
                      <li>Convoy Study (robotic arms)</li>
                      <li>Communication restoration</li>
                      <li>International trial expansion</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technological Enhancement Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Technological and Human Enhancement
            </h3>
            <div className="space-y-6">
              <p className="text-lg text-gray-300">
                The N1 implant represents a quantum leap in brain-computer interface technology, featuring 1,024 ultra-thin electrode threads finer than human hair, implanted by a precision R1 robotic surgeon. This wireless, battery-powered device advances beyond earlier BCIs like the Utah Array with its 100 electrodes and wired connections, offering unprecedented resolution and bandwidth.
              </p>
              
              <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">N1 Implant Technical Specifications:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="text-yellow-400 font-epilogue mb-2">Hardware:</h5>
                    <ul className="text-white/80 font-satoshi list-disc list-inside space-y-1">
                      <li>1,024 ultra-thin electrode threads</li>
                      <li>Coin-sized chip in skull</li>
                      <li>Wireless, battery-powered operation</li>
                      <li>Real-time neural signal processing</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-yellow-400 font-epilogue mb-2">R1 Surgical Robot:</h5>
                    <ul className="text-white/80 font-satoshi list-disc list-inside space-y-1">
                      <li>Precision thread insertion</li>
                      <li>~1 hour automated procedure</li>
                      <li>&quot;One-click&quot; surgery vision</li>
                      <li>Minimally invasive approach</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Current Capabilities:</h4>
                  <ul className="text-white/80 font-satoshi list-disc list-inside space-y-2">
                    <li>Decoding intended hand movements</li>
                    <li>Real-time cursor control</li>
                    <li>Complex gaming interfaces</li>
                    <li>CAD software manipulation</li>
                    <li>Social media interaction</li>
                    <li>Robotic arm control (Convoy Study)</li>
                  </ul>
                </div>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Transhumanist Vision:</h4>
                  <ul className="text-white/80 font-satoshi list-disc list-inside space-y-2">
                    <li>Human-AI symbiosis achievement</li>
                    <li>&quot;Universal language&quot; brain-to-brain</li>
                    <li>Memory upload/download capability</li>
                    <li>&quot;Digital layer above cortex&quot;</li>
                    <li>Enhanced cognitive abilities</li>
                    <li>New sensory experiences</li>
                  </ul>
                </div>
              </div>

              <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Technical Challenges and Limitations:</h4>
                <div className="space-y-4">
                  <p className="text-white/80 font-satoshi">
                    Despite remarkable progress, significant challenges remain. Thread retraction due to brain movement has been observed, with some patients experiencing signal loss as electrode threads pull out of target areas. Neuralink has addressed this through software filtering and hardware improvements.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Stability Issues:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside space-y-1">
                        <li>Thread retraction over time</li>
                        <li>Brain movement effects</li>
                        <li>Signal degradation risks</li>
                        <li>Long-term biocompatibility</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Technical Barriers:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside space-y-1">
                        <li>Neural code understanding</li>
                        <li>Bidirectional communication</li>
                        <li>Complex information encoding</li>
                        <li>Device longevity goals</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Development Focus:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside space-y-1">
                        <li>Thinner, more pliable threads</li>
                        <li>Improved tissue integration</li>
                        <li>Higher bandwidth capacity</li>
                        <li>Extended battery life</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Ethical and Societal Implications */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Ethical and Societal Implications
            </h3>
            <div className="space-y-6">
              <p className="text-lg text-gray-300">
                The technology raises ethical questions about privacy, as it could access thoughts, and risks creating social inequalities if not universally accessible. Public opinion is mixed, with excitement for its potential and concerns about its impact on human identity.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Privacy Concerns:</h4>
                  <ul className="text-white/80 font-satoshi list-disc list-inside space-y-2">
                    <li>Potential access to thoughts and beliefs</li>
                    <li>Data security and protection</li>
                    <li>Unbiased interpretation challenges</li>
                    <li>Mental privacy rights</li>
                  </ul>
                </div>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Social Impact:</h4>
                  <ul className="text-white/80 font-satoshi list-disc list-inside space-y-2">
                    <li>Potential wealth-based access divide</li>
                    <li>Impact on human uniqueness</li>
                    <li>Creation of enhanced vs. natural humans</li>
                    <li>Societal adaptation challenges</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

                    {/* Economic and Regulatory Challenges */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Economic and Regulatory Challenges
            </h3>
            <div className="space-y-6">
              <p className="text-lg text-gray-300">
                Neuralink&apos;s rapid financial growth, reaching a $9.05 billion valuation through its 2025 Series E round, demonstrates enormous market confidence. However, the company faces significant regulatory scrutiny, particularly over animal testing practices that have resulted in federal investigations and public trust challenges.
              </p>
              
              <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Funding Trajectory and Investment:</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h5 className="text-yellow-400 font-epilogue mb-2">2025 Series E:</h5>
                    <ul className="text-white/80 font-satoshi list-disc list-inside space-y-1">
                      <li>$650 million raised</li>
                      <li>$9.05 billion valuation</li>
                      <li>Led by Founders Fund</li>
                      <li>Total funding exceeds $1B</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-yellow-400 font-epilogue mb-2">Previous Rounds:</h5>
                    <ul className="text-white/80 font-satoshi list-disc list-inside space-y-1">
                      <li>2021: $205 million</li>
                      <li>2023: $325 million</li>
                      <li>Valuation doubled since 2023</li>
                      <li>Sequential growth trajectory</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-yellow-400 font-epilogue mb-2">Investor Base:</h5>
                    <ul className="text-white/80 font-satoshi list-disc list-inside space-y-1">
                      <li>Founders Fund (Peter Thiel)</li>
                      <li>Sequoia Capital</li>
                      <li>High-profile tech investors</li>
                      <li>Speculation of $1T potential</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Animal Testing Controversies:</h4>
                <div className="space-y-4">
                  <p className="text-white/80 font-satoshi">
                    Federal investigations revealed that 15 of 23 monkeys with Neuralink brain chips at UC Davis (2017-2020) died or were euthanized during experiments. The Physicians Committee for Responsible Medicine filed complaints alleging &quot;extreme suffering&quot; from crude surgeries, infections, and harmful use of BioGlue that allegedly destroyed parts of monkeys&apos; brains.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Regulatory Response:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside space-y-1">
                        <li>USDA Inspector General probe</li>
                        <li>Animal Welfare Act violations</li>
                        <li>Federal investigation ongoing</li>
                        <li>FDA documentation audits</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Company Response:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside space-y-1">
                        <li>Musk denies implant-related deaths</li>
                        <li>Claims animals were terminally ill</li>
                        <li>Built dedicated testing facility</li>
                        <li>Refined surgical protocols</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">FDA Regulatory Process:</h4>
                  <ul className="text-white/80 font-satoshi list-disc list-inside space-y-2">
                    <li>Initial 2022 application rejected</li>
                    <li>May 2023: First approval granted</li>
                    <li>Safety concerns addressed iteratively</li>
                    <li>Ongoing trial monitoring</li>
                    <li>Future PMA process required</li>
                    <li>Separate approvals per application</li>
                  </ul>
                </div>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Additional Scrutiny:</h4>
                  <ul className="text-white/80 font-satoshi list-disc list-inside space-y-2">
                    <li>SEC investigation requests</li>
                    <li>Potential investor misleading claims</li>
                    <li>Public trust challenges</li>
                    <li>Media scrutiny intensification</li>
                    <li>International regulatory expansion</li>
                    <li>Peer review publication needs</li>
                  </ul>
                </div>
              </div>

              <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">International Expansion and Manufacturing:</h4>
                <div className="space-y-4">
                  <p className="text-white/80 font-satoshi">
                    Neuralink is expanding globally with trials approved in Canada and the Middle East, including partnerships with Cleveland Clinic Abu Dhabi and Toronto hospitals. The company is building a large manufacturing facility in Texas to prepare for mass production of both implants and surgical robots.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Global Reach:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside space-y-1">
                        <li>Canadian trial approvals</li>
                        <li>Middle East partnerships</li>
                        <li>Multi-country regulatory collaboration</li>
                        <li>International research networks</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Production Scaling:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside space-y-1">
                        <li>Texas manufacturing facility</li>
                        <li>Mass production preparation</li>
                        <li>Surgical robot manufacturing</li>
                        <li>Supply chain development</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Current Progress Timeline */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Development Timeline
            </h3>
            <div className="space-y-8">
              {/* 2024 - First Human Trials */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">2024 - First Human Trials Begin</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    January 2024 marked the beginning of human trials, with Noland Arbaugh becoming the first human recipient. The successful demonstration of thought-controlled computer interaction represents a major milestone in brain-machine interface technology.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Achievements:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside">
                        <li>First human implant success</li>
                        <li>Computer cursor control</li>
                        <li>Gaming via thought</li>
                        <li>Real-time neural processing</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Patient Count:</h5>
                      <p className="text-white/80 font-satoshi">3 patients by early 2025</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2025 - Expansion and Breakthroughs */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">2025 - Expansion and Breakthroughs</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                                         2025 brings significant expansion with Blindsight receiving FDA breakthrough designation and trials expanding to Canada. The company targets 20-30 patients by year&apos;s end, representing substantial scaling of operations.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Milestones:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside">
                        <li>FDA Blindsight breakthrough status</li>
                        <li>Canada trial expansion</li>
                        <li>Robotic arm control tests</li>
                        <li>Next-gen implant development</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Targets:</h5>
                      <p className="text-white/80 font-satoshi">20-30 patients by end of 2025</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Future Projections */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Future Projections</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                                         Elon Musk&apos;s ambitious projections suggest hundreds of patients within a few years, tens of thousands in five years, and millions in ten years, representing a potential paradigm shift in medical technology.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Short-term (2-3 years):</h5>
                      <p className="text-white/80 font-satoshi">Hundreds of patients</p>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Medium-term (5 years):</h5>
                      <p className="text-white/80 font-satoshi">Tens of thousands</p>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Long-term (10 years):</h5>
                      <p className="text-white/80 font-satoshi">Millions of patients</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Competition and Market */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Market Competition and Industry Landscape
            </h3>
            <div className="space-y-6">
              <p className="text-lg text-gray-300">
                While Neuralink commands the spotlight, it faces sophisticated competition in the rapidly expanding neurotechnology sector. Each competitor brings distinct advantages: from Synchron&apos;s less invasive approach to BlackRock Neurotech&apos;s established Utah Array technology. The race is intensifying to achieve the first FDA-approved commercial brain-computer interface.
              </p>
              
              <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Competitive Landscape Analysis:</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="text-yellow-400 font-epilogue mb-3">Synchron Inc. - The Safety Leader</h5>
                    <ul className="text-white/80 font-satoshi list-disc list-inside space-y-1 mb-4">
                      <li><strong>Stentrode device:</strong> 5-10 patients tested</li>
                      <li><strong>Approach:</strong> Blood vessel insertion (no brain surgery)</li>
                      <li><strong>Advantage:</strong> Less invasive, potentially faster to market</li>
                      <li><strong>Status:</strong> FDA trial approved, academic partnerships</li>
                    </ul>
                    
                    <h5 className="text-yellow-400 font-epilogue mb-3">BlackRock Neurotech - The Veteran</h5>
                    <ul className="text-white/80 font-satoshi list-disc list-inside space-y-1">
                      <li><strong>Technology:</strong> Utah Array electrodes</li>
                      <li><strong>Experience:</strong> Decades of academic research</li>
                      <li><strong>Market position:</strong> Established in research sector</li>
                      <li><strong>Focus:</strong> Proven electrode technology refinement</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-yellow-400 font-epilogue mb-3">Precision Neuroscience - The Insider</h5>
                    <ul className="text-white/80 font-satoshi list-disc list-inside space-y-1 mb-4">
                      <li><strong>Founded by:</strong> Former Neuralink co-founder</li>
                      <li><strong>Technology:</strong> Flexible electrode arrays</li>
                      <li><strong>Approach:</strong> Thin-film technology</li>
                      <li><strong>Strategy:</strong> Less invasive than Neuralink</li>
                    </ul>
                    
                    <h5 className="text-yellow-400 font-epilogue mb-3">Paradromics - The High Bandwidth</h5>
                    <ul className="text-white/80 font-satoshi list-disc list-inside space-y-1">
                      <li><strong>Focus:</strong> High-bandwidth data interfaces</li>
                      <li><strong>Innovation:</strong> Advanced signal processing</li>
                      <li><strong>Target:</strong> Communication restoration</li>
                      <li><strong>Funding:</strong> Significant venture backing</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Neuralink&apos;s Competitive Advantages:</h4>
                  <ul className="text-white/80 font-satoshi list-disc list-inside space-y-2">
                    <li><strong>Engineering firepower:</strong> Integrated approach</li>
                    <li><strong>Capital resources:</strong> &gt;$1B funding raised</li>
                    <li><strong>Talent attraction:</strong> Musk&apos;s magnetic effect</li>
                    <li><strong>R1 surgical robot:</strong> Automated implantation</li>
                    <li><strong>Vertical integration:</strong> Hardware + software + robot</li>
                    <li><strong>Media attention:</strong> High visibility driving innovation</li>
                  </ul>
                </div>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Industry Growth Indicators:</h4>
                  <ul className="text-white/80 font-satoshi list-disc list-inside space-y-2">
                    <li><strong>Investment surge:</strong> Multi-billion dollar valuations</li>
                    <li><strong>Academic acceleration:</strong> Increased neuroscience funding</li>
                    <li><strong>Startup emergence:</strong> New BCI companies launching</li>
                    <li><strong>Regulatory evolution:</strong> FDA pathway development</li>
                    <li><strong>Market diversity:</strong> Multiple viable approaches</li>
                    <li><strong>Future sectors:</strong> Gaming, communication, enhancement</li>
                  </ul>
                </div>
              </div>

              <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">The Path to Market Leadership:</h4>
                <div className="space-y-4">
                  <p className="text-white/80 font-satoshi">
                    The race to achieve the first FDA-approved commercial BCI device will likely determine market leadership. While Neuralink has the highest profile and funding, competitors like Synchron may reach market faster due to their less invasive approach. The winner will likely capture significant first-mover advantages in what could become a multi-billion dollar industry.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Market Opportunity:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside space-y-1">
                        <li>Medical device market entry</li>
                        <li>Consumer enhancement potential</li>
                        <li>Enterprise productivity tools</li>
                        <li>Gaming and entertainment</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Economic Ecosystem:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside space-y-1">
                        <li>Device manufacturing</li>
                        <li>Software platforms</li>
                        <li>Clinical services</li>
                        <li>Data analytics</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Success Factors:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside space-y-1">
                        <li>Safety demonstration</li>
                        <li>Regulatory approval speed</li>
                        <li>Manufacturing scalability</li>
                        <li>Cost accessibility</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Broader Societal Impact */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Broader Societal Impact
            </h3>
            <div className="space-y-6">
              <p className="text-lg text-gray-300">
                If Neuralink achieves its vision, the fundamental nature of human communication, work, and daily life could be transformed. From &quot;telepathic&quot; phone calls to thought-controlled environments, we may be witnessing the early stages of humanity&apos;s next evolutionary leap - or facing unprecedented challenges to privacy, identity, and social equity.
              </p>
              
              <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Transforming Daily Life:</h4>
                <div className="space-y-4">
                  <p className="text-white/80 font-satoshi">
                    Brain-to-brain communication via Musk&apos;s envisioned &quot;universal language&quot; could revolutionize human interaction by transmitting concepts directly, bypassing spoken language entirely. Hands-free control of computers, smart homes, and vehicles through thought alone could increase productivity and create entirely new forms of human-machine interaction.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Communication Revolution:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside space-y-1">
                        <li>Direct thought transmission</li>
                        <li>&quot;Telepathic&quot; phone calls</li>
                        <li>Universal language concept</li>
                        <li>Barrier-free global communication</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Seamless Integration:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside space-y-1">
                        <li>Thought-controlled smart homes</li>
                        <li>Mental web browsing</li>
                        <li>AR/VR mind interfaces</li>
                        <li>Autonomous vehicle control</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Creative Applications:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside space-y-1">
                        <li>Emotion-responsive gaming</li>
                        <li>Mind-to-canvas art creation</li>
                        <li>Immersive thought entertainment</li>
                        <li>Enhanced creative expression</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Ethical Use vs. Misuse:</h4>
                  <div className="space-y-3">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Positive Potential:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside space-y-1">
                        <li>Global understanding through translation</li>
                        <li>Enhanced communication for disabled</li>
                        <li>Accelerated learning and education</li>
                        <li>Breakthrough scientific collaboration</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Risk Scenarios:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside space-y-1">
                        <li>Authoritarian thought surveillance</li>
                        <li>&quot;Brain hacking&quot; cybersecurity threats</li>
                        <li>Thought evidence in legal systems</li>
                        <li>Mental manipulation possibilities</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Public Perception Data:</h4>
                  <div className="space-y-3">
                    <div className="bg-yellow-500/10 p-3 rounded border border-yellow-500/20">
                      <p className="text-yellow-400 font-semibold mb-1">2021 Pew Research Survey:</p>
                      <ul className="text-white/80 font-satoshi text-sm list-disc list-inside space-y-1">
                        <li>56% think brain chips would be bad for society</li>
                        <li>Only 13% view them positively</li>
                        <li>31% remain uncertain</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Key Concerns:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside space-y-1">
                        <li>Privacy and hacking fears</li>
                        <li>&quot;Unnatural&quot; human-machine merger</li>
                        <li>Loss of human uniqueness</li>
                        <li>Musk polarization effect</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Human Evolution and Cultural Impact:</h4>
                <div className="space-y-4">
                  <p className="text-white/80 font-satoshi">
                    Neuralink represents a potential inflection point in human evolution - the transition to a cyborg era where merging with machines becomes the next evolutionary step. This raises profound questions about the nature of humanity, consciousness, and our collective future.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Transhumanist Perspective:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside space-y-1">
                        <li>Enhanced human potential realization</li>
                        <li>AI-human competitive parity</li>
                        <li>Expanded intelligence capabilities</li>
                        <li>Next stage of human evolution</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Cultural Concerns:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside space-y-1">
                        <li>Loss of human imperfection value</li>
                        <li>Religious/philosophical objections</li>
                        <li>Enhanced vs. natural human divide</li>
                        <li>Cultural diversity erosion risks</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 p-4 bg-yellow-500/10 rounded border border-yellow-500/20">
                    <p className="text-white/80 font-satoshi italic">
                      &quot;The brain-computer connection is already here... advances will remain boundless as long as we keep questioning and discovering. Society&apos;s role is to stay engaged with these developments, demanding that they align with our values.&quot;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Summary and Future Outlook */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Summary and Future Outlook
            </h3>
            <div className="space-y-6">
              <p className="text-lg text-gray-300">
                Neuralink represents a convergence of neuroscience, engineering, and artificial intelligence that could fundamentally alter how humans interact with technology and each other. While the medical applications show immediate promise, the broader implications for human enhancement and AI integration remain both exciting and concerning.
              </p>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-yellow-500/20">
                  <thead>
                    <tr className="bg-yellow-500/10">
                      <th className="border border-yellow-500/20 p-4 text-left text-yellow-500">Aspect</th>
                      <th className="border border-yellow-500/20 p-4 text-left text-yellow-500">Details</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr>
                      <td className="border border-yellow-500/20 p-4 font-semibold">Medical Advancements</td>
                      <td className="border border-yellow-500/20 p-4">Restores function for paralysis, blindness (Blindsight), potential for depression treatment.</td>
                    </tr>
                    <tr>
                      <td className="border border-yellow-500/20 p-4 font-semibold">Technological Enhancement</td>
                      <td className="border border-yellow-500/20 p-4">Aims for human-AI symbiosis, cognitive enhancement, thought-controlled devices.</td>
                    </tr>
                    <tr>
                      <td className="border border-yellow-500/20 p-4 font-semibold">Ethical Concerns</td>
                      <td className="border border-yellow-500/20 p-4">Privacy risks, social inequality, impact on human uniqueness.</td>
                    </tr>
                    <tr>
                      <td className="border border-yellow-500/20 p-4 font-semibold">Economic Impact</td>
                      <td className="border border-yellow-500/20 p-4">$9.05B valuation, competitive market, potential for new industries.</td>
                    </tr>
                    <tr>
                      <td className="border border-yellow-500/20 p-4 font-semibold">Regulatory Challenges</td>
                      <td className="border border-yellow-500/20 p-4">Faces scrutiny over animal testing, technical issues like implant stability.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="mt-8 p-6 bg-yellow-500/10 rounded-none border border-yellow-500/30">
                <h4 className="text-xl font-bold text-yellow-500 mb-3">The Path Forward</h4>
                <p className="text-white/80 font-satoshi">
                                     As Neuralink continues to advance, the technology&apos;s potential to reshape medicine, technology, and society becomes increasingly apparent. The success of current trials and the expansion of applications suggest we are witnessing the early stages of a technological revolution that could define the next chapter of human evolution. However, realizing this vision will require careful navigation of ethical, regulatory, and technical challenges to ensure the benefits are accessible and the risks are manageable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
