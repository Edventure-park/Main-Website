"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const AboutUS = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Sample images - you can replace these with actual images
  const teamImages = [
    "/assets/BoD/BoD1.png",
    "/assets/BoD/BoD2.png",
    "/assets/BoD/BoD3.png",
    "/assets/BoD/BoD4.png",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=200&fit=crop"
  ];

  return (
    <div className="min-h-screen w-full overflow-hidden bg-gray-50">
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className={`mb-20 text-left transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
            About Us
          </h1>
          <h2 className="mb-8 text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
            Incubating India - for the World!
          </h2>
          <p className="max-w-4xl text-lg leading-relaxed text-gray-600 md:text-xl">
            EdVenture Park is a student-focused idea stage startup incubator which aims to empower student-led startups through an intensive 4-month pre incubation program.
          </p>
        </div>
        {/* Logo-inspired Oval Shapes Section - Large and Responsive */}
        <div className="relative mb-32 flex flex-wrap items-end justify-center gap-4 md:gap-6 lg:gap-8 xl:gap-10">
          {/* First Green Oval - Semicircle at top */}
          <div className={`duration-1200 relative transition-all delay-300 ${
            isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
          }`}>
            <div 
              className="relative overflow-hidden bg-gradient-to-br from-emerald-400 to-emerald-500 shadow-xl"
              style={{
                width: '120px',
                height: '120px',
                borderRadius: '60px',
              }}
            >
              {/* Full circle image */}
              <Image
                width={400}
                height={400}
                src={teamImages[0]} 
                alt="Team member" 
                className="size-full object-cover"
                style={{
                  borderRadius: '60px',
                }}
              />
            </div>
          </div>
          {/* Yellow/Brown Oval - Full oval image */}
          <div className={`duration-1200 relative transition-all delay-500 ${
            isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
          }`}>
            <div 
              className="relative overflow-hidden bg-gradient-to-br from-amber-600 to-amber-700 shadow-xl"
              style={{
                width: '140px',
                height: '240px',
                borderRadius: '70px',
              }}
            >
              {/* Full oval image */}
              <Image 
                width={400}
                height={400}
                src={teamImages[1]} 
                alt="Team member" 
                className="size-full object-cover"
                style={{
                  borderRadius: '70px',
                }}
              />
            </div>
          </div>
          {/* Large Green Oval - Small circle at top, large image at bottom */}
          <div className={`duration-1200 relative transition-all delay-700 ${
            isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
          }`}>
            <div 
              className="relative overflow-hidden bg-gradient-to-br from-emerald-400 to-emerald-500 shadow-xl"
              style={{
                width: '160px',
                height: '280px',
                borderRadius: '80px 80px 0 0',
              }}
            >
              {/* Top circle image - Positioned to match oval curvature */}
              <div 
                className="border-3 absolute left-1/2 -translate-x-1/2 overflow-hidden rounded-full border-white shadow-lg"
                style={{
                  width: '180px',
                  height: '180px',
                  top: '-25px',
                }}
              >
                <Image
                  width={400}
                  height={400} 
                  src={teamImages[2]} 
                  alt="Team member" 
                  className="size-full object-cover"
                />
              </div>
              {/* Bottom semicircle image - Flat surface aligned with frame bottom */}
              <div 
                className="border-3 absolute inset-x-0 bottom-0 overflow-hidden border-white shadow-lg"
                style={{
                  height: '120px',
                  borderRadius: '0 0 80px 80px',
                  bottom: '0px',
                }}
              >
                <div 
                  className="absolute inset-0 overflow-hidden"
                  style={{
                    borderRadius: '0 0 80px 80px',
                  }}
                >
                  <Image
                    width={400}
                    height={400} 
                    src={teamImages[3]} 
                    alt="Team member" 
                    className="size-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Blue Oval - Multiple circles positioned as in image */}
          <div className={`duration-1200 delay-900 relative transition-all ${
            isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
          }`}>
            <div 
              className="relative overflow-hidden bg-gradient-to-br from-blue-400 to-blue-500 shadow-xl"
              style={{
                width: '180px',
                height: '320px',
                borderRadius: '90px',
              }}
            >
              {/* Top circle image - Touching top border */}
              <div 
                className="border-3 absolute left-1/2 top-0 size-36 -translate-x-1/2 overflow-hidden rounded-full border-white shadow-lg"
                style={{
                  width: '160px',
                  height: '160px',
                }}
              >
                <Image
                  width={400}
                  height={400} 
                  src={teamImages[4]} 
                  alt="Team member" 
                  className="size-full object-cover"
                />
              </div>
              {/* Bottom circle image - Touching bottom border */}
              <div 
                className="border-3 absolute bottom-0 left-1/2 -translate-x-1/2 overflow-hidden rounded-full border-white shadow-lg"
                style={{
                  width: '160px',
                  height: '160px',
                }}
              >
                <Image
                  width={400} 
                  height={400}
                  src={teamImages[5]} 
                  alt="Team member" 
                  className="size-full object-cover"
                />
              </div>
            </div>
          </div>

        </div>
        {/* Responsive Media Queries for Mobile */}
        <style jsx>{`
          @media (max-width: 768px) {
            .relative.mb-32 {
              gap: 1rem !important;
              flex-wrap: nowrap !important;
              justify-content: center !important;
            }
            .relative.mb-32 > div:nth-child(1) > div {
              width: 60px !important;
              height: 60px !important;
              border-radius: 30px !important;
            }
            .relative.mb-32 > div:nth-child(1) > div > img {
              border-radius: 30px !important;
            }
            .relative.mb-32 > div:nth-child(2) > div {
              width: 80px !important;
              height: 140px !important;
              border-radius: 40px !important;
            }
            .relative.mb-32 > div:nth-child(2) > div > img {
              border-radius: 40px !important;
            }
            .relative.mb-32 > div:nth-child(3) > div {
              width: 100px !important;
              height: 180px !important;
              border-radius: 50px 50px 0 0 !important;
            }
            .relative.mb-32 > div:nth-child(3) > div > div:first-child {
              width: 120px !important;
              height: 120px !important;
              top: -15px !important;
            }
            .relative.mb-32 > div:nth-child(3) > div > div:last-child {
              height: 60px !important;
              border-radius: 0 0 50px 50px !important;
            }
            .relative.mb-32 > div:nth-child(3) > div > div:last-child > div {
              border-radius: 0 0 50px 50px !important;
            }
            .relative.mb-32 > div:nth-child(4) > div {
              width: 120px !important;
              height: 220px !important;
              border-radius: 60px !important;
            }
            .relative.mb-32 > div:nth-child(4) > div > div:first-child {
              width: 140px !important;
              height: 140px !important;
              top: -25px !important;
            }
            .relative.mb-32 > div:nth-child(4) > div > div:last-child {
              width: 140px !important;
              height: 140px !important;
              bottom: -25px !important;
            }
          }
          @media (max-width: 480px) {
            .relative.mb-32 {
              gap: 0.5rem !important;
            }
            .relative.mb-32 > div:nth-child(1) > div {
              width: 50px !important;
              height: 50px !important;
              border-radius: 25px !important;
            }
            .relative.mb-32 > div:nth-child(1) > div > img {
              border-radius: 25px !important;
            }
            .relative.mb-32 > div:nth-child(2) > div {
              width: 60px !important;
              height: 100px !important;
              border-radius: 30px !important;
            }
            .relative.mb-32 > div:nth-child(2) > div > img {
              border-radius: 30px !important;
            }
            .relative.mb-32 > div:nth-child(3) > div {
              width: 80px !important;
              height: 140px !important;
              border-radius: 40px 40px 0 0 !important;
            }
            .relative.mb-32 > div:nth-child(3) > div > div:first-child {
              width: 100px !important;
              height: 100px !important;
              top: -10px !important;
            }
            .relative.mb-32 > div:nth-child(3) > div > div:last-child {
              height: 50px !important;
              border-radius: 0 0 40px 40px !important;
            }
            .relative.mb-32 > div:nth-child(3) > div > div:last-child > div {
              border-radius: 0 0 40px 40px !important;
            }
            .relative.mb-32 > div:nth-child(4) > div {
              width: 100px !important;
              height: 180px !important;
              border-radius: 50px !important;
            }
            .relative.mb-32 > div:nth-child(4) > div > div:first-child {
              width: 120px !important;
              height: 120px !important;
              top: -20px !important;
            }
            .relative.mb-32 > div:nth-child(4) > div > div:last-child {
              width: 120px !important;
              height: 120px !important;
              bottom: -20px !important;
            }
          }
        `}</style>
        {/* Description Section */}
        <div className={`delay-1100 mx-auto max-w-4xl text-center transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg md:p-10">
            <p className="text-lg leading-relaxed text-gray-700 md:text-xl">
              Welcome to <span className="font-semibold text-blue-600">EdVenture Park</span>, where student-driven innovation knows no limits and where we incubate India's brightest ideas for the world.
            </p>
            <br />
            <p className="text-lg leading-relaxed text-gray-700 md:text-xl">
              Within our walls, students find the freedom to experiment, the courage to learn from failures, and the support they need to thrive. EdVenture Park isn't just an incubator; it's a <span className="font-semibold text-purple-600">launchpad</span> for the next generation of entrepreneurs.
            </p>
          </div>
        </div>
        {/* Subtle Floating Elements */}
        <div className="absolute left-10 top-20 size-3 animate-pulse rounded-full bg-blue-300 opacity-40"></div>
        <div className="absolute right-20 top-32 size-2 animate-bounce rounded-full bg-yellow-400 opacity-50"></div>
        <div className="absolute bottom-32 left-16 size-4 animate-pulse rounded-full bg-emerald-300 opacity-40"></div>
        <div className="absolute bottom-40 right-12 size-2 animate-bounce rounded-full bg-purple-300 opacity-50"></div>
      </div>
    </div>
  );
};

export default AboutUS;