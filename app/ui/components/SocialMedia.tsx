"use client"; // Required for client-side hooks

import React from "react";
import { usePathname } from "next/navigation"; // Use next/navigation for App Router
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

const SocialMedia = () => {
  const pathname = usePathname(); // Get current path
  const isAboutPage = pathname === "/aboutUs"; // Check if it's the AboutUs page

  if (isAboutPage) return null; // Disable SocialMedia component on About Us page

  return (
    <div className="fixed left-4 top-1/4 z-50">
      {/* Desktop View */}
      <div className="hidden lg:flex flex-col space-y-4">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="w-12 h-12 flex items-center justify-center bg-gray-600 text-white rounded-full hover:bg-blue-500">
            <FaFacebookF size={20} />
          </div>
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="w-12 h-12 flex items-center justify-center bg-gray-600 text-white rounded-full hover:bg-blue-700">
            <FaLinkedinIn size={20} />
          </div>
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="w-12 h-12 flex items-center justify-center bg-gray-600 text-white rounded-full hover:bg-pink-500">
            <FaInstagram size={20} />
          </div>
        </a>
        <a href="mailto:your@email.com">
          <div className="w-12 h-12 flex items-center justify-center bg-gray-600 text-white rounded-full hover:bg-red-500">
            <FaEnvelope size={20} />
          </div>
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
