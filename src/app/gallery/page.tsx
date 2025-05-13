import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gallery | Ikigai Labs',
  description: 'Explore our immersive 3D art gallery showcasing digital art and interactive experiences.',
}

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Premium header accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 pt-20 pb-4 relative">
        <div className="mb-16 relative z-10 text-center">
          <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">Digital Art • Immersive Experience • 3D Gallery</p>
          <h1 className="text-center">
            <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
              Ikigai Labs Gallery
            </span>
          </h1>
          <div className="flex items-center justify-center mt-6">
            <div className="h-px w-24 bg-yellow-500/30"></div>
            <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">Step into our immersive 3D gallery space</p>
            <div className="h-px w-24 bg-yellow-500/30"></div>
          </div>
        </div>
      </div>

      {/* Main Gallery Embed */}
      <section className="w-full">
        <div className="bg-black w-full items-center justify-center flex py-20 px-10">
          <iframe
            src="https://www.spatial.io/embed/Ikigai-Labs-Gallery-1-6462268d593bb108f20206ee?share=5997893486131460079"
            width="1516px"
            height="720px"
            allow="camera; fullscreen; autoplay; display-capture; microphone; clipboard-write"
            className="rounded-lg shadow-[0_0_30px_rgba(234,179,8,0.15)]"
          ></iframe>
        </div>
      </section>

      {/* Info Section */}
    </div>
  )
}
