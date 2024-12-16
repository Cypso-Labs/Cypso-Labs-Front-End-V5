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
    className={`block px-4 py-2 rounded-md text-sm text-gray-300 hover:text-white hover:bg-[#0a1f33] transition duration-200 ${
      isActive ? "text-white font-bold" : ""
    }`}
    aria-current={isActive ? "page" : undefined}
  >
    {children}
  </a>
);

interface NavBarProps {
  companyName: string;
}

const NavBar: React.FC<NavBarProps> = ({ companyName }) => {
  const [isMobile, setIsMobile] = React.useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);
  const [currentPath, setCurrentPath] = React.useState<string>("/");

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);

    handleResize();
    window.addEventListener("resize", handleResize);
    setCurrentPath(window.location.pathname);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="relative bg-gradient-to-r from-[#102542] to-[#0a1f33] text-white py-2 px-4 rounded-full shadow-lg max-w-5xl mx-auto mt-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-semibold tracking-wide">{companyName}</div>

        {/* Mobile Menu Button */}
        {isMobile && (
          <button
            onClick={toggleMenu}
            className="focus:outline-none p-2 rounded-md hover:bg-[#0a1f33] transition"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <div className="space-y-1">
              <div className="w-6 h-0.5 bg-white"></div>
              <div className="w-6 h-0.5 bg-white"></div>
              <div className="w-6 h-0.5 bg-white"></div>
            </div>
          </button>
        )}

        {/* Desktop Navigation */}
        {!isMobile && (
          <div className="flex gap-6">
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
      </div>

      {/* Mobile Dropdown */}
      {isMobile && isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0a192f] rounded-b-lg shadow-lg z-50">
          <div className="flex flex-col py-2 px-4">
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
