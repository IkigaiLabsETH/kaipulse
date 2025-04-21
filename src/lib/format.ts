/**
 * Format an ETH price with appropriate decimal places
 */
export function formatEthPrice(price: number): string {
  if (price < 0.0001) return '< 0.0001 Ξ';
  if (price < 1) return `${price.toFixed(4)} Ξ`;
  if (price < 1000) return `${price.toFixed(2)} Ξ`;
  return `${price.toLocaleString(undefined, { maximumFractionDigits: 2 })} Ξ`;
} 