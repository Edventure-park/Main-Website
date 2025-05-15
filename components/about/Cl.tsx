import React from "react";
import Image from "next/image";
import localFont from "next/font/local";

const BlackMangoRegular = localFont({ src: '../../public/fonts/BlackMango/BlackMango-Regular.ttf' })

function Cl() {
  return (
    <section className="w-full bg-white px-0 py-8">
      {/* Padding container for consistent alignment */}
      <div className="mx-6 md:mx-12 lg:mx-24">
        <h2 className={`mb-6 text-left text-3xl tracking-tight md:text-3xl lg:text-4xl xl:text-5xl ${BlackMangoRegular.className}`}>
          Campus Leads
        </h2>
        <p className="text-left text-xl leading-relaxed">
          Our Campus Leads are the backbone of our community – the CEOs of{" "}
          <br />
          EdVenture Park within their respective campuses. These students have{" "}
          <br />
          exclusive access to the abundant resources offered by EdVenture Park,{" "}
          <br />
          creating opportunities for them to experiment, learn, and thrive.
        </p>
        <div className="mt-16 w-full">
          <div className="relative h-64 w-full overflow-hidden rounded-xl">
            <Image
              src="/assets/LeadsBanner.jpg"
              alt="Campus Leads Banner"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
      <div className="mt-24 w-full bg-emerald-600 px-4 py-24">
        <div className="mx-6 md:mx-12 lg:mx-24">
          <h2 className="font-poppins text-left text-2xl font-medium leading-tight text-black sm:text-3xl md:text-5xl lg:text-6xl">
            Become the{" "}
            <span className="font-bold">
              CEO of
              <br />
              EdVenture Park
            </span>{" "}
            at your campus!
          </h2>
        </div>
      </div>
    </section>
  );
}

export default Cl;
