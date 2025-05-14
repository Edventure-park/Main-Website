import React from 'react';
import localFont from 'next/font/local'

interface ProgramInfoProps {
  slug: string;
  Heading: string;
  SubHeading: string;
  Paragraph: string;
  lists: string[];
}

const BlackMangoRegular = localFont({ src: '../../public/fonts/BlackMango/BlackMango-Regular.ttf' })

export default function ProgramInfo({ ProgramInfoData }: { ProgramInfoData: ProgramInfoProps }) {
  return (
    <section className="w-full bg-white px-4 py-12 md:px-10 lg:px-20">
      <div className="mx-auto max-w-7xl">
        {/* Desktop and Tablet Layout */}
        <div className="hidden md:flex md:flex-row md:gap-10">
          {/* Left Side - List */}
          <aside className="md:w-1/4 lg:w-1/5">
            <div className="border-r border-green-600 pr-4">
              <ul className="space-y-4 text-left font-medium text-black">
                {ProgramInfoData.lists.map((item, idx) => (
                  <li key={idx} className="cursor-pointer transition-all duration-200 hover:text-green-600">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
          {/* Right Side - Content */}
          <article className="md:w-3/4 md:pl-8 lg:w-4/5">
            <h1 className="mb-4 text-2xl text-black md:text-3xl lg:text-4xl">
              <span className={`${BlackMangoRegular.className}`}>{ProgramInfoData.Heading}</span>
            </h1>
            <p className="text-base leading-relaxed text-gray-800 md:text-lg">
              {ProgramInfoData.Paragraph}
            </p>
          </article>
        </div>
        {/* Mobile Layout */}
        <div className="flex flex-col md:hidden">
          {/* Content First */}
          <article className="mb-8">
            <h1 className="mb-4 text-2xl font-bold text-black">
              {ProgramInfoData.Heading}
            </h1>
            <p className="text-base leading-relaxed text-gray-800">
              {ProgramInfoData.Paragraph}
            </p>
          </article>
          {/* Horizontal Line for Mobile */}
          <div className="mb-6 border-t border-green-600"></div>
          {/* List Below */}
          <aside>
            <ul className="space-y-4 text-left font-medium text-black">
              {ProgramInfoData.lists.map((item, idx) => (
                <li key={idx} className="cursor-pointer transition-all duration-200 hover:text-green-600">
                  {item}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}