"use client";
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

const news1 = "/assets/news/news1.png";
const news2 = "/assets/news/news2.png";
const news3 = "/assets/news/news3.png";
const news4 = "/assets/news/news4.png";

// News data array with titles, image paths, and descriptions
const newsCards = [
  { 
    title: "Startup Innovation Breakthrough", 
    src: news1,
    description: "Pioneering technology disrupts the market and sets new industry standards."
  },
  { 
    title: "Tech Giants Invest in Our Portfolio", 
    src: news2,
    description: "Strategic backing from major players accelerates company momentum."
  },
  { 
    title: "Record-Breaking Funding Round", 
    src: news3,
    description: "Historic funding milestone boosts growth and future development."
  },
  { 
    title: "Industry Recognition Awards", 
    src: news4,
    description: "Celebrated for excellence and innovation in key industry sectors."
  }
];

const FocusCard = ({ card, index, isHovered, onHover, onLeave }:any) => {
  // Precompute rotation values to ensure consistent values between server and client
  const getRotation = (idx: number, isHov: boolean) => {
    if (isHov) return 0;
    // Use a fixed value based on index to avoid floating point inconsistencies
    const rotations = [0, 1.5, -1.5, 2, -2, 1, -1];
    
    return rotations[idx % rotations.length];
  };
  
  return (
    <div
      className="group relative mx-2 h-80 w-64 shrink-0 cursor-pointer md:mx-4 md:h-96 md:w-80"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      style={{
        transform: `perspective(1000px) rotateY(${getRotation(index, isHovered)}deg)`,
        transition: 'all 0.6s cubic-bezier(0.23, 1, 0.320, 1)',
      }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden rounded-xl md:rounded-2xl">
        <Image
          width={320}
          height={400}
          src={card.src}
          alt={card.title}
          className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          priority={index < 4}
        />
        {/* Improved Gradient Overlay - Reduced opacity for mobile */}
        <div 
          className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent transition-opacity duration-500 md:from-black/80 md:via-black/20"
          style={{
            opacity: isHovered ? 0.95 : 0.7
          }}
        />
      </div>
      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 p-4 text-white md:p-6">
        <h3 
          className="mb-1 text-lg font-bold leading-tight transition-all duration-500 ease-out md:mb-2 md:text-xl"
          style={{
            transform: `translateY(${isHovered ? '0px' : '8px'})`,
            opacity: isHovered ? 1 : 0.95,
            fontFamily: "'Playfair Display', serif"
          }}
        >
          {card.title}
        </h3>
        <p 
          className="text-xs text-gray-200 transition-all duration-500 ease-out md:text-sm"
          style={{
            transform: `translateY(${isHovered ? '0px' : '15px'})`,
            opacity: isHovered ? 1 : 0,
            maxHeight: isHovered ? '80px' : '0px',
            overflow: 'hidden'
          }}
        >
          {card.description}
        </p>
      </div>
      {/* Subtle Hover Glow Effect - Reduced for mobile */}
      <div 
        className="pointer-events-none absolute inset-0 rounded-xl transition-all duration-500 md:rounded-2xl"
        style={{
          boxShadow: isHovered 
            ? '0 10px 25px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.05)' 
            : '0 4px 15px rgba(0, 0, 0, 0.1)',
          transform: `translateY(${isHovered ? '-2px' : '0px'})`
        }}
      />
    </div>
  );
};

function Headlines() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const animationRef = useRef<number | null>(null);
  const translateXRef = useRef(0);

  // Duplicate cards for seamless infinite scroll
  const duplicatedCards = [...newsCards, ...newsCards, ...newsCards];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Responsive card width calculation
    const isMobile = window.innerWidth < 768;
    const cardWidth = isMobile ? 272 : 352; // Mobile: w-64 + mx-2*2, Desktop: w-80 + mx-4*2
    const totalWidth = cardWidth * newsCards.length;
    
    const animate = () => {
      if (!isPaused && container) {
        translateXRef.current -= isMobile ? 0.6 : 0.8; // Slower on mobile
        
        // Reset position for seamless loop
        if (Math.abs(translateXRef.current) >= totalWidth) {
          translateXRef.current = 0;
        }
        
        // Apply smooth transform with GPU acceleration
        container.style.transform = `translate3d(${translateXRef.current}px, 0, 0)`;
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused]);

  const handleCardHover = (index:any) => {
    setHoveredIndex(index);
    setIsPaused(true);
  };

  const handleCardLeave = () => {
    setHoveredIndex(null);
    setIsPaused(false);
  };

  return (
    <section className="overflow-hidden bg-white py-12 md:bg-gradient-to-br md:from-slate-50 md:to-white md:py-20">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-8 text-center md:mb-16">
          <h2 
            className="mb-2 text-3xl font-normal tracking-tight text-gray-900 md:mb-4 md:text-5xl lg:text-6xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our startups making
          </h2>
          <h2 
            className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-3xl font-normal tracking-tight text-transparent md:text-5xl lg:text-6xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            headlines
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 md:mt-6 md:w-24"></div>
        </div>
        {/* Infinite Scroll Container */}
        <div className="relative">
          {/* Mobile-optimized Gradient Overlays */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-8 bg-gradient-to-r from-white to-transparent md:w-32 md:from-slate-50"></div>
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-8 bg-gradient-to-l from-white to-transparent md:w-32 md:from-slate-50"></div>
          {/* Scrolling Cards Container */}
          <div className="overflow-hidden">
            <div
              ref={containerRef}
              className="flex items-center"
              style={{
                width: 'fit-content',
                willChange: 'transform',
                backfaceVisibility: 'hidden',
              }}
            >
              {duplicatedCards.map((card, index) => (
                <FocusCard
                  key={`${card.title}-${index}`}
                  card={card}
                  index={index}
                  isHovered={hoveredIndex === index}
                  onHover={() => handleCardHover(index)}
                  onLeave={handleCardLeave}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap');
        
        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        /* Performance optimizations */
        .container {
          backface-visibility: hidden;
          transform: translateZ(0);
        }
        
        /* Mobile-specific fixes */
        @media (max-width: 767px) {
          /* Remove any potential webkit appearance issues */
          * {
            -webkit-appearance: none;
            -webkit-tap-highlight-color: transparent;
          }
          
          /* Ensure no overflow glitches */
          .overflow-hidden {
            -webkit-overflow-scrolling: touch;
            overflow: hidden !important;
          }
          
          /* Prevent any backdrop blur issues */
          .group:hover .blur-sm {
            backdrop-filter: none;
          }
        }
        
        /* Reduce motion for users who prefer it */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
}

export default Headlines;