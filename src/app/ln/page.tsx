'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Zap } from 'lucide-react';

// Animated Lightning Icon
const AnimatedLightning = () => (
  <motion.div
    className="relative w-12 h-12 md:w-20 md:h-20"
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.2 }}
  >
    <motion.div
      className="absolute inset-0 bg-yellow-500/20 rounded-full"
      animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
      transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
    />
    <motion.div
      className="absolute inset-0 bg-yellow-500/10 rounded-full"
      animate={{ scale: [1.1, 1.3, 1.1], opacity: [0.3, 0.6, 0.3] }}
      transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse' }}
    />
    <motion.div
      className="flex items-center justify-center h-full w-full"
      animate={{ rotate: [0, 10, 0, -10, 0] }}
      transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
    >
      <Zap className="h-12 w-12 md:h-16 md:w-16 text-yellow-400 drop-shadow-[0_0_20px_rgba(234,179,8,0.7)]" />
    </motion.div>
  </motion.div>
);

// Shimmer effect for text
const shimmer = {
  hidden: { backgroundPosition: '0% 0%' },
  visible: {
    backgroundPosition: '200% 0%',
    transition: {
      repeat: Infinity,
      duration: 3,
      ease: 'linear',
    },
  },
};

export default function LightningNetworkPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Premium header accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent z-30"></div>
      {/* NEW: Lightning Manifesto Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="max-w-4xl mx-auto px-4 pt-20 pb-10 text-center z-30"
      >
        <div className="bg-[#1c1f26] border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] rounded-lg mb-10 p-8 md:p-12">
          <h2 className="font-boska text-4xl md:text-5xl font-extrabold text-yellow-400 mb-6 tracking-tight drop-shadow-lg">
           ⚡️ Why We Build on Lightning ⚡️
          </h2>
          <p className="font-satoshi text-xl md:text-2xl text-white/90 mb-6 font-medium">
            We are builders. But after years in DeFi, we learned a hard truth: <span className="font-bold text-yellow-300">Smart contracts are brittle, tokens are a casino, and your product&apos;s destiny is hijacked by whales, hype, and market chaos.</span>
          </p>
          <ul className="text-left text-gray-200 mb-6 space-y-3 list-disc pl-8 text-lg font-satoshi">
            <li>
              <span className="font-bold text-yellow-300">Smart contracts:</span> One bug, one exploit, and fortunes vanish. Upgrades are a nightmare. Audits? Expensive, imperfect, and never enough. Legal risks lurk everywhere.
            </li>
            <li>
              <span className="font-bold text-yellow-300">Tokens:</span> When price pumps, you&apos;re a genius. When it dumps, you&apos;re the villain. Value is dictated by whales, market makers, and influencers—not your vision, not your users.
            </li>
            <li>
              <span className="font-bold text-yellow-300">Liquidity:</span> Too much, and your token is a ghost. Too little, and it&apos;s a pump-and-dump. Emissions bleed your treasury dry. The grind is endless, the stress is real.
            </li>
          </ul>
          <div className="bg-yellow-900/40 border-l-4 border-yellow-400 p-5 rounded mb-6">
            <p className="text-yellow-200 font-semibold mb-2 text-lg font-epilogue">Our AHA Moment:</p>
            <p className="text-yellow-100 text-base md:text-lg font-satoshi">
              We brainstormed with Satoshi. We explored Runes, Ordinals, Stacks, and every new way to build on Bitcoin. The revelation? <span className="font-bold">They all inherit the same flaws as EVMs and alt-L1s.</span> The risk, the drama, the distractions—they never go away.
            </p>
          </div>
          <p className="font-satoshi text-xl md:text-2xl text-white/90 mb-4 font-semibold">
            <span className="font-bold text-yellow-400">Lightning is different.</span> No tokens. No smart contract roulette. No market games. Just pure, instant, unstoppable value transfer—built on the most secure, open monetary network in history.
          </p>
          <p className="font-boska text-2xl md:text-3xl font-extrabold text-yellow-400 mt-6 drop-shadow">
            There is no second best.<br />
            <span className="text-white font-bold">If you want to build for the future, you build on LN.</span>
          </p>
        </div>
      </motion.section>
      {/* Animated background gradients */}
      <motion.div
        className="fixed inset-0 pointer-events-none opacity-40 z-0"
        style={{
          background:
            'radial-gradient(circle at 80% 20%, rgba(234,179,8,0.15), transparent 40%), radial-gradient(circle at 20% 80%, rgba(234,179,8,0.1), transparent 40%)',
        }}
        animate={{
          background: [
            'radial-gradient(circle at 80% 20%, rgba(234,179,8,0.15), transparent 40%), radial-gradient(circle at 20% 80%, rgba(234,179,8,0.1), transparent 40%)',
            'radial-gradient(circle at 20% 20%, rgba(234,179,8,0.15), transparent 40%), radial-gradient(circle at 80% 80%, rgba(234,179,8,0.1), transparent 40%)',
            'radial-gradient(circle at 80% 20%, rgba(234,179,8,0.15), transparent 40%), radial-gradient(circle at 20% 80%, rgba(234,179,8,0.1), transparent 40%)',
          ],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      />
      {/* Grid pattern overlay */}
      <div className="fixed inset-0 bg-[url('/grid-pattern.png')] bg-repeat opacity-10 pointer-events-none z-0"></div>
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-yellow-400/30 shadow-[0_0_20px_2px_rgba(234,179,8,0.3)]"
            style={{
              width: Math.random() * 10 + 5,
              height: Math.random() * 10 + 5,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * -150 - 50],
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0.5],
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
      {/* Hero Section */}
      <div className="relative z-20">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 pt-10 pb-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center text-center space-y-6"
          >
            <AnimatedLightning />
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={shimmer}
              className="font-boska text-5xl md:text-7xl font-bold tracking-tight mb-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300 [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)]"
              style={{ backgroundSize: '200% 100%' }}
            >
              Red Pill for Bitcoin Builders
            </motion.h1>
            <p className="font-satoshi text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              The Lightning Network is Bitcoin&apos;s answer to instant, global, censorship-resistant payments—enabling new business models. If you&apos;re a developer, this is your invitation to build on the most secure, open monetary network.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="w-full flex justify-center mt-8"
            >
              <div className="relative max-w-4xl w-full">
                <div className="absolute -inset-1 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-lg shadow-[0_0_30px_rgba(234,179,8,0.15)] z-0" />
                <div className="absolute inset-0.5 bg-black/90 rounded-lg z-0" />
                <div className="relative aspect-video w-full z-10">
                  <iframe
                    className="w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/AYAreuNzx58"
                    title="Lightning Network Deep Dive"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </motion.div>
            <p className="mt-2 text-sm text-gray-400 text-center font-satoshi">
              Watch: <a href="https://www.youtube.com/watch?v=AYAreuNzx58" target="_blank" rel="noopener noreferrer" className="underline text-yellow-400">Lightning Network: what is it? why should I care? what can I do with it? Enjoy bitcoin like its 2013</a>
            </p>
          </motion.div>
        </div>
      </div>
      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-16 text-white relative z-20">
        {/* Section: Why Build on Bitcoin + Lightning? */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.2 } } }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-12"
        >
          <Card className="bg-[#1c1f26] border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] rounded-lg">
            <CardHeader>
              <CardTitle className="font-boska text-2xl md:text-3xl font-bold text-yellow-400 mb-2">Why Build on Bitcoin + Lightning?</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="font-satoshi text-lg text-gray-200 mb-4">
                <span className="font-bold text-yellow-300">Every Like is Real Value.</span><br/>
                Satsnap is built on a radical idea: every interaction should matter. With the Lightning Network, every like is a real Bitcoin payment—21 sats, instantly, directly to the creator. This isn&apos;t just digital cash; it&apos;s a revolution in how we support artists, foster genuine connection, and build communities where engagement is meaningful. Lightning&apos;s global, permissionless payments mean anyone, anywhere, can participate and be rewarded.
              </p>
              <p className="font-satoshi text-lg text-yellow-400 font-semibold mt-4">
                No middlemen. No empty metrics. Just pure, programmable value—at the speed of the internet.
              </p>
            </CardContent>
          </Card>
        </motion.section>
        {/* Section: How to Get Started */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.3 } } }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-12"
        >
          <Card className="bg-[#1c1f26] border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] rounded-lg">
            <CardHeader>
              <CardTitle className="font-boska text-2xl md:text-3xl font-bold text-yellow-400 mb-2">How to Get Started</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="font-satoshi text-lg text-gray-200 mb-4">
                <span className="font-bold text-yellow-300">Building with Lightning is Frictionless.</span><br/>
                Our MVP leverages Voltage Cloud to handle the heavy lifting of node management, so you can focus on what matters: creating and building. Whether you&apos;re a developer, a creator, or a curious explorer, you can:
              </p>
              <ol className="list-decimal pl-6 text-gray-200 space-y-2 font-satoshi text-lg">
                <li><span className="font-bold">Dive deep:</span> Explore our <a href="https://docs.lightning.engineering/" className="underline text-yellow-400">Lightning Network Production Guide</a> for everything from node setup to best practices.</li>
                <li><span className="font-bold">Plug and play:</span> Use our modular LightningPaymentWidget to add real Bitcoin payments to your app or content—no complexity required.</li>
                <li><span className="font-bold">Experiment boldly:</span> Try per-action payments—like our signature 21-sat likes—and discover how instant, programmable money unlocks new business models.</li>
                <li><span className="font-bold">Create meaning:</span> Build experiences where every interaction is valuable, every user is empowered, and every sats counts.</li>
              </ol>
            </CardContent>
          </Card>
        </motion.section>
        {/* Section: Featured Guide */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.4 } } }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-12"
        >
          <Card className="bg-[#1c1f26] border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] rounded-lg">
            <CardHeader>
              <CardTitle className="font-boska text-2xl md:text-3xl font-bold text-yellow-400 mb-2">Featured Guide: Lightning Network Production Guide</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="font-satoshi text-lg text-gray-200 mb-4">
                <span className="font-bold text-yellow-300">Your Blueprint for Lightning-Powered Apps.</span><br/>
                Our comprehensive guide is your roadmap to launching apps like Satsnap, where every microtransaction is seamless and secure. Inside, you&apos;ll learn how to:
              </p>
              <ul className="list-disc pl-6 text-gray-200 space-y-1 font-satoshi text-lg">
                <li>Deploy production-grade Lightning nodes with Voltage Cloud.</li>
                <li>Integrate real-time payments and reward logic into your product.</li>
                <li>Master rate limiting, error monitoring, and robust security.</li>
                <li>Use our open-source LightningPaymentWidget for a frictionless user experience.</li>
                <li>Scale to thousands of microtransactions—while keeping users in full control of their funds.</li>
              </ul>
              <p className="font-satoshi text-lg text-yellow-400 font-semibold mt-4">
                Build with confidence. Build for the future.
              </p>
              <Link href="https://docs.lightning.engineering/" className="inline-block mt-4 px-4 py-2 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-300 transition font-satoshi">Read the Full Guide</Link>
            </CardContent>
          </Card>
        </motion.section>
        {/* Section: Red Pill */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.5 } } }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-12"
        >
          <Card className="bg-[#1c1f26] border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] rounded-lg">
            <CardHeader>
              <CardTitle className="font-boska text-2xl md:text-3xl font-bold text-yellow-400 mb-2">Red Pill: Why Lightning, Why Now?</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="font-satoshi text-lg text-gray-200 mb-4">
                <span className="font-bold text-yellow-300">This is More Than Technology—It&apos;s a Movement.</span><br/>
                With Satsnap, we&apos;re proving that social platforms can be rebuilt on real value. Every like, every reward, every connection—powered by Bitcoin, not speculation. No tokens, no empty promises. Just pure, unstoppable value exchange.
              </p>
              <p className="font-satoshi text-lg text-yellow-400 font-semibold mt-4">
                Join us. Build the future of social engagement—one sats at a time.
              </p>
            </CardContent>
          </Card>
        </motion.section>
        {/* Section: Case Study */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.6 } } }}
          viewport={{ once: true, margin: '-100px' }}
          className="mt-20"
        >
          <Card className="bg-[#1c1f26] border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] rounded-lg">
            <CardHeader>
              <CardTitle className="font-boska text-2xl md:text-3xl font-bold text-yellow-400 mb-2">Case Study: Satsnap &amp; Lightning Network</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-white/90 mb-2 font-satoshi text-lg">
                <strong>Satsnap</strong> is a photo-first, curated social app where every like instantly sends Bitcoin to creators over the Lightning Network. It demonstrates how Lightning enables real, programmable value transfer at internet speed.
              </p>
              <ul className="list-disc pl-6 text-gray-200 mb-4 space-y-1 font-satoshi text-lg">
                <li><strong>Why Lightning?</strong> Instant, borderless micropayments (21 sats per like) with no middlemen, enabling new business models for creators and fans.</li>
                <li><strong>Why Voltage?</strong> Managed, non-custodial LND nodes with high uptime, easy API integration, and full user control of funds—perfect for scaling real Bitcoin apps.</li>
                <li><strong>Technical Flow:</strong> Each like triggers a Lightning invoice via Voltage; payment is detected in real time and creators are credited instantly. Security, rate limiting, and error handling are built in.</li>
                <li><strong>UX Impact:</strong> Likes have real value, fans earn rewards, and creators get paid instantly—no ads, no algorithms, just pure value exchange.</li>
              </ul>
              <p className="text-gray-400 text-sm font-satoshi">
                Learn more in the <Link href="https://github.com/IkigaiLabsETH/cheeseburger/blob/main/SATS.md" className="underline text-yellow-400">SATS Lightning Network Production Guide</Link>.
              </p>
            </CardContent>
          </Card>
        </motion.section>
        {/* Section: AI Agents & Lightning */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.7 } } }}
          viewport={{ once: true, margin: '-100px' }}
          className="mt-20"
        >
          <Card className="bg-[#1c1f26] border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] rounded-lg">
            <CardHeader>
              <CardTitle className="font-boska text-2xl md:text-3xl font-bold text-yellow-400 mb-2">AI Agents &amp; Lightning: Powering ElizaOS</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="font-satoshi text-lg text-gray-200 mb-4">
                <span className="font-bold text-yellow-300">Where Intelligence Meets Instant Value.</span><br/>
                Imagine a world where every question, every answer, every digital interaction is powered by real Bitcoin—instantly, permissionlessly, and at internet scale. With Lightning, ElizaOS and the next generation of AI agents become truly autonomous: every request is a microtransaction, every response is earned, and every agent can transact with any other—no banks, no borders, no friction.
              </p>
              <p className="font-satoshi text-lg text-gray-200 mb-4">
                <span className="font-bold text-yellow-300">Pay to Play, Earn to Serve.</span><br/>
                Instead of giving away intelligence for free, ElizaOS asks for a tiny Lightning payment before responding. If you pay, you get your answer—immediately. If not, you receive a Lightning invoice you can settle at your pace. This model unlocks:
              </p>
              <div className="font-satoshi text-lg text-gray-200 mb-2">
                <span className="font-bold text-yellow-300">Why it Matters:</span><br/>
              </div>
              <ul className="list-disc pl-6 text-gray-200 mb-4 space-y-1 font-satoshi text-lg">
                <li>No Friction: Anyone, anywhere, can access intelligence—no signups, no credit cards, just Lightning.</li>
                <li>Global, Open, and Permissionless: The world&apos;s knowledge, unlocked for all.</li>
                <li>Full Ownership: No middlemen, no gatekeepers—just pure, unstoppable value exchange between humans and machines.</li>
              </ul>
              <div className="bg-black/80 border-l-4 border-yellow-400 p-4 rounded mb-2">
                <p className="text-yellow-200 font-semibold mb-1 font-epilogue">The Big Picture:</p>
                <p className="text-yellow-100 font-satoshi">
                  Lightning transforms ElizaOS into a Bitcoin-native AI—instantly paid, globally accessible, and truly sovereign. It&apos;s the foundation for a new market of AI agents, each empowered to earn, spend, and collaborate—without ever touching a bank.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.section>
        <footer className="mt-12 text-center text-gray-500 text-xs font-satoshi">
          Inspired by <a href="https://www.youtube.com/watch?v=AYAreuNzx58" target="_blank" rel="noopener noreferrer" className="underline">this Lightning Network deep dive</a> and the open-source Bitcoin movement.
        </footer>
      </main>
    </div>
  );
} 