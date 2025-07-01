import { cn } from '@/lib/utils';

interface Metric {
  label: string;
  value: string;
  description: string;
}

interface MetricsGridProps {
  metrics: Metric[];
  columns?: 2 | 3 | 4;
  className?: string;
}

export function MetricsGrid({ metrics, columns = 3, className }: MetricsGridProps) {
  const gridClass = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  }[columns];

  return (
    <div className={cn(`grid ${gridClass} gap-8`, className)}>
      {metrics.map((metric, index) => (
        <div
          key={index}
          className="bg-yellow-500/5 p-4 rounded border border-yellow-500/20"
        >
          <div className="text-yellow-500/60 text-sm mb-2">{metric.label}</div>
          <div className="text-3xl text-yellow-500 mb-2">{metric.value}</div>
          <div className="text-gray-300 text-sm">{metric.description}</div>
        </div>
      ))}
    </div>
  );
} 