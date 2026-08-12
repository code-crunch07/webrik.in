'use client'

import React from 'react'

export const RichTextBlock: React.FC<{ block: any }> = ({ block }) => {
  return (
    <section className="py-16 bg-navy-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-slate-300 prose prose-invert max-w-none">
        {/* Simple rendering for custom rich text or HTML string fallback */}
        {typeof block?.content === 'string' ? (
          <div dangerouslySetInnerHTML={{ __html: block.content }} />
        ) : (
          <div className="text-base leading-relaxed">
            {block?.content?.root?.children?.map((node: any, idx: number) => (
              <p key={idx} className="mb-4">
                {node?.children?.map((c: any) => c.text).join('')}
              </p>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
