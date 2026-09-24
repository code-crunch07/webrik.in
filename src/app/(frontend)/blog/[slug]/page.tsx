import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { getBlogPostBySlug } from '@/lib/payload'
import { Clock, Calendar, ArrowLeft } from 'lucide-react'

interface BlogPostDetailProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: BlogPostDetailProps): Promise<Metadata> {
  const { slug } = await params
  const post: any = await getBlogPostBySlug(slug)
  return {
    title: post ? `${post.title} | Webrik Blog` : 'Blog Article | Webrik',
    description: post?.excerpt || 'Read the latest software and marketing insights from Webrik.',
  }
}

export default async function BlogPostDetailPage({ params }: BlogPostDetailProps) {
  const { slug } = await params
  const post: any = await getBlogPostBySlug(slug)

  const title = post?.title || slug.replace(/-/g, ' ')
  const excerpt = post?.excerpt || 'In-depth breakdown of enterprise software architecture and full-funnel digital marketing strategies.'

  return (
    <article className="pt-36 pb-24 bg-[#FAFAFD] text-slate-900 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="inline-flex items-center space-x-2 text-xs font-bold text-slate-500 hover:text-indigo-600 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Articles</span>
        </Link>

        <div className="space-y-6 mb-12">
          <div className="flex items-center space-x-4 text-xs font-semibold text-slate-500">
            <span className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 font-bold border border-indigo-200/80">
              {typeof post?.category === 'object' ? post?.category?.name : 'Engineering'}
            </span>
            <div className="flex items-center space-x-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{post?.readingTime || '5 min read'}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>{post?.publishedDate ? new Date(post.publishedDate).toLocaleDateString() : 'September 2026'}</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight capitalize">
            {title}
          </h1>

          <p className="text-slate-600 text-lg leading-relaxed font-medium border-l-4 border-indigo-600 pl-4 italic">
            {excerpt}
          </p>
        </div>

        <div className="max-w-none text-slate-700 space-y-6 text-base leading-relaxed bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/90 shadow-sm">
          <p>
            Building modern web applications requires a tight integration between rapid frontend rendering, resilient API endpoints, and real-time CMS content management. By choosing Next.js 16 App Router coupled with Payload CMS 3 local API querying, engineering teams gain unparalleled performance.
          </p>
          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Core Architectural Benefits</h2>
          <ul className="list-disc pl-6 space-y-2 text-slate-600">
            <li>Zero-latency Server Component rendering via direct database local API access.</li>
            <li>Instant Next.js revalidation without needing full static site rebuilds.</li>
            <li>Custom Payload Page Builder blocks enabling non-technical content management.</li>
            <li>PostgreSQL reliability with strict relational data integrity.</li>
          </ul>
        </div>
      </div>
    </article>
  )
}
