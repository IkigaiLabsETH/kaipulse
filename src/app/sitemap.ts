import { glob } from 'glob';
import { MetadataRoute } from 'next';
import { env } from '../env.mjs';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = env.NEXT_PUBLIC_SITE_URL;

  const pages = await glob('src/app/**/page.tsx');

  const urls = pages
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
    .filter((path) => !path.startsWith('/api')); // exclude api routes

  const sitemapEntries: MetadataRoute.Sitemap = urls.map((url) => ({
    url: `${siteUrl}${url}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return sitemapEntries;
} 