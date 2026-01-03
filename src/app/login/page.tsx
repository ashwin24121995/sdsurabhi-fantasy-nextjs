'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Login failed');
        setLoading(false);
        return;
      }

      router.push('/');
      router.refresh();
    } catch {
      setError('Something went wrong. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1e3a5f] to-[#0d1f33] flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-3 mb-6">
            <Image src="/logo.webp" alt="SDSURABHI" width={60} height={60} />
            <span className="text-3xl font-bold text-white">
              SDS<span className="text-[#ff6b35]">URABHI</span>
            </span>
          </Link>
          <h1 className="text-2xl font-bold text-white mb-2">Welcome Back!</h1>
          <p className="text-gray-300">Login to continue playing free fantasy cricket</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="bg-[#e8f4fc] rounded-lg p-4 mb-6 text-center">
            <span className="text-[#1e3a5f] font-semibold">🎮 100% FREE | No Real Money</span>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 rounded-lg p-4 mb-6">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                placeholder="Enter your password"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary w-full py-4 text-lg disabled:opacity-50"
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Don&apos;t have an account?{' '}
              <Link href="/signup" className="text-[#ff6b35] font-semibold hover:underline">
                Sign Up Free
              </Link>
            </p>
          </div>

          <div className="mt-6 pt-6 border-t text-center text-sm text-gray-500">
            <p>By logging in, you agree to our</p>
            <p>
              <Link href="/terms" className="text-[#1e3a5f] hover:underline">Terms & Conditions</Link>
              {' '}&{' '}
              <Link href="/privacy" className="text-[#1e3a5f] hover:underline">Privacy Policy</Link>
            </p>
          </div>
        </div>

        <p className="text-center text-gray-400 text-sm mt-6">
          ⚠️ 18+ Only | Services not available in: AP, Assam, Nagaland, Odisha, Sikkim, Telangana
        </p>
      </div>
    </div>
  );
}
