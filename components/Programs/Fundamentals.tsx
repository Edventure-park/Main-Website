import React from "react";
import Image from "next/image";

interface FundamentalsProps {
  title: string;
  renderState: boolean;
  images: {
    url: string;
    alt?: string;
  }[];
}

export default function Fundamentals({
  title,
  renderState,
}: FundamentalsProps) {
  if (!renderState) return null;

  return (
    <div className="w-full overflow-hidden px-4">
      {/* Title */}
      <div className="mx-auto max-w-screen-2xl px-2 text-center sm:px-4 md:px-6 lg:px-10">
        <h2 className="xs:text-3xl word-wrap hyphens-auto break-words text-2xl font-[League_Gothic] uppercase leading-tight tracking-tight text-black sm:text-4xl sm:leading-tight sm:tracking-normal md:text-5xl md:leading-normal lg:text-6xl lg:leading-relaxed xl:text-7xl xl:leading-[1.2] 2xl:text-8xl 2xl:leading-[204px]">
          {title}
        </h2>
      </div>
      {/* Subtitle */}
      <div className="mx-auto max-w-screen-2xl p-2 text-center sm:px-4 md:px-6 lg:px-10">
        <p className="break-words text-xs font-[League_Gothic] uppercase italic leading-relaxed tracking-tight text-black sm:text-sm sm:leading-relaxed sm:tracking-normal md:text-base md:leading-normal lg:text-lg lg:leading-relaxed xl:text-xl xl:leading-[204px]">
          We build fundamentally right companies and it's important that we
          create solutions that will benefit people
        </p>
      </div>
      {/* Description */}
      <div className="space-y-2 px-2 text-left text-sm text-black sm:px-4 sm:text-base md:px-6 md:text-lg lg:px-10 lg:text-xl xl:text-2xl">
        <div className="overflow-wrap-anywhere break-words">
          <span className="font-bold">Audience:</span> Early & Growth stage startup
        </div>
        <div className="overflow-wrap-anywhere break-words">
          <span className="font-bold">Expected Outcome:</span> Substantial Growth,
          Scaling up, Market Share & Investment Ready
        </div>
      </div>
      {/* Feature Boxes */}
      <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-3 px-2 pb-8 pt-6 sm:grid-cols-2 sm:gap-4 sm:px-4 sm:pb-10 sm:pt-8 md:gap-6 md:px-6 md:pt-14 lg:px-10">
        <div className="flex h-16 items-center justify-center bg-pink-600 px-3 sm:h-20 sm:px-4 md:h-24 md:px-6 lg:h-28 xl:h-[112px]">
          <p className="text-center text-sm font-bold leading-tight text-white sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            Problem Focused 1:1
          </p>
        </div>
        <div className="flex h-16 items-center justify-center bg-orange-600 px-3 sm:h-20 sm:px-4 md:h-24 md:px-6 lg:h-28 xl:h-[112px]">
          <p className="text-center text-sm font-bold leading-tight text-white sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            Phased Learnings
          </p>
        </div>
        <div className="flex h-16 items-center justify-center bg-green-600 px-3 sm:h-20 sm:px-4 md:h-24 md:px-6 lg:h-28 xl:h-[112px]">
          <p className="text-center text-sm font-bold leading-tight text-white sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            Self-Paced Options
          </p>
        </div>
        <div className="flex h-16 items-center justify-center bg-red-600 px-3 sm:h-20 sm:px-4 md:h-24 md:px-6 lg:h-28 xl:h-[112px]">
          <p className="text-center text-sm font-bold leading-tight text-white sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            Scrum Meetings
          </p>
        </div>
      </div>
      {/* Image Grid */}
      <div className="mx-auto max-w-screen-xl px-2 pb-12 sm:px-4 sm:pb-16 md:px-6 lg:px-10">
        <div className="grid grid-cols-1 justify-items-center gap-3 sm:gap-4 md:gap-6 lg:grid-cols-2">
          {/* Row 1 */}
          <div className="relative aspect-square w-full max-w-[280px] overflow-hidden rounded-xl sm:max-w-[300px] sm:rounded-2xl">
            <Image
              src="/assets/programs/incubation/incubation-2.jpg" 
              alt="Square 1"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[2/1] w-full max-w-[560px] overflow-hidden rounded-xl sm:max-w-[600px] sm:rounded-2xl">
            <Image
              src="/assets/programs/incubation/incubation-2.jpg"
              alt="Rectangle 1"
              fill
              className="object-cover"
            />
          </div>
          {/* Row 2 */}
          <div className="relative aspect-[2/1] w-full max-w-[560px] overflow-hidden rounded-xl sm:max-w-[600px] sm:rounded-2xl lg:order-3">
            <Image
              src="/assets/programs/incubation/incubation-3.jpg"
              alt="Rectangle 2"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-square w-full max-w-[280px] overflow-hidden rounded-xl sm:max-w-[300px] sm:rounded-2xl lg:order-4">
            <Image
              src="/assets/programs/incubation/incubation-4.jpg"
              alt="Square 2"
              fill
              className="object-cover"
            />
          </div>
          {/* Row 3 */}
          <div className="relative aspect-square w-full max-w-[280px] overflow-hidden rounded-xl sm:max-w-[300px] sm:rounded-2xl lg:order-5">
            <Image
              src="/assets/programs/incubation/incubation-5.jpg"
              alt="Square 3"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[2/1] w-full max-w-[560px] overflow-hidden rounded-xl sm:max-w-[600px] sm:rounded-2xl lg:order-6">
            <Image
              src="/assets/programs/incubation/incubation-6.jpg"
              alt="Rectangle 3"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}