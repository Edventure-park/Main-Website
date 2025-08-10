// "use client";
// import Image from 'next/image';
// import React, { useState, useEffect } from 'react';
// import { ChevronDown, ChevronUp, Filter, X } from 'lucide-react';
// import { motion } from 'framer-motion';

// import  mockCompanies  from '@/data/companiesData';

// // Types
// interface Company {
//   id: string;
//   name: string;
//   description: string;
//   cohort: string;
//   industry: string[];
//   logoUrl: string;
// }

// const Portfolio: React.FC = () => {
//   // State
//   const [companies, setCompanies] = useState<Company[]>([]);
//   const [filteredCompanies, setFilteredCompanies] = useState<Company[]>([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedCohorts, setSelectedCohorts] = useState<string[]>(['All cohorts']);
//   const [selectedIndustries, setSelectedIndustries] = useState<string[]>(['All industries']);
//   const [sortBy, setSortBy] = useState('Default');
//   const [expandedSection, setExpandedSection] = useState<string | null>(null);
//   const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  
//   // Handle window resize for responsive design
//   const [isMobile, setIsMobile] = useState(false);
  
//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };
    
//     // Set initial value
//     handleResize();
    
//     // Add event listener
//     window.addEventListener('resize', handleResize);
    
//     // Clean up
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   // Load companies from the imported data
//   useEffect(() => {
//     setCompanies(mockCompanies);
//     setFilteredCompanies(mockCompanies);
//   }, []);

//   // Extract unique cohorts and industries for filters
//   const cohorts = ['All cohorts', ...Array.from(new Set(companies.map(company => company.cohort)))];
//   const industries = ['All industries', ...Array.from(new Set(companies.flatMap(company => company.industry)))];

//   // Filter companies based on search, cohorts, and industries
//   useEffect(() => {
//     let result = [...companies];
    
//     // Apply search filter
//     if (searchTerm) {
//       result = result.filter(company => 
//         company.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
//         company.description.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     }
    
//     // Apply cohort filter
//     if (!selectedCohorts.includes('All cohorts')) {
//       result = result.filter(company => selectedCohorts.includes(company.cohort));
//     }
    
//     // Apply industry filter
//     if (!selectedIndustries.includes('All industries')) {
//       result = result.filter(company => 
//         company.industry.some(ind => selectedIndustries.includes(ind))
//       );
//     }
    
//     // Apply sorting
//     if (sortBy === 'Name A-Z') {
//       result.sort((a, b) => a.name.localeCompare(b.name));
//     } else if (sortBy === 'Name Z-A') {
//       result.sort((a, b) => b.name.localeCompare(a.name));
//     } else if (sortBy === 'Newest') {
//       // Assuming newer cohorts have higher alphabetical value (e.g., B20 > A20)
//       result.sort((a, b) => b.cohort.localeCompare(a.cohort));
//     } else if (sortBy === 'Oldest') {
//       // Assuming older cohorts have lower alphabetical value
//       result.sort((a, b) => a.cohort.localeCompare(b.cohort));
//     }
    
//     setFilteredCompanies(result);
//   }, [companies, searchTerm, selectedCohorts, selectedIndustries, sortBy]);

//   // Toggle cohort selection
//   const toggleCohort = (cohort: string) => {
//     if (cohort === 'All cohorts') {
//       setSelectedCohorts(['All cohorts']);
//     } else {
//       const newSelection = selectedCohorts.includes(cohort)
//         ? selectedCohorts.filter(c => c !== cohort)
//         : [...selectedCohorts.filter(c => c !== 'All cohorts'), cohort];
      
//       setSelectedCohorts(newSelection.length ? newSelection : ['All cohorts']);
//     }
//   };

//   // Toggle industry selection
//   const toggleIndustry = (industry: string) => {
//     if (industry === 'All industries') {
//       setSelectedIndustries(['All industries']);
//     } else {
//       const newSelection = selectedIndustries.includes(industry)
//         ? selectedIndustries.filter(i => i !== industry)
//         : [...selectedIndustries.filter(i => i !== 'All industries'), industry];
      
//       setSelectedIndustries(newSelection.length ? newSelection : ['All industries']);
//     }
//   };

//   // Toggle expanded section
//   const toggleSection = (section: string) => {
//     setExpandedSection(expandedSection === section ? null : section);
//   };

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: { 
//       opacity: 1,
//       transition: { 
//         staggerChildren: 0.1
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: { 
//       y: 0, 
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 12
//       }
//     }
//   };

//   return (
//     <div className="min-h-screen bg-white">
//       <div className="container mx-auto px-4 py-8">
//         <motion.h1 
//           className="mb-8 text-center text-3xl font-bold md:text-4xl"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           Our Portfolio Companies
//         </motion.h1>
//         <motion.div 
//           className="mb-8"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.2, duration: 0.5 }}
//         >
//           <div className="relative">
//             <input
//               type="text"
//               placeholder="Search companies..."
//               className="w-full rounded-lg border border-gray-300 p-3 pl-10"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//             <div className="absolute left-3 top-1/2 -translate-y-1/2">
//               <svg xmlns="http://www.w3.org/2000/svg" className="size-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//               </svg>
//             </div>
//           </div>
//         </motion.div>
//         <div className="flex flex-col gap-6 md:flex-row">
//           {/* Mobile Filter Button */}
//           <motion.div 
//             className="mb-4 md:hidden"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.3, duration: 0.5 }}
//           >
//             <button
//               onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
//               className="flex w-full items-center justify-center rounded-lg bg-green-600 p-3 text-white"
//             >
//               <Filter className="mr-2" size={18} />
//               {mobileFiltersOpen ? 'Hide Filters' : 'Show Filters'}
//             </button>
//           </motion.div>
//           {/* Filters - Desktop always visible, Mobile conditional */}
//           <motion.div 
//             className={`${mobileFiltersOpen || !isMobile ? 'block' : 'hidden'} space-y-6 md:w-1/4`}
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.4, duration: 0.5 }}
//           >
//             <div className="rounded-lg bg-gray-50 p-4 shadow-sm">
//               <div 
//                 className="flex cursor-pointer items-center justify-between"
//                 onClick={() => toggleSection('cohorts')}
//               >
//                 <h3 className="text-lg font-semibold">Cohort</h3>
//                 {expandedSection === 'cohorts' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
//               </div>
//               {expandedSection === 'cohorts' && (
//                 <div className="mt-3 space-y-2">
//                   {cohorts.map((cohort) => (
//                     <div key={cohort} className="flex items-center">
//                       <input
//                         type="checkbox"
//                         id={`cohort-${cohort}`}
//                         checked={selectedCohorts.includes(cohort)}
//                         onChange={() => toggleCohort(cohort)}
//                         className="mr-2"
//                       />
//                       <label htmlFor={`cohort-${cohort}`} className="cursor-pointer">{cohort}</label>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//             <div className="rounded-lg bg-gray-50 p-4 shadow-sm">
//               <div 
//                 className="flex cursor-pointer items-center justify-between"
//                 onClick={() => toggleSection('industries')}
//               >
//                 <h3 className="text-lg font-semibold">Industry</h3>
//                 {expandedSection === 'industries' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
//               </div>
//               {expandedSection === 'industries' && (
//                 <div className="mt-3 space-y-2">
//                   {industries.map((industry) => (
//                     <div key={industry} className="flex items-center">
//                       <input
//                         type="checkbox"
//                         id={`industry-${industry}`}
//                         checked={selectedIndustries.includes(industry)}
//                         onChange={() => toggleIndustry(industry)}
//                         className="mr-2"
//                       />
//                       <label htmlFor={`industry-${industry}`} className="cursor-pointer">{industry}</label>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//             <div className="rounded-lg bg-gray-50 p-4 shadow-sm">
//               <div 
//                 className="flex cursor-pointer items-center justify-between"
//                 onClick={() => toggleSection('sort')}
//               >
//                 <h3 className="text-lg font-semibold">Sort By</h3>
//                 {expandedSection === 'sort' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
//               </div>
//               {expandedSection === 'sort' && (
//                 <div className="mt-3 space-y-2">
//                   {['Default', 'Name A-Z', 'Name Z-A', 'Newest', 'Oldest'].map((option) => (
//                     <div key={option} className="flex items-center">
//                       <input
//                         type="radio"
//                         id={`sort-${option}`}
//                         checked={sortBy === option}
//                         onChange={() => setSortBy(option)}
//                         className="mr-2"
//                       />
//                       <label htmlFor={`sort-${option}`} className="cursor-pointer">{option}</label>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//             {/* Active Filters */}
//             <div className="rounded-lg bg-gray-50 p-4 shadow-sm">
//               <h3 className="mb-3 text-lg font-semibold">Active Filters</h3>
//               <div className="flex flex-wrap gap-2">
//                 {selectedCohorts.filter(c => c !== 'All cohorts').map((cohort) => (
//                   <div key={`filter-${cohort}`} className="flex items-center rounded-full bg-green-100 px-3 py-1 text-green-800">
//                     <span className="mr-1">{cohort}</span>
//                     <X 
//                       size={14} 
//                       className="cursor-pointer" 
//                       onClick={() => toggleCohort(cohort)}
//                     />
//                   </div>
//                 ))}
//                 {selectedIndustries.filter(i => i !== 'All industries').map((industry) => (
//                   <div key={`filter-${industry}`} className="flex items-center rounded-full bg-blue-100 px-3 py-1 text-blue-800">
//                     <span className="mr-1">{industry}</span>
//                     <X 
//                       size={14} 
//                       className="cursor-pointer" 
//                       onClick={() => toggleIndustry(industry)}
//                     />
//                   </div>
//                 ))}
//                 {(selectedCohorts.length > 0 && !selectedCohorts.includes('All cohorts')) || 
//                  (selectedIndustries.length > 0 && !selectedIndustries.includes('All industries')) ? (
//                    <button 
//                     className="text-sm text-red-600 underline"
//                     onClick={() => {
//                       setSelectedCohorts(['All cohorts']);
//                       setSelectedIndustries(['All industries']);
//                     }}
//                   >
//                      Clear All
//                    </button>
//                 ) : null}
//               </div>
//             </div>
//           </motion.div>
//           {/* Companies Grid */}
//           <motion.div 
//             className="md:w-3/4"
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//           >
//             <div className="mb-4 text-gray-600">
//               Showing {filteredCompanies.length} of {companies.length} companies
//             </div>
//             {filteredCompanies.length === 0 ? (
//               <div className="rounded-lg bg-gray-50 p-8 text-center">
//                 <h3 className="mb-2 text-xl font-semibold">No companies found</h3>
//                 <p className="text-gray-600">Try adjusting your filters or search term</p>
//               </div>
//             ) : (
//               <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
//                 {filteredCompanies.map((company) => (
//                   <motion.div 
//                     key={company.id}
//                     className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
//                     variants={itemVariants}
//                   >
//                     <div className="flex h-full flex-col p-4">
//                       <div className="mb-4 flex items-center">
//                         <div className="mr-3 size-12 shrink-0 overflow-hidden rounded-full bg-gray-200">
//                           <Image 
//                             src={company.logoUrl || '/default-logo.png'} 
//                             alt={`${company.name} logo`}
//                             width={48}
//                             height={48}
//                             className="object-cover"
//                           />
//                         </div>
//                         <div>
//                           <h3 className="text-lg font-bold">{company.name}</h3>
//                           <div className="flex items-center text-sm text-gray-600">
//                             <span className="rounded bg-green-100 px-2 py-0.5 text-xs text-green-800">
//                               {company.cohort}
//                             </span>
//                           </div>
//                         </div>
//                       </div>
//                       <p className="mb-3 line-clamp-4 grow text-sm text-gray-600">
//                         {company.description}
//                       </p>
//                       <div className="mt-auto flex flex-wrap gap-1">
//                         {company.industry.map((ind) => (
//                           <span 
//                             key={`${company.id}-${ind}`}
//                             className="rounded-full bg-blue-50 px-2 py-0.5 text-xs text-blue-700"
//                           >
//                             {ind}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             )}
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Portfolio;

/* eslint-disable react/jsx-newline */
"use client";
import Image from 'next/image';
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Filter, X, Search, Grid, List, RefreshCw, Calendar, TrendingUp, ChevronDown } from 'lucide-react';
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
  const [isLoading, setIsLoading] = useState(true);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [quickFilter, setQuickFilter] = useState<string>('');
  const [isMobile, setIsMobile] = useState(false);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  
  // Handle window resize for responsive design
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
    // Simulate loading delay to ensure data is properly loaded
    const loadData = async () => {
      setIsLoading(true);
      try {
        // In a real app, you might fetch data here
        // For now, we're just using the mock data
        setCompanies(mockCompanies || []);
        setFilteredCompanies(mockCompanies || []);
      } catch (error) {
        console.error("Error loading companies:", error);
        setCompanies([]);
        setFilteredCompanies([]);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadData();
  }, []);

  // Extract unique cohorts and industries for filters - with null checks
  const cohorts = useMemo(() => 
    ['All cohorts', ...Array.from(new Set(companies?.map(company => company.cohort) || []))],
    [companies]
  );
  
  const industries = useMemo(() => 
    ['All industries', ...Array.from(new Set(companies?.flatMap(company => company.industry) || []))],
    [companies]
  );

  // Calculate active filters count for mobile display
  const activeFiltersCount = useMemo(() => {
    let count = 0;
    if (searchTerm) count++;
    if (quickFilter) count++;
    if (selectedCohorts.some(c => c !== 'All cohorts')) count++;
    if (selectedIndustries.some(i => i !== 'All industries')) count++;
    if (sortBy !== 'Default') count++;
    
    return count;
  }, [searchTerm, quickFilter, selectedCohorts, selectedIndustries, sortBy]);

  // Quick filter options
  const quickFilterOptions = useMemo(() => {
    const cohortCounts = companies.reduce((acc, company) => {
      acc[company.cohort] = (acc[company.cohort] || 0) + 1;
      
      return acc;
    }, {} as Record<string, number>);

    return [
      { label: 'All', value: '', count: companies.length },
      { label: 'Latest (A23)', value: 'A23', count: cohortCounts['A23'] || 0 },
      { label: 'Tech', value: 'tech', count: companies.filter(c => 
        c.industry.some(i => ['Tech', 'Software', 'AI', 'SaaS', 'Technology'].includes(i))
      ).length },
      { label: 'Health', value: 'health', count: companies.filter(c => 
        c.industry.some(i => ['Health', 'HealthTech', 'Healthcare', 'Wellness'].includes(i))
      ).length },
      { label: 'Launched', value: 'LAUNCHED', count: cohortCounts['LAUNCHED'] || 0 },
    ];
  }, [companies]);

  // Filter companies based on search, cohorts, and industries with performance optimization
  const filteredAndSortedCompanies = useMemo(() => {
    if (!companies.length) return [];
    
    let result = [...companies];
    
    // Apply quick filter first
    if (quickFilter) {
      if (quickFilter === 'A23' || quickFilter === 'LAUNCHED') {
        result = result.filter(company => company.cohort === quickFilter);
      } else if (quickFilter === 'tech') {
        result = result.filter(company => 
          company.industry.some(i => ['Tech', 'Software', 'AI', 'SaaS', 'Technology'].includes(i))
        );
      } else if (quickFilter === 'health') {
        result = result.filter(company => 
          company.industry.some(i => ['Health', 'HealthTech', 'Healthcare', 'Wellness'].includes(i))
        );
      }
    }
    
    // Apply search filter
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      result = result.filter(company => 
        company.name.toLowerCase().includes(searchLower) || 
        company.description.toLowerCase().includes(searchLower) ||
        company.industry.some(ind => ind.toLowerCase().includes(searchLower)) ||
        company.cohort.toLowerCase().includes(searchLower)
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
    switch (sortBy) {
      case 'Name A-Z':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'Name Z-A':
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'Newest':
        result.sort((a, b) => {
          // Custom sort for cohorts: A23 > B22 > A22 > etc.
          const cohortOrder = ['A23', 'B22', 'A22', 'C21', 'B21', 'A21', 'B20', 'A20', 'LAUNCHED'];
          const aIndex = cohortOrder.indexOf(a.cohort);
          const bIndex = cohortOrder.indexOf(b.cohort);
          
          return (aIndex === -1 ? 999 : aIndex) - (bIndex === -1 ? 999 : bIndex);
        });
        break;
      case 'Oldest':
        result.sort((a, b) => {
          const cohortOrder = ['A20', 'B20', 'A21', 'B21', 'C21', 'A22', 'B22', 'A23', 'LAUNCHED'];
          const aIndex = cohortOrder.indexOf(a.cohort);
          const bIndex = cohortOrder.indexOf(b.cohort);
          
          return (aIndex === -1 ? 999 : aIndex) - (bIndex === -1 ? 999 : bIndex);
        });
        break;
      case 'Industry':
        result.sort((a, b) => a.industry[0]?.localeCompare(b.industry[0] || '') || 0);
        break;
      default:
        // Default order - no sorting applied
        break;
    }
    
    return result;
  }, [companies, searchTerm, selectedCohorts, selectedIndustries, sortBy, quickFilter]);

  useEffect(() => {
    setFilteredCompanies(filteredAndSortedCompanies);
  }, [filteredAndSortedCompanies]);

  // Toggle cohort selection with callback optimization
  const toggleCohort = useCallback((cohort: string) => {
    if (cohort === 'All cohorts') {
      setSelectedCohorts(['All cohorts']);
      setQuickFilter(''); // Clear quick filter when selecting all
    } else {
      setSelectedCohorts(prev => {
        const newSelection = prev.includes(cohort)
          ? prev.filter(c => c !== cohort)
          : [...prev.filter(c => c !== 'All cohorts'), cohort];
        
        return newSelection.length ? newSelection : ['All cohorts'];
      });
    }
  }, []);

  // Toggle industry selection with callback optimization
  const toggleIndustry = useCallback((industry: string) => {
    if (industry === 'All industries') {
      setSelectedIndustries(['All industries']);
    } else {
      setSelectedIndustries(prev => {
        const newSelection = prev.includes(industry)
          ? prev.filter(i => i !== industry)
          : [...prev.filter(i => i !== 'All industries'), industry];
        
        return newSelection.length ? newSelection : ['All industries'];
      });
    }
  }, []);

  // Handle quick filter selection
  const handleQuickFilter = useCallback((value: string) => {
    setQuickFilter(prev => prev === value ? '' : value);
    if (value === 'A23' || value === 'LAUNCHED') {
      setSelectedCohorts([value]);
    } else if (value === '') {
      setSelectedCohorts(['All cohorts']);
      setSelectedIndustries(['All industries']);
    }
  }, []);

  // Reset all filters
  const resetAllFilters = useCallback(() => {
    setSelectedCohorts(['All cohorts']);
    setSelectedIndustries(['All industries']);
    setSearchTerm('');
    setQuickFilter('');
    setSortBy('Default');
  }, []);

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
} as const;

  // Loading state
  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white">
        <div className="text-center">
          <div className="mx-auto mb-4 size-16 animate-spin rounded-full border-4 border-gray-200 border-t-green-600"></div>
          <p className="text-gray-600">Loading companies...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 py-6 md:py-8">
        <motion.div 
          className="mb-6 text-center md:mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="mb-3 text-3xl font-bold text-gray-900 md:mb-4 md:text-4xl lg:text-5xl">
            Our Portfolio Companies
          </h1>
          <p className="text-base text-gray-600 md:text-lg">
            Discover our diverse ecosystem of innovative startups and scale-ups
          </p>
        </motion.div>
        {/* Enhanced Search and Filters Section */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">
            {/* Header Section */}
            <div className="bg-gradient-to-r from-green-600 via-green-500 to-emerald-500 p-4 md:px-6 md:py-4">
              <div className="flex flex-col items-start justify-between gap-3 md:flex-row md:items-center md:gap-4">
                <div className="flex-1">
                  <h2 className="text-lg font-semibold text-white md:text-xl">Filter & Search</h2>
                  <p className="text-sm text-green-100 md:text-base">Find companies by cohort, industry, or name</p>
                </div>
                <div className="flex items-center gap-2">
                  {/* Mobile Filter Toggle */}
                  <button
                    onClick={() => setShowMobileFilters(!showMobileFilters)}
                    className="flex items-center gap-2 rounded-lg bg-white/20 px-3 py-2 text-sm text-white transition-colors hover:bg-white/30 md:hidden"
                  >
                    <Filter size={16} />
                    Filters
                    {activeFiltersCount > 0 && (
                      <span className="ml-1 rounded-full bg-white/30 px-1.5 py-0.5 text-xs text-white">
                        {activeFiltersCount}
                      </span>
                    )}
                    <motion.div
                      animate={{ rotate: showMobileFilters ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown size={16} />
                    </motion.div>
                  </button>
                  
                  {/* Reset Button */}
                  <button
                    onClick={resetAllFilters}
                    className="flex items-center gap-2 rounded-lg bg-white/20 px-3 py-2 text-sm text-white transition-colors hover:bg-white/30 md:px-4">
                    <RefreshCw size={16} />
                    <span className="hidden sm:inline">Reset All</span>
                    <span className="sm:hidden">Reset</span>
                  </button>
                </div>
              </div>
            </div>
            {/* Main Filter Content */}
            <motion.div
              initial={false}
              animate={{
                height: showMobileFilters || !isMobile ? 'auto' : 0,
                opacity: showMobileFilters || !isMobile ? 1 : 0
              }}
              transition={{ duration: 0.3 }}
              className={`${isMobile && !showMobileFilters ? 'overflow-hidden' : ''}`}
            >
              <div className="p-4 md:p-6">
                {/* Search Bar */}
                <div className="mb-4 md:mb-6">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search companies, industries, or descriptions..."
                      className="w-full rounded-xl border-2 border-gray-200 bg-gray-50 p-3 pl-12 text-sm transition-all focus:border-green-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-200 md:p-4"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <Search className="absolute left-3 top-1/2 size-5 -translate-y-1/2 text-gray-400 md:left-4" />
                    {searchTerm && (
                      <button
                        onClick={() => setSearchTerm('')}
                        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-gray-200 p-1 text-gray-400 hover:bg-gray-300 hover:text-gray-600 md:right-4"
                      >
                        <X size={14} />
                      </button>
                    )}
                  </div>
                </div>
                {/* Quick Filter Buttons */}
                <div className="mb-4 md:mb-6">
                  <h3 className="mb-3 text-sm font-medium text-gray-700">Quick Filters</h3>
                  <div className="flex flex-wrap gap-2">
                    {quickFilterOptions.map((option) => (
                      <button
                      key={option.value}
                      onClick={() => handleQuickFilter(option.value)}
                      className={`group relative overflow-hidden rounded-full px-3 py-2 text-xs font-medium transition-all md:px-4 md:text-sm ${
                        quickFilter === option.value
                          ? 'bg-green-600 text-white shadow-md'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                        <span className="relative z-10">
                          <span className="hidden sm:inline">{option.label}</span>
                          <span className="sm:hidden">{option.label.split(' ')[0]}</span>
                          <span className="ml-1">({option.count})</span>
                        </span>
                        {quickFilter === option.value && (
                        <motion.div
                          className="absolute inset-0 bg-green-600"
                          layoutId="quickFilterBg"
                          initial={false}
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                      </button>
                  ))}
                  </div>
                </div>
                {/* Detailed Filters */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
                  {/* Cohort Filter */}
                  <div>
                    <h3 className="mb-3 flex items-center gap-2 text-sm font-medium text-gray-700">
                      <Calendar size={16} />
                      Cohort
                    </h3>
                    <div className="max-h-40 overflow-y-auto rounded-lg border border-gray-200 bg-gray-50 p-2 md:max-h-48 md:p-3">
                      <div className="space-y-1 md:space-y-2">
                        {cohorts.map((cohort) => (
                          <label
                          key={cohort}
                          className={`flex cursor-pointer items-center rounded-md p-2 text-xs transition-colors md:text-sm ${
                            selectedCohorts.includes(cohort)
                              ? 'bg-green-100 text-green-800'
                              : 'hover:bg-gray-100'
                          }`}
                        >
                            <input
                            type="checkbox"
                            checked={selectedCohorts.includes(cohort)}
                            onChange={() => toggleCohort(cohort)}
                            className="mr-2 rounded border-gray-300 text-green-600 focus:ring-2 focus:ring-green-500 md:mr-3"
                          />
                            <span className="flex-1">{cohort}</span>
                            <span className="text-xs text-gray-500">
                              ({companies.filter(c => cohort === 'All cohorts' || c.cohort === cohort).length})
                            </span>
                          </label>
                      ))}
                      </div>
                    </div>
                  </div>
                  {/* Industry Filter */}
                  <div>
                    <h3 className="mb-3 flex items-center gap-2 text-sm font-medium text-gray-700">
                      <TrendingUp size={16} />
                      Industry
                    </h3>
                    <div className="max-h-40 overflow-y-auto rounded-lg border border-gray-200 bg-gray-50 p-2 md:max-h-48 md:p-3">
                      <div className="space-y-1 md:space-y-2">
                        {industries.slice(0, 15).map((industry) => (
                          <label
                          key={industry}
                          className={`flex cursor-pointer items-center rounded-md p-2 text-xs transition-colors md:text-sm ${
                            selectedIndustries.includes(industry)
                              ? 'bg-blue-100 text-blue-800'
                              : 'hover:bg-gray-100'
                          }`}
                        >
                            <input
                            type="checkbox"
                            checked={selectedIndustries.includes(industry)}
                            onChange={() => toggleIndustry(industry)}
                            className="mr-2 rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500 md:mr-3"
                          />
                            <span className="flex-1">{industry}</span>
                            <span className="text-xs text-gray-500">
                              ({companies.filter(c => industry === 'All industries' || c.industry.includes(industry)).length})
                            </span>
                          </label>
                      ))}
                        {industries.length > 15 && (
                        <div className="pt-2 text-xs text-gray-500">
                          +{industries.length - 15} more industries...
                        </div>
                      )}
                      </div>
                    </div>
                  </div>
                  {/* Sort & View Options */}
                  <div>
                    <h3 className="mb-3 flex items-center gap-2 text-sm font-medium text-gray-700">
                      <Filter size={16} />
                      Sort & View
                    </h3>
                    <div className="space-y-3 md:space-y-4">
                      {/* Sort Options */}
                      <div>
                        <label className="mb-2 block text-xs font-medium text-gray-600">Sort By</label>
                        <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="w-full rounded-lg border border-gray-300 bg-white p-2 text-xs focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200 md:px-3 md:text-sm"
                      >
                          <option value="Default">Default Order</option>
                          <option value="Name A-Z">Name A-Z</option>
                          <option value="Name Z-A">Name Z-A</option>
                          <option value="Newest">Newest First</option>
                          <option value="Oldest">Oldest First</option>
                          <option value="Industry">By Industry</option>
                        </select>
                      </div>
                      {/* View Mode */}
                      <div>
                        <label className="mb-2 block text-xs font-medium text-gray-600">View Mode</label>
                        <div className="flex rounded-lg border border-gray-300 bg-gray-50 p-1">
                          <button
                          onClick={() => setViewMode('grid')}
                          className={`flex flex-1 items-center justify-center gap-1 rounded-md py-2 text-xs transition-colors md:gap-2 md:text-sm ${
                            viewMode === 'grid' 
                              ? 'bg-white text-green-600 shadow-sm' 
                              : 'text-gray-600 hover:text-gray-800'
                          }`}
                        >
                            <Grid size={14} />
                            <span className="hidden sm:inline">Grid</span>
                          </button>
                          <button
                          onClick={() => setViewMode('list')}
                          className={`flex flex-1 items-center justify-center gap-2 rounded-md py-2 text-sm transition-colors ${
                            viewMode === 'list' 
                              ? 'bg-white text-green-600 shadow-sm' 
                              : 'text-gray-600 hover:text-gray-800'
                          }`}
                        >
                            <List size={16} />
                            List
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Active Filters Display */}
                {((selectedCohorts.length > 0 && !selectedCohorts.includes('All cohorts')) || 
                (selectedIndustries.length > 0 && !selectedIndustries.includes('All industries')) ||
                searchTerm || quickFilter) && (
                <div className="mt-6 border-t border-gray-200 pt-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-sm font-medium text-gray-700">Active filters:</span>
                    
                    {searchTerm && <div className="flex items-center rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-800"><Search size={12} className="mr-1" />"{searchTerm}"<X size={12} className="ml-1 cursor-pointer hover:text-purple-600" onClick={() => setSearchTerm('')} /></div>}
                    
                    {quickFilter && <div className="flex items-center rounded-full bg-emerald-100 px-3 py-1 text-sm text-emerald-800">Quick: {quickFilterOptions.find(q => q.value === quickFilter)?.label}<X size={12} className="ml-1 cursor-pointer hover:text-emerald-600" onClick={() => setQuickFilter('')} /></div>}
                    
                    {selectedCohorts.filter(c => c !== 'All cohorts').map((cohort) => <div key={`filter-${cohort}`} className="flex items-center rounded-full bg-green-100 px-3 py-1 text-sm text-green-800">{cohort}<X size={12} className="ml-1 cursor-pointer hover:text-green-600" onClick={() => toggleCohort(cohort)} /></div>)}
                    
                    {selectedIndustries.filter(i => i !== 'All industries').map((industry) => <div key={`filter-${industry}`} className="flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800">{industry}<X size={12} className="ml-1 cursor-pointer hover:text-blue-600" onClick={() => toggleIndustry(industry)} /></div>)}
                  </div>
                </div>
              )}
              </div>
            </motion.div>
          </div>
        </motion.div>
        {/* Results Section */}
        <motion.div 
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Results Header */}
          <div className="flex flex-col gap-3 rounded-xl border border-gray-200 bg-white p-3 shadow-sm sm:flex-row sm:items-center sm:justify-between md:p-4">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="flex items-center gap-1 text-gray-600 md:gap-2">
                <span className="rounded-lg bg-green-100 px-2 py-1 text-xs font-semibold text-green-800 md:px-3 md:text-sm">
                  {filteredCompanies.length}
                </span> 
                <span className="text-xs md:text-sm">
                  {filteredCompanies.length === 1 ? 'company' : 'companies'} found
                </span>
                {searchTerm && (
                  <span className="hidden text-xs text-gray-500 sm:inline md:text-sm">
                    for "{searchTerm.length > 15 ? searchTerm.substring(0, 15) + '...' : searchTerm}"
                  </span>
                )}
              </div>
            </div>
            
            <div className="flex items-center gap-2 md:gap-3">
              <span className="text-xs text-gray-500 md:text-sm">Sort:</span>
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="rounded-md border border-gray-300 bg-white px-2 py-1 text-xs focus:border-green-500 focus:outline-none md:px-3 md:text-sm">
                <option value="Default">Default</option>
                <option value="Name A-Z">A-Z</option>
                <option value="Name Z-A">Z-A</option>
                <option value="Newest">Newest</option>
                <option value="Oldest">Oldest</option>
                <option value="Industry">Industry</option>
              </select>
            </div>
          </div>
          
          {/* Companies Display */}{filteredCompanies.length === 0 ? (
            <div className="rounded-xl border border-gray-200 bg-white p-8 text-center shadow-sm md:p-12">
              <div className="mb-6">
                <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-gray-100 md:size-20">
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-8 text-gray-400 md:size-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900 md:text-xl">No companies found</h3>
                <p className="mb-6 text-sm text-gray-600 md:text-base">We couldn't find any companies matching your current filters.</p>
                <button 
                  className="rounded-lg bg-green-600 px-4 py-2 text-sm text-white transition-colors hover:bg-green-700 md:px-6 md:py-3 md:text-base"
                  onClick={resetAllFilters}>
                  Reset All Filters
                </button>
              </div>
            </div>
          ) : (
            <div className={`grid gap-4 md:gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                : 'grid-cols-1'
            }`}>
              {filteredCompanies.map((company) => (
                <motion.div 
                  key={company.id}
                  className={`group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:border-green-300 hover:shadow-lg ${
                    viewMode === 'list' ? 'flex flex-col sm:flex-row' : 'flex flex-col'
                  }`}
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                >
                  <div className={`flex h-full p-4 md:p-6 ${viewMode === 'list' ? 'flex-col sm:flex-row sm:items-center' : 'flex-col'}`}>
                    <div className={`flex items-center ${viewMode === 'list' ? 'mb-3 sm:mb-0 sm:mr-6 sm:shrink-0' : 'mb-3 w-full md:mb-4'}`}>
                      <div className={`flex shrink-0 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 ${
                        viewMode === 'list' ? 'mr-3 size-12 sm:mr-4 sm:size-16' : 'mr-3 size-12 md:mr-4 md:size-14'
                      }`}>
                        <Image 
                          src={company.logoUrl || '/assets/EVP_logo.png'} 
                          alt={`${company.name} logo`}
                          width={viewMode === 'list' ? 48 : 48}
                          height={viewMode === 'list' ? 48 : 48}
                          className="object-cover transition-transform group-hover:scale-110"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className={`font-bold text-gray-900 transition-colors group-hover:text-green-600 ${viewMode === 'list' ? 'text-base sm:text-xl' : 'text-base md:text-lg'}`}>
                          {company.name}
                        </h3>
                        <div className="flex flex-wrap items-center gap-1 text-sm text-gray-600 md:gap-2">
                          <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800 md:px-2.5">
                            {company.cohort}
                          </span>
                          {company.cohort === 'LAUNCHED' && (
                            <span className="inline-flex items-center rounded-full bg-purple-100 px-2 py-0.5 text-xs font-medium text-purple-800 md:px-2.5">
                              🚀 Launched
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className={`min-w-0 ${viewMode === 'list' ? 'flex-1' : 'grow'}`}>
                      <p className={`mb-3 text-gray-600 md:mb-4 ${viewMode === 'list' ? 'line-clamp-2 text-xs sm:text-sm' : 'line-clamp-3 text-xs md:text-sm'}`}>{company.description}</p>
                      <div className="flex flex-wrap gap-1 md:gap-1.5">
                        {company.industry.slice(0, viewMode === 'list' ? 2 : 3).map((ind) => (
                          <span 
                            key={`${company.id}-${ind}`}
                            className="inline-flex items-center rounded-full bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-700 transition-colors hover:bg-blue-100 md:px-2.5">
                            {ind}
                          </span>
                        ))}
                        {company.industry.length > (viewMode === 'list' ? 2 : 3) && (
                          <span className="inline-flex items-center rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600 md:px-2.5">
                            +{company.industry.length - (viewMode === 'list' ? 2 : 3)}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;