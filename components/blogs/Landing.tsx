"use client";

import React, { useState, useEffect, useMemo } from "react";
import { Search, X, Clock, TrendingUp, Calendar } from "lucide-react";

// Types
interface Blog {
  blogId: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  tags: string[];
  authorName: string;
  featuredImage: string;
  featuredImageAltText: string;
  estimatedReadTime: number;
  publishedAt: string;
  views: number;
  isFeatured: boolean;
}

interface ApiResponse {
  success: boolean;
  message: string;
  data: Blog[];
}

const Blogs: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch blogs from API
  useEffect(() => {
    const fetchBlogs = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(
          "https://hono-backend-cms.edventure-park.workers.dev/blog/get-all"
        );
        if (!response.ok) throw new Error("Failed to fetch blogs");
        const result: ApiResponse = await response.json();
        if (result.success && result.data) {
          console.log("response received as: ", response)
          setBlogs(result.data);
        } else {
          throw new Error("Invalid API response");
        }
      } catch (err) {
        console.error("Error fetching blogs:", err);
        setError("Failed to load blogs. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = new Set(blogs.map((blog) => blog.category));

    return ["all", ...Array.from(cats)];
  }, [blogs]);

  // Filter blogs based on search and category
  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => {
      const matchesSearch =
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.tags.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        );
      const matchesCategory =
        selectedCategory === "all" || blog.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [blogs, searchTerm, selectedCategory]);

  // Sort: featured first, then by published date
  const sortedBlogs = useMemo(() => {
    return [...filteredBlogs].sort((a, b) => {
      if (a.isFeatured && !b.isFeatured) return -1;
      if (!a.isFeatured && b.isFeatured) return 1;

      return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
    });
  }, [filteredBlogs]);

  // Get random 3-4 tags
  const getRandomTags = (tags: string[]) => {
    const count = Math.min(tags.length, Math.floor(Math.random() * 2) + 3);

    return tags.slice(0, count);
  };

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);

    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 py-12">
          <div className="mb-8 h-12 w-64 animate-pulse rounded-lg bg-gray-200" />
          <div className="mb-8 h-12 w-full animate-pulse rounded-xl bg-gray-200" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="overflow-hidden rounded-2xl bg-white shadow-sm"
              >
                <div className="h-56 w-full animate-pulse bg-gray-200" />
                <div className="space-y-3 p-6">
                  <div className="h-4 w-3/4 animate-pulse rounded bg-gray-200" />
                  <div className="h-4 w-full animate-pulse rounded bg-gray-200" />
                  <div className="h-4 w-2/3 animate-pulse rounded bg-gray-200" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="mx-auto max-w-md px-4 text-center">
          <div className="mb-4 text-6xl">⚠️</div>
          <h2 className="mb-2 text-2xl font-bold text-gray-900">
            Oops! Something went wrong
          </h2>
          <p className="mb-6 text-gray-600">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="rounded-lg bg-green-600 px-6 py-3 font-medium text-white transition-all hover:bg-green-700 hover:shadow-lg"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-3 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl">
            Explore Our Blogs
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Discover insights, tutorials, and stories from EdVenturePark
          </p>
        </div>
        {/* Search and Filter */}
        <div className="mb-10 space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by title, content, or tags..."
              className="w-full rounded-xl border-2 border-gray-200 bg-white py-4 pl-12 pr-24 text-gray-900 shadow-sm transition-all placeholder:text-gray-400 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-3 top-1/2 flex h-8 w-16 -translate-y-1/2 items-center justify-center rounded-lg bg-gray-100 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200"
              >
                <X className="mr-1 size-4" />
                Clear
              </button>
            )}
          </div>
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                  selectedCategory === cat
                    ? "bg-green-600 text-white shadow-md"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>
        {/* Results Count */}
        <div className="mb-6 text-sm text-gray-600">
          Showing <span className="font-semibold">{sortedBlogs.length}</span> of{" "}
          <span className="font-semibold">{blogs.length}</span> articles
        </div>
        {/* Blog Grid */}
        {sortedBlogs.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sortedBlogs.map((blog) => {
              const displayTags = getRandomTags(blog.tags);

              return (
                <article
                  key={blog.blogId}
                  className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  {/* Featured Badge */}
                  {blog.isFeatured && (
                    <div className="absolute left-4 top-4 z-10 flex items-center gap-1 rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold text-yellow-900 shadow-md">
                      <TrendingUp className="size-3" />
                      Featured
                    </div>
                  )}
                  {/* Image */}
                  <div className="relative h-56 w-full overflow-hidden bg-gray-200">
                    <img
                      src={blog.featuredImage}
                      alt={blog.featuredImageAltText || blog.title}
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        e.currentTarget.src =
                          "https://via.placeholder.com/600x400?text=No+Image";
                      }}
                    />
                  </div>
                  {/* Content */}
                  <div className="flex flex-1 flex-col p-6">
                    {/* Meta Info */}
                    <div className="mb-3 flex flex-wrap items-center gap-3 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="size-3.5" />
                        {formatDate(blog.publishedAt)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="size-3.5" />
                        {blog.estimatedReadTime} min read
                      </span>
                    </div>
                    {/* Category */}
                    <div className="mb-2">
                      <span className="inline-block rounded-md bg-green-50 px-2.5 py-1 text-xs font-semibold text-green-700">
                        {blog.category}
                      </span>
                    </div>
                    {/* Title */}
                    <h2 className="mb-3 line-clamp-2 text-xl font-bold text-gray-900 transition-colors group-hover:text-green-600">
                      {blog.title}
                    </h2>
                    {/* Excerpt */}
                    <p className="mb-4 line-clamp-3 flex-1 text-sm leading-relaxed text-gray-600">
                      {blog.excerpt}
                    </p>
                    {/* Tags */}
                    <div className="mb-4 flex flex-wrap gap-1.5">
                      {displayTags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="rounded-full bg-gray-100 px-2.5 py-1 text-xs text-gray-700"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                    {/* Author & Read More */}
                    <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                      <span className="text-sm text-gray-600">
                        By <span className="font-medium">{blog.authorName}</span>
                      </span>
                      <a
                        href={`/blog/${blog.slug}`}
                        className="inline-flex items-center gap-1 rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-white transition-all hover:gap-2 hover:bg-green-700"
                      >
                        Read More
                        <span className="transition-transform">→</span>
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="py-20 text-center">
            <div className="mb-4 text-6xl">🔍</div>
            <h3 className="mb-2 text-2xl font-bold text-gray-900">
              No blogs found
            </h3>
            <p className="mb-6 text-gray-600">
              Try adjusting your search or filters
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
              }}
              className="rounded-lg bg-green-600 px-6 py-3 font-medium text-white transition-all hover:bg-green-700"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blogs;