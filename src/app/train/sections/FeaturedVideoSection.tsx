export default function FeaturedVideoSection() {
  return (
    <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
      <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
        Featured Training Protocol
      </h3>
      <div className="space-y-6">
        <div className="relative w-full aspect-video overflow-hidden rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
          <iframe
            src="https://www.youtube.com/embed/nucZAUmYeQw"
            title="Training Protocol Overview"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          />
        </div>
        <div className="text-gray-300 space-y-4">
          <p className="text-lg">
            Watch this comprehensive overview of the training protocol, demonstrating proper form and technique for key exercises.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-bold text-yellow-500 mb-3">Key Points</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>Low-impact exercise techniques</li>
                <li>Proper form demonstration</li>
                <li>Movement integration tips</li>
                <li>Recovery strategies</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold text-yellow-500 mb-3">Video Highlights</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>Exercise demonstrations</li>
                <li>Form corrections</li>
                <li>Progression examples</li>
                <li>Safety guidelines</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 