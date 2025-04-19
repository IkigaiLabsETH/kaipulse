import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatNumber(value: number, options: Intl.NumberFormatOptions = {}): string {
  return new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 2,
    ...options
  }).format(value)
}

export function formatEthPrice(price: number): string {
  return price.toFixed(3);
} 