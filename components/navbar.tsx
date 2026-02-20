"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Change background color when user scrolls
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/80 backdrop-blur-md shadow-md py-2" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className={`text-2xl font-bold transition-colors ${
          scrolled ? "text-blue-700" : "text-white"
        }`}>
          Go Travel
        </div>

        {/* Desktop Menu */}
        <div className={`hidden md:flex space-x-8 items-center font-medium ${
          scrolled ? "text-gray-700" : "text-white/90"
        }`}>
          <a href="#" className="hover:text-blue-400 transition-colors">Home</a>
          <a href="/destinations" className="hover:text-blue-400 transition-colors">Destinations</a>
          <a href="/about" className="hover:text-blue-400 transition-colors">About</a>
          <a href="/contact" className="hover:text-blue-400 transition-colors">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`${scrolled ? "text-blue-700" : "text-white"} focus:outline-none`}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t border-gray-100 p-6 flex flex-col space-y-4 shadow-xl md:hidden text-gray-800">
          <a href="#" className="hover:text-blue-600 font-medium">Home</a>
          <a href="/destinations" className="hover:text-blue-600 font-medium">Destinations</a>
          <a href="/about" className="hover:text-blue-600 font-medium">About</a>
          <a href="/contact" className="hover:text-blue-600 font-medium">Contact</a>
        </div>
      )}
    </nav>
  );
}