/* eslint-disable tailwindcss/migration-from-tailwind-2 */
"use client";
import React, { useState, useEffect } from 'react';

function NumbersHeadline() {
  const [studentCount, setStudentCount] = useState(0);
  const [investmentCount, setInvestmentCount] = useState(0);
  const [animationComplete, setAnimationComplete] = useState(false);
  const targetStudentCount = 450;
  const targetInvestmentCount = 9;
  
  // Effect for the main animation sequence
  useEffect(() => {
    const duration = 2000; // Animation duration in ms
    const startTime = Date.now();
    let animationFrameId:any;
    
    // Professional easing function - smoother and less bouncy than elastic
    const easeOutQuart = (x:any) => {
      return 1 - Math.pow(1 - x, 4);
    };
    
    const animateFrame = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      let progress = Math.min(elapsed / duration, 1);
      
      // Apply easing function
      const easedProgress = easeOutQuart(progress);
      
      // Calculate current values with precision
      const currentStudentCount = Math.floor(easedProgress * targetStudentCount);
      const currentInvestmentCount = easedProgress * targetInvestmentCount;
      
      // Update state
      setStudentCount(currentStudentCount);
      setInvestmentCount(currentInvestmentCount);
      
      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animateFrame);
      } else {
        setAnimationComplete(true);
      }
    };
    
    // Start animation
    animationFrameId = requestAnimationFrame(animateFrame);
    
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);
  
  // Format the investment number with 1 decimal place
  const formattedInvestment = investmentCount.toFixed(1);
  
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-emerald-700 to-emerald-600">
      {/* Professional tech pattern background */}
      <div className="bg-circuit-pattern absolute inset-0 opacity-10"></div>
      {/* Subtle business-tech decorative elements */}
      <div className="absolute left-0 top-0 size-full">
        <div className="absolute -left-16 top-40 size-64 rounded-full bg-white opacity-5"></div>
        <div className="absolute -right-20 bottom-20 size-72 rounded-full bg-white opacity-5"></div>
      </div>
      <div className="container relative z-10 mx-auto px-4 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          {/* Student Counter */}
          <div className="w-full md:w-1/2">
            <div className="relative overflow-hidden">
              <div className="mb-1 flex items-end">
                {/* Counter display */}
                <div className="relative font-sans text-6xl font-bold leading-none tracking-tight text-white sm:text-7xl md:text-8xl">
                  <span className="inline-block">{studentCount}</span>
                  <span className="ml-1 inline-block transition-opacity duration-500" 
                    style={{ opacity: animationComplete ? 1 : 0 }}>+</span>
                </div>
              </div>
              {/* Line animation - always animate */}
              <div className="relative mb-4 h-1 w-16 overflow-hidden bg-white">
                <div className="animate-line-scan absolute size-full bg-emerald-300"></div>
              </div>
              <div>
                <p className="text-3xl font-bold leading-tight text-black sm:text-4xl">
                  Student Entrepreneurs
                </p>
                <p className="mt-2 text-lg text-emerald-100">Turning ideas into ventures</p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="inline-block rounded-md bg-white bg-opacity-10 px-3 py-1 text-sm font-medium text-white">75+ Colleges</span>
                <span className="inline-block rounded-md bg-white bg-opacity-10 px-3 py-1 text-sm font-medium text-white">12+ Cities</span>
              </div>
            </div>
          </div>
          {/* Investment Counter */}
          <div className="w-full md:w-1/2">
            <div className="relative overflow-hidden">
              <div className="mb-1 flex items-end">
                {/* Counter display */}
                <div className="relative font-sans text-6xl font-bold leading-none tracking-tight text-white sm:text-7xl md:text-8xl">
                  <span className="inline-block">{formattedInvestment}</span>
                  <span className="ml-1 inline-block">M</span>
                </div>
              </div>
              {/* Line animation - always animate */}
              <div className="relative mb-4 h-1 w-16 overflow-hidden bg-white">
                <div className="animate-line-scan absolute size-full bg-emerald-300"></div>
              </div>
              <div>
                <p className="text-3xl font-bold leading-tight text-black sm:text-4xl">
                  Investment Raised
                </p>
                <p className="mt-2 text-lg text-emerald-100">Funding the next generation</p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="inline-block rounded-md bg-white bg-opacity-10 px-3 py-1 text-sm font-medium text-white">20+ Startups</span>
                <span className="inline-block rounded-md bg-white bg-opacity-10 px-3 py-1 text-sm font-medium text-white">5+ Industries</span>
              </div>
            </div>
          </div>
        </div>
        {/* Data visualization element */}
        <div className="absolute inset-x-0 bottom-0 h-16">
          <div className="flex h-full justify-around">
            {Array.from({ length: 20 }).map((_, i) => {
              // Use deterministic values based on index to avoid hydration mismatch
              const heightPercent = 20 + ((i * 17) % 80); // Deterministic height between 20-100%
              const opacityValue = 0.1 + ((i * 13) % 20) / 100; // Deterministic opacity between 0.1-0.3
              
              return (
                <div
                  key={i}
                  className="h-full w-1 bg-emerald-400 opacity-20"
                  style={{
                    height: `${heightPercent}%`,
                    opacity: opacityValue
                  }}
                ></div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Add keyframes for the animations */}
      <style jsx>{`
        @keyframes line-scan {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .animate-line-scan {
          animation: line-scan 1.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        
        .bg-circuit-pattern {
          background-image: 
            radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.2) 1px, transparent 0),
            linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 50px 50px, 25px 25px, 25px 25px;
        }
      `}</style>
    </div>
  );
}

export default NumbersHeadline;