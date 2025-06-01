'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export default function BitaxePage() {
  const [open, setOpen] = useState<number | null>(null);
  const faqs = [
    {
      q: "What is Bitaxe and why is it important?",
      a: (
        <span>
          Bitaxe is a fully open-source Bitcoin miner design that empowers individuals to mine Bitcoin at home. It represents a grassroots movement against mining centralization, allowing anyone to participate in Bitcoin&apos;s security without relying on corporate mining farms.
        </span>
      ),
    },
    {
      q: "How does Bitaxe compare to industrial miners?",
      a: (
        <span>
          While industrial miners like Bitmain&apos;s Antminer S21+ achieve 216 TH/s, Bitaxe units achieve roughly 1-1.2 TH/s at ~15 J/TH. The key difference is that Bitaxe is:
          <br /><br />
          • Fully open-source and transparent
          <br />
          • Designed for home use (quiet, low-power)
          <br />
          • Community-driven and accessible
          <br />
          • Built for self-sovereignty
        </span>
      ),
    },
    {
      q: "What is the current state of Bitcoin mining centralization?",
      a: (
        <span>
          Bitcoin mining is highly centralized today:
          <br /><br />
          • Six pools mine more than 95% of blocks
          <br />
          • Two companies (Bitmain and MicroBT) control 90% of ASIC market
          <br />
          • Industrial farms dominate network hashrate
          <br />
          • Home mining has become increasingly difficult
        </span>
      ),
    },
    {
      q: "How can I get started with Bitaxe mining?",
      a: (
        <span>
          Getting started is straightforward:
          <br /><br />
          • Purchase a Bitaxe Gamma kit or assembled rig
          <br />
          • Connect to your own Bitcoin node
          <br />
          • Run open-source AxeOS software
          <br />
          • Start mining to your own address
          <br /><br />
          No pool required - true solo mining!
        </span>
      ),
    },
    {
      q: "What is the future of home Bitcoin mining?",
      a: (
        <span>
          The future looks promising:
          <br /><br />
          • New open-source ASIC designs emerging
          <br />
          • Integration with home heating systems
          <br />
          • Growing community of DIY miners
          <br />
          • More accessible hardware options
          <br />
          • Increasing decentralization
        </span>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-satoshi">
      {/* Premium header accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-8">
            <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">Solo Mining • Open Source • Self-Sovereignty</p>
            <h1 className="text-center">
              <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
                Bitaxe
              </span>
            </h1>
            <div className="flex items-center justify-center mt-6">
              <div className="h-px w-24 bg-yellow-500/30"></div>
              <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">Reclaiming Bitcoin&apos;s Decentralized Soul</p>
              <div className="h-px w-24 bg-yellow-500/30"></div>
            </div>
            
            {/* Featured Visual */}
            <div className="relative w-full mx-auto mt-12 aspect-[16/9] overflow-hidden rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <Image
                src="/bitaxe.jpeg"
                alt="Bitaxe Bitcoin Mining Revolution"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
          </div>

          {/* Mining Context Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              The Mining Centralization Challenge
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                Bitcoin&apos;s original promise of decentralization faces its greatest challenge in mining centralization. Today, a handful of corporations control the network&apos;s security, with six pools mining over 95% of blocks. This concentration threatens Bitcoin&apos;s core ethos of trust minimization and self-sovereignty.
              </p>
              <div className="mt-6">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">The Current State:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>Industrial mining farms dominate hashrate</li>
                  <li>Two companies control 90% of ASIC market</li>
                  <li>Home mining nearly extinct</li>
                  <li>Corporate interests influence network security</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bitaxe Solution Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              The Bitaxe Revolution
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                Enter Bitaxe - a grassroots movement to reclaim Bitcoin mining for the people. This open-source project enables anyone to mine Bitcoin at home, using repurposed ASIC chips and community-developed hardware.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mt-6">
                <div>
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Bitaxe Advantages</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Fully open-source design</li>
                    <li>Quiet, low-power operation</li>
                    <li>Home-friendly form factor</li>
                    <li>Community-driven development</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Technical Specs</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>1-1.2 TH/s hashrate</li>
                    <li>~15 J/TH efficiency</li>
                    <li>Wi-Fi controller included</li>
                    <li>Open-source AxeOS software</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Innovation Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Mining Innovation
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                The Bitaxe movement is driving innovation in home mining:
              </p>
              <div className="mt-6">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Key Innovations:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>Heat recycling for home heating</li>
                  <li>Open-source ASIC designs</li>
                  <li>Community mining pools</li>
                  <li>DIY mining communities</li>
                  <li>Educational resources</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">🔧</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Open Source
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                Community-Driven Hardware
              </p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">🏠</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Home Mining
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                Decentralized Security
              </p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">🌱</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Innovation
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                Future of Mining
              </p>
            </div>
          </div>

          {/* Future Vision Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              The Future of Bitcoin Mining
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                The Bitaxe movement represents more than just hardware - it&apos;s a vision for Bitcoin&apos;s future. By empowering individuals to mine at home, we can:
              </p>
              <div className="mt-6">
                <ul className="list-disc list-inside space-y-2">
                  <li>Strengthen network decentralization</li>
                  <li>Reduce corporate influence</li>
                  <li>Create new mining innovations</li>
                  <li>Build stronger communities</li>
                  <li>Preserve Bitcoin&apos;s original vision</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Miner Comparison Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Premium Home Miners
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {/* NerdQaxe+ Hydro */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">NerdQaxe+ Hydro</h4>
                <div className="space-y-2">
                  <p className="text-lg font-semibold">Hydro-Cooled Miner</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>2.5 TH/s hashrate</li>
                    <li>60W power consumption</li>
                    <li>~20 J/TH efficiency</li>
                    <li>Hydro-cooled system</li>
                    <li>Customizable RGB lighting</li>
                    <li>USB-C & built-in Wi-Fi</li>
                  </ul>
                  <a 
                    href="https://www.solosatoshi.com/product/nerdqaxe-hydro/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block mt-4 px-6 py-3 bg-yellow-500 text-black font-bold hover:bg-yellow-400 transition-colors"
                  >
                    View NerdQaxe+ Hydro
                  </a>
                </div>
              </div>

              {/* Bitaxe Touch */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Bitaxe Touch</h4>
                <div className="space-y-2">
                  <p className="text-lg font-semibold">Touchscreen Desktop Miner</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>1 TH/s hashrate</li>
                    <li>18W power consumption</li>
                    <li>~15 J/TH efficiency</li>
                    <li>touchscreen display</li>
                    <li>Real-time BTC stats</li>
                    <li>Digital clock feature</li>
                  </ul>
                  <a 
                    href="https://www.solosatoshi.com/product/bitaxe-touch/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block mt-4 px-6 py-3 bg-yellow-500 text-black font-bold hover:bg-yellow-400 transition-colors"
                  >
                    View Bitaxe Touch
                  </a>
                </div>
              </div>

              {/* NerdQaxe++ */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">NerdQaxe++</h4>
                <div className="space-y-2">
                  <p className="text-lg font-semibold">Ultimate Performance Miner</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>4.8 TH/s hashrate</li>
                    <li>76W power consumption</li>
                    <li>~15.8 J/TH efficiency</li>
                    <li>LILYGO T-Display S3</li>
                    <li>Advanced cooling system</li>
                    <li>ESP32-S3 Wi-Fi Module</li>
                  </ul>
                  <a 
                    href="https://www.solosatoshi.com/product/nerdqaxe-plus-plus/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block mt-4 px-6 py-3 bg-yellow-500 text-black font-bold hover:bg-yellow-400 transition-colors"
                  >
                    View NerdQaxe++
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-black/30 rounded-none border border-yellow-500/20">
              <h4 className="text-xl font-bold text-yellow-500 mb-4">Which One Should You Choose?</h4>
              <div className="space-y-4 text-gray-300">
                <p className="text-lg">
                  The NerdQaxe++ is our flagship miner, offering the highest performance at 4.8 TH/s with whisper-quiet operation. Perfect for serious miners who want maximum hashrate while maintaining home-friendly noise levels.
                </p>
                <p className="text-lg">
                  The NerdQaxe+ Hydro combines advanced hydro-cooling with solid performance (2.5 TH/s), making it ideal for those who want premium cooling technology and RGB customization.
                </p>
                <p className="text-lg">
                  The Bitaxe Touch offers the most user-friendly experience with its touchscreen interface and lowest power consumption. It&apos;s perfect for beginners or those who want to display mining stats while serving as a functional desk accessory.
                </p>
                <p className="text-lg">
                  All three miners are part of the open-source movement, allowing you to contribute to Bitcoin&apos;s decentralization while mining from home.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#1c1f26] rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]"
              >
                <button
                  className="w-full px-8 py-6 text-left flex justify-between items-center"
                  onClick={() => setOpen(open === index ? null : index)}
                >
                  <span className="text-xl font-bold text-yellow-500">{faq.q}</span>
                  <ChevronDown
                    className={cn(
                      "h-6 w-6 text-yellow-500 transition-transform duration-200",
                      open === index ? "transform rotate-180" : ""
                    )}
                  />
                </button>
                {open === index && (
                  <div className="px-8 pb-6 text-gray-300">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
