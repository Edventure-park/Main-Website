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
                src="https://via.placeholder.com/500x450.png?text=Image+Placeholder"
                alt="Team Member 1"
                fill
                className="rounded-[20px] object-cover"
              />
            </div>
            <p className="-bg-white -mt-5 rounded-[10px] px-8 py-4 text-center text-lg font-medium text-black shadow-md">
              Member 1
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="relative h-[450px] w-full">
              <Image
                src="https://via.placeholder.com/500x450.png?text=Image+Placeholder"
                alt="Team Member 2"
                fill
                className="rounded-[20px] object-cover"
              />
            </div>
            <p className="-bg-white -mt-5 rounded-[10px] px-8 py-4 text-center text-lg font-medium text-black shadow-md">
              Member 2
            </p>
          </div>
          {/* Member 3 */}
          <div className="flex flex-col items-center">
            <div className="relative h-[450px] w-full">
              <Image
                src="https://via.placeholder.com/500x450.png?text=Image+Placeholder"
                alt="Team Member 3"
                fill
                className="rounded-[20px] object-cover"
              />
            </div>
            <p className="-bg-white -mt-5 rounded-[10px] px-8 py-4 text-center text-lg font-medium text-black shadow-md">
              Member 3
            </p>
          </div>
          {/* Member 4 */}
          <div className="flex flex-col items-center">
            <div className="relative h-[450px] w-full">
              <Image
                src="https://via.placeholder.com/500x450.png?text=Image+Placeholder"
                alt="Team Member 4"
                fill
                className="rounded-[20px] object-cover"
              />
            </div>
            <p className="-bg-white -mt-5 rounded-[10px] px-8 py-4 text-center text-lg font-medium text-black shadow-md">
              Member 4
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bod;
