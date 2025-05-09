import Image from 'next/image';
import React from 'react';

export default function Founders_Collage() {
  return (
    <section className="w-full bg-white px-4 py-8">
      <div className="mx-auto max-w-7xl">
        <div className="relative w-full overflow-hidden rounded-lg shadow-lg">
          <Image
            src="/assets/founder_collage.jpg" // Ensure this path matches your public folder structure
            alt="Founders at Edventure Park"
            width={2048}
            height={767}
            layout="responsive"
            objectFit="contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
