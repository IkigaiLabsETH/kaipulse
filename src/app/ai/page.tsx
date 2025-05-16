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
  return <AIContent />
} 