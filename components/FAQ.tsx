"use client";
import Image from 'next/image';
import React, { useState } from 'react'

function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);
    const toggleAnswer = (index:any) => {
        setOpenIndex(openIndex === index ? null : index);
      };
    
  return (
    <div className="flex w-full max-w-5xl items-start gap-6 p-4">
      <div className="flex-1">
        <h1 className="text-[clamp(1rem,5vw,3rem)] font-black uppercase leading-snug tracking-tight text-neutral-900">
          Frequently asked questions
        </h1>
        <div className="mx-auto w-full max-w-3xl p-6">
          <div className="space-y-4">
            <div className="rounded-lg border border-neutral-200 px-6 py-4">
              <button
                  className="w-full text-left text-xl font-semibold hover:no-underline"
                  onClick={() => toggleAnswer(1)}
                >
                What is the difference between a UI and UX Designer?
              </button>
              {openIndex === 1 && (
              <div className="mt-2 text-neutral-600">Coming SOON</div>
                )}
            </div>
            <div className="rounded-lg border border-neutral-200 px-6 py-4">
              <button
                  className="w-full text-left text-xl font-semibold hover:no-underline"
                  onClick={() => toggleAnswer(2)}
                >
                How to become a UI designer?
              </button>
              {openIndex === 2 && (
              <div className="mt-2 text-neutral-600">Coming SOON</div>
                )}
            </div>
            <div className="rounded-lg border border-neutral-200 px-6 py-4">
              <button
                  className="w-full text-left text-xl font-semibold hover:no-underline"
                  onClick={() => toggleAnswer(3)}
                >
                What is the best UI design tool?
              </button>
              {openIndex === 3 && (
              <div className="mt-2 text-neutral-600">Coming SOON</div>
                )}
            </div>
            <div className="rounded-lg border border-neutral-200 px-6 py-4">
              <button
                  className="w-full text-left text-xl font-semibold hover:no-underline"
                  onClick={() => toggleAnswer(4)}
                >
                What is the best place to learn Figma?
              </button>
              {openIndex === 4 && (
              <div className="mt-2 text-neutral-600">Coming SOON</div>
                )}
            </div>
            <div className="rounded-lg border border-neutral-200 px-6 py-4">
              <button
                  className="w-full text-left text-xl font-semibold hover:no-underline"
                  onClick={() => toggleAnswer(5)}
                >
                Should designers code?
              </button>
              {openIndex === 5 && (
              <div className="mt-2 text-neutral-600">Coming SOON</div>
                )}
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto flex flex-col items-center md:items-start">
        <div className="flex flex-col items-center text-center">
          <Image
              width={500}
              height={500}
              src={"/assets/EVP_logo.png"}
              alt="EVP Logo"
              className="mb-4 h-auto w-[200px]"
            />
          <p className="text-xl font-semibold text-neutral-700">Fly with</p>
          <p className="text-3xl font-extrabold text-neutral-900">
            Edventure Park
          </p>
        </div>
      </div>
    </div>
  )
}

export default FAQ
