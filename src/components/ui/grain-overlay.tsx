import { cn } from "@/lib/utils";

interface GrainOverlayProps {
  className?: string;
  opacity?: number;
}

export function GrainOverlay({ className, opacity = 0.15 }: GrainOverlayProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 z-40 h-full w-full animate-grain",
        className
      )}
      style={{
        opacity,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }}
    />
  );
} 