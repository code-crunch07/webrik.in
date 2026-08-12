import type { CollectionConfig } from 'payload'

export const Technologies: CollectionConfig = {
  slug: 'technologies',
  admin: {
    useAsTitle: 'name',
    group: '👥 Marketing',
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
      name: 'category',
      type: 'select',
      defaultValue: 'frontend',
      options: [
        { label: 'Frontend', value: 'frontend' },
        { label: 'Backend', value: 'backend' },
        { label: 'Mobile App', value: 'mobile' },
        { label: 'Cloud & DevOps', value: 'cloud' },
        { label: 'Marketing & Analytics', value: 'marketing' },
      ],
    },
    {
      name: 'icon',
      type: 'text',
      label: 'Lucide Icon Name or Tech Slug',
    },
  ],
}
