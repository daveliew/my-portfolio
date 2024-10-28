const Navigation = () => {
  return (
    <nav className="fixed right-8 top-1/2 transform -translate-y-1/2">
      <ul className="space-y-2">
        <li><a href="#about" className="text-off-white hover:text-burgundy transition-colors">About</a></li>
        <li><a href="#experience" className="text-off-white hover:text-burgundy transition-colors">Experience</a></li>
        <li><a href="#projects" className="text-off-white hover:text-burgundy transition-colors">Projects</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;
