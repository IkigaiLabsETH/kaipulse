# OpenSea API Integration

This branch implements the real OpenSea API integration for the Art Collection section of the application, replacing the mock data used in development.

## Setup

### 1. Get an OpenSea API Key

Visit [OpenSea Developer Portal](https://docs.opensea.io/reference/api-keys) to obtain an API key:

1. Sign up for a developer account
2. Create a new API key
3. Copy the key for the next step

### 2. Configure Environment Variables

Create or modify your `.env.local` file in the project root to include:

```
OPENSEA_API_KEY=your_opensea_api_key_here
NEXT_PUBLIC_OPENSEA_API_KEY=your_opensea_api_key_here
```

### 3. Restart Development Server

After setting the environment variables, restart your Next.js development server.

## Features Implemented

- Fetch NFT collections by contract address
- Fetch NFTs within a collection
- Pagination support for large collections
- Graceful fallback to mock data when API fails or is not configured

## API Endpoints

All endpoints have been updated to use the real OpenSea API:

- `GET /api/collections/contract/[address]` - Get collection info by contract address
- `GET /api/collections/contract/[address]/nfts` - Get NFTs by contract address
- `GET /api/collections/[slug]/nfts` - Get NFTs by collection slug

## Testing

To verify the integration is working:

1. Ensure your API key is properly configured
2. Start the development server
3. Visit `/art` in your browser
4. Check browser dev tools network tab to verify real API calls
5. Verify collections and NFTs are displayed correctly

## Fallback Mechanism

If the OpenSea API key is not configured or if API calls fail, the system will automatically fall back to using mock data to ensure a working UI during development or in case of API outages. 