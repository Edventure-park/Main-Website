"use client";
import Image from 'next/image';
import React from 'react';

// News images
const news1 = "/assets/news/News1.png";
const news2 = "/assets/news/News2.png";
const news3 = "/assets/news/News3.png";
const news4 = "/assets/news/News4.png";

// News data array
const newsImages = [
  { id: 1, image: news1, alt: "News headline 1" },
  { id: 2, image: news2, alt: "News headline 2" },
  { id: 3, image: news3, alt: "News headline 3" },
  { id: 4, image: news4, alt: "News headline 4" }
];

function Headlines() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-3xl font-normal text-black md:mb-10 md:text-3xl lg:text-5xl" style={{ fontFamily: "'Playfair Display', serif" }}>
          Our startups making headlines
        </h2>
        {/* News grid - Responsive layout */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {newsImages.map((item) => (
            <div 
              key={item.id}
              className="overflow-hidden rounded-lg border border-green-500"
            >
              {/* Using a div with padding-bottom ensures the proper aspect ratio is maintained */}
              <div className="relative w-full">
                <Image 
                  src={item.image} 
                  alt={item.alt}
                  width={600}
                  height={600}
                  quality={100}
                  className="h-auto w-full object-contain"
                  // Disable default Next.js image optimization to prevent cropping
                  unoptimized={true}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Headlines;