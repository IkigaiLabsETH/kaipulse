'use client'

import { motion } from 'framer-motion';
import { Card } from "@/components/ui/card";

const products = [
  {
    name: "BITB",
    description: "Bitwise Bitcoin ETF",
    link: "https://bitbetf.com/"
  },
  {
    name: "IMST",
    description: "Bitwise MSTR Option Income Strategy ETF",
    link: "https://imstetf.com/"
  },
  {
    name: "OWNB",
    description: "Bitwise Bitcoin Standard Corporations ETF",
    link: "https://ownbetf.com/"
  }
];

export default function BitwisePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="font-epilogue text-4xl font-bold tracking-tight sm:text-6xl text-yellow-500">
            Bitwise Investment Funds
          </h1>
        </motion.div>

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-12 flex justify-center"
        >
          <video 
            controls 
            autoPlay 
            muted 
            className="w-full max-w-[1200px] rounded-xl border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]"
          >
            <source src="/bitwise.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>

        {/* Featured Products */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-bold text-yellow-500 mb-8 font-epilogue">Featured Products</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              >
                <Card>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-yellow-500 font-epilogue mb-4">
                      {product.name}
                    </h3>
                    <p className="text-white/80 mb-6 font-satoshi">
                      {product.description}
                    </p>
                    <a
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block rounded-lg bg-[#1c1f26] border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] px-4 py-2 text-sm font-semibold text-white hover:bg-yellow-500 hover:text-black transition-all duration-300"
                    >
                      Learn More →
                    </a>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Important Disclosures */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16"
        >
          <Card>
            <div className="p-8">
              <h2 className="text-2xl font-bold text-yellow-500 mb-6 font-epilogue">
                Important Disclosures
              </h2>
              <div className="space-y-4 text-white/80 font-satoshi">
                <p className="italic">
                  OWNB, BTOP, BITC, BITQ, AETH, and BWEB do not invest directly in crypto assets, including bitcoin and ether.
                </p>
                <p className="italic">
                  BITB and ETHW are exchange-traded products that are not registered under the Investment Company Act of 1940 (the &quot;1940 Act&quot;) and therefore are not subject to the same regulations as mutual funds or ETFs registered under the 1940 Act. BITB and ETHW are not suitable for all investors. An investment in BITB or ETHW is subject to a high degree of risk, has the potential for significant volatility, and could result in significant or complete loss of investment. An investment in either Fund is not a direct investment in bitcoin or ether.
                </p>
                <p>
                  Past performance does not predict future results. Investment involves risk. The value of investments may go down as well as up and investors may not get back the full amount invested.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
} 