import Image from 'next/image';
import React from 'react';

const ai1 = '/assets/home_2.png';
const ai2 = '/assets/home_1.png';

function Incubation_info() {
  return (
    <>
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-3 py-4 md:flex-row">
        {/* Pre-Incubation Card */}
        <div className="relative w-full overflow-hidden rounded-lg md:w-1/2">
          {/* Background */}
          <div className="bg-black">
            <Image
              src={ai1}
              alt="Incubation-Info"
              width={500}
              height={500}
              className="h-auto w-full"
            />
          </div>
          {/* Green label */}
          <div className="absolute inset-y-0 right-0 flex w-20 items-center justify-center bg-green-700 opacity-80">
            <div className="-rotate-90 whitespace-nowrap text-5xl font-bold tracking-wider text-transparent" 
                style={{ 
                  WebkitTextStroke: '2px white'
                }}>
              PRE INCUBATION
            </div>
          </div>
          {/* Text at bottom */}
          <div className="absolute bottom-0 left-0 right-20 p-6 text-white">
            <p className="text-base md:text-lg">
              Pre-Incubation Program Is A 13 Week Long Structure And Is An Intensive Program, Where The Startups Work On Their Ideas And Build Their MVP (Minimum Viable Product) Through A Series Of 8 Tasks And Interactions With The Mentors From The Ecosystem!
            </p>
          </div>
        </div>
        {/* Incubation Card */}
        <div className="relative w-full overflow-hidden rounded-lg md:w-1/2">
          {/* Background */}
          <div className="bg-gray-100">
            <Image
              src={ai2}
              alt="Incubation-Info"
              width={500}
              height={500}
              className="h-auto w-full"
            />
          </div>
          {/* Green label */}
          <div className="absolute inset-y-0 right-0 flex w-20 items-center justify-center bg-green-700 opacity-80">
            <div className="-rotate-90 whitespace-nowrap text-6xl font-bold tracking-wider text-transparent" 
                style={{ 
                  WebkitTextStroke: '2px white'
                }}>
              INCUBATION
            </div>
          </div>
          {/* Text at bottom */}
          <div className="absolute bottom-0 left-0 right-20 p-6 text-white">
            <p className="text-base md:text-lg">
              EdVenture Park's Incubation Program Ensures Startups Find Their Product-Market Fit (PMF) And Then Supports Expansion Through Personalized Strategies And Investor Connections. It's All About Individualized Growth And Securing Investments.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="w-full px-4 py-8">
          <h1 className="w-full text-5xl font-black tracking-tighter text-gray-900 sm:text-6xl md:text-7xl lg:text-9xl" style={{ 
            letterSpacing: '-0.02em', 
            textAlign: 'center', 
            maxWidth: '100%',
            display: 'block'
          }}>
            TURN YOUR IDEAS
          </h1>
        </div>
      </div>
    </>
  );
}
export default Incubation_info;