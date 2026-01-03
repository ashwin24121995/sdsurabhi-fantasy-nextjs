import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#1e3a5f] to-[#0d1f33] py-20">
        <div className="container">
          <div className="max-w-3xl">
            <span className="bg-[#ff6b35] text-white px-4 py-2 rounded-full text-sm font-bold">ABOUT US</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-6 mb-6">
              India&apos;s Most Trusted <span className="text-[#ff6b35]">FREE</span> Fantasy Cricket Platform
            </h1>
            <p className="text-xl text-gray-300">
              Experience the thrill of fantasy cricket without any financial risk. 100% free, 100% skill-based.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#1e3a5f] mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-4">
                At SDSURABHI, we believe that everyone should be able to enjoy fantasy cricket without the pressure of real money. Our mission is to provide a safe, fun, and completely free platform where cricket enthusiasts can test their knowledge and compete with friends.
              </p>
              <p className="text-gray-600 mb-4">
                We are committed to promoting responsible gaming and ensuring that our platform remains a space for entertainment and skill development, not gambling.
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <div className="bg-[#e8f4fc] px-4 py-2 rounded-lg">
                  <span className="text-[#1e3a5f] font-semibold">✓ 100% Free</span>
                </div>
                <div className="bg-[#e8f4fc] px-4 py-2 rounded-lg">
                  <span className="text-[#1e3a5f] font-semibold">✓ No Real Money</span>
                </div>
                <div className="bg-[#e8f4fc] px-4 py-2 rounded-lg">
                  <span className="text-[#1e3a5f] font-semibold">✓ Skill Based</span>
                </div>
              </div>
            </div>
            <div>
              <Image src="/about-team.webp" alt="About SDSURABHI" width={500} height={400} className="rounded-xl shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#e8f4fc]">
        <div className="container">
          <h2 className="text-3xl font-bold text-[#1e3a5f] text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 text-center shadow-sm">
              <div className="w-16 h-16 bg-[#ff6b35] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎮</span>
              </div>
              <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">Free Entertainment</h3>
              <p className="text-gray-600">
                We believe fantasy sports should be accessible to everyone, regardless of financial status.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 text-center shadow-sm">
              <div className="w-16 h-16 bg-[#ff6b35] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🛡️</span>
              </div>
              <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">Responsible Gaming</h3>
              <p className="text-gray-600">
                We promote healthy gaming habits and provide tools for self-assessment and control.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 text-center shadow-sm">
              <div className="w-16 h-16 bg-[#ff6b35] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⚖️</span>
              </div>
              <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">Fair Play</h3>
              <p className="text-gray-600">
                Our transparent scoring system ensures every player has an equal opportunity to succeed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-20">
        <div className="container">
          <div className="bg-[#1e3a5f] rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl font-bold text-white mb-6">Important Disclaimer</h2>
            <div className="text-gray-300 space-y-4">
              <p>
                SDSURABHI is a <strong className="text-[#ff6b35]">100% FREE fantasy cricket platform</strong>. We do not involve any real money transactions, deposits, or cash prizes. This is purely a skill-based gaming platform for entertainment purposes.
              </p>
              <p>
                Our services are <strong className="text-white">NOT available</strong> in the following states due to local regulations: Andhra Pradesh, Assam, Nagaland, Odisha, Sikkim, and Telangana.
              </p>
              <p>
                Users must be <strong className="text-white">18 years or older</strong> to register and participate in contests on our platform.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link href="/terms" className="btn btn-primary">Terms & Conditions</Link>
              <Link href="/responsible-gaming" className="btn btn-outline border-white text-white hover:bg-white hover:text-[#1e3a5f]">
                Responsible Gaming
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#ff6b35] to-[#ff8c5a]">
        <div className="container text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Ready to Play?</h2>
          <p className="text-xl mb-8 opacity-90">Join thousands of cricket fans playing fantasy cricket for FREE!</p>
          <Link href="/signup" className="btn bg-white text-[#ff6b35] hover:bg-gray-100 text-lg px-10 py-4">
            Sign Up Free
          </Link>
        </div>
      </section>
    </div>
  );
}
