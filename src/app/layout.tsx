import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { Providers } from "@/app/providers";
import { Header } from "@/components/Header";
import localFont from 'next/font/local';

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
  title: "LiveTheLifeTV - Bitcoin Investment Education & Portfolio Planning Tools",
  description: "Fix Money, Fix The World. Explore Bitcoin investment strategies and portfolio planning tools. Our educational resources and calculators help you understand Bitcoin allocation, MSTR exposure, and income generation strategies. For educational purposes only - not financial advice.",
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
    "Financial Sovereignty"
  ],
  authors: [{ name: "LiveTheLifeTV" }],
  robots: "index, follow",
  openGraph: {
    title: "LiveTheLifeTV - Bitcoin Investment Education & Portfolio Planning Tools",
    description: "Fix Money, Fix The World. Explore Bitcoin investment strategies and portfolio planning tools. Our educational resources and calculators help you understand Bitcoin allocation, MSTR exposure, and income generation strategies. For educational purposes only - not financial advice.",
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
    title: "LiveTheLifeTV - Bitcoin Investment Education & Portfolio Planning Tools",
    description: "Fix Money, Fix The World. Explore Bitcoin investment strategies and portfolio planning tools. Our educational resources and calculators help you understand Bitcoin allocation, MSTR exposure, and income generation strategies. For educational purposes only - not financial advice.",
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${boska.variable} ${epilogue.variable} ${satoshi.variable}`}>
      <body className="font-satoshi">
        <ErrorBoundary>
          <Providers>
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
