'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

interface User {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
}

export default function Header() {
  const [user, setUser] = useState<User | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    fetch('/api/auth/me')
      .then(res => res.json())
      .then(data => {
        if (data.user) {
          setUser(data.user);
        }
      })
      .catch(() => {});
  }, []);

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    setUser(null);
    window.location.href = '/';
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-white shadow-md">
      {/* Top Bar */}
      <div className="bg-[#1e3a5f] text-white py-2 text-sm">
        <div className="container flex justify-between items-center flex-wrap gap-2">
          <span className="bg-[#ff6b35] px-3 py-1 rounded-full font-semibold text-xs">
            100% FREE TO PLAY
          </span>
          <span className="hidden sm:inline">No Real Money | Skill-Based Gaming | 18+ Only</span>
        </div>
      </div>

      {/* Main Header */}
      <div className="py-4">
        <div className="container flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.webp" alt="SDSURABHI" width={50} height={50} />
            <span className="text-2xl font-bold text-[#1e3a5f]">
              SDS<span className="text-[#ff6b35]">URABHI</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-[#1e3a5f] font-medium hover:text-[#ff6b35] transition">
              Home
            </Link>
            <Link href="/contests" className="text-[#1e3a5f] font-medium hover:text-[#ff6b35] transition">
              Contests
            </Link>
            <Link href="/leaderboard" className="text-[#1e3a5f] font-medium hover:text-[#ff6b35] transition">
              Leaderboard
            </Link>
            <Link href="/how-to-play" className="text-[#1e3a5f] font-medium hover:text-[#ff6b35] transition">
              How to Play
            </Link>
            <Link href="/about" className="text-[#1e3a5f] font-medium hover:text-[#ff6b35] transition">
              About Us
            </Link>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {user ? (
              <div className="flex items-center gap-4">
                <Link href="/profile" className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-[#ff6b35] flex items-center justify-center text-white font-bold">
                    {user.firstName[0]}{user.lastName[0]}
                  </div>
                  <span className="font-semibold text-[#1e3a5f]">{user.firstName}</span>
                </Link>
                <button onClick={handleLogout} className="btn btn-outline text-sm">
                  Logout
                </button>
              </div>
            ) : (
              <>
                <Link href="/login" className="btn btn-outline">
                  Login
                </Link>
                <Link href="/signup" className="btn btn-primary">
                  Sign Up Free
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t mt-4 py-4">
            <div className="container flex flex-col gap-4">
              <Link href="/" className="text-[#1e3a5f] font-medium py-2">Home</Link>
              <Link href="/contests" className="text-[#1e3a5f] font-medium py-2">Contests</Link>
              <Link href="/leaderboard" className="text-[#1e3a5f] font-medium py-2">Leaderboard</Link>
              <Link href="/how-to-play" className="text-[#1e3a5f] font-medium py-2">How to Play</Link>
              <Link href="/about" className="text-[#1e3a5f] font-medium py-2">About Us</Link>
              <div className="flex gap-4 pt-4 border-t">
                {user ? (
                  <>
                    <Link href="/profile" className="btn btn-outline flex-1">Profile</Link>
                    <button onClick={handleLogout} className="btn btn-primary flex-1">Logout</button>
                  </>
                ) : (
                  <>
                    <Link href="/login" className="btn btn-outline flex-1">Login</Link>
                    <Link href="/signup" className="btn btn-primary flex-1">Sign Up</Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
