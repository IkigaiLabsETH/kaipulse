/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
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
      },
      {
        protocol: 'https',
        hostname: 'openseauserdata.com',
      },
      {
        protocol: 'https',
        hostname: 'stream.mux.com',
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'assets.opensea.io',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'http',
        hostname: '127.0.0.1',
      }
    ],
    minimumCacheTTL: 3600,
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
  transpilePackages: ['lucide-react', 'framer-motion'],
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };
    return config;
  },
  experimental: {
    optimizeCss: true,
  },
}

module.exports = nextConfig 