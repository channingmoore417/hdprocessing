export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  __experimental_actions: ['update', 'publish'],

  fields: [
    {
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
      initialValue: 'HD Processing',
      validation: (R) => R.required(),
    },
    {
      name: 'phone',
      title: 'Phone Number (display)',
      type: 'string',
      description: 'Formatted for display, e.g. 337.366.8550',
      initialValue: '337.366.8550',
      validation: (R) => R.required(),
    },
    {
      name: 'phoneLink',
      title: 'Phone Link (tel:)',
      type: 'string',
      description: 'Format: +13373668550',
      initialValue: '+13373668550',
      validation: (R) => R.required(),
    },
    {
      name: 'email',
      title: 'Email Address',
      type: 'string',
      initialValue: 'info@hdprocessing.com',
      validation: (R) => R.required(),
    },
    {
      name: 'address',
      title: 'Address',
      type: 'string',
      initialValue: '1027 Johnston St · Lafayette, LA 70501',
    },
    {
      name: 'googleReviewsUrl',
      title: 'Google Reviews URL',
      type: 'string',
      description: 'Link to Google My Business reviews page.',
      initialValue:
        'https://www.google.com/maps/place/HD+Processing/@30.2130443,-92.0198043,17z/data=!4m8!3m7!1s0x86249d41ec5883cf:0x531d9a9ab15a1418!8m2!3d30.2130443!4d-92.0198043!9m1!1b1!16s%2Fg%2F11t_1hf3y0',
    },
    {
      name: 'topBarText',
      title: 'Top Bar Text',
      type: 'string',
      description: 'Main text shown in the top announcement bar.',
      initialValue: 'Local Merchant Services',
    },
    {
      name: 'topBarSubtext',
      title: 'Top Bar Subtext',
      type: 'string',
      description: 'Secondary text in the top bar.',
      initialValue: '· Lafayette, Louisiana ·',
    },
  ],

  preview: {
    prepare() {
      return { title: 'Site Settings' }
    },
  },
}
