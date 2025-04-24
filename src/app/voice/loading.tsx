export default function VoiceLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-black/95 to-yellow-950/20">
      <div className="relative">
        <div className="absolute -inset-4 bg-yellow-500/10 blur-2xl rounded-full animate-pulse" />
        <div className="w-12 h-12 border-2 border-yellow-500 border-t-transparent rounded-full animate-spin" />
      </div>
    </div>
  )
} 