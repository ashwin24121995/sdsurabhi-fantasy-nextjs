import { NextRequest, NextResponse } from 'next/server';
import { getMatchInfo, getFantasySquad, getMatchScorecard } from '@/lib/cricketApi';

export const revalidate = 30;

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    
    // Fetch match info, squad, and scorecard in parallel
    const [matchInfo, squad, scorecard] = await Promise.all([
      getMatchInfo(id),
      getFantasySquad(id),
      getMatchScorecard(id)
    ]);

    if (!matchInfo) {
      return NextResponse.json(
        { error: 'Match not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      match: matchInfo,
      squad,
      scorecard,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Match detail API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch match details' },
      { status: 500 }
    );
  }
}
