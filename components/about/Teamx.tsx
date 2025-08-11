import React from 'react'
import Image from 'next/image'
import localFont from "next/font/local";

const BlackMangoRegular = localFont({ src: '../../public/fonts/BlackMango/BlackMango-Regular.ttf' })

const teamXMembers = [
  {
    name: "Saniya Mohammed",
    image: "/assets/ExecutiveTeam/SanyaX.JPG",
    role: "Team X Member",
    color: "from-emerald-400 to-teal-500"
  },
  {
    name: "Sayeeda Jabri",
    image: "/assets/ExecutiveTeam/SyeedaX2.jpeg",
    role: "Team X Member",
    color: "from-blue-400 to-indigo-500"
  },
  {
    name: "Hajera Zia",
    image: "/assets/ExecutiveTeam/HajeraX.jpeg",
    role: "Team X Member",
    color: "from-purple-400 to-violet-500"
  },
  // {
  //   name: "Siddiqua Begum",
  //   image: "/assets/ExecutiveTeam/SadiqaB.jpeg",
  //   role: "Team X Member",
  //   color: "from-pink-400 to-red-500"
  // },
  {
    name: "Rida Mahveen",
    image: "/assets/ExecutiveTeam/RidaX.jpeg",
    role: "Team X Member",
    color: "from-yellow-400 to-orange-500"
  },
  {
    name: "Ibrahim Shaheer",
    image: "/assets/ExecutiveTeam/IbrahimX.jpeg",
    role: "Team X Member",
    color: "from-green-400 to-lime-500"
  },
  {
    name: "Mubashir Ali",
    image: "/assets/ExecutiveTeam/MubasherrX.jpeg",
    role: "Team X Member",
    color: "from-cyan-400 to-blue-500"
  },
  {
    name: "Khaja Targhib",
    image: "/assets/ExecutiveTeam/targhib.jpeg",
    role: "Team X Member",
    color: "from-teal-400 to-cyan-500"
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
        {/* Modern Grid Layout */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[repeat(4,auto)] lg:justify-center">
          {teamXMembers.map((member, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center justify-between rounded-3xl border border-white/30 bg-white/60 p-8 pt-16 shadow-2xl backdrop-blur-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-emerald-200/60 lg:w-72"
            >
              {/* Floating Avatar */}
              <div className="absolute -top-12 left-1/2 size-24 -translate-x-1/2 overflow-hidden rounded-full border-4 border-white bg-gradient-to-br from-emerald-200 via-blue-200 to-purple-200 shadow-lg">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className={`object-cover ${member.name === 'Rida Mahveen' ? 'scale-110 object-[center_40%]' : ''}`}
                />
              </div>
              {/* Card Content */}
              <div className="mt-16 flex flex-col items-center">
                <h3 className={`mb-1 text-center text-xl font-bold text-gray-900 drop-shadow-sm ${BlackMangoRegular.className}`}>{member.name}</h3>
                <p className="mb-2 text-center text-sm text-gray-600">{member.role}</p>
              </div>
              {/* Soft gradient glow */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${member.color} pointer-events-none opacity-10 blur-2xl`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Teamx;