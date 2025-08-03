"use client";
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

const partners = [
  { id: 1, name: 'Company 1', logo: '/assets/partners/CodeForIndia.png' },
  { id: 2, name: 'Company 2', logo: '/assets/partners/We-Hub.png' },
  { id: 3, name: 'Company 3', logo: '/assets/partners/T-Hub.png' },
  { id: 4, name: 'Company 4', logo: '/assets/partners/thsLogo.png' },
  { id: 5, name: 'Company 5', logo: '/assets/partners/Tgic.png' },

];

const Partners: React.FC = () => {
  const outerContainerRef = useRef<HTMLDivElement>(null);
  const innerContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const requestRef = useRef<number | null>(null);
  const speedRef = useRef(0.5); // Controls animation speed

  const animate = () => {
    const outer = outerContainerRef.current;
    const inner = innerContainerRef.current;
    
    if (!outer || !inner || isPaused) {
      requestRef.current = requestAnimationFrame(animate);
      
      return;
    }
    
    // Get the first element to check its width
    const firstElement = inner.children[0] as HTMLElement;
    if (!firstElement) {
      requestRef.current = requestAnimationFrame(animate);
      
      return;
    }
    
    // Update the position
    let currentTranslate = parseFloat(inner.getAttribute('data-translate') || '0');
    currentTranslate -= speedRef.current;
    
    // Reset when a logo width is fully scrolled
    if (Math.abs(currentTranslate) >= firstElement.offsetWidth + 48) { // width + margin
      currentTranslate += firstElement.offsetWidth + 48;
      
      // Move the first element to the end for continuous flow
      const firstChild = inner.children[0];
      inner.appendChild(firstChild.cloneNode(true));
      inner.removeChild(firstChild);
    }
    
    // Apply the translation
    inner.style.transform = `translateX(${currentTranslate}px)`;
    inner.setAttribute('data-translate', currentTranslate.toString());
    
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    // Initialize and start animation
    const inner = innerContainerRef.current;
    if (inner) {
      // Clone items initially for smooth infinite loop effect
      const items = Array.from(inner.children);
      items.forEach((item) => {
        inner.appendChild(item.cloneNode(true));
      });
      
      // Set initial data-translate attribute
      inner.setAttribute('data-translate', '0');
    }
    
    // Start animation
    requestRef.current = requestAnimationFrame(animate);
    
    // Cleanup
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  // Event handlers for pause/resume
  const handlePause = () => setIsPaused(true);
  const handleResume = () => setIsPaused(false);

  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-left text-3xl font-bold text-gray-900">Our <strong className="text-black">Partners</strong></h2>
        <div 
          ref={outerContainerRef}
          className="relative w-full overflow-hidden py-8"
          onMouseEnter={handlePause}
          onMouseLeave={handleResume}
          onTouchStart={handlePause}
          onTouchEnd={handleResume}
        >
          {/* The scrolling container with transform instead of scroll */}
          <div 
            ref={innerContainerRef}
            className="flex items-center"
            style={{ willChange: 'transform' }}
          >
            {partners.map((partner) => (
              <div 
                key={partner.id} 
                className="mx-6 shrink-0 transition-all duration-300 hover:scale-110"
                style={{ width: 'auto', height: 'auto' }}
              >
                <Image
                  width={150}
                  height={80}
                  src={partner.logo} 
                  alt={`${partner.name} logo`} 
                  className="h-16 w-auto object-contain sm:h-20 md:h-24"
                />
              </div>
            ))}
          </div>
          {/* Gradient overlays for aesthetic fade effect */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Partners;