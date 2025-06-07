import { Metadata } from "next"
import AIContent from "./content"

export const metadata: Metadata = {
  title: "The New Startup Playbook | LiveTheLifeTV",
  description: "The Startup Playbook Has Been Rewritten—Forever. A deep dive into how AI, agents, and culture are reshaping the startup landscape. For educational purposes only - not financial advice.",
  keywords: [
    "AI",
    "Startup",
    "Technology",
    "Innovation",
    "Digital Transformation",
    "Future of Work",
    "Business Strategy",
    "Tech Trends"
  ],
  openGraph: {
    title: "The New Startup Playbook | LiveTheLifeTV",
    description: "The Startup Playbook Has Been Rewritten—Forever. A deep dive into how AI, agents, and culture are reshaping the startup landscape. For educational purposes only - not financial advice.",
    type: "article",
    locale: "en_US",
    siteName: "LiveTheLifeTV",
    images: [
      {
        url: "https://livethelife.tv/og/ai-startup.png",
        width: 1200,
        height: 630,
        alt: "The New Startup Playbook - AI and Future of Business"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "The New Startup Playbook | LiveTheLifeTV",
    description: "The Startup Playbook Has Been Rewritten—Forever. A deep dive into how AI, agents, and culture are reshaping the startup landscape. For educational purposes only - not financial advice.",
    images: ["https://livethelife.tv/og/ai-startup.png"],
    creator: "@LiveTheLifeTV"
  },
  alternates: {
    canonical: "https://livethelife.tv/ai"
  }
};

export default function AIPage() {
  return (
    <div className="min-h-screen bg-black text-white font-satoshi">
      {/* Premium header accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-8">
            <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">AI • Agents • Culture</p>
            <h1 className="text-center">
              <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
                The New Startup Playbook
              </span>
            </h1>
            <div className="flex items-center justify-center mt-6">
              <div className="h-px w-24 bg-yellow-500/30"></div>
              <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">Building the Future with AI and Culture</p>
              <div className="h-px w-24 bg-yellow-500/30"></div>
            </div>
          </div>

          {/* Main Content */}
          <AIContent />
        </div>
      </div>
    </div>
  )
} 