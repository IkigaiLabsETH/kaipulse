"use client";

import Image from 'next/image';

export default function QOLPage() {
  return (
    <div className="min-h-screen bg-black text-white font-satoshi">
      {/* Premium header accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="space-y-20">
          {/* Hero Section */}
          <div className="text-center space-y-8">
            <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-epilogue">Lifestyle Design • Philosophy • Well-being</p>
            <h1 className="text-center font-boska">
              <span className="text-7xl md:text-9xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)]">
                The Sweet Life
              </span>
            </h1>
            <div className="flex items-center justify-center mt-6">
              <div className="h-px w-24 bg-yellow-500/30"></div>
              <p className="mx-6 text-xl text-white/70 font-light italic font-satoshi">An inquiry into what makes life well-lived</p>
              <div className="h-px w-24 bg-yellow-500/30"></div>
            </div>
            
            {/* Featured Visual */}
            <div className="relative w-full mx-auto mt-12 aspect-[16/9] overflow-hidden rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <Image
                src="/photography/roadtrip.jpg"
                alt="A scenic roadtrip representing a journey to a better quality of life"
                fill
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
            </div>
          </div>

          {/* Section I */}
          <div className="bg-[#1c1f26] p-10 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-4xl md:text-5xl font-bold text-yellow-500 mb-8 font-epilogue">
              The $100 Million Meh
            </h3>
            <div className="space-y-6 text-gray-300 text-xl leading-relaxed">
              <p>
              Tucked into the cottonwood mesas north of Austin sits a ranch so extravagant it makes Yellowstone look like a starter farm. On its 720 groomed acres, you&apos;ll find an air-conditioned dressage barn, an on-site sushi chef, and a private, half-kilometre &ldquo;lazy river.&rdquo; The owner, a crypto-lifer who cashed out a DeFi protocol at the absolute peak, spent roughly $100 million to secure the American Dream on rocket fuel. And yet, after the dust settled, his self-reported life satisfaction barely registered above a quiet &ldquo;meh.&rdquo;
              </p>
              <p>
              Meanwhile, 5,000 miles east, a retired Parisian graphic designer named Sylvie rolls her vintage Peugeot downtown each morning. She picks up a baguette, chats with the cheesemonger, and spends two unhurried hours at a shaded bistro table, debating local politics with friends. While her annual income is a rounding error on the ranch owner&apos;s tax bill, France continues to outperform the United States on the World Happiness Report. In fact, the U.S. just notched its lowest ranking ever—24th place—despite reaching new peaks in wealth and productivity.
              </p>
              <p>
              Money can purchase jet-skis and square footage, but it struggles to acquire meaningful hours—the kind punctuated by human connection, landscape, and ritual. The ranch&apos;s owner can summon a helicopter with an emoji, but he can&apos;t conjure a sidewalk café buzzing with neighbors or the playful friction of a daily market. What looks like an empire from a drone shot often feels like a vacuum on the ground. Sylvie&apos;s day, by contrast, is threaded with micro-moments of conviviality that compound into a palpable sense of well-being. The contrast isn&apos;t a moral judgment; it&apos;s a design flaw. When scale becomes the only metric, the quality of time almost always erodes.
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex flex-col items-center justify-center gap-4 mb-4">
                <span className="text-5xl">⏳</span>
                <h3 className="text-3xl font-bold text-yellow-500 font-epilogue">
                  Time Wealth
                </h3>
              </div>
              <p className="text-center text-lg">
                Prioritizing hours over dollars
              </p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex flex-col items-center justify-center gap-4 mb-4">
                <span className="text-5xl">🏘️</span>
                <h3 className="text-3xl font-bold text-yellow-500 font-epilogue">
                  Human Connection
                </h3>
              </div>
              <p className="text-center text-lg">
                Designing for spontaneous interaction
              </p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex flex-col items-center justify-center gap-4 mb-4">
                <span className="text-5xl">📜</span>
                <h3 className="text-3xl font-bold text-yellow-500 font-epilogue">
                  Systemic Design
                </h3>
              </div>
              <p className="text-center text-lg">
                Policies that support well-being
              </p>
            </div>
          </div>

          {/* Section II */}
          <div className="bg-[#1c1f26] p-10 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-4xl md:text-5xl font-bold text-yellow-500 mb-8 font-epilogue">
              The Myth of More
            </h3>
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20 text-xl leading-relaxed">
                  <p className="text-white/90 mb-6">
                  America&apos;s post-war narrative fused productivity with happiness. Today, its GDP per capita sits at $82,769, nearly double France&apos;s $44,691. Yet that surplus wealth has failed to translate into superior life satisfaction. Why the disconnect? It begins with time poverty. The average U.S. worker clocks 1,810 hours per year to their French counterpart&apos;s 1,511—that&apos;s nearly seven full weeks of extra freedom surrendered. Hustle culture frames those 299 hours as raw ambition, but the research is clear: once basic needs are met, trading more time for income yields diminishing, and eventually negative, returns on well-being.
                  </p>
                   <p className="text-white/90">
                   Then there&apos;s the question of how those freed-up hours are spent. The French devote 16.2 hours daily to personal care and leisure; Americans carve out just 14.6. Two hours might seem trivial, but over a year, it amounts to an entire extra month for long lunches, afternoon siestas, or impromptu hikes. This temporal slack is the fertile ground for the relational rituals—an apéro in the garden, a Saturday market stroll—that behavioral scientists link directly to durable happiness.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-2xl font-bold text-yellow-500 font-epilogue">Where We Live Shapes How We Live</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mt-4">
                    <div>
                      <ul className="text-white/90 text-xl list-disc list-inside space-y-3 font-satoshi">
                        <li><span className="font-bold font-epilogue">Walkable Hubs vs. Isolated Tracts.</span> European town centers are designed for spontaneous interaction. American suburbs, with their McMansions on five-acre lots, isolate households behind two-ton SUVs.</li>
                        <li><span className="font-bold font-epilogue">Cultural Permission to Rest.</span> A two-hour lunch break is a culturally endorsed ritual, not a guilty indulgence, reinforcing the radical idea that workers are humans first, producers second.</li>
                        <li><span className="font-bold font-epilogue">Policies for People.</span> Mandatory vacation minimums and universal healthcare decouple rest from precarity, allowing citizens to enjoy downtime rather than seeing it as lost output.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                 <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20 text-xl leading-relaxed">
                    <p className="text-white/90">
                    The American system is optimized for economic efficiency, but the returns are silently eroded by skyrocketing loneliness and burnout. Continental Europe, despite its own headwinds, consistently scores higher on social support, work-life balance, and perceived freedom—the very metrics the World Happiness Report weights as heavily as wealth. The data doesn&apos;t demand we abandon ambition; it demands we re-architect it, so that our ultimate non-fungible token—time—appreciates in value. The design challenge for the modern founder is no longer, &ldquo;How large can I scale?&rdquo; but &ldquo;How sweet can I make the hours in my day?&rdquo;
                    </p>
                 </div>
              </div>
              <div className="w-full text-center text-gray-500 pt-8">
                ⸻
              </div>
            </div>
          </div>

          {/* Section III */}
          <div className="bg-[#1c1f26] p-10 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-4xl md:text-5xl font-bold text-yellow-500 mb-8 font-epilogue">
                The Science of a Well-Lived Life
            </h3>
            <div className="space-y-6 text-gray-300 text-xl leading-relaxed">
                <p>What, exactly, shows up on the balance sheet of a rich life? For eight decades, the Harvard Adult Development Study has chased that question across marriages, divorces, IPOs, and bankruptcies. Its verdict is unambiguous: warm, meaningful relationships shield us from the ravages of time more reliably than IQ, social class, or even cholesterol levels.</p>
                
                <div className="overflow-x-auto my-8">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr>
                                <th className="border-b-2 border-yellow-500/50 p-4 text-yellow-500 font-epilogue">Variable</th>
                                <th className="border-b-2 border-yellow-500/50 p-4 text-yellow-500 font-epilogue">France</th>
                                <th className="border-b-2 border-yellow-500/50 p-4 text-yellow-500 font-epilogue">United States</th>
                                <th className="border-b-2 border-yellow-500/50 p-4 text-yellow-500 font-epilogue">Why It Matters</th>
                            </tr>
                        </thead>
                        <tbody className="font-satoshi text-lg">
                            <tr className="border-b border-gray-700">
                                <td className="p-4">Avg. Annual Hours Worked</td>
                                <td className="p-4">1,511</td>
                                <td className="p-4">1,810</td>
                                <td className="p-4">Fewer hours worked frees up time to invest in relationships.</td>
                            </tr>
                            <tr className="border-b border-gray-700">
                                <td className="p-4">Daily Personal Care &amp; Leisure</td>
                                <td className="p-4">16.2 hours</td>
                                <td className="p-4">14.6 hours</td>
                                <td className="p-4">Leisure is the substrate where friendships are built and maintained.</td>
                            </tr>
                            <tr>
                                <td className="p-4">Happiness Rank (2025)</td>
                                <td className="p-4">21st</td>
                                <td className="p-4">24th</td>
                                <td className="p-4">Social trust and stronger safety nets demonstrably outpace sheer wealth.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <p>Neuroscientists confirm this from a different angle. Dopamine spikes with novelty, serotonin stabilizes with routine, and oxytocin floods us during connection. Sustained well-being, however, only emerges when all three chemicals cooperate. Designing a life, then, is less about chasing the next peak experience and more about curating a personal ecology where these inputs cycle smoothly, fed by time affluence, social capital, micro-doses of nature, and ritualized breaks.</p>
                <p>Longevity researchers in the world&apos;s Blue Zones echo the message. Centenarians don&apos;t bio-hack; they garden, cook, walk, gossip, and nap. These are behaviors baked into the shape of their towns and the cadence of their days. The sweet life isn&apos;t a program you install; it&apos;s an operating system you inherit—or, for the modern nomad, one you intentionally port to a new locale.</p>
            </div>
            <div className="w-full text-center text-gray-500 pt-8">
                ⸻
            </div>
          </div>

          {/* Section IV */}
          <div className="bg-[#1c1f26] p-10 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <h3 className="text-4xl md:text-5xl font-bold text-yellow-500 mb-8 font-epilogue">
                  The Six Pillars of a Sweeter Life
              </h3>
              <div className="space-y-12">
                  
                  <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                      <h4 className="text-2xl font-bold text-yellow-500 mb-4 font-epilogue">1. From Sprawl to Stroll</h4>
                      <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                          <p>Consider Ana, a UX lead who traded her two-hour Bay Area commute for a tiled, 900-square-foot apartment just ten minutes from Lisbon&apos;s Tejo riverfront. Science backs her move: walkability predicts higher incidental social contact and lower obesity, with every 10-point rise on the Walk Score correlating with a 5–8% bump in social trust. The design principle is simple: prioritize a &ldquo;15-minute city&rdquo; grid where daily needs are a short stroll away.</p>
                      </div>
                  </div>
                  
                  <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                      <h4 className="text-2xl font-bold text-yellow-500 mb-4 font-epilogue">2. Making Time, Not Taking It</h4>
                      <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                          <p>In the surf town of Biarritz, tech founder Jules blocks his calendar from noon to 2 p.m. for a beach break and lunch—even during funding rounds. His investors balked initially, but company churn fell 18% once his team adopted the ritual. The takeaway? Workers in countries with statutory long-lunch norms report 12% higher positive affect after 6 p.m. The move is to embed recuperation into the workflow, treating it as vital infrastructure, not an optional perk.</p>
                      </div>
                  </div>
                  
                  <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                      <h4 className="text-2xl font-bold text-yellow-500 mb-4 font-epilogue">3. Movement in the Landscape</h4>
                      <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                          <p>Sylvie, our Parisian designer, gets her 6,000 daily steps from errands, not a gym membership. This aligns perfectly with Blue Zone findings, where residents average 22 &ldquo;movement snacks&rdquo; a day—brief bouts of activity under five minutes—which are strongly linked to lower rates of chronic disease. Ditch the stationary bike and embrace topographic micro-commutes: take the stairs, walk on the sand, and carry your groceries up the hill.</p>
                      </div>
                  </div>

                  <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                      <h4 className="text-2xl font-bold text-yellow-500 mb-4 font-epilogue">4. Markets Over Macros</h4>
                      <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                          <p>A co-living house in Porto, Portugal, turned Sunday meal-prep into &ldquo;Mercado Mondays,&rdquo; where rotating chefs build a week&apos;s menu from a single market run. This simple ritual has profound effects: shared meals are a better predictor of adolescent mental health than household income, and adult cohorts show similar patterns. Anchor your week to the rhythm of the local open-air market, not the other way around.</p>
                      </div>
                  </div>

                  <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                      <h4 className="text-2xl font-bold text-yellow-500 mb-4 font-epilogue">5. The Social API of the Apéro</h4>
                      <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                          <p>At a LiveTheLife.TV residency in Antibes, each day ends at sunset with wine, olives, and a conversation prompt—a simple formula that seeds serendipitous collaborations. It&apos;s a powerful hack. Harvard&apos;s data shows that the frequency of low-stakes social touchpoints (under 15 minutes) is more strongly correlated with long-term happiness than the number of vacation days taken. The principle: codify a daily &ldquo;open-porch&rdquo; window, a time when connection is expected and encouraged.</p>
                      </div>
                  </div>

                  <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                      <h4 className="text-2xl font-bold text-yellow-500 mb-4 font-epilogue">6. Designing with the Climate</h4>
                      <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                          <p>In Mallorca, a remote developer named Nadine writes code on a shaded patio, where ceiling fans replace air conditioning for 80% of the season. This isn&apos;t just aesthetic; buildings that rely on passive cooling cut energy use and report higher occupant comfort scores. The variance in temperature also cues our bodies for greater circadian robustness. Let the day&apos;s weather script your work: deep focus in the cool morning, collaborative calls in the breezy afternoon.</p>
                      </div>
                  </div>
              </div>
              <div className="w-full text-center text-gray-500 pt-8">
                  ⸻
              </div>
          </div>

          {/* Section V */}
          <div className="bg-[#1c1f26] p-10 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <h3 className="text-4xl md:text-5xl font-bold text-yellow-500 mb-8 font-epilogue">
                  Portraits of the Possible
              </h3>
              <div className="space-y-12">
                  <div className="grid md:grid-cols-3 gap-8">
                      <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                          <h4 className="text-2xl font-bold text-yellow-500 mb-4 font-epilogue">The Micro-Urbanist</h4>
                          <div className="space-y-3 text-lg text-gray-300 leading-relaxed">
                              <p>Ana traded a 75-hour workweek in a San Jose high-rise for a distributed, 45-hour schedule in Lisbon&apos;s Alfama district. The result? Her stress biomarkers fell by 26%, while the Net Promoter Score for her product climbed 14 points.</p>
                          </div>
                      </div>
                      <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                          <h4 className="text-2xl font-bold text-yellow-500 mb-4 font-epilogue">The Surf-Tech Founder</h4>
                          <div className="space-y-3 text-lg text-gray-300 leading-relaxed">
                              <p>Jules fled a Paris office tower and its always-on Slack culture for a shoreline studio in Biarritz with time-boxed, asynchronous work. His metrics: employee retention rose by 22%, churn fell 18%, and his Series A was oversubscribed.</p>
                          </div>
                      </div>
                      <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                          <h4 className="text-2xl font-bold text-yellow-500 mb-4 font-epilogue">The Residency Alum</h4>
                          <div className="space-y-3 text-lg text-gray-300 leading-relaxed">
                              <p>Mia was a gallery assistant and side-hustle video editor in NYC before joining a residency on the Côte d&apos;Azur. Her hybrid art-code project led to a sold-out NFT collection, press in Dezeen, and a self-reported joy score that jumped from 6.1 to 8.2.</p>
                          </div>
                      </div>
                  </div>
                  <p className="text-xl text-gray-300 leading-relaxed pt-8">The pattern is undeniable. Each story swaps scale for texture. When the distance between living, working, and playing shrinks, personal agency expands. The network effect of proximity still multiplies opportunity, but the profits compound more sustainably.</p>
              </div>
              <div className="w-full text-center text-gray-500 pt-8">
                  ⸻
              </div>
          </div>

          {/* Section VI */}
          <div className="bg-[#1c1f26] p-10 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <h3 className="text-4xl md:text-5xl font-bold text-yellow-500 mb-8 font-epilogue">
                  Design Your Own Sweet Life
              </h3>
              <div className="space-y-8 text-xl text-gray-300 leading-relaxed">
                  <p className="text-center font-bold font-epilogue text-2xl tracking-wider">TIME × SPACE × RITUAL × RELATIONSHIP</p>
                  
                  <div className="overflow-x-auto my-8">
                      <table className="w-full text-left border-collapse">
                          <thead>
                              <tr>
                                  <th className="border-b-2 border-yellow-500/50 p-4 text-yellow-500 font-epilogue">Dimension</th>
                                  <th className="border-b-2 border-yellow-500/50 p-4 text-yellow-500 font-epilogue">Diagnostic Question</th>
                                  <th className="border-b-2 border-yellow-500/50 p-4 text-yellow-500 font-epilogue">Starter Experiment</th>
                              </tr>
                          </thead>
                          <tbody className="font-satoshi text-lg">
                              <tr className="border-b border-gray-700">
                                  <td className="p-4">Time</td>
                                  <td className="p-4">Do my default hours align with my circadian energy?</td>
                                  <td className="p-4">Shift your highest-leverage cognitive work to the morning. Reserve midday for a shared meal or a nap.</td>
                              </tr>
                              <tr className="border-b border-gray-700">
                                  <td className="p-4">Space</td>
                                  <td className="p-4">Can I access groceries, green space, and good coffee within a 15-minute walk?</td>
                                  <td className="p-4">Trial a month-long stay in a neighborhood with a Walk Score over 90. Track your daily steps.</td>
                              </tr>
                              <tr className="border-b border-gray-700">
                                  <td className="p-4">Ritual</td>
                                  <td className="p-4">Which daily act can I stretch by 20 minutes to savor it?</td>
                                  <td className="p-4">Convert your beverage intake into a ceremony: a manual coffee brew, a clay teapot for tea, a proper apéro.</td>
                              </tr>
                              <tr>
                                  <td className="p-4">Relationship</td>
                                  <td className="p-4">How many non-transactional, face-to-face interactions do I have each day?</td>
                                  <td className="p-4">Schedule a standing &ldquo;open-house work block&rdquo; at a local café twice a week and see who shows up.</td>
                              </tr>
                          </tbody>
                      </table>
                  </div>
                  
                  <p>Digital nomads enjoy geo-arbitrage but often hemorrhage social capital. Weave new anchor points into your life: a weekly sports league, a language exchange, a local makers-meetup. If you&apos;re remote-first, negotiate for asynchronous deliverables; this unlocks the latitude for long lunches and sunrise hikes. Countries topping the 2025 Global Life-Work Balance Index—New Zealand, Ireland, Belgium—all share permissive residency paths for remote earners. Treat visas as design tools, not just tax loopholes.</p>
                  <p>Finally, audit your tech stack. Does your wearable data drive you toward calorie spreadsheets or does it encourage you to take a &ldquo;movement snack&rdquo;? Replace the productivity-porn feed with local WhatsApp groups for farmer&apos;s market alerts. When your notifications loop you back into the physical fabric of where you are, presence replaces FOMO.</p>
              </div>
              <div className="w-full text-center text-gray-500 pt-8">
                  ⸻
              </div>
          </div>

          {/* Section VII */}
          <div className="bg-[#1c1f26] p-10 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <h3 className="text-4xl md:text-5xl font-bold text-yellow-500 mb-8 font-epilogue">
                  An Invitation from LiveTheLife.TV
              </h3>
              <div className="space-y-6 text-xl text-gray-300 leading-relaxed">
                  <p>Silicon Valley playbooks promise maximum upside. LiveTheLife.TV flips the script, asking how to convert that upside into *outside*—the literal hours you can step away from the screen. The platform&apos;s Bitcoin-first strategy is a reminder that while fixing the money is a noble goal, life isn&apos;t about accumulating the biggest stack. It&apos;s about living your best life with BTC.</p>
                  
                  <div className="space-y-8 mt-8">
                      <h4 className="text-2xl font-bold text-yellow-500 mb-4 font-epilogue">The Onboarding Ritual</h4>
                      <ol className="list-decimal list-inside space-y-4 text-lg text-gray-300">
                          <li className="pl-2">
                              <span className="font-bold text-yellow-400/80 font-epilogue">Your Field Guide.</span> New members receive a micro-guide to *douceur de vivre* hotspots—Lisbon hillsides, Biarritz point breaks, Riviera market towns—all mappable to 90-day visa loops.
                          </li>
                          <li className="pl-2">
                              <span className="font-bold text-yellow-400/80 font-epilogue">Residency Matching.</span> A short questionnaire pairs you with studio flats or partner co-livings that meet the 15-minute-city rule: groceries, green space, and gigabit fiber, all on foot.
                          </li>
                          <li className="pl-2">
                              <span className="font-bold text-yellow-400/80 font-epilogue">Calendar Crafting.</span> The platform injects three recurring events into your calendar: a Long Lunch, an Apéro Window, and a Movement Snack. You can slide them, but you can&apos;t delete them—a gentle nudge, based on data, to reclaim your time.
                          </li>
                          <li className="pl-2">
                              <span className="font-bold text-yellow-400/80 font-epilogue">Metrics That Matter.</span> Instead of OKRs, you track Social Touchpoints per Day and Outdoor Minutes per Week. The dashboard nudges you when the numbers slip, embedding well-being into your daily feedback loop.
                          </li>
                      </ol>
                  </div>
                  <p className="pt-6">The result is a community where crypto returns underwrite temporal luxury, rather than fueling another soul-crushing sprint cycle. It&apos;s exactly the pivot our $100 million ranch owner never knew he needed to make.</p>
              </div>
              <div className="w-full text-center text-gray-500 pt-8">
                  ⸻
              </div>
          </div>

          {/* Section VIII */}
          <div className="bg-[#1c1f26] p-10 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <h3 className="text-4xl md:text-5xl font-bold text-yellow-500 mb-8 font-epilogue">
                  The Final Word
              </h3>
              <div className="space-y-6 text-xl text-gray-300 leading-relaxed">
                  <p>Back on the Texas ranch, the crypto mogul still owns his air-conditioned dressage barn, but he&apos;s finally noticed the silence between Slack pings. On a friend&apos;s dare, he timed the flight to Marseille, rode the train to a small Provençal town, and ordered the *plat du jour*. Two hours, one carafe of wine, and three new WhatsApp contacts later, he texted his COO.</p>
                  
                  <blockquote className="my-6 p-6 border-l-4 border-yellow-500 bg-black/20 italic text-2xl text-yellow-400/90 font-satoshi">
                      &ldquo;We&apos;re redesigning the calendar, not the product.&rdquo;
                  </blockquote>

                  <p>The point is simple: wealth is optional, but your hours are non-fungible. The World Happiness Report places the U.S. at its lowest rank ever not because its citizens lack ambition, but because they have starved the very substrate of well-being: relationships. This is the core finding from Harvard&apos;s 80-year study, the single strongest predictor of a long, healthy life.</p>
                  <p>So audit your diary, not just your balance sheet. Shrink the radius between where you sleep, work, and break bread. Let windows, not compressors, move the air. Raise a guilt-free glass at 5 p.m. And if you need a guide, LiveTheLife.TV is already setting the stage.</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
