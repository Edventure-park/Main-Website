"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import localFont from "next/font/local";

const BlackMangoRegular = localFont({ src: '../../public/fonts/BlackMango/BlackMango-Regular.ttf' })

const AboutUS = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-purple-100">
      <div className="animate-gradient-x pointer-events-none absolute inset-0 z-0 bg-gradient-to-r from-emerald-100 via-blue-100 to-purple-200 opacity-60 blur-2xl" />
      <div className="relative z-10 mx-auto max-w-6xl px-2 py-10 sm:px-4 sm:py-16 lg:px-8">
        {/* Header Section */}
        <div className={`mb-10 text-left transition-all duration-1000 sm:mb-20 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h1 className={`xs:text-4xl mb-2 bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-3xl font-black text-transparent drop-shadow-xl sm:mb-4 sm:text-5xl md:text-6xl lg:text-7xl ${BlackMangoRegular.className}`}>
            About Us
          </h1>
          <h2 className="xs:text-2xl mb-4 flex items-center gap-2 text-xl font-bold leading-tight text-gray-900 sm:mb-8 sm:text-3xl md:text-4xl lg:text-5xl">
            Incubating India - for the World!
          </h2>
          <p className="xs:text-lg max-w-full text-base leading-relaxed text-gray-600 sm:max-w-4xl sm:text-lg md:text-xl">
            EdVenture Park is a student-focused idea stage startup incubator which aims to empower student-led startups through an intensive 4-month pre incubation program.
          </p>
        </div>
        {/* Team Group Image */}
        <div className={`mb-16 transition-all delay-300 duration-1000 sm:mb-32 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="group relative mx-auto w-full max-w-md overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-emerald-500/20 sm:max-w-2xl sm:rounded-3xl md:max-w-3xl lg:max-w-6xl">
            {/* Enhanced gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/30 via-blue-400/20 to-purple-400/30 backdrop-blur-sm"></div>
            {/* Floating border effect */}
            <div className="absolute inset-0 rounded-2xl border-2 border-white/20 bg-gradient-to-r from-emerald-500/20 via-blue-500/20 to-purple-500/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100 sm:rounded-3xl"></div>
            {/* Main image with enhanced styling */}
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl">
              <Image
                src="/assets/WholeGroup.jpeg"
                alt="EdVenture Park Team"
                width={1200}
                height={800}
                className="xs:h-64 h-48 w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-80 md:h-[400px] lg:h-[500px]"
                priority
              />
              {/* Enhanced overlay gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-purple-500/10"></div>
            </div>
            {/* Floating elements for extra flair */}
            <div className="absolute -left-2 -top-2 size-3 animate-pulse rounded-full bg-emerald-400 opacity-60 sm:size-4"></div>
            <div className="absolute -bottom-2 -right-2 size-2 animate-bounce rounded-full bg-blue-400 opacity-60 sm:size-3"></div>
            <div className="absolute -left-3 top-1/2 size-1.5 animate-pulse rounded-full bg-purple-400 opacity-50 sm:size-2"></div>
            <div className="absolute -right-3 top-1/2 size-1.5 animate-bounce rounded-full bg-emerald-400 opacity-50 sm:size-2"></div>
            {/* Subtle glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-400/20 via-blue-400/20 to-purple-400/20 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100 sm:rounded-3xl"></div>
          </div>
        </div>
        {/* Description Section */}
        <div className={`delay-1100 mx-auto w-full max-w-xl text-center transition-all duration-1000 sm:max-w-4xl ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="relative rounded-xl border border-white/30 bg-white/70 p-4 shadow-2xl backdrop-blur-lg sm:rounded-2xl sm:p-8 md:p-10">
            <div className="absolute -left-2 -top-2 size-2 animate-pulse rounded-full bg-emerald-400 opacity-40 sm:size-4"></div>
            <div className="absolute -bottom-2 -right-2 size-2 animate-bounce rounded-full bg-blue-400 opacity-40 sm:size-3"></div>
            <div className="absolute -left-2 top-1/2 size-1 animate-pulse rounded-full bg-purple-400 opacity-30 sm:size-2"></div>
            <div className="absolute -right-2 top-1/2 size-1 animate-bounce rounded-full bg-emerald-400 opacity-30 sm:size-2"></div>
            <p className="text-base leading-relaxed text-gray-700 sm:text-lg md:text-xl">
              Welcome to <span className="font-semibold text-blue-600">EdVenture Park</span>, where student-driven innovation knows no limits and where we incubate India's brightest ideas for the world.
            </p>
            <br className="hidden sm:block" />
            <p className="text-base leading-relaxed text-gray-700 sm:text-lg md:text-xl">
              Within our walls, students find the freedom to experiment, the courage to learn from failures, and the support they need to thrive. EdVenture Park isn't just an incubator; it's a <span className="font-semibold text-purple-600">launchpad</span> for the next generation of entrepreneurs.
            </p>
          </div>
        </div>
        {/* Subtle Floating Elements */}
        <div className="pointer-events-none absolute left-4 top-10 z-20 size-2 animate-pulse rounded-full bg-blue-300 opacity-40 sm:left-10 sm:top-20 sm:size-3"></div>
        <div className="pointer-events-none absolute right-8 top-16 z-20 size-1.5 animate-bounce rounded-full bg-yellow-400 opacity-50 sm:right-20 sm:top-32 sm:size-2"></div>
        <div className="pointer-events-none absolute bottom-20 left-8 z-20 size-3 animate-pulse rounded-full bg-emerald-300 opacity-40 sm:bottom-32 sm:left-16 sm:size-4"></div>
        <div className="pointer-events-none absolute bottom-24 right-6 z-20 size-1.5 animate-bounce rounded-full bg-purple-300 opacity-50 sm:bottom-40 sm:right-12 sm:size-2"></div>
      </div>
    </div>
  );
};

export default AboutUS;