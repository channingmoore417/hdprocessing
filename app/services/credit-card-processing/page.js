import FaqAccordion from '@/components/FaqAccordion'
import Link from 'next/link'

export const revalidate = 60

/* ─── SEO Metadata ─── */
export const metadata = {
  title: 'Credit Card Processing for Lafayette Businesses | HD Processing',
  description:
    'Transparent interchange-plus credit card processing for Lafayette and Acadiana businesses. No hidden fees, same-day funding, and local support. No contracts.',
  alternates: { canonical: 'https://hdprocessing.com/services/credit-card-processing' },
  openGraph: {
    title: 'Credit Card Processing — HD Processing | Lafayette, LA',
    description:
      'Transparent credit card processing for Lafayette businesses. No hidden fees, no long-term contracts.',
    url: 'https://hdprocessing.com/services/credit-card-processing',
    siteName: 'HD Processing',
    locale: 'en_US',
    type: 'website',
  },
}

/* ─── JSON-LD Schema ─── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://hdprocessing.com/services/credit-card-processing#service',
      name: 'Credit Card Processing',
      description:
        'Transparent interchange-plus credit card processing for Lafayette businesses. No hidden fees, no long-term contracts, same-day funding, and local support.',
      provider: {
        '@type': 'LocalBusiness',
        '@id': 'https://hdprocessing.com/#business',
        name: 'HD Processing',
        telephone: '+13373668550',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '1027 Johnston St',
          addressLocality: 'Lafayette',
          addressRegion: 'LA',
          postalCode: '70501',
          addressCountry: 'US',
        },
      },
      areaServed: {
        '@type': 'City',
        name: 'Lafayette',
        containedInPlace: { '@type': 'State', name: 'Louisiana' },
      },
      url: 'https://hdprocessing.com/services/credit-card-processing',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://hdprocessing.com/services/credit-card-processing#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://hdprocessing.com/' },
        { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://hdprocessing.com/services' },
        { '@type': 'ListItem', position: 3, name: 'Credit Card Processing', item: 'https://hdprocessing.com/services/credit-card-processing' },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://hdprocessing.com/services/credit-card-processing#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What credit card processing rates will my Lafayette business actually pay with HD Processing?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'HD Processing uses interchange-plus pricing. You pay the actual interchange rate set by Visa, Mastercard, or the issuing bank, plus a small, fixed markup that we agree on upfront. There are no bundled tiers, no "qualified" vs "non-qualified" games, and no rate increases hidden in fine print. Every line on your monthly statement is transparent and explainable. Most Lafayette businesses we analyze are overpaying by 15–40% with their current processor — we show you the exact savings before you switch.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does HD Processing require a contract or charge cancellation fees?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Every HD Processing merchant account is month-to-month. There is no early termination fee, no liquidated damages clause, and no cancellation penalty — ever. We believe that if we are doing our job right, you will not want to leave. That philosophy has kept us at a 97% retention rate across our Lafayette and Acadiana merchant base. You stay because the rates are fair and the support is real, not because a contract says you have to.',
          },
        },
        {
          '@type': 'Question',
          name: 'How fast will I receive funds from credit card transactions in Lafayette?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'HD Processing offers same-day funding for qualified accounts. Card transactions that settle before the daily cutoff are deposited to your bank account the same business day. For most Lafayette businesses, that means the money from today\'s lunch rush is in your account by tonight. Compare that to the 2–3 business day wait that most national processors impose — that delay can mean the difference between making payroll comfortably and sweating it out over a weekend.',
          },
        },
        {
          '@type': 'Question',
          name: 'What credit card terminals does HD Processing provide for Lafayette businesses?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We provide the terminal or card reader that matches your business setup — countertop units for retail and restaurants, wireless terminals for tableside or curbside, and mobile readers for contractors, food trucks, and service calls. Our Lafayette team comes to your business, installs the hardware, configures it to your merchant account, and trains your staff before we leave. There is no shipping box, no YouTube tutorial, and no setup fee. If a terminal breaks down later, we swap it out — usually the same day.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can HD Processing analyze my current credit card processing statement for free?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Absolutely. Send us or drop off your most recent processing statement and we will do a free, line-by-line analysis. We highlight every hidden fee, every inflated rate tier, and every charge that your current processor is not explaining to you. Then we show you side-by-side what the same transactions would cost with HD Processing. There is no obligation, no pressure, and no sales pitch — just numbers on paper. Most Lafayette business owners who go through this process are surprised by how much they have been overpaying.',
          },
        },
      ],
    },
  ],
}

/* ─── Data ─── */

const problems = [
  {
    title: 'Hidden Fees That Add Up Every Month',
    desc: 'You signed up at "1.79%" but your effective rate is closer to 3.5%. That is because most processors bury PCI non-compliance fees, batch fees, statement fees, and "regulatory" surcharges in the fine print. A Lafayette restaurant owner we onboarded last quarter was paying $387/month in fees that were not part of her original quote. She had no idea until we pulled her statement apart line by line.',
  },
  {
    title: 'Rate Structures Designed to Confuse You',
    desc: 'Tiered pricing — with "qualified," "mid-qualified," and "non-qualified" buckets — is designed so your processor can route most of your transactions into the most expensive tier. You were told you would pay 1.69% but your rewards cards, keyed-in transactions, and corporate cards all get bumped up. The result is a blended rate that is 30–50% higher than what you were quoted, and the statement is written so you cannot tell where the overcharge is happening.',
  },
  {
    title: 'Locked Into a 3-Year Contract You Cannot Escape',
    desc: 'Most national processors lock Lafayette businesses into 3-year agreements with early termination fees between $295 and $495. Some even have liquidated damages clauses that charge you a percentage of your remaining projected revenue. That means even if they raise your rates mid-contract — which they do — you are stuck paying more or writing a check to leave. It is a business model built on trapping you, not earning you.',
  },
  {
    title: 'No Local Support When Your Terminal Goes Down',
    desc: 'It is Friday at 5:30pm. Your dinner rush just started and your terminal is frozen. You call the 1-800 number on the back and get a 45-minute hold queue followed by someone in a different time zone reading from a script. Meanwhile, your staff is turning away customers or writing down card numbers on paper. This happens more than you think — and with a national processor, there is nobody within 500 miles who can actually help you.',
  },
]

const features = [
  {
    icon: '💰',
    title: 'Interchange-Plus Pricing',
    desc: 'You pay the actual interchange rate set by Visa and Mastercard — the same rate that Walmart and Amazon pay — plus a small, fixed markup that never changes. No bundled tiers, no mid-qualified surcharges, and no fine-print rate increases after six months.',
  },
  {
    icon: '⚡',
    title: 'Same-Day Funding',
    desc: 'Transactions settled before the daily cutoff hit your bank account the same business day. No more floating 2–3 days of revenue while your processor sits on your money. For most Lafayette businesses, that means better cash flow and fewer payroll headaches.',
  },
  {
    icon: '💳',
    title: 'Accept Every Major Card',
    desc: 'Visa, Mastercard, American Express, Discover, Apple Pay, Google Pay, Samsung Pay, and contactless tap-to-pay — every way your Acadiana customers want to pay. One merchant account, one statement, one local team to call if anything goes wrong.',
  },
  {
    icon: '📊',
    title: 'Real-Time Reporting Dashboard',
    desc: 'See every transaction, every fee, and every deposit in a clean dashboard you can actually understand — no accounting degree required. Filter by date, card type, or employee. Export reports for your bookkeeper or CPA with one click.',
  },
  {
    icon: '🔒',
    title: 'PCI Compliance Included Free',
    desc: 'We handle your annual PCI compliance at no extra charge. No $79–$129 annual compliance fee, no surprise audit charges, and no non-compliance penalty if you forget to fill out a questionnaire. We manage it for you so one more thing is off your plate.',
  },
  {
    icon: '🛠️',
    title: 'On-Site Setup and Staff Training',
    desc: 'Our Lafayette team comes to your business, installs your terminal or POS hardware, configures your merchant account, and trains your staff — all included. No shipping boxes, no YouTube tutorials, and no extra fee. If something breaks down the road, we come back and swap it out.',
  },
]

const comparisonRows = [
  { feature: 'Pricing Model', typical: 'Tiered / bundled rates', hd: 'Interchange-plus transparency' },
  { feature: 'Contract Length', typical: '3-year lock-in with auto-renew', hd: 'Month-to-month, cancel anytime' },
  { feature: 'Early Termination Fee', typical: '$295–$495 penalty to leave', hd: '$0 — always, no exceptions' },
  { feature: 'PCI Compliance Fee', typical: '$79–$129/year + non-compliance penalties', hd: 'Included free, managed for you' },
  { feature: 'Funding Speed', typical: '2–3 business days standard', hd: 'Same-day for qualified accounts' },
  { feature: 'Customer Support', typical: '1-800 call center, 30+ min hold', hd: 'Local Lafayette team, same-day response' },
  { feature: 'Rate Increases', typical: 'Annual increases buried in notices', hd: 'Rate locked, changes require your approval' },
  { feature: 'Setup & Installation', typical: 'DIY — shipped in a box', hd: 'On-site install + staff training included' },
]

const whoCards = [
  { icon: '🍽️', name: 'Restaurants', href: '/industries/restaurants' },
  { icon: '🏪', name: 'Retail Stores', href: '/industries/retail' },
  { icon: '💆', name: 'Service Businesses', href: '/industries/services' },
  { icon: '🛒', name: 'Online Stores', href: '/industries/online' },
]

const faqItems = [
  {
    question: 'What credit card processing rates will my Lafayette business actually pay with HD Processing?',
    answer:
      'HD Processing uses interchange-plus pricing. You pay the actual interchange rate set by Visa, Mastercard, or the issuing bank, plus a small, fixed markup that we agree on upfront. There are no bundled tiers, no "qualified" vs "non-qualified" games, and no rate increases hidden in fine print. Every line on your monthly statement is transparent and explainable. Most Lafayette businesses we analyze are overpaying by 15–40% with their current processor — we show you the exact savings before you switch.',
  },
  {
    question: 'Does HD Processing require a contract or charge cancellation fees for Lafayette merchants?',
    answer:
      'No. Every HD Processing merchant account is month-to-month. There is no early termination fee, no liquidated damages clause, and no cancellation penalty — ever. We believe that if we are doing our job right, you will not want to leave. That philosophy has kept us at a 97% retention rate across our Lafayette and Acadiana merchant base. You stay because the rates are fair and the support is real, not because a contract says you have to.',
  },
  {
    question: 'How fast will I receive funds from credit card transactions at my Lafayette business?',
    answer:
      "HD Processing offers same-day funding for qualified accounts. Card transactions that settle before the daily cutoff are deposited to your bank account the same business day. For most Lafayette businesses, that means the money from today's lunch rush is in your account by tonight. Compare that to the 2–3 business day wait that most national processors impose — that delay can mean the difference between making payroll comfortably and sweating it out over a weekend.",
  },
  {
    question: 'What credit card terminals and hardware does HD Processing provide in Lafayette?',
    answer:
      'We provide the terminal or card reader that matches your business setup — countertop units for retail and restaurants, wireless terminals for tableside or curbside, and mobile readers for contractors, food trucks, and field service. Our Lafayette team comes to your business, installs the hardware, configures it to your merchant account, and trains your staff before we leave. There is no shipping box, no YouTube tutorial, and no setup fee. If a terminal breaks or needs replacing, we handle it — usually the same day.',
  },
  {
    question: 'Can HD Processing do a free analysis of my current credit card processing statement?',
    answer:
      "Absolutely. Send us or drop off your most recent processing statement and we will do a free, line-by-line analysis. We highlight every hidden fee, every inflated rate tier, and every charge your current processor is not explaining to you. Then we show you side-by-side what the same transactions would cost with HD Processing. There is no obligation, no pressure, and no sales pitch — just numbers on paper. Most Lafayette business owners who go through this process are genuinely surprised by how much they have been overpaying.",
  },
]

/* ─── Page Component ─── */

export default async function CreditCardProcessingPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ═══ HERO ═══ */}
      <section className="hero">
        <div className="section-inner">
          <div className="service-hero-grid">
            {/* Left — Copy */}
            <div>
              <h1>
                Transparent Credit Card{' '}
                <span>Processing</span>
              </h1>
              <p className="hero-sub">
                Most Lafayette business owners are paying 20–40% more than they should on credit card processing — buried in hidden fees, confusing rate tiers, and contracts they never wanted. HD Processing fixes that with interchange-plus pricing you can actually read, same-day funding so your cash flow stays healthy, and a local Acadiana team that picks up the phone when something goes wrong. No long-term contracts, no termination fees, and no 1-800 numbers.
              </p>
            </div>

            {/* Right — Terminal Mockup */}
            <div className="service-hero-mockup">
              <div className="mockup-card">
                <div className="mockup-label">TRANSACTION</div>
                <div className="mockup-row">
                  <span className="label">Merchant</span>
                  <span className="value">Broussard&apos;s Caf&eacute;</span>
                </div>
                <div className="mockup-row">
                  <span className="label">Card</span>
                  <span className="value">Visa &#8226;&#8226;&#8226;&#8226;4242</span>
                </div>
                <div className="mockup-row">
                  <span className="label">Amount</span>
                  <span className="value gold">$47.50</span>
                </div>
                <div className="mockup-row">
                  <span className="label">Status</span>
                  <span className="value green">APPROVED &#10003;</span>
                </div>
                <div className="mockup-row mockup-row-last">
                  <span className="label">Rate</span>
                  <span className="value">2.6% + $0.10</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ BREADCRUMB ═══ */}
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <div className="breadcrumb-inner">
          <Link href="/">Home</Link>
          <span>&rsaquo;</span>
          <Link href="/services/credit-card-processing">Services</Link>
          <span>&rsaquo;</span>
          <span className="current">Credit Card Processing</span>
        </div>
      </nav>

      {/* ═══ PROBLEM SECTION (dark) ═══ */}
      <section className="section dark">
        <div className="section-inner">
          <div className="section-label">Sound Familiar?</div>
          <h2>What&apos;s Wrong With Most <span>Processors</span></h2>

          <div className="problem-grid">
            {problems.map((item, i) => (
              <div key={i} className="problem-card">
                <div className="problem-card-num">0{i + 1}</div>
                <strong>{item.title}</strong>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SOLUTION SECTION (light) ═══ */}
      <section className="section light">
        <div className="section-inner">
          <div className="section-label">The HD Processing Difference</div>
          <h2>Processing That Actually <span>Makes Sense.</span></h2>
          <p className="section-body">
            HD Processing uses interchange-plus pricing — the same transparent model that large national retailers use. You pay the actual interchange rate set by Visa and Mastercard for each transaction, plus a small, fixed markup that we agree on before you sign anything. There are no bundled tiers, no &ldquo;qualified&rdquo; vs &ldquo;non-qualified&rdquo; categories, and no annual rate increases buried in a notice you were supposed to read. Every charge on your monthly statement is clear, explainable, and exactly what you were told it would be.
          </p>
          <p className="section-body">
            And when something does not make sense — or when your terminal freezes during a Saturday lunch rush — you call your local Lafayette rep. Not a 1-800 number. Not a chatbot. A person who knows your business, knows your setup, and can usually resolve the issue the same day. That is why over 500 Acadiana businesses trust HD Processing with their credit card transactions, and why our retention rate is above 97%. We earn your business every single month because there is no contract forcing you to stay.
          </p>
        </div>
      </section>

      {/* ═══ FEATURES GRID (light) ═══ */}
      <section className="section light">
        <div className="section-inner">
          <div className="section-label">What You Get</div>
          <h2>Built for Lafayette <span>Business Owners</span></h2>
          <div className="diff-grid">
            {features.map((item, i) => (
              <div key={i} className="diff-card">
                <div className="diff-icon">{item.icon}</div>
                <strong>{item.title}</strong>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ COMPARISON TABLE (light) ═══ */}
      <section className="section white">
        <div className="section-inner">
          <div className="section-label">See the Difference</div>
          <h2>HD Processing vs. <span>The Other Guys</span></h2>

          <table className="comparison-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Typical Processor</th>
                <th>HD Processing</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, i) => (
                <tr key={i}>
                  <td>{row.feature}</td>
                  <td><span className="comparison-x">&#10007;</span> {row.typical}</td>
                  <td><span className="comparison-check">&#10003;</span> {row.hd}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ═══ WHO IT'S FOR ═══ */}
      <section className="section light">
        <div className="section-inner">
          <div className="section-label">Built For</div>
          <h2>Who Uses HD Processing for <span>Credit Cards?</span></h2>

          <div className="who-grid">
            {whoCards.map((card, i) => (
              <Link key={i} href={card.href} className="who-card">
                <span className="who-card-icon">{card.icon}</span>
                <span className="who-card-name">{card.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ (dark) ═══ */}
      <FaqAccordion
        items={faqItems}
        variant="dark"
        label="Common Questions"
        heading="Credit Card Processing FAQ"
      />

      {/* ═══ FINAL CTA (gold) ═══ */}
      <section className="final-cta">
        <div className="final-cta-inner">
          <h2>Ready to Stop<br />Overpaying?</h2>
          <p>
            Send us your most recent processing statement and we&apos;ll show you line-by-line where the hidden fees are — and exactly what you&apos;d pay with HD Processing. Free analysis, no obligation, takes about 10 minutes.
          </p>
          <Link href="/quote" className="final-cta-btn">
            Get My Free Rate Analysis &rarr;
          </Link>
          <div className="final-cta-sub">No contracts. No commitments. Local Lafayette team.</div>
        </div>
      </section>
    </>
  )
}
