import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    OPENSEA_API_KEY: z.string().min(1),
    NODE_ENV: z.enum(["development", "production", "test"]),
  },
  client: {
    // No client-side environment variables needed
  },
  runtimeEnv: {
    OPENSEA_API_KEY: process.env.OPENSEA_API_KEY,
    NODE_ENV: process.env.NODE_ENV,
  },
}); 