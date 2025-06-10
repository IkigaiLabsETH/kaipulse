export default function OverviewSection() {
  return (
    <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
      <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
        Premium Pool Specifications
      </h3>
      <div className="space-y-4 text-gray-300">
        <p className="text-lg">
          Experience the pinnacle of luxury with our 11x6 meter swimming pool, crafted using premium shotcrete construction and finished with exquisite natural stone tiles. This masterpiece combines durability with aesthetic excellence, creating an aquatic sanctuary that transforms your property into a haven of luxury.
        </p>
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
  );
} 