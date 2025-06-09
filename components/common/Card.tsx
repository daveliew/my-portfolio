import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  animation?: Record<string, unknown>;
}

export default function Card({ 
  children, 
  className = '', 
  hover = false, 
  animation 
}: CardProps) {
  const baseClasses = 'bg-white dark:bg-gray-800 rounded-lg shadow-md';
  const hoverClasses = hover ? 'transform transition duration-300 hover:shadow-lg hover:-translate-y-1' : '';
  const combinedClasses = `${baseClasses} ${hoverClasses} ${className}`;

  if (animation) {
    return (
      <motion.div className={combinedClasses} {...animation}>
        {children}
      </motion.div>
    );
  }

  return (
    <div className={combinedClasses}>
      {children}
    </div>
  );
}