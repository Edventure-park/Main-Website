import Image from "next/image";
import React from "react";

function Team1() {
  return (
    <section className="w-full bg-white px-4 py-8">
      <div className="flex w-full items-center justify-center bg-white px-4 py-16">
        <h1 className="text-center text-[clamp(4rem,8vw,12rem)] font-black uppercase leading-tight text-neutral-900">
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
      <div className="mt-8 rounded-xl bg-red-400 p-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
          {/* Team Member 1 */}
          <div className="flex flex-col items-center bg-white p-4 shadow-lg">
            <div className="relative mb-4 h-[350px] w-[250px] overflow-hidden rounded-tl-lg">
              <Image
                width={500}
                height={500}
                src="/assets/CoreTeam/CT1.png"
                alt="Core Team"
                className="size-full rounded-tr-[25%] object-cover"
              />
            </div>
            <h3 className="text-lg font-extrabold text-neutral-900">ILYAS SHAH KHAN</h3>
            <p className="text-md text-neutral-600">INCUBATION MANAGER</p>
          </div>
          {/* Team Member 2 */}
          <div className="flex flex-col items-center bg-white p-4 shadow-lg">
            <div className="relative mb-4 h-[350px] w-[250px] overflow-hidden rounded-tl-lg">
              <Image
                width={500}
                height={500}
                src="/assets/CoreTeam/CT2.png"
                alt="Core Team"
                className="size-full rounded-tr-[25%] object-cover"
              />
            </div>
            <h3 className="text-lg font-extrabold text-neutral-900">SHAIK AHMED</h3>
            <p className="text-md text-neutral-600">OPERATIONS MANAGER</p>
          </div>
          {/* Team Member 3 */}
          <div className="flex flex-col items-center bg-white p-4 shadow-lg">
            <div className="relative mb-4 h-[350px] w-[250px] overflow-hidden rounded-tl-lg">
              <Image
                width={500}
                height={500}
                src="/assets/CoreTeam/CT3.png"
                alt="Core Team"
                className="size-full rounded-tr-[25%] object-cover"
              />
            </div>
            <h3 className="text-lg font-extrabold text-neutral-900">ZUHA ANSARI</h3>
            <p className="text-md text-neutral-600">PROGRAM MANAGER</p>
          </div>
          {/* Team Member 4 */}
          <div className="flex flex-col items-center bg-white p-4 shadow-lg">
            <div className="relative mb-4 h-[350px] w-[250px] overflow-hidden rounded-tl-lg">
              <Image
                width={500}
                height={500}
                src="/assets/CoreTeam/CT4.png"
                alt="Core Team"
                className="size-full rounded-tr-[25%] object-cover"
              />
            </div>
            <h3 className="text-lg font-extrabold text-neutral-900">SYED FAWAZ ALI</h3>
            <p className="text-md text-neutral-600">PROGRAM</p>
          </div>
          {/* Team Member 5 */}
          <div className="flex flex-col items-center bg-white p-4 shadow-lg">
            <div className="relative mb-4 h-[350px] w-[250px] overflow-hidden rounded-tl-lg">
              <Image
                width={500}
                height={500}
                src="/assets/CoreTeam/CT5.png"
                alt="Core Team"
                className="size-full rounded-tr-[25%] object-cover"
              />
            </div>
            <h3 className="text-lg font-extrabold text-neutral-900">OSAID SHARIF</h3>
            <p className="text-md text-neutral-600">PROGRAM MANAGER - HARDWARE</p>
          </div>
          {/* Team Member 6 */}
          <div className="flex flex-col items-center bg-white p-4 shadow-lg">
            <div className="relative mb-4 h-[350px] w-[250px] overflow-hidden rounded-tl-lg">
              <Image
                width={500}
                height={500}
                src="/assets/CoreTeam/CT6.png"
                alt="Core Team"
                className="size-full rounded-tr-[25%] object-cover"
              />
            </div>
            <h3 className="text-lg font-extrabold text-neutral-900">HUDA HAJIRA</h3>
            <p className="text-md text-neutral-600">COMMUNITY MANAGER</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team1;
