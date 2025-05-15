// Multiple IPFS gateways for fallback
export const IPFS_GATEWAYS = [
  'https://cloudflare-ipfs.com/ipfs/',
  'https://gateway.pinata.cloud/ipfs/',
  'https://ipfs.io/ipfs/',
  'https://dweb.link/ipfs/',
  'https://ipfs.infura.io/ipfs/'
];

export function ipfsToHttp(url: string | null, gatewayIndex = 0): string {
  if (!url) return '/images/nft-placeholder.png';
  if (url.startsWith('ipfs://')) {
    const ipfsHash = url.slice(7);
    return IPFS_GATEWAYS[gatewayIndex] + ipfsHash;
  }
  if (url.startsWith('ar://')) {
    return 'https://arweave.net/' + url.slice(5);
  }
  if (url.startsWith('http://')) {
    return url.replace('http://', 'https://');
  }
  return url;
}

export async function fetchWithIPFSFallback(url: string): Promise<Response> {
  if (!url.startsWith('ipfs://')) {
    return fetch(url);
  }

  let lastError: Error | null = null;
  for (let i = 0; i < IPFS_GATEWAYS.length; i++) {
    try {
      const response = await fetch(ipfsToHttp(url, i));
      if (response.ok) {
        return response;
      }
    } catch (error) {
      lastError = error instanceof Error ? error : new Error(String(error));
    }
  }

  throw lastError || new Error('Failed to fetch from all IPFS gateways');
} 