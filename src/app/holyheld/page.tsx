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
import HolyheldSDK from '@holyheld/sdk';
import { useEffect, useState, useMemo } from 'react';
import { useToast } from "@/components/ui/use-toast";

// Define the SDK types
interface HolyheldSDKConfig {
  apiKey: string;
}

interface OnRampSDK {
  (): Promise<void>;
}

interface HolyheldSDKInstance {
  init: () => Promise<void>;
  getServerSettings: () => Promise<{
    external: {
      isTopupEnabled: boolean;
      isOnRampEnabled: boolean;
      maxTopUpAmountInEUR: string;
      minTopUpAmountInEUR: string;
      maxOnRampAmountInEUR: string;
      minOnRampAmountInEUR: string;
      fee_percent_topup?: string;
      fee_percent_onramp?: string;
      topUpFeePercent?: string;
      onRampFeePercent?: string;
    };
  }>;
  onRamp: OnRampSDK;
}

interface ServerExternalSettings {
  external: {
    isTopupEnabled: boolean;
    isOnRampEnabled: boolean;
    maxTopUpAmountInEUR: string;
    minTopUpAmountInEUR: string;
    maxOnRampAmountInEUR: string;
    minOnRampAmountInEUR: string;
    topUpFeePercent: string;
    onRampFeePercent: string;
  };
}

// Initialize HolyheldSDK
const initializeSDK = async (onError: (message: string) => void): Promise<HolyheldSDKInstance | null> => {
  const apiKey = process.env.NEXT_PUBLIC_HOLYHELD_SDK_API_KEY;
  
  if (!apiKey) {
    onError('Holyheld SDK API key is not configured');
    return null;
  }

  try {
    const holyheldSDK = new HolyheldSDK({
      apiKey,
    } as HolyheldSDKConfig);
    await holyheldSDK.init();
    return holyheldSDK as unknown as HolyheldSDKInstance;
  } catch (error) {
    onError(`Failed to initialize HolyheldSDK: ${error instanceof Error ? error.message : 'Unknown error'}`);
    return null;
  }
};

export default function HolyheldPage() {
  const { toast } = useToast();
  const [sdk, setSdk] = useState<HolyheldSDKInstance | null>(null);
  const [serverSettings, setServerSettings] = useState<ServerExternalSettings>({
    external: {
      isTopupEnabled: true,
      isOnRampEnabled: true,
      maxTopUpAmountInEUR: "1000000",
      minTopUpAmountInEUR: "0",
      maxOnRampAmountInEUR: "1000000",
      minOnRampAmountInEUR: "0",
      topUpFeePercent: "1.5",
      onRampFeePercent: "1.5"
    }
  });
  const [isInitializing, setIsInitializing] = useState(true);
  const [amount, setAmount] = useState<string>("");

  useEffect(() => {
    const init = async () => {
      const sdkInstance = await initializeSDK((errorMessage) => {
        toast({
          variant: "destructive",
          title: "Error",
          description: errorMessage,
        });
      });

      if (sdkInstance) {
        setSdk(sdkInstance);
        try {
          const settings = await sdkInstance.getServerSettings();
          const topUpFeePercent = settings.external.fee_percent_topup || 
                                settings.external.topUpFeePercent || 
                                "1.5";
          const onRampFeePercent = settings.external.fee_percent_onramp || 
                                 settings.external.onRampFeePercent || 
                                 "1.5";
          
          const transformedSettings: ServerExternalSettings = {
            external: {
              isTopupEnabled: settings.external.isTopupEnabled,
              isOnRampEnabled: settings.external.isOnRampEnabled,
              maxTopUpAmountInEUR: settings.external.maxTopUpAmountInEUR,
              minTopUpAmountInEUR: settings.external.minTopUpAmountInEUR,
              maxOnRampAmountInEUR: settings.external.maxOnRampAmountInEUR,
              minOnRampAmountInEUR: settings.external.minOnRampAmountInEUR,
              topUpFeePercent,
              onRampFeePercent
            }
          };
          setServerSettings(transformedSettings);
        } catch (err) {
          toast({
            variant: "destructive",
            title: "Error",
            description: err instanceof Error ? err.message : "Failed to fetch server settings",
          });
        }
      }
      setIsInitializing(false);
    };

    init();
  }, [toast]);

  const _handleOnRamp = async () => {
    try {
      if (!sdk) return;
      await sdk.onRamp();
    } catch (err: unknown) {
      toast({
        title: "Error",
        description: err instanceof Error ? err.message : "Unknown error occurred",
        variant: "destructive",
      });
    }
  };

  const _estimatedResult = useMemo(() => {
    if (!serverSettings) return null;
    return {
      minAmount: serverSettings.external.minTopUpAmountInEUR,
      maxAmount: serverSettings.external.maxTopUpAmountInEUR,
      fee: serverSettings.external.topUpFeePercent,
    };
  }, [serverSettings]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !serverSettings.external.isTopupEnabled ||
      parseFloat(amount) < parseFloat(serverSettings.external.minTopUpAmountInEUR) ||
      parseFloat(amount) > parseFloat(serverSettings.external.maxTopUpAmountInEUR)
    ) {
      return;
    }
    // Process the transaction
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      {isInitializing ? (
        <div className="flex items-center justify-center min-h-[70vh]">
          <p className="text-lg text-white/70">Initializing...</p>
        </div>
      ) : (
        <>
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
            {/* Top-up Form Section */}
            <div className="mx-auto max-w-xl mb-16">
              <Card className="bg-black border-yellow-500">
                <CardHeader>
                  <CardTitle className="font-epilogue text-2xl text-yellow-400">Top Up Your Card</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="amount" className="text-sm font-medium text-white/90">
                        Amount (EUR)
                      </label>
                      <input
                        type="number"
                        id="amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        min={serverSettings.external.minTopUpAmountInEUR}
                        max={serverSettings.external.maxTopUpAmountInEUR}
                        step="0.01"
                        className="w-full px-3 py-2 bg-black border border-yellow-500 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        placeholder="Enter amount"
                      />
                      <p className="text-sm text-white/60">
                        Fee: {serverSettings.external.topUpFeePercent}%
                      </p>
                      {parseFloat(amount) > 0 && (
                        <p className="text-sm text-white/60">
                          Total with fee: €{(parseFloat(amount) * (1 + parseFloat(serverSettings.external.topUpFeePercent) / 100)).toFixed(2)}
                        </p>
                      )}
                    </div>
                    <Button 
                      type="submit"
                      disabled={!serverSettings.external.isTopupEnabled || 
                        !amount ||
                        parseFloat(amount) < parseFloat(serverSettings.external.minTopUpAmountInEUR) ||
                        parseFloat(amount) > parseFloat(serverSettings.external.maxTopUpAmountInEUR)}
                      className="w-full bg-yellow-500 text-black font-bold py-2 rounded-lg hover:bg-yellow-400 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Top Up Card
                    </Button>
                    {!serverSettings.external.isTopupEnabled && (
                      <p className="text-sm text-red-400">Top-up is currently disabled</p>
                    )}
                  </form>
                </CardContent>
              </Card>
            </div>

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
        </>
      )}
    </div>
  );
}
