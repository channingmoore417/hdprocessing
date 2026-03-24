import Link from 'next/link'
import IndustryFaq from '@/components/IndustryFaq'

export const revalidate = 60

export const metadata = {
  title: 'Restaurant Payment Processing in Lafayette, LA | HD Processing',
  description:
    'Credit card processing and POS systems for Lafayette restaurants, bars, cafés, and food businesses. Same-day funding, no contracts. Local Acadiana team on call.',
  alternates: { canonical: 'https://hdprocessing.com/industries/restaurants' },
  openGraph: {
    title: 'Restaurant Payment Processing in Lafayette, LA | HD Processing',
    description:
      'Credit card processing and POS systems for Lafayette restaurants, bars, cafés, and food businesses. Same-day funding, no contracts. Local Acadiana team on call.',
    url: 'https://hdprocessing.com/industries/restaurants',
    siteName: 'HD Processing',
    locale: 'en_US',
    type: 'website',
  },
}

const GOOGLE_REVIEWS_URL =
  'https://www.google.com/search?q=hd+processing#lrd=0x86249d41ec5883cf:0x531d9a9ab15a1418,1,,,,1'

const faqItems = [
  {
    question: 'What payment processing does HD Processing offer for Lafayette restaurants?',
    answer:
      'HD Processing provides full payment solutions for Lafayette restaurants including credit card processing with interchange-plus pricing, modern POS systems with tableside ordering, tip adjustment, and kitchen display integration. We offer same-day funding so your nightly sales hit your account the next morning. Our local Acadiana team installs everything on-site and provides ongoing support \u2014 no 1-800 numbers.',
  },
  {
    question: 'What POS systems work best for restaurants in Lafayette, LA?',
    answer:
      'HD Processing installs POS systems suited to the specific needs of Lafayette restaurants \u2014 from single-terminal caf\u00E9s to multi-station full-service restaurants with kitchen display screens and handheld tableside ordering. We configure tip prompts, split-check functionality, and end-of-night batch settlement. Our local team comes to your Lafayette location, sets everything up, and trains your staff before we leave.',
  },
  {
    question: 'Does HD Processing offer same-day funding for Lafayette restaurant sales?',
    answer:
      'Yes \u2014 HD Processing offers same-day funding for most Lafayette restaurant accounts. Your nightly card transactions settle to your bank account the same business day rather than waiting 2 to 3 days like most processors. For high-volume Acadiana restaurants processing thousands of dollars daily, same-day access to those funds makes a meaningful difference in managing payroll and food costs.',
  },
  {
    question: 'Can HD Processing handle tip adjustment for full-service restaurants in Lafayette?',
    answer:
      'Yes \u2014 tip adjustment is standard on all HD Processing restaurant accounts. Your staff can add tips after the transaction is run, and all adjustments are reflected in your end-of-night batch. Our Lafayette team configures the tip prompt settings on your terminals and POS to match your service style, whether that is a preset tip screen for counter service or manual adjustment for full-service dining.',
  },
  {
    question: 'How does HD Processing support bar and restaurant businesses in Acadiana?',
    answer:
      'HD Processing supports bars and restaurants across Acadiana with processing solutions built for the pace and volume of food service \u2014 fast transaction speeds, tableside payment options, bar tab management, and split-check capability. We serve restaurants in Lafayette, Broussard, Youngsville, Breaux Bridge, New Iberia, and throughout the region. When something goes wrong on a busy Friday night, you call our local team directly.',
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
      name: 'Restaurant Payment Processing in Lafayette, LA',
      description:
        'HD Processing provides credit card processing, POS systems, and payment solutions for restaurants, bars, caf\u00E9s, and food businesses in Lafayette, LA and Acadiana. Same-day funding, interchange-plus pricing, no long-term contracts.',
      provider: { '@id': 'https://hdprocessing.com/#business' },
      areaServed: 'Lafayette, LA',
      audience: { '@type': 'Audience', audienceType: 'Restaurant owners and food service businesses in Lafayette, LA and Acadiana' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://hdprocessing.com/' },
        { '@type': 'ListItem', position: 2, name: 'Industries', item: 'https://hdprocessing.com/industries' },
        { '@type': 'ListItem', position: 3, name: 'Restaurants', item: 'https://hdprocessing.com/industries/restaurants' },
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

export default function RestaurantsPage() {
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
              Restaurant Payment Processing in{' '}
              <span className="gold">Lafayette, LA</span>
            </h1>
            <p className="hero-sub">
              Lafayette restaurants run on tight margins and fast service. Your payment system should make both easier &mdash; not harder. HD Processing gives Acadiana food businesses{' '}
              <strong>modern POS systems, tableside payments, and same-day funding</strong> with a local team on call when things go sideways. No long-term contracts. No mail-in setup. No 1-800 numbers.
            </p>
            <Link href="/quote" className="hero-cta">Start Saving Money Today &rarr;</Link>
          </div>

          {/* POS Mockup */}
          <div className="mockup-wrap">
            <div className="mockup-card">
              <div className="mockup-label">Table 7 &mdash; Current Order</div>
              <div className="mockup-rows">
                <div className="mockup-row"><span className="mockup-key">Crawfish &Eacute;touff&eacute;e</span><span className="mockup-val">$18.00</span></div>
                <div className="mockup-row"><span className="mockup-key">Boudin Plate</span><span className="mockup-val">$14.00</span></div>
                <div className="mockup-row"><span className="mockup-key">Bread Pudding</span><span className="mockup-val">$8.00</span></div>
                <div className="mockup-row"><span className="mockup-key">Sweet Tea &times;2</span><span className="mockup-val">$6.00</span></div>
                <div className="mockup-row"><span className="mockup-key">Tax (9.45%)</span><span className="mockup-val">$4.36</span></div>
              </div>
              <div className="mockup-label" style={{ marginTop: 14 }}>Add Tip?</div>
              <div className="mockup-tip-row">
                <div className="mockup-tip">15%</div>
                <div className="mockup-tip active">18%</div>
                <div className="mockup-tip">20%</div>
              </div>
              <button className="mockup-btn">Charge $54.64 &rarr;</button>
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
          <span className="current">Restaurants</span>
        </div>
      </nav>

      {/* ══ SUB-NAV ══ */}
      <div className="sub-nav">
        <div className="sub-nav-inner">
          <span className="sub-nav-label">Restaurants</span>
          <Link href="/industries/restaurants" className="sub-nav-link active">All Restaurants</Link>
          <Link href="/industries/restaurants/coffee-tea-shops" className="sub-nav-link">Coffee &amp; Tea Shops</Link>
          <Link href="/industries/restaurants/pizzerias-sandwich-shops" className="sub-nav-link">Pizzerias &amp; Sandwich Shops</Link>
          <Link href="/industries/restaurants/bakeries" className="sub-nav-link">Bakeries</Link>
          <Link href="/industries/restaurants/breweries" className="sub-nav-link">Breweries</Link>
          <Link href="/industries/restaurants/delis-meat-markets" className="sub-nav-link">Delis &amp; Meat Markets</Link>
        </div>
      </div>

      {/* ══ PAIN POINTS (light) ══ */}
      <section className="pain-section">
        <div className="section-inner">
          <div className="section-label">The Problem</div>
          <h2 className="on-light">Restaurant Payment Systems That <span className="gold">Work Against You</span></h2>
          <div className="pain-grid">
            <div className="pain-card">
              <div className="pain-num">01</div>
              <h3>Slow Terminals Kill Table Turns</h3>
              <p>A busy Friday night on Jefferson Street is no place for a terminal that hangs on approval or a printer that jams twice a service. Slow payment systems cost you table turns &mdash; and in a Lafayette restaurant, table turns are revenue.</p>
            </div>
            <div className="pain-card">
              <div className="pain-num">02</div>
              <h3>No Tableside Payment Option</h3>
              <p>Customers in Acadiana increasingly expect to pay at the table or counter. Running a card back to a terminal slows service, creates security exposure, and leaves your staff running laps they shouldn&apos;t have to run.</p>
            </div>
            <div className="pain-card">
              <div className="pain-num">03</div>
              <h3>Tip Adjust Headaches</h3>
              <p>Full-service restaurants live and die by tip workflows. If your processor doesn&apos;t handle tip adjustment cleanly &mdash; or if your staff is adding tips manually at close &mdash; you&apos;re inviting errors, chargebacks, and a nightmare end-of-night reconciliation.</p>
            </div>
            <div className="pain-card">
              <div className="pain-num">04</div>
              <h3>Waiting Days for Your Money</h3>
              <p>A Lafayette restaurant that processes $8,000 on a Saturday night shouldn&apos;t wait until Tuesday to see those funds. Food costs, staff wages, and vendor payments don&apos;t pause for your processor&apos;s settlement schedule.</p>
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
                We&apos;ve Helped 500+ Acadiana Businesses <span className="gold">Run Smoother.</span>
              </h2>
              <p className="on-dark">
                HD Processing was built for business owners who are tired of payment systems that slow down service instead of supporting it. We understand the pace of a Lafayette restaurant &mdash; the Friday dinner rush, the Saturday brunch crowd, the bar tabs that need to close out fast. Our POS systems and payment solutions are configured for food service from day one, not retrofitted from a retail product.
              </p>
              <p className="on-dark">
                Every restaurant we work with gets on-site installation, staff training, and a local Lafayette contact who picks up the phone. Not a ticket. Not a chatbot. A person who knows your system and can resolve issues the same day. Over 500 Acadiana businesses trust us with their payments &mdash; and our retention rate is above 97% because we earn it every month.
              </p>
            </div>
            <div className="solution-photo-wrap">
              <div className="solution-photo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://assets.cdn.filesafe.space/yNgtcVB50ZOTKtcYV8Lh/media/69c1dda2fd06c8eeb631cf7e.jpg"
                  alt="HD Processing team member with Lafayette restaurant owner"
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
          <h2 className="on-light">Built for <span className="gold">Lafayette Food Service</span></h2>
          <div className="ind-features-grid">
            <div className="ind-feature-card">
              <div className="ind-feature-icon">🍽️</div>
              <h3>Tableside Payments</h3>
              <p>Wireless handheld terminals let your staff take payment at the table &mdash; faster service, fewer trips, and no card leaving your customer&apos;s sight.</p>
            </div>
            <div className="ind-feature-card">
              <div className="ind-feature-icon">💡</div>
              <h3>Tip Adjust Built-In</h3>
              <p>Tip workflows are configured for your service style &mdash; preset tip screens for counter service, manual adjustment for full-service dining, all handled cleanly at close.</p>
            </div>
            <div className="ind-feature-card">
              <div className="ind-feature-icon">🖥️</div>
              <h3>Kitchen Display Systems</h3>
              <p>Orders go straight from the POS to the kitchen display &mdash; no paper tickets, no shouted orders, no miscommunication during a busy Lafayette dinner service.</p>
            </div>
            <div className="ind-feature-card">
              <div className="ind-feature-icon">⚡</div>
              <h3>Same-Day Funding</h3>
              <p>Saturday night sales hit your Lafayette bank account Sunday morning. Stop floating your business while waiting 2&ndash;3 days for funds to clear.</p>
            </div>
            <div className="ind-feature-card">
              <div className="ind-feature-icon">📊</div>
              <h3>Sales Reporting</h3>
              <p>Item-level sales data, server performance, and hourly breakdowns &mdash; all on your phone. Know what&apos;s selling and when before you plan next week&apos;s prep.</p>
            </div>
            <div className="ind-feature-card">
              <div className="ind-feature-icon">🛠️</div>
              <h3>On-Site Setup Always</h3>
              <p>We come to your Lafayette restaurant, install every terminal and display, and train your staff before we leave. Most restaurants are fully live the same day.</p>
            </div>
          </div>
          <div className="section-cta"><Link href="/quote" className="btn-gold">Start Saving Money Today &rarr;</Link></div>
        </div>
      </section>

      {/* ══ SUB-PAGES (dark) ══ */}
      <section className="subpages-section">
        <div className="section-inner">
          <div className="section-label">Browse By Business Type</div>
          <h2 style={{ color: 'var(--white)' }}>Find Your <span className="gold">Specific Business</span></h2>
          <div className="subpages-grid">
            <Link href="/industries/restaurants/coffee-tea-shops" className="subpage-card">
              <span className="subpage-card-icon">☕</span>
              <h3>Coffee &amp; Tea Shops</h3>
              <p>Fast-paced counter service, loyalty integrations, and mobile payment support for Lafayette coffee shops and tea houses.</p>
              <span className="subpage-card-arrow">Learn more &rarr;</span>
            </Link>
            <Link href="/industries/restaurants/pizzerias-sandwich-shops" className="subpage-card">
              <span className="subpage-card-icon">🍕</span>
              <h3>Pizzerias &amp; Sandwich Shops</h3>
              <p>Phone-in orders, delivery integration, and fast checkout for Lafayette pizza and sandwich counters.</p>
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
          <h2 style={{ color: 'var(--white)' }}>Restaurant Payment <span className="gold">FAQ</span></h2>
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
          <h2>Your Restaurant Deserves<br />Better Rates.</h2>
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
