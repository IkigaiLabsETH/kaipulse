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
