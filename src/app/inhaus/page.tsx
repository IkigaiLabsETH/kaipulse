"use client";

import Image from 'next/image';

export default function InhausPage() {
  return (
    <div className="min-h-screen bg-black text-white font-satoshi">
      {/* Premium header accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-8">
            <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">Premium Modular Homes • Architecture • Design</p>
            <h1 className="text-center">
              <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
                Casas inHAUS
              </span>
            </h1>
            <div className="flex items-center justify-center mt-6">
              <div className="h-px w-24 bg-yellow-500/30"></div>
              <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">Innovative Modular Architecture from Valencia, Spain</p>
              <div className="h-px w-24 bg-yellow-500/30"></div>
            </div>
            
            {/* Featured Visual */}
            <div className="relative w-full mx-auto mt-12 aspect-[16/9] overflow-hidden rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <Image
                src="/immo/AUJARDINDECHLOE-SALON-DE-JARDIN-LUXE-ALUMINIUM-ET-TECK-WING-AILY-HIGOLD-zoom.jpg"
                alt="Casas inHAUS modular home"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
            </div>
          </div>

          {/* Overview Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Overview of Casas inHAUS
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                Casas inHAUS is a Valencia, Spain-based company specializing in the design, manufacture, and sale of premium modular prefabricated concrete houses. Founded and managed by architects, including brothers Rubén and Sergio Navarro, the company has established itself as a leader in high-end, energy-efficient modular homes, offering turnkey solutions with fixed prices and delivery timelines of approximately five months.
              </p>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xl font-bold text-yellow-500 mb-2">Specialization & Catalog</h4>
                  <p>inHAUS focuses on premium modular homes from high-quality concrete, emphasizing modern design and energy efficiency. Their &quot;111 Collection&quot; features over 100 customizable models in various styles.</p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-yellow-500 mb-2">Construction & Customization</h4>
                  <p>Over 90% of construction is factory-based, with on-site assembly in hours. The &quot;inHAUS On Demand&quot; service allows for fully bespoke homes, and they have a global reach across Europe and the U.S.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">🏆</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Award-Winning
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                Globally Recognized Design
              </p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">🌿</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Sustainable
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                A/A+ Energy Efficiency
              </p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">🌍</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Global Reach
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                Projects Across Continents
              </p>
            </div>
          </div>

          {/* Award-Winning Achievements */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Award-Winning Achievements
            </h3>
            <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                        <h4 className="text-xl font-bold text-yellow-500 mb-2">iF Design Award (2021)</h4>
                        <p className="text-white/80">Won in Residential Architecture and Architectural Concept for a custom modular home in Barcelona.</p>
                    </div>
                    <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                        <h4 className="text-xl font-bold text-yellow-500 mb-2">Iconic Award (2021)</h4>
                        <p className="text-white/80">Awarded by the German Design Council for a bespoke Barcelona house, recognizing its innovative architecture.</p>
                    </div>
                    <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                        <h4 className="text-xl font-bold text-yellow-500 mb-2">World of Modular (2021)</h4>
                        <p className="text-white/80">Received an honorable mention for the same Barcelona project, celebrated at the world&apos;s leading modular construction event.</p>
                    </div>
                    <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                        <h4 className="text-xl font-bold text-yellow-500 mb-2">MBI Awards of Distinction (2021)</h4>
                        <p className="text-white/80">Awarded for a modular home in Masnou, Barcelona, for its modern, timeless design and environmental sustainability.</p>
                    </div>
                </div>
            </div>
          </div>

          {/* Lifestyle Video Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6 text-center">
              Experience inHAUS Living
            </h3>
            <div className="relative w-full aspect-[16/9] overflow-hidden rounded-none border-2 border-yellow-500/30 shadow-[2px_2px_0px_0px_rgba(234,179,8,0.3)]">
              <iframe
                src="https://www.youtube.com/embed/yi8cVsAnqIo"
                title="Experience inHAUS Living"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>

           {/* Notable Projects */}
           <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Notable Projects
            </h3>
            <div className="space-y-4">
              <p className="text-lg text-gray-300">
                From the Mediterranean coast to tranquil islands, inHAUS projects exemplify luxury and adaptability.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="list-disc list-inside space-y-2 text-white/80">
                    <li><span className="font-bold text-yellow-400">Masnou House (Barcelona):</span> A 209m², two-story modular home with a modern design and Mediterranean views.</li>
                    <li><span className="font-bold text-yellow-400">Barcelona Custom Home:</span> A bespoke project that won the iF Design Award, Iconic Award, and WOM honorable mention.</li>
                    <li><span className="font-bold text-yellow-400">Estepona Model (Mallorca):</span> A personalized home combining natural stone and white surfaces.</li>
                </ul>
                <ul className="list-disc list-inside space-y-2 text-white/80">
                    <li><span className="font-bold text-yellow-400">Menorca Vacation Home:</span> A luxury prefab villa with a cantilevered cross design.</li>
                    <li><span className="font-bold text-yellow-400">inHAUS BY Collection:</span> Collaborations with renowned designers blending Mediterranean essence with minimalist volumes.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Innovation and Sustainability */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Innovation and Sustainability
            </h3>
            <div className="space-y-4 text-gray-300">
                <p><span className="font-bold text-yellow-400">Industrialized Construction:</span> Manufacturing 95% of the home in a factory minimizes on-site waste and emissions.</p>
                <p><span className="font-bold text-yellow-400">inHAUS LAB Competition:</span> An annual competition encouraging students to propose innovative modular designs, fostering creativity.</p>
                <p><span className="font-bold text-yellow-400">Quality Control:</span> Each home undergoes a rigorous 111-point quality check to ensure premium finishes.</p>
            </div>
          </div>

          {/* Models and Pricing Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              The 111 Collection: Models & Pricing
            </h3>
            <p className="text-lg text-gray-300 mb-6">
              The &quot;111 Collection&quot; features over 100 customizable models across five architectural styles: Mediterranean, high-tech, Oriental, Italian, and Nordic. Prices are turnkey but can vary based on customization and site-specific needs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                <h4 className="text-xl font-bold text-yellow-500 mb-2">Santander Model</h4>
                <p className="text-white/80">A spacious 385 m² single-story house with 4 bedrooms and 4 bathrooms, featuring a timeless style.</p>
                <p className="text-yellow-400 font-bold mt-2">Starts at €426,300 + VAT</p>
              </div>
              <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                <h4 className="text-xl font-bold text-yellow-500 mb-2">Llanes Model</h4>
                <p className="text-white/80">A compact 150 m² single-story house with 3 bedrooms and 2 bathrooms, designed for functionality.</p>
                <p className="text-yellow-400 font-bold mt-2">Est. €155k - €194k + VAT</p>
              </div>
              <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                <h4 className="text-xl font-bold text-yellow-500 mb-2">Smaller Models (135-200 m²)</h4>
                <p className="text-white/80">Includes models like Luanco and Roquebrune, optimized for design and quality in a compact footprint.</p>
                <p className="text-yellow-400 font-bold mt-2">Est. €150k - €250k + VAT</p>
              </div>
               <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                <h4 className="text-xl font-bold text-yellow-500 mb-2">Mid-Range Models (200-400 m²)</h4>
                <p className="text-white/80">Includes models like Lugo, Baqueira, and Vallauris, ideal for larger families with premium finishes.</p>
                <p className="text-yellow-400 font-bold mt-2">Est. €250k - €500k + VAT</p>
               </div>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                 <h4 className="text-xl font-bold text-yellow-500 mb-2">Luxury Villas (400 m²+)</h4>
                 <p className="text-white/80">Includes large designs like the Vincennes model and the bespoke inHAUS BY Collection for ultimate luxury.</p>
                  <p className="text-yellow-400 font-bold mt-2">Starts at €600k + VAT</p>
               </div>
               <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                 <h4 className="text-xl font-bold text-yellow-500 mb-2">Per Square Meter</h4>
                 <p className="text-white/80">Pricing for standard models generally falls within this range, increasing for custom or luxury designs.</p>
                 <p className="text-yellow-400 font-bold mt-2">Approx. €1,000 - €1,500/m²</p>
               </div>
            </div>
            
            <h4 className="text-xl font-bold text-yellow-500 mb-4">Pricing Details</h4>
            <div className="grid md:grid-cols-2 gap-8 text-gray-300">
                <div>
                    <h5 className="font-bold text-yellow-400">What&apos;s Included:</h5>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>Architectural design and permits</li>
                        <li>High-quality materials and premium finishes</li>
                        <li>Standard foundations and installation</li>
                        <li>Transport (up to 400 km by road)</li>
                        <li>A or A+ energy efficiency rating</li>
                    </ul>
                </div>
                <div>
                    <h5 className="font-bold text-yellow-400">What&apos;s Excluded:</h5>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>Site preparation for sloped plots</li>
                        <li>Maritime transport</li>
                        <li>Optional features like pools or landscaping</li>
                        <li>Furniture (optional add-on)</li>
                    </ul>
                </div>
            </div>
          </div>

          {/* Customization and Service Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
                Customization & Turnkey Service
            </h3>
            <div className="space-y-4 text-gray-300">
              <div>
                <h4 className="text-xl font-bold text-yellow-500 mb-2">inHAUS On Demand</h4>
                <p>For a truly unique home, the &quot;inHAUS On Demand&quot; service allows clients to design a fully bespoke house from scratch with a dedicated team of architects and designers. All catalog models are also 100% customizable.</p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-yellow-500 mb-2">Complete Turnkey Service</h4>
                <p>inHAUS manages the entire process from land study to key handover in 3-5 months. This includes interior design, furniture selection, and after-sales service, ensuring a seamless experience with fixed pricing.</p>
              </div>
            </div>
          </div>

          {/* Video Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6 text-center">
              Factory to Foundation: The inHAUS Process
            </h3>
            <div className="relative w-full aspect-[16/9] overflow-hidden rounded-none border-2 border-yellow-500/30 shadow-[2px_2px_0px_0px_rgba(234,179,8,0.3)]">
              <iframe
                src="https://www.youtube.com/embed/lUgb32-tbdY"
                title="Casas inHAUS Construction Process"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Market Comparison & Catalog Access */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
                Market Comparison & Full Catalog Access
            </h3>
            <div className="space-y-4 text-gray-300">
                <p className="text-lg">
                    Compared to competitors, inHAUS occupies a premium segment. Companies like Atlántida Homes offer similarly priced models, while others provide more budget-friendly options but lack inHAUS&apos;s high-end finishes, turnkey service, and deep customization.
                </p>
                <div className="mt-6 bg-black/50 p-6 rounded-none border border-yellow-500/20">
                    <h4 className="text-xl font-bold text-yellow-500 mb-2">Access the Full Catalog</h4>
                    <p className="text-white/80">To view detailed pricing and floor plans for all 111 models, register on the Casas inHAUS website. This provides access to the complete catalog with photos, specifications, and costs.</p>
                    <a href="https://casasinhaus.com" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block bg-yellow-500 text-black font-bold py-2 px-6 rounded-none hover:bg-yellow-400 transition-colors">
                        Visit casasinhaus.com
                    </a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
