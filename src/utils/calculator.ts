import { TIERS } from '@/config/calculator';

export interface CalculatorResult {
  sharesNeeded: number;
  totalInvestment: number;
  btcRequired: number;
  currentTier: typeof TIERS[number];
  nextTier: typeof TIERS[number];
  progress: number;
}

export function calculateFreedomMetrics(
  monthlyIncome: number,
  mstPrice: number,
  monthlyDividend: number,
  btcPrice: number
): CalculatorResult {
  const sharesNeeded = monthlyIncome / monthlyDividend;
  const totalInvestment = sharesNeeded * mstPrice;
  const btcRequired = totalInvestment / btcPrice;

  const currentTier = [...TIERS]
    .reverse()
    .find(tier => sharesNeeded >= tier.target) || TIERS[TIERS.length - 1];
  
  const nextTier = TIERS.find(tier => tier.target > sharesNeeded) || currentTier;
  const progress = (sharesNeeded / nextTier.target) * 100;

  return {
    sharesNeeded,
    totalInvestment,
    btcRequired,
    currentTier,
    nextTier,
    progress,
  };
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatNumber(value: number, decimals: number = 0): string {
  return value.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
} 