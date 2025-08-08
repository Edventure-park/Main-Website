"use client";
import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import { Search, ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';

interface FAQItem {
  id: number; // Making this required for all items
  question: string;
  answer: string;
  category?: string;
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const endOfFaqsRef = useRef<HTMLDivElement>(null);
  
  const faqData: FAQItem[] = [
    {
      id: 1,
      question: "Can people join or apply with any idea?",
      answer: `Sure, You can apply with whatever idea you have. And We will try to add value wherever we can.
              Startup = AN ELEMENT OF INNOVATION IN WHATEVER YOU CHOOSE TO DO.`,
      category: "Application Process"
    },
    {
      id: 2,
      question: "Can I pitch Two ideas? Can we apply multiple ideas? Or Two business models?",
      answer: `When You are applying for the pre-incubation program, you'll have to attach a presentation explaining your idea in order to submit the application and while preparing your presentation, You can mention all the ideas that you have. 
              You don't have to apply multiple times. One application will do. 
              About business models, please make sure you provide both the business models in a single presentation while submitting the application.`,
      category: "Application Process"
    },
    {
      id: 3,
      question: "What is a cohort?",
      answer:`Cohort means a batch of people - a Group.
              In each cohort, We select 25 startups and help them take their idea to the next level.`,
      category: "Program Structure" 
    },
    {
      id: 4,
      question: "What if I don't have an MVP/Minimum viable product. Can I still apply?",
      answer: `It's absolutely fine. We don't expect a startup applying for the Pre-Incubation program to have an MVP.
              Infact, the Maximum number of Startups at Edventure park started with just an idea and We helped them with building their MVPs and iterating it.`,
      category: "Application Process"
    },
    {
      id: 5,
      question: "What happens to the people whose startup doesn't work?",
      answer: `Building a Startup is not easy.
              If you give your 100% and if the start-up still doesn't work (god forbid), You would have still learned so much that your skill set will be way ahead of people of your age and that experience counts. 
              Build another company or Be someone with whom the industry would love to work, It's all the Mindset!`,
      category: "Program Benefits"
    },
    {
      id: 6,
      question: "What is the culture like at EdVenture Park?",
      answer: `Work Hard, Respect Everybody, Judge Nobody and Have a lot of fun!

        GO FAR, DOET - Flexibility : Accountability : Responsibility, Delegate : Ownership : Empower : Trust`,
      category: "About EdVenture Park"
    },
    {
      id: 7,
      question: "Does EdVenture Park deal only with incubation? Is it necessary to have an idea to work with EdVenture Park?",
      answer: `As We are a startup incubator, Ideas are important for you to make the most out of the pre-incubation program but it is not necessary to have an idea to work with Us, you'll develop that mindset when you sit around like-minded people. Having said that, We also bring in renowned Entrepreneurs from the industry and host high quality open events for the general public.`,
      category: "About EdVenture Park"
    },
    {
      id: 8,
      question: "Can a Graduate/Non-student apply?",
      answer: `Of Course! We are student-focused, not student-only.`,
      category: "Eligibility"
    },
    {
      id: 9,
      question: "What happens at Edventure park? What should anyone come to EdVenture Park?",
      answer: `Our Conversations revolve around Solving Problems, Building Products, adding innovation, adding value, moving the economic needle of India and how we can maximise our contribution for the growth of our nation. 
        This is one of the reasons for You to be surrounded by such people or for you to take your idea/startup to the next level.`,
      category: "About EdVenture Park"
    },
    {
      id: 10,
      question: "Is it compulsory for one to upload a video(URL link)?",
      answer: `Yes it is. And the reason is that we want to see you talking about your idea and explaining it to us in the best way possible so we can see it through your eyes.`,
      category: "Application Process"
    },
    {
      id: 11,
      question: "What is expected from the cohorts?",
      answer: `Passion. Commitment. Discipline.
        We don't care about your year/branch/stream/attendance/DEGREE. That doesn't define you.`,
      category: "Program Structure"
    },
    {
      id: 12,
      question: "If we don't have any startup idea but want to join EdVenture Park, Can we join?",
      answer: `If you are a student, you can work with us as a Campus Lead.
        Along with that, We do welcome you for the meetups/events/workshops we organise for you. We'll keep you updated on our social media platforms. So follow us there :)`,
      category: "Eligibility"
    },
    {
      id: 13,
      question: "I am not a tech guy and I don't know coding. Can I still apply?",
      answer: `Yes, You can. You don't need any prior coding skills to proceed with the idea. You will learn it eventually with us, if you wish or We will provide you with technical mentors :)`,
      category: "Eligibility"
    },
    {
      id: 14,
      question: "I don't have any team members, I am alone. Can I apply?",
      answer: `Sure, You can. You can be the solo founder of your company. Works both ways, even if you have a team`,
      category: "Eligibility"
    }
  ];

  // Extract unique categories
  const categories = ['All', ...Array.from(new Set(faqData.map(faq => faq.category || 'Other').filter(Boolean)))];

  // Filter FAQs based on search term and active category
  const filteredFaqs = faqData.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
    
return matchesSearch && matchesCategory;
  });

  const toggleAnswer = (id: number) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  // Check if we've reached the end of FAQs for animating logo
  const [showEndContent, setShowEndContent] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowEndContent(true);
        } else {
          setShowEndContent(false);
        }
      },
      { threshold: 0.1 }
    );

    if (endOfFaqsRef.current) {
      observer.observe(endOfFaqsRef.current);
    }

    return () => {
      if (endOfFaqsRef.current) {
        observer.unobserve(endOfFaqsRef.current);
      }
    };
  }, []);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 md:py-12">
      <h1 className="mb-8 text-center text-[clamp(1.75rem,5vw,3rem)] font-black uppercase leading-tight tracking-tight text-neutral-900">
        Frequently Asked Questions
      </h1>
      {/* Search and Filter Controls */}
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="relative w-full md:w-64">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Search className="size-5 text-neutral-500" />
          </div>
          <input
            type="text"
            className="block w-full rounded-lg border border-neutral-300 py-2.5 pl-10 pr-3 transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            placeholder="Search FAQs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-3 py-1.5 text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      {/* FAQs Section */}
      <div className="mb-12 space-y-4">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq) => (
            <div
              key={faq.id}
              className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <button
                className="flex w-full items-center justify-between px-5 py-4 text-left"
                onClick={() => toggleAnswer(faq.id)}
                aria-expanded={openIndex === faq.id}
              >
                <h3 className="text-lg font-semibold text-neutral-800">{faq.question}</h3>
                <span className="shrink-0 text-neutral-500">
                  {openIndex === faq.id ? (
                    <ChevronUp className="size-5" />
                  ) : (
                    <ChevronDown className="size-5" />
                  )}
                </span>
              </button>
              <div 
                className={`overflow-hidden px-5 transition-all duration-300 ${
                  openIndex === faq.id 
                    ? 'max-h-96 pb-5 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="prose prose-sm max-w-none whitespace-pre-line text-neutral-600">
                  {faq.answer}
                </div>
                {faq.category && (
                  <div className="mt-3 inline-block rounded-full bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-600">
                    {faq.category}
                  </div>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="rounded-lg border border-dashed border-neutral-300 bg-neutral-50 py-8 text-center">
            <p className="text-neutral-600">No FAQs match your search or filter criteria.</p>
            <button 
              className="mt-3 font-medium text-blue-600 hover:text-blue-800"
              onClick={() => {
                setSearchTerm('');
                setActiveCategory('All');
              }}
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
      {/* End of FAQs marker */}
      <div ref={endOfFaqsRef} className="h-1"></div>
      {/* EdVenture Park Section */}
      <div className={`mt-8 flex flex-col items-center transition-all duration-1000${
        showEndContent ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        <div className="mx-auto max-w-md px-4 text-center">
          <Image
            width={640}
            height={740}
            src="/assets/evpNewLogo.png"
            alt="EdVenture Park Logo"
            className="mx-auto h-auto w-60 md:w-72 lg:w-80"
          />
          <p className="mt-4 text-xl font-semibold text-neutral-700">Fly with</p>
          <h2 className="mt-1 text-3xl font-extrabold text-neutral-900 md:text-4xl">
            EdVenture Park
          </h2>
          <p className="mt-3 text-neutral-600">
            Take your idea to the next level with our pre-incubation program and supportive community.
          </p>
          <button className="mt-6 rounded-full bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700">
            <Link href={"https://edventurepark.incubators.app/register"}>
              Apply Now
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default FAQ;