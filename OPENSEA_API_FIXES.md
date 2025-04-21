# OpenSea API Integration - Issue Fixes

Based on the console logs, we've identified several issues that need to be addressed for the OpenSea API integration to work properly:

## 1. Missing OpenSea API Key

The most critical issue is the missing OpenSea API key configuration. The console shows:
```
[WARN] OpenSea API key is not configured. Please set OPENSEA_API_KEY in your environment variables.
```

### Solution:
1. Create a `.env.local` file in the project root with:
   ```
   OPENSEA_API_KEY=your_actual_api_key_here
   NEXT_PUBLIC_OPENSEA_API_KEY=your_actual_api_key_here
   ```
2. Restart your development server to apply the environment variables.

## 2. Missing Image Alt Text

Multiple errors about missing alt properties on images:
```
Image is missing required "alt" property. Please add Alternative Text...
```

### Solution:
Check all NFT image components. Our review shows that our NFT components have alt text parameters, but they might not be passed correctly from parent components. Fix these issues by:

1. Ensure all `<Image>` components have proper alt attributes.
2. For NFT displays, you can use NFT name/title as alt text or a descriptive fallback.
3. Verify the data flow to ensure alt text is properly passed from API responses to components.

## 3. Ethereum Property Conflict Error

```
Uncaught TypeError: Cannot redefine property: ethereum
```

This indicates a conflict when trying to redefine the `window.ethereum` property. This typically happens with MetaMask or other web3 wallets that inject an ethereum object into the window.

### Solution:
The error seems to be triggered when the Pocket Universe script is running. This appears to be a third-party script trying to define the ethereum property that may already exist.

Options to fix:
1. Check for existing ethereum object before defining:
   ```js
   if (!window.hasOwnProperty('ethereum')) {
     // define ethereum object
   }
   ```

2. If you're not using MetaMask or Pocket Universe for wallet connection, consider removing the scripts causing conflicts.

3. Implement the following wrapper in a utility file:
   ```js
   // src/lib/safeEthereum.ts
   export const getEthereum = () => {
     try {
       return window.ethereum;
     } catch (e) {
       console.warn('Error accessing ethereum object:', e);
       return null;
     }
   };
   ```
   Then use this wrapper instead of direct access to window.ethereum.

## 4. API Caching & Duplicate Calls

You've implemented effective caching mechanisms at multiple levels:
1. In-memory cache in API routes
2. Shared cache module for OpenSea services
3. HTTP cache headers for browsers and CDNs

This setup should prevent duplicate calls and improve performance.

## 5. Testing & Monitoring

1. After implementing fixes, test the integration thoroughly:
   - Verify that the console doesn't show any more API key warnings
   - Check that images load correctly with proper alt text
   - Monitor network requests to ensure caching is working
   - Check for any remaining ethereum property errors

2. Consider adding a feature flag to enable/disable the OpenSea API integration if needed during development.

## Next Steps

1. Apply the API key fix first, as this is the most critical issue
2. Fix the alt text issues in the UI components
3. Address the ethereum property conflict
4. Test the integration with the actual API key
5. Monitor performance and refine caching as needed 