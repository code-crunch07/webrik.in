import type { CollectionConfig } from 'payload'

export const Jobs: CollectionConfig = {
  slug: 'jobs',
  admin: {
    useAsTitle: 'title',
    group: '🧑‍💼 Company',
    defaultColumns: ['title', 'department', 'location', 'active'],
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
      name: 'department',
      type: 'select',
      required: true,
      options: [
        { label: 'Engineering', value: 'Engineering' },
        { label: 'Digital Marketing', value: 'Digital Marketing' },
        { label: 'Design & UI/UX', value: 'Design' },
        { label: 'Sales & Growth', value: 'Sales' },
      ],
    },
    {
      name: 'location',
      type: 'text',
      defaultValue: 'Remote / Hybrid (Mumbai)',
    },
    {
      name: 'employmentType',
      type: 'select',
      defaultValue: 'Full-time',
      options: [
        { label: 'Full-time', value: 'Full-time' },
        { label: 'Part-time', value: 'Part-time' },
        { label: 'Contract', value: 'Contract' },
      ],
    },
    {
      name: 'experience',
      type: 'text',
      defaultValue: '2+ Years',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'responsibilities',
      type: 'array',
      fields: [{ name: 'item', type: 'text' }],
    },
    {
      name: 'requirements',
      type: 'array',
      fields: [{ name: 'item', type: 'text' }],
    },
    {
      name: 'benefits',
      type: 'array',
      fields: [{ name: 'item', type: 'text' }],
    },
    {
      name: 'active',
      type: 'checkbox',
      defaultValue: true,
    },
  ],
}
