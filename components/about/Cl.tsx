import React from "react";
import Image from "next/image";
import localFont from "next/font/local";

const BlackMangoRegular = localFont({ src: '../../public/fonts/BlackMango/BlackMango-Regular.ttf' })

function Cl({ ctaOnly = false }: { ctaOnly?: boolean }) {
  return (
    <section className="w-full bg-gradient-to-br from-slate-50 via-emerald-50 to-indigo-100 px-0 py-16">
      {!ctaOnly && (
        <div className="mx-auto max-w-6xl">
          <h2 className={`mb-6 bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-left text-4xl font-black text-transparent drop-shadow-xl md:text-5xl lg:text-6xl ${BlackMangoRegular.className}`}>Campus Leads</h2>
          <p className="mx-auto mb-12 max-w-3xl text-left text-xl leading-relaxed text-gray-700 md:text-2xl">
            Our Campus Leads are the backbone of our community – the CEOs of EdVenture Park within their respective campuses. These students have exclusive access to the abundant resources offered by EdVenture Park, creating opportunities for them to experiment, learn, and thrive.
          </p>
          <div className="mx-auto w-full max-w-4xl">
            <div className="relative h-72 w-full overflow-hidden rounded-3xl border border-white/30 bg-white/60 shadow-2xl backdrop-blur-md">
              <Image
                src="/assets/newCls.jpeg"
                alt="Campus Leads Banner"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </div>
        </div>
      )}
      {/* Call to Action */}
      <div className="mt-24 w-full bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 px-4 py-20 shadow-inner">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className={`mb-4 text-3xl font-black text-white drop-shadow-lg md:text-5xl lg:text-6xl ${BlackMangoRegular.className}`}>Become the <span className="rounded-xl bg-white/20 px-4 py-1 text-emerald-700">CEO of<br />EdVenture Park</span> at your campus!</h2>
          <p className="mx-auto max-w-2xl text-lg font-medium text-white/90 md:text-xl">
            Step up as a Campus Lead and unlock exclusive opportunities, resources, and a chance to shape the future of innovation at your university.
          </p>
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSfL0GvBQWWzKDviRllhj-FOT688r2U14qGBWiCLI8d_QMgdaQ/viewform?embedded=true" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-white px-8 py-4 text-lg font-bold text-emerald-700 shadow-lg transition hover:scale-105 hover:bg-emerald-700 hover:text-white"
          >
            Apply Now
          </a>
        </div>
      </div>
    </section>
  );
}

export default Cl;
