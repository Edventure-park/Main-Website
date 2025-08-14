import Image from "next/image";
import localFont from "next/font/local";

import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar"
import Incubation_info from "@/components/home/Incubation-Info";
import Apply_Process from "@/components/home/Apply-Process";
import Founders_Collage from "@/components/home/Founders-Collage";
import Headlines from "@/components/home/Headlines";
import Partners from "@/components/home/Partners";
// import PostGrid from "@/components/home/PostGrid";
import { What_To_Expect } from "@/components/home/What-To-Expect";
// import LatestBuzz from "@/components/home/LatestBuzz";
import Grid from "@/components/home/Grid";
import DynamicRing from "@/components/DynamicRing";
import NumbersHeadline from "@/components/home/NumbersHeadline";
import MobileCompanySearch from "@/components/home/MobileCompanySearch";

const BlackMangoRegular = localFont({ src: "../public/fonts/BlackMango/BlackMango-Regular.ttf" });

export default function Home() {
  return (
    <>
      <Navbar currentPage="home"/>
      <MobileCompanySearch/>
      <div className="hidden md:block">
        <DynamicRing />
      </div>
      <div className="block md:hidden">
        <Image
          src="/hero-static-image.png" 
          alt="Static Ring"
          width={600}
          height={400}
          className="mx-auto"
        />
      </div>
      <br />
      <br />
      <Grid/>
      <br />
      <NumbersHeadline/>
      <Incubation_info/>
      <Founders_Collage/>
      <Apply_Process/>
      <br/>
      <What_To_Expect/>
      <Partners/>
      <Headlines/>
      <FAQ/>
      <div className="relative flex w-full flex-col items-center bg-gradient-to-br from-emerald-500 via-[#169D53] to-[#0e7c40] py-28">
        <h2 className={`max-w-5xl px-4 text-center font-black leading-[0.85] tracking-tight drop-shadow-2xl ${BlackMangoRegular.className}`}>
          <span className="block text-[clamp(1.75rem,4.5vw,3rem)] text-white/95">We</span>
          <span className="relative z-10 -mt-2 block bg-gradient-to-b from-white to-emerald-100 bg-clip-text text-[clamp(3rem,11vw,7.5rem)] text-transparent">
            fund
          </span>
          <span className="relative -mt-3 block text-[clamp(2.75rem,9vw,7rem)]">
            <span className="bg-gradient-to-r from-white via-emerald-50 to-white bg-clip-text text-transparent">great</span>
            <span className="ml-3 align-baseline text-white/95">ideas.</span>
          </span>
        </h2>
      </div>
      <Footer/>
    </>
  );
}
