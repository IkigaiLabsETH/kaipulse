/**
 * Validates if a string is a valid Ethereum address
 * @param address The address to validate
 * @returns boolean indicating if the address is valid
 */
export function isValidAddress(address: string): boolean {
  if (!address) return false;
  return /^0x[a-fA-F0-9]{40}$/.test(address);
}

/**
 * Normalizes an Ethereum address to lowercase
 * @param address The address to normalize
 * @returns normalized address
 */
export function normalizeAddress(address: string): string {
  return address.toLowerCase();
}

/**
 * Validates if a string is a valid token ID
 * @param tokenId The token ID to validate
 * @returns boolean indicating if the token ID is valid
 */
export function isValidTokenId(tokenId: string): boolean {
  if (!tokenId) return false;
  return /^[0-9]+$/.test(tokenId);
}

/**
 * Validates chain ID
 * @param chainId The chain ID to validate
 * @returns boolean indicating if the chain ID is valid
 */
export function isValidChainId(chainId: string): boolean {
  const validChains = ['ethereum', 'polygon', 'optimism', 'arbitrum', 'base'];
  return validChains.includes(chainId.toLowerCase());
} 