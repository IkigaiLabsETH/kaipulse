export const structuredOutputSchema = {
  type: "object",
  properties: {
    analysis: {
      type: "object",
      properties: {
        summary: { type: "string" },
        keyPoints: { type: "array", items: { type: "string" } },
        sentiment: { type: "string", enum: ["bullish", "bearish", "neutral"] },
        confidence: { type: "number", minimum: 0, maximum: 1 },
        riskLevel: { type: "string", enum: ["low", "medium", "high"] }
      },
      required: ["summary", "keyPoints", "sentiment"]
    },
    marketData: {
      type: "object",
      properties: {
        currentPrice: { type: "number" },
        priceChange: { type: "number" },
        priceChangePercent: { type: "number" },
        volume: { type: "number" },
        marketCap: { type: "number" },
        dominance: { type: "number" }
      }
    },
    recommendations: {
      type: "array",
      items: {
        type: "object",
        properties: {
          action: { type: "string", enum: ["buy", "sell", "hold", "accumulate"] },
          asset: { type: "string" },
          reasoning: { type: "string" },
          targetPrice: { type: "number" },
          stopLoss: { type: "number" }
        },
        required: ["action", "asset", "reasoning"]
      }
    },
    narrative: {
      type: "object",
      properties: {
        currentTrend: { type: "string" },
        catalysts: { type: "array", items: { type: "string" } },
        risks: { type: "array", items: { type: "string" } },
        timeframe: { type: "string" }
      }
    }
  },
  required: ["analysis"]
};

export const imageGenerationSchema = {
  type: "object",
  properties: {
    imageUrl: { type: "string" },
    prompt: { type: "string" },
    revisedPrompt: { type: "string" },
    size: { type: "string" },
    moderation: { type: "boolean" },
    style: { type: "string" },
    tags: { type: "array", items: { type: "string" } }
  },
  required: ["imageUrl", "prompt"]
};

export const marketAnalysisSchema = {
  type: "object",
  properties: {
    overview: {
      type: "object",
      properties: {
        marketMood: { type: "string" },
        dominantNarrative: { type: "string" },
        keyEvents: { type: "array", items: { type: "string" } }
      }
    },
    bitcoin: {
      type: "object",
      properties: {
        price: { type: "number" },
        trend: { type: "string" },
        support: { type: "number" },
        resistance: { type: "number" },
        analysis: { type: "string" }
      }
    },
    altcoins: {
      type: "array",
      items: {
        type: "object",
        properties: {
          symbol: { type: "string" },
          name: { type: "string" },
          price: { type: "number" },
          change24h: { type: "number" },
          narrative: { type: "string" },
          risk: { type: "string" }
        }
      }
    },
    stocks: {
      type: "array",
      items: {
        type: "object",
        properties: {
          symbol: { type: "string" },
          name: { type: "string" },
          price: { type: "number" },
          change24h: { type: "number" },
          correlation: { type: "string" }
        }
      }
    }
  }
};

export const functionCallingSchema = {
  name: "analyze_market",
  description: "Analyze current market conditions and provide actionable insights",
  parameters: {
    type: "object",
    properties: {
      asset: {
        type: "string",
        description: "The asset to analyze (BTC, ETH, etc.)"
      },
      timeframe: {
        type: "string",
        enum: ["1h", "4h", "1d", "1w"],
        description: "Analysis timeframe"
      },
      include_technical: {
        type: "boolean",
        description: "Include technical analysis"
      },
      include_sentiment: {
        type: "boolean",
        description: "Include sentiment analysis"
      }
    },
    required: ["asset"]
  }
};

export const imageFunctionSchema = {
  name: "generate_image",
  description: "Generate an image based on the provided prompt",
  parameters: {
    type: "object",
    properties: {
      prompt: {
        type: "string",
        description: "Detailed description of the image to generate"
      },
      style: {
        type: "string",
        enum: ["realistic", "artistic", "abstract", "cyberpunk", "vintage"],
        description: "Artistic style for the image"
      },
      mood: {
        type: "string",
        enum: ["bullish", "bearish", "neutral", "excited", "calm"],
        description: "Mood or emotion to convey"
      }
    },
    required: ["prompt"]
  }
}; 