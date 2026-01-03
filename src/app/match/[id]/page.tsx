'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, use } from 'react';
import { useRouter } from 'next/navigation';

interface Player {
  id: string;
  name: string;
  role?: string;
  battingStyle?: string;
  bowlingStyle?: string;
  country?: string;
}

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

export default function MatchPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const [match, setMatch] = useState<Match | null>(null);
  const [squad, setSquad] = useState<Player[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPlayers, setSelectedPlayers] = useState<Player[]>([]);
  const [captain, setCaptain] = useState<string | null>(null);
  const [viceCaptain, setViceCaptain] = useState<string | null>(null);
  const [teamName, setTeamName] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const fetchMatchData = async () => {
      try {
        const res = await fetch(`/api/matches/${id}`);
        const data = await res.json();
        setMatch(data.match);
        setSquad(data.squad || []);
      } catch (error) {
        console.error('Failed to fetch match:', error);
      }
      setLoading(false);
    };

    fetchMatchData();
    // Refresh every 30 seconds for live matches
    const interval = setInterval(fetchMatchData, 30000);
    return () => clearInterval(interval);
  }, [id]);

  const togglePlayer = (player: Player) => {
    if (selectedPlayers.find(p => p.id === player.id)) {
      setSelectedPlayers(selectedPlayers.filter(p => p.id !== player.id));
      if (captain === player.id) setCaptain(null);
      if (viceCaptain === player.id) setViceCaptain(null);
    } else if (selectedPlayers.length < 11) {
      setSelectedPlayers([...selectedPlayers, player]);
    }
  };

  const handleSubmit = async () => {
    setError('');
    setSuccess('');

    if (selectedPlayers.length !== 11) {
      setError('Please select exactly 11 players');
      return;
    }

    if (!captain) {
      setError('Please select a captain');
      return;
    }

    if (!viceCaptain) {
      setError('Please select a vice-captain');
      return;
    }

    if (captain === viceCaptain) {
      setError('Captain and vice-captain must be different players');
      return;
    }

    setSubmitting(true);

    try {
      const res = await fetch('/api/teams', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          matchId: id,
          matchName: match?.name,
          team1: match?.teams?.[0],
          team2: match?.teams?.[1],
          matchType: match?.matchType,
          matchDate: match?.dateTimeGMT || match?.date,
          players: selectedPlayers,
          captainId: captain,
          viceCaptainId: viceCaptain,
          teamName: teamName || `Team ${Date.now()}`
        })
      });

      const data = await res.json();

      if (!res.ok) {
        if (res.status === 401) {
          router.push('/login');
          return;
        }
        setError(data.error || 'Failed to create team');
        setSubmitting(false);
        return;
      }

      setSuccess('Team created successfully! Good luck!');
      setTimeout(() => router.push('/profile'), 2000);
    } catch {
      setError('Something went wrong. Please try again.');
    }
    setSubmitting(false);
  };

  const getRoleIcon = (role?: string) => {
    const r = role?.toLowerCase() || '';
    if (r.includes('bat')) return '/player-batsman.webp';
    if (r.includes('bowl')) return '/player-bowler.webp';
    if (r.includes('all')) return '/player-allrounder.webp';
    if (r.includes('keep') || r.includes('wk')) return '/player-keeper.webp';
    return '/player-batsman.webp';
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin w-12 h-12 border-4 border-[#ff6b35] border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-gray-600">Loading match details...</p>
        </div>
      </div>
    );
  }

  if (!match) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 text-lg mb-4">Match not found</p>
          <Link href="/contests" className="btn btn-primary">View All Matches</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Match Header */}
      <section className="bg-gradient-to-r from-[#1e3a5f] to-[#0d1f33] py-8">
        <div className="container">
          <div className="flex items-center gap-2 mb-4">
            <span className={`px-3 py-1 rounded-full text-sm font-bold ${
              match.matchStarted && !match.matchEnded ? 'bg-red-500 text-white animate-pulse' : 'bg-green-500 text-white'
            }`}>
              {match.matchStarted && !match.matchEnded ? '🔴 LIVE' : 'UPCOMING'}
            </span>
            <span className="text-gray-300">{match.matchType}</span>
            <span className="bg-[#ff6b35] text-white px-3 py-1 rounded-full text-sm font-bold ml-auto">FREE ENTRY</span>
          </div>
          
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">{match.name}</h1>
          <p className="text-gray-300">{match.venue}</p>
          
          {match.score && match.score.length > 0 && (
            <div className="mt-4 bg-white/10 rounded-lg p-4">
              <h3 className="text-white font-semibold mb-2">Live Score</h3>
              {match.score.map((s, i) => (
                <p key={i} className="text-white">
                  <span className="font-semibold">{s.inning}:</span> {s.r}/{s.w} ({s.o} overs)
                </p>
              ))}
            </div>
          )}
          
          <p className="text-gray-400 mt-4">{match.status}</p>
        </div>
      </section>

      {/* Team Creation */}
      <section className="py-8">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Player Selection */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-[#1e3a5f]">Select Players</h2>
                  <span className="text-[#ff6b35] font-bold">{selectedPlayers.length}/11 Selected</span>
                </div>

                {squad.length === 0 ? (
                  <div className="text-center py-10">
                    <p className="text-gray-500">Squad not available yet. Check back closer to match time.</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {squad.map((player) => {
                      const isSelected = selectedPlayers.find(p => p.id === player.id);
                      const isCaptain = captain === player.id;
                      const isViceCaptain = viceCaptain === player.id;
                      
                      return (
                        <div
                          key={player.id}
                          onClick={() => togglePlayer(player)}
                          className={`p-4 rounded-lg border-2 cursor-pointer transition ${
                            isSelected
                              ? 'border-[#ff6b35] bg-orange-50'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <Image
                              src={getRoleIcon(player.role)}
                              alt={player.role || 'Player'}
                              width={40}
                              height={40}
                            />
                            <div className="flex-1">
                              <p className="font-semibold text-[#1e3a5f]">{player.name}</p>
                              <p className="text-sm text-gray-500">{player.role || 'Player'}</p>
                            </div>
                            {isSelected && (
                              <div className="flex gap-1">
                                {isCaptain && (
                                  <Image src="/badge-captain.webp" alt="C" width={24} height={24} />
                                )}
                                {isViceCaptain && (
                                  <Image src="/badge-vice-captain.webp" alt="VC" width={24} height={24} />
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>

            {/* Team Summary */}
            <div>
              <div className="bg-white rounded-xl shadow-sm p-6 sticky top-[140px]">
                <h2 className="text-xl font-bold text-[#1e3a5f] mb-4">Your Team</h2>

                <div className="form-group">
                  <label>Team Name</label>
                  <input
                    type="text"
                    value={teamName}
                    onChange={(e) => setTeamName(e.target.value)}
                    placeholder="Enter team name"
                  />
                </div>

                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">Selected Players ({selectedPlayers.length}/11)</p>
                  <div className="space-y-2 max-h-[200px] overflow-y-auto">
                    {selectedPlayers.map((player) => (
                      <div key={player.id} className="flex items-center justify-between bg-gray-50 p-2 rounded">
                        <span className="text-sm font-medium">{player.name}</span>
                        <div className="flex gap-2">
                          <button
                            onClick={(e) => { e.stopPropagation(); setCaptain(player.id); }}
                            className={`text-xs px-2 py-1 rounded ${
                              captain === player.id ? 'bg-[#ff6b35] text-white' : 'bg-gray-200'
                            }`}
                          >
                            C
                          </button>
                          <button
                            onClick={(e) => { e.stopPropagation(); setViceCaptain(player.id); }}
                            className={`text-xs px-2 py-1 rounded ${
                              viceCaptain === player.id ? 'bg-[#1e3a5f] text-white' : 'bg-gray-200'
                            }`}
                          >
                            VC
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-[#e8f4fc] p-4 rounded-lg mb-4">
                  <p className="text-sm text-[#1e3a5f]">
                    <strong>Captain (C):</strong> 2x points<br />
                    <strong>Vice-Captain (VC):</strong> 1.5x points
                  </p>
                </div>

                {error && (
                  <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-4 text-sm">
                    {error}
                  </div>
                )}

                {success && (
                  <div className="bg-green-50 text-green-600 p-3 rounded-lg mb-4 text-sm">
                    {success}
                  </div>
                )}

                <button
                  onClick={handleSubmit}
                  disabled={submitting || selectedPlayers.length !== 11}
                  className="btn btn-primary w-full disabled:opacity-50"
                >
                  {submitting ? 'Creating Team...' : 'Create Team (FREE)'}
                </button>

                <p className="text-center text-xs text-gray-500 mt-4">
                  🎮 100% FREE | No entry fee | No real money
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
