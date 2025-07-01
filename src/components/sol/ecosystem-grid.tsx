import { cn } from '@/lib/utils';

interface EcosystemProject {
  name: string;
  symbol: string;
  description: string;
  growth: string;
  category?: string;
}

interface EcosystemGridProps {
  projects: EcosystemProject[];
  columns?: 2 | 3;
  className?: string;
}

export function EcosystemGrid({ projects, columns = 3, className }: EcosystemGridProps) {
  const gridClass = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
  }[columns];

  return (
    <div className={cn(`grid ${gridClass} gap-6`, className)}>
      {projects.map((project) => (
        <div
          key={project.symbol}
          className="bg-[#18191c]/80 rounded-xl p-6 border border-yellow-500/20 hover:border-yellow-500/40 transition-colors"
        >
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-xl text-yellow-500">{project.name}</h4>
            <span className="font-mono text-yellow-500/80">{project.symbol}</span>
          </div>
          <p className="text-gray-300 mb-3">{project.description}</p>
          <div className="text-sm text-yellow-500/60 italic">{project.growth}</div>
        </div>
      ))}
    </div>
  );
} 