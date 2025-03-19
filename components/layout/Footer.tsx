import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8">
      <p>&copy; {currentYear} David Liew. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

