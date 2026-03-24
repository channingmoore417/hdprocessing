import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';

export const revalidate = 60;

export const metadata = {
  title: 'Get a Free Quote — HD Processing | Lafayette, LA',
  description:
    'Request a free, no-obligation payment processing quote from HD Processing. Lower rates, local support, and transparent pricing for Lafayette businesses.',
  alternates: { canonical: '/quote' },
};

export default function QuotePage() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero-inner">
          <span className="hero-label">No Obligation</span>
          <h1>
            Get Your <span>Free</span> Quote
          </h1>
          <p className="hero-sub">
            Tell us about your business and we&rsquo;ll send you a custom rate
            comparison within one business day.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="breadcrumb-bar">
        <nav className="breadcrumb">
          <Link href="/">Home</Link>
          <span className="breadcrumb-sep">/</span>
          <span className="breadcrumb-active">Get a Quote</span>
        </nav>
      </div>

      {/* Form Section */}
      <section className="section light">
        <div className="section-inner" style={{ maxWidth: 660 }}>
          <QuoteForm />
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Get a Free Quote — HD Processing',
            description:
              'Request a free, no-obligation payment processing quote from HD Processing in Lafayette, LA.',
            url: 'https://hdprocessing.com/quote',
            mainEntity: {
              '@type': 'Organization',
              name: 'HD Processing',
              telephone: '+1-337-366-8550',
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
