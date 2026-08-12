import type { Block } from 'payload'
import { ctaFieldFactory } from '../fields/cta'
import { blockVisibilityField } from '../fields/blockVisibility'

export const HeroBlock: Block = {
  slug: 'heroBlock',
  labels: {
    singular: 'Hero Section',
    plural: 'Hero Sections',
  },
  fields: [
    blockVisibilityField,
    {
      name: 'eyebrow',
      type: 'text',
      label: 'Eyebrow / Badge Text',
      defaultValue: '🚀 Technology + Design + Marketing',
    },
    {
      name: 'heading',
      type: 'text',
      label: 'Main Headline',
      required: true,
      defaultValue: 'We Build. We Market. We Grow Your Business.',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Supporting Copy',
      defaultValue: 'Webrik is a software development and digital marketing agency that helps brands build powerful digital experiences and scale with result-driven marketing.',
    },
    ctaFieldFactory('primaryCTA', 'Primary CTA (Explore Services)'),
    ctaFieldFactory('secondaryCTA', 'Secondary CTA (View Work)'),
    {
      name: 'techBadgeList',
      type: 'array',
      label: 'Floating Badges',
      fields: [
        { name: 'badgeText', type: 'text', label: 'Badge Text' },
        { name: 'icon', type: 'text', label: 'Icon Name (lucide)' },
      ],
    },
  ],
}

export const LogoCloudBlock: Block = {
  slug: 'logoCloudBlock',
  labels: { singular: 'Logo Cloud', plural: 'Logo Clouds' },
  fields: [
    blockVisibilityField,
    { name: 'heading', type: 'text', label: 'Heading', defaultValue: 'Trusted by Industry Leaders' },
    { name: 'selectMode', type: 'select', options: [{ label: 'All Featured Clients', value: 'all' }, { label: 'Selected Clients', value: 'custom' }], defaultValue: 'all' },
    { name: 'clients', type: 'relationship', relationTo: 'clients', hasMany: true },
  ],
}

export const ServicesGridBlock: Block = {
  slug: 'servicesGridBlock',
  labels: { singular: 'Services Grid', plural: 'Services Grids' },
  fields: [
    blockVisibilityField,
    { name: 'eyebrow', type: 'text', defaultValue: 'OUR EXPERTISE' },
    { name: 'heading', type: 'text', defaultValue: 'End-to-End Digital Solutions' },
    { name: 'description', type: 'textarea', defaultValue: 'From scalable software architecture to high-ROI performance marketing campaigns.' },
    { name: 'filterCategory', type: 'select', options: [{ label: 'All Services', value: 'all' }, { label: 'Software Development', value: 'software' }, { label: 'Digital Marketing', value: 'marketing' }], defaultValue: 'all' },
    { name: 'limit', type: 'number', defaultValue: 6 },
  ],
}

export const StatsBlock: Block = {
  slug: 'statsBlock',
  labels: { singular: 'Stats Counter', plural: 'Stats Counters' },
  fields: [
    blockVisibilityField,
    { name: 'heading', type: 'text', defaultValue: 'Driven by Measurable Impact' },
    {
      name: 'stats',
      type: 'array',
      label: 'Statistics',
      fields: [
        { name: 'value', type: 'text', label: 'Metric Value (e.g. 120+)', required: true },
        { name: 'label', type: 'text', label: 'Label (e.g. Happy Clients)', required: true },
        { name: 'sublabel', type: 'text', label: 'Sublabel / Context' },
      ],
    },
  ],
}

export const AboutBlock: Block = {
  slug: 'aboutBlock',
  labels: { singular: 'About Section', plural: 'About Sections' },
  fields: [
    blockVisibilityField,
    { name: 'eyebrow', type: 'text', defaultValue: 'WHO WE ARE' },
    { name: 'heading', type: 'text', defaultValue: 'Your Engineering & Growth Partner' },
    { name: 'content', type: 'textarea', defaultValue: 'Webrik bridges the gap between complex technical development and high-converting growth marketing.' },
    ctaFieldFactory('cta', 'CTA Button'),
    {
      name: 'pillars',
      type: 'array',
      fields: [
        { name: 'title', type: 'text' },
        { name: 'description', type: 'textarea' },
        { name: 'icon', type: 'text' },
      ],
    },
  ],
}

export const IndustriesGridBlock: Block = {
  slug: 'industriesGridBlock',
  labels: { singular: 'Industries Grid', plural: 'Industries Grids' },
  fields: [
    blockVisibilityField,
    { name: 'eyebrow', type: 'text', defaultValue: 'INDUSTRIES WE SERVE' },
    { name: 'heading', type: 'text', defaultValue: 'Tailored Solutions for Every Domain' },
    { name: 'description', type: 'textarea', defaultValue: 'Deep domain expertise across high-growth verticals.' },
  ],
}

export const PortfolioGridBlock: Block = {
  slug: 'portfolioGridBlock',
  labels: { singular: 'Portfolio Grid', plural: 'Portfolio Grids' },
  fields: [
    blockVisibilityField,
    { name: 'eyebrow', type: 'text', defaultValue: 'FEATURED WORK' },
    { name: 'heading', type: 'text', defaultValue: 'Crafted for Scalability & Speed' },
    { name: 'limit', type: 'number', defaultValue: 6 },
    { name: 'showFilter', type: 'checkbox', defaultValue: true },
  ],
}

export const CaseStudiesBlock: Block = {
  slug: 'caseStudiesBlock',
  labels: { singular: 'Case Studies Highlight', plural: 'Case Studies Highlights' },
  fields: [
    blockVisibilityField,
    { name: 'eyebrow', type: 'text', defaultValue: 'SUCCESS STORIES' },
    { name: 'heading', type: 'text', defaultValue: 'Real Results for Visionary Brands' },
    { name: 'limit', type: 'number', defaultValue: 3 },
  ],
}

export const ProcessBlock: Block = {
  slug: 'processBlock',
  labels: { singular: 'Process Section', plural: 'Process Sections' },
  fields: [
    blockVisibilityField,
    { name: 'eyebrow', type: 'text', defaultValue: 'HOW WE WORK' },
    { name: 'heading', type: 'text', defaultValue: 'A Proven Framework for Scale' },
    {
      name: 'steps',
      type: 'array',
      fields: [
        { name: 'stepNumber', type: 'text', label: 'Number (e.g. 01)', required: true },
        { name: 'title', type: 'text', label: 'Step Title', required: true },
        { name: 'description', type: 'textarea', label: 'Description', required: true },
      ],
    },
  ],
}

export const TestimonialsBlock: Block = {
  slug: 'testimonialsBlock',
  labels: { singular: 'Testimonials Carousel', plural: 'Testimonials Carousels' },
  fields: [
    blockVisibilityField,
    { name: 'eyebrow', type: 'text', defaultValue: 'CLIENT FEEDBACK' },
    { name: 'heading', type: 'text', defaultValue: 'What Founders & Executives Say' },
  ],
}

export const TeamBlock: Block = {
  slug: 'teamBlock',
  labels: { singular: 'Team Grid', plural: 'Team Grids' },
  fields: [
    blockVisibilityField,
    { name: 'eyebrow', type: 'text', defaultValue: 'OUR LEADERSHIP' },
    { name: 'heading', type: 'text', defaultValue: 'The Minds Behind Webrik' },
  ],
}

export const BlogGridBlock: Block = {
  slug: 'blogGridBlock',
  labels: { singular: 'Blog Grid', plural: 'Blog Grids' },
  fields: [
    blockVisibilityField,
    { name: 'eyebrow', type: 'text', defaultValue: 'INSIGHTS & ARTICLES' },
    { name: 'heading', type: 'text', defaultValue: 'Latest from Engineering & Growth' },
    { name: 'limit', type: 'number', defaultValue: 3 },
  ],
}

export const FAQBlock: Block = {
  slug: 'faqBlock',
  labels: { singular: 'FAQ Accordion', plural: 'FAQ Accordions' },
  fields: [
    blockVisibilityField,
    { name: 'eyebrow', type: 'text', defaultValue: 'GOT QUESTIONS?' },
    { name: 'heading', type: 'text', defaultValue: 'Frequently Asked Questions' },
  ],
}

export const CTABlock: Block = {
  slug: 'ctaBlock',
  labels: { singular: 'CTA Banner', plural: 'CTA Banners' },
  fields: [
    blockVisibilityField,
    { name: 'heading', type: 'text', defaultValue: 'Ready to Build Something Extraordinary?' },
    { name: 'subheading', type: 'textarea', defaultValue: 'Schedule a discovery session with our tech & marketing architects.' },
    ctaFieldFactory('primaryCTA', 'Primary Button'),
  ],
}

export const ContactBlock: Block = {
  slug: 'contactBlock',
  labels: { singular: 'Contact Form Section', plural: 'Contact Form Sections' },
  fields: [
    blockVisibilityField,
    { name: 'heading', type: 'text', defaultValue: 'Let’s Talk About Your Project' },
    { name: 'subheading', type: 'textarea', defaultValue: 'Fill out the form below and our team will get back to you within 24 hours.' },
  ],
}

export const RichTextBlock: Block = {
  slug: 'richTextBlock',
  labels: { singular: 'Rich Text Block', plural: 'Rich Text Blocks' },
  fields: [
    blockVisibilityField,
    { name: 'content', type: 'richText', label: 'Rich Text Content' },
  ],
}

export const allPageBlocks = [
  HeroBlock,
  LogoCloudBlock,
  ServicesGridBlock,
  StatsBlock,
  AboutBlock,
  IndustriesGridBlock,
  PortfolioGridBlock,
  CaseStudiesBlock,
  ProcessBlock,
  TestimonialsBlock,
  TeamBlock,
  BlogGridBlock,
  FAQBlock,
  CTABlock,
  ContactBlock,
  RichTextBlock,
]
