import Image from "next/image";
import React from "react";

function Bod() {
  return (
    <div className="mx-4 mb-8 md:mx-10 lg:mx-20">
      <h2 className="mb-6 text-3xl font-[Black_Mango] tracking-tight md:text-3xl lg:text-4xl xl:text-5xl">
        Board of Directors
      </h2>
      <div className="mx-4 mb-8 md:mx-10 lg:mx-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          {/* Member 1 */}
          <div className="flex flex-col items-center">
            <div className="relative h-[450px] w-full">
              <Image
                src="/assets/BoD/BoD1.png"
                alt="Team Member 1"
                fill
                className="rounded-[20px] object-cover"
              />
              src="/assests/BoD/BoD1.png"
            </div>
            <p className="z-10 mt-[-50px] rounded-[20px] bg-white px-12 py-6 text-center text-xl font-medium text-black shadow-xl">
              TEST
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="relative h-[450px] w-full">
              <Image
                src="/assets/BoD/BoD2.png"
                alt="Team Member 2"
                fill
                className="rounded-[20px] object-cover"
              />
            </div>
            <p className="z-10 mt-[-50px] rounded-[20px] bg-white px-12 py-6 text-center text-xl font-medium text-black shadow-xl">
              Member 2
            </p>
          </div>
          {/* Member 3 */}
          <div className="flex flex-col items-center">
            <div className="relative h-[450px] w-full">
              <Image
                src="/assets/BoD/BoD3.png"
                alt="Team Member 3"
                fill
                className="rounded-[20px] object-cover"
              />
            </div>
            <p className="z-10 mt-[-50px] rounded-[20px] bg-white px-12 py-6 text-center text-xl font-medium text-black shadow-xl">
              Member 3
            </p>
          </div>
          {/* Member 4 */}
          <div className="flex flex-col items-center">
            <div className="relative h-[450px] w-full">
              <Image
                src="/assets/BoD/BoD4.png"
                alt="Team Member 4"
                fill
                className="rounded-[20px] object-cover"
              />
            </div>
            <p className="z-10 mt-[-50px] rounded-[20px] bg-white px-12 py-6 text-center text-xl font-medium text-black shadow-xl">
              Member 4
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bod;
