import Link from 'next/link';
import Image from 'next/image';

interface NavbarProps {
  isHomePage: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isHomePage }) => {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    // Only use custom scroll behavior if already on the homepage
    if (isHomePage) {
      e.preventDefault();
      const section = document.getElementById(targetId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState({}, '', `/#${targetId}`);
      }
    }
    // If not on homepage, default behavior will navigate to /#targetId
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Update URL without the hash
    window.history.pushState({}, '', '/');
  };

  return (
    <nav className="
      w-full
      bg-dark-gray
      border-b border-gray-800
      sticky top-0 z-50
      py-3 px-4 md:py-6 md:px-6
    ">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link 
          href="/" 
          className="flex items-center"
          onClick={handleLogoClick}
        >
          <h1 className="text-xl md:text-2xl font-bold text-burgundy">daveliew</h1>
        </Link>
        

        <div className="flex space-x-6 md:space-x-10">
         <Link 
            href="/#systems" 
            className="text-off-white hover:text-burgundy transition-colors duration-300"
            onClick={(e) => handleSmoothScroll(e, 'systems')}
          >
            <span className="text-sm md:text-base">Life System</span>
          </Link>
          <Link 
            href="/#skills" 
            className="text-off-white hover:text-burgundy transition-colors duration-300"
            onClick={(e) => handleSmoothScroll(e, 'skills')}
          >
            <span className="text-sm md:text-base">Skills</span>
          </Link>
          <Link 
            href="/#experience" 
            className="text-off-white hover:text-burgundy transition-colors duration-300"
            onClick={(e) => handleSmoothScroll(e, 'experience')}
          >
            <span className="text-sm md:text-base">Experience</span>
          </Link>
          <Link href="/ai-journey" className="text-off-white hover:text-burgundy transition-colors duration-300">
            <span className="text-sm md:text-base">AI Journey</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 