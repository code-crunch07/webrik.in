import type { CollectionConfig } from 'payload'
import { seoFieldFactory } from '../fields/seo'

export const Industries: CollectionConfig = {
  slug: 'industries',
  admin: {
    useAsTitle: 'name',
    group: '📄 Content',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
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
      name: 'icon',
      type: 'text',
      defaultValue: 'Building',
    },
    {
      name: 'shortDescription',
      type: 'textarea',
      required: true,
    },
    {
      name: 'heroImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'challenges',
      type: 'array',
      label: 'Industry Challenges',
      fields: [
        { name: 'title', type: 'text' },
        { name: 'description', type: 'textarea' },
      ],
    },
    {
      name: 'solutions',
      type: 'array',
      label: 'Our Tailored Solutions',
      fields: [
        { name: 'title', type: 'text' },
        { name: 'description', type: 'textarea' },
      ],
    },
    {
      name: 'relatedServices',
      type: 'relationship',
      relationTo: 'services',
      hasMany: true,
    },
    {
      name: 'caseStudies',
      type: 'relationship',
      relationTo: 'case-studies',
      hasMany: true,
    },
    seoFieldFactory(),
  ],
}
