import Link from 'next/link'
import IndustrySidebar from '@/components/IndustrySidebar'
import FaqAccordion from '@/components/FaqAccordion'

export const revalidate = 60

/* ─── SEO Metadata ─── */
export const metadata = {
  title: 'Payment Processing for Delis & Meat Markets in Lafayette, LA | HD Processing',
  description:
    'Payment processing for delis and meat markets in Lafayette, LA. Weight-based pricing, fast counter checkout, holiday pre-order payment links, and same-day funding. No contracts.',
  alternates: { canonical: 'https://hdprocessing.com/industries/restaurants/delis-meat-markets' },
}

/* ─── JSON-LD Schema ─── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://hdprocessing.com/industries/restaurants/delis-meat-markets#service',
      name: 'Deli & Meat Market Payment Processing',
      description:
        'Payment processing for delis and meat markets in Lafayette, LA. Weight-based pricing integration, fast counter checkout, holiday pre-order payment links, and interchange-plus pricing.',
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
      url: 'https://hdprocessing.com/industries/restaurants/delis-meat-markets',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://hdprocessing.com/industries/restaurants/delis-meat-markets#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://hdprocessing.com/' },
        { '@type': 'ListItem', position: 2, name: 'Industries', item: 'https://hdprocessing.com/industries' },
        { '@type': 'ListItem', position: 3, name: 'Restaurants & Bars', item: 'https://hdprocessing.com/industries/restaurants' },
        { '@type': 'ListItem', position: 4, name: 'Delis & Meat Markets', item: 'https://hdprocessing.com/industries/restaurants/delis-meat-markets' },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://hdprocessing.com/industries/restaurants/delis-meat-markets#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Can HD Processing handle weight-based pricing for meat markets?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Our POS systems integrate with commercial scales so you can ring up items by the pound. The terminal calculates the price automatically based on weight and per-pound rate \u2014 no manual math, no pricing errors. This works for boudin, tasso, cracklins, and any product sold by weight.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do payment links work for holiday pre-orders?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We generate shareable payment links you can text or email to customers. They click the link, enter their card info, and pay \u2014 no app download required. This is perfect for Thanksgiving turducken orders, Christmas boudin balls, crawfish boil deposits, or any seasonal pre-order that needs payment upfront.',
          },
        },
        {
          '@type': 'Question',
          name: 'What payment terminals work best for a busy deli counter?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For high-volume deli counters, we recommend a compact terminal with tap-to-pay that processes contactless payments in under 2 seconds. It handles Apple Pay, Google Pay, and all major cards. The small footprint fits next to your register without crowding the counter. We set it up on-site and train your staff.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much can a Lafayette deli save on processing fees?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most Lafayette delis and meat markets save $200\u2013$500/month by switching from flat-rate processors to our interchange-plus pricing. The exact savings depend on your monthly volume and average ticket. We\u2019ll analyze your current statement for free and show you the difference.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are there contracts for deli payment processing?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Every HD Processing agreement is month-to-month with zero early termination fees. You stay because we save you money and keep your counter moving \u2014 not because you\u2019re locked into a contract.',
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
    title: 'Weight-Based Pricing That Doesn\u2019t Integrate',
    desc: 'You sell by the pound, but your POS can\u2019t talk to your scale. That means manual price calculations, pricing errors, and slower checkout.',
  },
  {
    title: 'Slow Checkout During Lunch Rush',
    desc: 'The lunch crowd needs to get in and out fast. A slow terminal or clunky checkout process costs you repeat customers every single day.',
  },
  {
    title: 'No Way to Handle Pre-Orders for Holidays',
    desc: 'Turducken at Thanksgiving, boudin balls at Christmas, crawfish for Easter \u2014 you take phone orders but have no easy way to collect payment upfront.',
  },
  {
    title: 'Cash-Only for Local Deliveries',
    desc: 'Delivering to offices and catering jobs but can\u2019t take cards on the road? That\u2019s lost sales and awkward payment collection.',
  },
]

const features = [
  {
    icon: '\u2696\uFE0F',
    title: 'Weight-Based Pricing',
    desc: 'POS integration with commercial scales. Ring up boudin, tasso, and cracklins by the pound \u2014 automatically calculated, zero manual math.',
  },
  {
    icon: '\u26A1',
    title: 'Fast Counter Checkout',
    desc: 'Tap-to-pay terminals that process in under 2 seconds. Keep your lunch rush moving without bottlenecks.',
  },
  {
    icon: '\uD83D\uDD17',
    title: 'Holiday Pre-Order Payment Links',
    desc: 'Text or email payment links for holiday orders. Customers pay instantly \u2014 no app, no phone card reading, no Venmo.',
  },
  {
    icon: '\uD83D\uDCF1',
    title: 'Mobile Readers for Markets',
    desc: 'Bluetooth card readers for deliveries, farmers markets, and off-site catering. Accept every payment type on the go.',
  },
  {
    icon: '\uD83D\uDCB0',
    title: 'Same-Day Funding',
    desc: 'Get your money the same day you earn it. Weekend sales hit your account before Monday morning.',
  },
  {
    icon: '\uD83D\uDEE0\uFE0F',
    title: 'On-Site Setup Always',
    desc: 'We come to your deli, install your equipment, integrate your scale, and train your team. No shipping boxes, no DIY.',
  },
]

const faqItems = [
  {
    question: 'Can HD Processing handle weight-based pricing for meat markets?',
    answer:
      'Yes. Our POS systems integrate with commercial scales so you can ring up items by the pound. The terminal calculates the price automatically based on weight and per-pound rate \u2014 no manual math, no pricing errors. This works for boudin, tasso, cracklins, and any product sold by weight.',
  },
  {
    question: 'How do payment links work for holiday pre-orders?',
    answer:
      'We generate shareable payment links you can text or email to customers. They click the link, enter their card info, and pay \u2014 no app download required. This is perfect for Thanksgiving turducken orders, Christmas boudin balls, crawfish boil deposits, or any seasonal pre-order that needs payment upfront.',
  },
  {
    question: 'What payment terminals work best for a busy deli counter?',
    answer:
      'For high-volume deli counters, we recommend a compact terminal with tap-to-pay that processes contactless payments in under 2 seconds. It handles Apple Pay, Google Pay, and all major cards. The small footprint fits next to your register without crowding the counter. We set it up on-site and train your staff.',
  },
  {
    question: 'How much can a Lafayette deli save on processing fees?',
    answer:
      'Most Lafayette delis and meat markets save $200\u2013$500/month by switching from flat-rate processors to our interchange-plus pricing. The exact savings depend on your monthly volume and average ticket. We\u2019ll analyze your current statement for free and show you the difference.',
  },
  {
    question: 'Are there contracts for deli payment processing?',
    answer:
      'No. Every HD Processing agreement is month-to-month with zero early termination fees. You stay because we save you money and keep your counter moving \u2014 not because you\u2019re locked into a contract.',
  },
]

const otherSubPages = [
  { label: 'Coffee & Tea Shops', slug: 'coffee-tea-shops' },
  { label: 'Pizzerias & Sandwich Shops', slug: 'pizzerias-sandwich-shops' },
  { label: 'Bakeries', slug: 'bakeries' },
  { label: 'Breweries', slug: 'breweries' },
]

const GOOGLE_REVIEWS_URL =
  'https://www.google.com/search?q=hd+processing#lrd=0x86249d41ec5883cf:0x531d9a9ab15a1418,1,,,,1'

/* ─── Page Component ─── */

export default async function DelisMeatMarketsPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ═══ HERO ═══ */}
      <section className="hero" aria-label="Deli Payment Processing Hero">
        <div className="hero-grid" aria-hidden="true"></div>
        <div className="hero-orb" aria-hidden="true"></div>

        <div className="hero-inner">
          <h1>
            Payment Processing for <span>Delis &amp; Meat Markets</span>
          </h1>
          <p className="hero-sub">
            Weight-based pricing, fast counter checkout, holiday pre-order payment links, and same-day
            funding &mdash; built for Lafayette delis and meat markets that move product fast.
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
          <span className="breadcrumb-active">Delis &amp; Meat Markets</span>
        </nav>
      </div>

      {/* ═══ TWO-COLUMN LAYOUT ═══ */}
      <section className="section light" aria-label="Deli payment processing details">
        <div className="section-inner">
          <div className="industry-layout">
            <IndustrySidebar
              category="restaurants"
              categoryLabel="Restaurants & Bars"
              currentSlug="delis-meat-markets"
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
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,.45)', fontWeight: 500 }}>Counter Sale</div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,.35)', fontWeight: 400 }}>Walk-In</div>
                </div>

                {[
                  { item: 'Boudin 2.4 lbs', price: '$14.40' },
                  { item: 'Tasso 1.1 lbs', price: '$9.90' },
                  { item: 'Cracklins', price: '$6.00' },
                ].map((row, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '7px 0', borderBottom: '1px solid rgba(255,255,255,.06)', fontSize: 14, color: 'var(--white)', fontWeight: 400 }}>
                    <span>{row.item}</span>
                    <span style={{ color: 'rgba(255,255,255,.55)' }}>{row.price}</span>
                  </div>
                ))}

                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '7px 0', fontSize: 13, color: 'rgba(255,255,255,.35)', fontWeight: 400, marginTop: 4 }}>
                  <span>Tax 9.45%</span>
                  <span>$2.87</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0 14px', fontSize: 15, color: 'var(--gold)', fontWeight: 600, borderTop: '1px solid rgba(255,255,255,.08)', marginTop: 6 }}>
                  <span>Total</span>
                  <span>$33.17</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', fontSize: 13 }}>
                  <span style={{ color: 'rgba(255,255,255,.45)', fontWeight: 500 }}>Mastercard Tap</span>
                  <span style={{ fontWeight: 600, color: '#22c55e' }}>APPROVED &#10003;</span>
                </div>
              </div>

              {/* ── Pain Points ── */}
              <h2>
                What Deli Owners <span>Deal With</span>
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
                How HD Processing Helps <span>Delis &amp; Meat Markets</span>
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, alignItems: 'center', marginBottom: 40 }}>
                <div>
                  <p style={{ fontSize: 15, lineHeight: 1.8, color: 'rgba(0,0,0,.65)', marginBottom: 16 }}>
                    We set up Lafayette delis and meat markets with POS systems that integrate directly with your commercial scale. Ring up boudin by the pound and the terminal calculates the price automatically &mdash; no mental math, no pricing errors, no slowdowns at the counter. Our tap-to-pay terminals process contactless payments in under 2 seconds, keeping your lunch rush moving.
                  </p>
                  <p style={{ fontSize: 15, lineHeight: 1.8, color: 'rgba(0,0,0,.65)' }}>
                    For holiday pre-orders &mdash; turducken, boudin balls, crawfish &mdash; we generate payment links you can text or email to customers so they pay upfront without calling in a card number. Need to take cards on deliveries? Our mobile readers connect over Bluetooth so you can accept payments anywhere. And with same-day funding, your revenue hits your account the day you earn it.
                  </p>
                </div>
                <div style={{ borderRadius: 14, overflow: 'hidden' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://assets.cdn.filesafe.space/yNgtcVB50ZOTKtcYV8Lh/media/69c1ddfbad00e260009b16d7.jpg"
                    alt="HD Processing deli payment setup"
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
            Your Deli Deserves
            <br />
            Better Rates.
          </h2>
          <p>
            Send us your current processing statement and we&apos;ll show you exactly
            how much you can save. Free analysis, no obligation.
          </p>
          <a href="/quote" className="btn-black">
            Get My Free Rate Analysis &rarr;
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
