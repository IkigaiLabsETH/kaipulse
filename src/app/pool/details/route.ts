import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.next();
}

// Ensure this route is always dynamic
export const dynamic = 'force-dynamic';
export const revalidate = 0; 