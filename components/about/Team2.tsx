import React from "react";
import Image from "next/image";

const teamMembers = [
  {
    name: "Syed Osman",
    image: "/assets/ExecutiveTeam/ET00.png",
  },
  {
    name: "Fatima Khader",
    image: "/assets/ExecutiveTeam/ET01.png",
  },
  {
    name: "Ruqayyah Sara",
    image: "/assets/ExecutiveTeam/ET02.png",
  },
  {
    name: "Issam Uddin",
    image: "/assets/ExecutiveTeam/ET03.png",
  },
  {
    name: "Hajera Zia",
    image: "/assets/ExecutiveTeam/ET04.png",
  },
  {
    name: "Mohammed Noor",
    image: "/assets/ExecutiveTeam/ET05.png",
  },
  {
    name: "Obaid Ullah Khan",
    image: "/assets/ExecutiveTeam/ET06.png",
  },
  {
    name: "Mustafa Kakeem",
    image: "/assets/ExecutiveTeam/ET07.png",
  },
  {
    name: "Rabiya Noreen",
    image: "/assets/ExecutiveTeam/ET08.png",
  },
  {
    name: "Masarrath Fatima ",
    image: "/assets/ExecutiveTeam/ET09.png",
  },
  {
    name: "Saniya",
    image: "/assets/ExecutiveTeam/ET10.png",
  },
  {
    name: "Rehan Algaari",
    image: "/assets/ExecutiveTeam/ET11.png",
  },
  {
    name: "Aliya Noorain",
    image: "/assets/ExecutiveTeam/ET12.png",
  },
  {
    name: "Sumaiyya Fasiuddun",
    image: "/assets/ExecutiveTeam/ET13.png",
  },
  {
    name: "Yousuf Afreen",
    image: "/assets/ExecutiveTeam/ET14.png",
  },
  {
    name: "Huda Hajera",
    image: "/assets/ExecutiveTeam/ET15.png",
  },
  {
    name: "Maaz Ahmed Khan",
    image: "/assets/ExecutiveTeam/ET16.png",
  },
  {
    name: "Adnan Ali Khanl",
    image: "/assets/ExecutiveTeam/ET17.png",
  },
  {
    name: "Daiq Hussain",
    image: "/assets/ExecutiveTeam/ET18.png",
  },
  {
    name: "Saad Mirza",
    image: "/assets/ExecutiveTeam/ET19.png",
  },
];

const extraMembers = [
  {
    name: "Sarah Alieah",
    title: "Chief Creative Officer",
    image: "",
  },
  {
    name: "Jonathan Leon",
    title: "Chief Talent Officer",
    image: "",
  },
  {
    name: "Dean Johaness",
    title: "Chief Marketing Officer",
    image: "",
  },
];

function Team2() {
  return (
    <section className="bg-white px-4 py-16 md:px-10 lg:px-20">
      {/* Header */}
      <div className="mb-12 text-left">
        <h2 className="mb-4 text-3xl font-[Black_Mango] tracking-tight lg:text-4xl xl:text-5xl">
          Our Executive Team
        </h2>
        <p className="font-poppins text-xl font-medium leading-relaxed text-gray-700">
          When it comes to exponential growth and taking startups to new
          heights, our X team is the "X" factor. They are the multipliers that
          propel student founders beyond expectations. These creative minds
          bring their expertise to the table, working alongside student founders
          to help them transform their ideas into thriving startups.
        </p>
      </div>
      {/* Yellow Grid */}
      <div className="rounded-lg bg-yellow-400 p-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="rounded-xl bg-white p-4 text-center shadow-md"
            >
              <div className="relative mx-auto mb-4 h-72 w-56 overflow-hidden rounded-tl-lg">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="rounded-tr-[25%] object-cover"
                />
              </div>
              <p className="text-lg font-semibold text-gray-800"> 
                {member.name}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* Extra Team Cards */}
      <div className="mt-20 flex flex-wrap items-center justify-center gap-12">
        {extraMembers.map((member, index) => (
          <div
            key={index}
            className="relative w-72 rounded-2xl bg-white p-6 pt-20 text-center shadow-xl"
          >
            {/* Circular Image */}
            <div className="absolute -top-16 left-1/2 size-32 -translate-x-1/2 overflow-hidden rounded-full border-4 border-white shadow-lg">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
              />
            </div>
            {/* Content */}
            <p className="mt-4 text-lg font-bold text-gray-900">
              {member.name}
            </p>
            <p className="text-sm font-medium text-gray-600">{member.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Team2;
