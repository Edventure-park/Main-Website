// components/CompleteProgramPage.tsx
import React from 'react'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer';

import ProgramInfo from './ProgramInfo'
import DarkImageGrid from './DarkPostGrid';

interface ProgramInfoProps {
  slug: string;
  Heading: string;
  SubHeading: string;
  Paragraph: string;
  lists: string[];
}

const programData: Record<string, ProgramInfoProps> = {
  preincubation: {
    slug: 'preincubation',
    Heading: 'Pre-Incubation Program',
    SubHeading: '16-week long structured and intensive program',
    Paragraph: 'We work with student entrepreneurs, taking them through the fundamental tracks of building a company, organizing exclusive sessions/workshops, and giving them all the support & guidance they need for them to take their idea to the next level. Students can experiment with their ideas and have an opportunity of starting their own companies while still in college.',
    lists: ['Pre-Incubation Program','Incubation Program','Campus Leadership Program','Incubation Manager Fellowship','Internships','Founders Friday','Founders Fest','EdTalk','Builders Sunday']
  },
  incubation: {
    slug: 'incubation',
    Heading: 'Incubation Program',
    SubHeading: '32-week-long intensive and tailor-made program for early stage startups focusing on achieving PMF',
    Paragraph: 'After the Pre-Incubation Program, selected companies move onto the Incubation Program. It primarily focuses on figuring out the product market fit of the start-up. After figuring out the PMF, it’s about scaling up the company and getting investors from diverse industries onboard.',
    lists: ['Pre-Incubation Program','Incubation Program','Campus Leadership Program','Incubation Manager Fellowship','Internships','Founders Friday','Founders Fest','EdTalk','Builders Sunday']
  },
  campusleadership: {
    slug: 'campusleadership',
    Heading: 'Campus Leadership Program',
    SubHeading: 'Empowering student leaders to drive innovation on campus',
    Paragraph: 'The Campus Leadership Program identifies and nurtures student leaders who can champion entrepreneurship and innovation within their college campuses. These campus leads organize events, workshops, and awareness programs to foster a culture of entrepreneurship among their peers.',
    lists: ['Pre-Incubation Program','Incubation Program','Campus Leadership Program','Incubation Manager Fellowship','Internships','Founders Friday','Founders Fest','EdTalk','Builders Sunday']
  },
  fellowship: {
    slug: 'fellowship',
    Heading: 'Incubation Manager Fellowship',
    SubHeading: 'Training the next generation of startup ecosystem builders',
    Paragraph: 'The Incubation Manager Fellowship is designed to train individuals who want to build and manage startup incubators. Fellows learn the nuances of startup mentoring, program design, community building, and ecosystem development through hands-on experience and structured learning.',
    lists: ['Pre-Incubation Program','Incubation Program','Campus Leadership Program','Incubation Manager Fellowship','Internships','Founders Friday','Founders Fest','EdTalk','Builders Sunday']
  },
  internships: {
    slug: 'internships',
    Heading: 'Internships',
    SubHeading: 'Real-world startup experience for students',
    Paragraph: 'Our internship program offers students the opportunity to work directly with startups in our ecosystem. Interns gain valuable hands-on experience in various domains including technology, marketing, operations, and business development while contributing to the growth of early-stage startups.',
    lists: ['Pre-Incubation Program','Incubation Program','Campus Leadership Program','Incubation Manager Fellowship','Internships','Founders Friday','Founders Fest','EdTalk','Builders Sunday']
  },
  edtalk: {
    slug: 'edtalk',
    Heading: 'EdTalk',
    SubHeading: 'Exclusive program for Campus Leads at EdVenture Park',
    Paragraph: 'EdTalk is built upon the foundation of the 3E’s – Experience, Engagement, and Expression. These elements contribute to the growth of self-assurance among Campus Leads, a trait nurtured organically through their regular interactions and discussions.',
    lists: ['Pre-Incubation Program','Incubation Program','Campus Leadership Program','Incubation Manager Fellowship','Internships','Founders Friday','Founders Fest','EdTalk','Builders Sunday']
  },
  builderssunday: {
    slug: 'builderssunday',
    Heading: 'Builders’ Sunday',
    SubHeading: 'India’s Fastest prototyping centre for inquisitive hardware and technology enthusiasts',
    Paragraph: 'These gatherings are designed to create and enhance their practical skills in creation. EdVenture Parks’ Hardware Incubator extends a warm invitation to individuals from diverse educational backgrounds, offering them the chance to refine their hardware expertise.',
    lists: ['Pre-Incubation Program','Incubation Program','Campus Leadership Program','Incubation Manager Fellowship','Internships','Founders Friday','Founders Fest','EdTalk','Builders Sunday']
  },
  foundersfriday: {
    slug: 'foundersfriday',
    Heading: 'Founders’ Friday',
    SubHeading: 'Flagship networking event held on the first Friday of every month',
    Paragraph: 'It serves as a "No-Agenda Networking Event" bringing together Founders, Entrepreneurs, Investors, and other key members of the startup ecosystem. The event is a tribute to founders, celebrating their endeavors, challenges, and aspirations. Founders’ Friday focuses on networking, emphasizing the importance of connections in the startup world.',
    lists: ['Pre-Incubation Program','Incubation Program','Campus Leadership Program','Incubation Manager Fellowship','Internships','Founders Friday','Founders Fest','EdTalk','Builders Sunday']
  },
  foundersfest: {
    slug: 'foundersfest',
    Heading: 'Founders Fest',
    SubHeading: 'Annual celebration of entrepreneurship and innovation',
    Paragraph: 'Founders Fest is our annual flagship event that brings together the entire startup ecosystem for a day of learning, networking, and celebration. The event features keynote speeches from successful entrepreneurs, panel discussions, startup showcases, and interactive workshops designed to inspire and educate aspiring founders.',
    lists: ['Pre-Incubation Program','Incubation Program','Campus Leadership Program','Incubation Manager Fellowship','Internships','Founders Friday','Founders Fest','EdTalk','Builders Sunday']
  }
}

  const imageData = {
    title: "Founders' Friday × Business Showers",
    images: [
      {
        url: "/assets/LeadsBanner.jpg",
        alt: "Group of founders cutting ribbon"
      },
      {
        url: "/assets/LeadsBanner.jpg",
        alt: "Audience at business event"
      },
      {
        url: "/assets/LeadsBanner.jpg",
        alt: "Speaker presenting at event"
      },
      {
        url: "/assets/LeadsBanner.jpg",
        alt: "Celebration cake with HURON logo"
      },
      {
        url: "/assets/LeadsBanner.jpg",
        alt: "Speaker and audience at event"
      }
    ]
  };

function CompleteProgramPage({ slug }: { slug: string }) {
  const programInfo = programData[slug];

  if (!programInfo) {
    return <div>Program not found or loading...</div>;
  }

  return (
    <>
      <Navbar currentPage="programs" />
      <ProgramInfo ProgramInfoData={programInfo} />
      {/* {programInfo.slug === 'edtalk'} */}
      <div className="container mx-auto">
        <DarkImageGrid 
        title={imageData.title} 
        images={imageData.images} 
      />
      </div>
      <Footer />
    </>
  );
}

export default CompleteProgramPage;
