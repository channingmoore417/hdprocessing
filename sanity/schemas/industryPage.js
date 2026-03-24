// ══════════════════════════════════════════════════════════
//  HD Processing — Sanity Schema: Industry Page (Parent)
//  File: /sanity/schemas/industryPage.js
//
//  Parent category document — one per industry vertical:
//    - restaurants
//    - retail
//    - healthcare
//    - service-businesses
//
//  GROQ query:
//    *[_type == "industryPage" && categorySlug == $slug][0]
// ══════════════════════════════════════════════════════════

export default {
  name: 'industryPage',
  title: 'Industry Pages',
  type: 'document',

  fields: [

    // ── IDENTITY ─────────────────────────────────────────
    {
      name: 'categorySlug',
      title: 'Category Slug',
      type: 'string',
      description: 'URL slug, e.g. "restaurants". Must be unique.',
      validation: (R) => R.required(),
    },
    {
      name: 'categoryLabel',
      title: 'Category Label',
      type: 'string',
      description: 'Display name, e.g. "Restaurants & Bars".',
      validation: (R) => R.required(),
    },
    {
      name: 'categoryIcon',
      title: 'Category Icon (emoji)',
      type: 'string',
      description: 'Single emoji used as the category icon.',
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
          validation: (R) => R.required().max(60),
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
      title: 'Pain Points (4 items)',
      type: 'array',
      description: '4 pain points specific to this industry.',
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
  ],

  preview: {
    select: { title: 'categoryLabel', subtitle: 'categorySlug', icon: 'categoryIcon' },
    prepare({ title, subtitle, icon }) {
      return {
        title: `${icon || ''} ${title || 'Untitled Industry'}`.trim(),
        subtitle: `/industries/${subtitle}`,
      }
    },
  },
}
