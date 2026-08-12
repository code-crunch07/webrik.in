import type { CollectionConfig } from 'payload'
import { seoFieldFactory } from '../fields/seo'

export const BlogPosts: CollectionConfig = {
  slug: 'blog-posts',
  admin: {
    useAsTitle: 'title',
    group: '✍️ Blog',
    defaultColumns: ['title', 'category', 'author', 'publishedDate', 'status'],
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
      name: 'excerpt',
      type: 'textarea',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'authors',
      required: true,
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'blog-categories',
      required: true,
    },
    {
      name: 'tags',
      type: 'array',
      fields: [{ name: 'tag', type: 'text' }],
    },
    {
      name: 'publishedDate',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
    },
    {
      name: 'readingTime',
      type: 'text',
      defaultValue: '5 min read',
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'published',
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Published', value: 'published' },
      ],
    },
    seoFieldFactory(),
  ],
}
