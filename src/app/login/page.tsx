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

  const inputStyle = {
    width: '100%',
    padding: '14px 16px',
    border: '2px solid #e5e7eb',
    borderRadius: '8px',
    fontSize: '15px',
    backgroundColor: '#ffffff',
    color: '#333333',
    outline: 'none',
    transition: 'border-color 0.3s'
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '8px',
    fontWeight: 600,
    color: '#1e3a5f',
    fontSize: '14px'
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #1e3a5f 0%, #0d1f33 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '48px 16px' }}>
      <div style={{ maxWidth: '420px', width: '100%' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
            <Image src="/logo.webp" alt="SDSURABHI" width={60} height={60} />
            <span style={{ fontSize: '28px', fontWeight: 'bold', color: '#ffffff' }}>
              SDS<span style={{ color: '#ff6b35' }}>URABHI</span>
            </span>
          </Link>
          <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#ffffff', marginBottom: '8px' }}>Welcome Back!</h1>
          <p style={{ color: '#d1d5db' }}>Login to continue playing free fantasy cricket</p>
        </div>

        {/* Form Card */}
        <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', padding: '32px' }}>
          {/* Badge */}
          <div style={{ backgroundColor: '#e8f4fc', borderRadius: '8px', padding: '16px', marginBottom: '24px', textAlign: 'center' }}>
            <span style={{ color: '#1e3a5f', fontWeight: 600 }}>🎮 100% FREE | No Real Money</span>
          </div>

          {/* Error Message */}
          {error && (
            <div style={{ backgroundColor: '#fef2f2', border: '1px solid #fecaca', color: '#dc2626', borderRadius: '8px', padding: '16px', marginBottom: '24px' }}>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {/* Email */}
            <div style={{ marginBottom: '20px' }}>
              <label style={labelStyle}>Email Address</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Enter your email"
                required
                style={inputStyle}
              />
            </div>

            {/* Password */}
            <div style={{ marginBottom: '24px' }}>
              <label style={labelStyle}>Password</label>
              <input
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                placeholder="Enter your password"
                required
                style={inputStyle}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              style={{
                width: '100%',
                padding: '16px 24px',
                backgroundColor: loading ? '#fdba74' : '#ff6b35',
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: 600,
                cursor: loading ? 'not-allowed' : 'pointer',
                transition: 'background-color 0.3s'
              }}
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>

          {/* Sign Up Link */}
          <div style={{ marginTop: '24px', textAlign: 'center' }}>
            <p style={{ color: '#4b5563' }}>
              Don&apos;t have an account?{' '}
              <Link href="/signup" style={{ color: '#ff6b35', fontWeight: 600, textDecoration: 'underline' }}>
                Sign Up Free
              </Link>
            </p>
          </div>

          {/* Footer Links */}
          <div style={{ marginTop: '24px', paddingTop: '24px', borderTop: '1px solid #e5e7eb', textAlign: 'center', fontSize: '14px', color: '#6b7280' }}>
            <p>By logging in, you agree to our</p>
            <p>
              <Link href="/terms" style={{ color: '#1e3a5f', textDecoration: 'underline' }}>Terms & Conditions</Link>
              {' '}&{' '}
              <Link href="/privacy" style={{ color: '#1e3a5f', textDecoration: 'underline' }}>Privacy Policy</Link>
            </p>
          </div>
        </div>

        {/* Bottom Warning */}
        <p style={{ textAlign: 'center', color: '#9ca3af', fontSize: '14px', marginTop: '24px' }}>
          ⚠️ 18+ Only | Services not available in: AP, Assam, Nagaland, Odisha, Sikkim, Telangana
        </p>
      </div>
    </div>
  );
}
