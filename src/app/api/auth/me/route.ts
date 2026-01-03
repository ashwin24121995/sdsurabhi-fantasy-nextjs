import { NextResponse } from 'next/server';
import { getCurrentUser } from '@/lib/auth';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const user = await getCurrentUser();
    
    if (!user) {
      return NextResponse.json(
        { error: 'Not authenticated' },
        { status: 401 }
      );
    }

    // Get full user data with stats
    const fullUser = await prisma.user.findUnique({
      where: { id: user.id },
      select: {
        id: true,
        email: true,
        phone: true,
        firstName: true,
        lastName: true,
        username: true,
        dateOfBirth: true,
        state: true,
        createdAt: true,
        _count: {
          select: {
            teams: true,
            contestEntries: true
          }
        }
      }
    });

    if (!fullUser) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    // Get leaderboard stats
    const leaderboardStats = await prisma.leaderboard.findUnique({
      where: { userId: user.id }
    });

    return NextResponse.json({
      user: {
        ...fullUser,
        totalPoints: leaderboardStats?.totalPoints || 0,
        rank: leaderboardStats?.rank || null,
        teamsCreated: fullUser._count.teams,
        contestsJoined: fullUser._count.contestEntries
      }
    });

  } catch (error) {
    console.error('Get user error:', error);
    return NextResponse.json(
      { error: 'Failed to get user data' },
      { status: 500 }
    );
  }
}
