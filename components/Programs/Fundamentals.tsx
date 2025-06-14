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
      <div className="mx-auto max-w-screen-2xl px-10 text-center">
        <h2 className="whitespace-nowrap text-8xl font-[League_Gothic] font-bold uppercase leading-[204px] tracking-normal text-black">
          {title}
        </h2>
      </div>
      {/* Subtitle */}
      <div className="mx-auto max-w-screen-2xl px-10 py-2 text-center">
        <p className="text-xl font-[League_Gothic] font-bold uppercase italic leading-[204px] tracking-normal text-black">
          We build fundamentally right companies and it's important that we
          create solutions that will benefit people
        </p>
      </div>
      {/* Description */}
      <div className="space-y-2 px-10 text-left text-2xl text-black">
        <div>
          <span className="font-bold">Audience:</span> Early & Growth stage startup
        </div>
        <div>
          <span className="font-bold">Expected Outcome:</span> Substantial Growth,
          Scaling up, Market Share & Investment Ready
        </div>
      </div>
      {/* Feature Boxes */}
      <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-6 px-10 pb-10 pt-14 md:grid-cols-2">
        <div className="flex h-[112px] items-center justify-center bg-pink-600 px-6">
          <p className="text-center text-2xl font-bold text-white">
            Problem Focused 1:1
          </p>
        </div>
        <div className="flex h-[112px] items-center justify-center bg-orange-600 px-6">
          <p className="text-center text-2xl font-bold text-white">
            Phased Learnings
          </p>
        </div>
        <div className="flex h-[112px] items-center justify-center bg-green-600 px-6">
          <p className="text-center text-2xl font-bold text-white">
            Self-Paced Options
          </p>
        </div>
        <div className="flex h-[112px] items-center justify-center bg-red-600 px-6">
          <p className="text-center text-2xl font-bold text-white">
            Scrum Meetings
          </p>
        </div>
      </div>
      {/* Image Grid */}
      <div className="mx-auto max-w-screen-xl px-10 pb-16">
        <div className="grid grid-cols-1 justify-items-center gap-6 md:grid-cols-2">
          {/* Row 1 */}
          <div className="relative size-[300px] overflow-hidden rounded-2xl">
            <Image
              src="/assets/CoreTeam/CT1.png"
              alt="Square 1"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="relative h-[300px] w-[600px] overflow-hidden rounded-2xl">
            <Image
              src="/assets/CoreTeam/CT2.png"
              alt="Rectangle 1"
              layout="fill"
              objectFit="cover"
            />
          </div>
          {/* Row 2 */}
          <div className="relative h-[300px] w-[600px] overflow-hidden rounded-2xl">
            <Image
              src="/assets/CoreTeam/CT3.png"
              alt="Rectangle 2"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="relative size-[300px] overflow-hidden rounded-2xl">
            <Image
              src="/assets/CoreTeam/CT4.png"
              alt="Square 2"
              layout="fill"
              objectFit="cover"
            />
          </div>
          {/* Row 3 */}
          <div className="relative size-[300px] overflow-hidden rounded-2xl">
            <Image
              src="/assets/CoreTeam/CT5.png"
              alt="Square 3"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="relative h-[300px] w-[600px] overflow-hidden rounded-2xl">
            <Image
              src="/assets/CoreTeam/CT6.png"
              alt="Rectangle 3"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>

    </div>
  );
}
