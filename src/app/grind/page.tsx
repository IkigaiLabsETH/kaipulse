import { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, CheckCircle2, Rocket, Target, Zap, Shield, ArrowUpRight, Trophy, Flag } from "lucide-react";

export const metadata: Metadata = {
  title: "The $1K Grind Challenge - Turn $1,000 into $100K",
  description: "A strategic approach to turning $1,000 into $100K through calculated microcap investments and disciplined trading. For educational purposes only.",
};

export default function GrindPage() {
  return (
    <div className="min-h-screen bg-black relative">
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/5 via-transparent to-transparent pointer-events-none" />
      <div className="container mx-auto px-4 py-24 max-w-4xl relative">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            The $1K Grind Challenge
          </h1>
          <p className="text-xl text-muted-foreground">
            From sidelined to strategic: A disciplined path to turning $1,000 into $100K
          </p>
        </header>

        <div className="grid gap-8">
          <Card className="p-6 bg-[#1c1f26] border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-yellow-400">
              <TrendingUp className="w-6 h-6" />
              The Silent Majority
            </h2>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                There&apos;s a silent majority sitting on $1k or less, feeling sidelined just as the market heats up. You stuck around through the cold, traded too much or held the wrong bags — and now you&apos;re watching from the bench. It sucks. You didn&apos;t quit, but it still feels like you lost.
              </p>
              <p className="text-yellow-400 font-semibold">
                But if you still have $1k? You&apos;re not out.
              </p>
              <p className="text-muted-foreground">
                The Overton window has shifted. Even altcoin traders now admit Bitcoin is the top asset, but claim it&apos;s &quot;too late&quot; for normal folks to stack enough for meaningful gains. While Bitcoin has averaged ~50% annually over the past decade (compared to S&P 500&apos;s ~10%), that 30-50% annual return isn&apos;t enough when you&apos;re starting with less than $5,000. For those with $100k+ and an understanding of compounding, Bitcoin is the clear choice. But for the impatient with limited capital? Microcaps offer a different path.
              </p>
              <p className="text-muted-foreground">
                You don&apos;t have time for a safe 2x in BTC or ETH. If this is a short, explosive run, time is not your ally. Therefore, you need asymmetric bets — smart, not desperate.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="p-4 rounded-lg bg-[#1c1f26] border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                  <h3 className="font-semibold mb-2 text-yellow-400">Initial Capital</h3>
                  <p className="text-2xl font-bold">$1,000</p>
                </div>
                <div className="p-4 rounded-lg bg-[#1c1f26] border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                  <h3 className="font-semibold mb-2 text-yellow-400">Target Goal</h3>
                  <p className="text-2xl font-bold">$100,000</p>
                </div>
                <div className="p-4 rounded-lg bg-[#1c1f26] border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                  <h3 className="font-semibold mb-2 text-yellow-400">Time Frame</h3>
                  <p className="text-2xl font-bold">2-3 Months</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-[#1c1f26] border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-yellow-400">
              <Rocket className="w-6 h-6" />
              Phase 1: Microcap Ascent
            </h2>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Find 1-2 microcaps under or near $1M market cap with real utility, active teams, and steady charts. Avoid hype and rugs — you&apos;re not gambling, you&apos;re filtering for survivors.
              </p>
              <p className="text-muted-foreground">
                Split $900 into two $450 bets. Dive into their Telegrams, ask hard questions, and hunt for a clean 3x. Hit that? Sell 50%. Now you&apos;ve got $1,350 in capital and $1,350 in unrealized gains.
              </p>
            </div>
          </Card>

          <Card className="p-6 bg-[#1c1f26] border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-yellow-400">
              <Target className="w-6 h-6" />
              Phase 2: Controlled Expansion
            </h2>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Repeat the process with the $1,350 across two new projects. Now you&apos;ve got four positions. Odds are:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                  <span>One 10x</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                  <span>One 3x</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                  <span>One flat</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                  <span>One flop</span>
                </li>
              </ul>
              <p className="text-yellow-400 font-semibold mt-4">
                You&apos;re sitting around $6k. You&apos;re in the game.
              </p>
            </div>
          </Card>

          <Card className="p-6 bg-[#1c1f26] border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-yellow-400">
              <Zap className="w-6 h-6" />
              Phase 3: Momentum Swing
            </h2>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Sell 50% of your 10x. That gives you $3k in fresh ammo. Deploy that into 3 new plays — slightly higher caps ($5M), riding momentum, not predicting it.
              </p>
              <p className="text-muted-foreground">
                Two succeed, one flat? You&apos;re now around $8k–$10k.
              </p>
              <p className="text-yellow-400 font-semibold">
                Wrong move. Take $1k off the table. Realized. Untouchable.
              </p>
            </div>
          </Card>

          <Card className="p-6 bg-[#1c1f26] border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-yellow-400">
              <ArrowUpRight className="w-6 h-6" />
              Phase 4: Mid-Cap Upgrades
            </h2>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Clean up the portfolio. Kill laggards. Ride the strong hands. You probably still have a moonbag worth $1k. That one could 5x–10x while you&apos;re working elsewhere.
              </p>
              <p className="text-muted-foreground">
                Now you&apos;re doing $2k trades, looking for quick 2x–3x momentum swings. Two wins here, and you&apos;re at $12k. Again, take some off, stash a moonbag, and sell the rest.
              </p>
            </div>
          </Card>

          <Card className="p-6 bg-[#1c1f26] border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-yellow-400">
              <Trophy className="w-6 h-6" />
              Phase 5: Big League
            </h2>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                With $10k liquid, you move into $5k trades. More conservative, more stable. You target safer 2x gains on trending alts. Take profits faster. A single clean 2x gets you to $15k —
              </p>
              <p className="text-muted-foreground">
                Meanwhile, that original moonbag? Maybe it 10xed. That&apos;s another $10k.
              </p>
              <p className="text-yellow-400 font-semibold">
                You&apos;re at $25k. Cash out $5k. Realized profits now total $6k.
              </p>
            </div>
          </Card>

          <Card className="p-6 bg-[#1c1f26] border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-yellow-400">
              <Shield className="w-6 h-6" />
              Phase 6: Professional Mode
            </h2>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                You&apos;re now making $5k trades, aiming for 10–20% swings. Or small $5k microcap plays. The goal isn&apos;t doubling — it&apos;s compounding $5k wins. Do it 5 times? You&apos;re at $50k.
              </p>
              <p className="text-yellow-400 font-semibold">
                Feel like a genius? You are. But slow down. Cash out $14k more. Realized profits now $20k. Even if it all crashes, you turned $1k into $20k. You won.
              </p>
            </div>
          </Card>

          <Card className="p-6 bg-[#1c1f26] border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-yellow-400">
              <Flag className="w-6 h-6" />
              Final Phase: Exit Plan
            </h2>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                You keep compounding, but the mindset has shifted:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                  <span>You&apos;re playing with house money.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                  <span>You never re-fund the account.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                  <span>You treat $100k as done — not a starting line.</span>
                </li>
              </ul>
              <p className="text-muted-foreground mt-4">
                That&apos;s how you go from $1k to $100k. Not by chasing, but by surviving, compounding, and exiting.
              </p>
              <p className="text-muted-foreground">
                If it doesn&apos;t work out? Maybe this wasn&apos;t your cycle. That&apos;s not failure — it&apos;s tuition. Focus on your job, business, family. Crypto will always be here. Your time is the scarce asset.
              </p>
            </div>
          </Card>

          <Card className="p-6 bg-[#1c1f26] border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-yellow-400">
              <Shield className="w-6 h-6" />
              Personal Trading Principles
            </h2>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Success isn&apos;t just about the strategy — it&apos;s about the rules you live by. Here are the non-negotiables:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                  <span>Zero leverage — know your limits and stick to them</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                  <span>10% of liquid holdings sold on every screenshot shared</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                  <span>Tax money in treasuries, never in algorithmic stables</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                  <span>10% of post-tax profits reserved for art you love</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                  <span>NFT bags hitting 7 figures? Instant 50% market dump</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                  <span>Max 5% in sub-10M mcap plays</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                  <span>Max 5% in angel investments</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                  <span>Once you hit $100k, shift focus to Bitcoin and blue chips</span>
                </li>
              </ul>
              <p className="text-yellow-400 font-semibold mt-4">
                A 5x this cycle is enough to comfortably exit. This isn&apos;t 2021 — it&apos;s okay to be defensive.
              </p>
              <p className="text-muted-foreground">
                Keep 80%+ in boring blue chips.<br />
                You&apos;re not trying to turn nothing into everything anymore. You&apos;re playing the long game.
              </p>
            </div>
          </Card>

          <Card className="p-6 bg-[#1c1f26] border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-yellow-400">
              <Shield className="w-6 h-6" />
              Microcap Risk Management Framework
            </h2>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Trading microcaps without proper risk management is a recipe for disaster. Every token is unique, and your position sizes should reflect that. Here&apos;s a systematic approach:
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-yellow-400 mb-2">The Rating System (1-10)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-[#1c1f26] border border-yellow-500/50">
                      <h4 className="font-semibold text-yellow-400 mb-2">Level 1 (Highest Risk)</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-yellow-400">•</span>
                          <span>Brand new launches</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-yellow-400">•</span>
                          <span>No website or track record</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-yellow-400">•</span>
                          <span>High taxes, bundled supply</span>
                        </li>
                      </ul>
                    </div>
                    <div className="p-4 rounded-lg bg-[#1c1f26] border border-yellow-500/50">
                      <h4 className="font-semibold text-yellow-400 mb-2">Level 10 (Lowest Risk)</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-yellow-400">•</span>
                          <span>Years of proven track record</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-yellow-400">•</span>
                          <span>Transparent team and operations</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-yellow-400">•</span>
                          <span>Established community and trust</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-yellow-400 mb-2">Position Sizing Strategy</h3>
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg bg-[#1c1f26] border border-yellow-500/50">
                      <h4 className="font-semibold text-yellow-400 mb-2">Base Unit Calculation</h4>
                      <p className="text-sm text-muted-foreground">
                        Determine your base unit - an amount you&apos;d be upset losing for 5 minutes then get over it. For most microcap traders, this is around 0.25 ETH.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="p-4 rounded-lg bg-[#1c1f26] border border-yellow-500/50">
                        <h4 className="font-semibold text-yellow-400 mb-2">Level 1-2 (Gambles)</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <span className="text-yellow-400">•</span>
                            <span>0.1 ETH per position</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-yellow-400">•</span>
                            <span>Max 2-3 positions</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-yellow-400">•</span>
                            <span>Expect 2 rugs, 1 5-10x</span>
                          </li>
                        </ul>
                      </div>

                      <div className="p-4 rounded-lg bg-[#1c1f26] border border-yellow-500/50">
                        <h4 className="font-semibold text-yellow-400 mb-2">Level 3-6 (Core)</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <span className="text-yellow-400">•</span>
                            <span>0.25 ETH per position</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-yellow-400">•</span>
                            <span>4 positions (30% portfolio)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-yellow-400">•</span>
                            <span>Target 2x, hold strength</span>
                          </li>
                        </ul>
                      </div>

                      <div className="p-4 rounded-lg bg-[#1c1f26] border border-yellow-500/50">
                        <h4 className="font-semibold text-yellow-400 mb-2">Level 7-10 (Premium)</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <span className="text-yellow-400">•</span>
                            <span>0.75-1 ETH per position</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-yellow-400">•</span>
                            <span>1-2 positions max</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-yellow-400">•</span>
                            <span>Target 50% returns</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-[#1c1f26] border border-yellow-500/50">
                  <h4 className="font-semibold text-yellow-400 mb-2">Portfolio Example (3 ETH)</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400">•</span>
                      <span>3 gambles (0.1 ETH each) = 0.3 ETH</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400">•</span>
                      <span>4 core positions (0.25 ETH each) = 1 ETH</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400">•</span>
                      <span>2 premium positions (0.75 ETH each) = 1.5 ETH</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400">•</span>
                      <span>0.5 ETH reserved for opportunities</span>
                    </li>
                  </ul>
                </div>

                <p className="text-yellow-400 font-semibold">
                  Remember: The goal isn&apos;t to hit home runs on every trade. It&apos;s to manage risk while giving yourself enough exposure to catch the big moves when they happen.
                </p>
              </div>
            </div>
          </Card>

          <div className="text-center mt-8">
            <Button size="lg" className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-semibold">
              Start Your Challenge
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              For educational purposes only. Not financial advice.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
