import React from "react";

function Culture() {
  return (
    <section className="w-full bg-white px-4 py-12">
      <div className="mx-4 mb-12 md:mx-10 lg:mx-20">
        <h2 className="mb-6 text-3xl font-[Black_Mango] tracking-tight md:text-3xl lg:text-4xl xl:text-5xl">
          EdVenture Park's Culture Formula
        </h2>
        <div className="flex flex-col justify-center gap-8 sm:flex-row">
          <div className="flex skew-x-[-10deg] items-center justify-center bg-green-500 p-6 text-center text-xl text-white shadow-xl sm:w-[300px]">
            The more you do, the more you do
          </div>
          <div className="flex items-center justify-center bg-pink-700 p-6 text-center text-xl text-white shadow-xl sm:w-[300px]">
            Reject Privilege
          </div>
          <div className="flex items-center justify-center bg-yellow-600 p-6 text-center text-xl text-white shadow-xl sm:w-[300px]">
            Great ideas can come from anywhere
          </div>
          <div className="flex skew-x-[10deg] items-center justify-center bg-orange-800 p-6 text-center text-xl text-white shadow-xl sm:w-[300px]">
            Earn the right to question
          </div>
        </div>
      </div>
    </section>
  );
}

export default Culture;
