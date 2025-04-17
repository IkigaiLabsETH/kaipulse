import { BlogPost, MarketAnalysis, AdoptionNews, TechnicalUpdate } from './types';

export class BlogPostGenerator {
  /**
   * Generate a blog post about Bitcoin market analysis
   */
  static generateMarketAnalysisPost(
    title: string,
    featuredImage: string,
    analysis: MarketAnalysis
  ): BlogPost {
    const slug = `bitcoin-market-analysis-${title.toLowerCase().replace(/\s+/g, '-')}`;
    
    const html = `
      <h1>${title}</h1>
      
      <div class="market-overview">
        <h2>Market Overview</h2>
        <p><strong>Current Price:</strong> ${analysis.currentPrice}</p>
        <p><strong>Market Trend:</strong> ${analysis.marketTrend}</p>
        <p><strong>Market Sentiment:</strong> ${analysis.marketSentiment}</p>
      </div>
      
      <h2>Key Market Events</h2>
      <ul>
        ${analysis.keyEvents.map(event => `<li>${event}</li>`).join('')}
      </ul>
      
      <h2>Technical Analysis</h2>
      <p>${analysis.technicalAnalysis}</p>
      
      <h2>Investment Considerations</h2>
      <p>As always, remember that Bitcoin is a volatile asset. Consider your risk tolerance and investment horizon before making any decisions. This analysis is for informational purposes only and should not be considered financial advice.</p>
    `;

    return {
      title,
      slug,
      html,
      feature_image: featuredImage,
      tags: ['Bitcoin', 'Market Analysis', 'Technical Analysis', 'Crypto'],
      excerpt: `Bitcoin market analysis covering current price trends, key events, and technical indicators.`,
      meta_title: `${title} - Bitcoin Market Analysis`,
      meta_description: `Detailed analysis of Bitcoin market trends, including price movements, key events, and technical indicators.`
    };
  }

  /**
   * Generate a blog post about Bitcoin adoption news
   */
  static generateAdoptionNewsPost(
    title: string,
    featuredImage: string,
    news: AdoptionNews
  ): BlogPost {
    const slug = `bitcoin-adoption-${title.toLowerCase().replace(/\s+/g, '-')}`;
    
    const html = `
      <h1>${title}</h1>
      
      <div class="adoption-details">
        <h2>Adoption Details</h2>
        <p><strong>Entity:</strong> ${news.entity}</p>
        <p><strong>Type:</strong> ${news.type}</p>
        <p>${news.details}</p>
      </div>
      
      <h2>Impact Analysis</h2>
      <p>${news.impact}</p>
      
      <h2>Timeline</h2>
      <ul>
        ${news.timeline.map(event => `<li>${event}</li>`).join('')}
      </ul>
      
      <h2>Market Implications</h2>
      <p>This adoption news could have significant implications for Bitcoin's market dynamics, liquidity, and overall adoption curve. We'll continue to monitor the situation and provide updates as more information becomes available.</p>
    `;

    return {
      title,
      slug,
      html,
      feature_image: featuredImage,
      tags: ['Bitcoin', 'Adoption', news.type, 'Crypto'],
      excerpt: `Breaking news about ${news.entity}'s Bitcoin adoption and its market implications.`,
      meta_title: `${title} - Bitcoin Adoption News`,
      meta_description: `Analysis of ${news.entity}'s Bitcoin adoption, including details, impact, and market implications.`
    };
  }

  /**
   * Generate a blog post about Bitcoin technical developments
   */
  static generateTechnicalUpdatePost(
    title: string,
    featuredImage: string,
    update: TechnicalUpdate
  ): BlogPost {
    const slug = `bitcoin-technical-${title.toLowerCase().replace(/\s+/g, '-')}`;
    
    const html = `
      <h1>${title}</h1>
      
      <div class="development-overview">
        <h2>Development Overview</h2>
        <p><strong>Development:</strong> ${update.development}</p>
        <p>${update.description}</p>
      </div>
      
      <h2>Key Benefits</h2>
      <ul>
        ${update.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
      </ul>
      
      <h2>Implementation Details</h2>
      <p>${update.implementation}</p>
      
      <h2>Network Impact</h2>
      <p>${update.impact}</p>
      
      <h2>Looking Forward</h2>
      <p>This technical development represents another step forward in Bitcoin's evolution. As always, we'll continue to monitor its implementation and provide updates on its impact on the network.</p>
    `;

    return {
      title,
      slug,
      html,
      feature_image: featuredImage,
      tags: ['Bitcoin', 'Technical', 'Development', 'Network'],
      excerpt: `Technical update about ${update.development} and its implications for the Bitcoin network.`,
      meta_title: `${title} - Bitcoin Technical Update`,
      meta_description: `Detailed analysis of ${update.development}, including benefits, implementation details, and network impact.`
    };
  }
} 