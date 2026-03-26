'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="hd-footer">
      <div className="footer-inner">

        <div className="footer-col footer-brand">
          <div className="footer-logo">HD <span>Processing</span></div>
          <p className="footer-tagline">Local payment processing for Lafayette, LA small businesses. No contracts. Honest pricing. Real support.</p>
          <a href="tel:+13373668550" className="footer-phone">337.366.8550</a>
          <div className="footer-address">1027 Johnston St · Lafayette, LA 70501</div>
          <a href="https://www.google.com/search?q=hd+processing#lrd=0x86249d41ec5883cf:0x531d9a9ab15a1418,1,,,,1" target="_blank" rel="noopener" className="footer-google-badge">
            <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" className="footer-gbadge-logo" />
            <div>
              <div className="footer-gbadge-stars">★★★★★</div>
              <div className="footer-gbadge-text">See our Google Reviews</div>
            </div>
          </a>
        </div>

        <div className="footer-col">
          <div className="footer-col-label">Services</div>
          <Link href="/services/credit-card-processing" className="footer-link">Credit Card Processing</Link>
          <Link href="/services/pos-systems" className="footer-link">POS Systems</Link>
          <Link href="/services/mobile-payments" className="footer-link">Mobile Payments</Link>
          <Link href="/services/online-payments" className="footer-link">Online Payments</Link>
        </div>

        <div className="footer-col">
          <div className="footer-col-label">Industries</div>
          <Link href="/industries/restaurants" className="footer-link">Restaurants</Link>
          <Link href="/industries/retail" className="footer-link">Retail</Link>
          <Link href="/industries/service-businesses" className="footer-link">Service Businesses</Link>
          <Link href="/industries" className="footer-link">All Industries</Link>
        </div>

        <div className="footer-col">
          <div className="footer-col-label">Company</div>
          <Link href="/about" className="footer-link">About Us</Link>
          <Link href="/contact" className="footer-link">Contact</Link>
          <Link href="/quote" className="footer-link">Get a Quote</Link>
          <Link href="/support" className="footer-link">Support</Link>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <span className="footer-copy">&copy; {currentYear} HD Processing. All rights reserved.</span>
          <div className="footer-bottom-links">
            <Link href="/privacy" className="footer-bottom-link">Privacy Policy</Link>
            <Link href="/terms" className="footer-bottom-link">Terms</Link>
          </div>
          <span className="footer-local-tag">📍 Lafayette, Louisiana</span>
        </div>
      </div>
    </footer>
  );
}
