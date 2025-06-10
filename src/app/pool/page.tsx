import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Premium Pool Solutions | Custom Design & Construction',
  description: 'Discover our premium pool solutions featuring custom design, advanced features, and sustainable energy systems. Transform your backyard into a luxury oasis.',
  openGraph: {
    title: 'Premium Pool Solutions | Custom Design & Construction',
    description: 'Discover our premium pool solutions featuring custom design, advanced features, and sustainable energy systems.',
    type: 'website',
  },
};

export const revalidate = 3600; // ISR: Regenerate every hour

export default function PoolPage() {
  return (
    <div className="min-h-screen bg-black text-white font-satoshi">
      {/* Premium header accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 space-y-16">
        {/* Hero Section */}
        <div className="relative w-full">
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <iframe
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300%] h-[300%] pointer-events-none"
              src="https://www.youtube.com/embed/epSMgDLOZzA?autoplay=1&mute=1&loop=1&playlist=epSMgDLOZzA&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
              title="Luxury Pool Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          <div className="relative z-10 text-center space-y-8 py-20">
            <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">Luxury Pool • Premium Construction • Natural Stone</p>
            <h1 className="text-center">
              <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
                11x6m Pool
              </span>
            </h1>
            <div className="flex items-center justify-center mt-6">
              <div className="h-px w-24 bg-yellow-500/30"></div>
              <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">Masterpiece of Aquatic Luxury</p>
              <div className="h-px w-24 bg-yellow-500/30"></div>
            </div>
          </div>
        </div>
        {/* Overview Section */}
        <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
          <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">Premium Pool Specifications</h3>
          <div className="space-y-4 text-gray-300">
            <p className="text-lg">Experience the pinnacle of luxury with our 11x6 meter swimming pool, crafted using premium shotcrete construction and finished with exquisite natural stone tiles. This masterpiece combines durability with aesthetic excellence, creating an aquatic sanctuary that transforms your property into a haven of luxury.</p>
            <div className="mt-6">
              <h4 className="text-xl font-bold text-yellow-500 mb-4">Key Features:</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>Premium shotcrete construction</li>
                <li>Natural stone tile finish</li>
                <li>66 square meters of swimming area</li>
                <li>Custom design flexibility</li>
                <li>Durable and long-lasting</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Cost Breakdown */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="text-4xl">🏗️</span>
              <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">Construction</h3>
            </div>
            <p className="text-center text-lg md:text-xl">€50,000 - €60,000</p>
          </div>
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="text-4xl">✨</span>
              <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">Natural Stone</h3>
            </div>
            <p className="text-center text-lg md:text-xl">€25,000 - €30,000</p>
          </div>
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="text-4xl">💰</span>
              <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">Total Cost</h3>
            </div>
            <p className="text-center text-lg md:text-xl">€100,000</p>
          </div>
        </div>
        {/* Construction Details */}
        {/* ...continue inlining the rest of the component JSX here, following the same pattern... */}
      </div>
    </div>
  );
}
