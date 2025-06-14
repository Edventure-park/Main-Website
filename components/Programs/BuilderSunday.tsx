import React from "react";
import Image from "next/image";

interface BuilderSundayProps {
  title: string;
  renderState: boolean;
  images?: { url: string; alt: string }[];
}

export default function BuilderSunday({
  title,
  renderState,
  images = [
    { url: "/assets/BuilderSunday1.jpg", alt: "Builder Sunday Image 1" },
    { url: "/assets/BuilderSunday2.jpg", alt: "Builder Sunday Image 2" },
    { url: "/assets/BuilderSunday3.jpg", alt: "Builder Sunday Image 3" },
    { url: "/assets/BuilderSunday4.jpg", alt: "Builder Sunday Image 4" },
    { url: "/assets/BuilderSunday5.jpg", alt: "Builder Sunday Image 5" },
    { url: "/assets/BuilderSunday6.jpg", alt: "Builder Sunday Image 6" },
  ],
}: BuilderSundayProps) {
  if (!renderState) return null;

  return (
    <>
      {/* Header Section */}
      <div className="w-full overflow-hidden px-4">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-10">
          <div className="flex flex-col items-center justify-between gap-8 sm:flex-row sm:gap-12">
            {/* Title */}
            <h2 className="flex-1 text-center text-xl font-[League_Gothic] font-bold uppercase leading-tight tracking-normal text-black sm:text-left sm:text-5xl md:text-6xl lg:text-7xl">
              {title}
            </h2>
            {/* Skull Image on Right */}
            <div className="relative size-72 shrink-0 sm:size-96 md:size-[28rem] lg:size-[32rem]">
              <Image
                src="/assets/BSSkullsHead.png"
                alt="Skull Head"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
        {/* Subtitle */}
        <div className="mx-auto max-w-screen-xl px-4 py-6 text-center sm:px-10">
          <p className="text-left text-4xl font-[League_Gothic] font-bold leading-snug tracking-normal text-black">
            Here's some of our Hardware
            <span className="block">Creations</span>
          </p>
          <div className="mt-2 h-1 w-20 rounded-full bg-green-700"></div>
        </div>
      </div>
      {/* Image Grid Section */}
      <div className="flex w-full justify-center">
        <div className="w-4/5 rounded p-3">
          <div className="mx-auto">
            <div className="flex flex-col gap-4">
              {/* Row 1: Square + Rect */}
              <div className="flex h-72 gap-4">
                <div className="relative w-2/5">
                  <Image
                    src={images[0]?.url || ""}
                    alt={images[0]?.alt || "Event image"}
                    fill
                    className="rounded object-cover"
                    priority
                  />
                </div>
                <div className="relative w-3/5">
                  <Image
                    src={images[1]?.url || ""}
                    alt={images[1]?.alt || "Event image"}
                    fill
                    className="rounded object-cover"
                  />
                </div>
              </div>
              {/* Row 2: Rect + Square */}
              <div className="flex h-72 gap-4">
                <div className="relative w-3/5">
                  <Image
                    src={images[2]?.url || ""}
                    alt={images[2]?.alt || "Event image"}
                    fill
                    className="rounded object-cover"
                  />
                </div>
                <div className="relative w-2/5">
                  <Image
                    src={images[3]?.url || ""}
                    alt={images[3]?.alt || "Event image"}
                    fill
                    className="rounded object-cover"
                  />
                </div>
              </div>
              {/* Row 3: Square + Rect */}
              <div className="flex h-72 gap-4">
                <div className="relative w-2/5">
                  <Image
                    src={images[4]?.url || ""}
                    alt={images[4]?.alt || "Event image"}
                    fill
                    className="rounded object-cover"
                  />
                </div>
                <div className="relative w-3/5">
                  <Image
                    src={images[5]?.url || ""}
                    alt={images[5]?.alt || "Event image"}
                    fill
                    className="rounded object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tracking-wider">
        <p className="font-regula mt-4 text-left text-lg text-gray-700">
          By providing complimentary access to an interactive and invigorating
          environment, coupled with{" "}
          <span className="block">
            well-structured modules and components, our aim is to cultivate a
            hands-on approach to learning.
          </span>{" "}
          This approach serves to instil practical knowledge and engagement.
        </p>
      </div>
    </>
  );
}
