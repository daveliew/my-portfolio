// Server Component - renders as static HTML
export function VirtuousCycleVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="relative w-80 h-80">
        {/* Center glow */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-[var(--deep-purple)]/10 to-[var(--teal)]/10 rounded-full blur-xl animate-pulse" />

        {/* Build Time - Top */}
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-lg border border-[var(--hot-pink)]/20 hover:border-[var(--hot-pink)]/40 transition-colors min-w-[140px] text-center">
            <p className="text-[var(--hot-pink)] font-semibold text-sm">Build time</p>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Delete tasks</p>
          </div>
        </div>

        {/* Capture Knowledge - Right */}
        <div className="absolute top-1/2 -right-4 transform -translate-y-1/2">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-lg border border-[var(--teal)]/20 hover:border-[var(--teal)]/40 transition-colors min-w-[140px] text-center">
            <p className="text-[var(--teal)] font-semibold text-sm">Capture knowledge</p>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Learn patterns</p>
          </div>
        </div>

        {/* Create Value - Bottom */}
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-lg border border-[var(--gold)]/20 hover:border-[var(--gold)]/40 transition-colors min-w-[140px] text-center">
            <p className="text-[var(--gold)] font-semibold text-sm">Create value</p>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Build tools</p>
          </div>
        </div>

        {/* Share Freely - Left */}
        <div className="absolute top-1/2 -left-4 transform -translate-y-1/2">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-lg border border-[var(--deep-purple)]/20 hover:border-[var(--deep-purple)]/40 transition-colors min-w-[140px] text-center">
            <p className="text-[var(--deep-purple)] font-semibold text-sm">Share freely</p>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Help others</p>
          </div>
        </div>

        {/* Circular flow indicators */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 320">
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--hot-pink)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="var(--teal)" stopOpacity="0.3" />
            </linearGradient>
          </defs>

          {/* Animated circle path - CSS animation instead of framer-motion */}
          <circle
            cx="160"
            cy="160"
            r="120"
            fill="none"
            stroke="url(#gradient1)"
            strokeWidth="2"
            strokeDasharray="4 4"
            className="animate-spin-slow"
            style={{ transformOrigin: 'center', animationDuration: '20s' }}
          />
        </svg>
      </div>
    </div>
  );
}
