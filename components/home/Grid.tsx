import React from 'react';
import localFont from 'next/font/local';
import Image from 'next/image';

const BlackMangoBold = localFont({ 
  src: '../../public/fonts/BlackMango/BlackMango-Bold.ttf',
  display: 'swap',
});

// Original Grid Component (unchanged)
const GridContent: React.FC = () => {
  return (
    <div className="flex w-full flex-col">
      {/* Row 1 - Header */}
      <div className="flex w-full items-center justify-center gap-2 overflow-hidden text-2xl font-bold tracking-wider sm:gap-4 sm:text-5xl md:text-4xl lg:text-3xl xl:text-4xl">
        {/* Desktop: Constrain header width to be narrower than grid */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 lg:max-w-2xl xl:max-w-3xl">
          {/* STUDENT Group */}
          <div className="flex shrink-0">
            <div className={`${BlackMangoBold.className} bg-green-600 px-2 py-1 text-white lg:px-3 lg:py-2`}>
              STUD
            </div>
            <div className={`${BlackMangoBold.className} bg-white px-2 py-1 text-black lg:px-3 lg:py-2`}>
              ENT
            </div>
          </div>
          {/* FOUNDERS Group */}
          <div className="flex shrink-0">
            <div className={`${BlackMangoBold.className} bg-white px-2 py-1 text-black lg:px-3 lg:py-2`}>
              FOUND
            </div>
            <div className={`${BlackMangoBold.className} bg-green-600 px-2 py-1 text-white lg:px-3 lg:py-2`}>
              ERS
            </div>
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
          <Image alt='arma img' fill className="object-cover" src='/assets/grid/kamal.png' sizes="(max-width: 768px) 12.5vw, 12.5vw" />
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
          <Image alt='rahman img' fill className="object-cover" src='/assets/grid/targhib.png' sizes="(max-width: 768px) 12.5vw, 12.5vw" />
        </div>
      </div>
      {/* Row 4 - Third 8 Column Grid */}
      <div className="grid w-full grid-cols-8">
        {/* Column 1 - Green Box */}
        <div className="aspect-square bg-green-600"></div>
        {/* Column 2 - Person's Image */}
        
        {/* Column 3 - Blank Box */}
        <div className="aspect-square bg-white"></div>
        {/* Columns 4-5 - Person's Images */}
        <div className="relative aspect-square">
          <Image 
            fill
            src="/assets/grid/rayyan.png"
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
            src="/assets/grid/zahra.png"
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
          <Image 
            fill
            src='/assets/grid/jai.png'
            alt='person img'
            className="object-cover"
            sizes="(max-width: 768px) 12.5vw, 12.5vw"
          />
        </div>
        {/* Columns 4-5 - Blank Boxes */}
        <div className="aspect-square bg-white"></div>
        <div className="aspect-square bg-white"></div>
        {/* Column 6 - Person's Image */}
        <div className="relative aspect-square">
          <Image 
            fill
            src='/assets/grid/alefiyah.png'
            alt='grid img'
            className="object-cover"
            sizes="(max-width: 768px) 12.5vw, 12.5vw"
          />
        </div>
        {/* Columns 7-8 - Green Boxes */}
        <div className="aspect-square bg-green-600"></div>
        <div className="aspect-square bg-green-600"></div>
      </div>
      {/* Row 6 - With Logo */}
      <div className="grid w-full grid-cols-8">
        {/* Column 1 - Person's Image */}
        <div className="relative aspect-square">
          <Image 
            fill
            src='/assets/grid/amaama.png'
            alt='grid img'
            className="object-cover"
            sizes="(max-width: 768px) 12.5vw, 12.5vw"
          />
        </div>
        {/* Columns 2-7 - Logo Container spanning 6 columns */}
        <div className="col-span-6 flex items-center justify-center bg-white">
          <div className="flex size-full items-center justify-center p-2 sm:p-4 md:p-6">
            <Image 
              src="/assets/newevplogo.png"
              alt="EdVenture Park Logo"
              width={500}
              height={300}
              className="w-full max-w-lg object-contain"
            />
          </div>
        </div>
        {/* Column 8 - Person's Image */}
        <div className="relative aspect-square">
          <Image 
            fill
            src='/assets/grid/mub.png'
            alt='omer img'
            className="object-cover"
            sizes="(max-width: 768px) 12.5vw, 12.5vw"
          />
        </div>
      </div>
      {/* Row 7 - With Text Content */}
      <div className="grid w-full grid-cols-8">
        {/* Column 1 - Blank Box */}
        <div className="aspect-square bg-green-600"></div>
        {/* Column 2 - Person's Image */}
        <div className="relative aspect-square">
          <Image 
            fill
            src='/assets/grid/sheema.png'
            alt='grid img'
            className="object-cover"
            sizes="(max-width: 768px) 12.5vw, 12.5vw"
          />
        </div>
        {/* Columns 3-6 - Text Content */}
        <div className="col-span-4 flex flex-col items-center justify-center bg-white">
          <div className="flex w-full flex-col items-center justify-center px-1 sm:px-2 md:px-4">
            {/* Text split into 4 distinct rows as in the image */}
            <p className="w-full text-center text-xl font-medium sm:text-2xl md:text-3xl">Giving India</p>
            <p className="w-full text-center text-2xl font-bold text-green-700 sm:text-3xl md:text-5xl">Its True</p>
            <p className="w-full text-center text-xl font-medium sm:text-2xl md:text-3xl">Student-Startup</p>
            <p className="w-full text-center text-3xl font-extrabold text-green-700 sm:text-4xl md:text-6xl">UNICORN</p>
          </div>
        </div>
        {/* Column 7 - Person's Image */}
        <div className="relative aspect-square">
          <Image 
            fill
            src='/assets/grid/arma.png'
            alt='tahera img'
            className="object-cover"
            sizes="(max-width: 768px) 12.5vw, 12.5vw"
          />
        </div>
        {/* Column 8 - Blank Box */}
        <div className="aspect-square bg-green-600"></div>
      </div>
    </div>
  );
};

// Main Grid Component with Desktop Container
function Grid() {
  return (
    <>
      {/* Mobile View - Original Component */}
      <div className="block lg:hidden">
        <GridContent />
      </div>
      {/* Desktop View - No Height Constraints */}
      <div className="hidden lg:block">
        <div className="mx-auto w-full max-w-6xl">
          <GridContent />
        </div>
      </div>
    </>
  );
}

export default Grid;

// below is the original grid component code from previous commit !
// import React from 'react';
// import localFont from 'next/font/local';
// import Image from 'next/image';

// const BlackMangoBold = localFont({ src: '../../public/fonts/BlackMango/BlackMango-Bold.ttf' });

// function Grid() {
//   return (
//     <div className="flex w-full flex-col">
//       {/* Row 1 - Header */}
//       <div className="flex w-full items-center justify-center gap-2 overflow-hidden text-2xl font-bold tracking-wider sm:gap-4 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
//         {/* STUDENT Group */}
//         <div className="flex shrink-0">
//           <div className={`${BlackMangoBold.className} bg-green-600 px-2 py-1 text-white`}>
//             STUD
//           </div>
//           <div className={`${BlackMangoBold.className} bg-white px-2 py-1 text-black`}>
//             ENT
//           </div>
//         </div>
//         {/* FOUNDERS Group */}
//         <div className="flex shrink-0">
//           <div className={`${BlackMangoBold.className} bg-white px-2 py-1 text-black`}>
//             FOUND
//           </div>
//           <div className={`${BlackMangoBold.className} bg-green-600 px-2 py-1 text-white`}>
//             ERS
//           </div>
//         </div>
//       </div>
//       {/* Row 2 - First 8 Column Grid */}
//       <div className="grid w-full grid-cols-8">
//         <div className="aspect-square bg-green-600"></div>
//         <div className="relative aspect-square">
//           <Image 
//             fill
//             src="/assets/grid/azhar.png"
//             alt="azhar img"
//             className="object-cover"
//             sizes="(max-width: 768px) 12.5vw, 12.5vw"
//           />
//         </div>
//         <div className="aspect-square bg-white"></div>
//         <div className="aspect-square bg-white"></div>
//         <div className="aspect-square bg-white"></div>
//         <div className="aspect-square bg-white"></div>
//         <div className="aspect-square bg-green-600"></div>
//         <div className="aspect-square bg-green-600"></div>
//       </div>
//       {/* Row 3 - Second 8 Column Grid */}
//       <div className="grid w-full grid-cols-8">
//         {/* Column 1 - Person's Image */}
//         <div className="relative aspect-square">
//           <Image alt='arma img' fill className="object-cover" src='/assets/grid/arma.png' sizes="(max-width: 768px) 12.5vw, 12.5vw" />
//         </div>
//         {/* Columns 2-3 - Green Boxes */}
//         <div className="aspect-square bg-green-600"></div>
//         <div className="aspect-square bg-green-600"></div>
//         {/* Columns 4-5 - Blank Boxes */}
//         <div className="aspect-square bg-white"></div>
//         <div className="aspect-square bg-white"></div>
//         {/* Column 6 - Green Box */}
//         <div className="aspect-square bg-green-600"></div>
//         {/* Column 7 - Blank Box */}
//         <div className="aspect-square bg-white"></div>
//         {/* Column 8 - Person's Image */}
//         <div className="relative aspect-square">
//           <Image alt='rahman img' fill className="object-cover" src='/assets/grid/abdulrahman.png' sizes="(max-width: 768px) 12.5vw, 12.5vw" />
//         </div>
//       </div>
//       {/* Row 4 - Third 8 Column Grid */}
//       <div className="grid w-full grid-cols-8">
//         {/* Column 1 - Green Box */}
//         <div className="aspect-square bg-green-600"></div>
//         {/* Column 2 - Person's Image */}
//         <div className="relative aspect-square">
//           <Image 
//             fill
//             src="/assets/grid/fouzan.png"
//             alt="fouzan img"
//             className="object-cover"
//             sizes="(max-width: 768px) 12.5vw, 12.5vw"
//           />
//         </div>
//         {/* Column 3 - Blank Box */}
//         <div className="aspect-square bg-white"></div>
//         {/* Columns 4-5 - Person's Images */}
//         <div className="relative aspect-square">
//           <Image 
//             fill
//             src="/assets/grid/ba1.png"
//             alt="grid img"
//             className="object-cover"
//             sizes="(max-width: 768px) 12.5vw, 12.5vw"
//           />
//         </div>
//         <div className="relative aspect-square">
//           <Image 
//             fill
//             src="/assets/grid/ba2.png"
//             alt="grid img"
//             className="object-cover"
//             sizes="(max-width: 768px) 12.5vw, 12.5vw"
//           />
//         </div>
//         {/* Column 6 - Blank Box */}
//         <div className="aspect-square bg-white"></div>
//         {/* Column 7 - Person's Image */}
//         <div className="relative aspect-square">
//           <Image 
//             fill
//             src="/assets/grid/nisa.png"
//             alt="nisa img"
//             className="object-cover"
//             sizes="(max-width: 768px) 12.5vw, 12.5vw"
//           />
//         </div>
//         {/* Column 8 - Blank Box */}
//         <div className="aspect-square bg-white"></div>
//       </div>
//       {/* Row 5 - Fourth 8 Column Grid */}
//       <div className="grid w-full grid-cols-8">
//         {/* Column 1 - Blank Box */}
//         <div className="aspect-square bg-white"></div>
//         {/* Column 2 - Green Box */}
//         <div className="aspect-square bg-green-600"></div>
//         {/* Column 3 - Person's Image */}
//         <div className="relative aspect-square">
//           <Image 
//             fill
//             src='/assets/grid/ba5.png'
//             alt='person img'
//             className="object-cover"
//             sizes="(max-width: 768px) 12.5vw, 12.5vw"
//           />
//         </div>
//         {/* Columns 4-5 - Blank Boxes */}
//         <div className="aspect-square bg-white"></div>
//         <div className="aspect-square bg-white"></div>
//         {/* Column 6 - Person's Image */}
//         <div className="relative aspect-square">
//           <Image 
//             fill
//             src='/assets/grid/ba3.png'
//             alt='grid img'
//             className="object-cover"
//             sizes="(max-width: 768px) 12.5vw, 12.5vw"
//           />
//         </div>
//         {/* Columns 7-8 - Green Boxes */}
//         <div className="aspect-square bg-green-600"></div>
//         <div className="aspect-square bg-green-600"></div>
//       </div>
//       {/* Row 6 - With Logo */}
//       <div className="grid w-full grid-cols-8">
//         {/* Column 1 - Person's Image */}
//         <div className="relative aspect-square">
//           <Image 
//             fill
//             src='/assets/grid/ba4.png'
//             alt='grid img'
//             className="object-cover"
//             sizes="(max-width: 768px) 12.5vw, 12.5vw"
//           />
//         </div>
//         {/* Columns 2-7 - Logo Container spanning 6 columns */}
//         <div className="col-span-6 flex items-center justify-center bg-white">
//           <div className="flex size-full items-center justify-center p-2 sm:p-4 md:p-6">
//             <Image 
//               src="/assets/newevplogo.png"
//               alt="EdVenture Park Logo"
//               width={500}
//               height={300}
//               className="w-full max-w-lg object-contain"
//             />
//           </div>
//         </div>
//         {/* Column 8 - Person's Image */}
//         <div className="relative aspect-square">
//           <Image 
//             fill
//             src='/assets/grid/omer.png'
//             alt='omer img'
//             className="object-cover"
//             sizes="(max-width: 768px) 12.5vw, 12.5vw"
//           />
//         </div>
//       </div>
//       {/* Row 7 - With Text Content */}
//       <div className="grid w-full grid-cols-8">
//         {/* Column 1 - Blank Box */}
//         <div className="aspect-square bg-green-600"></div>
//         {/* Column 2 - Person's Image */}
//         <div className="relative aspect-square">
//           <Image 
//             fill
//             src='/assets/grid/ba6.png'
//             alt='grid img'
//             className="object-cover"
//             sizes="(max-width: 768px) 12.5vw, 12.5vw"
//           />
//         </div>
//         {/* Columns 3-6 - Text Content */}
//         <div className="col-span-4 flex flex-col items-center justify-center bg-white">
//           <div className="flex w-full flex-col items-center justify-center px-1 sm:px-2 md:px-4">
//             {/* Text split into 4 distinct rows as in the image */}
//             <p className="w-full text-center text-xl font-medium sm:text-2xl md:text-3xl">Giving India</p>
//             <p className="w-full text-center text-2xl font-bold text-green-700 sm:text-3xl md:text-5xl">Its True</p>
//             <p className="w-full text-center text-xl font-medium sm:text-2xl md:text-3xl">Student-Startup</p>
//             <p className="w-full text-center text-3xl font-extrabold text-green-700 sm:text-4xl md:text-6xl">UNICORN</p>
//           </div>
//         </div>
//         {/* Column 7 - Person's Image */}
//         <div className="relative aspect-square">
//           <Image 
//             fill
//             src='/assets/grid/tahera.png'
//             alt='tahera img'
//             className="object-cover"
//             sizes="(max-width: 768px) 12.5vw, 12.5vw"
//           />
//         </div>
//         {/* Column 8 - Blank Box */}
//         <div className="aspect-square bg-green-600"></div>
//       </div>
//     </div>
//   );
// }

// export default Grid;