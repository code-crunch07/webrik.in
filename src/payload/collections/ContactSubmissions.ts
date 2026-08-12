import type { CollectionConfig } from 'payload'

export const ContactSubmissions: CollectionConfig = {
  slug: 'contact-submissions',
  admin: {
    useAsTitle: 'name',
    group: '📩 Leads',
    defaultColumns: ['name', 'email', 'service', 'budget', 'status', 'createdAt'],
  },
  access: {
    create: () => true, // Publicly writable via form submission
    read: ({ req }) => Boolean(req.user), // Admin only
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'phone',
      type: 'text',
    },
    {
      name: 'company',
      type: 'text',
    },
    {
      name: 'service',
      type: 'text',
      label: 'Selected Service / Requirement',
    },
    {
      name: 'budget',
      type: 'select',
      options: [
        { label: 'Under ₹1 Lakh', value: 'Under ₹1 Lakh' },
        { label: '₹1–5 Lakh', value: '₹1–5 Lakh' },
        { label: '₹5–10 Lakh', value: '₹5–10 Lakh' },
        { label: '₹10–25 Lakh', value: '₹10–25 Lakh' },
        { label: '₹25 Lakh+', value: '₹25 Lakh+' },
      ],
    },
    {
      name: 'message',
      type: 'textarea',
      required: true,
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'new',
      options: [
        { label: 'New Lead', value: 'new' },
        { label: 'Contacted', value: 'contacted' },
        { label: 'In Progress', value: 'in_progress' },
        { label: 'Closed / Converted', value: 'closed' },
      ],
    },
    {
      name: 'crmNotes',
      type: 'textarea',
      label: 'Internal Sales / CRM Notes',
    },
  ],
}
