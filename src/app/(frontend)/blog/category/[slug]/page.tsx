import React from 'react'
import type { Metadata } from 'next'
import { getBlogPosts } from '@/lib/payload'
import { BlogGridBlock } from '@/components/blocks/BlogGridBlock'

interface BlogCategoryProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: BlogCategoryProps): Promise<Metadata> {
  const { slug } = await params
  return {
    title: `${slug.replace(/-/g, ' ').toUpperCase()} Articles | Webrik Blog`,
  }
}

export default async function BlogCategoryPage({ params }: BlogCategoryProps) {
  const { slug } = await params
  const posts = await getBlogPosts(100, slug)

  return (
    <div className="pt-32 pb-16 bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <h1 className="text-3xl font-extrabold text-white capitalize">
          Category: {slug.replace(/-/g, ' ')}
        </h1>
      </div>
      <BlogGridBlock block={{}} posts={posts} />
    </div>
  )
}
