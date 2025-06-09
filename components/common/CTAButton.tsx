import React from 'react';
import Link from 'next/link';

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  external?: boolean;
}

export default function CTAButton({ 
  href, 
  children, 
  variant = 'primary', 
  className = '',
  external = false
}: CTAButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md shadow-sm transition duration-300';
  
  const variantClasses = {
    primary: 'border border-transparent text-white bg-blue-600 hover:bg-blue-700',
    secondary: 'border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 bg-transparent hover:bg-blue-50 dark:hover:bg-gray-800'
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (external) {
    return (
      <a 
        href={href} 
        className={combinedClasses}
        target="_blank" 
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={combinedClasses}>
      {children}
    </Link>
  );
}