import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { Providers } from "./providers";
import { Header } from "@/components/Header";
import { GradientBackground } from "@/components/GradientBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://livethelife.tv'),
  title: "LiveTheLifeTV - Bitcoin Investment Calculator & Financial Freedom Guide",
  description: "Master your financial future with LiveTheLifeTV's Bitcoin-first investment strategy. Use our advanced calculator to plan your path to financial freedom through Bitcoin investment and wealth management.",
  keywords: [
    "Bitcoin", 
    "LIVETHELIFETV",
    "LTL",
    "Bitcoin Calculator",
    "Financial Freedom",
    "Investment",
    "Bitcoin Investment",
    "Wealth Management",
    "Crypto Calculator",
    "Bitcoin Strategy",
    "Financial Planning",
    "Bitcoin ROI",
    "Investment Calculator",
    "Bitcoin Returns",
    "Crypto Investment"
  ],
  authors: [{ name: "LiveTheLifeTV" }],
  robots: "index, follow",
  openGraph: {
    title: "LiveTheLifeTV - Bitcoin Investment Calculator & Financial Freedom Guide",
    description: "Master your financial future with LiveTheLifeTV's Bitcoin-first investment strategy. Use our advanced calculator to plan your path to financial freedom through Bitcoin investment and wealth management.",
    type: "website",
    locale: "en_US",
    siteName: "LiveTheLifeTV",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "LiveTheLifeTV Bitcoin Investment Calculator"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "LiveTheLifeTV - Bitcoin Investment Calculator & Financial Freedom Guide",
    description: "Master your financial future with LiveTheLifeTV's Bitcoin-first investment strategy. Use our advanced calculator to plan your path to financial freedom through Bitcoin investment and wealth management.",
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
  }
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ErrorBoundary>
          <Providers>
            <GradientBackground />
            <Header />
            <main className="pt-16 min-h-screen">
              {children}
            </main>
          </Providers>
        </ErrorBoundary>
      </body>
    </html>
  );
}
