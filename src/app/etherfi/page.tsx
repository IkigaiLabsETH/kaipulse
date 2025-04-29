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

export default function EtherfiCardPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-[70vh] pt-24 pb-8 px-4">
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto w-full">
          <div className="flex-1 flex flex-col items-start gap-6">
            <Badge className="bg-yellow-500 text-black text-sm mb-2 font-satoshi tracking-wide">New: Pure Crypto Credit</Badge>
            <h1 className="font-epilogue text-5xl md:text-6xl font-bold text-yellow-400 mb-2 tracking-tight">ether.fi Cash Card</h1>
            <p className="text-lg md:text-2xl text-white/90 font-satoshi max-w-xl leading-snug">
              The world&apos;s first non-custodial credit card for crypto. Off-ramp, borrow, and spend—without ever leaving DeFi. No banks. No waiting. No compromises.
            </p>
            <Link href="https://ether.fi/cash" target="_blank">
              <Button className="bg-yellow-500 text-black font-bold text-lg px-8 py-4 rounded-xl mt-2 hover:bg-yellow-400 transition-all duration-300 font-epilogue tracking-tight">
                Join the Waitlist
              </Button>
            </Link>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <Image
              src="/card-hero.png"
              alt="ether.fi Cash Card"
              width={420}
              height={280}
              className="rounded-2xl border-2 border-yellow-500 bg-[#1c1f26]"
              priority
            />
          </div>
        </div>
      </section>

      {/* Background Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading-lg text-yellow-400 font-boska mb-4 font-bold tracking-tight uppercase">The Background</h2>
          <p className="text-lg md:text-xl text-white/80 font-satoshi mb-4">
            DeFi has unlocked a world of financial freedom, but spending your crypto in the real world has always meant trusting a centralized exchange. You deposit, wait, and hope your account isn&apos;t frozen. Then you wire to your bank, wait again, and finally spend. Why build in DeFi if you&apos;re forced to off-ramp through TradFi?
          </p>
          <p className="text-lg md:text-xl text-white/90 font-satoshi">
            <span className="text-yellow-400 font-semibold">ether.fi Cash</span> is the first true crypto-native credit card. No more top-ups, no more custodial risk, no more waiting days for your money. Just borrow, spend, and stay in control—always.
          </p>
        </div>
      </section>

      <Separator className="my-8 bg-yellow-500/20" />

      {/* How It Works Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="heading-lg text-yellow-400 font-boska mb-10 text-center font-bold tracking-tight uppercase">How It Works</h2>
          <Grid columns={3} className="justify-center">
            <Card className="bg-black border-yellow-500">
              <CardHeader>
                <CardTitle className="font-epilogue text-xl text-yellow-400">1. Hold</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 font-satoshi">Deposit your crypto (eETH, USDC, and more coming soon) into your own Gnosis Safe—fully under your control.</p>
              </CardContent>
            </Card>
            <Card className="bg-black border-yellow-500">
              <CardHeader>
                <CardTitle className="font-epilogue text-xl text-yellow-400">2. Swipe</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 font-satoshi">Use your Cash Card anywhere Visa is accepted. No top-ups, no waiting, no off-ramp fees. Just tap and go.</p>
              </CardContent>
            </Card>
            <Card className="bg-black border-yellow-500">
              <CardHeader>
                <CardTitle className="font-epilogue text-xl text-yellow-400">3. Borrow</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 font-satoshi">Each purchase instantly borrows against your staked assets—no need to sell. Your crypto keeps earning, your lifestyle keeps moving.</p>
              </CardContent>
            </Card>
          </Grid>
        </div>
      </section>

      <Separator className="my-8 bg-yellow-500/20" />

      {/* Borrowing Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading-lg text-yellow-400 font-boska mb-4 font-bold tracking-tight uppercase">Borrowing, Reimagined</h2>
          <p className="text-lg md:text-xl text-white/80 font-satoshi mb-4">
            Imagine holding 10 eETH and wanting to buy a new iPhone. With ether.fi Cash, you simply deposit your eETH, set your borrowing preferences, and swipe. The protocol instantly opens a lending position, fronts the fiat, and settles the payment—all gasless, all in seconds.
          </p>
          <p className="text-lg md:text-xl text-white/90 font-satoshi">
            Your crypto stays in your Safe, still earning yield. Repay on your terms, or let your staking rewards cover it automatically. No minimums, no surprise fees, no TradFi headaches.
          </p>
        </div>
      </section>

      <Separator className="my-8 bg-yellow-500/20" />

      {/* Gnosis Safe Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="heading-lg text-yellow-400 font-boska mb-10 text-center font-bold tracking-tight uppercase">True Non-Custodial</h2>
          <Grid columns={2} className="justify-center">
            <Card className="bg-black border-yellow-500">
              <CardHeader>
                <CardTitle className="font-epilogue text-xl text-yellow-400">Gnosis Safe</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 font-satoshi">Your assets never leave your Gnosis Safe. Set spending limits, freeze your card, and manage everything on-chain. No one—not even ether.fi—can touch your funds.</p>
              </CardContent>
            </Card>
            <Card className="bg-black border-yellow-500">
              <CardHeader>
                <CardTitle className="font-epilogue text-xl text-yellow-400">On-Chain Controls</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 font-satoshi">Adjust spending limits, freeze your card, and manage everything on-chain. Enjoy Apple Pay & Google Pay support, plus gasless transactions on Scroll.</p>
              </CardContent>
            </Card>
          </Grid>
        </div>
      </section>

      <Separator className="my-8 bg-yellow-500/20" />

      {/* Perks & Tiers Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="heading-lg text-yellow-400 font-boska mb-10 text-center font-bold tracking-tight uppercase">Perks & Tiers</h2>
          <div className="mx-auto max-w-3xl text-center mb-8">
            <p className="text-lg md:text-xl text-white/80 font-satoshi mb-4">
              Every swipe earns you Cash Points—redeemable for USDC, VIP crypto conference tickets, and more. Enjoy premium perks like metal cards, lounge access, private parties, and low FX rates. The higher your tier, the more you unlock.
            </p>
          </div>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-epilogue text-yellow-400">Tier</TableHead>
                  <TableHead className="font-epilogue text-yellow-400">Min Points</TableHead>
                  <TableHead className="font-epilogue text-yellow-400">Cashback</TableHead>
                  <TableHead className="font-epilogue text-yellow-400">Perks</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell><Badge className="bg-yellow-500 text-black font-satoshi">Core</Badge></TableCell>
                  <TableCell>0</TableCell>
                  <TableCell>2% (3% promo)</TableCell>
                  <TableCell>1 free physical card</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><Badge className="bg-yellow-500 text-black font-satoshi">Luxe</Badge></TableCell>
                  <TableCell>10,000</TableCell>
                  <TableCell>3%</TableCell>
                  <TableCell>Airport lounge, 2 cards</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><Badge className="bg-yellow-500 text-black font-satoshi">Pinnacle</Badge></TableCell>
                  <TableCell>50,000</TableCell>
                  <TableCell>3% + DeFi boosts</TableCell>
                  <TableCell>5 metal cards, concierge</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><Badge className="bg-yellow-500 text-black font-satoshi">VIP</Badge></TableCell>
                  <TableCell>Invite</TableCell>
                  <TableCell>3% + allocation deals</TableCell>
                  <TableCell>24/7 Genie, conference passes</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      <Separator className="my-8 bg-yellow-500/20" />

      {/* Recap Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading-lg text-yellow-400 font-boska mb-8 font-bold tracking-tight uppercase">The Recap</h2>
          <p className="mx-auto max-w-xl text-lg md:text-xl font-satoshi text-white/90 leading-relaxed">
            ether.fi Cash is the first truly non-custodial crypto credit card—no banks, no waiting, no compromises. Unlike most crypto cards, your funds always stay in your control, earning yield while you spend. Enjoy seamless off-ramping, instant borrowing, and premium perks, all powered by DeFi. It&apos;s the easiest, most secure way to put your crypto to work in the real world.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="flex flex-col items-center justify-center py-20 px-4">
        <h2 className="font-epilogue text-4xl md:text-5xl font-bold text-yellow-400 mb-6 tracking-tight text-center">Ready to experience the future of spending?</h2>
        <Link href="https://ether.fi/cash" target="_blank">
          <Button className="bg-yellow-500 text-black font-bold text-xl px-10 py-5 rounded-xl mt-2 hover:bg-yellow-400 transition-all duration-300 font-epilogue tracking-tight">
            Join the Waitlist
          </Button>
        </Link>
      </section>
    </div>
  );
}
