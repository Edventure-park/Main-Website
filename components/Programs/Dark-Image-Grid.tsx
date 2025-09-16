import React from "react";
import Image from "next/image";

interface ImageItem {
  url: string;
  alt: string;
}

interface ImageGridProps {
  images: ImageItem[];
  renderState?: boolean;
}

export default function ImageGrid({ images,renderState }: ImageGridProps) {
    if (!renderState) return null;
    
  return (
    <div className="flex w-full justify-center">
      <div className="w-4/5 rounded-2xl bg-black p-3">
        <div className="mx-auto">
          <div className="flex flex-col gap-5">
            {/* Row 1: Square + Rect */}
            <div className="flex h-[460px] gap-4">
              <div className="relative h-full w-[42%]">
                <Image
                  src={images[0]?.url || ""}
                  alt={images[0]?.alt || "Event image"}
                  fill
                  className="rounded-2xl object-cover"
                  priority
                />
              </div>
              <div className="relative h-full w-[58%]">
                <Image
                  src={images[1]?.url || ""}
                  alt={images[1]?.alt || "Event image"}
                  fill
                  className="rounded-2xl object-cover"
                  priority
                />
              </div>
            </div>
            {/* Row 2: Rect + Square */}
            <div className="flex h-[460px] gap-4">
              <div className="relative h-full w-[58%]">
                <Image
                  src={images[2]?.url || ""}
                  alt={images[2]?.alt || "Event image"}
                  fill
                  className="rounded-2xl object-cover"
                  priority
                />
              </div>
              <div className="relative h-full w-[42%]">
                <Image
                  src={images[3]?.url || ""}
                  alt={images[3]?.alt || "Event image"}
                  fill
                  className="rounded-2xl object-cover"
                  priority
                />
              </div>
            </div>
            {/* Row 3: Square + Rect */}
            <div className="flex h-[460px] gap-4">
              <div className="relative h-full w-[42%]">
                <Image
                  src={images[4]?.url || ""}
                  alt={images[4]?.alt || "Event image"}
                  fill
                  className="rounded-2xl object-cover"
                  priority
                />
              </div>
              <div className="relative h-full w-[58%]">
                <Image
                  src={images[5]?.url || ""}
                  alt={images[5]?.alt || "Event image"}
                  fill
                  className="rounded-2xl object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
