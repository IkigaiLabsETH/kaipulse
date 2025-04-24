import { fetchAccessToken } from "@humeai/voice";
import { NextResponse } from "next/server";

export async function GET() {
  try {
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

    const accessToken = await fetchAccessToken({
      apiKey: String(apiKey),
      secretKey: String(secretKey),
    });

    if (!accessToken || accessToken === "undefined") {
      return NextResponse.json(
        { error: "Invalid access token received from Hume AI" },
        { status: 500 }
      );
    }

    return NextResponse.json({ accessToken });
  } catch (error) {
    return NextResponse.json(
      { 
        error: error instanceof Error ? error.message : "Error fetching Hume access token",
        details: error instanceof Error ? error.stack : undefined
      },
      { status: 500 }
    );
  }
} 