'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const FAQ_DATA = [
  {
    category: 'General',
    questions: [
      {
        q: 'What is SDSURABHI?',
        a: 'SDSURABHI is a 100% FREE fantasy cricket platform where you can create your dream cricket team, compete with other users, and test your cricket knowledge. There is no real money involved - it\'s purely for entertainment and skill development.'
      },
      {
        q: 'Is SDSURABHI really free?',
        a: 'Yes, absolutely! SDSURABHI is 100% free to use. There are no entry fees, no deposits, no hidden charges, and no real money prizes. All contests are free to join.'
      },
      {
        q: 'Is this a gambling or betting platform?',
        a: 'No, SDSURABHI is NOT a gambling or betting platform. We are a skill-based fantasy sports platform that is completely free. No real money is involved in any way.'
      },
      {
        q: 'How is SDSURABHI different from other fantasy apps?',
        a: 'Unlike many fantasy apps that involve real money, SDSURABHI is completely free. We focus on providing a fun, skill-based gaming experience without any financial risk.'
      }
    ]
  },
  {
    category: 'Account & Registration',
    questions: [
      {
        q: 'Who can register on SDSURABHI?',
        a: 'Any Indian citizen who is 18 years or older can register, except residents of Andhra Pradesh, Assam, Nagaland, Odisha, Sikkim, and Telangana where our services are not available due to local regulations.'
      },
      {
        q: 'Why do I need to verify my age?',
        a: 'Age verification is required to ensure all users are 18 years or older, as per our terms of service and responsible gaming guidelines.'
      },
      {
        q: 'Why are some states restricted?',
        a: 'Due to varying state laws regarding online gaming in India, we are unable to offer our services in Andhra Pradesh, Assam, Nagaland, Odisha, Sikkim, and Telangana.'
      },
      {
        q: 'How do I delete my account?',
        a: 'You can request account deletion by contacting our support team at support@sdsurabhi.com. Your data will be deleted within 30 days of the request.'
      }
    ]
  },
  {
    category: 'How to Play',
    questions: [
      {
        q: 'How do I create a fantasy team?',
        a: 'Select an upcoming match, choose 11 players from both teams, select a captain (2x points) and vice-captain (1.5x points), and submit your team before the match starts.'
      },
      {
        q: 'How are fantasy points calculated?',
        a: 'Points are calculated based on real player performances in actual matches. Runs, wickets, catches, and other actions earn points according to our scoring system.'
      },
      {
        q: 'Can I edit my team after creating it?',
        a: 'Yes, you can edit your team until the match starts. Once the match begins, your team is locked.'
      },
      {
        q: 'How many teams can I create per match?',
        a: 'You can create multiple teams for each match to try different strategies and player combinations.'
      }
    ]
  },
  {
    category: 'Points & Leaderboard',
    questions: [
      {
        q: 'What do I win if I top the leaderboard?',
        a: 'Since SDSURABHI is a free platform, there are no cash prizes. Top performers earn bragging rights, achievement badges, and recognition on our leaderboard. It\'s all about testing your cricket knowledge!'
      },
      {
        q: 'How is the leaderboard calculated?',
        a: 'The leaderboard ranks users based on total fantasy points earned across all contests. We have weekly, monthly, and all-time leaderboards.'
      },
      {
        q: 'When are points updated?',
        a: 'Points are updated in real-time during live matches. Final points are calculated after the match ends.'
      }
    ]
  },
  {
    category: 'Technical',
    questions: [
      {
        q: 'Which devices support SDSURABHI?',
        a: 'SDSURABHI works on any modern web browser on desktop, tablet, or mobile devices. We recommend using Chrome, Firefox, Safari, or Edge for the best experience.'
      },
      {
        q: 'Is my data secure?',
        a: 'Yes, we use industry-standard security measures including encryption to protect your personal data. We do not sell your data to third parties.'
      },
      {
        q: 'What if I forget my password?',
        a: 'You can reset your password using the "Forgot Password" option on the login page. A reset link will be sent to your registered email.'
      }
    ]
  },
  {
    category: 'Legal & Compliance',
    questions: [
      {
        q: 'Is fantasy cricket legal in India?',
        a: 'Yes, fantasy sports are legal in most parts of India as they are considered games of skill. However, some states have restrictions, which is why we don\'t operate in certain states.'
      },
      {
        q: 'Does SDSURABHI comply with Google Ads policies?',
        a: 'Yes, SDSURABHI fully complies with Google Ads policies. We are a free, skill-based gaming platform with no real money gambling or betting.'
      },
      {
        q: 'Where can I read the full terms?',
        a: 'You can read our complete Terms & Conditions, Privacy Policy, and Responsible Gaming guidelines on our website. Links are available in the footer of every page.'
      }
    ]
  }
];

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (key: string) => {
    setOpenItems({ ...openItems, [key]: !openItems[key] });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#1e3a5f] to-[#0d1f33] py-16">
        <div className="container">
          <div className="flex items-center gap-4 mb-4">
            <Image src="/icon-faq.webp" alt="FAQ" width={60} height={60} />
            <div>
              <h1 className="text-4xl font-bold text-white">Frequently Asked Questions</h1>
              <p className="text-gray-300">Find answers to common questions</p>
            </div>
          </div>
          <div className="mt-4 bg-[#ff6b35] inline-block px-4 py-2 rounded-full text-white font-semibold text-sm">
            🎮 100% FREE | No Real Money | Skill Based
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-12">
        <div className="container max-w-4xl">
          {/* Quick Answer */}
          <div className="bg-[#e8f4fc] rounded-xl p-6 mb-8">
            <h2 className="text-xl font-bold text-[#1e3a5f] mb-3">Quick Answer</h2>
            <p className="text-gray-600">
              <strong>Is SDSURABHI free?</strong> Yes! SDSURABHI is 100% free. No entry fees, no deposits, no cash prizes. Just pure fantasy cricket fun!
            </p>
          </div>

          {/* FAQ Categories */}
          <div className="space-y-8">
            {FAQ_DATA.map((category) => (
              <div key={category.category} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="bg-[#1e3a5f] px-6 py-4">
                  <h2 className="text-xl font-bold text-white">{category.category}</h2>
                </div>
                <div className="divide-y">
                  {category.questions.map((item, index) => {
                    const key = `${category.category}-${index}`;
                    const isOpen = openItems[key];
                    
                    return (
                      <div key={key}>
                        <button
                          onClick={() => toggleItem(key)}
                          className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition"
                        >
                          <span className="font-medium text-[#1e3a5f] pr-4">{item.q}</span>
                          <span className={`text-[#ff6b35] text-2xl transition-transform ${isOpen ? 'rotate-45' : ''}`}>
                            +
                          </span>
                        </button>
                        {isOpen && (
                          <div className="px-6 pb-4">
                            <p className="text-gray-600">{item.a}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Still Have Questions */}
          <div className="mt-12 bg-gradient-to-r from-[#ff6b35] to-[#ff8c5a] rounded-xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
            <p className="mb-6 opacity-90">Our support team is here to help you</p>
            <Link href="/contact" className="btn bg-white text-[#ff6b35] hover:bg-gray-100">
              Contact Support
            </Link>
          </div>

          {/* Footer Links */}
          <div className="mt-8 text-center">
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/how-to-play" className="text-[#ff6b35] hover:underline">How to Play</Link>
              <Link href="/terms" className="text-[#ff6b35] hover:underline">Terms & Conditions</Link>
              <Link href="/privacy" className="text-[#ff6b35] hover:underline">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
