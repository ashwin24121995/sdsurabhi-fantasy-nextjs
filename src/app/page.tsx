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
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center bg-gradient-to-br from-[#1e3a5f] to-[#0d1f33] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image src="/hero-banner.webp" alt="Cricket" fill className="object-cover" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-2xl text-white">
            <div className="flex gap-3 mb-6 flex-wrap">
              <span className="bg-[#ff6b35] px-4 py-2 rounded-full font-bold text-sm">100% FREE</span>
              <span className="bg-green-500 px-4 py-2 rounded-full font-bold text-sm">NO REAL MONEY</span>
              <span className="bg-blue-500 px-4 py-2 rounded-full font-bold text-sm">SKILL BASED</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Play Fantasy Cricket <span className="text-[#ff6b35]">For FREE!</span>
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              Test your cricket knowledge, create your dream team, and compete with friends.
              100% free to play - no real money involved, ever!
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/signup" className="btn btn-primary text-lg px-8 py-4">
                Start Playing Free
              </Link>
              <Link href="/how-to-play" className="btn btn-outline border-white text-white hover:bg-white hover:text-[#1e3a5f] text-lg px-8 py-4">
                How It Works
              </Link>
            </div>
            <p className="mt-6 text-sm text-gray-400">
              ⚠️ 18+ Only | Not available in: AP, Assam, Nagaland, Odisha, Sikkim, Telangana
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[#e8f4fc]">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">Why SDSURABHI?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience the thrill of fantasy cricket without any financial risk
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center hover:shadow-xl transition">
              <Image src="/icon-free.webp" alt="Free" width={80} height={80} className="mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">100% FREE</h3>
              <p className="text-gray-600">
                No entry fees, no deposits, no hidden charges. Play unlimited contests for free!
              </p>
            </div>
            <div className="card text-center hover:shadow-xl transition">
              <Image src="/icon-skill.webp" alt="Skill" width={80} height={80} className="mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">SKILL BASED</h3>
              <p className="text-gray-600">
                Use your cricket knowledge to build winning teams. Pure skill, no luck involved!
              </p>
            </div>
            <div className="card text-center hover:shadow-xl transition">
              <Image src="/icon-no-money.webp" alt="No Money" width={80} height={80} className="mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">NO REAL MONEY</h3>
              <p className="text-gray-600">
                No cash prizes, no gambling. Just pure entertainment and bragging rights!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Live Matches Section */}
      <section className="py-20">
        <div className="container">
          <div className="flex justify-between items-center mb-10 flex-wrap gap-4">
            <div>
              <h2 className="text-3xl font-bold text-[#1e3a5f]">Live & Upcoming Matches</h2>
              <p className="text-gray-600">Join free contests and test your skills</p>
            </div>
            <Link href="/contests" className="btn btn-primary">
              View All Matches
            </Link>
          </div>

          {loading ? (
            <div className="text-center py-20">
              <div className="animate-spin w-12 h-12 border-4 border-[#ff6b35] border-t-transparent rounded-full mx-auto mb-4"></div>
              <p className="text-gray-600">Loading matches...</p>
            </div>
          ) : matches.length === 0 ? (
            <div className="text-center py-20 bg-gray-50 rounded-xl">
              <p className="text-gray-600 text-lg">No matches available right now. Check back soon!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {matches.slice(0, 6).map((match) => {
                const status = getMatchStatus(match);
                return (
                  <div key={match.id} className="card hover:shadow-xl transition">
                    <div className="flex justify-between items-center mb-4">
                      <span className={`badge ${status === 'live' ? 'badge-live' : 'badge-upcoming'}`}>
                        {status === 'live' ? '🔴 LIVE' : 'UPCOMING'}
                      </span>
                      <span className="text-sm text-gray-500">{match.matchType}</span>
                    </div>
                    <h3 className="font-bold text-[#1e3a5f] mb-2">{match.name}</h3>
                    <p className="text-sm text-gray-500 mb-4">{match.venue}</p>
                    {match.score && match.score.length > 0 && (
                      <div className="bg-gray-50 p-3 rounded-lg mb-4">
                        {match.score.map((s, i) => (
                          <p key={i} className="text-sm">
                            <span className="font-semibold">{s.inning}:</span> {s.r}/{s.w} ({s.o} ov)
                          </p>
                        ))}
                      </div>
                    )}
                    <p className="text-sm text-gray-600 mb-4">{match.status}</p>
                    <Link href={`/match/${match.id}`} className="btn btn-primary w-full">
                      Join Free Contest
                    </Link>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#1e3a5f] text-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#ff6b35] mb-2">10K+</div>
              <div className="text-gray-300">Active Players</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#ff6b35] mb-2">500+</div>
              <div className="text-gray-300">Daily Contests</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#ff6b35] mb-2">100%</div>
              <div className="text-gray-300">Free to Play</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#ff6b35] mb-2">₹0</div>
              <div className="text-gray-300">Real Money</div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Play Section */}
      <section className="py-20 bg-[#e8f4fc]">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">How to Play</h2>
            <p className="text-gray-600">Get started in 3 simple steps</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative inline-block mb-6">
                <Image src="/step1-select.webp" alt="Select Match" width={120} height={120} />
                <span className="absolute -top-2 -right-2 w-10 h-10 bg-[#ff6b35] rounded-full flex items-center justify-center text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">Select a Match</h3>
              <p className="text-gray-600">Choose from upcoming cricket matches</p>
            </div>
            <div className="text-center">
              <div className="relative inline-block mb-6">
                <Image src="/step2-team.webp" alt="Create Team" width={120} height={120} />
                <span className="absolute -top-2 -right-2 w-10 h-10 bg-[#ff6b35] rounded-full flex items-center justify-center text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">Create Your Team</h3>
              <p className="text-gray-600">Pick 11 players within the budget</p>
            </div>
            <div className="text-center">
              <div className="relative inline-block mb-6">
                <Image src="/step3-compete.webp" alt="Compete" width={120} height={120} />
                <span className="absolute -top-2 -right-2 w-10 h-10 bg-[#ff6b35] rounded-full flex items-center justify-center text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">Compete & Win</h3>
              <p className="text-gray-600">Earn points and climb the leaderboard</p>
            </div>
          </div>
          <div className="text-center mt-10">
            <Link href="/how-to-play" className="btn btn-primary">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">Why Choose SDSURABHI?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex gap-4 items-start">
              <Image src="/feature-secure.webp" alt="Secure" width={60} height={60} />
              <div>
                <h3 className="font-bold text-[#1e3a5f] mb-2">Secure Platform</h3>
                <p className="text-gray-600 text-sm">Your data is safe with industry-standard security</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <Image src="/feature-realtime.webp" alt="Real-time" width={60} height={60} />
              <div>
                <h3 className="font-bold text-[#1e3a5f] mb-2">Real-time Updates</h3>
                <p className="text-gray-600 text-sm">Live scores and instant point calculations</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <Image src="/feature-fair.webp" alt="Fair" width={60} height={60} />
              <div>
                <h3 className="font-bold text-[#1e3a5f] mb-2">Fair Play</h3>
                <p className="text-gray-600 text-sm">Transparent scoring system for all players</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <Image src="/feature-support.webp" alt="Support" width={60} height={60} />
              <div>
                <h3 className="font-bold text-[#1e3a5f] mb-2">24/7 Support</h3>
                <p className="text-gray-600 text-sm">Our team is always here to help you</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <Image src="/feature-mobile.webp" alt="Mobile" width={60} height={60} />
              <div>
                <h3 className="font-bold text-[#1e3a5f] mb-2">Mobile Friendly</h3>
                <p className="text-gray-600 text-sm">Play on any device, anywhere, anytime</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <Image src="/feature-easy.webp" alt="Easy" width={60} height={60} />
              <div>
                <h3 className="font-bold text-[#1e3a5f] mb-2">Easy to Use</h3>
                <p className="text-gray-600 text-sm">Simple interface for seamless experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#ff6b35] to-[#ff8c5a]">
        <div className="container text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Test Your Cricket Skills?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of cricket fans playing fantasy cricket for FREE!
          </p>
          <Link href="/signup" className="btn bg-white text-[#ff6b35] hover:bg-gray-100 text-lg px-10 py-4">
            Sign Up Free Now
          </Link>
          <p className="mt-6 text-sm opacity-80">
            No credit card required • 100% Free • No real money involved
          </p>
        </div>
      </section>
    </>
  );
}
