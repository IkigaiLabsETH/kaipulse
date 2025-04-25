import Image from 'next/image'
import Link from 'next/link'

export default function ClubPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-2">
              <h6 className="text-sm uppercase tracking-wider text-gray-600">MSTY CLUB EDITION</h6>
              <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl">Club</h1>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p>
                Join the MSTY Club for an exclusive experience that goes beyond traditional investment communities. 
                As a member, you&apos;ll get priority access to our curated insights, personalized portfolio strategies, 
                and a front-row seat to the future of Bitcoin-first wealth building. Connect with like-minded 
                visionaries who are redefining financial freedom in the digital age.
              </p>
            </div>

            <Link 
              href="/join"
              className="inline-block bg-black text-white px-8 py-4 text-lg font-medium hover:bg-gray-900 transition-colors"
            >
              Join the club
            </Link>
          </div>

          <div className="relative h-[600px] md:h-[800px]">
            <Image
              src="/images/club-hero.jpg"
              alt="MSTY Club"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
} 