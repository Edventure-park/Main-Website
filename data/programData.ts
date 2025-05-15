// data/programsData.ts
export type ProgramSlug = 'preincubation' | 'incubation' | 'edtalk' | 'builderssunday' | 'foundersfriday' | 'campusleadership' | 'fellowship' | 'internships' | 'foundersfest';

export interface ProgramData {
  slug: ProgramSlug;
  heading: string;
  subHeading: string;
  paragraph: string;
  lists: string[];
  banner: {
    title: string;
    subtitle: string;
    cta: string;
    ctaLink: string;
  };
  gallery: {
    title: string;
    images: {
      url: string;
      alt: string;
    }[];
  };
  // Add any additional fields needed for future components
}

const programsData: Record<ProgramSlug, ProgramData> = {
  preincubation: {
    slug: 'preincubation',
    heading: 'Pre-Incubation Program',
    subHeading: '16-week long structured and intensive program',
    paragraph: 'We work with student entrepreneurs, taking them through the fundamental tracks of building a company, organizing exclusive sessions/workshops, and giving them all the support & guidance they need for them to take their idea to the next level. Students can experiment with their ideas and have an opportunity of starting their own companies while still in college.',
    lists: ['Pre-Incubation Program', 'Incubation Program', 'Campus Leadership Program', 'Incubation Manager Fellowship', 'Internships', 'Founders Friday', 'Founders Fest', 'EdTalk', 'Builders Sunday'],
    banner: {
      title: "Want to join our Pre-Incubation Program?",
      subtitle: "Apply for the next cohort",
      cta: "Apply Now",
      ctaLink: "/apply/preincubation"
    },
    gallery: {
      title: "Pre-Incubation Program Gallery",
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
    }
  },
  incubation: {
    slug: 'incubation',
    heading: 'Incubation Program',
    subHeading: '32-week-long intensive and tailor-made program for early stage startups focusing on achieving PMF',
    paragraph: 'After the Pre-Incubation Program, selected companies move onto the Incubation Program. It primarily focuses on figuring out the product market fit of the start-up. After figuring out the PMF, it\'s about scaling up the company and getting investors from diverse industries onboard.',
    lists: ['Pre-Incubation Program', 'Incubation Program', 'Campus Leadership Program', 'Incubation Manager Fellowship', 'Internships', 'Founders Friday', 'Founders Fest', 'EdTalk', 'Builders Sunday'],
    banner: {
      title: "Ready to scale your startup?",
      subtitle: "Join our Incubation Program",
      cta: "Submit Application",
      ctaLink: "/apply/incubation"
    },
    gallery: {
      title: "Incubation Program Gallery",
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
    }
  },
  campusleadership: {
    slug: 'campusleadership',
    heading: 'Campus Leadership Program',
    subHeading: 'Empowering student leaders to drive innovation on campus',
    paragraph: 'The Campus Leadership Program identifies and nurtures student leaders who can champion entrepreneurship and innovation within their college campuses. These campus leads organize events, workshops, and awareness programs to foster a culture of entrepreneurship among their peers.',
    lists: ['Pre-Incubation Program', 'Incubation Program', 'Campus Leadership Program', 'Incubation Manager Fellowship', 'Internships', 'Founders Friday', 'Founders Fest', 'EdTalk', 'Builders Sunday'],
    banner: {
      title: "Want to be a part of these Exclusive Discussions?",
      subtitle: "Join as a Campus Lead",
      cta: "Apply Now",
      ctaLink: "/apply/campus-lead"
    },
    gallery: {
      title: "Campus Leaders",
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
    }
  },
  fellowship: {
    slug: 'fellowship',
    heading: 'Incubation Manager Fellowship',
    subHeading: 'Training the next generation of startup ecosystem builders',
    paragraph: 'The Incubation Manager Fellowship is designed to train individuals who want to build and manage startup incubators. Fellows learn the nuances of startup mentoring, program design, community building, and ecosystem development through hands-on experience and structured learning.',
    lists: ['Pre-Incubation Program', 'Incubation Program', 'Campus Leadership Program', 'Incubation Manager Fellowship', 'Internships', 'Founders Friday', 'Founders Fest', 'EdTalk', 'Builders Sunday'],
    banner: {
      title: "Join the Incubation Manager Fellowship",
      subtitle: "Train to be a startup ecosystem builder",
      cta: "Apply Now",
      ctaLink: "/apply/fellowship"
    },
    gallery: {
      title: "Fellowship Program Gallery",
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
    }
  },
  internships: {
    slug: 'internships',
    heading: 'Internships',
    subHeading: 'Real-world startup experience for students',
    paragraph: 'Our internship program offers students the opportunity to work directly with startups in our ecosystem. Interns gain valuable hands-on experience in various domains including technology, marketing, operations, and business development while contributing to the growth of early-stage startups.',
    lists: ['Pre-Incubation Program', 'Incubation Program', 'Campus Leadership Program', 'Incubation Manager Fellowship', 'Internships', 'Founders Friday', 'Founders Fest', 'EdTalk', 'Builders Sunday'],
    banner: {
      title: "Looking for real-world startup experience?",
      subtitle: "Apply for our Internship Program",
      cta: "Apply Now",
      ctaLink: "/apply/internships"
    },
    gallery: {
      title: "Internship Gallery",
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
    }
  },
  edtalk: {
    slug: 'edtalk',
    heading: 'EdTalk',
    subHeading: 'Exclusive program for Campus Leads at EdVenture Park',
    paragraph: 'EdTalk is built upon the foundation of the 3E\'s – Experience, Engagement, and Expression. These elements contribute to the growth of self-assurance among Campus Leads, a trait nurtured organically through their regular interactions and discussions.',
    lists: ['Pre-Incubation Program', 'Incubation Program', 'Campus Leadership Program', 'Incubation Manager Fellowship', 'Internships', 'Founders Friday', 'Founders Fest', 'EdTalk', 'Builders Sunday'],
    banner: {
      title: "Want to be a part of these Exclusive Discussions?",
      subtitle: "Join as a Campus Lead",
      cta: "Apply Now",
      ctaLink: "/apply/campus-lead"
    },
    gallery: {
      title: "Edtalk Gallery",
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
    }
  },
  builderssunday: {
    slug: 'builderssunday',
    heading: 'Builders\' Sunday',
    subHeading: 'India\'s Fastest prototyping centre for inquisitive hardware and technology enthusiasts',
    paragraph: 'These gatherings are designed to create and enhance their practical skills in creation. EdVenture Parks\' Hardware Incubator extends a warm invitation to individuals from diverse educational backgrounds, offering them the chance to refine their hardware expertise.',
    lists: ['Pre-Incubation Program', 'Incubation Program', 'Campus Leadership Program', 'Incubation Manager Fellowship', 'Internships', 'Founders Friday', 'Founders Fest', 'EdTalk', 'Builders Sunday'],
    banner: {
      title: "Interested in hardware prototyping?",
      subtitle: "Join our next Builders' Sunday",
      cta: "Register Now",
      ctaLink: "/register/builders-sunday"
    },
    gallery: {
      title: "Builders' Sunday Gallery",
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
    }
  },
  foundersfriday: {
    slug: 'foundersfriday',
    heading: 'Founders\' Friday',
    subHeading: 'Flagship networking event held on the first Friday of every month',
    paragraph: 'It serves as a "No-Agenda Networking Event" bringing together Founders, Entrepreneurs, Investors, and other key members of the startup ecosystem. The event is a tribute to founders, celebrating their endeavors, challenges, and aspirations. Founders\' Friday focuses on networking, emphasizing the importance of connections in the startup world.',
    lists: ['Pre-Incubation Program', 'Incubation Program', 'Campus Leadership Program', 'Incubation Manager Fellowship', 'Internships', 'Founders Friday', 'Founders Fest', 'EdTalk', 'Builders Sunday'],
    banner: {
      title: "Network with founders and investors",
      subtitle: "Join our next Founders' Friday event",
      cta: "RSVP",
      ctaLink: "/events/founders-friday"
    },
    gallery: {
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
    }
  },
  foundersfest: {
    slug: 'foundersfest',
    heading: 'Founders Fest',
    subHeading: 'Annual celebration of entrepreneurship and innovation',
    paragraph: 'Founders Fest is our annual flagship event that brings together the entire startup ecosystem for a day of learning, networking, and celebration. The event features keynote speeches from successful entrepreneurs, panel discussions, startup showcases, and interactive workshops designed to inspire and educate aspiring founders.',
    lists: ['Pre-Incubation Program', 'Incubation Program', 'Campus Leadership Program', 'Incubation Manager Fellowship', 'Internships', 'Founders Friday', 'Founders Fest', 'EdTalk', 'Builders Sunday'],
    banner: {
      title: "Join us for the Founders Fest",
      subtitle: "Celebrate entrepreneurship and innovation",
      cta: "Get Tickets",
      ctaLink: "/events/founders-fest"
    },
    gallery: {
      title: "Founders' Fest Gallery",
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
    }
  }
};

// Default program data for fallback
export const defaultProgramData: ProgramData = {
  slug: 'preincubation',
  heading: 'Program',
  subHeading: 'Program details',
  paragraph: 'Program description',
  lists: ['Pre-Incubation Program', 'Incubation Program', 'Campus Leadership Program', 'Incubation Manager Fellowship', 'Internships', 'Founders Friday', 'Founders Fest', 'EdTalk', 'Builders Sunday'],
  banner: {
    title: "Want to be a part of these Exclusive Discussions?",
    subtitle: "Join as a Campus Lead",
    cta: "Apply Now",
    ctaLink: "#"
  },
  gallery: {
    title: "Program Gallery",
    images: [
      {
        url: "/assets/LeadsBanner.jpg",
        alt: "Program image"
      }
    ]
  }
};

export default programsData;