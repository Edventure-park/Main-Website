import Image from "next/image";
import React from "react";

function Ceo() {
  return (
    <section className="w-full bg-white px-4 py-8">
      <div className="mx-4 mb-8 md:mx-10 lg:mx-20">
        <h2 className="mb-6 text-3xl font-[Black_Mango] tracking-tight md:text-3xl lg:text-4xl xl:text-5xl">
          The Man Behind It All – Our CEO
        </h2>
        <div className="relative mx-auto mb-8 h-[500px] w-full rounded-[40px] bg-green-600 p-4 md:w-[900px]">
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
        <div className="mt-10 text-center text-2xl text-black md:text-2xl">
          <p className="mx-auto max-w-5xl font-[Black_Mango] leading-relaxed">
            Meraj Faheem is a serial entrepreneur, who started first as a
            student entrepreneur. He founded India's first coding bootcamp - The
            Hacking School (acquired by iCollege Australia), Code.in, Code For
            India, Maths.ai. He Founded India's first student focused startup
            incubator - EdVenture Park. Meraj is an Innovation Fellow with Govt.
            of Telangana. He also consults with various State Govts. primarily
            to help them set up incubation centres and Makerspaces. He's
            passionate about education, technology and student entrepreneurship.
          </p>{" "}
        </div>
      </div>
    </section>
  );
}

export default Ceo;
