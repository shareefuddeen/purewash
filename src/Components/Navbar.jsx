import React, { useState } from "react";
import menu from "../Images/more.webp";

export const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);

  const menuItems = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Why Us", href: "#why" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-md shadow-sm z-50 px-8 py-4 flex justify-between items-center">
      {/* Logo */}
      <h1 className="text-2xl font-bold">
        Pure<span className="text-accent">Wash</span>
      </h1>

      {/* Mobile Menu Icon */}
      <div onClick={() => setIsClicked(!isClicked)}>
        {
          isClicked?(<span className="cursor-pointer font-bold text-2xl">X</span>):(<img
        src={menu}
        className="w-8 h-8 block sm:hidden cursor-pointer"
        alt="menu"
        aria-expanded={isClicked}
        aria-controls="mobile-menu"
      />)
        }
      </div>

      {/* Mobile Menu */}
      <ul
        id="mobile-menu"
        className={`absolute top-16 left-0 w-full text-sm space-y-3 font-medium p-6 bg-accent transform transition-all duration-400 ease-in-out sm:hidden ${
          isClicked
            ? "opacity-100 translate-y-0 flex flex-col"
            : "opacity-0 -translate-y-5 hidden"
        }`}
      >
        {menuItems.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              onClick={() => setIsClicked(false)} // closes menu
              className="block hover:bg-primary transition hover:text-white px-4 py-2 rounded-full text-center"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Desktop Menu */}
      <ul className="hidden sm:flex gap-6 text-sm font-medium">
        {menuItems.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className="hover:bg-primary transition hover:text-white px-4 py-2 rounded-full"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
