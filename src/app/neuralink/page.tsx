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
                                 Neuralink&apos;s brain-machine interfaces (BMIs) show promise in restoring function for paralyzed individuals, with early trials allowing users like Noland Arbaugh to control computers and play games using thought alone. It also aims to restore vision through its Blindsight product, which received FDA &quot;breakthrough device designation&quot; in September 2025, potentially transforming lives for those with neurological conditions.
              </p>
              
              <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Current Achievements:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="text-yellow-400 font-epilogue mb-2">Paralysis Treatment:</h5>
                    <ul className="text-white/80 font-satoshi list-disc list-inside space-y-1">
                      <li>Computer cursor control via thought</li>
                      <li>Gaming with mind commands</li>
                      <li>Mouse control using neural signals</li>
                      <li>Restoration of digital autonomy</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-yellow-400 font-epilogue mb-2">Vision Restoration:</h5>
                    <ul className="text-white/80 font-satoshi list-disc list-inside space-y-1">
                      <li>Blindsight product development</li>
                      <li>FDA breakthrough designation</li>
                      <li>Visual cortex stimulation</li>
                      <li>Limited vision restoration potential</li>
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
                Long-term, Neuralink could enable human-AI symbiosis, enhancing cognitive abilities and allowing direct brain-to-brain communication. Current developments include controlling robotic arms, suggesting future possibilities for integrating technology into daily life, though these are still speculative.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Current Capabilities:</h4>
                  <ul className="text-white/80 font-satoshi list-disc list-inside space-y-2">
                    <li>Robotic arm control</li>
                    <li>Thought-to-computer interface</li>
                    <li>Motor cortex signal reading</li>
                    <li>Real-time neural processing</li>
                  </ul>
                </div>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Future Vision:</h4>
                  <ul className="text-white/80 font-satoshi list-disc list-inside space-y-2">
                    <li>Enhanced cognitive abilities</li>
                    <li>Direct brain-to-brain communication</li>
                    <li>Human-AI symbiosis</li>
                    <li>Thought-controlled daily devices</li>
                  </ul>
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
                                 Neuralink&apos;s $9.05 billion valuation in 2025 and competition from companies like Synchron indicate economic growth, but it faces regulatory scrutiny over animal testing, impacting public trust and adoption.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Market Position:</h4>
                  <ul className="text-white/80 font-satoshi list-disc list-inside space-y-2">
                    <li>$9.05 billion valuation (2025)</li>
                    <li>$650 million recent funding</li>
                    <li>Potential $1 trillion future value</li>
                    <li>Growing investor confidence</li>
                  </ul>
                </div>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Regulatory Hurdles:</h4>
                  <ul className="text-white/80 font-satoshi list-disc list-inside space-y-2">
                    <li>SEC investigations</li>
                    <li>Animal testing controversies</li>
                    <li>FDA approval processes</li>
                    <li>Public trust challenges</li>
                  </ul>
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
              Market Competition
            </h3>
            <div className="space-y-6">
              <p className="text-lg text-gray-300">
                Neuralink operates in a competitive market with established players like Synchron, Paradromics, Precision Neuroscience, and BlackRock Neurotech, each bringing unique approaches to brain-machine interface technology.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Key Competitors:</h4>
                  <ul className="text-white/80 font-satoshi list-disc list-inside space-y-2">
                    <li><strong>Synchron:</strong> Stentrode device (10 users)</li>
                    <li><strong>Paradromics:</strong> High-bandwidth interfaces</li>
                    <li><strong>Precision Neuroscience:</strong> Flexible arrays</li>
                    <li><strong>BlackRock Neurotech:</strong> Utah arrays</li>
                  </ul>
                </div>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Market Indicators:</h4>
                  <ul className="text-white/80 font-satoshi list-disc list-inside space-y-2">
                    <li>Growing industry investment</li>
                    <li>Multiple viable approaches</li>
                    <li>Accelerating innovation</li>
                    <li>Expanding application areas</li>
                  </ul>
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
