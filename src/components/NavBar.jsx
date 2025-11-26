import React from "react";
import { NavLink } from "react-router-dom";
import ThemeToggle from "./ToggleMode";

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
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex space-x-4">
        {links.map((l) => (
          <li key={l.to}>
            <NavLink
              to={l.to}
              className={({ isActive }) =>
                isActive ? "font-bold underline" : ""
              }
            >
              {l.label}
            </NavLink>
          </li>
        ))}<div className="flex-grow" />
        <ThemeToggle />
      </ul>
    </nav>
  );
}
