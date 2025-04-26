/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**.seadn.io',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**.openseauserdata.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**.opensea.io',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**.mux.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**.arweave.net',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'ipfs.io',
        pathname: '/**',
      }
    ],
    minimumCacheTTL: 3600,
    dangerouslyAllowSVG: true,
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
  // Production optimizations
  optimizeFonts: true,
  compress: true,
  productionBrowserSourceMaps: false,
  // CSS optimization with critters
  // optimizeCss: true,
}

module.exports = nextConfig 