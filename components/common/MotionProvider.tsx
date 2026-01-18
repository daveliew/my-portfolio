'use client';

import { MotionConfig } from 'framer-motion';
import { ReactNode } from 'react';

interface MotionProviderProps {
  children: ReactNode;
}

/**
 * Global motion configuration that respects prefers-reduced-motion
 *
 * reducedMotion="user" tells framer-motion to:
 * - Check the user's OS/browser prefers-reduced-motion setting
 * - Automatically disable transform animations when reduced motion is preferred
 * - Still allow opacity fades (which are considered accessible)
 */
export function MotionProvider({ children }: MotionProviderProps) {
  return (
    <MotionConfig reducedMotion="user">
      {children}
    </MotionConfig>
  );
}
