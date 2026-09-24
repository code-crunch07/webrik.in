'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Clock, ArrowRight } from 'lucide-react'

export const BlogGridBlock: React.FC<{ block: any; posts?: any[] }> = ({ block, posts }) => {
  const defaultPosts = [
    {
      title: 'Why Next.js 16 + Headless Payload CMS is the Ultimate Stack for Modern Agencies',
      slug: 'why-nextjs-16-payload-cms-agency-stack',
      excerpt: 'How decoupling frontend presentation from Payload CMS delivers 99/100 Lighthouse performance, instant revalidation, and zero-maintenance security.',
      readingTime: '6 min read',
      publishedDate: '2026-08-10',
      category: 'Software Engineering',
    },
    {
      title: '10 Technical SEO Audit Hacks That Increased Organic Traffic by +180%',
      slug: 'technical-seo-audit-hacks',
      excerpt: 'A comprehensive guide to structured schema markup, canonical configurations, Core Web Vitals optimization, and server-side rendering for search engine dominance.',
      readingTime: '8 min read',
      publishedDate: '2026-08-05',
      category: 'Digital Marketing',
    },
    {
      title: 'Designing High-Converting SaaS Dashboards: UI/UX Principles for 2026',
      slug: 'designing-high-converting-saas-dashboards',
      excerpt: 'Exploring micro-interactions, sleek light mode aesthetics, dynamic data cards, and responsive component libraries that maximize user retention.',
      readingTime: '5 min read',
      publishedDate: '2026-07-28',
      category: 'UI/UX Design',
    },
  ]

  const displayPosts = posts && posts.length > 0 ? posts : defaultPosts

  return (
    <section className="py-24 bg-white relative border-t border-slate-200/80">
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <span>INSIGHTS & ARTICLES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            {block?.heading || 'Latest Thinking on Tech & Growth'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayPosts.map((post, idx) => (
            <motion.div
              key={post.slug || idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-slate-50 rounded-3xl p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-indigo-300 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                  <span className="font-bold text-indigo-600 uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-indigo-50 border border-indigo-100">
                    {post.category}
                  </span>
                  <div className="flex items-center space-x-1 font-medium">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.readingTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-indigo-600 transition-colors leading-snug">
                  {post.title}
                </h3>

                <p className="mt-3 text-slate-600 text-xs leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-indigo-600 group-hover:text-indigo-700">
                <Link href={`/blog/${post.slug}`} className="flex items-center space-x-1">
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
