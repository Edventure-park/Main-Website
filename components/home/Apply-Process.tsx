import Image from 'next/image'
import React from 'react'

const rocket = '/assets/rocket.png'
function Apply_Process() {
  return (
    <div>
      <center>
        <p className="text-8xl font-semibold">How to apply</p>
      </center>
      <div className="mt-20 flex items-center justify-center gap-12">
        <div className="mb-4 flex h-64 w-80 flex-col items-center justify-center rounded-lg border-4 border-black bg-emerald-600 p-4">
          <strong className="text-4xl">Step 1</strong>
          <p className="mt-2 text-center text-2xl">Fill online application</p>
        </div>
        <div className="flex h-64 w-80 flex-col items-center justify-center rounded-lg border-4 border-black bg-white text-black">
          <strong className="text-4xl">Step 2</strong>
          <p className="mt-2 text-center text-2xl">Interview rounds</p>
        </div>
        <div className="mb-4 flex h-64 w-80 flex-col items-center justify-center rounded-lg border-4 border-black bg-emerald-600 p-4">
          <strong className="text-4xl">Step 3</strong>
          <p className="mt-2 text-center text-2xl">Selection</p>
        </div>
      </div>
      <center>
        <Image
          width={500}
          height={500}
          src={rocket}
          alt="Rocket"
          className="mb-8 w-[300px] sm:w-[600px] md:w-[800px] "
        />
      </center>
    </div>
  )
}

export default Apply_Process
