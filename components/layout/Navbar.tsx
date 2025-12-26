'use client'

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home', id: 'home' },
  { href: '/philosophy', label: 'Philosophy', id: 'philosophy' },
];

// 3-Theme Structure: WHY → HOW → WHAT (Golden Circle for tech professionals)
const aiJourneyMenu = {
  why: [
    { href: '/ai-journey/why-ai', label: 'Why Human-AI Collaboration' },
    { href: '/ai-journey/overview', label: 'Context Engineering' },
    { href: '/philosophy', label: 'Philosophy & Principles' },
  ],
  how: [
    { href: '/ai-journey/claude/overview', label: 'Claude Mastery' },
    { href: '/ai-journey/technical-leadership', label: 'Technical Implementation' },
    { href: '/ai-journey/techniques/prompt-engineering', label: 'Techniques Reference' },
  ],
  what: [
    { href: '/ai-journey/portfolio', label: 'Portfolio & Results' },
    { href: '/laboratory', label: 'Laboratory' },
    { href: '/agents', label: 'AI Agents 2026' },
  ],
};

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showAIJourneyMenu, setShowAIJourneyMenu] = useState(false);
  const [menuTimeout, setMenuTimeout] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = () => {
    if (menuTimeout) clearTimeout(menuTimeout);
    setShowAIJourneyMenu(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setShowAIJourneyMenu(false);
    }, 150);
    setMenuTimeout(timeout);
  };

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
      <div className="max-w-6xl mx-auto w-full flex justify-center items-center h-full">
        {/* Desktop Navigation - Centralized */}
        <div className="hidden md:flex space-x-6 h-full items-center">
          {/* Left side navigation */}
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
          
          {/* AI Journey Mega Menu - Center */}
          <div 
            className="relative h-full flex items-center"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              href="/ai-journey"
              className={`relative transition-colors duration-200 px-1 py-2 flex items-center
                hover:text-blue-600 dark:hover:text-blue-400
                ${pathname.startsWith('/ai-journey')
                  ? 'text-blue-600 dark:text-blue-400 font-medium after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-0.5 after:bg-blue-600 dark:after:bg-blue-400 after:rounded-full after:content-[""]' 
                  : 'text-gray-700 dark:text-gray-300'}
              `}
            >
              <span className="text-sm md:text-base">AI Journey</span>
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>

            {/* Mega Menu Dropdown - 3 Themes: WHY → HOW → WHAT */}
            {showAIJourneyMenu && (
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-[600px] bg-white dark:bg-gray-900 shadow-2xl border-t-2 border-blue-600 dark:border-blue-400 z-50 mt-0">
                <div className="grid grid-cols-3 gap-6 p-6">
                  {/* WHY - Foundation */}
                  <div>
                    <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-3 text-sm uppercase tracking-wide">Why</h3>
                    <ul className="space-y-2">
                      {aiJourneyMenu.why.map(item => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className="block hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
                            onClick={() => setShowAIJourneyMenu(false)}
                          >
                            <div className="text-sm font-medium text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                              {item.label}
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* HOW - Skills */}
                  <div>
                    <h3 className="font-semibold text-purple-600 dark:text-purple-400 mb-3 text-sm uppercase tracking-wide">How</h3>
                    <ul className="space-y-2">
                      {aiJourneyMenu.how.map(item => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className="block hover:text-purple-600 dark:hover:text-purple-400 transition-colors group"
                            onClick={() => setShowAIJourneyMenu(false)}
                          >
                            <div className="text-sm font-medium text-gray-900 dark:text-gray-100 group-hover:text-purple-600 dark:group-hover:text-purple-400">
                              {item.label}
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* WHAT - Results */}
                  <div>
                    <h3 className="font-semibold text-teal-600 dark:text-teal-400 mb-3 text-sm uppercase tracking-wide">What</h3>
                    <ul className="space-y-2">
                      {aiJourneyMenu.what.map(item => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className="block hover:text-teal-600 dark:hover:text-teal-400 transition-colors group"
                            onClick={() => setShowAIJourneyMenu(false)}
                          >
                            <div className="text-sm font-medium text-gray-900 dark:text-gray-100 group-hover:text-teal-600 dark:group-hover:text-teal-400">
                              {item.label}
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Agents - 2026 Focus */}
          <Link
            href="/agents"
            className={`relative transition-colors duration-200 px-1 py-2 flex items-center
              hover:text-[var(--deep-purple)]
              ${pathname.startsWith('/agents')
                ? 'text-[var(--deep-purple)] font-medium after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-0.5 after:bg-[var(--deep-purple)] after:rounded-full after:content-[""]'
                : 'text-gray-700 dark:text-gray-300'}
            `}
          >
            <span className="text-sm md:text-base">Agents</span>
          </Link>

          {/* Right side navigation */}
          <Link
            href="/laboratory"
            className={`relative transition-colors duration-200 px-1 py-2 flex items-center
              hover:text-blue-600 dark:hover:text-blue-400
              ${pathname.startsWith('/laboratory')
                ? 'text-blue-600 dark:text-blue-400 font-medium after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-0.5 after:bg-blue-600 dark:after:bg-blue-400 after:rounded-full after:content-[""]' 
                : 'text-gray-700 dark:text-gray-300'}
            `}
          >
            <span className="text-sm md:text-base">Laboratory</span>
          </Link>

          <Link
            href="/contact"
            className={`relative transition-colors duration-200 px-1 py-2 flex items-center
              hover:text-blue-600 dark:hover:text-blue-400
              ${pathname.startsWith('/contact')
                ? 'text-blue-600 dark:text-blue-400 font-medium after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-0.5 after:bg-blue-600 dark:after:bg-blue-400 after:rounded-full after:content-[""]' 
                : 'text-gray-700 dark:text-gray-300'}
            `}
          >
            <span className="text-sm md:text-base">Contact</span>
          </Link>
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
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white dark:bg-gray-900 shadow-lg z-50 py-4 px-6 flex flex-col space-y-3 max-h-[80vh] overflow-y-auto">
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
          
          {/* Other main pages */}
          <Link
            href="/laboratory"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`py-2 ${pathname.startsWith('/laboratory')
              ? 'text-blue-600 dark:text-blue-400 font-medium'
              : 'text-gray-700 dark:text-gray-300'
            }`}
          >
            Laboratory
          </Link>
          
          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`py-2 ${pathname.startsWith('/contact')
              ? 'text-blue-600 dark:text-blue-400 font-medium'
              : 'text-gray-700 dark:text-gray-300'
            }`}
          >
            Contact
          </Link>

          <Link
            href="/agents"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`py-2 ${pathname.startsWith('/agents')
              ? 'text-[var(--deep-purple)] font-medium'
              : 'text-gray-700 dark:text-gray-300'
            }`}
          >
            AI Agents
          </Link>

          {/* Mobile AI Journey Section - 3 Themes */}
          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="font-semibold text-blue-600 dark:text-blue-400 mb-3">AI Journey</div>

            <div className="pl-4 space-y-3">
              {/* WHY */}
              <div className="text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wide">Why</div>
              {aiJourneyMenu.why.map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-1 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {item.label}
                </Link>
              ))}

              {/* HOW */}
              <div className="text-sm font-medium text-purple-600 dark:text-purple-400 uppercase tracking-wide mt-4">How</div>
              {aiJourneyMenu.how.map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-1 text-sm text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400"
                >
                  {item.label}
                </Link>
              ))}

              {/* WHAT */}
              <div className="text-sm font-medium text-teal-600 dark:text-teal-400 uppercase tracking-wide mt-4">What</div>
              {aiJourneyMenu.what.map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-1 text-sm text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 