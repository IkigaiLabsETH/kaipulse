import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Analytics } from '@vercel/analytics/react';
import { cn } from "@/lib/utils";
import { PipelineErrorHandler } from "@/components/PipelineErrorHandler";
import { Toaster } from "@/components/ui/toaster";
import { ThirdwebWrapper } from "@/components/ThirdwebWrapper";
import { satoshi, epilogue, boska } from "@/lib/fonts";
import JsonLd from "@/components/common/JsonLd";

export const metadata: Metadata = {
  metadataBase: new URL('https://livethelife.tv'),
  title: "LiveTheLifeTV - Bitcoin Sells Freedom. Your Fiat Escape Hatch.",
  description: "Tesla doesn't sell cars. They sell the future. Red Bull doesn't sell energy. They sell thrill. Bitcoin doesn't sell ₿ coin. It sells freedom. LiveTheLifeTV is your multimedia platform blending Bitcoin-first investing, NFT art curation, and crypto-informed lifestyle content—your gateway to financial freedom.",
  authors: [{ name: "LiveTheLifeTV" }],
  robots: "index, follow",
  other: {
    'ai-content-crawlable': 'true',
    'ai-content-license': 'public-educational',
  },
  openGraph: {
    title: "LiveTheLifeTV - Bitcoin Sells Freedom",
    description: "Tesla doesn't sell cars. They sell the future. Red Bull doesn't sell energy. They sell thrill. Bitcoin doesn't sell ₿ coin. It sells freedom. Your multimedia platform for Bitcoin-first investing, NFT curation, and financial freedom.",
    type: "website",
    locale: "en_US",
    siteName: "LiveTheLifeTV",
    images: [
      {
        url: "https://livethelife.tv/background_helo.jpeg",
        width: 1200,
        height: 630,
        alt: "LiveTheLifeTV - Bitcoin Strategy, NFT Curation & Creative Lifestyle Platform"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "LiveTheLifeTV - Bitcoin Sells Freedom",
    description: "Tesla doesn't sell cars. They sell the future. Red Bull doesn't sell energy. They sell thrill. Bitcoin doesn't sell ₿ coin. It sells freedom. Your multimedia platform for Bitcoin-first investing, NFT curation, and financial freedom.",
    images: ["https://livethelife.tv/background_helo.jpeg"],
    creator: "@LiveTheLifeTV"
  },
  verification: {
    google: "your-google-site-verification",
    yandex: "your-yandex-verification",
    yahoo: "your-yahoo-verification"
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/favicon.ico',
      }
    ]
  },
  manifest: '/site.webmanifest',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#111111',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // For dynamic canonical URLs
  // const pathname = typeof window !== 'undefined' ? window.location.pathname : '';
  // const canonicalUrl = `https://livethelife.tv${pathname}`;

  return (
    <html lang="en" className="dark">
      <head>
        <JsonLd />
        <link rel="preconnect" href="https://opensea.io" />
        <link rel="preconnect" href="https://storage.googleapis.com" />
        <link rel="dns-prefetch" href="https://opensea.io" />
        <link rel="dns-prefetch" href="https://storage.googleapis.com" />
      </head>
      <body className={cn(
        "min-h-screen bg-background font-satoshi antialiased",
        "selection:bg-accent selection:text-accent-foreground",
        "scrollbar-thin scrollbar-track-background scrollbar-thumb-muted-foreground/20 hover:scrollbar-thumb-muted-foreground/30",
        satoshi.variable,
        epilogue.variable,
        boska.variable
      )}>
        <a href="#main-content" className="sr-only focus:not-sr-only">Skip to content</a>
        <ThirdwebWrapper>
          <PipelineErrorHandler>
            <div className="relative flex min-h-screen flex-col">
              <Header />
              <main id="main-content" className="flex-1" aria-label="Main content">
                <div className="parallax-wrapper">
                  {children}
                </div>
              </main>
            </div>
          </PipelineErrorHandler>
          <Analytics />
          <noscript>
            <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXX" height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe>
          </noscript>
          <Toaster />
        </ThirdwebWrapper>
      </body>
    </html>
  )
}
