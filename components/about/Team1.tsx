import Image from "next/image";
import React from "react";

function Team1() {
  return (
    <section className="w-full bg-white px-4 py-8">
      <div className="flex w-full items-center justify-center bg-white px-4 py-16">
        <h1 className="text-center text-[clamp(6rem,10vw,15rem)] font-black uppercase leading-tight text-neutral-900">
          Raising Unicorns
        </h1>
      </div>
      <h2 className="mb-6 text-3xl font-[Black_Mango] tracking-tight md:text-3xl lg:text-4xl xl:text-5xl">
        Our Core Team
      </h2>
      <p className="text-left text-xl font-[Black_Mango] leading-relaxed">
        At the heart of EdVenture Park, you'll find our dedicated Core Team, the
        driving force behind the dynamic engine that is EdVenture Park. They
        take charge of running the operations, funding initiatives, and
        executing our pre-incubation program.
      </p>
      {/* Red Box containing Core Team Members */}
      <div className="mt-8 rounded-lg bg-red-500 p-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
          {/* Team Member 1 */}
          <div className="flex flex-col items-center">
            <Image
              width={500}
              height={500}
              src="https://via.placeholder.com/500x450.png?text=CEO+Image+Placeholder"
              alt="Core Team"
              className="mb-4 h-[450px] w-[300px] rounded-lg object-cover md:w-[500px]"
            />
            <h3 className="text-lg font-bold text-white">John Doe</h3>
          </div>
          {/* Team Member 2 */}
          <div className="flex flex-col items-center">
            <Image
              width={500}
              height={500}
              src="https://via.placeholder.com/500x450.png?text=CEO+Image+Placeholder"
              alt="Core Team"
              className="mb-4 h-[450px] w-[300px] rounded-lg object-cover md:w-[500px]"
            />
            <h3 className="text-lg font-bold text-white">Jane Smith</h3>
          </div>
          {/* Team Member 3 */}
          <div className="flex flex-col items-center">
            <Image
              width={500}
              height={500}
              src="https://via.placeholder.com/500x450.png?text=CEO+Image+Placeholder"
              alt="Core Team"
              className="mb-4 h-[450px] w-[300px] rounded-lg object-cover md:w-[500px]"
            />
            <h3 className="text-lg font-bold text-white">Michael Lee</h3>
          </div>
          {/* Team Member 4 */}
          <div className="flex flex-col items-center">
            <Image
              width={500}
              height={500}
              src="https://via.placeholder.com/500x450.png?text=CEO+Image+Placeholder"
              alt="Core Team"
              className="mb-4 h-[450px] w-[300px] rounded-lg object-cover md:w-[500px]"
            />
            <h3 className="text-lg font-bold text-white">Alice Wang</h3>
          </div>
          {/* Team Member 5 */}
          <div className="flex flex-col items-center">
            <Image
              width={500}
              height={500}
              src="https://via.placeholder.com/500x450.png?text=CEO+Image+Placeholder"
              alt="Core Team"
              className="mb-4 h-[450px] w-[300px] rounded-lg object-cover md:w-[500px]"
            />
            <h3 className="text-lg font-bold text-white">Sara Patel</h3>
          </div>
          {/* Team Member 6 */}
          <div className="flex flex-col items-center">
            <Image
              width={500}
              height={500}
              src="https://via.placeholder.com/500x450.png?text=CEO+Image+Placeholder"
              alt="Core Team"
              className="mb-4 h-[450px] w-[300px] rounded-lg object-cover md:w-[500px]"
            />
            <h3 className="text-lg font-bold text-white">David Kim</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team1;
