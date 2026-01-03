import Image from 'next/image';
import Link from 'next/link';

export default function HowToPlayPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#1e3a5f] to-[#0d1f33] py-20">
        <div className="container">
          <div className="max-w-3xl">
            <span className="bg-[#ff6b35] text-white px-4 py-2 rounded-full text-sm font-bold">HOW TO PLAY</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-6 mb-6">
              Play Fantasy Cricket <span className="text-[#ff6b35]">For FREE</span>
            </h1>
            <p className="text-xl text-gray-300">
              Learn how to create your dream team and compete with other cricket fans - completely free!
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold">✓ No Entry Fee</span>
              <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold">✓ No Deposits</span>
              <span className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-bold">✓ No Cash Prizes</span>
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-4">3 Simple Steps to Start Playing</h2>
            <p className="text-gray-600">Get started in minutes - it&apos;s easy and free!</p>
          </div>

          <div className="space-y-16">
            {/* Step 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="flex items-center gap-4 mb-4">
                  <span className="w-12 h-12 bg-[#ff6b35] rounded-full flex items-center justify-center text-white font-bold text-xl">1</span>
                  <h3 className="text-2xl font-bold text-[#1e3a5f]">Select a Match</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Browse through upcoming cricket matches and choose the one you want to play. You can filter by match type (T20, ODI, Test) and see live matches in real-time.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span> View all upcoming matches
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span> Filter by match type
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span> See live match scores
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span> Free entry for all contests
                  </li>
                </ul>
              </div>
              <div className="order-1 lg:order-2">
                <Image src="/step1-select.webp" alt="Select Match" width={300} height={300} className="mx-auto" />
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Image src="/step2-team.webp" alt="Create Team" width={300} height={300} className="mx-auto" />
              </div>
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="w-12 h-12 bg-[#ff6b35] rounded-full flex items-center justify-center text-white font-bold text-xl">2</span>
                  <h3 className="text-2xl font-bold text-[#1e3a5f]">Create Your Team</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Select 11 players from both teams to create your fantasy squad. Choose wisely based on player form, pitch conditions, and match-ups.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span> Pick 11 players
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span> Choose Captain (2x points)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span> Choose Vice-Captain (1.5x points)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span> Edit until match starts
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="flex items-center gap-4 mb-4">
                  <span className="w-12 h-12 bg-[#ff6b35] rounded-full flex items-center justify-center text-white font-bold text-xl">3</span>
                  <h3 className="text-2xl font-bold text-[#1e3a5f]">Compete & Climb</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Watch your team earn points based on real player performances. Compete with other users and climb the leaderboard!
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span> Real-time point updates
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span> Live leaderboard rankings
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span> Weekly & monthly rankings
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span> Bragging rights for top performers
                  </li>
                </ul>
              </div>
              <div className="order-1 lg:order-2">
                <Image src="/step3-compete.webp" alt="Compete" width={300} height={300} className="mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Points System */}
      <section className="py-20 bg-[#e8f4fc]">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-4">Fantasy Points System</h2>
            <p className="text-gray-600">Understand how points are calculated</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Batting */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Image src="/player-batsman.webp" alt="Batting" width={40} height={40} />
                <h3 className="text-lg font-bold text-[#1e3a5f]">Batting</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex justify-between"><span>Run</span><span className="font-semibold">+1</span></li>
                <li className="flex justify-between"><span>Boundary (4)</span><span className="font-semibold">+1</span></li>
                <li className="flex justify-between"><span>Six</span><span className="font-semibold">+2</span></li>
                <li className="flex justify-between"><span>Half Century</span><span className="font-semibold">+8</span></li>
                <li className="flex justify-between"><span>Century</span><span className="font-semibold">+16</span></li>
                <li className="flex justify-between"><span>Duck</span><span className="font-semibold text-red-500">-2</span></li>
              </ul>
            </div>

            {/* Bowling */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Image src="/player-bowler.webp" alt="Bowling" width={40} height={40} />
                <h3 className="text-lg font-bold text-[#1e3a5f]">Bowling</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex justify-between"><span>Wicket</span><span className="font-semibold">+25</span></li>
                <li className="flex justify-between"><span>Maiden Over</span><span className="font-semibold">+8</span></li>
                <li className="flex justify-between"><span>3 Wicket Haul</span><span className="font-semibold">+4</span></li>
                <li className="flex justify-between"><span>4 Wicket Haul</span><span className="font-semibold">+8</span></li>
                <li className="flex justify-between"><span>5 Wicket Haul</span><span className="font-semibold">+16</span></li>
                <li className="flex justify-between"><span>LBW/Bowled Bonus</span><span className="font-semibold">+8</span></li>
              </ul>
            </div>

            {/* Fielding */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Image src="/player-keeper.webp" alt="Fielding" width={40} height={40} />
                <h3 className="text-lg font-bold text-[#1e3a5f]">Fielding</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex justify-between"><span>Catch</span><span className="font-semibold">+8</span></li>
                <li className="flex justify-between"><span>Stumping</span><span className="font-semibold">+12</span></li>
                <li className="flex justify-between"><span>Run Out (Direct)</span><span className="font-semibold">+12</span></li>
                <li className="flex justify-between"><span>Run Out (Indirect)</span><span className="font-semibold">+6</span></li>
                <li className="flex justify-between"><span>3 Catch Bonus</span><span className="font-semibold">+4</span></li>
              </ul>
            </div>

            {/* Bonus */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Image src="/trophy.webp" alt="Bonus" width={40} height={40} />
                <h3 className="text-lg font-bold text-[#1e3a5f]">Bonus</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex justify-between"><span>Captain</span><span className="font-semibold text-[#ff6b35]">2x Points</span></li>
                <li className="flex justify-between"><span>Vice-Captain</span><span className="font-semibold text-[#1e3a5f]">1.5x Points</span></li>
                <li className="flex justify-between"><span>Playing XI</span><span className="font-semibold">+4</span></li>
                <li className="flex justify-between"><span>Man of Match</span><span className="font-semibold">+25</span></li>
              </ul>
            </div>
          </div>

          <p className="text-center text-sm text-gray-500 mt-8">
            * Points may vary slightly based on match format (T20/ODI/Test)
          </p>
        </div>
      </section>

      {/* Tips */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-4">Pro Tips</h2>
            <p className="text-gray-600">Maximize your fantasy points with these strategies</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-[#ff6b35]">
              <h3 className="font-bold text-[#1e3a5f] mb-2">Research Player Form</h3>
              <p className="text-gray-600 text-sm">Check recent performances and current form before selecting players.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-[#ff6b35]">
              <h3 className="font-bold text-[#1e3a5f] mb-2">Consider Pitch Conditions</h3>
              <p className="text-gray-600 text-sm">Batting-friendly pitches favor batsmen, while green tops help bowlers.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-[#ff6b35]">
              <h3 className="font-bold text-[#1e3a5f] mb-2">Pick All-Rounders</h3>
              <p className="text-gray-600 text-sm">All-rounders can earn points from both batting and bowling.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-[#ff6b35]">
              <h3 className="font-bold text-[#1e3a5f] mb-2">Choose Captain Wisely</h3>
              <p className="text-gray-600 text-sm">Your captain earns 2x points - pick your most reliable performer.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-[#ff6b35]">
              <h3 className="font-bold text-[#1e3a5f] mb-2">Balance Your Team</h3>
              <p className="text-gray-600 text-sm">Include a mix of batsmen, bowlers, all-rounders, and wicket-keepers.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-[#ff6b35]">
              <h3 className="font-bold text-[#1e3a5f] mb-2">Stay Updated</h3>
              <p className="text-gray-600 text-sm">Check for last-minute changes in playing XI before the match.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#ff6b35] to-[#ff8c5a]">
        <div className="container text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Ready to Play?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join now and start playing fantasy cricket for FREE!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/signup" className="btn bg-white text-[#ff6b35] hover:bg-gray-100 text-lg px-10 py-4">
              Sign Up Free
            </Link>
            <Link href="/contests" className="btn border-2 border-white text-white hover:bg-white hover:text-[#ff6b35] text-lg px-10 py-4">
              View Matches
            </Link>
          </div>
          <p className="mt-6 text-sm opacity-80">
            No credit card required • 100% Free • No real money involved
          </p>
        </div>
      </section>
    </div>
  );
}
