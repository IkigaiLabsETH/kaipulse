'use client';

import { motion } from 'framer-motion';
import { Inter } from 'next/font/google';

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
  contrast: "Most people work for decades, defer happiness, and hope to be free… someday.",
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
      { color: "red", amount: "$400,000", type: "home equity" },
      { color: "blue", amount: "$350,000", type: "in retirement accounts" },
      { color: "blue", amount: "$200,000", type: "in brokerage" },
      { color: "green", amount: "$50,000", type: "in cash" }
    ]
  },
  {
    year: "2032",
    price: "$1.8M",
    content: `Steve's worth has doubled. He's now worth $2 million.`,
    assets: [
      { color: "red", amount: "$800K", type: "home equity" },
      { color: "blue", amount: "$650K", type: "retirement" },
      { color: "blue", amount: "$450K", type: "brokerage" },
      { color: "green", amount: "$100K", type: "in cash" }
    ]
  },
  {
    year: "2036",
    price: "$3.7M",
    content: `The fog lifts. Bitcoin isn't an "investment" anymore — it's the base layer of money.`
  },
  {
    year: "2045",
    price: "$13 Million",
    content: `Steve is 20 years older. Wiser.
Bitcoin is no longer a contrarian play — it's a pillar of the new economy.`,
    assets: [
      { color: "orange", amount: "$3.6M", type: "in Bitcoin (0.28 BTC)" },
      { color: "red", amount: "$1.2M", type: "home equity" },
      { color: "blue", amount: "$600K", type: "retirement" },
      { color: "blue", amount: "$250K", type: "brokerage" },
      { color: "green", amount: "$150K", type: "cash" }
    ]
  }
];

export default function ZeroPage() {
  return (
    <main className={`min-h-screen bg-black text-white ${inter.className}`}>
      <div className="max-w-4xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-16"
        >
          {/* Redesigned Editorial Intro */}
          <section className="w-full bg-black rounded-2xl shadow-lg py-16 px-4 md:px-12 mb-20">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h1 className="text-4xl md:text-6xl font-bold font-boska bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent tracking-tight leading-tight">
                {navalSection.title}
              </h1>
              <p className="italic text-xl md:text-2xl text-orange-400 font-epilogue max-w-2xl mx-auto">
                {navalSection.subtitle}
              </p>
              <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-8 mt-8">
                {navalSection.pillars.map((pillar, idx) => (
                  <div key={idx} className="flex flex-col items-center bg-[#18191c] border border-yellow-500/20 rounded-xl px-6 py-6 shadow-md w-full md:w-1/3">
                    <div className="text-3xl mb-3">{pillar.icon}</div>
                    <div className="font-epilogue text-lg md:text-xl text-yellow-400 font-semibold text-center mb-1">
                      {pillar.title}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-center my-10">
                <div className="h-px w-16 bg-yellow-500/30 mx-4" />
                <span className="text-gray-400 font-satoshi text-base md:text-lg">{navalSection.contrast}</span>
                <div className="h-px w-16 bg-yellow-500/30 mx-4" />
              </div>
              <div className="text-xl md:text-2xl font-boska text-white mb-2">
                {navalSection.transition}
              </div>
              <div className="text-center text-gray-500 font-epilogue text-lg mt-8 tracking-wide">
                <span>Now, let&apos;s meet Steve…</span>
              </div>
            </div>
          </section>

          {/* Bitcoin Sections */}
          <div className="text-center space-y-8 pt-24 border-t border-gray-800 mb-16">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent font-boska tracking-tight leading-tight mb-4 md:mb-6">
              Most Millionaires Will Never Own 0.05 Bitcoin
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-epilogue max-w-2xl mx-auto">
              And That&apos;s Okay — They&apos;re Normal. You&apos;re Not.
            </p>
          </div>

          {/* Timeline Sections */}
          <div className="space-y-16">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="border-l-4 border-orange-500/60 pl-8 space-y-6 bg-gray-900/60 rounded-xl py-8 shadow-md"
              >
                {section.year && (
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-2xl font-bold text-orange-500 font-epilogue">{section.year}</span>
                    <span className="text-xl text-gray-400 font-epilogue">— Bitcoin is {section.price}</span>
                  </div>
                )}
                <p className="text-lg text-gray-300 font-satoshi mb-2">{section.content}</p>
                {section.assets && (
                  <div className="grid gap-4">
                    {section.assets.map((asset, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <div className={`w-4 h-4 rounded-full bg-${asset.color}-500`} />
                        <span className="font-bold font-epilogue">{asset.amount}</span>
                        <span className="text-gray-400 font-satoshi">{asset.type}</span>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Final Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-center space-y-8 pt-16 mb-8"
          >
            <h2 className="text-3xl font-bold text-orange-500 font-boska mb-4">The Mantra is Simple: Get Off Zero</h2>
            <p className="text-xl text-gray-300 font-epilogue max-w-2xl mx-auto">
              Stay humble. Stack sats. Teach others. But don&apos;t expect them to follow.
            </p>
            <p className="text-lg text-gray-400 font-satoshi">
              Some are Steves.<br />
              Some are you.
            </p>
            <div className="text-2xl text-orange-500 font-boska">🟠 Choose wisely.</div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
