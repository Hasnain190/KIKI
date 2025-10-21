import React from "react";
import Image from "next/image";

export default function About() {
  const highlights = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Passion",
      description: "Creating authentic content that resonates"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: "Community",
      description: "Building connections through shared moments"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Creativity",
      description: "Capturing life's beautiful moments"
    }
  ];

  return (
    <section className="relative py-16 md:py-24">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16 space-y-4">
          <div className="inline-block">
            <span className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
              My Story
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h1>
          
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            I'm a digital creator sharing little daily moments — 
            <span className="text-gray-800 font-medium"> food, walks, thoughts, and behind-the-scenes.</span>
          </p>
        </div>

        {/* Main Content Card */}
        <div className="max-w-6xl mx-auto">
          {/* Story Section */}
          <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10 mb-8 border border-gray-100">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                Every day is a collection of small, meaningful moments waiting to be captured and shared. 
                Through my lens, I bring you into my world — a world where the ordinary becomes extraordinary, 
                where a simple meal tells a story, and where every walk brings new discoveries.
              </p>
              <p className="text-gray-700 leading-relaxed">
                My journey as a content creator began with a simple desire to document life's beauty. 
                What started as personal memories has grown into a community of people who appreciate 
                the authentic, the honest, and the whimsical moments that make life special.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-3 gap-6 mt-8 pt-8 border-t border-gray-100">
              {highlights.map((item, index) => (
                <div 
                  key={index}
                  className="group text-center space-y-3 p-4 rounded-2xl hover:bg-gradient-to-br hover:from-purple-50 hover:to-pink-50 transition-all duration-300"
                >
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Images Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { src: "/images/about1.jpg", alt: "Daily moments and food", label: "Daily Life" },
              { src: "/images/about2.jpg", alt: "Walks and adventures", label: "Adventures" },
              { src: "/images/about3.jpg", alt: "Behind the scenes", label: "Behind Scenes" }
            ].map((image, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                {/* Image Container */}
                <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={500}
                    height={400}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Label */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-2 rounded-full">
                      {image.label}
                    </span>
                  </div>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full opacity-0 group-hover:opacity-80 transition-all duration-500 scale-0 group-hover:scale-100"></div>
                
                {/* Bottom Border */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-12 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-3xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Let's Connect
            </h3>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
              Join me on this journey and be part of a community that celebrates life's everyday magic.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#gallery"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <span>View My Work</span>
                <svg 
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-700 font-semibold rounded-full border-2 border-gray-200 hover:border-purple-300 hover:text-purple-600 hover:bg-purple-50 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}