import { ReactNode } from 'react';

interface ComparisonItem {
  title: string;
  content: string | ReactNode;
}

interface ComparisonSectionProps {
  items: ComparisonItem[];
  className?: string;
}

export function ComparisonSection({ items, className }: ComparisonSectionProps) {
  return (
    <div className={`space-y-6 ${className || ''}`}>
      {items.map((item, index) => (
        <div key={index}>
          <h4 className="text-xl text-yellow-500 mb-3">{item.title}</h4>
          <div className="text-gray-300">
            {typeof item.content === 'string' ? (
              <p>{item.content}</p>
            ) : (
              item.content
            )}
          </div>
        </div>
      ))}
    </div>
  );
} 