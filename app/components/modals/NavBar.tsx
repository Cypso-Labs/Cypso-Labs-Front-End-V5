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
    className={`block text-[#070101] px-4 py-2 rounded-full hover:bg-[#5B8DBA] transition duration-300 ${
      isActive
        ? "bg-white text-[#0a192f] font-bold shadow-md"
        : "text-white hover:text-grey"
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
    <nav className="bg-gradient-to-r from-[#2A3A46] to-[#3A5A6C] rounded-full p-2 mt-4 mx-auto max-w-6xl shadow-lg">
      <div className="flex items-center justify-between px-6">
      
        <div className="flex items-center gap-2">
          {logoSrc && (
            <img
              src={logoSrc}
              alt="CYPSO LABS logo"
              className="w-10 h-10 object-contain"
            />
          )}
          <span className="text-white text-2xl font-bold tracking-wide">
            CYPSO LABS
          </span>
        </div>

       
        <div className="hidden md:flex gap-6 items-center">
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

       
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Open menu"
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
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#2A3A46] rounded-lg shadow-lg mt-2">
          <ul className="flex flex-col items-start p-4">
            {navLinks.map((link) => (
              <li key={link.href} className="w-full">
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
