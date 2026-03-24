import Link from 'next/link';
import SupportForm from '@/components/SupportForm';
import FaqAccordion from '@/components/FaqAccordion';

export const revalidate = 60;

export const metadata = {
  title: 'Support — HD Processing | Lafayette, LA',
  description:
    'Get help with your payment processing, terminals, billing, or account. HD Processing offers fast local support in Lafayette, LA.',
  alternates: { canonical: '/support' },
};

const SUPPORT_FAQS = [
  {
    question: 'My terminal isn\'t processing transactions. What should I do?',
    answer:
      'First, restart your terminal by unplugging it for 30 seconds, then plugging it back in. Make sure your internet connection is active. If it still won\'t process, call us at 337.366.8550 and we\'ll walk you through it or dispatch a replacement.',
  },
  {
    question: 'How do I run my end-of-day batch?',
    answer:
      'On most terminals, go to the main menu and select "Batch" or "Settlement." Confirm the totals and press "Yes" to close. If you\'re on a Clover or similar POS, batching happens automatically at a scheduled time. Contact us if you need to change your auto-batch time.',
  },
  {
    question: 'I received a chargeback notice. What are my next steps?',
    answer:
      'Don\'t ignore it — chargebacks have strict response deadlines (usually 7-10 days). Gather your transaction receipt, proof of delivery or service, and any signed agreements. Call us and we\'ll help you file the rebuttal before the deadline.',
  },
  {
    question: 'Can I get a copy of my monthly processing statement?',
    answer:
      'Yes. Your statements are available in your merchant portal. If you don\'t have login credentials, call or email us and we\'ll send your statement directly or help you set up portal access.',
  },
  {
    question: 'How quickly can I get a replacement terminal?',
    answer:
      'For local merchants in the Lafayette area, we can often deliver a replacement the same day or next business day. For shipped equipment, expect 2-3 business days. Call us to arrange the fastest option.',
  },
];

export default function SupportPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero-inner">
          <span className="hero-label">Support</span>
          <h1>
            We&rsquo;re Here to <span>Help.</span>
          </h1>
          <p className="hero-sub">
            Whether it&rsquo;s a terminal issue, a billing question, or a
            chargeback — our local team is ready to help.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="breadcrumb-bar">
        <nav className="breadcrumb">
          <Link href="/">Home</Link>
          <span className="breadcrumb-sep">/</span>
          <span className="breadcrumb-active">Support</span>
        </nav>
      </div>

      {/* Contact Methods (light) */}
      <section className="section light">
        <div className="section-inner">
          <p className="section-label center">Get In Touch</p>
          <h2 className="center">
            Three Ways to <span>Reach Us</span>
          </h2>
          <p className="section-body center">
            Pick the option that works best for you. We&rsquo;re local,
            responsive, and always happy to help.
          </p>

          <div className="support-methods-grid">
            {/* Call */}
            <a href="tel:+13373668550" className="support-method-card">
              <span className="support-method-icon">&#128222;</span>
              <div className="support-method-title">Call Us</div>
              <div className="support-method-desc">
                Speak to a real person in Lafayette.
                <br />
                <strong style={{ color: 'var(--gold)', fontSize: '12px' }}>
                  Fastest
                </strong>
              </div>
              <span className="support-method-action">
                337.366.8550 &rarr;
              </span>
            </a>

            {/* Email */}
            <a
              href="mailto:support@hdprocessing.com"
              className="support-method-card"
            >
              <span className="support-method-icon">&#9993;</span>
              <div className="support-method-title">Email Us</div>
              <div className="support-method-desc">
                Send details and we&rsquo;ll reply promptly.
                <br />
                <strong style={{ color: 'var(--gold)', fontSize: '12px' }}>
                  1 Business Day
                </strong>
              </div>
              <span className="support-method-action">
                support@hdprocessing.com &rarr;
              </span>
            </a>

            {/* Ticket */}
            <a href="#ticket" className="support-method-card">
              <span className="support-method-icon">&#127915;</span>
              <div className="support-method-title">Submit a Ticket</div>
              <div className="support-method-desc">
                Fill out the form below and we&rsquo;ll follow up.
                <br />
                <strong style={{ color: 'var(--gold)', fontSize: '12px' }}>
                  We&rsquo;ll Follow Up
                </strong>
              </div>
              <span className="support-method-action">
                Open form &darr;
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Ticket Form (dark) */}
      <section id="ticket" className="section dark">
        <div className="section-inner" style={{ maxWidth: 720 }}>
          <div className="ticket-form-wrap">
            <h2 className="ticket-form-title">Submit a Support Ticket</h2>
            <p className="ticket-form-sub">
              Fill out the details below and our team will get back to you.
            </p>
            <SupportForm />
          </div>
        </div>
      </section>

      {/* FAQ (light) */}
      <section className="section light">
        <div className="section-inner">
          <p className="section-label center">Common Questions</p>
          <h2 className="center">
            Frequently Asked <span>Questions</span>
          </h2>
          <p className="section-body center">
            Quick answers to the issues we hear most often.
          </p>
          <div style={{ maxWidth: 780, margin: '0 auto' }}>
            <FaqAccordion items={SUPPORT_FAQS} variant="light" />
          </div>
        </div>
      </section>

      {/* Final CTA (gold) */}
      <section className="final-cta">
        <div className="final-cta-inner">
          <h2>Still Need Help?</h2>
          <p>
            Our Lafayette-based support team is standing by. Call us directly
            for the fastest resolution.
          </p>
          <a href="tel:+13373668550" className="btn-black">
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
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            name: 'Support — HD Processing',
            description:
              'Get help with payment processing, terminals, billing, or your account from HD Processing in Lafayette, LA.',
            url: 'https://hdprocessing.com/support',
            mainEntity: {
              '@type': 'Organization',
              name: 'HD Processing',
              telephone: '+1-337-366-8550',
              email: 'support@hdprocessing.com',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Lafayette',
                addressRegion: 'LA',
                addressCountry: 'US',
              },
            },
          }),
        }}
      />
    </>
  );
}
