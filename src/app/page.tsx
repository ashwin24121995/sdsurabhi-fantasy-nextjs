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

  return (
    <div style={{ background: '#0a0f1c', minHeight: '100vh' }}>
      {/* Hero Section */}
      <section style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}>
        {/* Background Image */}
        <div style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
        }}>
          <Image
            src="/hero-banner-new.webp"
            alt="Fantasy Cricket Background"
            fill
            style={{ objectFit: 'cover', opacity: 0.4 }}
            priority
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(10,15,28,0.95) 0%, rgba(10,15,28,0.7) 50%, rgba(10,15,28,0.95) 100%)',
          }} />
        </div>

        {/* Animated Gradient Orbs */}
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,107,53,0.2) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }} />
        <div style={{
          position: 'absolute',
          bottom: '10%',
          right: '10%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }} />

        {/* Hero Content */}
        <div style={{
          maxWidth: '1300px',
          margin: '0 auto',
          padding: '0 24px',
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: '80px',
          alignItems: 'center',
          position: 'relative',
          zIndex: 1,
          width: '100%',
        }}>
          {/* Left Content */}
          <div>
            {/* Live Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              background: 'linear-gradient(135deg, rgba(255,107,53,0.15) 0%, rgba(255,143,53,0.1) 100%)',
              border: '1px solid rgba(255,107,53,0.3)',
              borderRadius: '60px',
              padding: '12px 24px',
              marginBottom: '32px',
              backdropFilter: 'blur(10px)',
            }}>
              <span style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: '#22c55e',
                boxShadow: '0 0 20px rgba(34,197,94,0.6)',
                animation: 'pulse 2s infinite',
              }} />
              <span style={{ color: '#ff8f35', fontWeight: 700, fontSize: '15px', letterSpacing: '1px' }}>
                100% FREE TO PLAY
              </span>
            </div>

            {/* Main Heading */}
            <h1 style={{
              fontSize: '68px',
              fontWeight: 900,
              lineHeight: 1.05,
              marginBottom: '28px',
              color: '#ffffff',
              letterSpacing: '-2px',
            }}>
              Play Fantasy
              <br />
              <span style={{
                background: 'linear-gradient(135deg, #ff6b35 0%, #ff8f35 50%, #ffb347 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                Cricket Free
              </span>
            </h1>

            {/* Subtitle */}
            <p style={{
              fontSize: '20px',
              color: '#94a3b8',
              lineHeight: 1.8,
              marginBottom: '40px',
              maxWidth: '520px',
            }}>
              Build your dream team, compete with thousands of players, and prove your cricket expertise. 
              <strong style={{ color: '#ffffff' }}> Zero entry fee. Zero financial risk.</strong>
            </p>

            {/* Feature Pills */}
            <div style={{
              display: 'flex',
              gap: '16px',
              marginBottom: '48px',
              flexWrap: 'wrap',
            }}>
              {[
                { icon: '🎯', text: 'No Entry Fee', bg: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)' },
                { icon: '🧠', text: 'Skill Based', bg: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)' },
                { icon: '🛡️', text: 'No Cash Prizes', bg: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)' },
              ].map((pill, i) => (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  background: pill.bg,
                  borderRadius: '50px',
                  padding: '12px 24px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                }}>
                  <span style={{ fontSize: '18px' }}>{pill.icon}</span>
                  <span style={{ color: '#ffffff', fontWeight: 700, fontSize: '14px' }}>{pill.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', gap: '20px', marginBottom: '50px' }}>
              <Link href="/signup" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                background: 'linear-gradient(135deg, #ff6b35 0%, #ff8f35 100%)',
                color: '#ffffff',
                padding: '20px 40px',
                borderRadius: '16px',
                fontWeight: 800,
                fontSize: '17px',
                textDecoration: 'none',
                boxShadow: '0 10px 40px rgba(255,107,53,0.4)',
                transition: 'all 0.3s',
              }}>
                Start Playing Free
                <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              <Link href="/how-to-play" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                background: 'rgba(255,255,255,0.05)',
                border: '2px solid rgba(255,255,255,0.2)',
                color: '#ffffff',
                padding: '20px 36px',
                borderRadius: '16px',
                fontWeight: 700,
                fontSize: '17px',
                textDecoration: 'none',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s',
              }}>
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
                How It Works
              </Link>
            </div>

            {/* Trust Stats */}
            <div style={{
              display: 'flex',
              gap: '50px',
              paddingTop: '32px',
              borderTop: '1px solid rgba(255,255,255,0.1)',
            }}>
              {[
                { value: '10K+', label: 'Active Players', color: '#ff6b35' },
                { value: '500+', label: 'Daily Contests', color: '#22c55e' },
                { value: '₹0', label: 'Entry Fee', color: '#3b82f6' },
              ].map((stat, i) => (
                <div key={i}>
                  <div style={{
                    fontSize: '36px',
                    fontWeight: 900,
                    color: stat.color,
                    marginBottom: '4px',
                  }}>{stat.value}</div>
                  <div style={{
                    fontSize: '14px',
                    color: '#64748b',
                    fontWeight: 500,
                  }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'relative',
              width: '100%',
              height: '650px',
            }}>
              <Image
                src="/cricket-player-hero.webp"
                alt="Fantasy Cricket Player"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
            
            {/* Floating Legal Card */}
            <div style={{
              position: 'absolute',
              bottom: '100px',
              left: '-60px',
              background: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '20px',
              padding: '24px 28px',
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
            }}>
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '14px',
                background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 8px 25px rgba(34,197,94,0.4)',
              }}>
                <svg width="28" height="28" fill="#ffffff" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
              </div>
              <div>
                <div style={{ color: '#ffffff', fontWeight: 800, fontSize: '18px' }}>100% Legal</div>
                <div style={{ color: '#94a3b8', fontSize: '14px' }}>Skill-based gaming</div>
              </div>
            </div>

            {/* Floating Stats Card */}
            <div style={{
              position: 'absolute',
              top: '80px',
              right: '-20px',
              background: 'rgba(255,107,53,0.15)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,107,53,0.3)',
              borderRadius: '20px',
              padding: '20px 24px',
              boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
            }}>
              <div style={{ color: '#ff8f35', fontWeight: 800, fontSize: '24px' }}>🏆 #1</div>
              <div style={{ color: '#94a3b8', fontSize: '13px' }}>Free Fantasy Platform</div>
            </div>
          </div>
        </div>

        {/* Bottom Disclaimer Bar */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          background: 'rgba(0,0,0,0.6)',
          backdropFilter: 'blur(10px)',
          padding: '16px 0',
          borderTop: '1px solid rgba(255,255,255,0.1)',
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 24px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '32px',
            fontSize: '14px',
            color: '#94a3b8',
            flexWrap: 'wrap',
          }}>
            <span style={{ fontWeight: 600 }}>CIN: U41002UP2023PTC194590</span>
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>|</span>
            <span style={{ fontWeight: 600 }}>GST: 09ABMCS3759A1Z4</span>
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>|</span>
            <span style={{ color: '#ff6b35', fontWeight: 700 }}>18+ Only | Play Responsibly</span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{
        padding: '120px 0',
        background: 'linear-gradient(180deg, #0a0f1c 0%, #111827 100%)',
        position: 'relative',
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
        }}>
          <div style={{ textAlign: 'center', marginBottom: '70px' }}>
            <span style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, rgba(255,107,53,0.2) 0%, rgba(255,143,53,0.1) 100%)',
              border: '1px solid rgba(255,107,53,0.3)',
              color: '#ff8f35',
              padding: '10px 24px',
              borderRadius: '50px',
              fontSize: '14px',
              fontWeight: 700,
              marginBottom: '20px',
              letterSpacing: '1px',
            }}>
              WHY CHOOSE US
            </span>
            <h2 style={{
              fontSize: '48px',
              fontWeight: 900,
              color: '#ffffff',
              marginBottom: '20px',
              letterSpacing: '-1px',
            }}>
              Why Play on SDSURABHI?
            </h2>
            <p style={{
              fontSize: '18px',
              color: '#64748b',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.7,
            }}>
              Experience fantasy cricket like never before with our unique features
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '30px',
          }}>
            {[
              { icon: '/icon-free-new.webp', title: '100% Free', desc: 'No entry fee, no hidden charges. Play unlimited contests without spending a rupee.', gradient: 'linear-gradient(135deg, #ff6b35 0%, #ff8f35 100%)' },
              { icon: '/icon-skill-new.webp', title: 'Skill Based', desc: 'Your cricket knowledge matters. Win based on your skills, not luck.', gradient: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)' },
              { icon: '/icon-nomoney-new.webp', title: 'No Real Money', desc: 'Pure entertainment without financial risk. Safe for everyone.', gradient: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)' },
              { icon: '/icon-shield-new.webp', title: 'Secure Platform', desc: 'Your data is protected with enterprise-grade security measures.', gradient: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)' },
              { icon: '/icon-trophy-new.webp', title: 'Real-Time Scores', desc: 'Live updates and instant point calculations during matches.', gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)' },
              { icon: '/feature-easy.webp', title: 'Easy to Play', desc: 'Simple interface designed for both beginners and experts.', gradient: 'linear-gradient(135deg, #ec4899 0%, #db2777 100%)' },
            ].map((feature, i) => (
              <div key={i} style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '24px',
                padding: '40px',
                transition: 'all 0.3s',
                position: 'relative',
                overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: feature.gradient,
                }} />
                <div style={{
                  width: '80px',
                  height: '80px',
                  marginBottom: '24px',
                  position: 'relative',
                }}>
                  <Image src={feature.icon} alt={feature.title} fill style={{ objectFit: 'contain' }} />
                </div>
                <h3 style={{
                  fontSize: '22px',
                  fontWeight: 800,
                  color: '#ffffff',
                  marginBottom: '14px',
                }}>{feature.title}</h3>
                <p style={{
                  fontSize: '15px',
                  color: '#64748b',
                  lineHeight: 1.8,
                }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Matches Section */}
      <section style={{
        padding: '120px 0',
        background: '#0a0f1c',
        position: 'relative',
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '50px',
            flexWrap: 'wrap',
            gap: '20px',
          }}>
            <div>
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(239,68,68,0.15)',
                border: '1px solid rgba(239,68,68,0.3)',
                color: '#ef4444',
                padding: '10px 20px',
                borderRadius: '50px',
                fontSize: '14px',
                fontWeight: 700,
                marginBottom: '16px',
              }}>
                <span style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#ef4444',
                  animation: 'pulse 2s infinite',
                }} />
                LIVE & UPCOMING
              </span>
              <h2 style={{
                fontSize: '42px',
                fontWeight: 900,
                color: '#ffffff',
              }}>
                Today&apos;s Matches
              </h2>
            </div>
            <Link href="/contests" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              background: 'linear-gradient(135deg, #ff6b35 0%, #ff8f35 100%)',
              color: '#ffffff',
              padding: '14px 28px',
              borderRadius: '12px',
              textDecoration: 'none',
              fontWeight: 700,
              fontSize: '15px',
              boxShadow: '0 4px 20px rgba(255,107,53,0.3)',
            }}>
              View All Matches
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>

          {loading ? (
            <div style={{
              textAlign: 'center',
              padding: '80px 0',
              color: '#64748b',
            }}>
              <div style={{
                width: '50px',
                height: '50px',
                border: '4px solid rgba(255,107,53,0.2)',
                borderTopColor: '#ff6b35',
                borderRadius: '50%',
                margin: '0 auto 20px',
                animation: 'spin 1s linear infinite',
              }} />
              Loading matches...
            </div>
          ) : matches.length === 0 ? (
            <div style={{
              textAlign: 'center',
              padding: '80px',
              background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
              borderRadius: '24px',
              border: '1px solid rgba(255,255,255,0.1)',
            }}>
              <div style={{ fontSize: '60px', marginBottom: '20px' }}>🏏</div>
              <p style={{ color: '#64748b', fontSize: '18px' }}>No matches available right now. Check back soon!</p>
            </div>
          ) : (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
              gap: '24px',
            }}>
              {matches.slice(0, 6).map((match) => (
                <div key={match.id} style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '20px',
                  padding: '28px',
                  transition: 'all 0.3s',
                }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '20px',
                  }}>
                    <span style={{
                      background: match.matchStarted && !match.matchEnded
                        ? 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)'
                        : 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
                      color: '#ffffff',
                      padding: '8px 16px',
                      borderRadius: '20px',
                      fontSize: '12px',
                      fontWeight: 700,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                    }}>
                      {match.matchStarted && !match.matchEnded ? (
                        <>
                          <span style={{
                            width: '6px',
                            height: '6px',
                            borderRadius: '50%',
                            background: '#ffffff',
                            animation: 'pulse 1s infinite',
                          }} />
                          LIVE
                        </>
                      ) : 'UPCOMING'}
                    </span>
                    <span style={{
                      background: 'rgba(255,255,255,0.1)',
                      color: '#94a3b8',
                      padding: '6px 14px',
                      borderRadius: '8px',
                      fontSize: '12px',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                    }}>
                      {match.matchType}
                    </span>
                  </div>
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: 800,
                    color: '#ffffff',
                    marginBottom: '12px',
                    lineHeight: 1.4,
                  }}>
                    {match.teams?.join(' vs ') || match.name}
                  </h3>
                  <p style={{
                    fontSize: '14px',
                    color: '#64748b',
                    marginBottom: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}>
                    <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    {match.venue || 'Venue TBA'}
                  </p>
                  <Link href={`/match/${match.id}`} style={{
                    display: 'block',
                    textAlign: 'center',
                    background: 'linear-gradient(135deg, #ff6b35 0%, #ff8f35 100%)',
                    color: '#ffffff',
                    padding: '14px',
                    borderRadius: '12px',
                    fontWeight: 700,
                    fontSize: '15px',
                    textDecoration: 'none',
                    boxShadow: '0 4px 20px rgba(255,107,53,0.3)',
                  }}>
                    Create Team
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* How to Play Section */}
      <section style={{
        padding: '120px 0',
        background: 'linear-gradient(180deg, #111827 0%, #0a0f1c 100%)',
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
        }}>
          <div style={{ textAlign: 'center', marginBottom: '70px' }}>
            <span style={{
              display: 'inline-block',
              background: 'rgba(59,130,246,0.15)',
              border: '1px solid rgba(59,130,246,0.3)',
              color: '#3b82f6',
              padding: '10px 24px',
              borderRadius: '50px',
              fontSize: '14px',
              fontWeight: 700,
              marginBottom: '20px',
              letterSpacing: '1px',
            }}>
              GET STARTED
            </span>
            <h2 style={{
              fontSize: '48px',
              fontWeight: 900,
              color: '#ffffff',
              marginBottom: '20px',
            }}>
              How to Play
            </h2>
            <p style={{
              fontSize: '18px',
              color: '#64748b',
              maxWidth: '600px',
              margin: '0 auto',
            }}>
              Start your fantasy cricket journey in just 3 simple steps
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '40px',
          }}>
            {[
              { step: '01', icon: '/step1-new.webp', title: 'Select a Match', desc: 'Browse upcoming matches and choose the one you want to play.', color: '#ff6b35' },
              { step: '02', icon: '/step2-new.webp', title: 'Create Your Team', desc: 'Pick 11 players within the budget. Choose your Captain and Vice-Captain.', color: '#3b82f6' },
              { step: '03', icon: '/step3-new.webp', title: 'Compete & Win', desc: 'Join contests and compete with other players based on real match performance.', color: '#22c55e' },
            ].map((item, i) => (
              <div key={i} style={{ textAlign: 'center', position: 'relative' }}>
                {i < 2 && (
                  <div style={{
                    position: 'absolute',
                    top: '80px',
                    right: '-20px',
                    width: '40px',
                    height: '2px',
                    background: 'linear-gradient(90deg, rgba(255,255,255,0.2) 0%, transparent 100%)',
                  }} />
                )}
                <div style={{
                  position: 'relative',
                  width: '160px',
                  height: '160px',
                  margin: '0 auto 30px',
                }}>
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    borderRadius: '50%',
                    background: `linear-gradient(135deg, ${item.color}20 0%, transparent 70%)`,
                  }} />
                  <Image src={item.icon} alt={item.title} fill style={{ objectFit: 'contain' }} />
                  <div style={{
                    position: 'absolute',
                    top: '-5px',
                    right: '10px',
                    width: '45px',
                    height: '45px',
                    borderRadius: '50%',
                    background: `linear-gradient(135deg, ${item.color} 0%, ${item.color}cc 100%)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    fontWeight: 900,
                    fontSize: '16px',
                    boxShadow: `0 8px 25px ${item.color}60`,
                  }}>
                    {item.step}
                  </div>
                </div>
                <h3 style={{
                  fontSize: '24px',
                  fontWeight: 800,
                  color: '#ffffff',
                  marginBottom: '14px',
                }}>{item.title}</h3>
                <p style={{
                  fontSize: '16px',
                  color: '#64748b',
                  lineHeight: 1.7,
                  maxWidth: '280px',
                  margin: '0 auto',
                }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '60px' }}>
            <Link href="/how-to-play" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              background: 'transparent',
              color: '#ff6b35',
              padding: '16px 32px',
              borderRadius: '14px',
              fontWeight: 700,
              fontSize: '16px',
              textDecoration: 'none',
              border: '2px solid #ff6b35',
              transition: 'all 0.3s',
            }}>
              View Detailed Guide
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{
        padding: '100px 0',
        background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '40px',
            textAlign: 'center',
          }}>
            {[
              { value: '10,000+', label: 'Active Players', color: '#ff6b35' },
              { value: '500+', label: 'Daily Contests', color: '#22c55e' },
              { value: '100%', label: 'Free to Play', color: '#3b82f6' },
              { value: '₹0', label: 'Real Money', color: '#f59e0b' },
            ].map((stat, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '20px',
                padding: '40px 20px',
              }}>
                <div style={{
                  fontSize: '52px',
                  fontWeight: 900,
                  color: stat.color,
                  marginBottom: '10px',
                }}>{stat.value}</div>
                <div style={{
                  fontSize: '16px',
                  color: '#94a3b8',
                  fontWeight: 600,
                }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '120px 0',
        background: 'linear-gradient(135deg, #ff6b35 0%, #ff8f35 50%, #ffb347 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '5%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.1)',
          transform: 'translateY(-50%)',
          filter: 'blur(60px)',
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-100px',
          right: '10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.08)',
          filter: 'blur(80px)',
        }} />
        
        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
          padding: '0 24px',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1,
        }}>
          <h2 style={{
            fontSize: '56px',
            fontWeight: 900,
            color: '#ffffff',
            marginBottom: '24px',
            letterSpacing: '-1px',
          }}>
            Ready to Start Playing?
          </h2>
          <p style={{
            fontSize: '22px',
            color: 'rgba(255,255,255,0.9)',
            marginBottom: '48px',
            lineHeight: 1.6,
          }}>
            Join thousands of cricket fans and start your fantasy journey today. 
            <br />It&apos;s completely <strong>FREE!</strong>
          </p>
          <Link href="/signup" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '14px',
            background: '#ffffff',
            color: '#ff6b35',
            padding: '22px 48px',
            borderRadius: '16px',
            fontWeight: 800,
            fontSize: '20px',
            textDecoration: 'none',
            boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
            transition: 'all 0.3s',
          }}>
            Create Free Account
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </section>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
