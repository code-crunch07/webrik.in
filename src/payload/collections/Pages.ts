import type { CollectionConfig } from 'payload'
import { allPageBlocks } from '../blocks/pageBlocks'
import { seoFieldFactory } from '../fields/seo'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    group: '📄 Content',
    defaultColumns: ['title', 'slug', 'updatedAt'],
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
      admin: {
        description: 'Use "home" for the main homepage route (/). Use "about", "contact", "careers", "privacy-policy", "terms-and-conditions", etc.',
      },
    },
    {
      name: 'layout',
      type: 'blocks',
      blocks: allPageBlocks,
    },
    seoFieldFactory(),
  ],
}
