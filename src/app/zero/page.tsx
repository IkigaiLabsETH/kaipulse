'use client';

import Image from 'next/image';

const navalSection = {
  title: "Naval Ravikant Doesn't Believe in Retirement",
  subtitle: "a \"dangerous fantasy for people trapped in jobs they hate.\"",
  content: `Instead, he lives "retirement in motion"—building freedom now, not someday.

Naval's system is simple:
• Build wealth that works for you.
• Do work that feels like play.
• Need less to be happy.

Most people, though, still follow the old script:
Work for decades, defer happiness, and hope to be free… someday.

But what if you didn't wait?
What if you saw the future—and acted early?`,
  pillars: [
    {
      icon: "💡",
      title: "Build wealth that works for you."
    },
    {
      icon: "🎨",
      title: "Do work that feels like play."
    },
    {
      icon: "🧘‍♂️",
      title: "Need less to be happy."
    }
  ],
  contrast: "Work for decades, defer happiness, and hope to be free someday?",
  transition: "What if you didn't wait? What if you saw the future—and acted?"
};

const sections = [
  {
    title: "Most Millionaires Will Never Own 0.05 Bitcoin",
    subtitle: "And That's Okay — They're Normal. You're Not.",
    content: `In 2025, Steve is a millionaire.
He's not a tech bro or crypto anarchist.
He's a well-off, well-adjusted adult with a healthy portfolio.`,
    assets: [
      { color: "yellow", amount: "$400,000", type: "home equity" },
      { color: "yellow", amount: "$350,000", type: "in retirement accounts" },
      { color: "yellow", amount: "$200,000", type: "in brokerage" },
      { color: "yellow", amount: "$50,000", type: "in cash" }
    ],
    additionalContent: `That's $1 million net worth. He's in the top 1%, with the house, the vacations, the stability.

You try to talk to Steve about Bitcoin. You explain it plainly:

"At $100,000 per coin, your net worth is 10 BTC. But globally, there are less than 0.3 BTC per millionaire. That's how scarce this asset is."

Steve listens. He nods. He even appreciates the thought.
But he doesn't act. Why?
Because Steve is normal.`
  },
  {
    year: "2032",
    price: "$1.8M",
    content: `Steve's worth has doubled. He's now worth $2 million.`,
    assets: [
      { color: "yellow", amount: "$800K", type: "home equity" },
      { color: "yellow", amount: "$650K", type: "retirement" },
      { color: "yellow", amount: "$450K", type: "brokerage" },
      { color: "yellow", amount: "$100K", type: "in cash" }
    ],
    additionalContent: `The world has shifted. Bitcoin has proven itself.
Steve finally acts:
He puts 30% of his cash and 20% of his safe assets into Bitcoin.
His friends say he's nuts.

"Sure, 5% is fine — but this much? That's too aggressive."

Now Steve owns 0.06 BTC.

It's a start.`
  },
  {
    year: "2036",
    price: "$3.7M",
    content: `The fog lifts. Bitcoin isn't an "investment" anymore — it's the base layer of money.`,
    additionalContent: `Steve's net worth is $2.7 million.

He holds $250K of Bitcoin. He gets bolder.
He refinances 30% of his home equity, 70% of his brokerage, 50% of his retirement holdings, and 50% of his cash.

After taxes and fees, he ends up with 0.32 BTC.

Almost half his wealth is now in Bitcoin.
And yet… he's uneasy.
Over time, he trims the position.`
  },
  {
    year: "2045",
    price: "$13 Million",
    content: `Steve is 20 years older. Wiser.
Bitcoin is no longer a contrarian play — it's a pillar of the new economy.`,
    assets: [
      { color: "yellow", amount: "$3.6M", type: "in Bitcoin (0.28 BTC)" },
      { color: "yellow", amount: "$1.2M", type: "home equity" },
      { color: "yellow", amount: "$600K", type: "retirement" },
      { color: "yellow", amount: "$250K", type: "brokerage" },
      { color: "yellow", amount: "$150K", type: "cash" }
    ],
    additionalContent: `Steve's net worth: $5.8M.

But even now, he isn't fully satisfied. His cash and stocks feel… fragile.

So he acts one final time.

He converts most of his traditional liquidity — $400K — into 0.02 BTC.

He now holds 0.3 BTC.`
  }
];

export default function ZeroPage() {
  return (
    <main className="min-h-screen bg-black text-white font-satoshi">
      {/* Premium header accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url(/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-8">
            <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">Bitcoin • Wealth • Freedom</p>
            <h1 className="text-center">
              <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
                {navalSection.title}
              </span>
            </h1>
            <div className="flex items-center justify-center mt-6">
              <div className="h-px w-24 bg-yellow-500/30"></div>
              <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">{navalSection.subtitle}</p>
              <div className="h-px w-24 bg-yellow-500/30"></div>
            </div>
            
            {/* Featured Visual */}
            <div className="relative w-full mx-auto mt-12 aspect-[16/9] overflow-hidden rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <Image
                src="/selfie.jpg"
                alt="Selfie"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
          </div>

          {/* Pillars Section */}
          <div className="grid md:grid-cols-3 gap-8">
            {navalSection.pillars.map((pillar, idx) => (
              <div key={idx} className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <span className="text-4xl">{pillar.icon}</span>
                  <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                    {pillar.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Contrast Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <div className="text-center space-y-4">
              <p className="text-xl text-gray-300 font-satoshi">{navalSection.contrast}</p>
              <p className="text-2xl text-yellow-500 font-bold font-satoshi">{navalSection.transition}</p>
            </div>
          </div>

          {/* Bitcoin Sections */}
          <div className="text-center space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
              Most Millionaires Will Never Own 0.05 Bitcoin
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 font-satoshi max-w-2xl mx-auto">
              And That&apos;s Okay — They&apos;re Normal. You&apos;re Not.
            </p>
          </div>

          {/* Timeline Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <div
                key={index}
                className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]"
              >
                {section.year && (
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-2xl font-bold text-yellow-500 font-satoshi">{section.year}</span>
                    <span className="text-xl text-gray-400 font-satoshi">— Bitcoin is {section.price}</span>
                  </div>
                )}
                <p className="text-lg text-gray-300 font-satoshi mb-4">{section.content}</p>
                {section.additionalContent && (
                  <div className="text-gray-400 font-satoshi text-base mt-4 whitespace-pre-line leading-relaxed">
                    {section.additionalContent}
                  </div>
                )}
                {section.assets && (
                  <div className="grid gap-4 mt-6">
                    {section.assets.map((asset, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-4 hover:bg-gray-800/50 p-2 rounded-lg transition-colors duration-200"
                      >
                        <div className="w-4 h-4 rounded-full bg-yellow-500 shadow-lg shadow-yellow-500/20" />
                        <span className="font-bold font-satoshi">{asset.amount}</span>
                        <span className="text-gray-400 font-satoshi">{asset.type}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Final Message */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <div className="text-center space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-yellow-500 font-satoshi mb-6">
                The Mantra is Simple:
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-yellow-500 font-satoshi">
                Get Off Zero
              </h3>
              <p className="text-xl text-gray-300 font-satoshi max-w-2xl mx-auto">
                Stay humble. Stack sats. Teach others. But don&apos;t expect them to follow.
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="h-px w-16 bg-yellow-500/30"></div>
                <p className="text-lg text-gray-400 font-satoshi">
                  Some are Steves.<br />
                  Some are you.
                </p>
                <div className="h-px w-16 bg-yellow-500/30"></div>
              </div>
              <div className="text-3xl text-yellow-500 font-satoshi mt-8">
                🟠 Choose wisely.
              </div>
            </div>
          </div>

          {/* Outro Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h2 className="text-4xl md:text-5xl font-bold text-yellow-500 font-satoshi mb-8">
              From Accumulation to Preservation: The Shift Traders Learn Too Late
            </h2>
            <div className="space-y-8 text-gray-300">
              <p className="text-lg font-satoshi leading-relaxed">
                There&apos;s a silent killer in the crypto world—and no, it&apos;s not market volatility. It&apos;s ego disguised as strategy. It&apos;s the belief that what worked for your $10K portfolio will still work when you&apos;re managing $1M or more.
              </p>
              <p className="text-lg font-satoshi leading-relaxed">
                It took me far too long to learn this.
              </p>
              <p className="text-lg font-satoshi leading-relaxed">
                Like many others, I got into crypto during the wild west era. Back then, taking big swings felt like the right move—and in many ways, it was. When your entire bankroll is $1,000 or even $10,000, going down 50% isn&apos;t life-ruining. It stings, but it doesn&apos;t change the trajectory of your life. You can rebuild. You&apos;re not gambling your family&apos;s future or your peace of mind. You&apos;re risking a small stack to chase asymmetric upside.
              </p>

              <div className="bg-[#1c1f26] p-6 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <h3 className="text-2xl font-bold text-yellow-500 font-satoshi mb-4">Risk Looks Different at $1M+</h3>
                <p className="text-lg font-satoshi leading-relaxed">
                  When you cross into six or seven-figure territory, your job is no longer to accumulate—it&apos;s to preserve.
                </p>
                <p className="text-lg font-satoshi leading-relaxed mt-4">
                  If you&apos;ve built up a $1M portfolio, going to $2M will certainly feel great, but it won&apos;t double your quality of life in the way going from $1K to $100K might. Conversely, a catastrophic drawdown that takes you from $1M back down to $50K? That absolutely changes your life.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-yellow-500 font-satoshi">The Art of Shifting Gears</h3>
                <p className="text-lg font-satoshi leading-relaxed">
                  The hardest part of this shift isn&apos;t technical—it&apos;s psychological. When you&apos;ve built your fortune by taking big risks, it feels counterintuitive to pull back. But that&apos;s the lesson: what got you here won&apos;t get you there.
                </p>
                <p className="text-lg font-satoshi leading-relaxed">
                  And if you ignore that lesson, the market will teach it to you the hard way.
                </p>
              </div>

              <div className="bg-[#1c1f26] p-6 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <h3 className="text-2xl font-bold text-yellow-500 font-satoshi mb-4">Final Thoughts: Should You Be So Lucky</h3>
                <p className="text-lg font-satoshi leading-relaxed">
                  If you&apos;re early in the game, don&apos;t be afraid to play hard. Take smart risks. Swing for the fences.
                </p>
                <p className="text-lg font-satoshi leading-relaxed mt-4">
                  But should you be lucky enough to build something meaningful—six figures, seven figures, more—do not make the mistake I did. Recognize the moment when your goal should shift from chasing more to protecting what you&apos;ve built.
                </p>
                <p className="text-lg font-satoshi leading-relaxed mt-4">
                  Because wealth isn&apos;t just about numbers going up. It&apos;s about freedom. And freedom only lasts if you learn how to preserve it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
