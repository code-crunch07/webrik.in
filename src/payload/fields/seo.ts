import type { GroupField } from 'payload'

export const seoFieldFactory = (): GroupField => ({
  name: 'seo',
  type: 'group',
  label: 'SEO Metadata',
  fields: [
    {
      name: 'metaTitle',
      type: 'text',
      label: 'Meta Title',
    },
    {
      name: 'metaDescription',
      type: 'textarea',
      label: 'Meta Description',
    },
    {
      name: 'ogImage',
      type: 'upload',
      relationTo: 'media',
      label: 'OpenGraph Image',
    },
    {
      name: 'canonicalUrl',
      type: 'text',
      label: 'Canonical URL Override',
    },
    {
      name: 'noIndex',
      type: 'checkbox',
      label: 'Hide from search engines (noindex)',
      defaultValue: false,
    },
    {
      name: 'keywords',
      type: 'text',
      label: 'Keywords (comma-separated)',
    },
  ],
})
