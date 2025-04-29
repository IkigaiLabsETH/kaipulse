"use client";


import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Grid } from '@/components/ui/grid';
import { Input } from "@/components/ui/input";
import { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { ConnectButton, useActiveAccount, useDisconnect, useActiveWallet } from "thirdweb/react";
import { client } from "@/lib/thirdwebClient";
import { createWallet } from "thirdweb/wallets";

export default function HolyheldPage() {
  const [amount, setAmount] = useState('');
  const [tag, setTag] = useState('');
  const [walletAddress, setWalletAddress] = useState('');
  const [tokenAddress, setTokenAddress] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const account = useActiveAccount();
  useEffect(() => {
    if (account?.address) setWalletAddress(account.address);
  }, [account]);

  // Validation helpers
  function isValidEthAddress(address: string) {
    return /^0x[a-fA-F0-9]{40}$/.test(address);
  }
  function isValidAmount(value: string) {
    return /^\d+(\.\d+)?$/.test(value) && parseFloat(value) > 0;
  }
  const isFormValid = isValidEthAddress(walletAddress) && isValidEthAddress(tokenAddress) && isValidAmount(amount);

  const handleOnRamp = async () => {
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const response = await fetch('/api/onramp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          walletAddress,
          tokenAddress,
          fiatAmount: amount,
        }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Onramp failed');
      setResult('Onramp successful!');
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setLoading(false);
    }
  };

  const handleOffRamp = async () => {
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const response = await fetch('/api/offramp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          walletAddress,
          tokenAddress,
          tokenAmount: amount,
          tag,
        }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Offramp failed');
      setResult('Offramp successful!');
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
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
            <Card className="bg-black border-yellow-500 w-full max-w-lg min-w-[90vw] sm:min-w-0 sm:max-w-lg">
              <CardHeader>
                <CardTitle className="font-epilogue text-2xl sm:text-3xl text-yellow-400 text-center mb-4">On/Off Ramp</CardTitle>
              </CardHeader>
              <CardContent className="p-6 sm:p-8">
                <div className="mb-4 flex justify-center">
                  {(() => {
                    const disconnect = useDisconnect();
                    const account = useActiveAccount();
                    const wallet = useActiveWallet();
                    if (!account) {
                      return (
                        <ConnectButton client={client} />
                      );
                    } else {
                      return (
                        <div className="flex flex-col items-center gap-2 w-full">
                          <div className="text-yellow-400 font-mono text-sm break-all">
                            {account.address.slice(0, 6)}...{account.address.slice(-4)}
                          </div>
                          <Button
                            onClick={() => wallet && disconnect.disconnect(wallet)}
                            className="bg-black border border-yellow-500 text-yellow-400 font-bold text-sm px-6 py-2 rounded-lg hover:bg-yellow-500 hover:text-black transition-all duration-300 font-epilogue tracking-tight"
                          >
                            Disconnect
                          </Button>
                        </div>
                      );
                    }
                  })()}
                </div>
                <form className="space-y-4" onSubmit={e => e.preventDefault()}>
                  <Input
                    type="text"
                    value={walletAddress}
                    onChange={e => setWalletAddress(e.target.value)}
                    placeholder="Wallet Address"
                    className="w-full bg-black/60 border-yellow-500 focus:ring-yellow-400"
                    aria-label="Wallet Address"
                  />
                  {!isValidEthAddress(walletAddress) && walletAddress && (
                    <div className="text-red-400 text-xs">Invalid wallet address</div>
                  )}
                  <Input
                    type="text"
                    value={tokenAddress}
                    onChange={e => setTokenAddress(e.target.value)}
                    placeholder="Token Address"
                    className="w-full bg-black/60 border-yellow-500 focus:ring-yellow-400"
                    aria-label="Token Address"
                  />
                  {!isValidEthAddress(tokenAddress) && tokenAddress && (
                    <div className="text-red-400 text-xs">Invalid token address</div>
                  )}
                  <Input
                    type="text"
                    value={amount}
                    onChange={e => setAmount(e.target.value)}
                    placeholder="Amount (EUR for onramp, token for offramp)"
                    className="w-full bg-black/60 border-yellow-500 focus:ring-yellow-400"
                    aria-label="Amount"
                  />
                  {!isValidAmount(amount) && amount && (
                    <div className="text-red-400 text-xs">Enter a valid amount</div>
                  )}
                  <Input
                    type="text"
                    value={tag}
                    onChange={e => setTag(e.target.value)}
                    placeholder="Tag (for offramp)"
                    className="w-full bg-black/60 border-yellow-500 focus:ring-yellow-400"
                    aria-label="Tag"
                  />
                  <div className="flex gap-4 mt-2">
                    <Button type="button" onClick={handleOnRamp} disabled={loading || !isFormValid} className="w-1/2 bg-yellow-500 text-black font-bold rounded-lg shadow-md hover:bg-yellow-400 transition-all">
                      {loading ? 'Processing...' : 'Onramp'}
                    </Button>
                    <Button type="button" onClick={handleOffRamp} disabled={loading || !isFormValid} className="w-1/2 bg-yellow-500 text-black font-bold rounded-lg shadow-md hover:bg-yellow-400 transition-all">
                      {loading ? 'Processing...' : 'Offramp'}
                    </Button>
                  </div>
                  {result && <div className="text-green-400 text-sm mt-2 text-center">{result}</div>}
                  {error && <div className="text-red-400 text-sm mt-2 text-center">{error}</div>}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-20 px-4">
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
