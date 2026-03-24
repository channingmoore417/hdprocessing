import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

export const revalidate = 60;

export const metadata = {
  title: 'Contact HD Processing — Get in Touch | Lafayette, LA',
  description:
    'Contact HD Processing for payment processing, POS systems, free statement reviews, and local support. Call 337-366-8550 or fill out our contact form.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: 'Contact HD Processing',
      description:
        'Get in touch with HD Processing for payment processing, POS systems, and merchant services in Lafayette, Louisiana.',
      url: 'https://hdprocessing.com/contact',
      mainEntity: {
        '@type': 'LocalBusiness',
        name: 'HD Processing',
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
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: [
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
            ],
            opens: '08:00',
            closes: '17:00',
          },
        ],
      },
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
          <span className="hero-label">Contact Us</span>
          <h1>
            Let&rsquo;s <span>Talk.</span>
          </h1>
          <p className="hero-sub">
            Have a question, need a quote, or just want to learn more? We&rsquo;re
            right here in Lafayette and ready to help.
          </p>
          <div className="hero-actions">
            <a href="tel:+13373668550" className="btn-gold">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
              </svg>
              Call 337.366.8550
            </a>
            <Link href="/quote" className="btn-outline">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* ── Breadcrumb ──────────────────────────────────────── */}
      <div className="breadcrumb-bar">
        <nav className="breadcrumb">
          <Link href="/">Home</Link>
          <span className="breadcrumb-sep">/</span>
          <span className="breadcrumb-active">Contact</span>
        </nav>
      </div>

      {/* ── Contact Info + Form (light) ─────────────────────── */}
      <section className="section light">
        <div className="section-inner">
          <span className="section-label">Get in Touch</span>
          <h2>
            We&rsquo;re Here to <span>Help</span>
          </h2>
          <p className="section-body">
            Whether you need a quote, have a question about your account, or just
            want to learn more about what we offer &mdash; reach out anytime.
          </p>
          <div className="contact-grid">
            {/* Left — Contact Methods */}
            <div>
              <div className="contact-methods">
                <div className="contact-method">
                  <span className="contact-method-icon">📞</span>
                  <div>
                    <div className="contact-method-label">Phone</div>
                    <div className="contact-method-value">
                      <a href="tel:+13373668550">337.366.8550</a>
                    </div>
                  </div>
                </div>
                <div className="contact-method">
                  <span className="contact-method-icon">✉️</span>
                  <div>
                    <div className="contact-method-label">Email</div>
                    <div className="contact-method-value">
                      <a href="mailto:info@hdprocessing.com">
                        info@hdprocessing.com
                      </a>
                    </div>
                  </div>
                </div>
                <div className="contact-method">
                  <span className="contact-method-icon">📍</span>
                  <div>
                    <div className="contact-method-label">Office</div>
                    <div className="contact-method-value">
                      101 Bradford Lane
                      <br />
                      Youngsville, LA 70592
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="hours-block">
                <div className="hours-block-title">Business Hours</div>
                <div className="hours-row">
                  <span className="day">Monday - Friday</span>
                  <span className="time">8:00 AM - 5:00 PM</span>
                </div>
                <div className="hours-row">
                  <span className="day">Saturday</span>
                  <span className="time">By Appointment</span>
                </div>
                <div className="hours-row">
                  <span className="day">Sunday</span>
                  <span className="time">Closed</span>
                </div>
              </div>

              {/* Map inline on left column */}
              <div className="contact-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3458.3!2d-92.0414!3d30.1035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDA2JzEyLjYiTiA5MsKwMDInMjkuMCJX!5e0!3m2!1sen!2sus!4v1700000000000"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="HD Processing Office Location"
                />
              </div>
            </div>

            {/* Right — Contact Form */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* ── Map Section (dark) ──────────────────────────────── */}
      <section className="section dark">
        <div className="section-inner text-center">
          <span className="section-label center">Our Location</span>
          <h2 className="center">
            Serving <span>Lafayette</span> &amp; All of Acadiana
          </h2>
          <p className="section-body center" style={{ color: 'rgba(255,255,255,.5)' }}>
            Located in Youngsville, just minutes from downtown Lafayette. Serving
            businesses across Acadiana and throughout Louisiana.
          </p>
          <div
            style={{
              marginTop: '32px',
              borderRadius: '16px',
              overflow: 'hidden',
              border: '1px solid var(--border-dk)',
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55300!2d-92.07!3d30.19!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86249d41ec5883cf%3A0x531d9a9ab15a1418!2sHD+Processing!5e0!3m2!1sen!2sus!4v1700000000000"
              width="100%"
              height="400"
              style={{ border: 0, display: 'block' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="HD Processing Location Map"
            />
          </div>
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
