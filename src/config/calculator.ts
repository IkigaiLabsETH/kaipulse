export const DEFAULT_VALUES = {
  MONTHLY_INCOME: 1000,
  MST_PRICE: 20,
  MONTHLY_DIVIDEND: 1,
  BTC_PRICE: 85000,
};

export const TIERS = [
  { 
    label: 'Beginner', 
    target: 20, 
    color: 'bg-blue-500',
    description: 'Start your journey to financial freedom'
  },
  { 
    label: 'Intermediate', 
    target: 500, 
    color: 'bg-green-500',
    description: 'Building momentum in your investment journey'
  },
  { 
    label: 'Advanced', 
    target: 3000, 
    color: 'bg-purple-500',
    description: 'Significant progress towards financial independence'
  },
  { 
    label: 'Elite', 
    target: 6000, 
    color: 'bg-yellow-500',
    description: 'Elite status achieved - substantial passive income'
  },
  { 
    label: 'Supreme', 
    target: 10000, 
    color: 'bg-orange-500',
    description: 'Supreme level - major financial milestone'
  },
  { 
    label: 'Legend', 
    target: 50000, 
    color: 'bg-red-500',
    description: 'Legendary status - ultimate financial freedom'
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
} as const; 