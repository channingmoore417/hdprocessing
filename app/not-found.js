import Link from 'next/link';

export const metadata = {
  title: 'Page Not Found — HD Processing',
};

export default function NotFound() {
  return (
    <div className="error-page">
      <div className="error-inner">
        <div className="error-code">404</div>
        <h1 className="error-title">Page Not Found</h1>
        <p className="error-desc">
          The page you&rsquo;re looking for doesn&rsquo;t exist or has been moved. Let&rsquo;s get
          you back on track.
        </p>

        {/* CTA Buttons */}
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/" className="btn-gold">
            Back to Home &rarr;
          </Link>
          <Link href="/support" className="btn-outline">
            Contact Us
          </Link>
        </div>

        {/* Quick Links */}
        <div className="error-links">
          <Link href="/quote" className="error-link">Get a Quote</Link>
          <Link href="/processing" className="error-link">Processing</Link>
          <Link href="/pos-systems" className="error-link">POS Systems</Link>
          <Link href="/mobile-pay" className="error-link">Mobile Pay</Link>
          <Link href="/about" className="error-link">About Us</Link>
          <Link href="/support" className="error-link">Support</Link>
        </div>

        {/* Bottom Info Strip */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 24,
            flexWrap: 'wrap',
            marginTop: 36,
            fontSize: 13,
            color: 'var(--muted)',
          }}
        >
          <a href="tel:+13373668550" style={{ color: 'var(--gold)' }}>337.366.8550</a>
          <Link href="/support" style={{ color: 'var(--gold)' }}>Contact</Link>
          <span>HD Processing</span>
        </div>
      </div>
    </div>
  );
}
