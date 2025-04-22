import { z } from 'zod';
import { BaseOpenSeaAPI } from './base';
import { nftSchema, nftResponseSchema, nftRaritySchema, collectionNFTSchema, collectionNFTsResponseSchema } from './schemas';
import type { NFT, NFTRarity } from '@/types/opensea';
import { chainSchema, addressSchema, tokenIdSchema } from './schemas';
import { logger } from '@/lib/logger';
import { getContractToCollectionMapping, setContractToCollectionMapping } from './cache';

export class OpenSeaNFTAPI extends BaseOpenSeaAPI {
  private mapRarity(rarity: z.infer<typeof nftRaritySchema>): NFTRarity {
    return {
      rank: rarity.rank,
      score: rarity.score,
      strategy_version: rarity.strategy_version,
      strategy_key: rarity.strategy_key,
      calculated_at: rarity.calculated_at,
      max_rank: rarity.max_rank,
      total_supply: rarity.total_supply
    };
  }

  private mapCollectionNFTResponse(nft: z.infer<typeof collectionNFTSchema>): NFT {
    return {
      identifier: nft.identifier,
      token_id: nft.token_id,
      contract: nft.contract,
      contract_address: nft.contract, // For collection NFTs, contract is the same as contract_address
      chain: 'ethereum', // Collection NFTs are always from ethereum
      collection: nft.collection,
      name: nft.name,
      description: nft.description,
      image_url: nft.image_url,
      external_url: nft.external_url,
      animation_url: nft.animation_url,
      token_standard: nft.token_standard,
      metadata_url: nft.metadata_url,
      background_color: nft.background_color,
      traits: nft.traits
    };
  }

  private mapNFTResponse(nft: z.infer<typeof nftSchema>): NFT {
    return {
      identifier: nft.identifier,
      token_id: nft.token_id,
      contract: nft.contract,
      contract_address: nft.contract_address,
      chain: nft.chain,
      collection: nft.collection,
      name: nft.name,
      description: nft.description,
      image_url: nft.image_url,
      external_url: nft.external_url,
      animation_url: nft.animation_url,
      token_standard: nft.token_standard,
      metadata_url: nft.metadata_url,
      background_color: nft.background_color,
      traits: nft.traits,
      rarity: nft.rarity ? this.mapRarity(nft.rarity) : undefined
    };
  }

  /**
   * Gets a single NFT by contract address and token ID
   */
  async getNFT(params: {
    chain?: string;
    address: string;
    tokenId: string;
  }): Promise<NFT> {
    const validatedParams = this.validateParams(params, z.object({
      chain: chainSchema.optional().default('ethereum'),
      address: addressSchema,
      tokenId: tokenIdSchema
    }));

    const data = await this.request({
      method: 'GET',
      url: `/api/v2/chain/${validatedParams.chain}/contract/${validatedParams.address}/nfts/${validatedParams.tokenId}`,
      validateResponse: (data) => nftResponseSchema.parse(data).nft
    });

    // Fetch additional NFT data like current price, offers, etc.
    const priceData = await this.request({
      method: 'GET',
      url: `/api/v2/chain/${validatedParams.chain}/contract/${validatedParams.address}/nfts/${validatedParams.tokenId}/listings`,
      validateResponse: (data) => z.object({
        listings: z.array(z.object({
          price: z.object({
            current: z.object({
              value: z.number()
            })
          })
        }))
      }).parse(data)
    });

    return {
      ...this.mapNFTResponse(data),
      listings: priceData.listings
    };
  }

  /**
   * Gets NFTs by collection with pagination
   */
  async getNFTsByCollection(params: {
    collection_slug: string;
    limit?: number;
    next?: string;
    available_for_sale?: boolean;
  }): Promise<{
    nfts: NFT[];
    next: string | null;
  }> {
    const validatedParams = this.validateParams(params, z.object({
      collection_slug: z.string(),
      limit: z.number().optional().default(20),
      next: z.string().optional(),
      available_for_sale: z.boolean().optional()
    }));

    try {
      const rawResponse = await this.request({
        method: 'GET',
        url: `/api/v2/collection/${validatedParams.collection_slug}/nfts`,
        params: validatedParams,
        validateResponse: (data: any) => {
          // Log the raw response to help debug
          logger.info('OpenSea raw response:', { data: JSON.stringify(data).substring(0, 500) });
          
          // More lenient validation to handle unexpected response formats
          if (!data || !data.nfts) {
            logger.error('Invalid response from OpenSea API - missing nfts array', { data });
            return { nfts: [], next: null };
          }
          
          try {
            return collectionNFTsResponseSchema.parse(data);
          } catch (error) {
            logger.error('Failed to parse OpenSea response:', { error, data });
            return { 
              nfts: Array.isArray(data.nfts) ? data.nfts : [], 
              next: data.next || null 
            };
          }
        }
      });
      
      return {
        next: rawResponse.next,
        nfts: Array.isArray(rawResponse.nfts) 
          ? rawResponse.nfts.map(nft => this.mapCollectionNFTResponse(nft))
          : []
      };
    } catch (error) {
      logger.error('Error in getNFTsByCollection:', {
        error: error instanceof Error ? error.message : 'Unknown error',
        collection_slug: validatedParams.collection_slug
      });
      
      // Return empty result instead of throwing to prevent UI from breaking
      return { nfts: [], next: null };
    }
  }

  /**
   * Gets NFTs owned by an address
   */
  async getNFTsByOwner(params: {
    owner: string;
    chain?: string;
    limit?: number;
    next?: string;
  }): Promise<{
    nfts: NFT[];
    next: string | null;
  }> {
    const validatedParams = this.validateParams(params, z.object({
      owner: addressSchema,
      chain: chainSchema.optional().default('ethereum'),
      limit: z.number().optional().default(20),
      next: z.string().optional()
    }));

    const response = await this.request({
      method: 'GET',
      url: `/api/v2/chain/${validatedParams.chain}/account/${validatedParams.owner}/nfts`,
      params: {
        limit: validatedParams.limit,
        next: validatedParams.next
      },
      validateResponse: (data) => {
        const schema = z.object({
          next: z.string().nullable(),
          nfts: z.array(nftSchema)
        });
        return schema.parse(data);
      }
    });

    return {
      next: response.next,
      nfts: response.nfts.map(nft => this.mapNFTResponse(nft))
    };
  }

  /**
   * Gets NFTs by contract address with pagination
   */
  async getNFTsByContract(params: {
    contractAddress: string;
    chain?: string;
    limit?: number;
    next?: string;
  }): Promise<{
    nfts: NFT[];
    next: string | null;
  }> {
    try {
      const validatedParams = this.validateParams(params, z.object({
        contractAddress: addressSchema,
        chain: chainSchema.optional().default('ethereum'),
        limit: z.number().optional().default(50),
        next: z.string().optional()
      }));

      // Get collection slug from shared cache
      const cachedSlug = getContractToCollectionMapping(
        validatedParams.chain, 
        validatedParams.contractAddress
      );

      let collectionSlug: string;
      
      if (cachedSlug) {
        logger.info(`Using cached collection slug for contract: ${validatedParams.contractAddress}`);
        collectionSlug = cachedSlug;
      } else {
        // Get contract info to retrieve the collection slug
        const contractData = await this.request({
          method: 'GET',
          url: `/api/v2/chain/${validatedParams.chain}/contract/${validatedParams.contractAddress}`,
          validateResponse: (data) => {
            const schema = z.object({
              collection: z.string()
            });
            return schema.parse(data);
          }
        });

        collectionSlug = contractData.collection;
        
        // Save to shared cache
        setContractToCollectionMapping(
          validatedParams.chain,
          validatedParams.contractAddress,
          collectionSlug
        );
      }

      // Then use the collection slug to get the NFTs
      return this.getNFTsByCollection({
        collection_slug: collectionSlug,
        limit: validatedParams.limit,
        next: validatedParams.next
      });
    } catch (error) {
      logger.error('Failed to fetch NFTs by contract:', {
        error: error instanceof Error ? error.message : 'Unknown error',
        params
      });
      throw error;
    }
  }
} 