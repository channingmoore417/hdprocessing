import Link from 'next/link'
import IndustryFaq from '@/components/IndustryFaq'

export const revalidate = 60

export const metadata = {
  title: 'Payment Processing for Bakeries in Lafayette, LA | HD Processing',
  description:
    'Credit card processing and POS systems for Lafayette bakeries. Counter checkout, mobile readers for markets, same-day funding. Local Acadiana team. No long-term contracts.',
  alternates: { canonical: 'https://hdprocessing.com/industries/restaurants/bakeries' },
  openGraph: {
    title: 'Payment Processing for Bakeries in Lafayette, LA | HD Processing',
    description:
      'Credit card processing and POS systems for Lafayette bakeries. Counter checkout, mobile readers for markets, same-day funding. Local Acadiana team. No long-term contracts.',
    url: 'https://hdprocessing.com/industries/restaurants/bakeries',
    siteName: 'HD Processing',
    locale: 'en_US',
    type: 'website',
  },
}

const GOOGLE_REVIEWS_URL =
  'https://www.google.com/search?q=hd+processing#lrd=0x86249d41ec5883cf:0x531d9a9ab15a1418,1,,,,1'

const faqItems = [
  {
    question: 'Can HD Processing set up a mobile card reader for my Lafayette bakery at farmers markets?',
    answer:
      'Yes \u2014 HD Processing provides compact wireless mobile readers for Lafayette bakeries that sell at farmers markets, pop-up events, and catering setups. The readers accept all major cards, tap-to-pay, Apple Pay, and Google Pay. They connect via Bluetooth and process transactions even in areas with limited connectivity. Funds settle to your account the same business day.',
  },
  {
    question: 'How can a Lafayette bakery collect deposits on custom cake orders?',
    answer:
      'HD Processing provides payment links that you can send by text or email when a customer places a custom order. They click the link, pay the deposit securely, and you\u2019re notified immediately. No Venmo, no card numbers over the phone, no chasing payments. The deposit settles to your Lafayette bank account the same business day.',
  },
  {
    question: 'Does HD Processing offer a simple POS system for Lafayette bakery counter service?',
    answer:
      'Yes \u2014 HD Processing configures clean, fast counter POS systems for Lafayette bakeries. We set it up with your menu, pricing, and tip options before we arrive at your location. Most Lafayette bakeries are live and processing payments the same day we visit. We don\u2019t sell you a bloated restaurant system with features you\u2019ll never use.',
  },
  {
    question: 'Does HD Processing offer same-day funding for Lafayette bakeries?',
    answer:
      'Yes \u2014 all HD Processing Lafayette bakery accounts include same-day funding. Your Saturday farmers market sales and counter transactions settle to your bank account the same business day. You don\u2019t have to wait until Tuesday to access what you earned over the weekend.',
  },
  {
    question: 'Does HD Processing require a long-term contract for Lafayette bakeries?',
    answer:
      'No \u2014 every HD Processing account is month-to-month with no early termination fees. Lafayette bakery owners are never locked in. If the service isn\u2019t the right fit, you can leave without penalty. Over 97% of our Acadiana merchants stay because the service is worth it.',
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
      name: 'Payment Processing for Bakeries in Lafayette, LA',
      description:
        'HD Processing provides credit card processing, POS systems, mobile readers, and payment links for bakeries in Lafayette, LA and Acadiana. Same-day funding, interchange-plus pricing, no long-term contracts.',
      provider: { '@id': 'https://hdprocessing.com/#business' },
      areaServed: 'Lafayette, LA',
      audience: { '@type': 'Audience', audienceType: 'Bakery owners and bakery businesses in Lafayette, LA and Acadiana' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://hdprocessing.com/' },
        { '@type': 'ListItem', position: 2, name: 'Industries', item: 'https://hdprocessing.com/industries' },
        { '@type': 'ListItem', position: 3, name: 'Restaurants', item: 'https://hdprocessing.com/industries/restaurants' },
        { '@type': 'ListItem', position: 4, name: 'Bakeries', item: 'https://hdprocessing.com/industries/restaurants/bakeries' },
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

export default function BakeriesPage() {
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
              Payment Processing for Bakeries in{' '}
              <span className="gold">Lafayette, LA</span>
            </h1>
            <p className="hero-sub">
              Lafayette bakeries sell at the counter, at farmers markets, and through online pre-orders &mdash; sometimes all three. Your payment setup needs to follow you wherever you sell. HD Processing gives Acadiana bakeries{' '}
              <strong>fast counter checkout, mobile readers for markets, and payment links for pre-orders</strong> with same-day funding and no long-term contracts.
            </p>
            <Link href="/quote" className="hero-cta">Start Saving Money Today &rarr;</Link>
          </div>

          {/* POS Mockup */}
          <div className="mockup-wrap">
            <div className="mockup-card">
              <div className="mockup-label">Counter Sale</div>
              <div className="mockup-rows">
                <div className="mockup-row"><span className="mockup-key">King Cake Slice</span><span className="mockup-val">$5.50</span></div>
                <div className="mockup-row"><span className="mockup-key">Praline Croissant &times;2</span><span className="mockup-val">$9.00</span></div>
                <div className="mockup-row"><span className="mockup-key">Cafe Au Lait</span><span className="mockup-val">$4.00</span></div>
              </div>
              <div className="mockup-row" style={{ marginTop: 14, fontWeight: 700, borderTop: '1px solid rgba(255,255,255,.15)', paddingTop: 10 }}>
                <span className="mockup-key">Total</span><span className="mockup-val">$18.50</span>
              </div>
              <div style={{ marginTop: 12, color: '#4caf50', fontWeight: 600, fontSize: 14, textAlign: 'center' }}>
                Apple Pay APPROVED
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
          <span className="current">Bakeries</span>
        </div>
      </nav>

      {/* ══ SUB-NAV ══ */}
      <div className="sub-nav">
        <div className="sub-nav-inner">
          <span className="sub-nav-label">Restaurants</span>
          <Link href="/industries/restaurants" className="sub-nav-link">All Restaurants</Link>
          <Link href="/industries/restaurants/coffee-tea-shops" className="sub-nav-link">Coffee &amp; Tea Shops</Link>
          <Link href="/industries/restaurants/pizzerias-sandwich-shops" className="sub-nav-link">Pizzerias &amp; Sandwich Shops</Link>
          <Link href="/industries/restaurants/bakeries" className="sub-nav-link active">Bakeries</Link>
          <Link href="/industries/restaurants/breweries" className="sub-nav-link">Breweries</Link>
          <Link href="/industries/restaurants/delis-meat-markets" className="sub-nav-link">Delis &amp; Meat Markets</Link>
        </div>
      </div>

      {/* ══ PAIN POINTS (light) ══ */}
      <section className="pain-section">
        <div className="section-inner">
          <div className="section-label">The Problem</div>
          <h2 className="on-light">Payment Challenges Lafayette Bakeries <span className="gold">Face</span></h2>
          <div className="pain-grid">
            <div className="pain-card">
              <div className="pain-num">01</div>
              <h3>No Mobile Payment Option for Markets</h3>
              <p>A Lafayette bakery booth at the Hub or the Downtown Farmers Market that only takes cash is leaving money on the table. Customers who don&apos;t carry cash skip you &mdash; even if they love your product.</p>
            </div>
            <div className="pain-card">
              <div className="pain-num">02</div>
              <h3>Pre-Order Deposits That Are Hard to Collect</h3>
              <p>Custom cakes, Mardi Gras king cakes, and holiday orders need deposits. Chasing Venmo requests or asking customers to call with a card number is unprofessional and inefficient.</p>
            </div>
            <div className="pain-card">
              <div className="pain-num">03</div>
              <h3>Counter POS That Doesn&apos;t Fit Your Menu</h3>
              <p>Enterprise POS systems designed for full-service restaurants are overkill for a Lafayette bakery counter. You need something simple, fast, and priced for your actual transaction volume &mdash; not a system full of features you&apos;ll never use.</p>
            </div>
            <div className="pain-card">
              <div className="pain-num">04</div>
              <h3>Waiting Days for Weekend Market Revenue</h3>
              <p>A productive Saturday at the Acadiana Farmers Market shouldn&apos;t mean waiting until Tuesday to access what you earned. Same-day funding means your market deposits are available Monday morning.</p>
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
                Payment Solutions That Follow Your Bakery <span className="gold">Wherever It Sells.</span>
              </h2>
              <p className="on-dark">
                HD Processing builds payment setups for Lafayette bakeries that operate in multiple channels &mdash; counter, market, and online pre-orders. A compact counter terminal for your storefront, a mobile reader for your market booth, and payment links for custom order deposits, all on one account with one daily batch settlement.
              </p>
              <p className="on-dark">
                Interchange-plus pricing means you pay wholesale rates whether you&apos;re swiping at the counter or sending a pre-order link by text. Same-day funding means Saturday market revenue hits your account Sunday. And your local Lafayette team handles setup, training, and support &mdash; so you spend your time baking, not troubleshooting terminals.
              </p>
            </div>
            <div className="solution-photo-wrap">
              <div className="solution-photo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://assets.cdn.filesafe.space/yNgtcVB50ZOTKtcYV8Lh/media/69c1ff12ad140065b12de2da.jpg"
                  alt="HD Processing owners — local merchant services in Lafayette Louisiana"
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
          <h2 className="on-light">Built for <span className="gold">Lafayette Bakery Operations</span></h2>
          <div className="ind-features-grid">
            <div className="ind-feature-card">
              <div className="ind-feature-icon">📱</div>
              <h3>Mobile Readers for Markets</h3>
              <p>Compact wireless readers that work anywhere &mdash; your farmers market booth, pop-up events, and catering setups across Acadiana.</p>
            </div>
            <div className="ind-feature-card">
              <div className="ind-feature-icon">🔗</div>
              <h3>Payment Links for Pre-Orders</h3>
              <p>Send a deposit request by text or email for custom cakes and holiday orders. Customers pay securely before pickup &mdash; no Venmo, no card numbers over the phone.</p>
            </div>
            <div className="ind-feature-card">
              <div className="ind-feature-icon">🖥️</div>
              <h3>Simple Counter POS</h3>
              <p>Clean, fast counter POS configured for your bakery menu &mdash; no bloated restaurant features, no complexity your staff doesn&apos;t need.</p>
            </div>
            <div className="ind-feature-card">
              <div className="ind-feature-icon">⚡</div>
              <h3>Same-Day Funding</h3>
              <p>Market and counter sales settle to your Lafayette bank account the same business day. Access Saturday&apos;s earnings on Sunday.</p>
            </div>
            <div className="ind-feature-card">
              <div className="ind-feature-icon">💰</div>
              <h3>Interchange-Plus Pricing</h3>
              <p>Transparent wholesale rates on every transaction &mdash; counter, mobile, and payment link. No flat percentages inflated for your processor&apos;s benefit.</p>
            </div>
            <div className="ind-feature-card">
              <div className="ind-feature-icon">🛠️</div>
              <h3>On-Site Setup</h3>
              <p>We come to your Lafayette bakery, configure your counter POS, and set up your mobile reader so you&apos;re ready for your next market day.</p>
            </div>
          </div>
          <div className="section-cta"><Link href="/quote" className="btn-gold">Start Saving Money Today &rarr;</Link></div>
        </div>
      </section>

      {/* ══ FAQ (dark) ══ */}
      <section className="ind-faq-section">
        <div className="section-inner">
          <div className="section-label">Common Questions</div>
          <h2 style={{ color: 'var(--white)' }}>Bakery Payment <span className="gold">FAQ</span></h2>
          <IndustryFaq items={faqItems} />
          <div className="section-cta"><Link href="/quote" className="btn-gold">Start Saving Money Today &rarr;</Link></div>
        </div>
      </section>

      {/* ══ OTHER RESTAURANT TYPES (light) ══ */}
      <section className="other-industries">
        <div className="section-inner">
          <div className="section-label">Also In Food &amp; Beverage</div>
          <h2 className="on-light">Other Restaurant Types We <span className="gold">Serve</span></h2>
          <div className="other-grid">
            <Link href="/industries/restaurants/coffee-tea-shops" className="other-card">
              <span className="other-card-icon">☕</span>
              <h3>Coffee &amp; Tea Shops</h3>
              <p>Fast counter checkout for Lafayette cafes and tea houses.</p>
              <span className="other-card-arrow">See coffee &amp; tea solutions &rarr;</span>
            </Link>
            <Link href="/industries/restaurants/pizzerias-sandwich-shops" className="other-card">
              <span className="other-card-icon">🍕</span>
              <h3>Pizzerias &amp; Sandwich Shops</h3>
              <p>Multi-channel order management for Lafayette pizza and sandwich shops.</p>
              <span className="other-card-arrow">See pizzeria solutions &rarr;</span>
            </Link>
            <Link href="/industries/restaurants/breweries" className="other-card">
              <span className="other-card-icon">🍺</span>
              <h3>Breweries</h3>
              <p>Tab management and bar POS for Lafayette craft breweries.</p>
              <span className="other-card-arrow">See brewery solutions &rarr;</span>
            </Link>
            <Link href="/industries/restaurants/delis-meat-markets" className="other-card">
              <span className="other-card-icon">🥩</span>
              <h3>Delis &amp; Meat Markets</h3>
              <p>Weight-based pricing and checkout for Lafayette delis.</p>
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
          <h2>Your Bakery Deserves<br />Better Rates.</h2>
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
