"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement>;

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        type="checkbox"
        className={cn(
          "h-4 w-4 shrink-0 rounded-sm border border-yellow-500 text-yellow-500 focus:ring-yellow-500 focus:ring-offset-black disabled:cursor-not-allowed disabled:opacity-50",
          "bg-transparent checked:bg-yellow-500 checked:border-transparent cursor-pointer",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Checkbox.displayName = "Checkbox";

export { Checkbox }; 