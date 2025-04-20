/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['lucide-react'],
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };
    return config;
  },
  images: {
    domains: [
      'i.seadn.io',
      'openseauserdata.com',
      'assets.opensea.io',
      'stream.mux.com',
      'placehold.co',
      'raw.seadn.io',
      'storage.opensea.io',
      'storage.googleapis.com',
      'ipfs.io',
      'arweave.net'
    ],
    remotePatterns: [
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
    ]
  },
};

export default nextConfig;
