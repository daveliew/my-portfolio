import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface BackLinkProps {
  href: string;
  text: string;
  className?: string;
  animation?: Record<string, unknown>;
}

export default function BackLink({ 
  href, 
  text, 
  className = '', 
  animation 
}: BackLinkProps) {
  const linkContent = (
    <Link 
      href={href} 
      className={`text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center ${className}`}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
      {text}
    </Link>
  );

  if (animation) {
    return (
      <motion.div className="text-center" {...animation}>
        {linkContent}
      </motion.div>
    );
  }

  return (
    <div className="text-center">
      {linkContent}
    </div>
  );
}