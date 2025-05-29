"use client";

import { Header } from '@/components/Header';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from '@/components/ui/table';
import { SafeImage } from '@/components/ui/SafeImage';

const featureComparison = [
  { feature: 'Cold Storage', ledger: '✅', sparrow: '✅ (w/ air-gap QR flow)' },
  { feature: 'Descriptor Control', ledger: '❌', sparrow: '✅' },
  { feature: 'Multisig (e.g. 2-of-3 w/ diff wallets)', ledger: 'Limited', sparrow: '✅ Fully Custom' },
  { feature: 'Post-Quantum Support', ledger: '❌', sparrow: '🧪 Experimental-Ready' },
  { feature: 'Open Source', ledger: 'Partially', sparrow: '✅ Fully Auditable' },
  { feature: 'Developer Tooling', ledger: 'Minimal', sparrow: '✅ PSBT, xpubs, custom scripts' },
  { feature: 'Network Trust', ledger: 'Relies on Ledger servers', sparrow: '✅ Connect to your own node' }
];

const migrationSteps = [
  {
    title: 'Prerequisites',
    items: [
      'Your Ledger device',
      'Ledger Live installed',
      'Sparrow Wallet Download',
      'Access to your Bitcoin xpub or 24-word seed (don\'t input this on a computer—use QR flow or airgap)'
    ]
  },
  {
    title: 'Option 1: Use Ledger with Sparrow Directly',
    steps: [
      'Open Sparrow Wallet → File → New Wallet',
      'Name it something like LedgerWallet',
      'Click "Connected Hardware Wallet"',
      'Plug in your Ledger and unlock it',
      'Choose Bitcoin app on the device',
      'Pick the Account Type (Native SegWit or Taproot)',
      'Click Import Keystore → Click Apply',
      'Connect to Node (Optional but Recommended)',
      'Start using Sparrow with your Ledger'
    ]
  },
  {
    title: 'Option 2: Migrate Wallet Off Ledger',
    steps: [
      'Export Ledger xpub (No seed leaks)',
      'Create New Wallet in Sparrow (air-gapped path)',
      'Choose Airgapped Hardware Wallet',
      'Manually input xpub or scan QR code',
      'Choose your derivation path',
      'Click Apply'
    ]
  },
  {
    title: 'Optional: Migrate to Multisig',
    steps: [
      'Create a new wallet → Choose Multisig',
      'Add Ledger + SeedSigner + Keystone as 3 cosigners',
      'Choose policy: e.g., 2-of-3',
      'Label UTXOs and test small sends',
      'Send all Ledger funds to fresh multisig address'
    ]
  }
];

const securityTips = [
  'Never enter your seed on a computer — always use QR scanning with air-gapped tools like SeedSigner',
  'Verify receive addresses on hardware device screens',
  'Use Sparrow\'s coin control, labeling, and change management to maintain privacy',
  'Connect Sparrow to your full node to avoid leaking xpubs to public servers'
];

export default function LedgerToSparrowMigration() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      {/* Subtle background gradient and pattern overlay */}
      <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-[#18191c] via-black to-[#0a0a0a] opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-yellow-900/10 via-transparent to-black opacity-60" />
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
      </div>
      <Header />
      
      {/* Hero Section */}
      <section className="max-w-screen-lg mx-auto pt-32 pb-14 px-4 text-center relative z-10">
        <Badge className="bg-yellow-500 text-black text-sm mb-6 font-satoshi tracking-wide shadow-md">Migration Guide</Badge>
        <div className="flex flex-col items-center justify-center gap-6 mb-8">
          <h1 className="font-epilogue text-6xl md:text-7xl font-bold text-yellow-400 tracking-tight leading-tight drop-shadow-[0_2px_32px_rgba(247,181,0,0.18)]">
            Migrate from Ledger to Sparrow
          </h1>
        </div>
        <div className="max-w-2xl mx-auto">
          <p className="text-xl md:text-2xl font-epilogue text-yellow-400 italic mb-6 drop-shadow-[0_2px_16px_rgba(247,181,0,0.18)] border-b-2 border-yellow-500/40 pb-4">
            &quot;Take control of your Bitcoin with full sovereignty, better flexibility, and no vendor lock-in.&quot;
          </p>
          <p className="text-lg md:text-xl font-satoshi text-white/90 leading-snug mb-6">
            This guide will help you migrate from Ledger to Sparrow, unlocking advanced features like multisig, custom scripts, and post-quantum readiness. Choose your path based on your security needs and technical comfort level.
          </p>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="max-w-screen-lg mx-auto px-4 mb-32 relative z-10">
        <h2 className="font-epilogue text-4xl md:text-5xl font-bold text-yellow-400 mb-10 tracking-tight text-center leading-tight drop-shadow-[0_2px_32px_rgba(247,181,0,0.18)]">
          Why Migrate to Sparrow?
        </h2>
        <div className="overflow-x-auto rounded-2xl bg-[#18191c]/80 p-10 mb-4 shadow-xl border border-yellow-500/20">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-yellow-500 font-bold text-xl">Feature</TableHead>
                <TableHead className="text-yellow-500 font-bold text-xl">Ledger</TableHead>
                <TableHead className="text-yellow-500 font-bold text-xl">Sparrow</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {featureComparison.map((row) => (
                <TableRow key={row.feature} className="border-b border-yellow-500/10 hover:bg-yellow-500/5 transition-colors">
                  <TableCell className="font-epilogue font-semibold text-lg">{row.feature}</TableCell>
                  <TableCell className="font-satoshi text-white/80 text-lg">{row.ledger}</TableCell>
                  <TableCell className="font-satoshi text-white/80 text-lg">{row.sparrow}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>

      {/* Migration Steps */}
      <section className="max-w-screen-lg mx-auto px-4 mb-32 relative z-10">
        <h2 className="font-epilogue text-4xl md:text-5xl font-bold text-yellow-400 mb-12 tracking-tight text-center leading-tight drop-shadow-[0_2px_32px_rgba(247,181,0,0.18)]">
          Step-by-Step Migration Guide
        </h2>
        <div className="space-y-20">
          {migrationSteps.map((section) => (
            <div key={section.title} className="bg-[#18191c]/80 rounded-2xl p-10 border-l-4 border-yellow-500/80 mb-2 shadow-xl">
              <div className="font-epilogue text-2xl text-yellow-400 mb-6 font-bold drop-shadow-[0_2px_16px_rgba(247,181,0,0.18)]">
                {section.title}
              </div>
              <ul className="space-y-4">
                {section.items?.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span className="font-satoshi text-white/90 text-lg">{item}</span>
                  </li>
                ))}
                {section.steps?.map((step, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-yellow-400 mt-1">{index + 1}.</span>
                    <span className="font-satoshi text-white/90 text-lg">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Security Tips */}
      <section className="max-w-screen-lg mx-auto px-4 mb-32 relative z-10">
        <h2 className="font-epilogue text-4xl md:text-5xl font-bold text-yellow-400 mb-12 tracking-tight text-center leading-tight drop-shadow-[0_2px_32px_rgba(247,181,0,0.18)]">
          Security Tips
        </h2>
        <div className="bg-[#18191c]/80 rounded-2xl p-10 border-l-4 border-yellow-500/80 shadow-xl">
          <ul className="space-y-4">
            {securityTips.map((tip, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-yellow-400 mt-1">•</span>
                <span className="font-satoshi text-white/90 text-lg">{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-screen-md mx-auto px-4 mb-40 text-center relative z-10">
        <h2 className="font-epilogue text-5xl md:text-8xl font-bold text-yellow-400 mb-10 tracking-tight leading-tight drop-shadow-[0_2px_32px_rgba(247,181,0,0.18)]">
          Ready to Take Control?
        </h2>
        <p className="font-epilogue text-2xl text-yellow-400 italic mb-8 max-w-2xl mx-auto drop-shadow-[0_2px_16px_rgba(247,181,0,0.18)] border-b-2 border-yellow-500/40 pb-4">
          &quot;Sovereignty isn&apos;t easy, but it&apos;s worth it. Sparrow is for those who want to own their Bitcoin journey.&quot;
        </p>
        <p className="text-lg md:text-xl font-satoshi text-white/80 mb-12 max-w-2xl mx-auto">
          Download Sparrow Wallet, follow this guide, and start your journey to true Bitcoin sovereignty. Remember: take your time, verify everything, and never compromise on security.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="https://sparrowwallet.com/download/" target="_blank">
            <Button className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 text-black font-bold px-12 py-6 rounded-2xl shadow-[0_8px_32px_0_rgba(247,181,0,0.18)] hover:from-yellow-500 hover:to-yellow-400 transition-all duration-300 font-epilogue tracking-tight text-2xl focus:ring-4 focus:ring-yellow-500/40">
              Download Sparrow
            </Button>
          </Link>
          <Link href="https://sparrowwallet.com/docs/" target="_blank">
            <Button className="bg-[#18191c] text-yellow-400 border-2 border-yellow-400 font-bold px-12 py-6 rounded-2xl shadow-[0_8px_32px_0_rgba(247,181,0,0.18)] hover:bg-yellow-400/10 transition-all duration-300 font-epilogue tracking-tight text-2xl focus:ring-4 focus:ring-yellow-500/40">
              Read Docs
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
} 