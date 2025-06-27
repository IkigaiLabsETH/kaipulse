"use client";

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function TangemPage() {
  return (
    <div className="min-h-screen bg-black text-white font-satoshi">
      {/* Premium header accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-8">
            <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">Wearable Crypto Wallet • EAL6+ Security • NFC Enabled</p>
            <h1 className="text-center">
              <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
                Tangem Ring
              </span>
            </h1>
            <div className="flex items-center justify-center mt-6">
              <div className="h-px w-24 bg-yellow-500/30"></div>
              <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">The world&apos;s first wearable hardware wallet</p>
              <div className="h-px w-24 bg-yellow-500/30"></div>
            </div>
            
            {/* Featured Visual */}
            <div className="relative w-full mx-auto mt-12 aspect-[16/9] overflow-hidden rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <iframe
                src="https://www.youtube.com/embed/NwAqmM1AgCc"
                title="Tangem Ring"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
            </div>
          </div>

          {/* Key Points Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Key Points
            </h3>
            <div className="space-y-4 text-gray-300">
                <ul className="list-disc list-inside space-y-2 text-lg">
                  <li>The Tangem Ring is a wearable crypto wallet, priced at around €189 based on official sellers.</li>
                  <li>Availability includes sizes 6 to 13 (US), with secure features like CC EAL6+ certification.</li>
                  <li>Prices may vary by region; check official sellers for exact costs.</li>
                </ul>
            </div>
          </div>

          {/* Pricing Details Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Tangem Ring Pricing
            </h3>
            <div className="space-y-4 text-gray-300 text-lg">
              <p>
                The Tangem Ring, a stylish and secure hardware wallet for cryptocurrencies, is available for purchase with a price of approximately €189, as listed by official seller cryptoken-shop.com. This price includes two backup cards, enhancing security. Note that prices may vary by region due to taxes and shipping, so it&apos;s advisable to verify with the official website or authorized sellers for the most accurate cost in your area.
              </p>
            </div>
          </div>

          {/* Availability and Features */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
                Availability
                </h3>
                <p className="text-lg text-gray-300">
                The Tangem Ring comes in sizes 6 to 13 (US), made from durable zirconia ceramic, and is waterproof (IP68) with resistance to scratches and extreme temperatures. It is currently available for purchase and shipping worldwide.
                </p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
                Features
                </h3>
                <p className="text-lg text-gray-300">
                It supports Bitcoin, Ethereum, and over 6,000 other cryptocurrencies, offering a convenient way to manage digital assets on the go. The firmware is audited and open source.
                </p>
            </div>
          </div>
          
          {/* Detailed Information Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Detailed Overview
            </h3>
            <div className="space-y-8 text-gray-300 text-lg">

              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Company Background and Product Overview</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                  Tangem is a Swiss-based company specializing in secure cryptocurrency hardware wallets, known for its emphasis on security, simplicity, and convenience. Their product lineup includes the Tangem Wallet, available as cards or the innovative Tangem Ring. The Tangem Ring, unveiled at the 2023 Cardano Summit, is the world&apos;s first wearable hardware wallet, combining fashion with functionality. It incorporates a CC EAL6+ certified chip, the same security standard used in biometric passports, ensuring top-level protection.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Security and Recovery</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                  The Tangem Ring offers robust security features, including offline private key generation, non-extractable keys, and biometric security via the Tangem app. The firmware has been audited by Kudelski Security and Riscure with no backdoors found. Recovery options include a 3-card set or the Ring with two cards, improving access if one is lost. An optional seed phrase can be generated via TRNG, app-generated, or imported.
                  </p>
                </div>
              </div>

            </div>
          </div>
          
          {/* Summary Table */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
                Tangem Ring Key Specifications
            </h3>
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead className="border-b border-yellow-500/30">
                        <tr>
                            <th className="p-4 text-lg font-bold text-yellow-500">Category</th>
                            <th className="p-4 text-lg font-bold text-yellow-500">Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-gray-800">
                            <td className="p-4 font-semibold">Price</td>
                            <td className="p-4">€189 (official seller, includes 2 cards)</td>
                        </tr>
                        <tr className="border-b border-gray-800">
                            <td className="p-4 font-semibold">Availability</td>
                            <td className="p-4">Sizes 6-13 (US), currently in stock, shipping worldwide</td>
                        </tr>
                        <tr className="border-b border-gray-800">
                            <td className="p-4 font-semibold">Material</td>
                            <td className="p-4">Zirconia ceramic, scratch-resistant, waterproof (IP68)</td>
                        </tr>
                        <tr className="border-b border-gray-800">
                            <td className="p-4 font-semibold">Security</td>
                            <td className="p-4">CC EAL6+ certified, offline private key, non-extractable, audited firmware</td>
                        </tr>
                        <tr className="border-b border-gray-800">
                            <td className="p-4 font-semibold">Warranty</td>
                            <td className="p-4">25 years</td>
                        </tr>
                        <tr className="border-b border-gray-800">
                            <td className="p-4 font-semibold">Setup Time</td>
                            <td className="p-4">3 minutes</td>
                        </tr>
                        <tr className="border-b border-gray-800">
                            <td className="p-4 font-semibold">Supported Cryptos</td>
                            <td className="p-4">Bitcoin, Ethereum, over 6,000 others</td>
                        </tr>
                         <tr className="border-b border-gray-800">
                            <td className="p-4 font-semibold">Backup</td>
                            <td className="p-4">Comes with 2 cards, optional seed phrase</td>
                        </tr>
                        <tr>
                            <td className="p-4 font-semibold">Durability</td>
                            <td className="p-4">Resistant to dust, water, extreme temperatures, X-rays, EMP, ESD</td>
                        </tr>
                    </tbody>
                </table>
            </div>
          </div>

          <div className="text-center">
            <Link href="https://tangem.com/en/" passHref target="_blank">
                <Button variant="outline" className="text-yellow-500 border-yellow-500 hover:bg-yellow-500 hover:text-black transition-colors duration-300 text-lg px-8 py-6 rounded-none shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] hover:shadow-[2px_2px_0px_0px_rgba(234,179,8,1)]">
                    Visit Official Website
                </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
