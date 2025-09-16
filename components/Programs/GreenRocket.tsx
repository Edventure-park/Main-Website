import React from "react";
import Image from "next/image";

interface GreenRocketF {
  title: string;
  renderState: boolean;
  images: {
    url: string;
    alt?: string;
  }[];
}

export default function GreenRocket({
  title,
  images,
  renderState,
}: GreenRocketF) {
  if (!renderState) return null;

  return (
    <div className="w-full overflow-hidden">
      {/* Main centered content */}
      <div className="mx-auto w-full max-w-6xl px-4 py-8">
        <h2 className="text-center text-4xl font-bold leading-tight text-black sm:text-5xl md:text-6xl lg:text-7xl">
          {title}
        </h2>
        <div className="flex justify-center py-6">
          <Image
            src={images[0].url}
            alt={images[0].alt || "Green Rocket Image"}
            width={800}
            height={800}
            className="h-auto max-w-full"
          />
        </div>
        <p className="text-left text-xl font-bold italic tracking-wider text-black">
          We take immense pride to be India's First and Favourite Student
          Startup Incubator, Introducing India's first Pre Incubation Program,
          tailored to suit the needs of the STUDENTS!
        </p>
      </div>
      {/* Full-width content that does NOT overflow */}
      <div className="mt-16 w-full px-4 text-left text-3xl sm:px-6 md:px-8 lg:px-12">
        <div>
          <span className="font-bold">Audience:</span> Idea Stage Startups
        </div>
        <div>
          <span className="font-bold">Expected Outcome:</span> Achieving
          Technical PoC / Launch!
        </div>
        <div>
          <span className="font-bold">Investor Pitches:</span> Startups are
          trained to be investment-ready from Day 1
        </div>
      </div>
      {/* Bottom full-width image */}
      <div className="mt-10 w-full">
        <Image
          src={images[1].url}
          alt={images[1].alt || "Green Rocket Image"}
          width={1920}
          height={1080}
          className="h-auto w-full"
        />
      </div>
    </div>
  );
}
