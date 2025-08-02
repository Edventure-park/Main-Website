import React from "react";
import localFont from "next/font/local";

import TargetCursor from "../TargetCursor";

const BlackMangoRegular = localFont({ src: '../../public/fonts/BlackMango/BlackMango-Regular.ttf' })

const cultureValues = [
  {
    text: "The more you do, the more you do",
    color: "from-emerald-500 to-green-600"
  },
  {
    text: "Reject Privilege",
    color: "from-pink-500 to-rose-600"
  },
  {
    text: "Great ideas can come from anywhere",
    color: "from-yellow-500 to-orange-500"
  },
  {
    text: "Earn the right to question",
    color: "from-orange-600 to-red-600"
  }
];

function Culture() {
  return (
    <section className="w-full bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-100 px-4 py-24">
      <TargetCursor targetSelector=".cursor-target" spinDuration={2} hideDefaultCursor={true} />
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className={`mb-8 text-4xl tracking-tight md:text-5xl lg:text-6xl ${BlackMangoRegular.className}`}>
            EdVenture Park's Culture Formula
          </h2>
          <p className="mx-auto max-w-4xl text-xl leading-relaxed text-gray-700">
            Our core values that drive innovation, collaboration, and excellence in everything we do.
          </p>
        </div>
        {/* Culture Values Grid */}
        <div className="space-y-16">
          {/* Top Row - 3 rectangular boxes */}
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {cultureValues.slice(0, 3).map((value, index) => (
              <div key={index} className="cursor-target group relative">
                {/* Enhanced Gradient Background */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${value.color} opacity-20 blur-2xl transition-all duration-700 group-hover:opacity-40 group-hover:blur-3xl`}></div>
                {/* Rectangular Card */}
                <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${value.color} hover:shadow-3xl transform-gpu p-8 shadow-2xl transition-all duration-500 group-hover:-rotate-1 group-hover:scale-110`}>
                  {/* Content with Enhanced Typography */}
                  <div className="relative text-center">
                    <p className="text-xl font-black leading-tight text-white drop-shadow-lg md:text-2xl">
                      {value.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Bottom Row - 1 rectangular box */}
          <div className="flex justify-center">
            <div className="w-full max-w-2xl">
              <div className="cursor-target group relative">
                {/* Enhanced Gradient Background */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${cultureValues[3].color} opacity-20 blur-2xl transition-all duration-700 group-hover:opacity-40 group-hover:blur-3xl`}></div>
                {/* Rectangular Card */}
                <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${cultureValues[3].color} hover:shadow-3xl transform-gpu p-12 shadow-2xl transition-all duration-500 group-hover:scale-105`}>
                  {/* Content with Enhanced Typography */}
                  <div className="relative text-center">
                    <p className="text-2xl font-black leading-tight text-white drop-shadow-lg md:text-3xl">
                      {cultureValues[3].text}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Culture;
