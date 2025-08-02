import React from 'react'
import Image from 'next/image'
import localFont from "next/font/local";

const BlackMangoRegular = localFont({ src: '../../public/fonts/BlackMango/BlackMango-Regular.ttf' })

const teamXMembers = [
  {
    name: "Saniya Mohammed",
    image: "/assets/placeholder.jpg",
    role: "Team X Member",
    color: "from-emerald-400 to-teal-500"
  },
  {
    name: "Sayeeda Jabri",
    image: "/assets/placeholder.jpg",
    role: "Team X Member",
    color: "from-blue-400 to-indigo-500"
  },
  {
    name: "Hajera Zia",
    image: "/assets/placeholder.jpg",
    role: "Team X Member",
    color: "from-purple-400 to-violet-500"
  },
  {
    name: "Aliya Noorain",
    image: "/assets/placeholder.jpg",
    role: "Team X Member",
    color: "from-pink-400 to-rose-500"
  },
  {
    name: "Siddiqua Begum",
    image: "/assets/placeholder.jpg",
    role: "Team X Member",
    color: "from-orange-400 to-red-500"
  },
  {
    name: "Rida Mahveen",
    image: "/assets/placeholder.jpg",
    role: "Team X Member",
    color: "from-yellow-400 to-orange-500"
  },
  {
    name: "Ibrahim Shaheer",
    image: "/assets/placeholder.jpg",
    role: "Team X Member",
    color: "from-cyan-400 to-blue-500"
  },
  {
    name: "Mubashir Ali",
    image: "/assets/placeholder.jpg",
    role: "Team X Member",
    color: "from-green-400 to-emerald-500"
  },
  {
    name: "Habeeb Ali",
    image: "/assets/placeholder.jpg",
    role: "Team X Member",
    color: "from-indigo-400 to-purple-500"
  },
  {
    name: "Mohammed Noor",
    image: "/assets/placeholder.jpg",
    role: "Team X Member",
    color: "from-teal-400 to-cyan-500"
  },
  {
    name: "Ilyas Shah Khan",
    image: "/assets/placeholder.jpg",
    role: "Team X Member",
    color: "from-rose-400 to-pink-500"
  },
  {
    name: "Khaja Targhib Uddin",
    image: "/assets/placeholder.jpg",
    role: "Team X Member",
    color: "from-violet-400 to-purple-500"
  }
];

function Teamx() {
    return (
      <section className="w-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 px-4 py-16">
        <div className="mx-auto max-w-6xl">
          {/* Hero Section */}
          <div className="mb-16 text-center">
            <h1 className={`mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-[clamp(2.5rem,5vw,6rem)] font-black uppercase leading-tight text-transparent ${BlackMangoRegular.className}`}>
              Team X
            </h1>
            <p className="mx-auto max-w-3xl text-lg font-medium leading-relaxed text-gray-700">
              The extraordinary minds behind the scenes. Our Team X members are the creative catalysts, 
              the innovation drivers, and the dream enablers who make the impossible possible.
            </p>
          </div>
          {/* Cool Grid Layout */}
          <div className="space-y-12">
            {/* First Row - 3 members with large cards */}
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {teamXMembers.slice(0, 3).map((member, index) => (
                <div key={index} className="group relative">
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${member.color} opacity-10 blur-xl transition-all duration-500 group-hover:opacity-30`}></div>
                  <div className="relative overflow-hidden rounded-3xl border border-white/50 bg-white/80 p-6 shadow-xl backdrop-blur-sm transition-all duration-300 hover:shadow-2xl">
                    <div className="relative mb-6 h-72 w-full overflow-hidden rounded-2xl">
                      <Image
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-gray-900">{member.name}</h3>
                    <p className="text-gray-600">{member.role}</p>
                  </div>
                </div>
                        ))}
            </div>
            {/* Second Row - 6 members in a compact grid */}
            <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
              {teamXMembers.slice(3, 9).map((member, index) => (
                <div key={index} className="group relative">
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${member.color} opacity-10 blur-lg transition-all duration-500 group-hover:opacity-30`}></div>
                  <div className="relative overflow-hidden rounded-2xl border border-white/50 bg-white/80 p-4 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl">
                    <div className="relative mb-4 h-40 w-full overflow-hidden rounded-xl">
                      <Image
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    </div>
                    <h3 className="mb-1 text-sm font-bold text-gray-900">{member.name}</h3>
                    <p className="text-xs text-gray-600">{member.role}</p>
                  </div>
                </div>
                        ))}
            </div>
            {/* Third Row - 3 members with different styling */}
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {teamXMembers.slice(9, 12).map((member, index) => (
                <div key={index} className="group relative">
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${member.color} opacity-10 blur-xl transition-all duration-500 group-hover:opacity-30`}></div>
                  <div className="relative overflow-hidden rounded-3xl border border-white/50 bg-white/80 p-6 shadow-xl backdrop-blur-sm transition-all duration-300 hover:shadow-2xl">
                    <div className="relative mb-6 h-72 w-full overflow-hidden rounded-2xl">
                      <Image
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-gray-900">{member.name}</h3>
                    <p className="text-gray-600">{member.role}</p>
                  </div>
                </div>
                        ))}
            </div>
          </div>
        </div>
      </section>
    )
}

export default Teamx;