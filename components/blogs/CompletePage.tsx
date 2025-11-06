"use client";
import React, { useState, useEffect } from 'react';
import { Calendar, Clock, User, Tag, Eye, ArrowLeft, Share2, Bookmark, ThumbsUp, ThumbsDown, MessageCircle, TrendingUp, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const API_BASE_URL = 'https://hono-backend-cms.edventure-park.workers.dev';

interface BlogData {
  id: number;
  blogId: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[] | string;
  authorName: string;
  authorId: string | null;
  authorBio: string | null;
  authorProfileImage: string | null;
  featuredImage: string | null;
  featuredImageAltText: string | null;
  isFeatured: boolean;
  isPublished: boolean;
  views: number;
  seoTitle: string | null;
  seoDescription: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  estimatedReadTime: number;
  comments: number;
  upvotes: number;
  downvotes: number;
  shares: number;
  status: string;
  externalUrl: string | null;
  relatedBlogs: string[] | string | null;
}

interface ApiResponse {
  success: boolean;
  message: string;
  data: BlogData;
}

interface CompletePageProps {
  slug?: string;
}

const convertMarkdownToHTML = (markdown: string): string => {
  return markdown
    .replace(/^### (.*$)/gim, '<h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">$1</h3>')
    .replace(/^## (.*$)/gim, '<h2 class="text-3xl font-bold text-gray-900 mb-5 mt-10">$1</h2>')
    .replace(/^# (.*$)/gim, '<h1 class="text-4xl font-bold text-gray-900 mb-6 mt-12">$1</h1>')
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-gray-900">$1</strong>')
    .replace(/\*(.*?)\*/g, '<em class="italic text-gray-700">$1</em>')
    .replace(/```([\s\S]*?)```/g, '<pre class="bg-gray-900 text-gray-100 rounded-xl p-5 overflow-x-auto my-6 shadow-lg"><code class="text-sm font-mono">$1</code></pre>')
    .replace(/`(.*?)`/g, '<code class="bg-blue-50 text-blue-700 px-2 py-1 rounded text-sm font-mono border border-blue-200">$1</code>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline font-medium">$1</a>')
    .replace(/^> (.*$)/gim, '<blockquote class="border-l-4 border-blue-500 bg-blue-50 pl-6 py-3 italic text-gray-700 my-6 rounded-r-lg">$1</blockquote>')
    .replace(/^\- (.*$)/gim, '<li class="ml-6 mb-3 text-gray-700 leading-relaxed">• $1</li>')
    .replace(/\n\n/g, '</p><p class="mb-5 text-gray-700 leading-relaxed text-lg">')
    .replace(/\n/g, '<br/>')
    .replace(/^---$/gim, '<hr class="border-t-2 border-gray-200 my-10"/>')
    .replace(/^(?!<[h1-6]|<ul|<ol|<pre|<blockquote|<hr|<li)(.+)/gm, '<p class="mb-5 text-gray-700 leading-relaxed text-lg">$1</p>');
};

const formatDate = (dateString: string): string => {
  try {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(new Date(dateString));
  } catch {
    return dateString;
  }
};

const CompletePage: React.FC<CompletePageProps> = ({ slug = "deep-tech-transforming-future-ai-quantum-computing" }) => {
  const [blog, setBlog] = useState<BlogData | null>(null);
  const [relatedBlogs, setRelatedBlogs] = useState<BlogData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [userVote, setUserVote] = useState<'up' | 'down' | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      if (!slug) {
        setError('Blog slug is required');
        setLoading(false);

        return;
      }

      try {
        setLoading(true);
        setError(null);

        const response = await fetch(`${API_BASE_URL}/blog/get/${slug}`);

        if (!response.ok) {
          if (response.status === 404) throw new Error('Blog post not found');
          if (response.status >= 500) throw new Error('Server error. Please try again later.');
          throw new Error(`Error: ${response.status}`);
        }

        const result: ApiResponse = await response.json();

        if (!result.success || !result.data) {
          throw new Error(result.message || 'Failed to fetch blog post');
        }

        setBlog(result.data);

        // Fetch related blogs
        if (result.data.relatedBlogs) {
          const blogIds = typeof result.data.relatedBlogs === 'string' 
            ? JSON.parse(result.data.relatedBlogs) 
            : result.data.relatedBlogs;

          if (Array.isArray(blogIds) && blogIds.length > 0) {
            const relatedPromises = blogIds.slice(0, 3).map(async (blogId: string) => {
              try {
                const res = await fetch(`${API_BASE_URL}/blog/get-by-id/${blogId}`);
                if (res.ok) {
                  const data = await res.json();

                  return data.success ? data.data : null;
                }

                return null;
              } catch {
                return null;
              }
            });

            const related = await Promise.all(relatedPromises);
            setRelatedBlogs(related.filter((b): b is BlogData => b !== null));
          }
        }
      } catch (err) {
        console.error('Error fetching blog:', err);
        setError(err instanceof Error ? err.message : 'Failed to load blog post');
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  const handleVote = (type: 'up' | 'down') => {
    if (userVote === type) {
      setUserVote(null);
    } else {
      setUserVote(type);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <div className="animate-pulse">
            <div className="mb-8 h-12 w-3/4 rounded-lg bg-gray-300"></div>
            <div className="mb-6 h-96 rounded-2xl bg-gray-300"></div>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="h-4 rounded bg-gray-300" style={{ width: `${100 - i * 10}%` }}></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 via-red-50 to-slate-50">
        <div className="mx-auto max-w-md px-4 text-center">
          <div className="rounded-2xl border-2 border-red-200 bg-white p-8 shadow-2xl">
            <div className="mb-4 flex justify-center">
              <div className="rounded-full bg-red-100 p-4">
                <ArrowLeft className="size-8 text-red-600" />
              </div>
            </div>
            <h2 className="mb-3 text-2xl font-bold text-red-800">Error Loading Blog</h2>
            <p className="mb-6 text-red-600">{error}</p>
            <button 
              onClick={() => window.location.reload()}
              className="rounded-xl bg-red-600 px-6 py-3 font-semibold text-white transition-all hover:bg-red-700 hover:shadow-lg"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
        <div className="text-center">
          <h2 className="mb-2 text-2xl font-bold text-gray-800">Blog Not Found</h2>
          <p className="text-gray-600">The requested blog post could not be found.</p>
        </div>
      </div>
    );
  }

  const parsedTags = typeof blog.tags === 'string' ? blog.tags.split(',').map(t => t.trim()) : blog.tags;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      {/* Header Navigation */}
      <div className="sticky top-0 z-50 border-b bg-white/80 shadow-sm backdrop-blur-xl">
        <div className="mx-auto max-w-7xl p-4">
          <Link href="/blogs">
            <div className="flex items-center gap-2 font-medium text-gray-700 transition-colors hover:text-blue-600">
              <ArrowLeft size={20} />
              <span>Back to Blog</span>
            </div>
          </Link>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 py-8 lg:py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <article className="lg:col-span-2">
            {/* Category & Status Badges */}
            <div className="mb-6 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 px-4 py-1.5 text-sm font-semibold text-white shadow-lg">
                {blog.category}
              </span>
              {blog.isFeatured && (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 px-4 py-1.5 text-sm font-semibold text-white shadow-lg">
                  <TrendingUp size={14} />
                  Featured
                </span>
              )}
              {blog.status === 'draft' && (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-gray-400 px-4 py-1.5 text-sm font-semibold text-white">
                  Draft
                </span>
              )}
            </div>
            {/* Title */}
            <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
              {blog.title}
            </h1>
            {/* Excerpt */}
            {blog.excerpt && (
              <p className="mb-8 rounded-r-xl border-l-4 border-blue-500 bg-blue-50/50 py-2 pl-6 text-xl font-medium leading-relaxed text-gray-600">
                {blog.excerpt}
              </p>
            )}
            {/* Meta Information */}
            <div className="mb-8 flex flex-wrap items-center gap-6 border-y border-gray-200 py-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-blue-100 p-2">
                  <User size={16} className="text-blue-600" />
                </div>
                <span className="font-medium">{blog.authorName}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-gray-500" />
                <span>{formatDate(blog.publishedAt || blog.createdAt)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-gray-500" />
                <span>{blog.estimatedReadTime || Math.ceil(blog.content.length / 1000)} min read</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye size={16} className="text-gray-500" />
                <span>{blog.views.toLocaleString()} views</span>
              </div>
            </div>
            {/* Featured Image */}
            {blog.featuredImage && (
              <div className="mb-10 overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  width={1200}
                  height={600}
                  src={blog.featuredImage}
                  alt={blog.featuredImageAltText || blog.title}
                  className="h-64 w-full object-cover transition-transform duration-500 hover:scale-105 md:h-96 lg:h-[500px]"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
            )}
            {/* Blog Content */}
            <div className="mb-12 rounded-2xl border border-gray-100 bg-white p-8 shadow-lg md:p-12">
              <div 
                className="prose prose-lg prose-blue max-w-none"
                dangerouslySetInnerHTML={{ 
                  __html: convertMarkdownToHTML(blog.content) 
                }}
              />
            </div>
            {/* External URL */}
            {blog.externalUrl && (
              <div className="mb-8 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 p-6 text-white shadow-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="mb-2 text-lg font-semibold">Read More</h4>
                    <p className="text-sm opacity-90">Continue reading on the original source</p>
                  </div>
                  <a
                    href={blog.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-purple-600 transition-all hover:scale-105 hover:shadow-lg"
                  >
                    Visit <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            )}
            {/* Engagement Section */}
            <div className="mb-10 rounded-2xl border border-gray-100 bg-white p-6 shadow-lg">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleVote('up')}
                    className={`flex items-center gap-2 rounded-xl px-4 py-2.5 font-semibold transition-all ${
                      userVote === 'up'
                        ? 'bg-green-500 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-green-100'
                    }`}
                  >
                    <ThumbsUp size={18} />
                    {blog.upvotes + (userVote === 'up' ? 1 : 0)}
                  </button>
                  <button
                    onClick={() => handleVote('down')}
                    className={`flex items-center gap-2 rounded-xl px-4 py-2.5 font-semibold transition-all ${
                      userVote === 'down'
                        ? 'bg-red-500 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-red-100'
                    }`}
                  >
                    <ThumbsDown size={18} />
                    {blog.downvotes + (userVote === 'down' ? 1 : 0)}
                  </button>
                </div>
                <div className="flex items-center gap-3">
                  <button className="flex items-center gap-2 rounded-xl bg-blue-500 px-5 py-2.5 font-semibold text-white transition-all hover:bg-blue-600 hover:shadow-lg">
                    <Share2 size={18} />
                    Share ({blog.shares})
                  </button>
                  <button className="flex items-center gap-2 rounded-xl bg-gray-700 px-5 py-2.5 font-semibold text-white transition-all hover:bg-gray-800 hover:shadow-lg">
                    <Bookmark size={18} />
                    Save
                  </button>
                </div>
              </div>
            </div>
            {/* Tags */}
            {parsedTags && parsedTags.length > 0 && (
              <div className="mb-10 rounded-2xl border border-gray-100 bg-white p-6 shadow-lg">
                <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-gray-900">
                  <Tag size={22} className="text-blue-600" />
                  Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {parsedTags.map((tag, index) => (
                    <span 
                      key={index}
                      className="cursor-pointer rounded-full border border-blue-200 bg-gradient-to-r from-blue-50 to-cyan-50 px-4 py-2 text-sm font-medium text-blue-700 transition-all hover:from-blue-100 hover:to-cyan-100 hover:shadow-md"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {/* Author Section */}
            <div className="mb-10 rounded-2xl bg-gradient-to-br from-green-500 to-grey-200 p-8 text-gray-800 shadow-2xl">
              <h3 className="mb-5 text-2xl font-bold">About the Author</h3>
              <div className="flex flex-col items-start gap-6 sm:flex-row">
                {blog.authorProfileImage ? (
                  <Image
                    width={80}
                    height={80}
                    src={blog.authorProfileImage}
                    alt={blog.authorName}
                    className="size-20 rounded-full border-4 border-white object-cover shadow-xl"
                  />
                ) : (
                  <div className="flex size-20 items-center justify-center rounded-full border-4 border-white bg-white text-2xl font-bold text-blue-600 shadow-xl">
                    {blog.authorName.charAt(0).toUpperCase()}
                  </div>
                )}
                <div className="flex-1">
                  <h4 className="mb-2 text-xl font-bold">{blog.authorName}</h4>
                  {blog.authorBio ? (
                    <p className="leading-relaxed opacity-95">{blog.authorBio}</p>
                  ) : (
                    <p className="leading-relaxed opacity-95">
                      Content creator passionate about sharing knowledge and helping developers grow.
                    </p>
                  )}
                </div>
              </div>
            </div>
            {/* Comments Section Placeholder */}
            <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-lg">
              <h3 className="mb-6 flex items-center gap-2 text-2xl font-bold text-gray-900">
                <MessageCircle size={24} className="text-blue-600" />
                Comments ({blog.comments})
              </h3>
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-8 text-center">
                <MessageCircle size={48} className="mx-auto mb-4 text-gray-400" />
                <p className="font-medium text-gray-600">Comments section coming soon!</p>
                <p className="mt-2 text-sm text-gray-500">Join the conversation when we launch this feature.</p>
              </div>
            </div>
          </article>
          {/* Sidebar */}
          <aside className="space-y-6 lg:col-span-1">
            {/* Related Blogs */}
            {relatedBlogs.length > 0 && (
              <div className="sticky top-24 rounded-2xl border border-gray-100 bg-white p-6 shadow-lg">
                <h3 className="mb-5 text-xl font-bold text-gray-900">Related Articles</h3>
                <div className="space-y-4">
                  {relatedBlogs.map((related) => (
                    <Link key={related.blogId} href={`/blog/${related.slug}`}>
                      <div className="group cursor-pointer rounded-xl border border-gray-200 bg-gradient-to-br from-white to-blue-50 p-4 transition-all hover:scale-105 hover:shadow-xl">
                        {related.featuredImage && (
                          <div className="mb-3 overflow-hidden rounded-lg">
                            <Image
                              width={300}
                              height={150}
                              src={related.featuredImage}
                              alt={related.title}
                              className="h-32 w-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                          </div>
                        )}
                        <h4 className="mb-2 line-clamp-2 font-bold text-gray-900 transition-colors group-hover:text-blue-600">
                          {related.title}
                        </h4>
                        {related.excerpt && (
                          <p className="line-clamp-2 text-sm text-gray-600">{related.excerpt}</p>
                        )}
                        <div className="mt-3 flex items-center gap-3 text-xs text-gray-500">
                          <span className="flex items-center gap-1">
                            <Clock size={12} />
                            {related.estimatedReadTime || Math.ceil(related.content.length / 1000)} min
                          </span>
                          <span className="flex items-center gap-1">
                            <Eye size={12} />
                            {related.views}
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
            {/* Share Widget */}
            <div className="rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 p-6 text-white shadow-xl">
              <h3 className="mb-4 text-lg font-bold">Share this article</h3>
              <div className="grid grid-cols-2 gap-3">
                <button className="rounded-xl bg-white/20 px-4 py-3 font-semibold backdrop-blur transition-all hover:bg-white/30">
                  Twitter
                </button>
                <button className="rounded-xl bg-white/20 px-4 py-3 font-semibold backdrop-blur transition-all hover:bg-white/30">
                  Facebook
                </button>
                <button className="rounded-xl bg-white/20 px-4 py-3 font-semibold backdrop-blur transition-all hover:bg-white/30">
                  LinkedIn
                </button>
                <button className="rounded-xl bg-white/20 px-4 py-3 font-semibold backdrop-blur transition-all hover:bg-white/30">
                  Copy Link
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default CompletePage;