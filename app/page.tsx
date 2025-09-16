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
        <h2 className={`px-4 text-center font-bold text-white ${BlackMangoRegular.className} text-4xl md:text-6xl`}>
          We fund great ideas.
        </h2>
        <p className="mt-2 px-4 text-center text-lg text-white/90 md:text-2xl">Let yours be next!</p>
      </div>
      <Footer/>
    </>
  );
}
