"use client";

export default function CluelyPage() {
  return (
    <div className="min-h-screen bg-black text-white font-satoshi">
      {/* Premium header accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-8">
            <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">AI Assistant • Screen Intelligence • Voice Commands</p>
            <h1 className="text-center">
              <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
                Cluely
              </span>
            </h1>
            <div className="flex items-center justify-center mt-6">
              <div className="h-px w-24 bg-yellow-500/30"></div>
              <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">The AI That Sees Your Screen</p>
              <div className="h-px w-24 bg-yellow-500/30"></div>
            </div>
            
            {/* Featured Visual */}
            <div className="relative w-full mx-auto mt-12 aspect-[16/9] overflow-hidden rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <iframe
                src="https://www.youtube.com/embed/yap8iSeY8vE"
                title="Cluely - The AI That Sees Your Screen"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
            </div>
            
            {/* Hero Story Introduction */}
            <div className="relative w-full mx-auto mt-12 bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6 text-center">
                The Visionary of Ventures
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed text-center max-w-4xl mx-auto">
                In the heart of Miami&apos;s sun-drenched skyline, where glass towers gleam and palm trees sway, Isabella Torres ran her empire with a rhythm as vibrant as the city itself.
              </p>
            </div>
          </div>

          {/* Roy Lee's Story - Long Form Introduction */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6 font-boska">
              The Renegade Coder
            </h3>
            <div className="space-y-6 text-gray-300">
              <p className="text-lg leading-relaxed">
                In the fluorescent-lit dorms of Columbia University, where the hum of ambition mingled with the clatter of keyboards, Roy Lee was already rewriting the rules. A 21-year-old Korean American with a knack for coding and a disdain for outdated systems, Roy saw the world differently. To him, the tech industry&apos;s gatekeeping rituals—like LeetCode&apos;s grueling coding interviews—were relics, barriers that valued rote memorization over real talent. So, he built a tool to break them: Interview Coder, an AI that fed real-time answers through a hidden browser overlay, undetectable to interviewers. It was a hack born in a dorm room, but it would spark a revolution—and cost him his place at Columbia.
              </p>
              
              <p className="text-lg leading-relaxed">
                Roy wasn&apos;t just tinkering for fun. He used Interview Coder to ace internship interviews at tech giants like Meta, TikTok, Capital One, and Amazon, proving his point: the system was flawed, and he could outsmart it. But Roy didn&apos;t stop at personal victories. He posted a video on X, showcasing his tool in action during an Amazon interview. The clip went viral, racking up millions of views and catching the eye of Amazon&apos;s executives—who weren&apos;t amused. They contacted Columbia, and soon after, Roy found himself facing disciplinary action. The university&apos;s handbook, which he&apos;d studied meticulously, didn&apos;t explicitly ban such tools, but that didn&apos;t matter. Columbia suspended him, and Harvard, where he&apos;d been admitted, rescinded his acceptance. By February 2025, Roy and his co-founder, Neel Shanmugam, were outcasts, expelled from the Ivy League.
              </p>
              
              <p className="text-lg leading-relaxed">
                Most would&apos;ve crumbled. Roy doubled down. Alongside Neel, another Columbia dropout with a shared vision, he transformed Interview Coder into Cluely, a San Francisco-based startup with a brazen mission: &quot;Cheat on everything.&quot; Cluely wasn&apos;t just for coding interviews—it was an AI assistant that watched your screen, listened to your calls, and delivered real-time answers for exams, sales pitches, even casual conversations. Its invisible overlay was a middle finger to proctors and recruiters, a tool that thrived in the gray zone of ethics. Roy didn&apos;t see it as cheating; he saw it as leveling the playing field, a calculator for the AI age. &quot;The world called calculators cheating once,&quot; he&apos;d later tell Business Insider. &quot;So was Google. This is just the next step.&quot;
              </p>
              
              <p className="text-lg leading-relaxed">
                The backlash was swift. When Roy leaked Columbia&apos;s disciplinary letter on X, it exploded, drawing both condemnation and admiration. Critics called Cluely a &quot;digital black market,&quot; accusing Roy of undermining trust in education and hiring. Supporters, though, saw a visionary—a kid who&apos;d hacked the system and turned his expulsion into a $5.3 million seed round from Abstract Ventures and Susa Ventures by April 2025. Cluely&apos;s launch video, where Roy used the tool to fabricate art knowledge and his age on a date, pushed the controversy further. Some called it dystopian, likening it to Black Mirror; others praised its audacity, with one X user dubbing it &quot;the nicest LinkedIn post ever.&quot;
              </p>
              
              <p className="text-lg leading-relaxed">
                Roy leaned into the chaos. He&apos;d learned from TikTok and Instagram that controversy fuels virality, and he applied it ruthlessly. Cluely&apos;s &quot;100 to 1&quot; rule—make 100 videos, one goes viral, then repost across 100 accounts—turned the startup into a content machine, hitting 4 million views in its first week. By June, Andreessen Horowitz poured $15 million into Cluely, valuing it at a rumored $120 million. Roy hired 50 &quot;growth interns&quot; to churn out TikToks, aiming for a billion views. &quot;If half the audience doesn&apos;t hate it, it&apos;s not viral enough,&quot; he told TechCrunch, his calculated bravado masking a deeper strategy.
              </p>
              
              <p className="text-lg leading-relaxed">
                But Roy&apos;s journey wasn&apos;t just about provocation. Offline, he was measured, private, a coder who&apos;d taught himself in isolation after Harvard&apos;s rejection for breaking curfew. He saw Cluely as more than a tool—it was a movement to redefine work, learning, and even thought itself. &quot;What happens when AI helps you think in real time?&quot; he asked on a podcast, envisioning a future where everyone leans on AI, just as they do on spellcheck or Google. Cluely&apos;s $6 million in annual revenue and 70,000 users by mid-2025 proved the demand was real.
              </p>
              
              <p className="text-lg leading-relaxed">
                Yet the critics kept coming. Startups like Validia launched Truely to detect Cluely, and proctoring firms like Honorlock rolled out countermeasures. Roy shrugged it off, hinting at hardware like smart glasses or brain chips to outpace the anti-cheating race. To him, the backlash was noise—a sign he was onto something big. At a Y Combinator after-party, 2,000 people showed up for Cluely&apos;s bash, only for police to shut it down. &quot;The most legendary party that never happened,&quot; Roy laughed, already planning the next one.
              </p>
              
              <p className="text-lg leading-relaxed font-medium text-yellow-500/90">
                In San Francisco&apos;s startup scene, Roy Lee was both hero and villain. He&apos;d turned a dorm-room hack into a venture-backed empire, trading Ivy League credentials for a shot at reshaping the world. Cluely wasn&apos;t just about cheating—it was about challenging what &quot;fair&quot; means in an AI-driven future. As Roy put it, &quot;The universe will belong to those who use AI, not those who fight it.&quot; Whether his plane soared or crashed, one thing was clear: Roy Lee wasn&apos;t here to play by anyone&apos;s rules but his own.
              </p>
            </div>
          </div>

          {/* Isabella's Empire Overview */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6 font-epilogue">
              Horizon Ventures: Where Industries Converge
            </h3>
            <div className="space-y-4 text-gray-300">
                             <p className="text-lg">
                 Her company, Horizon Ventures, was a unique blend of media production, real estate, and luxury travel—an ambitious trifecta that thrived on her ability to juggle creativity, strategy, and client expectations. But what set Isabella apart wasn&apos;t just her hustle; it was her secret weapon: Cluely, the AI assistant that saw her screen, heard her calls, and turned her chaotic days into a symphony of efficiency.
               </p>
              <div className="mt-6">
                <h4 className="text-xl font-bold text-yellow-500 mb-4 font-epilogue">Business Pillars:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>Media production and documentary campaigns</li>
                  <li>Luxury real estate with waterfront properties</li>
                  <li>Bespoke travel experiences and private jet tours</li>
                  <li>AI-powered efficiency through Cluely integration</li>
                  <li>Cross-industry synergy and client management</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">🎬</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 font-boska">
                  Media Production
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl font-satoshi">
                Documentary Campaigns
              </p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">🏢</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 font-boska">
                  Real Estate
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl font-satoshi">
                Luxury Properties & Investment
              </p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">✈️</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 font-boska">
                  Luxury Travel
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl font-satoshi">
                Bespoke Experiences & Charters
              </p>
            </div>
          </div>

          {/* A Day with Isabella - Story Sections */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6 font-epilogue">
              A Day in the Life: Isabella & Cluely
            </h3>
            <div className="space-y-8">
              
              {/* Morning: Media Campaign */}
              <div className="space-y-4">
                                                  <h4 className="text-xl font-bold text-yellow-500 font-boska">Morning: Media Campaign Mastery</h4>
                 <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                   <p className="text-white/80 font-satoshi mb-4">
                     Isabella&apos;s mornings began in her sleek, ocean-view office, where monitors glowed with open tabs: a media campaign for a new documentary, a real estate listing for a waterfront villa, and a curated itinerary for a client&apos;s private jet tour through the Caribbean. The demands were relentless—editors needed scripts, buyers wanted virtual tours, and travelers craved bespoke experiences.
                   </p>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                     <div>
                       <h5 className="text-yellow-400 font-epilogue mb-2">Cluely&apos;s Role:</h5>
                       <ul className="text-white/80 font-satoshi list-disc list-inside">
                         <li>Real-time analytics scanning</li>
                         <li>Competitor metrics analysis</li>
                         <li>Instant data cross-referencing</li>
                         <li>Performance insights delivery</li>
                         <li>Campaign optimization suggestions</li>
                       </ul>
                     </div>
                     <div>
                       <h5 className="text-yellow-400 font-epilogue mb-2">Results:</h5>
                       <p className="text-white/80 font-satoshi">&quot;Your campaign&apos;s engagement is up 12% on social platforms&quot;</p>
                     </div>
                   </div>
                 </div>
               </div>

               {/* Midday: Real Estate Mastery */}
               <div className="space-y-4">
                 <h4 className="text-xl font-bold text-yellow-500 font-boska">Midday: Real Estate Excellence</h4>
                 <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                   <p className="text-white/80 font-satoshi mb-4">
                     By midday, Isabella shifted to real estate. A high-profile client was touring a $15 million penthouse via video call, and they had questions—lots of them. As the client grilled her on zoning laws and ROI projections, Isabella glanced at her screen, where Cluely was silently observing the property listing.
                   </p>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                     <div>
                       <h5 className="text-yellow-400 font-epilogue mb-2">Cluely&apos;s Intelligence:</h5>
                       <ul className="text-white/80 font-satoshi list-disc list-inside">
                         <li>Document scanning during calls</li>
                         <li>Zoning status verification</li>
                         <li>Comparable listing suggestions</li>
                         <li>ROI projection assistance</li>
                         <li>Deal closing optimization</li>
                       </ul>
                     </div>
                     <div>
                       <h5 className="text-yellow-400 font-epilogue mb-2">Impact:</h5>
                       <p className="text-white/80 font-satoshi">Seamless information delivery, client impressed by detailed knowledge</p>
                     </div>
                   </div>
                 </div>
               </div>

               {/* Afternoon: Travel Curation */}
               <div className="space-y-4">
                 <h4 className="text-xl font-bold text-yellow-500 font-boska">Afternoon: Luxury Travel Curation</h4>
                 <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                   <p className="text-white/80 font-satoshi mb-4">
                     Afternoon brought her travel agency into focus. A VIP client wanted a last-minute yacht charter to the Bahamas, complete with a Michelin-star chef and a sunset photography session. While browsing livethelife.tv for destination ideas, Isabella asked Cluely to pull real-time availability for yachts in the region.
                   </p>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                     <div>
                       <h5 className="text-yellow-400 font-epilogue mb-2">Cluely&apos;s Coordination:</h5>
                       <ul className="text-white/80 font-satoshi list-disc list-inside">
                         <li>Real-time yacht availability</li>
                         <li>Chef booking cross-reference</li>
                         <li>Photography session planning</li>
                         <li>Multi-platform data synthesis</li>
                         <li>Anticipatory service suggestions</li>
                       </ul>
                     </div>
                     <div>
                       <h5 className="text-yellow-400 font-epilogue mb-2">Outcome:</h5>
                       <p className="text-white/80 font-satoshi">Complete itinerary delivered in seconds, client speechless and ready to book</p>
                     </div>
                   </div>
                 </div>
               </div>

               {/* Evening: Investor Pitch */}
               <div className="space-y-4">
                 <h4 className="text-xl font-bold text-yellow-500 font-boska">Evening: Investor Relations</h4>
                 <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                   <p className="text-white/80 font-satoshi mb-4">
                     As evening settled, Isabella prepared for a pitch to investors, weaving her media, real estate, and travel ventures into a cohesive vision. Standing before a projector, she used livethelife.tv&apos;s portfolio tools to showcase her financial strategy. When an investor asked about market trends, Cluely, listening silently, fed her real-time data through her earpiece.
                   </p>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                     <div>
                       <h5 className="text-yellow-400 font-epilogue mb-2">Cluely&apos;s Support:</h5>
                       <ul className="text-white/80 font-satoshi list-disc list-inside">
                         <li>Silent call monitoring</li>
                         <li>Real-time market data</li>
                         <li>Bitcoin trend analysis</li>
                         <li>Presentation enhancement</li>
                         <li>Confidence amplification</li>
                       </ul>
                     </div>
                     <div>
                       <h5 className="text-yellow-400 font-epilogue mb-2">Data Point:</h5>
                       <p className="text-white/80 font-satoshi">&quot;Bitcoin&apos;s influence on luxury real estate is up 8% this quarter&quot;</p>
                     </div>
                   </div>
                 </div>
               </div>
            </div>
          </div>

          {/* The Power of Cluely */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6 font-boska">
              The Cluely Advantage
            </h3>
            <div className="space-y-6 text-gray-300">
                             <p className="text-lg leading-relaxed">
                 What made Isabella&apos;s success extraordinary wasn&apos;t just her ambition—it was Cluely&apos;s ability to amplify it. The AI didn&apos;t just assist; it anticipated, analyzed, and adapted, turning her screen into a canvas of possibilities. Whether she was crafting a media narrative, closing a property deal, or designing a dream vacation, Cluely was there, invisible yet indispensable, helping her balance the chaos of her empire with the precision of a maestro.
               </p>
              
                              <div className="grid md:grid-cols-2 gap-8 mt-8">
                 <div className="space-y-4">
                   <h4 className="text-xl font-bold text-yellow-500 font-epilogue">Core Capabilities</h4>
                   <ul className="list-disc list-inside space-y-2 font-satoshi">
                     <li>Screen content analysis and interpretation</li>
                     <li>Real-time call monitoring and support</li>
                     <li>Cross-platform data synthesis</li>
                     <li>Anticipatory information delivery</li>
                     <li>Silent, unobtrusive operation</li>
                   </ul>
                 </div>
                 <div className="space-y-4">
                   <h4 className="text-xl font-bold text-yellow-500 font-epilogue">Business Impact</h4>
                   <ul className="list-disc list-inside space-y-2 font-satoshi">
                     <li>Seamless multi-industry management</li>
                     <li>Enhanced client confidence and satisfaction</li>
                     <li>Accelerated decision-making processes</li>
                     <li>Improved deal closure rates</li>
                     <li>Elevated professional presence</li>
                   </ul>
                 </div>
               </div>
            </div>
          </div>

                    {/* Conclusion */}
          <div className="space-y-6">
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6 font-epilogue">
                The Future is Now
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed font-satoshi">
                As the Miami skyline glittered outside her window, Isabella leaned back in her chair, reflecting on her day. Horizon Ventures wasn&apos;t just a business—it was a lifestyle, one she lived fully, with Cluely as her silent partner. In a world that demanded everything, she had found a way to have it all, one screen at a time.
              </p>
            </div>
            
            <div className="flex items-center justify-center mt-8">
              <div className="h-px w-32 bg-yellow-500/30"></div>
              <p className="mx-8 text-yellow-500 font-light italic font-satoshi">AI • Vision • Excellence</p>
              <div className="h-px w-32 bg-yellow-500/30"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
