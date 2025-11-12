'use client';

import { useState } from 'react';
import Card from '@/components/common/Card';
import type { JourneyLayerProps } from '@/types/blog';

export default function JourneyLayer({
  why,
  triedFirst,
  wentWrong,
  breakthrough,
  differently,
  stillLearning,
}: JourneyLayerProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="my-8 border-l-4 border-[var(--color-time)]">
      <div className="p-6">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center justify-between w-full text-left"
        >
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2">
            <span className="text-[var(--color-time)]">🧭</span>
            My Journey with This
          </h3>
          <svg
            className={`w-5 h-5 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isExpanded && (
          <div className="mt-6 space-y-4">
            <div>
              <h4 className="font-semibold text-[var(--color-knowledge)] mb-2">
                Why I chose this:
              </h4>
              <p className="text-gray-700 dark:text-gray-300">{why}</p>
            </div>

            <div>
              <h4 className="font-semibold text-[var(--color-knowledge)] mb-2">
                What I tried first:
              </h4>
              <p className="text-gray-700 dark:text-gray-300">{triedFirst}</p>
            </div>

            <div>
              <h4 className="font-semibold text-[var(--color-knowledge)] mb-2">
                What went wrong:
              </h4>
              <p className="text-gray-700 dark:text-gray-300">{wentWrong}</p>
            </div>

            <div>
              <h4 className="font-semibold text-[var(--color-wealth)] mb-2">
                The breakthrough:
              </h4>
              <p className="text-gray-700 dark:text-gray-300">{breakthrough}</p>
            </div>

            <div>
              <h4 className="font-semibold text-[var(--color-knowledge)] mb-2">
                What I&apos;d do differently:
              </h4>
              <p className="text-gray-700 dark:text-gray-300">{differently}</p>
            </div>

            <div>
              <h4 className="font-semibold text-[var(--color-time)] mb-2">
                Where I&apos;m still learning:
              </h4>
              <p className="text-gray-700 dark:text-gray-300">{stillLearning}</p>
            </div>
          </div>
        )}

        {!isExpanded && (
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Click to see my personal journey with this concept
          </p>
        )}
      </div>
    </Card>
  );
}
