'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function StickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function checkHero() {
      const hero = document.querySelector('.hero');
      if (!hero) return;
      const rect = hero.getBoundingClientRect();
      // Show sticky bar when hero bottom scrolls above viewport
      setVisible(rect.bottom < 0);
    }

    window.addEventListener('scroll', checkHero, { passive: true });
    // Run once on mount
    checkHero();

    return () => window.removeEventListener('scroll', checkHero);
  }, []);

  return (
    <div className={`sticky-bar${visible ? ' sticky-bar-visible' : ''}`}>
      <a href="tel:+13373668550" className="sticky-bar-call">
        📞 Call Now
      </a>
      <Link href="/quote" className="sticky-bar-quote">
        Get a Free Quote →
      </Link>
    </div>
  );
}
