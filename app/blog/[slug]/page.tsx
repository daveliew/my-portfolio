import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getAllPosts, getPostBySlug, extractHeadings } from '@/lib/blog';
import BlogPostLayout from '@/components/blog/BlogPostLayout';
import TableOfContents from '@/components/common/TableOfContents';
import fs from 'fs';
import path from 'path';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} - David Liew`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post || !post.published) {
    notFound();
  }

  // Read MDX content for TOC extraction
  const contentPath = path.join(process.cwd(), 'content/blog', `${slug}.mdx`);
  let headings: ReturnType<typeof extractHeadings> = [];

  if (fs.existsSync(contentPath)) {
    const fileContents = fs.readFileSync(contentPath, 'utf8');
    headings = extractHeadings(fileContents);
  }

  // Dynamically import the MDX content
  const MdxContent = await import(`@/content/blog/${slug}.mdx`).then((mod) => mod.default);

  return (
    <BlogPostLayout
      post={post}
      tableOfContents={headings.length > 0 ? <TableOfContents headings={headings} /> : undefined}
    >
      <MdxContent />
    </BlogPostLayout>
  );
}
