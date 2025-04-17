# MSTY Freedom Calculator

![MSTY Banner](https://github.com/thirdweb-example/next-starter/assets/57885104/20c8ce3b-4e55-4f10-ae03-2fe4743a5ee8)

A powerful calculator application that helps investors plan their path to financial freedom using a conservative Bitcoin-first approach, complemented by strategic positions in YieldMax MSTR Option Income Strategy ETF (MSTY) and MicroStrategy (MSTR) for additional yield and growth potential.

## 🌟 Key Features

- **Income Tier Calculator**: Calculate the MSTY shares needed for different income levels
- **Bitcoin-First Portfolio**: 80% core allocation to cold storage BTC
- **Strategic Yield**: 10% MSTY allocation for monthly income
- **Growth Component**: 10% MSTR allocation for additional Bitcoin exposure
- **Tax Planning**: Special considerations for international investors
- **Real-time Updates**: Track current MSTY prices and distributions
- **Interactive Dashboard**: Visualize your path to financial freedom

## 🏆 MSTY Status Levels

| Status | Monthly Expenses Covered | Monthly Income Target | MSTY Shares Needed | Capital Needed @ $20/Share |
|--------|-------------------------|----------------------|-------------------|---------------------------|
| Beginner | Netflix, Subscriptions | $20 | 20 shares | $400 |
| Intermediate | Groceries | $500 | 500 shares | $10,000 |
| Advanced | Rent / Mortgage | $3,000 | 3,000 shares | $60,000 |
| Elite | All Bills + Travel | $6,000 | 6,000 shares | $120,000 |
| Supreme | Replace Working Income | $10,000 | 10,000 shares | $200,000 |
| Legend | "Never heard from again" | $50,000+ | 50,000+ shares | $1,000,000+ |

## 🧠 Strategy Layer

### Core Philosophy: Bitcoin-First (80%)
The foundation of our strategy is a significant allocation to cold storage Bitcoin, representing 80% of the total portfolio. This aligns with the principle of self-custody and long-term value preservation.

### Strategic Components

| Asset | Allocation | Role | Tax Treatment | Strategy |
|-------|------------|------|---------------|-----------|
| BTC | 80% | Core Holdings | Capital gains only if sold | Self-custodied in cold storage for long-term preservation of wealth |
| MSTY | 10% | Income Stream | Taxed annually as ordinary income | Generate monthly income through covered call premiums on MSTR |
| MSTR | 10% | Growth | Capital gains only if sold | Additional Bitcoin exposure through corporate treasury strategy |

### Why This Allocation?
- **80% BTC**: Maintains Bitcoin as the primary asset while ensuring self-custody
- **10% MSTY**: Provides steady monthly income without selling core BTC position
- **10% MSTR**: Offers additional Bitcoin exposure with potential corporate advantages

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Thirdweb account and API key

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/msty-freedom-calculator.git
cd msty-freedom-calculator
```

2. Install dependencies:
```bash
yarn install
```

3. Create a `.env` file with your environment variables:
```env
# Thirdweb
CLIENT_ID=your_thirdweb_client_id

# Ghost CMS
GHOST_URL=your_ghost_cms_url
GHOST_CONTENT_API_KEY=your_ghost_content_api_key

# OpenAI
OPENAI_API_KEY=your_openai_api_key

# Optional: Analytics and Monitoring
NEXT_PUBLIC_GA_ID=your_google_analytics_id  # Optional

# Twitter API
TWITTER_API_KEY=your_twitter_api_key
TWITTER_API_SECRET=your_twitter_api_secret
TWITTER_ACCESS_TOKEN=your_twitter_access_token
TWITTER_ACCESS_SECRET=your_twitter_access_secret
TWITTER_BEARER_TOKEN=your_twitter_bearer_token

# Optional Redis Configuration
REDIS_URL=your_redis_url  # Optional
REDIS_TTL=3600           # Optional, defaults to 1 hour
```

4. Start the development server:
```bash
yarn dev
```

## 📊 Usage

1. Enter your desired monthly income target
2. Input your current portfolio value
3. The calculator will show:
   - Required MSTY shares
   - Recommended BTC/MSTR allocation
   - Projected monthly income
   - Tax implications

## 📰 News & Content Features

### Bitcoin News Hub
Our integrated news section provides two powerful ways to keep users informed:

1. **Ghost CMS Integration**
   - Real-time Bitcoin news and insights
   - Beautifully formatted articles with featured images
   - Tag-based categorization
   - Responsive grid layout
   - Automatic date formatting

2. **AI-Powered Content Generation**
   - Built-in Notebook interface for content ideation
   - Generate full articles using OpenAI API
   - Customizable parameters:
     - Content tone (technical, educational, conversational, professional)
     - Article length (short ~800, medium ~1500, long ~2500 words)
     - Target audience specification
     - Key points and references
   - Automatic tagging system
   - Bitcoin-focused content generation

### Content Management Features
- **Ghost Content API Integration**: Seamless fetching and display of articles
- **Dynamic Routing**: Clean URLs for individual articles (`/news/[slug]`)
- **Responsive Design**: 
  - Grid layout for article listings
  - Full-width article views
  - Mobile-friendly interface
- **Rich Media Support**:
  - Featured images
  - Default Bitcoin imagery
  - Proper image optimization
- **Content Organization**:
  - Tag-based navigation
  - Publication date display
  - Excerpt previews

### Content Generation Workflow
1. Access the Notebook interface (`/notebook`)
2. Input article parameters:
   - Optional title (or let AI generate one)
   - Twitter URL for instant analysis and content generation
   - Key points for coverage
   - Target audience
   - Desired tone and length
   - Optional references
   - Relevant tags
3. Generate article using AI
4. Automatic publication to your Ghost CMS
5. Instant availability in the news section

### Twitter Integration Features
- **Tweet Analysis**: Automatically extract insights from Bitcoin-related tweets
- **Smart Content Generation**:
  - Extract key points from tweets
  - Generate suggested titles
  - Auto-tag content based on tweet context
  - Engagement metrics integration
- **URL Support**:
  - Handles both twitter.com and x.com URLs
  - Automatic tweet ID extraction
  - Validates tweet URLs before processing
- **AI-Powered Analysis**:
  - Technical analysis of Bitcoin-related content
  - Market implications assessment
  - Historical context consideration
  - Adoption impact analysis
  - Trend identification
- **Caching Support**:
  - Optional Redis caching for high-traffic scenarios
  - Configurable cache TTL
  - Improved response times for frequently accessed tweets

## 🌍 International Tax Considerations

The calculator includes special features for international investors:

- U.S. withholding tax calculations (15% for French residents)
- French tax credit calculations
- Currency conversion tools
- Tax form preparation guidance

## 🛠️ Technical Stack

- Next.js 14 (App Router)
- Thirdweb
- React
- TypeScript
- Tailwind CSS
- Chart.js
- Ghost Content API (Headless CMS)
- OpenAI API (Content Generation)
- Twitter API v2 (Tweet Analysis)
- Redis (Optional Caching)
- TailwindCSS Typography Plugin

## 📈 Project Structure

```
src/
├── app/            # Next.js 14 app directory
│   ├── news/      # News section pages
│   ├── notebook/  # Content generation interface
│   └── ...        # Other app routes
├── components/     # React components
├── services/      # API and service integrations
│   ├── ghost/    # Ghost CMS integration
│   ├── ai/       # OpenAI integration
│   ├── twitter/  # Twitter API integration
│   │   ├── client.ts        # Twitter API client
│   │   └── tweetAnalyzer.ts # Tweet analysis service
│   └── lib/      # Shared utilities
├── utils/         # Helper functions
└── types/         # TypeScript type definitions
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📚 Resources

- [YieldMax ETFs](https://yieldmaxetfs.com/)
- [Thirdweb Documentation](https://portal.thirdweb.com/typescript/v5)
- [Next.js Documentation](https://nextjs.org/docs)

## ⚠️ Disclaimer

This calculator is for educational purposes only. It is not financial advice. Always do your own research and consult with a financial advisor before making investment decisions.

## 📞 Support

For support or questions, please [open an issue](https://github.com/yourusername/msty-freedom-calculator/issues) or contact us at support@example.com.
