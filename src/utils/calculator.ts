import { TIERS, TAX_RATES, PORTFOLIO_ALLOCATION } from '@/config/calculator';

export interface CalculatorResult {
  sharesNeeded: number;
  totalInvestment: number;
  btcRequired: number;
  currentTier: typeof TIERS[number];
  nextTier: typeof TIERS[number];
  progress: number;
  taxCalculations: {
    grossYearlyIncome: number;
    usWithholdingTax: number;
    europeanTax: number;
    totalTax: number;
    netIncomeUSD: number;
    netInEur: number;
  };
  portfolioAllocation: {
    mstyInvestment: number;
    btcInvestment: number;
    mstrInvestment: number;
    totalPortfolio: number;
  };
}

export function calculateFreedomMetrics(
  monthlyIncome: number,
  mstPrice: number,
  monthlyDividend: number,
  btcPrice: number,
  usdEurRate: number = 0.92
): CalculatorResult {
  // Basic calculations
  const sharesNeeded = monthlyIncome / monthlyDividend;
  const totalInvestment = sharesNeeded * mstPrice;
  const btcRequired = totalInvestment / btcPrice;

  // Tier calculations
  const currentTier = [...TIERS]
    .reverse()
    .find(tier => sharesNeeded >= tier.target) || TIERS[0];
  
  const nextTier = TIERS.find(tier => tier.target > sharesNeeded) || currentTier;
  
  // Calculate progress relative to total journey
  const legendTarget = TIERS[TIERS.length - 1].target; // 50000 shares
  const progress = Math.min((sharesNeeded / legendTarget) * 100, 100);

  // Tax calculations based on actual dividend income
  const actualMonthlyIncome = sharesNeeded * monthlyDividend;
  const actualYearlyIncome = actualMonthlyIncome * 12;
  const grossYearlyIncome = actualYearlyIncome;
  
  // Calculate taxes based on yearly income
  const usWithholdingTax = grossYearlyIncome * TAX_RATES.US_WITHHOLDING;
  const europeanTax = grossYearlyIncome * TAX_RATES.EUROPEAN_TAX;
  const totalTax = usWithholdingTax + europeanTax;
  const netIncomeUSD = grossYearlyIncome - totalTax;
  const netInEur = netIncomeUSD * usdEurRate;

  // Portfolio allocation calculations based on actual MSTY investment
  const mstyInvestment = totalInvestment;
  const totalPortfolio = mstyInvestment / PORTFOLIO_ALLOCATION.MSTY_INCOME_PERCENTAGE;
  const mstrInvestment = totalPortfolio * PORTFOLIO_ALLOCATION.MSTR_PERCENTAGE;
  const btcInvestment = totalPortfolio * PORTFOLIO_ALLOCATION.BTC_PERCENTAGE;

  return {
    sharesNeeded,
    totalInvestment,
    btcRequired,
    currentTier,
    nextTier,
    progress,
    taxCalculations: {
      grossYearlyIncome,
      usWithholdingTax,
      europeanTax,
      totalTax,
      netIncomeUSD,
      netInEur
    },
    portfolioAllocation: {
      mstyInvestment,
      btcInvestment,
      mstrInvestment,
      totalPortfolio
    }
  };
}

export function formatCurrency(value: number, currency: 'USD' | 'EUR' = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
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

export function formatPercentage(value: number): string {
  return `${(value * 100).toFixed(1)}%`;
} 