import Image from 'next/image';
import React from 'react';

const CEO = () => {
  return (
    <div className="mx-auto w-full max-w-4xl">
      <h1 className="mb-4 text-2xl font-bold md:text-3xl">The Man Behind it all - Our CEO</h1>
      {/* Green card with overlapping image and quote */}
      <div className="relative mt-12 md:mt-16">
        <div className="absolute left-3 top-8 z-10 max-w-xs -translate-y-1/2">
          <div className="rounded-md bg-white p-1 shadow-lg">
            <Image
              width={500}
              height={500}
              src="/assets/grid/abdulrahman.png" 
              alt="CEO Portrait" 
              className="size-full rounded-sm object-cover"
            />
          </div>
        </div>
        <div className="rounded-lg bg-emerald-500 p-4 pt-16 text-white md:pl-56 md:pt-4 lg:pl-64">
          <div className="flex flex-col items-center md:items-start md:pl-12">
            <div className="w-full text-center md:pl-4 md:text-left lg:pl-8">
              <blockquote className="text-xl font-semibold md:text-2xl">
                "YOUR TIME HAS COME, 
                <br />
                AND THE SHOW IS ON!"
              </blockquote>
              <div className="mt-4 text-sm">
                <p>Meraj Faheem, Founder & CEO,</p>
                <p>EdVenture Park, The Hacking</p>
                <p>School, Code for India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 text-sm md:text-base">
        <p className="leading-relaxed">
          Meraj Faheem is a serial entrepreneur, who started first as a student entrepreneur. He founded India's first coding 
          bootcamp - The Hacking School (acquired by Arduous Australia), Code For India & Weframe. He founded 
          India's first student focused startup incubator - EdVenture Park. Meraj is an Innovation fellow with Govt of 
          Telangana. He also collaborated with Google, Infosys, Amazon, primarily to set up incubation centers at 
          Makerspaces. He's passionate about education, technology and student entrepreneurship.
        </p>
      </div>
    </div>
  );
};

export default CEO;