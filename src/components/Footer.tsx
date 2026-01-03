import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#0d1f33] text-white">
      {/* Disclaimer Banner */}
      <div className="bg-[#ff6b35] py-4">
        <div className="container text-center">
          <p className="font-semibold text-lg">
            🎮 100% FREE TO PLAY | NO REAL MONEY INVOLVED | SKILL-BASED GAMING | 18+ ONLY
          </p>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Image src="/logo.webp" alt="SDSURABHI" width={50} height={50} />
                <span className="text-2xl font-bold">
                  SDS<span className="text-[#ff6b35]">URABHI</span>
                </span>
              </div>
              <p className="text-gray-400 mb-6">
                India&apos;s most trusted FREE fantasy cricket platform. Test your cricket knowledge
                and compete with friends - completely free, no real money involved.
              </p>
              <div className="bg-[#1e3a5f] p-4 rounded-lg">
                <p className="text-sm text-gray-300">
                  <strong className="text-[#ff6b35]">Disclaimer:</strong> This is a free-to-play
                  skill-based gaming platform. No real money is involved in any contest.
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-[#ff6b35]">Quick Links</h4>
              <ul className="space-y-3">
                <li><Link href="/" className="text-gray-400 hover:text-white transition">Home</Link></li>
                <li><Link href="/contests" className="text-gray-400 hover:text-white transition">Contests</Link></li>
                <li><Link href="/leaderboard" className="text-gray-400 hover:text-white transition">Leaderboard</Link></li>
                <li><Link href="/how-to-play" className="text-gray-400 hover:text-white transition">How to Play</Link></li>
                <li><Link href="/about" className="text-gray-400 hover:text-white transition">About Us</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white transition">Contact Us</Link></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-[#ff6b35]">Legal</h4>
              <ul className="space-y-3">
                <li><Link href="/terms" className="text-gray-400 hover:text-white transition">Terms & Conditions</Link></li>
                <li><Link href="/privacy" className="text-gray-400 hover:text-white transition">Privacy Policy</Link></li>
                <li><Link href="/responsible-gaming" className="text-gray-400 hover:text-white transition">Responsible Gaming</Link></li>
                <li><Link href="/faq" className="text-gray-400 hover:text-white transition">FAQ</Link></li>
              </ul>
              <div className="mt-6 flex items-center gap-2">
                <Image src="/icon-18plus.webp" alt="18+" width={40} height={40} />
                <span className="text-sm text-gray-400">Adults Only (18+)</span>
              </div>
            </div>

            {/* Contact & Compliance */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-[#ff6b35]">Contact Us</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center gap-2">
                  <span>📧</span>
                  <span>support@sdsurabhi.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>📞</span>
                  <span>+91-XXXXXXXXXX</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>📍</span>
                  <span>India</span>
                </li>
              </ul>

              <div className="mt-6 p-4 bg-[#1e3a5f] rounded-lg">
                <h5 className="font-semibold mb-2 text-[#ff6b35]">State Restrictions</h5>
                <p className="text-xs text-gray-400">
                  Services not available in: Andhra Pradesh, Assam, Nagaland, Odisha, Sikkim, Telangana
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} SDSURABHI. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <span className="bg-[#ff6b35] text-white px-4 py-1 rounded-full text-sm font-semibold">
                FREE TO PLAY
              </span>
              <span className="bg-green-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                NO REAL MONEY
              </span>
              <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                SKILL BASED
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
