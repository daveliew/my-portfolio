'use client';

import Link from 'next/link';

export default function HandoutContent() {
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
          nav, footer {
            display: none !important;
          }
          @page {
            margin: 0.5in;
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

      {/* Single Page Content */}
      <div className="max-w-4xl mx-auto px-6 py-6">
        {/* Header - Compact */}
        <div className="flex items-center justify-between mb-6 border-b-2 border-purple-600 dark:border-purple-400 pb-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Vibe Coding Quick Start</h1>
            <p className="text-sm text-purple-600 dark:text-purple-400">UB/SIM Career Development Seminar</p>
          </div>
          <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <div className="flex-shrink-0 w-16 h-16 bg-gray-200 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded flex items-center justify-center">
              <div className="text-center text-xs text-gray-600 dark:text-gray-400">
                <div className="text-xl">📱</div>
                QR
              </div>
            </div>
            <div className="text-sm">
              <p className="font-semibold text-gray-800 dark:text-gray-100">Full guide:</p>
              <p className="text-purple-600 dark:text-purple-400 font-mono text-xs">daveliew.com/vibe-coding</p>
            </div>
          </div>
        </div>

        {/* 3-Step Process - Aligned with main page */}
        <div className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-3">The 3-Step Process</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="p-4 border-2 border-purple-200 dark:border-purple-800 rounded-lg bg-purple-50 dark:bg-purple-900/30 text-center">
              <div className="text-2xl mb-1">1️⃣</div>
              <p className="font-bold text-gray-800 dark:text-gray-100">Describe</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Tell AI what you want</p>
              <p className="text-xs text-purple-600 dark:text-purple-400 mt-1 font-mono">Claude / Gemini</p>
            </div>
            <div className="p-4 border-2 border-blue-200 dark:border-blue-800 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-center">
              <div className="text-2xl mb-1">2️⃣</div>
              <p className="font-bold text-gray-800 dark:text-gray-100">Generate</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">AI builds your site</p>
              <p className="text-xs text-blue-600 dark:text-blue-400 mt-1 font-mono">v0.dev</p>
            </div>
            <div className="p-4 border-2 border-green-200 dark:border-green-800 rounded-lg bg-green-50 dark:bg-green-900/30 text-center">
              <div className="text-2xl mb-1">3️⃣</div>
              <p className="font-bold text-gray-800 dark:text-gray-100">Deploy</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Go live in one click</p>
              <p className="text-xs text-green-600 dark:text-green-400 mt-1 font-mono">Vercel</p>
            </div>
          </div>
        </div>

        {/* Prompt Template - Single, most actionable */}
        <div className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-3">Your First Prompt</h2>
          <div className="p-4 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-lg">
            <p className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Personal Introduction Site</p>
            <p className="text-sm text-gray-700 dark:text-gray-300 font-mono leading-relaxed">
              &quot;Create a modern personal introduction page for [YOUR NAME], a [YEAR] year
              [MAJOR] student at SIM-UB. Include sections for: a brief introduction,
              my interests in [INTERESTS], and my career goals in [FIELD].
              Use [COLOR] colors and a clean, professional design.&quot;
            </p>
          </div>
        </div>

        {/* Tools Grid - 2x2 Compact */}
        <div className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-3">Essential Tools</h2>
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800">
              <p className="font-semibold text-gray-800 dark:text-gray-100">v0.dev</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 font-mono">v0.dev</p>
              <p className="text-xs text-green-700 dark:text-green-400">AI website builder</p>
            </div>
            <div className="p-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800">
              <p className="font-semibold text-gray-800 dark:text-gray-100">Vercel</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 font-mono">vercel.com</p>
              <p className="text-xs text-green-700 dark:text-green-400">Free hosting</p>
            </div>
            <div className="p-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800">
              <p className="font-semibold text-gray-800 dark:text-gray-100">Claude</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 font-mono">claude.ai</p>
              <p className="text-xs text-green-700 dark:text-green-400">Best for writing &amp; reasoning</p>
            </div>
            <div className="p-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800">
              <p className="font-semibold text-gray-800 dark:text-gray-100">Gemini</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 font-mono">gemini.google.com</p>
              <p className="text-xs text-green-700 dark:text-green-400">Images, video &amp; search</p>
            </div>
          </div>
        </div>

        {/* Pro Tip */}
        <div className="p-4 bg-amber-50 dark:bg-amber-900/30 border-2 border-amber-300 dark:border-amber-700 rounded-lg mb-6">
          <p className="font-bold text-amber-800 dark:text-amber-300 mb-1">💡 Pro Tip</p>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Be specific: mention colors, sections, and your target audience.
            &quot;Make me a website&quot; → vague. &quot;Create a minimal portfolio with blue/white colors,
            hero section, and 3 skill cards&quot; → great results.
          </p>
        </div>

        {/* Footer - Compact */}
        <div className="pt-4 border-t border-gray-200 dark:border-gray-700 flex justify-between items-center text-sm">
          <div>
            <p className="text-gray-600 dark:text-gray-400">Questions? linkedin.com/in/daveliew</p>
          </div>
          <div className="text-right">
            <p className="text-purple-600 dark:text-purple-400 font-medium">daveliew.com/vibe-coding</p>
            <p className="text-xs text-gray-500 dark:text-gray-500">Full guide with videos &amp; examples</p>
          </div>
        </div>
      </div>
    </>
  );
}
