import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#1e3a5f] to-[#0d1f33] py-16">
        <div className="container">
          <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-gray-300">Last updated: January 2025</p>
          <div className="mt-4 bg-[#ff6b35] inline-block px-4 py-2 rounded-full text-white font-semibold text-sm">
            Your Privacy Matters | No Data Selling
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container max-w-4xl">
          <div className="bg-white rounded-xl shadow-sm p-8 md:p-12">
            
            <div className="bg-[#e8f4fc] rounded-lg p-6 mb-8">
              <p className="text-[#1e3a5f] font-semibold">
                🔒 We are committed to protecting your privacy. We do NOT sell your personal data to third parties.
              </p>
            </div>

            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4">1. Introduction</h2>
              <p className="text-gray-600 mb-6">
                SDSURABHI (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you use our free fantasy cricket platform.
              </p>

              <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4">2. Information We Collect</h2>
              <p className="text-gray-600 mb-4">We collect the following types of information:</p>
              
              <h3 className="text-xl font-semibold text-[#1e3a5f] mb-3">2.1 Personal Information</h3>
              <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                <li>Name (first and last name)</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Date of birth (for age verification)</li>
                <li>State of residence (for eligibility verification)</li>
                <li>Username</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#1e3a5f] mb-3">2.2 Usage Information</h3>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>Contest participation history</li>
                <li>Team creation data</li>
                <li>Login timestamps</li>
                <li>Device information</li>
                <li>IP address</li>
                <li>Browser type</li>
              </ul>

              <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">We use your information to:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>Create and manage your account</li>
                <li>Verify your age and state eligibility</li>
                <li>Provide our fantasy cricket services</li>
                <li>Calculate and display leaderboard rankings</li>
                <li>Send important service updates</li>
                <li>Improve our platform and user experience</li>
                <li>Prevent fraud and ensure fair play</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4">4. Data Security</h2>
              <p className="text-gray-600 mb-6">
                We implement industry-standard security measures to protect your personal data, including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>Encryption of sensitive data</li>
                <li>Secure password hashing</li>
                <li>Regular security audits</li>
                <li>Access controls and authentication</li>
                <li>Secure data storage</li>
              </ul>

              <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4">5. Data Sharing</h2>
              <p className="text-gray-600 mb-4">
                <strong>We do NOT sell your personal data.</strong> We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>With service providers who help us operate the platform</li>
                <li>When required by law or legal process</li>
                <li>To protect our rights and prevent fraud</li>
                <li>With your explicit consent</li>
              </ul>

              <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4">6. Cookies and Tracking</h2>
              <p className="text-gray-600 mb-6">
                We use cookies and similar technologies to enhance your experience, remember your preferences, and analyze platform usage. You can control cookie settings through your browser.
              </p>

              <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4">7. Your Rights</h2>
              <p className="text-gray-600 mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>Access your personal data</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your account</li>
                <li>Opt-out of marketing communications</li>
                <li>Export your data</li>
              </ul>

              <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4">8. Data Retention</h2>
              <p className="text-gray-600 mb-6">
                We retain your personal data for as long as your account is active or as needed to provide services. You may request account deletion at any time, and we will delete your data within 30 days, except where retention is required by law.
              </p>

              <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4">9. Children&apos;s Privacy</h2>
              <p className="text-gray-600 mb-6">
                Our platform is not intended for users under 18 years of age. We do not knowingly collect personal information from children. If we discover that a child under 18 has provided us with personal information, we will delete it immediately.
              </p>

              <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4">10. Third-Party Links</h2>
              <p className="text-gray-600 mb-6">
                Our platform may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to read their privacy policies.
              </p>

              <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4">11. Changes to This Policy</h2>
              <p className="text-gray-600 mb-6">
                We may update this Privacy Policy from time to time. We will notify you of significant changes by posting a notice on our platform or sending you an email.
              </p>

              <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4">12. Contact Us</h2>
              <p className="text-gray-600 mb-4">
                If you have questions about this Privacy Policy or want to exercise your rights, contact us at:
              </p>
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <p className="text-gray-700">Email: privacy@sdsurabhi.com</p>
                <p className="text-gray-700">Support: support@sdsurabhi.com</p>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t">
              <div className="flex flex-wrap gap-4">
                <Link href="/terms" className="text-[#ff6b35] hover:underline">Terms & Conditions</Link>
                <Link href="/responsible-gaming" className="text-[#ff6b35] hover:underline">Responsible Gaming</Link>
                <Link href="/contact" className="text-[#ff6b35] hover:underline">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
