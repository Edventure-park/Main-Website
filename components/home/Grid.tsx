import React from 'react';
import localFont from 'next/font/local';
import Image from 'next/image';

const BlackMangoBold = localFont({ src: '../../public/fonts/BlackMango/BlackMango-Bold.ttf' });

function Grid() {
  return (
    <div className="flex w-full flex-col">
      {/* Row 1 - Header */}
      <div className="flex w-full flex-nowrap items-center justify-center gap-2 overflow-x-auto whitespace-nowrap text-3xl font-bold tracking-wider sm:gap-4 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
        {/* STUDENT Group */}
        <div className="flex">
          <div className={`${BlackMangoBold.className} bg-green-600 px-2 py-1 text-white`}>
            STUD
          </div>
          <div className={`${BlackMangoBold.className} bg-white px-2 py-1 text-black`}>
            ENT
          </div>
        </div>
        {/* FOUNDERS Group */}
        <div className="flex">
          <div className={`${BlackMangoBold.className} bg-white px-2 py-1 text-black`}>
            FOUND
          </div>
          <div className={`${BlackMangoBold.className} bg-green-600 px-2 py-1 text-white`}>
            ERS
          </div>
        </div>
      </div>
      {/* Row 2 - Original 8 Column Grid */}
      <div className="grid w-full grid-cols-8">
        <div className="aspect-square bg-green-600"></div>
        <div className="relative aspect-square">
          <Image 
            fill
            src="/assets/grid/azhar.png"
            alt="azhar img"
            className="object-cover"
            sizes="(max-width: 768px) 12.5vw, 12.5vw"
          />
        </div>
        <div className="aspect-square bg-white"></div>
        <div className="aspect-square bg-white"></div>
        <div className="aspect-square bg-white"></div>
        <div className="aspect-square bg-white"></div>
        <div className="aspect-square bg-green-600"></div>
        <div className="aspect-square bg-green-600"></div>
      </div>
      {/* Row 3 - New 8 Column Grid with specified pattern */}
      <div className="grid w-full grid-cols-8">
        {/* Column 1 - Person's Image */}
        <div className="relative aspect-square">
          <Image alt='arma img' width={500} height={500} className="h-full w-auto object-cover" src='/assets/grid/arma.png' />
        </div>
        {/* Columns 2-3 - Green Boxes */}
        <div className="aspect-square bg-green-600"></div>
        <div className="aspect-square bg-green-600"></div>
        {/* Columns 4-5 - Blank Boxes */}
        <div className="aspect-square bg-white"></div>
        <div className="aspect-square bg-white"></div>
        {/* Column 6 - Green Box */}
        <div className="aspect-square bg-green-600"></div>
        {/* Column 7 - Blank Box */}
        <div className="aspect-square bg-white"></div>
        {/* Column 8 - Person's Image */}
        <div className="relative aspect-square">
          <Image alt='rahman img' width={500} height={500} className="h-full w-auto object-cover" src='/assets/grid/abdulrahman.png' />
        </div>
      </div>
    </div>
  );
}

export default Grid;