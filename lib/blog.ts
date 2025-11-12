import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { BlogPost, TOCHeading } from '@/types/blog';

const contentDirectory = path.join(process.cwd(), 'content/blog');

export function getAllPosts(): BlogPost[] {
  // Check if directory exists
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(contentDirectory);
  const posts = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      return getPostBySlug(slug);
    })
    .filter((post): post is BlogPost => post !== null)
    .sort((a, b) => (a.date > b.date ? -1 : 1));

  return posts;
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(contentDirectory, `${slug}.mdx`);

    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug,
      title: data.title || '',
      description: data.description || '',
      date: data.date || new Date().toISOString(),
      readTime: data.readTime || '5 min read',
      category: data.category || 'agentic-engineering',
      author: data.author || 'Dave Liew',
      featured: data.featured || false,
      tags: data.tags || [],
      seriesPosition: data.seriesPosition,
      seriesTotal: data.seriesTotal,
      arc: data.arc,
      published: data.published !== false, // Default to true
    };
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
}

export function getPublishedPosts(): BlogPost[] {
  return getAllPosts().filter((post) => post.published);
}

export function getPostsByCategory(category: string): BlogPost[] {
  return getPublishedPosts().filter((post) => post.category === category);
}

export function getPostsByTag(tag: string): BlogPost[] {
  return getPublishedPosts().filter((post) => post.tags.includes(tag));
}

export function getFeaturedPosts(): BlogPost[] {
  return getPublishedPosts()
    .filter((post) => post.featured)
    .slice(0, 3);
}

// Extract headings from markdown content for TOC
export function extractHeadings(content: string): TOCHeading[] {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const headings: TOCHeading[] = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const text = match[2].trim();
    const id = generateHeadingId(text);

    headings.push({ id, text, level });
  }

  return headings;
}

// Generate URL-safe heading IDs
export function generateHeadingId(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .substring(0, 80); // Limit length
}
