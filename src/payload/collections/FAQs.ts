import type { CollectionConfig } from 'payload'

export const FAQs: CollectionConfig = {
  slug: 'faqs',
  admin: {
    useAsTitle: 'question',
    group: '👥 Marketing',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'question',
      type: 'text',
      required: true,
    },
    {
      name: 'answer',
      type: 'textarea',
      required: true,
    },
    {
      name: 'category',
      type: 'select',
      defaultValue: 'general',
      options: [
        { label: 'General', value: 'general' },
        { label: 'Software Development', value: 'software' },
        { label: 'Digital Marketing', value: 'marketing' },
        { label: 'Pricing & Engagement', value: 'pricing' },
      ],
    },
  ],
}
