"use client";

export default function ConstructionDetails() {
  return (
    <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
      <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
        Construction Details
      </h3>
      <div className="space-y-8">
        {/* Construction Method */}
        <div className="space-y-4">
          <h4 className="text-xl font-bold text-yellow-500">Premium Construction Method</h4>
          <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
            <p className="text-white/80 font-satoshi mb-4">
              Our pool utilizes shotcrete construction, a premium technique that ensures superior durability and design flexibility. This method involves pneumatically applying concrete to create a strong, seamless structure that can accommodate any design vision while maintaining exceptional longevity.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <h5 className="text-yellow-400 font-epilogue mb-2">Benefits:</h5>
                <ul className="text-white/80 font-satoshi list-disc list-inside">
                  <li>Superior durability</li>
                  <li>Design flexibility</li>
                  <li>Seamless construction</li>
                  <li>Excellent waterproofing</li>
                  <li>Long-term value</li>
                  <li>Custom shapes possible</li>
                </ul>
              </div>
              <div>
                <h5 className="text-yellow-400 font-epilogue mb-2">Process:</h5>
                <p className="text-white/80 font-satoshi">Shotcrete application with steel reinforcement and polyester finish for enhanced durability and waterproofing.</p>
              </div>
            </div>
          </div>
        </div>
        {/* Natural Stone Finish */}
        <div className="space-y-4">
          <h4 className="text-xl font-bold text-yellow-500">Luxury Natural Stone Finish</h4>
          <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
            <p className="text-white/80 font-satoshi mb-4">
              The pool interior is finished with premium natural stone tiles, creating a luxurious and timeless aesthetic. This high-end finish not only enhances the visual appeal but also provides excellent durability and resistance to pool chemicals and UV exposure.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <h5 className="text-yellow-400 font-epilogue mb-2">Features:</h5>
                <ul className="text-white/80 font-satoshi list-disc list-inside">
                  <li>Premium natural stone</li>
                  <li>Chemical resistance</li>
                  <li>UV protection</li>
                  <li>Non-slip surface</li>
                  <li>Timeless aesthetics</li>
                  <li>Easy maintenance</li>
                </ul>
              </div>
              <div>
                <h5 className="text-yellow-400 font-epilogue mb-2">Coverage:</h5>
                <p className="text-white/80 font-satoshi">Approximately 100 square meters of premium natural stone tiles for complete pool interior coverage.</p>
              </div>
            </div>
          </div>
        </div>
        {/* Additional Considerations */}
        <div className="space-y-4">
          <h4 className="text-xl font-bold text-yellow-500">Additional Considerations</h4>
          <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
            <p className="text-white/80 font-satoshi mb-4">
              The total cost estimate of €100,000 includes the base construction, natural stone finish, and essential equipment. Additional features such as heating systems, advanced filtration, decking, and landscaping would be quoted separately based on your specific requirements.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <h5 className="text-yellow-400 font-epilogue mb-2">Optional Features:</h5>
                <ul className="text-white/80 font-satoshi list-disc list-inside">
                  <li>Heating systems</li>
                  <li>Advanced filtration</li>
                  <li>Custom decking</li>
                  <li>Landscaping</li>
                  <li>Lighting systems</li>
                  <li>Automation</li>
                </ul>
              </div>
              <div>
                <h5 className="text-yellow-400 font-epilogue mb-2">Note:</h5>
                <p className="text-white/80 font-satoshi">For a precise quote, we recommend consulting with local pool contractors to account for site-specific factors and additional features.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 