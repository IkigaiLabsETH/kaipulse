"use client";

import { Header } from '@/components/Header';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Grid } from '@/components/ui/grid';

export default function LedgerPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-[70vh] pt-24 pb-8 px-4">
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto w-full">
          <div className="flex-1 flex flex-col items-start gap-6">
            <Badge className="bg-yellow-500 text-black text-sm mb-2 font-satoshi tracking-wide">Secure Your Crypto</Badge>
            <h1 className="font-epilogue text-5xl md:text-6xl font-bold text-yellow-400 mb-2 tracking-tight">Ledger FLEX</h1>
            <p className="text-lg md:text-2xl text-white/90 font-satoshi max-w-xl leading-snug">
              Ledger Flex — the next evolution of the world’s most trusted hardware wallet. Take charge of your crypto with a sleek E-Ink touchscreen, uncompromising security, and effortless on-the-go control for total peace of mind.
            </p>
            <Link href="https://shop.ledger.com/" target="_blank">
              <Button className="bg-yellow-500 text-black font-bold text-lg px-8 py-4 rounded-xl mt-2 hover:bg-yellow-400 transition-all duration-300 font-epilogue tracking-tight">
                Buy Now
              </Button>
            </Link>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <div className="w-full max-w-[500px] aspect-video rounded-2xl border-4 border-yellow-400 bg-[#1c1f26] overflow-hidden shadow-[0_8px_32px_0_rgba(247,181,0,0.25),0_2px_8px_0_rgba(0,0,0,0.45)]">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/JIj4DmEr51M"
                title="Ledger Flex Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full rounded-2xl"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Background Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading-lg text-yellow-400 font-boska mb-4 font-bold tracking-tight uppercase">Why Hardware Wallets?</h2>
          <p className="text-lg md:text-xl text-white/80 font-satoshi mb-4">
            Software wallets are always online—making them vulnerable to hacks. Ledger's hardware wallets keep your private keys offline, protected by industry-leading Secure Element chips. Only you control your crypto, always.
          </p>
          <p className="text-lg md:text-xl text-white/90 font-satoshi">
            <span className="text-yellow-400 font-semibold">Ledger</span> is the market leader in hardware wallets, trusted by millions. With Ledger, you get peace of mind, total control, and a premium experience from setup to daily use.
          </p>
        </div>
      </section>

      <Separator className="my-8 bg-yellow-500/20" />

      {/* How It Works Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="heading-lg text-yellow-400 font-boska mb-10 text-center font-bold tracking-tight uppercase">How It Works</h2>
          <Grid columns={4} className="justify-center">
            <Card className="bg-black border-yellow-500">
              <CardHeader>
                <CardTitle className="font-epilogue text-xl text-yellow-400">1. Connect</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 font-satoshi">Pair your Ledger Nano X via Bluetooth or connect Nano S Plus by USB-C. Compatible with computers and mobile devices.</p>
              </CardContent>
            </Card>
            <Card className="bg-black border-yellow-500">
              <CardHeader>
                <CardTitle className="font-epilogue text-xl text-yellow-400">2. Secure</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 font-satoshi">Your private keys stay offline, protected by a CC EAL6+ Secure Element chip. Only you can approve transactions with physical buttons.</p>
              </CardContent>
            </Card>
            <Card className="bg-black border-yellow-500">
              <CardHeader>
                <CardTitle className="font-epilogue text-xl text-yellow-400">3. Transact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 font-satoshi">Buy, send, receive, swap, and stake 5,500+ assets using the Ledger Live app. Every transaction is verified on your device's screen.</p>
              </CardContent>
            </Card>
            <Card className="bg-black border-yellow-500">
              <CardHeader>
                <CardTitle className="font-epilogue text-xl text-yellow-400">4. Recover</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 font-satoshi">Lost your device? Restore your funds on any Ledger by entering your 24-word recovery phrase. Your crypto stays safe, always.</p>
              </CardContent>
            </Card>
          </Grid>
        </div>
      </section>

      <Separator className="my-8 bg-yellow-500/20" />

      {/* Ledger Live App Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading-lg text-yellow-400 font-boska mb-4 font-bold tracking-tight uppercase">Ledger Live App</h2>
          <p className="text-lg md:text-xl text-white/80 font-satoshi mb-4">
            Ledger Live is your all-in-one crypto dashboard. Buy, sell, swap, stake, and track your portfolio—no email or password required. All data stays local for maximum privacy.
          </p>
          <p className="text-lg md:text-xl text-white/90 font-satoshi">
            Every transaction is secured by your Ledger device. Approve actions on-device for total transparency. Manage NFTs, earn rewards, and enjoy a seamless, private experience.
          </p>
        </div>
      </section>

      <Separator className="my-8 bg-yellow-500/20" />

      {/* Value Propositions Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="heading-lg text-yellow-400 font-boska mb-10 text-center font-bold tracking-tight uppercase">Why Choose Ledger?</h2>
          <Grid columns={2} className="justify-center">
            <Card className="bg-black border-yellow-500">
              <CardHeader>
                <CardTitle className="font-epilogue text-xl text-yellow-400">You Control Your Crypto</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 font-satoshi">Only you hold your private keys. No exchange or third party can access your funds. True self-custody, always.</p>
              </CardContent>
            </Card>
            <Card className="bg-black border-yellow-500">
              <CardHeader>
                <CardTitle className="font-epilogue text-xl text-yellow-400">Peace of Mind Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 font-satoshi">Ledger's Secure Element chip and proprietary OS are certified and trusted. Millions of users rely on Ledger for uncompromising security.</p>
              </CardContent>
            </Card>
            <Card className="bg-black border-yellow-500">
              <CardHeader>
                <CardTitle className="font-epilogue text-xl text-yellow-400">All-in-One Solution</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 font-satoshi">Ledger hardware + Ledger Live app = a complete ecosystem. Store, buy, swap, stake, and track—all in one place.</p>
              </CardContent>
            </Card>
            <Card className="bg-black border-yellow-500">
              <CardHeader>
                <CardTitle className="font-epilogue text-xl text-yellow-400">Beginner-Friendly Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 font-satoshi">No passwords, no accounts. Just plug in (or pair) and follow the prompts. Ledger makes crypto custody accessible to everyone.</p>
              </CardContent>
            </Card>
          </Grid>
        </div>
      </section>

      <Separator className="my-8 bg-yellow-500/20" />

      {/* Competitive Differentiators Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="heading-lg text-yellow-400 font-boska mb-10 text-center font-bold tracking-tight uppercase">What Sets Ledger Apart?</h2>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-epilogue text-yellow-400">Feature</TableHead>
                  <TableHead className="font-epilogue text-yellow-400">Ledger</TableHead>
                  <TableHead className="font-epilogue text-yellow-400">Others</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>CC EAL6+ Secure Element</TableCell>
                  <TableCell><Badge className="bg-yellow-500 text-black font-satoshi">Yes</Badge></TableCell>
                  <TableCell>No / Limited</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>5,500+ Asset Support</TableCell>
                  <TableCell><Badge className="bg-yellow-500 text-black font-satoshi">Yes</Badge></TableCell>
                  <TableCell>Some</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Mobile Bluetooth Access</TableCell>
                  <TableCell><Badge className="bg-yellow-500 text-black font-satoshi">Nano X</Badge></TableCell>
                  <TableCell>Rare</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>All-in-One App</TableCell>
                  <TableCell><Badge className="bg-yellow-500 text-black font-satoshi">Ledger Live</Badge></TableCell>
                  <TableCell>Fragmented</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Privacy by Design</TableCell>
                  <TableCell><Badge className="bg-yellow-500 text-black font-satoshi">Yes</Badge></TableCell>
                  <TableCell>Not Always</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Brand Trust &amp; Support</TableCell>
                  <TableCell><Badge className="bg-yellow-500 text-black font-satoshi">Millions Sold</Badge></TableCell>
                  <TableCell>Varies</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      <Separator className="my-8 bg-yellow-500/20" />

      {/* Latest Innovations Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="heading-lg text-yellow-400 font-boska mb-10 text-center font-bold tracking-tight uppercase">Latest Innovations</h2>
          <Grid columns={3} className="justify-center">
            <Card className="bg-black border-yellow-500">
              <CardHeader>
                <CardTitle className="font-epilogue text-xl text-yellow-400">Ledger Stax &amp; Flex</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 font-satoshi">Next-gen wallets with E Ink touchscreens, intuitive controls, and Ledger-grade security. Designed for the future of crypto.</p>
              </CardContent>
            </Card>
            <Card className="bg-black border-yellow-500">
              <CardHeader>
                <CardTitle className="font-epilogue text-xl text-yellow-400">Ledger Recover</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 font-satoshi">A secure, multi-layer backup service for your recovery phrase. Split, encrypt, and restore with identity verification for extra peace of mind.</p>
              </CardContent>
            </Card>
            <Card className="bg-black border-yellow-500">
              <CardHeader>
                <CardTitle className="font-epilogue text-xl text-yellow-400">Ledger Live Updates</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 font-satoshi">Continuous app improvements: NFT support, more staking networks, new coins, and seamless on/off ramps. Your Web3 gateway keeps getting better.</p>
              </CardContent>
            </Card>
          </Grid>
        </div>
      </section>

      <Separator className="my-8 bg-yellow-500/20" />

      {/* Recap Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading-lg text-yellow-400 font-boska mb-8 font-bold tracking-tight uppercase">The Recap</h2>
          <p className="mx-auto max-w-xl text-lg md:text-xl font-satoshi text-white/90 leading-relaxed">
            Ledger puts you in control of your crypto—no banks, no third parties, no compromises. Enjoy industry-leading security, a seamless app experience, and the confidence to explore the world of digital assets. Your keys, your coins, your future.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="flex flex-col items-center justify-center py-20 px-4">
        <h2 className="font-epilogue text-4xl md:text-5xl font-bold text-yellow-400 mb-6 tracking-tight text-center">Ready to unlock your financial freedom?</h2>
        <Link href="https://shop.ledger.com/" target="_blank">
          <Button className="bg-yellow-500 text-black font-bold text-xl px-10 py-5 rounded-xl mt-2 hover:bg-yellow-400 transition-all duration-300 font-epilogue tracking-tight">
            Get Ledger Now
          </Button>
        </Link>
      </section>
    </div>
  );
}
