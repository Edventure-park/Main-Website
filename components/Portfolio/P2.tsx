// "use client";
// import Image from 'next/image';
// import React, { useState, useEffect } from 'react';
// import { Filter, X } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion';

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
//   const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);
  
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
//     // Simulate loading delay to ensure data is properly loaded
//     const loadData = async () => {
//       setIsLoading(true);
//       try {
//         // In a real app, you might fetch data here
//         // For now, we're just using the mock data
//         setCompanies(mockCompanies || []);
//         setFilteredCompanies(mockCompanies || []);
//       } catch (error) {
//         console.error("Error loading companies:", error);
//         setCompanies([]);
//         setFilteredCompanies([]);
//       } finally {
//         setIsLoading(false);
//       }
//     };
    
//     loadData();
//   }, []);

//   // Extract unique cohorts and industries for filters - with null checks
//   const cohorts = ['All cohorts', ...Array.from(new Set(companies?.map(company => company.cohort) || []))];
//   const industries = ['All industries', ...Array.from(new Set(companies?.flatMap(company => company.industry) || []))];

//   // Filter companies based on search, cohorts, and industries
//   useEffect(() => {
//     if (!companies.length) return;
    
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
//       result.sort((a, b) => b.cohort.localeCompare(a.cohort));
//     } else if (sortBy === 'Oldest') {
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

//   // Loading state
//   if (isLoading) {
//     return (
//       <div className="flex min-h-screen items-center justify-center bg-white">
//         <div className="text-center">
//           <div className="mx-auto mb-4 size-16 animate-spin rounded-full border-4 border-gray-200 border-t-green-600"></div>
//           <p className="text-gray-600">Loading companies...</p>
//         </div>
//       </div>
//     );
//   }

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
//               className="w-full rounded-lg border border-gray-300 p-3 pl-10 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
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
//               className="flex w-full items-center justify-center rounded-lg bg-green-600 p-3 text-white shadow-md transition-colors hover:bg-green-700"
//             >
//               <Filter className="mr-2" size={18} />
//               {mobileFiltersOpen ? 'Hide Filters' : 'Show Filters'}
//             </button>
//           </motion.div>
//           {/* Filters - Desktop always visible, Mobile conditional */}
//           <AnimatePresence>
//             {(mobileFiltersOpen || !isMobile) && (
//               <motion.div 
//                 className="space-y-6 md:w-1/4"
//                 initial={{ opacity: 0, height: 0 }}
//                 animate={{ opacity: 1, height: "auto" }}
//                 exit={{ opacity: 0, height: 0 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 {/* Filter Sections with improved UI */}
//                 <div className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm">
//                   <div className="bg-gradient-to-r from-green-600 to-green-500 p-4">
//                     <h3 className="text-lg font-semibold text-white">Filter Companies</h3>
//                   </div>
//                   {/* Cohort Filter */}
//                   <div className="border-b border-gray-100 p-4">
//                     <h4 className="mb-3 font-medium text-gray-800">Cohort</h4>
//                     <div className="flex flex-wrap gap-2">
//                       {cohorts.map((cohort) => (
//                         <button
//                           key={cohort}
//                           onClick={() => toggleCohort(cohort)}
//                           className={`rounded-full px-3 py-1.5 text-sm transition-all ${
//                             selectedCohorts.includes(cohort)
//                               ? 'border-2 border-green-300 bg-green-100 text-green-800'
//                               : 'border-2 border-transparent bg-gray-100 text-gray-700 hover:bg-gray-200'
//                           }`}
//                         >
//                           {cohort}
//                         </button>
//                       ))}
//                     </div>
//                   </div>
//                   {/* Industry Filter */}
//                   <div className="border-b border-gray-100 p-4">
//                     <h4 className="mb-3 font-medium text-gray-800">Industry</h4>
//                     <div className="flex flex-wrap gap-2">
//                       {industries.map((industry) => (
//                         <button
//                           key={industry}
//                           onClick={() => toggleIndustry(industry)}
//                           className={`rounded-full px-3 py-1.5 text-sm transition-all ${
//                             selectedIndustries.includes(industry)
//                               ? 'border-2 border-blue-300 bg-blue-100 text-blue-800'
//                               : 'border-2 border-transparent bg-gray-100 text-gray-700 hover:bg-gray-200'
//                           }`}
//                         >
//                           {industry}
//                         </button>
//                       ))}
//                     </div>
//                   </div>
//                   {/* Sort By */}
//                   <div className="p-4">
//                     <h4 className="mb-3 font-medium text-gray-800">Sort By</h4>
//                     <div className="grid grid-cols-2 gap-2">
//                       {['Default', 'Name A-Z', 'Name Z-A', 'Newest', 'Oldest'].map((option) => (
//                         <button
//                           key={option}
//                           onClick={() => setSortBy(option)}
//                           className={`rounded-md px-3 py-2 text-sm transition-all ${
//                             sortBy === option
//                               ? 'bg-purple-100 font-medium text-purple-800'
//                               : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                           }`}
//                         >
//                           {option}
//                         </button>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//                 {/* Active Filters */}
//                 {((selectedCohorts.length > 0 && !selectedCohorts.includes('All cohorts')) || 
//                   (selectedIndustries.length > 0 && !selectedIndustries.includes('All industries'))) && (
//                   <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
//                     <div className="mb-3 flex items-center justify-between">
//                       <h4 className="font-medium text-gray-800">Active Filters</h4>
//                       <button 
//                         className="text-sm font-medium text-red-600 transition-colors hover:text-red-700"
//                         onClick={() => {
//                           setSelectedCohorts(['All cohorts']);
//                           setSelectedIndustries(['All industries']);
//                         }}
//                       >
//                         Clear All
//                       </button>
//                     </div>
//                     <div className="flex flex-wrap gap-2">
//                       {selectedCohorts.filter(c => c !== 'All cohorts').map((cohort) => (
//                         <div key={`filter-${cohort}`} className="flex items-center rounded-full bg-green-100 px-3 py-1 text-green-800">
//                           <span className="mr-1">{cohort}</span>
//                           <X 
//                             size={14} 
//                             className="cursor-pointer" 
//                             onClick={() => toggleCohort(cohort)}
//                           />
//                         </div>
//                       ))}
//                       {selectedIndustries.filter(i => i !== 'All industries').map((industry) => (
//                         <div key={`filter-${industry}`} className="flex items-center rounded-full bg-blue-100 px-3 py-1 text-blue-800">
//                           <span className="mr-1">{industry}</span>
//                           <X 
//                             size={14} 
//                             className="cursor-pointer" 
//                             onClick={() => toggleIndustry(industry)}
//                           />
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 )}
//               </motion.div>
//             )}
//           </AnimatePresence>
//           {/* Companies Grid */}
//           <motion.div 
//             className="md:w-3/4"
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//           >
//             <div className="mb-4 flex items-center text-gray-600">
//               <span className="mr-2 rounded-md bg-green-100 px-2 py-1 text-sm font-medium text-green-800">
//                 {filteredCompanies.length}
//               </span> 
//               companies found
//             </div>
//             {filteredCompanies.length === 0 ? (
//               <div className="rounded-lg bg-gray-50 p-8 text-center shadow-sm">
//                 <div className="mb-4">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto size-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                   </svg>
//                 </div>
//                 <h3 className="mb-2 text-xl font-semibold">No companies found</h3>
//                 <p className="text-gray-600">Try adjusting your filters or search term</p>
//                 <button 
//                   className="mt-4 rounded-lg bg-green-600 px-4 py-2 text-white transition-colors hover:bg-green-700"
//                   onClick={() => {
//                     setSelectedCohorts(['All cohorts']);
//                     setSelectedIndustries(['All industries']);
//                     setSearchTerm('');
//                   }}
//                 >
//                   Reset Filters
//                 </button>
//               </div>
//             ) : (
//               <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
//                 {filteredCompanies.map((company) => (
//                   <motion.div 
//                     key={company.id}
//                     className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:translate-y-[-4px] hover:shadow-md"
//                     variants={itemVariants}
//                   >
//                     <div className="flex h-full flex-col p-5">
//                       <div className="mb-4 flex items-center">
//                         <div className="mr-3 flex size-14 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-100">
//                           <Image 
//                             src={company.logoUrl || '/default-logo.png'} 
//                             alt={`${company.name} logo`}
//                             width={56}
//                             height={56}
//                             className="object-cover"
//                           />
//                         </div>
//                         <div>
//                           <h3 className="text-lg font-bold text-gray-900">{company.name}</h3>
//                           <div className="flex items-center text-sm text-gray-600">
//                             <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
//                               {company.cohort}
//                             </span>
//                           </div>
//                         </div>
//                       </div>
//                       <p className="mb-4 line-clamp-4 grow text-sm text-gray-600">
//                         {company.description}
//                       </p>
//                       <div className="mt-auto flex flex-wrap gap-1.5">
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