'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

interface Match {
  id: string;
  name: string;
  status: string;
  venue: string;
  date: string;
  dateTimeGMT: string;
  teams: string[];
  teamInfo?: Array<{
    name: string;
    shortname: string;
    img: string;
  }>;
  score?: Array<{
    r: number;
    w: number;
    o: number;
    inning: string;
  }>;
  matchType?: string;
}

export default function Home() {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/matches')
      .then(res => res.json())
      .then(data => {
        if (data.matches) {
          const filteredMatches = data.matches
            .filter((m: Match) => {
              const matchDate = new Date(m.dateTimeGMT);
              const now = new Date();
              return matchDate >= now || m.status.toLowerCase().includes('live');
            })
            .slice(0, 6);
          setMatches(filteredMatches);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <main style={{ background: '#0a0f1c', minHeight: '100vh' }}>
      {/* Hero Section */}
      <section style={{
        position: 'relative',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        padding: '60px 0',
      }}>
        {/* Background */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, #0a0f1c 0%, #1a1f3c 50%, #0a0f1c 100%)',
        }} />
        <Image
          src="/hero-banner-new.webp"
          alt="Background"
          fill
          style={{ objectFit: 'cover', opacity: 0.3 }}
          priority
        />
        
        {/* Gradient Overlays */}
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(255,107,53,0.15) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
        }} />
        <div style={{
          position: 'absolute',
          bottom: '10%',
          right: '10%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
        }} />

        <div style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 16px',
          width: '100%',
        }}>
          <div className="hero-grid" style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 1fr',
            gap: '40px',
            alignItems: 'center',
          }}>
            {/* Left Content */}
            <div>
              {/* Badge */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                background: 'rgba(34,197,94,0.15)',
                border: '1px solid rgba(34,197,94,0.3)',
                borderRadius: '50px',
                padding: '8px 20px',
                marginBottom: '24px',
              }}>
                <span style={{
                  width: '8px',
                  height: '8px',
                  background: '#22c55e',
                  borderRadius: '50%',
                  animation: 'pulse 2s infinite',
                }} />
                <span style={{ color: '#22c55e', fontSize: '14px', fontWeight: 600 }}>
                  100% FREE TO PLAY
                </span>
              </div>

              {/* Heading */}
              <h1 style={{
                fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                fontWeight: 900,
                lineHeight: 1.1,
                marginBottom: '20px',
                color: '#fff',
              }}>
                Play Fantasy Cricket{' '}
                <span style={{
                  background: 'linear-gradient(135deg, #ff6b35 0%, #ffb347 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>
                  Without Spending
                </span>{' '}
                a Single Rupee
              </h1>

              {/* Subtitle */}
              <p style={{
                fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                color: '#94a3b8',
                marginBottom: '32px',
                lineHeight: 1.7,
                maxWidth: '540px',
              }}>
                Join India&apos;s most trusted free fantasy cricket platform. Create teams, compete with friends, and climb the leaderboard - all without any financial risk.
              </p>

              {/* Feature Pills */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '12px',
                marginBottom: '32px',
              }}>
                {[
                  { icon: '🎯', text: 'No Entry Fee' },
                  { icon: '🧠', text: 'Skill Based' },
                  { icon: '💰', text: 'No Cash Prizes' },
                ].map((item, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '50px',
                    padding: '10px 20px',
                  }}>
                    <span style={{ fontSize: '16px' }}>{item.icon}</span>
                    <span style={{ color: '#e2e8f0', fontSize: '14px', fontWeight: 500 }}>{item.text}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
                marginBottom: '40px',
              }}>
                <Link href="/signup" style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  background: 'linear-gradient(135deg, #ff6b35 0%, #ff8f35 100%)',
                  color: '#fff',
                  padding: '16px 32px',
                  borderRadius: '12px',
                  fontWeight: 700,
                  fontSize: '16px',
                  textDecoration: 'none',
                  boxShadow: '0 8px 30px rgba(255,107,53,0.4)',
                  transition: 'transform 0.3s',
                }}>
                  Start Playing Free
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
                <Link href="/how-to-play" style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  background: 'rgba(255,255,255,0.05)',
                  border: '2px solid rgba(255,255,255,0.2)',
                  color: '#fff',
                  padding: '16px 32px',
                  borderRadius: '12px',
                  fontWeight: 600,
                  fontSize: '16px',
                  textDecoration: 'none',
                  transition: 'all 0.3s',
                }}>
                  How to Play
                </Link>
              </div>

              {/* Trust Stats */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '32px',
              }}>
                {[
                  { value: '10K+', label: 'Active Players' },
                  { value: '500+', label: 'Daily Contests' },
                  { value: '₹0', label: 'Real Money' },
                ].map((stat, i) => (
                  <div key={i}>
                    <div style={{
                      fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                      fontWeight: 900,
                      color: '#ff6b35',
                    }}>{stat.value}</div>
                    <div style={{ fontSize: '14px', color: '#64748b' }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Hero Image */}
            <div className="hero-image-container" style={{
              position: 'relative',
              height: '500px',
            }}>
              <Image
                src="/cricket-player-hero.webp"
                alt="Cricket Player"
                fill
                style={{ objectFit: 'contain', objectPosition: 'center' }}
                priority
              />
              
              {/* Floating Card */}
              <div className="floating-card" style={{
                position: 'absolute',
                bottom: '80px',
                left: '-20px',
                background: 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(20px)',
                borderRadius: '16px',
                padding: '20px',
                border: '1px solid rgba(255,255,255,0.2)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <svg width="24" height="24" fill="#fff" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  </div>
                  <div>
                    <div style={{ color: '#fff', fontWeight: 700, fontSize: '16px' }}>100% Legal</div>
                    <div style={{ color: '#94a3b8', fontSize: '12px' }}>Registered Company</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Disclaimer */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          background: 'rgba(0,0,0,0.5)',
          backdropFilter: 'blur(10px)',
          padding: '12px 16px',
          borderTop: '1px solid rgba(255,255,255,0.1)',
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
            fontSize: '12px',
            color: '#94a3b8',
          }}>
            <span>CIN: U41002UP2023PTC194590</span>
            <span style={{ opacity: 0.5 }}>|</span>
            <span>GST: 09ABMCS3759A1Z4</span>
            <span style={{ opacity: 0.5 }}>|</span>
            <span>18+ Only</span>
            <span style={{ opacity: 0.5 }}>|</span>
            <span>Not available in: AP, Assam, Nagaland, Odisha, Sikkim, Telangana</span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{
        padding: '80px 16px',
        background: '#0a0f1c',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 900,
              color: '#fff',
              marginBottom: '16px',
            }}>
              Why Choose <span style={{ color: '#ff6b35' }}>SDSURABHI</span>?
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '18px', maxWidth: '600px', margin: '0 auto' }}>
              India&apos;s most trusted free fantasy cricket platform
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
          }}>
            {[
              { icon: '/icon-free-new.webp', title: '100% Free', desc: 'No entry fees, no hidden charges. Play unlimited contests without spending a single rupee.' },
              { icon: '/icon-skill-new.webp', title: 'Skill Based', desc: 'Use your cricket knowledge to create winning teams. Success depends on your skills, not luck.' },
              { icon: '/icon-nomoney-new.webp', title: 'No Real Money', desc: 'No cash prizes or withdrawals. Pure entertainment without any financial risk.' },
              { icon: '/icon-shield-new.webp', title: 'Secure Platform', desc: 'Your data is protected with industry-standard security. Play with complete peace of mind.' },
              { icon: '/icon-trophy-new.webp', title: 'Real-Time Scores', desc: 'Live scores and fantasy points updated every 30 seconds during matches.' },
              { icon: '/step3-new.webp', title: 'Fair Play', desc: 'Transparent scoring system. All fantasy points calculated based on official match data.' },
            ].map((feature, i) => (
              <div key={i} style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '20px',
                padding: '32px',
                transition: 'all 0.3s',
              }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  marginBottom: '20px',
                  position: 'relative',
                }}>
                  <Image src={feature.icon} alt={feature.title} fill style={{ objectFit: 'contain' }} />
                </div>
                <h3 style={{ color: '#fff', fontSize: '20px', fontWeight: 700, marginBottom: '12px' }}>
                  {feature.title}
                </h3>
                <p style={{ color: '#94a3b8', fontSize: '15px', lineHeight: 1.6 }}>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Matches Section */}
      <section style={{
        padding: '80px 16px',
        background: 'linear-gradient(180deg, #111827 0%, #0a0f1c 100%)',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '40px',
            flexWrap: 'wrap',
            gap: '16px',
          }}>
            <div>
              <h2 style={{
                fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                fontWeight: 900,
                color: '#fff',
                marginBottom: '8px',
              }}>
                Live & Upcoming Matches
              </h2>
              <p style={{ color: '#94a3b8' }}>Join contests and create your dream team</p>
            </div>
            <Link href="/contests" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: '#ff6b35',
              fontWeight: 600,
              textDecoration: 'none',
            }}>
              View All Matches
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>

          {loading ? (
            <div style={{ textAlign: 'center', padding: '60px 0' }}>
              <div style={{
                width: '48px',
                height: '48px',
                border: '4px solid rgba(255,107,53,0.2)',
                borderTopColor: '#ff6b35',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite',
                margin: '0 auto 16px',
              }} />
              <p style={{ color: '#94a3b8' }}>Loading matches...</p>
            </div>
          ) : matches.length > 0 ? (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '24px',
            }}>
              {matches.map((match) => (
                <div key={match.id} style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '20px',
                  padding: '24px',
                  transition: 'all 0.3s',
                }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '16px',
                  }}>
                    <span style={{
                      background: match.status.toLowerCase().includes('live') 
                        ? 'rgba(239,68,68,0.2)' 
                        : 'rgba(34,197,94,0.2)',
                      color: match.status.toLowerCase().includes('live') ? '#ef4444' : '#22c55e',
                      padding: '6px 14px',
                      borderRadius: '50px',
                      fontSize: '12px',
                      fontWeight: 600,
                    }}>
                      {match.status.toLowerCase().includes('live') ? '🔴 LIVE' : '🟢 UPCOMING'}
                    </span>
                    <span style={{
                      background: 'rgba(255,255,255,0.1)',
                      padding: '6px 12px',
                      borderRadius: '8px',
                      fontSize: '11px',
                      color: '#94a3b8',
                    }}>
                      {match.matchType?.toUpperCase() || 'T20'}
                    </span>
                  </div>

                  <h3 style={{
                    color: '#fff',
                    fontSize: '16px',
                    fontWeight: 600,
                    marginBottom: '12px',
                    lineHeight: 1.4,
                  }}>
                    {match.teams[0]} vs {match.teams[1]}
                  </h3>

                  <p style={{
                    color: '#64748b',
                    fontSize: '13px',
                    marginBottom: '20px',
                  }}>
                    {match.venue || 'Venue TBA'}
                  </p>

                  <Link href={`/match/${match.id}`} style={{
                    display: 'block',
                    textAlign: 'center',
                    background: 'linear-gradient(135deg, #ff6b35 0%, #ff8f35 100%)',
                    color: '#fff',
                    padding: '14px',
                    borderRadius: '12px',
                    fontWeight: 600,
                    fontSize: '14px',
                    textDecoration: 'none',
                  }}>
                    Create Team
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div style={{
              textAlign: 'center',
              padding: '60px 20px',
              background: 'rgba(255,255,255,0.02)',
              borderRadius: '20px',
              border: '1px solid rgba(255,255,255,0.1)',
            }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>🏏</div>
              <h3 style={{ color: '#fff', fontSize: '20px', marginBottom: '8px' }}>No matches available right now</h3>
              <p style={{ color: '#94a3b8' }}>Check back soon for upcoming cricket matches!</p>
            </div>
          )}
        </div>
      </section>

      {/* How to Play Section */}
      <section style={{
        padding: '80px 16px',
        background: '#0a0f1c',
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 900,
              color: '#fff',
              marginBottom: '16px',
            }}>
              How to Play
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '18px' }}>
              Get started in 3 simple steps
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '40px',
          }}>
            {[
              { step: '1', icon: '/step1-new.webp', title: 'Select a Match', desc: 'Choose from live or upcoming cricket matches' },
              { step: '2', icon: '/step2-new.webp', title: 'Create Your Team', desc: 'Pick 11 players within the budget and select captain' },
              { step: '3', icon: '/step3-new.webp', title: 'Compete & Win', desc: 'Earn points based on real match performance' },
            ].map((item, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{
                  width: '100px',
                  height: '100px',
                  margin: '0 auto 24px',
                  position: 'relative',
                }}>
                  <Image src={item.icon} alt={item.title} fill style={{ objectFit: 'contain' }} />
                  <div style={{
                    position: 'absolute',
                    top: '-10px',
                    right: '-10px',
                    width: '36px',
                    height: '36px',
                    background: 'linear-gradient(135deg, #ff6b35 0%, #ff8f35 100%)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontWeight: 800,
                    fontSize: '16px',
                  }}>
                    {item.step}
                  </div>
                </div>
                <h3 style={{ color: '#fff', fontSize: '20px', fontWeight: 700, marginBottom: '12px' }}>
                  {item.title}
                </h3>
                <p style={{ color: '#94a3b8', fontSize: '15px' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <Link href="/how-to-play" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              background: 'rgba(255,255,255,0.05)',
              border: '2px solid rgba(255,255,255,0.2)',
              color: '#fff',
              padding: '14px 28px',
              borderRadius: '12px',
              fontWeight: 600,
              textDecoration: 'none',
            }}>
              Learn More About Scoring
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '80px 16px',
        background: 'linear-gradient(135deg, #ff6b35 0%, #ff8f35 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
          borderRadius: '50%',
        }} />
        
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          textAlign: 'center',
          position: 'relative',
          zIndex: 10,
        }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 900,
            color: '#fff',
            marginBottom: '20px',
          }}>
            Ready to Play?
          </h2>
          <p style={{
            fontSize: '18px',
            color: 'rgba(255,255,255,0.9)',
            marginBottom: '32px',
            maxWidth: '500px',
            margin: '0 auto 32px',
          }}>
            Join thousands of cricket fans playing fantasy cricket for free. No money, no risk, just pure fun!
          </p>
          <Link href="/signup" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            background: '#fff',
            color: '#ff6b35',
            padding: '18px 40px',
            borderRadius: '14px',
            fontWeight: 700,
            fontSize: '18px',
            textDecoration: 'none',
            boxShadow: '0 8px 30px rgba(0,0,0,0.2)',
          }}>
            Create Free Account
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </section>

      <style jsx global>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .hero-image-container {
            order: -1;
            height: 350px !important;
          }
          .floating-card {
            display: none !important;
          }
        }
        @media (max-width: 640px) {
          .hero-image-container {
            height: 280px !important;
          }
        }
      `}</style>
    </main>
  );
}
