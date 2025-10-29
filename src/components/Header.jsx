import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLightMode, setIsLightMode] = useState(true);

  useEffect(() => {
    if (isLightMode) {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  }, [isLightMode]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLightMode = () => {
    setIsLightMode(!isLightMode);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-primary text-text z-50 border-b border-accent">
      <div className="container mx-auto flex justify-between items-center py-6 px-6">
        <h1 className="text-2xl font-bold font-heading">Mmeli Gabriel Dyantyi</h1>
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            <li><a href="#home" className="hover:text-accent transition-colors text-lg">Home</a></li>
            <li><a href="#about" className="hover:text-accent transition-colors text-lg">About</a></li>
            <li><a href="#projects" className="hover:text-accent transition-colors text-lg">Projects</a></li>
            <li><a href="#contact" className="hover:text-accent transition-colors text-lg">Contact</a></li>
          </ul>
          <button
            onClick={toggleLightMode}
            className="ml-4 p-2 rounded-full hover:bg-accent hover:bg-opacity-20 transition-colors"
            aria-label="Toggle light mode"
          >
            {isLightMode ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
              </svg>
            )}
          </button>
        </nav>
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleLightMode}
            className="p-2 rounded-full hover:bg-accent hover:bg-opacity-20 transition-colors mr-2"
            aria-label="Toggle light mode"
          >
            {isLightMode ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
              </svg>
            )}
          </button>
          <button
            className="text-text focus:outline-none"
            onClick={toggleMenu}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-primary border-t border-accent">
          <ul className="flex flex-col space-y-4 py-6 px-6">
            <li><a href="#home" className="hover:text-accent transition-colors text-lg" onClick={toggleMenu}>Home</a></li>
            <li><a href="#about" className="hover:text-accent transition-colors text-lg" onClick={toggleMenu}>About</a></li>
            <li><a href="#projects" className="hover:text-accent transition-colors text-lg" onClick={toggleMenu}>Projects</a></li>
            <li><a href="#contact" className="hover:text-accent transition-colors text-lg" onClick={toggleMenu}>Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
