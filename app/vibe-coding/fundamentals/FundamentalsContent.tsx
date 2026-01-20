'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { PageLayout, Card, SectionHeader } from '@/components/common';
import { sectionAnimation } from '@/utils/animations';

type LightState = 'red' | 'yellow' | 'green';
type Mode = 'manual' | 'automatic';

export default function FundamentalsContent() {
  // STATE - Things to Remember
  const [lightState, setLightState] = useState<LightState>('red');
  const [mode, setMode] = useState<Mode>('manual');
  const [timer, setTimer] = useState(0);
  const [isPedestrianWaiting, setIsPedestrianWaiting] = useState(false);
  const [isEmergency, setIsEmergency] = useState(false);
  const [lastEvent, setLastEvent] = useState('');
  const [showAdvanced, setShowAdvanced] = useState(false);

  // EVENTS - Things That Happen
  const handleLightChange = useCallback((newLight?: LightState) => {
    if (isEmergency) return;

    if (newLight) {
      setLightState(newLight);
      setLastEvent(`Manual change to ${newLight}`);
    } else {
      const nextLight = lightState === 'red' ? 'green' :
                       lightState === 'green' ? 'yellow' : 'red';
      setLightState(nextLight);
      setLastEvent(`Auto change to ${nextLight}`);
    }

    if ((newLight || lightState) === 'green') {
      setIsPedestrianWaiting(false);
    }
  }, [isEmergency, lightState]);

  const toggleAutoMode = () => {
    setMode(mode === 'manual' ? 'automatic' : 'manual');
    setLastEvent(mode === 'manual' ? 'Auto mode started' : 'Manual mode enabled');
    setTimer(5);
  };

  const requestPedestrianCrossing = () => {
    setIsPedestrianWaiting(true);
    setLastEvent('Pedestrian crossing requested');
  };

  const toggleEmergency = () => {
    setIsEmergency(!isEmergency);
    setLastEvent(isEmergency ? 'Emergency mode OFF' : 'Emergency mode ON');
  };

  const resetSystem = () => {
    setLightState('red');
    setMode('manual');
    setTimer(0);
    setIsPedestrianWaiting(false);
    setIsEmergency(false);
    setLastEvent('System reset');
  };

  // Automatic timer logic
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (mode === 'automatic' && !isEmergency) {
      interval = setInterval(() => {
        setTimer(prev => {
          if (prev <= 1) {
            handleLightChange();
            return lightState === 'yellow' ? 3 : 5;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [mode, lightState, isEmergency, handleLightChange]);

  useEffect(() => {
    if (mode === 'automatic') {
      setTimer(lightState === 'yellow' ? 3 : 5);
    }
  }, [mode, lightState]);

  return (
    <PageLayout
      title="The Only 3 Concepts You Need"
      description="Master Events, State, and Conditionals through our traffic light system. These three concepts power every website — from simple buttons to Instagram and ChatGPT."
      gradientTitle
      backLink={{ href: '/vibe-coding', text: 'Back to Vibe Coding' }}
    >
      {/* Concept Cards - Fitzgerald Theme */}
      <motion.section {...sectionAnimation(0)} className="mb-12">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Events - TIME (Hot Pink) */}
          <Card className="p-6 border-l-4 border-[var(--accent-primary)]">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">⚡</span>
              <h3 className="font-bold text-[var(--accent-primary)]">Events = Things That Happen</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">User actions that trigger responses</p>
            <div className="space-y-3">
              <div className="p-3 bg-[var(--accent-primary)]/10 rounded-lg">
                <p className="text-xs font-medium mb-1">Button clicked (user trigger)</p>
                <code className="text-xs bg-gray-900 text-[var(--accent-primary)] p-2 rounded block">
                  onClick → changeLight()
                </code>
              </div>
              <div className="p-3 bg-[var(--accent-primary)]/10 rounded-lg">
                <p className="text-xs font-medium mb-1">Timer fires (automatic trigger)</p>
                <code className="text-xs bg-gray-900 text-[var(--accent-primary)] p-2 rounded block">
                  every 5s → nextLight()
                </code>
              </div>
            </div>
          </Card>

          {/* State - KNOWLEDGE (Teal) */}
          <Card className="p-6 border-l-4 border-[var(--accent-secondary)]">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🧠</span>
              <h3 className="font-bold text-[var(--accent-secondary)]">State = Things to Remember</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Information your app keeps track of</p>
            <div className="space-y-3">
              <div className="p-3 bg-[var(--accent-secondary)]/10 rounded-lg">
                <p className="text-xs font-medium mb-1">Current light color</p>
                <code className="text-xs bg-gray-900 text-[var(--accent-secondary)] p-2 rounded block">
                  lightState = &ldquo;{lightState}&rdquo;
                </code>
              </div>
              <div className="p-3 bg-[var(--accent-secondary)]/10 rounded-lg">
                <p className="text-xs font-medium mb-1">Timer countdown</p>
                <code className="text-xs bg-gray-900 text-[var(--accent-secondary)] p-2 rounded block">
                  timer = {timer}
                </code>
              </div>
            </div>
          </Card>

          {/* Conditionals - WEALTH (Gold) */}
          <Card className="p-6 border-l-4 border-[var(--accent-tertiary)]">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🔀</span>
              <h3 className="font-bold text-[var(--accent-tertiary)]">Conditionals = If This, Then That</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Rules that determine outcomes</p>
            <div className="space-y-3">
              <div className="p-3 bg-[var(--accent-tertiary)]/10 rounded-lg">
                <p className="text-xs font-medium mb-1">Timer reaches zero</p>
                <code className="text-xs bg-gray-900 text-[var(--accent-tertiary)] p-2 rounded block">
                  if timer = 0 → switch
                </code>
              </div>
              <div className="p-3 bg-[var(--accent-tertiary)]/10 rounded-lg">
                <p className="text-xs font-medium mb-1">Light sequence</p>
                <code className="text-xs bg-gray-900 text-[var(--accent-tertiary)] p-2 rounded block">
                  red → green → yellow → red
                </code>
              </div>
            </div>
          </Card>
        </div>
      </motion.section>

      {/* Interactive Demo */}
      <motion.section {...sectionAnimation(1)} className="mb-12">
        <SectionHeader title="Interactive Demo" />
        <Card className="p-6">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 text-center">
            Click the buttons and watch the concepts work together
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Traffic Light Interface */}
            <div className="space-y-4">
              {/* Traffic Light Visual */}
              <div className="flex flex-col items-center space-y-4">
                <div className="bg-gray-800 p-4 rounded-lg border-4 border-gray-700 shadow-lg">
                  <div className="space-y-3">
                    <div className={`w-16 h-16 rounded-full border-2 transition-all duration-300 ${
                      isEmergency
                        ? 'bg-red-500 border-red-400 animate-pulse'
                        : lightState === 'red'
                        ? 'bg-red-500 border-red-400 shadow-lg shadow-red-500/50'
                        : 'bg-red-900/30 border-red-800'
                    }`} />
                    <div className={`w-16 h-16 rounded-full border-2 transition-all duration-300 ${
                      isEmergency
                        ? 'bg-yellow-500 border-yellow-400 animate-pulse'
                        : lightState === 'yellow'
                        ? 'bg-yellow-500 border-yellow-400 shadow-lg shadow-yellow-500/50'
                        : 'bg-yellow-900/30 border-yellow-800'
                    }`} />
                    <div className={`w-16 h-16 rounded-full border-2 transition-all duration-300 ${
                      isEmergency
                        ? 'bg-green-500 border-green-400 animate-pulse'
                        : lightState === 'green'
                        ? 'bg-green-500 border-green-400 shadow-lg shadow-green-500/50'
                        : 'bg-green-900/30 border-green-800'
                    }`} />
                  </div>
                </div>

                {/* Timer Display */}
                {mode === 'automatic' && !isEmergency && (
                  <div className="text-center">
                    <div className="text-2xl font-mono font-bold text-[var(--accent-secondary)]">{timer}s</div>
                    <div className="text-xs text-gray-500">until next change</div>
                  </div>
                )}

                {/* Status Badges */}
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    mode === 'automatic'
                      ? 'bg-[var(--accent-secondary)] text-white'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                  }`}>
                    {mode === 'automatic' ? 'AUTO' : 'MANUAL'}
                  </span>
                  {showAdvanced && isPedestrianWaiting && (
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-[var(--accent-tertiary)]/20 text-[var(--accent-tertiary)]">
                      🚶 WAITING
                    </span>
                  )}
                  {showAdvanced && isEmergency && (
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-[var(--accent-primary)] text-white animate-pulse">
                      🚨 EMERGENCY
                    </span>
                  )}
                </div>
              </div>

              {/* Basic Controls */}
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => handleLightChange('red')}
                    disabled={isEmergency}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      lightState === 'red'
                        ? 'bg-red-600 text-white'
                        : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 hover:bg-red-200 dark:hover:bg-red-900/50'
                    } disabled:opacity-50`}
                  >
                    Red
                  </button>
                  <button
                    onClick={() => handleLightChange('yellow')}
                    disabled={isEmergency}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      lightState === 'yellow'
                        ? 'bg-yellow-500 text-white'
                        : 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 hover:bg-yellow-200 dark:hover:bg-yellow-900/50'
                    } disabled:opacity-50`}
                  >
                    Yellow
                  </button>
                  <button
                    onClick={() => handleLightChange('green')}
                    disabled={isEmergency}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      lightState === 'green'
                        ? 'bg-green-600 text-white'
                        : 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 hover:bg-green-200 dark:hover:bg-green-900/50'
                    } disabled:opacity-50`}
                  >
                    Green
                  </button>
                  <button
                    onClick={toggleAutoMode}
                    disabled={isEmergency}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      mode === 'automatic'
                        ? 'bg-[var(--accent-secondary)] text-white'
                        : 'bg-[var(--accent-secondary)]/10 text-[var(--accent-secondary)] hover:bg-[var(--accent-secondary)]/20'
                    } disabled:opacity-50`}
                  >
                    {mode === 'automatic' ? '⏸ Stop' : '▶ Auto'}
                  </button>
                </div>

                {/* Advanced Controls Toggle */}
                <button
                  onClick={() => setShowAdvanced(!showAdvanced)}
                  className="w-full px-4 py-2 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
                >
                  {showAdvanced ? '▼ Hide advanced features' : '▶ Show advanced features'}
                </button>

                {/* Advanced Controls */}
                {showAdvanced && (
                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={requestPedestrianCrossing}
                      disabled={isPedestrianWaiting}
                      className="px-4 py-2 rounded-lg font-medium text-sm bg-[var(--accent-tertiary)]/10 text-[var(--accent-tertiary)] hover:bg-[var(--accent-tertiary)]/20 transition-colors disabled:opacity-50"
                    >
                      🚶 Cross Request
                    </button>
                    <button
                      onClick={toggleEmergency}
                      className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                        isEmergency
                          ? 'bg-[var(--accent-primary)] text-white'
                          : 'bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] hover:bg-[var(--accent-primary)]/20'
                      }`}
                    >
                      ⚠️ Emergency
                    </button>
                    <button
                      onClick={resetSystem}
                      className="col-span-2 px-4 py-2 rounded-lg font-medium text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    >
                      🔄 Reset Everything
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Behind the Scenes - Simplified */}
            <div className="space-y-4">
              <h4 className="font-medium text-center">What&apos;s Happening</h4>
              <div className="space-y-3 text-sm">
                {/* Event - TIME */}
                <div className="p-3 bg-[var(--accent-primary)]/10 rounded border-l-4 border-[var(--accent-primary)]">
                  <p className="font-medium text-[var(--accent-primary)] mb-1">EVENT (What triggered)</p>
                  <div className="text-xs p-2 bg-white/50 dark:bg-black/20 rounded font-mono">
                    {lastEvent || 'Click a button...'}
                  </div>
                </div>

                {/* State - KNOWLEDGE */}
                <div className="p-3 bg-[var(--accent-secondary)]/10 rounded border-l-4 border-[var(--accent-secondary)]">
                  <p className="font-medium text-[var(--accent-secondary)] mb-1">STATE (What&apos;s remembered)</p>
                  <ul className="text-xs space-y-1 font-mono">
                    <li>• light: <strong>&ldquo;{lightState}&rdquo;</strong></li>
                    <li>• mode: <strong>&ldquo;{mode}&rdquo;</strong></li>
                    {mode === 'automatic' && <li>• timer: <strong>{timer}</strong></li>}
                    {showAdvanced && isPedestrianWaiting && <li>• pedestrian: <strong>waiting</strong></li>}
                    {showAdvanced && isEmergency && <li>• emergency: <strong>active</strong></li>}
                  </ul>
                </div>

                {/* Conditionals - WEALTH */}
                <div className="p-3 bg-[var(--accent-tertiary)]/10 rounded border-l-4 border-[var(--accent-tertiary)]">
                  <p className="font-medium text-[var(--accent-tertiary)] mb-1">CONDITIONAL (Rules checking)</p>
                  <ul className="text-xs space-y-1">
                    <li className={timer === 0 && mode === 'automatic' ? 'font-bold' : 'opacity-60'}>
                      {timer === 0 && mode === 'automatic' ? '✓' : '○'} if timer = 0 → change light
                    </li>
                    {mode === 'automatic' && (
                      <li className="opacity-60">
                        ○ red → green → yellow → red
                      </li>
                    )}
                    {showAdvanced && (
                      <>
                        <li className={isEmergency ? 'font-bold' : 'opacity-60'}>
                          {isEmergency ? '✓' : '○'} if emergency → flash all
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Insight Box */}
          <div className="mt-6 p-4 bg-gradient-to-r from-[var(--accent-secondary)]/10 to-[var(--accent-tertiary)]/10 rounded-lg border border-[var(--accent-secondary)]/20">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              <strong>That&apos;s it!</strong> Every website uses these same patterns. When you click &ldquo;Like&rdquo; on Instagram:
              <span className="text-[var(--accent-primary)]"> Event</span> (click) →
              <span className="text-[var(--accent-secondary)]"> State</span> (liked: true) →
              <span className="text-[var(--accent-tertiary)]"> Conditional</span> (if liked, show filled heart).
            </p>
          </div>
        </Card>
      </motion.section>

      {/* Why This Matters */}
      <motion.section {...sectionAnimation(2)} className="mb-12">
        <SectionHeader title="Why This Helps Your Prompts" />
        <Card className="p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Before: Vague</h4>
              <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded text-sm">
                <span className="text-red-600 dark:text-red-400">❌</span> &ldquo;Make a button that does something&rdquo;
              </div>
              <h4 className="font-semibold mb-2 mt-4 text-gray-900 dark:text-gray-100">After: Precise</h4>
              <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded text-sm">
                <span className="text-green-600 dark:text-green-400">✓</span> &ldquo;When user clicks Submit (<span className="text-[var(--accent-primary)]">event</span>), save the form data (<span className="text-[var(--accent-secondary)]">state</span>), and if successful (<span className="text-[var(--accent-tertiary)]">conditional</span>), show a success message&rdquo;
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">When Debugging</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                Ask yourself:
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--accent-primary)]">⚡</span>
                  <span><strong>Event issue?</strong> Is the trigger firing?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--accent-secondary)]">🧠</span>
                  <span><strong>State issue?</strong> Is the right value stored?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--accent-tertiary)]">🔀</span>
                  <span><strong>Conditional issue?</strong> Is the logic correct?</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </motion.section>

      {/* CTA */}
      <motion.section
        {...sectionAnimation(3)}
        className="bg-gradient-to-r from-[var(--accent-primary)]/10 to-[var(--accent-secondary)]/10 rounded-lg p-8 text-center"
      >
        <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-gray-100">Ready to Build?</h2>
        <p className="mb-6 max-w-xl mx-auto text-gray-600 dark:text-gray-400">
          Now that you understand the fundamentals, put them into practice.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://v0.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md bg-[var(--accent-secondary)] text-white hover:opacity-90 transition-opacity shadow-sm"
          >
            Try v0.dev
          </a>
          <Link
            href="/vibe-coding"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md border-2 border-[var(--accent-primary)] text-[var(--accent-primary)] bg-transparent hover:bg-[var(--accent-primary)]/10 transition-colors"
          >
            Back to Guide
          </Link>
        </div>
      </motion.section>
    </PageLayout>
  );
}
