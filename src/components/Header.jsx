import React, { useState, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLightMode, setIsLightMode] = useState(true);

  useEffect(() => {
    if (isLightMode) {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
  }, [isLightMode]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleLightMode = () => setIsLightMode(!isLightMode);

  return (
    <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 text-white z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-xl md:text-2xl font-bold">Mmeli Gabriel Dyantyi</h1>
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            <li><a href="#home" className="hover:text-yellow-300 transition">Home</a></li>
            <li><a href="#about" className="hover:text-yellow-300 transition">About</a></li>
            <li><a href="#projects" className="hover:text-yellow-300 transition">Projects</a></li>
            <li><a href="#contact" className="hover:text-yellow-300 transition">Contact</a></li>
          </ul>
          <button
            onClick={toggleLightMode}
            className="ml-4 p-2 rounded-full hover:bg-yellow-300 hover:bg-opacity-20 transition"
            aria-label="Toggle light mode"
          >
            {isLightMode ? "☀️" : "🌙"}
          </button>
        </nav>
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-indigo-800 text-white">
          <ul className="flex flex-col space-y-4 py-6 px-6">
            <li><a href="#home" onClick={toggleMenu}>Home</a></li>
            <li><a href="#about" onClick={toggleMenu}>About</a></li>
            <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
