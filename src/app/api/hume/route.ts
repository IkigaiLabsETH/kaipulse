import { HumeClient } from "hume";
import { NextResponse } from "next/server";
import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";
import { logger } from "@/lib/logger";
import { fetchAccessToken } from "@humeai/voice";

// Define message types based on Hume documentation
type HumeMessage = {
  type: string;
  receivedAt?: Date;
  [key: string]: unknown;
};

// Simple in-memory rate limiter as fallback
class InMemoryRateLimiter {
  private requests: { [key: string]: number[] } = {};
  private readonly windowMs: number = 60 * 1000; // 1 minute
  private readonly maxRequests: number = 50;

  async limit(identifier: string) {
    const now = Date.now();
    const windowStart = now - this.windowMs;

    // Initialize or clean old requests
    if (!this.requests[identifier]) {
      this.requests[identifier] = [];
    }
    this.requests[identifier] = this.requests[identifier].filter(time => time > windowStart);

    // Check if limit is exceeded
    if (this.requests[identifier].length >= this.maxRequests) {
      const oldestRequest = Math.min(...this.requests[identifier]);
      const resetTime = oldestRequest + this.windowMs;
      return {
        success: false,
        limit: this.maxRequests,
        remaining: 0,
        reset: resetTime,
      };
    }

    // Add new request
    this.requests[identifier].push(now);
    return {
      success: true,
      limit: this.maxRequests,
      remaining: this.maxRequests - this.requests[identifier].length,
      reset: now + this.windowMs,
    };
  }
}

// Initialize rate limiter based on Redis availability
let rateLimiter: Ratelimit | InMemoryRateLimiter;

if (process.env.REDIS_URL && process.env.REDIS_TOKEN) {
  const redis = new Redis({
    url: process.env.REDIS_URL,
    token: process.env.REDIS_TOKEN,
  });

  rateLimiter = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(50, '1 m'), // 50 requests per minute
    analytics: true,
    prefix: '@upstash/ratelimit',
  });
} else {
  logger.warn('Redis credentials not found, using in-memory rate limiter');
  rateLimiter = new InMemoryRateLimiter();
}

// Error handling utility
const handleError = (error: unknown) => {
  if (error instanceof Error) {
    return {
      error: error.message,
      details: error.stack,
      errorType: error.constructor.name,
    };
  }
  return {
    error: 'An unknown error occurred',
    details: String(error),
    errorType: typeof error,
  };
};

export async function GET() {
  try {
    // Check rate limit
    const identifier = 'api_hume_get';
    const { success, limit, reset, remaining } = await rateLimiter.limit(identifier);
    
    if (!success) {
      return NextResponse.json(
        { error: 'Rate limit exceeded' },
        { 
          status: 429,
          headers: {
            'X-RateLimit-Limit': limit.toString(),
            'X-RateLimit-Remaining': remaining.toString(),
            'X-RateLimit-Reset': reset.toString(),
          }
        }
      );
    }

    const apiKey = process.env.HUME_API_KEY;
    const secretKey = process.env.HUME_CLIENT_SECRET;

    if (!apiKey || !secretKey) {
      const missingVars = [];
      if (!apiKey) missingVars.push('HUME_API_KEY');
      if (!secretKey) missingVars.push('HUME_CLIENT_SECRET');
      
      return NextResponse.json(
        { error: `Missing Hume AI credentials: ${missingVars.join(', ')}` },
        { status: 500 }
      );
    }

    // Generate access token
    const accessToken = await fetchAccessToken({
      apiKey: String(apiKey),
      secretKey: String(secretKey),
    });

    if (!accessToken || accessToken === 'undefined') {
      throw new Error('Invalid access token received from Hume AI');
    }

    return NextResponse.json(
      { accessToken },
      {
        headers: {
          'X-RateLimit-Limit': limit.toString(),
          'X-RateLimit-Remaining': remaining.toString(),
          'X-RateLimit-Reset': reset.toString(),
        }
      }
    );
  } catch (error) {
    const errorResponse = handleError(error);
    return NextResponse.json(errorResponse, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    // Check rate limit
    const identifier = 'api_hume_post';
    const { success, limit, reset, remaining } = await rateLimiter.limit(identifier);
    
    if (!success) {
      return NextResponse.json(
        { error: 'Rate limit exceeded' },
        { 
          status: 429,
          headers: {
            'X-RateLimit-Limit': limit.toString(),
            'X-RateLimit-Remaining': remaining.toString(),
            'X-RateLimit-Reset': reset.toString(),
          }
        }
      );
    }

    const apiKey = process.env.HUME_API_KEY;
    const secretKey = process.env.HUME_CLIENT_SECRET;

    if (!apiKey || !secretKey) {
      return NextResponse.json(
        { error: "Missing Hume AI credentials" },
        { status: 500 }
      );
    }

    const { message } = await request.json();

    // Initialize Hume client
    const client = new HumeClient({
      apiKey: String(apiKey),
      secretKey: String(secretKey)
    });

    // Connect to EVI
    const socket = await client.empathicVoice.chat.connect();
    await socket.tillSocketOpen();

    // Send the user input and wait for response
    const response = await new Promise<HumeMessage>((resolve, reject) => {
      const timeout = setTimeout(() => {
        socket.close();
        reject(new Error("Timeout waiting for voice response"));
      }, 10000); // 10 second timeout

      socket.on("message", (wsMessage: unknown) => {
        clearTimeout(timeout);
        // Type guard to ensure message matches our expected format
        if (typeof wsMessage === 'object' && wsMessage !== null && 'type' in wsMessage) {
          resolve(wsMessage as HumeMessage);
        } else {
          reject(new Error("Received invalid message format from Hume"));
        }
      });

      socket.on("error", (error: Error) => {
        clearTimeout(timeout);
        reject(error);
      });

      // Send the message
      socket.sendUserInput(message || "Hello, how are you?");
    });

    socket.close();
    return NextResponse.json(
      { response },
      {
        headers: {
          'X-RateLimit-Limit': limit.toString(),
          'X-RateLimit-Remaining': remaining.toString(),
          'X-RateLimit-Reset': reset.toString(),
        }
      }
    );
  } catch (error) {
    const errorResponse = handleError(error);
    return NextResponse.json(errorResponse, { status: 500 });
  }
} 