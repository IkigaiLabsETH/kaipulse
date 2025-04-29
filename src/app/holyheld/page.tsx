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

export default function HolyheldCardPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-[70vh] pt-24 pb-8 px-4">
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto w-full">
          <div className="flex-1 flex flex-col items-start gap-6">
            <Badge className="bg-yellow-500 text-black text-sm mb-2 font-satoshi tracking-wide">Crypto Native Card</Badge>
            <h1 className="font-epilogue text-5xl md:text-6xl font-bold text-yellow-400 mb-2 tracking-tight">One Card for All Crypto</h1>
            <p className="text-lg md:text-2xl text-white/90 font-satoshi max-w-xl leading-snug">
              For those who get paid in crypto, contribute to a DAO, trade on DEXs, and collect or mint NFTs. The one card for all crypto natives.
            </p>
            <Link href="https://holyheld.com" target="_blank">
              <Button className="bg-yellow-500 text-black font-bold text-lg px-8 py-4 rounded-xl mt-2 hover:bg-yellow-400 transition-all duration-300 font-epilogue tracking-tight">
                Get Your Card
              </Button>
            </Link>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <Image
              src="/holyheld.png"
              alt="Holyheld Card"
              width={420}
              height={280}
              className="rounded-2xl border-2 border-yellow-500 bg-[#1c1f26]"
              priority
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="heading-lg text-yellow-400 font-boska mb-10 text-center font-bold tracking-tight uppercase">Key Features</h2>
          <Grid columns={3} className="justify-center">
            <Card className="bg-black border-yellow-500">
              <CardHeader>
                <CardTitle className="font-epilogue text-xl text-yellow-400">Instant Card</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 font-satoshi">Get your virtual card immediately while waiting for the physical card delivery.</p>
              </CardContent>
            </Card>
            <Card className="bg-black border-yellow-500">
              <CardHeader>
                <CardTitle className="font-epilogue text-xl text-yellow-400">Daily Cashback</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 font-satoshi">Earn up to 1% cashback in USDC on every purchase. Claim anytime on any supported network.</p>
              </CardContent>
            </Card>
            <Card className="bg-black border-yellow-500">
              <CardHeader>
                <CardTitle className="font-epilogue text-xl text-yellow-400">Mobile Pay</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 font-satoshi">Use your card seamlessly with Apple Pay and Google Pay for convenient payments.</p>
              </CardContent>
            </Card>
          </Grid>
        </div>
      </section>

      <Separator className="my-8 bg-yellow-500/20" />

      {/* Wallet Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading-lg text-yellow-400 font-boska mb-4 font-bold tracking-tight uppercase">Your Wallet, Your Money</h2>
          <p className="text-lg md:text-xl text-white/80 font-satoshi mb-4">
            Top up when you want, while keeping full control and custody of your crypto by using your own wallet. Create Holyheld Passkey and use your external wallet securely with biometrics.
          </p>
          <p className="text-lg md:text-xl text-white/90 font-satoshi">
            Go gasless with your transactions. That&apos;s right - you can use your external wallet and approve transactions without paying any gas.
          </p>
        </div>
      </section>

      <Separator className="my-8 bg-yellow-500/20" />

      {/* Security Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="heading-lg text-yellow-400 font-boska mb-10 text-center font-bold tracking-tight uppercase">Security First</h2>
          <Grid columns={2} className="justify-center">
            <Card className="bg-black border-yellow-500">
              <CardHeader>
                <CardTitle className="font-epilogue text-xl text-yellow-400">Audited Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 font-satoshi">Our code is thoroughly audited. Your on-chain transactions are protected up to $50,000.</p>
              </CardContent>
            </Card>
            <Card className="bg-black border-yellow-500">
              <CardHeader>
                <CardTitle className="font-epilogue text-xl text-yellow-400">Full Control</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 font-satoshi">Keep full control and custody of your crypto using your own wallet with biometric security.</p>
              </CardContent>
            </Card>
          </Grid>
        </div>
      </section>

      <Separator className="my-8 bg-yellow-500/20" />

      {/* Card Tiers Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="heading-lg text-yellow-400 font-boska mb-10 text-center font-bold tracking-tight uppercase">Card Options</h2>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-epilogue text-yellow-400">Card Type</TableHead>
                  <TableHead className="font-epilogue text-yellow-400">Cashback</TableHead>
                  <TableHead className="font-epilogue text-yellow-400">Features</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell><Badge className="bg-yellow-500 text-black font-satoshi">Classic</Badge></TableCell>
                  <TableCell>Up to 0.5%</TableCell>
                  <TableCell>Virtual + Physical card, Mobile payments</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><Badge className="bg-yellow-500 text-black font-satoshi">Limited Edition</Badge></TableCell>
                  <TableCell>Up to 0.5%</TableCell>
                  <TableCell>Exclusive design, Premium perks</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><Badge className="bg-yellow-500 text-black font-satoshi">Metal</Badge></TableCell>
                  <TableCell>Up to 1%</TableCell>
                  <TableCell>Premium metal card, Maximum benefits</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      <Separator className="my-8 bg-yellow-500/20" />

      {/* SDK Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="heading-lg text-yellow-400 font-boska mb-10 text-center font-bold tracking-tight uppercase">Onchain Works Offchain</h2>
          <div className="mx-auto max-w-3xl text-center mb-12">
            <p className="text-lg md:text-xl text-white/80 font-satoshi mb-6">
              Holyheld SDK allows your dapp, protocol, wallet, or network to natively integrate crypto cash out for your users. All while preserving your core logic for Holyheld users.
            </p>
          </div>
          <Grid columns={3} className="justify-center">
            <Card className="bg-black border-yellow-500">
              <CardHeader>
                <CardTitle className="font-epilogue text-xl text-yellow-400">Native Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 font-satoshi">Integrate SDK in 30 minutes or less if your app supports onchain wallets. All networks supported natively.</p>
              </CardContent>
            </Card>
            <Card className="bg-black border-yellow-500">
              <CardHeader>
                <CardTitle className="font-epilogue text-xl text-yellow-400">Custom Rewards</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 font-satoshi">Build custom reward programs for Holyheld users using your primitive. Reward real users for what matters.</p>
              </CardContent>
            </Card>
            <Card className="bg-black border-yellow-500">
              <CardHeader>
                <CardTitle className="font-epilogue text-xl text-yellow-400">Full Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 font-satoshi">No developers? No problem. Our team will take care of the integration while you focus on your product.</p>
              </CardContent>
            </Card>
          </Grid>
          <div className="mt-12 text-center">
            <Link href="https://holyheld.com/sdk" target="_blank">
              <Button className="bg-yellow-500 text-black font-bold text-lg px-8 py-4 rounded-xl hover:bg-yellow-400 transition-all duration-300 font-epilogue tracking-tight">
                Try Holyheld SDK
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="flex flex-col items-center justify-center py-20 px-4">
        <h2 className="font-epilogue text-4xl md:text-5xl font-bold text-yellow-400 mb-6 tracking-tight text-center">Ready to join the crypto natives?</h2>
        <Link href="https://holyheld.com" target="_blank">
          <Button className="bg-yellow-500 text-black font-bold text-xl px-10 py-5 rounded-xl mt-2 hover:bg-yellow-400 transition-all duration-300 font-epilogue tracking-tight">
            Get Your Card Now
          </Button>
        </Link>
      </section>
    </div>
  );
}
