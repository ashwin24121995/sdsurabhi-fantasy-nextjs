import { NextResponse } from 'next/server';
import { getCurrentMatches, filterUpcomingMatches } from '@/lib/cricketApi';

export const revalidate = 30; // Revalidate every 30 seconds

export async function GET() {
  try {
    const allMatches = await getCurrentMatches();
    const filteredMatches = filterUpcomingMatches(allMatches);
    
    return NextResponse.json({
      matches: filteredMatches,
      total: filteredMatches.length,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Matches API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch matches', matches: [] },
      { status: 500 }
    );
  }
}
