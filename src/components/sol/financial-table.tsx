import { cn } from '@/lib/utils';

interface TableRow {
  [key: string]: string | number;
}

interface FinancialTableProps {
  headers: string[];
  rows: TableRow[];
  className?: string;
}

export function FinancialTable({ headers, rows, className }: FinancialTableProps) {
  return (
    <div className={cn("overflow-x-auto", className)}>
      <table className="w-full text-white/90 text-lg">
        <thead>
          <tr className="border-b border-yellow-500/30">
            {headers.map((header, index) => (
              <th key={index} className="text-left py-3 text-yellow-500 font-bold text-xl">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="border-b border-yellow-500/10 hover:bg-yellow-500/5 transition-colors"
            >
              {headers.map((header, colIndex) => (
                <td
                  key={colIndex}
                  className={cn(
                    "py-3 text-lg",
                    colIndex === 0 ? "font-semibold" : "text-gray-300"
                  )}
                >
                  {row[header]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
} 