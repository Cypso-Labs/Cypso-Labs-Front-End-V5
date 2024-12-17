import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

const SocialMedia = () => {
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

      {/* Mobile View */}
      <div className="flex lg:hidden flex-col space-y-2 mt-2">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="w-8 h-8 flex items-center justify-center bg-gray-600 text-white rounded-full hover:bg-blue-500">
            <FaFacebookF size={14} />
          </div>
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="w-8 h-8 flex items-center justify-center bg-gray-600 text-white rounded-full hover:bg-blue-700">
            <FaLinkedinIn size={14} />
          </div>
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="w-8 h-8 flex items-center justify-center bg-gray-600 text-white rounded-full hover:bg-pink-500">
            <FaInstagram size={14} />
          </div>
        </a>
        <a href="mailto:your@email.com">
          <div className="w-8 h-8 flex items-center justify-center bg-gray-600 text-white rounded-full hover:bg-red-500">
            <FaEnvelope size={14} />
          </div>
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
