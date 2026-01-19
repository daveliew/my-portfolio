import type { Metadata } from 'next';
import HooksContent from './HooksContent';

export const metadata: Metadata = {
  title: 'Claude Hooks - Event-Based Automation',
  description: 'Event-based automation for Claude Code. Encode your judgment into executable scripts that run on SessionStart, UserPrompt, PreToolUse, and Stop events.',
  keywords: 'Claude hooks, automation, event-based, Claude Code, SessionStart, PreToolUse, AI automation, context engineering',
  openGraph: {
    title: 'Claude Hooks - Automated AI Workflows',
    description: 'Encode your judgment into automated scripts that run before Claude responds.',
  },
};

export default function HooksPage() {
  return <HooksContent />;
}
