import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const navItems = ({ isActive }) =>
    `transition hover:text-gray-300 py-1.5 px-3 rounded-2xl ${
      isActive ? "bg-gray-600" : ""
    }`;

  return (
    <nav className="w-full bg-gray-900 text-white shadow flex items-center justify-between px-6 py-3 sticky top-0 z-10">
      <Link className="font-bold text-xl" to="/">
        Projects
      </Link>
      <ul className="flex gap-6">
        <li>
          <NavLink to="/cards" className={navItems}>
            Cards
          </NavLink>
        </li>
        <li>
          <NavLink to="/counter" className={navItems}>
            Counter
          </NavLink>
        </li>
        <li>
          <NavLink to="/bg_color_change" className={navItems}>
            Color Changer
          </NavLink>
        </li>
        <li>
          <NavLink to="/password_generator" className={navItems}>
            Password Generator
          </NavLink>
        </li>
        <li>
          <NavLink to="/currency_converter" className={navItems}>
            Currency Converter
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
