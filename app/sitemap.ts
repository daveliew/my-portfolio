import type { MetadataRoute } from 'next'

/**
 * Next.js 15 Sitemap Generation
 * Automatically generates sitemap.xml at /sitemap.xml
 *
 * Priority Guidelines:
 * 1.0 = Homepage
 * 0.8 = Main pages
 * 0.6 = Sub-pages and deep content
 */

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://daveliew.com'

  return [
    // Main Pages
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/philosophy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/laboratory`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },

    // AI Journey Main
    {
      url: `${baseUrl}/ai-journey`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ai-journey/why-ai`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/ai-journey/portfolio`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    },

    // AI Journey - How to Learn
    {
      url: `${baseUrl}/ai-journey/how-to-learn/overview`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/ai-journey/how-to-learn/llm-handling`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/ai-journey/how-to-learn/agent-rag`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/ai-journey/how-to-learn/technical-leadership`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },

    // AI Journey - Claude Mastery Hub
    {
      url: `${baseUrl}/ai-journey/how-to-learn/claude-mastery`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/ai-journey/how-to-learn/claude-mastery/prompt-engineering`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/ai-journey/how-to-learn/claude-mastery/claude-code`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/ai-journey/how-to-learn/claude-mastery/2026-predictions`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/ai-journey/how-to-learn/claude-mastery/tool-use`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/ai-journey/how-to-learn/claude-mastery/computer-use`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/ai-journey/how-to-learn/claude-mastery/vision-multimodal`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/ai-journey/how-to-learn/claude-mastery/retrieval-augmented-generation`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/ai-journey/how-to-learn/claude-mastery/model-context-protocol`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/ai-journey/how-to-learn/claude-mastery/developer-console`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/ai-journey/how-to-learn/claude-mastery/cookbook-examples`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ]
}
