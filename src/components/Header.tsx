"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="relative text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
          >
            Doctor Kiki
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link
              href="/about"
              className="relative px-4 py-2 text-gray-700 font-medium text-sm lg:text-base overflow-hidden group"
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                About Me
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-lg"></span>
            </Link>
            <Link
              href="/gallary"
              className="relative px-4 py-2 text-gray-700 font-medium text-sm lg:text-base overflow-hidden group"
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                Explore Gallery
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-lg"></span>
            </Link>
            <Link
              href="/contact"
              className="relative px-4 py-2 text-gray-700 font-medium text-sm lg:text-base overflow-hidden group"
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                Contact
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-lg"></span>
            </Link>

            <Link
              href="/gallary"
              className="ml-4 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-sm lg:text-base"
            >
              Book Appointment
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-gray-700 transform transition-all duration-300 ${
                  isOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`w-full h-0.5 bg-gray-700 transition-all duration-300 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`w-full h-0.5 bg-gray-700 transform transition-all duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="py-4 space-y-2">
            <Link
              href="/about"
              className="block px-4 py-3 text-gray-700 font-medium hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 rounded-lg transition-all duration-200"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>

            <Link
              href="/contact"
              className="block px-4 py-3 text-gray-700 font-medium hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 hover:text-purple-600 rounded-lg transition-all duration-200"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>

            <Link
              href="/appointment"
              className="block mx-4 mt-4 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full text-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              Book Appointment
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
