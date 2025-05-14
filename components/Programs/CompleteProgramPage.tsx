// components/CompleteProgramPage.tsx
import React from 'react'

import ProgramInfo from './ProgramInfo'

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
    lists: ['hello','idiot','why u','so dumb ','u know that right?','u r dumb']
  },
  incubation: {
    slug: 'incubation',
    Heading: 'Incubation Program',
    SubHeading: '32-week-long intensive and tailor-made program for early stage startups focusing on achieving PMF',
    Paragraph: 'After the Pre-Incubation Program, selected companies move onto the Incubation Program. It primarily focuses on figuring out the product market fit of the start-up. After figuring out the PMF, it’s about scaling up the company and getting investors from diverse industries onboard.',
    lists: ['hello','idiot','why u','so dumb ','u know that right?','u r dumb']
  },
  edtalk: {
    slug: 'edtalk',
    Heading: 'EdTalk',
    SubHeading: 'Exclusive program for Campus Leads at EdVenture Park',
    Paragraph: 'EdTalk is built upon the foundation of the 3E’s – Experience, Engagement, and Expression. These elements contribute to the growth of self-assurance among Campus Leads, a trait nurtured organically through their regular interactions and discussions.',
    lists: ['hello','idiot','why u','so dumb ','u know that right?','u r dumb']
  },
  builderssunday: {
    slug: 'builderssunday',
    Heading: 'Builders’ Sunday',
    SubHeading: 'India’s Fastest prototyping centre for inquisitive hardware and technology enthusiasts',
    Paragraph: 'These gatherings are designed to create and enhance their practical skills in creation. EdVenture Parks’ Hardware Incubator extends a warm invitation to individuals from diverse educational backgrounds, offering them the chance to refine their hardware expertise.',
    lists: ['hello','idiot','why u','so dumb ','u know that right?','u r dumb']
  },
  foundersfriday: {
    slug: 'foundersfriday',
    Heading: 'Founders’ Friday',
    SubHeading: 'Flagship networking event held on the first Friday of every month',
    Paragraph: 'It serves as a "No-Agenda Networking Event" bringing together Founders, Entrepreneurs, Investors, and other key members of the startup ecosystem. The event is a tribute to founders, celebrating their endeavors, challenges, and aspirations. Founders’ Friday focuses on networking, emphasizing the importance of connections in the startup world.',
    lists: ['hello','idiot','why u','so dumb ','u know that right?','u r dumb']
  }
}

function CompleteProgramPage({ slug }: { slug: string }) {
  const programInfo = programData[slug];

  if (!programInfo) {
    return <div>Program not found or loading...</div>;
  }

  return (
    <div>
      <ProgramInfo ProgramInfoData={programInfo} />
    </div>
  );
}

export default CompleteProgramPage;
