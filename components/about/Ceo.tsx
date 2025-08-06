import Image from "next/image";
import React from "react";
import localFont from "next/font/local";

const BlackMangoRegular = localFont({ src: '../../public/fonts/BlackMango/BlackMango-Regular.ttf' })

function Ceo() {
  return (
    <section className="relative w-full overflow-hidden bg-white px-4 py-8 md:px-8 lg:px-16">
      {/* Animated gradient background */}
      <div className="animate-gradient-x pointer-events-none absolute inset-0 z-0 bg-gradient-to-r from-emerald-100 via-green-100 to-emerald-200 opacity-60 blur-2xl"></div>
      {/* Floating dots for extra flair */}
      <div className="pointer-events-none absolute left-10 top-10 z-10 size-4 animate-pulse rounded-full bg-emerald-400 opacity-40"></div>
      <div className="pointer-events-none absolute right-20 top-24 z-10 size-3 animate-bounce rounded-full bg-green-400 opacity-40"></div>
      <div className="pointer-events-none absolute bottom-20 left-16 z-10 size-2 animate-pulse rounded-full bg-emerald-300 opacity-40"></div>
      <div className="pointer-events-none absolute bottom-24 right-12 z-10 size-3 animate-bounce rounded-full bg-green-300 opacity-40"></div>
      <div className="pointer-events-none absolute left-1/4 top-1/2 z-10 size-2 animate-ping rounded-full bg-emerald-500 opacity-30"></div>
      <div className="pointer-events-none absolute bottom-1/3 right-1/3 z-10 size-3 animate-spin rounded-full bg-green-500 opacity-20"></div>
      <div className="relative z-20 mx-auto max-w-6xl">
        <h2 className={`mb-6 bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 bg-clip-text text-center text-2xl tracking-tight text-transparent drop-shadow-sm md:text-3xl lg:text-4xl xl:text-5xl ${BlackMangoRegular.className}`}>
          The Man Behind It All – Our Founder
        </h2>
        {/* CEO Card Container */}
        <div className="group relative mx-auto mb-8 w-full overflow-visible rounded-[20px] bg-green-600 p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-500/20 md:h-[500px] md:w-[900px] md:rounded-[40px] md:p-4">
          {/* Glassy glow around the green box */}
          <div className="pointer-events-none absolute -inset-4 z-0 rounded-[28px] bg-gradient-to-br from-emerald-400/30 via-green-400/20 to-emerald-200/30 opacity-60 blur-2xl transition-opacity duration-500 group-hover:opacity-80 md:rounded-[48px]"></div>
          {/* Mobile Layout */}
          <div className="block md:hidden">
            {/* CEO Image - Centered on Mobile */}
            <div className="mb-6 flex justify-center">
              <div className="relative">
                <Image
                  width={300}
                  height={300}
                  src="/assets/placeholder.jpg"
                  alt="CEO Portrait"
                  className="size-[200px] rounded-[15px] object-cover drop-shadow-lg transition-transform duration-500 hover:scale-105 md:size-[250px]"
                />
                {/* Subtle pulse effect */}
                <div className="absolute inset-0 animate-pulse rounded-[15px] bg-emerald-400/20"></div>
              </div>
            </div>
            {/* CEO Quote - Mobile */}
            <div className="text-center text-white">
              <p className="mb-4 text-lg font-bold italic drop-shadow-lg md:text-xl lg:text-2xl">
                "YOUR TIME HAS COME, AND THE SHOW IS ON!"
              </p>
              <p className="text-sm drop-shadow-md md:text-base">
                - Meraj Faheem, Founder & CEO,
                <br />
                EdVenture Park, The Hacking School,
                <br />
                Code for India
              </p>
            </div>
          </div>
          {/* Desktop Layout */}
          <div className="hidden md:block">
            <div className="flex flex-col items-center md:flex-row">
              <div className="mb-4 w-full md:mb-0 md:mr-4">
                <div className="relative">
                  <Image
                    width={500}
                    height={500}
                    src="/assets/placeholder.jpg"
                    alt="CEO Portrait"
                    className="absolute bottom-0 left-0 size-[400px] translate-x-[-30%] translate-y-[110%] rounded-[20px] object-cover drop-shadow-xl transition-transform duration-500 hover:scale-105"
                  />
                  {/* Subtle pulse effect */}
                  <div className="absolute bottom-0 left-0 size-[400px] translate-x-[-30%] translate-y-[110%] animate-pulse rounded-[20px] bg-emerald-400/20"></div>
                </div>
              </div>
            </div>
            <div className="mt-[160px] text-white md:ml-[350px]">
              <p className="mb-4 text-2xl font-bold italic drop-shadow-lg md:text-3xl lg:text-4xl">
                "YOUR TIME HAS COME, AND THE SHOW IS ON!"
              </p>
              <p className="text-center text-base drop-shadow-md">
                - Meraj Faheem, Founder & CEO,
                <br />
                EdVenture Park, The Hacking School,
                <br />
                Code for India
              </p>
            </div>
          </div>
        </div>
        {/* CEO Description */}
        <div className="mt-8 text-center md:mt-10">
          <p className="mx-auto max-w-4xl text-sm font-[Black_Mango] leading-relaxed text-black md:text-base lg:text-lg xl:text-xl">
            Meraj Faheem is a serial entrepreneur, who started first as a
            student entrepreneur. He founded India's first coding bootcamp - The
            Hacking School (acquired by iCollege Australia), Code.in, Code For
            India, Maths.ai. He Founded India's first student focused startup
            incubator - EdVenture Park. Meraj is an Innovation Fellow with Govt.
            of Telangana. He also consults with various State Govts. primarily
            to help them set up incubation centres and Makerspaces. He's
            passionate about education, technology and student entrepreneurship.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Ceo;
