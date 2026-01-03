'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

interface Match {
  id: string;
  name: string;
  matchType: string;
  status: string;
  venue: string;
  date: string;
  dateTimeGMT: string;
  teams: string[];
  teamInfo?: { name: string; shortname: string; img: string }[];
  score?: { r: number; w: number; o: number; inning: string }[];
  matchStarted?: boolean;
  matchEnded?: boolean;
}

export default function Home() {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/matches')
      .then(res => res.json())
      .then(data => {
        setMatches(data.matches || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const getMatchStatus = (match: Match) => {
    if (match.matchEnded) return 'completed';
    if (match.matchStarted) return 'live';
    return 'upcoming';
  };

  return (
    <>
      {/* Hero Section - Modern Design */}
      <section style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f172a 100%)',
        overflow: 'hidden'
      }}>
        {/* Animated Background Elements */}
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
          <div style={{
            position: 'absolute',
            top: '-50%',
            right: '-20%',
            width: '800px',
            height: '800px',
            background: 'radial-gradient(circle, rgba(255,107,53,0.15) 0%, transparent 70%)',
            borderRadius: '50%'
          }} />
          <div style={{
            position: 'absolute',
            bottom: '-30%',
            left: '-10%',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)',
            borderRadius: '50%'
          }} />
        </div>

        {/* Hero Content */}
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 10, width: '100%' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
            {/* Left Content */}
            <div>
              {/* Badge */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(255,107,53,0.2)',
                border: '1px solid rgba(255,107,53,0.3)',
                borderRadius: '50px',
                padding: '8px 20px',
                marginBottom: '24px'
              }}>
                <span style={{ width: '8px', height: '8px', background: '#ff6b35', borderRadius: '50%', animation: 'pulse 2s infinite' }} />
                <span style={{ color: '#ff6b35', fontWeight: 600, fontSize: '14px' }}>100% FREE TO PLAY</span>
              </div>

              {/* Main Heading */}
              <h1 style={{
                fontSize: '56px',
                fontWeight: 800,
                color: '#ffffff',
                lineHeight: 1.1,
                marginBottom: '24px'
              }}>
                Fantasy Cricket
                <br />
                <span style={{ 
                  background: 'linear-gradient(135deg, #ff6b35 0%, #ff8f35 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>Without Spending</span>
                <br />
                A Single Rupee
              </h1>

              {/* Description */}
              <p style={{ fontSize: '18px', color: '#94a3b8', marginBottom: '32px', lineHeight: 1.7 }}>
                Test your cricket knowledge, build your dream team, and compete with thousands of players. 
                Experience the thrill of fantasy cricket with zero financial risk.
              </p>

              {/* Feature Pills */}
              <div style={{ display: 'flex', gap: '12px', marginBottom: '32px', flexWrap: 'wrap' }}>
                <span style={{
                  background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                  color: '#ffffff',
                  padding: '10px 20px',
                  borderRadius: '50px',
                  fontWeight: 600,
                  fontSize: '14px'
                }}>✓ No Entry Fee</span>
                <span style={{
                  background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                  color: '#ffffff',
                  padding: '10px 20px',
                  borderRadius: '50px',
                  fontWeight: 600,
                  fontSize: '14px'
                }}>✓ Skill Based</span>
                <span style={{
                  background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
                  color: '#ffffff',
                  padding: '10px 20px',
                  borderRadius: '50px',
                  fontWeight: 600,
                  fontSize: '14px'
                }}>✓ No Cash Prizes</span>
              </div>

              {/* CTA Buttons */}
              <div style={{ display: 'flex', gap: '16px', marginBottom: '32px' }}>
                <Link href="/signup" style={{
                  background: 'linear-gradient(135deg, #ff6b35 0%, #ff8f35 100%)',
                  color: '#ffffff',
                  padding: '16px 32px',
                  borderRadius: '12px',
                  fontWeight: 700,
                  fontSize: '16px',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 10px 40px rgba(255,107,53,0.3)',
                  transition: 'transform 0.3s'
                }}>
                  Start Playing Free
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
                <Link href="/how-to-play" style={{
                  background: 'rgba(255,255,255,0.1)',
                  border: '2px solid rgba(255,255,255,0.2)',
                  color: '#ffffff',
                  padding: '16px 32px',
                  borderRadius: '12px',
                  fontWeight: 600,
                  fontSize: '16px',
                  textDecoration: 'none',
                  transition: 'all 0.3s'
                }}>
                  How It Works
                </Link>
              </div>

              {/* Trust Badges */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '24px', paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '24px', fontWeight: 700, color: '#ff6b35' }}>10K+</div>
                  <div style={{ fontSize: '12px', color: '#64748b' }}>Active Players</div>
                </div>
                <div style={{ width: '1px', height: '40px', background: 'rgba(255,255,255,0.1)' }} />
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '24px', fontWeight: 700, color: '#ff6b35' }}>500+</div>
                  <div style={{ fontSize: '12px', color: '#64748b' }}>Daily Contests</div>
                </div>
                <div style={{ width: '1px', height: '40px', background: 'rgba(255,255,255,0.1)' }} />
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '24px', fontWeight: 700, color: '#10b981' }}>₹0</div>
                  <div style={{ fontSize: '12px', color: '#64748b' }}>Real Money</div>
                </div>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div style={{ position: 'relative' }}>
              <div style={{
                position: 'relative',
                width: '100%',
                height: '500px',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 25px 80px rgba(0,0,0,0.4)'
              }}>
                <Image src="/hero-banner.webp" alt="Fantasy Cricket" fill style={{ objectFit: 'cover' }} />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(15,23,42,0.8) 0%, transparent 50%)'
                }} />
              </div>
              
              {/* Floating Card */}
              <div style={{
                position: 'absolute',
                bottom: '-20px',
                left: '-20px',
                background: '#ffffff',
                borderRadius: '16px',
                padding: '20px',
                boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
                minWidth: '200px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <svg width="24" height="24" fill="#ffffff" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: '#1e3a5f' }}>100% Legal</div>
                    <div style={{ fontSize: '12px', color: '#64748b' }}>Skill-based gaming</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer Bar */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          background: 'rgba(0,0,0,0.5)',
          backdropFilter: 'blur(10px)',
          padding: '12px 0'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
            <p style={{ color: '#94a3b8', fontSize: '13px' }}>
              ⚠️ 18+ Only | Not available in: Andhra Pradesh, Assam, Nagaland, Odisha, Sikkim, Telangana | CIN: U41002UP2023PTC194590
            </p>
          </div>
        </div>
      </section>

      {/* Features Section - Modern Cards */}
      <section style={{ padding: '100px 0', background: '#f8fafc' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, #ff6b35 0%, #ff8f35 100%)',
              color: '#ffffff',
              padding: '8px 20px',
              borderRadius: '50px',
              fontSize: '14px',
              fontWeight: 600,
              marginBottom: '16px'
            }}>WHY CHOOSE US</span>
            <h2 style={{ fontSize: '42px', fontWeight: 800, color: '#0f172a', marginBottom: '16px' }}>
              The Ultimate Free Fantasy Experience
            </h2>
            <p style={{ fontSize: '18px', color: '#64748b', maxWidth: '600px', margin: '0 auto' }}>
              Experience the thrill of fantasy cricket without any financial risk or hidden charges
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
            {/* Feature Card 1 */}
            <div style={{
              background: '#ffffff',
              borderRadius: '24px',
              padding: '40px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
              border: '1px solid #e2e8f0',
              transition: 'all 0.3s',
              textAlign: 'center'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, #ff6b35 0%, #ff8f35 100%)',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px'
              }}>
                <Image src="/icon-free.webp" alt="Free" width={50} height={50} />
              </div>
              <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#0f172a', marginBottom: '12px' }}>100% FREE</h3>
              <p style={{ color: '#64748b', lineHeight: 1.7 }}>
                No entry fees, no deposits, no hidden charges. Play unlimited contests completely free!
              </p>
            </div>

            {/* Feature Card 2 */}
            <div style={{
              background: '#ffffff',
              borderRadius: '24px',
              padding: '40px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
              border: '1px solid #e2e8f0',
              transition: 'all 0.3s',
              textAlign: 'center'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px'
              }}>
                <Image src="/icon-skill.webp" alt="Skill" width={50} height={50} />
              </div>
              <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#0f172a', marginBottom: '12px' }}>SKILL BASED</h3>
              <p style={{ color: '#64748b', lineHeight: 1.7 }}>
                Use your cricket knowledge to build winning teams. Pure skill, no luck involved!
              </p>
            </div>

            {/* Feature Card 3 */}
            <div style={{
              background: '#ffffff',
              borderRadius: '24px',
              padding: '40px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
              border: '1px solid #e2e8f0',
              transition: 'all 0.3s',
              textAlign: 'center'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px'
              }}>
                <Image src="/icon-no-money.webp" alt="No Money" width={50} height={50} />
              </div>
              <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#0f172a', marginBottom: '12px' }}>NO REAL MONEY</h3>
              <p style={{ color: '#64748b', lineHeight: 1.7 }}>
                No cash prizes, no gambling. Just pure entertainment and bragging rights!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Live Matches Section */}
      <section style={{ padding: '100px 0', background: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '50px', flexWrap: 'wrap', gap: '20px' }}>
            <div>
              <span style={{
                display: 'inline-block',
                background: '#fef2f2',
                color: '#ef4444',
                padding: '8px 16px',
                borderRadius: '50px',
                fontSize: '14px',
                fontWeight: 600,
                marginBottom: '12px'
              }}>🔴 LIVE MATCHES</span>
              <h2 style={{ fontSize: '36px', fontWeight: 800, color: '#0f172a' }}>Live & Upcoming Matches</h2>
              <p style={{ color: '#64748b', marginTop: '8px' }}>Join free contests and showcase your cricket knowledge</p>
            </div>
            <Link href="/contests" style={{
              background: 'linear-gradient(135deg, #ff6b35 0%, #ff8f35 100%)',
              color: '#ffffff',
              padding: '14px 28px',
              borderRadius: '12px',
              fontWeight: 600,
              textDecoration: 'none',
              boxShadow: '0 8px 30px rgba(255,107,53,0.3)'
            }}>
              View All Matches →
            </Link>
          </div>

          {loading ? (
            <div style={{ textAlign: 'center', padding: '80px 0' }}>
              <div style={{
                width: '48px',
                height: '48px',
                border: '4px solid #e2e8f0',
                borderTopColor: '#ff6b35',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite',
                margin: '0 auto 16px'
              }} />
              <p style={{ color: '#64748b' }}>Loading matches...</p>
            </div>
          ) : matches.length === 0 ? (
            <div style={{
              textAlign: 'center',
              padding: '80px 40px',
              background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
              borderRadius: '24px',
              border: '2px dashed #e2e8f0'
            }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>🏏</div>
              <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>No Matches Right Now</h3>
              <p style={{ color: '#64748b' }}>Check back soon for upcoming cricket matches!</p>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
              {matches.slice(0, 6).map((match) => {
                const status = getMatchStatus(match);
                return (
                  <div key={match.id} style={{
                    background: '#ffffff',
                    borderRadius: '20px',
                    padding: '24px',
                    border: '1px solid #e2e8f0',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                    transition: 'all 0.3s'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                      <span style={{
                        background: status === 'live' ? '#fef2f2' : '#f0fdf4',
                        color: status === 'live' ? '#ef4444' : '#10b981',
                        padding: '6px 14px',
                        borderRadius: '50px',
                        fontSize: '12px',
                        fontWeight: 600
                      }}>
                        {status === 'live' ? '🔴 LIVE' : '🟢 UPCOMING'}
                      </span>
                      <span style={{
                        background: '#f1f5f9',
                        color: '#64748b',
                        padding: '6px 12px',
                        borderRadius: '8px',
                        fontSize: '12px',
                        fontWeight: 500
                      }}>{match.matchType}</span>
                    </div>
                    <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a', marginBottom: '8px', lineHeight: 1.4 }}>{match.name}</h3>
                    <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '16px' }}>{match.venue}</p>
                    {match.score && match.score.length > 0 && (
                      <div style={{ background: '#f8fafc', padding: '12px', borderRadius: '12px', marginBottom: '16px' }}>
                        {match.score.map((s, i) => (
                          <p key={i} style={{ fontSize: '13px', color: '#0f172a' }}>
                            <span style={{ fontWeight: 600 }}>{s.inning}:</span> {s.r}/{s.w} ({s.o} ov)
                          </p>
                        ))}
                      </div>
                    )}
                    <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '16px' }}>{match.status}</p>
                    <Link href={`/match/${match.id}`} style={{
                      display: 'block',
                      background: 'linear-gradient(135deg, #ff6b35 0%, #ff8f35 100%)',
                      color: '#ffffff',
                      padding: '12px',
                      borderRadius: '12px',
                      fontWeight: 600,
                      textAlign: 'center',
                      textDecoration: 'none',
                      fontSize: '14px'
                    }}>
                      Join Free Contest
                    </Link>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Stats Section - Modern */}
      <section style={{
        padding: '80px 0',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px', textAlign: 'center' }}>
            <div>
              <div style={{ fontSize: '48px', fontWeight: 800, color: '#ff6b35', marginBottom: '8px' }}>10K+</div>
              <div style={{ color: '#94a3b8', fontSize: '16px' }}>Active Players</div>
            </div>
            <div>
              <div style={{ fontSize: '48px', fontWeight: 800, color: '#ff6b35', marginBottom: '8px' }}>500+</div>
              <div style={{ color: '#94a3b8', fontSize: '16px' }}>Daily Contests</div>
            </div>
            <div>
              <div style={{ fontSize: '48px', fontWeight: 800, color: '#10b981', marginBottom: '8px' }}>100%</div>
              <div style={{ color: '#94a3b8', fontSize: '16px' }}>Free to Play</div>
            </div>
            <div>
              <div style={{ fontSize: '48px', fontWeight: 800, color: '#10b981', marginBottom: '8px' }}>₹0</div>
              <div style={{ color: '#94a3b8', fontSize: '16px' }}>Real Money Involved</div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Play Section */}
      <section style={{ padding: '100px 0', background: '#f8fafc' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span style={{
              display: 'inline-block',
              background: '#dbeafe',
              color: '#2563eb',
              padding: '8px 20px',
              borderRadius: '50px',
              fontSize: '14px',
              fontWeight: 600,
              marginBottom: '16px'
            }}>GETTING STARTED</span>
            <h2 style={{ fontSize: '42px', fontWeight: 800, color: '#0f172a', marginBottom: '16px' }}>
              How to Play
            </h2>
            <p style={{ fontSize: '18px', color: '#64748b' }}>
              Get started in just 3 simple steps
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}>
            {/* Step 1 */}
            <div style={{ textAlign: 'center', position: 'relative' }}>
              <div style={{
                width: '120px',
                height: '120px',
                background: 'linear-gradient(135deg, #ff6b35 0%, #ff8f35 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px',
                position: 'relative'
              }}>
                <Image src="/step1-select.webp" alt="Select Match" width={60} height={60} />
                <span style={{
                  position: 'absolute',
                  top: '-8px',
                  right: '-8px',
                  width: '40px',
                  height: '40px',
                  background: '#0f172a',
                  color: '#ffffff',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: '18px'
                }}>1</span>
              </div>
              <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#0f172a', marginBottom: '12px' }}>Select a Match</h3>
              <p style={{ color: '#64748b' }}>Choose from upcoming cricket matches across various leagues</p>
            </div>

            {/* Step 2 */}
            <div style={{ textAlign: 'center', position: 'relative' }}>
              <div style={{
                width: '120px',
                height: '120px',
                background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px',
                position: 'relative'
              }}>
                <Image src="/step2-team.webp" alt="Create Team" width={60} height={60} />
                <span style={{
                  position: 'absolute',
                  top: '-8px',
                  right: '-8px',
                  width: '40px',
                  height: '40px',
                  background: '#0f172a',
                  color: '#ffffff',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: '18px'
                }}>2</span>
              </div>
              <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#0f172a', marginBottom: '12px' }}>Create Your Team</h3>
              <p style={{ color: '#64748b' }}>Pick 11 players within the budget and select your captain</p>
            </div>

            {/* Step 3 */}
            <div style={{ textAlign: 'center', position: 'relative' }}>
              <div style={{
                width: '120px',
                height: '120px',
                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px',
                position: 'relative'
              }}>
                <Image src="/step3-compete.webp" alt="Compete" width={60} height={60} />
                <span style={{
                  position: 'absolute',
                  top: '-8px',
                  right: '-8px',
                  width: '40px',
                  height: '40px',
                  background: '#0f172a',
                  color: '#ffffff',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: '18px'
                }}>3</span>
              </div>
              <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#0f172a', marginBottom: '12px' }}>Compete & Win</h3>
              <p style={{ color: '#64748b' }}>Earn points based on player performance and climb the leaderboard</p>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <Link href="/how-to-play" style={{
              background: 'linear-gradient(135deg, #ff6b35 0%, #ff8f35 100%)',
              color: '#ffffff',
              padding: '16px 40px',
              borderRadius: '12px',
              fontWeight: 600,
              textDecoration: 'none',
              display: 'inline-block',
              boxShadow: '0 10px 40px rgba(255,107,53,0.3)'
            }}>
              Learn More About Scoring →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '100px 0',
        background: 'linear-gradient(135deg, #ff6b35 0%, #ff8f35 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '-50%',
          right: '-20%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
          borderRadius: '50%'
        }} />
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px', textAlign: 'center', position: 'relative', zIndex: 10 }}>
          <h2 style={{ fontSize: '42px', fontWeight: 800, color: '#ffffff', marginBottom: '20px' }}>
            Ready to Test Your Cricket Skills?
          </h2>
          <p style={{ fontSize: '20px', color: 'rgba(255,255,255,0.9)', marginBottom: '40px' }}>
            Join thousands of cricket fans playing fantasy cricket for FREE. No credit card required!
          </p>
          <Link href="/signup" style={{
            background: '#ffffff',
            color: '#ff6b35',
            padding: '18px 48px',
            borderRadius: '12px',
            fontWeight: 700,
            fontSize: '18px',
            textDecoration: 'none',
            display: 'inline-block',
            boxShadow: '0 10px 40px rgba(0,0,0,0.2)'
          }}>
            Sign Up Free Now
          </Link>
          <p style={{ marginTop: '24px', color: 'rgba(255,255,255,0.8)', fontSize: '14px' }}>
            ✓ No credit card required &nbsp; ✓ 100% Free &nbsp; ✓ No real money involved
          </p>
        </div>
      </section>

      {/* Add keyframes for animations */}
      <style jsx global>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </>
  );
}
