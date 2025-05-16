"use client";
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, Filter, X } from 'lucide-react';

// Types
interface Company {
  id: string;
  name: string;
  description: string;
  cohort: string;
  industry: string[];
  logoUrl: string;
}

const Portfolio: React.FC = () => {
  // State
  const [companies, setCompanies] = useState<Company[]>([]);
  const [filteredCompanies, setFilteredCompanies] = useState<Company[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCohorts, setSelectedCohorts] = useState<string[]>(['All cohorts']);
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>(['All industries']);
  const [sortBy, setSortBy] = useState('Default');
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  
  // Handle window resize for responsive design
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Set initial value
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Mock data - replace with actual API call
  useEffect(() => {
    const mockCompanies: Company[] = [
      {
        id: '1',
        name: 'Plastoceans',
        description: 'The biggest threat to our ecosystem right now is plastic and its impact doesn\'t surface in the conventional ways. It\'s not a textbook flow, It\'s not a linear journey. We saw this problem and decided to solve it through the work that\'s driving forces behind the circular economy.',
        cohort: 'A20',
        industry: ['Industrials'],
        logoUrl: '/plastoceans-logo.png',
      },
      {
        id: '2',
        name: 'Kiddiewink School',
        description: "Kiddiewink is a personality development program for 6-15 years an age where they absorb the most. Bringing focus to your child's social skills and behaviour making your child emotionally and socially stronger",
        cohort: 'A20',
        industry: ['Industrials', 'Consumer'],
        logoUrl: '/plastoceans-logo.png',
      },
      {
        id: '3',
        name: 'The Good Pharmacy',
        description: 'It provides access to a variety of medicines at affordable prices. Compare prices, choose your fit and pay your bills at home with hassle-free delivery. Evaluating needs, conveying solutions.',
        cohort: 'A20',
        industry: ['Industrials'],
        logoUrl: '/plastoceans-logo.png',
      },
      {
        id: '4',
        name: 'Lecture Pro',
        description: "A team of two from Lord's Institute of Engineering & Technology, are determined to create a healthcare device which ensures optimal health by identifying any underlying health issues! It is to surely give a boost to the treatment process!",
        cohort: 'A20',
        industry: ['B2B', 'Industrials'],
        logoUrl: '/greentech-logo.png',
      },
      {
        id: '5',
        name: 'SPADit',
        description: "A healthcare device which ensures optimal health by identifying any underlying health issues !It is to surely give a boost to the treatment process !LecturePro creates a leisure and effective learning environment.++",
        cohort: 'A20',
        industry: ['Education'],
        logoUrl: '/edulearn-logo.png',
      },
      {
        id: '6',
        name: 'Vivify',
        description: 'Studies during the pandemic made them modify their idea into something more reltively searving! They aim to build an app, which fastens the process of text-animation conversion for teachers, as a teaching aid!',
        cohort: 'A20',
        industry: ['Fintech'],
        logoUrl: '/financepro-logo.png',
      },
      {
        id: '7',
        name: 'Bizrah',
        description: 'This team of four, has made it their mission to deliver cupping therapy services to your door steps via an online application while maintaining all the hygienic and safety standards!',
        cohort: 'A20',
        industry: ['Healthcare'],
        logoUrl: '/healthplus-logo.png',
      },
      {
        id: '8',
        name: 'AppaRent',
        description: 'AppaRent provides you with the latest apparels on rent at an affordable rate decided by the market demand.',
        cohort: 'A20',
        industry: ['Housing and Construction'],
        logoUrl: '/constructwise-logo.png',
      },
      {
        id: '9',
        name: 'iWater Private Limited',
        description: "They are a team of 3 engineering students, who wants to brand local drinking water supplies and make it easy for water to get delivered to our door step while ensuring that safety standards are maintained!",
        cohort: 'A20',
        industry: ['Marketing'],
        logoUrl: '/marketboost-logo.png',
      },
      {
        id: '10',
        name: 'Majdoor',
        description: "It has been brought forward by a team of two students from Muffakham Jah College of Engineering and Technology, who believe that every person has a right to identity in the economic world.",
        cohort: 'A20',
        industry: ['Marketing'],
        logoUrl: '/marketboost-logo.png',
      },
      {
        id: '11',
        name: 'Craprofo',
        description: "Mohd. Owais Khan's mission is to guide students to choose a career without fear and uncertainity, through the help of professionals in the field.",
        cohort: 'A20',
        industry: ['Marketing'],
        logoUrl: '/marketboost-logo.png',
      },
      {
        id: '12',
        name: 'SFEdTech',
        description: "This startup is an innovation towards technical education for the students of lower age group, so that they can strive in the world of ever - evolving technology!",
        cohort: 'A20',
        industry: ['Marketing'],
        logoUrl: '/marketboost-logo.png',
      },
      {
        id: '13',
        name: 'PiMakellion',
        description: 'The Trade Guru stresses on the importance of being financially literate from a young age itself. They coach you in trading, right from scratch! "There is a misconception about investing among young people, that investing is a game of rich people. But we need to understand this - INVESTING MAKES YOU RICH", says Mr.Sami Uddin, Founder at The Trade Guru.',
        cohort: 'A20',
        industry: ['Marketing'],
        logoUrl: '/marketboost-logo.png',
      },
      {
        id: '14',
        name: 'Exa Tech',
        description: 'This determined team of two, are planning to challenge the dependency on foreign technology in India. "Unlike most successful startups who in the end gets acquired, This startup`s plan is quite different.", says Taha from LIET.',
        cohort: 'A20',
        industry: ['Marketing'],
        logoUrl: '/marketboost-logo.png',
      },
      {
        id: '15',
        name: 'Hunar Hunt',
        description: `HunarHunt.com is an online aggregator platform, which connects you with the person in need of your passion. It will consist of a variety of services like tailoring, tutoring, fashion designing, spa, handicrafts, etc and their tutorials! Indulge or provide!It's time to earn while chasing your passion! `,
        cohort: 'A20',
        industry: ['Marketing'],
        logoUrl: '/marketboost-logo.png',
      },
      {
        id: '16',
        name: 'AgriTech Consultancy',
        description: `An aggregator platform which provides skills development training, events, online courses, and other exciting opportunities for agritech students!`,
        cohort: 'A20',
        industry: ['Marketing'],
        logoUrl: '/marketboost-logo.png',
      },
      {
        id: '17',
        name: 'A.I.E.L',
        description: `The future of personalized edtech is here ! The main objective of A.I.E.L is to enhance the future, by providing personalized mentoring, anaylsis and much more through means of stimulated platforms!`,
        cohort: 'A20',
        industry: ['Marketing'],
        logoUrl: '/marketboost-logo.png',
      },
      {
        id: '18',
        name: 'Pre Cast Reusable Roads',
        description: `This innovative team of two, aim to re-invent the quality and design life of roads using Industrial waste materials and Pre-cast technology!We're looking forward to a better India!`,
        cohort: 'A20',
        industry: ['Marketing'],
        logoUrl: '/marketboost-logo.png',
      },
      {
        id: '19',
        name: 'GoodMind',
        description: `GoodMind makes mental wellness accessible, affordable all while maintaining the anonymity of the patient. Live chats, stigma free counseling sessions with the best in town psychologists. They have AI powered assessments, convenient and private counselling sessions from the best therapists in the world at your fingertips.`,
        cohort: 'B20',
        industry: ['Marketing'],
        logoUrl: '/marketboost-logo.png',
      },
      {
        id: '20',
        name: 'Guardian',
        description: `Guardian- is the new age protective gear for Women! Electrocuted inner-vest that Women can wear out for their safety and still meet the demanding fashion standards.`,
        cohort: 'B20',
        industry: ['Marketing'],
        logoUrl: '/marketboost-logo.png',
      },
      {
        id: '21',
        name: 'ProTech',
        description: `Pro Tech wants to completely generalise the concept of female taxi drivers in Hyderabad! Aiming to open employment opportunities for women, all while making it safe for those who go out to work.`,
        cohort: 'B20',
        industry: ['Marketing'],
        logoUrl: '/marketboost-logo.png',
      },
      {
        id: '22',
        name: 'Doctera',
        description: `DoctEra seeks to provide the critical help at the golden hour of an emergency to your doorstep. Book your emergency on the app and, find a trained stabilizing help in time.`,
        cohort: 'B20',
        industry: ['Marketing'],
        logoUrl: '/marketboost-logo.png',
      },
      {
        id: '23',
        name: 'Rolstoel',
        description: `Roelstole is a revolutionary technology which can convert any wheelchair to a voice/joystick enabled wheelchair empowering the differently blessed and make them feel independent!`,
        cohort: 'B20',
        industry: ['Marketing'],
        logoUrl: '/marketboost-logo.png',
      },
      {
        id: '24',
        name: 'Enwrite',
        description: `It is all about personalizing your typing font into your very own handwriting. They aim to go a mile further to close the bridge between letters and texts.`,
        cohort: 'B20',
        industry: ['Marketing'],
        logoUrl: '/marketboost-logo.png',
      },
      {
        id: '25',
        name: 'BioReform',
        description: `Tons of useful natural resources goes waste and unused per year, and tons of harmful and non biodegradable plastic gets produced!; BioReform is developed with an intention to reconstruct the entire industry, making carry bags and similar products with the same natural extracts!`,
        cohort: 'B20',
        industry: ['Marketing'],
        logoUrl: '/marketboost-logo.png',
      },
      {
        id: '26',
        name: 'Alpha Ed',
        description: `AlphaEd aims to bring a revolution in the education institutions. Students are provided to learn the skills required and necessary in the 21st century in the school itself, all while maintaining the brand's quality education. It's OYO for schools!`,
        cohort: 'B20',
        industry: ['Marketing'],
        logoUrl: '/marketboost-logo.png',
      },
      {
        id: '27',
        name: 'Bootcamps.tech',
        description: `Bootcamps.tech is the go-to place to access the raw industry of technical bootcamps in a refined, sorted and comparable list, that are easily accessible and convenient to you.`,
        cohort: 'B20',
        industry: ['Marketing'],
        logoUrl: '/marketboost-logo.png',
      },
      {
        id: '28',
        name: 'Ping',
        description: `Ping is a Powerful, Secure and Interactive Native Mobile App. The main function of this app is to allow students to share their unbiased opinions with their educators, all the while ensuring student anonymity and protecting the educator's privacy. By granting students anonymity, PING becomes a safe space for students`,
        cohort: 'B20',
        industry: ['Marketing'],
        logoUrl: '/marketboost-logo.png',
      },
      {
        id: '29',
        name: 'Rebate',
        description: `Rebate is the future of the retail business- from customised shopping suggestions to rewarding-payment services.It is revolutionising the Point Of Sale (POS) industry with customised shopping suggestions and reward points which can be redeemed globally.`,
        cohort: 'B20',
        industry: ['Marketing'],
        logoUrl: '/marketboost-logo.png',
      },
      {
        id: '30',
        name: 'Smart Shelf',
        description: `With Smart Shelf, Bulk orders of items nearing expiry or of immediate use for can be found at n% less price from the original price, which generally goes to waste can now be sold profitably.Smart Shelf-Your smart kitchen partner!`,
        cohort: 'B20',
        industry: ['Marketing'],
        logoUrl: '/marketboost-logo.png',
      },
      {
        id: '31',
        name: 'Bike Becho',
        description: `Bike Becho- a retail platform to find certified second-hand bikes that are accessible and suitable to your requirements. They aim to provide both consumers and sellers with high convenience and satisfaction.`,
        cohort: 'B20',
        industry: ['Marketing'],
        logoUrl: '/marketboost-logo.png',
      },
      {
        id: '32',
        name: 'Edu Find',
        description: `EduFind is a search engine for all educational institutions- Colleges, Schools, Tutorials, Bootcamps, etc. Asma has aimed to make the institution selection a pleasant experience for students and parents!`,
        cohort: 'B20',
        industry: ['Marketing'],
        logoUrl: '/marketboost-logo.png',
      },
      {
        id: '33',
        name: 'Insight Services',
        description: `Want to get freelance work done, but don’t know from where? Insight Services aims to solve this dilemma, from customers to the freelancer it solves issues for all by getting the work done from available freelancers.`,
        cohort: 'B20',
        industry: ['Marketing'],
        logoUrl: '/marketboost-logo.png',
      },
      {
        id: '34',
        name: 'Skill up',
        description: `If only teachers who are well qualified had skills to maintain as well as manage! With skill-up, they can acquire the necessary skills and, hence bring about great value to the profession in their services and for themselves.`,
        cohort: 'B20',
        industry: ['Marketing'],
        logoUrl: '/marketboost-logo.png',
      },
      {
        id: '35',
        name: 'PartZo',
        description: `PartZo closes the gap to find suitable and convenient part time opportunities and in turn the opportunity-giver with working and interested part timers.`,
        cohort: 'B20',
        industry: ['Marketing'],
        logoUrl: '/marketboost-logo.png',
      },
      {
        id: '36',
        name: 'Housepital',
        description: `Housepital brings your hospital to your house, just as it sounds! From online consultation, tele-consultations to even the physical consultations, it resolves all the hospital needs at a single place- your house!`,
        cohort: 'B20',
        industry: ['Marketing'],
        logoUrl: '/marketboost-logo.png',
      },
      {
        id: '37',
        name: 'Active - C',
        description: `Active-C air purifiers live in the silent parts of your interiors.! The Carbon C filter instilled artifacts in their products and decorative pieces that will purify the air with guaranty and shall also add great aesthetic value to the space!`,
        cohort: 'B20',
        industry: ['Marketing'],
        logoUrl: '/marketboost-logo.png',
      },
      {
        id: '38',
        name: 'EduHub',
        description: `EduHub is a platform that facilitates hiring of well evaluated teachers to the schools and colleges according to their requirements! Teachers and educators can log in to the EduHub platform to get evaluated and placed in a suitable institution!`,
        cohort: 'B20',
        industry: ['Marketing'],
        logoUrl: '/marketboost-logo.png',
      },
      {
        id: '39',
        name: 'Jasmine.App',
        description: `Jasmine.app is India's first and the fastest sanitary pads delivery app. Jasmine.app helps your period go smooth by delivering convenience, providing sanitary pads at your doorstep in 30 minutes.`,
        cohort: 'A21',
        industry: ['Marketing'],
        logoUrl: '/marketboost-logo.png',
      },
      {
        id: '40',
        name: 'Delta Charge',
        description: `They are aiming to manufacture electric bikes to change the conventional automobile industry, saving the environment and providing cost-effective transportation.`,
        cohort: 'A21',
        industry: ['Marketing'],
        logoUrl: '/marketboost-logo.png',
      },
      {
        id: '41',
        name: 'Torq Electric',
        description: `Revolutionizing the automotive industry by redirecting to electric.As a first product we are working on launching an electric auto-rickshaw to make a mark in that segment and expand from there.`,
        cohort: 'A21',
        industry: ['Marketing'],
        logoUrl: '/marketboost-logo.png',
      },
      {
        id: '42',
        name: 'MagikNumber.com',
        description: `Magiknumber stops the fraud-spam calls and messages and protects your privacy.`,
        cohort: 'A21',
        industry: ['Marketing'],
        logoUrl: '/marketboost-logo.png',
      },
      {
        id: '43',
        name: 'WaveChat',
        description: `An application that interprets sign language instantly ,this app will record gestures and convert them into text or audio.`,
        cohort: 'A21',
        industry: ['Marketing'],
        logoUrl: '/marketboost-logo.png',
      },
      {
        id: '44',
        name: 'AppInsider',
        description: `Appinsider will assist you by providing complete information about all app permissions that an application requests.`,
        cohort: 'A21',
        industry: ['Marketing'],
        logoUrl: '/marketboost-logo.png',
      },
      {
        id: '45',
        name: 'Highlancer.in',
        description: `Build your website or app faster than ever with India's First Freelance Marketplace with No Code and Low Code Freelancers.`,
        cohort: 'A21',
        industry: ['Marketing'],
        logoUrl: '/marketboost-logo.png',
      },
      {
        id: '46',
        name: 'MyMestri',
        description: `Connecting you with the right crew of architects, engineers, designers etcetera for all your construction needs.`,
        cohort: 'A21',
        industry: ['Marketing'],
        logoUrl: '/marketboost-logo.png',
      },
      {
        id: '47',
        name: 'Alsi.me',
        description: `We aim to make cleaning ceilings easy and effortless. Alsi.me will clean all your web cobbs for you while you relax.`,
        cohort: 'A21',
        industry: ['Marketing'],
        logoUrl: '/marketboost-logo.png',
      },
      {
        id: '48',
        name: 'Ubuntu',
        description: `Providing essential apps and services to the people at public places.`,
        cohort: 'A21',
        industry: ['Marketing'],
        logoUrl: '/marketboost-logo.png',
      },
      {
        id: '49',
        name: 'Auryn',
        description: `Experience the finest global portal in numerous online businesses and services, organized systematically, catering to every consumer's preferences and needs.`,
        cohort: 'A21',
        industry: ['Marketing'],
        logoUrl: '/marketboost-logo.png',
      },
      {
        id: '50',
        name: 'Masira.in',
        description: `Organizing all the best education portals for students at a single platform, to save their time, energy & saving the trouble of finding top free educational portals at different sources.`,
        cohort: 'A21',
        industry: ['Marketing'],
        logoUrl: '/marketboost-logo.png',
      },
      {
        id: '51',
        name: 'ProSound',
        description: `ProSound is an app which helps you to convert your earphones into hearing aid through amplification and enhancement.`,
        cohort: 'A21',
        industry: ['Marketing'],
        logoUrl: '/marketboost-logo.png',
      },
      {
        id: '52',
        name: 'Nisa Wallet',
        description: `A crypto wallet that store your private keys, keeping your crypto safe and accessible. Nisa wallet will allow you to send, receive & spend cryptocurrencies like Bitcoin, Ethereum, Dogecoin, and many more.`,
        cohort: 'A21',
        industry: ['Marketing'],
        logoUrl: '/marketboost-logo.png',
      },
      {
        id: '53',
        name: 'Eco-Friendly Trash Bin',
        description: `A Trash Bin which rewards you with coupons for keeping your country clean.`,
        cohort: 'A21',
        industry: ['Marketing'],
        logoUrl: '/marketboost-logo.png',
      },
      {
        id: '54',
        name: 'SpyQ',
        description: `The strategy to save people from the existing hacking/ Scams going out there on browsing feed/Flash websites or social media and their Block access to the unauthorized websites.`,
        cohort: 'A21',
        industry: ['Marketing'],
        logoUrl: '/marketboost-logo.png',
      },
      {
        id: '55',
        name: 'Palo Alto Ventures',
        description: `Trackit - Our flagship product will provide you with live location of your loved ones and important items by building a miniature tracking device with GPS, voice assistant, and message alert.`,
        cohort: 'A21',
        industry: ['Marketing'],
        logoUrl: '/marketboost-logo.png',
      },
      {
        id: '56',
        name: 'Carde',
        description: `The stethoscope helps listen to the heart or the lung and also measures heart rate. It’s crucial where you place the device – fortunately, the app guides you through either a quick or full check-up. With these intuitive prompts, anyone can use it without prior training.`,
        cohort: 'A21',
        industry: ['Marketing'],
        logoUrl: '/marketboost-logo.png',
      },
      {
        id: '57',
        name: 'Indian Automobile Gala',
        description: `The AutoShow that India wants. The biggest automotive exhibition of the year with the best of exquisite, rare & modified bikes & cars.`,
        cohort: 'A21',
        industry: ['Marketing'],
        logoUrl: '/marketboost-logo.png',
      },
      {
        id: '58',
        name: 'Fight To Last',
        description: `Fight To Last last is MMO (multiplayer game) RPG (role play gaming) + fps (first-person shooter) gaming, based on a storyline, where you can have a lot of fun, it includes quests, thrill, adventure & lot more.`,
        cohort: 'A21',
        industry: ['Marketing'],
        logoUrl: '/marketboost-logo.png',
      },
      {
        id: '59',
        name: 'Farm In The Box',
        description: `Farm In The Box is a DIY (Do It Yourself) Kit with which you can start your own small farm on your terrace or any space in your home. The kits contains a small box, guide, seeds, manure and tools with which you can start your gardening.`,
        cohort: 'B21',
        industry: ['Marketing'],
        logoUrl: '/marketboost-logo.png',
      },
      {
        id: '60',
        name: 'Diabeat.tech',
        description: `Diabeat is a non invasive Glucose monitoring device that will monitor your glucose levels without blood and without pricking and will notify you and your caretaker during the time of emergency. Other features include, the carbohydrate calculator, medication alarms, live database updates among other things.`,
        cohort: 'B21',
        industry: ['Marketing'],
        logoUrl: '/marketboost-logo.png',
      },
      {
        id: '61',
        name: 'Biofy',
        description: `Biofy.co.in is an initiative towards sustainable development.They aim to replace plastic with biodegradable solutions. They provide eco-friendly and compostable tableware, packaging material and customized sustainable alternatives for emerging brands.`,
        cohort: 'B21',
        industry: ['Marketing'],
        logoUrl: '/marketboost-logo.png',
      },
      {
        id: '62',
        name: 'CleanX',
        description: `CleanX converts muddy water into re-useable water without any water treatment plant or complex process, just in about 5 mins using safe chemicals that are lab tested and certified.`,
        cohort: 'B21',
        industry: ['Marketing'],
        logoUrl: '/marketboost-logo.png',
      },
      {
        id: '63',
        name: 'Smartia.in',
        description: `A smartwatch that tracks human vitals like heart rate, oxygen levels and a smartwatch that uses human body heat for powering up i.e you don't have to charge it ever!`,
        cohort: 'B21',
        industry: ['Marketing'],
        logoUrl: '/marketboost-logo.png',
      },
      {
        id: '64',
        name: 'Curefy.me',
        description: `Curefy.me provides physiotherapy services at your doorstep from the best therapists around the city. The services includes assessment, diagnoses, and treatment for wide variety of conditions like`,
        cohort: 'B21',
        industry: ['Marketing'],
        logoUrl: '/marketboost-logo.png',
      },
      {
        id: '65',
        name: 'Infiniteloop',
        description: `Infiniteloop.co.in with their creative tailor made services and will help brands deliver the brand message in the best way possible. They make sure the brand is easily recognisable, sparks some emotions, and stays at the top of their consumers minds all the time.`,
        cohort: 'B21',
        industry: ['Marketing'],
        logoUrl: '/marketboost-logo.png',
      },
      {
        id: '66',
        name: 'PiDiamonds',
        description: `An Industrial revolution to launch man made diamonds to the world" Where we use CVD process to create diamonds confined to a laboratory eliminating the process of mining which gives us diamonds which are conflict-free and ethical. A sparkling rise in the diamond industry.`,
        cohort: 'B21',
        industry: ['Marketing'],
        logoUrl: '/marketboost-logo.png',
      },
      {
        id: '67',
        name: 'Quizexcel.app',
        description: `Quizexcel.app with their interesting quizzes and flashcards will help students to perform better in exams. They make sure students retain concepts and score well.`,
        cohort: 'B21',
        industry: ['Marketing'],
        logoUrl: '/marketboost-logo.png',
      },
      {
        id: '68',
        name: 'MamaFood.in',
        description: `Mamafood.in is a platform that connects people (who lives far from home) with the home chefs who will provide healthy and quality cooked food maintaining high safety standards.`,
        cohort: 'B21',
        industry: ['Marketing'],
        logoUrl: '/marketboost-logo.png',
      },
      {
        id: '69',
        name: 'Ituned.app',
        description: `Make learning easy with the help of music. In our childhood we used to learn alphabets with the help of music. We improvised this technique so that students can learn concepts with the help of music. We will convert the concepts into lyrics so that the student can learn concepts with the help of music.`,
        cohort: 'B21',
        industry: ['Marketing'],
        logoUrl: '/marketboost-logo.png',
      },
      {
        id: '70',
        name: 'The Real Bionics',
        description: `In India, around 3 million individuals are affected by amputation. To eliminate this problem. The Real Bionics is building a 3d-printed bionic arm that works via EMG sensors. The Real Bionics is trying to make it affordable and more efficient than the existing ones.`,
        cohort: 'B21',
        industry: ['Marketing'],
        logoUrl: '/marketboost-logo.png',
      },
      {
        id: '71',
        name: 'Chipit.in',
        description: `Chipit.in cuts down all the loopholes in vending machines by eliminating all it's touch functionalities and making vending easygoing and time saving for our customers by connecting it with their mobiles providing a hassle-free and secure experience in vending.`,
        cohort: 'B21',
        industry: ['Marketing'],
        logoUrl: '/marketboost-logo.png',
      },
      {
        id: '72',
        name: 'TrueScrubs.org',
        description: `TrueScrubs are making Protective scrubs that cover beard and hair helps in preventing surgery site infections Scrub caps that have slits near the ears for using stethoscope.`,
        cohort: 'B21',
        industry: ['Marketing'],
        logoUrl: '/marketboost-logo.png',
      },
      {
        id: '73',
        name: 'Firabulous',
        description: `Firabulous is a brand that does two things: 1. They offer customised charms which helps the buyer feel the sense of oneself. 2. Offer fashion statements keeping modesty in mind.`,
        cohort: 'B21',
        industry: ['Marketing'],
        logoUrl: '/marketboost-logo.png',
      },
      {
        id: '74',
        name: 'RewardX',
        description: `RewardX incentivises your purchase immediately by adding RewardX points in your wallet which you can redeem for offline purchases made in their network of stores.`,
        cohort: 'B21',
        industry: ['Marketing'],
        logoUrl: '/marketboost-logo.png',
      },
      {
        id: '75',
        name: 'ShopSmart',
        description: `ShopSmart provides you an enhanced shopping experience by providing you a hassle-free checkout. You walk in, shop, scan and your cart will be ready when by the end of your list.`,
        cohort: 'B21',
        industry: ['Marketing'],
        logoUrl: '/marketboost-logo.png',
      },
      {
        id: '76',
        name: 'Skillancer',
        description: `Skillancer provides training to aspiring freelancer with the skills which the industry demands and respects with a vision to make people independent.`,
        cohort: 'B21',
        industry: ['Marketing'],
        logoUrl: '/marketboost-logo.png',
      },
      {
        id: '77',
        name: 'ThrillSimulator',
        description: `With a vision to avoid accidents and speeding, Simulator provides you with the same thrill less the risk.`,
        cohort: 'B21',
        industry: ['Marketing'],
        logoUrl: '/marketboost-logo.png',
      },
      {
        id: '78',
        name: 'Cipherbootcamp.Com',
        description: `A cyber security boot camp that empowers and creates an ecosystem of cyber security professionals.`,
        cohort: 'C21',
        industry: ['Marketing'],
        logoUrl: '/marketboost-logo.png',
      },
      {
        id: '79',
        name: 'Grassify',
        description: `An URBAN AGRI-TECH company that facilitates urban households with products and services for indoor gardening, terrace farming, and backyard gardening.`,
        cohort: 'C21',
        industry: ['Marketing'],
        logoUrl: '/marketboost-logo.png',
      },
      {
        id: '80',
        name: 'Transformify.Me',
        description: `The Imago Mundi is the oldest known map and was made by the Babylonians around 700 to 500 BC.`,
        cohort: 'C21',
        industry: ['Marketing'],
        logoUrl: '/marketboost-logo.png',
      },
    ];

    setCompanies(mockCompanies);
    setFilteredCompanies(mockCompanies);
  }, []);

  // Cohort options
  const cohortOptions = [
    'A20',
    'B20',
    'A21',
    'B21',
    'C21',
    'A22',
    'B22',
    'A23',
  ];

  // Industry options
  const industryOptions = [
    'B2B',
    'Education',
    'Consumer',
    'Fintech',
    'Healthcare',
    'Housing and Construction',
    'Industrials',
    'Marketing',
  ];

  // Filter companies based on selected filters
  useEffect(() => {
    let result = [...companies];

    // Filter by search term
    if (searchTerm) {
      result = result.filter(company =>
        company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        company.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by cohort
    if (!selectedCohorts.includes('All cohorts')) {
      result = result.filter(company => selectedCohorts.includes(company.cohort));
    }

    // Filter by industry
    if (!selectedIndustries.includes('All industries')) {
      result = result.filter(company =>
        company.industry.some(ind => selectedIndustries.includes(ind))
      );
    }

    // Apply sorting
    if (sortBy === 'Name A-Z') {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'Name Z-A') {
      result.sort((a, b) => b.name.localeCompare(a.name));
    }

    setFilteredCompanies(result);
  }, [companies, searchTerm, selectedCohorts, selectedIndustries, sortBy]);

  // Handle cohort selection
  const handleCohortChange = (cohort: string) => {
    if (cohort === 'All cohorts') {
      setSelectedCohorts(['All cohorts']);
    } else {
      const newSelectedCohorts = selectedCohorts.includes('All cohorts')
        ? [cohort]
        : selectedCohorts.includes(cohort)
          ? selectedCohorts.filter(c => c !== cohort)
          : [...selectedCohorts, cohort];
      
      setSelectedCohorts(newSelectedCohorts.length ? newSelectedCohorts : ['All cohorts']);
    }
  };

  // Handle industry selection
  const handleIndustryChange = (industry: string) => {
    if (industry === 'All industries') {
      setSelectedIndustries(['All industries']);
    } else {
      const newSelectedIndustries = selectedIndustries.includes('All industries')
        ? [industry]
        : selectedIndustries.includes(industry)
          ? selectedIndustries.filter(i => i !== industry)
          : [...selectedIndustries, industry];
      
      setSelectedIndustries(newSelectedIndustries.length ? newSelectedIndustries : ['All industries']);
    }
  };

  // Group companies by cohort for display
  const getCompaniesByCohort = () => {
    const cohortGroups: Record<string, Company[]> = {};
    
    filteredCompanies.forEach(company => {
      if (!cohortGroups[company.cohort]) {
        cohortGroups[company.cohort] = [];
      }
      cohortGroups[company.cohort].push(company);
    });
    
    return cohortGroups;
  };

  // Toggle section expansion
  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const cohortGroups = getCompaniesByCohort();

  // Render filters for both desktop and mobile views
  const renderFilters = () => (
    <>
      <div className="mb-6">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-sm font-medium text-gray-700">Cohort</h3>
          {isMobile && (
            <button 
              onClick={() => toggleSection('cohort')}
              className="rounded p-1 text-gray-500 hover:bg-gray-100"
            >
              {expandedSection === 'cohort' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
          )}
        </div>
        <div className={`space-y-2 ${isMobile && expandedSection !== 'cohort' ? 'hidden' : 'block'}`}>
          <div className="flex items-center">
            <input
              id="all-cohorts"
              type="checkbox"
              className="size-4 rounded border-gray-300 text-green-500 focus:ring-green-500"
              checked={selectedCohorts.includes('All cohorts')}
              onChange={() => setSelectedCohorts(['All cohorts'])}
            />
            <label htmlFor="all-cohorts" className="ml-2 text-sm text-gray-700">
              All cohorts
            </label>
          </div>
          {cohortOptions.map(cohort => (
            <div key={cohort} className="flex items-center pl-4">
              <input
                id={`cohort-${cohort}`}
                type="checkbox"
                className="size-4 rounded border-gray-300 text-gray-500 focus:ring-gray-500"
                checked={selectedCohorts.includes(cohort)}
                onChange={() => handleCohortChange(cohort)}
              />
              <label htmlFor={`cohort-${cohort}`} className="ml-2 text-sm text-gray-600">
                {cohort}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className="my-4 border-t border-gray-200"></div>
      <div>
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-sm font-medium text-gray-700">Industry</h3>
          {isMobile && (
            <button 
              onClick={() => toggleSection('industry')}
              className="rounded p-1 text-gray-500 hover:bg-gray-100"
            >
              {expandedSection === 'industry' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
          )}
        </div>
        <div className={`space-y-2 ${isMobile && expandedSection !== 'industry' ? 'hidden' : 'block'}`}>
          <div className="flex items-center">
            <input
              id="all-industries"
              type="checkbox"
              className="size-4 rounded border-gray-300 text-green-500 focus:ring-green-500"
              checked={selectedIndustries.includes('All industries')}
              onChange={() => setSelectedIndustries(['All industries'])}
            />
            <label htmlFor="all-industries" className="ml-2 text-sm text-gray-700">
              All industries
            </label>
          </div>
          {industryOptions.map(industry => (
            <div key={industry} className="flex items-center pl-4">
              <input
                id={`industry-${industry}`}
                type="checkbox"
                className="size-4 rounded border-gray-300 text-gray-500 focus:ring-gray-500"
                checked={selectedIndustries.includes(industry)}
                onChange={() => handleIndustryChange(industry)}
              />
              <label htmlFor={`industry-${industry}`} className="ml-2 text-sm text-gray-600">
                {industry}
              </label>
            </div>
          ))}
        </div>
      </div>
    </>
  );

  return (
    <div className="flex min-h-screen w-full flex-col bg-gray-50 md:flex-row md:overflow-hidden">
      {/* Desktop sidebar - Fixed, not scrollable */}
      <div className="hidden md:block md:w-56 md:shrink-0 md:border-r md:border-gray-200 md:bg-white md:px-4 md:py-6">
        {renderFilters()}
      </div>
      {/* Mobile filter drawer - Sliding from left */}
      {isMobile && mobileFiltersOpen && (
        <div className="fixed inset-0 z-40 flex">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/30 transition-opacity" 
            onClick={() => setMobileFiltersOpen(false)}
          ></div>
          {/* Drawer panel */}
          <div className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
            <div className="flex items-center justify-between px-4 py-5">
              <h2 className="text-lg font-medium text-gray-900">Filters</h2>
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
                onClick={() => setMobileFiltersOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X size={20} aria-hidden="true" />
              </button>
            </div>
            <div className="px-4">{renderFilters()}</div>
            <div className="mt-6 px-4">
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="w-full rounded-md bg-green-600 px-4 py-2 text-center text-sm font-medium text-white hover:bg-green-700"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Main content area - Scrollable */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Header with search, sort, and filter button for mobile */}
        <div className="sticky top-0 z-10 flex flex-wrap items-center justify-between gap-2 border-b border-gray-200 bg-white p-4 shadow-sm">
          {/* Mobile filter button */}
          {isMobile && (
            <button
              type="button"
              className="inline-flex items-center rounded border border-gray-300 bg-white px-2.5 py-1.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
              onClick={() => setMobileFiltersOpen(true)}
            >
              <Filter size={16} className="mr-1" />
              <span>Filters</span>
            </button>
          )}
          {/* Search bar */}
          <div className={`relative ${isMobile ? 'w-full' : 'w-full max-w-lg'}`}>
            <input
              type="text"
              placeholder="Search startups..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-md border border-gray-300 p-2 pl-3 pr-10 focus:border-green-500 focus:outline-none focus:ring-green-500"
            />
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <svg className="size-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
          {/* Sort dropdown */}
          <div className="flex items-center">
            <span className="mr-2 hidden text-sm text-gray-600 md:inline">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="rounded-md border border-gray-300 p-2 text-sm focus:border-green-500 focus:outline-none focus:ring-green-500"
            >
              <option value="Default">Default</option>
              <option value="Name A-Z">Name A-Z</option>
              <option value="Name Z-A">Name Z-A</option>
            </select>
          </div>
        </div>
        {/* Filter chips for mobile - Show selected filters */}
        {isMobile && (selectedCohorts.length > 0 || selectedIndustries.length > 0) && (
          <div className="flex flex-wrap gap-2 bg-gray-50 px-4 py-2">
            {selectedCohorts.includes('All cohorts') ? null : (
              selectedCohorts.map(cohort => (
                <div key={cohort} className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800">
                  {cohort}
                  <button
                    type="button"
                    onClick={() => handleCohortChange(cohort)}
                    className="ml-1 inline-flex rounded-full text-green-500 hover:text-green-700"
                  >
                    <X size={14} />
                  </button>
                </div>
              ))
            )}
            {selectedIndustries.includes('All industries') ? null : (
              selectedIndustries.map(industry => (
                <div key={industry} className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
                  {industry}
                  <button
                    type="button"
                    onClick={() => handleIndustryChange(industry)}
                    className="ml-1 inline-flex rounded-full text-blue-500 hover:text-blue-700"
                  >
                    <X size={14} />
                  </button>
                </div>
              ))
            )}
          </div>
        )}
        {/* Companies list - scrollable */}
        <div className="flex-1 overflow-y-auto p-4">
          {Object.keys(cohortGroups).length > 0 ? (
            <div className="space-y-8">
              {Object.keys(cohortGroups).sort().map(cohort => (
                <div key={cohort} className="rounded-xl bg-white p-4 shadow-sm">
                  <h2 className="mb-4 text-xl font-bold text-gray-800">
                    {cohort}
                    <span className="ml-2 text-sm font-normal text-gray-500">
                      ({cohortGroups[cohort].length} {cohortGroups[cohort].length === 1 ? 'startup' : 'startups'})
                    </span>
                  </h2>
                  <div className="space-y-4">
                    {cohortGroups[cohort].map(company => (
                      <div 
                        key={company.id}
                        className="overflow-hidden rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:translate-y-[-2px] hover:shadow-md"
                      >
                        <div className="flex flex-col sm:flex-row">
                          <div className="mb-4 flex justify-center sm:mb-0 sm:mr-4 sm:size-16 sm:shrink-0">
                            <div className="rounded bg-black p-1">
                              <Image
                                width={60}
                                height={60} 
                                src="https://via.placeholder.com/60" 
                                alt={`${company.name} logo`}
                                className="size-14 object-contain"
                              />
                            </div>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-gray-900">{company.name}</h3>
                            <p className="text-xs text-gray-500">Portable Relaxation Unit</p>
                            <p className="mt-2 line-clamp-3 text-sm text-gray-600">{company.description}</p>
                            <div className="mt-3 flex flex-wrap items-center gap-2">
                              <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
                                YCF W3
                              </span>
                              <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                                ACTIVE
                              </span>
                              {company.industry.map(ind => (
                                <span key={ind} className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700">
                                  {ind}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex h-full items-center justify-center rounded-lg bg-white p-8 text-center">
              <div>
                <svg className="mx-auto size-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="mt-2 text-lg font-medium text-gray-900">No results found</h3>
                <p className="mt-1 text-gray-500">We couldn't find any startups matching your filters.</p>
                <div className="mt-6">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedCohorts(['All cohorts']);
                      setSelectedIndustries(['All industries']);
                      setSearchTerm('');
                    }}
                    className="inline-flex items-center rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700"
                  >
                    Reset filters
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;