'use client'

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home', id: 'home' },
  { href: '/personal', label: 'Personal', id: 'personal' },
  { href: '/work', label: 'Work', id: 'work' },
  { href: '/ai-journey', label: 'AI Journey', id: 'ai-journey' },
  { href: '/contact', label: 'Contact', id: 'contact' },
];

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`
      w-full
      h-16
      flex items-center
      ${isScrolled ? 'bg-white dark:bg-gray-900 shadow-md' : 'bg-transparent'}
      transition-all duration-300
      sticky top-0 z-50
      px-4 md:px-6
    `}>
      <div className="max-w-6xl mx-auto w-full flex justify-between items-center h-full">
        <Link 
          href="/" 
          className="flex items-center h-full"
        >
          <h1 className="text-xl md:text-2xl font-bold text-blue-600 dark:text-blue-400">daveliew</h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-4 h-full items-center">
          {navLinks.map(link => {
            const isActive = 
              link.href === '/' 
                ? pathname === '/' 
                : pathname.startsWith(link.href);
            
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative transition-colors duration-200 px-1 py-2 flex items-center
                  hover:text-blue-600 dark:hover:text-blue-400
                  ${isActive 
                    ? 'text-blue-600 dark:text-blue-400 font-medium after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-0.5 after:bg-blue-600 dark:after:bg-blue-400 after:rounded-full after:content-[""]' 
                    : 'text-gray-700 dark:text-gray-300'}
                `}
              >
                <span className="text-sm md:text-base">{link.label}</span>
              </Link>
            );
          })}
        </div>

        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden flex items-center"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white dark:bg-gray-900 shadow-lg z-50 py-4 px-6 flex flex-col space-y-3">
          {navLinks.map(link => {
            const isActive = 
              link.href === '/' 
                ? pathname === '/' 
                : pathname.startsWith(link.href);
            
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`py-2 ${isActive 
                  ? 'text-blue-600 dark:text-blue-400 font-medium'
                  : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Navbar; 