import React from "react";
import Image from "next/image";

const AboutUS = () => {
  return (
    <div className="w-full overflow-x-hidden bg-white p-0">
      <div className="items-leftr relative flex w-full max-w-[2811.5px] flex-col justify-start">
        <div className="font-semi-bold mx-6 mb-10 mt-8 text-left text-2xl font-[Black_Mango] leading-tight tracking-tight text-black md:mx-12 md:text-4xl lg:mx-24 lg:text-5xl">
          About Us
        </div>
        <div className="mx-6 text-left md:mx-12 lg:mx-24 ">
          <h2 className="mb-6 text-xl font-[Black_Mango] leading-tight tracking-tight text-black md:text-3xl lg:text-5xl">
            Incubating India - for the World!
          </h2>
          <p className="font-mediumleading-relaxed ont-[Black_Mango] mb-4 text-left text-xl tracking-wide">
            Edventure Park is a student-focused idea stage startup <br />{" "}
            incubator which aims to empower student-led startups <br /> through
            an intensive 4-month pre incubation program.
          </p>
          <Image
            width={500}
            height={500}
            src="/public/assets/colorColage.png"
            alt="Core Team"
            className="mb-4 h-[450px] w-[300px] rounded-lg object-cover md:w-[500px]"
          />
          <p className="mb-4 text-left text-xl font-[Black_Mango] leading-relaxed tracking-wide">
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
        <div className="mx-4 mb-8 md:mx-10 lg:mx-20">
          <h2 className="mb-6 text-3xl font-[Black_Mango] tracking-tight md:text-3xl lg:text-4xl xl:text-5xl">
            The Man Behind It All – Our CEO
          </h2>
          <div className="relative mb-4 ml-auto h-[500px] w-full rounded-[40px] bg-green-600 p-4 md:w-[900px]">
            <div className="flex flex-col items-center md:flex-row">
              <div className="mb-4 w-full md:mb-0 md:mr-4">
                <div className="relative">
                  <Image
                    width={500}
                    height={500}
                    src="/assets/placeholder.jpg"
                    alt="CEO Portrait"
                    className="absolute bottom-0 left-0 size-[400px] translate-x-[-30%] translate-y-[110%] rounded-[20px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-4 mb-8 md:mx-10 lg:mx-20">
          <h2 className="mb-4 text-3xl font-[Black_Mango] md:mb-8 md:text-4xl lg:text-5xl">
            EdVenture Park's Culture Formula
          </h2>
          <div className="flex flex-wrap gap-4">
            <div className="max-w-[320px] grow skew-y-6 rounded-[20px] bg-green-500 px-8 py-6 text-center text-white">
              The more you do, the more you do
            </div>
            <div className="max-w-[320px] grow skew-y-6 rounded-[20px] bg-purple-700 px-8 py-6 text-center text-white">
              Reject Privilege
            </div>
            <div className="max-w-[320px] grow skew-y-6 rounded-[20px] bg-yellow-600 px-8 py-6 text-center text-white">
              Great ideas can come from anywhere
            </div>
            <div className="max-w-[320px] grow skew-y-6 rounded-[20px] bg-orange-600 px-8 py-6 text-center text-white">
              Earn the right to question
            </div>
          </div>
        </div>
        <div className="mx-4 mb-8 md:mx-10 lg:mx-20">
          <h2 className="mb-4 text-3xl font-[Black_Mango] md:mb-8 md:text-4xl lg:text-5xl">
            Board of Directors
          </h2>
          <div className="mx-4 mb-8 md:mx-10 lg:mx-20">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="  flex flex-col items-center">
                <Image 
                  width={500}
                  height={500}
                  src="https://via.placeholder.com/500x450.png?text=Image+Placeholder"
                  alt="Team Member 1"
                  className="h-[450px] w-full rounded-[20px] object-cover"
                />
                <p className="bg-white-900 -mt-5 rounded-[10px] px-40 py-8 text-center text-lg font-medium text-black shadow-md">
                  Member 1
                </p>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  width={500}
                  height={500}
                  src="https://via.placeholder.com/500x450.png?text=Image+Placeholder"
                  alt="Team Member 2"
                  className="h-[450px] w-full rounded-[20px] object-cover"
                />
                <p className="bg-white-900 -mt-5 rounded-[10px] px-40 py-8 text-center text-lg font-medium text-black shadow-md">
                  Member 2
                </p>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  width={500}
                  height={500}
                  src="https://via.placeholder.com/500x450.png?text=Image+Placeholder"
                  alt="Team Member 3"
                  className="h-[450px] w-full rounded-[20px] object-cover"
                />
                <p className="bg-white-900 -mt-5 rounded-[10px] px-40 py-8 text-center text-lg font-medium text-black shadow-md">
                  Member 3
                </p>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  width={500}
                  height={500}
                  src="https://via.placeholder.com/500x450.png?text=Image+Placeholder"
                  alt="Team Member 4"
                  className="h-[450px] w-full rounded-[10px] object-cover"
                />
                <p className="bg-white-900 -mt-5 rounded-[10px] px-40 py-8 text-center text-lg font-medium text-black shadow-md">
                  Member 4
                </p>
              </div>
            </div>
            <div className="flex w-full items-center justify-center bg-white px-4 py-16">
              <h1 className="text-center text-[clamp(6rem,10vw,15rem)] font-black uppercase leading-tight text-neutral-900">
                Raising Unicorns
              </h1>
            </div>
          </div>
          <h2 className="text-shadow-md mb-4 text-4xl font-bold uppercase tracking-widest text-stone-800 md:mb-8 md:text-4xl lg:text-5xl">
            Our Core Team
          </h2>
          <p className="text-left text-xl font-[Black_Mango] leading-relaxed">
            At the heart of EdVenture Park, you`ll find our dedicated Core Team,
            the driving force behind the dynamic <br />
            engine that is EdVenture Park. They take charge of running the
            operations, funding initiatives, and executing our pre-incubation
            program.
          </p>
          <Image
            width={500}
            height={500}
            src="https://via.placeholder.com/500x450.png?text=CEO+Image+Placeholder"
            alt="Core Team"
            className="mb-4 h-[450px] w-[300px] rounded-lg object-cover md:w-[500px]"
          />
        </div>
        <div className="mx-4 mb-8 md:mx-10 lg:mx-20">
          <h2 className="mb-4 text-2xl font-[Black_Mango] md:mb-8 md:text-3xl lg:text-4xl">
            Our Executive Team
          </h2>
          <p className="font-poppins text-left text-xl font-medium leading-relaxed">
            when it comes to exponential growth and taking startups to new
            heights, our X team is the `X` factor. They are the multipliers that
            propel student founders beyound expectations. These creative minds
            bring their expertise to the table whenever it's needed, working
            alongside students founders to help them transform their ideas into
            thriving startups.
          </p>
          <Image
            width={500}
            height={500}
            src="https://via.placeholder.com/500x450.png?text=CEO+Image+Placeholder"
            alt="Core Team"
            className="mb-4 h-[450px] w-[300px] rounded-lg object-cover md:w-[500px]"
          />
          <Image
            width={500}
            height={500}
            src="https://via.placeholder.com/500x450.png?text=CEO+Image+Placeholder"
            alt="Core Team"
            className="mb-4 h-[450px] w-[300px] rounded-lg object-cover md:w-[500px]"
          />
        </div>
        <div className="mx-4 mb-8 md:mx-10 lg:mx-20">
          <h2 className="mb-4 text-2xl font-[Black_Mango] md:mb-8 md:text-3xl lg:text-4xl">
            Our Campus Leads
          </h2>
          <p className="font-poppins text-left text-xl font-medium leading-relaxed">
            Our Campus Leads are the backbone of our community - the CEOs OF
            EdVenture Park within their respective campuses. These students have
            exclusive access to the abundant resources offered by EdVenture
            Park, creating opportunitiesfor them to experiment, learn, and
            thrive.
          </p>
          <Image
            width={500}
            height={500}
            src="https://via.placeholder.com/500x450.png?text=CEO+Image+Placeholder"
            alt="Core Team"
            className="mb-4 h-[450px] w-[300px] rounded-lg object-cover md:w-[500px]"
          />
        </div>
        <div className="flex w-full flex-col items-center bg-emerald-600 py-24">
          <h2 className="font-poppins max-w-4xl text-center text-2xl font-semibold leading-tight text-black sm:text-3xl md:text-5xl lg:text-6xl">
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
