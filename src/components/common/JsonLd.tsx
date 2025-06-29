import { env } from '@/env.mjs';

const JsonLd = () => {
  const siteUrl = env.NEXT_PUBLIC_SITE_URL || 'https://livethelife.tv';

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'LiveTheLifeTV',
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    description: "Tesla doesn't sell cars. They sell the future. Red Bull doesn't sell energy. They sell thrill. Bitcoin doesn't sell ₿ coin. It sells freedom. LiveTheLifeTV is your multimedia platform blending Bitcoin-first investing, NFT art curation, and crypto-informed lifestyle content. Your gateway to financial freedom through Bitcoin, MSTY strategies, and creative expression.",
    sameAs: [
      'https://twitter.com/LiveTheLifeTV',
    ],
    category: ['Financial Technology', 'Cryptocurrency', 'NFT Marketplace', 'Educational Platform'],
    knowsAbout: ['Bitcoin Strategy', 'MSTY Income', 'NFT Curation', 'Bull Market Indicators', 'Financial Freedom']
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