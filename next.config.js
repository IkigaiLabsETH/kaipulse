/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.seadn.io',
      },
      {
        protocol: 'https',
        hostname: 'ipfs.io',
      },
      {
        protocol: 'https',
        hostname: '**.ipfs.io', // Allow all subdomains
      },
      {
        protocol: 'https',
        hostname: '**.ipfs.cf-ipfs.com', // Cloudflare IPFS gateway
      },
      {
        protocol: 'https',
        hostname: 'ipfs.cf-ipfs.com',
      },
      {
        protocol: 'https',
        hostname: 'nftstorage.link',
      }
    ],
    minimumCacheTTL: 3600,
    domains: ['localhost', '127.0.0.1'],
    domains: [
      'i.seadn.io',            // OpenSea CDN
      'openseauserdata.com',   // OpenSea user content
      'stream.mux.com',        // Mux video streaming
      'raw.githubusercontent.com',
      'assets.opensea.io'      // OpenSea assets
    ],
    dangerouslyAllowSVG: true, // Some NFT images might be SVGs
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  typescript: {
    // Only ignore build errors in production
    ignoreBuildErrors: process.env.NODE_ENV === 'production',
  },
  // Add some performance optimizations
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
}

module.exports = nextConfig 