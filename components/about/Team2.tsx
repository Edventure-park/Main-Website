import React from "react";
import Image from "next/image";

const teamMembers = [
  {
    name: "Alice Johnson",
    image: "https://via.placeholder.com/500x450.png?text=Alice",
  },
  {
    name: "Bob Smith",
    image: "https://via.placeholder.com/500x450.png?text=Bob",
  },
  {
    name: "Charlie Brown",
    image: "https://via.placeholder.com/500x450.png?text=Charlie",
  },
  {
    name: "David Wilson",
    image: "https://via.placeholder.com/500x450.png?text=David",
  },
  {
    name: "Ella Anderson",
    image: "https://via.placeholder.com/500x450.png?text=Ella",
  },
  {
    name: "Fiona Clarke",
    image: "https://via.placeholder.com/500x450.png?text=Fiona",
  },
  {
    name: "George Lee",
    image: "https://via.placeholder.com/500x450.png?text=George",
  },
  {
    name: "Hannah King",
    image: "https://via.placeholder.com/500x450.png?text=Hannah",
  },
  {
    name: "Ian Scott",
    image: "https://via.placeholder.com/500x450.png?text=Ian",
  },
  {
    name: "Jasmine Green",
    image: "https://via.placeholder.com/500x450.png?text=Jasmine",
  },
  {
    name: "Kevin Moore",
    image: "https://via.placeholder.com/500x450.png?text=Kevin",
  },
  {
    name: "Luna Taylor",
    image: "https://via.placeholder.com/500x450.png?text=Luna",
  },
  {
    name: "Michael Adams",
    image: "https://via.placeholder.com/500x450.png?text=Michael",
  },
  {
    name: "Nina Thomas",
    image: "https://via.placeholder.com/500x450.png?text=Nina",
  },
  {
    name: "Oliver Harris",
    image: "https://via.placeholder.com/500x450.png?text=Oliver",
  },
  {
    name: "Paula Baker",
    image: "https://via.placeholder.com/500x450.png?text=Paula",
  },
  {
    name: "Quincy Martin",
    image: "https://via.placeholder.com/500x450.png?text=Quincy",
  },
  {
    name: "Rachel Hill",
    image: "https://via.placeholder.com/500x450.png?text=Rachel",
  },
  {
    name: "Sam Reed",
    image: "https://via.placeholder.com/500x450.png?text=Sam",
  },
  {
    name: "Tina Collins",
    image: "https://via.placeholder.com/500x450.png?text=Tina",
  },
];

const extraMembers = [
  {
    name: "Sarah Alieah",
    title: "Chief Creative Officer",
    image: "https://via.placeholder.com/500x450.png?text=Uma",
  },
  {
    name: "Jonathan Leon",
    title: "Chief Talent Officer",
    image: "https://via.placeholder.com/500x450.png?text=Victor",
  },
  {
    name: "Dean Johaness",
    title: "Chief Marketing Officer",
    image: "https://via.placeholder.com/500x450.png?text=Wendy",
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
              <div className="relative mb-4 h-56 w-full overflow-hidden rounded-tl-lg">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="rounded-tr-[50%] object-cover"
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
