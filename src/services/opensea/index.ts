import { OpenSeaAPI } from './api';
import { OpenSeaAPIError } from './base';
import { logger } from '@/lib/logger';

const OPENSEA_API_KEY = process.env.OPENSEA_API_KEY;

if (!OPENSEA_API_KEY) {
  logger.warn('OpenSea API key is not configured. Please set OPENSEA_API_KEY in your environment variables.');
}

export const openSeaService = new OpenSeaAPI(OPENSEA_API_KEY || 'dummy-key');
export { OpenSeaAPI, OpenSeaAPIError };
export type { Collection, NFT } from '@/types/opensea';