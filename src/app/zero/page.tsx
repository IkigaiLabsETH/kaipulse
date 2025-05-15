'use client';

import { motion } from 'framer-motion';
import { Inter } from 'next/font/google';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

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
    <main className={`min-h-screen bg-black text-white ${inter.className}`}>
      {/* Premium header accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#EAB308] to-transparent"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url(/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10"></div>

      <div className="max-w-4xl mx-auto px-4 py-16 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-16"
        >
          {/* Redesigned Editorial Intro */}
          <section className="w-full bg-gradient-to-b from-black to-gray-900 rounded-2xl shadow-lg py-16 px-4 md:px-12 mb-20 relative overflow-hidden">
            {/* Yellow border with subtle glow */}
            <div className="absolute -inset-0.5 bg-[#EAB308]/20 rounded-sm shadow-[0_0_30px_rgba(234,179,8,0.1)]">
              <div className="absolute inset-0.5 bg-black/95 backdrop-blur-sm rounded-sm"></div>
            </div>
            
            <div className="max-w-3xl mx-auto text-center space-y-8 relative z-10">
              {/* Selfie Image with Premium Frame */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="relative w-full max-w-2xl aspect-square mx-auto mb-12"
              >
                {/* Artistic frame element */}
                <div className="absolute -inset-4 z-0">
                  <div className="absolute inset-0 rotate-[2deg] bg-gradient-to-r from-[#EAB308] to-[#EAB308]/80 rounded-sm shadow-[0_0_30px_rgba(234,179,8,0.2)]"></div>
                </div>
                
                {/* Premium gold frame with subtle glow */}
                <div className="absolute -inset-2 bg-gradient-to-r from-[#EAB308] to-[#EAB308]/80 rounded-sm z-10 shadow-[0_0_30px_rgba(234,179,8,0.3)]">
                  <div className="absolute inset-0.5 bg-black rounded-sm"></div>
                </div>
                
                {/* Bitcoin corner accents */}
                <div className="absolute -top-3 -left-3 w-12 h-12 z-20 flex items-center justify-center">
                  <div className="text-[#EAB308] text-2xl font-bold">₿</div>
                </div>
                <div className="absolute -bottom-3 -right-3 w-12 h-12 z-20 flex items-center justify-center">
                  <div className="text-[#EAB308] text-2xl font-bold">₿</div>
                </div>
                
                {/* Image container */}
                <div className="relative w-full h-full rounded-sm overflow-hidden z-10">
                  <Image
                    src="/selfie.jpg"
                    alt="Selfie"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-6xl font-bold font-boska bg-gradient-to-r from-[#EAB308] to-[#EAB308]/80 bg-clip-text text-transparent tracking-tight leading-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)]"
              >
                {navalSection.title}
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="italic text-xl md:text-2xl text-[#EAB308] font-epilogue max-w-2xl mx-auto"
              >
                {navalSection.subtitle}
              </motion.p>
              <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-8 mt-8">
                {navalSection.pillars.map((pillar, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 + idx * 0.2 }}
                    className="flex flex-col items-center bg-[#18191c] border border-[#EAB308]/20 rounded-xl px-6 py-6 shadow-[5px_5px_0px_0px_rgba(234,179,8,0.2)] w-full md:w-1/3 hover:border-[#EAB308]/40 transition-all duration-300"
                  >
                    <div className="text-3xl mb-3">{pillar.icon}</div>
                    <div className="font-epilogue text-lg md:text-xl text-[#EAB308] font-semibold text-center mb-1">
                      {pillar.title}
                    </div>
                  </motion.div>
                ))}
              </div>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="flex items-center justify-center my-10"
              >
                <div className="h-px w-16 bg-[#EAB308]/30 mx-4" />
                <span className="text-gray-400 font-satoshi text-base md:text-lg">{navalSection.contrast}</span>
                <div className="h-px w-16 bg-[#EAB308]/30 mx-4" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="text-xl md:text-2xl font-boska text-white mb-2"
              >
                {navalSection.transition}
              </motion.div>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.6 }}
                className="text-center text-gray-500 font-epilogue text-lg mt-8 tracking-wide"
              >
                <span>Now, let&apos;s meet Steve…</span>
              </motion.div>
            </div>
          </section>

          {/* Bitcoin Sections */}
          <div className="text-center space-y-8 pt-24 border-t border-gray-800 mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#EAB308] to-[#EAB308]/80 bg-clip-text text-transparent font-boska tracking-tight leading-tight mb-4 md:mb-6 [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)]"
            >
              Most Millionaires Will Never Own 0.05 Bitcoin
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300 font-epilogue max-w-2xl mx-auto"
            >
              And That&apos;s Okay — They&apos;re Normal. You&apos;re Not.
            </motion.p>
          </div>

          {/* Timeline Sections */}
          <div className="space-y-16">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="border-l-4 border-[#EAB308]/40 pl-8 space-y-6 bg-gradient-to-r from-gray-900/60 to-gray-900/40 rounded-xl py-8 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden"
              >
                {/* Yellow border with subtle glow */}
                <div className="absolute -inset-0.5 bg-[#EAB308]/10 rounded-sm shadow-[0_0_30px_rgba(234,179,8,0.05)]">
                  <div className="absolute inset-0.5 bg-black/95 backdrop-blur-sm rounded-sm"></div>
                </div>
                
                <div className="relative z-10">
                  {section.year && (
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-2xl font-bold text-[#EAB308] font-epilogue">{section.year}</span>
                      <span className="text-xl text-gray-400 font-epilogue">— Bitcoin is {section.price}</span>
                    </div>
                  )}
                  <p className="text-lg text-gray-300 font-satoshi mb-2">{section.content}</p>
                  {section.additionalContent && (
                    <div className="text-gray-400 font-satoshi text-base mt-4 whitespace-pre-line leading-relaxed">
                      {section.additionalContent}
                    </div>
                  )}
                  {section.assets && (
                    <div className="grid gap-4 mt-6">
                      {section.assets.map((asset, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                          className="flex items-center gap-4 hover:bg-gray-800/50 p-2 rounded-lg transition-colors duration-200"
                        >
                          <div className={`w-4 h-4 rounded-full bg-${asset.color}-500 shadow-lg shadow-${asset.color}-500/20`} />
                          <span className="font-bold font-epilogue">{asset.amount}</span>
                          <span className="text-gray-400 font-satoshi">{asset.type}</span>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Final Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-center space-y-8 pt-16 mb-8 relative"
          >
            {/* Yellow border with subtle glow */}
            <div className="absolute -inset-8 bg-[#EAB308]/10 rounded-lg shadow-[0_0_50px_rgba(234,179,8,0.1)]">
              <div className="absolute inset-0.5 bg-black/95 backdrop-blur-sm rounded-lg"></div>
            </div>
            
            <div className="relative z-10 p-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="mb-8"
              >
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#EAB308] to-[#EAB308]/80 bg-clip-text text-transparent font-boska mb-6 [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)]">
                  The Mantra is Simple:
                </h2>
                <h3 className="text-3xl md:text-4xl font-bold text-[#EAB308] font-boska">
                  Get Off Zero
                </h3>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="space-y-6"
              >
                <p className="text-xl text-gray-300 font-epilogue max-w-2xl mx-auto">
                  Stay humble. Stack sats. Teach others. But don&apos;t expect them to follow.
                </p>
                <div className="flex items-center justify-center gap-4">
                  <div className="h-px w-16 bg-[#EAB308]/30"></div>
                  <p className="text-lg text-gray-400 font-satoshi">
                    Some are Steves.<br />
                    Some are you.
                  </p>
                  <div className="h-px w-16 bg-[#EAB308]/30"></div>
                </div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 1.8 }}
                  className="text-3xl text-[#EAB308] font-boska mt-8"
                >
                  🟠 Choose wisely.
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* New Outro Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-center space-y-12 pt-24 border-t border-gray-800 mb-16"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#EAB308] to-[#EAB308]/80 bg-clip-text text-transparent font-boska mb-8 [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)]"
            >
              From Accumulation to Preservation: The Shift Most Traders Learn Too Late
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="max-w-3xl mx-auto space-y-8 text-left"
            >
              <p className="text-gray-300 font-satoshi text-lg leading-relaxed">
                There&apos;s a silent killer in the crypto world—and no, it&apos;s not market volatility. It&apos;s ego disguised as strategy. It&apos;s the belief that what worked for your $10K portfolio will still work when you&apos;re managing $1M or more.
              </p>

              <p className="text-gray-300 font-satoshi text-lg leading-relaxed">
                It took me far too long to learn this.
              </p>

              <p className="text-gray-300 font-satoshi text-lg leading-relaxed">
                Like many others, I got into crypto during the wild west era. Back then, taking big swings felt like the right move—and in many ways, it was. When your entire bankroll is $1,000 or even $10,000, going down 50% isn&apos;t life-ruining. It stings, but it doesn&apos;t change the trajectory of your life. You can rebuild. You&apos;re not gambling your family&apos;s future or your peace of mind. You&apos;re risking a small stack to chase asymmetric upside.
              </p>

              <div className="bg-gray-900/50 p-6 rounded-xl border border-[#EAB308]/20">
                <h3 className="text-2xl font-bold text-[#EAB308] font-boska mb-4">Risk Looks Different at $1M+</h3>
                <p className="text-gray-300 font-satoshi text-lg leading-relaxed">
                  When you cross into six or seven-figure territory, your job is no longer to accumulate—it&apos;s to preserve.
                </p>
                <p className="text-gray-300 font-satoshi text-lg leading-relaxed mt-4">
                  If you&apos;ve built up a $1M portfolio, going to $2M will certainly feel great, but it won&apos;t double your quality of life in the way going from $1K to $100K might. Conversely, a catastrophic drawdown that takes you from $1M back down to $50K? That absolutely changes your life.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-[#EAB308] font-boska">The Art of Shifting Gears</h3>
                <p className="text-gray-300 font-satoshi text-lg leading-relaxed">
                  The hardest part of this shift isn&apos;t technical—it&apos;s psychological. When you&apos;ve built your fortune by taking big risks, it feels counterintuitive to pull back. But that&apos;s the lesson: what got you here won&apos;t get you there.
                </p>
                <p className="text-gray-300 font-satoshi text-lg leading-relaxed">
                  And if you ignore that lesson, the market will teach it to you the hard way.
                </p>
              </div>

              <div className="bg-gray-900/50 p-6 rounded-xl border border-[#EAB308]/20">
                <h3 className="text-2xl font-bold text-[#EAB308] font-boska mb-4">Final Thoughts: Should You Be So Lucky</h3>
                <p className="text-gray-300 font-satoshi text-lg leading-relaxed">
                  If you&apos;re early in the game, don&apos;t be afraid to play hard. Take smart risks. Swing for the fences.
                </p>
                <p className="text-gray-300 font-satoshi text-lg leading-relaxed mt-4">
                  But should you be lucky enough to build something meaningful—six figures, seven figures, more—do not make the mistake I did. Recognize the moment when your goal should shift from chasing more to protecting what you&apos;ve built.
                </p>
                <p className="text-gray-300 font-satoshi text-lg leading-relaxed mt-4">
                  Because wealth isn&apos;t just about numbers going up. It&apos;s about freedom. And freedom only lasts if you learn how to preserve it.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
