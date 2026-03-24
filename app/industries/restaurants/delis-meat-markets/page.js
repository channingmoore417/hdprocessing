import Link from 'next/link'
import IndustryFaq from '@/components/IndustryFaq'

export const revalidate = 60

export const metadata = {
  title: 'Payment Processing for Delis & Meat Markets in Lafayette, LA | HD Processing',
  description:
    'Credit card processing and POS systems for Lafayette delis and meat markets. Weight-based pricing, fast checkout, same-day funding. Local Acadiana team. No contracts.',
  alternates: { canonical: 'https://hdprocessing.com/industries/restaurants/delis-meat-markets' },
  openGraph: {
    title: 'Payment Processing for Delis & Meat Markets in Lafayette, LA | HD Processing',
    description:
      'Credit card processing and POS systems for Lafayette delis and meat markets. Weight-based pricing, fast checkout, same-day funding. Local Acadiana team. No contracts.',
    url: 'https://hdprocessing.com/industries/restaurants/delis-meat-markets',
    siteName: 'HD Processing',
    locale: 'en_US',
    type: 'website',
  },
}

const GOOGLE_REVIEWS_URL =
  'https://www.google.com/search?q=hd+processing#lrd=0x86249d41ec5883cf:0x531d9a9ab15a1418,1,,,,1'

const faqItems = [
  {
    question: 'Can HD Processing set up weight-based pricing for a Lafayette meat market?',
    answer:
      'Yes \u2014 HD Processing configures POS systems for Lafayette meat markets with weight-based pricing integrated with your scale. Boudin, tasso, andouille, and other cuts priced by the pound calculate automatically at the register. Your staff doesn\u2019t manually enter prices \u2014 they weigh the cut and the POS does the rest. We configure your full product menu during on-site installation.',
  },
  {
    question: 'Can HD Processing set up payment links for holiday pre-orders at a Lafayette deli?',
    answer:
      'Yes \u2014 payment links are available for Lafayette delis and meat markets that take holiday pre-orders. When a customer places a Thanksgiving, Christmas, or Mardi Gras order, you send them a payment link by text or email. They pay a deposit immediately, and you\u2019re protected from no-shows when pickup day arrives. Funds settle to your account the same business day.',
  },
  {
    question: 'Does HD Processing offer mobile card readers for Lafayette meat markets that sell at events?',
    answer:
      'Yes \u2014 HD Processing provides compact wireless mobile readers for Lafayette meat markets that sell at farmers markets, festivals, and community events. The readers accept all major cards, tap-to-pay, Apple Pay, and Google Pay. They work on Bluetooth and process transactions wherever you are. Sales consolidate into your daily batch and settle same-day.',
  },
  {
    question: 'What POS system works best for a Lafayette deli counter?',
    answer:
      'HD Processing recommends and installs counter POS systems configured for the specific workflow of a Lafayette deli \u2014 fast item entry, weight-based pricing integration, quick payment processing, and clean end-of-day reporting. We configure your menu before we arrive and train your counter staff the same day. Most Lafayette delis are live and processing within hours of our visit.',
  },
  {
    question: 'Does HD Processing require a long-term contract for Lafayette delis and meat markets?',
    answer:
      'No \u2014 all HD Processing accounts are month-to-month with no early termination fees. Lafayette deli and meat market owners are never locked in. If the service isn\u2019t right for your business, you can leave without penalty. Over 97% of our Acadiana merchants stay because the service earns their business every single month.',
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
      name: 'Payment Processing for Delis & Meat Markets in Lafayette, LA',
      description:
        'HD Processing provides credit card processing, POS systems, and payment solutions for delis and meat markets in Lafayette, LA and Acadiana. Weight-based pricing, fast checkout, same-day funding, no long-term contracts.',
      provider: { '@id': 'https://hdprocessing.com/#business' },
      areaServed: 'Lafayette, LA',
      audience: { '@type': 'Audience', audienceType: 'Deli and meat market owners in Lafayette, LA and Acadiana' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://hdprocessing.com/' },
        { '@type': 'ListItem', position: 2, name: 'Industries', item: 'https://hdprocessing.com/industries' },
        { '@type': 'ListItem', position: 3, name: 'Restaurants', item: 'https://hdprocessing.com/industries/restaurants' },
        { '@type': 'ListItem', position: 4, name: 'Delis & Meat Markets', item: 'https://hdprocessing.com/industries/restaurants/delis-meat-markets' },
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

export default function DelisMeatMarketsPage() {
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
              Payment Processing for Delis &amp; Meat Markets in{' '}
              <span className="gold">Lafayette, LA</span>
            </h1>
            <p className="hero-sub">
              Lafayette delis and meat markets run on speed, accuracy, and regulars who come back every week. Your payment system should support all three &mdash; fast checkout, weight-based pricing, and a terminal that doesn&apos;t go down during the lunch rush. HD Processing gives Acadiana delis and markets{' '}
              <strong>accurate POS, fast approval, and same-day funding</strong> with a local team on call. No long-term contracts.
            </p>
            <Link href="/quote" className="hero-cta">Start Saving Money Today &rarr;</Link>
          </div>

          {/* POS Mockup */}
          <div className="mockup-wrap">
            <div className="mockup-card">
              <div className="mockup-label">Counter Sale</div>
              <div className="mockup-rows">
                <div className="mockup-row"><span className="mockup-key">Boudin &mdash; 2.4 lbs</span><span className="mockup-val">$14.40</span></div>
                <div className="mockup-row"><span className="mockup-key">Tasso &mdash; 1.1 lbs</span><span className="mockup-val">$9.90</span></div>
                <div className="mockup-row"><span className="mockup-key">Cracklins</span><span className="mockup-val">$6.00</span></div>
                <div className="mockup-row"><span className="mockup-key">Tax (9.45%)</span><span className="mockup-val">$2.87</span></div>
              </div>
              <div className="mockup-row" style={{ marginTop: 12, fontWeight: 700 }}>
                <span className="mockup-key" style={{ color: 'var(--gold)' }}>Total</span>
                <span className="mockup-val" style={{ color: 'var(--gold)' }}>$33.17</span>
              </div>
              <button className="mockup-btn" style={{ marginTop: 14 }}>
                <span style={{ color: '#22c55e' }}>&#10003;</span> Mastercard Tap APPROVED
              </button>
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
          <span className="current">Delis &amp; Meat Markets</span>
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
          <Link href="/industries/restaurants/breweries" className="sub-nav-link">Breweries</Link>
          <Link href="/industries/restaurants/delis-meat-markets" className="sub-nav-link active">Delis &amp; Meat Markets</Link>
        </div>
      </div>

      {/* ══ PAIN POINTS (light) ══ */}
      <section className="pain-section">
        <div className="section-inner">
          <div className="section-label">The Problem</div>
          <h2 className="on-light">Payment Challenges at Lafayette Delis &amp; <span className="gold">Meat Markets</span></h2>
          <div className="pain-grid">
            <div className="pain-card">
              <div className="pain-num">01</div>
              <h3>Weight-Based Pricing That Doesn&apos;t Integrate</h3>
              <p>A Lafayette meat market selling boudin, tasso, and andouille by the pound needs a POS that integrates with your scale &mdash; not one where your staff is typing in prices manually and hoping they got the math right.</p>
            </div>
            <div className="pain-card">
              <div className="pain-num">02</div>
              <h3>Slow Checkout During the Lunch Rush</h3>
              <p>A deli counter with a line out the door can&apos;t afford a terminal that takes 10 seconds per approval. Fast tap-to-pay and chip processing keeps your counter moving and your regulars happy.</p>
            </div>
            <div className="pain-card">
              <div className="pain-num">03</div>
              <h3>No Way to Handle Pre-Orders for Holidays</h3>
              <p>Thanksgiving, Christmas, and Mardi Gras season mean large custom orders. A Lafayette meat market that takes holiday pre-orders by phone and collects at pickup is dealing with no-shows and last-minute cancellations. Payment links at order time fix both.</p>
            </div>
            <div className="pain-card">
              <div className="pain-num">04</div>
              <h3>Cash-Only for Local Deliveries</h3>
              <p>Lafayette meat markets that deliver locally or sell at events and markets are still cash-only in too many cases. Customers who want to pay by card move on &mdash; or don&apos;t come back.</p>
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
                We Understand What Lafayette Delis <span className="gold">Actually Need.</span>
              </h2>
              <p className="on-dark">
                HD Processing configures POS systems for Lafayette delis and meat markets that work the way your counter works &mdash; weight-based pricing integrated with your scale, fast checkout for regular customers, and a system your staff can use without a training manual. We set up the menu with your cuts, pricing by weight, and any packaged items before we arrive.
              </p>
              <p className="on-dark">
                Payment links for holiday pre-orders mean no more no-shows on Thanksgiving morning. Mobile readers for markets and events mean your sales follow you off-site. Same-day funding means Thursday&apos;s lunch rush revenue is in your account Thursday night. And when something breaks, your local Lafayette rep answers &mdash; not a ticketing system.
              </p>
            </div>
            <div className="solution-photo-wrap">
              <div className="solution-photo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://assets.cdn.filesafe.space/yNgtcVB50ZOTKtcYV8Lh/media/69c1ddfbad00e260009b16d7.jpg"
                  alt="HD Processing team member with Lafayette deli owner"
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
          <h2 className="on-light">Built for <span className="gold">Lafayette Deli &amp; Meat Market Counter Service</span></h2>
          <div className="ind-features-grid">
            <div className="ind-feature-card">
              <div className="ind-feature-icon">{'\u2696\uFE0F'}</div>
              <h3>Weight-Based Pricing</h3>
              <p>POS configured to calculate price by weight &mdash; boudin by the pound, tasso, andouille, and specialty cuts all priced accurately every time.</p>
            </div>
            <div className="ind-feature-card">
              <div className="ind-feature-icon">{'\u26A1'}</div>
              <h3>Fast Counter Checkout</h3>
              <p>Sub-2-second approvals, tap-to-pay, and chip processing keep your Lafayette deli line moving during the lunch rush and weekend crowds.</p>
            </div>
            <div className="ind-feature-card">
              <div className="ind-feature-icon">{'\uD83D\uDD17'}</div>
              <h3>Holiday Pre-Order Payment Links</h3>
              <p>Send a payment link when a customer places a holiday order. They pay the deposit upfront &mdash; no no-shows on Thanksgiving, no last-minute cancellations.</p>
            </div>
            <div className="ind-feature-card">
              <div className="ind-feature-icon">{'\uD83D\uDCF1'}</div>
              <h3>Mobile Readers for Markets</h3>
              <p>Accept cards at farmers markets, festivals, and local events with a compact wireless reader that fits in your apron pocket.</p>
            </div>
            <div className="ind-feature-card">
              <div className="ind-feature-icon">{'\u26A1'}</div>
              <h3>Same-Day Funding</h3>
              <p>Lunch rush and Saturday counter sales settle to your Lafayette bank account the same business day. Access your earnings that evening.</p>
            </div>
            <div className="ind-feature-card">
              <div className="ind-feature-icon">{'\uD83D\uDEE0\uFE0F'}</div>
              <h3>On-Site Setup Always</h3>
              <p>We come to your Lafayette deli, configure your POS with your menu and scale integration, and train your counter staff before we leave.</p>
            </div>
          </div>
          <div className="section-cta"><Link href="/quote" className="btn-gold">Start Saving Money Today &rarr;</Link></div>
        </div>
      </section>

      {/* ══ FAQ (dark) ══ */}
      <section className="ind-faq-section">
        <div className="section-inner">
          <div className="section-label">Common Questions</div>
          <h2 style={{ color: 'var(--white)' }}>Deli &amp; Meat Market Payment <span className="gold">FAQ</span></h2>
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
              <span className="other-card-icon">{'\u2615'}</span>
              <h3>Coffee &amp; Tea Shops</h3>
              <p>Fast-paced counter service, loyalty integrations, and mobile payment support for Lafayette coffee shops and tea houses.</p>
              <span className="other-card-arrow">See coffee shop solutions &rarr;</span>
            </Link>
            <Link href="/industries/restaurants/pizzerias-sandwich-shops" className="other-card">
              <span className="other-card-icon">{'\uD83C\uDF55'}</span>
              <h3>Pizzerias &amp; Sandwich Shops</h3>
              <p>Phone-in orders, delivery integration, and fast checkout for Lafayette pizza and sandwich counters.</p>
              <span className="other-card-arrow">See pizzeria solutions &rarr;</span>
            </Link>
            <Link href="/industries/restaurants/bakeries" className="other-card">
              <span className="other-card-icon">{'\uD83E\uDD50'}</span>
              <h3>Bakeries</h3>
              <p>Simple counter checkout, daily batch settlement, and mobile readers for farmers markets and pop-ups across Acadiana.</p>
              <span className="other-card-arrow">See bakery solutions &rarr;</span>
            </Link>
            <Link href="/industries/restaurants/breweries" className="other-card">
              <span className="other-card-icon">{'\uD83C\uDF7A'}</span>
              <h3>Breweries</h3>
              <p>Tab management, bar-specific POS workflows, and same-day funding for Lafayette craft breweries and taprooms.</p>
              <span className="other-card-arrow">See brewery solutions &rarr;</span>
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
                  <div className="biz-info-icon">{'\uD83D\uDCCD'}</div>
                  <div>
                    <div className="biz-info-label">Address</div>
                    <span className="biz-info-value">1027 Johnston St, Lafayette, LA 70501</span>
                    <div className="biz-info-note">By appointment &mdash; we also come to you</div>
                  </div>
                </div>
                <div className="biz-info-item">
                  <div className="biz-info-icon">{'\uD83D\uDCDE'}</div>
                  <div>
                    <div className="biz-info-label">Phone</div>
                    <a href="tel:+13373668550" className="biz-info-value">337.366.8550</a>
                    <div className="biz-info-note">Mon&ndash;Fri 8am&ndash;6pm &middot; Sat 9am&ndash;1pm</div>
                  </div>
                </div>
                <div className="biz-info-item">
                  <div className="biz-info-icon">{'\u2709\uFE0F'}</div>
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
          <h2>Your Deli Deserves<br />Better Rates.</h2>
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
