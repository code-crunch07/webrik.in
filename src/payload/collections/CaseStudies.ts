import type { CollectionConfig } from 'payload'
import { seoFieldFactory } from '../fields/seo'

export const CaseStudies: CollectionConfig = {
  slug: 'case-studies',
  admin: {
    useAsTitle: 'title',
    group: '📄 Content',
    defaultColumns: ['title', 'client', 'industry'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'client',
      type: 'text',
      required: true,
    },
    {
      name: 'industry',
      type: 'relationship',
      relationTo: 'industries',
    },
    {
      name: 'heroImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'metrics',
      type: 'array',
      label: 'Key Results & Metrics (e.g., +180% Organic Traffic, +75% Leads)',
      fields: [
        { name: 'value', type: 'text', required: true, label: 'Value (e.g. +180%)' },
        { name: 'label', type: 'text', required: true, label: 'Metric Name (e.g. Organic Traffic)' },
      ],
    },
    {
      name: 'challenge',
      type: 'textarea',
      label: 'The Challenge',
      required: true,
    },
    {
      name: 'solution',
      type: 'textarea',
      label: 'The Solution & Strategy',
      required: true,
    },
    {
      name: 'implementationDetails',
      type: 'richText',
      label: 'Implementation Details',
    },
    {
      name: 'technologies',
      type: 'relationship',
      relationTo: 'technologies',
      hasMany: true,
    },
    {
      name: 'testimonialQuote',
      type: 'textarea',
      label: 'Client Testimonial',
    },
    {
      name: 'testimonialAuthor',
      type: 'text',
      label: 'Client Name & Title',
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: true,
    },
    seoFieldFactory(),
  ],
}
