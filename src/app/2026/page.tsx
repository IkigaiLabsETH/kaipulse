"use client";

import { motion } from 'framer-motion';

const Section = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <motion.div
    className={`bg-[#1c1f26] rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] p-8 space-y-6 ${className}`}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6 }}
  >
    {children}
  </motion.div>
);

const ActTitle = ({ number, title }: { number: string; title: string }) => (
  <div className="flex items-baseline gap-4">
    <span className="text-4xl md:text-5xl font-bold text-yellow-500 font-satoshi">{number}</span>
    <h3 className="text-2xl md:text-3xl font-bold text-white tracking-wide">{title}</h3>
  </div>
);

const Paragraph = ({ children }: { children: React.ReactNode }) => (
  <p className="text-white/80 text-lg leading-relaxed">{children}</p>
);

export default function BeyondTheHalvingPage() {
  return (
    <div className="min-h-screen bg-black text-white font-satoshi">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-50"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="space-y-16">
          {/* Hero Section */}
          <header className="text-center space-y-6">
            <p className="uppercase tracking-[0.3em] text-yellow-500/80 text-sm font-light">
              A Macro Editorial by IKIGAI LABS XYZ
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.4)]">
              🚀 Beyond the Halving
            </h1>
            <h2 className="text-2xl md:text-3xl text-white/90 font-light">
              Bitcoin&apos;s Path to Parabolic Escape Velocity
            </h2>
            <div className="flex items-center justify-center pt-4">
              <div className="h-px w-24 bg-yellow-500/30"></div>
              <div className="h-px w-24 bg-yellow-500/30"></div>
            </div>
          </header>

          {/* Acts */}
          <main className="space-y-12">
            <Section>
              <ActTitle number="I" title="The Halving Has Spoken" />
              <Paragraph>
                On April 20th, 2024, Bitcoin whispered its fourth epochal truth into the void — the halving. An event so deceptively simple yet so profoundly catalytic, it cuts miner rewards in half, but historically sets fire to the second half of the bull cycle. It&apos;s not magic — it&apos;s memetics and math. What follows is never guaranteed, but history? History rhymes.
              </Paragraph>
              <Paragraph>
                The charts don&apos;t lie. They sing. And this cycle, they&apos;re echoing a now-familiar chorus: &quot;74 bars from halving to peak.&quot; The last three major cycles have traced this exact arc — from halving day to all-time highs — in 74 to 78 weekly bars. It&apos;s not prophecy, but it&apos;s close enough to feel like clockwork in a chaotic market.
              </Paragraph>
               <Paragraph>
                April 2024 was T-minus Zero. That sets us on a collision course with mid-to-late 2025 — the predicted top zone. And if you&apos;re still measuring this market with your ruler from TradFi, it&apos;s time to upgrade to a logarithmic scale.
              </Paragraph>
            </Section>

            <Section>
              <ActTitle number="II" title="The Log Curve Knows" />
              <Paragraph>
                Enter the first chart: a logarithmic channel dating back to 2012, overlayed with key EMA ribbons and RSI signals. For over a decade, Bitcoin has respected this rising corridor with religious consistency. Price accelerates, gets rejected at the top, retraces toward the midline, and reloads. Rinse. Repeat. But each cycle ascends higher — not linearly, but exponentially.
              </Paragraph>
              <Paragraph>
                Right now, we&apos;re mid-channel, nudging toward a breakout zone. If this breakout holds — and ETF flows, nation-state adoption, and institutional spillover suggest it might — then the next price cluster sits between $250K and $450K. Bold? Maybe. But not unprecedented.
              </Paragraph>
              <Paragraph>
                And the upper bound? It hints at $928K by 2026. That&apos;s not hopium. That&apos;s an 803% measured move in line with Bitcoin&apos;s historical post-halving expansions. Every previous cycle has logged at least a 10x from bottom to top. This one began near $15K. Do the math.
              </Paragraph>
            </Section>

            <Section>
              <ActTitle number="III" title="Cup, Handle, and the Coming Parabola" />
              <Paragraph>
                The second chart adds another layer: the Cup & Handle formation. Formed across multiple years and completed just post-halving, this pattern is among the most bullish in technical analysis — a long consolidation base followed by a breakout and aggressive markup.
              </Paragraph>
              <Paragraph>
                The measured move targets between $170K and $200K, but that&apos;s just the technical minimum. If we combine this with the logarithmic channel breakout, the price target stretches beyond even Bitcoin&apos;s most bullish prior cycle, when it rocketed from $3K to $69K in under two years.
              </Paragraph>
               <Paragraph>
                A breakout here, from $100K to $200K, is plausible, but the next escape velocity move — the one that breaks the matrix — is what propels BTC from &quot;digital gold&quot; to &quot;reserve asset.&quot;
              </Paragraph>
            </Section>

            <Section>
              <ActTitle number="IV" title="The Narrative Flywheel" />
              <Paragraph>
                Let&apos;s talk memetics. Every Bitcoin cycle rides a narrative flywheel:
              </Paragraph>
              <ul className="list-disc list-inside space-y-2 text-white/80 text-lg pl-4">
                  <li><span className="font-bold text-yellow-500/90">2013:</span> Magic Internet Money</li>
                  <li><span className="font-bold text-yellow-500/90">2017:</span> Ethereum, ICOs, Store of Value</li>
                  <li><span className="font-bold text-yellow-500/90">2021:</span> NFTs, Corporate Adoption, Inflation Hedge</li>
                  <li><span className="font-bold text-yellow-500/90">2025:</span> AI, Sovereignty, and the End of Fiat Trust</li>
              </ul>
              <Paragraph>
                This time, the convergence of macro collapse (debt spiral, dollar debasement) with AI-native coordination systems (DAOs, agents, sovereign compute) gives Bitcoin its ultimate narrative: the base layer of human digital autonomy. Every halving is a ritual, a reminder that entropy is real, but so is scarcity.
              </Paragraph>
            </Section>

            <Section>
              <ActTitle number="V" title="The Playbook Ahead" />
              <div className="space-y-6">
                <div className="border-l-4 border-yellow-500 pl-4 py-2">
                    <h4 className="text-xl font-bold text-white">🧠 1. Key Psychological Pivot = $100K</h4>
                    <p className="text-white/80 mt-1">Once BTC reclaims and holds $100K, all eyes will turn toward the next Fibonacci confluence zones: $170K, $250K, and $450K+. At that point, disbelief gives way to FOMO, and liquidity flows exponentially.</p>
                </div>
                <div className="border-l-4 border-yellow-500 pl-4 py-2">
                    <h4 className="text-xl font-bold text-white">🧮 2. Rebalancing Strategy</h4>
                     <ul className="list-disc list-inside space-y-2 text-white/80 mt-2 pl-2">
                        <li><span className="font-semibold text-white/90">Between $100K and $170K:</span> Trim 10–20% into stable-yield strategies.</li>
                        <li><span className="font-semibold text-white/90">Between $170K and $300K:</span> Consider funding ecosystem bets.</li>
                        <li><span className="font-semibold text-white/90">Above $300K:</span> Go illiquid. Real assets, strategic equity, or support a Bitcoin-native city.</li>
                    </ul>
                </div>
                <div className="border-l-4 border-yellow-500 pl-4 py-2">
                    <h4 className="text-xl font-bold text-white">📊 3. Macro Watch Points</h4>
                    <ul className="list-disc list-inside space-y-2 text-white/80 mt-2 pl-2">
                        <li>Fed pivot signals or rate cuts = more upside</li>
                        <li>Spot ETF net inflows = strong fuel</li>
                        <li>Election cycle instability = increased BTC narrative</li>
                    </ul>
                </div>
              </div>
            </Section>

            {/* Final Act */}
            <section className="text-center space-y-8 py-10">
                 <h3 className="text-3xl md:text-4xl font-bold text-white italic">
                    What if they&apos;re all right?
                 </h3>
                 <p className="text-xl text-white/70 max-w-2xl mx-auto">
                    What if the log curve maximalists and the halving historians and the memecoin degenerates are all right? What if the top isn&apos;t $200K, but $928K? And what if you, reading this now, are early?
                 </p>
            </section>
            
            <Section className="!bg-yellow-500/90 !border-yellow-300 text-center">
                <p className="text-2xl font-bold text-black [text-shadow:_0_1px_1px_rgba(0,0,0,0.2)]">
                    We ride until 2026. But not just to make money. <br/> We ride to win the narrative.
                </p>
            </Section>

            <footer className="text-center pt-8">
                 <p className="text-lg tracking-widest text-yellow-500 font-mono">
                    🟠 Stay sovereign. Stay weird. Stay early.
                 </p>
            </footer>

          </main>
        </div>
      </div>
    </div>
  );
}
