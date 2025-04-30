import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Grid } from '@/components/ui/grid';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';

export default function StacksPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-[70vh] pt-24 pb-8 px-4">
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto w-full">
          <div className="flex-1 flex flex-col items-start gap-6">
            <Badge className="bg-yellow-500 text-black text-sm mb-2 font-satoshi tracking-wide">Bitcoin Layer 2</Badge>
            <h1 className="font-epilogue text-5xl md:text-6xl font-bold text-yellow-400 mb-2 tracking-tight">Stacks: Bitcoin Unleashed</h1>
            <p className="text-lg md:text-2xl text-white/90 font-satoshi max-w-xl leading-snug">
              Stacks is a unique Bitcoin Layer 2 that brings smart contracts and decentralized apps to Bitcoin, while preserving its security, decentralization, and immutability.
            </p>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <div className="w-full max-w-[400px] aspect-square rounded-2xl border-4 border-yellow-400 bg-[#1c1f26] overflow-hidden shadow-[0_8px_32px_0_rgba(247,181,0,0.25),0_2px_8px_0_rgba(0,0,0,0.45)] flex items-center justify-center">
              <Image src="/stacks.png" alt="Stacks Logo" width={220} height={220} className="rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      <Separator className="my-8 bg-yellow-500/20" />

      {/* Stacks Features Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="heading-lg text-yellow-400 font-boska mb-4 font-bold tracking-tight uppercase">Key Features</h2>
          <p className="text-lg md:text-xl text-white/80 font-satoshi mb-4">
            Stacks takes a layered approach: Bitcoin remains the simple, secure settlement layer, while Stacks adds scalability and new functionality on top. This separation of concerns allows for innovation without compromising Bitcoin&apos;s core properties.
          </p>
        </div>
        <Grid columns={4} className="justify-center mt-12 gap-6">
          <Card className="bg-black border-yellow-500">
            <CardHeader>
              <CardTitle className="font-epilogue text-xl text-yellow-400">Bitcoin Connection</CardTitle>
              <CardDescription className="text-white/70">Secured by Bitcoin</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-white/80 font-satoshi">
                Stacks settles its transactions on Bitcoin, leveraging Bitcoin&apos;s security as the foundational layer. All Stacks blocks are ultimately anchored to the Bitcoin blockchain.
              </p>
              <Badge variant="secondary" className="mt-4">Decentralized</Badge>
            </CardContent>
          </Card>
          <Card className="bg-black border-yellow-500">
            <CardHeader>
              <CardTitle className="font-epilogue text-xl text-yellow-400">Smart Contracts</CardTitle>
              <CardDescription className="text-white/70">Clarity Language</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-white/80 font-satoshi">
                Stacks enables expressive smart contracts and dApps using the Clarity language, making Bitcoin programmable without modifying its base layer.
              </p>
              <Badge variant="secondary" className="mt-4">Programmable</Badge>
            </CardContent>
          </Card>
          <Card className="bg-black border-yellow-500">
            <CardHeader>
              <CardTitle className="font-epilogue text-xl text-yellow-400">Unique Token Model</CardTitle>
              <CardDescription className="text-white/70">STX & sBTC</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-white/80 font-satoshi">
                Stacks uses its own token (STX) to incentivize honest block production and a separate Bitcoin-pegged asset (sBTC) for DeFi and other use cases. <span className="font-bold text-yellow-400">sBTC is now fully redeemable for native BTC via a trust-minimized protocol, with withdrawals live as of April 30, 2025.</span>
              </p>
              <Badge variant="secondary" className="mt-4">Incentivized</Badge>
            </CardContent>
          </Card>
          <Card className="bg-black border-yellow-500">
            <CardHeader>
              <CardTitle className="font-epilogue text-xl text-yellow-400">sBTC Withdrawals</CardTitle>
              <CardDescription className="text-white/70">BTC Redemption Now Live</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-white/80 font-satoshi">
                sBTC holders can now withdraw native BTC in a trust-minimized way. Withdrawals are processed by the sBTC protocol, requiring 70% signer approval, and are subject to a temporary 150 BTC/day cap. Withdrawals take ~1 hour (6 Bitcoin blocks) and require only the Bitcoin network fee.
              </p>
              <Badge variant="secondary" className="mt-4">Live April 2025</Badge>
            </CardContent>
          </Card>
        </Grid>
      </section>

      <Separator className="my-8 bg-yellow-500/20" />

      {/* sBTC Withdrawals Process Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="mx-auto max-w-2xl bg-[#181818] rounded-lg p-8 border border-yellow-500 shadow-lg">
          <h3 className="text-2xl font-bold text-yellow-400 mb-4 font-boska uppercase tracking-wide">sBTC Withdrawals: How It Works</h3>
          <ol className="list-decimal list-inside text-white/90 mb-4 text-left font-satoshi space-y-1">
            <li><b>Initiate withdrawal:</b> Specify the amount of sBTC to redeem and provide your Bitcoin address.</li>
            <li><b>sBTC locked on Stacks:</b> The request is recorded and sBTC is locked on-chain.</li>
            <li><b>Signer approval:</b> At least 70% of the sBTC signer set must approve the request.</li>
            <li><b>BTC released:</b> The signers broadcast a Bitcoin transaction to your address.</li>
            <li><b>sBTC burned:</b> The withdrawn sBTC is burned on Stacks.</li>
          </ol>
          <ul className="text-yellow-300 text-sm mb-2 text-left font-satoshi space-y-1">
            <li>• <b>Withdrawal cap:</b> 150 BTC/day (temporary, for security)</li>
            <li>• <b>Time:</b> ~1 hour (6 Bitcoin blocks)</li>
            <li>• <b>Fees:</b> Only the Bitcoin network fee</li>
            <li>• <b>Minimum:</b> Above dust (546 sats)</li>
            <li>• <b>Failed withdrawal:</b> sBTC is returned to user</li>
          </ul>
          <div className="text-xs text-gray-500 mt-2">
            Source: <a href="https://bitcoinl2labs.com/sbtc-withdrawals-live" className="underline hover:text-yellow-500" target="_blank" rel="noopener noreferrer">Bitcoin L2 Labs Announcement</a>
          </div>
        </div>
      </section>

      <Separator className="my-8 bg-yellow-500/20" />

      {/* Learn More Section */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-4 font-boska uppercase tracking-wide">Learn More</h2>
          <Button asChild size="lg" className="bg-yellow-500 text-black font-bold mt-4 hover:bg-yellow-400 px-8 py-4 rounded-xl transition-all duration-300" variant="default">
            <a href="https://docs.stacks.co/concepts/stacks-101/what-is-stacks" target="_blank" rel="noopener noreferrer">
              Stacks Documentation
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
