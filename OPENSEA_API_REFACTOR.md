# OpenSea API Integration Refactor

Making the OpenSea API integration production-ready to serve our NFT pages efficiently and reliably.

## Completed Tasks

- [x] Initial API route setup with basic endpoints
- [x] Basic type definitions for OpenSea entities
- [x] Basic error handling implementation
- [x] Basic logging setup
- [x] Initial validation schemas with Zod
- [x] Basic caching implementation
- [x] Rate limiting implementation
- [x] Create sleep utility function for retry delays
- [x] Install Zod dependency
- [x] Create new API client with improved architecture
  - [x] Add request/response interceptors
  - [x] Add retry mechanism with exponential backoff
  - [x] Add response validation with Zod
  - [x] Improve error handling with custom error class
  - [x] Add comprehensive logging
  - [x] Add proper Chain type validation
  - [x] Complete response validation schemas
  - [x] Add type transformations for Chain enum
  - [x] Add all required API methods:
    - [x] getCollection
    - [x] getCollections
    - [x] getNFT
    - [x] getNFTsByCollection
    - [x] getNFTsByContract
    - [x] getNFTEvents
    - [x] getBestListing
    - [x] getBestOffer
    - [x] getCollectionStats
    - [x] getCollectionTraits
    - [x] getAccount
    - [x] getNFTsByOwner
    - [x] searchCollections

## In Progress Tasks

- [ ] Complete OpenSea API client implementation (`api.ts`)
  - [ ] Add request validation
  - [ ] Add proper JSDoc documentation
  - [ ] Add unit tests

- [ ] Enhance API route (`route.ts`)
  - [ ] Add request validation middleware
  - [ ] Improve error handling with specific error types
  - [ ] Add response validation
  - [ ] Implement proper HTTP status codes
  - [ ] Add request tracing
  - [ ] Add metrics collection

- [ ] Optimize Types (`types.ts`)
  - [ ] Split types into logical groups
  - [ ] Add proper JSDoc documentation
  - [ ] Add validation schemas
  - [ ] Remove duplicate types
  - [ ] Add proper type guards

## Future Tasks

- [ ] Add comprehensive test suite
  - [ ] Unit tests for API client
  - [ ] Integration tests for API routes
  - [ ] Type testing
  - [ ] Mock OpenSea API responses

- [ ] Add performance optimizations
  - [ ] Implement stale-while-revalidate caching
  - [ ] Add Redis caching layer
  - [ ] Implement request batching
  - [ ] Add response compression

- [ ] Improve monitoring and observability
  - [ ] Add detailed logging
  - [ ] Implement error tracking
  - [ ] Add performance monitoring
  - [ ] Set up alerts

## Implementation Plan

### API Client Architecture

1. Core Client Features:
   - ✅ Automatic retries with exponential backoff
   - ✅ Request/response interceptors
   - ✅ Response validation
   - ✅ Error normalization
   - ✅ Type-safe methods
   - ✅ Comprehensive logging
   - ✅ Chain type validation
   - ✅ Response schema validation
   - ✅ Complete API method coverage

2. Caching Strategy:
   - In-memory cache for high-frequency requests
   - Redis for distributed caching
   - Stale-while-revalidate pattern
   - Cache invalidation rules

3. Error Handling:
   - ✅ Custom error classes
   - ✅ Error normalization
   - ✅ Retry strategies
   - Fallback mechanisms

### Relevant Files

- `src/services/opensea/api.ts` - OpenSea API client implementation
  - ✅ Handles all direct communication with OpenSea
  - ✅ Implements retry logic and error handling
  - ✅ Manages request/response lifecycle
  - ✅ Implements response validation
  - ✅ Handles type transformations
  - ✅ Implements all required API methods

- `src/services/opensea/types.ts` - Type definitions
  - OpenSea entity types
  - Request/response types
  - Validation schemas
  - Type guards

- `src/app/api/opensea/route.ts` - Next.js API route
  - Request handling and validation
  - Caching layer
  - Error handling
  - Rate limiting

- `src/lib/cache.ts` - Caching implementation
  - Cache interface
  - Memory cache
  - Redis integration

- `src/lib/rate-limit.ts` - Rate limiting implementation
  - Request throttling
  - Token bucket algorithm
  - Redis-based distributed rate limiting

### Dependencies

```json
{
  "dependencies": {
    "zod": "✅ For request/response validation",
    "ioredis": "For Redis caching and rate limiting",
    "axios": "✅ For HTTP requests with interceptors",
    "winston": "✅ For logging",
    "@sentry/nextjs": "For error tracking"
  }
}
```

## API Reference

### Official Documentation
- Base URL (Mainnet): https://api.opensea.io
- Base URL (Testnet): https://testnets-api.opensea.io
- API Version: v2
- Documentation: [OpenSea API Documentation](https://docs.opensea.io/reference)

### Available Endpoints

#### Collections

1. `GET /api/v2/collections/{collection_slug}`
   - Description: Get a single collection's metadata and details
   - Parameters: 
     - `collection_slug` (path, required): The collection slug (e.g., "doodles-official")
   - Response: Collection object with metadata, fees, payment tokens, and contracts
   - Implementation Status: ✅ Implemented in `getCollection()`

2. `GET /api/v2/collections`
   - Description: Get a list of OpenSea collections
   - Parameters:
     - `chain` (query, optional): Filter by chain (e.g., "ethereum")
     - `include_hidden` (query, optional): Include hidden collections
     - `limit` (query, optional): Number of results to return
     - `next` (query, optional): Cursor for pagination
     - `order_by` (query, optional): Sort field (created_date, name, sale_count, floor_price)
     - `order_direction` (query, optional): Sort direction (asc, desc)
   - Response: Paginated list of collections
   - Implementation Status: ✅ Implemented in `getCollections()`

3. `GET /api/v2/collections/{collection_slug}/stats`
   - Description: Get statistics for a collection
   - Parameters:
     - `collection_slug` (path, required): The collection slug
   - Response: Collection stats including floor price, volume, and owner counts
   - Implementation Status: ✅ Implemented in `getCollectionStats()`

4. `GET /api/v2/events/collection/{collection_slug}`
   - Description: Get events for a collection (sales, transfers, etc.)
   - Parameters:
     - `collection_slug` (path, required): The collection slug
     - `event_type` (query, optional): Filter by event type
     - `limit` (query, optional): Number of results
     - `next` (query, optional): Pagination cursor
   - Response: List of collection events
   - Implementation Status: ✅ Implemented in `getNFTEvents()`

5. `GET /api/v2/collection/{collection_slug}/nfts`
   - Description: Get NFTs in a collection
   - Parameters:
     - `collection_slug` (path, required): The collection slug
     - `limit` (query, optional): Number of results
     - `next` (query, optional): Pagination cursor
     - `include_orders` (query, optional): Include listing data
   - Response: Paginated list of NFTs
   - Implementation Status: ✅ Implemented in `getNFTsByCollection()`

#### Collection Orders & Listings

1. `GET /api/v2/orders/collections/{collection_slug}/listings`
   - Description: Get all listings for a collection
   - Parameters:
     - `collection_slug` (path, required): The collection slug
     - `limit` (query, optional): Number of results
     - `next` (query, optional): Pagination cursor
     - `order_by` (query, optional): Sort field
     - `order_direction` (query, optional): Sort direction
   - Response: List of active listings
   - Implementation Status: ✅ Implemented in `getBestListing()`

2. `GET /api/v2/orders/collections/{collection_slug}/offers`
   - Description: Get all offers for a collection
   - Parameters:
     - `collection_slug` (path, required): The collection slug
     - `limit` (query, optional): Number of results
     - `next` (query, optional): Pagination cursor
   - Response: List of active offers
   - Implementation Status: ✅ Implemented in `getBestOffer()`

3. `GET /api/v2/orders/collections/{collection_slug}/best-listings`
   - Description: Get best (lowest) listings for a collection
   - Parameters:
     - `collection_slug` (path, required): The collection slug
     - `limit` (query, optional): Number of results
     - `next` (query, optional): Pagination cursor
   - Response: List of best listings
   - Implementation Status: ✅ Implemented in `getBestListing()`

4. `GET /api/v2/orders/collections/{collection_slug}/collection-offers`
   - Description: Get collection-wide offers
   - Parameters:
     - `collection_slug` (path, required): The collection slug
     - `limit` (query, optional): Number of results
     - `next` (query, optional): Pagination cursor
   - Response: List of collection offers
   - Implementation Status: ✅ Implemented in `getBestOffer()`

#### NFTs

1. `GET /api/v2/chain/{chain}/contract/{address}/nfts/{identifier}`
   - Description: Get metadata, traits, ownership information, and rarity for a single NFT
   - Parameters:
     - `chain` (path, required): The chain identifier (e.g., "ethereum")
     - `address` (path, required): The NFT contract address
     - `identifier` (path, required): The NFT token ID
     - `include_orders` (query, optional): Include listing data
   - Response: Single NFT object with complete metadata
   - Implementation Status: ✅ Implemented in `getNFT()`

2. `GET /api/v2/chain/{chain}/account/{address}/nfts`
   - Description: Get NFTs owned by a specific account address
   - Parameters:
     - `chain` (path, required): The chain identifier
     - `address` (path, required): The owner's address
     - `collection` (query, optional): Filter by collection
     - `include_orders` (query, optional): Include listing data
     - `limit` (query, optional): Number of results
     - `next` (query, optional): Pagination cursor
   - Response: Paginated list of NFTs owned by the address
   - Implementation Status: ✅ Implemented in `getNFTsByOwner()`

3. `GET /api/v2/collection/{collection_slug}/nfts`
   - Description: Get multiple NFTs from a specific collection
   - Parameters:
     - `collection_slug` (path, required): The collection slug
     - `limit` (query, optional): Number of results
     - `next` (query, optional): Pagination cursor
     - `include_orders` (query, optional): Include listing data
     - `available_for_sale` (query, optional): Filter by sale status
   - Response: Paginated list of NFTs in the collection
   - Implementation Status: ✅ Implemented in `getNFTsByCollection()`

4. `GET /api/v2/chain/{chain}/contract/{address}/nfts`
   - Description: Get multiple NFTs from a specific contract
   - Parameters:
     - `chain` (path, required): The chain identifier
     - `address` (path, required): The contract address
     - `limit` (query, optional): Number of results
     - `next` (query, optional): Pagination cursor
     - `token_ids` (query, optional): Filter by specific token IDs
     - `include_orders` (query, optional): Include listing data
   - Response: Paginated list of NFTs in the contract
   - Implementation Status: ✅ Implemented in `getNFTsByContract()`

#### Events

1. `GET /api/v2/events`
   - Description: Get a list of events based on time range and filters
   - Parameters:
     - `chain` (query, optional): Filter by chain
     - `event_type` (query, optional): Filter by event type (sale, transfer, mint, etc.)
     - `occurred_before` (query, optional): ISO timestamp
     - `occurred_after` (query, optional): ISO timestamp
     - `limit` (query, optional): Number of results
     - `next` (query, optional): Pagination cursor
   - Response: Paginated list of events
   - Implementation Status: ✅ Implemented in `getEvents()`

2. `GET /api/v2/events/accounts/{address}`
   - Description: Get events for a specific account address
   - Parameters:
     - `address` (path, required): Account address
     - `chain` (query, optional): Filter by chain
     - `event_type` (query, optional): Filter by event type
     - `limit` (query, optional): Number of results
     - `next` (query, optional): Pagination cursor
   - Response: Paginated list of account events
   - Implementation Status: ✅ Implemented in `getEventsByAccount()`

3. `GET /api/v2/events/collection/{collection_slug}`
   - Description: Get events for a specific collection
   - Parameters:
     - `collection_slug` (path, required): Collection slug
     - `event_type` (query, optional): Filter by event type
     - `limit` (query, optional): Number of results
     - `next` (query, optional): Pagination cursor
   - Response: Paginated list of collection events
   - Implementation Status: ✅ Implemented in `getEventsByCollection()`

4. `GET /api/v2/events/chain/{chain}/contract/{address}/nfts/{identifier}`
   - Description: Get events for a specific NFT
   - Parameters:
     - `chain` (path, required): Chain identifier
     - `address` (path, required): Contract address
     - `identifier` (path, required): Token ID
     - `event_type` (query, optional): Filter by event type
     - `limit` (query, optional): Number of results
     - `next` (query, optional): Pagination cursor
   - Response: Paginated list of NFT events
   - Implementation Status: ✅ Implemented in `getEventsByNFT()`

#### Orders (Listings/Offers)

1. `GET /api/v2/listings`
   - Description: Get all active listings with optional filtering
   - Parameters:
     - `chain` (query, optional): Filter by chain
     - `asset_contract_address` (query, optional): Filter by contract
     - `token_ids` (query, optional): Filter by token IDs
     - `maker` (query, optional): Filter by maker address
     - `taker` (query, optional): Filter by taker address
     - `limit` (query, optional): Number of results
     - `next` (query, optional): Pagination cursor
   - Response: Paginated list of listings
   - Implementation Status: ✅ Implemented in `getListings()`

2. `GET /api/v2/offers`
   - Description: Get all active offers with optional filtering
   - Parameters:
     - `chain` (query, optional): Filter by chain
     - `asset_contract_address` (query, optional): Filter by contract
     - `token_ids` (query, optional): Filter by token IDs
     - `maker` (query, optional): Filter by maker address
     - `taker` (query, optional): Filter by taker address
     - `limit` (query, optional): Number of results
     - `next` (query, optional): Pagination cursor
   - Response: Paginated list of offers
   - Implementation Status: ✅ Implemented in `getOffers()`

3. `GET /api/v2/listings/collection/{collection_slug}/all`
   - Description: Get all active listings for a collection
   - Parameters:
     - `collection_slug` (path, required): Collection slug
     - `limit` (query, optional): Number of results
     - `next` (query, optional): Pagination cursor
   - Response: Paginated list of collection listings
   - Implementation Status: ✅ Implemented in `getCollectionListings()`

4. `GET /api/v2/offers/collection/{collection_slug}/all`
   - Description: Get all active offers for a collection
   - Parameters:
     - `collection_slug` (path, required): Collection slug
     - `limit` (query, optional): Number of results
     - `next` (query, optional): Pagination cursor
   - Response: Paginated list of collection offers
   - Implementation Status: ✅ Implemented in `getCollectionOffers()`

5. `GET /api/v2/listings/collection/{collection_slug}/nfts/{identifier}/best`
   - Description: Get best (lowest) listing for an NFT
   - Parameters:
     - `collection_slug` (path, required): Collection slug
     - `identifier` (path, required): Token ID
   - Response: Single listing or null if none exists
   - Implementation Status: ✅ Implemented in `getBestNFTListing()`

6. `GET /api/v2/offers/collection/{collection_slug}/nfts/{identifier}/best`
   - Description: Get best (highest) offer for an NFT
   - Parameters:
     - `collection_slug` (path, required): Collection slug
     - `identifier` (path, required): Token ID
   - Response: Single offer or null if none exists
   - Implementation Status: ✅ Implemented in `getBestNFTOffer()`

7. `GET /api/v2/listings/collection/{collection_slug}/best`
   - Description: Get best (lowest) listings for a collection
   - Parameters:
     - `collection_slug` (path, required): Collection slug
     - `limit` (query, optional): Number of results
     - `next` (query, optional): Pagination cursor
   - Response: Paginated list of best listings
   - Implementation Status: ✅ Implemented in `getBestCollectionListings()`

### Event Types

Available event types:
- `sale`: NFT sale events
- `transfer`: NFT transfer events
- `mint`: NFT minting events
- `offer`: Offer placed on NFT
- `listing`: NFT listed for sale
- `cancel`: Order cancellation
- `approve`: NFT approval events

### Example Usage

#### Fetching Recent Sales Events

```typescript
const api = new OpenSeaAPI({ apiKey: 'your-api-key' });

// Get recent sales events
const recentSales = await api.getEvents({
  event_type: 'sale',
  occurred_after: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(), // Last 24 hours
  limit: 50
});

// Process sales
recentSales.events.forEach(event => {
  if (event.payment) {
    console.log(`Sale: ${event.nft?.nft.name}`);
    console.log(`Price: ${event.payment.quantity} ${event.payment.token.symbol}`);
    console.log(`USD Value: ${event.payment.price_usd}`);
  }
});
```

#### Tracking Collection Activity

```typescript
const api = new OpenSeaAPI({ apiKey: 'your-api-key' });

async function trackCollectionActivity(collectionSlug: string) {
  const events = await api.getEventsByCollection({
    collection_slug: collectionSlug,
    limit: 50
  });

  // Group events by type
  const eventsByType = events.events.reduce((acc, event) => {
    const type = event.event_type;
    if (!acc[type]) {
      acc[type] = [];
    }
    acc[type].push(event);
    return acc;
  }, {} as Record<string, OpenSeaEventDetails[]>);

  // Print summary
  console.log('Collection Activity Summary:');
  Object.entries(eventsByType).forEach(([type, events]) => {
    console.log(`${type}: ${events.length} events`);
  });
}
```

#### Monitoring Account Activity

```typescript
const api = new OpenSeaAPI({ apiKey: 'your-api-key' });

async function monitorAccountActivity(address: string) {
  try {
    const events = await api.getEventsByAccount({
      account_address: address,
      limit: 50
    });

    // Calculate total sales volume
    const salesVolume = events.events
      .filter(event => event.event_type === 'sale' && event.payment?.price_usd)
      .reduce((total, event) => total + parseFloat(event.payment!.price_usd!), 0);

    console.log(`Total Sales Volume (USD): $${salesVolume.toFixed(2)}`);

    // Track NFT movement
    const transfers = events.events
      .filter(event => event.event_type === 'transfer')
      .map(event => ({
        nft: event.nft?.nft.name,
        from: event.from_account.address,
        to: event.to_account?.address,
        date: new Date(event.event_timestamp)
      }));

    console.log('Recent Transfers:', transfers);
  } catch (error) {
    console.error('Failed to monitor account:', error);
  }
}
```

#### Tracking NFT History

```typescript
const api = new OpenSeaAPI({ apiKey: 'your-api-key' });

async function getNFTHistory(chain: string, contract: string, tokenId: string) {
  try {
    const events = await api.getEventsByNFT({
      chain,
      contract_address: contract,
      token_id: tokenId
    });

    // Create timeline of events
    const timeline = events.events
      .sort((a, b) => new Date(b.event_timestamp).getTime() - new Date(a.event_timestamp).getTime())
      .map(event => {
        let description = '';
        switch (event.event_type) {
          case 'sale':
            description = `Sold for ${event.payment?.quantity} ${event.payment?.token.symbol}`;
            break;
          case 'transfer':
            description = `Transferred from ${event.from_account.address} to ${event.to_account?.address}`;
            break;
          case 'mint':
            description = `Minted by ${event.from_account.address}`;
            break;
          default:
            description = event.event_type;
        }
        return {
          date: new Date(event.event_timestamp),
          type: event.event_type,
          description
        };
      });

    console.log('NFT Timeline:', timeline);
  } catch (error) {
    console.error('Failed to get NFT history:', error);
  }
}
```

#### Fetching Collection Floor Price

```typescript
const api = new OpenSeaAPI({ apiKey: 'your-api-key' });

async function getCollectionFloor(collectionSlug: string) {
  try {
    const bestListings = await api.getBestCollectionListings({
      collection_slug: collectionSlug,
      limit: 1
    });

    if (bestListings.orders.length > 0) {
      const floorListing = bestListings.orders[0];
      console.log(`Floor Price: ${floorListing.current_price} ETH`);
      console.log(`Listed by: ${floorListing.maker.address}`);
      console.log(`NFT: ${floorListing.nft.name} (#${floorListing.nft.token_id})`);
    } else {
      console.log('No active listings found');
    }
  } catch (error) {
    console.error('Failed to fetch floor price:', error);
  }
}
```

#### Monitoring NFT Offers

```typescript
const api = new OpenSeaAPI({ apiKey: 'your-api-key' });

async function monitorNFTOffers(collectionSlug: string, tokenId: string) {
  try {
    // Get best offer
    const bestOffer = await api.getBestNFTOffer({
      collection_slug: collectionSlug,
      token_id: tokenId
    });

    if (bestOffer) {
      console.log('Best Offer:', {
        price: bestOffer.current_price,
        from: bestOffer.maker.address,
        expires: new Date(bestOffer.expiration_time * 1000).toLocaleString()
      });
    }

    // Get all offers
    const allOffers = await api.getCollectionOffers({
      collection_slug: collectionSlug,
      limit: 50
    });

    // Group offers by price
    const offersByPrice = allOffers.orders.reduce((acc, offer) => {
      const price = parseFloat(offer.current_price);
      if (!acc[price]) {
        acc[price] = [];
      }
      acc[price].push(offer);
      return acc;
    }, {} as Record<number, typeof allOffers.orders>);

    // Print offer distribution
    Object.entries(offersByPrice)
      .sort(([a], [b]) => parseFloat(b) - parseFloat(a))
      .forEach(([price, offers]) => {
        console.log(`${offers.length} offers at ${price} ETH`);
      });
  } catch (error) {
    console.error('Failed to monitor offers:', error);
  }
}
```

#### Finding Best Deals

```typescript
const api = new OpenSeaAPI({ apiKey: 'your-api-key' });

async function findBestDeals(collectionSlug: string) {
  try {
    // Get floor price
    const bestListings = await api.getBestCollectionListings({
      collection_slug: collectionSlug,
      limit: 1
    });

    if (bestListings.orders.length === 0) {
      console.log('No listings found');
      return;
    }

    const floorPrice = parseFloat(bestListings.orders[0].current_price);

    // Get all listings
    const allListings = await api.getCollectionListings({
      collection_slug: collectionSlug,
      limit: 50
    });

    // Find listings below floor price
    const deals = allListings.orders
      .map(listing => ({
        ...listing,
        priceETH: parseFloat(listing.current_price),
        discountPercent: (1 - parseFloat(listing.current_price) / floorPrice) * 100
      }))
      .filter(listing => listing.priceETH < floorPrice)
      .sort((a, b) => b.discountPercent - a.discountPercent);

    // Print deals
    deals.forEach(deal => {
      console.log(`Deal: ${deal.nft.name} (#${deal.nft.token_id})`);
      console.log(`Price: ${deal.priceETH} ETH (${deal.discountPercent.toFixed(2)}% below floor)`);
      console.log(`Traits: ${deal.nft.traits.map(t => `${t.trait_type}: ${t.value}`).join(', ')}`);
      console.log('---');
    });
  } catch (error) {
    console.error('Failed to find deals:', error);
  }
}
```

### Response Types

#### NFT Object Structure
```typescript
{
  identifier: string;          // Unique identifier
  token_id: string;           // Token ID
  contract: string;           // Contract address
  chain: Chain;               // Blockchain chain
  collection: string;         // Collection slug
  name: string;               // NFT name
  description?: string;       // NFT description
  image_url: string;          // Image URL
  animation_url?: string;     // Animation URL if applicable
  traits: Array<{             // NFT traits/attributes
    trait_type: string;
    value: string | number;
    trait_count?: number;
  }>;
  rarity?: {                  // Rarity information
    rank: number;
    score: number;
    total_supply: number;
  };
  lastSale?: {               // Last sale information
    price: string;
    payment_token: string;
  };
  owners?: string[];         // Current owners
  creator?: string;          // Creator address
}
```

### Error Handling

NFT-specific error codes:
- `404`: NFT not found
- `400`: Invalid parameters
- `429`: Rate limit exceeded
- `500`: Server error

Error response format:
```typescript
{
  success: false,
  status: "error",
  error: {
    code: number,
    message: string,
    details?: unknown
  }
}
```

### Best Practices for NFT Endpoints

1. **Batch Operations**
   - Use `token_ids` parameter for multiple NFTs
   - Implement pagination for large collections
   - Cache NFT metadata when possible

2. **Performance Optimization**
   - Request only needed NFTs
   - Use appropriate limit values
   - Cache static metadata

3. **Error Handling**
   - Handle missing NFTs gracefully
   - Implement retry logic for rate limits
   - Validate contract addresses

4. **Data Consistency**
   - Verify chain IDs
   - Validate token IDs
   - Check contract addresses

### Rate Limits
- Standard Rate: 2 requests per second
- API Key Rate: 5 requests per second
- Burst Rate: Up to 10 requests in short bursts
- Error Response: 429 Too Many Requests

### Authentication
- Required: API Key in `x-api-key` header
- Testnet: Separate API key required
- Production: Contact OpenSea for production API key

### Best Practices
1. Implement exponential backoff for rate limits
2. Cache responses when possible
3. Use pagination for large result sets
4. Handle all error cases gracefully
5. Validate response data using schemas
6. Monitor API usage and response times 

### Example Usage

#### Fetching a Single NFT

```typescript
const api = new OpenSeaAPI({ apiKey: 'your-api-key' });

try {
  const nft = await api.getNFT({
    chain: 'ethereum',
    address: '0x8a90cab2b38dba80c64b7734e58ee1db38b8992e',
    identifier: '1234',
    include_orders: true
  });
  
  console.log('NFT Details:', {
    name: nft.name,
    description: nft.description,
    image: nft.image_url,
    traits: nft.traits
  });
} catch (error) {
  if (error instanceof OpenSeaAPIError) {
    console.error('OpenSea API Error:', error.message, error.statusCode);
  } else {
    console.error('Unexpected error:', error);
  }
}
```

#### Fetching NFTs by Collection

```typescript
const api = new OpenSeaAPI({ apiKey: 'your-api-key' });

async function fetchCollectionNFTs(collectionSlug: string) {
  try {
    const response = await api.getNFTsByCollection({
      collection_slug: collectionSlug,
      limit: 50,
      include_orders: true
    });

    console.log(`Found ${response.results.length} NFTs`);
    console.log('Next page cursor:', response.next);

    // Process each NFT
    response.results.forEach(nft => {
      console.log(`- ${nft.name}: ${nft.image_url}`);
    });

    // Fetch next page if available
    if (response.next) {
      const nextPage = await api.getNFTsByCollection({
        collection_slug: collectionSlug,
        limit: 50,
        next: response.next
      });
      // Process next page...
    }
  } catch (error) {
    console.error('Failed to fetch collection NFTs:', error);
  }
}
```

#### Fetching NFTs by Owner

```typescript
const api = new OpenSeaAPI({ apiKey: 'your-api-key' });

async function fetchUserNFTs(ownerAddress: string) {
  try {
    const response = await api.getNFTsByOwner({
      chain: 'ethereum',
      address: ownerAddress,
      limit: 50,
      include_orders: true
    });

    // Group NFTs by collection
    const nftsByCollection = response.results.reduce((acc, nft) => {
      const collection = nft.collection;
      if (!acc[collection]) {
        acc[collection] = [];
      }
      acc[collection].push(nft);
      return acc;
    }, {} as Record<string, OpenSeaNFT[]>);

    // Print summary
    Object.entries(nftsByCollection).forEach(([collection, nfts]) => {
      console.log(`Collection ${collection}: ${nfts.length} NFTs`);
    });
  } catch (error) {
    console.error('Failed to fetch user NFTs:', error);
  }
}
```

#### Batch Fetching NFTs by Contract

```typescript
const api = new OpenSeaAPI({ apiKey: 'your-api-key' });

async function fetchNFTsByContract(contractAddress: string, tokenIds: string[]) {
  try {
    const response = await api.getNFTsByContract({
      chain: 'ethereum',
      address: contractAddress,
      token_ids: tokenIds,
      include_orders: true
    });

    // Process NFTs with their current prices
    response.results.forEach(nft => {
      const price = nft.price?.currentPrice;
      const token = nft.price?.paymentToken;
      
      console.log(`NFT ${nft.name}:`);
      console.log(`- Token ID: ${nft.token_id}`);
      if (price && token) {
        console.log(`- Price: ${price} ${token.symbol}`);
      }
      console.log(`- Traits: ${nft.traits.length}`);
    });
  } catch (error) {
    console.error('Failed to fetch NFTs by contract:', error);
  }
}
```

### Error Handling Best Practices

1. **API Errors**
```typescript
try {
  const nft = await api.getNFT(params);
} catch (error) {
  if (error instanceof OpenSeaAPIError) {
    switch (error.statusCode) {
      case 400:
        console.error('Invalid parameters:', error.message);
        break;
      case 404:
        console.error('NFT not found');
        break;
      case 429:
        console.error('Rate limit exceeded, retry after cooldown');
        break;
      default:
        console.error('API error:', error.message);
    }
  } else {
    console.error('Unexpected error:', error);
  }
}
```

2. **Validation**
```typescript
import { isValidAddress, isValidTokenId } from '@/lib/web3';

function validateNFTParams(params: NFTRequestParams) {
  if (!isValidAddress(params.address)) {
    throw new Error('Invalid contract address');
  }
  if (!isValidTokenId(params.identifier)) {
    throw new Error('Invalid token ID');
  }
  if (!isValidChainId(params.chain)) {
    throw new Error('Invalid chain ID');
  }
}
```

3. **Rate Limiting**
```typescript
import { sleep } from '@/lib/utils';

async function fetchWithRetry(fn: () => Promise<any>, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fn();
    } catch (error) {
      if (error instanceof OpenSeaAPIError && error.statusCode === 429) {
        const delay = Math.pow(2, i) * 1000; // Exponential backoff
        await sleep(delay);
        continue;
      }
      throw error;
    }
  }
  throw new Error('Max retries exceeded');
}
```

### Performance Tips

1. **Use Caching**
```typescript
// Check cache before API call
const cached = nftCache.get(chain, contract, tokenId);
if (cached) {
  return cached;
}

// Make API call and cache result
const nft = await api.getNFT(params);
nftCache.set(chain, contract, tokenId, nft);
```

2. **Batch Requests**
```typescript
// Instead of multiple single NFT requests
const tokenIds = ['1', '2', '3', '4', '5'];
const nfts = await api.getNFTsByContract({
  chain: 'ethereum',
  address: contractAddress,
  token_ids: tokenIds
});
```

3. **Pagination**
```typescript
async function fetchAllCollectionNFTs(collectionSlug: string) {
  let hasMore = true;
  let cursor = null;
  const allNFTs = [];

  while (hasMore) {
    const response = await api.getNFTsByCollection({
      collection_slug: collectionSlug,
      limit: 50,
      next: cursor
    });

    allNFTs.push(...response.results);
    cursor = response.next;
    hasMore = !!cursor;

    // Optional: Add delay to respect rate limits
    if (hasMore) {
      await sleep(200);
    }
  }

  return allNFTs;
}
``` 