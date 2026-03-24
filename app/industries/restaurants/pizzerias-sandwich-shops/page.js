import Link from 'next/link'
import IndustryFaq from '@/components/IndustryFaq'

export const revalidate = 60

export const metadata = {
  title: 'Payment Processing for Pizzerias & Sandwich Shops in Lafayette, LA | HD Processing',
  description:
    'Credit card processing and POS systems for Lafayette pizzerias and sandwich shops. Phone orders, delivery integration, fast counter checkout. Same-day funding. No contracts.',
  alternates: { canonical: 'https://hdprocessing.com/industries/restaurants/pizzerias-sandwich-shops' },
  openGraph: {
    title: 'Payment Processing for Pizzerias & Sandwich Shops in Lafayette, LA | HD Processing',
    description:
      'Credit card processing and POS systems for Lafayette pizzerias and sandwich shops. Phone orders, delivery integration, fast counter checkout. Same-day funding. No contracts.',
    url: 'https://hdprocessing.com/industries/restaurants/pizzerias-sandwich-shops',
    siteName: 'HD Processing',
    locale: 'en_US',
    type: 'website',
  },
}

const GOOGLE_REVIEWS_URL =
  'https://www.google.com/search?q=hd+processing#lrd=0x86249d41ec5883cf:0x531d9a9ab15a1418,1,,,,1'

const faqItems = [
  {
    question: 'Can HD Processing set up payment links for phone orders at a Lafayette pizzeria?',
    answer:
      'Yes \u2014 payment links are a core feature for Lafayette pizzerias and sandwich shops that take phone orders. When a customer calls in, you generate a payment link and text it to them. They pay before pickup, which eliminates no-shows and removes the security risk of taking card numbers over the phone. The payment settles to your account the same business day.',
  },
  {
    question: 'Does HD Processing offer mobile card readers for pizza delivery drivers in Lafayette?',
    answer:
      'Yes \u2014 HD Processing provides compact wireless mobile readers that your delivery drivers carry with them. Customers can pay by card, tap-to-pay, Apple Pay, or Google Pay at the door. Drivers don\u2019t handle cash and tips can be added at the point of delivery. All transactions consolidate into your daily batch.',
  },
  {
    question: 'How does HD Processing handle multi-channel orders for Lafayette sandwich shops?',
    answer:
      'HD Processing consolidates your counter POS, phone order payment links, and mobile delivery payments into a single account and daily batch. Your end-of-night settlement is one report \u2014 not separate reconciliations from three different systems. Our Lafayette team configures the integration during on-site installation.',
  },
  {
    question: 'What POS system does HD Processing install for pizzerias in Lafayette, LA?',
    answer:
      'HD Processing installs counter POS systems configured for pizza and sandwich shop workflows \u2014 order entry, queue management, kitchen printing, and fast checkout. We configure your menu, pricing, and modifiers before installation. Most Lafayette pizzerias and sandwich shops are fully live the same day we visit.',
  },
  {
    question: 'Does HD Processing offer same-day funding for Lafayette pizzerias?',
    answer:
      'Yes \u2014 HD Processing offers same-day funding for Lafayette pizzeria accounts. Your Friday and Saturday night revenue settles to your bank account the same business day. For pizzerias processing several thousand dollars over a weekend, having those funds available Monday morning makes supply reordering and cash flow management significantly easier.',
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
      name: 'Payment Processing for Pizzerias & Sandwich Shops in Lafayette, LA',
      description:
        'HD Processing provides credit card processing, POS systems, phone order payment links, mobile delivery readers, and same-day funding for pizzerias and sandwich shops in Lafayette, LA and Acadiana. Interchange-plus pricing, no long-term contracts.',
      provider: { '@id': 'https://hdprocessing.com/#business' },
      areaServed: 'Lafayette, LA',
      audience: { '@type': 'Audience', audienceType: 'Pizzeria and sandwich shop owners in Lafayette, LA and Acadiana' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://hdprocessing.com/' },
        { '@type': 'ListItem', position: 2, name: 'Industries', item: 'https://hdprocessing.com/industries' },
        { '@type': 'ListItem', position: 3, name: 'Restaurants', item: 'https://hdprocessing.com/industries/restaurants' },
        { '@type': 'ListItem', position: 4, name: 'Pizzerias & Sandwich Shops', item: 'https://hdprocessing.com/industries/restaurants/pizzerias-sandwich-shops' },
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

export default function PizzeriasSandwichShopsPage() {
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
              Payment Processing for Pizzerias &amp; Sandwich Shops in{' '}
              <span className="gold">Lafayette</span>
            </h1>
            <p className="hero-sub">
              Lafayette pizzerias and sandwich shops take orders by phone, online, and at the counter &mdash; sometimes all at once. Your payment system needs to handle every channel cleanly without slowing down the kitchen. HD Processing gives Acadiana pizza and sandwich businesses{' '}
              <strong>multi-channel order management, fast counter checkout, and same-day funding</strong> with a local team on call. No long-term contracts.
            </p>
            <Link href="/quote" className="hero-cta">Start Saving Money Today &rarr;</Link>
          </div>

          {/* POS Mockup */}
          <div className="mockup-wrap">
            <div className="mockup-card">
              <div className="mockup-label">Order #47 &mdash; Pickup</div>
              <div className="mockup-rows">
                <div className="mockup-row"><span className="mockup-key">Large Boudin Pizza</span><span className="mockup-val">$22.00</span></div>
                <div className="mockup-row"><span className="mockup-key">Italian Sub</span><span className="mockup-val">$12.00</span></div>
                <div className="mockup-row"><span className="mockup-key">2 Drinks</span><span className="mockup-val">$5.00</span></div>
                <div className="mockup-row"><span className="mockup-key">Tax (9.45%)</span><span className="mockup-val">$3.70</span></div>
              </div>
              <div className="mockup-row" style={{ marginTop: 10, borderTop: '1px solid rgba(255,255,255,.1)', paddingTop: 10 }}>
                <span className="mockup-key" style={{ color: 'var(--gold)', fontWeight: 600 }}>Total</span>
                <span className="mockup-val" style={{ color: 'var(--gold)', fontWeight: 600 }}>$42.70</span>
              </div>
              <button className="mockup-btn" style={{ background: '#22c55e', marginTop: 14 }}>Card on File &mdash; CHARGED &checkmark;</button>
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
          <span className="current">Pizzerias &amp; Sandwich Shops</span>
        </div>
      </nav>

      {/* ══ SUB-NAV ══ */}
      <div className="sub-nav">
        <div className="sub-nav-inner">
          <span className="sub-nav-label">Restaurants</span>
          <Link href="/industries/restaurants" className="sub-nav-link">All Restaurants</Link>
          <Link href="/industries/restaurants/coffee-tea-shops" className="sub-nav-link">Coffee &amp; Tea Shops</Link>
          <Link href="/industries/restaurants/pizzerias-sandwich-shops" className="sub-nav-link active">Pizzerias &amp; Sandwich Shops</Link>
          <Link href="/industries/restaurants/bakeries" className="sub-nav-link">Bakeries</Link>
          <Link href="/industries/restaurants/breweries" className="sub-nav-link">Breweries</Link>
          <Link href="/industries/restaurants/delis-meat-markets" className="sub-nav-link">Delis &amp; Meat Markets</Link>
        </div>
      </div>

      {/* ══ PAIN POINTS (light) ══ */}
      <section className="pain-section">
        <div className="section-inner">
          <div className="section-label">The Problem</div>
          <h2 className="on-light">Payment Problems That Slow Down <span className="gold">Your Line</span></h2>
          <div className="pain-grid">
            <div className="pain-card">
              <div className="pain-num">01</div>
              <h3>Phone Orders With No Payment Link</h3>
              <p>A Lafayette pizzeria taking phone orders is either asking for a card number over the phone &mdash; a security risk &mdash; or collecting at pickup and dealing with no-shows. A payment link sent by text at the time of order solves both problems instantly.</p>
            </div>
            <div className="pain-card">
              <div className="pain-num">02</div>
              <h3>No Integration Between Online and In-Person</h3>
              <p>When your online orders, phone orders, and counter transactions all live in separate systems, your end-of-night reconciliation is a nightmare. Lafayette sandwich shops need everything in one place.</p>
            </div>
            <div className="pain-card">
              <div className="pain-num">03</div>
              <h3>Delivery Drivers Can&apos;t Take Cards</h3>
              <p>A Lafayette pizza delivery driver who can only accept cash in 2025 is leaving tips on the table and losing customers who don&apos;t carry it. A mobile reader that fits in a pocket accepts any card in under two seconds.</p>
            </div>
            <div className="pain-card">
              <div className="pain-num">04</div>
              <h3>Waiting Days for Busy Weekend Revenue</h3>
              <p>Friday and Saturday nights are your biggest volume. A Lafayette pizzeria processing $3,000 on a Saturday shouldn&apos;t wait until Tuesday to see it. Same-day funding means you can reorder supplies first thing Monday morning.</p>
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
                500+ Acadiana Businesses Run <span className="gold">Smoother With HD.</span>
              </h2>
              <p className="on-dark">
                HD Processing builds payment systems for the real workflow of a Lafayette pizzeria or sandwich shop &mdash; not a generic retail setup retrofitted to food service. We configure phone order payment links, counter POS with order management, and mobile readers for delivery drivers, all tied to the same account with one end-of-night batch.
              </p>
              <p className="on-dark">
                Same-day funding means your weekend revenue is in your account Monday morning. Interchange-plus pricing means you pay wholesale rates, not flat percentages designed to benefit your processor. And when something breaks on a Friday night at 6pm, your local Lafayette team picks up &mdash; not a national support queue. Over 500 Acadiana businesses trust us, and our 97% retention rate speaks for itself.
              </p>
            </div>
            <div className="solution-photo-wrap">
              <div className="solution-photo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://assets.cdn.filesafe.space/yNgtcVB50ZOTKtcYV8Lh/media/69c1ff133e56b98263a4589b.jpg"
                  alt="HD Processing team member with Lafayette pizzeria owner"
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
          <h2 className="on-light">Built for <span className="gold">Lafayette Pizza &amp; Sandwich Counter Service</span></h2>
          <div className="ind-features-grid">
            <div className="ind-feature-card">
              <div className="ind-feature-icon">🔗</div>
              <h3>Phone Order Payment Links</h3>
              <p>Text a payment link when a customer calls in their order. They pay before pickup &mdash; no no-shows, no card numbers over the phone.</p>
            </div>
            <div className="ind-feature-card">
              <div className="ind-feature-icon">📦</div>
              <h3>Order Management</h3>
              <p>Counter POS with order queuing, status tracking, and kitchen printing so your staff stays organized during a Friday dinner rush.</p>
            </div>
            <div className="ind-feature-card">
              <div className="ind-feature-icon">🚗</div>
              <h3>Mobile Readers for Delivery</h3>
              <p>Compact wireless readers that fit in a pocket &mdash; your drivers accept any card, tap-to-pay, or mobile wallet at the door.</p>
            </div>
            <div className="ind-feature-card">
              <div className="ind-feature-icon">⚡</div>
              <h3>Same-Day Funding</h3>
              <p>Weekend pizza revenue hits your Lafayette bank account the same business day. Reorder supplies Monday morning without waiting on funds.</p>
            </div>
            <div className="ind-feature-card">
              <div className="ind-feature-icon">💰</div>
              <h3>Interchange-Plus Pricing</h3>
              <p>You pay the actual wholesale rate plus a small fixed markup. No flat percentages inflated to benefit your processor on every $40 pizza order.</p>
            </div>
            <div className="ind-feature-card">
              <div className="ind-feature-icon">🛠️</div>
              <h3>On-Site Setup Always</h3>
              <p>We come to your Lafayette location, configure your counter POS, delivery readers, and payment links, and train your team before we leave.</p>
            </div>
          </div>
          <div className="section-cta"><Link href="/quote" className="btn-gold">Start Saving Money Today &rarr;</Link></div>
        </div>
      </section>

      {/* ══ OTHER RESTAURANT TYPES (dark) ══ */}
      <section className="subpages-section">
        <div className="section-inner">
          <div className="section-label">Browse By Business Type</div>
          <h2 style={{ color: 'var(--white)' }}>Other Restaurant Types We <span className="gold">Serve in Lafayette</span></h2>
          <div className="subpages-grid">
            <Link href="/industries/restaurants/coffee-tea-shops" className="subpage-card">
              <span className="subpage-card-icon">☕</span>
              <h3>Coffee &amp; Tea Shops</h3>
              <p>Fast-paced counter service, loyalty integrations, and mobile payment support for Lafayette coffee shops and tea houses.</p>
              <span className="subpage-card-arrow">Learn more &rarr;</span>
            </Link>
            <Link href="/industries/restaurants/bakeries" className="subpage-card">
              <span className="subpage-card-icon">🥐</span>
              <h3>Bakeries</h3>
              <p>Simple counter checkout, daily batch settlement, and mobile readers for farmers markets and pop-ups across Acadiana.</p>
              <span className="subpage-card-arrow">Learn more &rarr;</span>
            </Link>
            <Link href="/industries/restaurants/breweries" className="subpage-card">
              <span className="subpage-card-icon">🍺</span>
              <h3>Breweries</h3>
              <p>Tab management, bar-specific POS workflows, and same-day funding for Lafayette craft breweries and taprooms.</p>
              <span className="subpage-card-arrow">Learn more &rarr;</span>
            </Link>
            <Link href="/industries/restaurants/delis-meat-markets" className="subpage-card">
              <span className="subpage-card-icon">🥩</span>
              <h3>Delis &amp; Meat Markets</h3>
              <p>Weight-based pricing, quick checkout, and inventory tracking for Lafayette delis and specialty meat markets.</p>
              <span className="subpage-card-arrow">Learn more &rarr;</span>
            </Link>
            <Link href="/quote" className="subpage-card dashed">
              <span className="subpage-card-icon">💬</span>
              <h3>Don&apos;t See Your Business?</h3>
              <p>Tell us what you run and we&apos;ll find the right solution for you.</p>
              <span className="subpage-card-arrow">Talk to us &rarr;</span>
            </Link>
          </div>
          <div className="section-cta"><Link href="/quote" className="btn-gold">Start Saving Money Today &rarr;</Link></div>
        </div>
      </section>

      {/* ══ FAQ (dark) ══ */}
      <section className="ind-faq-section">
        <div className="section-inner">
          <div className="section-label">Common Questions</div>
          <h2 style={{ color: 'var(--white)' }}>Pizzeria &amp; Sandwich Shop Payment <span className="gold">FAQ</span></h2>
          <IndustryFaq items={faqItems} />
          <div className="section-cta"><Link href="/quote" className="btn-gold">Start Saving Money Today &rarr;</Link></div>
        </div>
      </section>

      {/* ══ OTHER INDUSTRIES (light) ══ */}
      <section className="other-industries">
        <div className="section-inner">
          <div className="section-label">Also Serving</div>
          <h2 className="on-light">Other Industries We <span className="gold">Serve in Lafayette</span></h2>
          <div className="other-grid">
            <Link href="/industries/retail" className="other-card">
              <span className="other-card-icon">🛍️</span>
              <h3>Retail</h3>
              <p>Clothing stores, grocery, convenience stores, gift shops, book stores, and general retail across Lafayette and Acadiana.</p>
              <span className="other-card-arrow">See retail solutions &rarr;</span>
            </Link>
            <Link href="/industries/services" className="other-card">
              <span className="other-card-icon">💆</span>
              <h3>Services</h3>
              <p>Hair salons, spas, mechanic shops, gyms, healthcare providers, doctors, lawyers, and professionals in Lafayette.</p>
              <span className="other-card-arrow">See service solutions &rarr;</span>
            </Link>
            <Link href="/industries/online" className="other-card">
              <span className="other-card-icon">🛒</span>
              <h3>Online</h3>
              <p>E-commerce stores, online retailers, service providers, and subscription businesses selling to customers across Acadiana and beyond.</p>
              <span className="other-card-arrow">See online solutions &rarr;</span>
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
          <h2>Your Pizzeria Deserves<br />Better Rates.</h2>
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
