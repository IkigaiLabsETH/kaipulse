import { Card } from "@/components/ui/card";

export default function PhotoGridSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[...Array(6)].map((_, i) => (
        <Card 
          key={i}
          className="overflow-hidden bg-card border-2 border-yellow-500/20 shadow-[5px_5px_0px_0px_rgba(234,179,8,0.2)]"
        >
          <div className="relative aspect-[4/3]">
            <div className="w-full h-full bg-muted animate-pulse" />
          </div>
          <div className="p-4 space-y-3">
            <div className="h-6 bg-muted animate-pulse rounded w-3/4" />
            <div className="h-4 bg-muted animate-pulse rounded w-1/2" />
            <div className="flex items-center gap-1">
              <div className="h-4 w-4 bg-muted animate-pulse rounded-full" />
              <div className="h-4 bg-muted animate-pulse rounded w-8" />
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
} 