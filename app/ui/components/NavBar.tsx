/* eslint-disable @next/next/no-img-element */
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
    { href: "/aboutUs", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <nav className="absolute z-10 mx-auto mt-4 max-w-screen-lg px-6">
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
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-0 right-0 w-1/2 h-screen bg-black/50 backdrop-blur-lg md:hidden">
          <div className="w-full bg-white/20 backdrop-blur-lg rounded-l-lg shadow-lg relative">
            {/* Close Button */}
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-4 right-4 text-white text-2xl focus:outline-none"
            >
              &#x2715; {/* Close Icon */}
            </button>

            {/* Small Icon at the Top */}
            <div className="flex justify-center mt-4">
              <img
                src="/images/image1.png" // Replace with the correct path
                alt="Menu Icon"
                className="w-10 h-10"
              />
            </div>

            {/* Navigation Links - Positioned at the Top */}
            <ul className="flex flex-col space-y-4 pt-8 px-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <NavLink
                    href={link.href}
                    isActive={currentPath === link.href}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
