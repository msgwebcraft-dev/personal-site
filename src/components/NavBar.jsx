import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
  { to: "/capstone", label: "Capstone" },
  { to: "/contact", label: "Contact" },
  { to: "/reflection", label: "Reflection" },
];

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-800 via-indigo-800 to-purple-800 text-white p-4 shadow-md">
      <ul className="flex items-center space-x-6">
        {links.map((l) => (
          <li key={l.to}>
            <NavLink
              to={l.to}
              className={({ isActive }) =>
                isActive
                  ? "font-bold underline text-yellow-300"
                  : "hover:text-yellow-300 transition"
              }
            >
              {l.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
