'use client';

import Link from 'next/link';

export default function VibeCodingHandout() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          .no-print {
            display: none !important;
          }
          .print-page {
            page-break-after: always;
          }
          .print-page:last-child {
            page-break-after: auto;
          }
          nav, footer {
            display: none !important;
          }
          @page {
            margin: 0.75in;
            size: letter;
          }
        }
      `}</style>

      {/* Screen Header - Hidden in Print */}
      <div className="no-print bg-purple-600 text-white py-4 px-6 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link href="/vibe-coding" className="text-white hover:text-purple-200">
            ← Back to Vibe Coding
          </Link>
          <button
            onClick={handlePrint}
            className="px-4 py-2 bg-white text-purple-600 rounded-lg font-medium hover:bg-purple-50 transition-colors"
          >
            🖨️ Print Handout
          </button>
        </div>
      </div>

      {/* Page 1: Main Content */}
      <div className="print-page max-w-4xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="text-center mb-8 border-b-2 border-purple-600 dark:border-purple-400 pb-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">Vibe Coding Quick Start</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">Build Your Professional Brand with AI</p>
          <p className="text-sm text-purple-600 dark:text-purple-400 mt-2">UB/SIM Career Development Seminar</p>
        </div>

        {/* QR Code Section */}
        <div className="flex items-center gap-6 mb-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <div className="flex-shrink-0 w-24 h-24 bg-gray-200 dark:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 rounded flex items-center justify-center">
            <div className="text-center text-xs text-gray-600 dark:text-gray-400">
              <div className="text-2xl mb-1">📱</div>
              QR Code
            </div>
          </div>
          <div>
            <p className="font-semibold text-gray-800 dark:text-gray-100">Scan or visit:</p>
            <p className="text-purple-600 dark:text-purple-400 font-mono">daveliew.com/vibe-coding</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Full guide with videos and examples</p>
          </div>
        </div>

        {/* 5-Step Checklist */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
            <span className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm">✓</span>
            5-Step Checklist
          </h2>
          <div className="space-y-3">
            {[
              { step: 1, title: 'Describe Your Vision', action: 'Write prompt in ChatGPT/Claude' },
              { step: 2, title: 'Generate with v0.dev', action: 'Paste prompt at v0.dev' },
              { step: 3, title: 'Iterate and Refine', action: 'Chat to make changes' },
              { step: 4, title: 'Deploy to Vercel', action: 'Click deploy button' },
              { step: 5, title: 'Share Your Brand', action: 'Add URL to LinkedIn' },
            ].map((item) => (
              <div key={item.step} className="flex items-center gap-4 p-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800">
                <div className="flex-shrink-0 w-8 h-8 border-2 border-gray-300 dark:border-gray-600 rounded flex items-center justify-center font-bold text-gray-700 dark:text-gray-300">
                  {item.step}
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-800 dark:text-gray-100">{item.title}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{item.action}</p>
                </div>
                <div className="flex-shrink-0 w-6 h-6 border-2 border-gray-300 dark:border-gray-600 rounded"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Prompt Templates */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
            <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm">📝</span>
            Prompt Templates
          </h2>

          <div className="space-y-4">
            <div className="p-4 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-lg">
              <p className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Personal Introduction Site</p>
              <p className="text-sm text-gray-700 dark:text-gray-300 font-mono leading-relaxed">
                &quot;Create a modern personal introduction page for [YOUR NAME], a [YEAR] year
                [MAJOR] student at SIM-UB. Include sections for: a brief introduction,
                my interests in [INTERESTS], and my career goals in [FIELD].
                Use [COLOR] colors and a clean, professional design.&quot;
              </p>
            </div>

            <div className="p-4 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg">
              <p className="font-semibold text-green-800 dark:text-green-300 mb-2">Bio Refinement (Claude/ChatGPT)</p>
              <p className="text-sm text-gray-700 dark:text-gray-300 font-mono leading-relaxed">
                &quot;Help me write a compelling 2-sentence professional bio. I&apos;m a [MAJOR]
                student interested in [INTERESTS]. I want to work in [INDUSTRY].
                Make it confident but not arrogant.&quot;
              </p>
            </div>

            <div className="p-4 bg-purple-50 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-800 rounded-lg">
              <p className="font-semibold text-purple-800 dark:text-purple-300 mb-2">Iteration Prompt</p>
              <p className="text-sm text-gray-700 dark:text-gray-300 font-mono leading-relaxed">
                &quot;Can you [ADD/CHANGE/REMOVE] [SPECIFIC ELEMENT]?
                I want it to feel more [PROFESSIONAL/CREATIVE/MINIMAL].&quot;
              </p>
            </div>
          </div>
        </div>

        {/* Tool Links */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
            <span className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm">🔗</span>
            Essential Tools
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800">
              <p className="font-semibold text-gray-800 dark:text-gray-100">v0.dev</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 font-mono">v0.dev</p>
              <p className="text-xs text-green-700 dark:text-green-400 mt-1">AI website builder</p>
            </div>
            <div className="p-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800">
              <p className="font-semibold text-gray-800 dark:text-gray-100">Vercel</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 font-mono">vercel.com</p>
              <p className="text-xs text-green-700 dark:text-green-400 mt-1">Free hosting</p>
            </div>
            <div className="p-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800">
              <p className="font-semibold text-gray-800 dark:text-gray-100">Claude</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 font-mono">claude.ai</p>
              <p className="text-xs text-green-700 dark:text-green-400 mt-1">AI assistant</p>
            </div>
            <div className="p-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800">
              <p className="font-semibold text-gray-800 dark:text-gray-100">ChatGPT</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 font-mono">chat.openai.com</p>
              <p className="text-xs text-green-700 dark:text-green-400 mt-1">AI assistant</p>
            </div>
          </div>
        </div>

        {/* This Week Action Items */}
        <div className="p-6 bg-amber-50 dark:bg-amber-900/30 border-2 border-amber-300 dark:border-amber-700 rounded-lg">
          <h2 className="text-xl font-bold text-amber-800 dark:text-amber-300 mb-4">📌 This Week&apos;s Action Items</h2>
          <div className="space-y-2">
            {[
              'Deploy your personal site and get a live URL',
              'Add the URL to your LinkedIn profile',
              'Share your site with a friend for feedback',
              'Make one improvement based on feedback',
              'Explore adding a "Projects" or "Experience" section',
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-5 h-5 border-2 border-amber-400 dark:border-amber-600 rounded flex-shrink-0"></div>
                <p className="text-gray-800 dark:text-gray-200">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Page 2: Advanced Tips */}
      <div className="print-page max-w-4xl mx-auto px-6 py-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 border-b-2 border-gray-200 dark:border-gray-700 pb-4">
          Advanced Tips &amp; Next Steps
        </h2>

        {/* Writing Better Prompts */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-3">💡 Writing Better Prompts</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded">
              <p className="font-semibold text-red-700 dark:text-red-400 text-sm mb-1">❌ Too Vague</p>
              <p className="text-xs text-gray-700 dark:text-gray-300">&quot;Make me a website&quot;</p>
            </div>
            <div className="p-3 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded">
              <p className="font-semibold text-green-700 dark:text-green-400 text-sm mb-1">✓ Specific</p>
              <p className="text-xs text-gray-700 dark:text-gray-300">&quot;Create a minimal personal site with blue/white colors, hero section with my name, and 3 cards for skills&quot;</p>
            </div>
          </div>
          <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-800 rounded">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              <strong>Include:</strong> Purpose • Style/mood • Colors • Specific sections • Target audience
            </p>
          </div>
        </div>

        {/* Common Iteration Commands */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-3">🔄 Common Iteration Commands</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            {[
              'Make the header larger',
              'Add more white space',
              'Change the color to [color]',
              'Add a contact section',
              'Make it more minimal',
              'Add icons to the cards',
              'Include my photo',
              'Add social media links',
            ].map((cmd, index) => (
              <div key={index} className="p-2 bg-gray-50 dark:bg-gray-800 rounded font-mono text-gray-700 dark:text-gray-300">
                &quot;{cmd}&quot;
              </div>
            ))}
          </div>
        </div>

        {/* 4-Week Learning Path Preview */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-3">📚 4-Week No-Code AI Branding Path</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-3 p-3 border border-gray-200 dark:border-gray-700 rounded bg-white dark:bg-gray-800">
              <span className="w-8 h-8 bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 rounded-full flex items-center justify-center font-bold">1</span>
              <div>
                <p className="font-medium text-gray-800 dark:text-gray-100">AI Bio Writing</p>
                <p className="text-xs text-gray-700 dark:text-gray-400">Master prompts for professional bios</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 border border-gray-200 dark:border-gray-700 rounded bg-white dark:bg-gray-800">
              <span className="w-8 h-8 bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 rounded-full flex items-center justify-center font-bold">2</span>
              <div>
                <p className="font-medium text-gray-800 dark:text-gray-100">Portfolio with v0.dev</p>
                <p className="text-xs text-gray-700 dark:text-gray-400">Build and deploy your complete portfolio</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 border border-gray-200 dark:border-gray-700 rounded bg-white dark:bg-gray-800">
              <span className="w-8 h-8 bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 rounded-full flex items-center justify-center font-bold">3</span>
              <div>
                <p className="font-medium text-gray-800 dark:text-gray-100">LinkedIn Optimization</p>
                <p className="text-xs text-gray-700 dark:text-gray-400">AI-enhanced profile and content</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 border border-gray-200 dark:border-gray-700 rounded bg-white dark:bg-gray-800">
              <span className="w-8 h-8 bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 rounded-full flex items-center justify-center font-bold">4</span>
              <div>
                <p className="font-medium text-gray-800 dark:text-gray-100">Your AI-Native Voice</p>
                <p className="text-xs text-gray-700 dark:text-gray-400">Develop your unique professional brand</p>
              </div>
            </div>
          </div>
          <p className="text-sm text-purple-600 dark:text-purple-400 mt-3 font-medium">
            Full path available at: daveliew.com/ai-journey/overview
          </p>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t-2 border-gray-200 dark:border-gray-700 text-center">
          <p className="text-gray-700 dark:text-gray-300 mb-2">Questions? Connect with David Liew</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">linkedin.com/in/daveliew • daveliew.com</p>
          <p className="text-xs text-gray-600 dark:text-gray-400 mt-4">
            &quot;Most people use AI to do more. I&apos;m exploring how to do less—systematically.&quot;
          </p>
        </div>
      </div>
    </>
  );
}
