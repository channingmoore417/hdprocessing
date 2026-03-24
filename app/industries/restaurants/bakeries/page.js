import Link from 'next/link'
import IndustrySidebar from '@/components/IndustrySidebar'
import FaqAccordion from '@/components/FaqAccordion'

export const revalidate = 60

/* ─── SEO Metadata ─── */
export const metadata = {
  title: 'Payment Processing for Bakeries in Lafayette, LA | HD Processing',
  description:
    'Payment processing for bakeries in Lafayette, LA. Mobile readers for markets, pre-order payment links, simple counter POS, and same-day funding. No contracts.',
  alternates: { canonical: 'https://hdprocessing.com/industries/restaurants/bakeries' },
}

/* ─── JSON-LD Schema ─── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://hdprocessing.com/industries/restaurants/bakeries#service',
      name: 'Bakery Payment Processing',
      description:
        'Payment processing for bakeries in Lafayette, LA. Mobile readers for farmers markets, pre-order payment links, simple counter POS systems, and interchange-plus pricing.',
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
      url: 'https://hdprocessing.com/industries/restaurants/bakeries',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://hdprocessing.com/industries/restaurants/bakeries#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://hdprocessing.com/' },
        { '@type': 'ListItem', position: 2, name: 'Industries', item: 'https://hdprocessing.com/industries' },
        { '@type': 'ListItem', position: 3, name: 'Restaurants & Bars', item: 'https://hdprocessing.com/industries/restaurants' },
        { '@type': 'ListItem', position: 4, name: 'Bakeries', item: 'https://hdprocessing.com/industries/restaurants/bakeries' },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://hdprocessing.com/industries/restaurants/bakeries#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What payment terminals work best for a Lafayette bakery?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For Lafayette bakeries, we recommend a compact countertop terminal with tap-to-pay and chip support. It processes payments in under 2 seconds, handles Apple Pay and Google Pay, and fits next to your display case without taking up counter space. We set it up on-site and train your team.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I accept payments at farmers markets with HD Processing?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. We provide mobile card readers that connect to your phone or tablet over Bluetooth or Wi-Fi. They support tap, chip, and swipe \u2014 so you can accept every payment type at any market, pop-up, or off-site event. Transactions sync back to your main account automatically.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do payment links work for bakery pre-orders?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We generate shareable payment links you can text or email to customers. They click the link, enter their card info, and pay \u2014 no app download required. This is perfect for king cake season, wedding cake deposits, holiday orders, or any custom order that needs a deposit upfront.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much can a Lafayette bakery save on processing fees?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most Lafayette bakeries save $150\u2013$400/month by switching from flat-rate processors like Square to our interchange-plus pricing. The exact savings depend on your monthly volume and average ticket. We\u2019ll analyze your current statement for free and show you the difference.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are there contracts or cancellation fees for bakery payment processing?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Every HD Processing agreement is month-to-month with zero early termination fees. You stay because we save you money and make your checkout faster \u2014 not because you\u2019re locked in.',
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
    title: 'No Mobile Payment Option for Markets',
    desc: 'You sell at farmers markets, pop-ups, and festivals \u2014 but your payment system stays behind the counter. That\u2019s lost revenue every weekend.',
  },
  {
    title: 'Pre-Order Deposits Hard to Collect',
    desc: 'King cakes, wedding cakes, and holiday orders need deposits upfront. But collecting payment over the phone or via Venmo is messy and unprofessional.',
  },
  {
    title: 'Counter POS Doesn\u2019t Fit',
    desc: 'Bulky terminals take up prime display case real estate. You need a compact system that fits your counter without getting in the way.',
  },
  {
    title: 'Waiting Days for Weekend Revenue',
    desc: 'Your busiest days are Saturday and Sunday. Most processors don\u2019t deposit weekend sales until Tuesday or Wednesday. That\u2019s cash flow you need now.',
  },
]

const features = [
  {
    icon: '\uD83D\uDCF1',
    title: 'Mobile Readers for Markets',
    desc: 'Bluetooth card readers that work anywhere \u2014 farmers markets, pop-ups, festivals. Accept tap, chip, and swipe on your phone.',
  },
  {
    icon: '\uD83D\uDD17',
    title: 'Payment Links for Pre-Orders',
    desc: 'Text or email a payment link for king cake orders, wedding deposits, or holiday pre-orders. Customers pay instantly \u2014 no app needed.',
  },
  {
    icon: '\uD83D\uDDA5\uFE0F',
    title: 'Simple Counter POS',
    desc: 'Compact terminals that fit next to your display case. Fast tap-to-pay, tip prompts, and receipt printing without taking up counter space.',
  },
  {
    icon: '\u26A1',
    title: 'Same-Day Funding',
    desc: 'Get your money the same day you earn it. Weekend sales hit your account before Monday morning.',
  },
  {
    icon: '\uD83D\uDCB0',
    title: 'Interchange-Plus Pricing',
    desc: 'Transparent rates that pass through the actual card network cost plus a small fixed markup. No inflated flat-rate percentages.',
  },
  {
    icon: '\uD83D\uDEE0\uFE0F',
    title: 'On-Site Setup',
    desc: 'We come to your bakery, install your equipment, configure your menu, and train your team. No shipping boxes or DIY guides.',
  },
]

const faqItems = [
  {
    question: 'What payment terminals work best for a Lafayette bakery?',
    answer:
      'For Lafayette bakeries, we recommend a compact countertop terminal with tap-to-pay and chip support. It processes payments in under 2 seconds, handles Apple Pay and Google Pay, and fits next to your display case without taking up counter space. We set it up on-site and train your team.',
  },
  {
    question: 'Can I accept payments at farmers markets with HD Processing?',
    answer:
      'Yes. We provide mobile card readers that connect to your phone or tablet over Bluetooth or Wi-Fi. They support tap, chip, and swipe \u2014 so you can accept every payment type at any market, pop-up, or off-site event. Transactions sync back to your main account automatically.',
  },
  {
    question: 'How do payment links work for bakery pre-orders?',
    answer:
      'We generate shareable payment links you can text or email to customers. They click the link, enter their card info, and pay \u2014 no app download required. This is perfect for king cake season, wedding cake deposits, holiday orders, or any custom order that needs a deposit upfront.',
  },
  {
    question: 'How much can a Lafayette bakery save on processing fees?',
    answer:
      'Most Lafayette bakeries save $150\u2013$400/month by switching from flat-rate processors like Square to our interchange-plus pricing. The exact savings depend on your monthly volume and average ticket. We\u2019ll analyze your current statement for free and show you the difference.',
  },
  {
    question: 'Are there contracts or cancellation fees for bakery payment processing?',
    answer:
      'No. Every HD Processing agreement is month-to-month with zero early termination fees. You stay because we save you money and make your checkout faster \u2014 not because you\u2019re locked in.',
  },
]

const otherSubPages = [
  { label: 'Coffee & Tea Shops', slug: 'coffee-tea-shops' },
  { label: 'Pizzerias & Sandwich Shops', slug: 'pizzerias-sandwich-shops' },
  { label: 'Breweries', slug: 'breweries' },
  { label: 'Delis & Meat Markets', slug: 'delis-meat-markets' },
]

const GOOGLE_REVIEWS_URL =
  'https://www.google.com/search?q=hd+processing#lrd=0x86249d41ec5883cf:0x531d9a9ab15a1418,1,,,,1'

/* ─── Page Component ─── */

export default async function BakeriesPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ═══ HERO ═══ */}
      <section className="hero" aria-label="Bakery Payment Processing Hero">
        <div className="hero-grid" aria-hidden="true"></div>
        <div className="hero-orb" aria-hidden="true"></div>

        <div className="hero-inner">
          <h1>
            Payment Processing for <span>Bakeries</span>
          </h1>
          <p className="hero-sub">
            Mobile readers for markets, pre-order payment links, and simple counter POS systems &mdash;
            built for Lafayette bakeries that sell everywhere from the shop to the farmers market.
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
          <span className="breadcrumb-active">Bakeries</span>
        </nav>
      </div>

      {/* ═══ TWO-COLUMN LAYOUT ═══ */}
      <section className="section light" aria-label="Bakery payment processing details">
        <div className="section-inner">
          <div className="industry-layout">
            <IndustrySidebar
              category="restaurants"
              categoryLabel="Restaurants & Bars"
              currentSlug="bakeries"
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
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,.45)', fontWeight: 500 }}>Counter Checkout</div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,.35)', fontWeight: 400 }}>Walk-In</div>
                </div>

                {[
                  { item: 'Sourdough Loaf', price: '$8.00' },
                  { item: 'King Cake (custom)', price: '$42.00' },
                  { item: '6x Beignets', price: '$9.00' },
                ].map((row, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '7px 0', borderBottom: '1px solid rgba(255,255,255,.06)', fontSize: 14, color: 'var(--white)', fontWeight: 400 }}>
                    <span>{row.item}</span>
                    <span style={{ color: 'rgba(255,255,255,.55)' }}>{row.price}</span>
                  </div>
                ))}

                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '7px 0', fontSize: 13, color: 'rgba(255,255,255,.35)', fontWeight: 400, marginTop: 4 }}>
                  <span>Tax 9.45%</span>
                  <span>$5.58</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0 14px', fontSize: 15, color: 'var(--gold)', fontWeight: 600, borderTop: '1px solid rgba(255,255,255,.08)', marginTop: 6 }}>
                  <span>Total</span>
                  <span>$64.58</span>
                </div>

                <div style={{ textAlign: 'center', padding: '10px 0', fontSize: 13, fontWeight: 600, color: '#22c55e' }}>
                  APPROVED &#10003;
                </div>
              </div>

              {/* ── Pain Points ── */}
              <h2>
                What Bakery Owners <span>Deal With</span>
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
                How HD Processing Helps <span>Bakeries</span>
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, alignItems: 'center', marginBottom: 40 }}>
                <div>
                  <p style={{ fontSize: 15, lineHeight: 1.8, color: 'rgba(0,0,0,.65)', marginBottom: 16 }}>
                    We set up Lafayette bakeries with compact counter terminals that process tap-to-pay in under 2 seconds &mdash; fast enough for your morning rush. Need to sell at the farmers market? Our mobile readers connect to your phone over Bluetooth so you can accept cards, Apple Pay, and Google Pay anywhere. Transactions sync back to your main account automatically.
                  </p>
                  <p style={{ fontSize: 15, lineHeight: 1.8, color: 'rgba(0,0,0,.65)' }}>
                    For pre-orders and custom cakes, we generate payment links you can text or email to customers. They pay instantly &mdash; no app download, no awkward phone-card-reading. And with interchange-plus pricing and same-day funding, you keep more of every sale and get your money faster.
                  </p>
                </div>
                <div style={{ borderRadius: 14, overflow: 'hidden' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://assets.cdn.filesafe.space/yNgtcVB50ZOTKtcYV8Lh/media/69c1ff12ad140065b12de2da.jpg"
                    alt="HD Processing bakery payment setup"
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
            Keep More of
            <br />
            Every Sale.
          </h2>
          <p>
            Send us your current processing statement and we&apos;ll show you exactly
            how much you can save. Free analysis, no obligation.
          </p>
          <a href="/quote" className="btn-black">
            Claim My Free Quote &rarr;
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
