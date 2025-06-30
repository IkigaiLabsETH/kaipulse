"use client";

interface EmbeddedVideoProps {
  videoUrl: string;
  title: string;
  width?: string;
  height?: string;
}

export default function EmbeddedVideo({ 
  videoUrl, 
  title, 
  width = "100%", 
  height = "100%" 
}: EmbeddedVideoProps) {
  return (
    <div className="w-full max-w-[500px] aspect-video rounded-2xl border-4 border-yellow-400 bg-[#1c1f26] overflow-hidden shadow-[0_8px_32px_0_rgba(247,181,0,0.25),0_2px_8px_0_rgba(0,0,0,0.45)]">
      <iframe
        width={width}
        height={height}
        src={videoUrl}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="w-full h-full rounded-2xl"
      />
    </div>
  );
} 