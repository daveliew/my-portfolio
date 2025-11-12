'use client';

import { useEffect, useState } from 'react';
import type { TOCHeading } from '@/types/blog';

interface TableOfContentsProps {
  headings: TOCHeading[];
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const headingElements = headings
        .map((heading) => document.getElementById(heading.id))
        .filter((el): el is HTMLElement => el !== null);

      // Find the current section (80px offset for sticky header)
      const currentSection = headingElements
        .reverse()
        .find((el) => window.scrollY + 100 >= el.offsetTop);

      if (currentSection) {
        setActiveId(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Set initial active section

    return () => window.removeEventListener('scroll', handleScroll);
  }, [headings]);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Account for sticky header
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
      setIsMobileOpen(false);
    }
  };

  if (headings.length === 0) return null;

  return (
    <>
      {/* Mobile: Floating button + drawer */}
      <div className="lg:hidden fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="bg-[var(--color-knowledge)] text-white p-3 rounded-full shadow-lg hover:bg-[var(--color-knowledge)]/90 transition-colors"
          aria-label="Toggle table of contents"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Mobile drawer */}
        {isMobileOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setIsMobileOpen(false)}
            />

            {/* Drawer */}
            <div className="fixed inset-y-0 right-0 w-80 bg-white dark:bg-gray-900 shadow-xl z-50 overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    Table of Contents
                  </h3>
                  <button
                    onClick={() => setIsMobileOpen(false)}
                    className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                    aria-label="Close table of contents"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                <nav className="space-y-1">
                  {headings.map((heading) => (
                    <button
                      key={heading.id}
                      onClick={() => scrollToHeading(heading.id)}
                      className={`block w-full text-left py-2 px-3 text-sm transition-all border-l-2 ${
                        activeId === heading.id
                          ? 'border-[var(--color-knowledge)] bg-[var(--color-knowledge)]/10 font-semibold text-gray-900 dark:text-gray-100'
                          : 'border-transparent hover:border-gray-300 dark:hover:border-gray-600 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'
                      } ${heading.level === 3 ? 'pl-6' : ''}`}
                    >
                      {heading.text}
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Desktop: Sticky sidebar */}
      <nav className="hidden lg:block" aria-label="Table of contents">
        <div className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-3 uppercase tracking-wider">
            On This Page
          </h3>

          <div className="space-y-1">
            {headings.map((heading) => (
              <button
                key={heading.id}
                onClick={() => scrollToHeading(heading.id)}
                className={`block w-full text-left py-1.5 px-3 text-sm transition-all border-l-2 ${
                  activeId === heading.id
                    ? 'border-[var(--color-knowledge)] bg-[var(--color-knowledge)]/10 font-semibold text-gray-900 dark:text-gray-100'
                    : 'border-transparent hover:border-gray-300 dark:hover:border-gray-600 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'
                } ${heading.level === 3 ? 'pl-6' : ''}`}
              >
                {heading.text}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
