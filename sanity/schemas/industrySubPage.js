// ══════════════════════════════════════════════════════════
//  HD Processing — Sanity Schema: Industry Sub-Page
//  File: /sanity/schemas/industrySubPage.js
//
//  Sub-page document — 21 documents total, grouped under
//  parent industryPage categories.
//
//  GROQ query:
//    *[_type == "industrySubPage" && subSlug == $slug][0]{
//      ...,
//      parentCategory->{ categorySlug, categoryLabel }
//    }
// ══════════════════════════════════════════════════════════

export default {
  name: 'industrySubPage',
  title: 'Industry Sub-Pages',
  type: 'document',

  fields: [

    // ── PARENT REFERENCE ─────────────────────────────────
    {
      name: 'parentCategory',
      title: 'Parent Industry Category',
      type: 'reference',
      to: [{ type: 'industryPage' }],
      description: 'The parent industry category this sub-page belongs to.',
      validation: (R) => R.required(),
    },

    // ── IDENTITY ─────────────────────────────────────────
    {
      name: 'subSlug',
      title: 'Sub-Page Slug',
      type: 'string',
      description: 'URL slug, e.g. "coffee-tea-shops". Must be unique.',
      validation: (R) => R.required(),
    },
    {
      name: 'subLabel',
      title: 'Sub-Page Label',
      type: 'string',
      description: 'Display name, e.g. "Coffee & Tea Shops".',
      validation: (R) => R.required(),
    },
    {
      name: 'subIcon',
      title: 'Sub-Page Icon (emoji)',
      type: 'string',
      description: 'Single emoji used as the sub-page icon.',
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
      description: '4 pain points specific to this sub-industry.',
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

    // ── SOLUTIONS ────────────────────────────────────────
    {
      name: 'solutions',
      title: 'Solutions Text',
      type: 'text',
      rows: 4,
      description: 'Overview of how HD Processing solves pain points for this sub-industry.',
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

    // ── CASE EXAMPLE ─────────────────────────────────────
    {
      name: 'caseExample',
      title: 'Case Example',
      type: 'object',
      options: { collapsible: true, collapsed: false },
      description: 'A real-world (or realistic) example of how HD Processing helped a business in this sub-industry.',
      fields: [
        {
          name: 'businessName',
          title: 'Business Name',
          type: 'string',
          description: 'e.g. "A Lafayette coffee shop"',
        },
        {
          name: 'scenario',
          title: 'Scenario',
          type: 'text',
          rows: 3,
          description: 'The problem or situation the business faced.',
        },
        {
          name: 'result',
          title: 'Result',
          type: 'text',
          rows: 3,
          description: 'The outcome after switching to HD Processing.',
        },
      ],
    },

    // ── FAQ ──────────────────────────────────────────────
    {
      name: 'faqItems',
      title: 'FAQ Items (5)',
      type: 'array',
      description: '5 FAQ items. Include the sub-industry name and "Lafayette" for local SEO.',
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
  ],

  preview: {
    select: {
      title: 'subLabel',
      subtitle: 'subSlug',
      icon: 'subIcon',
      parent: 'parentCategory.categoryLabel',
    },
    prepare({ title, subtitle, icon, parent }) {
      return {
        title: `${icon || ''} ${title || 'Untitled Sub-Page'}`.trim(),
        subtitle: `${parent || '?'} → /industries/.../\${subtitle}`,
      }
    },
  },
}
