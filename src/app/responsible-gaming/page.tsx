'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const QUESTIONS = [
  { id: 1, question: 'Do you spend more time playing fantasy games than you originally planned?' },
  { id: 2, question: 'Do you feel restless or irritable when trying to reduce gaming time?' },
  { id: 3, question: 'Have you neglected work, studies, or family responsibilities due to gaming?' },
  { id: 4, question: 'Do you think about fantasy games even when not playing?' },
  { id: 5, question: 'Have you tried to cut back on gaming but found it difficult?' },
  { id: 6, question: 'Do you use gaming as a way to escape problems or relieve stress?' },
  { id: 7, question: 'Have friends or family expressed concern about your gaming habits?' },
  { id: 8, question: 'Do you feel the need to play more frequently to feel satisfied?' },
];

export default function ResponsibleGamingPage() {
  const [answers, setAnswers] = useState<Record<number, boolean>>({});
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (questionId: number, answer: boolean) => {
    setAnswers({ ...answers, [questionId]: answer });
  };

  const calculateScore = () => {
    return Object.values(answers).filter(Boolean).length;
  };

  const getResult = () => {
    const score = calculateScore();
    if (score <= 2) {
      return {
        level: 'Low Risk',
        color: 'green',
        message: 'Your gaming habits appear healthy. Continue to play responsibly and maintain balance in your life.',
        icon: '✅'
      };
    } else if (score <= 4) {
      return {
        level: 'Moderate Risk',
        color: 'yellow',
        message: 'You may be developing some concerning gaming habits. Consider setting time limits and taking regular breaks.',
        icon: '⚠️'
      };
    } else {
      return {
        level: 'High Risk',
        color: 'red',
        message: 'Your responses suggest gaming may be affecting your life negatively. We strongly recommend taking a break and seeking support if needed.',
        icon: '🚨'
      };
    }
  };

  const handleSubmit = () => {
    if (Object.keys(answers).length === QUESTIONS.length) {
      setShowResult(true);
    }
  };

  const resetAssessment = () => {
    setAnswers({});
    setShowResult(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#1e3a5f] to-[#0d1f33] py-16">
        <div className="container">
          <div className="flex items-center gap-4 mb-4">
            <Image src="/icon-responsible.webp" alt="Responsible Gaming" width={60} height={60} />
            <div>
              <h1 className="text-4xl font-bold text-white">Responsible Gaming</h1>
              <p className="text-gray-300">Play responsibly, play for fun</p>
            </div>
          </div>
          <div className="mt-4 bg-[#ff6b35] inline-block px-4 py-2 rounded-full text-white font-semibold text-sm">
            🎮 FREE Platform | No Real Money | Entertainment Only
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container max-w-4xl">
          {/* Important Notice */}
          <div className="bg-[#e8f4fc] rounded-xl p-6 mb-8">
            <h2 className="text-xl font-bold text-[#1e3a5f] mb-3">Our Commitment</h2>
            <p className="text-gray-600">
              SDSURABHI is a <strong>100% FREE fantasy cricket platform</strong> with no real money involved. While our platform doesn&apos;t involve financial risk, we still believe in promoting healthy gaming habits and responsible entertainment.
            </p>
          </div>

          {/* Guidelines */}
          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-6">Responsible Gaming Guidelines</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">⏰</span>
                </div>
                <div>
                  <h3 className="font-semibold text-[#1e3a5f] mb-1">Set Time Limits</h3>
                  <p className="text-sm text-gray-600">Decide how much time you want to spend gaming and stick to it.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🎯</span>
                </div>
                <div>
                  <h3 className="font-semibold text-[#1e3a5f] mb-1">Play for Fun</h3>
                  <p className="text-sm text-gray-600">Remember, fantasy cricket is entertainment, not a competition to win at all costs.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">⚖️</span>
                </div>
                <div>
                  <h3 className="font-semibold text-[#1e3a5f] mb-1">Maintain Balance</h3>
                  <p className="text-sm text-gray-600">Don&apos;t let gaming interfere with work, studies, or relationships.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🧘</span>
                </div>
                <div>
                  <h3 className="font-semibold text-[#1e3a5f] mb-1">Take Breaks</h3>
                  <p className="text-sm text-gray-600">Regular breaks help maintain a healthy relationship with gaming.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🚫</span>
                </div>
                <div>
                  <h3 className="font-semibold text-[#1e3a5f] mb-1">Know When to Stop</h3>
                  <p className="text-sm text-gray-600">If gaming stops being fun, it&apos;s time to take a break.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">👥</span>
                </div>
                <div>
                  <h3 className="font-semibold text-[#1e3a5f] mb-1">Seek Support</h3>
                  <p className="text-sm text-gray-600">Talk to friends, family, or professionals if you need help.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Self-Assessment Tool */}
          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-2">Self-Assessment Tool</h2>
            <p className="text-gray-600 mb-6">
              Answer these questions honestly to assess your gaming habits. This is for self-reflection only.
            </p>

            {!showResult ? (
              <>
                <div className="space-y-6">
                  {QUESTIONS.map((q) => (
                    <div key={q.id} className="border-b pb-4">
                      <p className="font-medium text-[#1e3a5f] mb-3">{q.id}. {q.question}</p>
                      <div className="flex gap-4">
                        <button
                          onClick={() => handleAnswer(q.id, true)}
                          className={`px-6 py-2 rounded-lg font-medium transition ${
                            answers[q.id] === true
                              ? 'bg-[#ff6b35] text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          Yes
                        </button>
                        <button
                          onClick={() => handleAnswer(q.id, false)}
                          className={`px-6 py-2 rounded-lg font-medium transition ${
                            answers[q.id] === false
                              ? 'bg-[#1e3a5f] text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          No
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={Object.keys(answers).length !== QUESTIONS.length}
                  className="btn btn-primary w-full mt-6 disabled:opacity-50"
                >
                  Get Results
                </button>
              </>
            ) : (
              <div className="text-center">
                {(() => {
                  const result = getResult();
                  return (
                    <div className={`p-6 rounded-xl ${
                      result.color === 'green' ? 'bg-green-50 border-2 border-green-200' :
                      result.color === 'yellow' ? 'bg-yellow-50 border-2 border-yellow-200' :
                      'bg-red-50 border-2 border-red-200'
                    }`}>
                      <span className="text-5xl mb-4 block">{result.icon}</span>
                      <h3 className={`text-2xl font-bold mb-3 ${
                        result.color === 'green' ? 'text-green-700' :
                        result.color === 'yellow' ? 'text-yellow-700' :
                        'text-red-700'
                      }`}>
                        {result.level}
                      </h3>
                      <p className="text-gray-600 mb-4">{result.message}</p>
                      <p className="text-sm text-gray-500">Score: {calculateScore()}/8</p>
                    </div>
                  );
                })()}
                <button onClick={resetAssessment} className="btn btn-outline mt-6">
                  Take Assessment Again
                </button>
              </div>
            )}
          </div>

          {/* Resources */}
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-6">Support Resources</h2>
            <p className="text-gray-600 mb-6">
              If you or someone you know needs help with gaming habits, these resources may be helpful:
            </p>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-[#1e3a5f]">iCall - TISS</h3>
                <p className="text-sm text-gray-600">Psychosocial helpline: 9152987821</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-[#1e3a5f]">Vandrevala Foundation</h3>
                <p className="text-sm text-gray-600">Mental health support: 1860-2662-345</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-[#1e3a5f]">NIMHANS</h3>
                <p className="text-sm text-gray-600">Helpline: 080-46110007</p>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div className="mt-8 text-center">
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/terms" className="text-[#ff6b35] hover:underline">Terms & Conditions</Link>
              <Link href="/privacy" className="text-[#ff6b35] hover:underline">Privacy Policy</Link>
              <Link href="/contact" className="text-[#ff6b35] hover:underline">Contact Support</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
