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

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    setUser(null);
    window.location.href = '/';
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/contests', label: 'Contests' },
    { href: '/leaderboard', label: 'Leaderboard' },
    { href: '/how-to-play', label: 'How to Play' },
    { href: '/about', label: 'About Us' },
  ];

  return (
    <>
      <style jsx global>{`
        @media (max-width: 1024px) {
          .desktop-nav { display: none !important; }
          .desktop-auth { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
          .top-bar-items { display: none !important; }
          .top-bar-mobile { display: flex !important; }
        }
        @media (min-width: 1025px) {
          .desktop-nav { display: flex !important; }
          .desktop-auth { display: flex !important; }
          .mobile-menu-btn { display: none !important; }
          .top-bar-items { display: flex !important; }
          .top-bar-mobile { display: none !important; }
        }
      `}</style>

      {/* Top Info Bar */}
      <div style={{
        background: 'linear-gradient(90deg, #ff6b35 0%, #ff8f35 100%)',
        padding: '8px 0',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1001,
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 16px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          {/* Desktop Top Bar */}
          <div className="top-bar-items" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            fontSize: '12px',
            color: '#ffffff',
            fontWeight: 600,
          }}>
            <span>✓ 100% FREE</span>
            <span>✓ NO REAL MONEY</span>
            <span>✓ SKILL BASED</span>
            <span>🔞 18+</span>
          </div>
          
          {/* Mobile Top Bar */}
          <div className="top-bar-mobile" style={{
            display: 'none',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            fontSize: '11px',
            color: '#ffffff',
            fontWeight: 600,
            gap: '8px',
          }}>
            <span>✓ 100% FREE</span>
            <span>|</span>
            <span>✓ NO MONEY</span>
            <span>|</span>
            <span>🔞 18+</span>
          </div>

          <div className="top-bar-items" style={{
            fontSize: '11px',
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
        top: '36px',
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.3s ease',
        background: isScrolled 
          ? 'rgba(15, 23, 42, 0.98)' 
          : 'rgba(15, 23, 42, 0.9)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        boxShadow: isScrolled ? '0 4px 30px rgba(0,0,0,0.3)' : 'none',
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '12px 16px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          {/* Logo */}
          <Link href="/" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            textDecoration: 'none',
          }}>
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '12px',
              overflow: 'hidden',
              background: 'linear-gradient(135deg, #ff6b35 0%, #ff8f35 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 15px rgba(255,107,53,0.4)',
              flexShrink: 0,
            }}>
              <Image src="/logo.webp" alt="SDSURABHI" width={36} height={36} style={{ objectFit: 'contain' }} />
            </div>
            <div>
              <span style={{
                fontSize: '18px',
                fontWeight: 800,
                color: '#ffffff',
                letterSpacing: '-0.5px',
                display: 'block',
              }}>
                SDS<span style={{ color: '#ff6b35' }}>URABHI</span>
              </span>
              <span style={{
                fontSize: '9px',
                color: '#94a3b8',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                fontWeight: 500,
              }}>Fantasy Cricket</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
          }}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  color: '#e2e8f0',
                  textDecoration: 'none',
                  padding: '10px 14px',
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

          {/* Desktop Auth Buttons */}
          <div className="desktop-auth" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}>
            {user ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Link href="/profile" style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  textDecoration: 'none',
                }}>
                  <div style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    background: 'linear-gradient(135deg, #ff6b35 0%, #ff8f35 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    fontWeight: 700,
                    fontSize: '14px',
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
                    padding: '8px 16px',
                    borderRadius: '8px',
                    fontSize: '13px',
                    fontWeight: 500,
                    cursor: 'pointer',
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
                  padding: '8px 16px',
                  borderRadius: '8px',
                  fontSize: '13px',
                  fontWeight: 500,
                  border: '2px solid rgba(255,255,255,0.2)',
                }}>
                  Login
                </Link>
                <Link href="/signup" style={{
                  background: 'linear-gradient(135deg, #ff6b35 0%, #ff8f35 100%)',
                  color: '#ffffff',
                  padding: '10px 18px',
                  borderRadius: '8px',
                  fontWeight: 600,
                  fontSize: '13px',
                  textDecoration: 'none',
                  boxShadow: '0 4px 15px rgba(255,107,53,0.4)',
                }}>
                  Sign Up Free
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'none',
              background: 'transparent',
              border: 'none',
              color: '#ffffff',
              cursor: 'pointer',
              padding: '8px',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            aria-label="Toggle menu"
          >
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12"/>
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16"/>
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.7)',
            zIndex: 998,
          }}
        />
      )}

      {/* Mobile Menu Slide-in */}
      <div style={{
        position: 'fixed',
        top: 0,
        right: mobileMenuOpen ? '0' : '-100%',
        width: '85%',
        maxWidth: '320px',
        height: '100vh',
        background: 'linear-gradient(180deg, #111827 0%, #0a0f1c 100%)',
        zIndex: 999,
        transition: 'right 0.3s ease',
        padding: '80px 20px 20px',
        overflowY: 'auto',
        boxShadow: mobileMenuOpen ? '-10px 0 40px rgba(0,0,0,0.5)' : 'none',
      }}>
        {/* Close Button */}
        <button
          onClick={() => setMobileMenuOpen(false)}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'rgba(255,255,255,0.1)',
            border: 'none',
            borderRadius: '10px',
            padding: '10px',
            cursor: 'pointer',
            color: '#fff',
          }}
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>

        {/* Mobile Nav Links */}
        <nav style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
        }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                display: 'block',
                color: '#e2e8f0',
                textDecoration: 'none',
                padding: '16px 20px',
                borderRadius: '12px',
                fontSize: '16px',
                fontWeight: 500,
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                transition: 'all 0.3s',
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Auth Buttons */}
        <div style={{
          marginTop: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
        }}>
          {user ? (
            <>
              <Link href="/profile" onClick={() => setMobileMenuOpen(false)} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '16px 20px',
                borderRadius: '12px',
                background: 'rgba(255,107,53,0.1)',
                border: '1px solid rgba(255,107,53,0.3)',
                textDecoration: 'none',
              }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #ff6b35 0%, #ff8f35 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontWeight: 700,
                }}>
                  {user.firstName[0]}{user.lastName[0]}
                </div>
                <div>
                  <div style={{ color: '#fff', fontWeight: 600 }}>{user.firstName} {user.lastName}</div>
                  <div style={{ color: '#94a3b8', fontSize: '12px' }}>View Profile</div>
                </div>
              </Link>
              <button
                onClick={() => { handleLogout(); setMobileMenuOpen(false); }}
                style={{
                  padding: '16px 20px',
                  borderRadius: '12px',
                  background: 'transparent',
                  border: '2px solid rgba(255,255,255,0.2)',
                  color: '#e2e8f0',
                  fontSize: '16px',
                  fontWeight: 500,
                  cursor: 'pointer',
                }}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login" onClick={() => setMobileMenuOpen(false)} style={{
                display: 'block',
                textAlign: 'center',
                padding: '16px 20px',
                borderRadius: '12px',
                border: '2px solid rgba(255,255,255,0.2)',
                color: '#e2e8f0',
                fontSize: '16px',
                fontWeight: 500,
                textDecoration: 'none',
              }}>
                Login
              </Link>
              <Link href="/signup" onClick={() => setMobileMenuOpen(false)} style={{
                display: 'block',
                textAlign: 'center',
                padding: '16px 20px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #ff6b35 0%, #ff8f35 100%)',
                color: '#fff',
                fontSize: '16px',
                fontWeight: 600,
                textDecoration: 'none',
                boxShadow: '0 4px 20px rgba(255,107,53,0.4)',
              }}>
                Sign Up Free
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Footer */}
        <div style={{
          marginTop: '32px',
          padding: '20px',
          background: 'rgba(255,107,53,0.1)',
          borderRadius: '12px',
          border: '1px solid rgba(255,107,53,0.2)',
        }}>
          <div style={{
            fontSize: '12px',
            color: '#94a3b8',
            textAlign: 'center',
            lineHeight: 1.6,
          }}>
            <div style={{ fontWeight: 700, color: '#ff6b35', marginBottom: '8px', fontSize: '14px' }}>
              100% FREE TO PLAY
            </div>
            No real money involved.<br />
            Skill-based gaming only.<br />
            18+ Only.
          </div>
        </div>
      </div>

      {/* Spacer for fixed header */}
      <div style={{ height: '100px' }} />
    </>
  );
}
