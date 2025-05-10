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
import LatestBuzz from "@/components/home/LatestBuzz";
import Grid from "@/components/home/Grid";

export default function Home() {
  return (
    <>
      <Navbar currentPage="home"/>
      <div className="w-full">
        <Image 
      src="/assets/heroSection.png" 
      alt="Edventurepark-Aim" 
      width={500} 
      height={500} 
      className="h-auto w-full"
      />
      </div>
      <br />
      <br />
      <Grid/>
      {/* <PostGrid/> */}
      <br />
      <div className="mb-4 bg-emerald-600 p-4">
        <div className="flex flex-col items-center md:flex-row">
          <div className="w-full text-white md:w-1/2">
            <p className="mb-4 text-5xl font-bold md:text-6xl lg:text-7xl">
              450+
            </p>
            <p
              className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl"
              style={{ color: "black" }}
            >
              Student entrepreneurs
            </p>
            <p className="mb-4 text-5xl font-bold md:text-6xl lg:text-7xl">
              9 Million
            </p>
            <p
              className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl"
              style={{ color: "black" }}
            >
              Investment Raised
            </p>
          </div>
        </div>
      </div>
      <Incubation_info/>
      <Founders_Collage/>
      <Apply_Process/>
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
      <LatestBuzz/>
      <Footer/>
      {/* <div>This is content</div> */}
      {/* <h1>Home Page is here</h1> */}
    </>
  );
}