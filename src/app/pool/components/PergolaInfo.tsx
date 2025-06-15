import React from 'react';

const PergolaInfo = () => {
  return (
    <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
      {/* Overview Section */}
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-500 mb-6">PERGOLUX Pergola S3 Series</h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          A premium outdoor structure designed to enhance outdoor living spaces with a blend of functionality, durability, and modern aesthetics. 
          Engineered in Norway with Scandinavian minimalist design, built to withstand extreme weather conditions for year-round use.
        </p>
      </div>

      {/* Models Section */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-yellow-500 mb-6">Available Models</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Standard Model */}
          <div className="bg-black/40 p-6 rounded-none border border-yellow-500/30">
            <h4 className="text-xl font-bold text-yellow-500 mb-3">Standard Pergola S3</h4>
            <p className="text-gray-300 mb-4">From $3,959 (41% off)</p>
            <ul className="text-gray-300 space-y-2">
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                Powder-coated 6063-T5 aluminum construction
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                Manual crank operation
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                80-100 mph storm resistance
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                160 kg snow load capacity
              </li>
            </ul>
          </div>

          {/* Sundream Model */}
          <div className="bg-black/40 p-6 rounded-none border border-yellow-500/30">
            <h4 className="text-xl font-bold text-yellow-500 mb-3">Sundream S3</h4>
            <p className="text-gray-300 mb-4">From $4,979 (40% off)</p>
            <ul className="text-gray-300 space-y-2">
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                Motorized roof with wider louvers
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                Smart Matter® technology
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                360° LED lighting
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                150 mph storm resistance
              </li>
            </ul>
          </div>

          {/* Skydance Model */}
          <div className="bg-black/40 p-6 rounded-none border border-yellow-500/30">
            <h4 className="text-xl font-bold text-yellow-500 mb-3">Skydance S3</h4>
            <p className="text-gray-300 mb-4">From $6,799 (40% off)</p>
            <ul className="text-gray-300 space-y-2">
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                Premium construction
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                165 mph hurricane resistance
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                RainLUX™ technology
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                Ultra-quiet motor
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-yellow-500 mb-6">Featured Video</h3>
        <div className="bg-black/40 p-6 rounded-none border border-yellow-500/30">
          <div className="relative w-full h-[600px]">
            <iframe
              src="https://www.youtube.com/embed/IVTiS88JS0Y"
              title="PERGOLUX Pergola S3 Series Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full rounded-none"
            />
          </div>
          <p className="text-gray-300 mt-4 text-center">
            Watch how our premium pergolas transform your outdoor living space
          </p>
          <div className="mt-6 text-center">
            <a 
              href="https://pergolux.fr/collections/pergola" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-yellow-500 text-black font-bold hover:bg-yellow-400 transition-colors duration-200 rounded-none border-2 border-yellow-500 hover:border-yellow-400"
            >
              View All Pergola Models
            </a>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-yellow-500 mb-6">Key Features</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-black/40 p-6 rounded-none border border-yellow-500/30">
            <h4 className="text-xl font-bold text-yellow-500 mb-3">Construction & Weather Resistance</h4>
            <ul className="text-gray-300 space-y-2">
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                Powder-coated 6063-T5 aluminum
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                Maintenance-free durability
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                Integrated drainage system
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                Adjustable louvered roof
              </li>
            </ul>
          </div>
          <div className="bg-black/40 p-6 rounded-none border border-yellow-500/30">
            <h4 className="text-xl font-bold text-yellow-500 mb-3">Smart Features & Accessories</h4>
            <ul className="text-gray-300 space-y-2">
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                Smart home integration
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                LED lighting control
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                Optional heating
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                SnapFIT™ accessory system
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PergolaInfo; 