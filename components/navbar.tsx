"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Optional: install lucide-react for icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-transparent border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-700">Go Travel</div>

        {/* Desktop Menu - Hidden on mobile */}
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#" className="text-blue-600 hover:text-gray-900">Home</a>
          <a href="/destinations" className="text-blue-600 hover:text-gray-900">Destinations</a>
          <a href="/about" className="text-blue-600 hover:text-gray-900">About</a>
          <a href="/contact" className="text-blue-600 hover:text-gray-900">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-blue-700 focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown - Visible only when isOpen is true */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 pb-4 px-4 flex flex-col space-y-4 pt-4 shadow-lg">
          <a href="#" className="text-blue-600 hover:text-gray-900 font-medium">Home</a>
          <a href="/destinations" className="text-blue-600 hover:text-gray-900 font-medium">Destinations</a>
          <a href="/about" className="text-blue-600 hover:text-gray-900 font-medium">About</a>
          <a href="/contact" className="text-blue-600 hover:text-gray-900 font-medium">Contact</a>
        </div>
      )}
    </nav>
  );
}