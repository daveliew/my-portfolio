import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],

  async redirects() {
    return [
      // Main how-to-learn page redirect
      {
        source: '/ai-journey/how-to-learn',
        destination: '/ai-journey',
        permanent: true,
      },

      // Top-level pages
      {
        source: '/ai-journey/how-to-learn/overview',
        destination: '/ai-journey/overview',
        permanent: true,
      },
      {
        source: '/ai-journey/how-to-learn/technical-leadership',
        destination: '/ai-journey/technical-leadership',
        permanent: true,
      },

      // Techniques pages (cross-tool AI/LLM skills)
      {
        source: '/ai-journey/how-to-learn/claude-mastery/prompt-engineering',
        destination: '/ai-journey/techniques/prompt-engineering',
        permanent: true,
      },
      {
        source: '/ai-journey/how-to-learn/claude-mastery/tool-use',
        destination: '/ai-journey/techniques/tool-use',
        permanent: true,
      },
      {
        source: '/ai-journey/how-to-learn/claude-mastery/retrieval-augmented-generation',
        destination: '/ai-journey/techniques/rag',
        permanent: true,
      },
      {
        source: '/ai-journey/how-to-learn/agent-rag',
        destination: '/ai-journey/techniques/agent-rag',
        permanent: true,
      },
      {
        source: '/ai-journey/how-to-learn/llm-handling',
        destination: '/ai-journey/techniques/llm-handling',
        permanent: true,
      },

      // Claude-specific pages
      {
        source: '/ai-journey/how-to-learn/claude-mastery',
        destination: '/ai-journey/claude/overview',
        permanent: true,
      },
      {
        source: '/ai-journey/how-to-learn/claude-mastery/claude-code',
        destination: '/ai-journey/claude/code',
        permanent: true,
      },
      {
        source: '/ai-journey/how-to-learn/claude-mastery/computer-use',
        destination: '/ai-journey/claude/computer-use',
        permanent: true,
      },
      {
        source: '/ai-journey/how-to-learn/claude-mastery/developer-console',
        destination: '/ai-journey/claude/console',
        permanent: true,
      },
      {
        source: '/ai-journey/how-to-learn/claude-mastery/cookbook-examples',
        destination: '/ai-journey/claude/cookbook',
        permanent: true,
      },
      {
        source: '/ai-journey/how-to-learn/claude-mastery/vision-multimodal',
        destination: '/ai-journey/claude/vision',
        permanent: true,
      },
      {
        source: '/ai-journey/how-to-learn/claude-mastery/model-context-protocol',
        destination: '/ai-journey/claude/mcp',
        permanent: true,
      },
      {
        source: '/ai-journey/how-to-learn/claude-mastery/2026-predictions',
        destination: '/ai-journey/claude/2026-predictions',
        permanent: true,
      },
    ];
  },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [['remark-gfm', {}]],
    rehypePlugins: [
      ['rehype-pretty-code', {
        theme: 'github-dark',
        keepBackground: false,
      }]
    ],
  },
});

export default withMDX(nextConfig);
