"use client";
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, Filter, X } from 'lucide-react';
import { motion } from 'framer-motion';

import  mockCompanies  from '@/data/companiesData';

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

  // Load companies from the imported data
  useEffect(() => {
    setCompanies(mockCompanies);
    setFilteredCompanies(mockCompanies);
  }, []);

  // Extract unique cohorts and industries for filters
  const cohorts = ['All cohorts', ...Array.from(new Set(companies.map(company => company.cohort)))];
  const industries = ['All industries', ...Array.from(new Set(companies.flatMap(company => company.industry)))];

  // Filter companies based on search, cohorts, and industries
  useEffect(() => {
    let result = [...companies];
    
    // Apply search filter
    if (searchTerm) {
      result = result.filter(company => 
        company.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        company.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Apply cohort filter
    if (!selectedCohorts.includes('All cohorts')) {
      result = result.filter(company => selectedCohorts.includes(company.cohort));
    }
    
    // Apply industry filter
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
    } else if (sortBy === 'Newest') {
      // Assuming newer cohorts have higher alphabetical value (e.g., B20 > A20)
      result.sort((a, b) => b.cohort.localeCompare(a.cohort));
    } else if (sortBy === 'Oldest') {
      // Assuming older cohorts have lower alphabetical value
      result.sort((a, b) => a.cohort.localeCompare(b.cohort));
    }
    
    setFilteredCompanies(result);
  }, [companies, searchTerm, selectedCohorts, selectedIndustries, sortBy]);

  // Toggle cohort selection
  const toggleCohort = (cohort: string) => {
    if (cohort === 'All cohorts') {
      setSelectedCohorts(['All cohorts']);
    } else {
      const newSelection = selectedCohorts.includes(cohort)
        ? selectedCohorts.filter(c => c !== cohort)
        : [...selectedCohorts.filter(c => c !== 'All cohorts'), cohort];
      
      setSelectedCohorts(newSelection.length ? newSelection : ['All cohorts']);
    }
  };

  // Toggle industry selection
  const toggleIndustry = (industry: string) => {
    if (industry === 'All industries') {
      setSelectedIndustries(['All industries']);
    } else {
      const newSelection = selectedIndustries.includes(industry)
        ? selectedIndustries.filter(i => i !== industry)
        : [...selectedIndustries.filter(i => i !== 'All industries'), industry];
      
      setSelectedIndustries(newSelection.length ? newSelection : ['All industries']);
    }
  };

  // Toggle expanded section
  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <motion.h1 
          className="mb-8 text-center text-3xl font-bold md:text-4xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Portfolio Companies
        </motion.h1>
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Search companies..."
              className="w-full rounded-lg border border-gray-300 p-3 pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="absolute left-3 top-1/2 -translate-y-1/2">
              <svg xmlns="http://www.w3.org/2000/svg" className="size-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </motion.div>
        <div className="flex flex-col gap-6 md:flex-row">
          {/* Mobile Filter Button */}
          <motion.div 
            className="mb-4 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <button
              onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
              className="flex w-full items-center justify-center rounded-lg bg-green-600 p-3 text-white"
            >
              <Filter className="mr-2" size={18} />
              {mobileFiltersOpen ? 'Hide Filters' : 'Show Filters'}
            </button>
          </motion.div>
          {/* Filters - Desktop always visible, Mobile conditional */}
          <motion.div 
            className={`${mobileFiltersOpen || !isMobile ? 'block' : 'hidden'} space-y-6 md:w-1/4`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <div className="rounded-lg bg-gray-50 p-4 shadow-sm">
              <div 
                className="flex cursor-pointer items-center justify-between"
                onClick={() => toggleSection('cohorts')}
              >
                <h3 className="text-lg font-semibold">Cohort</h3>
                {expandedSection === 'cohorts' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>
              {expandedSection === 'cohorts' && (
                <div className="mt-3 space-y-2">
                  {cohorts.map((cohort) => (
                    <div key={cohort} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`cohort-${cohort}`}
                        checked={selectedCohorts.includes(cohort)}
                        onChange={() => toggleCohort(cohort)}
                        className="mr-2"
                      />
                      <label htmlFor={`cohort-${cohort}`} className="cursor-pointer">{cohort}</label>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="rounded-lg bg-gray-50 p-4 shadow-sm">
              <div 
                className="flex cursor-pointer items-center justify-between"
                onClick={() => toggleSection('industries')}
              >
                <h3 className="text-lg font-semibold">Industry</h3>
                {expandedSection === 'industries' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>
              {expandedSection === 'industries' && (
                <div className="mt-3 space-y-2">
                  {industries.map((industry) => (
                    <div key={industry} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`industry-${industry}`}
                        checked={selectedIndustries.includes(industry)}
                        onChange={() => toggleIndustry(industry)}
                        className="mr-2"
                      />
                      <label htmlFor={`industry-${industry}`} className="cursor-pointer">{industry}</label>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="rounded-lg bg-gray-50 p-4 shadow-sm">
              <div 
                className="flex cursor-pointer items-center justify-between"
                onClick={() => toggleSection('sort')}
              >
                <h3 className="text-lg font-semibold">Sort By</h3>
                {expandedSection === 'sort' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>
              {expandedSection === 'sort' && (
                <div className="mt-3 space-y-2">
                  {['Default', 'Name A-Z', 'Name Z-A', 'Newest', 'Oldest'].map((option) => (
                    <div key={option} className="flex items-center">
                      <input
                        type="radio"
                        id={`sort-${option}`}
                        checked={sortBy === option}
                        onChange={() => setSortBy(option)}
                        className="mr-2"
                      />
                      <label htmlFor={`sort-${option}`} className="cursor-pointer">{option}</label>
                    </div>
                  ))}
                </div>
              )}
            </div>
            {/* Active Filters */}
            <div className="rounded-lg bg-gray-50 p-4 shadow-sm">
              <h3 className="mb-3 text-lg font-semibold">Active Filters</h3>
              <div className="flex flex-wrap gap-2">
                {selectedCohorts.filter(c => c !== 'All cohorts').map((cohort) => (
                  <div key={`filter-${cohort}`} className="flex items-center rounded-full bg-green-100 px-3 py-1 text-green-800">
                    <span className="mr-1">{cohort}</span>
                    <X 
                      size={14} 
                      className="cursor-pointer" 
                      onClick={() => toggleCohort(cohort)}
                    />
                  </div>
                ))}
                {selectedIndustries.filter(i => i !== 'All industries').map((industry) => (
                  <div key={`filter-${industry}`} className="flex items-center rounded-full bg-blue-100 px-3 py-1 text-blue-800">
                    <span className="mr-1">{industry}</span>
                    <X 
                      size={14} 
                      className="cursor-pointer" 
                      onClick={() => toggleIndustry(industry)}
                    />
                  </div>
                ))}
                {(selectedCohorts.length > 0 && !selectedCohorts.includes('All cohorts')) || 
                 (selectedIndustries.length > 0 && !selectedIndustries.includes('All industries')) ? (
                   <button 
                    className="text-sm text-red-600 underline"
                    onClick={() => {
                      setSelectedCohorts(['All cohorts']);
                      setSelectedIndustries(['All industries']);
                    }}
                  >
                     Clear All
                   </button>
                ) : null}
              </div>
            </div>
          </motion.div>
          {/* Companies Grid */}
          <motion.div 
            className="md:w-3/4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="mb-4 text-gray-600">
              Showing {filteredCompanies.length} of {companies.length} companies
            </div>
            {filteredCompanies.length === 0 ? (
              <div className="rounded-lg bg-gray-50 p-8 text-center">
                <h3 className="mb-2 text-xl font-semibold">No companies found</h3>
                <p className="text-gray-600">Try adjusting your filters or search term</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredCompanies.map((company) => (
                  <motion.div 
                    key={company.id}
                    className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
                    variants={itemVariants}
                  >
                    <div className="flex h-full flex-col p-4">
                      <div className="mb-4 flex items-center">
                        <div className="mr-3 size-12 shrink-0 overflow-hidden rounded-full bg-gray-200">
                          <Image 
                            src={company.logoUrl || '/default-logo.png'} 
                            alt={`${company.name} logo`}
                            width={48}
                            height={48}
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold">{company.name}</h3>
                          <div className="flex items-center text-sm text-gray-600">
                            <span className="rounded bg-green-100 px-2 py-0.5 text-xs text-green-800">
                              {company.cohort}
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="mb-3 line-clamp-4 grow text-sm text-gray-600">
                        {company.description}
                      </p>
                      <div className="mt-auto flex flex-wrap gap-1">
                        {company.industry.map((ind) => (
                          <span 
                            key={`${company.id}-${ind}`}
                            className="rounded-full bg-blue-50 px-2 py-0.5 text-xs text-blue-700"
                          >
                            {ind}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;