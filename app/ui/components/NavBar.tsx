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
    className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 
      ${isActive ? "bg-blue-200 text-blue-800 font-semibold" : "text-gray-300"}
      hover:bg-blue-100 hover:text-blue-700`}
  >
    {children}
  </a>
);

const NavBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = React.useState<boolean>(false);
  const [currentPath, setCurrentPath] = React.useState<string | null>(null); // Prevent initial mismatch

  React.useEffect(() => {
    // Update current path after mounting
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
    <nav className="absolute top-8 left-0 w-full z-10 px-6">
      {/* Navbar Container */}
      <div className="bg-transparent shadow-md rounded-full mx-auto max-w-screen-lg">
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
                isActive={currentPath === link.href} // Only check after mounting
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 right-0 w-3/4 h-screen bg-black/70 backdrop-blur-md md:hidden">
          <div className="bg-white/20 backdrop-blur-lg rounded-l-lg shadow-lg p-6">
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

            {/* Navigation Links */}
            <ul className="flex flex-col space-y-4 mt-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <NavLink
                    href={link.href}
                    isActive={currentPath === link.href} // Ensure SSR safety
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
