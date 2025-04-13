import { TIERS, TAX_RATES, PORTFOLIO_ALLOCATION } from '@/config/calculator';

export interface CalculatorResult {
  sharesNeeded: number;
  totalInvestment: number;
  btcRequired: number;
  currentTier: typeof TIERS[number];
  nextTier: typeof TIERS[number];
  progress: number;
  taxCalculations: {
    grossMonthlyIncome: number;
    usWithholdingTax: number;
    netAfterUsTax: number;
    frenchTaxCredit: number;
    frenchTax: number;
    netAfterAllTaxes: number;
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
    .find(tier => sharesNeeded >= tier.target) || TIERS[TIERS.length - 1];
  
  const nextTier = TIERS.find(tier => tier.target > sharesNeeded) || currentTier;
  const progress = (sharesNeeded / nextTier.target) * 100;

  // Tax calculations
  const grossMonthlyIncome = monthlyIncome;
  const usWithholdingTax = grossMonthlyIncome * TAX_RATES.US_WITHHOLDING;
  const netAfterUsTax = grossMonthlyIncome - usWithholdingTax;
  const frenchTaxCredit = usWithholdingTax;
  const frenchTax = grossMonthlyIncome * TAX_RATES.FRENCH_FLAT_TAX;
  const netAfterAllTaxes = grossMonthlyIncome - frenchTax + frenchTaxCredit;
  const netInEur = netAfterAllTaxes * usdEurRate;

  // Portfolio allocation calculations
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
      grossMonthlyIncome,
      usWithholdingTax,
      netAfterUsTax,
      frenchTaxCredit,
      frenchTax,
      netAfterAllTaxes,
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