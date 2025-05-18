import { NFT } from '@/lib/nft';

export interface NFTGalleryProps {
  nfts: NFT[];
}

export function NFTGallery(props: NFTGalleryProps): JSX.Element; 