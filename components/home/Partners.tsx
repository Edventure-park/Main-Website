"use client";
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

const partners = [
  { id: 1, name: 'T-Hub', logo: '/assets/ourpartners/thub.png' },
  { id: 2, name: 'We-Hub', logo: '/assets/ourpartners/wehub.png' },
  { id: 3, name: 'TIE Hyderabad', logo: '/assets/ourpartners/Tiehyderabad.png' },
  { id: 4, name: 'IIIT Hyderabad', logo: '/assets/ourpartners/iiith.png' },
  { id: 5, name: 'TGIC', logo: '/assets/ourpartners/TGIC.png' },
  { id: 6, name: 'T-Works', logo: '/assets/ourpartners/tworks.png' },
  { id: 7, name: 'Growth Hub', logo: '/assets/ourpartners/growthhub.png' },
  { id: 8, name: 'AG Hub', logo: '/assets/ourpartners/aghub.png' },
  { id: 9, name: 'Bala Vikasa', logo: '/assets/ourpartners/balavikasa.png' },
  { id: 10, name: 'Co Karma', logo: '/assets/ourpartners/cokarma.png' },
  { id: 11, name: 'CoweTelanganaChapter', logo: '/assets/ourpartners/cowetelenganachapter.png' },
  { id: 12, name: 'Farmaan by Pista House', logo: '/assets/ourpartners/farmaanbypistahouse.png' },
  { id: 13, name: 'HYSEA', logo: '/assets/ourpartners/hysea.png' },
  { id: 14, name: 'IFAH', logo: '/assets/ourpartners/ifah.png' },
  { id: 15, name: 'Maeeshat', logo: '/assets/ourpartners/maeeshat.png' },
  { id: 16, name: 'Nandi Ventures', logo: '/assets/ourpartners/nandiventures.png' },
  { id: 17, name: 'Origin Tours and Travels', logo: '/assets/ourpartners/origintoursandtravelsbg.png' },
  { id: 18, name: 'Pista House', logo: '/assets/ourpartners/pistahouse.png' },
  { id: 19, name: 'Sahayata Trust', logo: '/assets/ourpartners/sahayatatrust.png' },
  { id: 20, name: 'Student Tribe', logo: '/assets/ourpartners/studenttribe.png' },
  { id: 21, name: 'Student Union', logo: '/assets/ourpartners/studentunionim.png' },
  { id: 22, name: 'The Siasat Daily', logo: '/assets/ourpartners/thesiasatdaily.png' },
  { id: 23, name: 'Code For India', logo: '/assets/ourpartners/codeforindia.png' },
  { id: 24, name: 'MEITY Startup Hub', logo: '/assets/ourpartners/meitystartup.png' },
  { id: 25, name: 'THS', logo: '/assets/ourpartners/thsLogo.png' },
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
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Our <strong className="bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">Partners</strong></h2>
          <p className="mt-4 text-gray-600">Proud to collaborate with these amazing organizations</p>
        </div>
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
                  width={160}
                  height={80}
                  src={partner.logo} 
                  alt={`${partner.name} logo`} 
                  className="h-16 w-auto object-contain sm:h-20 md:h-24"
                  style={{ 
                    opacity: 0.9,
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e: React.MouseEvent<HTMLImageElement>) => {
                    e.currentTarget.style.opacity = '1';
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }}
                  onMouseOut={(e: React.MouseEvent<HTMLImageElement>) => {
                    e.currentTarget.style.opacity = '0.9';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
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