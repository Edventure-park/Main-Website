import React from "react";
import Image from "next/image";

interface FounderFridayProps {
  title: string;
  renderState: boolean;
  images: {
    url: string;
    alt?: string;
  }[];
}

export default function FounderFriday({
  title,
  renderState,
  images,
}: FounderFridayProps) {
  if (!renderState) return null;

  return (
    <div className="w-full overflow-hidden px-4 py-10">
      {/* Title */}
      <div className="mx-auto max-w-screen-xl px-6 text-center">
        <h2 className="whitespace-nowrap text-6xl font-[League_Gothic] font-bold uppercase leading-tight tracking-normal text-black sm:text-7xl md:text-8xl">
          {title}
        </h2>
        <p className="mt-4 text-lg font-[League_Gothic] font-bold uppercase italic tracking-wide text-black sm:text-xl">
          A platform for founders to share their stories and insights
        </p>
      </div>
      {/* Grid Layout */}
      <div className="mx-auto mt-14 grid max-w-screen-xl grid-cols-1 gap-6 px-4 md:grid-cols-5">
        {/* Left Green Panel */}
        <div className="relative col-span-1 flex h-[600px] w-[300px] items-start justify-start overflow-hidden rounded-xl bg-[#189E59] px-4 pt-6">
          <div className="z-10">
            <p className="text-xl font-[League_Gothic] font-bold leading-tight text-white sm:text-5xl">
              FOUNDERS'
              <br />
              FRIDAY
            </p>
          </div>
          <Image
            src={images[0]?.url || ""}
            alt={images[0]?.alt || "Founder woman"}
            fill
            className="object-contain object-bottom"
            priority
          />
        </div>
        {/* Center Images */}
        <div className="col-span-3 flex flex-col items-center justify-center gap-6">
          {/* Top Rectangle */}
          <div className="relative h-[140px] w-[300px] overflow-hidden rounded-xl">
            <Image
              src={images[1]?.url || ""}
              alt={images[1]?.alt || "Top image"}
              fill
              className="object-cover"
            />
          </div>
          {/* Middle Square */}
          <div className="relative size-[200px] overflow-hidden rounded-xl">
            <Image
              src={images[2]?.url || ""}
              alt={images[2]?.alt || "Middle image"}
              fill
              className="object-cover"
            />
          </div>
          {/* Bottom Rectangle */}
          <div className="relative h-[140px] w-[300px] overflow-hidden rounded-xl">
            <Image
              src={images[3]?.url || ""}
              alt={images[3]?.alt || "Bottom image"}
              fill
              className="object-cover"
            />
          </div>
        </div>
        {/* Right Green Panel */}
        <div className="relative col-span-1 ml-auto h-[600px] w-[300px] overflow-hidden rounded-xl bg-[#189E59]">
          <Image
            src={images[4]?.url || ""}
            alt={images[4]?.alt || "YES sign"}
            fill
            className="object-contain object-bottom"
            priority
          />
        </div>
      </div>
      {/* Description */}
      <div className="">
        <p className="mx-auto mt-10 max-w-4xl px-6 text-left text-xl leading-relaxed tracking-wider text-gray-700">
          The event includes Crowd Pitching, where founders present their
          concepts in a minute to the audience, gaining valuable insights and
          validation for their ideas. This segment serves as a platform for
          founders to enhance their presentation skills and boost
          self-confidence. The "Best Pitch of the Day" award is given to the
          founder with the most applause.
        </p>
        <p className="mx-auto mt-4 max-w-4xl px-6 text-left text-xl leading-relaxed tracking-wider text-gray-700">
          Another highlight is "Business Showers," a festive celebration of
          startup launches. EdVenture Park becomes a launch collaborator,
          providing support from strategic planning to product demonstrations.
          This commitment is rooted in understanding the challenges founders
          face, making EdVenture Park a steadfast well-wisher throughout their
          entrepreneurial journey.
        </p>
      </div>
    </div>
  );
}
