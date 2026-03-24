// ══════════════════════════════════════════════════════════
//  HD Processing — Sanity Schemas: 404 + Support Pages
//  File: /sanity/schemas/utilityPages.js
//
//  Contains two document types:
//    1. notFoundPage  → hdprocessing.com/404 (Next.js: app/not-found.js)
//    2. supportPage   → hdprocessing.com/support
//
//  Both are singletons.
//
//  GROQ queries:
//    *[_type == "notFoundPage"][0]
//    *[_type == "supportPage"][0]
//
//  Register both in sanity.config.js schema array.
// ══════════════════════════════════════════════════════════


// ══════════════════════════════════════════════════════════
//  1. 404 NOT FOUND PAGE
// ══════════════════════════════════════════════════════════
export const notFoundPage = {
  name: 'notFoundPage',
  title: '404 Page',
  type: 'document',
  __experimental_actions: ['update', 'publish'],

  fields: [

    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
      description: 'Shown below the large "404" number.',
      initialValue: 'Page Not Found',
      validation: R => R.required(),
    },
    {
      name: 'subtext',
      title: 'Subtext',
      type: 'string',
      description: 'Short message below the title.',
      initialValue: "The page you're looking for doesn't exist or may have moved. Let's get you back on track.",
    },

    // Quick links — editable grid of 6 shortcuts
    {
      name: 'quickLinks',
      title: 'Quick Links Grid',
      type: 'array',
      description: 'The shortcut tiles shown at the bottom of the 404 page. Max 6.',
      validation: R => R.max(6),
      of: [
        {
          type: 'object',
          name: 'quickLink',
          preview: { select: { title: 'label', subtitle: 'url' } },
          fields: [
            { name: 'label', title: 'Label', type: 'string', validation: R => R.required() },
            { name: 'url',   title: 'URL',   type: 'string', validation: R => R.required() },
            { name: 'icon',  title: 'Emoji Icon', type: 'string', description: 'Single emoji, e.g. 💳' },
          ],
        },
      ],
      initialValue: [
        { _type: 'quickLink', label: 'Get a Quote',  url: '/quote',                            icon: '💬' },
        { _type: 'quickLink', label: 'Processing',   url: '/services/credit-card-processing',  icon: '💳' },
        { _type: 'quickLink', label: 'POS Systems',  url: '/services/pos-systems',             icon: '🖥️' },
        { _type: 'quickLink', label: 'Mobile Pay',   url: '/services/mobile-payments',         icon: '📱' },
        { _type: 'quickLink', label: 'About Us',     url: '/about',                            icon: '🤝' },
        { _type: 'quickLink', label: 'Support',      url: '/support',                          icon: '🛠️' },
      ],
    },

  ],

  preview: {
    prepare() {
      return { title: '404 Page', subtitle: 'hdprocessing.com/404' }
    },
  },
}


// ══════════════════════════════════════════════════════════
//  2. SUPPORT PAGE
// ══════════════════════════════════════════════════════════
export const supportPage = {
  name: 'supportPage',
  title: 'Support Page',
  type: 'document',
  __experimental_actions: ['update', 'publish'],

  fields: [

    // ── SEO ──────────────────────────────────────────────
    {
      name: 'seo',
      title: 'SEO',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        {
          name: 'metaTitle',
          title: 'Meta Title',
          type: 'string',
          initialValue: 'Support — HD Processing | Lafayette, LA',
          validation: R => R.max(60),
        },
        {
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          rows: 2,
          initialValue: "Get support from HD Processing's local Lafayette, LA team. Call, email, or submit a ticket. Real people, fast responses.",
          validation: R => R.max(160),
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
          initialValue: "We're Here to Help.",
          validation: R => R.required(),
        },
        {
          name: 'subtext',
          title: 'Subtext',
          type: 'string',
          initialValue: "Real local support from people who know your setup. No hold queues. No ticket numbers. Just call or send us a message.",
        },
      ],
    },

    // ── CONTACT INFO ─────────────────────────────────────
    {
      name: 'contactInfo',
      title: 'Contact Info',
      type: 'object',
      options: { collapsible: true, collapsed: false },
      fields: [
        { name: 'phone',     title: 'Phone',         type: 'string', initialValue: '337.366.8550' },
        { name: 'phoneLink', title: 'Phone tel: link',type: 'string', initialValue: '+13373668550' },
        { name: 'email',     title: 'Support Email',  type: 'string', initialValue: 'support@hdprocessing.com' },
      ],
    },

    // ── METHOD CARDS ─────────────────────────────────────
    {
      name: 'methods',
      title: 'Contact Method Cards',
      type: 'object',
      options: { collapsible: true, collapsed: false },
      fields: [
        {
          name: 'heading',
          title: 'Section Heading',
          type: 'string',
          initialValue: 'Choose How You Want to Reach Us',
        },
        {
          name: 'phoneDescription',
          title: 'Phone Card Description',
          type: 'text',
          rows: 2,
          initialValue: 'Talk to a local team member directly. Best for urgent issues, hardware problems, or anything that needs same-day resolution.',
        },
        {
          name: 'emailDescription',
          title: 'Email Card Description',
          type: 'text',
          rows: 2,
          initialValue: 'Good for non-urgent questions, billing inquiries, or when you want a paper trail. We respond within one business day.',
        },
        {
          name: 'ticketDescription',
          title: 'Ticket Card Description',
          type: 'text',
          rows: 2,
          initialValue: 'Use the form below to describe your issue in detail. Best for complex problems where you want everything documented.',
        },
      ],
    },

    // ── SUPPORT FORM ─────────────────────────────────────
    {
      name: 'form',
      title: 'Support Ticket Form',
      type: 'object',
      options: { collapsible: true, collapsed: false },
      fields: [
        {
          name: 'headline',
          title: 'Form Headline',
          type: 'string',
          initialValue: 'Submit a Support Request',
        },
        {
          name: 'subtext',
          title: 'Form Subtext',
          type: 'string',
          initialValue: "Fill out the form below and we'll follow up within one business day. For urgent issues, please call us directly.",
        },
        {
          name: 'webhookUrl',
          title: 'Webhook URL (GHL / n8n)',
          type: 'string',
          description: 'POST endpoint for support ticket submissions.',
        },
        {
          name: 'issueTypes',
          title: 'Issue Type Dropdown Options',
          type: 'array',
          description: 'Add, remove, or reorder issue types in the support form.',
          of: [
            {
              type: 'object',
              name: 'issueType',
              preview: { select: { title: 'label', subtitle: 'value' } },
              fields: [
                { name: 'label', title: 'Label', type: 'string', validation: R => R.required() },
                { name: 'value', title: 'Value (sent to webhook)', type: 'string', validation: R => R.required() },
              ],
            },
          ],
          initialValue: [
            { _type: 'issueType', label: 'Terminal / Reader Not Working',  value: 'terminal-down' },
            { _type: 'issueType', label: 'POS System Issue',               value: 'pos-issue' },
            { _type: 'issueType', label: 'Funding / Deposit Question',     value: 'funding' },
            { _type: 'issueType', label: 'Chargeback or Dispute',          value: 'chargeback' },
            { _type: 'issueType', label: 'Rate or Fee Question',           value: 'rate-question' },
            { _type: 'issueType', label: 'Need New Equipment',             value: 'new-equipment' },
            { _type: 'issueType', label: 'Account Change Request',         value: 'account-change' },
            { _type: 'issueType', label: 'Other',                          value: 'other' },
          ],
        },
      ],
    },

    // ── THANK YOU ─────────────────────────────────────────
    {
      name: 'thankYou',
      title: 'Thank You Screen',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: 'headline', title: 'Headline', type: 'string', initialValue: 'Ticket Received!' },
        { name: 'body',     title: 'Body',     type: 'text',   rows: 2, initialValue: "We've got your request. A member of our local team will be in touch within one business day. For urgent issues, call us at 337.366.8550." },
      ],
    },

    // ── FAQ ───────────────────────────────────────────────
    {
      name: 'faq',
      title: 'FAQ Section',
      type: 'object',
      options: { collapsible: true, collapsed: false },
      fields: [
        {
          name: 'heading',
          title: 'Section Heading',
          type: 'string',
          initialValue: 'Quick Answers',
        },
        {
          name: 'items',
          title: 'FAQ Items',
          type: 'array',
          description: 'Add, remove, or reorder FAQ items. These appear as an accordion.',
          of: [
            {
              type: 'object',
              name: 'faqItem',
              preview: { select: { title: 'question' } },
              fields: [
                { name: 'question', title: 'Question', type: 'string',  validation: R => R.required() },
                { name: 'answer',   title: 'Answer',   type: 'text', rows: 4, validation: R => R.required() },
              ],
            },
          ],
          initialValue: [
            {
              _type: 'faqItem',
              question: "My terminal isn't processing — what do I do first?",
              answer: "Try these steps first: (1) Reboot the terminal by holding the power button for 10 seconds. (2) Check that your ethernet or WiFi connection is active. (3) Ensure the terminal is fully charged or plugged in. If none of those work, call us at 337.366.8550.",
            },
            {
              _type: 'faqItem',
              question: 'When will my funds be deposited?',
              answer: 'HD Processing offers same-day funding for most accounts. Transactions settled before the daily cutoff are deposited the same business day. If you are not seeing your deposit, check your bank account on file then call or email us.',
            },
            {
              _type: 'faqItem',
              question: 'I received a chargeback notice — what should I do?',
              answer: "Gather evidence of the transaction — receipts, signatures, delivery confirmation, or customer communication. Then submit a ticket with 'Chargeback or Dispute' selected. We'll help you build the rebuttal.",
            },
            {
              _type: 'faqItem',
              question: 'How do I add a new employee or user to my POS?',
              answer: 'Most POS systems allow you to add users from the admin settings menu. Call or email us with your POS model and we will walk you through it — or come to you if needed.',
            },
            {
              _type: 'faqItem',
              question: 'I want to add a second location — who do I contact?',
              answer: "Call us or submit a ticket with 'Account Change Request'. We'll set up the additional merchant account, order equipment if needed, and schedule an install. Same rates, same service.",
            },
          ],
        },
      ],
    },

    // ── FINAL CTA ─────────────────────────────────────────
    {
      name: 'cta',
      title: 'Final CTA Section',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: 'headline', title: 'Headline', type: 'string', initialValue: 'Still Need Help?' },
        { name: 'body',     title: 'Body',     type: 'string', initialValue: 'Our local Lafayette team is available Monday–Friday 8am–6pm and Saturday 9am–1pm. We pick up the phone.' },
      ],
    },

  ],

  preview: {
    prepare() {
      return { title: 'Support Page', subtitle: 'hdprocessing.com/support' }
    },
  },
}


// ══════════════════════════════════════════════════════════
//  REGISTRATION — add to sanity.config.js:
//
//  import { notFoundPage, supportPage } from './schemas/utilityPages'
//
//  defineConfig({
//    schema: {
//      types: [ notFoundPage, supportPage, ...otherSchemas ]
//    }
//  })
// ══════════════════════════════════════════════════════════
