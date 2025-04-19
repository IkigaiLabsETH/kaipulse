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
  },
  typescript: {
    ignoreBuildErrors: true,
  }
}

module.exports = nextConfig 