import { NextResponse } from 'next/server';
import { CURATED_COLLECTIONS } from '@/config/collections';

export async function GET() {
  return NextResponse.json({ collections: CURATED_COLLECTIONS });
} 