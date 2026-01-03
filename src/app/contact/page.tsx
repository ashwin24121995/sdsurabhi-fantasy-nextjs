'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to an API
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#1e3a5f] to-[#0d1f33] py-16">
        <div className="container">
          <div className="flex items-center gap-4 mb-4">
            <Image src="/contact-us.webp" alt="Contact" width={60} height={60} />
            <div>
              <h1 className="text-4xl font-bold text-white">Contact Us</h1>
              <p className="text-gray-300">We&apos;re here to help</p>
            </div>
          </div>
          <div className="mt-4 bg-[#ff6b35] inline-block px-4 py-2 rounded-full text-white font-semibold text-sm">
            🎮 100% FREE Platform | No Real Money
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-[#1e3a5f] mb-6">Send Us a Message</h2>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl">✓</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#1e3a5f] mb-2">Message Sent!</h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for contacting us. We&apos;ll get back to you within 24-48 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="btn btn-primary"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Your Name *</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your name"
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
                    <label>Subject *</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="account">Account Issues</option>
                      <option value="technical">Technical Support</option>
                      <option value="feedback">Feedback</option>
                      <option value="partnership">Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Message *</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="How can we help you?"
                      rows={5}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff6b35] focus:border-transparent"
                    />
                  </div>

                  <button type="submit" className="btn btn-primary w-full">
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <div className="bg-white rounded-xl shadow-sm p-8 mb-6">
                <h2 className="text-2xl font-bold text-[#1e3a5f] mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-[#e8f4fc] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">📧</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1e3a5f]">Email</h3>
                      <p className="text-gray-600">support@sdsurabhi.com</p>
                      <p className="text-sm text-gray-500">We respond within 24-48 hours</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-[#e8f4fc] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">📞</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1e3a5f]">Phone</h3>
                      <p className="text-gray-600">+91-XXXXXXXXXX</p>
                      <p className="text-sm text-gray-500">Mon-Fri, 10 AM - 6 PM IST</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-[#e8f4fc] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">📍</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1e3a5f]">Location</h3>
                      <p className="text-gray-600">India</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#e8f4fc] rounded-xl p-8">
                <h3 className="font-bold text-[#1e3a5f] mb-4">Quick Links</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/faq" className="text-[#ff6b35] hover:underline flex items-center gap-2">
                      <span>→</span> Frequently Asked Questions
                    </Link>
                  </li>
                  <li>
                    <Link href="/how-to-play" className="text-[#ff6b35] hover:underline flex items-center gap-2">
                      <span>→</span> How to Play
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="text-[#ff6b35] hover:underline flex items-center gap-2">
                      <span>→</span> Terms & Conditions
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy" className="text-[#ff6b35] hover:underline flex items-center gap-2">
                      <span>→</span> Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/responsible-gaming" className="text-[#ff6b35] hover:underline flex items-center gap-2">
                      <span>→</span> Responsible Gaming
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="bg-[#1e3a5f] rounded-xl p-8 mt-6 text-white">
                <h3 className="font-bold mb-4">Important Notice</h3>
                <p className="text-gray-300 text-sm">
                  SDSURABHI is a 100% FREE fantasy cricket platform. We do not involve any real money transactions. If anyone contacts you claiming to be from SDSURABHI asking for money, please report it immediately.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
