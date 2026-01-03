'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface User {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  state: string;
  createdAt: string;
}

interface Team {
  id: number;
  teamName: string;
  matchName: string;
  matchType: string;
  totalPoints: number;
  createdAt: string;
}

export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [teams, setTeams] = useState<Team[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('teams');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch('/api/auth/me');
        if (!res.ok) {
          router.push('/login');
          return;
        }
        const data = await res.json();
        setUser(data.user);

        // Fetch user's teams
        const teamsRes = await fetch('/api/teams');
        if (teamsRes.ok) {
          const teamsData = await teamsRes.json();
          setTeams(teamsData.teams || []);
        }
      } catch {
        router.push('/login');
      }
      setLoading(false);
    };

    fetchProfile();
  }, [router]);

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/');
    router.refresh();
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin w-12 h-12 border-4 border-[#ff6b35] border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-gray-600">Loading profile...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#1e3a5f] to-[#0d1f33] py-16">
        <div className="container">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 bg-[#ff6b35] rounded-full flex items-center justify-center text-white text-4xl font-bold">
              {user.firstName?.[0]?.toUpperCase()}{user.lastName?.[0]?.toUpperCase()}
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">
                {user.firstName} {user.lastName}
              </h1>
              <p className="text-gray-300">@{user.username}</p>
              <div className="mt-2 flex gap-2">
                <span className="bg-[#ff6b35] text-white px-3 py-1 rounded-full text-sm">FREE Player</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="bg-white shadow-sm">
        <div className="container">
          <div className="flex gap-4 py-4">
            <button
              onClick={() => setActiveTab('teams')}
              className={`px-6 py-2 rounded-lg font-medium transition ${
                activeTab === 'teams'
                  ? 'bg-[#1e3a5f] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              My Teams
            </button>
            <button
              onClick={() => setActiveTab('stats')}
              className={`px-6 py-2 rounded-lg font-medium transition ${
                activeTab === 'stats'
                  ? 'bg-[#1e3a5f] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Statistics
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`px-6 py-2 rounded-lg font-medium transition ${
                activeTab === 'settings'
                  ? 'bg-[#1e3a5f] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Settings
            </button>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-10">
        <div className="container">
          {activeTab === 'teams' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-[#1e3a5f]">My Teams</h2>
                <Link href="/contests" className="btn btn-primary">
                  Create New Team
                </Link>
              </div>

              {teams.length === 0 ? (
                <div className="bg-white rounded-xl shadow-sm p-12 text-center">
                  <Image src="/default-team.webp" alt="No Teams" width={100} height={100} className="mx-auto mb-4 opacity-50" />
                  <h3 className="text-xl font-bold text-[#1e3a5f] mb-2">No Teams Yet</h3>
                  <p className="text-gray-600 mb-6">Create your first fantasy team and start competing!</p>
                  <Link href="/contests" className="btn btn-primary">
                    Browse Matches
                  </Link>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {teams.map((team) => (
                    <div key={team.id} className="bg-white rounded-xl shadow-sm p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-bold text-[#1e3a5f]">{team.teamName}</h3>
                          <p className="text-sm text-gray-500">{team.matchName}</p>
                        </div>
                        <span className="bg-[#e8f4fc] text-[#1e3a5f] px-3 py-1 rounded-full text-sm">
                          {team.matchType}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm text-gray-500">Points Earned</p>
                          <p className="text-2xl font-bold text-[#ff6b35]">{team.totalPoints}</p>
                        </div>
                        <p className="text-sm text-gray-400">
                          {new Date(team.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === 'stats' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl shadow-sm p-6 text-center">
                <p className="text-sm text-gray-500 mb-1">Total Teams</p>
                <p className="text-3xl font-bold text-[#1e3a5f]">{teams.length}</p>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-6 text-center">
                <p className="text-sm text-gray-500 mb-1">Total Points</p>
                <p className="text-3xl font-bold text-[#ff6b35]">
                  {teams.reduce((sum, t) => sum + t.totalPoints, 0)}
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-6 text-center">
                <p className="text-sm text-gray-500 mb-1">Best Score</p>
                <p className="text-3xl font-bold text-green-600">
                  {teams.length > 0 ? Math.max(...teams.map(t => t.totalPoints)) : 0}
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-6 text-center">
                <p className="text-sm text-gray-500 mb-1">Contests Played</p>
                <p className="text-3xl font-bold text-[#1e3a5f]">{teams.length}</p>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="max-w-2xl">
              <div className="bg-white rounded-xl shadow-sm p-8">
                <h2 className="text-2xl font-bold text-[#1e3a5f] mb-6">Account Settings</h2>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                      <p className="text-[#1e3a5f] font-medium">{user.firstName}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                      <p className="text-[#1e3a5f] font-medium">{user.lastName}</p>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                    <p className="text-[#1e3a5f] font-medium">@{user.username}</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <p className="text-[#1e3a5f] font-medium">{user.email}</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <p className="text-[#1e3a5f] font-medium">{user.phone}</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                    <p className="text-[#1e3a5f] font-medium">{user.state}</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Member Since</label>
                    <p className="text-[#1e3a5f] font-medium">
                      {new Date(user.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t">
                  <button
                    onClick={handleLogout}
                    className="btn bg-red-500 text-white hover:bg-red-600"
                  >
                    Logout
                  </button>
                </div>
              </div>

              <div className="bg-[#e8f4fc] rounded-xl p-6 mt-6">
                <p className="text-[#1e3a5f] text-sm">
                  <strong>Note:</strong> To update your profile information or delete your account, please contact our support team at support@sdsurabhi.com
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
