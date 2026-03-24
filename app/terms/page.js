import Link from 'next/link';
import LegalToc from '@/components/LegalToc';

export const revalidate = 60;

export const metadata = {
  title: 'Terms of Service — HD Processing | Lafayette, LA',
  description:
    'Read the Terms of Service for HD Processing, a Lafayette, LA payment processing company.',
  alternates: { canonical: '/terms' },
  robots: { index: false, follow: true },
};

const tocItems = [
  { id: 'agreement', label: 'Agreement' },
  { id: 'services', label: 'Services' },
  { id: 'sms-terms', label: 'SMS Terms' },
  { id: 'prohibited-use', label: 'Prohibited Use' },
  { id: 'ip', label: 'IP' },
  { id: 'disclaimer', label: 'Disclaimer' },
  { id: 'liability', label: 'Liability' },
  { id: 'changes', label: 'Changes' },
  { id: 'contact', label: 'Contact' },
];

const tocExtra = [{ href: '/privacy', label: 'Privacy Policy \u2192' }];

export default function TermsPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero-inner">
          <h1>
            Terms of <span>Service</span>
          </h1>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="breadcrumb-bar">
        <nav className="breadcrumb">
          <Link href="/">Home</Link>
          <span className="breadcrumb-sep">/</span>
          <span className="breadcrumb-active">Terms of Service</span>
        </nav>
      </div>

      {/* Content */}
      <section className="section light">
        <div className="section-inner">
          <div className="legal-layout">
            <LegalToc items={tocItems} extraLinks={tocExtra} />

            <div className="legal-content">
              {/* Section 01 — Agreement */}
              <div id="agreement">
                <div className="legal-section-num">Section 01</div>
                <h2>Agreement to Terms</h2>
                <p>
                  By accessing or using the HD Processing website and services, you agree to be
                  bound by these Terms of Service. If you do not agree to all of these terms, you
                  may not access or use our services.
                </p>
                <p>
                  These Terms constitute a legally binding agreement between you and HD Processing,
                  LLC, a Louisiana limited liability company based in Lafayette, LA.
                </p>
              </div>

              {/* Section 02 — Services */}
              <div id="services">
                <div className="legal-section-num">Section 02</div>
                <h2>Services</h2>
                <p>
                  HD Processing provides payment processing solutions, point-of-sale systems, mobile
                  payment capabilities, and related merchant services to businesses. Our services
                  include but are not limited to credit card processing, debit card processing,
                  ecommerce payment gateways, and contactless payment solutions.
                </p>
                <p>
                  We reserve the right to modify, suspend, or discontinue any part of our services
                  at any time with or without notice.
                </p>
              </div>

              {/* Section 03 — SMS Terms */}
              <div id="sms-terms">
                <div className="legal-section-num">Section 03</div>
                <h2>SMS / Text Messaging Terms</h2>
                <p>
                  By opting in to HD Processing SMS communications, you consent to receive text
                  messages from us, including appointment reminders, service updates, promotional
                  offers, and support notifications.
                </p>
                <div className="sms-box">
                  <div className="sms-box-title">SMS Program Details</div>
                  <p><strong>Program Name:</strong> HD Processing Alerts</p>
                  <p><strong>Message Frequency:</strong> Varies; up to 4 messages per month</p>
                  <p><strong>Message &amp; Data Rates:</strong> Standard message and data rates may apply</p>
                  <p><strong>Opt-Out:</strong> Reply STOP to any message to unsubscribe</p>
                  <p><strong>Help:</strong> Reply HELP for assistance or call 337.366.8550</p>
                  <p><strong>Carriers:</strong> T-Mobile, AT&amp;T, Verizon, and all major US carriers supported</p>
                </div>
                <p>
                  You may opt out at any time by texting STOP. After opting out, you will receive a
                  confirmation message and will no longer receive SMS messages from us unless you
                  re-subscribe.
                </p>
              </div>

              {/* Section 04 — Prohibited Use */}
              <div id="prohibited-use">
                <div className="legal-section-num">Section 04</div>
                <h2>Prohibited Use</h2>
                <p>You agree not to use our services for any unlawful purpose or in any way that:</p>
                <ul>
                  <li>Violates any federal, state, or local law or regulation</li>
                  <li>Involves the processing of fraudulent or unauthorized transactions</li>
                  <li>Infringes upon the rights of any third party</li>
                  <li>Transmits harmful code, malware, or any disruptive technology</li>
                  <li>Attempts to gain unauthorized access to our systems or networks</li>
                  <li>Interferes with the proper functioning of our services</li>
                </ul>
              </div>

              {/* Section 05 — IP */}
              <div id="ip">
                <div className="legal-section-num">Section 05</div>
                <h2>Intellectual Property</h2>
                <p>
                  All content, trademarks, logos, and intellectual property displayed on the
                  HD Processing website are the property of HD Processing, LLC or its licensors.
                  You may not reproduce, distribute, modify, or create derivative works from any
                  content without prior written consent.
                </p>
              </div>

              {/* Section 06 — Disclaimer */}
              <div id="disclaimer">
                <div className="legal-section-num">Section 06</div>
                <h2>Disclaimer of Warranties</h2>
                <p>
                  Our services are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo;
                  basis without warranties of any kind, either express or implied, including but not
                  limited to implied warranties of merchantability, fitness for a particular purpose,
                  and non-infringement.
                </p>
                <p>
                  We do not warrant that our services will be uninterrupted, timely, secure, or
                  error-free, or that any defects will be corrected.
                </p>
              </div>

              {/* Section 07 — Liability */}
              <div id="liability">
                <div className="legal-section-num">Section 07</div>
                <h2>Limitation of Liability</h2>
                <p>
                  To the fullest extent permitted by law, HD Processing shall not be liable for any
                  indirect, incidental, special, consequential, or punitive damages arising from
                  your use of or inability to use our services, even if we have been advised of the
                  possibility of such damages.
                </p>
                <p>
                  In no event shall our total liability exceed the amount paid by you to
                  HD Processing in the twelve (12) months preceding the event giving rise to the
                  claim.
                </p>
              </div>

              {/* Section 08 — Changes */}
              <div id="changes">
                <div className="legal-section-num">Section 08</div>
                <h2>Changes to Terms</h2>
                <p>
                  We reserve the right to update or modify these Terms of Service at any time. When
                  we make changes, we will update the effective date at the top of this page. Your
                  continued use of our services after any changes constitutes acceptance of the
                  revised terms.
                </p>
              </div>

              {/* Section 09 — Contact */}
              <div id="contact">
                <div className="legal-section-num">Section 09</div>
                <h2>Contact Us</h2>
                <p>
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="legal-contact-block">
                  <div className="legal-contact-block-title">HD Processing, LLC</div>
                  <div className="legal-contact-row">
                    <span>Phone:</span>
                    <a href="tel:+13373668550">337.366.8550</a>
                  </div>
                  <div className="legal-contact-row">
                    <span>Email:</span>
                    <a href="mailto:info@hdprocessing.com">info@hdprocessing.com</a>
                  </div>
                  <div className="legal-contact-row">
                    <span>Location:</span>
                    <span>Lafayette, Louisiana</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
