/* eslint-disable tailwindcss/no-contradicting-classname */
/* eslint-disable unused-imports/no-unused-imports */
"use client";
import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  Filter, 
  X, 
  Search, 
  ArrowUpDown, 
  Globe, 
  Calendar,
  ExternalLink,
//   Zap,
  Users,
  Award,
  Share2
} from 'lucide-react';

// Types
interface Company {
  id: string;
  name: string;
  description: string;
  cohort: string;
  industry: string[];
  logoUrl: string;
  status?: string;
  tag?: string;
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
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showFiltersApplied, setShowFiltersApplied] = useState(false);
  const [activeCompany, setActiveCompany] = useState<string | null>(null);
  
  // Refs
  const mainContentRef = useRef<HTMLDivElement>(null);
  
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

  // Handle scroll for "back to top" button
  useEffect(() => {
    const handleScroll = () => {
      if (mainContentRef.current) {
        setShowScrollTop(mainContentRef.current.scrollTop > 300);
      }
    };
    
    const currentRef = mainContentRef.current;
    if (currentRef) {
      currentRef.addEventListener('scroll', handleScroll);
      
return () => currentRef.removeEventListener('scroll', handleScroll);
    }
  }, []);

  // Check if filters are applied
  useEffect(() => {
    const filtersApplied = 
      !selectedCohorts.includes('All cohorts') || 
      !selectedIndustries.includes('All industries') ||
      searchTerm !== '';
    
    setShowFiltersApplied(filtersApplied);
  }, [selectedCohorts, selectedIndustries, searchTerm]);

  // Mock data - replace with actual API call
  useEffect(() => {
    const mockCompanies: Company[] = [
      {
        id: '1',
        name: 'Plastoceans',
        description: 'The biggest threat to our ecosystem right now is plastic and its impact doesn\'t surface in the conventional ways. It\'s not a textbook flow, It\'s not a linear journey. We saw this problem and decided to solve it through the work that\'s driving forces behind the circular economy.',
        cohort: 'A20',
        industry: ['Industrials', 'CleanTech'],
        logoUrl: '/plastoceans-logo.png',
        status: 'ACTIVE',
        tag: 'YCF W3'
      },
      {
        id: '2',
        name: 'EcoSphere',
        description: 'Transforming waste management through AI-powered recycling solutions that identify, sort, and process recyclable materials with unprecedented accuracy. Our technology reduces landfill waste by up to 60% while creating new economic opportunities in the circular economy.',
        cohort: 'A21',
        industry: ['Industrials', 'Consumer', 'CleanTech'],
        logoUrl: '/ecosphere-logo.png',
        status: 'ACTIVE',
        tag: 'YCF W2'
      },
      {
        id: '3',
        name: 'OceanPulse',
        description: 'Developing advanced ocean monitoring systems that track marine health, plastic pollution, and ecosystem changes in real-time. Our network of autonomous sensors provides critical data to conservation efforts, governments, and research institutions worldwide.',
        cohort: 'A22',
        industry: ['Industrials', 'DeepTech'],
        logoUrl: '/oceanpulse-logo.png',
        status: 'GROWING',
        tag: 'YCF W3'
      },
      {
        id: '4',
        name: 'GreenTech',
        description: 'Revolutionizing sustainable energy solutions with modular solar systems that integrate seamlessly with existing infrastructure. Our proprietary energy storage technology enables 24/7 renewable power access even in challenging environments.',
        cohort: 'A20',
        industry: ['B2B', 'Industrials', 'Energy'],
        logoUrl: '/greentech-logo.png',
        status: 'ACTIVE',
        tag: 'YCF W1'
      },
      {
        id: '5',
        name: 'EduLearn',
        description: 'Making education accessible and engaging through an adaptive learning platform that personalizes content delivery based on individual learning patterns. Our AI-driven tools have improved student outcomes by 43% in pilot programs.',
        cohort: 'B21',
        industry: ['Education', 'SaaS'],
        logoUrl: '/edulearn-logo.png',
        status: 'ACCELERATING',
        tag: 'YCF W4'
      },
      {
        id: '6',
        name: 'FinancePro',
        description: 'Next-generation financial technology platform offering embedded finance solutions for businesses. Our API-first approach enables companies to integrate complex financial services with minimal development resources.',
        cohort: 'C21',
        industry: ['Fintech', 'B2B'],
        logoUrl: '/financepro-logo.png',
        status: 'EXPANDING',
        tag: 'YCF W2'
      },
      {
        id: '7',
        name: 'HealthPlus',
        description: 'Innovative healthcare solutions combining remote monitoring, predictive analytics, and personalized care plans. Our platform connects patients, providers, and caregivers through a unified ecosystem that improves outcomes while reducing costs.',
        cohort: 'A22',
        industry: ['Healthcare', 'AI'],
        logoUrl: '/healthplus-logo.png',
        status: 'ACTIVE',
        tag: 'YCF W3'
      },
      {
        id: '8',
        name: 'ConstructWise',
        description: 'Transforming the construction industry with modular, sustainable building technologies and digital twin solutions. Our approach reduces construction time by 35% while increasing energy efficiency and reducing material waste.',
        cohort: 'B22',
        industry: ['Housing and Construction', 'IoT'],
        logoUrl: '/constructwise-logo.png',
        status: 'GROWING',
        tag: 'YCF W4'
      },
      {
        id: '9',
        name: 'MarketBoost',
        description: 'Helping businesses reach their target audience through hyper-personalized marketing automation. Our platform leverages predictive analytics to optimize campaign performance across channels, increasing conversion rates by an average of 27%.',
        cohort: 'A23',
        industry: ['Marketing', 'SaaS'],
        logoUrl: '/marketboost-logo.png',
        status: 'ACCELERATING',
        tag: 'YCF W1'
      },
      {
        id: '10',
        name: 'DataSense',
        description: 'Providing enterprise-grade data analytics solutions that transform complex information into actionable business intelligence. Our no-code visualization tools democratize data access across organizations of all sizes.',
        cohort: 'B23',
        industry: ['B2B', 'AI', 'SaaS'],
        logoUrl: '/datasense-logo.png',
        status: 'EXPANDING',
        tag: 'YCF W2'
      },
      {
        id: '11',
        name: 'CloudNative',
        description: 'Building the next generation of cloud infrastructure management tools designed specifically for multi-cloud environments. Our platform reduces cloud spend by 30% while improving deployment reliability and security posture.',
        cohort: 'A23',
        industry: ['B2B', 'Cloud'],
        logoUrl: '/cloudnative-logo.png',
        status: 'ACTIVE',
        tag: 'YCF W3'
      },
      {
        id: '12',
        name: 'UrbanMobility',
        description: 'Reimagining urban transportation with sustainable, shared mobility solutions. Our network of electric vehicles and smart charging infrastructure is helping cities reduce congestion and emissions while improving accessibility.',
        cohort: 'B23',
        industry: ['Transportation', 'CleanTech'],
        logoUrl: '/urbanmobility-logo.png',
        status: 'GROWING',
        tag: 'YCF W4'
      },
    ];

    setCompanies(mockCompanies);
    setFilteredCompanies(mockCompanies);
  }, []);

  // Cohort options
  const cohortOptions = [
    'A20',
    'A21',
    'B21',
    'C21',
    'A22',
    'B22',
    'A23',
    'B23',
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
    'AI',
    'SaaS',
    'CleanTech',
    'DeepTech',
    'Cloud',
    'IoT',
    'Energy',
    'Transportation',
  ];

  // Filter companies based on selected filters
  useEffect(() => {
    let result = [...companies];

    // Filter by search term
    if (searchTerm) {
      result = result.filter(company =>
        company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        company.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        company.industry.some(ind => ind.toLowerCase().includes(searchTerm.toLowerCase()))
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
    } else if (sortBy === 'Newest First') {
      // Assuming cohort code indicates recency (latest codes = newer)
      result.sort((a, b) => b.cohort.localeCompare(a.cohort));
    } else if (sortBy === 'Oldest First') {
      result.sort((a, b) => a.cohort.localeCompare(b.cohort));
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

  // Reset all filters
  const resetAllFilters = () => {
    setSelectedCohorts(['All cohorts']);
    setSelectedIndustries(['All industries']);
    setSearchTerm('');
    setSortBy('Default');
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

  // Scroll to top function
  const scrollToTop = () => {
    if (mainContentRef.current) {
      mainContentRef.current.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  // Handle company card click to toggle expansion
  const toggleCompanyExpansion = (id: string) => {
    setActiveCompany(activeCompany === id ? null : id);
  };

  const cohortGroups = getCompaniesByCohort();

  // Get status color class based on status text
  const getStatusColorClass = (status?: string) => {
    switch (status) {
      case 'ACTIVE':
        return 'bg-emerald-100 text-emerald-800';
      case 'GROWING':
        return 'bg-blue-100 text-blue-800';
      case 'ACCELERATING':
        return 'bg-purple-100 text-purple-800';
      case 'EXPANDING':
        return 'bg-amber-100 text-amber-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // Get industry color class
  const getIndustryColorClass = (industry: string) => {
    const colorMap: Record<string, string> = {
      'B2B': 'bg-sky-50 text-sky-700 border-sky-200',
      'Education': 'bg-teal-50 text-teal-700 border-teal-200',
      'Consumer': 'bg-rose-50 text-rose-700 border-rose-200',
      'Fintech': 'bg-green-50 text-green-700 border-green-200',
      'Healthcare': 'bg-red-50 text-red-700 border-red-200',
      'Housing and Construction': 'bg-orange-50 text-orange-700 border-orange-200',
      'Industrials': 'bg-blue-50 text-blue-700 border-blue-200',
      'Marketing': 'bg-pink-50 text-pink-700 border-pink-200',
      'AI': 'bg-violet-50 text-violet-700 border-violet-200',
      'SaaS': 'bg-indigo-50 text-indigo-700 border-indigo-200',
      'CleanTech': 'bg-emerald-50 text-emerald-700 border-emerald-200',
      'DeepTech': 'bg-purple-50 text-purple-700 border-purple-200',
      'Cloud': 'bg-cyan-50 text-cyan-700 border-cyan-200',
      'IoT': 'bg-amber-50 text-amber-700 border-amber-200',
      'Energy': 'bg-lime-50 text-lime-700 border-lime-200',
      'Transportation': 'bg-yellow-50 text-yellow-700 border-yellow-200',
    };
    
    return colorMap[industry] || 'bg-gray-50 text-gray-700 border-gray-200';
  };

  // Get cohort display name
  const getCohortDisplayName = (cohort: string) => {
    // Map cohort codes to more readable names
    const cohortMap: Record<string, string> = {
      'A20': 'A20',
      'A21': 'A21',
      'B21': 'B21',
      'C21': 'G21',
      'A22': 'A22',
      'B22': 'B22',
      'A23': 'A23',
      'B23': 'B23',
    };
    
    return cohortMap[cohort] || cohort;
  };

  // Render filters for both desktop and mobile views
  const renderFilters = () => (
    <>
      <div className="mb-6">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="flex items-center text-sm font-medium text-gray-800">
            <Calendar size={16} className="mr-2 text-blue-600" />
            Cohort
          </h3>
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
              className="size-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              checked={selectedCohorts.includes('All cohorts')}
              onChange={() => setSelectedCohorts(['All cohorts'])}
            />
            <label htmlFor="all-cohorts" className="ml-2 text-sm font-semibold text-gray-800">
              All cohorts
            </label>
          </div>
          {cohortOptions.map(cohort => (
            <div key={cohort} className="flex items-center pl-4">
              <input
                id={`cohort-${cohort}`}
                type="checkbox"
                className="size-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                checked={selectedCohorts.includes(cohort)}
                onChange={() => handleCohortChange(cohort)}
              />
              <label htmlFor={`cohort-${cohort}`} className="ml-2 text-sm text-gray-700">
                {getCohortDisplayName(cohort)}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className="my-4 border-t border-gray-200"></div>
      <div className="mb-6">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="flex items-center text-sm font-medium text-gray-800">
            <Globe size={16} className="mr-2 text-green-600" />
            Industry
          </h3>
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
              className="size-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
              checked={selectedIndustries.includes('All industries')}
              onChange={() => setSelectedIndustries(['All industries'])}
            />
            <label htmlFor="all-industries" className="ml-2 text-sm font-semibold text-gray-800">
              All industries
            </label>
          </div>
          <div className="grid grid-cols-1 gap-2 pl-4">
            {industryOptions.map(industry => (
              <div key={industry} className="flex items-center">
                <input
                  id={`industry-${industry}`}
                  type="checkbox"
                  className="size-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                  checked={selectedIndustries.includes(industry)}
                  onChange={() => handleIndustryChange(industry)}
                />
                <label htmlFor={`industry-${industry}`} className="ml-2 text-sm text-gray-700">
                  {industry}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
      {isMobile && (
        <div className="mt-6 flex justify-center">
          <button
            onClick={resetAllFilters}
            className="flex items-center text-sm text-blue-600 hover:text-blue-800 hover:underline"
          >
            <X size={14} className="mr-1" />
            Clear all filters
          </button>
        </div>
      )}
    </>
  );

  return (
    <div className="flex min-h-screen w-full flex-col bg-gradient-to-br from-gray-50 to-blue-50 md:flex-row md:overflow-hidden">
      {/* Desktop sidebar - Fixed, not scrollable */}
      <div className="hidden md:block md:w-64 md:shrink-0 md:border-r md:border-gray-200 md:bg-white md:px-6 md:py-8 md:shadow-lg">
        <div className="mb-8">
          <h2 className="mb-1 text-xl font-bold text-gray-900">Portfolio</h2>
          <p className="text-sm text-gray-500">Discover our amazing startups</p>
        </div>
        {renderFilters()}
        {showFiltersApplied && (
          <div className="mt-6 border-t border-gray-200 pt-6">
            <button
              onClick={resetAllFilters}
              className="flex w-full items-center justify-center rounded-lg bg-blue-50 px-4 py-2 text-blue-700 transition-colors hover:bg-blue-100"
            >
              <X size={14} className="mr-2" />
              Clear all filters
            </button>
          </div>
        )}
      </div>
      {/* Mobile filter drawer - Sliding from left */}
      {isMobile && mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity" 
            onClick={() => setMobileFiltersOpen(false)}
          ></div>
          {/* Drawer panel */}
          <div className="animate-slide-in-left relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl transition-all">
            <div className="flex items-center justify-between bg-gradient-to-r from-blue-600 to-green-600 px-4 py-5">
              <h2 className="text-lg font-bold text-white">Filters</h2>
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10"
                onClick={() => setMobileFiltersOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X size={20} aria-hidden="true" />
              </button>
            </div>
            <div className="p-4">{renderFilters()}</div>
            <div className="mt-auto border-t border-gray-200 p-4">
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-green-600 px-4 py-3 text-center text-sm font-medium text-white shadow-md transition-all hover:from-blue-700 hover:to-green-700"
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
        <div className="sticky top-0 z-10 border-b border-gray-200 bg-white bg-opacity-95 shadow-sm backdrop-blur-sm">
          <div className="flex flex-wrap items-center justify-between gap-3 p-4">
            {/* Mobile heading and filter button */}
            <div className="flex w-full items-center justify-between md:hidden">
              <h1 className="text-xl font-bold text-gray-900">Our Portfolio</h1>
              <button
                type="button"
                className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <Filter size={16} className="mr-2 text-blue-600" />
                <span>Filters</span>
              </button>
            </div>
            {/* Search bar */}
            <div className={`relative ${isMobile ? 'w-full' : 'w-full max-w-lg'}`}>
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className="size-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search by name, description, or industry..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-10 py-2.5 shadow-sm transition-all focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              />
              {searchTerm && (
                <button 
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
                  onClick={() => setSearchTerm('')}
                >
                  <X size={16} />
                </button>
              )}
            </div>
            {/* Sort dropdown */}
            <div className="flex items-center">
              <span className="mr-2 flex hidden items-center text-sm text-gray-600 md:inline">
                <ArrowUpDown size={14} className="mr-1 text-blue-600" />
                Sort:
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none rounded-lg border border-gray-300 bg-white py-2 pl-3 pr-8 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                style={{ backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")", backgroundPosition: "right 0.5rem center", backgroundRepeat: "no-repeat", backgroundSize: "1.5em 1.5em", paddingRight: "2.5rem" }}
              >
                <option value="Default">Default</option>
                <option value="Name A-Z">Name A-Z</option>
                <option value="Name Z-A">Name Z-A</option>
                <option value="Newest First">Newest First</option>
                <option value="Oldest First">Oldest First</option>
              </select>
            </div>
          </div>
          {/* Filter chips for active filters */}
          {showFiltersApplied && (
            <div className="flex flex-wrap gap-2 border-t border-blue-100 bg-blue-50 px-4 py-2">
              {!selectedCohorts.includes('All cohorts') && (
                selectedCohorts.map(cohort => (
                  <div key={cohort} className="inline-flex items-center rounded-full border border-blue-200 bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
                    {getCohortDisplayName(cohort)}
                    <button
                      type="button"
                      onClick={() => handleCohortChange(cohort)}
                      className="ml-1 inline-flex rounded-full text-blue-500 hover:text-blue-700"
                    >
                      <X size={14} />
                    </button>
                  </div>
                ))
              )}
              {!selectedIndustries.includes('All industries') && (
                selectedIndustries.map(industry => (
                  <div key={industry} className="inline-flex items-center rounded-full border border-green-200 bg-green-100 px-3 py-1 text-xs font-medium text-green-800">
                    {industry}
                    <button
                      type="button"
                      onClick={() => handleIndustryChange(industry)}
                      className="ml-1 inline-flex rounded-full text-green-500 hover:text-green-700"
                    >
                      <X size={14} />
                    </button>
                  </div>
                ))
              )}
              {searchTerm && (
                <div className="inline-flex items-center rounded-full border border-purple-200 bg-purple-100 px-3 py-1 text-xs font-medium text-purple-800">
                  Search: "{searchTerm}"
                  <button
                    type="button"
                    onClick={() => setSearchTerm('')}
                    className="ml-1 inline-flex rounded-full text-purple-500 hover:text-purple-700"
                  >
                    <X size={14} />
                  </button>
                </div>
              )}
              <button
                type="button"
                onClick={resetAllFilters}
                className="inline-flex items-center rounded-full border border-gray-200 bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800 hover:bg-gray-200"
              >
                Clear all
                <X size={14} className="ml-1" />
              </button>
            </div>
          )}
        </div>
        {/* Companies list - scrollable */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6" ref={mainContentRef}>
          {Object.keys(cohortGroups).length > 0 ? (
            <div className="space-y-8">
              {Object.keys(cohortGroups).sort().map(cohort => (
                <div key={cohort} className="rounded-xl border border-gray-100 bg-white p-4 shadow-md md:p-6">
                  <div className="mb-4 flex items-center">
                    <div className="mr-3 rounded-lg bg-gradient-to-r from-blue-600 to-green-600 p-2">
                      <Calendar size={20} className="text-white" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-gray-900">
                        {getCohortDisplayName(cohort)}
                      </h2>
                      <p className="text-sm text-gray-500">
                        ({cohortGroups[cohort].length} {cohortGroups[cohort].length === 1 ? 'startup' : 'startups'})
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {cohortGroups[cohort].map(company => (
                      <div 
                        key={company.id}
                        className={`overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition-all hover:shadow-lg ${activeCompany === company.id ? 'ring-2 ring-blue-500' : ''}`}
                        onClick={() => toggleCompanyExpansion(company.id)}
                      >
                        <div className="relative">
                          {/* Gradient header */}
                          <div className="h-10 bg-gradient-to-r from-blue-600 via-teal-500 to-green-500"></div>
                          {/* Logo */}
                          <div className="flex justify-center">
                            <div className="absolute top-1 rounded-lg bg-white p-2 shadow-md">
                              <div className="rounded-md bg-black p-1">
                                <Image
                                  width={60}
                                  height={60} 
                                  src="https://via.placeholder.com/60" 
                                  alt={`${company.name} logo`}
                                  className="size-12 object-contain"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="p-4 pt-10">
                          <div className="flex items-center justify-between">
                            <h3 className="text-lg font-bold text-gray-900">{company.name}</h3>
                            <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getStatusColorClass(company.status)}`}>
                              {company.status}
                            </span>
                          </div>
                          <p className="mb-2 mt-1 text-xs text-gray-500">{company.tag}</p>
                          <p className={`text-sm text-gray-600 ${activeCompany === company.id ? '' : 'line-clamp-3'}`}>
                            {company.description}
                          </p>
                          <div className="mt-4 flex flex-wrap items-center gap-2">
                            {company.industry.map(ind => (
                              <span 
                                key={ind} 
                                className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${getIndustryColorClass(ind)}`}
                              >
                                {ind}
                              </span>
                            ))}
                          </div>
                          {activeCompany === company.id && (
                            <div className="mt-4 border-t border-gray-100 pt-4">
                              <div className="flex justify-between">
                                <button className="flex items-center text-xs text-blue-600 hover:text-blue-800">
                                  <ExternalLink size={12} className="mr-1" />
                                  Visit Website
                                </button>
                                <button className="flex items-center text-xs text-green-600 hover:text-green-800">
                                  <Share2 size={12} className="mr-1" />
                                  Share
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex h-full items-center justify-center rounded-lg border border-gray-100 bg-white p-8 text-center shadow-md">
              <div>
                <div className="mx-auto flex size-20 items-center justify-center rounded-full bg-blue-50">
                  <svg className="size-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">No results found</h3>
                <p className="mt-2 max-w-md text-gray-600">We couldn't find any startups matching your current filters. Try adjusting your search criteria to see more results.</p>
                <div className="mt-6">
                  <button
                    type="button"
                    onClick={resetAllFilters}
                    className="inline-flex items-center rounded-md bg-gradient-to-r from-blue-600 to-green-600 px-6 py-3 text-sm font-medium text-white shadow-md transition-all hover:from-blue-700 hover:to-green-700"
                  >
                    Reset all filters
                  </button>
                </div>
              </div>
            </div>
          )}
          {/* Stats and highlights section */}
          {filteredCompanies.length > 0 && (
            <div className="mt-10 rounded-xl bg-gradient-to-br from-blue-500 to-green-500 p-6 text-white shadow-lg">
              <h2 className="mb-4 text-xl font-bold">Portfolio Highlights</h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                  <div className="flex items-center">
                    <div className="rounded-lg bg-white/20 p-2">
                      <Users size={20} className="text-white" />
                    </div>
                    <div className="ml-3">
                      <p className="text-lg font-bold">{filteredCompanies.length}</p>
                      <p className="text-xs text-white/80">Portfolio Companies</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                  <div className="flex items-center">
                    <div className="rounded-lg bg-white/20 p-2">
                      <Globe size={20} className="text-white" />
                    </div>
                    <div className="ml-3">
                      <p className="text-lg font-bold">{Object.keys(cohortGroups).length}</p>
                      <p className="text-xs text-white/80">Active Cohorts</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                  <div className="flex items-center">
                    <div className="rounded-lg bg-white/20 p-2">
                      <Award size={20} className="text-white" />
                    </div>
                    <div className="ml-3">
                      <p className="text-lg font-bold">
                        {new Set(filteredCompanies.flatMap(company => company.industry)).size}
                      </p>
                      <p className="text-xs text-white/80">Industries</p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-sm text-white/80">Our portfolio continues to grow with innovative startups across diverse industries.</p>
            </div>
          )}
        </div>
        {/* Back to top button */}
        {showScrollTop && (
          <button 
            onClick={scrollToTop}
            className="animate-bounce-gentle fixed bottom-6 right-6 z-20 rounded-full bg-gradient-to-r from-blue-600 to-green-600 p-3 text-white shadow-lg transition-all hover:shadow-xl"
            aria-label="Back to top"
          >
            <ChevronUp size={20} />
          </button>
        )}
      </div>
      {/* Custom animation keyframes */}
      <style jsx>{`
        @keyframes bounce-gentle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        @keyframes slide-in-left {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-bounce-gentle {
          animation: bounce-gentle 2s infinite;
        }
        .animate-slide-in-left {
          animation: slide-in-left 0.3s forwards;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;