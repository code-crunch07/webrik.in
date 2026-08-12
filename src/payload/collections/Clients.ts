import type { CollectionConfig } from 'payload'

export const Clients: CollectionConfig = {
  slug: 'clients',
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
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'website',
      type: 'text',
    },
    {
      name: 'industry',
      type: 'text',
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
  ],
}
