/* eslint-disable no-unused-vars */
"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

import mockBlogs from "@/data/blogsData";

// Types
interface Weblog {
  id: string;
  name: string;
  article: string;
  industry: string[];
  imageUrl: string;
}

const Blogs: React.FC = () => {
  // State
  const [weblogs, setWeblogs] = useState<Weblog[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [initialQueryApplied, setInitialQueryApplied] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const searchParams = useSearchParams();

  // Responsive behavior
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    
return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Load blogs
  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        setWeblogs(mockBlogs || []);
      } catch (error) {
        console.error("Error loading blogs:", error);
        setWeblogs([]);
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, []);

  // Load search query from URL
  useEffect(() => {
    if (!searchParams || initialQueryApplied) return;
    const q = (searchParams.get("q") || "").trim();
    if (q) setSearchTerm(q);
    setInitialQueryApplied(true);
  }, [searchParams, initialQueryApplied]);

  // Filter blogs
  const filteredBlogs = weblogs.filter(
    (blog) =>
      blog.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.article.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 },
    },
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white">
        <div className="text-center">
          <div className="mx-auto mb-4 size-16 animate-spin rounded-full border-4 border-gray-200 border-t-green-600" />
          <p className="text-gray-600">Loading blogs...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <motion.h1
          className="mb-8 text-center text-3xl font-bold md:text-4xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Blogs by EdVenturePark
        </motion.h1>
        {/* Search Input */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Search blogs..."
              className="w-full rounded-lg border border-gray-300 p-3 pl-10 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md bg-gray-100 px-3 py-1 text-sm text-gray-600 hover:bg-gray-200"
              >
                Clear
              </button>
            )}
            <div className="absolute left-3 top-1/2 -translate-y-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </motion.div>
        {/* Blog Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence>
            {filteredBlogs.map((blog) => (
              <motion.div
                key={blog.id}
                variants={itemVariants}
                className="flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md"
              >
                <div className="h-48 w-full overflow-hidden">
                  <Image
                    src={blog.imageUrl}
                    alt={blog.name}
                    width={600}
                    height={300}
                    className="size-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                {/* Blog Info */}
                <div className="flex grow flex-col p-4">
                  <h3 className="mb-1 text-lg font-semibold text-gray-900">
                    {blog.name}
                  </h3>
                  <p className="mb-2 text-sm text-gray-500">{blog.article}</p>
                  <div className="mt-auto flex flex-wrap gap-1.5">
                    {blog.industry.map((ind) => (
                      <span
                        key={`${blog.id}-${ind}`}
                        className="rounded-full bg-blue-50 px-2 py-0.5 text-xs text-blue-700"
                      >
                        {ind}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-auto flex flex-wrap gap-1.5">
                  {blog.industry.map((ind) => (
                    <span
                      key={`${blog.id}-${ind}`}
                      className="rounded-full bg-blue-50 px-2 py-0.5 text-xs text-blue-700"
                    >
                      {ind}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        {filteredBlogs.length === 0 && (
          <p className="mt-10 text-center text-gray-500">No blogs found.</p>
        )}
      </div>
    </div>
  );
};

export default Blogs;
