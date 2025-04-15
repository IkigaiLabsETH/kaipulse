import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { Providers } from "./providers";
import { Header } from "@/components/Header";
import { GradientBackground } from "@/components/GradientBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IKIGAI Labs",
  description: "Your path to financial freedom with a Bitcoin-first strategy",
  keywords: ["Bitcoin", "IKIGAI", "Calculator", "Financial Freedom", "Investment"],
  authors: [{ name: "IKIGAI Labs" }],
  robots: "index, follow",
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
