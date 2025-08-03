"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import localFont from "next/font/local";

const BlackMangoRegular = localFont({ src: '../../public/fonts/BlackMango/BlackMango-Regular.ttf' })

const boardMembers = [
  {
    name: "Meeraj Faheem",
    image: "/assets/BoD/meeraj.png",
    role: "Founder",
    color: "from-emerald-400 to-teal-500",
    note: `"4 years, 273 Startups and 550+ founders later, I can't help but notice the thousands of students who were part of our journey now making us proud both at national and international level. This reinforces the objective, purpose and vision with which we started with a tiny but mighty team. The sense of purpose is much more stronger now with shared responsibility. We are just getting started and I am fortunate for the opportunity and the team. This is once in a generation team working on a once in a lifetime mission. My sincere gratitude to the Campus Leads, X Team, Core Team, Investors, Partners, Stakeholders, Parents, Colleges and the Board of EdVenture Park for making this happen!" ~Meraj Faheem`
  },
  {
    name: "Mohammed Lateef khan",
    image: "/assets/BoD/BoD1.png",
    role: "Chairman",
    color: "from-emerald-400 to-teal-500",
    note: `EdVenture Park was initiated to create a community of like minded young and enterprising people, who would come together to solve problems for the society, give their ideas a shape, and add value. The results from the first cohort are not just encouraging, but also inspiring in many ways. With 50% of our population under 25, India needs many more EdVenture Parks and we are always happy and willing to contribute and collaborate with the Government and other partners to build this strong ecosystem.`
  },
  {
    name: "Illyas Shah Khan",
    image: "/assets/BoD/ilyas.png",
    role: "Incubation Head",
    color: "from-emerald-400 to-teal-500",
    note: "Experienced in guiding early-stage startups and fostering entrepreneurial ecosystems."
  },
  {
    name: "Nuzhat Sufi", 
    image: "/assets/BoD/BoD2.png",
    role: "Vice Chairman",
    color: "from-blue-400 to-indigo-500",
    note: "Strategic leader with deep insights into business development and organizational growth."
  },
  {
    name: "Feroz baig",
    image: "/assets/BoD/BoD3.png", 
    role: "Director",
    color: "from-purple-400 to-violet-500"
  },
  {
    name: "Muneer",
    image: "/assets/BoD/BoD4.png",
    role: "Director",
    color: "from-pink-400 to-rose-500",
    note: "Technology enthusiast and business strategist with focus on digital transformation."
  }
];

type BoardMember = typeof boardMembers[number];

function Bod() {
  const [selectedMember, setSelectedMember] = useState<BoardMember | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (member: BoardMember) => {
    setSelectedMember(member);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
    document.body.style.overflow = 'unset';
  };

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleEscape);
    
return () => document.removeEventListener('keydown', handleEscape);
  }, [isModalOpen]);

  // Clean up on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <section className="w-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 px-4 py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8 text-center sm:mb-12 md:mb-16">
          <h2 className={`mb-4 text-2xl tracking-tight sm:mb-6 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl ${BlackMangoRegular.className}`}>
            Board of Directors
          </h2>
          <p className="mx-auto max-w-4xl text-sm leading-relaxed text-gray-700 sm:text-base md:text-lg lg:text-xl">
            Our distinguished board members bring decades of experience and strategic vision 
            to guide EdVenture Park towards excellence and innovation.
          </p>
        </div>
        {/* BOD Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {boardMembers.map((member, index) => (
            <div key={index} className="group relative">
              {/* Gradient Background */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${member.color} opacity-10 blur-lg transition-all duration-500 group-hover:opacity-30`}></div>
              {/* Card */}
              <div 
                className={`relative overflow-hidden rounded-2xl border border-white/50 bg-white/80 p-4 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl sm:p-6 md:p-8 ${
                  member.note ? 'cursor-pointer hover:scale-[1.02]' : ''
                }`}
                onClick={() => member.note && openModal(member)}
              >
                {/* Image Container */}
                <div className="relative mb-4 aspect-square w-full overflow-hidden rounded-xl sm:mb-6">
                  <Image
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  {/* Enhanced Note Indicator */}
                  {member.note && (
                    <div className="absolute right-2 top-2 sm:right-3 sm:top-3">
                      <div className="group/tooltip relative">
                        <div className="flex size-7 items-center justify-center rounded-full bg-white/95 text-xs font-bold text-gray-700 shadow-lg backdrop-blur-sm transition-all duration-200 hover:scale-110 hover:bg-white sm:size-8">
                          <svg 
                            className="size-3 sm:size-4" 
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                          >
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                          </svg>
                        </div>
                        {/* Tooltip */}
                        <div className="absolute -top-10 right-0 z-10 hidden min-w-max rounded-lg bg-gray-900 px-3 py-2 text-xs text-white shadow-lg group-hover/tooltip:block">
                          Click for bio
                          <div className="absolute -bottom-1 right-4 size-2 rotate-45 bg-gray-900"></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                {/* Content */}
                <div className="text-center">
                  <h3 className="mb-1 text-lg font-bold text-gray-900 sm:mb-2 sm:text-xl md:text-2xl">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-gray-600 sm:text-base md:text-lg">
                    {member.role}
                  </p>
                  {/* Enhanced Note Preview */}
                  {member.note && (
                    <div className="mt-2 sm:mt-3">
                      <div className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600 transition-colors hover:bg-gray-200 sm:text-sm">
                        <svg className="size-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                        View Bio
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Fully Responsive Modal */}
      {isModalOpen && selectedMember && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-3 backdrop-blur-sm sm:p-4 md:p-6"
          onClick={closeModal}
        >
          <div 
            className="relative max-h-[95vh] w-full max-w-[95vw] overflow-y-auto rounded-2xl bg-white shadow-2xl sm:max-w-md sm:rounded-3xl md:max-w-lg lg:max-w-xl xl:max-w-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with Gradient Background */}
            <div className={`relative bg-gradient-to-br px-4 py-6 ${selectedMember.color} sm:px-6 sm:py-8 md:px-8 md:py-10`}>
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute right-3 top-3 flex size-8 items-center justify-center rounded-full bg-white/20 text-white transition-all duration-200 hover:scale-110 hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 sm:right-4 sm:top-4 sm:size-9"
                aria-label="Close modal"
              >
                <svg className="size-4 sm:size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              {/* Header Content */}
              <div className="pr-8 sm:pr-12">
                <div className="mb-2 inline-flex items-center rounded-full bg-white/20 px-2 py-1 backdrop-blur-sm sm:px-3">
                  <svg className="mr-1 size-3 text-white sm:mr-2 sm:size-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs font-medium text-white/90 sm:text-sm">Board Member</span>
                </div>
                <h3 className="mb-2 text-xl font-bold leading-tight text-white sm:text-2xl md:text-3xl lg:text-4xl">
                  {selectedMember.name}
                </h3>
                <p className="text-base font-medium text-white/90 sm:text-lg md:text-xl">
                  {selectedMember.role}
                </p>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -right-4 size-16 rounded-full bg-white/10 blur-xl sm:-bottom-6 sm:-right-6 sm:size-24"></div>
              <div className="absolute -left-2 -top-2 size-12 rounded-full bg-white/10 blur-lg sm:-left-4 sm:-top-4 sm:size-16"></div>
            </div>
            {/* Content Section */}
            <div className="px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10">
              {/* Bio Content */}
              <div className="mb-4 sm:mb-6">
                <div className="mb-3 flex items-center sm:mb-4">
                  <div className="mr-2 flex size-7 items-center justify-center rounded-lg bg-gray-100 sm:mr-3 sm:size-8">
                    <svg className="size-3 text-gray-600 sm:size-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h4 className="text-base font-semibold text-gray-900 sm:text-lg">
                    Note From {selectedMember.name}
                  </h4>
                </div>
                <div className="rounded-xl bg-gray-50 p-4 sm:rounded-2xl sm:p-6">
                  <p className="text-sm leading-relaxed text-gray-700 sm:text-base md:text-lg">
                    {selectedMember.note}
                  </p>
                </div>
              </div>
              {/* Mobile-friendly Action Button */}
              <div className="flex justify-center border-t border-gray-100 pt-4 sm:justify-end sm:pt-6">
                <button
                  onClick={closeModal}
                  className="w-full rounded-xl bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:scale-105 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 sm:w-auto sm:px-8 sm:text-base"
                >
                  Got it
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Bod;