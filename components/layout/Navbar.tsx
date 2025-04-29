'use client'

import Link from 'next/link';
import { useEffect, useState } from 'react';

interface NavbarProps {
  isHomePage: boolean;
}

const navLinks = [
  { href: '/#systems', label: 'Life System', id: 'systems' },
  { href: '/#skills', label: 'Skills', id: 'skills' },
  { href: '/#experience', label: 'Experience', id: 'experience' },
  { href: '/ai-journey', label: 'AI Journey', id: 'ai-journey' },
];

const Navbar: React.FC<NavbarProps> = ({ isHomePage }) => {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const offsets = navLinks
        .filter(link => link.href.startsWith('/#'))
        .map(link => {
          const el = document.getElementById(link.id);
          return el ? { id: link.id, top: el.getBoundingClientRect().top } : null;
        })
        .filter(Boolean) as { id: string; top: number }[];
      const threshold = 120;
      const current = offsets.find(section => section.top > 0 && section.top < threshold);
      setActiveSection(current ? current.id : '');
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    if (isHomePage) {
      e.preventDefault();
      const section = document.getElementById(targetId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState({}, '', `/#${targetId}`);
      }
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.history.pushState({}, '', '/');
  };

  return (
    <nav className="
      w-full
      h-16
      flex items-center
      bg-[var(--dark-grey)]
      border-b border-[var(--dark-grey-secondary)]
      sticky top-0 z-50
      px-4 md:px-6
      shadow-lg
    ">
      <div className="max-w-6xl mx-auto w-full flex justify-between items-center h-full">
        <Link 
          href="/" 
          className="flex items-center h-full"
          onClick={handleLogoClick}
        >
          <h1 className="mt-8 text-xl md:text-2xl font-bold font-navbar text-[var(--accent-primary)] leading-none">daveliew</h1>
        </Link>
        <div className="flex space-x-6 md:space-x-10 h-full items-center">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-navbar text-[var(--text-primary)] relative transition-colors duration-200 px-1 py-2 flex items-center
                hover:text-[var(--accent-primary)]
                ${activeSection === link.id ? 'text-[var(--accent-primary)] after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-0.5 after:bg-[var(--accent-primary)] after:rounded-full after:content-[""]' : ''}
              `}
              onClick={link.href.startsWith('/#') ? (e) => handleSmoothScroll(e, link.id) : undefined}
            >
              <span className="text-sm md:text-base">{link.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 