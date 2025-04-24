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

// Error handling utility
const handleError = (error: unknown) => {
  const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
  const errorStack = error instanceof Error ? error.stack : undefined;
  
  logger.error('Hume API error:', {
    message: errorMessage,
    stack: errorStack,
    timestamp: new Date().toISOString()
  });

  return {
    error: errorMessage,
    details: process.env.NODE_ENV === 'development' ? errorStack : undefined
  };
};

// Initialize Redis client for rate limiting
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

// Configure rate limiter
const rateLimiter = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(
    Number(process.env.RATE_LIMIT_REQUESTS) || 60,
    `${Number(process.env.RATE_LIMIT_WINDOW) || 60} s`
  ),
  analytics: true,
  prefix: "@upstash/ratelimit",
});

// Validate Hume credentials
const validateHumeCredentials = () => {
  const apiKey = process.env.HUME_API_KEY;
  const secretKey = process.env.HUME_CLIENT_SECRET;
  const missingVars = [];

  if (!apiKey) missingVars.push('HUME_API_KEY');
  if (!secretKey) missingVars.push('HUME_CLIENT_SECRET');

  if (missingVars.length > 0) {
    throw new Error(`Missing Hume AI credentials: ${missingVars.join(', ')}`);
  }

  return { apiKey, secretKey };
};

// Validate access token
const validateAccessToken = (token: string) => {
  if (!token || token === 'undefined' || typeof token !== 'string') {
    throw new Error('Invalid access token received from Hume AI');
  }
  return token;
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

    // Validate credentials
    const { apiKey, secretKey } = validateHumeCredentials();

    // Generate access token
    const accessToken = await fetchAccessToken({
      apiKey: String(apiKey),
      secretKey: String(secretKey),
    });

    // Validate token
    const validatedToken = validateAccessToken(accessToken);

    return NextResponse.json(
      { accessToken: validatedToken },
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

    // Validate credentials
    const { apiKey, secretKey } = validateHumeCredentials();

    const { message } = await request.json();

    // Initialize Hume client
    const client = new HumeClient({
      apiKey: String(apiKey),
      secretKey: String(secretKey)
    });

    // Connect to EVI with timeout
    const socketResult = await Promise.race([
      client.empathicVoice.chat.connect(),
      new Promise<never>((_, reject) => 
        setTimeout(() => reject(new Error('Connection timeout')), 10000)
      )
    ]);

    // Type assertion after validation
    const socket = socketResult as unknown as {
      tillSocketOpen: () => Promise<unknown>;
      close: () => Promise<void>;
      on: {
        (event: 'message', callback: (data: unknown) => void): void;
        (event: 'error', callback: (error: Error) => void): void;
        (event: string, callback: (data: unknown) => void): void;
      };
      sendUserInput: (message: string) => void;
    };

    if (!socket || typeof socket.tillSocketOpen !== 'function') {
      throw new Error('Invalid socket connection');
    }

    await socket.tillSocketOpen();

    // Send the user input and wait for response with timeout
    const response = await new Promise<HumeMessage>((resolve, reject) => {
      const timeout = setTimeout(() => {
        socket.close();
        reject(new Error('Response timeout'));
      }, 10000);

      socket.on('message', (wsMessage: unknown) => {
        clearTimeout(timeout);
        if (typeof wsMessage === 'object' && wsMessage !== null && 'type' in wsMessage) {
          resolve(wsMessage as HumeMessage);
        } else {
          reject(new Error('Invalid message format from Hume'));
        }
      });

      socket.on('error', (error: Error) => {
        clearTimeout(timeout);
        reject(error);
      });

      socket.sendUserInput(message || 'Hello, how are you?');
    });

    await socket.close();

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