import React from "react";
import Image from "next/image";

interface DarkImageGridProps {
  title: string;
  renderState: boolean;
  images: {
    url: string;
    alt?: string;
  }[];
}

export default function DarkImageGrid({
  title,
  images,
  renderState,
}: DarkImageGridProps) {
  if (!renderState) return null;

  return (
    <>
      <div className="flex w-full justify-center">
        <div className="w-4/5 rounded bg-black p-3">
          <div className="mx-auto">
            {/* Title - Styled to match the elegant font in reference */}
            <h2 className="mb-2 text-2xl font-light tracking-wider text-white md:text-3xl">
              {title}
            </h2>
            {/* Image grid with custom layout */}
            <div className="flex flex-col gap-1">
              {/* Top row - square left image, rectangular right image with equal height */}
              <div className="flex h-64 gap-1">
                <div className="relative aspect-square h-full">
                  <Image
                    src={images[0]?.url || ""}
                    alt={images[0]?.alt || "Event image"}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 30vw"
                    priority
                  />
                </div>
                <div className="relative h-full flex-1">
                  <Image
                    src={images[1]?.url || ""}
                    alt={images[1]?.alt || "Event image"}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 70vw"
                  />
                </div>
              </div>
              {/* Second row - rectangle left image, square right image (opposite of first row) */}
              <div className="flex h-64 gap-1">
                <div className="relative h-full flex-1">
                  <Image
                    src={images[2]?.url || ""}
                    alt={images[2]?.alt || "Event image"}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 70vw"
                  />
                </div>
                <div className="relative aspect-square h-full">
                  <Image
                    src={images[3]?.url || ""}
                    alt={images[3]?.alt || "Event image"}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 30vw"
                  />
                </div>
              </div>
              {/* Bottom row - one full-width image */}
              <div className="relative aspect-video w-full">
                <Image
                  src={images[4]?.url || ""}
                  alt={images[4]?.alt || "Event image"}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-4xl px-8 py-10 text-xl leading-relaxed tracking-wide">
        <p>
          During these sessions, the Moderator and Panellists share their
          viewpoints, offering valuable insights that enrich the audience's
          understanding and provide key takeaways. This process not only imparts
          valuable principles but also enriches the ecosystem with its ambitious
          outcomes.
        </p>
        <p className="mt-8">
          The core objective of EdTalk is to provide continuous support to
          Campus Leads as they confront significant challenges, while also
          equipping them with the skill-based tools necessary for their growth.
        </p>
      </div>
    </>
  );
}
