import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
    group: 'Admin Settings',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'roles',
      type: 'select',
      hasMany: true,
      defaultValue: ['admin'],
      options: [
        { label: 'Super Admin', value: 'admin' },
        { label: 'Marketing Manager', value: 'marketing_manager' },
        { label: 'Editor', value: 'editor' },
        { label: 'Author', value: 'author' },
      ],
    },
  ],
}
