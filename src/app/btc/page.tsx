import { Metadata } from 'next';
import Head from 'next/head';
import BTCWidgetLoader from '../../components/BTCWidgetLoader';

export const metadata: Metadata = {
  title: 'Buy Bitcoin | Secure Crypto Trading',
  description: 'Buy and sell Bitcoin securely with BTC Direct. Fast, reliable, and user-friendly cryptocurrency trading platform.',
  openGraph: {
    title: 'Buy Bitcoin | Secure Crypto Trading',
    description: 'Buy and sell Bitcoin securely with BTC Direct. Fast, reliable, and user-friendly cryptocurrency trading platform.',
    type: 'website',
  },
};

export default function BTCPage() {
  const apiKey = process.env.NEXT_PUBLIC_BTC_DIRECT_API_KEY!;

  return (
    <>
      <Head>
        <link 
          href="https://cdn.btcdirect.eu/fiat-to-coin/fiat-to-coin.css" 
          rel="stylesheet" 
        />
      </Head>
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Buy & Sell Bitcoin</h1>

        {/* Widget container */}
        <div className="max-w-4xl mx-auto btcdirect-widget-container">
          <div className="btcdirect-widget" data-btcdirect="" />
        </div>

        {/* Loader for BTC Direct widget */}
        <BTCWidgetLoader apiKey={apiKey} />
      </main>
    </>
  );
}
