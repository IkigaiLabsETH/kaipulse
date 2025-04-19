/* eslint-disable no-console, no-restricted-globals */
import { OpenSeaCollection, OpenSeaNFT, OpenSeaCollectionStats, PaginatedResponse, OpenSeaEvent } from './types';
import { logger } from '@/lib/logger';

const OPENSEA_API_URL = 'https://api.opensea.io/api/v2';
const DEFAULT_LIMIT = 50;

export class OpenSeaAPIError extends Error {
  constructor(
    message: string,
    public status?: number,
    public code?: string
  ) {
    super(message);
    this.name = 'OpenSeaAPIError';
  }
}

export class OpenSeaAPI {
  private apiKey: string | undefined;
  private rateLimitDelay: number = 500; // Increase to 500ms between requests
  private lastRequestTime: number = 0;
  private maxRetries: number = 3;
  private retryDelay: number = 1000; // Start with 1 second delay

  // Known contract addresses and their slugs
  private static KNOWN_CONTRACTS: Record<string, string> = {
    'boredapeyachtclub': '0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D',
    'doodles-official': '0x8a90CAb2b38dba80c64b7734e58Ee1dB38B8992e',
    'cryptopunks': '0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB',
    'mutant-ape-yacht-club': '0x60E4d786628Fea6478F785A6d7e704777c86a7c6',
    'pudgypenguins': '0xBd3531dA5CF5857e7CfAA92426877b022e612cf8',
    'chromie-squiggle-by-snowfro': '0x059EDD72Cd353dF5106D2B9cC5ab83a52287aC3a'
  };

  // Reverse mapping for contract to slug
  private static KNOWN_SLUGS: Record<string, string> = Object.entries(OpenSeaAPI.KNOWN_CONTRACTS)
    .reduce((acc, [slug, contract]) => ({
      ...acc,
      [contract.toLowerCase()]: slug
    }), {});

  constructor(apiKey: string | undefined = typeof window !== 'undefined' ? process.env.NEXT_PUBLIC_OPENSEA_API_KEY : process.env.OPENSEA_API_KEY) {
    this.apiKey = apiKey;
    
    if (!apiKey) {
      logger.warn('OpenSea API key not provided. API calls will be restricted.');
    }
  }

  // Helper to determine if a string is a contract address
  private isContractAddress(value: string): boolean {
    return /^0x[a-fA-F0-9]{40}$/i.test(value);
  }

  // Helper to get slug from contract or vice versa
  private getSlugOrContract(value: string): { slug?: string; contract?: string } {
    const isContract = this.isContractAddress(value);
    if (isContract) {
      const normalizedContract = value.toLowerCase();
      return {
        contract: normalizedContract,
        slug: OpenSeaAPI.KNOWN_SLUGS[normalizedContract]
      };
    } else {
      return {
        slug: value,
        contract: OpenSeaAPI.KNOWN_CONTRACTS[value]
      };
    }
  }

  private async sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  private async enforceRateLimit(): Promise<void> {
    const now = Date.now();
    const timeSinceLastRequest = now - this.lastRequestTime;
    
    if (timeSinceLastRequest < this.rateLimitDelay) {
      await this.sleep(this.rateLimitDelay - timeSinceLastRequest);
    }
    
    this.lastRequestTime = Date.now();
  }

  private async fetchWithRetry<T>(
    endpoint: string,
    params: Record<string, string> = {},
    retryCount: number = 0
  ): Promise<T> {
    if (!this.apiKey) {
      throw new OpenSeaAPIError('API key is required for OpenSea API calls');
    }

    await this.enforceRateLimit();

    const url = new URL(`${OPENSEA_API_URL}${endpoint}`);
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined) {
        url.searchParams.append(key, value);
      }
    });

    try {
      const response = await fetch(url.toString(), {
        headers: {
          'X-API-KEY': this.apiKey,
          'Accept': 'application/json',
        },
      });

      if (!response.ok) {
        const status = response.status;
        let errorMessage = `OpenSea API error: ${response.statusText}`;
        let errorCode: string | undefined;
        
        try {
          const errorData = await response.json();
          console.error('OpenSea API error response:', errorData);
          errorMessage = errorData.message || errorMessage;
          errorCode = errorData.code;
        } catch {
          console.error('Failed to parse error response');
        }

        // Handle rate limiting with retries
        if ((status === 429 || errorMessage.includes('Too Many Requests')) && retryCount < this.maxRetries) {
          console.log(`Rate limited, retrying in ${this.retryDelay}ms... (attempt ${retryCount + 1}/${this.maxRetries})`);
          await this.sleep(this.retryDelay);
          // Exponential backoff
          this.retryDelay *= 2;
          return this.fetchWithRetry<T>(endpoint, params, retryCount + 1);
        }

        throw new OpenSeaAPIError(errorMessage, status, errorCode);
      }

      const data = await response.json();
      
      // Reset retry delay on successful request
      this.retryDelay = 1000;
      
      if (data === null || typeof data !== 'object') {
        throw new OpenSeaAPIError('Invalid response format: not an object');
      }

      return data as T;
    } catch (error) {
      if (error instanceof OpenSeaAPIError) {
        throw error;
      }
      
      console.error('OpenSea API request failed:', error);
      
      // Retry on network errors
      if (retryCount < this.maxRetries) {
        console.log(`Request failed, retrying in ${this.retryDelay}ms... (attempt ${retryCount + 1}/${this.maxRetries})`);
        await this.sleep(this.retryDelay);
        // Exponential backoff
        this.retryDelay *= 2;
        return this.fetchWithRetry<T>(endpoint, params, retryCount + 1);
      }

      throw new OpenSeaAPIError(
        'Failed to fetch from OpenSea API' + (error instanceof Error ? ': ' + error.message : '')
      );
    }
  }

  async getCollection(collectionSlug: string): Promise<OpenSeaCollection> {
    return this.fetchWithRetry<OpenSeaCollection>(`/collections/${collectionSlug}`);
  }

  async getCollections(params: {
    chain?: string;
    include_hidden?: boolean;
    limit?: number;
    next?: string;
    query?: string;
  } = {}): Promise<PaginatedResponse<OpenSeaCollection>> {
    const queryParams: Record<string, string> = {};
    
    if (params.chain) queryParams.chain = params.chain;
    if (params.include_hidden !== undefined) queryParams.include_hidden = params.include_hidden.toString();
    if (params.limit !== undefined) queryParams.limit = params.limit.toString();
    if (params.next) queryParams.next = params.next;
    if (params.query) queryParams.query = params.query;

    return this.fetchWithRetry<PaginatedResponse<OpenSeaCollection>>('/collections', queryParams);
  }

  async getCollectionNFTs(slugOrContract: string, params: {
    limit?: number;
    next?: string;
    available_for_sale?: boolean;
    order_by?: 'sale_date' | 'sale_count' | 'sale_price' | 'total_price';
    order_direction?: 'asc' | 'desc';
  } = {}): Promise<PaginatedResponse<OpenSeaNFT>> {
    // Check if the input is a contract address
    const isContract = this.isContractAddress(slugOrContract);
    let contractAddress = slugOrContract;

    // If it's not a contract address, try to get it from known collections
    if (!isContract) {
      const KNOWN_CONTRACTS: Record<string, string> = {
        'boredapeyachtclub': '0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D',
        'doodles-official': '0x8a90CAb2b38dba80c64b7734e58Ee1dB38B8992e',
        'azuki': '0xED5AF388653567Af2F388E6224dC7C4b3241C544'
      };

      contractAddress = KNOWN_CONTRACTS[slugOrContract];
      if (!contractAddress) {
        throw new OpenSeaAPIError(`Collection ${slugOrContract} not found in known contracts`);
      }
    }

    // Normalize the contract address to lowercase for consistency
    contractAddress = contractAddress.toLowerCase();
    
    const queryParams: Record<string, string> = {};
    if (params.limit !== undefined) queryParams.limit = params.limit.toString();
    if (params.next) queryParams.next = params.next;
    if (params.available_for_sale !== undefined) queryParams.available_for_sale = params.available_for_sale.toString();
    if (params.order_by) queryParams.order_by = params.order_by;
    if (params.order_direction) queryParams.order_direction = params.order_direction;

    try {
      const response = await this.fetchWithRetry<{ nfts: OpenSeaNFT[] }>(
        `/chain/ethereum/contract/${contractAddress}/nfts`,
        queryParams
      );
      
      // Transform the response to match our PaginatedResponse format
      return {
        next: null,
        previous: null,
        results: response.nfts || []
      };
    } catch (error) {
      console.error('Error in getCollectionNFTs:', error);
      throw error;
    }
  }

  async getNFT(slugOrContract: string, tokenId: string): Promise<OpenSeaNFT> {
    console.log('Fetching NFT:', { slugOrContract, tokenId });

    // Check if the input is a contract address
    const isContract = this.isContractAddress(slugOrContract);
    let contractAddress = slugOrContract;

    // If it's not a contract address, try to get it from known collections
    if (!isContract) {
      const KNOWN_CONTRACTS: Record<string, string> = {
        'boredapeyachtclub': '0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D',
        'doodles-official': '0x8a90CAb2b38dba80c64b7734e58Ee1dB38B8992e',
        'azuki': '0xED5AF388653567Af2F388E6224dC7C4b3241C544'
      };

      contractAddress = KNOWN_CONTRACTS[slugOrContract];
      if (!contractAddress) {
        throw new OpenSeaAPIError(`Collection ${slugOrContract} not found in known contracts`);
      }
    }

    // Normalize the contract address to lowercase for consistency
    contractAddress = contractAddress.toLowerCase();

    // Fetch the NFT using the contract address
    return this.fetchWithRetry<OpenSeaNFT>(`/chain/ethereum/contract/${contractAddress}/nfts/${tokenId}`);
  }

  async getCollectionStats(collectionSlug: string): Promise<OpenSeaCollectionStats> {
    return this.fetchWithRetry<OpenSeaCollectionStats>(`/collections/${collectionSlug}/stats`);
  }

  async getCollectionEvents(
    collectionSlug: string,
    params: {
      event_type?: 'listing' | 'sale' | 'offer' | 'transfer' | 'mint' | 'cancel';
      limit?: number;
      next?: string;
      occurred_after?: string;
      occurred_before?: string;
    } = {}
  ): Promise<PaginatedResponse<OpenSeaEvent>> {
    return this.fetchWithRetry<PaginatedResponse<OpenSeaEvent>>(`/events/collection/${collectionSlug}`, {
      ...params,
      limit: params.limit?.toString() || DEFAULT_LIMIT.toString(),
    } as Record<string, string>);
  }

  async getNFTEvents(
    collectionSlug: string,
    tokenId: string,
    params: {
      event_type?: 'listing' | 'sale' | 'offer' | 'transfer' | 'mint' | 'cancel';
      limit?: number;
      next?: string;
      occurred_after?: string;
      occurred_before?: string;
    } = {}
  ): Promise<PaginatedResponse<OpenSeaEvent>> {
    return this.fetchWithRetry<PaginatedResponse<OpenSeaEvent>>(
      `/events/collection/${collectionSlug}/nfts/${tokenId}`,
      {
        ...params,
        limit: params.limit?.toString() || DEFAULT_LIMIT.toString(),
      } as Record<string, string>
    );
  }

  async getCollectionByContract(contractAddress: string): Promise<OpenSeaCollection> {
    return this.fetchWithRetry<OpenSeaCollection>(`/chain/ethereum/contract/${contractAddress}`);
  }

  async getCollectionStatsByContract(contractAddress: string): Promise<OpenSeaCollectionStats> {
    return this.fetchWithRetry<OpenSeaCollectionStats>(`/chain/ethereum/contract/${contractAddress}/stats`);
  }
} 