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
      {/* Row 2 - First 8 Column Grid */}
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
      {/* Row 3 - Second 8 Column Grid */}
      <div className="grid w-full grid-cols-8">
        {/* Column 1 - Person's Image */}
        <div className="relative aspect-square">
          <Image alt='arma img' fill className="object-cover" src='/assets/grid/arma.png' sizes="(max-width: 768px) 12.5vw, 12.5vw" />
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
          <Image alt='rahman img' fill className="object-cover" src='/assets/grid/abdulrahman.png' sizes="(max-width: 768px) 12.5vw, 12.5vw" />
        </div>
      </div>
      {/* Row 4 - Third 8 Column Grid */}
      <div className="grid w-full grid-cols-8">
        {/* Column 1 - Green Box */}
        <div className="aspect-square bg-green-600"></div>
        {/* Column 2 - Person's Image */}
        <div className="relative aspect-square">
          <Image 
            fill
            src="/assets/grid/fouzan.png"
            alt="fouzan img"
            className="object-cover"
            sizes="(max-width: 768px) 12.5vw, 12.5vw"
          />
        </div>
        {/* Column 3 - Blank Box */}
        <div className="aspect-square bg-white"></div>
        {/* Columns 4-5 - Person's Images */}
        <div className="relative aspect-square">
          <Image 
            fill
            src="/assets/grid/ba1.png"
            alt="grid img"
            className="object-cover"
            sizes="(max-width: 768px) 12.5vw, 12.5vw"
          />
        </div>
        <div className="relative aspect-square">
          <Image 
            fill
            src="/assets/grid/ba2.png"
            alt="grid img"
            className="object-cover"
            sizes="(max-width: 768px) 12.5vw, 12.5vw"
          />
        </div>
        {/* Column 6 - Blank Box */}
        <div className="aspect-square bg-white"></div>
        {/* Column 7 - Person's Image */}
        <div className="relative aspect-square">
          <Image 
            fill
            src="/assets/grid/nisa.png"
            alt="nisa img"
            className="object-cover"
            sizes="(max-width: 768px) 12.5vw, 12.5vw"
          />
        </div>
        {/* Column 8 - Blank Box */}
        <div className="aspect-square bg-white"></div>
      </div>
      {/* Row 5 - Fourth 8 Column Grid */}
      <div className="grid w-full grid-cols-8">
        {/* Column 1 - Blank Box */}
        <div className="aspect-square bg-white"></div>
        {/* Column 2 - Green Box */}
        <div className="aspect-square bg-green-600"></div>
        {/* Column 3 - Person's Image */}
        <div className="relative aspect-square">
          <Image alt='person img' width={500} height={500} className="h-full w-auto object-cover" src='/assets/grid/ba5.png' />
        </div>
        {/* Columns 4-5 - Blank Boxes */}
        <div className="aspect-square bg-white"></div>
        <div className="aspect-square bg-white"></div>
        {/* Column 6 - Person's Image */}
        <div className="relative aspect-square">
          <Image alt='grid img' width={500} height={500} className="h-full w-auto object-cover" src='/assets/grid/ba3.png' />
        </div>
        {/* Columns 7-8 - Green Boxes */}
        <div className="aspect-square bg-green-600"></div>
        <div className="aspect-square bg-green-600"></div>
      </div>
      {/* Row 6 - Fifth 8 Column Grid */}
      <div className="grid w-full grid-cols-8">
        {/* Column 1 - Person's Image */}
        <div className="relative aspect-square">
          <Image alt='grid img' width={500} height={500} className="h-full w-auto object-cover" src='/assets/grid/ba4.png' />
        </div>
        {/* Columns 2-7 - Blank Boxes */}
        <div className="aspect-square bg-white"></div>
        <div className="aspect-square bg-white"></div>
        <div className="aspect-square bg-white"></div>
        <div className="aspect-square bg-white"></div>
        <div className="aspect-square bg-white"></div>
        <div className="aspect-square bg-white"></div>
        {/* Column 8 - Person's Image */}
        <div className="relative aspect-square">
          <Image alt='omer img' width={500} height={500} className="h-full w-auto object-cover" src='/assets/grid/omer.png' />
        </div>
      </div>
    </div>
  );
}

export default Grid;