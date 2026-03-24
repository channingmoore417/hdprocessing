// ══════════════════════════════════════════════════════════
//  HD Processing — Sanity Schema: Service Page
//  File: /sanity/schemas/servicePage.js
//
//  Reusable document type — one document per service:
//    - credit-card-processing
//    - pos-systems
//    - mobile-payments
//    - online-payments
//
//  GROQ query:
//    *[_type == "servicePage" && serviceSlug == $slug][0]
// ══════════════════════════════════════════════════════════

export default {
  name: 'servicePage',
  title: 'Service Pages',
  type: 'document',

  fields: [

    // ── IDENTITY ─────────────────────────────────────────
    {
      name: 'serviceSlug',
      title: 'Service Slug',
      type: 'string',
      description: 'URL slug, e.g. "credit-card-processing". Must be unique.',
      validation: (R) => R.required(),
    },
    {
      name: 'serviceName',
      title: 'Service Name',
      type: 'string',
      description: 'Display name, e.g. "Credit Card Processing".',
      validation: (R) => R.required(),
    },

    // ── SEO ──────────────────────────────────────────────
    {
      name: 'seo',
      title: 'SEO',
      type: 'object',
      options: { collapsible: true, collapsed: false },
      fields: [
        {
          name: 'metaTitle',
          title: 'Meta Title',
          type: 'string',
          validation: (R) => R.max(60).warning('Keep under 60 characters'),
        },
        {
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          rows: 3,
          validation: (R) =>
            R.min(140).max(160).warning('Best between 140–160 characters'),
        },
      ],
    },

    // ── HERO ─────────────────────────────────────────────
    {
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      options: { collapsible: true, collapsed: false },
      fields: [
        {
          name: 'headline',
          title: 'Headline',
          type: 'string',
          validation: (R) => R.required().max(50),
        },
        {
          name: 'highlightWord',
          title: 'Highlighted Word (gold)',
          type: 'string',
        },
        {
          name: 'subtext',
          title: 'Subtext',
          type: 'text',
          rows: 2,
        },
      ],
    },

    // ── PAIN POINTS ──────────────────────────────────────
    {
      name: 'painPoints',
      title: 'Pain Points',
      type: 'array',
      description: '3–4 pain points the service solves.',
      of: [
        {
          type: 'object',
          name: 'painPoint',
          preview: { select: { title: 'title' } },
          fields: [
            { name: 'title', title: 'Title', type: 'string', validation: (R) => R.required() },
            { name: 'body', title: 'Body', type: 'text', rows: 3 },
          ],
        },
      ],
    },

    // ── SOLUTION ─────────────────────────────────────────
    {
      name: 'solution',
      title: 'Solution Section',
      type: 'object',
      options: { collapsible: true, collapsed: false },
      fields: [
        {
          name: 'heading',
          title: 'Heading',
          type: 'string',
          validation: (R) => R.required(),
        },
        {
          name: 'body',
          title: 'Body',
          type: 'text',
          rows: 4,
        },
      ],
    },

    // ── FEATURES ─────────────────────────────────────────
    {
      name: 'features',
      title: 'Features (6 cards)',
      type: 'array',
      description: '6 feature cards with icon, title, and description.',
      of: [
        {
          type: 'object',
          name: 'featureCard',
          preview: { select: { title: 'title', subtitle: 'icon' } },
          fields: [
            { name: 'icon', title: 'Icon (emoji)', type: 'string' },
            { name: 'title', title: 'Title', type: 'string', validation: (R) => R.required() },
            { name: 'description', title: 'Description', type: 'text', rows: 3 },
          ],
        },
      ],
    },

    // ── COMPARISON TABLE ─────────────────────────────────
    {
      name: 'comparison',
      title: 'Comparison Table',
      type: 'array',
      description: 'Rows comparing typical processors vs HD Processing.',
      of: [
        {
          type: 'object',
          name: 'comparisonRow',
          preview: { select: { title: 'feature' } },
          fields: [
            { name: 'feature', title: 'Feature', type: 'string', validation: (R) => R.required() },
            { name: 'typical', title: 'Typical Processor', type: 'string' },
            { name: 'hd', title: 'HD Processing', type: 'string' },
          ],
        },
      ],
    },

    // ── WHO IT'S FOR ─────────────────────────────────────
    {
      name: 'whoItsFor',
      title: "Who It's For (4 tiles)",
      type: 'array',
      description: '4 industry tiles linking to industry pages.',
      of: [
        {
          type: 'object',
          name: 'industryTile',
          preview: { select: { title: 'name', subtitle: 'icon' } },
          fields: [
            { name: 'icon', title: 'Icon (emoji)', type: 'string' },
            { name: 'name', title: 'Industry Name', type: 'string', validation: (R) => R.required() },
            { name: 'link', title: 'Link', type: 'string' },
          ],
        },
      ],
    },

    // ── FAQ ──────────────────────────────────────────────
    {
      name: 'faqItems',
      title: 'FAQ Items (5)',
      type: 'array',
      description: '5 FAQ items specific to this service.',
      of: [
        {
          type: 'object',
          name: 'faqItem',
          preview: { select: { title: 'question' } },
          fields: [
            { name: 'question', title: 'Question', type: 'string', validation: (R) => R.required() },
            { name: 'answer', title: 'Answer', type: 'text', rows: 4, validation: (R) => R.required() },
          ],
        },
      ],
    },

    // ── FINAL CTA ────────────────────────────────────────
    {
      name: 'finalCta',
      title: 'Final CTA Section',
      type: 'object',
      options: { collapsible: true, collapsed: false },
      fields: [
        {
          name: 'headline',
          title: 'Headline',
          type: 'string',
          validation: (R) => R.required(),
        },
        {
          name: 'body',
          title: 'Body',
          type: 'text',
          rows: 2,
        },
        {
          name: 'buttonLabel',
          title: 'Button Label',
          type: 'string',
          initialValue: 'Get Your Free Quote',
        },
      ],
    },

    // ── WEBHOOK ──────────────────────────────────────────
    {
      name: 'webhookUrl',
      title: 'Webhook URL',
      type: 'string',
      description: 'Optional POST endpoint for this service page form.',
    },
  ],

  preview: {
    select: { title: 'serviceName', subtitle: 'serviceSlug' },
    prepare({ title, subtitle }) {
      return { title: title || 'Untitled Service', subtitle: `/services/${subtitle}` }
    },
  },
}
