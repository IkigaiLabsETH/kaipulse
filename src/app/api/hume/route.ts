import { HumeClient } from "hume";
import { NextResponse } from "next/server";

// Define message types based on Hume documentation
type HumeMessage = {
  type: string;
  receivedAt?: Date;
  [key: string]: unknown;
};

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

    // Initialize the Hume client
    const client = new HumeClient({
      apiKey: String(apiKey),
      secretKey: String(secretKey)
    });

    // Connect to EVI to test the connection
    const socket = await client.empathicVoice.chat.connect();
    await socket.tillSocketOpen();
    socket.close();

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { 
        error: error instanceof Error ? error.message : "Error connecting to Hume AI",
        details: error instanceof Error ? error.stack : undefined,
        errorType: error instanceof Error ? error.constructor.name : typeof error
      },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
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
    return NextResponse.json({ response });
  } catch (error) {
    return NextResponse.json(
      { 
        error: error instanceof Error ? error.message : "Error testing Hume voice response",
        details: error instanceof Error ? error.stack : undefined,
        errorType: error instanceof Error ? error.constructor.name : typeof error
      },
      { status: 500 }
    );
  }
} 