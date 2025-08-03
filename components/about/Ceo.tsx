import Image from "next/image";
import React from "react";

function Ceo() {
  return (
    <section className="w-full bg-white px-4 py-8 md:px-8 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-6 text-center text-2xl font-[Black_Mango] tracking-tight md:text-3xl lg:text-4xl xl:text-5xl">
          The Man Behind It All – Our Founder
        </h2>
        {/* CEO Card Container */}
        <div className="relative mx-auto mb-8 w-full rounded-[20px] bg-green-600 p-6 md:h-[500px] md:w-[900px] md:rounded-[40px] md:p-4">
          
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
                  className="size-[200px] rounded-[15px] object-cover md:size-[250px]"
                />
              </div>
            </div>
            {/* CEO Quote - Mobile */}
            <div className="text-center text-white">
              <p className="mb-4 text-lg font-bold italic md:text-xl lg:text-2xl">
                "YOUR TIME HAS COME, AND THE SHOW IS ON!"
              </p>
              <p className="text-sm md:text-base">
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
                    className="absolute bottom-0 left-0 size-[400px] translate-x-[-30%] translate-y-[110%] rounded-[20px] object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="mt-[160px] text-white md:ml-[350px]">
              <p className="mb-4 text-2xl font-bold italic md:text-3xl lg:text-4xl">
                "YOUR TIME HAS COME, AND THE SHOW IS ON!"
              </p>
              <p className="text-center text-base">
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
