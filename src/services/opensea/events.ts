import { z } from 'zod';
import { BaseOpenSeaAPI } from './base';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { /* OpenSeaEvent - unused but kept for reference, */ EventQueryParams, EventsByAccountParams, EventsByCollectionParams, EventsByNFTParams, EventsResponse } from './types';
import { chainSchema, addressSchema, tokenIdSchema } from './schemas';

// Event schemas
const eventSchema = z.object({
  event_type: z.enum(['offer', 'sale', 'transfer', 'mint', 'listing', 'cancel', 'approve']),
  event_timestamp: z.string(),
  created_date: z.string(),
  from_account: z.object({
    address: z.string(),
    config: z.string().optional(),
    profile_img_url: z.string().optional(),
    user: z.object({
      username: z.string()
    }).optional()
  }),
  to_account: z.object({
    address: z.string(),
    config: z.string().optional(),
    profile_img_url: z.string().optional(),
    user: z.object({
      username: z.string()
    }).optional()
  }).optional(),
  total_price: z.string().optional(),
  payment_token: z.object({
    symbol: z.string(),
    address: z.string(),
    decimals: z.number()
  }).optional(),
  transaction: z.object({
    hash: z.string(),
    timestamp: z.string()
  }).optional()
});

// Request validation schemas
const eventQueryParamsSchema = z.object({
  chain: chainSchema.optional(),
  event_type: z.enum(['sale', 'transfer', 'mint', 'offer', 'listing', 'cancel', 'approve']).optional(),
  limit: z.number().optional(),
  next: z.string().optional(),
  occurred_before: z.string().datetime().optional(),
  occurred_after: z.string().datetime().optional()
}).strict();

const eventsByAccountParamsSchema = eventQueryParamsSchema.extend({
  account_address: z.string()
}).strict();

const eventsByCollectionParamsSchema = eventQueryParamsSchema.extend({
  collection_slug: z.string()
}).strict();

const eventsByNFTParamsSchema = eventQueryParamsSchema.extend({
  chain: chainSchema,
  contract_address: addressSchema,
  token_id: tokenIdSchema
}).strict();

export class OpenSeaEventsAPI extends BaseOpenSeaAPI {
  /**
   * Gets a list of events based on query parameters.
   */
  async getEvents(params?: EventQueryParams): Promise<EventsResponse> {
    const validatedParams = params ? this.validateParams(params, eventQueryParamsSchema) : undefined;
    return this.request({
      method: 'GET',
      url: '/api/v2/events',
      params: validatedParams,
      validateResponse: (data) => {
        const schema = z.object({
          next: z.string().nullable(),
          previous: z.string().nullable(),
          events: z.array(eventSchema)
        });
        return schema.parse(data);
      }
    });
  }

  /**
   * Gets events for a specific account address.
   */
  async getEventsByAccount(params: EventsByAccountParams): Promise<EventsResponse> {
    const validatedParams = this.validateParams(params, eventsByAccountParamsSchema);
    return this.request({
      method: 'GET',
      url: `/api/v2/events/accounts/${validatedParams.account_address}`,
      params: validatedParams,
      validateResponse: (data) => {
        const schema = z.object({
          next: z.string().nullable(),
          previous: z.string().nullable(),
          events: z.array(eventSchema)
        });
        return schema.parse(data);
      }
    });
  }

  /**
   * Gets events for a specific collection.
   */
  async getEventsByCollection(params: EventsByCollectionParams): Promise<EventsResponse> {
    const validatedParams = this.validateParams(params, eventsByCollectionParamsSchema);
    return this.request({
      method: 'GET',
      url: `/api/v2/events/collection/${validatedParams.collection_slug}`,
      params: validatedParams,
      validateResponse: (data) => {
        const schema = z.object({
          next: z.string().nullable(),
          previous: z.string().nullable(),
          events: z.array(eventSchema)
        });
        return schema.parse(data);
      }
    });
  }

  /**
   * Gets events for a specific NFT.
   */
  async getEventsByNFT(params: EventsByNFTParams): Promise<EventsResponse> {
    const validatedParams = this.validateParams(params, eventsByNFTParamsSchema);
    return this.request({
      method: 'GET',
      url: `/api/v2/chain/${validatedParams.chain}/contract/${validatedParams.contract_address}/nfts/${validatedParams.token_id}/events`,
      params: validatedParams,
      validateResponse: (data) => {
        const schema = z.object({
          next: z.string().nullable(),
          previous: z.string().nullable(),
          events: z.array(eventSchema)
        });
        return schema.parse(data);
      }
    });
  }
} 