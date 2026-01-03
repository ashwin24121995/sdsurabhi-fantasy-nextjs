import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type') || 'all'; // all, weekly, monthly
    const limit = parseInt(searchParams.get('limit') || '100');

    let orderBy: object;
    
    switch (type) {
      case 'weekly':
        orderBy = { weeklyPoints: 'desc' as const };
        break;
      case 'monthly':
        orderBy = { monthlyPoints: 'desc' as const };
        break;
      default:
        orderBy = { totalPoints: 'desc' as const };
    }

    const leaderboard = await prisma.leaderboard.findMany({
      orderBy,
      take: limit,
      select: {
        id: true,
        userId: true,
        username: true,
        totalPoints: true,
        weeklyPoints: true,
        monthlyPoints: true,
        contestsPlayed: true,
        teamsCreated: true,
        rank: true
      }
    });

    // Add rank numbers
    const rankedLeaderboard = leaderboard.map((entry, index) => ({
      ...entry,
      rank: index + 1
    }));

    return NextResponse.json({
      leaderboard: rankedLeaderboard,
      type,
      total: rankedLeaderboard.length
    });

  } catch (error) {
    console.error('Leaderboard API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch leaderboard', leaderboard: [] },
      { status: 500 }
    );
  }
}
