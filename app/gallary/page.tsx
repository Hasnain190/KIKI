"use client";
import { useState } from "react";
import Image from "next/image";
import PageTransition from "src/components/PageTransition";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const images = [
    { src: "/images/g1.jpg", title: "Moment 1", category: "Life" },
    { src: "/images/g2.jpg", title: "Moment 2", category: "Care" },
    { src: "/images/g3.jpg", title: "Moment 3", category: "Joy" },
    { src: "/images/g4.jpg", title: "Moment 4", category: "Life" },
    { src: "/images/g5.jpg", title: "Moment 5", category: "Care" },
    { src: "/images/g6.jpg", title: "Moment 6", category: "Joy" },
  ];

  return (
    <PageTransition>
      <section id="gallery" className="relative py-16 md:py-24">
        {/* Background decoration */}
        <div className="absolute top-20 right-0 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 left-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16 space-y-4">
            <div className="inline-block">
              <span className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold">
                Gallery
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Life's Beautiful Moments
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Capturing the essence of care, compassion, and everyday magic
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {images.map((image, index) => (
              <div
                key={image.src}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setSelectedImage(image)}
              >
                {/* Image Container */}
                <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                  <Image
                    src={image.src}
                    alt={image.title}
                    width={500}
                    height={400}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Hover Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <span className="inline-block w-fit bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full mb-2">
                      {image.category}
                    </span>
                    <h3 className="text-white text-xl font-bold mb-2">
                      {image.title}
                    </h3>
                    <div className="flex items-center gap-2 text-white/90 text-sm">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                      <span>Click to view</span>
                    </div>
                  </div>

                  {/* Corner Accent */}
                  <div
                    className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full transition-all duration-500 ${
                      hoveredIndex === index
                        ? "scale-100 opacity-80"
                        : "scale-0 opacity-0"
                    }`}
                  ></div>
                </div>

                {/* Bottom Border Animation */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-fadeIn"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div
              className="relative max-w-5xl w-full animate-scaleIn"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.title}
                width={1200}
                height={800}
                className="w-full h-auto max-h-[85vh] object-contain rounded-2xl shadow-2xl"
              />
              <div className="mt-6 text-center">
                <span className="inline-block bg-white/10 backdrop-blur-sm text-white text-sm font-semibold px-4 py-2 rounded-full mb-2">
                  {selectedImage.category}
                </span>
                <h3 className="text-white text-2xl font-bold">
                  {selectedImage.title}
                </h3>
              </div>
            </div>
          </div>
        )}

        <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
          @keyframes scaleIn {
            from {
              opacity: 0;
              transform: scale(0.9);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
          .animate-fadeIn {
            animation: fadeIn 0.3s ease-out;
          }
          .animate-scaleIn {
            animation: scaleIn 0.3s ease-out;
          }
        `}</style>
      </section>
    </PageTransition>
  );
}
