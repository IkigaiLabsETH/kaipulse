import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    OPENSEA_API_KEY: z.string().min(1),
    NODE_ENV: z.enum(["development", "production", "test"]),
    HUME_API_KEY: z.string().min(1),
    HUME_CLIENT_SECRET: z.string().min(1),
    XAI_API_KEY: z.string().min(1),
    REDIS_URL: z.string().optional(),
    REDIS_TOKEN: z.string().optional(),
  },
  client: {
    NEXT_PUBLIC_SITE_URL: z.string().url().optional().default("http://localhost:3000"),
    NEXT_PUBLIC_CMP_CONTRACT_ADDRESS: z.string().optional(),
    NEXT_PUBLIC_CMP_CONTRACT_CHAIN_ID: z.string().optional(),
    NEXT_PUBLIC_CMP_CONTRACT_TOKEN_ID: z.string().optional(),
    // No client-side environment variables needed
  },
  runtimeEnv: {
    OPENSEA_API_KEY: process.env.OPENSEA_API_KEY,
    NODE_ENV: process.env.NODE_ENV,
    HUME_API_KEY: process.env.HUME_API_KEY,
    HUME_CLIENT_SECRET: process.env.HUME_CLIENT_SECRET,
    XAI_API_KEY: process.env.XAI_API_KEY,
    REDIS_URL: process.env.REDIS_URL,
    REDIS_TOKEN: process.env.REDIS_TOKEN,
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    NEXT_PUBLIC_CMP_CONTRACT_ADDRESS: process.env.NEXT_PUBLIC_CMP_CONTRACT_ADDRESS,
    NEXT_PUBLIC_CMP_CONTRACT_CHAIN_ID: process.env.NEXT_PUBLIC_CMP_CONTRACT_CHAIN_ID,
    NEXT_PUBLIC_CMP_CONTRACT_TOKEN_ID: process.env.NEXT_PUBLIC_CMP_CONTRACT_TOKEN_ID,
  },
}); 