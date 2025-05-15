import React from 'react'

function GreenBanner({ bannerInfo }: { 
  bannerInfo: {
    title: string,
    subtitle: string, 
    cta: string,
    ctaLink: string
  }
}) {
  return (
    <div className="flex w-full flex-col items-center justify-center bg-green-500 px-4 py-8">
      <h1 className="mb-2 text-center text-2xl font-bold text-black md:text-3xl">
        {bannerInfo.title}
      </h1>
      <p className="mb-6 text-center text-xl text-black md:text-2xl">
        {bannerInfo.subtitle}
      </p>
      <a 
        href={bannerInfo.ctaLink}
        className="rounded bg-white px-6 py-2 text-black transition-colors hover:bg-gray-100"
      >
        {bannerInfo.cta}
      </a>
    </div>
  )
}

export default GreenBanner;