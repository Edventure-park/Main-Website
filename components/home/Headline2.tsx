"use client";
import Image from 'next/image';
import React, { useState } from 'react';

// News images
const news1 = "/assets/news/News1.png";
const news2 = "/assets/news/News1.png";
const news3 = "/assets/news/News1.png";
const news4 = "/assets/news/News1.png";

// News data with titles and descriptions
const newsItems = [
  {
    id: 1,
    image: news1,
    title: "Startup X Secures Major Investment",
    description: "Our portfolio startup secures $10M in Series A funding to revolutionize the industry."
  },
  {
    id: 2,
    image: news2,
    title: "Innovation Award for Startup Y",
    description: "Breakthrough technology from our incubator wins prestigious innovation award."
  },
  {
    id: 3,
    image: news3,
    title: "Startup Z Expands Globally",
    description: "One of our startups is now expanding operations to international markets."
  },
  {
    id: 4,
    image: news4,
    title: "New Partnership Announced",
    description: "Strategic partnership formed between our startup and industry leader."
  }
];

function Headlines() {
  const [activeNewsItem, setActiveNewsItem] = useState<number | null>(null);

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-10 text-center text-3xl font-bold text-gray-900 md:text-4xl lg:mb-16">
          Our Startups are making it to <span className="text-blue-600">Headlines!</span>
        </h2>
        {/* News grid - Responsive layout */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {newsItems.map((item) => (
            <div 
              key={item.id}
              className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
              onMouseEnter={() => setActiveNewsItem(item.id)}
              onMouseLeave={() => setActiveNewsItem(null)}
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <Image 
                  src={item.image} 
                  alt={item.title}
                  width={500} 
                  height={375}
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              {/* News info overlay - appears on hover on desktop, always visible on mobile */}
              <div className={`sm:translate-y- absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white transition-all duration-300${activeNewsItem === item.id || window.innerWidth < 640 ? '0' : 'full'} sm:opacity-${activeNewsItem === item.id ? '100' : '0'} sm:group-hover:translate-y-0 sm:group-hover:opacity-100`}>
                <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-200">{item.description}</p>
                <a href="#" className="mt-3 inline-block text-sm font-medium text-blue-300 hover:text-blue-200">
                  Read more →
                </a>
              </div>
            </div>
          ))}
        </div>
        {/* View all news button */}
        <div className="mt-10 text-center">
          <a 
            href="#" 
            className="inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            View All News
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Headlines;