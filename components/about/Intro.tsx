import React from "react";
import Image from "next/image";

const AboutUS = () => {
  return (
    <div className="w-full overflow-x-hidden bg-white p-0">
      <div className="relative flex w-full max-w-[2811.5px] flex-col justify-start">
        <div className="mx-6 md:mx-12 lg:mx-24">
          <div className="mb-6 text-left text-3xl font-[Black_Mango] tracking-tight md:text-3xl lg:text-4xl xl:text-5xl">
            About Us
          </div>
          <h2 className="mb-6 text-xl font-[Black_Mango] leading-tight tracking-tight text-black md:text-3xl lg:text-5xl">
            Incubating India - for the World!
          </h2>
          <p className="mb-4 text-left text-xl font-[Black_Mango] leading-relaxed tracking-wide">
            Edventure Park is a student-focused idea stage startup <br />
            incubator which aims to empower student-led startups <br />
            through an intensive 4-month pre incubation program.
          </p>
          <div className="relative mx-auto mb-8 h-[500px] w-full max-w-[1000px] md:h-[600px]">
            {/* Left green circle */}
            <div className="absolute left-0 top-1/2 z-10 size-[150px] -translate-y-1/2 overflow-hidden rounded-full border-4 border-green-500 md:size-[200px]">
              <Image
                width={200}
                height={200}
                src="/assets/founder_collage.jpg"
                alt="Team Member"
                className="size-full object-cover"
              />
            </div>
            {/* Center yellow circle (larger) */}
            <div className="absolute left-1/4 top-1/2 z-20 size-[180px] -translate-x-1/4 -translate-y-1/2 overflow-hidden rounded-full border-4 border-yellow-400 md:size-[250px]">
              <Image
                width={250}
                height={250}
                src="/assets/colorColage.png"
                alt="Team Member"
                className="size-full object-cover"
              />
            </div>
            {/* Right side parallel blue circles with connecting line */}
            <div className="absolute inset-y-0 right-0 z-10 flex flex-col items-center justify-between py-10 md:py-20">
              {/* Top right blue circle */}
              <div className="relative size-[180px] overflow-hidden rounded-full border-4 border-blue-600 md:size-[220px]">
                <Image
                  width={220}
                  height={220}
                  src="/assets/placeholder.jpg"
                  alt="Team Member"
                  className="size-full object-cover"
                />
              </div>
              {/* Connecting blue line */}
              <div className="h-full w-1 bg-blue-600"></div>
              {/* Bottom right blue circle */}
              <div className="relative size-[180px] overflow-hidden rounded-full border-4 border-blue-600 md:size-[220px]">
                <Image
                  width={220}
                  height={220}
                  src="/assets/LeadsBanner.jpg"
                  alt="Team Member"
                  className="size-full object-cover"
                />
              </div>
            </div>
            {/* Center green circle */}
            <div className="absolute left-1/2 top-1/4 z-30 size-[170px] -translate-x-1/2 -translate-y-1/4 overflow-hidden rounded-full border-4 border-green-500 md:size-[220px]">
              <Image
                width={220}
                height={220}
                src="/assets/EVP_logo.png"
                alt="Team Member"
                className="size-full object-cover"
              />
            </div>
            {/* Bottom group photo */}
            <div className="absolute bottom-0 left-1/2 z-20 size-[200px] -translate-x-1/2 overflow-hidden rounded-full border-4 border-green-500 md:size-[250px]">
              <Image
                width={250}
                height={250}
                src="/assets/founder_collage.jpg"
                alt="Team Group"
                className="size-full object-cover"
              />
            </div>
          </div>
          <p className="mb-4 text-left text-xl font-[Black_Mango] leading-relaxed tracking-wide">
            Welcome to EdVenture Park, where student-driven innovation knows no
            limits and where we <br />
            incubate India's brightest ideas for the world. <br />
            Within our walls, students find the freedom to experiment, the
            courage to learn from failures, <br />
            and the support they need to thrive. EdVenture Park isn't just an
            incubator; it's a launchpad for <br />
            the next generation of entrepreneurs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUS;
