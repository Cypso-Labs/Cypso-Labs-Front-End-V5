/* eslint-disable @next/next/no-html-link-for-pages */
"use client";
import * as React from "react";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, isActive }) => (
  <a
    href={href}
    className={`px-4 py-2 text-white text-sm font-medium transition-all duration-300 hover:text-white hover:opacity-80 ${
      isActive ? "text-white font-bold" : "text-gray-300"
    }`}
  >
    {children}
  </a>
);

const NavBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = React.useState<boolean>(false);
  const [currentPath, setCurrentPath] = React.useState<string>("/");

  React.useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/AboutPage", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <nav className="relative z-10 mx-auto mt-4 max-w-screen-lg px-6">
      {/* Navbar Container */}
      <div className="bg-gray-700 rounded-full shadow-md">
        <div className="flex items-center justify-between h-16 px-6">
          {/* Logo */}
          <a href="/" className="text-white text-2xl font-bold">
            CYPSO LABS
          </a>

          {/* Hamburger Menu */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden inline-flex items-center p-2 text-white rounded focus:outline-none focus:ring-2 focus:ring-white"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                isActive={currentPath === link.href}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-gray-700 rounded-lg shadow-lg md:hidden">
          <ul className="flex flex-col space-y-2 p-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <NavLink href={link.href} isActive={currentPath === link.href}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
