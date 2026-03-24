import Link from 'next/link'
import IndustrySidebar from '@/components/IndustrySidebar'
import FaqAccordion from '@/components/FaqAccordion'

export const revalidate = 60

/* ─── SEO Metadata ─── */
export const metadata = {
  title: 'Payment Processing for Pizzerias & Sandwich Shops in Lafayette, LA | HD Processing',
  description:
    'Payment processing for pizzerias and sandwich shops in Lafayette, LA. Phone order payment links, delivery card readers, order management, and same-day funding. No contracts.',
  alternates: { canonical: 'https://hdprocessing.com/industries/restaurants/pizzerias-sandwich-shops' },
}

/* ─── JSON-LD Schema ─── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://hdprocessing.com/industries/restaurants/pizzerias-sandwich-shops#service',
      name: 'Pizzeria & Sandwich Shop Payment Processing',
      description:
        'Payment processing for pizzerias and sandwich shops in Lafayette, LA. Phone order payment links, mobile readers for delivery drivers, order management integration, and interchange-plus pricing.',
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
      url: 'https://hdprocessing.com/industries/restaurants/pizzerias-sandwich-shops',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://hdprocessing.com/industries/restaurants/pizzerias-sandwich-shops#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://hdprocessing.com/' },
        { '@type': 'ListItem', position: 2, name: 'Industries', item: 'https://hdprocessing.com/industries' },
        { '@type': 'ListItem', position: 3, name: 'Restaurants & Bars', item: 'https://hdprocessing.com/industries/restaurants' },
        { '@type': 'ListItem', position: 4, name: 'Pizzerias & Sandwich Shops', item: 'https://hdprocessing.com/industries/restaurants/pizzerias-sandwich-shops' },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://hdprocessing.com/industries/restaurants/pizzerias-sandwich-shops#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do phone order payment links work?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'When a customer calls in an order, you create a payment link in seconds from your POS or phone. Text or email the link to the customer \u2014 they tap it, enter their card, and pay. No reading card numbers over the phone, no cash-at-the-door hassles. The payment is confirmed before the order goes to the kitchen.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can delivery drivers accept card payments with HD Processing?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. We provide mobile card readers that connect to any smartphone via Bluetooth. Drivers can accept tap-to-pay, chip, and swipe payments at the door. Transactions sync back to your main system automatically. No more cash-only deliveries or lost revenue.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does HD Processing integrate with online ordering systems?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. We integrate with popular online ordering platforms so that in-person, phone, and online orders all flow through one system. Your staff sees everything on one screen \u2014 no switching between tablets or double-entering orders. Payments from all channels settle into the same account with unified reporting.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much can a Lafayette pizzeria save on processing fees?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most Lafayette pizzerias and sandwich shops save $250\u2013$600/month by switching from flat-rate processors like Square to our interchange-plus pricing. Phone orders and delivery payments often carry higher interchange rates \u2014 our transparent pricing ensures you\u2019re never overpaying. We\u2019ll analyze your statement for free.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are there contracts for pizzeria payment processing?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Every HD Processing agreement is month-to-month with zero early termination fees. You stay because we save you money and make your ordering process smoother \u2014 not because you\u2019re locked into a contract.',
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
    title: 'Phone Orders With No Payment Link',
    desc: 'Customers call in orders but you can\u2019t collect payment until pickup or delivery. That means no-shows, chargebacks, and drivers carrying cash.',
  },
  {
    title: 'No Integration Between Online and In-Person',
    desc: 'Online orders come in on a tablet, phone orders on a ticket, walk-ins at the register. Three systems, three headaches, one overwhelmed kitchen.',
  },
  {
    title: 'Delivery Drivers Can\u2019t Take Cards',
    desc: 'Your drivers show up with no way to accept cards at the door. Customers scramble for cash or cancel altogether.',
  },
  {
    title: 'Waiting Days for Busy Weekend Revenue',
    desc: 'Friday and Saturday are your biggest nights. Most processors hold those funds until Tuesday or Wednesday. That\u2019s inventory and payroll money you need now.',
  },
]

const features = [
  {
    icon: '\uD83D\uDD17',
    title: 'Phone Order Payment Links',
    desc: 'Text or email a payment link the moment a customer calls. They pay before the order hits the kitchen \u2014 no card-over-phone, no no-shows.',
  },
  {
    icon: '\uD83D\uDDA5\uFE0F',
    title: 'Order Management',
    desc: 'Phone, online, and walk-in orders on one screen. No more switching between tablets or double-entering tickets.',
  },
  {
    icon: '\uD83D\uDCF1',
    title: 'Mobile Readers for Delivery',
    desc: 'Bluetooth card readers for drivers. Accept tap, chip, and swipe at the door. Transactions sync to your main system automatically.',
  },
  {
    icon: '\u26A1',
    title: 'Same-Day Funding',
    desc: 'Get your weekend revenue before Monday morning. No more waiting 2\u20133 business days for deposits.',
  },
  {
    icon: '\uD83D\uDCB0',
    title: 'Interchange-Plus Pricing',
    desc: 'Transparent rates that pass through the actual card network cost. Phone and delivery orders often carry higher interchange \u2014 we make sure you\u2019re never overpaying.',
  },
  {
    icon: '\uD83D\uDEE0\uFE0F',
    title: 'On-Site Setup Always',
    desc: 'We come to your shop, install your equipment, integrate your ordering channels, and train your team. No shipping boxes, no DIY.',
  },
]

const faqItems = [
  {
    question: 'How do phone order payment links work?',
    answer:
      'When a customer calls in an order, you create a payment link in seconds from your POS or phone. Text or email the link to the customer \u2014 they tap it, enter their card, and pay. No reading card numbers over the phone, no cash-at-the-door hassles. The payment is confirmed before the order goes to the kitchen.',
  },
  {
    question: 'Can delivery drivers accept card payments with HD Processing?',
    answer:
      'Yes. We provide mobile card readers that connect to any smartphone via Bluetooth. Drivers can accept tap-to-pay, chip, and swipe payments at the door. Transactions sync back to your main system automatically. No more cash-only deliveries or lost revenue.',
  },
  {
    question: 'Does HD Processing integrate with online ordering systems?',
    answer:
      'Yes. We integrate with popular online ordering platforms so that in-person, phone, and online orders all flow through one system. Your staff sees everything on one screen \u2014 no switching between tablets or double-entering orders. Payments from all channels settle into the same account with unified reporting.',
  },
  {
    question: 'How much can a Lafayette pizzeria save on processing fees?',
    answer:
      'Most Lafayette pizzerias and sandwich shops save $250\u2013$600/month by switching from flat-rate processors like Square to our interchange-plus pricing. Phone orders and delivery payments often carry higher interchange rates \u2014 our transparent pricing ensures you\u2019re never overpaying. We\u2019ll analyze your statement for free.',
  },
  {
    question: 'Are there contracts for pizzeria payment processing?',
    answer:
      'No. Every HD Processing agreement is month-to-month with zero early termination fees. You stay because we save you money and make your ordering process smoother \u2014 not because you\u2019re locked into a contract.',
  },
]

const otherSubPages = [
  { label: 'Coffee & Tea Shops', slug: 'coffee-tea-shops' },
  { label: 'Bakeries', slug: 'bakeries' },
  { label: 'Breweries', slug: 'breweries' },
  { label: 'Delis & Meat Markets', slug: 'delis-meat-markets' },
]

const GOOGLE_REVIEWS_URL =
  'https://www.google.com/search?q=hd+processing#lrd=0x86249d41ec5883cf:0x531d9a9ab15a1418,1,,,,1'

/* ─── Page Component ─── */

export default async function PizzeriasSandwichShopsPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ═══ HERO ═══ */}
      <section className="hero" aria-label="Pizzeria Payment Processing Hero">
        <div className="hero-grid" aria-hidden="true"></div>
        <div className="hero-orb" aria-hidden="true"></div>

        <div className="hero-inner">
          <h1>
            Payment Processing for <span>Pizzerias &amp; Sandwich Shops</span>
          </h1>
          <p className="hero-sub">
            Phone order payment links, delivery card readers, and unified order management &mdash;
            built for Lafayette pizzerias and sandwich shops that take orders from every channel.
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
          <span className="breadcrumb-active">Pizzerias &amp; Sandwich Shops</span>
        </nav>
      </div>

      {/* ═══ TWO-COLUMN LAYOUT ═══ */}
      <section className="section light" aria-label="Pizzeria payment processing details">
        <div className="section-inner">
          <div className="industry-layout">
            <IndustrySidebar
              category="restaurants"
              categoryLabel="Restaurants & Bars"
              currentSlug="pizzerias-sandwich-shops"
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
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,.45)', fontWeight: 500 }}>Phone Order</div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,.35)', fontWeight: 400 }}>Delivery</div>
                </div>

                {[
                  { item: '18" Pepperoni Pizza', price: '$22.00' },
                  { item: 'Muffuletta', price: '$14.00' },
                  { item: 'Wings (12)', price: '$16.00' },
                  { item: '2L Drink', price: '$4.00' },
                ].map((row, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '7px 0', borderBottom: '1px solid rgba(255,255,255,.06)', fontSize: 14, color: 'var(--white)', fontWeight: 400 }}>
                    <span>{row.item}</span>
                    <span style={{ color: 'rgba(255,255,255,.55)' }}>{row.price}</span>
                  </div>
                ))}

                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '7px 0', fontSize: 13, color: 'rgba(255,255,255,.35)', fontWeight: 400, marginTop: 4 }}>
                  <span>Tax 9.45%</span>
                  <span>$5.30</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0 14px', fontSize: 15, color: 'var(--gold)', fontWeight: 600, borderTop: '1px solid rgba(255,255,255,.08)', marginTop: 6 }}>
                  <span>Total</span>
                  <span>$61.30</span>
                </div>

                <div style={{ textAlign: 'center', padding: '10px 0', fontSize: 13, fontWeight: 600, color: '#22c55e' }}>
                  Payment Link Sent &#10003;
                </div>
              </div>

              {/* ── Pain Points ── */}
              <h2>
                What Pizzeria Owners <span>Deal With</span>
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
                How HD Processing Helps <span>Pizzerias</span>
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, alignItems: 'center', marginBottom: 40 }}>
                <div>
                  <p style={{ fontSize: 15, lineHeight: 1.8, color: 'rgba(0,0,0,.65)', marginBottom: 16 }}>
                    We set up Lafayette pizzerias and sandwich shops with payment links that let you collect payment the moment a customer calls in an order. Text or email the link &mdash; they tap, pay, and the order is confirmed before it hits the kitchen. No more reading card numbers over the phone, no more no-shows on $60 delivery orders. For drivers, our mobile readers connect via Bluetooth so they can accept tap, chip, and swipe at the door.
                  </p>
                  <p style={{ fontSize: 15, lineHeight: 1.8, color: 'rgba(0,0,0,.65)' }}>
                    All your ordering channels &mdash; phone, online, and walk-in &mdash; flow through one system so your kitchen sees every ticket on a single screen. No more switching between tablets or double-entering orders. With interchange-plus pricing and same-day funding, you keep more of every sale and get your weekend money faster.
                  </p>
                </div>
                <div style={{ borderRadius: 14, overflow: 'hidden' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://assets.cdn.filesafe.space/yNgtcVB50ZOTKtcYV8Lh/media/69c1ff133e56b98263a4589b.jpg"
                    alt="HD Processing pizzeria payment setup"
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
            Stop Losing Orders to
            <br />
            Bad Payment Systems.
          </h2>
          <p>
            Send us your current processing statement and we&apos;ll show you exactly
            how much you can save. Free analysis, no obligation.
          </p>
          <a href="/quote" className="btn-black">
            See What I&apos;d Pay &rarr;
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
