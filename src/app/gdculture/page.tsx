'use client';

import { motion } from 'framer-motion';

const companyStats = [
  {
    title: "Market Cap",
    value: "$28M",
    description: "Current market capitalization"
  },
  {
    title: "Stockholders Equity",
    value: "$2,643",
    description: "Below Nasdaq minimum requirement"
  },
  {
    title: "2024 Net Loss",
    value: "$14M",
    description: "Reported net losses"
  }
]

const businessSegments = [
  {
    name: "Crypto Treasury Strategy",
    description: "Dual approach with Bitcoin and Trump Coin",
    details: [
      "Planned $300M stock offering for crypto acquisition",
      "Bitcoin as primary treasury asset",
      "Trump Coin ($TRUMP) as secondary position",
      "Strategic partnership with BVI investor",
      "Following MicroStrategy and Metaplanet model",
      "Focus on long-term shareholder value"
    ]
  },
  {
    name: "Financial Challenges",
    description: "Current corporate situation",
    details: [
      "Nasdaq delisting warning issued",
      "Below $2.5M stockholders' equity requirement",
      "Compliance plan due by May 4",
      "180-day grace period potential",
      "Trading under ticker GDC",
      "Working to regain compliance"
    ]
  }
]

const riskFactors = [
  {
    title: "Financial Risks",
    items: [
      "Significant shareholder dilution from $300M offering",
      "Current negative equity position",
      "High volatility of Trump Coin holdings",
      "Market cap of only $28M",
      "Recent $14M net losses"
    ]
  },
  {
    title: "Strategic Risks",
    items: [
      "Dual crypto strategy complexity",
      "Trump Coin's political volatility",
      "Nasdaq compliance challenges",
      "Limited financial resources",
      "Market timing considerations"
    ]
  },
  {
    title: "Opportunities",
    items: [
      "Following successful Bitcoin treasury models",
      "Strategic BVI investor partnership",
      "Potential market upside in bull cycles",
      "Early mover in dual crypto strategy",
      "Long-term decentralization vision"
    ]
  }
]

export default function GDCulturePage() {
  return (
    <div className="min-h-screen bg-black text-white font-satoshi">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-yellow-400">
              GD Culture Group Limited
            </h1>
            <div className="max-w-3xl mx-auto space-y-4">
              <p className="text-xl md:text-2xl">
                Bold Crypto Treasury Strategy Amid Financial Challenges
              </p>
              <p className="text-xl md:text-2xl">
                $300M Stock Offering for Bitcoin and Trump Coin Acquisition
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#1c1f26] p-8 rounded-xl border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">₿</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-400">
                  $300M
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                Planned Stock Offering
              </p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-xl border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">⚠️</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-400">
                  Nasdaq Warning
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                Below Equity Requirements
              </p>
            </div>
          </div>

          {/* Business Segments */}
          <div className="grid md:grid-cols-2 gap-8">
            {businessSegments.map((segment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-[#1c1f26] p-8 rounded-xl border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]"
              >
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">{segment.name}</h3>
                <p className="text-white/90 mb-6">{segment.description}</p>
                <ul className="space-y-3">
                  {segment.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-yellow-400">•</span>
                      <span className="text-white/80">{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Risk Factors */}
          <div className="grid md:grid-cols-3 gap-6">
            {riskFactors.map((factor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#1c1f26] p-6 rounded-xl border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]"
              >
                <h4 className="text-xl font-bold text-yellow-400 mb-4">{factor.title}</h4>
                <ul className="space-y-2">
                  {factor.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-yellow-400">•</span>
                      <span className="text-white/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Company Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {companyStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#1c1f26] p-6 rounded-xl border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]"
              >
                <h4 className="text-lg font-medium text-yellow-400">{stat.title}</h4>
                <p className="text-3xl font-bold mt-2">{stat.value}</p>
                <p className="text-white/70 mt-1">{stat.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Leadership Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#1c1f26] p-8 rounded-xl border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]"
          >
            <blockquote className="text-xl text-white/90 italic">
              &ldquo;This strategy reflects both current industry trends and our company&apos;s unique strengths in the crypto space.&rdquo;
            </blockquote>
            <p className="text-yellow-400 mt-4">- Xiaojian Wang, Chairman and CEO</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
