"use client";

import Image from 'next/image';
import React, { useEffect, useRef, useCallback } from 'react';

// Constants
const ROCKET_IMAGE_PATH = '/assets/rocket-bg-removed.png';
const INTERSECTION_THRESHOLD = 0.2;
const ANIMATION_DELAY = 1800;

// Types
interface StepCardProps {
  stepNumber: number;
  title: string;
  delay?: number;
}

// Step data
const STEPS = [
  { id: 1, title: 'Fill online application' },
  { id: 2, title: 'Interview rounds' },
  { id: 3, title: 'Selection' }
] as const;

// StepCard Component
const StepCard: React.FC<StepCardProps> = ({ stepNumber, title, delay = 0 }) => (
  <div 
		className="step-card group"
		style={{ animationDelay: `${delay}ms` }}
	>
    <div className="relative flex size-full flex-col items-center justify-center gap-4 rounded-2xl border border-[#169D53]/30 bg-white/90 p-8 shadow-sm ring-1 ring-black/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#169D53] hover:shadow-lg hover:shadow-emerald-500/20 dark:border-emerald-500/40 dark:bg-gray-800/90">
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-white px-4 py-1 text-sm font-semibold text-[#169D53] shadow-md ring-1 ring-[#169D53]/20">
        Step {stepNumber}
      </div>
      <p className="max-w-64 text-center text-base font-semibold leading-snug text-gray-800 sm:text-lg dark:text-gray-100">
        {title}
      </p>
    </div>
  </div>
);

// Main Component
const ApplyProcess: React.FC = () => {
  const rocketRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && rocketRef.current) {
        const rocket = rocketRef.current;
        
        // Trigger entrance animation
        rocket.style.transition = 'transform 1.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.8s ease-out';
        rocket.style.transform = 'translateX(0) translateY(0) rotate(0deg)';
        rocket.style.opacity = '1';
        
        // Add floating animation after entrance
        setTimeout(() => {
          rocket.classList.add('rocket-float');
        }, ANIMATION_DELAY);
        
        // Cleanup observer
        observerRef.current?.disconnect();
      }
    });
  }, []);

  useEffect(() => {
    const rocketElement = rocketRef.current;
    const containerElement = containerRef.current;
    
    if (!rocketElement || !containerElement) return;
    
    // Initialize rocket position
    rocketElement.style.transform = 'translateX(-100vw) translateY(20vh) rotate(-15deg)';
    rocketElement.style.opacity = '0';
    
    // Create intersection observer
    observerRef.current = new IntersectionObserver(handleIntersection, {
      threshold: INTERSECTION_THRESHOLD,
      rootMargin: '0px 0px -10% 0px'
    });
    
    observerRef.current.observe(containerElement);
    
    // Cleanup function
    return () => {
      observerRef.current?.disconnect();
    };
  }, [handleIntersection]);

  return (
    <>
      {/* Scoped styles */}
      <style jsx>{`
        .step-card {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .rocket-float {
          animation: gentleFloat 6s ease-in-out infinite;
        }
        
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes gentleFloat {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          33% { 
            transform: translateY(-8px) rotate(1deg); 
          }
          66% { 
            transform: translateY(-4px) rotate(-1deg); 
          }
        }
        
        @media (prefers-reduced-motion: reduce) {
          .step-card,
          .rocket-float {
            animation: none !important;
          }
        }
      `}</style>
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-12 sm:py-16 lg:py-20 dark:from-gray-900 dark:to-gray-800">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.05),transparent_50%)]" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="bg-gradient-to-r from-[#169D53] via-emerald-600 to-teal-500 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl lg:text-5xl">
              How to Apply?
            </h2>
            <p className="mt-4 text-base text-gray-600 sm:text-lg dark:text-gray-300">
              Three simple steps to get started with us
            </p>
          </div>
          {/* Steps Grid with connector */}
          <div className="relative mt-12">
            <div className="pointer-events-none absolute inset-x-0 top-1/2 hidden -translate-y-1/2 lg:block">
              <div className="mx-8 h-1 rounded-full bg-emerald-200" />
            </div>
            <div className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {STEPS.map((step, index) => (
                <StepCard
                  key={step.id}
                  stepNumber={step.id}
                  title={step.title}
                  delay={index * 200}
                />
              ))}
            </div>
          </div>
          {/* Rocket Section */}
          <div ref={containerRef} className="relative mt-16 flex justify-center lg:mt-20">
            {/* Subtle background glow */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="size-32 rounded-full bg-[#169D53]/10 blur-2xl sm:size-48" />
            </div>
            {/* Rocket Container */}
            <div 
              ref={rocketRef}
              className="relative z-10 flex items-center justify-center"
              style={{ 
                willChange: 'transform',
                transformOrigin: 'center center'
              }}
              aria-hidden
            >
              <div className="relative">
                <Image
                  src={ROCKET_IMAGE_PATH}
                  alt="Rocket launching representing career growth"
                  width={400}
                  height={400}
                  className="h-32 w-auto drop-shadow-xl sm:h-40 md:h-48 lg:h-56"
                  priority
                  sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, (max-width: 1024px) 192px, 224px"
                />
                {/* Rocket trail effect */}
                <div className="absolute -bottom-2 left-1/2 h-8 w-1 -translate-x-1/2 bg-gradient-to-t from-orange-400 to-transparent opacity-60 blur-sm sm:h-12" />
                <div className="absolute -bottom-1 left-1/2 h-6 w-0.5 -translate-x-1/2 bg-gradient-to-t from-yellow-400 to-transparent opacity-80 sm:h-8" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ApplyProcess;