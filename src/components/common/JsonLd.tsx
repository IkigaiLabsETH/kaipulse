import { env } from '@/env.mjs';

const JsonLd = () => {
  const siteUrl = env.NEXT_PUBLIC_SITE_URL || 'https://livethelife.tv';

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'LiveTheLifeTV',
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    description: "Tesla sells the future. Red Bull sells thrill. Bitcoin sells freedom. LiveTheLifeTV is your guide to understanding Bitcoin as a tool for sovereignty, time, and truth. Unplug from the matrix. Educational content, not financial advice.",
    sameAs: [
      'https://twitter.com/LiveTheLifeTV',
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'LiveTheLifeTV',
    url: siteUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteUrl}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
};

export default JsonLd; 