import { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, CheckCircle2, Rocket, Target, Zap, Shield } from "lucide-react";

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
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#1c1f26] border-2 border-yellow-500 shadow-[3px_3px_0px_0px_rgba(234,179,8,1)] flex items-center justify-center flex-shrink-0">
                  <span className="font-semibold text-yellow-400">1</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-yellow-400">Strategic Entry</h3>
                  <p className="text-muted-foreground">
                    Find 1-2 microcaps under or near $1M market cap with real utility, active teams, and steady charts. Avoid hype and rugs — you&apos;re not gambling, you&apos;re filtering for survivors.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#1c1f26] border-2 border-yellow-500 shadow-[3px_3px_0px_0px_rgba(234,179,8,1)] flex items-center justify-center flex-shrink-0">
                  <span className="font-semibold text-yellow-400">2</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-yellow-400">Initial Deployment</h3>
                  <p className="text-muted-foreground">
                    Split $900 into two $450 bets. Dive into their Telegrams, ask hard questions, and hunt for a clean 3x. Hit that? Sell 50%. Now you&apos;ve got $1,350 in capital and $1,350 in unrealized gains.
                  </p>
                </div>
              </div>
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
              <Shield className="w-6 h-6" />
              Risk Management Rules
            </h2>
            <div className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                  <span>Always secure profits by taking 50% off the table at 3x returns</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                  <span>Maintain a moonbag in your best performing position</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                  <span>Never reinvest more than 50% of your profits</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                  <span>Keep detailed records of all trades and profit-taking points</span>
                </li>
              </ul>
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
