import Image from "next/image";

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

export default function Home() {
  return (
    <>
      <Navbar currentPage="home"/>
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
      <div className="flex w-full flex-col items-center bg-emerald-600 py-24">
        <h2 className="font-poppins max-w-3xl px-4 text-center text-2xl leading-tight text-black sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
          <span className="font-bold">We fund great ideas.</span>
          <br />
          <span className="text-5xl">Let yours be the next!</span>
        </h2>
      </div>
      <Footer/>
    </>
  );
}
