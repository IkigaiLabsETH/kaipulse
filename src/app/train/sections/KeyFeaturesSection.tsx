export default function KeyFeaturesSection() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
        <div className="flex items-center justify-center gap-4 mb-4">
          <span className="text-4xl">💪</span>
          <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">Strength</h3>
        </div>
        <p className="text-center text-lg md:text-xl">Low-Impact Training</p>
      </div>
      <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
        <div className="flex items-center justify-center gap-4 mb-4">
          <span className="text-4xl">🥗</span>
          <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">Nutrition</h3>
        </div>
        <p className="text-center text-lg md:text-xl">Balanced Diet</p>
      </div>
      <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
        <div className="flex items-center justify-center gap-4 mb-4">
          <span className="text-4xl">🌙</span>
          <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">Recovery</h3>
        </div>
        <p className="text-center text-lg md:text-xl">Quality Sleep</p>
      </div>
    </div>
  );
} 