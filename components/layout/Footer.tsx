import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-8">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Dave Liew</h3>
            <p className="text-gray-600 dark:text-gray-300">
              AI Engineer & Builder fusing human creativity with tomorrow&apos;s technology.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Explore AI Journey</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/ai-journey/overview" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                  Learning Overview
                </Link>
              </li>
              <li>
                <Link href="/ai-journey/portfolio" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                  AI Portfolio
                </Link>
              </li>
              <li>
                <Link href="/ai-journey/how-to-learn/overview" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                  How to Learn AI
                </Link>
              </li>
              <li>
                <Link href="/ai-journey/why-ai" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                  Why AI Matters
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://linkedin.com/in/daveliew" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/daveliew" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://agenticbrewery.ai" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                  Agentic Brewery
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center text-gray-600 dark:text-gray-400">
          <p>&copy; {currentYear} Dave Liew. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

