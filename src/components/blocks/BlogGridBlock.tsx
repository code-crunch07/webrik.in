'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Clock, ArrowRight, BookOpen } from 'lucide-react'

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
      excerpt: 'Exploring micro-interactions, dark mode aesthetics, dynamic data cards, and responsive component libraries that maximize user retention.',
      readingTime: '5 min read',
      publishedDate: '2026-07-28',
      category: 'UI/UX Design',
    },
  ]

  const displayPosts = posts && posts.length > 0 ? posts : defaultPosts

  return (
    <section className="py-24 bg-navy-950 relative border-t border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-violet/30 text-brand-violet text-xs font-bold uppercase tracking-wider mb-3">
            <span>{block?.eyebrow || 'INSIGHTS & ARTICLES'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
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
              className="glass-card rounded-2xl p-6 flex flex-col justify-between group"
            >
              <div>
                <div className="w-full h-44 rounded-xl bg-gradient-to-tr from-navy-900 via-navy-800 to-brand-violet/20 border border-surface-border p-4 flex flex-col justify-between mb-5">
                  <span className="self-start px-2.5 py-1 rounded-md bg-navy-950/80 border border-white/10 text-[11px] font-bold text-brand-violet">
                    {typeof post.category === 'object' ? post.category?.name : post.category || 'Tech'}
                  </span>
                  <div className="flex items-center space-x-2 text-xs text-slate-400">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.readingTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-violet transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center space-x-2 text-sm font-bold text-brand-violet hover:text-white transition-colors group/link"
              >
                <span>Read Full Article</span>
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
