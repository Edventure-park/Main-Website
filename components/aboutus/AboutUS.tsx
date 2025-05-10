import React from "react";
import Image from "next/image";

const AboutUS = () => {
  return (
    <div className="bg-white p-0 w-full overflow-x-hidden">
      <div className="relative flex flex-col items-leftr w-full max-w-[2811.5px] justify-start">
        <div className="mx-6 md:mx-12 lg:mx-24 mt-8 text-left font-semi-bold text-2xl md:text-4xl lg:text-5xl tracking-tight leading-tight text-black mb-10 font-[Black_Mango]">
          About Us
        </div>

        <div className="mx-6 md:mx-12 lg:mx-24 text-left ">
          <h2 className="font-bold text-xl md:text-3xl lg:text-5xl tracking-tight leading-tight text-black mb-6 font-[Black_Mango]">
            Incubating India - for the World!
          </h2>
          <p className="font-mediumleading-relaxed ont-[Black_Mango] text-left text-xl tracking-wide mb-4">
            Edventure Park is a student-focused idea stage startup <br />{" "}
            incubator which aims to empower student-led startups <br /> through
            an intensive 4-month pre incubation program.
          </p>
          <img
            src=".public/assets/colorColage.jpg"
            alt="Core Team"
            className="w-[300px] md:w-[500px] h-[450px] object-cover rounded-lg mb-4"
          />
          <p className="font-medium leading-relaxed font-[Black_Mango] text-left text-xl mb-4 tracking-wide">
            Welcome to EdVenture Park, where student-driven innovation knows no
            limits and where we <br />
            incubate India's brightest ideas for the world. <br />
            Within our walls, students find the freedom to experiment, the
            courage to learn from failures, <br />
            and the support they need to thrive. EdVenture Park isn't just an
            incubator; it's a launchpad for <br />
            the next generation of entrepreneurs.
          </p>
        </div>

        <div className="mx-4 md:mx-10 lg:mx-20 mb-8">
          <h2 className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold tracking-tight mb-6 font-[Black_Mango]">
            The Man Behind It All – Our CEO
          </h2>

          <div className="bg-green-600 p-4 rounded-[40px] mb-4 relative w-full md:w-[900px] h-[500px] ml-auto">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full mb-4 md:mb-0 md:mr-4">
                <div className="relative">
                  <img
                    src="/assets/placeholder.jpg"
                    alt="CEO Portrait"
                    className="w-[400px] h-[400px] object-cover rounded-[20px] absolute left-0 bottom-0 transform translate-x-[-30%] translate-y-[110%]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-4 md:mx-10 lg:mx-20 mb-8">
          <h2 className="font-semibold text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-8 font-[Black_Mango]">
            EdVenture Park's Culture Formula
          </h2>

          <div className="flex flex-wrap gap-4">
            <div className="bg-green-500 text-white text-center py-6 px-8 rounded-[20px] flex-grow max-w-[320px] transform skew-y-6">
              The more you do, the more you do
            </div>
            <div className="bg-purple-700 text-white text-center py-6 px-8 rounded-[20px] flex-grow max-w-[320px] transform skew-y-6">
              Reject Privilege
            </div>
            <div className="bg-yellow-600 text-white text-center py-6 px-8 rounded-[20px] flex-grow max-w-[320px] transform skew-y-6">
              Great ideas can come from anywhere
            </div>
            <div className="bg-orange-600 text-white text-center py-6 px-8 rounded-[20px] flex-grow max-w-[320px] transform skew-y-6">
              Earn the right to question
            </div>
          </div>
        </div>

        <div className="mx-4 md:mx-10 lg:mx-20 mb-8">
          <h2 className="font-semibold text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-8 font-[Black_Mango]">
            Board of Directors
          </h2>
          <div className="mx-4 md:mx-10 lg:mx-20 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="  flex flex-col items-center">
                <img
                  src="https://via.placeholder.com/500x450.png?text=Image+Placeholder"
                  alt="Team Member 1"
                  className="w-full h-[450px] object-cover rounded-[20px]"
                />
                <p className="-mt-5 text-center bg-white-900 text-black px-40 py-8 rounded-[10px] text-lg font-medium shadow-md">
                  Member 1
                </p>
              </div>

              <div className="flex flex-col items-center">
                <img
                  src="https://via.placeholder.com/500x450.png?text=Image+Placeholder"
                  alt="Team Member 2"
                  className="w-full h-[450px] object-cover rounded-[20px]"
                />
                <p className="-mt-5 text-center bg-white-900 text-black px-40 py-8 rounded-[10px] text-lg font-medium shadow-md">
                  Member 2
                </p>
              </div>

              <div className="flex flex-col items-center">
                <img
                  src="https://via.placeholder.com/500x450.png?text=Image+Placeholder"
                  alt="Team Member 3"
                  className="w-full h-[450px] object-cover rounded-[20px]"
                />
                <p className="-mt-5 text-center bg-white-900 text-black px-40 py-8 rounded-[10px] text-lg font-medium shadow-md">
                  Member 3
                </p>
              </div>

              <div className="flex flex-col items-center">
                <img
                  src="https://via.placeholder.com/500x450.png?text=Image+Placeholder"
                  alt="Team Member 4"
                  className="w-full h-[450px] object-cover rounded-[10px]"
                />
                <p className="-mt-5 text-center bg-white-900 text-black px-40 py-8 rounded-[10px] text-lg font-medium shadow-md">
                  Member 4
                </p>
              </div>
            </div>

            <div className="w-full flex justify-center items-center px-4 py-16 bg-white">
              <h1 className="text-[clamp(6rem,10vw,15rem)] font-black leading-tight text-neutral-900 uppercase text-center">
                Raising Unicorns
              </h1>
            </div>
          </div>

          <h2 className="text-4xl md:text-4xl lg:text-5xl mb-4 md:mb-8 text-stone-800 font-bold text-shadow-md tracking-widest uppercase">
            Our Core Team
          </h2>

          <p className="font-bold leading-relaxed font-[Black_Mango] text-left text-xl">
            At the heart of EdVenture Park, you'll find our dedicated Core Team,
            the driving force behind the dynamic <br />
            engine that is EdVenture Park. They take charge of running the
            operations, funding initiatives, and executing our pre-incubation
            program.
          </p>
          <img
            src="https://via.placeholder.com/500x450.png?text=CEO+Image+Placeholder"
            alt="Core Team"
            className="w-[300px] md:w-[500px] h-[450px] object-cover rounded-lg mb-4"
          />
        </div>

        <div className="mx-4 md:mx-10 lg:mx-20 mb-8">
          <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-8 font-[Black_Mango]">
            Our Executive Team
          </h2>
          <p className="font-medium leading-relaxed font-poppins text-left text-xl">
            when it comes to exponential growth and taking startups to new
            heights, our X team is the "X" factor. They are the multipliers that
            propel student founders beyound expectations. These creative minds
            bring their expertise to the table whenever it's needed, working
            alongside students founders to help them transform their ideas into
            thriving startups.
          </p>
          <img
            src="https://via.placeholder.com/500x450.png?text=CEO+Image+Placeholder"
            alt="Core Team"
            className="w-[300px] md:w-[500px] h-[450px] object-cover rounded-lg mb-4"
          />
          <img
            src="https://via.placeholder.com/500x450.png?text=CEO+Image+Placeholder"
            alt="Core Team"
            className="w-[300px] md:w-[500px] h-[450px] object-cover rounded-lg mb-4"
          />
        </div>

        <div className="mx-4 md:mx-10 lg:mx-20 mb-8">
          <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-8 font-[Black_Mango]">
            Our Campus Leads
          </h2>
          <p className="font-medium leading-relaxed font-poppins text-left text-xl">
            Our Campus Leads are the backbone of our community - the CEOs OF
            EdVenture Park within their respective campuses. These students have
            exclusive access to the abundant resources offered by EdVenture
            Park, creating opportunitiesfor them to experiment, learn, and
            thrive.
          </p>
          <img
            src="https://via.placeholder.com/500x450.png?text=CEO+Image+Placeholder"
            alt="Core Team"
            className="w-[300px] md:w-[500px] h-[450px] object-cover rounded-lg mb-4"
          />
        </div>

        <div className="bg-emerald-600 flex flex-col items-center py-24 w-full">
          <h2 className="text-center font-poppins font-semibold text-2xl sm:text-3xl md:text-5xl lg:text-6xl leading-tight text-black max-w-4xl">
            Become the{" "}
            <span className="font-bold">
              CEO
              <br />
              EdVenture Park
            </span>{" "}
            of at your campus!
          </h2>
        </div>
      </div>
    </div>
  );
};

export default AboutUS;
