// ══════════════════════════════════════════════════════════
//  HD Processing — Sanity Schema: About Page
//  File: /sanity/schemas/aboutPage.js
//
//  Singleton document for the About page.
//  GROQ query: *[_type == "aboutPage"][0]
// ══════════════════════════════════════════════════════════

export default {
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  __experimental_actions: ['update', 'publish'],

  fields: [

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
          initialValue: 'About HD Processing — Lafayette, LA Merchant Services',
          validation: (R) => R.max(60).warning('Keep under 60 characters'),
        },
        {
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          rows: 3,
          initialValue:
            'HD Processing is a Lafayette, LA merchant services company offering credit card processing, POS systems, and mobile payments to local businesses.',
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
          initialValue: 'About HD Processing',
          validation: (R) => R.required().max(50),
        },
        {
          name: 'highlightWord',
          title: 'Highlighted Word (gold)',
          type: 'string',
          description:
            'The word in the headline rendered in gold. Must match exactly.',
          initialValue: 'HD Processing',
        },
        {
          name: 'subtext',
          title: 'Subtext',
          type: 'text',
          rows: 2,
          initialValue:
            'Local merchant services built for Acadiana businesses. No call centers. No runaround. Just real people who pick up the phone.',
        },
      ],
    },

    // ── PROOF STRIP ──────────────────────────────────────
    {
      name: 'proofStrip',
      title: 'Proof Strip (stat counters)',
      type: 'array',
      description: 'The row of stats shown below the hero (e.g. "200+ Local Businesses").',
      of: [
        {
          type: 'object',
          name: 'proofItem',
          preview: { select: { title: 'num', subtitle: 'label' } },
          fields: [
            {
              name: 'num',
              title: 'Number / Stat',
              type: 'string',
              description: 'e.g. "200+" or "5★"',
              validation: (R) => R.required(),
            },
            {
              name: 'label',
              title: 'Label',
              type: 'string',
              description: 'e.g. "Local Businesses"',
              validation: (R) => R.required(),
            },
          ],
        },
      ],
    },

    // ── STORY ────────────────────────────────────────────
    {
      name: 'story',
      title: 'Our Story Section',
      type: 'object',
      options: { collapsible: true, collapsed: false },
      fields: [
        {
          name: 'heading',
          title: 'Heading',
          type: 'string',
          initialValue: 'Our Story',
          validation: (R) => R.required(),
        },
        {
          name: 'paragraphs',
          title: 'Paragraphs',
          type: 'array',
          description: 'Each item is one paragraph of the story section.',
          of: [{ type: 'text', rows: 4 }],
        },
        {
          name: 'cards',
          title: 'Info Cards',
          type: 'array',
          description: 'Small cards shown alongside the story (e.g. "Founded 2018", "Based in Lafayette").',
          of: [
            {
              type: 'object',
              name: 'storyCard',
              preview: { select: { title: 'title', subtitle: 'body' } },
              fields: [
                { name: 'title', title: 'Title', type: 'string', validation: (R) => R.required() },
                { name: 'body', title: 'Body', type: 'string' },
              ],
            },
          ],
        },
      ],
    },

    // ── MISSION ──────────────────────────────────────────
    {
      name: 'mission',
      title: 'Mission Section',
      type: 'object',
      options: { collapsible: true, collapsed: false },
      fields: [
        {
          name: 'heading',
          title: 'Heading',
          type: 'string',
          initialValue: 'Our Mission',
          validation: (R) => R.required(),
        },
        {
          name: 'body',
          title: 'Body Text',
          type: 'text',
          rows: 4,
        },
        {
          name: 'values',
          title: 'Values',
          type: 'array',
          of: [
            {
              type: 'object',
              name: 'valueItem',
              preview: { select: { title: 'title' } },
              fields: [
                { name: 'title', title: 'Title', type: 'string', validation: (R) => R.required() },
                { name: 'body', title: 'Body', type: 'text', rows: 3 },
              ],
            },
          ],
        },
      ],
    },

    // ── DIFFERENCE ───────────────────────────────────────
    {
      name: 'difference',
      title: 'The HD Difference Section',
      type: 'object',
      options: { collapsible: true, collapsed: false },
      fields: [
        {
          name: 'heading',
          title: 'Heading',
          type: 'string',
          initialValue: 'The HD Difference',
          validation: (R) => R.required(),
        },
        {
          name: 'cards',
          title: 'Difference Cards',
          type: 'array',
          of: [
            {
              type: 'object',
              name: 'differenceCard',
              preview: { select: { title: 'title', subtitle: 'icon' } },
              fields: [
                {
                  name: 'icon',
                  title: 'Icon (emoji or class)',
                  type: 'string',
                  description: 'Single emoji or icon identifier.',
                },
                { name: 'title', title: 'Title', type: 'string', validation: (R) => R.required() },
                { name: 'body', title: 'Body', type: 'text', rows: 3 },
              ],
            },
          ],
        },
      ],
    },

    // ── TEAM ─────────────────────────────────────────────
    {
      name: 'team',
      title: 'Team Section',
      type: 'object',
      options: { collapsible: true, collapsed: false },
      fields: [
        {
          name: 'heading',
          title: 'Heading',
          type: 'string',
          initialValue: 'Meet the Team',
          validation: (R) => R.required(),
        },
        {
          name: 'subtext',
          title: 'Subtext',
          type: 'text',
          rows: 2,
        },
        {
          name: 'members',
          title: 'Team Members',
          type: 'array',
          of: [
            {
              type: 'object',
              name: 'teamMember',
              preview: { select: { title: 'name', subtitle: 'title' } },
              fields: [
                { name: 'initials', title: 'Initials', type: 'string', description: 'e.g. "HD"' },
                { name: 'name', title: 'Full Name', type: 'string', validation: (R) => R.required() },
                { name: 'title', title: 'Job Title', type: 'string' },
                { name: 'bio', title: 'Bio', type: 'text', rows: 3 },
              ],
            },
          ],
        },
      ],
    },

    // ── REVIEWS ──────────────────────────────────────────
    {
      name: 'reviews',
      title: 'Reviews Section',
      type: 'object',
      options: { collapsible: true, collapsed: false },
      fields: [
        {
          name: 'cards',
          title: 'Review Cards',
          type: 'array',
          of: [
            {
              type: 'object',
              name: 'reviewCard',
              preview: { select: { title: 'authorName', subtitle: 'authorBiz' } },
              fields: [
                {
                  name: 'stars',
                  title: 'Star Rating',
                  type: 'number',
                  description: '1–5',
                  validation: (R) => R.min(1).max(5),
                  initialValue: 5,
                },
                { name: 'text', title: 'Review Text', type: 'text', rows: 4, validation: (R) => R.required() },
                { name: 'authorName', title: 'Author Name', type: 'string', validation: (R) => R.required() },
                { name: 'authorBiz', title: 'Author Business', type: 'string' },
                { name: 'authorInitials', title: 'Author Initials', type: 'string', description: 'e.g. "JD"' },
              ],
            },
          ],
        },
      ],
    },

    // ── FAQ ──────────────────────────────────────────────
    {
      name: 'faq',
      title: 'FAQ Section',
      type: 'object',
      options: { collapsible: true, collapsed: false },
      fields: [
        {
          name: 'heading',
          title: 'Heading',
          type: 'string',
          initialValue: 'Frequently Asked Questions',
        },
        {
          name: 'items',
          title: 'FAQ Items',
          type: 'array',
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
          initialValue: 'Ready to Switch?',
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
        {
          name: 'buttonLink',
          title: 'Button Link',
          type: 'string',
          initialValue: '/quote',
        },
        {
          name: 'subtext',
          title: 'Subtext (below button)',
          type: 'string',
          initialValue: 'No contracts. No pressure. Just an honest conversation.',
        },
      ],
    },
  ],

  preview: {
    prepare() {
      return { title: 'About Page', subtitle: 'hdprocessing.com/about' }
    },
  },
}
