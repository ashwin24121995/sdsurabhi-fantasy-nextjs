import Link from 'next/link';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#1e3a5f] to-[#0d1f33] py-16">
        <div className="container">
          <h1 className="text-4xl font-bold text-white mb-4">Terms & Conditions</h1>
          <p className="text-gray-300">Last updated: January 2025</p>
          <div className="mt-4 bg-[#ff6b35] inline-block px-4 py-2 rounded-full text-white font-semibold text-sm">
            100% FREE Platform | No Real Money
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container max-w-4xl">
          <div className="bg-white rounded-xl shadow-sm p-8 md:p-12">
            
            <div className="bg-[#e8f4fc] rounded-lg p-6 mb-8">
              <p className="text-[#1e3a5f] font-semibold">
                ⚠️ IMPORTANT: SDSURABHI is a 100% FREE fantasy cricket platform. No real money is involved in any contest. There are no entry fees, deposits, or cash prizes.
              </p>
            </div>

            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600 mb-6">
                By accessing or using SDSURABHI (&quot;Platform&quot;), you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
              </p>

              <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4">2. Nature of Service</h2>
              <p className="text-gray-600 mb-4">
                SDSURABHI is a <strong>FREE skill-based fantasy cricket gaming platform</strong>. We explicitly state that:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>All contests are 100% FREE to join</li>
                <li>No real money deposits or payments are required</li>
                <li>No real money or cash prizes are offered</li>
                <li>This is NOT a gambling or betting platform</li>
                <li>Points and rankings are for entertainment purposes only</li>
              </ul>

              <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4">3. Eligibility</h2>
              <p className="text-gray-600 mb-4">To use our Platform, you must:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>Be at least 18 years of age</li>
                <li>Be a resident of India</li>
                <li>NOT be a resident of the following restricted states: Andhra Pradesh, Assam, Nagaland, Odisha, Sikkim, and Telangana</li>
                <li>Have the legal capacity to enter into binding contracts</li>
              </ul>

              <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4">4. State Restrictions</h2>
              <p className="text-gray-600 mb-4">
                Our services are NOT available in the following Indian states due to local laws and regulations:
              </p>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                <ul className="list-disc pl-6 text-yellow-800 space-y-1">
                  <li>Andhra Pradesh</li>
                  <li>Assam</li>
                  <li>Nagaland</li>
                  <li>Odisha</li>
                  <li>Sikkim</li>
                  <li>Telangana</li>
                </ul>
              </div>
              <p className="text-gray-600 mb-6">
                Users from these states are prohibited from registering or participating in any contests on our Platform.
              </p>

              <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4">5. User Account</h2>
              <p className="text-gray-600 mb-4">When creating an account, you agree to:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Not share your account with others</li>
                <li>Not create multiple accounts</li>
                <li>Notify us immediately of any unauthorized access</li>
              </ul>

              <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4">6. Game of Skill</h2>
              <p className="text-gray-600 mb-6">
                Fantasy cricket as offered on SDSURABHI is a game of skill. Success depends on the user&apos;s knowledge of cricket, player statistics, match conditions, and strategic decision-making. The outcome is determined by the actual performance of real cricket players in real matches.
              </p>

              <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4">7. Prohibited Activities</h2>
              <p className="text-gray-600 mb-4">Users are prohibited from:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>Using automated systems or bots</li>
                <li>Manipulating or attempting to manipulate contests</li>
                <li>Colluding with other users</li>
                <li>Creating fake or fraudulent accounts</li>
                <li>Violating any applicable laws or regulations</li>
                <li>Harassing or abusing other users</li>
              </ul>

              <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4">8. Intellectual Property</h2>
              <p className="text-gray-600 mb-6">
                All content on the Platform, including logos, designs, text, graphics, and software, is the property of SDSURABHI and is protected by intellectual property laws. Users may not copy, modify, or distribute any content without prior written consent.
              </p>

              <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4">9. Disclaimer of Warranties</h2>
              <p className="text-gray-600 mb-6">
                The Platform is provided &quot;as is&quot; without warranties of any kind. We do not guarantee uninterrupted or error-free service. Cricket data is sourced from third-party providers and may occasionally contain inaccuracies.
              </p>

              <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4">10. Limitation of Liability</h2>
              <p className="text-gray-600 mb-6">
                SDSURABHI shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our Platform. Our total liability shall not exceed the amount paid by you to us (which is zero, as our service is free).
              </p>

              <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4">11. Termination</h2>
              <p className="text-gray-600 mb-6">
                We reserve the right to suspend or terminate your account at any time for violation of these terms or for any other reason at our sole discretion.
              </p>

              <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4">12. Changes to Terms</h2>
              <p className="text-gray-600 mb-6">
                We may update these Terms and Conditions from time to time. Continued use of the Platform after changes constitutes acceptance of the modified terms.
              </p>

              <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4">13. Governing Law</h2>
              <p className="text-gray-600 mb-6">
                These Terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in India.
              </p>

              <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4">14. Contact Us</h2>
              <p className="text-gray-600 mb-6">
                If you have any questions about these Terms and Conditions, please contact us at:
              </p>
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <p className="text-gray-700">Email: support@sdsurabhi.com</p>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t">
              <div className="flex flex-wrap gap-4">
                <Link href="/privacy" className="text-[#ff6b35] hover:underline">Privacy Policy</Link>
                <Link href="/responsible-gaming" className="text-[#ff6b35] hover:underline">Responsible Gaming</Link>
                <Link href="/faq" className="text-[#ff6b35] hover:underline">FAQ</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
