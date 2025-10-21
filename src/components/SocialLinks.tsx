"use client";
import { useState } from "react";

export default function SocialLinks() {
  const [hoveredLink, setHoveredLink] = useState(null);

  const links = [
    {
      href: "https://www.instagram.com/doctor_kiki/",
      label: "Instagram",
      gradient: "from-purple-500 via-pink-500 to-orange-500",
      hoverGradient: "from-purple-600 via-pink-600 to-orange-600",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      href: "https://www.facebook.com/doctorkiki",
      label: "Facebook",
      gradient: "from-blue-500 to-blue-700",
      hoverGradient: "from-blue-600 to-blue-800",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      href: "https://tiktok.com/",
      label: "TikTok",
      gradient: "from-gray-800 via-gray-900 to-black",
      hoverGradient: "from-gray-900 via-black to-gray-900",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 space-y-2">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
            Connect With Me
          </h3>
          <p className="text-gray-600">Follow my journey on social media</p>
        </div>

        {/* Social Links Grid */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {links.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => setHoveredLink(index)}
              onMouseLeave={() => setHoveredLink(null)}
              className="group relative overflow-hidden"
            >
              {/* Desktop Version - Large Buttons */}
              <div className="hidden sm:block">
                <div
                  className={`relative px-8 py-4 bg-gradient-to-r ${link.gradient} text-white font-semibold rounded-2xl shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105`}
                >
                  <div className="flex items-center gap-3">
                    <div className="transform group-hover:rotate-12 transition-transform duration-300">
                      {link.icon}
                    </div>
                    <span className="text-base">{link.label}</span>
                    <svg
                      className="w-4 h-4 transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>

                  {/* Hover gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${link.hoverGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`}
                  ></div>

                  {/* Shine effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                  </div>
                </div>
              </div>

              {/* Mobile Version - Icon Buttons */}
              <div className="sm:hidden">
                <div
                  className={`relative w-14 h-14 bg-gradient-to-r ${link.gradient} text-white rounded-xl shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-110 flex items-center justify-center`}
                >
                  <div className="transform group-hover:rotate-12 transition-transform duration-300">
                    {link.icon}
                  </div>

                  {/* Hover gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${link.hoverGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl`}
                  ></div>
                </div>

                {/* Label below icon on mobile */}
                <p className="text-xs text-gray-600 text-center mt-2 font-medium">
                  {link.label}
                </p>
              </div>

              {/* Decorative pulse ring on hover */}
              <div
                className={`absolute inset-0 rounded-2xl transition-all duration-500 ${
                  hoveredLink === index
                    ? "ring-4 ring-offset-2 ring-offset-white animate-pulse"
                    : "ring-0"
                } ${
                  index === 0
                    ? "ring-pink-300"
                    : index === 1
                    ? "ring-blue-300"
                    : "ring-gray-300"
                }`}
              ></div>
            </a>
          ))}
        </div>

        {/* Alternative: Floating Action Buttons Style */}
        <div className="mt-12 flex justify-center">
          <div className="relative">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">
                  Stay Updated
                </p>
                <p className="text-xs text-gray-600">
                  Join thousands of followers
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
