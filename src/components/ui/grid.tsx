import * as React from "react"
import { cn } from "@/lib/utils"

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  columns?: 2 | 3 | 4 | 5 | 6
  children: React.ReactNode
}

const columnStyles = {
  2: "xl:grid-cols-2",
  3: "xl:grid-cols-3",
  4: "xl:grid-cols-4",
  5: "xl:grid-cols-5",
  6: "xl:grid-cols-6",
} as const

export function Grid({ columns = 4, children, className, ...props }: GridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
        columnStyles[columns],
        "gap-6 max-w-screen-2xl p-8 pt-0",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
} 