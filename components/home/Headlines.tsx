"use client";
import React from 'react';

import { FocusCards } from "@/components/ui/focus-cards";

// News images
const news1 = "/assets/news/news1.png";
const news2 = "/assets/news/news2.png";
const news3 = "/assets/news/news3.png";
const news4 = "/assets/news/news4.png";

// News data array with titles for headlines
const newsCards = [
  { 
    title: "Startup Innovation Breakthrough", 
    src: news1 
  },
  { 
    title: "Tech Giants Invest in Our Portfolio", 
    src: news2 
  },
  { 
    title: "Record-Breaking Funding Round", 
    src: news3 
  },
  { 
    title: "Industry Recognition Awards", 
    src: news4 
  }
];

function Headlines() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-3xl font-normal text-black md:mb-10 md:text-3xl lg:text-5xl" style={{ fontFamily: "'Playfair Display', serif" }}>
          Our startups making headlines
        </h2>
        {/* Focus Cards Implementation */}
        <FocusCards cards={newsCards} />
      </div>
    </section>
  );
}

export default Headlines;