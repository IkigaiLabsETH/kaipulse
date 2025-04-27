import { z } from 'zod';
import { BaseOpenSeaAPI } from './base';
import type { 
  ListingQueryParams, 
  OfferQueryParams, 
  OrdersResponse, 
  Offer
  // The following types are unused but kept for reference
  // OrderProtocolData, 
  // OpenSeaNFT,
  // OrderSide 
} from './types';
import { chainSchema, nftSchema } from './schemas';

// Validation schemas
const orderProtocolDataSchema = z.object({
  parameters: z.object({
    offerer: z.string(),
    offer: z.array(z.object({
      itemType: z.number(),
      token: z.string(),
      identifierOrCriteria: z.string(),
      startAmount: z.string(),
      endAmount: z.string()
    })),
    consideration: z.array(z.object({
      itemType: z.number(),
      token: z.string(),
      identifierOrCriteria: z.string(),
      startAmount: z.string(),
      endAmount: z.string(),
      recipient: z.string()
    })),
    startTime: z.string(),
    endTime: z.string(),
    orderType: z.number(),
    zone: z.string(),
    zoneHash: z.string(),
    salt: z.string(),
    conduitKey: z.string(),
    totalOriginalConsiderationItems: z.number(),
    counter: z.number()
  }),
  signature: z.string()
});

const accountSchema = z.object({
  address: z.string(),
  config: z.string().optional(),
  profile_img_url: z.string().optional(),
  user: z.object({
    username: z.string()
  }).optional()
});

const orderFeesSchema = z.object({
  account: accountSchema,
  basis_points: z.string()
});

const baseOrderSchema = z.object({
  protocol_address: z.string(),
  chain: chainSchema,
  order_hash: z.string(),
  created_date: z.string(),
  closing_date: z.string().nullable(),
  listing_time: z.number(),
  expiration_time: z.number(),
  protocol_data: orderProtocolDataSchema,
  current_price: z.string(),
  maker: accountSchema,
  taker: accountSchema.nullable(),
  maker_fees: z.array(orderFeesSchema),
  taker_fees: z.array(orderFeesSchema),
  side: z.enum(['ask', 'bid']),
  order_type: z.string(),
  cancelled: z.boolean(),
  finalized: z.boolean(),
  marked_invalid: z.boolean(),
  client_signature: z.string(),
  relay_id: z.string(),
  criteria_proof: z.string().nullable()
});

const offerSchema = baseOrderSchema.extend({
  nft: nftSchema.optional(),
  criteria: z.object({
    trait: z.object({
      type: z.string(),
      value: z.string().optional()
    })
  }).optional()
});

const listingQueryParamsSchema = z.object({
  chain: chainSchema.optional(),
  asset_contract_address: z.string().optional(),
  token_ids: z.array(z.string()).optional(),
  maker: z.string().optional(),
  taker: z.string().optional(),
  limit: z.number().optional(),
  next: z.string().optional(),
  protocol_address: z.string().optional(),
  order_by: z.enum(['created_date', 'eth_price']).optional(),
  order_direction: z.enum(['asc', 'desc']).optional()
}).strict();

const offerQueryParamsSchema = listingQueryParamsSchema.extend({
  trait_type: z.string().optional(),
  trait_value: z.string().optional()
}).strict();

// Add this type above the class
interface OpenSeaV2ListingsResponse {
  listings: unknown[];
  next: string | null;
}

export class OpenSeaOrdersAPI extends BaseOpenSeaAPI {
  /**
   * Gets a list of listings based on query parameters (OpenSea v2)
   */
  async getListings(params?: ListingQueryParams): Promise<OpenSeaV2ListingsResponse> {
    if (!params?.asset_contract_address) {
      throw new Error('asset_contract_address is required for v2 listings endpoint');
    }
    const { asset_contract_address, limit = 1, next } = params;
    const url = `/api/v2/listings/ethereum/${asset_contract_address}`;
    const query: Record<string, string | number> = { limit };
    if (next) query.next = next;
    return this.request<OpenSeaV2ListingsResponse>({
      method: 'GET',
      url,
      params: query,
    });
  }

  /**
   * Gets a list of offers based on query parameters
   */
  async getOffers(params?: OfferQueryParams): Promise<OrdersResponse<Offer>> {
    const validatedParams = params ? this.validateParams(params, offerQueryParamsSchema) : undefined;
    return this.request({
      method: 'GET',
      url: '/orders/ethereum/seaport/offers',
      params: validatedParams,
      validateResponse: (data) => {
        const schema = z.object({
          next: z.string().nullable(),
          previous: z.string().nullable(),
          orders: z.array(offerSchema)
        });
        return schema.parse(data) as OrdersResponse<Offer>;
      }
    });
  }
} 