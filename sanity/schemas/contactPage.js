// ══════════════════════════════════════════════════════════
//  HD Processing — Sanity Schema: Contact Page
//  File: /sanity/schemas/contactPage.js
//
//  Every editable field on the contact page is defined here.
//  Your team edits content in Sanity Studio — the frontend
//  reads it via GROQ and renders it dynamically.
//
//  GROQ query to fetch this doc:
//    *[_type == "contactPage"][0]
// ══════════════════════════════════════════════════════════

export default {
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',

  // Only one contact page ever — singleton
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
          description: 'Appears in browser tab and Google results. Keep under 60 chars.',
          initialValue: 'Contact HD Processing — Lafayette, LA Merchant Services',
          validation: R => R.max(60).warning('Keep under 60 characters for best SEO results'),
        },
        {
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          rows: 3,
          description: 'Google snippet text. Keep between 140–160 chars.',
          initialValue: 'Contact HD Processing in Lafayette, LA. Call, email, or fill out the form — our local team responds within one business day.',
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
          description: 'Main H1. Keep it short — renders in Bebas Neue at large size.',
          initialValue: "Let's Talk.",
          validation: R => R.required().max(40),
        },
        {
          name: 'highlightWord',
          title: 'Highlighted Word (gold)',
          type: 'string',
          description: 'The word in the headline that renders in gold. Must match a word in the headline exactly.',
          initialValue: 'Talk.',
        },
        {
          name: 'subtext',
          title: 'Subtext',
          type: 'text',
          rows: 2,
          description: 'Short sentence below the headline. Plain text — bold wrapping is handled in the frontend.',
          initialValue: "We're a local Lafayette team — not a call center. Reach out and a real person will get back to you, usually the same day.",
        },
      ],
    },

    // ── CONTACT INFO ─────────────────────────────────────
    {
      name: 'contactInfo',
      title: 'Contact Info (Left Column)',
      type: 'object',
      options: { collapsible: true, collapsed: false },
      fields: [
        {
          name: 'heading',
          title: 'Section Heading',
          type: 'string',
          initialValue: "We're Right Here in Acadiana.",
          validation: R => R.required(),
        },
        {
          name: 'body',
          title: 'Intro Paragraph',
          type: 'text',
          rows: 3,
          initialValue: "Call us, shoot us an email, or fill out the form. We don't use a ticketing system or a queue — you'll hear from someone on our actual team.",
        },
        {
          name: 'phone',
          title: 'Phone Number',
          type: 'string',
          description: 'Display format, e.g. 337.366.8550',
          initialValue: '337.366.8550',
          validation: R => R.required(),
        },
        {
          name: 'phoneLink',
          title: 'Phone Link (tel:)',
          type: 'string',
          description: 'Format: +13373668550',
          initialValue: '+13373668550',
          validation: R => R.required(),
        },
        {
          name: 'phoneNote',
          title: 'Phone Note',
          type: 'string',
          description: 'Small text under the phone number.',
          initialValue: 'Mon–Fri 8am–6pm · Sat 9am–1pm',
        },
        {
          name: 'email',
          title: 'Email Address',
          type: 'string',
          initialValue: 'info@hdprocessing.com',
          validation: R => R.required().email(),
        },
        {
          name: 'emailNote',
          title: 'Email Note',
          type: 'string',
          initialValue: 'We respond within one business day',
        },
        {
          name: 'address',
          title: 'Street Address (display)',
          type: 'string',
          initialValue: '1027 Johnston St, Lafayette, LA 70501',
          validation: R => R.required(),
        },
        {
          name: 'addressNote',
          title: 'Address Note',
          type: 'string',
          initialValue: 'By appointment — we also come to you',
        },
      ],
    },

    // ── BUSINESS HOURS ───────────────────────────────────
    {
      name: 'hours',
      title: 'Business Hours',
      type: 'array',
      description: 'Add/remove/reorder rows. "Closed" rows show dimmed automatically if hours field is empty.',
      of: [
        {
          type: 'object',
          name: 'hoursRow',
          title: 'Hours Row',
          preview: {
            select: { title: 'day', subtitle: 'hours' },
            prepare({ title, subtitle }) {
              return { title, subtitle: subtitle || 'Closed' }
            },
          },
          fields: [
            {
              name: 'day',
              title: 'Day(s)',
              type: 'string',
              description: 'e.g. "Monday – Friday" or "Saturday"',
              validation: R => R.required(),
            },
            {
              name: 'hours',
              title: 'Hours',
              type: 'string',
              description: 'e.g. "8:00 AM – 6:00 PM" — leave blank for Closed',
            },
          ],
        },
      ],
      initialValue: [
        { _type: 'hoursRow', day: 'Monday – Friday', hours: '8:00 AM – 6:00 PM' },
        { _type: 'hoursRow', day: 'Saturday', hours: '9:00 AM – 1:00 PM' },
        { _type: 'hoursRow', day: 'Sunday', hours: '' },
      ],
    },

    // ── CONTACT FORM ─────────────────────────────────────
    {
      name: 'form',
      title: 'Contact Form',
      type: 'object',
      options: { collapsible: true, collapsed: false },
      fields: [
        {
          name: 'headline',
          title: 'Form Headline',
          type: 'string',
          initialValue: 'Send Us a Message',
          validation: R => R.required(),
        },
        {
          name: 'subtext',
          title: 'Form Subtext',
          type: 'string',
          initialValue: "We'll get back to you within one business day. No spam, no pressure.",
        },
        {
          name: 'submitLabel',
          title: 'Submit Button Label',
          type: 'string',
          initialValue: 'Send Message →',
          validation: R => R.required(),
        },
        {
          name: 'webhookUrl',
          title: 'Webhook URL (GHL / n8n)',
          type: 'string',
          description: 'POST endpoint for form submissions. Leave blank to disable webhook.',
        },
        {
          name: 'reasonOptions',
          title: 'Dropdown Options — "What can we help with?"',
          type: 'array',
          description: 'Add, remove, or reorder options in the reason dropdown.',
          of: [
            {
              type: 'object',
              name: 'reasonOption',
              fields: [
                { name: 'label', title: 'Label (shown to user)', type: 'string', validation: R => R.required() },
                { name: 'value', title: 'Value (sent to webhook)', type: 'string', validation: R => R.required() },
              ],
              preview: { select: { title: 'label', subtitle: 'value' } },
            },
          ],
          initialValue: [
            { _type: 'reasonOption', label: 'Credit Card Processing', value: 'credit-card-processing' },
            { _type: 'reasonOption', label: 'POS Systems', value: 'pos-systems' },
            { _type: 'reasonOption', label: 'Mobile Payments', value: 'mobile-payments' },
            { _type: 'reasonOption', label: 'Online / Ecommerce Payments', value: 'online-payments' },
            { _type: 'reasonOption', label: 'Free Statement Review', value: 'statement-review' },
            { _type: 'reasonOption', label: 'Support / Existing Customer', value: 'support' },
            { _type: 'reasonOption', label: 'Something Else', value: 'other' },
          ],
        },
        {
          name: 'thankYouHeadline',
          title: 'Thank You Headline',
          type: 'string',
          initialValue: 'Message Sent!',
        },
        {
          name: 'thankYouBody',
          title: 'Thank You Message',
          type: 'text',
          rows: 2,
          initialValue: 'Thanks for reaching out. Someone from our Lafayette team will be in touch within one business day.',
        },
      ],
    },

    // ── MAP SECTION ──────────────────────────────────────
    {
      name: 'mapSection',
      title: 'Map Section',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        {
          name: 'heading',
          title: 'Section Heading',
          type: 'string',
          initialValue: 'Find Us in Lafayette',
          validation: R => R.required(),
        },
        {
          name: 'subtext',
          title: 'Subtext',
          type: 'string',
          initialValue: "We're based at 1027 Johnston St. We also make house calls — most installs happen at your business location.",
        },
        {
          name: 'googlePlaceId',
          title: 'Google Place ID',
          type: 'string',
          description: 'Used to generate the Maps embed URL. Current: 0x86249d41ec5883cf:0x531d9a9ab15a1418',
          initialValue: '0x86249d41ec5883cf:0x531d9a9ab15a1418',
        },
      ],
    },

  ], // end fields

  // Studio preview
  preview: {
    prepare() {
      return { title: 'Contact Page', subtitle: 'hdprocessing.com/contact' }
    },
  },
}
