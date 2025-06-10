

export default function NaturalStoneOptions() {
  return (
    <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
      <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
        Premium Natural Stone Finishes
      </h3>
      <div className="space-y-8">
        {/* Stone Options */}
        <div className="space-y-4">
          <h4 className="text-xl font-bold text-yellow-500">Recommended Natural Stones</h4>
          <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Travertine */}
              <div>
                <h5 className="text-yellow-400 font-epilogue mb-4">Travertine</h5>
                <div className="space-y-4">
                  <div>
                    <h6 className="text-white/90 font-medium mb-2">Why Choose Travertine:</h6>
                    <ul className="text-white/80 font-satoshi space-y-2">
                      <li className="flex items-start">
                        <span className="text-yellow-500 mr-2">✓</span>
                        <span>Seamless monochromatic look</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-500 mr-2">✓</span>
                        <span>Warm, natural tones</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-500 mr-2">✓</span>
                        <span>Cost-effective luxury</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h6 className="text-white/90 font-medium mb-2">Features:</h6>
                    <ul className="text-white/80 font-satoshi space-y-2">
                      <li className="flex items-start">
                        <span className="text-yellow-500 mr-2">•</span>
                        <span>Durable & slip-resistant</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-500 mr-2">•</span>
                        <span>Multiple finishes available</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-500 mr-2">•</span>
                        <span>€150-€250/m²</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Limestone */}
              <div>
                <h5 className="text-yellow-400 font-epilogue mb-4">Limestone</h5>
                <div className="space-y-4">
                  <div>
                    <h6 className="text-white/90 font-medium mb-2">Why Choose Limestone:</h6>
                    <ul className="text-white/80 font-satoshi space-y-2">
                      <li className="flex items-start">
                        <span className="text-yellow-500 mr-2">✓</span>
                        <span>Harmonious with travertine</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-500 mr-2">✓</span>
                        <span>Natural, earthy tones</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-500 mr-2">✓</span>
                        <span>Smooth texture</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h6 className="text-white/90 font-medium mb-2">Features:</h6>
                    <ul className="text-white/80 font-satoshi space-y-2">
                      <li className="flex items-start">
                        <span className="text-yellow-500 mr-2">•</span>
                        <span>Excellent for interiors</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-500 mr-2">•</span>
                        <span>Regular sealing needed</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-500 mr-2">•</span>
                        <span>€160-€280/m²</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Marble */}
              <div>
                <h5 className="text-yellow-400 font-epilogue mb-4">Marble</h5>
                <div className="space-y-4">
                  <div>
                    <h6 className="text-white/90 font-medium mb-2">Why Choose Marble:</h6>
                    <ul className="text-white/80 font-satoshi space-y-2">
                      <li className="flex items-start">
                        <span className="text-yellow-500 mr-2">✓</span>
                        <span>Luxurious polished finish</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-500 mr-2">✓</span>
                        <span>Elegant contrast</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-500 mr-2">✓</span>
                        <span>Premium durability</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h6 className="text-white/90 font-medium mb-2">Features:</h6>
                    <ul className="text-white/80 font-satoshi space-y-2">
                      <li className="flex items-start">
                        <span className="text-yellow-500 mr-2">•</span>
                        <span>Water-resistant when sealed</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-500 mr-2">•</span>
                        <span>Available in textures</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-500 mr-2">•</span>
                        <span>€200-€300/m²</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Cost Breakdown */}
        <div className="space-y-4">
          <h4 className="text-xl font-bold text-yellow-500">Natural Stone Cost Breakdown</h4>
          <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h5 className="text-yellow-400 font-epilogue mb-4">Coverage Details</h5>
                <ul className="text-white/80 font-satoshi space-y-2">
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>Pool floor: 66m²</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>Total tiled area: ~100m²</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>Includes walls and floor</span>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="text-yellow-400 font-epilogue mb-4">Investment Range</h5>
                <ul className="text-white/80 font-satoshi space-y-2">
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>Travertine: €25,000-€30,000</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>Limestone: €26,000-€35,000</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>Marble: €30,000-€40,000</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Maintenance */}
        <div className="space-y-4">
          <h4 className="text-xl font-bold text-yellow-500">Stone Maintenance</h4>
          <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
            <p className="text-white/80 font-satoshi mb-4">
              All natural stone finishes require proper sealing and maintenance to ensure longevity and preserve their beauty. Our installation includes:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h5 className="text-yellow-400 font-epilogue mb-4">Initial Treatment</h5>
                <ul className="text-white/80 font-satoshi space-y-2">
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">✓</span>
                    <span>Professional sealing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">✓</span>
                    <span>Chemical resistance treatment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">✓</span>
                    <span>Slip resistance enhancement</span>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="text-yellow-400 font-epilogue mb-4">Ongoing Care</h5>
                <ul className="text-white/80 font-satoshi space-y-2">
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">✓</span>
                    <span>Regular resealing schedule</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">✓</span>
                    <span>pH-balanced cleaning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">✓</span>
                    <span>Maintenance guide provided</span>
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