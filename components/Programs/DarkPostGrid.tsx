import React from 'react';
import Image from 'next/image';

interface DarkImageGridProps {
  title: string;
  images: {
    url: string;
    alt?: string;
  }[];
}

export default function DarkImageGrid({ title, images }: DarkImageGridProps) {
  return (
    <div className="w-full bg-black p-4">
      <div className="mx-auto max-w-4xl">
        {/* Title - Styled to match the elegant font in reference */}
        <h2 className="mb-4 text-2xl font-light tracking-wider text-white md:text-3xl">
          {title}
        </h2>
        {/* Image grid with exact proportions matching reference */}
        <div className="grid grid-cols-2 gap-2">
          {/* Top row - two equal sized images */}
          <div className="relative col-span-1 aspect-video">
            <Image 
              src={images[0]?.url || ''} 
              alt={images[0]?.alt || "Event image"} 
              fill 
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
          <div className="relative col-span-1 aspect-video">
            <Image 
              src={images[1]?.url || ''} 
              alt={images[1]?.alt || "Event image"} 
              fill 
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          {/* Middle row - wider left image, square right image */}
          <div className="relative col-span-2 row-span-1 aspect-video md:col-span-1">
            <Image 
              src={images[2]?.url || ''} 
              alt={images[2]?.alt || "Event image"} 
              fill 
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 67vw"
            />
          </div>
          <div className="relative col-span-2 row-span-1 aspect-video md:col-span-1">
            <Image 
              src={images[3]?.url || ''} 
              alt={images[3]?.alt || "Event image"} 
              fill 
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          {/* Bottom row - one full-width image */}
          <div className="relative col-span-2 aspect-video">
            <Image 
              src={images[4]?.url || ''} 
              alt={images[4]?.alt || "Event image"} 
              fill 
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
}