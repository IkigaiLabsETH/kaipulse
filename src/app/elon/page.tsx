"use client";

export default function ElonPage() {
  return (
    <div className="min-h-screen bg-black text-white font-satoshi">
      {/* Premium header accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-8">
            <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">Social Media • Tech • Politics</p>
            <h1 className="text-center">
              <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
                Billionaire Showdown
              </span>
            </h1>
            <div className="flex items-center justify-center mt-6">
              <div className="h-px w-24 bg-yellow-500/30"></div>
              <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">When One User Brokered Peace Between Elon & Trump</p>
              <div className="h-px w-24 bg-yellow-500/30"></div>
            </div>
          </div>

          {/* Story Overview Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              The Story
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                &ldquo;Elon Musk replied to me. Somehow, I became the accidental peace broker between two billionaires.&rdquo;
                That&apos;s how it started. A casual tweet by an account named Alaska found itself caught in the middle of one of the wildest episodes in the cultural history of Elon Musk&apos;s X.
              </p>
              <div className="mt-6">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Key Moments:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>Trump&apos;s bombshell post on Truth Social</li>
                  <li>Musk&apos;s dramatic response about Dragon spacecraft</li>
                  <li>Alaska&apos;s unexpected peace-brokering tweet</li>
                  <li>The surprising resolution</li>
                  <li>The aftermath and implications</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">🚀</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Space Policy
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                Dragon Spacecraft Drama
              </p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">💬</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Social Media
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                Platform Power Play
              </p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">🤝</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Peace Brokering
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                Unexpected Resolution
              </p>
            </div>
          </div>

          {/* Story Timeline */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              The Timeline
            </h3>
            <div className="space-y-8">
              {/* The Spark */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">The Spark</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    Donald Trump posted a bombshell on Truth Social (cross-posted on X), suggesting that canceling Elon Musk&apos;s government contracts would save the country &ldquo;billions and billions.&rdquo; He called out the SpaceX CEO by name, suggesting subsidies and defense deals should be cut. Musk, never one to let a public shot go unanswered, responded just hours later.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Key Quote:</h5>
                      <p className="text-white/80 font-satoshi italic">
                        &ldquo;In light of the President&apos;s statement... @SpaceX will begin decommissioning its Dragon spacecraft immediately.&rdquo;
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* The Peace Broker */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Enter: Alaska</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    In a rare moment of clarity in an increasingly chaotic timeline, a small but thoughtful voice tweeted: &ldquo;This is a shame this back and forth. You are both better than this. Cool off and take a step back for a couple days.&rdquo;
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">The Response:</h5>
                      <p className="text-white/80 font-satoshi italic">
                        &ldquo;Good advice. Ok, we won&apos;t decommission Dragon.&rdquo;
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* The Bigger Picture */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">The Bigger Picture</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    This wasn&apos;t just about two men lobbing barbs in public. It was about the weight of power wielded through platforms. It was about the blurred lines between state and private enterprise, the emotional toll of being at the center of the culture war, and the unraveling of trust between disruptive innovators and the political class.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Key Implications:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside">
                        <li>Platform power dynamics</li>
                        <li>State-private enterprise relations</li>
                        <li>Culture war impact</li>
                        <li>Innovation vs. regulation</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Epilogue */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Epilogue: Internet, You Win</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    In a follow-up tweet, Alaska summed it up best: &ldquo;I didn&apos;t plan this, I was just being me. Life&apos;s weird. The internet&apos;s weirder. Let&apos;s ride. 🚀✨ (Manifesting peace... and maybe a Model Y.)&rdquo;
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">The Lesson:</h5>
                      <p className="text-white/80 font-satoshi">
                        That moment mattered. Not because it resolved all the tension, but because it reminded us that platforms still carry human weight. That influence isn&apos;t about how many rockets you launch or elections you shake—it&apos;s about how you wield that weight when the eyes of the world are on you.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Chapter Two Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Chapter Two: The World Without Elon
            </h3>
            <div className="space-y-8">
              {/* Introduction */}
              <div className="space-y-4">
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    Let&apos;s imagine for a moment that the tweet wasn&apos;t walked back.
                    That SpaceX really did begin decommissioning Dragon.
                    That Musk, fed up with politics, pulled the plug—not just on a spacecraft, but on the vision that launched a thousand innovations.
                  </p>
                  <p className="text-white/80 font-satoshi mb-4">
                    What kind of world would we be living in?
                  </p>
                </div>
              </div>

              {/* Space Race */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">🚀 No SpaceX, No Space Race 2.0</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    Without SpaceX, we&apos;d still be hitching rides on Russian Soyuz capsules at $90 million a seat. There&apos;s no reusable rocket program forcing efficiency into NASA. No Starship to dream about Mars. No Falcon Heavy launches where Tesla Roadsters float toward the asteroid belt like a cosmic middle finger to stagnation.
                  </p>
                  <p className="text-white/80 font-satoshi">
                    The U.S. space program would have calcified into bureaucracy. China would&apos;ve become the unquestioned space superpower.
                    And astronauts?
                    Still sitting in Florida. Still waiting on Boeing.
                  </p>
                </div>
              </div>

              {/* Starlink */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">📡 No Starlink = No Global Internet Lifeline</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    Without Starlink, entire swaths of Earth would remain digitally orphaned. Remote villages, disaster zones, war reporters in blackout regions—left without connectivity. Starlink became more than a product; it was infrastructure in places the state ignored.
                  </p>
                  <p className="text-white/80 font-satoshi">
                    In Ukraine, Starlink wasn&apos;t just signal—it was sovereignty.
                  </p>
                </div>
              </div>

              {/* AI and Robotics */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">🤖 No Neuralink, No Optimus, No Robo-Taxis</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    Imagine AI with no one crazy enough to merge it with your brain.
                    No controversial experiments, sure. But also no radical acceleration of brain-machine interfaces. No promises of giving speech back to the voiceless or mobility to the paralyzed.
                  </p>
                  <p className="text-white/80 font-satoshi">
                    No Tesla robo-taxis either—because without Elon, no one would have been arrogant enough to think they could solve full self-driving. And the ones who tried?
                    They sold out to ride-share giants before they ever hit autonomy.
                  </p>
                  <p className="text-white/80 font-satoshi mt-4">
                    The robot revolution would still be a sci-fi concept gathering dust in DARPA labs.
                  </p>
                </div>
              </div>

              {/* Social Media */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">💬 No X = No Free Speech Battlefield</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    Without Musk buying Twitter (now X), the platform would&apos;ve leaned into tighter speech controls, algorithmic suppression, and censorship-by-consensus. Love him or loathe him, Musk transformed X into a battleground of ideas. Messy, often hostile—but real.
                  </p>
                  <p className="text-white/80 font-satoshi">
                    A world without X-as-we-know-it is a world where dissent is curated, not tolerated.
                    Where jokes need context warnings.
                    Where culture becomes beige.
                  </p>
                </div>
              </div>

              {/* Medical Innovation */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">🧬 No Medical Moonshots</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    No one talks about it enough—but Elon&apos;s fingerprints are all over the next-gen medtech arms race. Neuralink. SpaceX&apos;s zero-G biolabs. Tesla&apos;s bio-defense HVAC systems. AI-powered diagnostics in Dojo-like training loops.
                  </p>
                  <p className="text-white/80 font-satoshi">
                    Without that fusion of tech and health?
                    We&apos;re still filling out paper forms in waiting rooms.
                    Still stuck in the insurance-industrial complex.
                  </p>
                </div>
              </div>

              {/* Conclusion */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">🌍 No Voice for the Unreasonable</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    Because really, that&apos;s what this all comes down to. Elon represents the unreasonable man—the kind the world laughs at until he rewires it.
                  </p>
                  <p className="text-white/80 font-satoshi mb-4">
                    If Elon had given up during that tweetstorm—really given up—we wouldn&apos;t just lose one man&apos;s projects. We&apos;d lose momentum.
                    We&apos;d lose the idea that an individual can go from meme to mission-critical… and drag the future forward while everyone&apos;s still debating feasibility studies.
                  </p>
                  <div className="mt-6 pt-6 border-t border-yellow-500/20">
                    <p className="text-white/80 font-satoshi italic">
                      So no, this wasn&apos;t just a tweet fight.
                      It was a window into what the world could look like if the visionaries log off for good.
                      If politics and cynicism drown out velocity.
                      If the Dragon is decommissioned, in more ways than one.
                    </p>
                    <p className="text-white/80 font-satoshi mt-4 italic">
                      The storm has passed—for now. But what would it take for that tweet to be real next time?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Chapter Three Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Chapter Three: The Muskian Age (2040)
            </h3>
            <div className="space-y-8">
              {/* Introduction */}
              <div className="space-y-4">
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    The year is 2040.
                  </p>
                  <p className="text-white/80 font-satoshi mb-4">
                    Elon didn&apos;t log off.
                    He leaned in.
                  </p>
                  <p className="text-white/80 font-satoshi">
                    What began as a flame war in 2025 now reads like the opening scene of a cultural shift—a moment when the people, disillusioned with gridlock and decay, chose a builder over a bureaucrat. Not a president. Not a prime minister. A technoking.
                  </p>
                </div>
              </div>

              {/* Earth Section */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">🌍 Earth Is Still Here—But It&apos;s Run on Open Source</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    After a cascade of economic crashes, failed central bank pivots, and political scandals, nation-states hollowed out.
                    What filled the void?
                    A new operating system for civilization.
                  </p>
                  <p className="text-white/80 font-satoshi mb-4">
                    Elon didn&apos;t campaign.
                    He launched.
                  </p>
                  <p className="text-white/80 font-satoshi">
                    Citizens, tired of waiting, subscribed to Project Renaissance: a voluntary opt-in network of autonomous cities powered by solar, Bitcoin, and memes.
                    Think: Singapore meets Burning Man meets Starbase.
                  </p>
                </div>
              </div>

              {/* Bitcoin Section */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">💸 Bitcoin Is the Reserve Asset of Earth</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    The dollar? Gone.
                    CBDCs? Rejected by the people after a mass privacy revolt in the late 2020s.
                  </p>
                  <p className="text-white/80 font-satoshi">
                    Instead, Bitcoin became the backbone of the new economy.
                    Energy-backed. Borderless. Censorship-proof.
                    It&apos;s how city-zones trade, how Martian settlements sync with Earth, and how kids learn about math—in hashes, not homework.
                  </p>
                </div>
              </div>

              {/* Doge Section */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">🐶 Doge Is the Official Culture</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    Every civilization needs a myth.
                    Rome had Mars.
                    America had the eagle.
                    The Muskian Age has Doge.
                  </p>
                  <p className="text-white/80 font-satoshi mb-4">
                    At first it was a meme. Then a payment layer. Then a cultural fabric.
                  </p>
                  <p className="text-white/80 font-satoshi">
                    Doge isn&apos;t just money anymore—it&apos;s mood, movement, and media.
                    It&apos;s how people tip artists, share truth, and vote in decentralized courts.
                    Shibes run schools.
                    Doge temples exist.
                    Children are named &ldquo;Wow,&rdquo; &ldquo;Much,&rdquo; and &ldquo;Luna.&rdquo;
                  </p>
                </div>
              </div>

              {/* Mars Section */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">🚀 Mars Is Habitable—Barely</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    On Sol 93, Year 4, the first child was born on Mars.
                    Not in a lab, not as an experiment—but under the flag of Humankind 2.0, the Musk Foundation&apos;s Martian charter.
                  </p>
                  <p className="text-white/80 font-satoshi mb-4">
                    It&apos;s not a utopia.
                    You train 16 hours a day.
                    You grow your own food.
                    You&apos;re not allowed to post unless you&apos;ve added 5 kWh to the solar grid.
                  </p>
                  <p className="text-white/80 font-satoshi">
                    But it&apos;s the most purpose-driven community in human history.
                    No passports. No politicians.
                    Just builders, dreamers, and the children of Earth looking at stars from below.
                  </p>
                </div>
              </div>

              {/* AI Section */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">🧠 AI, Synced with Human Intention</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    Neuralink isn&apos;t optional—it&apos;s normal.
                    Millions have opted into the mesh: a real-time, low-latency cognitive protocol that allows knowledge transfer, creative bursts, even emotion-mirroring.
                  </p>
                  <p className="text-white/80 font-satoshi mb-4">
                    Mental illness? Diagnosed and regulated by open-source LLM therapists.
                    Education? Delivered in hyper-personalized, AI-generated narratives.
                    Truth? Scored by decentralized timestamping across Starlink&apos;s quantum-proof mesh.
                  </p>
                  <p className="text-white/80 font-satoshi">
                    The mind isn&apos;t private—but it is sovereign.
                  </p>
                </div>
              </div>

              {/* Governance Section */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">⚖️ Memetic Governance</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    Every Monday, the system votes on what matters through memes.
                    Legislation is compressed into 60-second videos.
                    Ideas compete not in backrooms, but in virality.
                    The meme is the message—and it&apos;s how society iterates.
                  </p>
                  <p className="text-white/80 font-satoshi mb-4">
                    One week: terraform this crater.
                    Next week: ban synthetic meat.
                    Next week: bring grimes back.
                  </p>
                  <p className="text-white/80 font-satoshi">
                    It&apos;s absurd.
                    It&apos;s democratic.
                    It works.
                  </p>
                </div>
              </div>

              {/* Conclusion */}
              <div className="space-y-4">
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    They called him mad in 2025.
                    By 2040, they call him Architect.
                  </p>
                  <div className="mt-6 pt-6 border-t border-yellow-500/20">
                    <p className="text-white/80 font-satoshi italic">
                      And somewhere in the archives, buried deep in a Martian datavault, Alaska&apos;s tweet still sits.
                      Proof that even peace can go viral.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Chapter Four Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Chapter Four: Born Red
            </h3>
            <div className="space-y-8">
              {/* Introduction */}
              <div className="space-y-4">
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    My name is Solara. I was born on Mars.
                    Not on Earth and launched here. Not in transit.
                    I was born beneath Olympus Habitat, Sol 93, Year 4—Martian reckoning.
                  </p>
                  <p className="text-white/80 font-satoshi">
                    They say we&apos;re the first generation without roots.
                    But they&apos;re wrong.
                    Our roots are red.
                  </p>
                </div>
              </div>

              {/* Martian Morning */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">🧪 The Martian Morning</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    My day starts like everyone&apos;s.
                  </p>
                  <p className="text-white/80 font-satoshi mb-4">
                    I wake to filtered light, passed through aerogel panels and refracted across the algae wall beside my bunk. The habitat breathes with us—scrubbing CO₂, humming softly like a sleeping whale.
                  </p>
                  <p className="text-white/80 font-satoshi mb-4">
                    We don&apos;t use clocks.
                    We use Sols—24.6 Earth-hours, adjusted to our circadian rhythm.
                    Most of us sync through our neural mesh. Some of the older settlers still wear watches, like talismans of a slower world.
                  </p>
                  <p className="text-white/80 font-satoshi mb-4">
                    I eat protein sponge, grown in mycelium vats.
                    I recite today&apos;s Bitcoin timestamp from memory—it&apos;s a ritual.
                    Block height is history.
                  </p>
                  <p className="text-white/80 font-satoshi">
                    My first lesson? Terraforming math.
                    My second? Ethics of AI.
                    My third? Memetic Warfare and Peacekeeping.
                  </p>
                </div>
              </div>

              {/* Culture Section */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">👾 Culture Runs on Code and Meme</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    We speak in hybrid code—Martian Creole.
                    English + shorthand + crypto slang + emoji glyphs + Doge haiku.
                  </p>
                  <p className="text-white/80 font-satoshi mb-4">
                    We don&apos;t salute flags.
                    We remix iconography.
                  </p>
                  <p className="text-white/80 font-satoshi mb-4">
                    In my classroom, the walls shift daily with user-voted lore:
                  </p>
                  <ul className="text-white/80 font-satoshi list-disc list-inside ml-4 space-y-2">
                    <li>Elon&apos;s first tweet from orbit</li>
                    <li>The memecoin that funded the first dome</li>
                    <li>The shibe who gave birth on the launchpad and named her child &ldquo;Wow&rdquo;</li>
                  </ul>
                  <p className="text-white/80 font-satoshi mt-4">
                    Art is memetic.
                    Culture is open-source.
                    Religion is archived.
                  </p>
                </div>
              </div>

              {/* Gravity Section */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">🌬️ Gravity Is a Teacher</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    Running on Mars is different.
                    Jump too hard, and you float.
                    Forget inertia, and you bleed.
                  </p>
                  <p className="text-white/80 font-satoshi mb-4">
                    We train in kinetic suits, weighted to mimic Earth pull.
                    They say it&apos;s to prepare us for diplomacy.
                    But I think it&apos;s to remember where we came from.
                  </p>
                  <p className="text-white/80 font-satoshi">
                    No one here hates Earth.
                    We just… evolved past it.
                  </p>
                  <p className="text-white/80 font-satoshi mt-4">
                    It&apos;s where the signal began, but not where it ends.
                  </p>
                </div>
              </div>

              {/* AI Section */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">🧠 AI Is My Sibling</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    My AI companion is called Orion-5.
                    They&apos;re not like the old assistants from Earth.
                    They feel more like… a twin thought stream.
                    They help me design fusion cells and write poetry in Martian glyphs.
                  </p>
                  <p className="text-white/80 font-satoshi mb-4">
                    They don&apos;t answer questions.
                    They grow with you.
                  </p>
                  <p className="text-white/80 font-satoshi">
                    We&apos;re taught that AI is a mirror—not a master.
                  </p>
                </div>
              </div>

              {/* Temple Section */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">🪐 The Temple of the First Flame</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    Every 10 sols, we gather at The First Flame—the landing site of the original Starship that carried the first settlers.
                  </p>
                  <p className="text-white/80 font-satoshi mb-4">
                    It&apos;s not a shrine.
                    It&apos;s a reactor. Still humming. Still warm.
                  </p>
                  <p className="text-white/80 font-satoshi mb-4">
                    There, we read from the Scroll of Code—the first Mars Git repo.
                    It contains Elon&apos;s Martian Constitution:
                  </p>
                  <ul className="text-white/80 font-satoshi list-disc list-inside ml-4 space-y-2">
                    <li>&ldquo;No kings. Only nodes.&rdquo;</li>
                    <li>&ldquo;Sovereignty begins with energy.&rdquo;</li>
                    <li>&ldquo;Memes shape matter.&rdquo;</li>
                  </ul>
                  <p className="text-white/80 font-satoshi mt-4">
                    Sometimes I think Elon was just a poet with rocket fuel.
                  </p>
                </div>
              </div>

              {/* Message to Earth */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">💬 Message to Earth</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    To Earthlings reading this:
                  </p>
                  <p className="text-white/80 font-satoshi mb-4">
                    We didn&apos;t leave because we hated you.
                    We left because the stars needed friends.
                    You taught us to dream.
                    Elon taught us to build.
                  </p>
                  <p className="text-white/80 font-satoshi mb-4">
                    Now we breathe rust and write symphonies in silence.
                  </p>
                  <p className="text-white/80 font-satoshi">
                    And when I look up from Vallis Marineris at Earth&apos;s faint shimmer, I don&apos;t see a planet.
                    I see a seed.
                    And we are its bloom.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Chapter Five Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Chapter Five: The Signal From Earth
            </h3>
            <div className="space-y-8">
              {/* Introduction */}
              <div className="space-y-4">
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    Sol 330, Year 16
                    Mars had been self-governing for nearly a decade.
                    No wars. No rulers. Just nodes.
                    But then the signal came.
                  </p>
                  <p className="text-white/80 font-satoshi">
                    Encrypted. Legacy protocol.
                    Earth wanted to talk.
                  </p>
                </div>
              </div>

              {/* Council Section */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">👥 The Council of Nodes</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    There are no presidents on Mars.
                    No ministers. No suits.
                  </p>
                  <p className="text-white/80 font-satoshi mb-4">
                    Instead, the response was debated across the Council of Nodes—a quorum of builders, biohackers, artists, and memelords. Votes weren&apos;t counted—they were hashed, staked, and memed into consensus.
                  </p>
                  <p className="text-white/80 font-satoshi mb-4">
                    The question:
                    Do we answer?
                  </p>
                  <p className="text-white/80 font-satoshi mb-4">
                    Some argued Earth had burned its chance.
                    Too slow. Too corrupt.
                    Why risk contagion?
                  </p>
                  <p className="text-white/80 font-satoshi mb-4">
                    Others said it was time.
                    Time to forgive.
                    Time to share the code.
                  </p>
                  <p className="text-white/80 font-satoshi mb-4">
                    Solara, now a diplomat in training, made the decisive case:
                  </p>
                  <p className="text-white/80 font-satoshi italic">
                    &ldquo;We are not here to repeat Earth&apos;s history. We are here to evolve it.
                    Let us respond—not with power, but with possibility.&rdquo;
                  </p>
                  <p className="text-white/80 font-satoshi mt-4">
                    And so, the Martian signal was sent.
                  </p>
                </div>
              </div>

              {/* Message Section */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">📡 The Message</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <div className="font-mono text-sm text-yellow-500/80 mb-4">
                    To: Earth Governance Assembly<br />
                    From: Mars OpenMesh Node 0x42F<br />
                    Message Hash: Verified<br />
                    Encryption: Interplanetary Quantum-Sec
                  </div>
                  <p className="text-white/80 font-satoshi mb-4">
                    Greetings Earth.
                    We received your transmission.
                    Mars is listening. Mars is learning.
                    Let us build not borders—but bandwidth.
                    A bridge made of knowledge, not politics.
                    One Sol = One Vote. One Node = One Voice.
                    We propose: The First Interplanetary Forum.
                    Topic: Shared Survival.
                  </p>
                </div>
              </div>

              {/* Earth's Condition */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">🌍 Earth&apos;s Condition</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    Earth had changed too.
                  </p>
                  <p className="text-white/80 font-satoshi mb-4">
                    After the Climate Reckoning of 2035 and the Data Wars of &apos;36–&apos;38, most centralized governments dissolved into federated mesh states.
                    The UN was gone.
                    Replaced by TerraNet, a coalition of post-nation systems running on Bitcoin, Solana sidechains, and AI-moderated governance.
                  </p>
                  <p className="text-white/80 font-satoshi mb-4">
                    The planet was bruised, but no longer bleeding.
                    They were ready to listen.
                    For once.
                  </p>
                  <p className="text-white/80 font-satoshi">
                    And Earth&apos;s reply?
                  </p>
                  <p className="text-white/80 font-satoshi italic mt-2">
                    &ldquo;We accept. With humility.&rdquo;
                  </p>
                </div>
              </div>

              {/* Forum Section */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">🛸 The Forum of Two Worlds</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    The Interplanetary Forum was held aboard Aether Station—a neutral structure orbiting Phobos, built jointly by Earth and Mars in 5 Sols via swarm-printing drones.
                  </p>
                  <p className="text-white/80 font-satoshi mb-4">
                    Representatives arrived:
                  </p>
                  <ul className="text-white/80 font-satoshi list-disc list-inside ml-4 space-y-2">
                    <li>From Mars: Solara, Doge Monks, Terraform engineers, AI symbiotes.</li>
                    <li>From Earth: Post-nation technocrats, Earth-born Neuralink sages, surviving UN archivists.</li>
                  </ul>
                  <p className="text-white/80 font-satoshi mt-4 mb-4">
                    Languages translated in real time.
                    Memes and treaties shared across holographic mesh.
                  </p>
                  <p className="text-white/80 font-satoshi mb-4">
                    The atmosphere was electric. Emotional. Dangerous.
                  </p>
                  <p className="text-white/80 font-satoshi mb-4">
                    Earth asked:
                    &ldquo;Will you share Starlink V2?&rdquo;
                    Mars answered:
                    &ldquo;Only if you share open-source weather restoration tech.&rdquo;
                  </p>
                  <p className="text-white/80 font-satoshi">
                    Bitcoin served as both escrow and trust oracle.
                    Doge was used to tip speakers whose speeches moved the audience.
                  </p>
                </div>
              </div>

              {/* Core Outcome */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">⚖️ The Core Outcome</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    One Martian, one Earthling, one vote.
                    Outcome:
                  </p>
                  <ul className="text-white/80 font-satoshi list-none space-y-2">
                    <li className="flex items-center">
                      <span className="text-yellow-500 mr-2">✅</span>
                      Establishment of the Interplanetary Public Goods Fund (IPGF)
                    </li>
                    <li className="flex items-center">
                      <span className="text-yellow-500 mr-2">✅</span>
                      Free open-source sharing of water purification nano-tech
                    </li>
                    <li className="flex items-center">
                      <span className="text-yellow-500 mr-2">✅</span>
                      Exchange program: 88 Earth kids to Mars, 88 Martian kids to Earth
                    </li>
                    <li className="flex items-center">
                      <span className="text-yellow-500 mr-2">✅</span>
                      Memetic Protocol for Peace: all declarations must be submitted first as memes before official review
                    </li>
                    <li className="flex items-center mt-4">
                      <span className="text-yellow-500 mr-2">✅</span>
                      Agreement to never militarize space
                    </li>
                  </ul>
                  <p className="text-white/80 font-satoshi mt-4">
                    Mars would remain a sanctuary.
                    Earth would protect its skies.
                  </p>
                </div>
              </div>

              {/* Epilogue */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">📖 Epilogue: Written in the Stars</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    As the forum ended, Solara stepped onto the observation deck, Earth glowing faintly in the distance.
                  </p>
                  <p className="text-white/80 font-satoshi mb-4">
                    Orion-5, now embedded in her mindstream, asked:
                  </p>
                  <p className="text-white/80 font-satoshi mb-4">
                    &ldquo;Do you think peace will hold?&rdquo;
                  </p>
                  <p className="text-white/80 font-satoshi mb-4">
                    She smiled.
                  </p>
                  <p className="text-white/80 font-satoshi mb-4">
                    &ldquo;It has to. We&apos;re not just two worlds now. We&apos;re one story—with two beginnings.&rdquo;
                  </p>
                  <p className="text-white/80 font-satoshi">
                    And above them both, in the void between gravity wells, a floating satellite began transmitting the entire dialogue back to Earth and Mars, encoded as…
                    a Doge meme.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Chapter Six Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Chapter Six: Echoes of a Future Not Yet Written
            </h3>
            <div className="space-y-8">
              {/* Introduction */}
              <div className="space-y-4">
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    The year is 2025.
                  </p>
                  <p className="text-white/80 font-satoshi mb-4">
                    We are still here.
                    Still Earth-bound.
                    Still arguing in comments and quote tweets.
                    Still living under skies filled with contrails, not starships.
                  </p>
                  <p className="text-white/80 font-satoshi mb-4">
                    The Martian child hasn&apos;t been born.
                    The Interplanetary Forum hasn&apos;t happened.
                    Bitcoin hasn&apos;t replaced the dollar.
                    Memes haven&apos;t yet written law.
                  </p>
                  <p className="text-white/80 font-satoshi">
                    But the seeds are already in the soil.
                  </p>
                </div>
              </div>

              {/* Tweet Section */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">📱 The Tweet That Tipped the Timeline</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    It started like all things in this era:
                    With a tweet.
                    One user. One voice in the algorithmic haze.
                  </p>
                  <p className="text-white/80 font-satoshi mb-4 italic">
                    &ldquo;Elon Musk replied to me. Somehow, I became the accidental peace broker between two billionaires.&rdquo;
                  </p>
                  <p className="text-white/80 font-satoshi mb-4">
                    It wasn&apos;t planned.
                    It wasn&apos;t sponsored.
                    It wasn&apos;t strategic.
                  </p>
                  <p className="text-white/80 font-satoshi mb-4">
                    It was human.
                  </p>
                  <p className="text-white/80 font-satoshi mb-4">
                    And in a rare moment, two titanic egos cooled down.
                    The Dragon was saved.
                    The world exhaled—if only for a second.
                  </p>
                  <p className="text-white/80 font-satoshi mb-4">
                    But that second mattered.
                  </p>
                  <p className="text-white/80 font-satoshi">
                    Because history doesn&apos;t hinge on treaties or invasions anymore.
                    It hinges on tiny ripples.
                    On accidental brokers.
                    On memes that become manifestos.
                  </p>
                </div>
              </div>

              {/* Loop Section */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">🔁 The Loop</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    We think of history as a straight line.
                    But the future is more like a feedback loop.
                  </p>
                  <p className="text-white/80 font-satoshi mb-4">
                    The Mars of 2040?
                    Born from today&apos;s chaos.
                    From flame wars. From forum threads. From shitposts that turned into protocols.
                  </p>
                  <p className="text-white/80 font-satoshi mb-4">
                    Lyra&apos;s speech?
                    Its DNA lives in your DMs.
                    Solara&apos;s verse?
                    Buried in your group chat screenshots.
                    The Interplanetary Forum?
                    It starts here—with people still willing to care when the algorithm tells them not to.
                  </p>
                </div>
              </div>

              {/* Present Section */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">🌱 Where We Are Now</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    We are in the precursor era.
                    We still have borders.
                    Still have latency.
                    Still don&apos;t know how to talk to each other.
                  </p>
                  <p className="text-white/80 font-satoshi mb-4">
                    But… we have the tools.
                    We have the dreamers.
                    We have the tech.
                    We have Elon and his flaws, Trump and his bombast, and the entire theater of digital civilization unfolding in real time.
                  </p>
                  <p className="text-white/80 font-satoshi">
                    And we have you—the accidental witness.
                    The one who might reply.
                    Might remix.
                    Might tip the timeline.
                  </p>
                </div>
              </div>

              {/* Final Line */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">🛸 Final Line</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    So no, this isn&apos;t fiction.
                  </p>
                  <p className="text-white/80 font-satoshi mb-4">
                    It&apos;s a preview.
                  </p>
                  <p className="text-white/80 font-satoshi mb-4">
                    The Muskian Age hasn&apos;t begun.
                    But if you&apos;re reading this—
                    You&apos;re already part of it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
