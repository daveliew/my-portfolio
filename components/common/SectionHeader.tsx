import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  className?: string;
  animation?: Record<string, unknown>;
}

export default function SectionHeader({ 
  title, 
  className = '', 
  animation 
}: SectionHeaderProps) {
  const headerClasses = `text-2xl font-semibold mb-6 border-b border-gray-200 dark:border-gray-700 pb-2 ${className}`;

  if (animation) {
    return (
      <motion.h2 className={headerClasses} {...animation}>
        {title}
      </motion.h2>
    );
  }

  return (
    <h2 className={headerClasses}>
      {title}
    </h2>
  );
}