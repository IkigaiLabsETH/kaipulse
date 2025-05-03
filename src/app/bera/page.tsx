"use client";

import { Header } from '@/components/Header';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const platformComparison = [
  { feature: 'Primary Asset', bera: 'BERA, HONEY, BGT' },
  { feature: 'Loan Currency', bera: 'HONEY (native)' },
  { feature: 'Collateral Requirement', bera: 'Varies by protocol' },
  { feature: 'Repayment Terms', bera: 'Protocol dependent' },
  { feature: 'Platform Maturity', bera: 'Emerging' },
];

const strengths = [
  {
    title: 'Proof-of-Liquidity (PoL)',
    highlight: 'A new consensus for a new era.',
    description: `In theory, PoL aligns incentives. In practice, it's a work in progress—real liquidity is sticky, and the system is still finding its footing. But if we get it right, it could change the game for EVM chains.`,
    note: `Builder's Note: The idea is bold, but the execution is what matters. We're still learning what works.`
  },
  {
    title: 'Tri-Token System',
    highlight: 'Separation of powers, on-chain.',
    description: `BERA (gas), BGT (governance, earned via liquidity), and HONEY (stablecoin) are designed to keep the system honest. The architecture gives us a shot at real decentralization—if we have the guts to follow through.`,
    note: `Builder's Note: Separation of powers is great, but only if governance is truly decentralized. We're not there yet, but the Berachain foundation is working on it.`
  },
  {
    title: 'Builder Culture',
    highlight: 'Resilience is the real alpha.',
    description: `The ones who stuck around are here for the right reasons. The bear market exposed who's really in it for the long haul. But we need to make sure new builders feel welcome, not just the old guard. This is a family now—time to act like it.`,
    note: `Builder's Note: The core is strong, but we need to open the doors wider.`
  },
  {
    title: 'EVM Compatibility',
    highlight: 'No walls, just bridges.',
    description: `Berachain is EVM-native, so the best ideas from across the ecosystem can migrate here. It's not about maximalism—it's about making it easy for new projects and users to plug in, remix, and push the space forward.`,
    note: `Builder's Note: The tech is there. Now we need to attract the right builders and users.`
  }
];

const pillars = [
  {
    title: "Institutions",
    description: "For real, sticky TVL and long-term adoption. Berachain needs to be a place where institutions can trust the protocols, the incentives, and the governance."
  },
  {
    title: "Gen Moonshot",
    description: "The next wave of risk-takers—builders and users who want to try new things, not just recycle the same old playbook. They need tools, support, and a reason to stay."
  },
  {
    title: "Apps & Abstractions",
    description: "We need new PoL abstractions that make Berachain accessible to outsiders. If it is too complex, nobody will come. If it is too insular, nobody will care."
  }
];

// Add X profile links for Ozzy and Smokey
const OZZY_X_URL = 'https://x.com/MEADGod';
const SMOKEY_X_URL = 'https://x.com/SmokeyTheBera';

export default function BerachainHonestTake() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      {/* Subtle background gradient and pattern overlay */}
      <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-[#18191c] via-black to-[#0a0a0a] opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-yellow-900/10 via-transparent to-black opacity-60" />
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
      </div>
      <Header />
      <section className="max-w-screen-lg mx-auto pt-32 pb-14 px-4 text-center relative z-10">
        <Badge className="bg-yellow-500 text-black text-sm mb-6 font-satoshi tracking-wide shadow-md">Builder&apos;s Honest Take</Badge>
        <h1 className="font-epilogue text-6xl md:text-7xl font-bold text-yellow-400 mb-8 tracking-tight leading-tight drop-shadow-[0_2px_32px_rgba(247,181,0,0.18)]">
          No Bullshit, Just Building
        </h1>
        <div className="max-w-2xl mx-auto">
          <p className="text-xl md:text-2xl font-epilogue text-yellow-400 italic mb-6 drop-shadow-[0_2px_16px_rgba(247,181,0,0.18)] border-b-2 border-yellow-500/40 pb-4">
            &quot;If you want to build something that lasts, you have to be willing to call out the cracks in the foundation.&quot;
          </p>
          <p className="text-lg md:text-xl font-satoshi text-white/90 leading-snug mb-6">
            After 3.3+ years investing in Berachain, I&apos;m still here—bullish, but not blind. This isn&apos;t a pitch or a victory lap. It&apos;s a builder&apos;s take: what&apos;s working, what&apos;s broken, and what needs to change if Berachain is going to matter in the next cycle. The hype has faded, the tourists are leaving, and what&apos;s left is the core—those who care enough to call out the cracks and still show up to build.
          </p>
          <div className="flex flex-col items-center gap-2 mt-6">
            <span className="text-yellow-400 font-satoshi text-base">Inspired by <a href={OZZY_X_URL} target="_blank" rel="noopener noreferrer" className="underline hover:text-yellow-500">Ozzy (@MEADGod)</a> and the honest feedback of <a href={SMOKEY_X_URL} target="_blank" rel="noopener noreferrer" className="underline hover:text-yellow-500">Smokey (@SmokeyTheBera)</a></span>
          </div>
        </div>
      </section>

      {/* Community Reflections */}
      <section className="max-w-screen-md mx-auto px-4 mb-20 relative z-10">
        <div className="bg-[#18191c]/90 rounded-2xl p-8 shadow-xl border border-yellow-500/40 text-center flex flex-col gap-4">
          <div className="font-epilogue text-2xl text-yellow-400 font-bold mb-2">Community Reflections</div>
          <div className="font-satoshi text-white/90 text-lg mb-2">
            <span className="italic">&quot;Think there's some very good points in here Ozzy - the majority of which are definitely well acknowledged by the core team. Hindsight is def 20/20 and there's stuff that I'd do differently... for Boyco, it would have likely been a lot more related to the selection of assets, a deeper focus on majors + much greater selectivity (if anything) re: LSTs etc. That can also incur even more political problems, as apps might feel snubbed around inclusion etc, but ultimately we made opinionated choices, and some were def incorrect.&quot;</span>
            <br /><br />
            <span className="text-yellow-400">— Smokey, <a href={SMOKEY_X_URL} target="_blank" rel="noopener noreferrer" className="underline hover:text-yellow-500">@SmokeyTheBera</a></span>
          </div>
          <div className="font-satoshi text-white/80 text-base mb-2">
            <span className="italic">&quot;The part of this which I agree with MASSIVELY is the need to operate outside of an insular echo chamber. Berachain has real builders, and strong ones at that. From many convos this week, I can see that other ecos, funds, and founders are pretty aware of that. But in many cases, we've played or PVP'd in our own sandbox as opposed to building effective onboarding funnels, and kind of hoped that launching a token would cause people to want a product.&quot;</span>
            <br /><br />
            <span className="text-yellow-400">— Smokey</span>
          </div>
          <div className="font-satoshi text-white/80 text-base mb-2">
            <span className="italic">&quot;There's a ton of teams (new and old) building things with demand, products that can ultimately generate revenue, onboard massive usergroups, and actually drive value to the whole Bera ecosystem. That's unironically why I'm excited about stuff like Wai Protocol, Credito, Strato, Kettle, USDai, Daylight and others which can drive net new use cases (including institutional), and de-correlated userbases which aren't primarily reliant on the ~10k people who actually do stuff on-chain.&quot;</span>
            <br /><br />
            <span className="text-yellow-400">— Smokey</span>
          </div>
          <div className="font-satoshi text-white/70 text-base">
            <span className="italic">&quot;Sometimes things look dark and scary and sometimes they are dark and scary. But other times it's a matter of perspective and zooming out with a little cope sprinkled on top. The only way out is through and that's exactly where we're gonna go. Appreciate the insights and words, both kind and unkind, from you and the community as a whole. They make us better in the long run.&quot;</span>
            <br /><br />
            <span className="text-yellow-400">— Smokey</span>
          </div>
        </div>
      </section>

      {/* Custom section divider */}
      <div className="w-full flex justify-center mb-20">
        <div className="h-1 w-40 bg-gradient-to-r from-transparent via-yellow-500/60 to-transparent rounded-full shadow-lg" />
      </div>

      {/* What Makes Berachain Special */}
      <section className="max-w-screen-lg mx-auto px-4 mb-32 relative z-10">
        <h2 className="font-epilogue text-5xl md:text-6xl font-bold text-yellow-400 mb-14 tracking-tight text-center leading-tight drop-shadow-[0_2px_32px_rgba(247,181,0,0.18)]">
          What Makes Berachain Different?
        </h2>
        <div className="grid md:grid-cols-2 gap-16">
          {strengths.map((item) => (
            <div key={item.title} className="flex flex-col gap-4 bg-[#18191c]/80 rounded-2xl p-8 shadow-xl border border-yellow-500/20">
              <div className="font-epilogue text-2xl md:text-3xl text-yellow-400 font-bold leading-tight drop-shadow-[0_2px_16px_rgba(247,181,0,0.18)]">
                {item.title}
              </div>
              <div className="font-epilogue text-lg text-yellow-400 italic mb-1 border-l-4 border-yellow-500/60 pl-4">
                {item.highlight}
              </div>
              <div className="font-satoshi text-white/90 text-lg md:text-xl leading-relaxed">
                {item.description}
              </div>
              <div className="font-satoshi text-yellow-500/80 text-base italic mt-2">{item.note}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="w-full flex justify-center mb-24">
        <div className="h-1 w-40 bg-gradient-to-r from-transparent via-yellow-500/60 to-transparent rounded-full shadow-lg" />
      </div>

      {/* Platform Comparison */}
      <section className="max-w-screen-md mx-auto px-4 mb-32 relative z-10">
        <h2 className="font-epilogue text-4xl md:text-5xl font-bold text-yellow-400 mb-10 tracking-tight text-center leading-tight drop-shadow-[0_2px_32px_rgba(247,181,0,0.18)]">
          Berachain at a Glance
        </h2>
        <p className="text-lg font-satoshi text-white/80 mb-8 text-center">
          On paper, Berachain&apos;s features are competitive. But features alone don&apos;t drive adoption—real traction comes from solving for the right users, at the right time. The challenge now is to move from potential to practice.
        </p>
        <div className="overflow-x-auto rounded-2xl bg-[#18191c]/80 p-10 mb-4 shadow-xl border border-yellow-500/20">
          <table className="w-full font-epilogue text-white/90 text-lg">
            <thead>
              <tr className="border-b border-yellow-500/40">
                <th className="text-left py-3 text-yellow-500 font-bold text-xl">Feature</th>
                <th className="text-left py-3 text-yellow-500 font-bold text-xl">Berachain</th>
              </tr>
            </thead>
            <tbody>
              {platformComparison.map((row) => (
                <tr key={row.feature} className="border-b border-yellow-500/10 hover:bg-yellow-500/5 transition-colors">
                  <td className="py-3 font-epilogue font-semibold text-lg">{row.feature}</td>
                  <td className="py-3 font-satoshi text-white/80 text-lg">{row.bera}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div className="w-full flex justify-center mb-24">
        <div className="h-1 w-40 bg-gradient-to-r from-transparent via-yellow-500/60 to-transparent rounded-full shadow-lg" />
      </div>

      {/* Who is Berachain For Now? */}
      <section className="max-w-screen-lg mx-auto px-4 mb-32 relative z-10">
        <h2 className="font-epilogue text-4xl md:text-5xl font-bold text-yellow-400 mb-12 tracking-tight text-center leading-tight drop-shadow-[0_2px_32px_rgba(247,181,0,0.18)]">
          Who Is Berachain For Now?
        </h2>
        <p className="text-lg font-satoshi text-white/80 mb-10 text-center max-w-3xl mx-auto">
          The next chapter isn&apos;t about chasing retail or appeasing degens. It&apos;s about building for:
        </p>
        <div className="grid md:grid-cols-3 gap-10">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="bg-[#18191c]/80 rounded-2xl p-8 shadow-xl border border-yellow-500/20 flex flex-col gap-3">
              <div className="font-epilogue text-2xl text-yellow-400 font-bold">{pillar.title}</div>
              <div className="font-satoshi text-white/90 text-lg">{pillar.description}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="w-full flex justify-center mb-24">
        <div className="h-1 w-40 bg-gradient-to-r from-transparent via-yellow-500/60 to-transparent rounded-full shadow-lg" />
      </div>

      {/* Ecosystem Standouts */}
      <section className="max-w-screen-lg mx-auto px-4 mb-32 relative z-10">
        <h2 className="font-epilogue text-4xl md:text-5xl font-bold text-yellow-400 mb-10 tracking-tight text-center leading-tight drop-shadow-[0_2px_32px_rgba(247,181,0,0.18)]">
          Ecosystem Standouts
        </h2>
        <p className="text-lg font-satoshi text-white/80 mb-8 text-center max-w-3xl mx-auto">
          The Bera ecosystem is powered by a new generation of teams and products, both established and emerging. These builders are driving real demand, onboarding new user groups, and creating value beyond the core. Notable teams include:
        </p>
        <ul className="grid md:grid-cols-2 gap-6 text-white/90 font-satoshi text-lg mb-8 max-w-2xl mx-auto">
          <li><span className="text-yellow-400 font-bold">Wai Protocol</span> (@wai_protocol)</li>
          <li><span className="text-yellow-400 font-bold">Credito</span> (@credidotfi)</li>
          <li><span className="text-yellow-400 font-bold">Strato</span> (@strato_hk)</li>
          <li><span className="text-yellow-400 font-bold">Kettle</span> (@kettle_shop)</li>
          <li><span className="text-yellow-400 font-bold">USDai</span> (@USDai_Official)</li>
          <li><span className="text-yellow-400 font-bold">Daylight</span> (@daylightenergy_)</li>
          <li><span className="text-yellow-400 font-bold">PuffPaw</span> (@puffpaw_xyz)</li>
          <li><span className="text-yellow-400 font-bold">PlayWithOU</span> (@playwithOU)</li>
          <li><span className="text-yellow-400 font-bold">Eden</span> (@EdenWeb3_Global)</li>
          <li><span className="text-yellow-400 font-bold">PawPass</span> (@usepawpass)</li>
          <li><span className="text-yellow-400 font-bold">Berakin</span> (@Berakin_io)</li>
        </ul>
        <p className="text-base font-satoshi text-white/70 text-center max-w-2xl mx-auto">
          These and other teams are building products with real demand, onboarding new users, and helping Berachain break out of its echo chamber. If you&apos;re building, you&apos;re part of the story.
        </p>
      </section>

      <div className="w-full flex justify-center mb-24">
        <div className="h-1 w-40 bg-gradient-to-r from-transparent via-yellow-500/60 to-transparent rounded-full shadow-lg" />
      </div>

      {/* Honest Flaws & Solutions */}
      <section className="max-w-screen-lg mx-auto px-4 mb-32 relative z-10">
        <h2 className="font-epilogue text-4xl md:text-5xl font-bold text-yellow-400 mb-12 tracking-tight text-center leading-tight drop-shadow-[0_2px_32px_rgba(247,181,0,0.18)]">
          What&apos;s Broken &amp; How We Fix It
        </h2>
        <div className="space-y-20">
          {/* Updated flaws with more direct language and lessons learned */}
          <div className="bg-[#18191c]/80 rounded-2xl p-10 border-l-4 border-yellow-500/80 mb-2 shadow-xl">
            <div className="font-epilogue text-2xl text-yellow-400 mb-2 font-bold drop-shadow-[0_2px_16px_rgba(247,181,0,0.18)]">Asset Selection & Incentives</div>
            <div className="font-epilogue text-lg text-yellow-400 italic mb-2 border-l-4 border-yellow-500/60 pl-4">Pain Point</div>
            <div className="font-satoshi text-white/80 text-lg mb-4">Hindsight is 20/20. The selection of assets and LSTs was too broad, diluting incentives and making it harder to build sticky liquidity. Being more selective is politically tough, but necessary for long-term health.</div>
            <div className="font-epilogue text-lg text-yellow-400 italic mb-2 border-l-4 border-yellow-500/60 pl-4">Possible Direction</div>
            <div className="font-satoshi text-white/90 text-lg">Focus on major assets and a smaller set of pools. Make hard, opinionated choices—even if it means some apps feel snubbed. Reward productive, sticky liquidity and let the DEX be the heart of the ecosystem.</div>
          </div>
          <div className="bg-[#18191c]/80 rounded-2xl p-10 border-l-4 border-yellow-500/80 mb-2 shadow-xl">
            <div className="font-epilogue text-2xl text-yellow-400 mb-2 font-bold drop-shadow-[0_2px_16px_rgba(247,181,0,0.18)]">Onboarding & Echo Chamber</div>
            <div className="font-epilogue text-lg text-yellow-400 italic mb-2 border-l-4 border-yellow-500/60 pl-4">Pain Point</div>
            <div className="font-satoshi text-white/80 text-lg mb-4">Berachain has played in its own sandbox, hoping token launches would bring users. This insularity has limited growth and left onboarding funnels underdeveloped.</div>
            <div className="font-epilogue text-lg text-yellow-400 italic mb-2 border-l-4 border-yellow-500/60 pl-4">Possible Direction</div>
            <div className="font-satoshi text-white/90 text-lg">Build real onboarding funnels, amplify new teams, and actively seek cross-ecosystem partnerships. The next wave of growth will come from outside the current circle.</div>
          </div>
          <div className="bg-[#18191c]/80 rounded-2xl p-10 border-l-4 border-yellow-500/80 mb-2 shadow-xl">
            <div className="font-epilogue text-2xl text-yellow-400 mb-2 font-bold drop-shadow-[0_2px_16px_rgba(247,181,0,0.18)]">Builder Support & Recognition</div>
            <div className="font-epilogue text-lg text-yellow-400 italic mb-2 border-l-4 border-yellow-500/60 pl-4">Pain Point</div>
            <div className="font-satoshi text-white/80 text-lg mb-4">Not all teams have felt equally supported, and some pre-mainnet builders feel overlooked. The sense of fairness is fragile, and recognition is often lacking.</div>
            <div className="font-epilogue text-lg text-yellow-400 italic mb-2 border-l-4 border-yellow-500/60 pl-4">Possible Direction</div>
            <div className="font-satoshi text-white/90 text-lg">Actively recognize and reward teams that have shipped through tough times. Build a culture that values consistency, not just hype or newness.</div>
          </div>
          <div className="bg-[#18191c]/80 rounded-2xl p-10 border-l-4 border-yellow-500/80 mb-2 shadow-xl">
            <div className="font-epilogue text-2xl text-yellow-400 mb-2 font-bold drop-shadow-[0_2px_16px_rgba(247,181,0,0.18)]">Governance & Decentralization</div>
            <div className="font-epilogue text-lg text-yellow-400 italic mb-2 border-l-4 border-yellow-500/60 pl-4">Pain Point</div>
            <div className="font-satoshi text-white/80 text-lg mb-4">Despite the rhetoric, governance is still too centralized. Key decisions are made by a small group, and the community&apos;s voice is often drowned out.</div>
            <div className="font-epilogue text-lg text-yellow-400 italic mb-2 border-l-4 border-yellow-500/60 pl-4">Possible Direction</div>
            <div className="font-satoshi text-white/90 text-lg">Move toward real onchain governance. Give more weight to long-term builders, pre-mainnet contributors, and active users—not just whales or insiders.</div>
          </div>
        </div>
      </section>

      <div className="w-full flex justify-center mb-28">
        <div className="h-1 w-40 bg-gradient-to-r from-transparent via-yellow-500/60 to-transparent rounded-full shadow-lg" />
      </div>

      {/* CTA */}
      <section className="max-w-screen-md mx-auto px-4 mb-40 text-center relative z-10">
        <h2 className="font-epilogue text-5xl md:text-8xl font-bold text-yellow-400 mb-10 tracking-tight leading-tight drop-shadow-[0_2px_32px_rgba(247,181,0,0.18)]">
          Where Do We Go From Here?
        </h2>
        <p className="font-epilogue text-2xl text-yellow-400 italic mb-8 max-w-2xl mx-auto drop-shadow-[0_2px_16px_rgba(247,181,0,0.18)] border-b-2 border-yellow-500/40 pb-4">
          &quot;The best chains are built by those who care enough to call bullshit—and then do the work.&quot;
        </p>
        <p className="text-lg md:text-xl font-satoshi text-white/80 mb-12 max-w-2xl mx-auto">
          The Bera ecosystem is unique for its density of talent and the camaraderie among builders. Even when things look dark, the community keeps showing up and shipping. That&apos;s our edge. If you&apos;re here, you matter. Let&apos;s lock in, support each other, and write history together.
        </p>
        <Link href="https://docs.berachain.com/" target="_blank">
          <Button className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 text-black font-bold px-12 py-6 rounded-2xl shadow-[0_8px_32px_0_rgba(247,181,0,0.18)] hover:from-yellow-500 hover:to-yellow-400 transition-all duration-300 font-epilogue tracking-tight text-2xl focus:ring-4 focus:ring-yellow-500/40">
            Berachain Docs <ArrowRight className="ml-4 w-7 h-7" />
          </Button>
        </Link>
      </section>
    </div>
  );
}
