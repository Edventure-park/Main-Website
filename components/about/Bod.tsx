import Image from "next/image";
import React from "react";
import localFont from "next/font/local";

const BlackMangoRegular = localFont({ src: '../../public/fonts/BlackMango/BlackMango-Regular.ttf' })

const boardMembers = [
  {
    name: "Mohammed Lateef khan",
    image: "/assets/BoD/BoD1.png",
    role: "Chairman",
    color: "from-emerald-400 to-teal-500"
  },
  {
    name: "Nuzhat Sufi", 
    image: "/assets/BoD/BoD2.png",
    role: "Vice Chairman",
    color: "from-blue-400 to-indigo-500"
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
    color: "from-pink-400 to-rose-500"
  }
];

function Bod() {
  return (
    <section className="w-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 px-4 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className={`mb-8 text-4xl tracking-tight md:text-5xl lg:text-6xl ${BlackMangoRegular.className}`}>
            Board of Directors
          </h2>
          <p className="mx-auto max-w-5xl text-xl leading-relaxed text-gray-700">
            Our distinguished board members bring decades of experience and strategic vision 
            to guide EdVenture Park towards excellence and innovation.
          </p>
        </div>
        {/* BOD Grid */}
        <div className="grid grid-cols-1 gap-20 md:grid-cols-2">
          {boardMembers.map((member, index) => (
            <div key={index} className="group relative">
              {/* Gradient Background */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${member.color} opacity-10 blur-xl transition-all duration-500 group-hover:opacity-30`}></div>
              {/* Card */}
              <div className="relative overflow-hidden rounded-3xl border border-white/50 bg-white/80 p-12 shadow-xl backdrop-blur-sm transition-all duration-300 hover:shadow-2xl">
                {/* Image Container - Square */}
                <div className="relative mb-10 aspect-square w-full overflow-hidden rounded-2xl">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                {/* Content */}
                <div className="text-center">
                  <h3 className="mb-4 text-3xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-xl font-medium text-gray-600">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Bod;
