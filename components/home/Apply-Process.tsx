import Image from 'next/image'
import React from 'react'

const rocket = '/assets/rocket.png'

function Apply_Process() {
  return (
    <div className="px-4 py-10">
      <div className="flex justify-center">
        <p className="text-center text-4xl font-semibold sm:text-6xl md:text-8xl">How to apply</p>
      </div>
      <div className="mt-16 flex flex-wrap items-center justify-center gap-8">
        <div className="flex w-full max-w-xs flex-col items-center justify-center rounded-lg border-4 border-black bg-emerald-600 p-6 sm:w-80">
          <strong className="text-2xl sm:text-3xl md:text-4xl">Step 1</strong>
          <p className="mt-2 text-center text-lg sm:text-xl md:text-2xl">Fill online application</p>
        </div>
        <div className="flex w-full max-w-xs flex-col items-center justify-center rounded-lg border-4 border-black bg-white p-6 text-black sm:w-80">
          <strong className="text-2xl sm:text-3xl md:text-4xl">Step 2</strong>
          <p className="mt-2 text-center text-lg sm:text-xl md:text-2xl">Interview rounds</p>
        </div>
        <div className="flex w-full max-w-xs flex-col items-center justify-center rounded-lg border-4 border-black bg-emerald-600 p-6 sm:w-80">
          <strong className="text-2xl sm:text-3xl md:text-4xl">Step 3</strong>
          <p className="mt-2 text-center text-lg sm:text-xl md:text-2xl">Selection</p>
        </div>
      </div>
      <div className="mt-12 flex justify-center">
        <Image
          width={800}
          height={800}
          src={rocket}
          alt="Rocket"
          className="w-48 sm:w-72 md:w-[600px] lg:w-[800px]"
        />
      </div>
    </div>
  )
}

export default Apply_Process
