import type { Metadata } from 'next';
import PredictionsContent from './PredictionsContent';

export const metadata: Metadata = {
  title: 'Claude 2026 Predictions',
  description: 'Research-backed predictions for Claude in 2026: 90%+ SWE-bench performance, 50-100 hour autonomous operations, MCP ecosystem explosion, and the paradigm shift to agentic AI.',
  keywords: 'Claude 2026, AI predictions, SWE-bench, autonomous AI, MCP servers, Anthropic roadmap, agentic AI, Early Experience paradigm',
  openGraph: {
    title: 'Claude 2026: What to Expect - Research-Backed Predictions',
    description: 'From 82% to 90%+ SWE-bench, multi-day autonomous operations, and the shift from AI tools to AI colleagues.',
  },
};

export default function Claude2026PredictionsPage() {
  return <PredictionsContent />;
}
