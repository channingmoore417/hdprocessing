import Link from 'next/link';
import LegalToc from '@/components/LegalToc';

export const revalidate = 60;

export const metadata = {
  title: 'Privacy Policy — HD Processing | Lafayette, LA',
  description:
    'Read the Privacy Policy for HD Processing, a Lafayette, LA payment processing company.',
  alternates: { canonical: '/privacy' },
  robots: { index: false, follow: true },
};

const tocItems = [
  { id: 'overview', label: 'Overview' },
  { id: 'what-we-collect', label: 'What We Collect' },
  { id: 'how-we-use-it', label: 'How We Use It' },
  { id: 'sms-communications', label: 'SMS & Communications' },
  { id: 'sharing', label: 'Sharing' },
  { id: 'cookies', label: 'Cookies' },
  { id: 'security', label: 'Security' },
  { id: 'your-rights', label: 'Your Rights' },
  { id: 'children', label: 'Children' },
  { id: 'changes', label: 'Changes' },
  { id: 'contact', label: 'Contact' },
];

const tocExtra = [{ href: '/terms', label: 'Terms of Service \u2192' }];

export default function PrivacyPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero-inner">
          <h1>
            Privacy <span>Policy</span>
          </h1>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="breadcrumb-bar">
        <nav className="breadcrumb">
          <Link href="/">Home</Link>
          <span className="breadcrumb-sep">/</span>
          <span className="breadcrumb-active">Privacy Policy</span>
        </nav>
      </div>

      {/* Content */}
      <section className="section light">
        <div className="section-inner">
          <div className="legal-layout">
            <LegalToc items={tocItems} extraLinks={tocExtra} />

            <div className="legal-content">
              {/* Section 01 — Overview */}
              <div id="overview">
                <div className="legal-section-num">Section 01</div>
                <h2>Overview</h2>
                <div className="highlight-box">
                  <p>
                    <strong>The short version:</strong> We collect only the information we need to
                    serve you. We never sell your data. We use industry-standard security to protect
                    it. You can request deletion at any time.
                  </p>
                </div>
                <p>
                  This Privacy Policy describes how HD Processing, LLC (&ldquo;we,&rdquo;
                  &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects, uses, and protects your
                  personal information when you visit our website or use our services.
                </p>
              </div>

              {/* Section 02 — What We Collect */}
              <div id="what-we-collect">
                <div className="legal-section-num">Section 02</div>
                <h2>What We Collect</h2>
                <p>We may collect the following types of information:</p>
                <ul>
                  <li>
                    <strong>Contact Information:</strong> Name, email address, phone number, and
                    business name when you fill out a form or request a quote
                  </li>
                  <li>
                    <strong>Business Information:</strong> Industry type, monthly processing volume,
                    and current processing details
                  </li>
                  <li>
                    <strong>Technical Data:</strong> IP address, browser type, operating system, and
                    pages visited via cookies and analytics tools
                  </li>
                  <li>
                    <strong>Communication Data:</strong> Records of correspondence when you contact us
                    via phone, email, or web forms
                  </li>
                </ul>
              </div>

              {/* Section 03 — How We Use It */}
              <div id="how-we-use-it">
                <div className="legal-section-num">Section 03</div>
                <h2>How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul>
                  <li>Respond to quote requests and service inquiries</li>
                  <li>Provide and improve our payment processing services</li>
                  <li>Send service-related communications and updates</li>
                  <li>Analyze website traffic and improve user experience</li>
                  <li>Comply with legal obligations and prevent fraud</li>
                  <li>Send promotional offers (only with your consent)</li>
                </ul>
              </div>

              {/* Section 04 — SMS & Communications */}
              <div id="sms-communications">
                <div className="legal-section-num">Section 04</div>
                <h2>SMS &amp; Communications</h2>
                <p>
                  If you opt in to receive SMS messages from HD Processing, we will use your phone
                  number to send appointment reminders, service updates, and promotional offers.
                  Message frequency varies; up to 4 messages per month.
                </p>
                <p>
                  <strong>We do not sell, rent, or share your phone number or SMS consent
                  information with third parties for marketing purposes.</strong>
                </p>
                <p>
                  You may opt out at any time by replying STOP. Standard message and data rates may
                  apply. For help, reply HELP or call 337.366.8550.
                </p>
              </div>

              {/* Section 05 — Sharing */}
              <div id="sharing">
                <div className="legal-section-num">Section 05</div>
                <h2>Information Sharing</h2>
                <p>
                  We do not sell your personal information. We may share your information only in
                  the following circumstances:
                </p>
                <ul>
                  <li>
                    <strong>Service Providers:</strong> With trusted partners who assist us in
                    operating our business (e.g., payment processors, CRM platforms)
                  </li>
                  <li>
                    <strong>Legal Requirements:</strong> When required by law, court order, or
                    government request
                  </li>
                  <li>
                    <strong>Business Transfers:</strong> In connection with a merger, acquisition, or
                    sale of assets
                  </li>
                </ul>
              </div>

              {/* Section 06 — Cookies */}
              <div id="cookies">
                <div className="legal-section-num">Section 06</div>
                <h2>Cookies &amp; Tracking</h2>
                <p>
                  Our website uses cookies and similar tracking technologies to enhance your
                  browsing experience and analyze site traffic. These include:
                </p>
                <ul>
                  <li>
                    <strong>Essential Cookies:</strong> Required for the website to function properly
                  </li>
                  <li>
                    <strong>Analytics Cookies:</strong> Help us understand how visitors interact with
                    our site (e.g., Google Analytics)
                  </li>
                  <li>
                    <strong>Marketing Cookies:</strong> Used to deliver relevant advertisements and
                    track campaign performance
                  </li>
                </ul>
                <p>
                  You can control cookie preferences through your browser settings. Disabling
                  certain cookies may affect site functionality.
                </p>
              </div>

              {/* Section 07 — Security */}
              <div id="security">
                <div className="legal-section-num">Section 07</div>
                <h2>Data Security</h2>
                <p>
                  We implement industry-standard security measures to protect your personal
                  information, including SSL encryption, secure data storage, and access controls.
                  However, no method of electronic transmission or storage is 100% secure, and we
                  cannot guarantee absolute security.
                </p>
              </div>

              {/* Section 08 — Your Rights */}
              <div id="your-rights">
                <div className="legal-section-num">Section 08</div>
                <h2>Your Rights</h2>
                <p>You have the right to:</p>
                <ul>
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your personal data</li>
                  <li>Opt out of marketing communications at any time</li>
                  <li>Withdraw consent for SMS communications by replying STOP</li>
                </ul>
                <p>
                  To exercise any of these rights, please contact us using the information below.
                </p>
              </div>

              {/* Section 09 — Children */}
              <div id="children">
                <div className="legal-section-num">Section 09</div>
                <h2>Children&rsquo;s Privacy</h2>
                <p>
                  Our services are not directed to individuals under the age of 18. We do not
                  knowingly collect personal information from children. If you believe we have
                  collected information from a minor, please contact us immediately and we will
                  take steps to delete it.
                </p>
              </div>

              {/* Section 10 — Changes */}
              <div id="changes">
                <div className="legal-section-num">Section 10</div>
                <h2>Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. When we make changes, we will
                  update the effective date at the top of this page. We encourage you to review this
                  policy periodically for any updates.
                </p>
              </div>

              {/* Section 11 — Contact */}
              <div id="contact">
                <div className="legal-section-num">Section 11</div>
                <h2>Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy or our data practices, please
                  contact us:
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
