import { CURATED_COLLECTION_SLUGS_OR_ADDRESSES } from '@/config/collections';

const OPENSEA_API_KEY = process.env.OPENSEA_API_KEY;

function getErrorMessage(err: unknown): string {
  if (typeof err === 'string') return err;
  if (err && typeof err === 'object' && 'message' in err && typeof (err as { message?: unknown }).message === 'string') {
    return (err as { message: string }).message;
  }
  return '';
}

async function fetchCollectionData(slugOrAddress: string, apiKey: string) {
  let slug = slugOrAddress;
  const isAddress = /^0x[a-fA-F0-9]{40}$/.test(slugOrAddress);

  try {
    // 1. If address, resolve to slug
    if (isAddress) {
      const contractRes = await fetch(
        `https://api.opensea.io/api/v2/chain/ethereum/contract/${slugOrAddress}`,
        { headers: { 'x-api-key': apiKey, 'Accept': 'application/json' } }
      );
      if (!contractRes.ok) throw new Error('Failed to resolve contract to slug');
      const contractData = await contractRes.json();
      if (!contractData.collection) throw new Error('No collection slug found for contract');
      slug = contractData.collection;
    }

    // 2. Fetch up to 10 NFTs and pick a random one with an image
    const nftsRes = await fetch(
      `https://api.opensea.io/api/v2/collection/${slug}/nfts?limit=10`,
      { headers: { 'x-api-key': apiKey, 'Accept': 'application/json' } }
    );
    if (nftsRes.ok) {
      const nftsData = await nftsRes.json();
      type NFT = { image_url?: string; name?: string; description?: string };
      const nfts = Array.isArray(nftsData.nfts) ? (nftsData.nfts as NFT[]).filter(n => n.image_url) : [];
      if (nfts.length > 0) {
        const randomNft = nfts[Math.floor(Math.random() * nfts.length)];
        return {
          address: slugOrAddress,
          name: randomNft.name?.split('#')[0]?.trim() || slug,
          image_url: randomNft.image_url,
          description: randomNft.description || '',
        };
      }
    }

    // 3. Fallback
    return {
      address: slugOrAddress,
      name: slugOrAddress,
      image_url: '/images/nft-placeholder.png',
      description: '',
    };
  } catch (err) {
    return {
      address: slugOrAddress,
      name: slugOrAddress,
      image_url: '/images/nft-placeholder.png',
      description: getErrorMessage(err),
    };
  }
}

export async function GET() {
  if (!OPENSEA_API_KEY) {
    return Response.json({ collections: CURATED_COLLECTION_SLUGS_OR_ADDRESSES.map(slugOrAddress => ({
      address: slugOrAddress,
      name: slugOrAddress,
      image_url: '/images/nft-placeholder.png',
      description: 'Missing OpenSea API key',
    })) });
  }

  const collections = await Promise.all(
    CURATED_COLLECTION_SLUGS_OR_ADDRESSES.map(slugOrAddress =>
      fetchCollectionData(slugOrAddress, OPENSEA_API_KEY)
    )
  );

  return Response.json({ collections });
} 