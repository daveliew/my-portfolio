import type { Metadata } from 'next';
import ToolUseContent from './ToolUseContent';

export const metadata: Metadata = {
  title: 'Tool Use & Function Calling',
  description: 'Implement Claude tool use for external API integration. Enable calculations, data retrieval, and third-party service connections.',
  keywords: 'tool use, function calling, Claude tools, API integration, external functions, Claude API, AI capabilities',
  openGraph: {
    title: 'Tool Use & Function Calling with Claude',
    description: 'Extend Claude capabilities with external APIs and function calling.',
  },
};

export default function ToolUsePage() {
  return <ToolUseContent />;
}
