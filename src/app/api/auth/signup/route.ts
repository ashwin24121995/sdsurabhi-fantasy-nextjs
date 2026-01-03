import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { hashPassword, generateToken, setAuthCookie, validateAge, isStateRestricted } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, phone, password, firstName, lastName, username, dateOfBirth, state } = body;

    // Validate required fields
    if (!email || !phone || !password || !firstName || !lastName || !username || !dateOfBirth || !state) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate age (18+)
    if (!validateAge(new Date(dateOfBirth))) {
      return NextResponse.json(
        { error: 'You must be at least 18 years old to register' },
        { status: 400 }
      );
    }

    // Check state restriction
    if (isStateRestricted(state)) {
      return NextResponse.json(
        { error: 'Sorry, our services are not available in your state due to local regulations' },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [
          { email },
          { phone },
          { username }
        ]
      }
    });

    if (existingUser) {
      if (existingUser.email === email) {
        return NextResponse.json({ error: 'Email already registered' }, { status: 400 });
      }
      if (existingUser.phone === phone) {
        return NextResponse.json({ error: 'Phone number already registered' }, { status: 400 });
      }
      if (existingUser.username === username) {
        return NextResponse.json({ error: 'Username already taken' }, { status: 400 });
      }
    }

    // Hash password
    const hashedPassword = await hashPassword(password);

    // Create user
    const user = await prisma.user.create({
      data: {
        email,
        phone,
        password: hashedPassword,
        firstName,
        lastName,
        username,
        dateOfBirth: new Date(dateOfBirth),
        state
      }
    });

    // Create leaderboard entry
    await prisma.leaderboard.create({
      data: {
        userId: user.id,
        username: user.username
      }
    });

    // Generate token and set cookie
    const token = generateToken({
      id: user.id,
      email: user.email,
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName
    });

    await setAuthCookie(token);

    return NextResponse.json({
      message: 'Registration successful',
      user: {
        id: user.id,
        email: user.email,
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName
      }
    });

  } catch (error) {
    console.error('Signup error:', error);
    return NextResponse.json(
      { error: 'Registration failed. Please try again.' },
      { status: 500 }
    );
  }
}
