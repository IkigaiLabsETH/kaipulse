"use client";

import { Header } from '@/components/Header';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from '@/components/ui/table';
import { SafeImage } from '@/components/ui/SafeImage';

const sparrowStrengths = [
  {
    title: 'Full Control & Transparency',
    highlight: 'Not your keys, not your coins.',
    description: `Sparrow is a desktop wallet built for power users who want to see and control every detail. You get full coin control, editable transactions, and a detailed byte-level transaction viewer. No black boxes—just Bitcoin, your way.`,
    note: `Builder's Note: If you want to understand UTXOs, labels, and PSBTs, Sparrow is the best classroom.`
  },
  {
    title: 'PSBT & Hardware Wallet',
    highlight: 'Interoperability by design.',
    description: `Sparrow is built around the PSBT standard, making it easy to use with all major hardware wallets (Ledger, Trezor, Coldcard, SeedSigner, etc). Import, export, and sign transactions with airgapped devices, QR codes, or USB.`,
    note: `Builder's Note: If you want to use your own node, mix wallets, or multisig, Sparrow is the Swiss Army knife.`
  },
  {
    title: 'Privacy & Security',
    highlight: 'Argon2 encryption, your node, your rules.',
    description: `Sparrow uses strong Argon2 password hashing and lets you connect directly to your own Bitcoin Core or Electrum server (with Tor support). No forced cloud, no tracking, no leaks.`,
    note: `Builder's Note: If you care about privacy, running your own node with Sparrow is the gold standard.`
  },
  {
    title: 'UTXO Management',
    highlight: 'See every input, output, and label.',
    description: `Sparrow embraces Bitcoin's UTXO model. Drill into every transaction, label everything, and track your coins from coinbase to spend. The transaction graph is your private block explorer.`,
    note: `Builder's Note: For advanced users, this is a dream. For beginners, it's a learning curve.`
  }
];

const sparrowFlaws = [
  {
    title: 'Not for Beginners',
    pain: `Sparrow's power comes with complexity. The UI is dense, and new users may feel overwhelmed by the options and terminology.`,
    solution: `More onboarding guides, better defaults, and a "simple mode" could help. For now, it's best for those willing to learn.`
  },
  {
    title: 'Desktop Only',
    pain: `No mobile app. If you want to manage your Bitcoin on the go, you'll need a different wallet.`,
    solution: `A companion mobile app or watch-only mode would expand usability, but security comes first.`
  },
  {
    title: 'No Fiat Onramp',
    pain: `You can't buy Bitcoin directly in Sparrow. It's a pure wallet, not an exchange or brokerage.`,
    solution: `Integrations with DEXs or third-party onramps could help, but would add complexity and regulatory risk.`
  }
];

const comparisonRows = [
  { feature: 'Type', sparrow: 'Desktop Wallet', coinbase: 'Exchange + Custodial', ledger: 'Hardware Wallet' },
  { feature: 'Self-Custody', sparrow: 'Yes', coinbase: 'No (by default)', ledger: 'Yes' },
  { feature: 'Open Source', sparrow: 'Yes', coinbase: 'No', ledger: 'Partial' },
  { feature: 'PSBT Support', sparrow: 'Full', coinbase: 'No', ledger: 'Yes' },
  { feature: 'Hardware Wallets', sparrow: 'All major supported', coinbase: 'Limited', ledger: 'N/A (it is hardware)' },
  { feature: 'Mobile App', sparrow: 'No', coinbase: 'Yes', ledger: 'Yes' },
  { feature: 'Privacy', sparrow: 'Strong (your node, Tor)', coinbase: 'Low', ledger: 'Good' },
  { feature: 'Fiat Onramp', sparrow: 'No', coinbase: 'Yes', ledger: 'No' },
  { feature: 'Beginner Friendly', sparrow: 'No', coinbase: 'Yes', ledger: 'Yes' },
  { feature: 'Advanced Features', sparrow: 'Coin control, UTXO, multisig, labels', coinbase: 'Basic', ledger: 'Some' },
];

const sparrowPillars = [
  {
    title: "Power Users & Privacy Advocates",
    description: "If you want to control every aspect of your Bitcoin, from coin selection to multisig, Sparrow is for you."
  },
  {
    title: "Hardware Wallet Owners",
    description: "Sparrow is the best desktop companion for Coldcard, SeedSigner, Ledger, Trezor, and more."
  },
  {
    title: "Node Runners",
    description: "If you run your own Bitcoin Core or Electrum server, Sparrow lets you use it for maximum privacy and sovereignty."
  }
];

export default function SparrowHonestTake() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      {/* Subtle background gradient and pattern overlay */}
      <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-[#18191c] via-black to-[#0a0a0a] opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-yellow-900/10 via-transparent to-black opacity-60" />
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
      </div>
      <Header />
      <section className="max-w-screen-lg mx-auto pt-32 pb-14 px-4 text-center relative z-10">
        <Badge className="bg-yellow-500 text-black text-sm mb-6 font-satoshi tracking-wide shadow-md">Builder&apos;s Honest Take</Badge>
        <div className="flex flex-col items-center justify-center gap-6 mb-8">
          <SafeImage
            src="/sparrow.png"
            alt="Sparrow Wallet Logo"
            className="w-32 h-32 object-contain rounded-full border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] bg-black"
            priority
          />
          <h1 className="font-epilogue text-6xl md:text-7xl font-bold text-yellow-400 tracking-tight leading-tight drop-shadow-[0_2px_32px_rgba(247,181,0,0.18)]">
            Sparrow Wallet: For Bitcoin Sovereigns
          </h1>
        </div>
        <div className="max-w-2xl mx-auto">
          <p className="text-xl md:text-2xl font-epilogue text-yellow-400 italic mb-6 drop-shadow-[0_2px_16px_rgba(247,181,0,0.18)] border-b-2 border-yellow-500/40 pb-4">
            &quot;Sparrow is the wallet I recommend to anyone who wants to truly own their Bitcoin. No easy UX, but very empowering.&quot;
          </p>
          <p className="text-lg md:text-xl font-satoshi text-white/90 leading-snug mb-6">
            Sparrow Wallet is a desktop Bitcoin wallet for those who want maximum control, privacy, and security. It&apos;s not for everyone—but if you want to learn how Bitcoin really works, Sparrow is the best tool in the box. <a href="https://sparrowwallet.com/features/" target="_blank" className="underline text-yellow-400">Learn more</a>.
          </p>
        </div>
      </section>

      {/* Custom section divider */}
      <div className="w-full flex justify-center mb-20">
        <div className="h-1 w-40 bg-gradient-to-r from-transparent via-yellow-500/60 to-transparent rounded-full shadow-lg" />
      </div>

      {/* What Makes Sparrow Special */}
      <section className="max-w-screen-lg mx-auto px-4 mb-32 relative z-10">
        <h2 className="font-epilogue text-5xl md:text-6xl font-bold text-yellow-400 mb-14 tracking-tight text-center leading-tight drop-shadow-[0_2px_32px_rgba(247,181,0,0.18)]">
          What Makes Sparrow Different?
        </h2>
        <div className="grid md:grid-cols-2 gap-16">
          {sparrowStrengths.map((item) => (
            <div key={item.title} className="flex flex-col gap-4 bg-[#18191c]/80 rounded-2xl p-8 shadow-xl border border-yellow-500/20">
              <div className="font-epilogue text-2xl md:text-3xl text-yellow-400 font-bold leading-tight drop-shadow-[0_2px_16px_rgba(247,181,0,0.18)]">
                {item.title}
              </div>
              <div className="font-epilogue text-lg text-yellow-400 italic mb-1 border-l-4 border-yellow-500/60 pl-4">
                {item.highlight}
              </div>
              <div className="font-satoshi text-white/90 text-lg md:text-xl leading-relaxed">
                {item.description}
              </div>
              <div className="font-satoshi text-yellow-500/80 text-base italic mt-2">{item.note}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="w-full flex justify-center mb-24">
        <div className="h-1 w-40 bg-gradient-to-r from-transparent via-yellow-500/60 to-transparent rounded-full shadow-lg" />
      </div>

      {/* Platform Comparison */}
      <section className="max-w-screen-lg mx-auto px-4 mb-32 relative z-10">
        <h2 className="font-epilogue text-4xl md:text-5xl font-bold text-yellow-400 mb-10 tracking-tight text-center leading-tight drop-shadow-[0_2px_32px_rgba(247,181,0,0.18)]">
          Sparrow vs. Coinbase vs. Ledger
        </h2>
        <p className="text-lg font-satoshi text-white/80 mb-8 text-center">
          How does Sparrow compare to the most popular alternatives? Here&apos;s a quick look at what you get (and what you don&apos;t).
        </p>
        <div className="overflow-x-auto rounded-2xl bg-[#18191c]/80 p-10 mb-4 shadow-xl border border-yellow-500/20">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-yellow-500 font-bold text-xl">Feature</TableHead>
                <TableHead className="text-yellow-500 font-bold text-xl">Sparrow</TableHead>
                <TableHead className="text-yellow-500 font-bold text-xl">Coinbase</TableHead>
                <TableHead className="text-yellow-500 font-bold text-xl">Ledger</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {comparisonRows.map((row) => (
                <TableRow key={row.feature} className="border-b border-yellow-500/10 hover:bg-yellow-500/5 transition-colors">
                  <TableCell className="font-epilogue font-semibold text-lg">{row.feature}</TableCell>
                  <TableCell className="font-satoshi text-white/80 text-lg">{row.sparrow}</TableCell>
                  <TableCell className="font-satoshi text-white/80 text-lg">{row.coinbase}</TableCell>
                  <TableCell className="font-satoshi text-white/80 text-lg">{row.ledger}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>

      <div className="w-full flex justify-center mb-24">
        <div className="h-1 w-40 bg-gradient-to-r from-transparent via-yellow-500/60 to-transparent rounded-full shadow-lg" />
      </div>

      {/* Who is Sparrow For? */}
      <section className="max-w-screen-lg mx-auto px-4 mb-32 relative z-10">
        <h2 className="font-epilogue text-4xl md:text-5xl font-bold text-yellow-400 mb-12 tracking-tight text-center leading-tight drop-shadow-[0_2px_32px_rgba(247,181,0,0.18)]">
          Who Is Sparrow For?
        </h2>
        <p className="text-lg font-satoshi text-white/80 mb-10 text-center max-w-3xl mx-auto">
          Sparrow is best for:
        </p>
        <div className="grid md:grid-cols-3 gap-10">
          {sparrowPillars.map((pillar) => (
            <div key={pillar.title} className="bg-[#18191c]/80 rounded-2xl p-8 shadow-xl border border-yellow-500/20 flex flex-col gap-3">
              <div className="font-epilogue text-2xl text-yellow-400 font-bold">{pillar.title}</div>
              <div className="font-satoshi text-white/90 text-lg">{pillar.description}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="w-full flex justify-center mb-24">
        <div className="h-1 w-40 bg-gradient-to-r from-transparent via-yellow-500/60 to-transparent rounded-full shadow-lg" />
      </div>

      {/* Honest Flaws & Solutions */}
      <section className="max-w-screen-lg mx-auto px-4 mb-32 relative z-10">
        <h2 className="font-epilogue text-4xl md:text-5xl font-bold text-yellow-400 mb-12 tracking-tight text-center leading-tight drop-shadow-[0_2px_32px_rgba(247,181,0,0.18)]">
          Honest Flaws &amp; How to Fix Them
        </h2>
        <div className="space-y-20">
          {sparrowFlaws.map((item) => (
            <div key={item.title} className="bg-[#18191c]/80 rounded-2xl p-10 border-l-4 border-yellow-500/80 mb-2 shadow-xl">
              <div className="font-epilogue text-2xl text-yellow-400 mb-2 font-bold drop-shadow-[0_2px_16px_rgba(247,181,0,0.18)]">{item.title}</div>
              <div className="font-epilogue text-lg text-yellow-400 italic mb-2 border-l-4 border-yellow-500/60 pl-4">Pain Point</div>
              <div className="font-satoshi text-white/80 text-lg mb-4">{item.pain}</div>
              <div className="font-epilogue text-lg text-yellow-400 italic mb-2 border-l-4 border-yellow-500/60 pl-4">Possible Direction</div>
              <div className="font-satoshi text-white/90 text-lg">{item.solution}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="w-full flex justify-center mb-28">
        <div className="h-1 w-40 bg-gradient-to-r from-transparent via-yellow-500/60 to-transparent rounded-full shadow-lg" />
      </div>

      {/* CTA */}
      <section className="max-w-screen-md mx-auto px-4 mb-40 text-center relative z-10">
        <h2 className="font-epilogue text-5xl md:text-8xl font-bold text-yellow-400 mb-10 tracking-tight leading-tight drop-shadow-[0_2px_32px_rgba(247,181,0,0.18)]">
          Ready to Take Control?
        </h2>
        <p className="font-epilogue text-2xl text-yellow-400 italic mb-8 max-w-2xl mx-auto drop-shadow-[0_2px_16px_rgba(247,181,0,0.18)] border-b-2 border-yellow-500/40 pb-4">
          &quot;Sovereignty isn&apos;t easy, but it&apos;s worth it. Sparrow is for those who want to own their Bitcoin journey.&quot;
        </p>
        <p className="text-lg md:text-xl font-satoshi text-white/80 mb-12 max-w-2xl mx-auto">
          Download Sparrow Wallet, read the docs, and start learning. If you want easy, use Coinbase. If you want control, use Sparrow. If you want both, use Ledger as your hardware vault and Sparrow as your command center.
        </p>
        <Link href="https://sparrowwallet.com/features/" target="_blank">
          <Button className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 text-black font-bold px-12 py-6 rounded-2xl shadow-[0_8px_32px_0_rgba(247,181,0,0.18)] hover:from-yellow-500 hover:to-yellow-400 transition-all duration-300 font-epilogue tracking-tight text-2xl focus:ring-4 focus:ring-yellow-500/40">
            Sparrow Wallet Features
          </Button>
        </Link>
      </section>
    </div>
  );
}
