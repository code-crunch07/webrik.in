import React from 'react'
import type { Metadata } from 'next'
import { getBlogPosts } from '@/lib/payload'
import { BlogGridBlock } from '@/components/blocks/BlogGridBlock'
import { CTABlock } from '@/components/blocks/CTABlock'

export const metadata: Metadata = {
  title: 'Blog & Engineering Insights | Webrik Agency',
  description: 'Articles, tutorials, and strategy guides on Next.js, Payload CMS, Technical SEO, Performance Marketing, and SaaS engineering.',
}

export default async function BlogPage() {
  const posts = await getBlogPosts()

  return (
    <div className="pt-36 pb-16 bg-[#FAFAFD]">
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="text-xs font-bold text-indigo-700 bg-indigo-50 border border-indigo-200/80 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            Technical Insights
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight mt-4">
            Engineering & Growth Thought Leadership
          </h1>
          <p className="mt-4 text-slate-600 text-lg leading-relaxed">
            In-depth guides on Next.js, Payload CMS architecture, Core Web Vitals, and multi-channel acquisition funnels.
          </p>
        </div>
      </div>

      <BlogGridBlock block={{}} posts={posts} />
      <CTABlock block={{}} />
    </div>
  )
}
