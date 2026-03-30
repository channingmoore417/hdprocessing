import client from '@/sanity/client'
import FaqAccordion from '@/components/FaqAccordion'

export const revalidate = 60

/* ─── SEO Metadata ─── */
export const metadata = {
  title: 'HD Processing — Payment Processing & Merchant Services in Lafayette, LA',
  description:
    "Lafayette's local payment processing company. Credit card processing, POS systems, mobile payments, and ecommerce solutions for small businesses. No hidden fees. Local support. Call 337-366-8550.",
  keywords:
    'payment processing Lafayette LA, merchant services Lafayette Louisiana, credit card processing Lafayette, POS systems Lafayette, small business payment processing Louisiana',
  alternates: { canonical: 'https://hdprocessing.com/' },
  openGraph: {
    type: 'website',
    title: 'HD Processing — Payment Processing in Lafayette, LA',
    description:
      'Local payment processing for Lafayette businesses. Transparent pricing, next-day funding, real local support.',
    url: 'https://hdprocessing.com/',
  },
}

/* ─── JSON-LD Schema ─── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LocalBusiness', 'FinancialService'],
      '@id': 'https://hdprocessing.com/#business',
      name: 'HD Processing',
      description:
        'Payment processing and merchant services for small businesses in Lafayette, Louisiana. Credit card processing, POS systems, mobile payments, and ecommerce solutions.',
      url: 'https://hdprocessing.com',
      telephone: '+13373668550',
      email: 'support@hdprocessing.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '1027 Johnston St',
        addressLocality: 'Lafayette',
        addressRegion: 'LA',
        postalCode: '70501',
        addressCountry: 'US',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 30.2041,
        longitude: -92.0193,
      },
      areaServed: {
        '@type': 'City',
        name: 'Lafayette',
        containedInPlace: { '@type': 'State', name: 'Louisiana' },
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '08:00',
          closes: '18:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: 'Saturday',
          opens: '09:00',
          closes: '14:00',
        },
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5',
        reviewCount: '47',
        bestRating: '5',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Payment Processing Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Credit Card Processing',
              url: 'https://hdprocessing.com/credit-card-processing',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'POS Systems',
              url: 'https://hdprocessing.com/pos-systems',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Mobile Payments',
              url: 'https://hdprocessing.com/mobile-payments',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Online Payments',
              url: 'https://hdprocessing.com/online-payments',
            },
          },
        ],
      },
      priceRange: '$$',
      image: 'https://hdprocessing.com/assets/hd-logo-primary.png',
      sameAs: [
        'https://www.google.com/search?q=hd+processing#lrd=0x86249d41ec5883cf:0x531d9a9ab15a1418,1,,,,',
      ],
    },
    {
      '@type': 'WebPage',
      '@id': 'https://hdprocessing.com/#webpage',
      url: 'https://hdprocessing.com/',
      name: 'HD Processing — Payment Processing & Merchant Services in Lafayette, LA',
      description:
        "Lafayette's local payment processing company. No hidden fees, next-day funding, local support.",
      isPartOf: { '@id': 'https://hdprocessing.com/#business' },
      about: { '@id': 'https://hdprocessing.com/#business' },
      inLanguage: 'en-US',
    },
  ],
}

/* ─── Hardcoded Fallback Data ─── */

const GOOGLE_REVIEWS_URL =
  'https://www.google.com/search?q=hd+processing#lrd=0x86249d41ec5883cf:0x531d9a9ab15a1418,1,,,,1'

const services = [
  {
    href: '/credit-card-processing',
    icon: '\uD83D\uDCB3',
    title: 'Credit Card Processing',
    description:
      'Accept all major cards with transparent, interchange-plus pricing. No surprises on your monthly statement.',
  },
  {
    href: '/pos-systems',
    icon: '\uD83D\uDDA5\uFE0F',
    title: 'POS Systems',
    description:
      'Modern point-of-sale systems for restaurants, retail, and service businesses. Inventory, reporting, and payments in one place.',
  },
  {
    href: '/mobile-payments',
    icon: '\uD83D\uDCF1',
    title: 'Mobile Payments',
    description:
      'Accept cards anywhere with a Bluetooth reader on your phone. Perfect for contractors, food trucks, and pop-up shops.',
  },
  {
    href: '/online-payments',
    icon: '\uD83D\uDED2',
    title: 'Online & Ecommerce',
    description:
      'Add payment processing to your website or online store. Works with Shopify, WooCommerce, and custom sites.',
  },
]

const painPoints = [
  {
    strong: "Fees you don't understand",
    text: 'Monthly statement full of line items nobody ever explained to you.',
  },
  {
    strong: 'Locked into a long-term contract',
    text: "Signed up for something and now you can't leave without a penalty.",
  },
  {
    strong: "Support that doesn't pick up",
    text: 'Called a 1-800 number and got put on hold for 40 minutes on a Friday night.',
  },
  {
    strong: "Equipment that's outdated or unreliable",
    text: 'POS that crashes, readers that skip, systems that slow down your checkout.',
  },
]

const solutions = [
  {
    strong: 'Transparent pricing',
    text: ' — Interchange-plus rates explained line by line. No mystery charges.',
  },
  {
    strong: 'Month-to-month terms',
    text: ' — No long-term contracts. Stay because it works, not because you have to.',
  },
  {
    strong: 'Local support that answers',
    text: ' — We show up. We train your staff. We pick up the phone.',
  },
  {
    strong: 'Modern hardware',
    text: ' — Up-to-date POS systems and card readers installed by our team, same day.',
  },
  {
    strong: 'Next-day funding',
    text: ' — Money in your account the next business day, not two or three days later.',
  },
]

const industries = [
  {
    icon: '\uD83C\uDF7D\uFE0F',
    title: 'Food & Beverage',
    items: [
      { label: 'Restaurants & Bars', href: '/industries/restaurants' },
      { label: 'Coffee & Tea Shops', href: '/industries/restaurants' },
      { label: 'Pizzerias & Sandwich Shops', href: '/industries/restaurants' },
      { label: 'Bakeries', href: '/industries/restaurants' },
      { label: 'Breweries', href: '/industries/restaurants' },
      { label: 'Delis & Meat Markets', href: '/industries/restaurants' },
    ],
  },
  {
    icon: '\uD83C\uDFEA',
    title: 'Retail',
    items: [
      { label: 'Clothing Stores', href: '/industries/retail' },
      { label: 'Grocery Stores', href: '/industries/retail' },
      { label: 'Convenience Stores', href: '/industries/retail' },
      { label: 'Gift Shops', href: '/industries/retail' },
      { label: 'Book Stores', href: '/industries/retail' },
      { label: 'Small & Large Retail', href: '/industries/retail' },
    ],
  },
  {
    icon: '\uD83D\uDC86',
    title: 'Services',
    items: [
      { label: 'Hair Salons & Spas', href: '/industries/service-businesses' },
      { label: 'Mechanic Shops', href: '/industries/service-businesses' },
      { label: 'Gyms & Fitness', href: '/industries/service-businesses' },
      { label: 'Healthcare', href: '/industries/service-businesses' },
      { label: 'Doctors & Lawyers', href: '/industries/service-businesses' },
      { label: 'Professionals', href: '/industries/service-businesses' },
    ],
  },
  {
    icon: '\uD83D\uDED2',
    title: 'Online',
    items: [
      { label: 'E-Commerce Stores', href: '/online-payments' },
      { label: 'Online Retailers', href: '/online-payments' },
      { label: 'Service Providers', href: '/online-payments' },
      { label: 'Subscription Businesses', href: '/online-payments' },
    ],
  },
]

const whyCards = [
  {
    icon: '\uD83D\uDCCD',
    title: 'Lafayette Local',
    text: "We're based at 1027 Johnston St. When you call us, a real person in Louisiana picks up — not a call center in another state.",
  },
  {
    icon: '\uD83D\uDCB0',
    title: 'No Hidden Fees',
    text: "Interchange-plus pricing, fully explained. We'll do a free statement analysis and show you exactly what you're paying versus what you should be.",
  },
  {
    icon: '\u26A1',
    title: 'Same-Day Setup',
    text: 'We come to your business, install your equipment, train your staff, and have you processing payments — often the same day.',
  },
  {
    icon: '\uD83D\uDD13',
    title: 'No Long Contracts',
    text: "Month-to-month terms on everything. We earn your business every month — you're never stuck with us if things change.",
  },
  {
    icon: '\uD83C\uDFE6',
    title: 'Next-Day Funding',
    text: 'Funds deposited to your account the next business day. Better cash flow, less waiting — keeps your business moving.',
  },
  {
    icon: '\uD83D\uDEE1\uFE0F',
    title: 'PCI Compliant',
    text: 'Every transaction is fully PCI DSS compliant with fraud detection and chargeback support built in at no extra charge.',
  },
]

const reviews = [
  {
    text: "\u201CI have had a wonderful experience with Dustin and his team. He\u2019s even taken time to come and train my staff on several occasions. He\u2019s always available to answer any questions I have. I highly recommend this company.\u201D",
    author: 'Debbie Rowell',
  },
  {
    text: "\u201CAffordable, personable, fast and friendly! I have used many payment solutions on the market \u2014 without a doubt there is no better option if you are looking for a more personal experience. These guys take exceptional care of you.\u201D",
    author: 'Kody Miller',
  },
  {
    text: '\u201CVery trustworthy company. I truly feel that they have my best interest at heart. I recommend them to everyone that I know.\u201D',
    author: 'Jenn Stonicher',
  },
]

const comparisonRows = [
  { feature: 'Pricing Model', hd: 'Interchange-plus (transparent)', others: 'Tiered / bundled (hidden markup)' },
  { feature: 'Contracts', hd: 'Month-to-month', others: 'Multi-year with cancellation fees' },
  { feature: 'Support', hd: 'Local Lafayette team', others: '1-800 call center' },
  { feature: 'Funding Speed', hd: 'Next business day', others: '2-3 business days' },
  { feature: 'Equipment', hd: 'Modern, installed same day', others: 'Shipped, self-install' },
  { feature: 'Hidden Fees', hd: '$0', others: 'PCI fees, statement fees, batch fees...' },
]

const faqItems = [
  {
    question: 'How much does payment processing cost?',
    answer:
      'We use interchange-plus pricing, which means you pay the actual card network cost plus a small, fixed markup. No hidden fees, no mystery charges. We\'ll do a free statement analysis to show you exactly what you\'d save.',
  },
  {
    question: 'Do I have to sign a long-term contract?',
    answer:
      'No. All our agreements are month-to-month. You stay because we earn your business, not because you\'re locked in. No cancellation fees, ever.',
  },
  {
    question: 'How fast do I get my money?',
    answer:
      'We offer next-day funding as standard. Your sales from today are deposited into your bank account the next business day.',
  },
  {
    question: 'Can you set up my POS system for me?',
    answer:
      'Absolutely. We come to your business, install everything, train your staff, and make sure you\'re up and running — often the same day you sign up.',
  },
  {
    question: 'What types of payments can I accept?',
    answer:
      'All major credit and debit cards (Visa, Mastercard, Amex, Discover), contactless/NFC payments like Apple Pay and Google Pay, chip cards, and online payments.',
  },
  {
    question: 'Do you serve businesses outside of Lafayette?',
    answer:
      'Yes! While we\'re based in Lafayette, we serve businesses across all of Acadiana and Louisiana. Our local support team is always just a phone call away.',
  },
]

/* ─── Page Component ─── */

export default async function HomePage() {
  // Attempt Sanity fetch with hardcoded fallback
  let page = null
  try {
    if (client) {
      page = await client.fetch('*[_type == "homePage"][0]')
    }
  } catch (e) {
    // Sanity schema doesn't exist yet — use fallback data
  }

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ═══ HERO ═══ */}
      <section className="hero" aria-label="Hero">
        <div className="hero-grid" aria-hidden="true"></div>
        <div className="hero-orb" aria-hidden="true"></div>

        <div className="hero-inner">
          {/* Copy */}
          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge-dot" aria-hidden="true"></span>
              Lafayette, Louisiana
            </div>

            <h1>
              Honest Payments
              <em>For Local Business.</em>
            </h1>

            <p className="hero-sub">
              Lafayette&apos;s local payment processor.{' '}
              <strong>No hidden fees. No long-term contracts.</strong> Real local
              support from a team you can actually reach — when you need them.
            </p>

            <div className="hero-actions">
              <a href="/quote" className="btn-gold">
                Get a Free Quote →
              </a>
              <a href="tel:3373668550" className="btn-ghost">
                📞 337-366-8550
              </a>
            </div>
          </div>

          {/* Terminal Mockup */}
          <div className="hero-visual" aria-hidden="true">
            <div className="hero-terminal-wrap">
              {/* Floating badges */}
              <div className="t-badge tl">
                <span className="tb-dot green"></span>
                Next-day funding
              </div>
              <div className="t-badge tr">
                <span className="tb-dot gold"></span>
                $0 hidden fees
              </div>

              <div className="hero-terminal">
                <div className="terminal-header">
                  <span className="terminal-store">Johnston St Caf&eacute;</span>
                  <span className="terminal-time">12:34 PM</span>
                </div>
                <div className="terminal-items">
                  <div className="t-item">
                    <span>Cajun Lunch Special</span>
                    <span className="t-price">$14.99</span>
                  </div>
                  <div className="t-item">
                    <span>Sweet Tea ×2</span>
                    <span className="t-price">$5.00</span>
                  </div>
                  <div className="t-item">
                    <span>Bread Pudding</span>
                    <span className="t-price">$6.50</span>
                  </div>
                </div>
                <div className="terminal-total">
                  <span className="tl">Total</span>
                  <span className="ta">$26.49</span>
                </div>
                <button className="terminal-tap">💳 Tap or Insert Card</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ STATS STRIP ═══ */}
      <div className="stats-strip" aria-label="Key stats">
        <div className="stats-inner inner">
          <div className="stat-item">
            <div className="stat-num">100+</div>
            <div className="stat-label">Louisiana Merchants</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">$0</div>
            <div className="stat-label">Hidden Fees</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">24 hr</div>
            <div className="stat-label">Next-Day Funding</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">5.0 ★</div>
            <div className="stat-label">Google Rating</div>
          </div>
        </div>
      </div>

      {/* Dark → Light bridge */}
      <div className="bridge" aria-hidden="true"></div>

      {/* ═══ SERVICES ═══ */}
      <section className="services" aria-label="Our services">
        <div className="services-inner inner">
          <div className="section-header">
            <span className="section-tag light">What We Do</span>
            <h2>
              Payment Solutions
              <br />
              Built Around You
            </h2>
            <p>
              From your front counter to your online store — we handle every way
              your customers want to pay.
            </p>
          </div>

          <div className="services-grid">
            {services.map((svc) => (
              <a key={svc.href} href={svc.href} className="svc-card">
                <div className="svc-icon">{svc.icon}</div>
                <h3>{svc.title}</h3>
                <p>{svc.description}</p>
                <div className="svc-arrow">Learn more →</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROBLEM / SOLUTION ═══ */}
      <section className="problem" aria-label="Problems we solve">
        <div className="problem-inner inner">
          {/* Pain points */}
          <div>
            <span className="section-tag dark">Sound Familiar?</span>
            <h2>Tired of Your Payment Processor?</h2>
            <p className="problem-sub">
              Most small businesses in Lafayette are overpaying. Here&apos;s what
              we hear every week.
            </p>

            <div className="pain-list" role="list">
              {painPoints.map((item, i) => (
                <div key={i} className="pain-item" role="listitem">
                  <span className="pain-x" aria-hidden="true">
                    ✗
                  </span>
                  <p>
                    <strong>{item.strong}</strong>
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <span className="section-tag dark">How We Fix It</span>
            <h2>The HD Processing Difference</h2>
            <p className="problem-sub">
              We&apos;re not a 1-800 number. We&apos;re in Lafayette. Here&apos;s
              what that means for you.
            </p>

            <div className="solve-grid" role="list">
              {solutions.map((item, i) => (
                <div key={i} className="solve-item" role="listitem">
                  <span className="solve-ck" aria-hidden="true">
                    ✓
                  </span>
                  <p>
                    <strong>{item.strong}</strong>
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ INDUSTRIES ═══ */}
      <section className="industries" aria-label="Industries we serve">
        <div className="industries-inner inner">
          <div className="section-header">
            <span className="section-tag dark">Who We Serve</span>
            <h2>Built for Your Business</h2>
            <p className="industries-sub">
              From small retail shops and restaurants to service businesses across
              Acadiana — our solutions meet the unique needs of every business
              type.
            </p>
          </div>

          <div className="ind-outer">
            <div className="ind-grid">
              {industries.map((cat, i) => (
                <div
                  key={i}
                  className="ind-col"
                  style={i === industries.length - 1 ? { borderRight: 'none' } : undefined}
                >
                  <div className="ind-col-head">
                    <span className="ind-col-icon" aria-hidden="true">
                      {cat.icon}
                    </span>
                    <span className="ind-col-title">{cat.title}</span>
                  </div>
                  <ul className="ind-list">
                    {cat.items.map((item, j) => (
                      <li key={j}>
                        <a href={item.href}>{item.label}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <a href="/quote" className="ind-cta">
            Don&apos;t see your industry? We likely serve it — get a free quote →
          </a>
        </div>
      </section>

      {/* ═══ WHY HD (Features Grid) ═══ */}
      <section className="why" aria-label="Why choose HD Processing">
        <div className="why-inner inner">
          <span className="section-tag dark">Why HD Processing</span>
          <h2>
            We&apos;re Your Local
            <br />
            Payment Partner
          </h2>
          <p className="why-sub">
            Not a faceless tech company. A Lafayette-based team that shows up,
            answers the phone, and has your back.
          </p>

          <div className="why-grid">
            {whyCards.map((card, i) => (
              <div key={i} className="why-card">
                <div className="why-card-icon" aria-hidden="true">
                  {card.icon}
                </div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ COMPARISON TABLE ═══ */}
      <section className="comparison" aria-label="How we compare">
        <div className="comparison-inner inner">
          <span className="section-tag light">See the Difference</span>
          <h2>
            HD Processing vs.
            <br />
            Traditional Processors
          </h2>
          <div className="comparison-table-wrap">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th className="comparison-hd">HD Processing</th>
                  <th>Traditional Processors</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={i}>
                    <td className="comparison-feature">{row.feature}</td>
                    <td className="comparison-hd-val">
                      <span className="comparison-check" aria-hidden="true">✓</span>
                      {row.hd}
                    </td>
                    <td className="comparison-other-val">
                      <span className="comparison-x" aria-hidden="true">✗</span>
                      {row.others}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ═══ REVIEWS ═══ */}
      <section className="reviews" aria-label="Customer reviews">
        <div className="reviews-inner inner">
          <span className="section-tag light">What Our Clients Say</span>
          <h2>
            Real Reviews From
            <br />
            Real Lafayette Businesses
          </h2>
          <p className="reviews-sub">
            Don&apos;t take our word for it — hear from the merchants we serve
            every day.
          </p>

          {/* Google Rating Badge */}
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
                src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png"
                alt="Google"
                width={20}
                height={20}
                style={{ display: 'block' }}
              />
            </div>
            <div className="gmb-info">
              <span className="gmb-stars" aria-label="5 stars">
                ★★★★★
              </span>
              <div className="gmb-meta">
                5.0 <span>· 47+ Google Reviews</span>
              </div>
              <span className="gmb-cta">Read all reviews ↗</span>
            </div>
          </a>

          <div className="review-grid">
            {reviews.map((review, i) => (
              <div
                key={i}
                className="review-card"
                itemScope
                itemType="https://schema.org/Review"
              >
                <div className="review-stars" aria-label="5 out of 5 stars">
                  ★★★★★
                </div>
                <p className="review-text" itemProp="reviewBody">
                  {review.text}
                </p>
                <div className="review-author">
                  <span className="review-name" itemProp="author">
                    {review.author}
                  </span>
                  <a
                    href={GOOGLE_REVIEWS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="review-link"
                    aria-label="View this review on Google"
                  >
                    G ↗
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ACCORDION ═══ */}
      <section className="faq-wrap" aria-label="Frequently asked questions">
        <div className="inner">
          <FaqAccordion
            items={faqItems}
            variant="dark"
            label="FAQ"
            heading="Frequently Asked Questions"
          />
        </div>
      </section>

      {/* ═══ LOCATION ═══ */}
      <section className="location" aria-label="Lafayette location">
        <div className="location-inner inner">
          <div>
            <span className="section-tag dark">Serving Lafayette, Louisiana</span>
            <h2>
              Your Local
              <br />
              Payment Team
            </h2>
            <p className="location-body">
              We&apos;re based right here in Lafayette at{' '}
              <strong>1027 Johnston St</strong>. When you need help — we come to
              you. From the restaurants on Johnston Street to the shops in River
              Ranch and the service businesses across Acadiana, HD Processing is
              the local team that shows up.
            </p>

            <div className="location-details">
              <div className="loc-detail">
                <div className="ld-label">Address</div>
                <div className="ld-val">
                  <a
                    href="https://maps.google.com/?q=HD+Processing+1027+Johnston+St+Lafayette+LA"
                    target="_blank"
                    rel="noopener"
                  >
                    1027 Johnston St
                    <br />
                    Lafayette, LA 70501
                  </a>
                </div>
              </div>
              <div className="loc-detail">
                <div className="ld-label">Phone</div>
                <div className="ld-val">
                  <a href="tel:3373668550">337-366-8550</a>
                </div>
              </div>
              <div className="loc-detail">
                <div className="ld-label">Mon – Fri</div>
                <div className="ld-val">8:00 AM – 6:00 PM</div>
              </div>
              <div className="loc-detail">
                <div className="ld-label">Saturday</div>
                <div className="ld-val">9:00 AM – 2:00 PM</div>
              </div>
            </div>
          </div>

          <div>
            <div className="map-wrap">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.7937!2d-92.0193!3d30.2041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86249d41ec5883cf%3A0x531d9a9ab15a1418!2sHD%20Processing!5e0!3m2!1sen!2sus!4v1"
                width="600"
                height="380"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="HD Processing location — 1027 Johnston St, Lafayette, LA"
              ></iframe>
            </div>
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="gmb-badge"
              aria-label="View HD Processing on Google"
            >
              <div className="gmb-g" aria-hidden="true">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png"
                  alt="Google"
                  width={20}
                  height={20}
                  style={{ display: 'block' }}
                />
              </div>
              <div className="gmb-info">
                <span className="gmb-stars" aria-label="5 stars">
                  ★★★★★
                </span>
                <div className="gmb-meta">
                  5.0 · <span>View us on Google Maps</span>
                </div>
                <span className="gmb-cta">See directions &amp; reviews ↗</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section className="final-cta" aria-label="Get a free quote">
        <div className="final-cta-inner">
          <h2>
            Stop Overpaying.
            <br />
            Start Local.
          </h2>
          <p>
            Takes 2 minutes. Free quote. No obligation. We&apos;ll call you
            within one business hour.
          </p>
          <a href="/quote" className="final-cta-btn">
            Get My Free Quote →
          </a>
          <span className="final-cta-phone">
            Prefer to call?{' '}
            <a href="tel:3373668550">337-366-8550</a> — we pick up.
          </span>
        </div>
      </section>
    </>
  )
}
