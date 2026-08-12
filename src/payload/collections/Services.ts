import type { CollectionConfig } from 'payload'
import { seoFieldFactory } from '../fields/seo'

export const Services: CollectionConfig = {
  slug: 'services',
  admin: {
    useAsTitle: 'title',
    group: '📄 Content',
    defaultColumns: ['title', 'category', 'slug'],
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
      name: 'category',
      type: 'select',
      required: true,
      options: [
        { label: 'Software Development', value: 'software' },
        { label: 'Digital Marketing', value: 'marketing' },
      ],
    },
    {
      name: 'icon',
      type: 'text',
      label: 'Lucide Icon Name (e.g. Code, Layout, Smartphone, Search, Megaphone, TrendingUp)',
      defaultValue: 'Code',
    },
    {
      name: 'shortDescription',
      type: 'textarea',
      required: true,
    },
    {
      name: 'fullContent',
      type: 'richText',
      label: 'Detailed Service Overview',
    },
    {
      name: 'features',
      type: 'array',
      label: 'Key Features & Capabilities',
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea' },
      ],
    },
    {
      name: 'deliverables',
      type: 'array',
      label: 'Deliverables',
      fields: [{ name: 'item', type: 'text' }],
    },
    {
      name: 'processSteps',
      type: 'array',
      label: 'Service Workflow',
      fields: [
        { name: 'step', type: 'text' },
        { name: 'title', type: 'text' },
        { name: 'description', type: 'textarea' },
      ],
    },
    {
      name: 'relatedProjects',
      type: 'relationship',
      relationTo: 'projects',
      hasMany: true,
      label: 'Related Case Studies / Portfolio',
    },
    seoFieldFactory(),
  ],
}
