"use client";
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'

const rocket = '/assets/rocket-bg-removed.png'

function Apply_Process() {
  const rocketRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const rocketElement = rocketRef.current;
    const containerElement = containerRef.current;
    if (!rocketElement || !containerElement) return;
    
    // Reset initial position
    rocketElement.style.transform = 'translateX(-100vw) translateY(50vh) rotate(-25deg)';
    rocketElement.style.opacity = '0';
    
    // Create intersection observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Trigger entrance animation
          rocketElement.style.transition = 'transform 1.8s cubic-bezier(0.25, 0.1, 0.25, 1), opacity 0.6s ease-in';
          rocketElement.style.transform = 'translateX(0) translateY(0) rotate(0)';
          rocketElement.style.opacity = '1';
          
          // Add hover animation after entrance is complete
          setTimeout(() => {
            rocketElement.classList.add('hover-animation');
          }, 2000);
          
          // Disconnect observer after animation is triggered
          observer.disconnect();
        }
      });
    }, {
      threshold: 0.2 // Trigger when 20% of the element is visible
    });
    
    // Start observing the container
    observer.observe(containerElement);
    
    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, []);
  
  return (
    <div className="relative overflow-hidden bg-white px-4 py-16 dark:bg-gray-900">
      <style jsx global>{`
        @keyframes glowPulse {
          0% { box-shadow: 0 0 5px 2px rgba(16, 185, 129, 0.3); }
          50% { box-shadow: 0 0 15px 5px rgba(16, 185, 129, 0.6); }
          100% { box-shadow: 0 0 5px 2px rgba(16, 185, 129, 0.3); }
        }
        
        @keyframes floatAnimation {
          0% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0); }
        }
        
        .step-card {
          transition: all 0.3s ease;
          animation: glowPulse 3s infinite;
        }
        
        .step-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 0 20px 8px rgba(16, 185, 129, 0.7);
        }
        
        .hover-animation {
          animation: floatAnimation 4s ease-in-out infinite;
        }
      `}</style>
      {/* Content */}
      <div className="relative z-10">
        <div className="flex justify-center">
          <h2 className="text-center text-4xl font-semibold text-black sm:text-6xl md:text-8xl dark:text-white">
            How to apply
          </h2>
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8">
          <div className="step-card flex w-full max-w-xs flex-col items-center justify-center rounded-lg border-4 border-emerald-500 bg-white p-6 sm:w-80 dark:bg-gray-800">
            <strong className="text-2xl text-black sm:text-3xl md:text-4xl dark:text-white">Step 1</strong>
            <p className="mt-2 text-center text-lg text-black sm:text-xl md:text-2xl dark:text-white">Fill online application</p>
          </div>
          <div className="step-card flex w-full max-w-xs flex-col items-center justify-center rounded-lg border-4 border-emerald-500 bg-white p-6 sm:w-80 dark:bg-gray-800">
            <strong className="text-2xl text-black sm:text-3xl md:text-4xl dark:text-white">Step 2</strong>
            <p className="mt-2 text-center text-lg text-black sm:text-xl md:text-2xl dark:text-white">Interview rounds</p>
          </div>
          <div className="step-card flex w-full max-w-xs flex-col items-center justify-center rounded-lg border-4 border-emerald-500 bg-white p-6 sm:w-80 dark:bg-gray-800">
            <strong className="text-2xl text-black sm:text-3xl md:text-4xl dark:text-white">Step 3</strong>
            <p className="mt-2 text-center text-lg text-black sm:text-xl md:text-2xl dark:text-white">Selection</p>
          </div>
        </div>
        <div ref={containerRef} className="relative mt-20 flex justify-center">
          {/* Subtle gradient circle behind rocket */}
          <div className="absolute left-1/2 top-1/2 h-64 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-b from-emerald-50 to-transparent opacity-60 blur-lg dark:from-emerald-900/10 dark:to-transparent"></div>
          {/* Rocket container with animation */}
          <div 
            ref={rocketRef} 
            className="relative z-10"
            style={{ 
              willChange: 'transform',
              transformOrigin: 'center center'
            }}
          >
            {/* Rocket image */}
            <Image
              width={800}
              height={800}
              src={rocket}
              alt="Rocket"
              className="w-48 drop-shadow-lg sm:w-72 md:w-[600px] lg:w-[800px]"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Apply_Process;