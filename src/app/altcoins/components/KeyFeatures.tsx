export function KeyFeatures() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
        <div className="flex items-center justify-center gap-4 mb-4">
          <span className="text-4xl">📊</span>
          <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">Market Analysis</h3>
        </div>
        <p className="text-center text-lg md:text-xl">Cycle Patterns & Trends</p>
      </div>
      <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
        <div className="flex items-center justify-center gap-4 mb-4">
          <span className="text-4xl">💎</span>
          <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">Bitcoin Focus</h3>
        </div>
        <p className="text-center text-lg md:text-xl">Institutional Adoption</p>
      </div>
      <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
        <div className="flex items-center justify-center gap-4 mb-4">
          <span className="text-4xl">🚀</span>
          <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">Altcoin Strategy</h3>
        </div>
        <p className="text-center text-lg md:text-xl">Growth Opportunities</p>
      </div>
    </div>
  );
} 