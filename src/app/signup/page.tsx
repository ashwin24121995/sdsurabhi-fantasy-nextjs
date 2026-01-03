'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const INDIAN_STATES = [
  'Andaman and Nicobar Islands', 'Andhra Pradesh', 'Arunachal Pradesh', 'Assam',
  'Bihar', 'Chandigarh', 'Chhattisgarh', 'Dadra and Nagar Haveli and Daman and Diu',
  'Delhi', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jammu and Kashmir',
  'Jharkhand', 'Karnataka', 'Kerala', 'Ladakh', 'Lakshadweep', 'Madhya Pradesh',
  'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha',
  'Puducherry', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana',
  'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
];

const RESTRICTED_STATES = ['Andhra Pradesh', 'Assam', 'Nagaland', 'Odisha', 'Sikkim', 'Telangana'];

export default function SignupPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    username: '',
    password: '',
    confirmPassword: '',
    dateOfBirth: '',
    state: '',
    agreeTerms: false,
    ageConfirm: false
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters');
      return;
    }

    if (!formData.agreeTerms) {
      setError('You must agree to the Terms & Conditions');
      return;
    }

    if (!formData.ageConfirm) {
      setError('You must confirm that you are 18 years or older');
      return;
    }

    const birthDate = new Date(formData.dateOfBirth);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    if (age < 18) {
      setError('You must be at least 18 years old to register');
      return;
    }

    if (RESTRICTED_STATES.includes(formData.state)) {
      setError('Sorry, our services are not available in your state due to local regulations');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          username: formData.username,
          password: formData.password,
          dateOfBirth: formData.dateOfBirth,
          state: formData.state
        })
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Registration failed');
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
    padding: '12px 16px',
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
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #1e3a5f 0%, #0d1f33 100%)', padding: '48px 16px' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
            <Image src="/logo.webp" alt="SDSURABHI" width={60} height={60} />
            <span style={{ fontSize: '28px', fontWeight: 'bold', color: '#ffffff' }}>
              SDS<span style={{ color: '#ff6b35' }}>URABHI</span>
            </span>
          </Link>
          <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#ffffff', marginBottom: '8px' }}>Create Your Free Account</h1>
          <p style={{ color: '#d1d5db' }}>Join thousands of cricket fans playing for FREE</p>
        </div>

        {/* Form Card */}
        <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', padding: '32px' }}>
          {/* Badges */}
          <div style={{ backgroundColor: '#e8f4fc', borderRadius: '8px', padding: '16px', marginBottom: '24px' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px', fontSize: '14px', fontWeight: 600 }}>
              <span style={{ color: '#ff6b35' }}>✓ 100% FREE</span>
              <span style={{ color: '#10b981' }}>✓ NO REAL MONEY</span>
              <span style={{ color: '#1e3a5f' }}>✓ SKILL BASED</span>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div style={{ backgroundColor: '#fef2f2', border: '1px solid #fecaca', color: '#dc2626', borderRadius: '8px', padding: '16px', marginBottom: '24px' }}>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {/* Name Row */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
              <div>
                <label style={labelStyle}>First Name *</label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  placeholder="Enter first name"
                  required
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={labelStyle}>Last Name *</label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  placeholder="Enter last name"
                  required
                  style={inputStyle}
                />
              </div>
            </div>

            {/* Username */}
            <div style={{ marginBottom: '20px' }}>
              <label style={labelStyle}>Username *</label>
              <input
                type="text"
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                placeholder="Choose a username"
                required
                style={inputStyle}
              />
            </div>

            {/* Email */}
            <div style={{ marginBottom: '20px' }}>
              <label style={labelStyle}>Email Address *</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Enter your email"
                required
                style={inputStyle}
              />
            </div>

            {/* Phone */}
            <div style={{ marginBottom: '20px' }}>
              <label style={labelStyle}>Phone Number *</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="Enter 10-digit phone number"
                pattern="[0-9]{10}"
                required
                style={inputStyle}
              />
            </div>

            {/* Password Row */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
              <div>
                <label style={labelStyle}>Password *</label>
                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  placeholder="Min 8 characters"
                  minLength={8}
                  required
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={labelStyle}>Confirm Password *</label>
                <input
                  type="password"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  placeholder="Confirm password"
                  required
                  style={inputStyle}
                />
              </div>
            </div>

            {/* DOB and State Row */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
              <div>
                <label style={labelStyle}>Date of Birth * (Must be 18+)</label>
                <input
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                  max={new Date(new Date().setFullYear(new Date().getFullYear() - 18)).toISOString().split('T')[0]}
                  required
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={labelStyle}>State *</label>
                <select
                  value={formData.state}
                  onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                  required
                  style={{ ...inputStyle, cursor: 'pointer' }}
                >
                  <option value="">Select your state</option>
                  {INDIAN_STATES.map(state => (
                    <option key={state} value={state} disabled={RESTRICTED_STATES.includes(state)}>
                      {state} {RESTRICTED_STATES.includes(state) ? '(Not Available)' : ''}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* State Restriction Warning */}
            <div style={{ backgroundColor: '#fefce8', border: '1px solid #fde047', borderRadius: '8px', padding: '16px', marginBottom: '24px' }}>
              <p style={{ fontSize: '14px', color: '#854d0e' }}>
                <strong>⚠️ State Restrictions:</strong> Our services are not available in Andhra Pradesh, Assam, Nagaland, Odisha, Sikkim, and Telangana due to local regulations.
              </p>
            </div>

            {/* Checkboxes */}
            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', cursor: 'pointer', marginBottom: '16px' }}>
                <input
                  type="checkbox"
                  checked={formData.ageConfirm}
                  onChange={(e) => setFormData({ ...formData, ageConfirm: e.target.checked })}
                  required
                  style={{ width: '18px', height: '18px', marginTop: '2px', accentColor: '#ff6b35', flexShrink: 0 }}
                />
                <span style={{ fontSize: '14px', color: '#4b5563' }}>
                  I confirm that I am <strong>18 years of age or older</strong> and eligible to participate in skill-based gaming.
                </span>
              </label>

              <label style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={formData.agreeTerms}
                  onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
                  required
                  style={{ width: '18px', height: '18px', marginTop: '2px', accentColor: '#ff6b35', flexShrink: 0 }}
                />
                <span style={{ fontSize: '14px', color: '#4b5563' }}>
                  I agree to the <Link href="/terms" style={{ color: '#ff6b35', textDecoration: 'underline' }}>Terms & Conditions</Link>,{' '}
                  <Link href="/privacy" style={{ color: '#ff6b35', textDecoration: 'underline' }}>Privacy Policy</Link>, and{' '}
                  <Link href="/responsible-gaming" style={{ color: '#ff6b35', textDecoration: 'underline' }}>Responsible Gaming Policy</Link>.
                </span>
              </label>
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
              {loading ? 'Creating Account...' : 'Create Free Account'}
            </button>
          </form>

          {/* Login Link */}
          <div style={{ marginTop: '24px', textAlign: 'center' }}>
            <p style={{ color: '#4b5563' }}>
              Already have an account?{' '}
              <Link href="/login" style={{ color: '#ff6b35', fontWeight: 600, textDecoration: 'underline' }}>
                Login
              </Link>
            </p>
          </div>

          {/* Footer Note */}
          <div style={{ marginTop: '24px', paddingTop: '24px', borderTop: '1px solid #e5e7eb', textAlign: 'center' }}>
            <p style={{ fontSize: '14px', color: '#6b7280' }}>
              🎮 This is a FREE skill-based gaming platform. No real money is involved in any contest.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
