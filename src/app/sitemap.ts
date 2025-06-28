import { glob } from 'glob';
import { MetadataRoute } from 'next';
import { env } from '../env.mjs';

// Assuming you have a function to get all your news posts
// You will need to implement this based on your data source
// e.g., import { getAllPosts } from '@/lib/posts';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = env.NEXT_PUBLIC_SITE_URL;

  const pages = await glob('src/app/**/page.tsx', {
    ignore: [
      'src/app/api/**', // Ignore API routes
      'src/app/**/[*]/**', // Ignore dynamic routes, we'll handle them separately
    ],
  });

  const staticEntries = pages
    .map((page) => {
      const path = page
        .replace('src/app', '')
        .replace('/page.tsx', '')
        .replace('/(.)', ''); // remove route groups

      // Handle the case for the home page
      if (path === '') {
        return '/';
      }

      return path;
    })
    .filter((path) => !path.startsWith('/api')) // exclude api routes
    .map((url) => {
      const getPageSettings = (path: string) => {
        if (path === '/') {
          return { priority: 1.0, changeFrequency: 'daily' as const };
        }
        // High priority pages for AI crawlers - educational content
        if (['/about', '/search', '/col', '/altcoins', '/maxpain', '/calculator', '/ai', '/bitcoin', '/crypto', '/cursor', '/assets', '/tesla', '/stocks', '/options', '/bitbonds', '/downbad', '/platforms/msty/bitcoin', '/platforms/msty/mstr'].includes(path)) {
          return { priority: 0.9, changeFrequency: 'weekly' as const };
        }
        // Medium priority - specific topics
        if (['/twentyone', '/platforms/msty', '/strf', '/strd', '/platforms', '/strike', '/nakamoto', '/altbg', '/btcab', '/metaplanet', '/tbs', '/s9pro', '/bitaxe', '/node', '/mara', '/doge', '/ln', '/21energy', '/sol', '/hyperliquid', '/eth', '/defi', '/sui', '/zero', '/time', '/naval', '/train', '/pool', '/wine', '/docu', '/monaco', '/sonar'].includes(path)) {
          return { priority: 0.8, changeFrequency: 'weekly' as const };
        }
        // Educational content should be easily discoverable
        if (path.includes('/realestate') || path.includes('/land') || path.includes('/smarthome') || path.includes('/robotaxi')) {
          return { priority: 0.8, changeFrequency: 'weekly' as const };
        }
        return { priority: 0.7, changeFrequency: 'monthly' as const };
      };
      const { priority, changeFrequency } = getPageSettings(url);

      return {
        url: `${siteUrl}${url}`,
        lastModified: new Date(),
        changeFrequency,
        priority,
      };
    });

  // Get all dynamic news pages
  // TODO: Replace with your actual data fetching logic
  // const newsPosts = await getAllPosts(); // This is an example
  // const newsEntries: MetadataRoute.Sitemap = newsPosts.map(({ slug, updatedAt }) => ({
  //   url: `${siteUrl}/news/${slug}`,
  //   lastModified: updatedAt,
  //   changeFrequency: 'weekly',
  //   priority: 0.9,
  // }));

  return [
    ...staticEntries,
    // ...newsEntries
  ];
} 