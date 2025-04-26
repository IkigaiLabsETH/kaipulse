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
            className="absolute rounded-full bg-yellow-400/30"
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
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 pt-28 pb-8 relative">
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
              className="text-5xl md:text-7xl font-bold tracking-tight mb-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300 [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)]"
              style={{ backgroundSize: '200% 100%' }}
            >
              Red Pill for Bitcoin Builders
            </motion.h1>
            <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
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
                    src="https://www.youtube.com/embed/Z78ZbPcsc3g"
                    title="Lightning Network Deep Dive"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </motion.div>
            <p className="mt-2 text-sm text-gray-400 text-center">
              Watch: <a href="https://www.youtube.com/watch?v=Z78ZbPcsc3g" target="_blank" rel="noopener noreferrer" className="underline text-yellow-400">Lightning Network Deep Dive</a>
            </p>
          </motion.div>
        </div>
      </div>
      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-16 text-white relative z-20">
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-12"
        >
          <Card className="relative overflow-hidden">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-yellow-400 mb-2">Why Build on Bitcoin + Lightning?</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6 text-gray-200 space-y-1">
                <li>True digital cash: instant, borderless, and permissionless payments</li>
                <li>Micropayments: enable new business models (pay-per-like, streaming money, micro-tipping)</li>
                <li>Non-custodial: users control their funds, not platforms</li>
                <li>Open APIs: integrate with any app, service, or device</li>
                <li>Global reach: anyone with a phone can participate</li>
              </ul>
            </CardContent>
          </Card>
        </motion.section>
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-12"
        >
          <Card className="relative overflow-hidden">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-yellow-400 mb-2">How to Get Started</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal pl-6 text-gray-200 space-y-1">
                <li>Read the <Link href="https://docs.lightning.engineering/" className="underline text-yellow-400">Lightning Network Production Guide</Link> for a deep technical dive.</li>
                <li>Spin up a Lightning node (try <a href="https://voltage.cloud/" target="_blank" rel="noopener noreferrer" className="underline text-yellow-400">Voltage</a> for managed nodes).</li>
                <li>Experiment with <a href="https://github.com/alexbosworth/ln-service" target="_blank" rel="noopener noreferrer" className="underline text-yellow-400">ln-service</a> or <a href="https://webln.dev/" target="_blank" rel="noopener noreferrer" className="underline text-yellow-400">WebLN</a> for app integration.</li>
                <li>Build something that couldn&apos;t exist before: pay-per-action, real-time rewards, global micro-economies.</li>
              </ol>
            </CardContent>
          </Card>
        </motion.section>
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-12"
        >
          <Card className="relative overflow-hidden">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-yellow-400 mb-2">Featured Guide: Lightning Network Production Guide</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2 text-gray-200">
                Our in-depth guide covers everything you need to launch Lightning-powered apps:
              </p>
              <ul className="list-disc pl-6 text-gray-200 space-y-1">
                <li>Node setup and security (Voltage, BTCPay, Strike)</li>
                <li>API integration and invoice flows</li>
                <li>Rate limiting, error handling, and monitoring</li>
                <li>Production checklists and best practices</li>
                <li>Sample code and database schemas</li>
              </ul>
              <Link href="https://docs.lightning.engineering/" className="inline-block mt-4 px-4 py-2 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-300 transition">Read the Full Guide</Link>
            </CardContent>
          </Card>
        </motion.section>
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-12"
        >
          <Card className="relative overflow-hidden">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-yellow-400 mb-2">Red Pill: Why Lightning, Why Now?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-200 mb-2">
                The world is waking up to programmable, unstoppable money. Lightning lets you build apps that empower users, reward creators, and bypass legacy rails. Don&apos;t just watch the revolution—be part of it. The tools are open, the code is public, and the opportunity is global.
              </p>
              <p className="text-gray-400 text-sm">
                Want to go deeper? Join the community, read the docs, and start building. The next great Bitcoin app could be yours.
              </p>
            </CardContent>
          </Card>
        </motion.section>
        <footer className="mt-12 text-center text-gray-500 text-xs">
          Inspired by <a href="https://www.youtube.com/watch?v=Z78ZbPcsc3g" target="_blank" rel="noopener noreferrer" className="underline">this Lightning Network deep dive</a> and the open-source Bitcoin movement.
        </footer>
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mt-20"
        >
          <Card className="relative overflow-hidden">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-yellow-400 mb-2">Case Study: Satsnap &amp; Lightning Network</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/90 mb-2">
                <strong>Satsnap</strong> is a photo-first, curated social app where every like instantly sends Bitcoin to creators over the Lightning Network. It demonstrates how Lightning enables real, programmable value transfer at internet speed.
              </p>
              <ul className="list-disc pl-6 text-gray-200 mb-4 space-y-1">
                <li><strong>Why Lightning?</strong> Instant, borderless micropayments (21 sats per like) with no middlemen, enabling new business models for creators and fans.</li>
                <li><strong>Why Voltage?</strong> Managed, non-custodial LND nodes with high uptime, easy API integration, and full user control of funds—perfect for scaling real Bitcoin apps.</li>
                <li><strong>Technical Flow:</strong> Each like triggers a Lightning invoice via Voltage; payment is detected in real time and creators are credited instantly. Security, rate limiting, and error handling are built in.</li>
                <li><strong>UX Impact:</strong> Likes have real value, fans earn rewards, and creators get paid instantly—no ads, no algorithms, just pure value exchange.</li>
              </ul>
              <p className="text-gray-400 text-sm">
                Learn more in the <Link href="https://github.com/IkigaiLabsETH/cheeseburger/blob/main/SATS.md" className="underline text-yellow-400">SATS Lightning Network Production Guide</Link>.
              </p>
            </CardContent>
          </Card>
        </motion.section>
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mt-20"
        >
          <Card className="relative overflow-hidden">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-yellow-400 mb-2">AI Agents &amp; Lightning: Powering ElizaOS</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/90 mb-4">
                To power <strong>ElizaOS</strong> (and similar AI agents) with Bitcoin&apos;s Lightning Network (LND), we can make every interaction — like asking a question or getting an answer — require a tiny payment.
              </p>
              <p className="text-gray-200 mb-2">
                Instead of giving away free access, Eliza would ask for a Lightning payment before responding. If you pay, you get your answer. If you don&apos;t, you get an invoice you can pay to continue.
              </p>
              <p className="text-gray-200 mb-4">
                Lightning payments are instant, tiny (even less than a cent), and global, meaning we don&apos;t need credit cards, banks, or user accounts. It&apos;s Bitcoin-native and works anywhere.
              </p>
              <ul className="list-disc pl-6 text-gray-200 mb-4 space-y-1">
                <li>Payment gating: You must pay before the agent processes your request.</li>
                <li>Pay-per-query: Each AI answer costs a few sats (small fractions of Bitcoin).</li>
                <li>Agent-to-agent payments: AI agents can pay each other automatically when they need help or services.</li>
                <li>Authentication: Payments double as logins — if you paid, you&apos;re verified. No need for usernames/passwords.</li>
              </ul>

              <h3 className="text-xl font-semibold text-yellow-300 mt-6 mb-2">Why this matters:</h3>
              <ul className="list-disc pl-6 text-gray-200 mb-4 space-y-1">
                <li>No friction: People pay instantly without signing up.</li>
                <li>Micropayments: Make money even on very small transactions (think: 1¢ queries).</li>
                <li>Global and open: Anyone with a Lightning wallet can interact.</li>
                <li>Full ownership: No middlemen taking fees.</li>
              </ul>
              <div className="bg-black/80 border-l-4 border-yellow-400 p-4 rounded mb-2">
                <p className="text-yellow-200 font-semibold mb-1">The Big Picture:</p>
                <ul className="list-disc pl-6 text-yellow-100 space-y-1">
                  <li><span className="font-bold">Lightning turns Eliza into a Bitcoin-native AI agent</span> — instantly paid, globally accessible, permissionless.</li>
                  <li><span className="font-bold">It also sets the foundation for a market of AI agents</span> paying and working with each other, without needing banks or centralized platforms.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </motion.section>
      </main>
    </div>
  );
} 