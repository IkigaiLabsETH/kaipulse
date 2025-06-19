export function VideoSection() {
  return (
    <div className="bg-[#1c1f26] rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
      <div className="relative w-full aspect-video">
        <iframe
          src="https://www.youtube.com/embed/RoRZE2DpEzE"
          title="The $1M Bitcoin Thesis"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      </div>
    </div>
  );
} 