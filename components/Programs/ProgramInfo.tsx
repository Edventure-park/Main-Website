import React from 'react';
import localFont from 'next/font/local'
import Link from 'next/link';

import { ProgramData } from '@/data/programData';

const BlackMangoRegular = localFont({ src: '../../public/fonts/BlackMango/BlackMango-Regular.ttf' })

export default function ProgramInfo({ programData }: { programData: ProgramData }) {
  // Map program names to their respective slugs
  const programSlugs: Record<string, string> = {
    'Pre-Incubation Program': 'preincubation',
    'Incubation Program': 'incubation',
    'Campus Leadership Program': 'campusleadership',
    'Incubation Manager Fellowship': 'fellowship',
    'Internships': 'internships',
    'Founders Friday': 'foundersfriday',
    'Founders Fest': 'foundersfest',
    'EdTalk': 'edtalk',
    'Builders Sunday': 'builderssunday'
  };
  
  return (
    <section className="w-full bg-white px-4 py-12 md:px-10 lg:px-20">
      <div className="mx-auto max-w-7xl">
        {/* Desktop and Tablet Layout */}
        <div className="hidden md:flex md:flex-row md:gap-10">
          {/* Left Side - List */}
          <aside className="md:w-1/4 lg:w-1/5">
            <div className="border-r border-green-600 pr-4">
              <ul className="space-y-4 text-left font-medium text-black">
                {programData.lists.map((item, idx) => (
                  <li key={idx} className={`cursor-pointer transition-all duration-200 hover:text-green-600 ${programData.slug === programSlugs[item] ? 'font-bold text-green-600' : ''}`}>
                    <Link href={`/programs/${programSlugs[item]}`}>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
          {/* Right Side - Content */}
          <article className="md:w-3/4 md:pl-8 lg:w-4/5">
            <h1 className="mb-4 text-2xl text-black md:text-3xl lg:text-4xl">
              <span className={`${BlackMangoRegular.className}`}>{programData.heading}</span>
            </h1>
            <h2 className="mb-3 text-xl text-gray-700">
              {programData.subHeading}
            </h2>
            <p className="text-base leading-relaxed text-gray-800 md:text-lg">
              {programData.paragraph}
            </p>
          </article>
        </div>
        {/* Mobile Layout */}
        <div className="flex flex-col md:hidden">
          {/* Content First */}
          <article className="mb-8">
            <h1 className="mb-4 text-2xl font-bold text-black">
              {programData.heading}
            </h1>
            <h2 className="mb-3 text-lg text-gray-700">
              {programData.subHeading}
            </h2>
            <p className="text-base leading-relaxed text-gray-800">
              {programData.paragraph}
            </p>
          </article>
          {/* Horizontal Line for Mobile */}
          <div className="mb-6 border-t border-green-600"></div>
          {/* List Below */}
          <aside>
            <ul className="space-y-4 text-left font-medium text-black">
              {programData.lists.map((item, idx) => (
                <li key={idx} className={`cursor-pointer transition-all duration-200 hover:text-green-600 ${programData.slug === programSlugs[item] ? 'font-bold text-green-600' : ''}`}>
                  <Link href={`/programs/${programSlugs[item]}`}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}