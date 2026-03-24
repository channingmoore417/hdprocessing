import Link from 'next/link';
import FaqAccordion from '@/components/FaqAccordion';

export const revalidate = 60;

export const metadata = {
  title: 'About HD Processing — Local Payment Processing in Lafayette, LA',
  description:
    'Learn about HD Processing — Lafayette\'s local payment processing company. Over 500 businesses served, 5-star Google reviews, no contracts, and 24-hour setup.',
  alternates: { canonical: '/about' },
};

const faqItems = [
  {
    question: 'How is HD Processing different from big national processors?',
    answer:
      'We\'re locally owned and operated in Lafayette, Louisiana. That means you get a real person — not a 1-800 number. We offer lower rates, transparent pricing, and same-day support. We also do free statement reviews so you can see exactly how much you\'ll save.',
  },
  {
    question: 'Do I have to sign a long-term contract?',
    answer:
      'Nope. We don\'t believe in locking you in. All of our merchant accounts are month-to-month with zero cancellation fees. We keep your business by earning it every month.',
  },
  {
    question: 'How fast can I get set up?',
    answer:
      'Most merchants are fully approved and processing payments within 24 hours. We handle all the paperwork and equipment setup so you can focus on running your business.',
  },
];

export default function AboutPage() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'HD Processing',
      description:
        'Local payment processing and merchant services in Lafayette, Louisiana. Credit card processing, POS systems, mobile payments, and ecommerce solutions.',
      url: 'https://hdprocessing.com',
      telephone: '+1-337-366-8550',
      email: 'info@hdprocessing.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '101 Bradford Lane',
        addressLocality: 'Youngsville',
        addressRegion: 'LA',
        postalCode: '70592',
        addressCountry: 'US',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 30.1035,
        longitude: -92.0414,
      },
      areaServed: {
        '@type': 'GeoCircle',
        geoMidpoint: {
          '@type': 'GeoCoordinates',
          latitude: 30.2241,
          longitude: -92.0198,
        },
        geoRadius: '80467',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5.0',
        reviewCount: '47',
        bestRating: '5',
      },
      priceRange: '$$',
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '08:00',
          closes: '17:00',
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      name: 'About HD Processing',
      description:
        'Learn about HD Processing — Lafayette\'s trusted local payment processing company serving 500+ businesses.',
      url: 'https://hdprocessing.com/about',
      mainEntity: {
        '@type': 'LocalBusiness',
        name: 'HD Processing',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqItems.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero ────────────────────────────────────────────── */}
      <section className="hero">
        <div className="hero-inner">
          <span className="hero-label">About HD Processing</span>
          <h1>
            Built in <span>Lafayette.</span> Built for You.
          </h1>
          <p className="hero-sub">
            We started HD Processing because local businesses deserve better than
            hidden fees, 1-800 numbers, and cookie-cutter service. We&rsquo;re here
            to change that.
          </p>
          <div className="hero-actions">
            <Link href="/quote" className="btn-gold">
              Get a Free Quote
            </Link>
            <Link href="/contact" className="btn-outline">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* ── Breadcrumb ──────────────────────────────────────── */}
      <div className="breadcrumb-bar">
        <nav className="breadcrumb">
          <Link href="/">Home</Link>
          <span className="breadcrumb-sep">/</span>
          <span className="breadcrumb-active">About Us</span>
        </nav>
      </div>

      {/* ── Proof Strip ─────────────────────────────────────── */}
      <div className="proof-strip">
        <div className="proof-strip-inner">
          <div className="proof-stat">
            <div className="proof-stat-num">500+</div>
            <div className="proof-stat-label">Businesses Served</div>
          </div>
          <div className="proof-stat">
            <div className="proof-stat-num">
              <span className="g-badge" style={{ display: 'inline-flex', padding: '6px 12px', gap: '6px' }}>
                <span className="g-badge-icon">G</span>
                <span className="g-badge-stars">★★★★★</span>
                <span className="g-badge-rating">5.0</span>
              </span>
            </div>
            <div className="proof-stat-label">Google Reviews</div>
          </div>
          <div className="proof-stat">
            <div className="proof-stat-num">24hr</div>
            <div className="proof-stat-label">Setup Time</div>
          </div>
          <div className="proof-stat">
            <div className="proof-stat-num">0</div>
            <div className="proof-stat-label">Contracts Required</div>
          </div>
        </div>
      </div>

      {/* ── Our Story (light) ───────────────────────────────── */}
      <section className="section light">
        <div className="section-inner">
          <span className="section-label">Our Story</span>
          <h2>
            From Small Town Roots to <span>500+ Businesses</span>
          </h2>
          <div className="story-grid">
            <div className="story-text">
              <p>
                HD Processing was founded right here in Lafayette, Louisiana with a
                simple belief: local businesses shouldn&rsquo;t have to overpay for
                payment processing or settle for impersonal service from faceless
                corporations.
              </p>
              <p>
                We saw too many business owners getting locked into long-term
                contracts with hidden fees, dealing with outsourced support that
                didn&rsquo;t understand their needs, and paying more than they
                should.
              </p>
              <p>
                So we built something different. A processing company that&rsquo;s
                local, transparent, and genuinely invested in the success of the
                businesses we serve. Today, we proudly support over 500 merchants
                across Acadiana and beyond.
              </p>
              <div className="story-stats">
                <div className="story-stat-card">
                  <div className="story-stat-num">500+</div>
                  <div className="story-stat-label">Active Merchants</div>
                </div>
                <div className="story-stat-card">
                  <div className="story-stat-num">$0</div>
                  <div className="story-stat-label">Cancellation Fees</div>
                </div>
                <div className="story-stat-card">
                  <div className="story-stat-num">24hr</div>
                  <div className="story-stat-label">Avg. Setup Time</div>
                </div>
                <div className="story-stat-card">
                  <div className="story-stat-num">5.0</div>
                  <div className="story-stat-label">Google Rating</div>
                </div>
              </div>
            </div>
            <div className="story-image">
              <div
                style={{
                  width: '100%',
                  height: '420px',
                  background: 'linear-gradient(135deg, var(--gold) 0%, var(--gold2) 100%)',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--black)',
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: '48px',
                  letterSpacing: '2px',
                }}
              >
                HD
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission + Values (dark) ─────────────────────────── */}
      <section className="section dark">
        <div className="section-inner">
          <span className="section-label">Our Mission</span>
          <h2>
            Helping Local Businesses <span>Keep More</span> of What They Earn
          </h2>
          <div className="mission-grid">
            <div className="mission-text">
              <p>
                Our mission is simple: give every local business access to the same
                low rates, modern technology, and responsive support that the big
                chains get &mdash; without the big-chain headaches.
              </p>
              <p>
                We believe payment processing should be straightforward,
                affordable, and backed by people you can actually talk to.
                That&rsquo;s why every HD Processing merchant gets a dedicated
                local rep, transparent pricing with no hidden fees, and real
                support from real people right here in Lafayette.
              </p>
            </div>
            <div className="mission-values">
              <div className="mission-value">
                <div className="mission-value-num">01</div>
                <div className="mission-value-content">
                  <div className="mission-value-title">Transparency First</div>
                  <div className="mission-value-desc">
                    No hidden fees, no surprise rate increases. You&rsquo;ll always
                    know exactly what you&rsquo;re paying and why.
                  </div>
                </div>
              </div>
              <div className="mission-value">
                <div className="mission-value-num">02</div>
                <div className="mission-value-content">
                  <div className="mission-value-title">Local &amp; Personal</div>
                  <div className="mission-value-desc">
                    We live and work in Lafayette. When you call us, you get a real
                    person who knows your business &mdash; not a call center.
                  </div>
                </div>
              </div>
              <div className="mission-value">
                <div className="mission-value-num">03</div>
                <div className="mission-value-content">
                  <div className="mission-value-title">No Contracts, Ever</div>
                  <div className="mission-value-desc">
                    Month-to-month service, zero cancellation fees. We earn your
                    business every single month.
                  </div>
                </div>
              </div>
              <div className="mission-value">
                <div className="mission-value-num">04</div>
                <div className="mission-value-content">
                  <div className="mission-value-title">Technology That Works</div>
                  <div className="mission-value-desc">
                    Modern POS systems, mobile readers, online gateways &mdash; we
                    match the right tools to your business.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── What Makes Us Different (light) ─────────────────── */}
      <section className="section light">
        <div className="section-inner">
          <span className="section-label center">Why HD Processing</span>
          <h2 className="center">
            What Makes Us <span>Different</span>
          </h2>
          <p className="section-body center">
            We&rsquo;re not a giant corporation. We&rsquo;re your neighbors &mdash;
            and that changes everything about how we do business.
          </p>
          <div className="diff-grid">
            <div className="diff-card">
              <span className="diff-card-icon">🏠</span>
              <div className="diff-card-title">Locally Owned &amp; Operated</div>
              <div className="diff-card-desc">
                Based in Lafayette, LA. We serve Acadiana businesses because
                we&rsquo;re part of the community too.
              </div>
            </div>
            <div className="diff-card">
              <span className="diff-card-icon">💰</span>
              <div className="diff-card-title">Lower Rates, Guaranteed</div>
              <div className="diff-card-desc">
                We do free statement reviews and consistently beat the big
                processors on price. No gimmicks.
              </div>
            </div>
            <div className="diff-card">
              <span className="diff-card-icon">📋</span>
              <div className="diff-card-title">Zero Contracts</div>
              <div className="diff-card-desc">
                No long-term commitments. No cancellation fees. You stay because
                you want to, not because you have to.
              </div>
            </div>
            <div className="diff-card">
              <span className="diff-card-icon">⏱️</span>
              <div className="diff-card-title">24-Hour Setup</div>
              <div className="diff-card-desc">
                Most merchants are approved and processing within one business day.
                We handle all the setup.
              </div>
            </div>
            <div className="diff-card">
              <span className="diff-card-icon">🤝</span>
              <div className="diff-card-title">Dedicated Local Rep</div>
              <div className="diff-card-desc">
                Your rep lives here. They answer your calls, visit your location,
                and know your business by name.
              </div>
            </div>
            <div className="diff-card">
              <span className="diff-card-icon">🛡️</span>
              <div className="diff-card-title">Transparent Pricing</div>
              <div className="diff-card-desc">
                No hidden fees, no surprise charges. Your statement is clean, clear,
                and easy to understand.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Team (dark) ─────────────────────────────────────── */}
      <section className="section dark">
        <div className="section-inner">
          <span className="section-label center">Our Team</span>
          <h2 className="center">
            Meet the People Behind <span>HD Processing</span>
          </h2>
          <p className="section-body center" style={{ color: 'rgba(255,255,255,.5)' }}>
            Real people, local roots, and a shared mission to help Acadiana
            businesses thrive.
          </p>
          <div className="team-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            <div className="team-card">
              <div
                className="team-avatar"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: '20px',
                  color: 'var(--gold)',
                  background: 'rgba(218,179,103,.1)',
                }}
              >
                HD
              </div>
              <div className="team-name">Hunter Dore</div>
              <div className="team-role">Founder &amp; CEO</div>
            </div>
            <div className="team-card">
              <div
                className="team-avatar"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: '20px',
                  color: 'var(--gold)',
                  background: 'rgba(218,179,103,.1)',
                }}
              >
                AR
              </div>
              <div className="team-name">Account Reps</div>
              <div className="team-role">Merchant Support</div>
            </div>
            <div className="team-card">
              <div
                className="team-avatar"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: '20px',
                  color: 'var(--gold)',
                  background: 'rgba(218,179,103,.1)',
                }}
              >
                TS
              </div>
              <div className="team-name">Tech &amp; Support</div>
              <div className="team-role">POS &amp; Terminal Setup</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Reviews (light) ─────────────────────────────────── */}
      <section className="section light">
        <div className="section-inner">
          <span className="section-label center">Customer Reviews</span>
          <h2 className="center">
            What Our <span>Merchants</span> Say
          </h2>
          <div className="text-center mb-24">
            <a
              href="https://www.google.com/search?q=hd+processing#lrd=0x86249d41ec5883cf:0x531d9a9ab15a1418,1,,,,1"
              target="_blank"
              rel="noopener noreferrer"
              className="g-badge"
              style={{ marginTop: '8px' }}
            >
              <span className="g-badge-icon">G</span>
              <span className="g-badge-rating">5.0</span>
              <span className="g-badge-stars">★★★★★</span>
              <span className="g-badge-count">Google Reviews</span>
            </a>
          </div>
          <div className="reviews-grid">
            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">
                &ldquo;Switched from Square and immediately saved money. Hunter set
                everything up in one day and I didn&rsquo;t have to lift a finger.
                Best decision I made for my restaurant.&rdquo;
              </p>
              <div className="review-author">
                <div className="review-avatar">M</div>
                <div>
                  <div className="review-name">Mike T.</div>
                  <div className="review-date">Restaurant Owner</div>
                </div>
              </div>
            </div>
            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">
                &ldquo;I was paying way too much with my old processor and
                didn&rsquo;t even know it. HD Processing did a free statement review
                and saved me over $200 a month. No contract either.&rdquo;
              </p>
              <div className="review-author">
                <div className="review-avatar">S</div>
                <div>
                  <div className="review-name">Sarah L.</div>
                  <div className="review-date">Retail Shop Owner</div>
                </div>
              </div>
            </div>
            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">
                &ldquo;The best part is having a local person I can actually call.
                No hold times, no runaround. They treat you like family. Highly
                recommend to any business in Lafayette.&rdquo;
              </p>
              <div className="review-author">
                <div className="review-avatar">J</div>
                <div>
                  <div className="review-name">James R.</div>
                  <div className="review-date">Service Business Owner</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ (dark) ──────────────────────────────────────── */}
      <section className="section dark">
        <div className="section-inner">
          <FaqAccordion
            label="FAQ"
            heading={
              <>
                Common <span style={{ color: 'var(--gold)' }}>Questions</span>
              </>
            }
            items={faqItems}
            variant="dark"
          />
        </div>
      </section>

      {/* ── Final CTA (gold) ────────────────────────────────── */}
      <section className="final-cta">
        <div className="final-cta-inner">
          <h2>Ready to Pay Less and Get More?</h2>
          <p>
            Join 500+ local businesses who switched to HD Processing for lower
            rates, better service, and zero contracts.
          </p>
          <Link href="/quote" className="btn-black">
            Get Your Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
