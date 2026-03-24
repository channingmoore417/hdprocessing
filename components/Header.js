'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setServicesOpen(false);
        setIndustriesOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [drawerOpen]);

  function closeAll() {
    setServicesOpen(false);
    setIndustriesOpen(false);
  }

  function closeDrawer() {
    setDrawerOpen(false);
  }

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        Local Merchant Services <span style={{fontWeight:400,opacity:.7,textTransform:'none',marginLeft:6,letterSpacing:0}}>· Lafayette, Louisiana · <a href="tel:+13373668550">337.366.8550</a></span>
      </div>

      {/* Main Nav */}
      <nav className="hd-nav" id="hdNav" ref={navRef}>
        <Link href="/" className="nav-logo" onClick={closeAll}>
          HD <span>Processing</span>
        </Link>

        <ul className="nav-links">
          {/* Services Dropdown */}
          <li className={`nav-item has-dropdown${servicesOpen ? ' open' : ''}`}>
            <button
              className="nav-link"
              onClick={() => { setServicesOpen(prev => !prev); setIndustriesOpen(false); }}
            >
              Services{' '}
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="nav-dropdown">
              <Link href="/services/credit-card-processing" className="dropdown-item" onClick={closeAll}>
                <span className="di-icon">💳</span>
                <span><strong>Credit Card Processing</strong><em>Transparent rates, no surprises</em></span>
              </Link>
              <Link href="/services/pos-systems" className="dropdown-item" onClick={closeAll}>
                <span className="di-icon">🖥️</span>
                <span><strong>POS Systems</strong><em>Modern hardware, full setup included</em></span>
              </Link>
              <Link href="/services/mobile-payments" className="dropdown-item" onClick={closeAll}>
                <span className="di-icon">📱</span>
                <span><strong>Mobile Payments</strong><em>Accept cards anywhere in Acadiana</em></span>
              </Link>
              <Link href="/services/online-payments" className="dropdown-item" onClick={closeAll}>
                <span className="di-icon">🌐</span>
                <span><strong>Online Payments</strong><em>Ecommerce &amp; payment links</em></span>
              </Link>
            </div>
          </li>

          {/* Industries Dropdown */}
          <li className={`nav-item has-dropdown${industriesOpen ? ' open' : ''}`}>
            <button
              className="nav-link"
              onClick={() => { setIndustriesOpen(prev => !prev); setServicesOpen(false); }}
            >
              Industries{' '}
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="nav-dropdown">
              <Link href="/industries/restaurants" className="dropdown-item" onClick={closeAll}>
                <span className="di-icon">🍽️</span>
                <span><strong>Restaurants</strong><em>Tableside payments, tip adjust</em></span>
              </Link>
              <Link href="/industries/retail" className="dropdown-item" onClick={closeAll}>
                <span className="di-icon">🛍️</span>
                <span><strong>Retail</strong><em>Inventory, multi-lane checkout</em></span>
              </Link>
              <Link href="/industries/services" className="dropdown-item" onClick={closeAll}>
                <span className="di-icon">🔧</span>
                <span><strong>Service Businesses</strong><em>Invoicing, mobile, recurring</em></span>
              </Link>
            </div>
          </li>

          <li className="nav-item"><Link href="/about" className="nav-link" onClick={closeAll}>About</Link></li>
          <li className="nav-item"><Link href="/contact" className="nav-link" onClick={closeAll}>Contact</Link></li>
        </ul>

        <div className="nav-right">
          <a href="tel:+13373668550" className="nav-phone">337.366.8550</a>
          <Link href="/quote" className="nav-cta">Get a Quote</Link>
          <button
            className={`nav-hamburger${drawerOpen ? ' active' : ''}`}
            id="hdHamburger"
            aria-label="Open menu"
            onClick={() => setDrawerOpen(prev => !prev)}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer${drawerOpen ? ' open' : ''}`} id="hdDrawer">
        <div className="drawer-inner">
          <div className="drawer-section">
            <div className="drawer-label">Services</div>
            <Link href="/services/credit-card-processing" className="drawer-link" onClick={closeDrawer}>Credit Card Processing</Link>
            <Link href="/services/pos-systems" className="drawer-link" onClick={closeDrawer}>POS Systems</Link>
            <Link href="/services/mobile-payments" className="drawer-link" onClick={closeDrawer}>Mobile Payments</Link>
            <Link href="/services/online-payments" className="drawer-link" onClick={closeDrawer}>Online Payments</Link>
          </div>
          <div className="drawer-section">
            <div className="drawer-label">Industries</div>
            <Link href="/industries/restaurants" className="drawer-link" onClick={closeDrawer}>Restaurants</Link>
            <Link href="/industries/retail" className="drawer-link" onClick={closeDrawer}>Retail</Link>
            <Link href="/industries/services" className="drawer-link" onClick={closeDrawer}>Service Businesses</Link>
          </div>
          <div className="drawer-section">
            <Link href="/about" className="drawer-link" onClick={closeDrawer}>About</Link>
            <Link href="/contact" className="drawer-link" onClick={closeDrawer}>Contact</Link>
          </div>
          <div className="drawer-ctas">
            <a href="tel:+13373668550" className="drawer-call">📞 337.366.8550</a>
            <Link href="/quote" className="drawer-quote" onClick={closeDrawer}>Get a Free Quote →</Link>
          </div>
        </div>
      </div>
      <div className={`drawer-overlay${drawerOpen ? ' show' : ''}`} onClick={closeDrawer}></div>
    </>
  );
}
