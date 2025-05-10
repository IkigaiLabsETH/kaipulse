# OPENSEA API Integration Guide

## Table of Contents
1. [Overview](#overview)
2. [Setup & Configuration](#setup--configuration)
3. [Features](#features)
4. [API Reference](#api-reference)
5. [Implementation Details](#implementation-details)
6. [Error Handling & Fixes](#error-handling--fixes)
7. [Caching & Performance](#caching--performance)
8. [Testing & Monitoring](#testing--monitoring)
9. [Collection Page Implementation](#collection-page-implementation)
10. [Potential Enhancements](#potential-enhancements)
11. [NFT Gallery & Detail Page Optimization: Best Practices & Recommendations](#nft-gallery--detail-page-optimization-best-practices--recommendations)
12. [Unified Floor NFTs Page: Refactor Plan & Task List](#unified-floor-nfts-page-refactor-plan--task-list)

---

## Overview

The OpenSea API integration enables real-time NFT data for the art collection section, supporting robust error handling, caching, and fallbacks to mock data. The integration is production-ready, with a focus on performance, reliability, and user experience.

**Key Benefits:**
- Live NFT and collection data directly from OpenSea
- Resilient to API outages (mock data fallback)
- Optimized for speed and scalability
- Designed for accessibility and SEO

**Use Cases:**
- Displaying NFT collections and individual NFTs
- Showing collection stats, activity, and offers
- Enabling NFT search, filtering, and sorting
- Powering analytics and market insights

---

## Setup & Configuration

### 1. Obtain an OpenSea API Key
- Register at the [OpenSea Developer Portal](https://docs.opensea.io/reference/api-keys).
- Create a new API key for your project.
- Keep your API key secure and do not expose it in client-side code.

### 2. Configure Environment Variables
- In your project root, create or update `.env.local`:
  ```env
  OPENSEA_API_KEY=your_actual_api_key_here
  ```
- **Note:** `OPENSEA_API_KEY` is used server-side; `NEXT_PUBLIC_OPENSEA_API_KEY` is for client-side (if needed).
- Restart your Next.js server after any changes to `.env.local`.

### 3. Additional Required Environment Variables
- For analytics, error tracking, caching, and image optimization:
  ```env
  NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id
  NEXT_PUBLIC_SENTRY_DSN=your_sentry_dsn
  REDIS_URL=your_redis_url
  IMAGE_CDN_URL=your_image_cdn_url
  ```
- These enable advanced features like monitoring, distributed caching, and CDN image delivery.

### 4. Permissions & Security
- Never commit `.env.local` to version control.
- Rotate your API key if you suspect it has been exposed.

---

## Features

### Core Functionality
- **Collection Fetching:** Retrieve metadata, stats, and images for NFT collections.
- **NFT Fetching:** Get NFT details, images, traits, and price data by collection, contract, or owner.
- **Pagination:** Efficiently load large collections with cursor-based pagination.
- **Fallbacks:** Use mock data if the API is unavailable or the key is missing.
- **Caching:** Multi-layered (in-memory, Redis, HTTP headers) to minimize API calls and speed up responses.
- **Rate Limiting:** Prevents exceeding OpenSea quotas; uses exponential backoff and retry logic.
- **Type Validation:** All API responses are validated with Zod schemas for safety.
- **Logging & Monitoring:** Errors and performance metrics are logged for debugging and analytics.

### UI/UX Enhancements
- **Loading Skeletons:** Show placeholders while data loads.
- **Error Boundaries:** User-friendly error messages and retry options.
- **Accessibility:** All images have alt text, keyboard navigation is supported.
- **SEO:** Dynamic meta tags, OpenGraph, and Twitter cards for social sharing.

### Developer Experience
- **TypeScript Support:** All services and components are fully typed.
- **Modular Architecture:** Easy to extend with new endpoints or features.
- **Testing:** Unit and integration tests for API client and routes.

---

## API Reference

### Main Endpoints
- `GET /api/collections/contract/[address]` — Fetch collection info by contract address
- `GET /api/collections/contract/[address]/nfts` — Fetch NFTs by contract address
- `GET /api/collections/[slug]/nfts` — Fetch NFTs by collection slug

**See also:** [OpenSea API Documentation](https://docs.opensea.io/reference) for all available endpoints, parameters, and response formats.

### Example Usage

#### Fetching a Single NFT
```typescript
const api = new OpenSeaAPI({ apiKey: 'your-api-key' });
const nft = await api.getNFT({
  chain: 'ethereum',
  address: '0x...',
  identifier: '1234',
  include_orders: true
});
console.log(nft.name, nft.image_url, nft.traits);
```

#### Fetching NFTs by Collection
```typescript
const nfts = await api.getNFTsByCollection({
  collection_slug: 'doodles-official',
  limit: 50,
  include_orders: true
});
nfts.results.forEach(nft => console.log(nft.name));
```

#### Pagination Example
```typescript
let cursor = null;
do {
  const res = await api.getNFTsByCollection({ collection_slug: '...', limit: 50, next: cursor });
  // process res.results
  cursor = res.next;
} while (cursor);
```

### Authentication & Rate Limits
- **API Key:** Required in `x-api-key` header for all requests.
- **Limits:** Standard: 2 req/sec, API Key: 5 req/sec, Burst: 10 reqs.
- **Handling 429s:** Use exponential backoff and retry logic. Example:
  ```typescript
  async function fetchWithRetry(fn, maxRetries = 3) {
    for (let i = 0; i < maxRetries; i++) {
      try { return await fn(); }
      catch (e) {
        if (e.statusCode === 429) await sleep(Math.pow(2, i) * 1000);
        else throw e;
      }
    }
    throw new Error('Max retries exceeded');
  }
  ```

---

## Implementation Details

### Architecture
- **API Client:** Handles all OpenSea communication, retries, and validation.
- **Caching:**
  - In-memory for fast, frequent requests within a single server instance.
  - Redis for distributed, persistent cache
  - HTTP cache headers for browser/CDN
- **Error Handling:**
  - Custom error classes for API and network errors
  - Fallback to mock data if API fails
- **Type Safety:**
  - Zod schemas for all request/response validation
  - Type guards for runtime safety
- **Logging:**
  - Winston for server logs
  - Sentry for error and performance tracking
- **Rate Limiting:**
  - Token bucket algorithm
  - Redis-based distributed rate limiting

### Relevant Files & Structure
- `src/services/opensea/api.ts` — Main API client logic
- `src/services/opensea/types.ts` — TypeScript types and Zod schemas
- `src/app/api/opensea/route.ts` — Next.js API route handler
- `src/lib/cache.ts` — Cache interface and implementations
- `src/lib/rate-limit.ts` — Rate limiting logic

### Extending the Integration
- Add new endpoints by extending the API client and route handler
- Add new validation schemas in `types.ts`
- Add new caching strategies in `cache.ts`

---

## Error Handling & Fixes

### Common Issues & Solutions

#### 1. Missing OpenSea API Key
- Ensure `.env.local` contains the correct API key values and restart the server.
- Console warning: `[WARN] OpenSea API key is not configured. Please set OPENSEA_API_KEY in your environment variables.`

#### 2. Missing Image Alt Text
- All `<Image>` components must have an `alt` attribute. Use NFT name/title or a fallback like `"NFT artwork"`.
- Example:
  ```jsx
  <img src={nft.image_url} alt={nft.name || 'NFT artwork'} />
  ```

#### 3. Ethereum Property Conflict
- If using MetaMask or similar, avoid redefining `window.ethereum`:
  ```js
  if (!window.hasOwnProperty('ethereum')) {
    // define ethereum object
  }
  ```
- Use a safe wrapper:
  ```js
  export const getEthereum = () => {
    try { return window.ethereum; } catch (e) { return null; }
  };
  ```
- Remove or update third-party scripts that conflict with wallet providers.

#### 4. API Caching & Duplicate Calls
- Multi-level caching (API route, service, HTTP headers) prevents duplicate calls.
- Use cache invalidation and revalidation strategies for up-to-date data.

#### 5. Testing & Monitoring
- After fixes, verify:
  - No API key warnings
  - Images have alt text
  - Caching is effective (check network tab for reduced API calls)
  - No ethereum property errors
- Add feature flags to enable/disable OpenSea integration during development.

#### 6. Error Boundaries & Fallbacks
- Use React error boundaries to catch and display user-friendly errors.
- Fallback to mock data if API is unavailable.

---

## Caching & Performance

### Caching Layers
- **In-memory Cache:** Fastest, for high-frequency requests within a single server instance.
- **Redis Cache:** Shared, persistent cache for distributed deployments.
- **HTTP Cache Headers:** Enable browser and CDN caching for static or infrequently changing data.

### Strategies
- **Stale-While-Revalidate:** Serve cached data while fetching fresh data in the background.
- **Batch Operations:** Use batch endpoints and pagination to minimize API calls.
- **Cache Invalidation:** Invalidate or revalidate cache on data changes or at set intervals.

### Performance Targets
- First Contentful Paint (FCP) < 1.5s
- Time to Interactive (TTI) < 3.5s
- Lighthouse score > 90
- Core Web Vitals compliance

### Example: Caching NFT Metadata
```typescript
const cached = nftCache.get(chain, contract, tokenId);
if (cached) return cached;
const nft = await api.getNFT(params);
nftCache.set(chain, contract, tokenId, nft);
```

---

## Testing & Monitoring

### Manual Testing
- Visit `/art` or collection pages in your browser.
- Use browser dev tools:
  - **Network tab:** Verify API calls, check for caching (304 responses)
  - **Console:** Look for errors or warnings
  - **Application tab:** Inspect local/session storage and cache

### Automated Testing
- Unit tests for API client and caching logic
- Integration tests for API routes
- Mock OpenSea API responses for reliability

### Monitoring
- Use Sentry for error tracking and performance monitoring
- Add analytics for page views, user interactions, and API usage
- Set up alerts for API failures or degraded performance

---

## Collection Page Implementation

### Completed
- **Data Fetching:** Server-side API calls for collection and NFT data
- **UI:** Banner, logo, name, description, stats, activity, offers
- **Loading States:** Skeletons and suspense for smooth UX
- **Error Handling:** User-friendly error boundaries and fallbacks
- **Componentization:** Modular components for header, stats, grid, activity, offers

### In Progress
- **SEO:** Dynamic meta tags, OpenGraph, Twitter cards, structured data
- **Caching:** SWR for client-side, Redis for server-side, revalidation strategies

### Future Tasks
- **Image Optimization:** Next.js Image, lazy loading, blur placeholders, CDN
- **Enhanced Error Handling:** Retry logic, graceful degradation, user-friendly messages
- **Loading Improvements:** Progressive loading, smooth transitions, content prioritization
- **Analytics & Monitoring:** Page views, user events, error/performance tracking
- **Social Features:** Share buttons, preview cards, copy link, embed support
- **Accessibility:** ARIA labels, keyboard navigation, screen reader support, color contrast
- **Performance:** Code splitting, bundle optimization, asset optimization, critical CSS
- **Mobile:** Responsive images, touch interactions, mobile layouts, performance budgets

### Technical Requirements
- **SEO:** Meta tags, OpenGraph, Twitter, structured data, robots.txt, sitemap
- **Accessibility:** WCAG 2.1 AA, keyboard navigation, screen reader, color contrast
- **Analytics:** Page views, user events, error/performance tracking
- **Performance:** FCP < 1.5s, TTI < 3.5s, Lighthouse > 90

### Relevant Files
- `src/app/collections/[slug]/page.tsx` — Main collection page
- `src/app/collections/[slug]/loading.tsx` — Loading state
- `src/app/collections/[slug]/error.tsx` — Error handling
- `src/app/collections/[slug]/head.tsx` — SEO metadata
- `src/components/collections/CollectionHeader.tsx` — Header
- `src/components/collections/CollectionStats.tsx` — Stats
- `src/components/collections/CollectionGrid.tsx` — NFT grid
- `src/components/collections/CollectionActivity.tsx` — Activity feed
- `src/components/collections/CollectionOffers.tsx` — Offers
- `src/services/opensea/api.new.ts` — OpenSea API integration
- `src/app/api/opensea/route.ts` — API route handler

---

## Potential Enhancements

- **Infinite Scroll:** Use pagination tokens for seamless NFT browsing
- **Advanced Filtering:** Filter by traits, price, rarity, etc.
- **Background Revalidation:** Use SWR/React Query for live data updates
- **SSR Optimization:** Server-side rendering for faster initial loads
- **Rate Limiting:** More sophisticated, user-aware rate limiting
- **Social Sharing:** Shareable links, preview cards, Twitter integration
- **Accessibility:** Further improvements for screen readers, keyboard users
- **Mobile:** Touch-friendly layouts, performance budgets, responsive images
- **Analytics:** Deeper insights into user behavior and API usage
- **Monitoring:** Real-time alerts for API errors, slowdowns, or outages

## NFT Gallery & Detail Page Optimization: Best Practices & Recommendations

### Overview
This section provides actionable recommendations and best practices for optimizing NFT gallery and detail pages, improving user experience, and ensuring robust, scalable performance across all NFT-related routes.

---

### 1. Collections Gallery Page (`/collections`)
- **Pagination/Infinite Scroll:** Load collections in pages or as the user scrolls to reduce initial load time.
- **Image Optimization:** Use the `sizes` prop, set appropriate `quality`, and use `unoptimized` only for remote/animated images. Consider a CDN or image proxy for non-optimized sources.
- **Skeleton Loader:** Show a skeleton loader for the grid while loading.
- **Memoization:** Use `useMemo` for expensive calculations or mapping.
- **Error Boundaries:** Wrap the grid in an error boundary for user-friendly error messages.

### 2. Individual Collection Page (`/collections/[slug]`)
- **Pagination/Infinite Scroll:** Load NFTs in chunks for large collections.
- **Responsive Image Sizing:** Use the `sizes` prop for images.
- **Preload Above-the-Fold Images:** Use `priority` for the first few images.
- **Error Handling:** Show a skeleton or spinner for each NFT card while loading, and a clear error state if an NFT fails to load.
- **Batch API Requests:** Batch metadata requests for many NFTs.
- **Memoize NFT Cards:** Use `React.memo` for NFT card components.

### 3. Individual NFT Page (`/collections/[slug]/[tokenId]`)
- **Optimistic UI:** Show cached or partial data immediately, fetch latest in background.
- **Retry Logic:** Automatically retry failed fetches before showing an error.
- **Graceful Fallbacks:** Show a placeholder and "Try Again" button if the image fails to load.
- **Preload Next/Prev NFTs:** Preload metadata for next/previous NFTs if users browse sequentially.
- **SEO Improvements:** Ensure dynamic metadata for each NFT page.
- **Accessibility:** Add `alt` text and ARIA labels for all images and interactive elements.

### 4. NFT Data Fetching
- **Cache API Responses:** Use server-side caching (e.g., Redis, Vercel Edge, or in-memory) for NFT and collection metadata.
- **Stale-While-Revalidate:** Serve cached data immediately and update in the background.
- **API Key Management:** Rotate or pool OpenSea API keys to avoid rate limits.
- **Batch Requests:** Fetch multiple NFTs in a single API call where possible.

### 5. Image Handling
- **Blur Placeholders:** Use base64 blur placeholders for smooth loading.
- **Detect Animated Images:** Set `unoptimized` for GIFs/WebPs automatically.
- **Fallbacks:** Always show a clear fallback if the image fails to load.

### 6. User Experience
- **Loading States:** Use spinners or skeletons for all slow-loading data.
- **Error States:** Show retry options and clear error messages.
- **Feedback:** Show toasts or inline feedback for actions like copying links or sharing.

### 7. Code Quality
- **Component Reuse:** Use shared components for NFT cards, skeletons, and error states.
- **Type Safety:** Ensure all API responses are type-checked.
- **Logging:** Log API errors, but avoid exposing sensitive info in production logs.

### 8. Performance
- **Minimize Bundle Size:** Only import what you need.
- **Lazy Load Non-Critical Components:** Use dynamic imports for modals, analytics, or rarely used features.

### 9. Accessibility & SEO
- **Alt Text:** All images should have descriptive alt text.
- **Semantic HTML:** Use headings, lists, and landmarks appropriately.
- **Meta Tags:** Set dynamic meta tags for each page.

### 10. Monitoring
- **Track API Errors:** Use Sentry or LogRocket for error monitoring.
- **Track Loading Times:** Monitor API and page load times.

---

**References:**
- [OpenSea API Docs](https://docs.opensea.io/reference/api-overview)
- [Next.js Image Optimization](https://nextjs.org/docs/pages/api-reference/components/image)
- [React Suspense for Data Fetching](https://react.dev/reference/react/Suspense)

**Relevant Files:**
- `src/app/collections/page.tsx` — Collections gallery
- `src/app/collections/[slug]/page.tsx` — Individual collection page
- `src/app/collections/[slug]/[tokenId]/page.tsx` — NFT detail page
- `src/components/curated/CollectionsGridClient.tsx` — Collections grid
- `src/components/collection/CollectionGrid.tsx` — NFT grid
- `src/components/nft/NFTContent.client.tsx` — NFT detail content
- `src/services/opensea/api.ts` — OpenSea API integration

---

## Unified Floor NFTs Page: Refactor Plan & Task List

### Goal
Create a single, unified page that displays all floor (cheapest for sale) NFTs from every curated collection. This page should allow users to easily browse, filter, and sort the best deals across all collections, leveraging the OpenSea API and our curated list.

### Why Refactor?
- **Simplicity:** One destination for users to find the best NFT deals across all collections.
- **Performance:** Optimize API calls and caching for floor price discovery.
- **User Experience:** Unified, fast, and visually appealing interface for deal hunting.
- **Maintainability:** Cleaner, more modular codebase with a focused API and UI.

### High-Level Plan
1. **Backend/API Refactor:**
   - Create a new API endpoint to fetch floor NFTs for all curated collections in a single call.
   - Optimize for batch requests to OpenSea (minimize rate limit impact).
   - Implement robust caching and error handling.
2. **Frontend Refactor:**
   - Build a new page/component to display all floor NFTs in a grid or list.
   - Add filtering, sorting, and search capabilities.
   - Ensure responsive design and fast loading states.
3. **Data Model & Utilities:**
   - Standardize the curated collections list (slugs, contract addresses, metadata).
   - Utility functions for floor price extraction and NFT normalization.
4. **Testing & Monitoring:**
   - Add unit/integration tests for new API and UI.
   - Monitor performance, error rates, and user engagement.
5. **Migration & Cleanup:**
   - Update navigation/routes to feature the new page.
   - Remove or refactor old endpoints/components as needed.

### Detailed Task List

#### Backend/API
- [ ] **New Endpoint:** `/api/floor-nfts` returns the floor NFT for each curated collection.
  - [ ] Accepts optional filters (e.g., price range, traits, collection).
  - [ ] Returns normalized NFT data (image, name, price, link, collection info).
- [ ] **Batch OpenSea Requests:**
  - [ ] For each curated collection, fetch the best (cheapest) listing using OpenSea's best listing endpoint.
  - [ ] Implement batching and rate limit handling (exponential backoff, retries).
- [ ] **Caching:**
  - [ ] Cache floor NFT results per collection (in-memory + Redis).
  - [ ] Set appropriate cache TTL (e.g., 1-5 minutes).
- [ ] **Error Handling:**
  - [ ] Graceful fallback if a collection's floor NFT cannot be fetched (show placeholder or skip).
  - [ ] Log errors for monitoring.
- [ ] **Curated Collections Source:**
  - [ ] Centralize the list of curated collections (slug, contract, metadata) in a config or database.

#### Frontend/UI
- [ ] **Unified Floor NFTs Page:** `/floor` or `/deals`
  - [ ] Grid or list view of all floor NFTs from curated collections.
  - [ ] Show NFT image, name, price, collection name/logo, and link to NFT/collection page.
  - [ ] Loading skeletons and error states for missing data.
- [ ] **Filtering & Sorting:**
  - [ ] Filter by collection, price range, traits, etc.
  - [ ] Sort by price, collection, recently listed, etc.
- [ ] **Responsive Design:**
  - [ ] Ensure mobile and desktop usability.
- [ ] **Navigation:**
  - [ ] Add link to new page in main navigation.

#### Utilities & Data Model
- [ ] **Curated Collections Config:**
  - [ ] JSON or TypeScript config listing all curated collections with required metadata.
- [ ] **NFT Normalization Utility:**
  - [ ] Function to standardize NFT data from OpenSea for UI consumption.
- [ ] **Price Formatting Utility:**
  - [ ] Consistent display of ETH, USD, etc.

#### Testing & Monitoring
- [ ] **API Tests:**
  - [ ] Unit tests for floor NFT fetching logic, error handling, and caching.
- [ ] **UI Tests:**
  - [ ] Component and integration tests for the new page.
- [ ] **Performance Monitoring:**
  - [ ] Track API response times, cache hit rates, and UI load times.
- [ ] **Error Monitoring:**
  - [ ] Sentry or similar for backend and frontend errors.

#### Migration & Cleanup
- [ ] **Update Navigation:**
  - [ ] Add new page to site navigation and landing page.
- [ ] **Deprecate Old Endpoints:**
  - [ ] Remove or refactor any endpoints/components now superseded by the unified floor NFTs page.
- [ ] **Documentation:**
  - [ ] Update OPENSEA.md and internal docs to reflect new architecture and usage.

### Best Practices & Considerations
- **API Efficiency:** Use batch requests and caching to avoid hitting OpenSea rate limits.
- **User Experience:** Prioritize fast load times and clear error states.
- **Extensibility:** Design the API and UI to easily add new collections or filters.
- **Security:** Never expose API keys client-side; validate all inputs.
- **Accessibility:** Ensure the new page is fully accessible (alt text, keyboard navigation, ARIA labels).

---

## Conclusion

The OpenSea API integration delivers real-time NFT data with robust error handling, caching, and fallback mechanisms. The implementation is designed for performance, reliability, and a seamless user experience. For further customization or troubleshooting, refer to the detailed sections above or the official OpenSea API documentation. 