import React from 'react';
import Link from 'next/link';

// Define program content type
type ProgramContent = {
  title: string;
  description: string;
  duration?: string;
};

// Program data
const programData: Record<string, ProgramContent> = {
  'pre-incubation': {
    title: 'Pre Incubation Program',
    description: 'The Pre Incubation Program is a 16-week long structured and intensive program, where we work with student entrepreneurs, taking them through the fundamental tracks of building a company, organizing exclusive sessions/workshops, and giving them all the support & guidance they need for them to take their idea to the next level. Students can experiment with their ideas and have an opportunity of starting their own companies while still in college.',
    duration: '16-week long'
  },
  'incubation': {
    title: 'Incubation Program',
    description: 'Our Incubation Program provides comprehensive support for startups that have moved beyond the idea stage. We offer mentorship, resources, and networking opportunities to help these ventures scale and succeed in the market.',
    duration: '6-month program'
  },
  'campus-leadership': {
    title: 'Campus Leadership Program',
    description: 'The Campus Leadership Program identifies and nurtures student leaders who can drive innovation and entrepreneurship within their educational institutions. Participants develop leadership skills while promoting startup culture on campus.',
    duration: '3-month program'
  },
  'incubation-manager-fellowship': {
    title: 'Incubation Manager Fellowship',
    description: 'This fellowship trains the next generation of incubation managers who will guide startups through their growth journey. Fellows learn best practices in startup mentorship, program design, and ecosystem building.',
    duration: '4-month fellowship'
  },
  'internships': {
    title: 'Internships',
    description: 'Our internship opportunities allow students to gain hands-on experience working with startups and the incubation team. Interns develop practical skills while contributing to the growth of early-stage companies.',
    duration: 'Flexible duration'
  },
  'founders-friday': {
    title: 'Founders Friday',
    description: 'Founders Friday is our weekly event where entrepreneurs share their journeys, challenges, and insights. It provides a platform for networking, learning, and collaboration among founders.',
    duration: 'Weekly event'
  },
  'founders-fest': {
    title: 'Founders Fest',
    description: 'An annual celebration of entrepreneurship featuring keynote speakers, panel discussions, startup showcases, and networking opportunities. The event brings together the entire startup ecosystem.',
    duration: 'Annual event'
  },
  'i-talks': {
    title: 'i-Talks',
    description: 'i-Talks are inspirational sessions by successful entrepreneurs and industry experts who share their knowledge and experiences to motivate aspiring founders.',
    duration: 'Monthly sessions'
  },
  'builders-sunday': {
    title: 'Builders Sunday',
    description: 'Builders Sunday is a hands-on workshop series where participants work on practical projects, develop prototypes, and learn technical skills essential for building products.',
    duration: 'Bi-weekly workshops'
  },
};

function CompleteProgramPage({ slug }: { slug: string }) {
  // Default to pre-incubation if no slug is provided
  const activeProgram = slug || 'pre-incubation';
  
  // Get current program data
  const currentProgram = programData[activeProgram] || programData['pre-incubation'];

  if (!slug) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex min-h-screen w-full flex-col bg-white md:flex-row">
      {/* Sidebar Navigation */}
      <div className="w-full border-r border-gray-200 bg-white md:w-64">
        <div className="border-b border-gray-200 p-4">
          <h2 className="text-xl font-bold text-gray-800">Our Programs</h2>
        </div>
        <nav className="p-2">
          <ul>
            {Object.entries(programData).map(([key, program]) => (
              <li key={key} className="mb-1">
                <Link 
                  href={`/programs/${key}`}
                  className={`block rounded-md px-4 py-2 ${activeProgram === key ? 'bg-blue-50 font-medium text-blue-600' : 'text-gray-700 hover:bg-gray-100'}`}
                >
                  {program.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {/* Main Content Area */}
      <div className="flex-1 p-6 md:p-8 lg:p-10">
        <h1 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
          {currentProgram.title}
        </h1>     
        <div className="prose max-w-none">
          <p className="text-lg leading-relaxed">
            {currentProgram.title} is a <span className="font-semibold">{currentProgram.duration}</span> {currentProgram.description}
          </p>
          {/* Additional content can be added here based on the selected program */}
          <div className="mt-8">
            {/* Program-specific content would go here */}
            {/* For example: */}
            {activeProgram === 'pre-incubation' && (
              <div className="mt-6">
                <h2 className="mb-4 text-2xl font-semibold">Program Structure</h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="rounded-lg bg-gray-50 p-6">
                    <h3 className="mb-3 text-xl font-medium">Phase 1: Ideation</h3>
                    <p>Explore and refine your business ideas through workshops and mentorship.</p>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-6">
                    <h3 className="mb-3 text-xl font-medium">Phase 2: Validation</h3>
                    <p>Test your assumptions and validate your business model with real customers.</p>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-6">
                    <h3 className="mb-3 text-xl font-medium">Phase 3: Prototyping</h3>
                    <p>Build a minimum viable product (MVP) to demonstrate your solution.</p>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-6">
                    <h3 className="mb-3 text-xl font-medium">Phase 4: Launch</h3>
                    <p>Prepare for market entry and develop a growth strategy for your startup.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompleteProgramPage;
