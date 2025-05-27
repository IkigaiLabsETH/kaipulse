import { NextResponse } from 'next/server';

export async function GET() {
  const url = 'https://api.dexscreener.com/token-boosts/top/v1';
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error('DEXScreener API error');
    const data = await res.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ error: 'Failed to fetch DEXScreener top tokens' }, { status: 500 });
  }
} 