/* eslint-disable @next/next/no-html-link-for-pages */
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
    className={`block px-4 py-2 text-white rounded-lg transition duration-300 hover:bg-white hover:text-blue-900 md:inline-flex md:items-center md:rounded-none md:text-gray-200 md:hover:text-white md:hover:bg-transparent md:font-medium ${
      isActive
        ? "font-bold text-white bg-blue-600 md:bg-transparent md:text-blue-400"
        : ""
    }`}
    aria-current={isActive ? "page" : undefined}
  >
    {children}
  </a>
);

interface NavBarProps {
  logoSrc?: string;
}

const NavBar: React.FC<NavBarProps> = ({ logoSrc }) => {
  const [currentPath, setCurrentPath] = React.useState<string>("/");
  const [menuOpen, setMenuOpen] = React.useState<boolean>(false);

  React.useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <nav className="bg-gradient-to-r from-blue-900 to-blue-500 rounded-full shadow-lg mx-auto mt-4 max-w-7xl px-4">
      <div className="flex items-center justify-between py-2">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center space-x-2 text-white text-2xl font-semibold"
        >
          {/* <img
            src={logoSrc || "https://flowbite.com/docs/images/logo.svg"}
            className="h-8 rounded-full"
            alt="Logo"
          /> */}
          <span>Cypso Labs</span>
        </a>

        {/* Hamburger Menu */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden inline-flex items-center p-2 text-white rounded-lg focus:ring-2 focus:ring-gray-300"
          aria-controls="navbar-default"
          aria-expanded={menuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Menu */}
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } absolute z-50 w-full top-14 left-0 bg-gradient-to-b from-blue-900 to-blue-700 md:bg-transparent md:relative md:block md:top-0 md:w-auto md:z-auto rounded-lg shadow-lg md:shadow-none`}
          id="navbar-default"
        >
          <ul className="flex flex-col p-4 md:p-0 md:flex-row md:space-x-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <NavLink href={link.href} isActive={currentPath === link.href}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
