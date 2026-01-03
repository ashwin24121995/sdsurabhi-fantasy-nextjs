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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
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
    <>
      {/* Top Info Bar */}
      <div style={{
        background: 'linear-gradient(90deg, #ff6b35 0%, #ff8f35 100%)',
        padding: '10px 0',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1001,
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '8px',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            fontSize: '13px',
            color: '#ffffff',
            fontWeight: 600,
          }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
              </svg>
              100% FREE TO PLAY
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
              </svg>
              NO REAL MONEY
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
              </svg>
              SKILL BASED
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
              </svg>
              18+ ONLY
            </span>
          </div>
          <div style={{
            fontSize: '12px',
            color: '#ffffff',
            fontWeight: 500,
          }}>
            CIN: U41002UP2023PTC194590
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header style={{
        position: 'fixed',
        top: '40px',
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.3s ease',
        background: isScrolled 
          ? 'rgba(15, 23, 42, 0.98)' 
          : 'rgba(15, 23, 42, 0.8)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        boxShadow: isScrolled ? '0 4px 30px rgba(0,0,0,0.3)' : 'none',
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '12px 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          {/* Logo */}
          <Link href="/" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            textDecoration: 'none',
          }}>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '14px',
              overflow: 'hidden',
              background: 'linear-gradient(135deg, #ff6b35 0%, #ff8f35 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 20px rgba(255,107,53,0.5)',
            }}>
              <Image src="/logo.webp" alt="SDSURABHI" width={42} height={42} style={{ objectFit: 'contain' }} />
            </div>
            <div>
              <span style={{
                fontSize: '24px',
                fontWeight: 800,
                color: '#ffffff',
                letterSpacing: '-0.5px',
                display: 'block',
              }}>
                SDS<span style={{ color: '#ff6b35' }}>URABHI</span>
              </span>
              <span style={{
                fontSize: '10px',
                color: '#94a3b8',
                letterSpacing: '3px',
                textTransform: 'uppercase',
                fontWeight: 500,
              }}>Fantasy Cricket</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}>
            {[
              { href: '/', label: 'Home' },
              { href: '/contests', label: 'Contests' },
              { href: '/leaderboard', label: 'Leaderboard' },
              { href: '/how-to-play', label: 'How to Play' },
              { href: '/about', label: 'About Us' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  color: '#e2e8f0',
                  textDecoration: 'none',
                  padding: '10px 16px',
                  borderRadius: '10px',
                  fontSize: '14px',
                  fontWeight: 500,
                  transition: 'all 0.3s',
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Auth Buttons */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}>
            {user ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Link href="/profile" style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  textDecoration: 'none',
                }}>
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, #ff6b35 0%, #ff8f35 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    fontWeight: 700,
                    fontSize: '16px',
                    boxShadow: '0 4px 15px rgba(255,107,53,0.4)',
                  }}>
                    {user.firstName[0]}{user.lastName[0]}
                  </div>
                  <span style={{ color: '#ffffff', fontWeight: 600, fontSize: '14px' }}>{user.firstName}</span>
                </Link>
                <button 
                  onClick={handleLogout}
                  style={{
                    background: 'transparent',
                    border: '2px solid rgba(255,255,255,0.2)',
                    color: '#e2e8f0',
                    padding: '10px 20px',
                    borderRadius: '10px',
                    fontSize: '14px',
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                  }}
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
                <Link href="/login" style={{
                  color: '#e2e8f0',
                  textDecoration: 'none',
                  padding: '10px 20px',
                  borderRadius: '10px',
                  fontSize: '14px',
                  fontWeight: 500,
                  border: '2px solid rgba(255,255,255,0.2)',
                  transition: 'all 0.3s',
                }}>
                  Login
                </Link>
                <Link href="/signup" style={{
                  background: 'linear-gradient(135deg, #ff6b35 0%, #ff8f35 100%)',
                  color: '#ffffff',
                  padding: '12px 24px',
                  borderRadius: '10px',
                  fontWeight: 600,
                  fontSize: '14px',
                  textDecoration: 'none',
                  boxShadow: '0 4px 20px rgba(255,107,53,0.5)',
                  transition: 'all 0.3s',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}>
                  Sign Up Free
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
              </>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                display: 'none',
                background: 'transparent',
                border: 'none',
                color: '#ffffff',
                cursor: 'pointer',
                padding: '8px',
              }}
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12"/>
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16"/>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'rgba(15, 23, 42, 0.98)',
            backdropFilter: 'blur(20px)',
            padding: '20px',
            borderTop: '1px solid rgba(255,255,255,0.1)',
          }}>
            {[
              { href: '/', label: 'Home' },
              { href: '/contests', label: 'Contests' },
              { href: '/leaderboard', label: 'Leaderboard' },
              { href: '/how-to-play', label: 'How to Play' },
              { href: '/about', label: 'About Us' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  display: 'block',
                  color: '#e2e8f0',
                  textDecoration: 'none',
                  padding: '14px 16px',
                  borderRadius: '10px',
                  fontSize: '16px',
                  fontWeight: 500,
                }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div style={{ marginTop: '20px', display: 'flex', gap: '12px' }}>
              <Link href="/login" style={{
                flex: 1,
                textAlign: 'center',
                color: '#e2e8f0',
                textDecoration: 'none',
                padding: '14px',
                borderRadius: '10px',
                border: '2px solid rgba(255,255,255,0.2)',
                fontWeight: 500,
              }}>
                Login
              </Link>
              <Link href="/signup" style={{
                flex: 1,
                textAlign: 'center',
                background: 'linear-gradient(135deg, #ff6b35 0%, #ff8f35 100%)',
                color: '#ffffff',
                textDecoration: 'none',
                padding: '14px',
                borderRadius: '10px',
                fontWeight: 600,
              }}>
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Spacer for fixed header */}
      <div style={{ height: '110px' }} />
    </>
  );
}
