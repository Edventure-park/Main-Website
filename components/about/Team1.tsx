import Image from "next/image";
import React from "react";
import localFont from "next/font/local";

const BlackMangoRegular = localFont({ src: '../../public/fonts/BlackMango/BlackMango-Regular.ttf' })

const coreTeamMembers = [
  {
    name: "Ilyas Shah Khan",
    role: "Head of Incubation",
    image: "/assets/ExecutiveTeam/ilyasC.jpeg",
    color: "from-emerald-400 to-teal-500"
  },
  {
    name: "Habeeb Ali",
    role: "Head of Operations",
    image: "/assets/ExecutiveTeam/HabeebX.jpeg",
    color: "from-blue-400 to-indigo-500"
  },
  {
    name: "Aliya Noorain",
    role: "Head of Media & Community",
    image: "/assets/ExecutiveTeam/AliyaX.jpeg",
    color: "from-purple-400 to-violet-500"
  },
  {
    name: "Siddiqua Begum",
    role: "Head of Programs",
    image: "/assets/ExecutiveTeam/SadiqaB.jpeg",
    color: "from-pink-400 to-rose-500"
  },
  // {
  //   name: "Meraj",
  //   role: "FOUNDER & CEO",
  //   image: "/assets/BoD/meeraj.png",
  //   color: "from-orange-400 to-red-500"
  // }
];

function Team1() {
  return (
    <section className="w-full bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-100 px-4 py-16">
      <div className="mx-auto max-w-6xl">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <h1 className={`mb-6 bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-[clamp(3rem,6vw,8rem)] font-black uppercase leading-tight text-transparent ${BlackMangoRegular.className}`}>
            Raising Unicorns
          </h1>
        </div>
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className={`mb-6 text-3xl tracking-tight md:text-4xl lg:text-5xl ${BlackMangoRegular.className}`}>
            Our Core Team
          </h2>
          <p className="mx-auto max-w-4xl text-lg leading-relaxed text-gray-700">
            At the heart of EdVenture Park, you'll find our dedicated Core Team, the
            driving force behind the dynamic engine that is EdVenture Park. They
            take charge of running the operations, funding initiatives, and
            executing our pre-incubation program.
          </p>
        </div>
        {/* Team Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {coreTeamMembers.map((member, index) => (
            <div key={index} className="group relative">
              {/* Gradient Background */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${member.color} opacity-10 blur-xl transition-all duration-500 group-hover:opacity-30`}></div>
              {/* Card */}
              <div className="relative overflow-hidden rounded-3xl border border-white/50 bg-white/80 p-6 shadow-xl backdrop-blur-sm transition-all duration-300 hover:shadow-2xl group-hover:-translate-y-2 group-hover:shadow-purple-200/60">
                {/* Soft gradient glow inside card */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${member.color} pointer-events-none opacity-10 blur-2xl`}></div>
                {/* Image Container */}
                <div className="relative mb-6 h-80 w-full overflow-hidden rounded-2xl">
                  <Image
                    width={500}
                    height={500}
                    src={member.image}
                    alt={member.name}
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                {/* Content */}
                <div className="text-center">
                  <h3 className="mb-2 text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-sm font-medium text-gray-600">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team1;
