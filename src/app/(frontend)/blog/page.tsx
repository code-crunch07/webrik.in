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
    <div className="pt-32 pb-16 bg-navy-950">
      <BlogGridBlock block={{}} posts={posts} />
      <CTABlock block={{}} />
    </div>
  )
}
