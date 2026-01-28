'use client';

import Link from 'next/link';

const hackathons = [
  {
    title: 'Coming Soon',
    date: '2026',
    event: 'Hackathon Adventures',
    description: 'Documenting my hackathon journey - rapid prototyping, AI projects, and lessons learned from building under pressure.',
    result: null,
    tags: ['AI', 'Rapid Prototyping'],
  },
];

export default function HackathonsContent() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
            Hackathons
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Building in public. Adventures, projects, and lessons from hackathons and rapid prototyping.
          </p>
        </div>

        {/* Why Hackathons */}
        <section className="mb-16">
          <div className="p-8 rounded-xl bg-gradient-to-r from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20 border border-teal-100 dark:border-teal-800">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Why Hackathons?
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                Hackathons are where ideas meet reality under pressure. They force you to ship, to make hard tradeoffs, and to learn what actually matters when time is limited.
              </p>
              <p>
                I participate in hackathons to sharpen my rapid prototyping skills, explore new AI capabilities, and build things that might not make sense in a normal work context.
              </p>
            </div>
          </div>
        </section>

        {/* Hackathon Timeline */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            Hackathon Timeline
          </h2>
          <div className="space-y-4">
            {hackathons.map((hackathon, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                      {hackathon.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                      {hackathon.date} • {hackathon.event}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mb-3">
                      {hackathon.description}
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      {hackathon.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  {hackathon.result && (
                    <span className="px-3 py-1 text-sm font-medium bg-teal-100 text-teal-700 dark:bg-teal-900 dark:text-teal-300 rounded-full">
                      {hackathon.result}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* What I Look For */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            What I Look For in Hackathons
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-6 rounded-xl border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800 text-center">
              <div className="text-3xl mb-3">🤖</div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">AI Focus</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Hackathons that push the boundaries of what&apos;s possible with AI
              </p>
            </div>
            <div className="p-6 rounded-xl border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800 text-center">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Real Problems</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Building solutions for actual challenges, not just demos
              </p>
            </div>
            <div className="p-6 rounded-xl border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800 text-center">
              <div className="text-3xl mb-3">🎙️</div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Voice + Agents</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Exploring the intersection of voice interfaces and AI agents
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center p-8 rounded-xl bg-gradient-to-r from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20 border border-teal-100 dark:border-teal-800">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            Building Something?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-xl mx-auto">
            I&apos;m always interested in hackathon teams and rapid building opportunities. If you&apos;re working on something interesting, let&apos;s connect.
          </p>
          <Link
            href="/contact"
            className="inline-flex px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-lg font-medium transition-colors"
          >
            Get in Touch
          </Link>
        </section>
      </div>
    </main>
  );
}
