import Link from 'next/link'
import IndustrySidebar from '@/components/IndustrySidebar'
import FaqAccordion from '@/components/FaqAccordion'

export const revalidate = 60

/* ─── SEO Metadata ─── */
export const metadata = {
  title: 'Payment Processing for Breweries & Taprooms in Lafayette, LA | HD Processing',
  description:
    'Payment processing for breweries and taprooms in Lafayette, LA. Open tab management, unified merchandise and bar sales, tap-to-pay, and same-day funding. No contracts.',
  alternates: { canonical: 'https://hdprocessing.com/industries/restaurants/breweries' },
}

/* ─── JSON-LD Schema ─── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://hdprocessing.com/industries/restaurants/breweries#service',
      name: 'Brewery & Taproom Payment Processing',
      description:
        'Payment processing for breweries and taprooms in Lafayette, LA. Open tab management, unified merchandise and bar sales, mobile wallets, and interchange-plus pricing.',
      provider: {
        '@type': 'LocalBusiness',
        '@id': 'https://hdprocessing.com/#business',
        name: 'HD Processing',
        telephone: '+13373668550',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '1027 Johnston St',
          addressLocality: 'Lafayette',
          addressRegion: 'LA',
          postalCode: '70501',
          addressCountry: 'US',
        },
      },
      areaServed: {
        '@type': 'City',
        name: 'Lafayette',
        containedInPlace: { '@type': 'State', name: 'Louisiana' },
      },
      url: 'https://hdprocessing.com/industries/restaurants/breweries',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://hdprocessing.com/industries/restaurants/breweries#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://hdprocessing.com/' },
        { '@type': 'ListItem', position: 2, name: 'Industries', item: 'https://hdprocessing.com/industries' },
        { '@type': 'ListItem', position: 3, name: 'Restaurants & Bars', item: 'https://hdprocessing.com/industries/restaurants' },
        { '@type': 'ListItem', position: 4, name: 'Breweries & Taprooms', item: 'https://hdprocessing.com/industries/restaurants/breweries' },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://hdprocessing.com/industries/restaurants/breweries#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How does tab management work with HD Processing?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Our system lets you open tabs with a card pre-authorization, add drinks and food throughout the visit, and close out with a single tap. The pre-auth holds a set amount on the guest\u2019s card without charging it \u2014 so you\u2019re protected if they walk out. Staff can see all open tabs on one screen and close them individually or in batch.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I sell merchandise and beer on the same system?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Our POS handles both bar sales and retail merchandise on a single system. T-shirts, glassware, crowlers, and pints all ring up on the same terminal with separate categories for reporting. No need for a second register or a separate Square reader at the merch table.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does HD Processing support tap-to-pay and mobile wallets for taprooms?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Every terminal we install supports contactless tap-to-pay, Apple Pay, Google Pay, and all major card brands. Transactions process in under 2 seconds \u2014 fast enough to keep your bar line moving on a busy Friday night.',
          },
        },
        {
          '@type': 'Question',
          name: 'How fast can HD Processing set up a Lafayette brewery?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We can have your taproom fully set up in 24\u201348 hours. Our local team handles on-site installation, terminal configuration, tab management setup, and staff training. No shipping boxes, no DIY guides.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are there contracts for brewery payment processing?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Every HD Processing agreement is month-to-month with zero early termination fees. You stay because we save you money and keep your taproom running smoothly \u2014 not because you\u2019re locked into a contract.',
          },
        },
      ],
    },
  ],
}

/* ─── Data ─── */

const sidebarItems = [
  { label: 'Coffee & Tea Shops', slug: 'coffee-tea-shops' },
  { label: 'Pizzerias & Sandwich Shops', slug: 'pizzerias-sandwich-shops' },
  { label: 'Bakeries', slug: 'bakeries' },
  { label: 'Breweries', slug: 'breweries' },
  { label: 'Delis & Meat Markets', slug: 'delis-meat-markets' },
]

const painPoints = [
  {
    title: 'Tab Management Is a Mess',
    desc: 'Keeping track of 30+ open tabs on a Friday night with handwritten tickets or a clunky POS means lost orders, wrong charges, and walkouts.',
  },
  {
    title: 'No Way to Sell Merchandise and Beer on Same System',
    desc: 'T-shirts, glassware, and crowlers need a separate register or a janky workaround. Two systems means double the headaches.',
  },
  {
    title: 'Card Pre-Authorization for Tabs',
    desc: 'Without pre-auth, you\u2019re trusting every guest to come back and close out. One walkout on a busy night wipes out a server\u2019s tips.',
  },
  {
    title: 'Waiting Days for Weekend Taproom Revenue',
    desc: 'Your biggest nights are Friday and Saturday. Most processors don\u2019t deposit weekend sales until Tuesday or Wednesday. That\u2019s your keg money sitting in limbo.',
  },
]

const features = [
  {
    icon: '\uD83C\uDF7A',
    title: 'Open Tab Management',
    desc: 'Pre-auth cards, track open tabs on one screen, and batch-close at the end of the night. No more walkouts or lost orders.',
  },
  {
    icon: '\uD83D\uDED2',
    title: 'Unified Merchandise + Bar Sales',
    desc: 'Ring up pints, flights, crowlers, and merch on the same terminal. Separate categories for clean reporting.',
  },
  {
    icon: '\uD83D\uDCF1',
    title: 'Tap-to-Pay + Mobile Wallets',
    desc: 'Contactless payments in under 2 seconds. Apple Pay, Google Pay, and all major cards accepted.',
  },
  {
    icon: '\u26A1',
    title: 'Same-Day Funding',
    desc: 'Get your weekend revenue before Monday morning. No more waiting 2\u20133 business days.',
  },
  {
    icon: '\uD83E\uDDFE',
    title: 'Sales by Product',
    desc: 'See which beers sell, which merch moves, and which nights are your best \u2014 broken down by category, time, and payment type.',
  },
  {
    icon: '\uD83D\uDEE0\uFE0F',
    title: 'On-Site Setup for Your Layout',
    desc: 'We come to your taproom, install terminals where they make sense for your bar flow, and train your staff before we leave.',
  },
]

const faqItems = [
  {
    question: 'How does tab management work with HD Processing?',
    answer:
      'Our system lets you open tabs with a card pre-authorization, add drinks and food throughout the visit, and close out with a single tap. The pre-auth holds a set amount on the guest\u2019s card without charging it \u2014 so you\u2019re protected if they walk out. Staff can see all open tabs on one screen and close them individually or in batch.',
  },
  {
    question: 'Can I sell merchandise and beer on the same system?',
    answer:
      'Yes. Our POS handles both bar sales and retail merchandise on a single system. T-shirts, glassware, crowlers, and pints all ring up on the same terminal with separate categories for reporting. No need for a second register or a separate Square reader at the merch table.',
  },
  {
    question: 'Does HD Processing support tap-to-pay and mobile wallets for taprooms?',
    answer:
      'Yes. Every terminal we install supports contactless tap-to-pay, Apple Pay, Google Pay, and all major card brands. Transactions process in under 2 seconds \u2014 fast enough to keep your bar line moving on a busy Friday night.',
  },
  {
    question: 'How fast can HD Processing set up a Lafayette brewery?',
    answer:
      'We can have your taproom fully set up in 24\u201348 hours. Our local team handles on-site installation, terminal configuration, tab management setup, and staff training. No shipping boxes, no DIY guides.',
  },
  {
    question: 'Are there contracts for brewery payment processing?',
    answer:
      'No. Every HD Processing agreement is month-to-month with zero early termination fees. You stay because we save you money and keep your taproom running smoothly \u2014 not because you\u2019re locked into a contract.',
  },
]

const otherSubPages = [
  { label: 'Coffee & Tea Shops', slug: 'coffee-tea-shops' },
  { label: 'Pizzerias & Sandwich Shops', slug: 'pizzerias-sandwich-shops' },
  { label: 'Bakeries', slug: 'bakeries' },
  { label: 'Delis & Meat Markets', slug: 'delis-meat-markets' },
]

const GOOGLE_REVIEWS_URL =
  'https://www.google.com/search?q=hd+processing#lrd=0x86249d41ec5883cf:0x531d9a9ab15a1418,1,,,,1'

/* ─── Page Component ─── */

export default async function BreweriesPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ═══ HERO ═══ */}
      <section className="hero" aria-label="Brewery Payment Processing Hero">
        <div className="hero-grid" aria-hidden="true"></div>
        <div className="hero-orb" aria-hidden="true"></div>

        <div className="hero-inner">
          <h1>
            Payment Processing for <span>Breweries &amp; Taprooms</span>
          </h1>
          <p className="hero-sub">
            Open tab management, unified merchandise and bar sales, tap-to-pay terminals, and same-day
            funding &mdash; built for Lafayette taprooms that run fast on busy nights.
          </p>
          <div className="hero-actions">
            <a href="/quote" className="btn-gold">
              Get a Free Quote &rarr;
            </a>
            <a href="tel:3373668550" className="btn-outline">
              337-366-8550
            </a>
          </div>
        </div>
      </section>

      {/* ═══ BREADCRUMB ═══ */}
      <div className="breadcrumb-bar">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span className="breadcrumb-sep" aria-hidden="true">&rsaquo;</span>
          <a href="/industries">Industries</a>
          <span className="breadcrumb-sep" aria-hidden="true">&rsaquo;</span>
          <a href="/industries/restaurants">Restaurants &amp; Bars</a>
          <span className="breadcrumb-sep" aria-hidden="true">&rsaquo;</span>
          <span className="breadcrumb-active">Breweries &amp; Taprooms</span>
        </nav>
      </div>

      {/* ═══ TWO-COLUMN LAYOUT ═══ */}
      <section className="section light" aria-label="Brewery payment processing details">
        <div className="section-inner">
          <div className="industry-layout">
            <IndustrySidebar
              category="restaurants"
              categoryLabel="Restaurants & Bars"
              currentSlug="breweries"
              items={sidebarItems}
            />

            <div className="industry-content">
              {/* ── Mockup ── */}
              <div
                style={{
                  background: 'var(--black)',
                  border: '1px solid var(--border-dk)',
                  borderRadius: 18,
                  padding: '28px 24px',
                  maxWidth: 370,
                  marginBottom: 40,
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,.45)', fontWeight: 500 }}>Tab #14</div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,.35)', fontWeight: 400 }}>Bar</div>
                </div>

                {[
                  { item: 'IPA Pint', price: '$7.00' },
                  { item: 'Stout Pint', price: '$8.00' },
                  { item: 'Flight (4)', price: '$14.00' },
                  { item: 'Crowler To-Go', price: '$12.00' },
                ].map((row, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '7px 0', borderBottom: '1px solid rgba(255,255,255,.06)', fontSize: 14, color: 'var(--white)', fontWeight: 400 }}>
                    <span>{row.item}</span>
                    <span style={{ color: 'rgba(255,255,255,.55)' }}>{row.price}</span>
                  </div>
                ))}

                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '7px 0', fontSize: 13, color: 'rgba(255,255,255,.35)', fontWeight: 400, marginTop: 4 }}>
                  <span>Tax 9.45%</span>
                  <span>$3.88</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0 14px', fontSize: 15, color: 'var(--gold)', fontWeight: 600, borderTop: '1px solid rgba(255,255,255,.08)', marginTop: 6 }}>
                  <span>Total</span>
                  <span>$44.88</span>
                </div>

                {/* Tip row */}
                <div style={{ display: 'flex', gap: 8, marginBottom: 14 }}>
                  {['15%', '18%', '20%'].map((t, i) => (
                    <div
                      key={i}
                      style={{
                        flex: 1,
                        textAlign: 'center',
                        padding: '8px 0',
                        borderRadius: 8,
                        fontSize: 13,
                        fontWeight: 600,
                        background: i === 1 ? 'var(--gold)' : 'rgba(255,255,255,.06)',
                        color: i === 1 ? 'var(--black)' : 'rgba(255,255,255,.45)',
                        cursor: 'pointer',
                      }}
                    >
                      {t}
                    </div>
                  ))}
                </div>

                <div
                  style={{
                    background: 'var(--gold)',
                    color: 'var(--black)',
                    textAlign: 'center',
                    padding: '13px 0',
                    borderRadius: 10,
                    fontWeight: 700,
                    fontSize: 15,
                    cursor: 'pointer',
                  }}
                >
                  Close Tab $52.96
                </div>
              </div>

              {/* ── Pain Points ── */}
              <h2>
                What Brewery Owners <span>Deal With</span>
              </h2>
              <div className="problem-grid">
                {painPoints.map((item, i) => (
                  <div key={i} className="problem-card">
                    <div className="problem-card-num">0{i + 1}</div>
                    <strong>{item.title}</strong>
                    <p>{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* ── Solution ── */}
              <h2>
                How HD Processing Helps <span>Breweries</span>
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, alignItems: 'center', marginBottom: 40 }}>
                <div>
                  <p style={{ fontSize: 15, lineHeight: 1.8, color: 'rgba(0,0,0,.65)', marginBottom: 16 }}>
                    We set up Lafayette taprooms with tab management systems that let you pre-authorize cards, track every open tab on one screen, and batch-close at the end of the night. No more handwritten tickets, no more walkouts eating into your staff&apos;s tips. Our POS handles pints, flights, crowlers, and merchandise on a single terminal &mdash; so you don&apos;t need a separate register for t-shirts and glassware.
                  </p>
                  <p style={{ fontSize: 15, lineHeight: 1.8, color: 'rgba(0,0,0,.65)' }}>
                    Every terminal supports tap-to-pay, Apple Pay, and Google Pay with sub-2-second processing. With interchange-plus pricing, you see the actual card network rate plus a small fixed markup &mdash; no inflated flat-rate fees. And same-day funding means your Friday and Saturday revenue is in your account before Monday morning.
                  </p>
                </div>
                <div style={{ borderRadius: 14, overflow: 'hidden' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://assets.cdn.filesafe.space/yNgtcVB50ZOTKtcYV8Lh/media/69c1ff253b3a5862ce17ed66.jpg"
                    alt="HD Processing brewery payment setup"
                    style={{ width: '100%', display: 'block', borderRadius: 14 }}
                  />
                </div>
              </div>

              {/* ── Features Grid ── */}
              <div className="diff-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)', marginTop: 32 }}>
                {features.map((item, i) => (
                  <div key={i} className="diff-card">
                    <span className="diff-card-icon" aria-hidden="true">
                      {item.icon}
                    </span>
                    <div className="diff-card-title">{item.title}</div>
                    <div className="diff-card-desc">{item.desc}</div>
                  </div>
                ))}
              </div>

              {/* ── FAQ ── */}
              <FaqAccordion
                items={faqItems}
                variant="light"
                label="FAQ"
                heading="Frequently Asked Questions"
              />

              {/* ── Other Sub-Pages ── */}
              <h2>
                Other Restaurant <span>Solutions</span>
              </h2>
              <div className="industry-cards-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)', marginBottom: 40 }}>
                {otherSubPages.map((sp) => (
                  <Link
                    key={sp.slug}
                    href={`/industries/restaurants/${sp.slug}`}
                    className="industry-card"
                  >
                    <span className="industry-card-name">{sp.label}</span>
                  </Link>
                ))}
              </div>

              {/* ── Biz Info ── */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, alignItems: 'start', marginBottom: 40 }}>
                <div>
                  <iframe
                    title="HD Processing location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.123456789!2d-92.0198427!3d30.2240897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86249d41ec5883cf%3A0x531d9a9ab15a1418!2sHD%20Processing!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                    width="100%"
                    height="220"
                    style={{ border: 0, borderRadius: 14 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12 }}>HD Processing</h3>
                  <p style={{ fontSize: 13, lineHeight: 1.8, color: 'rgba(0,0,0,.55)', marginBottom: 6 }}>
                    1027 Johnston St, Lafayette, LA 70501
                  </p>
                  <p style={{ fontSize: 13, lineHeight: 1.8, color: 'rgba(0,0,0,.55)', marginBottom: 6 }}>
                    <strong>Phone:</strong>{' '}
                    <a href="tel:3373668550" style={{ color: 'var(--black)', fontWeight: 600 }}>337-366-8550</a>
                  </p>
                  <p style={{ fontSize: 13, lineHeight: 1.8, color: 'rgba(0,0,0,.55)', marginBottom: 12 }}>
                    <strong>Hours:</strong> Mon&ndash;Fri 9 AM&ndash;5 PM
                  </p>
                  <a
                    href={GOOGLE_REVIEWS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gmb-badge"
                    aria-label="See HD Processing reviews on Google"
                    style={{ display: 'inline-flex' }}
                  >
                    <div className="gmb-g" aria-hidden="true">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
                        alt="Google"
                        width={46}
                        height={15}
                        style={{ display: 'block' }}
                      />
                    </div>
                    <div className="gmb-info">
                      <span className="gmb-stars" aria-label="5 stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                      <div className="gmb-meta">5.0 <span>&middot; 47+ Google Reviews</span></div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FINAL CTA (gold) ═══ */}
      <section className="final-cta" aria-label="Get a free quote">
        <div className="final-cta-inner">
          <h2>
            Your Taproom Deserves
            <br />
            Better Rates.
          </h2>
          <p>
            Send us your current processing statement and we&apos;ll show you exactly
            how much you can save. Free analysis, no obligation.
          </p>
          <a href="/quote" className="btn-black">
            Start With a Free Analysis &rarr;
          </a>
          <br />
          <span
            style={{
              display: 'inline-block',
              marginTop: 14,
              fontSize: 13.5,
              color: 'rgba(0,0,0,.45)',
            }}
          >
            No contracts. No pressure. Local Lafayette team on call.
          </span>
        </div>
      </section>
    </>
  )
}
