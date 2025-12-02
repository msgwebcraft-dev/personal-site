import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import { useTheme } from "../context/ThemeContext";
import { FiMenu, FiX } from "react-icons/fi";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  // { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
  // { to: "/capstone", label: "Capstone" },
  { to: "/contact", label: "Contact" },
  // { to: "/reflection", label: "Reflection" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-2 z-50 mx-4 md:mx-8 bg-gradient-to-r from-black-800 via-indigo-800 to-grey-800 dark:from-gray-900 dark:via-indigo-900 dark:to-black-900
                    text-white shadow-md rounded-xl">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
        {/* Desktop Links */}
        <ul className="hidden md:flex items-center space-x-6">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                className={({ isActive }) =>
                  isActive
                    ? "font-bold underline text-grey-500 transition"
                    : "hover:text-gray-600 transition"
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-2xl focus:outline-none"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#00000] text-white rounded-b-xl shadow-md px-4 py-4 space-y-2 flex flex-col">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "font-bold underline text-yellow-300 block"
                  : "hover:text-yellow-300 transition block"
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
