

export default function SolarEnergySystem() {
  return (
    <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
      <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
        Solar Energy System
      </h3>
      <div className="space-y-8">
        {/* System Requirements */}
        <div className="space-y-4">
          <h4 className="text-xl font-bold text-yellow-500">Solar Panel Requirements</h4>
          <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h5 className="text-yellow-400 font-epilogue mb-4">System Specifications</h5>
                <ul className="text-white/80 font-satoshi space-y-2">
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">✓</span>
                    <span>Total capacity: 20-25 kW</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">✓</span>
                    <span>44-56 panels (450W each)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">✓</span>
                    <span>Area required: 70-112m²</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">✓</span>
                    <span>Annual production: 20,800-27,500 kWh</span>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="text-yellow-400 font-epilogue mb-4">Energy Yield</h5>
                <ul className="text-white/80 font-satoshi space-y-2">
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>Southern France: 1,500-1,600 kWh/kW/year</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>Central France: 1,200-1,300 kWh/kW/year</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>System efficiency: 80-85%</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>Heat pump COP: 4.5-5.0</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Cost Breakdown */}
        <div className="space-y-4">
          <h4 className="text-xl font-bold text-yellow-500">Investment & Savings</h4>
          <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h5 className="text-yellow-400 font-epilogue mb-4">System Costs</h5>
                <ul className="text-white/80 font-satoshi space-y-2">
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>20 kW system: €20,000-€28,000</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>25 kW system: €25,000-€35,000</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>Installation included</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>Inverter & mounting hardware</span>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="text-yellow-400 font-epilogue mb-4">Financial Benefits</h5>
                <ul className="text-white/80 font-satoshi space-y-2">
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">✓</span>
                    <span>Annual savings: €4,500-€6,000</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">✓</span>
                    <span>Tax credits: 20-30% reduction</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">✓</span>
                    <span>Feed-in tariffs available</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">✓</span>
                    <span>Payback: 3-5 years</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Seasonal Performance */}
        <div className="space-y-4">
          <h4 className="text-xl font-bold text-yellow-500">Seasonal Performance</h4>
          <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h5 className="text-yellow-400 font-epilogue mb-4">Summer Operation</h5>
                <ul className="text-white/80 font-satoshi space-y-2">
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">✓</span>
                    <span>Production: 1,700-2,100 kWh/month</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">✓</span>
                    <span>Usage: 1,500-2,000 kWh/month</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">✓</span>
                    <span>Grid feed-in available</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">✓</span>
                    <span>Optimal efficiency</span>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="text-yellow-400 font-epilogue mb-4">Winter Operation</h5>
                <ul className="text-white/80 font-satoshi space-y-2">
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>Production: 1,200-1,500 kWh/month</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>Usage: 4,000-5,000 kWh/month</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>Grid supplementation needed</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>Reduced efficiency</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Installation Requirements */}
        <div className="space-y-4">
          <h4 className="text-xl font-bold text-yellow-500">Installation Requirements</h4>
          <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h5 className="text-yellow-400 font-epilogue mb-4">Site Requirements</h5>
                <ul className="text-white/80 font-satoshi space-y-2">
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">✓</span>
                    <span>South-facing orientation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">✓</span>
                    <span>Minimal shading</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">✓</span>
                    <span>Roof or ground mounting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">✓</span>
                    <span>Grid connection point</span>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="text-yellow-400 font-epilogue mb-4">Next Steps</h5>
                <ul className="text-white/80 font-satoshi space-y-2">
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">✓</span>
                    <span>Site assessment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">✓</span>
                    <span>Incentive applications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">✓</span>
                    <span>Grid connection approval</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">✓</span>
                    <span>Installation scheduling</span>
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