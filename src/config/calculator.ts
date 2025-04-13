export const DEFAULT_VALUES = {
  MONTHLY_INCOME: 1000,
  MST_PRICE: 20,
  MONTHLY_DIVIDEND: 1,
  BTC_PRICE: 85000,
  USD_EUR_RATE: 0.92, // Default USD to EUR exchange rate
};

export const TAX_RATES = {
  US_WITHHOLDING: 0.15, // 15% US withholding tax
  FRENCH_FLAT_TAX: 0.30, // 30% French flat tax (12.8% income tax + 17.2% social contributions)
};

export const PORTFOLIO_ALLOCATION = {
  MSTY_INCOME_PERCENTAGE: 0.10, // 10% of portfolio in MSTY for income
  MSTR_PERCENTAGE: 0.10, // 10% in MSTR for growth
  BTC_PERCENTAGE: 0.80, // 80% in BTC cold storage
};

export const TIERS = [
  { 
    label: 'Beginner', 
    target: 20, 
    color: 'bg-blue-500',
    description: 'Start your journey to financial freedom',
    monthlyIncome: 20
  },
  { 
    label: 'Intermediate', 
    target: 500, 
    color: 'bg-green-500',
    description: 'Building momentum in your investment journey',
    monthlyIncome: 500
  },
  { 
    label: 'Advanced', 
    target: 3000, 
    color: 'bg-purple-500',
    description: 'Significant progress towards financial independence',
    monthlyIncome: 3000
  },
  { 
    label: 'Elite', 
    target: 6000, 
    color: 'bg-yellow-500',
    description: 'Elite status achieved - substantial passive income',
    monthlyIncome: 6000
  },
  { 
    label: 'Supreme', 
    target: 10000, 
    color: 'bg-orange-500',
    description: 'Supreme level - major financial milestone',
    monthlyIncome: 10000
  },
  { 
    label: 'Legend', 
    target: 50000, 
    color: 'bg-red-500',
    description: 'Legendary status - ultimate financial freedom',
    monthlyIncome: 50000
  },
] as const;

export const INPUT_CONFIG = {
  MONTHLY_INCOME: {
    min: 0,
    step: 100,
    label: 'Monthly Income Goal ($)',
  },
  MST_PRICE: {
    min: 0,
    step: 0.01,
    label: 'MSTY Price/Share ($)',
  },
  MONTHLY_DIVIDEND: {
    min: 0,
    step: 0.01,
    label: 'Monthly Dividend/Share ($)',
  },
  BTC_PRICE: {
    min: 0,
    step: 1000,
    label: 'BTC Price ($)',
  },
  USD_EUR_RATE: {
    min: 0,
    step: 0.01,
    label: 'USD/EUR Exchange Rate',
  },
} as const; 