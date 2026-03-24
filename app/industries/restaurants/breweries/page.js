import Link from 'next/link'
import IndustryFaq from '@/components/IndustryFaq'

export const revalidate = 60

export const metadata = {
  title: 'Payment Processing for Breweries & Taprooms in Lafayette, LA | HD Processing',
  description:
    'Credit card processing and POS systems for Lafayette breweries and taprooms. Tab management, bar-specific workflows, same-day funding. Local Acadiana team. No contracts.',
  alternates: { canonical: 'https://hdprocessing.com/industries/restaurants/breweries' },
  openGraph: {
    title: 'Payment Processing for Breweries & Taprooms in Lafayette, LA | HD Processing',
    description:
      'Credit card processing and POS systems for Lafayette breweries and taprooms. Tab management, bar-specific workflows, same-day funding. Local Acadiana team. No contracts.',
    url: 'https://hdprocessing.com/industries/restaurants/breweries',
    siteName: 'HD Processing',
    locale: 'en_US',
    type: 'website',
  },
}

const GOOGLE_REVIEWS_URL =
  'https://www.google.com/search?q=hd+processing#lrd=0x86249d41ec5883cf:0x531d9a9ab15a1418,1,,,,1'

const faqItems = [
  {
    question: 'Can HD Processing set up open tab management for a Lafayette brewery?',
    answer:
      'Yes \u2014 open tab management with card pre-authorization is a standard feature on HD Processing bar POS systems for Lafayette breweries and taprooms. When a customer opens a tab, the card is pre-authorized for a set amount. Additional items are added to the tab through the service. When the tab closes, the final amount is charged and the pre-authorization hold is released automatically.',
  },
  {
    question: 'Can a Lafayette brewery sell merchandise and beer on the same POS system?',
    answer:
      'Yes \u2014 HD Processing configures unified POS systems for Lafayette breweries that ring up pints, flights, crowlers, cans, and merchandise on the same system. All transactions consolidate into a single end-of-night batch and one daily settlement. No separate readers for different product types, no separate reconciliation at close.',
  },
  {
    question: 'Does HD Processing offer same-day funding for Lafayette brewery and taproom sales?',
    answer:
      'Yes \u2014 HD Processing offers same-day funding for Lafayette brewery accounts. Your weekend taproom revenue settles to your bank account the same business day. For a brewery processing several thousand dollars over a Friday-Saturday, having those funds available Monday morning makes supply ordering and payroll significantly easier.',
  },
  {
    question: 'What bar POS systems does HD Processing install for Lafayette taprooms?',
    answer:
      'HD Processing installs bar-specific POS systems for Lafayette taprooms configured for the pace and workflow of a busy craft beer bar \u2014 multi-tab management, card pre-authorization, product categories for draft, cans, crowlers, and merchandise, and end-of-night batch settlement. We configure the system for your specific bar layout before we arrive.',
  },
  {
    question: 'Does HD Processing require a long-term contract for Lafayette breweries?',
    answer:
      'No \u2014 all HD Processing accounts are month-to-month with no early termination fees. Lafayette brewery owners are never locked in. If the service isn\u2019t the right fit for your taproom, you can leave without penalty. Over 97% of our Acadiana merchants stay because the service earns it every month.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LocalBusiness', 'FinancialService'],
      '@id': 'https://hdprocessing.com/#business',
      name: 'HD Processing',
      telephone: '+13373668550',
      email: 'info@hdprocessing.com',
      url: 'https://hdprocessing.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '1027 Johnston St',
        addressLocality: 'Lafayette',
        addressRegion: 'LA',
        postalCode: '70501',
        addressCountry: 'US',
      },
      geo: { '@type': 'GeoCoordinates', latitude: 30.2241, longitude: -92.0198 },
      areaServed: ['Lafayette, LA', 'Acadiana', 'Broussard, LA', 'Youngsville, LA', 'Scott, LA', 'Breaux Bridge, LA', 'New Iberia, LA', 'Opelousas, LA'],
    },
    {
      '@type': 'Service',
      name: 'Brewery & Taproom Payment Processing in Lafayette, LA',
      description:
        'HD Processing provides credit card processing, bar POS systems, and payment solutions for breweries and taprooms in Lafayette, LA and Acadiana. Tab management, same-day funding, interchange-plus pricing, no long-term contracts.',
      provider: { '@id': 'https://hdprocessing.com/#business' },
      areaServed: 'Lafayette, LA',
      audience: { '@type': 'Audience', audienceType: 'Brewery and taproom owners in Lafayette, LA and Acadiana' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://hdprocessing.com/' },
        { '@type': 'ListItem', position: 2, name: 'Industries', item: 'https://hdprocessing.com/industries' },
        { '@type': 'ListItem', position: 3, name: 'Restaurants', item: 'https://hdprocessing.com/industries/restaurants' },
        { '@type': 'ListItem', position: 4, name: 'Breweries', item: 'https://hdprocessing.com/industries/restaurants/breweries' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqItems.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    },
  ],
}

export default function BreweriesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ══ HERO ══ */}
      <section className="hero" style={{ padding: '72px 24px 88px', overflow: 'visible' }}>
        <div className="hero-inner">
          <div className="hero-content">
            <h1>
              Payment Processing for Breweries &amp; Taprooms in{' '}
              <span className="gold">Lafayette, LA</span>
            </h1>
            <p className="hero-sub">
              Lafayette craft breweries move fast on weekends &mdash; open tabs, crowler fills, merchandise sales, and food truck tie-ins all happening at once. Your payment system needs to handle all of it without slowing down the bar. HD Processing gives Acadiana breweries{' '}
              <strong>tab management, bar-specific POS workflows, and same-day funding</strong> with a local team on call. No long-term contracts.
            </p>
            <Link href="/quote" className="hero-cta">Start Saving Money Today &rarr;</Link>
          </div>

          {/* POS Mockup */}
          <div className="mockup-wrap">
            <div className="mockup-card">
              <div className="mockup-label">Open Tab &mdash; Table 4</div>
              <div className="mockup-rows">
                <div className="mockup-row"><span className="mockup-key">Pint &mdash; Pale Ale</span><span className="mockup-val">$7.00</span></div>
                <div className="mockup-row"><span className="mockup-key">Pint &mdash; Stout</span><span className="mockup-val">$7.00</span></div>
                <div className="mockup-row"><span className="mockup-key">Crowler &mdash; IPA</span><span className="mockup-val">$12.00</span></div>
                <div className="mockup-row"><span className="mockup-key">Merch Pint Glass</span><span className="mockup-val">$15.00</span></div>
              </div>
              <div className="mockup-row" style={{ borderTop: '1px solid rgba(255,255,255,.08)', marginTop: 8, paddingTop: 10 }}>
                <span className="mockup-key" style={{ fontWeight: 600 }}>Running Total</span>
                <span className="mockup-val" style={{ color: 'var(--gold)', fontWeight: 700 }}>$41.00</span>
              </div>
            </div>

            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-google-badge"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
                alt="Google Reviews HD Processing Lafayette LA"
              />
              <div className="hgb-divider"></div>
              <div>
                <div className="hgb-stars">&starf;&starf;&starf;&starf;&starf;</div>
                <div className="hgb-sub">Google Reviews</div>
              </div>
              <div>
                <div className="hgb-text">5.0</div>
                <div className="hgb-sub">Lafayette, LA</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ══ BREADCRUMB ══ */}
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <div className="breadcrumb-inner">
          <Link href="/">Home</Link>
          <span>&rsaquo;</span>
          <Link href="/industries">Industries</Link>
          <span>&rsaquo;</span>
          <Link href="/industries/restaurants">Restaurants</Link>
          <span>&rsaquo;</span>
          <span className="current">Breweries</span>
        </div>
      </nav>

      {/* ══ SUB-NAV ══ */}
      <div className="sub-nav">
        <div className="sub-nav-inner">
          <span className="sub-nav-label">Restaurants</span>
          <Link href="/industries/restaurants" className="sub-nav-link">All Restaurants</Link>
          <Link href="/industries/restaurants/coffee-tea-shops" className="sub-nav-link">Coffee &amp; Tea Shops</Link>
          <Link href="/industries/restaurants/pizzerias-sandwich-shops" className="sub-nav-link">Pizzerias &amp; Sandwich Shops</Link>
          <Link href="/industries/restaurants/bakeries" className="sub-nav-link">Bakeries</Link>
          <Link href="/industries/restaurants/breweries" className="sub-nav-link active">Breweries</Link>
          <Link href="/industries/restaurants/delis-meat-markets" className="sub-nav-link">Delis &amp; Meat Markets</Link>
        </div>
      </div>

      {/* ══ PAIN POINTS (light) ══ */}
      <section className="pain-section">
        <div className="section-inner">
          <div className="section-label">The Problem</div>
          <h2 className="on-light">Bar POS Problems That Cost Lafayette <span className="gold">Breweries</span></h2>
          <div className="pain-grid">
            <div className="pain-card">
              <div className="pain-num">01</div>
              <h3>Tab Management Is a Mess</h3>
              <p>A Lafayette taproom running 30 open tabs on a Saturday afternoon needs a bar POS that tracks every tab cleanly &mdash; not sticky notes, not memory, and definitely not a system that crashes when it gets busy.</p>
            </div>
            <div className="pain-card">
              <div className="pain-num">02</div>
              <h3>No Way to Sell Merchandise and Beer on the Same System</h3>
              <p>Crowlers, cans to-go, branded glassware, and branded merchandise need to ring up alongside pints and flights &mdash; without a separate square reader and a separate reconciliation at close.</p>
            </div>
            <div className="pain-card">
              <div className="pain-num">03</div>
              <h3>Card Pre-Authorization for Tabs</h3>
              <p>Running a tab without a card pre-authorization is a liability. A good bar POS pre-auths the card when the tab opens and releases the hold when it closes &mdash; automatically, every time.</p>
            </div>
            <div className="pain-card">
              <div className="pain-num">04</div>
              <h3>Waiting Days for Weekend Taproom Revenue</h3>
              <p>A busy Lafayette taproom processing $6,000 over a weekend shouldn&apos;t wait until Wednesday to access it. Hop orders, supply runs, and staff payroll don&apos;t wait for your processor&apos;s settlement window.</p>
            </div>
          </div>
          <div className="section-cta"><Link href="/quote" className="btn-black">Start Saving Money Today &rarr;</Link></div>
        </div>
      </section>

      {/* ══ SOLUTION (dark) ══ */}
      <section className="solution-section">
        <div className="section-inner">
          <div className="ind-solution-grid">
            <div className="solution-content">
              <div className="section-label">We Understand &mdash; And We Have a Plan</div>
              <h2 style={{ color: 'var(--white)' }}>
                Bar POS Built for Lafayette <span className="gold">Breweries.</span>
              </h2>
              <p className="on-dark">
                HD Processing configures bar-specific POS systems for Lafayette breweries and taprooms &mdash; open tab management with card pre-authorization, merchandise and crowler sales on the same system, and end-of-night batch that closes cleanly. We configure it for your specific taproom layout, whether you have a single bar line or multiple stations.
              </p>
              <p className="on-dark">
                Same-day funding means your weekend revenue is available Monday morning. Interchange-plus pricing means you pay wholesale rates on every pint, crowler, and merch sale. And your local Lafayette rep picks up the phone when your system goes down on a Friday before opening &mdash; not a ticket that closes itself in 48 hours. Over 500 Acadiana businesses trust HD Processing, and our 97% retention rate is because we show up.
              </p>
            </div>
            <div className="solution-photo-wrap">
              <div className="solution-photo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://assets.cdn.filesafe.space/yNgtcVB50ZOTKtcYV8Lh/media/69c1ff253b3a5862ce17ed66.jpg"
                  alt="HD Processing team member — merchant services for Lafayette businesses"
                  loading="lazy"
                />
              </div>
              <div className="solution-caption">
                <div className="solution-caption-text">Locally owned &amp; operated in Lafayette, LA since 2019</div>
              </div>
            </div>
          </div>
          <div className="section-cta">
            <Link href="/quote" className="btn-gold">Start Saving Money Today &rarr;</Link>
          </div>
        </div>
      </section>

      {/* ══ FEATURES (light) ══ */}
      <section className="features-section">
        <div className="section-inner">
          <div className="section-label">What You Get</div>
          <h2 className="on-light">Built for <span className="gold">Lafayette Taproom Operations</span></h2>
          <div className="ind-features-grid">
            <div className="ind-feature-card">
              <div className="ind-feature-icon">🍺</div>
              <h3>Open Tab Management</h3>
              <p>Card pre-authorization when the tab opens, automatic hold release at close. Manage 30+ tabs simultaneously without confusion.</p>
            </div>
            <div className="ind-feature-card">
              <div className="ind-feature-icon">🛍️</div>
              <h3>Unified Merchandise + Bar Sales</h3>
              <p>Crowlers, cans, glassware, and apparel ring up on the same system as your pints and flights. One batch, one report at close.</p>
            </div>
            <div className="ind-feature-card">
              <div className="ind-feature-icon">📱</div>
              <h3>Tap-to-Pay + Mobile Wallets</h3>
              <p>Customers pay with Apple Pay, Google Pay, or a tap of their card. Faster than chip, no fumbling, contactless at the bar.</p>
            </div>
            <div className="ind-feature-card">
              <div className="ind-feature-icon">⚡</div>
              <h3>Same-Day Funding</h3>
              <p>Weekend taproom revenue hits your Lafayette bank account Monday. Place supply orders and cover payroll without floating cash.</p>
            </div>
            <div className="ind-feature-card">
              <div className="ind-feature-icon">📊</div>
              <h3>Sales by Product</h3>
              <p>See which beers moved, what merchandise sold, and your busiest service windows &mdash; all from your phone after close.</p>
            </div>
            <div className="ind-feature-card">
              <div className="ind-feature-icon">🛠️</div>
              <h3>On-Site Setup for Your Layout</h3>
              <p>We come to your Lafayette brewery, configure the POS for your bar stations, and train your bartenders before you open.</p>
            </div>
          </div>
          <div className="section-cta"><Link href="/quote" className="btn-gold">Start Saving Money Today &rarr;</Link></div>
        </div>
      </section>

      {/* ══ FAQ (dark) ══ */}
      <section className="ind-faq-section">
        <div className="section-inner">
          <div className="section-label">Common Questions</div>
          <h2 style={{ color: 'var(--white)' }}>Brewery &amp; Taproom Payment <span className="gold">FAQ</span></h2>
          <IndustryFaq items={faqItems} />
          <div className="section-cta"><Link href="/quote" className="btn-gold">Start Saving Money Today &rarr;</Link></div>
        </div>
      </section>

      {/* ══ OTHER RESTAURANT TYPES (light) ══ */}
      <section className="other-industries">
        <div className="section-inner">
          <div className="section-label">Also Serving</div>
          <h2 className="on-light">Other Restaurant Types We <span className="gold">Serve in Lafayette</span></h2>
          <div className="other-grid">
            <Link href="/industries/restaurants/coffee-tea-shops" className="other-card">
              <span className="other-card-icon">☕</span>
              <h3>Coffee &amp; Tea Shops</h3>
              <p>Fast-paced counter service, loyalty integrations, and mobile payment support for Lafayette coffee shops and tea houses.</p>
              <span className="other-card-arrow">See coffee shop solutions &rarr;</span>
            </Link>
            <Link href="/industries/restaurants/pizzerias-sandwich-shops" className="other-card">
              <span className="other-card-icon">🍕</span>
              <h3>Pizzerias &amp; Sandwich Shops</h3>
              <p>Phone-in orders, delivery integration, and fast checkout for Lafayette pizza and sandwich counters.</p>
              <span className="other-card-arrow">See pizzeria solutions &rarr;</span>
            </Link>
            <Link href="/industries/restaurants/bakeries" className="other-card">
              <span className="other-card-icon">🥐</span>
              <h3>Bakeries</h3>
              <p>Simple counter checkout, daily batch settlement, and mobile readers for farmers markets and pop-ups across Acadiana.</p>
              <span className="other-card-arrow">See bakery solutions &rarr;</span>
            </Link>
            <Link href="/industries/restaurants/delis-meat-markets" className="other-card">
              <span className="other-card-icon">🥩</span>
              <h3>Delis &amp; Meat Markets</h3>
              <p>Weight-based pricing, quick checkout, and inventory tracking for Lafayette delis and specialty meat markets.</p>
              <span className="other-card-arrow">See deli solutions &rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ══ BIZ INFO ══ */}
      <section className="biz-section">
        <div className="section-inner">
          <div className="section-label">Find Us</div>
          <h2 className="on-light">Locally Owned in <span className="gold">Lafayette, LA</span></h2>
          <div className="biz-grid">
            <div className="biz-info">
              <div className="biz-info-items">
                <div className="biz-info-item">
                  <div className="biz-info-icon">📍</div>
                  <div>
                    <div className="biz-info-label">Address</div>
                    <span className="biz-info-value">1027 Johnston St, Lafayette, LA 70501</span>
                    <div className="biz-info-note">By appointment &mdash; we also come to you</div>
                  </div>
                </div>
                <div className="biz-info-item">
                  <div className="biz-info-icon">📞</div>
                  <div>
                    <div className="biz-info-label">Phone</div>
                    <a href="tel:+13373668550" className="biz-info-value">337.366.8550</a>
                    <div className="biz-info-note">Mon&ndash;Fri 8am&ndash;6pm &middot; Sat 9am&ndash;1pm</div>
                  </div>
                </div>
                <div className="biz-info-item">
                  <div className="biz-info-icon">✉️</div>
                  <div>
                    <div className="biz-info-label">Email</div>
                    <a href="mailto:info@hdprocessing.com" className="biz-info-value">info@hdprocessing.com</a>
                    <div className="biz-info-note">We respond within one business day</div>
                  </div>
                </div>
              </div>
              <div className="biz-hours">
                <div className="biz-hours-label">Business Hours</div>
                <div className="biz-hours-row"><span className="biz-hours-day">Monday &ndash; Friday</span><span className="biz-hours-time">8:00 AM &ndash; 6:00 PM</span></div>
                <div className="biz-hours-row"><span className="biz-hours-day">Saturday</span><span className="biz-hours-time">9:00 AM &ndash; 1:00 PM</span></div>
                <div className="biz-hours-row"><span className="biz-hours-day">Sunday</span><span className="biz-hours-time closed">Closed</span></div>
              </div>
              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="biz-google-badge"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
                  alt="Google Reviews HD Processing Lafayette LA"
                  className="gbadge-logo"
                />
                <div>
                  <div className="gbadge-stars">&starf;&starf;&starf;&starf;&starf;</div>
                  <div className="gbadge-text">See our Google Reviews</div>
                </div>
              </a>
            </div>
            <div className="biz-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.0!2d-92.0198!3d30.2241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86249d41ec5883cf%3A0x531d9a9ab15a1418!2sHD%20Processing!5e0!3m2!1sen!2sus!4v1"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="HD Processing — Lafayette, LA"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* ══ GOLD CTA ══ */}
      <section className="final-cta">
        <div className="final-cta-inner">
          <h2>Your Brewery Deserves<br />Better Rates.</h2>
          <p>
            Send us your current statement and we&apos;ll show you exactly how much you&apos;d save. Free analysis, no obligation, no contracts.
          </p>
          <Link href="/quote" className="final-cta-btn">See What I&apos;d Pay &rarr;</Link>
          <div className="final-cta-sub">No contracts. No commitments. Local Lafayette team.</div>
        </div>
      </section>
    </>
  )
}
