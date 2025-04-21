# OpenSea API Setup

## API Key Configuration

Based on the console errors, your OpenSea API integration is not working because the API key is missing. Follow these steps to set it up:

1. Create or modify a `.env.local` file in the project root with the following content:

```
# OpenSea API Configuration
OPENSEA_API_KEY=your_opensea_api_key_here
NEXT_PUBLIC_OPENSEA_API_KEY=your_opensea_api_key_here
```

2. Replace `your_opensea_api_key_here` with your actual OpenSea API key obtained from the [OpenSea Developer Portal](https://docs.opensea.io/reference/api-keys).

3. Restart your Next.js development server to apply the environment variables.

## Fix for Image Alt Text Errors

The console shows errors for missing alt text on images. To fix these:

1. Locate all image components in your art collection display components.
2. Add alt attributes to each image.

Example:
```jsx
// Before
<img src={nft.image_url} />

// After
<img src={nft.image_url} alt={nft.name || "NFT artwork"} />
```

## Fix for Ethereum Property Error

There seems to be a conflict with the ethereum property. This might be caused by:

1. Attempting to redefine the window.ethereum object
2. Using incorrect property names in the NFT data mapping

Check your code for any places where you're trying to interact with the ethereum object directly.

## Cache Optimizations

The implemented caching in both the service layer and API routes should help with the repeated API calls. Make sure to:

1. Verify the environment variables are properly loaded
2. Check that the OpenSea API key is valid
3. Test with the network tab open to ensure API calls are being cached properly 