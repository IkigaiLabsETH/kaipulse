import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

// Lazy load components for better performance
const StrikeHero = dynamic(() => import('@/components/strike/atoms/StrikeHero'), {
  loading: () => <div className="h-screen flex items-center justify-center bg-black text-white">Loading...</div>
})
const StrikeContent = dynamic(() => import('@/components/strike/organisms/StrikeContent'), {
  loading: () => <div className="h-screen flex items-center justify-center bg-black text-white">Loading...</div>
})

// SEO metadata
export const metadata: Metadata = {
  title: 'From Keynote to Code: Strike\'s Bitcoin-Backed Loans | LiveTheLifeTV',
  description: 'Discover how Strike is revolutionizing Bitcoin-backed loans and the strategic alignment with LiveTheLifeTV\'s mission for sovereign finance. Learn more about our Real Estate Market Dynamics.',
  openGraph: {
    title: 'From Keynote to Code: Strike\'s Bitcoin-Backed Loans',
    description: 'Discover how Strike is revolutionizing Bitcoin-backed loans and the strategic alignment with LiveTheLifeTV\'s mission for sovereign finance. Learn more about our Real Estate Market Dynamics.',
    images: [
      {
        url: '/hossegor.jpg',
        width: 1200,
        height: 630,
        alt: 'Strike Bitcoin-Backed Loans'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'From Keynote to Code: Strike\'s Bitcoin-Backed Loans',
    description: 'Discover how Strike is revolutionizing Bitcoin-backed loans and the strategic alignment with LiveTheLifeTV\'s mission for sovereign finance.',
    images: ['/hossegor.jpg']
  }
}

export default function StrikePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-[#1a1a1a] text-white">
      <div className="w-full max-w-[1440px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <Suspense fallback={<div className="h-screen flex items-center justify-center bg-black text-white">Loading...</div>}>
          <StrikeHero />
          <div className="text-center mb-8">
            <a 
              href="/realestate" 
              className="inline-block px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition-colors duration-200"
              aria-label="Learn more about Real Estate Market Dynamics"
            >
              Explore Real Estate Market Dynamics
            </a>
          </div>
          <StrikeContent />
        </Suspense>
      </div>
    </main>
  )
}
