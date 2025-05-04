"use client";
import Image from 'next/image';
import React, { useState } from 'react'

function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);
    
    const faqData = [
        {
            id: 1,
            question: "What is the difference between a UI and UX Designer?",
            answer: "UI (User Interface) designers focus on the visual elements of a product including layout, colors, typography, and interactive elements. UX (User Experience) designers focus on the overall feel of the experience and how users interact with a product. While UI is about how things look, UX is about how things work and the overall user journey."
        },
        {
            id: 2,
            question: "How to become a UI designer?",
            answer: "To become a UI designer: 1) Learn design fundamentals like color theory, typography, and layout. 2) Master design tools like Figma, Adobe XD, or Sketch. 3) Build a portfolio showcasing your projects. 4) Take online courses or attend bootcamps. 5) Network with other designers and seek mentorship. 6) Practice regularly by redesigning existing interfaces or creating new ones."
        },
        {
            id: 3,
            question: "What is the best UI design tool?",
            answer: "Figma has emerged as the industry-leading UI design tool due to its collaborative features, cloud-based workflow, and versatility. Other excellent options include Adobe XD, Sketch, and InVision Studio. The 'best' tool often depends on your specific needs, team requirements, and personal preference."
        },
        {
            id: 4,
            question: "What is the best place to learn Figma?",
            answer: "Great resources to learn Figma include: 1) Figma's official tutorials and documentation. 2) YouTube channels like DesignCourse and Figma's own channel. 3) Platforms like Udemy, Coursera, and LinkedIn Learning. 4) Figma community files where you can explore how others build their designs. 5) Figma's Discord community for direct help and networking."
        },
        {
            id: 5,
            question: "Should designers code?",
            answer: "While not mandatory, designers who understand coding basics often create more implementable designs and communicate better with developers. Learning HTML, CSS, and basic JavaScript can help designers understand technical constraints, create more realistic prototypes, and bridge the gap between design and development. However, specialization in design skills remains valuable, and the decision to learn code should align with career goals and team needs."
        }
    ];

    const toggleAnswer = (index:any) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    
    return (
      <div className="mx-auto flex w-full max-w-5xl flex-col items-start gap-6 p-4 md:flex-row">
        <div className="w-full flex-1">
          <h1 className="mb-6 text-[clamp(1.5rem,5vw,3rem)] font-black uppercase leading-snug tracking-tight text-neutral-900">
            Frequently asked questions
          </h1>
          <div className="mx-auto w-full max-w-3xl">
            <div className="space-y-4">
              {faqData.map((faq) => (
                <div key={faq.id} className="rounded-lg border border-neutral-200 p-4 transition-all duration-200 hover:border-neutral-300 sm:px-6">
                  <button
                                    className="flex w-full items-center justify-between text-left text-lg font-semibold hover:no-underline sm:text-xl"
                                    onClick={() => toggleAnswer(faq.id)}
                                >
                    <span>{faq.question}</span>
                    <span className="ml-2 text-xl">
                      {openIndex === faq.id ? '−' : '+'}
                    </span>
                  </button>
                  {openIndex === faq.id && (
                    <div className="mt-3 text-sm text-neutral-600 sm:text-base">{faq.answer}</div>
                                )}
                </div>
                        ))}
            </div>
          </div>
        </div>
        <div className="mx-auto mt-8 flex flex-col items-center md:mt-0 md:items-start md:justify-center">
          <div className="flex flex-col items-center text-center">
            <Image
                        width={500}
                        height={500}
                        src={"/assets/EVP_logo.png"}
                        alt="EVP Logo"
                        className="mb-4 h-auto w-[150px] sm:w-[200px]"
                    />
            <p className="text-lg font-semibold text-neutral-700 sm:text-xl">Fly with</p>
            <p className="text-2xl font-extrabold text-neutral-900 sm:text-3xl">
              Edventure Park
            </p>
          </div>
        </div>
      </div>
    )
}

export default FAQ