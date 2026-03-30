import IndustrySidebar from '@/components/IndustrySidebar'
import FaqAccordion from '@/components/FaqAccordion'

export const revalidate = 60

/* ─── SEO Metadata ─── */
export const metadata = {
  title: 'Coffee Shop Payment Processing in Lafayette, LA',
  description:
    'Payment processing for coffee shops and cafés in Lafayette, LA. Fast tap-to-pay, tip prompts, and POS systems built for high-volume counter service. No contracts.',
  alternates: { canonical: 'https://hdprocessing.com/industries/restaurants/coffee-tea-shops' },
}

/* ─── JSON-LD Schema ─── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://hdprocessing.com/industries/restaurants/coffee-tea-shops#service',
      name: 'Coffee Shop Payment Processing',
      description:
        'Payment processing for coffee shops and cafés in Lafayette, LA. Fast tap-to-pay terminals, smart tip prompts, mobile ordering integration, and interchange-plus pricing built for high-volume, low-ticket counter service.',
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
      url: 'https://hdprocessing.com/industries/restaurants/coffee-tea-shops',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://hdprocessing.com/industries/restaurants/coffee-tea-shops#breadcrumb',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://hdprocessing.com/',
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
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Coffee & Tea Shops',
          item: 'https://hdprocessing.com/industries/restaurants/coffee-tea-shops',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://hdprocessing.com/industries/restaurants/coffee-tea-shops#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: "What's the best payment terminal for a Lafayette coffee shop?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For high-volume Lafayette coffee shops, we recommend a countertop tap-to-pay terminal that processes contactless payments in under 2 seconds. The terminal supports Apple Pay, Google Pay, and all major cards. We set it up on-site and train your baristas so there\'s zero downtime.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much can a Lafayette coffee shop save on processing fees?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most Lafayette coffee shops save $200-$400/month by switching from flat-rate processors like Square to our interchange-plus pricing. With an average ticket of $5-7, flat-rate fees hit harder. Interchange-plus passes through the actual card network rate plus a small fixed markup — no inflated percentages.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does HD Processing integrate with coffee shop POS systems?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. We integrate with popular coffee shop POS systems including Toast, and we handle full migrations from Square POS. Your menu items, modifiers, and reporting transfer over. We also support mobile ordering integration so customers can order ahead and pay through your POS.',
          },
        },
        {
          '@type': 'Question',
          name: 'How fast can HD Processing set up a Lafayette coffee shop?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We can have your Lafayette coffee shop fully set up in 24-48 hours. Our local team handles on-site installation, terminal configuration, tip prompt customization, and barista training. No shipping boxes, no DIY setup guides.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are there contracts for Lafayette coffee shop payment processing?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Every HD Processing agreement is month-to-month with zero early termination fees. You stay because we save you money and keep your line moving — not because you\'re locked into a contract.',
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
    title: 'Long Lines at Peak Hours',
    desc: 'Morning rush with 50+ customers in 30 minutes. Slow terminals cost you sales.',
  },
  {
    title: 'Low Average Ticket = High Fee Impact',
    desc: 'When your average sale is $5-7, processing fees eat into thin margins fast.',
  },
  {
    title: 'Tip Prompts That Frustrate Customers',
    desc: 'Clunky tip screens slow down the line and create awkward moments.',
  },
  {
    title: 'No Integration With Mobile Ordering',
    desc: "Customers want to order ahead. If your POS can't handle it, they go somewhere else.",
  },
]

const features = [
  {
    icon: '\u26A1',
    title: 'Sub-2-Second Tap',
    desc: 'Contactless payments that keep your line moving.',
  },
  {
    icon: '\uD83D\uDCB0',
    title: 'Low-Ticket Optimized Rates',
    desc: 'Interchange-plus pricing that works for $5 lattes.',
  },
  {
    icon: '\uD83D\uDCA1',
    title: 'Smart Tip Prompts',
    desc: "Customizable tip screens that don't slow checkout.",
  },
  {
    icon: '\uD83D\uDCF1',
    title: 'Mobile Order Integration',
    desc: 'Accept ahead orders from your POS.',
  },
  {
    icon: '\uD83E\uDDFE',
    title: 'Daily Sales Reports',
    desc: 'See every drink, every shift, every deposit.',
  },
  {
    icon: '\uD83D\uDEE0\uFE0F',
    title: 'We Set It Up',
    desc: 'On-site installation and barista training included.',
  },
]

const faqItems = [
  {
    question: "What's the best payment terminal for a Lafayette coffee shop?",
    answer:
      "For high-volume Lafayette coffee shops, we recommend a countertop tap-to-pay terminal that processes contactless payments in under 2 seconds. The terminal supports Apple Pay, Google Pay, and all major cards. We set it up on-site and train your baristas so there's zero downtime.",
  },
  {
    question: 'How much can a Lafayette coffee shop save on processing fees?',
    answer:
      'Most Lafayette coffee shops save $200-$400/month by switching from flat-rate processors like Square to our interchange-plus pricing. With an average ticket of $5-7, flat-rate fees hit harder. Interchange-plus passes through the actual card network rate plus a small fixed markup — no inflated percentages.',
  },
  {
    question: 'Does HD Processing integrate with coffee shop POS systems?',
    answer:
      'Yes. We integrate with popular coffee shop POS systems including Toast, and we handle full migrations from Square POS. Your menu items, modifiers, and reporting transfer over. We also support mobile ordering integration so customers can order ahead and pay through your POS.',
  },
  {
    question: 'How fast can HD Processing set up a Lafayette coffee shop?',
    answer:
      'We can have your Lafayette coffee shop fully set up in 24-48 hours. Our local team handles on-site installation, terminal configuration, tip prompt customization, and barista training. No shipping boxes, no DIY setup guides.',
  },
  {
    question: 'Are there contracts for Lafayette coffee shop payment processing?',
    answer:
      "No. Every HD Processing agreement is month-to-month with zero early termination fees. You stay because we save you money and keep your line moving — not because you're locked into a contract.",
  },
]

/* ─── Page Component ─── */

export default async function CoffeeTeaShopsPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ═══ HERO ═══ */}
      <section className="hero" aria-label="Coffee Shop Payment Processing Hero">
        <div className="hero-grid" aria-hidden="true"></div>
        <div className="hero-orb" aria-hidden="true"></div>

        <div className="hero-inner">
          <h1>
            Coffee Shop Payment Processing in <span>Lafayette</span>
          </h1>
          <p className="hero-sub">
            HD Processing helps Lafayette coffee shops and caf&eacute;s accept payments
            faster with tap-to-pay terminals, smart tip prompts, and POS systems built
            for high-volume counter service.
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
          <span className="breadcrumb-active">Coffee &amp; Tea Shops</span>
        </nav>
      </div>

      {/* ═══ TWO-COLUMN LAYOUT ═══ */}
      <section className="section light" aria-label="Coffee shop payment processing details">
        <div className="section-inner">
          <div className="industry-layout">
            <IndustrySidebar
              category="restaurants"
              categoryLabel="Restaurants & Bars"
              currentSlug="coffee-tea-shops"
              items={sidebarItems}
            />

            <div className="industry-content">
              {/* ── Pain Points ── */}
              <h2>
                What Coffee Shop Owners <span>Deal With</span>
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

              {/* ── Solutions ── */}
              <h2>
                How HD Processing Helps <span>Coffee Shops</span>
              </h2>
              <p>
                We set up Lafayette coffee shops with tap-to-pay terminals that process
                contactless payments in under 2 seconds &mdash; fast enough to keep your
                morning rush moving. Our smart tip prompts are fully customizable so you
                can set the percentages, order, and defaults that work for your
                customers without creating friction. Need mobile ordering? We integrate
                ahead-of-time orders directly into your POS so baristas see everything
                on one screen. And because your average ticket is lower than a
                full-service restaurant, we use interchange-plus pricing that passes
                through the actual card network rate &mdash; no inflated flat-rate
                percentages eating into every $5 latte.
              </p>

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

              {/* ── Case Example ── */}
              <h2>
                Real Results in <span>Lafayette</span>
              </h2>
              <div className="problem-card" style={{ background: 'var(--black)', border: '1px solid var(--border-dk)', borderRadius: 14, padding: '28px 24px', marginBottom: 40 }}>
                <strong style={{ color: 'var(--gold)', fontSize: 15, display: 'block', marginBottom: 12 }}>
                  A Lafayette caf&eacute; on Johnston St switched from Square to HD Processing
                </strong>
                <p style={{ color: 'rgba(255,255,255,.55)', fontSize: 14, fontWeight: 300, lineHeight: 1.7, marginBottom: 10 }}>
                  Processing 200+ transactions daily at an average ticket of $6.50.
                  Square&apos;s flat 2.6% + $0.10 was eating margins.
                </p>
                <p style={{ color: 'var(--white)', fontSize: 14, fontWeight: 400, lineHeight: 1.7, marginBottom: 0 }}>
                  <strong>Result:</strong> Saved $340/month on processing fees. Checkout time
                  dropped by 40% with new tap-to-pay terminals. Tip percentages increased
                  18% with custom tip prompts.
                </p>
              </div>

              {/* ── FAQ ── */}
              <FaqAccordion
                items={faqItems}
                variant="light"
                label="FAQ"
                heading="Frequently Asked Questions"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FINAL CTA (gold) ═══ */}
      <section className="final-cta" aria-label="Get a free quote">
        <div className="final-cta-inner">
          <h2>
            Ready to Speed Up Your
            <br />
            Coffee Shop&apos;s Checkout?
          </h2>
          <p>
            Send us your current processing statement and we&apos;ll show you exactly
            how much you can save &mdash; and how fast your line can move with the right
            terminals. Free analysis, no obligation.
          </p>
          <a href="/quote" className="btn-black">
            Get a Free Quote &rarr;
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
