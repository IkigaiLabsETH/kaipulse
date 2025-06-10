

export default function HeatingEnergy() {
  return (
    <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
      <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
        Heating & Energy Requirements
      </h3>
      <div className="space-y-8">
        {/* Pool Specifications */}
        <div className="space-y-4">
          <h4 className="text-xl font-bold text-yellow-500">Pool Heating Specifications</h4>
          <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h5 className="text-yellow-400 font-epilogue mb-4">Pool Dimensions</h5>
                <ul className="text-white/80 font-satoshi space-y-2">
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>Size: 11m x 6m</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>Surface area: 66m²</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>Volume: ~165m³</span>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="text-yellow-400 font-epilogue mb-4">Temperature Settings</h5>
                <ul className="text-white/80 font-satoshi space-y-2">
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>Target temperature: 28°C</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>Minimum temperature: 24°C</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>Season: Year-round</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Energy Requirements */}
        <div className="space-y-4">
          <h4 className="text-xl font-bold text-yellow-500">Energy Consumption</h4>
          <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h5 className="text-yellow-400 font-epilogue mb-4">Monthly Energy Usage</h5>
                <ul className="text-white/80 font-satoshi space-y-2">
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>Summer (Jun-Aug): 1,500-2,000 kWh</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>Spring/Autumn: 2,500-3,500 kWh</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>Winter (Dec-Feb): 4,000-5,000 kWh</span>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="text-yellow-400 font-epilogue mb-4">Annual Energy Costs</h5>
                <ul className="text-white/80 font-satoshi space-y-2">
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>Total annual usage: ~30,000 kWh</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>Estimated cost: €4,500-€6,000/year</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>COP: 4.5-5.0 (efficiency ratio)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Heat Pump Specifications */}
        <div className="space-y-4">
          <h4 className="text-xl font-bold text-yellow-500">Recommended Heat Pump</h4>
          <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h5 className="text-yellow-400 font-epilogue mb-4">Technical Specifications</h5>
                <ul className="text-white/80 font-satoshi space-y-2">
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">✓</span>
                    <span>Power: 16-20 kW</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">✓</span>
                    <span>Inverter technology</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">✓</span>
                    <span>Low noise operation</span>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="text-yellow-400 font-epilogue mb-4">Energy Efficiency</h5>
                <ul className="text-white/80 font-satoshi space-y-2">
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">✓</span>
                    <span>Energy class A+++</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">✓</span>
                    <span>Smart temperature control</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">✓</span>
                    <span>Weather compensation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Energy Saving Tips */}
        <div className="space-y-4">
          <h4 className="text-xl font-bold text-yellow-500">Energy Optimization</h4>
          <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h5 className="text-yellow-400 font-epilogue mb-4">Cost-Saving Measures</h5>
                <ul className="text-white/80 font-satoshi space-y-2">
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">✓</span>
                    <span>Solar cover when not in use</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">✓</span>
                    <span>Night-time temperature reduction</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">✓</span>
                    <span>Smart scheduling system</span>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="text-yellow-400 font-epilogue mb-4">Additional Features</h5>
                <ul className="text-white/80 font-satoshi space-y-2">
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">✓</span>
                    <span>Wind protection system</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">✓</span>
                    <span>Automatic pool cover</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">✓</span>
                    <span>Remote control via app</span>
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