"use client";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    explore: [
      { label: "About Me", href: "/about" },
      { label: "Gallery", href: "#gallery" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
    social: [
      { label: "Instagram", href: "https://instagram.com/" },
      { label: "Facebook", href: "https://facebook.com/" },
      { label: "TikTok", href: "https://tiktok.com/" },
      { label: "Twitter", href: "https://twitter.com/" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
    ],
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 border-t border-gray-100">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {/* Brand Section */}
            <div className="space-y-4 lg:col-span-1">
              <Link
                href="/"
                className="inline-block text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
              >
                Doctor KIKI
              </Link>
              <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
                Sharing small scenes from everyday life — honest, warm, and a
                little whimsical. Join me on this beautiful journey.
              </p>

              {/* Newsletter */}
              <div className="pt-2">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">
                  Stay Updated
                </h4>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  />
                  <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <svg
                      className="w-4 h-4"
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
                  </button>
                </div>
              </div>
            </div>

            {/* Explore Links */}
            <div>
              <h4 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-1 h-4 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></span>
                Explore
              </h4>
              <ul className="space-y-3">
                {footerLinks.explore.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group text-sm text-gray-600 hover:text-purple-600 transition-colors duration-300 inline-flex items-center gap-2"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-purple-600 transition-all duration-300"></span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-1 h-4 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></span>
                Connect
              </h4>
              <ul className="space-y-3">
                {footerLinks.social.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group text-sm text-gray-600 hover:text-purple-600 transition-colors duration-300 inline-flex items-center gap-2"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-purple-600 transition-all duration-300"></span>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-1 h-4 bg-gradient-to-b from-pink-500 to-orange-500 rounded-full"></span>
                Legal
              </h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group text-sm text-gray-600 hover:text-purple-600 transition-colors duration-300 inline-flex items-center gap-2"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-purple-600 transition-all duration-300"></span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span>© {currentYear}</span>
              <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Doctor_KIKI
              </span>
              <span>— All rights reserved.</span>
            </div>

            {/* Additional Info */}
            <div className="flex items-center gap-6 text-sm text-gray-600">
              <a
                href="#"
                className="hover:text-purple-600 transition-colors duration-300 flex items-center gap-1"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                Made with love
              </a>

              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-xs">All systems operational</span>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50 group"
          aria-label="Back to top"
        >
          <svg
            className="w-5 h-5 transform group-hover:-translate-y-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      </div>
    </footer>
  );
}
