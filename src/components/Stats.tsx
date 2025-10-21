"use client";
import { useState, useEffect } from "react";

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ instagram: 0, facebook: 0, posts: 0 });

  const stats = [
    {
      label: "Instagram",
      value: "45k",
      numericValue: 5000,
      key: "instagram",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
      gradient: "from-purple-500 via-pink-500 to-orange-500",
      bgGradient: "from-purple-50 to-pink-50",
    },
    {
      label: "Facebook",
      value: "1.5M",
      numericValue: 150000,
      key: "facebook",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      gradient: "from-blue-500 to-blue-700",
      bgGradient: "from-blue-50 to-cyan-50",
    },
    {
      label: "Posts",
      value: "515",
      numericValue: 515,
      key: "posts",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
      gradient: "from-green-500 to-emerald-600",
      bgGradient: "from-green-50 to-emerald-50",
    },
  ];

  // Animate numbers on mount
  useEffect(() => {
    setIsVisible(true);

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounts({
        instagram: Math.floor(stats[0].numericValue * progress),
        facebook: Math.floor(stats[1].numericValue * progress),
        posts: Math.floor(stats[2].numericValue * progress),
      });

      if (currentStep >= steps) {
        clearInterval(interval);
        setCounts({
          instagram: stats[0].numericValue,
          facebook: stats[1].numericValue,
          posts: stats[2].numericValue,
        });
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num, key) => {
    if (key === "instagram") return `${(num / 1000).toFixed(1)}k`;
    if (key === "facebook") return `${(num / 1000).toFixed(1)}k`;
    if (key === "posts") return `${(num / 1000).toFixed(1)}k`;
    return num.toString();
  };

  return (
    <section className="relative py-12 md:py-16">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-48 h-48 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Stats Card */}
        <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Gradient Border Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-10"></div>

          <div className="relative p-6 md:p-10">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h4 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Community
                </h4>
                <p className="text-gray-600 text-sm md:text-base mt-1">
                  Growing together, every day
                </p>
              </div>

              {/* Live indicator */}
              <div className="flex items-center gap-2 bg-green-50 px-3 py-1.5 rounded-full">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </span>
                <span className="text-xs font-semibold text-green-700">
                  Live
                </span>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`group relative bg-gradient-to-br ${
                    stat.bgGradient
                  } p-6 rounded-2xl transition-all duration-500 hover:scale-105 hover:shadow-xl ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{
                    transitionDelay: `${index * 100}ms`,
                  }}
                >
                  {/* Icon */}
                  <div
                    className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${stat.gradient} text-white shadow-lg mb-4 transform group-hover:rotate-6 transition-transform duration-300`}
                  >
                    {stat.icon}
                  </div>

                  {/* Value */}
                  <div className="space-y-1">
                    <div
                      className={`text-3xl md:text-4xl font-extrabold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}
                    >
                      {isVisible
                        ? formatNumber(counts[stat.key], stat.key)
                        : "0"}
                    </div>
                    <div className="text-sm md:text-base font-medium text-gray-700">
                      {stat.label}
                    </div>
                  </div>

                  {/* Trend indicator */}
                  <div className="mt-3 flex items-center gap-1 text-green-600">
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
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    </svg>
                    <span className="text-xs font-semibold">
                      +12% this month
                    </span>
                  </div>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/50 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-left">
                  <p className="text-gray-900 font-semibold">
                    Join our growing community
                  </p>
                  <p className="text-sm text-gray-600">
                    Be part of something special
                  </p>
                </div>
                <button className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <span>Follow Now</span>
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
