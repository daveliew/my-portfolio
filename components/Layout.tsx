import React from 'react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex">
      <nav className="w-1/4 h-screen fixed left-0 p-8">
        {/* Navigation content */}
      </nav>
      <main className="w-3/4 ml-auto p-8">
        {children}
      </main>
    </div>
  );
};

export default Layout;
