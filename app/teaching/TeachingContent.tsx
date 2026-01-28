'use client';

import Link from 'next/link';

const workshops = [
  {
    title: 'UB × SIM: Power your Professional Brand with AI',
    date: 'January 2026',
    type: 'Career Development Seminar',
    description: 'Vibe coding workshop for university students. Build your first AI-powered project in 30 minutes.',
    link: 'https://ub-sim.vercel.app',
    status: 'upcoming',
  },
  {
    title: 'RBN Vibe Coding',
    date: 'August 2025',
    type: 'Community Workshop',
    description: 'Hands-on vibe coding session for the Rafflesian Business Network community.',
    link: 'https://rbn-coding.vercel.app',
    status: 'completed',
  },
  {
    title: 'Rafflesian AI Community',
    date: 'Ongoing',
    type: 'WhatsApp Community',
    description: 'AI thought leadership and knowledge sharing for the Raffles alumni network. Discussions on AI trends, practical applications, and building with AI.',
    link: 'https://rafflesian.ai',
    status: 'active',
  },
];

const resources = [
  {
    title: 'Vibe Coding Handout',
    description: 'Printable quick-start guide for workshops',
    href: '/vibe-coding/handout',
  },
  {
    title: 'Web Fundamentals Demo',
    description: 'Interactive demos for events, state, and conditionals',
    href: '/vibe-coding/fundamentals',
  },
];

export default function TeachingContent() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Teaching
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Workshops and talks on building with AI. From vibe coding for beginners to context engineering for developers.
          </p>
        </div>

        {/* Workshops */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            Workshops & Talks
          </h2>
          <div className="space-y-4">
            {workshops.map((workshop, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl border ${
                  workshop.status === 'upcoming'
                    ? 'border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-900/20'
                    : workshop.status === 'active'
                    ? 'border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/20'
                    : 'border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800'
                }`}
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-baseline gap-2 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        {workshop.title}
                      </h3>
                      {workshop.status === 'upcoming' && (
                        <span className="px-2 py-0.5 text-xs font-medium bg-blue-600 text-white rounded-full shrink-0">
                          Upcoming
                        </span>
                      )}
                      {workshop.status === 'active' && (
                        <span className="px-2 py-0.5 text-xs font-medium bg-green-600 text-white rounded-full shrink-0">
                          Active
                        </span>
                      )}
                      {workshop.status === 'completed' && (
                        <span className="px-2 py-0.5 text-xs font-medium bg-gray-500 text-white rounded-full shrink-0">
                          Completed
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                      {workshop.date} • {workshop.type}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      {workshop.description}
                    </p>
                  </div>
                  {workshop.link && (
                    <a
                      href={workshop.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors"
                    >
                      View Site →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Resources */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            Teaching Resources
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {resources.map((resource, index) => (
              <Link
                key={index}
                href={resource.href}
                className="p-6 rounded-xl border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800 hover:border-blue-300 dark:hover:border-blue-600 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {resource.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {resource.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center p-8 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-100 dark:border-blue-800">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            Interested in a Workshop?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-xl mx-auto">
            I run workshops for universities, companies, and communities. Topics include vibe coding, AI fundamentals, and building professional brands with AI.
          </p>
          <Link
            href="/contact"
            className="inline-flex px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
          >
            Get in Touch
          </Link>
        </section>
      </div>
    </main>
  );
}
