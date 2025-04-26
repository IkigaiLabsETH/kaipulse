'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function LightningNetworkPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative min-h-[60vh] flex flex-col items-center justify-center pt-24"
      >
        <div className="w-full max-w-4xl mx-auto px-4 pt-12 pb-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative z-10 flex flex-col items-center space-y-6 text-center"
          >
            <div className="inline-flex items-center justify-center px-4 py-1.5 mb-4 border border-yellow-500/30 rounded-full bg-yellow-500/10 backdrop-blur-sm">
              <span className="text-sm text-yellow-400 font-medium">Lightning Network</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-yellow-400 tracking-tight">
              Red Pill for Bitcoin Builders
            </h1>
            <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Welcome to the future of programmable money. The Lightning Network is Bitcoin&apos;s answer to instant, global, censorship-resistant payments—enabling new business models, creator economies, and financial freedom for all. If you&apos;re a developer, this is your invitation to build on the world&apos;s most secure, open monetary network.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="relative z-10 mt-12 w-full flex justify-center"
          >
            <div className="bg-[#1c1f26] rounded-lg border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] overflow-hidden max-w-3xl w-full">
              <div className="aspect-video w-full">
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
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,199,0,0.10),rgba(0,0,0,0))] backdrop-blur-[200px] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/50 to-black pointer-events-none" />
      </motion.div>

      <main className="max-w-3xl mx-auto px-4 py-12 text-white">
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Why Build on Bitcoin + Lightning?</h2>
          <ul className="list-disc pl-6 text-gray-200 space-y-1">
            <li>True digital cash: instant, borderless, and permissionless payments</li>
            <li>Micropayments: enable new business models (pay-per-like, streaming money, micro-tipping)</li>
            <li>Non-custodial: users control their funds, not platforms</li>
            <li>Open APIs: integrate with any app, service, or device</li>
            <li>Global reach: anyone with a phone can participate</li>
          </ul>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">How to Get Started</h2>
          <ol className="list-decimal pl-6 text-gray-200 space-y-1">
            <li>Read the <Link href="/docu/SATS" className="underline text-yellow-400">Lightning Network Production Guide</Link> for a deep technical dive.</li>
            <li>Spin up a Lightning node (try <a href="https://voltage.cloud/" target="_blank" rel="noopener noreferrer" className="underline text-yellow-400">Voltage</a> for managed nodes).</li>
            <li>Experiment with <a href="https://github.com/alexbosworth/ln-service" target="_blank" rel="noopener noreferrer" className="underline text-yellow-400">ln-service</a> or <a href="https://webln.dev/" target="_blank" rel="noopener noreferrer" className="underline text-yellow-400">WebLN</a> for app integration.</li>
            <li>Build something that couldn&apos;t exist before: pay-per-action, real-time rewards, global micro-economies.</li>
          </ol>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Featured Guide: Lightning Network Production Guide</h2>
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
          <Link href="/docu/SATS" className="inline-block mt-4 px-4 py-2 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-300 transition">Read the Full Guide</Link>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Red Pill: Why Lightning, Why Now?</h2>
          <p className="text-gray-200 mb-2">
            The world is waking up to programmable, unstoppable money. Lightning lets you build apps that empower users, reward creators, and bypass legacy rails. Don&apos;t just watch the revolution—be part of it. The tools are open, the code is public, and the opportunity is global.
          </p>
          <p className="text-gray-400 text-sm">
            Want to go deeper? Join the community, read the docs, and start building. The next great Bitcoin app could be yours.
          </p>
        </section>
        <footer className="mt-12 text-center text-gray-500 text-xs">
          Inspired by <a href="https://www.youtube.com/watch?v=Z78ZbPcsc3g" target="_blank" rel="noopener noreferrer" className="underline">this Lightning Network deep dive</a> and the open-source Bitcoin movement.
        </footer>
        <section className="mt-20 bg-[#181818] rounded-lg border-2 border-yellow-500/40 shadow-lg shadow-yellow-900/10 p-8 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Case Study: Satsnap & Lightning Network</h2>
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
            Learn more in the <Link href="/docu/SATS" className="underline text-yellow-400">Lightning Network Production Guide</Link>.
          </p>
        </section>
      </main>
    </div>
  );
} 