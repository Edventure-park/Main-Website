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
          <Image
            width={500}
            height={500}
            src="/assets/colorColage.png" // remove "public" from the path
            alt="Core Team"
            className="mb-4 h-[450px] w-[300px] rounded-lg object-cover md:w-[500px]"
          />
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
