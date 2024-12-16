/* eslint-disable @next/next/no-img-element */
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
    className={`hover:text-gray-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 rounded-md px-2 py-1 ${
      isActive ? "text-white" : "text-gray-400"
    }`}
    aria-current={isActive ? "page" : undefined}
  >
    {children}
  </a>
);

interface NavBarProps {
  logoSrc: string;
  companyName: string;
}

const NavBar: React.FC<NavBarProps> = ({ logoSrc, companyName }) => {
  const [isMobile, setIsMobile] = React.useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);
  const [currentPath, setCurrentPath] = React.useState<string>("/");

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    setCurrentPath(window.location.pathname);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact Us" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative bg-[#112240] text-white py-4">
      {/* Main Container */}
      <div className="flex items-center justify-between px-6 lg:px-12">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src={logoSrc}
            alt={`${companyName} logo`}
            className="w-8 h-8 object-contain"
          />
          <span className="text-lg font-bold">{companyName}</span>
        </div>

        {/* Desktop Navigation */}
        {!isMobile && (
          <div className="flex gap-8 items-center">
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
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <button
            onClick={toggleMenu}
            className="p-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {/* Hamburger Icon */}
            <div className="space-y-1.5">
              <div className="w-6 h-0.5 bg-white"></div>
              <div className="w-6 h-0.5 bg-white"></div>
              <div className="w-6 h-0.5 bg-white"></div>
            </div>
          </button>
        )}
      </div>

      {/* Mobile Navigation Menu */}
      {isMobile && isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0a192f] rounded-b-lg shadow-lg z-50">
          <div className="flex flex-col py-4 px-6">
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
      )}
    </nav>
  );
};

export default NavBar;
