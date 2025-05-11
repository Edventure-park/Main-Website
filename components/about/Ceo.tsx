import Image from "next/image";
import React from "react";

function Ceo() {
  return (
    <section className="w-full bg-white px-4 py-8">
      <div className="mx-4 mb-8 md:mx-10 lg:mx-20">
        <h2 className="mb-6 text-3xl font-[Black_Mango] tracking-tight md:text-3xl lg:text-4xl xl:text-5xl">
          The Man Behind It All – Our CEO
        </h2>
        <div className="relative mb-4 ml-auto h-[500px] w-full rounded-[40px] bg-green-600 p-4 md:w-[900px]">
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
          {/* ✅ Text added inside the green box */}
          <div className="mt-[160px] text-white md:ml-[440px]">
            <p className="mb-4 text-2xl font-bold md:text-3xl lg:text-4xl">
              "YOUR TIME HAS COME, AND THE SHOW IS ON!"
            </p>
            <p className="text-xl">
              - Meraj Faheem, Founder & CEO,
              <br />
              EdVenture Park, The Hacking School, Code for India
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ceo;
