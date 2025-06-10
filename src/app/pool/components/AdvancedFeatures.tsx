"use client";

export default function AdvancedFeatures() {
  return (
    <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
      <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
        Advanced Features & Systems
      </h3>
      <div className="space-y-8">
        {/* Water Treatment Systems */}
        <div className="space-y-4">
          <h4 className="text-xl font-bold text-yellow-500">Water Treatment Options</h4>
          <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h5 className="text-yellow-400 font-epilogue mb-4">Saltwater System</h5>
                <ul className="text-white/80 font-satoshi space-y-2">
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">✓</span>
                    <span>Softer water with reduced irritation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">✓</span>
                    <span>Lower chlorine levels</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">✓</span>
                    <span>Automated chlorine generation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">✓</span>
                    <span>Gentler on skin and eyes</span>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="text-yellow-400 font-epilogue mb-4">UV Light Filtration</h5>
                <ul className="text-white/80 font-satoshi space-y-2">
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">✓</span>
                    <span>Reduced chemical dependency</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">✓</span>
                    <span>Enhanced water clarity</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">✓</span>
                    <span>Environmentally friendly</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">✓</span>
                    <span>Improved water quality</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Heating Systems */}
        <div className="space-y-4">
          <h4 className="text-xl font-bold text-yellow-500">Premium Heating Solutions</h4>
          <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h5 className="text-yellow-400 font-epilogue mb-4">Heat Pump Technology</h5>
                <ul className="text-white/80 font-satoshi space-y-2">
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">✓</span>
                    <span>Energy-efficient operation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">✓</span>
                    <span>Consistent temperature control</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">✓</span>
                    <span>Extended swimming season</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">✓</span>
                    <span>Low operating costs</span>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="text-yellow-400 font-epilogue mb-4">Solar Heating</h5>
                <ul className="text-white/80 font-satoshi space-y-2">
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">✓</span>
                    <span>Renewable energy source</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">✓</span>
                    <span>Zero operating costs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">✓</span>
                    <span>Environmentally sustainable</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">✓</span>
                    <span>Perfect for French climate</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Premium Brands */}
        <div className="space-y-4">
          <h4 className="text-xl font-bold text-yellow-500">Recommended Equipment Brands</h4>
          <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h5 className="text-yellow-400 font-epilogue mb-4">International Brands</h5>
                <ul className="text-white/80 font-satoshi space-y-2">
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>Pentair - Premium filtration systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>Hayward - Advanced automation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>Jandy - Luxury pool equipment</span>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="text-yellow-400 font-epilogue mb-4">French Brands</h5>
                <ul className="text-white/80 font-satoshi space-y-2">
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>Aqualux - Complete pool solutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>ACIS - Innovative filtration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>Weltico - Premium lighting</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Safety Features */}
        <div className="space-y-4">
          <h4 className="text-xl font-bold text-yellow-500">Safety & Compliance</h4>
          <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
            <p className="text-white/80 font-satoshi mb-4">
              All pools in France must comply with the Raffarin Law, requiring approved safety devices. Our installations include:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h5 className="text-yellow-400 font-epilogue mb-4">Safety Features</h5>
                <ul className="text-white/80 font-satoshi space-y-2">
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">✓</span>
                    <span>Security barriers (NF P90-306)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">✓</span>
                    <span>Alarm systems (NF P90-307)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">✓</span>
                    <span>Safety covers (NF P90-308)</span>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="text-yellow-400 font-epilogue mb-4">Compliance</h5>
                <ul className="text-white/80 font-satoshi space-y-2">
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">✓</span>
                    <span>Building permit included</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">✓</span>
                    <span>Tax declaration handled</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">✓</span>
                    <span>Full documentation provided</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 