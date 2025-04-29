import type { Metadata, Viewport } from "next";
import "./globals.css";
import localFont from 'next/font/local';
import { Header } from "@/components/Header";
import { Analytics } from '@vercel/analytics/react';
import { cn } from "@/lib/utils";
import { PipelineErrorHandler } from "@/components/PipelineErrorHandler";
import { Toaster } from "@/components/ui/toaster";
import { ThirdwebProvider } from "thirdweb/react";
import { client } from "@/lib/thirdwebClient";

const boska = localFont({
  src: [
    {
      path: '../../public/fonts/boska/Boska-Variable.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/boska/Boska-VariableItalic.woff',
      weight: '400',
      style: 'italic',
    }
  ],
  variable: '--font-boska',
});

const epilogue = localFont({
  src: [
    {
      path: '../../public/fonts/epilogue/Epilogue-Variable.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/epilogue/Epilogue-VariableItalic.woff',
      weight: '400',
      style: 'italic',
    }
  ],
  variable: '--font-epilogue',
});

const satoshi = localFont({
  src: [
    {
      path: '../../public/fonts/satoshi/Satoshi-Variable.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/satoshi/Satoshi-VariableItalic.woff',
      weight: '400',
      style: 'italic',
    }
  ],
  variable: '--font-satoshi',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://livethelife.tv'),
  title: "LiveTheLifeTV - Bitcoin Investment Education & Life Balance Tools",
  description: "Fix Money, Fix The World. Life isn't about the biggest stack - it's about living your best life with BTC. Explore Bitcoin investment strategies and portfolio planning tools that help you achieve financial freedom while embracing life's true value. Our educational resources and calculators help you understand Bitcoin allocation, MSTR exposure, and income generation strategies. For educational purposes only - not financial advice.",
  keywords: [
    "Bitcoin Education",
    "Portfolio Planning",
    "Bitcoin Calculator",
    "MSTR Analysis",
    "Investment Education",
    "Wealth Education",
    "Bitcoin ROI",
    "Portfolio Tools",
    "Crypto Education",
    "Bitcoin Strategy",
    "Financial Education",
    "Bitcoin Returns",
    "Investment Calculator",
    "Bitcoin Allocation",
    "Crypto Learning",
    "Bitcoin Portfolio",
    "Digital Asset Education",
    "Bitcoin Investment Guide",
    "Wealth Education",
    "Portfolio Planning",
    "Fix Money Fix The World",
    "Bitcoin Freedom",
    "Financial Sovereignty",
    "Live Your Best Life",
    "Bitcoin Life Balance",
    "BTC Lifestyle",
    "Financial Freedom",
    "Life with Bitcoin"
  ],
  authors: [{ name: "LiveTheLifeTV" }],
  robots: "index, follow",
  openGraph: {
    title: "LiveTheLifeTV - Bitcoin Investment Education & Life Balance Tools",
    description: "Fix Money, Fix The World. Life isn't about the biggest stack - it's about living your best life with BTC. Explore Bitcoin investment strategies and portfolio planning tools that help you achieve financial freedom while embracing life's true value. For educational purposes only - not financial advice.",
    type: "website",
    locale: "en_US",
    siteName: "LiveTheLifeTV",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "LiveTheLifeTV Bitcoin Education Tools - For Educational Purposes Only"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "LiveTheLifeTV - Bitcoin Investment Education & Life Balance Tools",
    description: "Fix Money, Fix The World. Life isn't about the biggest stack - it's about living your best life with BTC. Explore Bitcoin investment strategies and portfolio planning tools that help you achieve financial freedom while embracing life's true value. For educational purposes only - not financial advice.",
    images: ["/twitter-image.jpg"],
    creator: "@LiveTheLifeTV"
  },
  alternates: {
    canonical: "https://livethelife.tv"
  },
  verification: {
    google: "your-google-site-verification",
    yandex: "your-yandex-verification",
    yahoo: "your-yahoo-verification"
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={cn(
        `min-h-screen bg-background font-satoshi antialiased ${boska.variable} ${epilogue.variable} ${satoshi.variable}`,
        "selection:bg-accent selection:text-accent-foreground",
        "scrollbar-thin scrollbar-track-background scrollbar-thumb-muted-foreground/20 hover:scrollbar-thumb-muted-foreground/30"
      )}>
        <ThirdwebProvider client={client}>
          <PipelineErrorHandler>
            <div className="relative flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">
                <div className="parallax-wrapper">
                  {children}
                </div>
              </main>
            </div>
          </PipelineErrorHandler>
          <Analytics />
          <Toaster />
        </ThirdwebProvider>
      </body>
    </html>
  )
}
