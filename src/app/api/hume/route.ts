import { NextResponse } from "next/server";
import { logger } from "@/lib/logger";
import HumeService, { handleHumeError, HumeSocket } from "@/services/hume";

// Define WebSocket message interface
interface WebSocketMessage {
  type: string;
  [key: string]: unknown;
}

export async function GET() {
  try {
    // Get access token using our centralized service
    const accessToken = await HumeService.getAccessToken();
    return NextResponse.json({ accessToken });
  } catch (error) {
    const errorResponse = handleHumeError(error);
    logger.error('Hume API error:', errorResponse);
    return NextResponse.json(errorResponse, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const message = typeof body.message === 'string' ? body.message : 'Hello, how are you?';
    
    // Get credentials and create client using our service
    const credentials = HumeService.validateCredentials();
    const client = HumeService.createHumeClient(credentials);

    // Connect to Hume voice API with timeout
    const socketPromise = client.empathicVoice.chat.connect();
    const timeoutPromise = new Promise<never>((_, reject) => 
      setTimeout(() => reject(new Error('Connection timeout')), 10000)
    );
    
    const socketResult = await Promise.race([socketPromise, timeoutPromise]);
    
    // Validate socket connection
    if (!socketResult || typeof socketResult.tillSocketOpen !== 'function') {
      throw new Error('Invalid socket connection');
    }

    await socketResult.tillSocketOpen();

    // Process the message and get a response
    const response = await processHumeMessage(socketResult, message);
    await socketResult.close();

    return NextResponse.json({ response });
  } catch (error) {
    const errorResponse = handleHumeError(error);
    logger.error('Hume API error:', errorResponse);
    return NextResponse.json(errorResponse, { status: 500 });
  }
}

async function processHumeMessage(socket: HumeSocket, message: string): Promise<WebSocketMessage> {
  return new Promise((resolve, reject) => {
    // Set a timeout for the response
    const timeout = setTimeout(() => {
      socket.close().catch(() => {});
      reject(new Error('Response timeout'));
    }, 10000);

    // Handle incoming messages
    socket.on('message', (wsMessage: unknown) => {
      clearTimeout(timeout);
      if (
        typeof wsMessage === 'object' && 
        wsMessage !== null && 
        'type' in wsMessage && 
        typeof (wsMessage as { type: unknown }).type === 'string'
      ) {
        resolve(wsMessage as WebSocketMessage);
      } else {
        reject(new Error('Invalid message format from Hume'));
      }
    });

    // Handle errors
    socket.on('error', (error: unknown) => {
      clearTimeout(timeout);
      reject(error instanceof Error ? error : new Error('Unknown error occurred'));
    });

    // Send user input to socket
    socket.sendUserInput(message);
  });
} 