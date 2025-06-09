'use client'

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home', id: 'home' },
  { href: '/philosophy', label: 'Philosophy', id: 'philosophy' },
];

const aiJourneyMenu = {
  gettingStarted: [
    { href: '/ai-journey/why-ai', label: 'Why Human-AI Collaboration', description: 'The case for complementarity over replacement' },
    { href: '/ai-journey/how-to-learn/overview', label: 'Three-Hat Framework', description: 'Systems Architect → Product Manager → Implementation' },
    { href: '/ai-journey', label: 'Learning Path Selector', description: 'Find your optimal learning journey' },
  ],
  learningPaths: [
    { href: '/ai-journey/how-to-learn/technical-leadership', label: 'Technical Leadership', description: 'Integrate all three hats for comprehensive AI solutions' },
    { href: '/ai-journey/how-to-learn/llm-handling', label: 'LLM Implementation', description: 'Human-AI communication and prompt engineering' },
    { href: '/ai-journey/how-to-learn/agent-rag', label: 'Agent & RAG Systems', description: 'Complementary intelligence architectures' },
    { href: '/ai-journey/how-to-learn/claude-mastery', label: 'Claude Mastery', description: 'Deep dive into Claude\'s advanced capabilities' },
  ],
  claudeDeepDive: [
    { href: '/ai-journey/how-to-learn/claude-mastery/prompt-engineering', label: 'Prompt Engineering', description: 'Advanced prompting techniques and patterns' },
    { href: '/ai-journey/how-to-learn/claude-mastery/tool-use', label: 'Tool Use & Function Calling', description: 'Integrate Claude with external systems' },
    { href: '/ai-journey/how-to-learn/claude-mastery/computer-use', label: 'Computer Use Capabilities', description: 'Claude\'s computer interaction features' },
    { href: '/ai-journey/how-to-learn/claude-mastery/vision-multimodal', label: 'Vision & Multimodal', description: 'Working with images and mixed content' },
  ],
  livingLab: [
    { href: '/ai-journey/portfolio', label: 'Portfolio Results', description: 'Living lab implementations and case studies' },
    { href: '/laboratory#professional-background', label: 'Professional Background', description: '10+ years of hands-on experience' },
    { href: '/laboratory', label: 'Current Experiments', description: 'Live proof of frameworks in action' },
  ]
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
      <div className="max-w-6xl mx-auto w-full flex justify-between items-center h-full">
        <Link 
          href="/" 
          className="flex items-center h-full"
        >
          <h1 className="text-xl md:text-2xl font-bold text-blue-600 dark:text-blue-400">daveliew</h1>
        </Link>

        {/* Desktop Navigation */}
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

            {/* Mega Menu Dropdown - Smaller */}
            {showAIJourneyMenu && (
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-[800px] bg-white dark:bg-gray-900 shadow-2xl border-t-2 border-blue-600 dark:border-blue-400 z-50 mt-0">
                <div className="grid grid-cols-3 gap-6 p-6">
                  {/* Getting Started & Learning Paths */}
                  <div>
                    <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-3">Getting Started</h3>
                    <ul className="space-y-2 mb-4">
                      {aiJourneyMenu.gettingStarted.map(item => (
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
                    
                    <h3 className="font-semibold text-green-600 dark:text-green-400 mb-3">Learning Paths</h3>
                    <ul className="space-y-2">
                      {aiJourneyMenu.learningPaths.map(item => (
                        <li key={item.href}>
                          <Link 
                            href={item.href}
                            className="block hover:text-green-600 dark:hover:text-green-400 transition-colors group"
                            onClick={() => setShowAIJourneyMenu(false)}
                          >
                            <div className="text-sm font-medium text-gray-900 dark:text-gray-100 group-hover:text-green-600 dark:group-hover:text-green-400">
                              {item.label}
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Claude Deep Dive */}
                  <div>
                    <h3 className="font-semibold text-purple-600 dark:text-purple-400 mb-3">Claude Deep Dive</h3>
                    <ul className="space-y-2">
                      {aiJourneyMenu.claudeDeepDive.map(item => (
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
                    <Link 
                      href="/ai-journey/how-to-learn/claude-mastery"
                      className="block mt-2 text-xs text-purple-600 dark:text-purple-400 hover:underline"
                      onClick={() => setShowAIJourneyMenu(false)}
                    >
                      View All Claude Features →
                    </Link>
                  </div>

                  {/* Living Lab */}
                  <div>
                    <h3 className="font-semibold text-orange-600 dark:text-orange-400 mb-3">Living Lab</h3>
                    <ul className="space-y-2">
                      {aiJourneyMenu.livingLab.map(item => (
                        <li key={item.href}>
                          <Link 
                            href={item.href}
                            className="block hover:text-orange-600 dark:hover:text-orange-400 transition-colors group"
                            onClick={() => setShowAIJourneyMenu(false)}
                          >
                            <div className="text-sm font-medium text-gray-900 dark:text-gray-100 group-hover:text-orange-600 dark:group-hover:text-orange-400">
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
          
          {/* Mobile AI Journey Section */}
          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="font-semibold text-blue-600 dark:text-blue-400 mb-3">AI Journey</div>
            
            <div className="pl-4 space-y-3">
              <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Getting Started</div>
              {aiJourneyMenu.gettingStarted.map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-1 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {item.label}
                </Link>
              ))}
              
              <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mt-4">Learning Paths</div>
              {aiJourneyMenu.learningPaths.map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-1 text-sm text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400"
                >
                  {item.label}
                </Link>
              ))}
              
              <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mt-4">Claude Deep Dive</div>
              {aiJourneyMenu.claudeDeepDive.slice(0, 3).map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-1 text-sm text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/ai-journey/how-to-learn/claude-mastery"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-1 text-xs text-blue-600 dark:text-blue-400"
              >
                View All Claude Features →
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 