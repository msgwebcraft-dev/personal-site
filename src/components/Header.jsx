import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-2 left-0 w-[calc(100%-1rem)] mx-2 z-50 bg-gradient-to-r from-blue-800 via-indigo-800 to-purple-800 text-white shadow-lg rounded-xl transition-all">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-3 px-4 md:px-8">
        <h1 className="text-lg md:text-xl font-bold tracking-wide">OGaba</h1>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center space-x-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-yellow-300 transition-colors duration-300 font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white text-2xl focus:outline-none">
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#001820] text-white rounded-b-xl shadow-md px-4 py-4 animate-fade-in">
          <ul className="flex flex-col space-y-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={toggleMenu}
                  className="block hover:text-yellow-300 transition-colors duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
