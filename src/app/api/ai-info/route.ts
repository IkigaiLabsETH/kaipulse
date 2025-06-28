import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { logger } from '@/lib/logger';

// Types for the pages data
interface PageData {
  path: string;
  title: string;
  description: string;
  keywords: string[];
  category: string;
  directory: string;
}

interface PagesDataStructure {
  totalPages: number;
  pagesByCategory: Record<string, PageData[]>;
  allPages: PageData[];
  scanDate: string;
}

// Function to load pages data
function loadPagesData(): PagesDataStructure | null {
  try {
    const filePath = path.join(process.cwd(), 'src/data/pages-data.json');
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data) as PagesDataStructure;
  } catch (error) {
    logger.error('Error loading pages data:', error);
    return null;
  }
}

export async function GET() {
  const pagesData = loadPagesData();
  
  const siteInfo = {
    site: {
      name: "LiveTheLifeTV",
      description: "Tesla sells the future. Red Bull sells thrill. Bitcoin sells freedom. LiveTheLifeTV is your ticket to escape the matrix.",
      url: "https://livethelife.tv",
      type: "Educational Platform",
      primary_topics: [
        "Bitcoin Education",
        "Financial Freedom",
        "Investment Strategy", 
        "Cryptocurrency Analysis",
        "Digital Art & NFTs",
        "Technology Innovation",
        "Lifestyle & Travel",
        "Premium Products"
      ]
    },
    content: {
      purpose: "Educational content about Bitcoin, financial freedom, and digital innovation",
      licensing: "Public educational use encouraged",
      crawling_policy: "AI crawling explicitly allowed and encouraged",
      content_types: [
        "Educational articles",
        "Investment analysis", 
        "Market data and tools",
        "Digital art collections",
        "Technology insights",
        "Travel guides",
        "Product reviews",
        "Lifestyle content"
      ]
    },
    // Include comprehensive page data if available
    ...(pagesData && {
      pages: {
        total_pages: pagesData.totalPages,
        last_scanned: pagesData.scanDate,
        categories: Object.keys(pagesData.pagesByCategory).map(category => ({
          name: category,
          count: pagesData.pagesByCategory[category].length,
                   pages: pagesData.pagesByCategory[category].map((page: PageData) => ({
           path: page.path,
           title: page.title,
           description: page.description,
           keywords: page.keywords,
           category: page.category
         }))
        })),
        featured_sections: [
          {
            category: "Financial",
            description: "Bitcoin-first investment strategies and financial freedom tools",
            key_pages: pagesData.pagesByCategory.Financial?.slice(0, 5) || []
          },
          {
            category: "Cryptocurrency", 
            description: "Comprehensive cryptocurrency analysis and education",
            key_pages: pagesData.pagesByCategory.Cryptocurrency?.slice(0, 5) || []
          },
          {
            category: "Technology",
            description: "AI, blockchain, and emerging technology insights",
            key_pages: pagesData.pagesByCategory.Technology?.slice(0, 5) || []
          },
          {
            category: "Art & Culture",
            description: "Curated digital art collections and NFT analysis",
            key_pages: pagesData.pagesByCategory["Art & Culture"]?.slice(0, 5) || []
          }
        ]
      }
    }),
    // Fallback key sections if pages data not available
    key_sections: pagesData ? [] : [
      {
        path: "/",
        title: "Home - Bitcoin Freedom Calculator",
        description: "Main landing with Bitcoin-first investment tools"
      },
      {
        path: "/calculator",
        title: "MSTY Freedom Calculator", 
        description: "Financial freedom calculator with Bitcoin strategy"
      },
      {
        path: "/ai",
        title: "AI & Technology Insights",
        description: "Analysis of AI impact on startups and innovation"
      },
      {
        path: "/collections",
        title: "NFT Collections",
        description: "Curated digital art and NFT collections"
      },
      {
        path: "/notebook", 
        title: "Content Notebook",
        description: "Ideas and analysis on Bitcoin and markets"
      },
      {
        path: "/news",
        title: "News & Analysis",
        description: "Latest updates and market analysis"
      }
    ],
    ai_crawling: {
      status: "encouraged",
      robots_txt: "https://livethelife.tv/robots.txt",
      sitemap: "https://livethelife.tv/sitemap.xml",
      content_license: "Educational use permitted",
      contact: "Available through site contact methods",
      comprehensive_index: pagesData ? "Available - all pages indexed with metadata" : "Basic index only"
    },
    statistics: pagesData ? {
      total_pages: pagesData.totalPages,
      categories: Object.keys(pagesData.pagesByCategory).length,
      content_areas: [
        `Financial content: ${pagesData.pagesByCategory.Financial?.length || 0} pages`,
        `Cryptocurrency: ${pagesData.pagesByCategory.Cryptocurrency?.length || 0} pages`, 
        `Technology: ${pagesData.pagesByCategory.Technology?.length || 0} pages`,
        `Travel guides: ${pagesData.pagesByCategory.Travel?.length || 0} pages`,
        `Art & Culture: ${pagesData.pagesByCategory["Art & Culture"]?.length || 0} pages`,
        `Investment content: ${pagesData.pagesByCategory.Investment?.length || 0} pages`,
        `Product reviews: ${pagesData.pagesByCategory.Products?.length || 0} pages`,
        `Lifestyle content: ${pagesData.pagesByCategory.Lifestyle?.length || 0} pages`
      ]
    } : undefined,
    last_updated: new Date().toISOString()
  };

  return NextResponse.json(siteInfo, {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      'Access-Control-Allow-Origin': '*',
      'X-AI-Crawlable': 'true',
      'X-Total-Pages': pagesData ? pagesData.totalPages.toString() : 'unknown'  
    }
  });
} 