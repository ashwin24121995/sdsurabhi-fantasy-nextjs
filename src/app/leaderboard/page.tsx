'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

interface LeaderboardEntry {
  id: number;
  userId: number;
  username: string;
  totalPoints: number;
  weeklyPoints: number;
  monthlyPoints: number;
  contestsPlayed: number;
  teamsCreated: number;
  rank: number;
}

export default function LeaderboardPage() {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    fetchLeaderboard(activeTab);
  }, [activeTab]);

  const fetchLeaderboard = async (type: string) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/leaderboard?type=${type}`);
      const data = await res.json();
      setLeaderboard(data.leaderboard || []);
    } catch (error) {
      console.error('Failed to fetch leaderboard:', error);
    }
    setLoading(false);
  };

  const getRankBadge = (rank: number) => {
    if (rank === 1) return <Image src="/rank-gold.webp" alt="Gold" width={40} height={40} />;
    if (rank === 2) return <Image src="/rank-silver.webp" alt="Silver" width={40} height={40} />;
    if (rank === 3) return <Image src="/rank-bronze.webp" alt="Bronze" width={40} height={40} />;
    return <span className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full font-bold text-gray-600">{rank}</span>;
  };

  const getPoints = (entry: LeaderboardEntry) => {
    if (activeTab === 'weekly') return entry.weeklyPoints;
    if (activeTab === 'monthly') return entry.monthlyPoints;
    return entry.totalPoints;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#1e3a5f] to-[#0d1f33] py-16">
        <div className="container">
          <div className="flex items-center gap-4 mb-4">
            <Image src="/trophy.webp" alt="Trophy" width={60} height={60} />
            <div>
              <h1 className="text-4xl font-bold text-white">Leaderboard</h1>
              <p className="text-gray-300">Top fantasy cricket players</p>
            </div>
          </div>
          <div className="bg-[#ff6b35] inline-block px-4 py-2 rounded-full text-white font-semibold text-sm mt-4">
            🎮 FREE TO PLAY | No Real Money Prizes
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="bg-white shadow-sm py-4 sticky top-[120px] z-40">
        <div className="container">
          <div className="flex gap-4">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-6 py-3 rounded-lg font-semibold transition ${
                activeTab === 'all'
                  ? 'bg-[#1e3a5f] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Time
            </button>
            <button
              onClick={() => setActiveTab('monthly')}
              className={`px-6 py-3 rounded-lg font-semibold transition ${
                activeTab === 'monthly'
                  ? 'bg-[#1e3a5f] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setActiveTab('weekly')}
              className={`px-6 py-3 rounded-lg font-semibold transition ${
                activeTab === 'weekly'
                  ? 'bg-[#1e3a5f] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Weekly
            </button>
          </div>
        </div>
      </section>

      {/* Leaderboard Table */}
      <section className="py-10">
        <div className="container">
          {loading ? (
            <div className="text-center py-20">
              <div className="animate-spin w-12 h-12 border-4 border-[#ff6b35] border-t-transparent rounded-full mx-auto mb-4"></div>
              <p className="text-gray-600">Loading leaderboard...</p>
            </div>
          ) : leaderboard.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-xl shadow-sm">
              <Image src="/trophy.webp" alt="Trophy" width={80} height={80} className="mx-auto mb-4 opacity-50" />
              <p className="text-gray-600 text-lg mb-2">No rankings yet</p>
              <p className="text-gray-500">Be the first to join contests and climb the leaderboard!</p>
            </div>
          ) : (
            <>
              {/* Top 3 */}
              {leaderboard.length >= 3 && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                  {/* 2nd Place */}
                  <div className="bg-white rounded-xl shadow-lg p-6 text-center order-2 md:order-1 md:mt-8">
                    <Image src="/rank-silver.webp" alt="Silver" width={60} height={60} className="mx-auto mb-4" />
                    <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-3 flex items-center justify-center text-2xl font-bold text-gray-600">
                      {leaderboard[1]?.username[0]?.toUpperCase()}
                    </div>
                    <h3 className="font-bold text-lg text-[#1e3a5f]">{leaderboard[1]?.username}</h3>
                    <p className="text-2xl font-bold text-[#ff6b35] mt-2">{getPoints(leaderboard[1])} pts</p>
                    <p className="text-sm text-gray-500 mt-1">{leaderboard[1]?.contestsPlayed} contests</p>
                  </div>

                  {/* 1st Place */}
                  <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl shadow-lg p-6 text-center order-1 md:order-2 border-2 border-yellow-400">
                    <Image src="/rank-gold.webp" alt="Gold" width={80} height={80} className="mx-auto mb-4" />
                    <div className="w-20 h-20 bg-yellow-400 rounded-full mx-auto mb-3 flex items-center justify-center text-3xl font-bold text-white">
                      {leaderboard[0]?.username[0]?.toUpperCase()}
                    </div>
                    <h3 className="font-bold text-xl text-[#1e3a5f]">{leaderboard[0]?.username}</h3>
                    <p className="text-3xl font-bold text-[#ff6b35] mt-2">{getPoints(leaderboard[0])} pts</p>
                    <p className="text-sm text-gray-500 mt-1">{leaderboard[0]?.contestsPlayed} contests</p>
                  </div>

                  {/* 3rd Place */}
                  <div className="bg-white rounded-xl shadow-lg p-6 text-center order-3 md:mt-12">
                    <Image src="/rank-bronze.webp" alt="Bronze" width={60} height={60} className="mx-auto mb-4" />
                    <div className="w-16 h-16 bg-orange-200 rounded-full mx-auto mb-3 flex items-center justify-center text-2xl font-bold text-orange-700">
                      {leaderboard[2]?.username[0]?.toUpperCase()}
                    </div>
                    <h3 className="font-bold text-lg text-[#1e3a5f]">{leaderboard[2]?.username}</h3>
                    <p className="text-2xl font-bold text-[#ff6b35] mt-2">{getPoints(leaderboard[2])} pts</p>
                    <p className="text-sm text-gray-500 mt-1">{leaderboard[2]?.contestsPlayed} contests</p>
                  </div>
                </div>
              )}

              {/* Full Table */}
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-[#1e3a5f] text-white">
                      <tr>
                        <th className="px-6 py-4 text-left">Rank</th>
                        <th className="px-6 py-4 text-left">Player</th>
                        <th className="px-6 py-4 text-center">Points</th>
                        <th className="px-6 py-4 text-center">Contests</th>
                        <th className="px-6 py-4 text-center">Teams</th>
                      </tr>
                    </thead>
                    <tbody>
                      {leaderboard.map((entry) => (
                        <tr key={entry.id} className="border-b hover:bg-gray-50 transition">
                          <td className="px-6 py-4">
                            {getRankBadge(entry.rank)}
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-[#ff6b35] rounded-full flex items-center justify-center text-white font-bold">
                                {entry.username[0]?.toUpperCase()}
                              </div>
                              <span className="font-semibold text-[#1e3a5f]">{entry.username}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-center font-bold text-[#ff6b35]">
                            {getPoints(entry)}
                          </td>
                          <td className="px-6 py-4 text-center text-gray-600">
                            {entry.contestsPlayed}
                          </td>
                          <td className="px-6 py-4 text-center text-gray-600">
                            {entry.teamsCreated}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Info Banner */}
      <section className="bg-[#e8f4fc] py-10">
        <div className="container text-center">
          <p className="text-[#1e3a5f] font-semibold">
            🏆 Rankings are based on fantasy points earned | No real money prizes | Pure skill-based competition
          </p>
        </div>
      </section>
    </div>
  );
}
