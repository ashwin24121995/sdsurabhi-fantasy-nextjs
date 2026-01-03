'use client';

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
  score?: { r: number; w: number; o: number; inning: string }[];
  matchStarted?: boolean;
  matchEnded?: boolean;
}

export default function ContestsPage() {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('date');

  useEffect(() => {
    const fetchMatches = () => {
      fetch('/api/matches')
        .then(res => res.json())
        .then(data => {
          setMatches(data.matches || []);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    };

    fetchMatches();
    // Refresh every 30 seconds
    const interval = setInterval(fetchMatches, 30000);
    return () => clearInterval(interval);
  }, []);

  const getMatchStatus = (match: Match) => {
    if (match.matchEnded) return 'completed';
    if (match.matchStarted) return 'live';
    return 'upcoming';
  };

  const filteredMatches = matches.filter(match => {
    if (filter === 'all') return true;
    if (filter === 'live') return match.matchStarted && !match.matchEnded;
    if (filter === 'upcoming') return !match.matchStarted;
    if (filter === 't20') return match.matchType?.toLowerCase().includes('t20');
    if (filter === 'odi') return match.matchType?.toLowerCase().includes('odi');
    if (filter === 'test') return match.matchType?.toLowerCase().includes('test');
    return true;
  });

  const sortedMatches = [...filteredMatches].sort((a, b) => {
    if (sortBy === 'date') {
      return new Date(a.dateTimeGMT || a.date).getTime() - new Date(b.dateTimeGMT || b.date).getTime();
    }
    return 0;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#1e3a5f] to-[#0d1f33] py-16">
        <div className="container">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-[#ff6b35] text-white px-4 py-1 rounded-full text-sm font-bold">FREE</span>
            <span className="text-white opacity-80">All contests are 100% free to join</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Cricket Contests</h1>
          <p className="text-gray-300 text-lg">Join free contests and compete with other cricket fans</p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white shadow-sm py-4 sticky top-[120px] z-40">
        <div className="container">
          <div className="flex flex-wrap gap-4 justify-between items-center">
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  filter === 'all' ? 'bg-[#1e3a5f] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All Matches
              </button>
              <button
                onClick={() => setFilter('live')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  filter === 'live' ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                🔴 Live
              </button>
              <button
                onClick={() => setFilter('upcoming')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  filter === 'upcoming' ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Upcoming
              </button>
              <button
                onClick={() => setFilter('t20')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  filter === 't20' ? 'bg-[#ff6b35] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                T20
              </button>
              <button
                onClick={() => setFilter('odi')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  filter === 'odi' ? 'bg-[#ff6b35] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                ODI
              </button>
              <button
                onClick={() => setFilter('test')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  filter === 'test' ? 'bg-[#ff6b35] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Test
              </button>
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border rounded-lg text-sm"
            >
              <option value="date">Sort by Date</option>
              <option value="name">Sort by Name</option>
            </select>
          </div>
        </div>
      </section>

      {/* Matches List */}
      <section className="py-10">
        <div className="container">
          {loading ? (
            <div className="text-center py-20">
              <div className="animate-spin w-12 h-12 border-4 border-[#ff6b35] border-t-transparent rounded-full mx-auto mb-4"></div>
              <p className="text-gray-600">Loading matches...</p>
            </div>
          ) : sortedMatches.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-xl shadow-sm">
              <p className="text-gray-600 text-lg mb-4">No matches found for the selected filter.</p>
              <button onClick={() => setFilter('all')} className="btn btn-primary">
                View All Matches
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedMatches.map((match) => {
                const status = getMatchStatus(match);
                const matchDate = new Date(match.dateTimeGMT || match.date);
                
                return (
                  <div key={match.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition overflow-hidden">
                    <div className={`px-4 py-2 ${status === 'live' ? 'bg-red-500' : 'bg-[#1e3a5f]'} text-white flex justify-between items-center`}>
                      <span className="font-semibold text-sm">
                        {status === 'live' ? '🔴 LIVE' : 'UPCOMING'}
                      </span>
                      <span className="text-sm opacity-80">{match.matchType}</span>
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-[#1e3a5f] text-lg mb-2">{match.name}</h3>
                      <p className="text-sm text-gray-500 mb-3">{match.venue}</p>
                      
                      {match.score && match.score.length > 0 && (
                        <div className="bg-gray-50 p-3 rounded-lg mb-3">
                          {match.score.map((s, i) => (
                            <p key={i} className="text-sm">
                              <span className="font-semibold">{s.inning}:</span> {s.r}/{s.w} ({s.o} ov)
                            </p>
                          ))}
                        </div>
                      )}
                      
                      <p className="text-sm text-gray-600 mb-4">{match.status}</p>
                      
                      <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                        <span>📅 {matchDate.toLocaleDateString()}</span>
                        <span>⏰ {matchDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                      </div>
                      
                      <div className="flex gap-2">
                        <Link href={`/match/${match.id}`} className="btn btn-primary flex-1 text-center">
                          Join Free
                        </Link>
                      </div>
                      
                      <p className="text-center text-xs text-gray-400 mt-3">
                        Entry: FREE | No real money
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Info Banner */}
      <section className="bg-[#e8f4fc] py-10">
        <div className="container text-center">
          <p className="text-[#1e3a5f] font-semibold">
            🎮 All contests are 100% FREE to join | No entry fees | No real money prizes | Pure skill-based gaming
          </p>
        </div>
      </section>
    </div>
  );
}
