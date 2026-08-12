import type { CollectionConfig } from 'payload'

export const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  admin: {
    useAsTitle: 'clientName',
    group: '👥 Marketing',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'clientName',
      type: 'text',
      required: true,
    },
    {
      name: 'designation',
      type: 'text',
      required: true,
    },
    {
      name: 'company',
      type: 'text',
      required: true,
    },
    {
      name: 'photo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'rating',
      type: 'number',
      defaultValue: 5,
      min: 1,
      max: 5,
    },
    {
      name: 'testimonial',
      type: 'textarea',
      required: true,
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: true,
    },
  ],
}
