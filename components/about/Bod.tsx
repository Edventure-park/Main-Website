"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import localFont from "next/font/local";

const BlackMangoRegular = localFont({ src: '../../public/fonts/BlackMango/BlackMango-Regular.ttf' })

const boardMembers = [
  {
    name: "Mohammed Lateef khan",
    image: "/assets/BoD/BoD1.png",
    role: "Chairman",
    color: "from-emerald-400 to-teal-500",
    note: `Mohammed Abdul Lateef Khan, passionate, humble, and foresighted, Mr. Khan is the visionary behind the quality education revolution in Hyderabad. He is a certified TLI (MindMap instructor), and is an international memory trainer who gives vision and direction to the organization. Under his able leadership, MS evolved into a group of traditional, innovative, integrated, and competitive institutions serving Nursery to Degree Colleges in numerous branches across India reaching far flung areas.`
  },
  {
    name: "Nuzhat Sufi", 
    image: "/assets/BoD/BoD2.png",
    role: "Vice Chairman",
    color: "from-blue-400 to-indigo-500",
    note: "Nuzhat Sofi is currently associated with 3 Companies and is a Director with Lateef's Education And Research Network Private Limited, EdVenture Incubation Foundation. She is an academician, and philanthropist, who works actively for women empowerment and education.",
  },
  {
    name: "Mirza Feroz Baig",
    image: "/assets/BoD/BoD3.png",
    role: "Director",
    color: "from-emerald-400 to-teal-500",
    note: "12+ years of experience in the development and non-profit organization industry with a proven track record of developing and advancing non-profit programs, corporate social responsibility, and international affairs. Experience in the area of project management, monitoring, evaluation, accountability and learning (MEAL), and communication. Collaborated with bureaucrats, investors, international stakeholders, and private sector clients, and always looking for ways to be a connector."
  },
  {
    name: "C A Muneer Ahmed",
    image: "/assets/BoD/BoD4.png",
    role: "Director",
    color: "from-pink-400 to-rose-500",
    note: "A successful Chartered Accountant with invaluable experience in financial reporting and accounting covering a variety of industries from start-up business to financial management and company closures. Hands-on experience in providing professional advice in strategic sectors such as financial reporting, taxation, auditing, corporate finance, and insolvency. Easygoing by nature and able to build team cohesion and work on all financial issues to resolve problems meticulously."
  },
  {
    name: "Meraj Faheem",
    image: "/assets/BoD/meeraj.png",
    role: "Founder",
    color: "from-emerald-400 to-teal-500",
    note: "Mr. Meraj Faheem is a natural, hardcore entrepreneur with about 10 years of experience in building startups from idea to exit, with 5 years of core experience in setting up incubators and accelerators from infrastructure, team, and program design for Government, corporates, educational institutions, and private entities. His main forte is a product, business, and go-to-market strategy. He also has a strong hold on operations, P&L, and people management (team, partners, vendors, and clients). Over the years, he has mastered the art of executing ideas in various verticals: Fintech, Edtech, and Foodtech. He strongly believes in building companies with strong and broader social motives."
  },
  {
    name: "Ilyas Khan",
    image: "/assets/BoD/ilyasMs.png",
    role: "Junior Director",
    color: "from-emerald-400 to-teal-500",
    note: "Mohammed Ilyas Khan is the Junior Director at MS Education Academy, one of the leading educational institutions in the region, known for its innovative and inclusive approach to learning. With a strong background in academic leadership and operations, he has been instrumental in driving initiatives that bridge traditional education with modern skill development. At EdVenture Park, he brings strategic insights, educational expertise, and a commitment to fostering the next generation of innovators and entrepreneurs."
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
                    className={`object-cover transition-transform duration-500 group-hover:scale-105 ${member.image.includes('ilyasMs.png') ? 'object-top' : 'object-center'}`}
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
      {/* Enhanced Professional Modal */}
      {isModalOpen && selectedMember && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-3 backdrop-blur-md sm:p-4 md:p-6"
          onClick={closeModal}
        >
          <div 
            className="relative max-h-[95vh] w-full max-w-[95vw] overflow-hidden rounded-3xl bg-white shadow-2xl sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Enhanced Header with Profile Integration */}
            <div className={`relative overflow-hidden bg-gradient-to-br ${selectedMember.color} px-6 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12`}>
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute -left-4 -top-4 size-32 animate-pulse rounded-full bg-white/30 blur-2xl"></div>
                <div className="absolute -bottom-8 -right-8 size-40 animate-pulse rounded-full bg-white/20 blur-3xl delay-1000"></div>
                <div className="absolute left-1/2 top-1/2 size-24 animate-pulse rounded-full bg-white/25 blur-xl delay-500"></div>
              </div>
              <button onClick={closeModal} 
                className="absolute right-4 top-4 z-10 flex size-10 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-all duration-300 hover:rotate-90 hover:scale-110 hover:bg-white/25 focus:outline-none focus:ring-2 focus:ring-white/50 sm:right-6 sm:top-6 sm:size-12" 
                aria-label="Close modal"
              >
                <svg className="size-5 sm:size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="relative z-10 flex flex-col items-center text-center sm:flex-row sm:text-left">
                <div className="mb-6 shrink-0 sm:mb-0 sm:mr-8">
                  <div className="relative size-24 overflow-hidden rounded-full border-4 border-white/30 shadow-2xl sm:size-28 md:size-32">
                    <Image
                      src={selectedMember.image}
                      alt={selectedMember.name}
                      fill
                      className={`object-cover ${selectedMember.image.includes('ilyasMs.png') ? 'object-top' : 'object-center'}`}
                    />
                    {/* Subtle overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                  </div>
                  {/* Floating badge */}
                  <div className="absolute -bottom-1 -right-1 rounded-full bg-white/90 p-2 shadow-lg sm:-bottom-2 sm:-right-2">
                    <svg className="size-4 text-emerald-600 sm:size-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="grow">
                  <div className="mb-3 inline-flex items-center rounded-full bg-white/20 px-3 py-1 backdrop-blur-sm sm:mb-4">
                    <svg className="mr-2 size-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium text-white/95">Board Member</span>
                  </div>
                  <h3 className="mb-2 text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl">
                    {selectedMember.name}
                  </h3>
                  <p className="text-lg font-medium text-white/90 sm:text-xl">
                    {selectedMember.role}
                  </p>
                </div>
              </div>
            </div>
            <div className="max-h-[60vh] overflow-y-auto px-6 py-8 sm:px-8 sm:py-10 md:px-10">
              <div className="mb-6">
                <div className="mb-4 flex items-center">
                  <div className="mr-3 flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 shadow-lg">
                    <svg className="size-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">Professional Background</h4>
                    <p className="text-sm text-gray-600">Insights from {selectedMember.name}</p>
                  </div>
                </div>
                <div className="rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 p-6 shadow-inner sm:p-8">
                  <div className="relative">
                    <svg className="absolute -left-2 -top-2 size-8 text-emerald-200" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                    </svg>
                    <p className="relative z-10 text-base leading-relaxed text-gray-700 sm:text-lg md:text-xl">
                      {selectedMember.note}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 border-t border-gray-200 pt-6 sm:flex-row sm:justify-between sm:pt-8">
                <div className="flex gap-3 sm:ml-auto">
                  <button
                    onClick={closeModal}
                    className="flex-1 rounded-xl border-2 border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition-all duration-200 hover:border-gray-400 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 sm:flex-none"
                  >
                    Close
                  </button>
                  <button
                    onClick={closeModal}
                    className="flex-1 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-8 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:from-emerald-700 hover:to-teal-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 sm:flex-none"
                  >
                    Got it!
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Bod;