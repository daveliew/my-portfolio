import type { Metadata } from 'next';
import ClaudeCodeContent from './ClaudeCodeContent';

export const metadata: Metadata = {
  title: 'Claude Code',
  description: 'Agentic coding with Claude from your terminal and IDE. 30+ hour autonomous operation, multi-file editing, checkpoints, and MCP integration.',
  keywords: 'Claude Code, agentic coding, AI coding assistant, autonomous development, Anthropic, Sonnet 4.5, MCP, terminal AI',
  openGraph: {
    title: 'Claude Code - Agentic Coding Assistant',
    description: 'Autonomous multi-hour development tasks with Claude from your terminal and IDE.',
  },
};

export default function ClaudeCodePage() {
  return <ClaudeCodeContent />;
}
