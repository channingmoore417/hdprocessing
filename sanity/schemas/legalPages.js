// ══════════════════════════════════════════════════════════
//  HD Processing — Sanity Schemas: Legal Pages
//  File: /sanity/schemas/legalPages.js
//
//  Contains two document types:
//    1. termsPage  → hdprocessing.com/terms
//    2. privacyPage → hdprocessing.com/privacy
//
//  Both are singletons — one document each, always.
//
//  GROQ queries:
//    *[_type == "termsPage"][0]
//    *[_type == "privacyPage"][0]
//
//  Register both in your sanity.config.js schema array.
// ══════════════════════════════════════════════════════════

// ─────────────────────────────────────────────────────────
//  SHARED: reusable legal section field builder
//  Used by both schemas to avoid repetition
// ─────────────────────────────────────────────────────────
const legalSection = (name, title, description, initialValue) => ({
  name,
  title,
  type: 'text',
  rows: 6,
  description: description || `Body content for the "${title}" section. Plain text — use line breaks to separate paragraphs.`,
  initialValue: initialValue || '',
})


// ══════════════════════════════════════════════════════════
//  1. TERMS OF SERVICE
// ══════════════════════════════════════════════════════════
export const termsPage = {
  name: 'termsPage',
  title: 'Terms of Service',
  type: 'document',
  __experimental_actions: ['update', 'publish'],

  fields: [

    // ── Meta ─────────────────────────────────────────────
    {
      name: 'lastUpdated',
      title: 'Last Updated Date',
      type: 'date',
      description: 'Displayed in the hero. Update this whenever you publish changes.',
      options: { dateFormat: 'MMMM YYYY' },
      initialValue: () => new Date().toISOString().split('T')[0],
      validation: R => R.required(),
    },
    {
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      initialValue: 'Terms of Service — HD Processing | Lafayette, LA',
      validation: R => R.max(60),
    },

    // ── Sections ─────────────────────────────────────────
    {
      name: 'sections',
      title: 'Page Sections',
      type: 'object',
      description: 'Edit the text content of each section. HTML is not supported — use plain text with line breaks.',
      options: { collapsible: false },
      fields: [
        legalSection(
          'agreement',
          'Agreement to Terms',
          'Opening section explaining who these terms apply to.',
          "These Terms of Service govern your use of hdprocessing.com and any related services. By accessing our website or submitting any form, you agree to be bound by these Terms.\n\nHD Processing is a merchant services company based in Lafayette, Louisiana. We provide credit card processing, POS systems, mobile payments, and related services to small businesses in Acadiana and surrounding areas."
        ),
        legalSection(
          'services',
          'Our Services',
          'List of services and any disclaimers about service agreements.',
          "HD Processing provides credit card processing, POS systems, mobile payments, online payments, merchant account setup, and free statement analysis to qualifying businesses.\n\nAll services are subject to approval, credit review, and availability. Rates are disclosed prior to account activation. Month-to-month terms apply unless otherwise agreed in writing. Submitting a quote request does not constitute a binding service agreement."
        ),
        {
          name: 'sms',
          title: 'SMS Terms & Conditions',
          type: 'object',
          description: '⚠️ Edit carefully — must remain A2P 10DLC compliant. Changing STOP/HELP instructions or removing the carrier disclaimer may cause compliance issues.',
          options: { collapsible: true, collapsed: false },
          fields: [
            {
              name: 'programName',
              title: 'SMS Program Name',
              type: 'string',
              initialValue: 'HD Processing — Quote & Follow-Up Notifications',
              validation: R => R.required(),
            },
            {
              name: 'messageTypes',
              title: 'Message Types Description',
              type: 'string',
              initialValue: 'Quote follow-ups, appointment confirmations, account updates, promotional offers',
            },
            {
              name: 'frequency',
              title: 'Message Frequency',
              type: 'string',
              description: 'Keep vague per A2P guidelines — exact frequency commitments create compliance issues.',
              initialValue: 'Message frequency varies. You may receive up to 4 messages per month.',
              validation: R => R.required(),
            },
            {
              name: 'supportPhone',
              title: 'SMS Support Phone',
              type: 'string',
              initialValue: '337.366.8550',
            },
            {
              name: 'supportEmail',
              title: 'SMS Support Email',
              type: 'string',
              initialValue: 'info@hdprocessing.com',
            },
            {
              name: 'carriers',
              title: 'Supported Carriers',
              type: 'string',
              initialValue: 'AT&T, Verizon, T-Mobile, Sprint, and most major US carriers. Not all carriers supported.',
            },
            {
              name: 'consentBody',
              title: 'Full Consent Body Text',
              type: 'text',
              rows: 6,
              description: '⚠️ Must include: explicit opt-in description, STOP/HELP instructions, "consent is not a condition of purchase", no third-party sharing statement, and carrier disclaimer.',
              initialValue: "HD Processing only sends SMS messages to individuals who have expressly opted in. Consent is never pre-checked or implied.\n\nBy opting in, you may receive: quote follow-ups, appointment scheduling, account notifications, and occasional promotional offers.\n\nReply STOP to opt out at any time. Reply HELP for assistance.\n\nWe do not sell, rent, or share your mobile phone number with third parties for marketing purposes.\n\nMessage and data rates may apply. HD Processing and mobile carriers are not liable for delayed or undelivered messages.",
              validation: R => R.required(),
            },
          ],
        },
        legalSection(
          'prohibited',
          'Prohibited Use',
          null,
          "You agree not to submit false or fraudulent information, impersonate any person, attempt unauthorized access to our systems, transmit harmful content, use automated scraping tools, or violate any applicable law."
        ),
        legalSection(
          'ip',
          'Intellectual Property',
          null,
          "All content on this website is the property of HD Processing or its content suppliers. You may not reproduce, distribute, or create derivative works without prior written consent."
        ),
        legalSection(
          'disclaimer',
          'Disclaimer of Warranties',
          null,
          "This website is provided on an as-is basis without warranties of any kind. Rate estimates shown are illustrative and not a guarantee of actual rates."
        ),
        legalSection(
          'liability',
          'Limitation of Liability',
          null,
          "HD Processing shall not be liable for indirect, incidental, or consequential damages arising from use of this website. These Terms are governed by Louisiana law. Disputes resolved in Lafayette Parish courts."
        ),
        legalSection(
          'changes',
          'Changes to These Terms',
          null,
          "HD Processing may update these Terms at any time. The revision date at the top will be updated accordingly. Material changes to SMS Terms will be communicated to active subscribers before taking effect."
        ),
      ],
    },

  ],

  preview: {
    prepare() {
      return { title: 'Terms of Service', subtitle: 'hdprocessing.com/terms' }
    },
  },
}


// ══════════════════════════════════════════════════════════
//  2. PRIVACY POLICY
// ══════════════════════════════════════════════════════════
export const privacyPage = {
  name: 'privacyPage',
  title: 'Privacy Policy',
  type: 'document',
  __experimental_actions: ['update', 'publish'],

  fields: [

    // ── Meta ─────────────────────────────────────────────
    {
      name: 'lastUpdated',
      title: 'Last Updated Date',
      type: 'date',
      description: 'Displayed in the hero. Update whenever you publish changes.',
      options: { dateFormat: 'MMMM YYYY' },
      initialValue: () => new Date().toISOString().split('T')[0],
      validation: R => R.required(),
    },
    {
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      initialValue: 'Privacy Policy — HD Processing | Lafayette, LA',
      validation: R => R.max(60),
    },

    // ── Short Version Callout ─────────────────────────────
    {
      name: 'shortVersion',
      title: 'Summary Callout (top of page)',
      type: 'text',
      rows: 2,
      description: 'The plain-language summary shown in the gold-bordered box at the top.',
      initialValue: "We collect only what we need to serve you. We don't sell your data. We don't share it with third parties for their own marketing. You can ask us to delete it anytime.",
    },

    // ── Sections ─────────────────────────────────────────
    {
      name: 'sections',
      title: 'Page Sections',
      type: 'object',
      options: { collapsible: false },
      fields: [
        legalSection(
          'collection',
          'What We Collect',
          'Describe what personal and automatic data you collect.',
          "Information you provide directly: name, business name, email, phone number, business type, industry, monthly processing volume, and any message content.\n\nInformation collected automatically: IP address, browser type, pages visited, referring source, and device type.\n\nWe do not collect payment card numbers, Social Security numbers, or bank account information through this website."
        ),
        legalSection(
          'use',
          'How We Use Your Information',
          'List purposes for data use.',
          "To respond to inquiries and quote requests. To provide merchant services. To communicate via phone, email, or SMS (if opted in). To improve our website. To comply with legal obligations.\n\nWe do not use your information for automated decision-making."
        ),
        {
          name: 'sms',
          title: 'SMS & Communications Section',
          type: 'text',
          rows: 5,
          description: '⚠️ Must include: explicit consent description, STOP opt-out instruction, no third-party sharing statement.',
          initialValue: "SMS Messages: If you opted in, your mobile number is used solely for communications related to your quote or account. See our SMS Terms for full details.\n\nOpting Out: Reply STOP to any message at any time.\n\nEmail: You may opt out of marketing emails via the unsubscribe link or by contacting us.\n\nNo SMS Data Sharing: Mobile opt-in data will not be shared with any third party for marketing purposes under any circumstances.",
        },
        legalSection(
          'sharing',
          'How We Share Your Information',
          null,
          "We do not sell your personal information.\n\nWe may share with: service providers who operate on our behalf (prohibited from using data for other purposes), payment processors required for merchant account setup, legal authorities when required by law, and parties in a business transfer."
        ),
        legalSection(
          'cookies',
          'Cookies & Tracking',
          null,
          "We use essential cookies (required for the site to work), analytics cookies (e.g. Google Analytics), and marketing cookies (e.g. Google Ads, Facebook Pixel).\n\nYou can control cookies through your browser settings."
        ),
        legalSection(
          'security',
          'Data Security',
          null,
          "We implement reasonable technical safeguards. Our website uses SSL/TLS encryption. No method of internet transmission is 100% secure. We will notify you of any breach affecting your data as required by law."
        ),
        legalSection(
          'rights',
          'Your Rights',
          null,
          "You may request: access to your data, correction of inaccurate information, deletion of your data, opt-out from communications, and data portability. Contact us to exercise these rights. We respond to verified requests within 30 days."
        ),
        legalSection(
          'children',
          'Children\'s Privacy',
          null,
          "Our services are not directed to individuals under 18. We do not knowingly collect information from children. Contact us immediately if you believe we have done so."
        ),
        legalSection(
          'changes',
          'Changes to This Policy',
          null,
          "We may update this policy from time to time. The last updated date at the top reflects the most recent revision. We will provide prominent notice for material changes."
        ),
      ],
    },

  ],

  preview: {
    prepare() {
      return { title: 'Privacy Policy', subtitle: 'hdprocessing.com/privacy' }
    },
  },
}


// ══════════════════════════════════════════════════════════
//  REGISTRATION — add both to sanity.config.js:
//
//  import { termsPage, privacyPage } from './schemas/legalPages'
//
//  defineConfig({
//    schema: {
//      types: [
//        termsPage,
//        privacyPage,
//        // ...other schemas
//      ]
//    }
//  })
// ══════════════════════════════════════════════════════════
