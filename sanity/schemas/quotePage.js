// ══════════════════════════════════════════════════════════
//  HD Processing — Sanity Schema: Quote Page
//  File: /sanity/schemas/quotePage.js
//
//  GROQ query:  *[_type == "quotePage"][0]
//  Singleton — only one quote page ever.
// ══════════════════════════════════════════════════════════

export default {
  name: 'quotePage',
  title: 'Quote Page',
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
          initialValue: 'Get a Free Quote — HD Processing | Lafayette, LA',
          validation: R => R.max(60).warning('Keep under 60 characters'),
        },
        {
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          rows: 3,
          initialValue: 'Get a free merchant services quote from HD Processing in Lafayette, LA. No contracts, no pressure. Takes 60 seconds.',
          validation: R => R.min(140).max(160).warning('Best between 140–160 characters'),
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
          initialValue: 'Get Your Free Quote',
          validation: R => R.required().max(40),
        },
        {
          name: 'highlightWord',
          title: 'Highlighted Word (renders in gold)',
          type: 'string',
          initialValue: 'Free',
        },
        {
          name: 'subtext',
          title: 'Subtext',
          type: 'text',
          rows: 2,
          initialValue: "Takes 60 seconds. No contracts, no pressure — just an honest look at what you're paying and what you could save.",
        },
      ],
    },

    // ── STEP LABELS ──────────────────────────────────────
    {
      name: 'steps',
      title: 'Form Steps',
      type: 'array',
      description: 'Edit the title and description shown at the top of each step.',
      of: [
        {
          type: 'object',
          name: 'formStep',
          preview: { select: { title: 'title' } },
          fields: [
            {
              name: 'title',
              title: 'Step Title',
              type: 'string',
              validation: R => R.required(),
            },
            {
              name: 'description',
              title: 'Step Description',
              type: 'string',
            },
          ],
        },
      ],
      initialValue: [
        { _type: 'formStep', title: 'Tell Us About Your Business', description: 'We use this to match you with the right processing setup for your industry.' },
        { _type: 'formStep', title: 'Monthly Card Volume', description: 'Approximate is fine. This helps us find you the most competitive rate tier.' },
        { _type: 'formStep', title: 'How Do We Reach You?', description: 'A local HD Processing rep will follow up within one business day — no pressure, no pitch scripts.' },
      ],
    },

    // ── INDUSTRY DROPDOWN OPTIONS ─────────────────────────
    {
      name: 'industryOptions',
      title: 'Industry Dropdown Options',
      type: 'array',
      description: 'Add, remove, or reorder industry options shown in Step 1.',
      of: [
        {
          type: 'object',
          name: 'dropdownOption',
          preview: { select: { title: 'label', subtitle: 'value' } },
          fields: [
            { name: 'label', title: 'Label (shown to user)', type: 'string', validation: R => R.required() },
            { name: 'value', title: 'Value (sent to GHL)', type: 'string', validation: R => R.required() },
          ],
        },
      ],
      initialValue: [
        { _type: 'dropdownOption', label: 'Restaurant / Food Service', value: 'restaurant' },
        { _type: 'dropdownOption', label: 'Coffee Shop / Café', value: 'coffee-shop' },
        { _type: 'dropdownOption', label: 'Retail', value: 'retail' },
        { _type: 'dropdownOption', label: 'Salon / Spa / Beauty', value: 'salon-spa' },
        { _type: 'dropdownOption', label: 'Contractor / Trades', value: 'contractor' },
        { _type: 'dropdownOption', label: 'Auto Service', value: 'auto' },
        { _type: 'dropdownOption', label: 'Medical / Healthcare', value: 'medical' },
        { _type: 'dropdownOption', label: 'Ecommerce / Online', value: 'ecommerce' },
        { _type: 'dropdownOption', label: 'Service Business', value: 'service' },
        { _type: 'dropdownOption', label: 'Other', value: 'other' },
      ],
    },

    // ── VOLUME TILES ─────────────────────────────────────
    {
      name: 'volumeOptions',
      title: 'Volume Tile Options',
      type: 'array',
      description: 'The 4 clickable volume tiles in Step 2. Edit amounts or add tiers.',
      of: [
        {
          type: 'object',
          name: 'volumeTile',
          preview: { select: { title: 'amount', subtitle: 'value' } },
          fields: [
            { name: 'amount', title: 'Display Amount (e.g. $5K – $15K)', type: 'string', validation: R => R.required() },
            { name: 'label', title: 'Sub-label (e.g. per month)', type: 'string', initialValue: 'per month' },
            { name: 'value', title: 'Value (sent to GHL)', type: 'string', validation: R => R.required() },
          ],
        },
      ],
      initialValue: [
        { _type: 'volumeTile', amount: 'Under $5K', label: 'per month', value: 'under-5k' },
        { _type: 'volumeTile', amount: '$5K – $15K', label: 'per month', value: '5k-15k' },
        { _type: 'volumeTile', amount: '$15K – $50K', label: 'per month', value: '15k-50k' },
        { _type: 'volumeTile', amount: '$50K+', label: 'per month', value: '50k-plus' },
      ],
    },

    // ── A2P CONSENT TEXT ─────────────────────────────────
    {
      name: 'a2pDisclosure',
      title: 'A2P SMS Disclosure Text',
      type: 'text',
      rows: 4,
      description: 'Legal SMS consent language shown below the checkbox. Edit carefully — must remain A2P 10DLC compliant. Include STOP/HELP instructions and a link to Privacy Policy.',
      initialValue: 'By submitting this form, you consent to be contacted by HD Processing via phone and/or email regarding your quote request. SMS consent is optional but helps us reach you faster. You may opt out of SMS at any time by replying STOP. For help, reply HELP. Consent is not a condition of purchase. View our Privacy Policy and Terms of Service.',
      validation: R => R.required(),
    },

    // ── GHL WEBHOOK ──────────────────────────────────────
    {
      name: 'webhookUrl',
      title: 'GHL Webhook URL',
      type: 'string',
      description: 'Paste your GoHighLevel webhook POST URL here. Form submissions are sent as JSON to this endpoint.',
      validation: R => R.uri({ allowRelative: false }).warning('Should be a full https:// URL'),
    },

    // ── THANK YOU ─────────────────────────────────────────
    {
      name: 'thankYou',
      title: 'Thank You Screen',
      type: 'object',
      options: { collapsible: true, collapsed: false },
      fields: [
        {
          name: 'headline',
          title: 'Headline',
          type: 'string',
          initialValue: "You're All Set!",
          validation: R => R.required(),
        },
        {
          name: 'body',
          title: 'Body Text',
          type: 'text',
          rows: 2,
          initialValue: 'A local HD Processing rep will reach out within one business day to go over your free quote. No contracts, no surprises.',
        },
        {
          name: 'ctaLabel',
          title: 'CTA Button Label',
          type: 'string',
          initialValue: 'Back to Home',
        },
        {
          name: 'ctaLink',
          title: 'CTA Button Link',
          type: 'string',
          initialValue: '/',
        },
      ],
    },

  ], // end fields

  preview: {
    prepare() {
      return { title: 'Quote Page', subtitle: 'hdprocessing.com/quote' }
    },
  },
}
