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
        hostname: 'arweave.net',
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
      },
      {
        protocol: 'https',
        hostname: 'media-proxy.artblocks.io',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'img.qql.art',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.kaizen.finance',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'media.niftygateway.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'ipfs.pixura.io',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.larvalabs.com',
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
    config.ignoreWarnings = [
      (warning) =>
        typeof warning.message === 'string' &&
        warning.message.includes('require function is used in a way in which dependencies cannot be statically extracted'),
    ];
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