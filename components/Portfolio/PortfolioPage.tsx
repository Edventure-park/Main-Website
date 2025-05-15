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
        name: 'Plastoceans',
        description: 'The biggest threat to our ecosystem right now is plastic and the biggest industry barriers is its unaffordability. Current market practices have contributed heavily to the dysfunctional system by institutionalizing standards the broke down barriers to entry helping bigger firms while hindering the underdogs.',
        cohort: 'A21',
        industry: ['Industrials', 'Consumer'],
        logoUrl: '/plastoceans-logo.png',
      },
      {
        id: '3',
        name: 'Plastoceans',
        description: 'The biggest threat to our ecosystem right now is plastic and the biggest market barriers is its unaffordability. Current market practices have contributed heavily to the dysfunctional system by institutionalizing standards the broke down barriers to entry helping bigger firms while hindering the underdogs.',
        cohort: 'A22',
        industry: ['Industrials'],
        logoUrl: '/plastoceans-logo.png',
      },
      {
        id: '4',
        name: 'GreenTech',
        description: 'Revolutionizing sustainable energy solutions for the modern world.',
        cohort: 'A20',
        industry: ['B2B', 'Industrials'],
        logoUrl: '/greentech-logo.png',
      },
      {
        id: '5',
        name: 'EduLearn',
        description: 'Making education accessible and engaging for everyone.',
        cohort: 'B21',
        industry: ['Education'],
        logoUrl: '/edulearn-logo.png',
      },
      {
        id: '6',
        name: 'FinancePro',
        description: 'Next-generation financial technology for businesses and consumers.',
        cohort: 'C21',
        industry: ['Fintech'],
        logoUrl: '/financepro-logo.png',
      },
      {
        id: '7',
        name: 'HealthPlus',
        description: 'Innovative healthcare solutions for better patient outcomes.',
        cohort: 'A22',
        industry: ['Healthcare'],
        logoUrl: '/healthplus-logo.png',
      },
      {
        id: '8',
        name: 'ConstructWise',
        description: 'Transforming the construction industry with smart technology.',
        cohort: 'B22',
        industry: ['Housing and Construction'],
        logoUrl: '/constructwise-logo.png',
      },
      {
        id: '9',
        name: 'MarketBoost',
        description: 'Helping businesses reach their target audience effectively.',
        cohort: 'A23',
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