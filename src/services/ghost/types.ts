export interface BlogPost {
  title: string;
  slug: string;
  html: string;
  feature_image?: string;
  tags?: string[];
  excerpt?: string;
  meta_title?: string;
  meta_description?: string;
}

export interface MarketAnalysis {
  currentPrice: string;
  marketTrend: string;
  keyEvents: string[];
  technicalAnalysis: string;
  marketSentiment: string;
}

export interface AdoptionNews {
  entity: string;
  type: 'Corporate' | 'Government' | 'Institutional' | 'Retail';
  details: string;
  impact: string;
  timeline: string[];
}

export interface TechnicalUpdate {
  development: string;
  description: string;
  benefits: string[];
  implementation: string;
  impact: string;
} 