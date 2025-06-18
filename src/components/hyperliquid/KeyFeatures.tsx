"use client";

export default function KeyFeatures() {
  const features = [
    {
      icon: "⚡",
      title: "High Performance",
      description: "5-10ms Latency"
    },
    {
      icon: "🔗",
      title: "Fully Onchain",
      description: "Zero External Dependencies"
    },
    {
      icon: "🏗️",
      title: "Custom L1",
      description: "Purpose-Built Architecture"
    }
  ];

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <div key={index} className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="text-4xl">{feature.icon}</span>
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
              {feature.title}
            </h3>
          </div>
          <p className="text-center text-lg md:text-xl">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  );
} 