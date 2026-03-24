'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const googleReviewsUrl =
    'https://www.google.com/search?q=hd+processing#lrd=0x86249d41ec5883cf:0x531d9a9ab15a1418,1,,,,1';
  const googleLogoUrl =
    'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png';

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-col footer-brand">
            <div className="footer-logo">
              <span className="footer-logo-hd">HD</span>
              <span className="footer-logo-text">Processing</span>
            </div>
            <p className="footer-tagline">
              Local payment processing for Louisiana businesses. Lower rates, better service, real people.
            </p>
            <a href="tel:+13373668550" className="footer-phone">
              337.366.8550
            </a>
            <address className="footer-address">
              Lafayette, Louisiana
            </address>
            <a
              href={googleReviewsUrl}
              className="footer-google-reviews"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={googleLogoUrl}
                alt="Google"
                className="footer-google-logo"
                width={92}
                height={30}
              />
              <div className="footer-google-stars">
                <span className="footer-stars">★★★★★</span>
                <span className="footer-reviews-text">5.0 Google Reviews</span>
              </div>
            </a>
          </div>

          {/* Services Column */}
          <div className="footer-col">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links">
              <li>
                <Link href="/services/credit-card-processing" className="footer-link">
                  Credit Card Processing
                </Link>
              </li>
              <li>
                <Link href="/services/pos-systems" className="footer-link">
                  POS Systems
                </Link>
              </li>
              <li>
                <Link href="/services/mobile-payments" className="footer-link">
                  Mobile Payments
                </Link>
              </li>
              <li>
                <Link href="/services/online-payments" className="footer-link">
                  Online Payments
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries Column */}
          <div className="footer-col">
            <h4 className="footer-heading">Industries</h4>
            <ul className="footer-links">
              <li>
                <Link href="/industries/restaurants" className="footer-link">
                  Restaurants
                </Link>
              </li>
              <li>
                <Link href="/industries/retail" className="footer-link">
                  Retail
                </Link>
              </li>
              <li>
                <Link href="/industries/service-businesses" className="footer-link">
                  Service Businesses
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="footer-col">
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-links">
              <li>
                <Link href="/about" className="footer-link">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="footer-link">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/quote" className="footer-link">
                  Get a Quote
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <span className="footer-copyright">
            &copy; {currentYear} HD Processing. All rights reserved.
          </span>
          <div className="footer-bottom-links">
            <Link href="/privacy" className="footer-bottom-link">
              Privacy Policy
            </Link>
            <Link href="/terms" className="footer-bottom-link">
              Terms
            </Link>
            <span className="footer-location-tag">
              📍 Lafayette, Louisiana
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
