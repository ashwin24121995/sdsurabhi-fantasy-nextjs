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

    // Validations
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

    // Check age
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

    // Check state restriction
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1e3a5f] to-[#0d1f33] py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-3 mb-6">
            <Image src="/logo.webp" alt="SDSURABHI" width={60} height={60} />
            <span className="text-3xl font-bold text-white">
              SDS<span className="text-[#ff6b35]">URABHI</span>
            </span>
          </Link>
          <h1 className="text-2xl font-bold text-white mb-2">Create Your Free Account</h1>
          <p className="text-gray-300">Join thousands of cricket fans playing for FREE</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="bg-[#e8f4fc] rounded-lg p-4 mb-6">
            <div className="flex flex-wrap justify-center gap-4 text-sm font-semibold">
              <span className="text-[#ff6b35]">✓ 100% FREE</span>
              <span className="text-green-600">✓ NO REAL MONEY</span>
              <span className="text-[#1e3a5f]">✓ SKILL BASED</span>
            </div>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 rounded-lg p-4 mb-6">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-group">
                <label>First Name *</label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  placeholder="Enter first name"
                  required
                />
              </div>

              <div className="form-group">
                <label>Last Name *</label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  placeholder="Enter last name"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Username *</label>
              <input
                type="text"
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                placeholder="Choose a username"
                required
              />
            </div>

            <div className="form-group">
              <label>Email Address *</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label>Phone Number *</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="Enter 10-digit phone number"
                pattern="[0-9]{10}"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-group">
                <label>Password *</label>
                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  placeholder="Min 8 characters"
                  minLength={8}
                  required
                />
              </div>

              <div className="form-group">
                <label>Confirm Password *</label>
                <input
                  type="password"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  placeholder="Confirm password"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-group">
                <label>Date of Birth * (Must be 18+)</label>
                <input
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                  max={new Date(new Date().setFullYear(new Date().getFullYear() - 18)).toISOString().split('T')[0]}
                  required
                />
              </div>

              <div className="form-group">
                <label>State *</label>
                <select
                  value={formData.state}
                  onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                  required
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

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
              <p className="text-sm text-yellow-800">
                <strong>⚠️ State Restrictions:</strong> Our services are not available in Andhra Pradesh, Assam, Nagaland, Odisha, Sikkim, and Telangana due to local regulations.
              </p>
            </div>

            <div className="space-y-4 mb-6">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.ageConfirm}
                  onChange={(e) => setFormData({ ...formData, ageConfirm: e.target.checked })}
                  className="mt-1"
                  required
                />
                <span className="text-sm text-gray-600">
                  I confirm that I am <strong>18 years of age or older</strong> and eligible to participate in skill-based gaming.
                </span>
              </label>

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.agreeTerms}
                  onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
                  className="mt-1"
                  required
                />
                <span className="text-sm text-gray-600">
                  I agree to the <Link href="/terms" className="text-[#ff6b35] hover:underline">Terms & Conditions</Link>,{' '}
                  <Link href="/privacy" className="text-[#ff6b35] hover:underline">Privacy Policy</Link>, and{' '}
                  <Link href="/responsible-gaming" className="text-[#ff6b35] hover:underline">Responsible Gaming Policy</Link>.
                </span>
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary w-full py-4 text-lg disabled:opacity-50"
            >
              {loading ? 'Creating Account...' : 'Create Free Account'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Already have an account?{' '}
              <Link href="/login" className="text-[#ff6b35] font-semibold hover:underline">
                Login
              </Link>
            </p>
          </div>

          <div className="mt-6 pt-6 border-t text-center">
            <p className="text-sm text-gray-500">
              🎮 This is a FREE skill-based gaming platform. No real money is involved in any contest.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
