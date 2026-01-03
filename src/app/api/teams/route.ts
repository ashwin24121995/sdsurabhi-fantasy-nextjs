import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getCurrentUser } from '@/lib/auth';

// Get user's teams
export async function GET() {
  try {
    const user = await getCurrentUser();
    
    if (!user) {
      return NextResponse.json(
        { error: 'Not authenticated' },
        { status: 401 }
      );
    }

    const teams = await prisma.team.findMany({
      where: { userId: user.id },
      orderBy: { createdAt: 'desc' },
      include: {
        contestEntry: {
          include: {
            contest: true
          }
        }
      }
    });

    return NextResponse.json({ teams });

  } catch (error) {
    console.error('Get teams error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch teams' },
      { status: 500 }
    );
  }
}

// Create a new team
export async function POST(request: NextRequest) {
  try {
    const user = await getCurrentUser();
    
    if (!user) {
      return NextResponse.json(
        { error: 'Not authenticated' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { matchId, matchName, team1, team2, matchType, matchDate, players, captainId, viceCaptainId, teamName } = body;

    // Validate required fields
    if (!matchId || !players || !captainId || !viceCaptainId) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate team composition (11 players)
    if (players.length !== 11) {
      return NextResponse.json(
        { error: 'Team must have exactly 11 players' },
        { status: 400 }
      );
    }

    // Find or create contest
    let contest = await prisma.contest.findUnique({
      where: { matchId }
    });

    if (!contest) {
      contest = await prisma.contest.create({
        data: {
          matchId,
          matchName: matchName || `${team1} vs ${team2}`,
          team1: team1 || 'Team 1',
          team2: team2 || 'Team 2',
          matchType: matchType || 'T20',
          matchDate: new Date(matchDate || Date.now()),
          matchTime: new Date(matchDate || Date.now()).toLocaleTimeString()
        }
      });
    }

    // Check if user already has a team for this contest
    const existingEntry = await prisma.contestEntry.findUnique({
      where: {
        userId_contestId: {
          userId: user.id,
          contestId: contest.id
        }
      }
    });

    if (existingEntry) {
      return NextResponse.json(
        { error: 'You already have a team for this match' },
        { status: 400 }
      );
    }

    // Create team
    const team = await prisma.team.create({
      data: {
        userId: user.id,
        contestId: contest.id,
        teamName: teamName || `Team ${Date.now()}`,
        players,
        captainId,
        viceCaptainId
      }
    });

    // Create contest entry
    await prisma.contestEntry.create({
      data: {
        userId: user.id,
        contestId: contest.id,
        teamId: team.id
      }
    });

    // Update leaderboard stats
    await prisma.leaderboard.update({
      where: { userId: user.id },
      data: {
        teamsCreated: { increment: 1 },
        contestsPlayed: { increment: 1 }
      }
    });

    return NextResponse.json({
      message: 'Team created successfully',
      team
    });

  } catch (error) {
    console.error('Create team error:', error);
    return NextResponse.json(
      { error: 'Failed to create team' },
      { status: 500 }
    );
  }
}
