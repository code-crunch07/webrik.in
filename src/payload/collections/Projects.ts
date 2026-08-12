import type { CollectionConfig } from 'payload'
import { seoFieldFactory } from '../fields/seo'

export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'title',
    group: '📄 Content',
    defaultColumns: ['title', 'category', 'clientName', 'featured'],
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
      name: 'clientName',
      type: 'text',
      required: true,
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      options: [
        { label: 'Web Development', value: 'Web Development' },
        { label: 'Mobile App', value: 'Mobile App' },
        { label: 'E-commerce', value: 'E-commerce' },
        { label: 'SaaS', value: 'SaaS' },
        { label: 'Branding', value: 'Branding' },
        { label: 'Digital Marketing', value: 'Digital Marketing' },
      ],
    },
    {
      name: 'coverImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'gallery',
      type: 'array',
      fields: [{ name: 'image', type: 'upload', relationTo: 'media' }],
    },
    {
      name: 'shortDescription',
      type: 'textarea',
      required: true,
    },
    {
      name: 'fullContent',
      type: 'richText',
    },
    {
      name: 'technologies',
      type: 'relationship',
      relationTo: 'technologies',
      hasMany: true,
    },
    {
      name: 'liveUrl',
      type: 'text',
      label: 'Live Website / App Link',
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: true,
    },
    {
      name: 'sortOrder',
      type: 'number',
      defaultValue: 0,
    },
    seoFieldFactory(),
  ],
}
