'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer style={{
      background: 'linear-gradient(180deg, #0f172a 0%, #020617 100%)',
      color: '#94a3b8',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative Top Border */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '4px',
        background: 'linear-gradient(90deg, #ff6b35 0%, #ff8f35 50%, #ff6b35 100%)',
      }} />
      
      {/* Decorative Circles */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '-10%',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,107,53,0.1) 0%, transparent 70%)',
        transform: 'translateY(-50%)',
      }} />
      <div style={{
        position: 'absolute',
        top: '30%',
        right: '-5%',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)',
      }} />

      {/* Main Footer Content */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '60px 24px 40px',
        position: 'relative',
        zIndex: 1,
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '40px',
          marginBottom: '50px',
        }}>
          {/* Brand Column */}
          <div>
            <Link href="/" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              textDecoration: 'none',
              marginBottom: '20px',
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
                boxShadow: '0 4px 20px rgba(255,107,53,0.4)',
              }}>
                <Image src="/logo.webp" alt="SDSURABHI" width={42} height={42} style={{ objectFit: 'contain' }} />
              </div>
              <div>
                <span style={{
                  fontSize: '22px',
                  fontWeight: 800,
                  color: '#ffffff',
                  display: 'block',
                }}>
                  SDS<span style={{ color: '#ff6b35' }}>URABHI</span>
                </span>
                <span style={{
                  fontSize: '10px',
                  color: '#64748b',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                }}>Fantasy Cricket</span>
              </div>
            </Link>
            <p style={{
              fontSize: '14px',
              lineHeight: '1.7',
              color: '#64748b',
              marginBottom: '20px',
            }}>
              India&apos;s most trusted free-to-play fantasy cricket platform. 
              Test your cricket knowledge and compete with players nationwide.
            </p>
            <div style={{ display: 'flex', gap: '10px' }}>
              {['facebook', 'twitter', 'instagram', 'youtube'].map((social) => (
                <a
                  key={social}
                  href={`https://${social}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#94a3b8',
                    transition: 'all 0.3s',
                  }}
                >
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                    {social === 'facebook' && <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>}
                    {social === 'twitter' && <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>}
                    {social === 'instagram' && <path d="M16 4H8a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4V8a4 4 0 00-4-4zm2 12a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2h8a2 2 0 012 2v8zm-6-7a3 3 0 100 6 3 3 0 000-6zm4.5-.5a1 1 0 100-2 1 1 0 000 2z"/>}
                    {social === 'youtube' && <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33zM9.75 15.02V8.48l5.75 3.27-5.75 3.27z"/>}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              fontSize: '16px',
              fontWeight: 700,
              color: '#ffffff',
              marginBottom: '20px',
              letterSpacing: '0.5px',
            }}>Quick Links</h4>
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
                  color: '#64748b',
                  textDecoration: 'none',
                  padding: '8px 0',
                  fontSize: '14px',
                  transition: 'all 0.3s',
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Legal Links */}
          <div>
            <h4 style={{
              fontSize: '16px',
              fontWeight: 700,
              color: '#ffffff',
              marginBottom: '20px',
              letterSpacing: '0.5px',
            }}>Legal</h4>
            {[
              { href: '/terms', label: 'Terms & Conditions' },
              { href: '/privacy', label: 'Privacy Policy' },
              { href: '/responsible-gaming', label: 'Responsible Gaming' },
              { href: '/faq', label: 'FAQ' },
              { href: '/contact', label: 'Contact Us' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  display: 'block',
                  color: '#64748b',
                  textDecoration: 'none',
                  padding: '8px 0',
                  fontSize: '14px',
                  transition: 'all 0.3s',
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Company Info */}
          <div>
            <h4 style={{
              fontSize: '16px',
              fontWeight: 700,
              color: '#ffffff',
              marginBottom: '20px',
              letterSpacing: '0.5px',
            }}>Company</h4>
            <div style={{ fontSize: '14px', lineHeight: '2' }}>
              <p style={{ color: '#94a3b8', marginBottom: '8px' }}>
                <strong style={{ color: '#ffffff' }}>SDSURABHI CONSULTANTS PVT LTD</strong>
              </p>
              <p style={{ color: '#64748b' }}>CIN: U41002UP2023PTC194590</p>
              <p style={{ color: '#64748b' }}>GST: 09ABMCS3759A1Z4</p>
              <p style={{ color: '#64748b', marginTop: '12px' }}>📍 Uttar Pradesh, India</p>
              <p style={{ color: '#64748b' }}>📧 support@sdsurabhi.com</p>
            </div>
          </div>
        </div>

        {/* Disclaimer Section */}
        <div style={{
          background: 'rgba(255,107,53,0.1)',
          border: '1px solid rgba(255,107,53,0.2)',
          borderRadius: '16px',
          padding: '24px',
          marginBottom: '40px',
        }}>
          <h5 style={{
            color: '#ff6b35',
            fontSize: '14px',
            fontWeight: 700,
            marginBottom: '12px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}>
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
            </svg>
            IMPORTANT DISCLAIMER
          </h5>
          <p style={{ fontSize: '12px', lineHeight: '1.8', color: '#94a3b8' }}>
            SDSURABHI is a <strong style={{ color: '#ffffff' }}>100% FREE-TO-PLAY</strong> fantasy cricket platform. 
            No real money is involved in any contest or game. This is a skill-based gaming platform for entertainment purposes only. 
            Users must be <strong style={{ color: '#ffffff' }}>18 years or older</strong> to participate. 
            Not available in Andhra Pradesh, Assam, Nagaland, Odisha, Sikkim, and Telangana due to state regulations. 
            Please play responsibly.
          </p>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          paddingTop: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
        }}>
          <p style={{ fontSize: '13px', color: '#64748b' }}>
            © 2024 SDSURABHI CONSULTANTS PVT LTD. All rights reserved.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{
              background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
              color: '#ffffff',
              padding: '6px 14px',
              borderRadius: '20px',
              fontSize: '12px',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}>
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
              </svg>
              100% FREE
            </span>
            <span style={{
              background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
              color: '#ffffff',
              padding: '6px 14px',
              borderRadius: '20px',
              fontSize: '12px',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}>
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
              </svg>
              SECURE
            </span>
            <span style={{
              background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
              color: '#ffffff',
              padding: '6px 14px',
              borderRadius: '20px',
              fontSize: '12px',
              fontWeight: 600,
            }}>
              18+
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
