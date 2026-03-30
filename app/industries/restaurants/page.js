import Link from 'next/link'
import FaqAccordion from '@/components/FaqAccordion'

export const revalidate = 60

/* --- SEO Metadata --- */
export const metadata = {
  title: 'Restaurant Payment Processing in Lafayette, LA | HD Processing',
  description:
    'Payment processing built for Lafayette restaurants. Tableside payments, tip adjust, kitchen display systems, same-day funding. No contracts. Call 337-366-8550.',
  alternates: { canonical: 'https://hdprocessing.com/industries/restaurants' },
}

/* --- Data --- */

const GOOGLE_REVIEWS_URL =
  'https://www.google.com/search?q=hd+processing#lrd=0x86249d41ec5883cf:0x531d9a9ab15a1418,1,,,,1'

const subNavTabs = [
  { label: 'All Restaurants', slug: '' },
  { label: 'Coffee & Tea Shops', slug: 'coffee-tea-shops' },
  { label: 'Pizzerias & Sandwich Shops', slug: 'pizzerias-sandwich-shops' },
  { label: 'Bakeries', slug: 'bakeries' },
  { label: 'Breweries', slug: 'breweries' },
  { label: 'Delis & Meat Markets', slug: 'delis-meat-markets' },
]

const subPages = [
  {
    icon: '\u2615',
    name: 'Coffee & Tea Shops',
    desc: 'Fast tap-to-pay, tip prompts, and POS built for high-volume counter service.',
    slug: 'coffee-tea-shops',
  },
  {
    icon: '\uD83C\uDF55',
    name: 'Pizzerias & Sandwich Shops',
    desc: 'Phone order payment links, delivery readers, and online ordering integration.',
    slug: 'pizzerias-sandwich-shops',
  },
  {
    icon: '\uD83E\uDDC1',
    name: 'Bakeries',
    desc: 'Mobile readers for markets, pre-order payment links, and simple counter POS.',
    slug: 'bakeries',
  },
  {
    icon: '\uD83C\uDF7A',
    name: 'Breweries',
    desc: 'Open tab management, unified merchandise + bar sales, and tap-to-pay.',
    slug: 'breweries',
  },
  {
    icon: '\uD83E\uDD69',
    name: 'Delis & Meat Markets',
    desc: 'Weight-based pricing, fast counter checkout, and holiday pre-order links.',
    slug: 'delis-meat-markets',
  },
]

const painPoints = [
  {
    title: 'Slow Terminals Kill Table Turns',
    desc: 'Every extra minute a table waits for the check is a minute the next party isn\u2019t seated. Slow payment terminals cost you covers every single night.',
  },
  {
    title: 'No Tableside Payment Option',
    desc: 'Guests expect to tap and go at the table. If your server has to walk the card to a back terminal, you\u2019re losing time and trust.',
  },
  {
    title: 'Tip Adjust Headaches',
    desc: 'Paper tip lines, manual adjustments, and batch-close mistakes create accounting nightmares. Your staff deserves a system that handles tips automatically.',
  },
  {
    title: 'Waiting Days for Your Money',
    desc: 'Most processors hold your funds for 2\u20133 business days. That\u2019s payroll, inventory, and rent money sitting in someone else\u2019s account.',
  },
]

const features = [
  {
    icon: '\uD83D\uDCF1',
    title: 'Tableside Payments',
    desc: 'Pay-at-the-table terminals that let guests tap, tip, and go \u2014 without waiting for the server to walk back.',
  },
  {
    icon: '\uD83D\uDCB0',
    title: 'Tip Adjust Built-In',
    desc: 'Pre-auth, tip adjust, and automatic batch close \u2014 no more paper slips, no more manual entry.',
  },
  {
    icon: '\uD83D\uDDA5\uFE0F',
    title: 'Kitchen Display Systems',
    desc: 'Orders fire straight from the POS to the kitchen screen. No lost tickets, no miscommunication.',
  },
  {
    icon: '\u26A1',
    title: 'Same-Day Funding',
    desc: 'Get your money the same day you earn it. No more waiting 2\u20133 business days for deposits.',
  },
  {
    icon: '\uD83E\uDDFE',
    title: 'Sales Reporting',
    desc: 'See every ticket, every server, every shift \u2014 broken down by card type, time of day, and tip percentage.',
  },
  {
    icon: '\uD83D\uDEE0\uFE0F',
    title: 'On-Site Setup Always',
    desc: 'We come to your restaurant, install your equipment, train your staff, and make sure everything works before we leave.',
  },
]

const faqItems = [
  {
    question: 'What POS systems does HD Processing work with for restaurants?',
    answer:
      'We integrate with all major restaurant POS systems including Toast, Clover, and more. We also handle full migrations from Square POS \u2014 your menu items, modifiers, and reporting transfer over. If you\u2019re not sure what system is best for your restaurant, we\u2019ll help you choose based on your menu size, service style, and budget.',
  },
  {
    question: 'How much can a Lafayette restaurant save by switching processors?',
    answer:
      'Most Lafayette restaurants save $300\u2013$800/month by switching from flat-rate processors like Square or Toast Payments to our interchange-plus pricing. The savings depend on your monthly volume, average ticket size, and current rate structure. We\u2019ll analyze your statement for free and show you the exact difference.',
  },
  {
    question: 'Does HD Processing support tableside payments?',
    answer:
      'Yes. We set up wireless pay-at-the-table terminals that support tap-to-pay, chip, swipe, Apple Pay, and Google Pay. Guests can tip on-screen, and the payment closes instantly \u2014 no walking the card back to a terminal. This cuts table turn time and increases tip percentages.',
  },
  {
    question: 'How fast can HD Processing set up a Lafayette restaurant?',
    answer:
      'We can have your restaurant fully set up in 24\u201348 hours. Our local team handles on-site installation, terminal configuration, menu programming, tip prompt setup, and staff training. No shipping boxes, no DIY guides, no 1-800 support lines.',
  },
  {
    question: 'Are there contracts or cancellation fees?',
    answer:
      'No. Every HD Processing agreement is month-to-month with zero early termination fees. You stay because we save you money and keep your restaurant running smoothly \u2014 not because you\u2019re locked into a contract.',
  },
]

const otherIndustries = [
  { icon: '\uD83D\uDED2', name: 'Retail', slug: 'retail' },
  { icon: '\uD83D\uDC87', name: 'Services', slug: 'services' },
  { icon: '\uD83C\uDF10', name: 'Online', slug: 'online' },
]

/* --- JSON-LD --- */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
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
    {
      '@type': 'Service',
      '@id': 'https://hdprocessing.com/industries/restaurants#service',
      name: 'Restaurant Payment Processing',
      description:
        'Payment processing solutions for restaurants and bars in Lafayette, Louisiana. Tableside payments, tip adjust, kitchen display systems, same-day funding, and interchange-plus pricing.',
      provider: { '@id': 'https://hdprocessing.com/#business' },
      areaServed: {
        '@type': 'City',
        name: 'Lafayette',
        containedInPlace: { '@type': 'State', name: 'Louisiana' },
      },
      serviceType: 'Payment Processing',
      url: 'https://hdprocessing.com/industries/restaurants',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://hdprocessing.com/industries/restaurants#breadcrumb',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://hdprocessing.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Industries',
          item: 'https://hdprocessing.com/industries',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Restaurants & Bars',
          item: 'https://hdprocessing.com/industries/restaurants',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://hdprocessing.com/industries/restaurants#faq',
      mainEntity: faqItems.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    },
  ],
}

/* --- Page Component --- */
export default function RestaurantsPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ========== HERO ========== */}
      <section className="hero" aria-label="Restaurant Payment Processing Hero">
        <div className="hero-grid" aria-hidden="true"></div>
        <div className="hero-orb" aria-hidden="true"></div>

        <div className="hero-inner" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center', maxWidth: 1100 }}>
          {/* Left: Copy */}
          <div>
            <span className="hero-label">Industry Solutions</span>
            <h1>
              Payment Processing for{' '}
              <span>Restaurants &amp; Bars</span>
            </h1>
            <p className="hero-sub">
              Tableside payments, tip adjust, kitchen display systems, and same-day funding &mdash;
              built for Lafayette restaurants that move fast and can&apos;t afford downtime.
            </p>
            <div className="hero-actions">
              <Link href="/quote" className="btn-gold">
                Get a Free Quote &rarr;
              </Link>
              <a href="tel:3373668550" className="btn-outline">
                337-366-8550
              </a>
            </div>
          </div>

          {/* Right: POS Mockup */}
          <div
            style={{
              background: 'var(--black)',
              border: '1px solid var(--border-dk)',
              borderRadius: 18,
              padding: '28px 24px',
              maxWidth: 370,
              justifySelf: 'end',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,.45)', fontWeight: 500 }}>Table 7</div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,.35)', fontWeight: 400 }}>Dine-In</div>
            </div>

            {[
              { item: 'Crawfish \u00C9touff\u00E9e', price: '$18.00' },
              { item: 'Boudin Plate', price: '$14.00' },
              { item: 'Bread Pudding', price: '$8.00' },
              { item: 'Sweet Tea x2', price: '$6.00' },
            ].map((row, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '7px 0', borderBottom: '1px solid rgba(255,255,255,.06)', fontSize: 14, color: 'var(--white)', fontWeight: 400 }}>
                <span>{row.item}</span>
                <span style={{ color: 'rgba(255,255,255,.55)' }}>{row.price}</span>
              </div>
            ))}

            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '7px 0', fontSize: 13, color: 'rgba(255,255,255,.35)', fontWeight: 400, marginTop: 4 }}>
              <span>Tax 9.45%</span>
              <span>$4.36</span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0 14px', fontSize: 15, color: 'var(--gold)', fontWeight: 600, borderTop: '1px solid rgba(255,255,255,.08)', marginTop: 6 }}>
              <span>Total</span>
              <span>$50.36</span>
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
              Charge $54.64
            </div>
          </div>
        </div>

        {/* Google Reviews Badge below mockup */}
        <div style={{ textAlign: 'center', marginTop: 28 }}>
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="gmb-badge"
            aria-label="See HD Processing reviews on Google"
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
              <span className="gmb-stars" aria-label="5 stars">
                &#9733;&#9733;&#9733;&#9733;&#9733;
              </span>
              <div className="gmb-meta">
                5.0 <span>&middot; 47+ Google Reviews</span>
              </div>
              <span className="gmb-cta">Read all reviews &#8599;</span>
            </div>
          </a>
        </div>
      </section>

      {/* ========== BREADCRUMB ========== */}
      <div className="breadcrumb-bar">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span className="breadcrumb-sep" aria-hidden="true">&rsaquo;</span>
          <Link href="/industries">Industries</Link>
          <span className="breadcrumb-sep" aria-hidden="true">&rsaquo;</span>
          <span className="breadcrumb-active">Restaurants &amp; Bars</span>
        </nav>
      </div>

      {/* ========== SUB-NAV ========== */}
      <div className="breadcrumb-bar" style={{ borderTop: 'none', paddingTop: 0 }}>
        <nav style={{ display: 'flex', gap: 6, flexWrap: 'wrap', maxWidth: 1100, margin: '0 auto', padding: '0 24px' }} aria-label="Restaurant sub-categories">
          {subNavTabs.map((tab) => {
            const isActive = tab.slug === ''
            const href = tab.slug ? `/industries/restaurants/${tab.slug}` : '/industries/restaurants'
            return (
              <Link
                key={tab.slug}
                href={href}
                style={{
                  display: 'inline-block',
                  padding: '8px 16px',
                  borderRadius: 999,
                  fontSize: 13,
                  fontWeight: 600,
                  background: isActive ? 'var(--gold)' : 'rgba(255,255,255,.06)',
                  color: isActive ? 'var(--black)' : 'rgba(255,255,255,.55)',
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                }}
              >
                {tab.label}
              </Link>
            )
          })}
        </nav>
      </div>

      {/* ========== PAIN POINTS ========== */}
      <section className="section light" aria-label="Common restaurant payment problems">
        <div className="section-inner">
          <div className="section-label">Sound Familiar?</div>
          <h2>What Restaurant Owners <span>Deal With</span></h2>

          <div className="problem-grid">
            {painPoints.map((item, i) => (
              <div key={i} className="problem-card">
                <div className="problem-card-num">0{i + 1}</div>
                <strong>{item.title}</strong>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SOLUTION (dark) ========== */}
      <section className="section dark" aria-label="How HD Processing helps restaurants">
        <div className="section-inner">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
            <div>
              <div className="section-label">The Fix</div>
              <h2>How HD Processing Helps <span>Restaurants</span></h2>
              <p style={{ color: 'rgba(255,255,255,.65)', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
                We set up Lafayette restaurants with tableside payment terminals that let guests tap, tip, and close their check at the table &mdash; no more waiting for the server to walk the card back. Our systems handle pre-auth for bar tabs, automatic tip adjust at batch close, and kitchen display integration so orders fire instantly from the POS to the line.
              </p>
              <p style={{ color: 'rgba(255,255,255,.65)', fontSize: 15, lineHeight: 1.8 }}>
                Every restaurant we work with gets interchange-plus pricing &mdash; the same transparent rate structure used by major chains &mdash; so you know exactly what you&apos;re paying on every transaction. And with same-day funding, your weekend revenue hits your account before Monday morning.
              </p>
            </div>
            <div style={{ borderRadius: 14, overflow: 'hidden' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://assets.cdn.filesafe.space/yNgtcVB50ZOTKtcYV8Lh/media/69c1dda2fd06c8eeb631cf7e.jpg"
                alt="HD Processing restaurant payment setup"
                style={{ width: '100%', display: 'block', borderRadius: 14 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========== FEATURES ========== */}
      <section className="section light" aria-label="Restaurant payment features">
        <div className="section-inner">
          <div className="section-label">What You Get</div>
          <h2>Built for <span>Restaurants</span></h2>

          <div className="features-grid">
            {features.map((f, i) => (
              <div key={i} className="feature-card">
                <span className="feature-card-icon" aria-hidden="true">
                  {f.icon}
                </span>
                <div className="feature-card-title">{f.title}</div>
                <div className="feature-card-desc">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SUB-PAGE CARDS ========== */}
      <section className="section dark" aria-label="Restaurant sub-categories">
        <div className="section-inner">
          <div className="section-label">Explore Restaurant Solutions</div>
          <h2>Find Your <span>Industry</span></h2>

          <div className="industry-cards-grid">
            {subPages.map((sp) => (
              <Link
                key={sp.slug}
                href={`/industries/restaurants/${sp.slug}`}
                className="industry-card"
              >
                <span className="industry-card-icon" aria-hidden="true">
                  {sp.icon}
                </span>
                <span className="industry-card-name">{sp.name}</span>
                <span className="industry-card-desc">{sp.desc}</span>
              </Link>
            ))}
            <Link
              href="/contact"
              className="industry-card"
              style={{ borderStyle: 'dashed' }}
            >
              <span className="industry-card-icon" aria-hidden="true">&#10067;</span>
              <span className="industry-card-name">Don&apos;t See Your Business?</span>
              <span className="industry-card-desc">We work with all types of restaurants. Tell us what you need.</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ========== FAQ ========== */}
      <FaqAccordion
        items={faqItems}
        variant="light"
        label="FAQ"
        heading="Frequently Asked Questions"
      />

      {/* ========== OTHER INDUSTRIES ========== */}
      <section className="section dark" aria-label="Other industries">
        <div className="section-inner">
          <div className="section-label">Other Industries</div>
          <h2>We Also <span>Work With</span></h2>

          <div className="industry-cards-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {otherIndustries.map((ind) => (
              <Link
                key={ind.slug}
                href={`/industries/${ind.slug}`}
                className="industry-card"
              >
                <span className="industry-card-icon" aria-hidden="true">
                  {ind.icon}
                </span>
                <span className="industry-card-name">{ind.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========== BIZ INFO ========== */}
      <section className="section light" aria-label="Business information">
        <div className="section-inner">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'start' }}>
            <div>
              <iframe
                title="HD Processing location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.123456789!2d-92.0198427!3d30.2240897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86249d41ec5883cf%3A0x531d9a9ab15a1418!2sHD%20Processing!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="280"
                style={{ border: 0, borderRadius: 14 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div>
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16 }}>HD Processing</h3>
              <p style={{ fontSize: 14, lineHeight: 1.8, color: 'rgba(0,0,0,.55)', marginBottom: 8 }}>
                1027 Johnston St, Lafayette, LA 70501
              </p>
              <p style={{ fontSize: 14, lineHeight: 1.8, color: 'rgba(0,0,0,.55)', marginBottom: 8 }}>
                <strong>Phone:</strong>{' '}
                <a href="tel:3373668550" style={{ color: 'var(--black)', fontWeight: 600 }}>
                  337-366-8550
                </a>
              </p>
              <p style={{ fontSize: 14, lineHeight: 1.8, color: 'rgba(0,0,0,.55)', marginBottom: 16 }}>
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
                  <span className="gmb-stars" aria-label="5 stars">
                    &#9733;&#9733;&#9733;&#9733;&#9733;
                  </span>
                  <div className="gmb-meta">
                    5.0 <span>&middot; 47+ Google Reviews</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FINAL CTA (gold) ========== */}
      <section className="final-cta" aria-label="Get a free quote">
        <div className="final-cta-inner">
          <h2>
            Your Restaurant Deserves
            <br />
            Better Rates.
          </h2>
          <p>
            Send us your current statement and we&apos;ll show you exactly how much you&apos;d save.
            Free analysis, no obligation, no contracts.
          </p>
          <Link href="/quote" className="btn-black">
            See What I&apos;d Pay &rarr;
          </Link>
          <br />
          <span style={{ display: 'inline-block', marginTop: 14, fontSize: '13.5px', color: 'rgba(0,0,0,.45)' }}>
            No contracts. No pressure. Local Lafayette team on call.
          </span>
        </div>
      </section>
    </>
  )
}
