import React from "react";

function Culture() {
  return (
    <section className="w-full bg-white px-4 py-8">
      <div className="mx-4 mb-8 md:mx-10 lg:mx-20">
        <h2 className="mb-6 text-3xl font-[Black_Mango] tracking-tight md:text-3xl lg:text-4xl xl:text-5xl">
          EdVenture Park's Culture Formula
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {/* First Card */}
          <div className="max-w-[320px] grow skew-y-6 rounded-[20px] bg-green-500 px-8 py-6 text-center text-white">
            The more you do, the more you do
          </div>
          {/* Second Card */}
          <div className="max-w-[320px] grow skew-y-6 rounded-[20px] bg-purple-700 px-8 py-6 text-center text-white">
            Reject Privilege
          </div>
          {/* Third Card */}
          <div className="max-w-[320px] grow skew-y-6 rounded-[20px] bg-yellow-600 px-8 py-6 text-center text-white">
            Great ideas can come from anywhere
          </div>
          {/* Fourth Card */}
          <div className="max-w-[320px] grow skew-y-6 rounded-[20px] bg-orange-600 px-8 py-6 text-center text-white">
            Earn the right to question
          </div>
        </div>
      </div>
    </section>
  );
}

export default Culture;
