'use client';

import { useEffect } from 'react';

export default function FrancePage() {
  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.section').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-satoshi">
      {/* Premium header accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <article className="space-y-16">
          {/* Hero Section */}
          <header className="text-center space-y-8">
            <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">
              European Economy • Pensions • AI Impact
            </p>
            <h1 className="text-center">
              <span className="text-4xl md:text-6xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
                The Great European Betrayal
              </span>
            </h1>
            <div className="flex items-center justify-center mt-6">
              <div className="h-px w-24 bg-yellow-500/30"></div>
              <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">
                Pensions, Porsche Prices, and the Coming AI Reckoning
              </p>
              <div className="h-px w-24 bg-yellow-500/30"></div>
            </div>
          </header>

          {/* Introduction */}
          <section className="section space-y-6 opacity-0">
            <p className="text-lg leading-relaxed text-white/90">
              In Europe, we are quietly living through a systemic failure masquerading as social stability.
            </p>
            <p className="text-lg leading-relaxed text-white/90">
              We are told to trust in our pension systems. We are told that public contributions are a social good, that the state will take care of us, and that fairness is baked into the contract.
            </p>
            <p className="text-lg leading-relaxed text-white/90">
              But the numbers are lying. And beneath the numbers lies something worse: a generational betrayal that will soon be impossible to ignore.
            </p>
            <p className="text-lg leading-relaxed text-white/90">
              Let&apos;s unravel the tapestry, thread by thread.
            </p>
          </section>

          {/* The Pension Illusion */}
          <section className="section space-y-6 opacity-0">
            <h2 className="text-3xl font-bold text-yellow-500">🧾 The Pension Illusion</h2>
            <div className="bg-[#1c1f26] p-6 rounded-xl border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <p className="text-lg leading-relaxed text-white/90 mb-4">
                Start here: A typical European worker pays €600 a month into the state pension system over a 43-year career. That&apos;s €309,600 in contributions. In return, when you hit 64, you&apos;re promised a retirement income of about 70% of your salary, totaling roughly €350,000 across the remaining years of your life.
              </p>
              <p className="text-lg leading-relaxed text-white/90 mb-4">
                At face value, this sounds fair.
              </p>
              <p className="text-lg leading-relaxed text-white/90">
                But what if you invested those €600/month into a basic global stock market index fund, earning the historical 7% annual return? By retirement, you&apos;d have €1.88 million. That&apos;s five times the amount the state returns to you. And unlike the government payout, it&apos;s yours, not subject to political whim, demographic collapse, or inflation games.
              </p>
            </div>
            <p className="text-lg leading-relaxed text-white/90">
              So why are we settling for scraps from a broken system, when compounding interest could make us free?
            </p>
          </section>

          {/* Made in Europe Section */}
          <section className="section space-y-6 opacity-0">
            <h2 className="text-3xl font-bold text-yellow-500">🇪🇺 Made in Europe, Priced Like It&apos;s Imported</h2>
            <p className="text-lg leading-relaxed text-white/90">
              Now zoom out to consumption. Why does a Porsche 911 cost $127,000 in the U.S., but $195,000 in Europe—despite being manufactured in Europe?
            </p>
            <div className="bg-[#1c1f26] p-6 rounded-xl border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <p className="text-lg leading-relaxed text-white/90 mb-4">
                Because the system isn&apos;t just inefficient—it&apos;s extractive:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed text-white/90">
                <li>VAT and CO₂ taxes eat up tens of thousands.</li>
                <li>Horsepower penalties, luxury levies, and registration extortion pile on top.</li>
                <li>And because carmakers can get away with it, they price discriminate, gouging European buyers to subsidize U.S. market competitiveness.</li>
              </ul>
            </div>
            <p className="text-lg leading-relaxed text-white/90">
              It&apos;s not just a car—it&apos;s a parable. We&apos;re taxed like aristocrats, but treated like serfs.
            </p>
          </section>

          {/* Demographic Section */}
          <section className="section space-y-6 opacity-0">
            <h2 className="text-3xl font-bold text-yellow-500">🧮 1 Worker, 1 Retiree—A Demographic Death Spiral</h2>
            <div className="bg-[#1c1f26] p-6 rounded-xl border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <p className="text-lg leading-relaxed text-white/90 mb-4">
                In the post-war boom, Europe&apos;s pension system was sustainable: 4 workers per retiree. That workforce paid forward into the system, trusting the same would be done for them.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="text-center">
                  <p className="text-2xl font-bold text-yellow-500">Today</p>
                  <p className="text-xl">1.8 workers per retiree</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-yellow-500">By 2045</p>
                  <p className="text-xl">1 to 1</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-yellow-500">Result</p>
                  <p className="text-xl">Ponzi scheme without enough new players</p>
                </div>
              </div>
            </div>
            <p className="text-lg leading-relaxed text-white/90">
              This isn&apos;t fearmongering. It&apos;s simple math.
            </p>
            <p className="text-lg leading-relaxed text-white/90">
              Yet politicians keep pretending we can tweak retirement ages, raise taxes a little more, and survive. But the house is already on fire—and AI is bringing gasoline.
            </p>
          </section>

          {/* AI Section */}
          <section className="section space-y-6 opacity-0">
            <h2 className="text-3xl font-bold text-yellow-500">🤖 The Real Threat Isn&apos;t Retirement—It&apos;s Redundancy</h2>
            <p className="text-lg leading-relaxed text-white/90">
              AI and automation are not the future. They are the present.
            </p>
            <div className="bg-[#1c1f26] p-6 rounded-xl border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed text-white/90">
                <li>Coders replaced by GitHub Copilot.</li>
                <li>Analysts outpaced by ChatGPT.</li>
                <li>Customer support handled by fine-tuned LLMs.</li>
                <li>Drivers, cleaners, editors, even lawyers—under siege from software and sensors.</li>
              </ul>
            </div>
            <p className="text-lg leading-relaxed text-white/90">
              When work disappears, so does wage-based taxation. So does the social contract. So does the pension model.
            </p>
            <p className="text-lg leading-relaxed text-white/90">
              Because if machines do the work, but only corporations own the machines, then what does the average citizen contribute to… or benefit from?
            </p>
            <p className="text-lg leading-relaxed text-white/90">
              We&apos;re entering a post-labor economy with pre-industrial safety nets.
            </p>
          </section>

          {/* Solutions Section */}
          <section className="section space-y-6 opacity-0">
            <h2 className="text-3xl font-bold text-yellow-500">🧭 Toward a New Contract: Investment, Not Extraction</h2>
            <p className="text-lg leading-relaxed text-white/90">
              We need a radical reset. Not ideological—mathematical. Here&apos;s how we rebuild:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#1c1f26] p-6 rounded-xl border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <h3 className="text-xl font-bold text-yellow-500 mb-4">🏦 Auto-Invest Instead of Auto-Tax</h3>
                <p className="text-lg leading-relaxed text-white/90">
                  Imagine every worker&apos;s contribution going directly into a state-curated index fund, compounding over decades, instead of disappearing into a political black hole. Let each citizen be an investor, not a donor.
                </p>
              </div>
              <div className="bg-[#1c1f26] p-6 rounded-xl border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <h3 className="text-xl font-bold text-yellow-500 mb-4">🤝 AI Dividends for All</h3>
                <p className="text-lg leading-relaxed text-white/90">
                  If AI increases GDP, then AI-generated wealth must be distributed. Not via UBI as welfare, but as Universal Basic Assets—equity in the AI economy itself. This is how you avoid serfdom in a robot-run world.
                </p>
              </div>
              <div className="bg-[#1c1f26] p-6 rounded-xl border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <h3 className="text-xl font-bold text-yellow-500 mb-4">🌍 Sovereign Tech Wealth Funds</h3>
                <p className="text-lg leading-relaxed text-white/90">
                  If Norway can turn oil into a sovereign wealth fund, Europe can turn AI innovation into national endowments—funding retirement, healthcare, and resilience. Why not fund pensions from OpenAI-level profits, not just payroll taxes?
                </p>
              </div>
              <div className="bg-[#1c1f26] p-6 rounded-xl border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <h3 className="text-xl font-bold text-yellow-500 mb-4">💸 Pension 2.0: A Capital-Based System</h3>
                <p className="text-lg leading-relaxed text-white/90">
                  Stop relying on the next generation of workers. They&apos;re not coming. Build capital pools, not contribution chains. Build for autonomy, not dependency.
                </p>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="section space-y-6 opacity-0">
            <h2 className="text-3xl font-bold text-yellow-500">🧨 A Final Reckoning</h2>
            <p className="text-lg leading-relaxed text-white/90">
              Europe stands at a crossroads—between nostalgia and evolution.
            </p>
            <div className="bg-[#1c1f26] p-6 rounded-xl border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <p className="text-lg leading-relaxed text-white/90 mb-4">
                We can keep tweaking a broken system, raising taxes, delaying retirement, pretending we&apos;re solving a demographic timebomb.
                Or we can confront the truth:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed text-white/90">
                <li>The old pension model is obsolete.</li>
                <li>The tax structure is predatory.</li>
                <li>The wage economy is shrinking.</li>
                <li>And the machines are not just replacing work—they&apos;re replacing the logic of work itself.</li>
              </ul>
            </div>
            <p className="text-lg leading-relaxed text-white/90">
              It&apos;s not too late to act. But it is too late to pretend.
            </p>
            <p className="text-lg leading-relaxed text-white/90">
              The real retirement crisis isn&apos;t about money—it&apos;s about imagination.
              The system failed. But our future doesn&apos;t have to.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
