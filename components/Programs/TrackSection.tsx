import React from "react";
import Image from "next/image";

interface TracksSectionProps {
  title: string;
  renderState: boolean;
  images: {
    url: string;
    alt?: string;
  }[];
}

export default function TrackSection({ renderState }: TracksSectionProps) {
  if (!renderState) return null;

  return (
    <div className="w-full overflow-hidden">
      <div className="mx-auto w-full max-w-6xl px-4 py-8">
        <div className="w-full py-8">
          <h2 className="ml-0 text-left text-2xl font-[Black_Mango] font-bold leading-tight text-black sm:text-5xl md:text-6xl lg:text-5xl">
            Tracks
          </h2>
        </div>
        <p className="mt-4 text-left text-lg leading-relaxed text-gray-700">
          Comprising a set of strategic tracks, this program provides startups
          with the tools and support they need to thrive in the competitive
          business landscape.
        </p>
        <div className="flex justify-center py-6">
          <Image
            src="/assets/GreenTrack.png"
            alt="Green Rocket Image"
            width={400}
            height={800}
            className="h-auto max-w-full"
          />
        </div>
      </div>
    </div>
  );
}
