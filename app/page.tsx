// import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar"

export default function Home() {
  return (
    <>
      <Navbar currentPage="home"/>
      {/* <FAQ/> */}
      <div className="flex w-full flex-col items-center bg-emerald-600 py-24">
        <h2 className="font-poppins max-w-3xl px-4 text-center text-2xl leading-tight text-black sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
          <span className="font-bold">We fund great ideas.</span>
          <br />
          <span className="text-5xl">Let yours be the next!</span>
        </h2>
      </div>
      <Footer/>
      {/* <div>This is content</div> */}
      {/* <h1>Home Page is here</h1> */}
    </>
  );
}
